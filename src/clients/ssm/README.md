# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SsmClient <a name="aws-cdk-sdk.ssm.SsmClient"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SsmClient.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SsmClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addTagsToResource` <a name="aws-cdk-sdk.ssm.SsmClient.addTagsToResource"></a>

```typescript
public addTagsToResource(input: SsmAddTagsToResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAddTagsToResourceRequest`](#aws-cdk-sdk.ssm.SsmAddTagsToResourceRequest)

---

##### `cancelCommand` <a name="aws-cdk-sdk.ssm.SsmClient.cancelCommand"></a>

```typescript
public cancelCommand(input: SsmCancelCommandRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCancelCommandRequest`](#aws-cdk-sdk.ssm.SsmCancelCommandRequest)

---

##### `cancelMaintenanceWindowExecution` <a name="aws-cdk-sdk.ssm.SsmClient.cancelMaintenanceWindowExecution"></a>

```typescript
public cancelMaintenanceWindowExecution(input: SsmCancelMaintenanceWindowExecutionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCancelMaintenanceWindowExecutionRequest`](#aws-cdk-sdk.ssm.SsmCancelMaintenanceWindowExecutionRequest)

---

##### `createActivation` <a name="aws-cdk-sdk.ssm.SsmClient.createActivation"></a>

```typescript
public createActivation(input: SsmCreateActivationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateActivationRequest`](#aws-cdk-sdk.ssm.SsmCreateActivationRequest)

---

##### `createAssociation` <a name="aws-cdk-sdk.ssm.SsmClient.createAssociation"></a>

```typescript
public createAssociation(input: SsmCreateAssociationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateAssociationRequest`](#aws-cdk-sdk.ssm.SsmCreateAssociationRequest)

---

##### `createAssociationBatch` <a name="aws-cdk-sdk.ssm.SsmClient.createAssociationBatch"></a>

```typescript
public createAssociationBatch(input: SsmCreateAssociationBatchRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequest`](#aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequest)

---

##### `createDocument` <a name="aws-cdk-sdk.ssm.SsmClient.createDocument"></a>

```typescript
public createDocument(input: SsmCreateDocumentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateDocumentRequest`](#aws-cdk-sdk.ssm.SsmCreateDocumentRequest)

---

##### `createMaintenanceWindow` <a name="aws-cdk-sdk.ssm.SsmClient.createMaintenanceWindow"></a>

```typescript
public createMaintenanceWindow(input: SsmCreateMaintenanceWindowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowRequest`](#aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowRequest)

---

##### `createOpsItem` <a name="aws-cdk-sdk.ssm.SsmClient.createOpsItem"></a>

```typescript
public createOpsItem(input: SsmCreateOpsItemRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateOpsItemRequest`](#aws-cdk-sdk.ssm.SsmCreateOpsItemRequest)

---

##### `createPatchBaseline` <a name="aws-cdk-sdk.ssm.SsmClient.createPatchBaseline"></a>

```typescript
public createPatchBaseline(input: SsmCreatePatchBaselineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest)

---

##### `createResourceDataSync` <a name="aws-cdk-sdk.ssm.SsmClient.createResourceDataSync"></a>

```typescript
public createResourceDataSync(input: SsmCreateResourceDataSyncRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateResourceDataSyncRequest`](#aws-cdk-sdk.ssm.SsmCreateResourceDataSyncRequest)

---

##### `deleteActivation` <a name="aws-cdk-sdk.ssm.SsmClient.deleteActivation"></a>

```typescript
public deleteActivation(input: SsmDeleteActivationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeleteActivationRequest`](#aws-cdk-sdk.ssm.SsmDeleteActivationRequest)

---

##### `deleteAssociation` <a name="aws-cdk-sdk.ssm.SsmClient.deleteAssociation"></a>

```typescript
public deleteAssociation(input: SsmDeleteAssociationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeleteAssociationRequest`](#aws-cdk-sdk.ssm.SsmDeleteAssociationRequest)

---

##### `deleteDocument` <a name="aws-cdk-sdk.ssm.SsmClient.deleteDocument"></a>

```typescript
public deleteDocument(input: SsmDeleteDocumentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeleteDocumentRequest`](#aws-cdk-sdk.ssm.SsmDeleteDocumentRequest)

---

##### `deleteInventory` <a name="aws-cdk-sdk.ssm.SsmClient.deleteInventory"></a>

```typescript
public deleteInventory(input: SsmDeleteInventoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeleteInventoryRequest`](#aws-cdk-sdk.ssm.SsmDeleteInventoryRequest)

---

##### `deleteMaintenanceWindow` <a name="aws-cdk-sdk.ssm.SsmClient.deleteMaintenanceWindow"></a>

```typescript
public deleteMaintenanceWindow(input: SsmDeleteMaintenanceWindowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeleteMaintenanceWindowRequest`](#aws-cdk-sdk.ssm.SsmDeleteMaintenanceWindowRequest)

---

##### `deleteParameter` <a name="aws-cdk-sdk.ssm.SsmClient.deleteParameter"></a>

```typescript
public deleteParameter(input: SsmDeleteParameterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeleteParameterRequest`](#aws-cdk-sdk.ssm.SsmDeleteParameterRequest)

---

##### `deleteParameters` <a name="aws-cdk-sdk.ssm.SsmClient.deleteParameters"></a>

```typescript
public deleteParameters(input: SsmDeleteParametersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeleteParametersRequest`](#aws-cdk-sdk.ssm.SsmDeleteParametersRequest)

---

##### `deletePatchBaseline` <a name="aws-cdk-sdk.ssm.SsmClient.deletePatchBaseline"></a>

```typescript
public deletePatchBaseline(input: SsmDeletePatchBaselineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeletePatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmDeletePatchBaselineRequest)

---

##### `deleteResourceDataSync` <a name="aws-cdk-sdk.ssm.SsmClient.deleteResourceDataSync"></a>

```typescript
public deleteResourceDataSync(input: SsmDeleteResourceDataSyncRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeleteResourceDataSyncRequest`](#aws-cdk-sdk.ssm.SsmDeleteResourceDataSyncRequest)

---

##### `deregisterManagedInstance` <a name="aws-cdk-sdk.ssm.SsmClient.deregisterManagedInstance"></a>

```typescript
public deregisterManagedInstance(input: SsmDeregisterManagedInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeregisterManagedInstanceRequest`](#aws-cdk-sdk.ssm.SsmDeregisterManagedInstanceRequest)

---

##### `deregisterPatchBaselineForPatchGroup` <a name="aws-cdk-sdk.ssm.SsmClient.deregisterPatchBaselineForPatchGroup"></a>

```typescript
public deregisterPatchBaselineForPatchGroup(input: SsmDeregisterPatchBaselineForPatchGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeregisterPatchBaselineForPatchGroupRequest`](#aws-cdk-sdk.ssm.SsmDeregisterPatchBaselineForPatchGroupRequest)

---

##### `deregisterTargetFromMaintenanceWindow` <a name="aws-cdk-sdk.ssm.SsmClient.deregisterTargetFromMaintenanceWindow"></a>

```typescript
public deregisterTargetFromMaintenanceWindow(input: SsmDeregisterTargetFromMaintenanceWindowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeregisterTargetFromMaintenanceWindowRequest`](#aws-cdk-sdk.ssm.SsmDeregisterTargetFromMaintenanceWindowRequest)

---

##### `deregisterTaskFromMaintenanceWindow` <a name="aws-cdk-sdk.ssm.SsmClient.deregisterTaskFromMaintenanceWindow"></a>

```typescript
public deregisterTaskFromMaintenanceWindow(input: SsmDeregisterTaskFromMaintenanceWindowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeregisterTaskFromMaintenanceWindowRequest`](#aws-cdk-sdk.ssm.SsmDeregisterTaskFromMaintenanceWindowRequest)

---

##### `describeActivations` <a name="aws-cdk-sdk.ssm.SsmClient.describeActivations"></a>

```typescript
public describeActivations(input: SsmDescribeActivationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeActivationsRequest`](#aws-cdk-sdk.ssm.SsmDescribeActivationsRequest)

---

##### `describeAssociation` <a name="aws-cdk-sdk.ssm.SsmClient.describeAssociation"></a>

```typescript
public describeAssociation(input: SsmDescribeAssociationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeAssociationRequest`](#aws-cdk-sdk.ssm.SsmDescribeAssociationRequest)

---

##### `describeAssociationExecutions` <a name="aws-cdk-sdk.ssm.SsmClient.describeAssociationExecutions"></a>

```typescript
public describeAssociationExecutions(input: SsmDescribeAssociationExecutionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionsRequest`](#aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionsRequest)

---

##### `describeAssociationExecutionTargets` <a name="aws-cdk-sdk.ssm.SsmClient.describeAssociationExecutionTargets"></a>

```typescript
public describeAssociationExecutionTargets(input: SsmDescribeAssociationExecutionTargetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionTargetsRequest`](#aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionTargetsRequest)

---

##### `describeAutomationExecutions` <a name="aws-cdk-sdk.ssm.SsmClient.describeAutomationExecutions"></a>

```typescript
public describeAutomationExecutions(input: SsmDescribeAutomationExecutionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeAutomationExecutionsRequest`](#aws-cdk-sdk.ssm.SsmDescribeAutomationExecutionsRequest)

---

##### `describeAutomationStepExecutions` <a name="aws-cdk-sdk.ssm.SsmClient.describeAutomationStepExecutions"></a>

```typescript
public describeAutomationStepExecutions(input: SsmDescribeAutomationStepExecutionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeAutomationStepExecutionsRequest`](#aws-cdk-sdk.ssm.SsmDescribeAutomationStepExecutionsRequest)

---

##### `describeAvailablePatches` <a name="aws-cdk-sdk.ssm.SsmClient.describeAvailablePatches"></a>

```typescript
public describeAvailablePatches(input: SsmDescribeAvailablePatchesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeAvailablePatchesRequest`](#aws-cdk-sdk.ssm.SsmDescribeAvailablePatchesRequest)

---

##### `describeDocument` <a name="aws-cdk-sdk.ssm.SsmClient.describeDocument"></a>

```typescript
public describeDocument(input: SsmDescribeDocumentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeDocumentRequest`](#aws-cdk-sdk.ssm.SsmDescribeDocumentRequest)

---

##### `describeDocumentPermission` <a name="aws-cdk-sdk.ssm.SsmClient.describeDocumentPermission"></a>

```typescript
public describeDocumentPermission(input: SsmDescribeDocumentPermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeDocumentPermissionRequest`](#aws-cdk-sdk.ssm.SsmDescribeDocumentPermissionRequest)

---

##### `describeEffectiveInstanceAssociations` <a name="aws-cdk-sdk.ssm.SsmClient.describeEffectiveInstanceAssociations"></a>

```typescript
public describeEffectiveInstanceAssociations(input: SsmDescribeEffectiveInstanceAssociationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeEffectiveInstanceAssociationsRequest`](#aws-cdk-sdk.ssm.SsmDescribeEffectiveInstanceAssociationsRequest)

---

##### `describeEffectivePatchesForPatchBaseline` <a name="aws-cdk-sdk.ssm.SsmClient.describeEffectivePatchesForPatchBaseline"></a>

```typescript
public describeEffectivePatchesForPatchBaseline(input: SsmDescribeEffectivePatchesForPatchBaselineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeEffectivePatchesForPatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmDescribeEffectivePatchesForPatchBaselineRequest)

---

##### `describeInstanceAssociationsStatus` <a name="aws-cdk-sdk.ssm.SsmClient.describeInstanceAssociationsStatus"></a>

```typescript
public describeInstanceAssociationsStatus(input: SsmDescribeInstanceAssociationsStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeInstanceAssociationsStatusRequest`](#aws-cdk-sdk.ssm.SsmDescribeInstanceAssociationsStatusRequest)

---

##### `describeInstanceInformation` <a name="aws-cdk-sdk.ssm.SsmClient.describeInstanceInformation"></a>

```typescript
public describeInstanceInformation(input: SsmDescribeInstanceInformationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeInstanceInformationRequest`](#aws-cdk-sdk.ssm.SsmDescribeInstanceInformationRequest)

---

##### `describeInstancePatches` <a name="aws-cdk-sdk.ssm.SsmClient.describeInstancePatches"></a>

```typescript
public describeInstancePatches(input: SsmDescribeInstancePatchesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeInstancePatchesRequest`](#aws-cdk-sdk.ssm.SsmDescribeInstancePatchesRequest)

---

##### `describeInstancePatchStates` <a name="aws-cdk-sdk.ssm.SsmClient.describeInstancePatchStates"></a>

```typescript
public describeInstancePatchStates(input: SsmDescribeInstancePatchStatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesRequest`](#aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesRequest)

---

##### `describeInstancePatchStatesForPatchGroup` <a name="aws-cdk-sdk.ssm.SsmClient.describeInstancePatchStatesForPatchGroup"></a>

```typescript
public describeInstancePatchStatesForPatchGroup(input: SsmDescribeInstancePatchStatesForPatchGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesForPatchGroupRequest`](#aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesForPatchGroupRequest)

---

##### `describeInventoryDeletions` <a name="aws-cdk-sdk.ssm.SsmClient.describeInventoryDeletions"></a>

```typescript
public describeInventoryDeletions(input: SsmDescribeInventoryDeletionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeInventoryDeletionsRequest`](#aws-cdk-sdk.ssm.SsmDescribeInventoryDeletionsRequest)

---

##### `describeMaintenanceWindowExecutions` <a name="aws-cdk-sdk.ssm.SsmClient.describeMaintenanceWindowExecutions"></a>

```typescript
public describeMaintenanceWindowExecutions(input: SsmDescribeMaintenanceWindowExecutionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionsRequest`](#aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionsRequest)

---

##### `describeMaintenanceWindowExecutionTaskInvocations` <a name="aws-cdk-sdk.ssm.SsmClient.describeMaintenanceWindowExecutionTaskInvocations"></a>

```typescript
public describeMaintenanceWindowExecutionTaskInvocations(input: SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest`](#aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest)

---

##### `describeMaintenanceWindowExecutionTasks` <a name="aws-cdk-sdk.ssm.SsmClient.describeMaintenanceWindowExecutionTasks"></a>

```typescript
public describeMaintenanceWindowExecutionTasks(input: SsmDescribeMaintenanceWindowExecutionTasksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTasksRequest`](#aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTasksRequest)

---

##### `describeMaintenanceWindows` <a name="aws-cdk-sdk.ssm.SsmClient.describeMaintenanceWindows"></a>

```typescript
public describeMaintenanceWindows(input: SsmDescribeMaintenanceWindowsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsRequest`](#aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsRequest)

---

##### `describeMaintenanceWindowSchedule` <a name="aws-cdk-sdk.ssm.SsmClient.describeMaintenanceWindowSchedule"></a>

```typescript
public describeMaintenanceWindowSchedule(input: SsmDescribeMaintenanceWindowScheduleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowScheduleRequest`](#aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowScheduleRequest)

---

##### `describeMaintenanceWindowsForTarget` <a name="aws-cdk-sdk.ssm.SsmClient.describeMaintenanceWindowsForTarget"></a>

```typescript
public describeMaintenanceWindowsForTarget(input: SsmDescribeMaintenanceWindowsForTargetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsForTargetRequest`](#aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsForTargetRequest)

---

##### `describeMaintenanceWindowTargets` <a name="aws-cdk-sdk.ssm.SsmClient.describeMaintenanceWindowTargets"></a>

```typescript
public describeMaintenanceWindowTargets(input: SsmDescribeMaintenanceWindowTargetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTargetsRequest`](#aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTargetsRequest)

---

##### `describeMaintenanceWindowTasks` <a name="aws-cdk-sdk.ssm.SsmClient.describeMaintenanceWindowTasks"></a>

```typescript
public describeMaintenanceWindowTasks(input: SsmDescribeMaintenanceWindowTasksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTasksRequest`](#aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTasksRequest)

---

##### `describeOpsItems` <a name="aws-cdk-sdk.ssm.SsmClient.describeOpsItems"></a>

```typescript
public describeOpsItems(input: SsmDescribeOpsItemsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeOpsItemsRequest`](#aws-cdk-sdk.ssm.SsmDescribeOpsItemsRequest)

---

##### `describeParameters` <a name="aws-cdk-sdk.ssm.SsmClient.describeParameters"></a>

```typescript
public describeParameters(input: SsmDescribeParametersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeParametersRequest`](#aws-cdk-sdk.ssm.SsmDescribeParametersRequest)

---

##### `describePatchBaselines` <a name="aws-cdk-sdk.ssm.SsmClient.describePatchBaselines"></a>

```typescript
public describePatchBaselines(input: SsmDescribePatchBaselinesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribePatchBaselinesRequest`](#aws-cdk-sdk.ssm.SsmDescribePatchBaselinesRequest)

---

##### `describePatchGroups` <a name="aws-cdk-sdk.ssm.SsmClient.describePatchGroups"></a>

```typescript
public describePatchGroups(input: SsmDescribePatchGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribePatchGroupsRequest`](#aws-cdk-sdk.ssm.SsmDescribePatchGroupsRequest)

---

##### `describePatchGroupState` <a name="aws-cdk-sdk.ssm.SsmClient.describePatchGroupState"></a>

```typescript
public describePatchGroupState(input: SsmDescribePatchGroupStateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribePatchGroupStateRequest`](#aws-cdk-sdk.ssm.SsmDescribePatchGroupStateRequest)

---

##### `describePatchProperties` <a name="aws-cdk-sdk.ssm.SsmClient.describePatchProperties"></a>

```typescript
public describePatchProperties(input: SsmDescribePatchPropertiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribePatchPropertiesRequest`](#aws-cdk-sdk.ssm.SsmDescribePatchPropertiesRequest)

---

##### `describeSessions` <a name="aws-cdk-sdk.ssm.SsmClient.describeSessions"></a>

```typescript
public describeSessions(input: SsmDescribeSessionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeSessionsRequest`](#aws-cdk-sdk.ssm.SsmDescribeSessionsRequest)

---

##### `fetchAutomationExecution` <a name="aws-cdk-sdk.ssm.SsmClient.fetchAutomationExecution"></a>

```typescript
public fetchAutomationExecution(input: SsmGetAutomationExecutionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetAutomationExecutionRequest`](#aws-cdk-sdk.ssm.SsmGetAutomationExecutionRequest)

---

##### `fetchCalendarState` <a name="aws-cdk-sdk.ssm.SsmClient.fetchCalendarState"></a>

```typescript
public fetchCalendarState(input: SsmGetCalendarStateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetCalendarStateRequest`](#aws-cdk-sdk.ssm.SsmGetCalendarStateRequest)

---

##### `fetchCommandInvocation` <a name="aws-cdk-sdk.ssm.SsmClient.fetchCommandInvocation"></a>

```typescript
public fetchCommandInvocation(input: SsmGetCommandInvocationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetCommandInvocationRequest`](#aws-cdk-sdk.ssm.SsmGetCommandInvocationRequest)

---

##### `fetchConnectionStatus` <a name="aws-cdk-sdk.ssm.SsmClient.fetchConnectionStatus"></a>

```typescript
public fetchConnectionStatus(input: SsmGetConnectionStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetConnectionStatusRequest`](#aws-cdk-sdk.ssm.SsmGetConnectionStatusRequest)

---

##### `fetchDefaultPatchBaseline` <a name="aws-cdk-sdk.ssm.SsmClient.fetchDefaultPatchBaseline"></a>

```typescript
public fetchDefaultPatchBaseline(input: SsmGetDefaultPatchBaselineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetDefaultPatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmGetDefaultPatchBaselineRequest)

---

##### `fetchDeployablePatchSnapshotForInstance` <a name="aws-cdk-sdk.ssm.SsmClient.fetchDeployablePatchSnapshotForInstance"></a>

```typescript
public fetchDeployablePatchSnapshotForInstance(input: SsmGetDeployablePatchSnapshotForInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetDeployablePatchSnapshotForInstanceRequest`](#aws-cdk-sdk.ssm.SsmGetDeployablePatchSnapshotForInstanceRequest)

---

##### `fetchDocument` <a name="aws-cdk-sdk.ssm.SsmClient.fetchDocument"></a>

```typescript
public fetchDocument(input: SsmGetDocumentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetDocumentRequest`](#aws-cdk-sdk.ssm.SsmGetDocumentRequest)

---

##### `fetchInventory` <a name="aws-cdk-sdk.ssm.SsmClient.fetchInventory"></a>

```typescript
public fetchInventory(input: SsmGetInventoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetInventoryRequest`](#aws-cdk-sdk.ssm.SsmGetInventoryRequest)

---

##### `fetchInventorySchema` <a name="aws-cdk-sdk.ssm.SsmClient.fetchInventorySchema"></a>

```typescript
public fetchInventorySchema(input: SsmGetInventorySchemaRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetInventorySchemaRequest`](#aws-cdk-sdk.ssm.SsmGetInventorySchemaRequest)

---

##### `fetchMaintenanceWindow` <a name="aws-cdk-sdk.ssm.SsmClient.fetchMaintenanceWindow"></a>

```typescript
public fetchMaintenanceWindow(input: SsmGetMaintenanceWindowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowRequest)

---

##### `fetchMaintenanceWindowExecution` <a name="aws-cdk-sdk.ssm.SsmClient.fetchMaintenanceWindowExecution"></a>

```typescript
public fetchMaintenanceWindowExecution(input: SsmGetMaintenanceWindowExecutionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionRequest)

---

##### `fetchMaintenanceWindowExecutionTask` <a name="aws-cdk-sdk.ssm.SsmClient.fetchMaintenanceWindowExecutionTask"></a>

```typescript
public fetchMaintenanceWindowExecutionTask(input: SsmGetMaintenanceWindowExecutionTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskRequest)

---

##### `fetchMaintenanceWindowExecutionTaskInvocation` <a name="aws-cdk-sdk.ssm.SsmClient.fetchMaintenanceWindowExecutionTaskInvocation"></a>

```typescript
public fetchMaintenanceWindowExecutionTaskInvocation(input: SsmGetMaintenanceWindowExecutionTaskInvocationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationRequest)

---

##### `fetchMaintenanceWindowTask` <a name="aws-cdk-sdk.ssm.SsmClient.fetchMaintenanceWindowTask"></a>

```typescript
public fetchMaintenanceWindowTask(input: SsmGetMaintenanceWindowTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest)

---

##### `fetchOpsItem` <a name="aws-cdk-sdk.ssm.SsmClient.fetchOpsItem"></a>

```typescript
public fetchOpsItem(input: SsmGetOpsItemRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetOpsItemRequest`](#aws-cdk-sdk.ssm.SsmGetOpsItemRequest)

---

##### `fetchOpsSummary` <a name="aws-cdk-sdk.ssm.SsmClient.fetchOpsSummary"></a>

```typescript
public fetchOpsSummary(input: SsmGetOpsSummaryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetOpsSummaryRequest`](#aws-cdk-sdk.ssm.SsmGetOpsSummaryRequest)

---

##### `fetchParameter` <a name="aws-cdk-sdk.ssm.SsmClient.fetchParameter"></a>

```typescript
public fetchParameter(input: SsmGetParameterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetParameterRequest`](#aws-cdk-sdk.ssm.SsmGetParameterRequest)

---

##### `fetchParameterHistory` <a name="aws-cdk-sdk.ssm.SsmClient.fetchParameterHistory"></a>

```typescript
public fetchParameterHistory(input: SsmGetParameterHistoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetParameterHistoryRequest`](#aws-cdk-sdk.ssm.SsmGetParameterHistoryRequest)

---

##### `fetchParameters` <a name="aws-cdk-sdk.ssm.SsmClient.fetchParameters"></a>

```typescript
public fetchParameters(input: SsmGetParametersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetParametersRequest`](#aws-cdk-sdk.ssm.SsmGetParametersRequest)

---

##### `fetchParametersByPath` <a name="aws-cdk-sdk.ssm.SsmClient.fetchParametersByPath"></a>

```typescript
public fetchParametersByPath(input: SsmGetParametersByPathRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetParametersByPathRequest`](#aws-cdk-sdk.ssm.SsmGetParametersByPathRequest)

---

##### `fetchPatchBaseline` <a name="aws-cdk-sdk.ssm.SsmClient.fetchPatchBaseline"></a>

```typescript
public fetchPatchBaseline(input: SsmGetPatchBaselineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetPatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmGetPatchBaselineRequest)

---

##### `fetchPatchBaselineForPatchGroup` <a name="aws-cdk-sdk.ssm.SsmClient.fetchPatchBaselineForPatchGroup"></a>

```typescript
public fetchPatchBaselineForPatchGroup(input: SsmGetPatchBaselineForPatchGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetPatchBaselineForPatchGroupRequest`](#aws-cdk-sdk.ssm.SsmGetPatchBaselineForPatchGroupRequest)

---

##### `fetchServiceSetting` <a name="aws-cdk-sdk.ssm.SsmClient.fetchServiceSetting"></a>

```typescript
public fetchServiceSetting(input: SsmGetServiceSettingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetServiceSettingRequest`](#aws-cdk-sdk.ssm.SsmGetServiceSettingRequest)

---

##### `labelParameterVersion` <a name="aws-cdk-sdk.ssm.SsmClient.labelParameterVersion"></a>

```typescript
public labelParameterVersion(input: SsmLabelParameterVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmLabelParameterVersionRequest`](#aws-cdk-sdk.ssm.SsmLabelParameterVersionRequest)

---

##### `listAssociations` <a name="aws-cdk-sdk.ssm.SsmClient.listAssociations"></a>

```typescript
public listAssociations(input: SsmListAssociationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListAssociationsRequest`](#aws-cdk-sdk.ssm.SsmListAssociationsRequest)

---

##### `listAssociationVersions` <a name="aws-cdk-sdk.ssm.SsmClient.listAssociationVersions"></a>

```typescript
public listAssociationVersions(input: SsmListAssociationVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListAssociationVersionsRequest`](#aws-cdk-sdk.ssm.SsmListAssociationVersionsRequest)

---

##### `listCommandInvocations` <a name="aws-cdk-sdk.ssm.SsmClient.listCommandInvocations"></a>

```typescript
public listCommandInvocations(input: SsmListCommandInvocationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListCommandInvocationsRequest`](#aws-cdk-sdk.ssm.SsmListCommandInvocationsRequest)

---

##### `listCommands` <a name="aws-cdk-sdk.ssm.SsmClient.listCommands"></a>

```typescript
public listCommands(input: SsmListCommandsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListCommandsRequest`](#aws-cdk-sdk.ssm.SsmListCommandsRequest)

---

##### `listComplianceItems` <a name="aws-cdk-sdk.ssm.SsmClient.listComplianceItems"></a>

```typescript
public listComplianceItems(input: SsmListComplianceItemsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListComplianceItemsRequest`](#aws-cdk-sdk.ssm.SsmListComplianceItemsRequest)

---

##### `listComplianceSummaries` <a name="aws-cdk-sdk.ssm.SsmClient.listComplianceSummaries"></a>

```typescript
public listComplianceSummaries(input: SsmListComplianceSummariesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListComplianceSummariesRequest`](#aws-cdk-sdk.ssm.SsmListComplianceSummariesRequest)

---

##### `listDocuments` <a name="aws-cdk-sdk.ssm.SsmClient.listDocuments"></a>

```typescript
public listDocuments(input: SsmListDocumentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListDocumentsRequest`](#aws-cdk-sdk.ssm.SsmListDocumentsRequest)

---

##### `listDocumentVersions` <a name="aws-cdk-sdk.ssm.SsmClient.listDocumentVersions"></a>

```typescript
public listDocumentVersions(input: SsmListDocumentVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListDocumentVersionsRequest`](#aws-cdk-sdk.ssm.SsmListDocumentVersionsRequest)

---

##### `listInventoryEntries` <a name="aws-cdk-sdk.ssm.SsmClient.listInventoryEntries"></a>

```typescript
public listInventoryEntries(input: SsmListInventoryEntriesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListInventoryEntriesRequest`](#aws-cdk-sdk.ssm.SsmListInventoryEntriesRequest)

---

##### `listResourceComplianceSummaries` <a name="aws-cdk-sdk.ssm.SsmClient.listResourceComplianceSummaries"></a>

```typescript
public listResourceComplianceSummaries(input: SsmListResourceComplianceSummariesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListResourceComplianceSummariesRequest`](#aws-cdk-sdk.ssm.SsmListResourceComplianceSummariesRequest)

---

##### `listResourceDataSync` <a name="aws-cdk-sdk.ssm.SsmClient.listResourceDataSync"></a>

```typescript
public listResourceDataSync(input: SsmListResourceDataSyncRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListResourceDataSyncRequest`](#aws-cdk-sdk.ssm.SsmListResourceDataSyncRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.ssm.SsmClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: SsmListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListTagsForResourceRequest`](#aws-cdk-sdk.ssm.SsmListTagsForResourceRequest)

---

##### `modifyDocumentPermission` <a name="aws-cdk-sdk.ssm.SsmClient.modifyDocumentPermission"></a>

```typescript
public modifyDocumentPermission(input: SsmModifyDocumentPermissionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmModifyDocumentPermissionRequest`](#aws-cdk-sdk.ssm.SsmModifyDocumentPermissionRequest)

---

##### `putComplianceItems` <a name="aws-cdk-sdk.ssm.SsmClient.putComplianceItems"></a>

```typescript
public putComplianceItems(input: SsmPutComplianceItemsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPutComplianceItemsRequest`](#aws-cdk-sdk.ssm.SsmPutComplianceItemsRequest)

---

##### `putInventory` <a name="aws-cdk-sdk.ssm.SsmClient.putInventory"></a>

```typescript
public putInventory(input: SsmPutInventoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPutInventoryRequest`](#aws-cdk-sdk.ssm.SsmPutInventoryRequest)

---

##### `putParameter` <a name="aws-cdk-sdk.ssm.SsmClient.putParameter"></a>

```typescript
public putParameter(input: SsmPutParameterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPutParameterRequest`](#aws-cdk-sdk.ssm.SsmPutParameterRequest)

---

##### `registerDefaultPatchBaseline` <a name="aws-cdk-sdk.ssm.SsmClient.registerDefaultPatchBaseline"></a>

```typescript
public registerDefaultPatchBaseline(input: SsmRegisterDefaultPatchBaselineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmRegisterDefaultPatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmRegisterDefaultPatchBaselineRequest)

---

##### `registerPatchBaselineForPatchGroup` <a name="aws-cdk-sdk.ssm.SsmClient.registerPatchBaselineForPatchGroup"></a>

```typescript
public registerPatchBaselineForPatchGroup(input: SsmRegisterPatchBaselineForPatchGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmRegisterPatchBaselineForPatchGroupRequest`](#aws-cdk-sdk.ssm.SsmRegisterPatchBaselineForPatchGroupRequest)

---

##### `registerTargetWithMaintenanceWindow` <a name="aws-cdk-sdk.ssm.SsmClient.registerTargetWithMaintenanceWindow"></a>

```typescript
public registerTargetWithMaintenanceWindow(input: SsmRegisterTargetWithMaintenanceWindowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmRegisterTargetWithMaintenanceWindowRequest`](#aws-cdk-sdk.ssm.SsmRegisterTargetWithMaintenanceWindowRequest)

---

##### `registerTaskWithMaintenanceWindow` <a name="aws-cdk-sdk.ssm.SsmClient.registerTaskWithMaintenanceWindow"></a>

```typescript
public registerTaskWithMaintenanceWindow(input: SsmRegisterTaskWithMaintenanceWindowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest`](#aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest)

---

##### `removeTagsFromResource` <a name="aws-cdk-sdk.ssm.SsmClient.removeTagsFromResource"></a>

```typescript
public removeTagsFromResource(input: SsmRemoveTagsFromResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmRemoveTagsFromResourceRequest`](#aws-cdk-sdk.ssm.SsmRemoveTagsFromResourceRequest)

---

##### `resetServiceSetting` <a name="aws-cdk-sdk.ssm.SsmClient.resetServiceSetting"></a>

```typescript
public resetServiceSetting(input: SsmResetServiceSettingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResetServiceSettingRequest`](#aws-cdk-sdk.ssm.SsmResetServiceSettingRequest)

---

##### `resumeSession` <a name="aws-cdk-sdk.ssm.SsmClient.resumeSession"></a>

```typescript
public resumeSession(input: SsmResumeSessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResumeSessionRequest`](#aws-cdk-sdk.ssm.SsmResumeSessionRequest)

---

##### `sendAutomationSignal` <a name="aws-cdk-sdk.ssm.SsmClient.sendAutomationSignal"></a>

```typescript
public sendAutomationSignal(input: SsmSendAutomationSignalRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmSendAutomationSignalRequest`](#aws-cdk-sdk.ssm.SsmSendAutomationSignalRequest)

---

##### `sendCommand` <a name="aws-cdk-sdk.ssm.SsmClient.sendCommand"></a>

```typescript
public sendCommand(input: SsmSendCommandRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmSendCommandRequest`](#aws-cdk-sdk.ssm.SsmSendCommandRequest)

---

##### `startAssociationsOnce` <a name="aws-cdk-sdk.ssm.SsmClient.startAssociationsOnce"></a>

```typescript
public startAssociationsOnce(input: SsmStartAssociationsOnceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmStartAssociationsOnceRequest`](#aws-cdk-sdk.ssm.SsmStartAssociationsOnceRequest)

---

##### `startAutomationExecution` <a name="aws-cdk-sdk.ssm.SsmClient.startAutomationExecution"></a>

```typescript
public startAutomationExecution(input: SsmStartAutomationExecutionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmStartAutomationExecutionRequest`](#aws-cdk-sdk.ssm.SsmStartAutomationExecutionRequest)

---

##### `startSession` <a name="aws-cdk-sdk.ssm.SsmClient.startSession"></a>

```typescript
public startSession(input: SsmStartSessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmStartSessionRequest`](#aws-cdk-sdk.ssm.SsmStartSessionRequest)

---

##### `stopAutomationExecution` <a name="aws-cdk-sdk.ssm.SsmClient.stopAutomationExecution"></a>

```typescript
public stopAutomationExecution(input: SsmStopAutomationExecutionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmStopAutomationExecutionRequest`](#aws-cdk-sdk.ssm.SsmStopAutomationExecutionRequest)

---

##### `terminateSession` <a name="aws-cdk-sdk.ssm.SsmClient.terminateSession"></a>

```typescript
public terminateSession(input: SsmTerminateSessionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTerminateSessionRequest`](#aws-cdk-sdk.ssm.SsmTerminateSessionRequest)

---

##### `updateAssociation` <a name="aws-cdk-sdk.ssm.SsmClient.updateAssociation"></a>

```typescript
public updateAssociation(input: SsmUpdateAssociationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateAssociationRequest`](#aws-cdk-sdk.ssm.SsmUpdateAssociationRequest)

---

##### `updateAssociationStatus` <a name="aws-cdk-sdk.ssm.SsmClient.updateAssociationStatus"></a>

```typescript
public updateAssociationStatus(input: SsmUpdateAssociationStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest`](#aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest)

---

##### `updateDocument` <a name="aws-cdk-sdk.ssm.SsmClient.updateDocument"></a>

```typescript
public updateDocument(input: SsmUpdateDocumentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateDocumentRequest`](#aws-cdk-sdk.ssm.SsmUpdateDocumentRequest)

---

##### `updateDocumentDefaultVersion` <a name="aws-cdk-sdk.ssm.SsmClient.updateDocumentDefaultVersion"></a>

```typescript
public updateDocumentDefaultVersion(input: SsmUpdateDocumentDefaultVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateDocumentDefaultVersionRequest`](#aws-cdk-sdk.ssm.SsmUpdateDocumentDefaultVersionRequest)

---

##### `updateMaintenanceWindow` <a name="aws-cdk-sdk.ssm.SsmClient.updateMaintenanceWindow"></a>

```typescript
public updateMaintenanceWindow(input: SsmUpdateMaintenanceWindowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest`](#aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest)

---

##### `updateMaintenanceWindowTarget` <a name="aws-cdk-sdk.ssm.SsmClient.updateMaintenanceWindowTarget"></a>

```typescript
public updateMaintenanceWindowTarget(input: SsmUpdateMaintenanceWindowTargetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetRequest`](#aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetRequest)

---

##### `updateMaintenanceWindowTask` <a name="aws-cdk-sdk.ssm.SsmClient.updateMaintenanceWindowTask"></a>

```typescript
public updateMaintenanceWindowTask(input: SsmUpdateMaintenanceWindowTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest)

---

##### `updateManagedInstanceRole` <a name="aws-cdk-sdk.ssm.SsmClient.updateManagedInstanceRole"></a>

```typescript
public updateManagedInstanceRole(input: SsmUpdateManagedInstanceRoleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateManagedInstanceRoleRequest`](#aws-cdk-sdk.ssm.SsmUpdateManagedInstanceRoleRequest)

---

##### `updateOpsItem` <a name="aws-cdk-sdk.ssm.SsmClient.updateOpsItem"></a>

```typescript
public updateOpsItem(input: SsmUpdateOpsItemRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateOpsItemRequest`](#aws-cdk-sdk.ssm.SsmUpdateOpsItemRequest)

---

##### `updatePatchBaseline` <a name="aws-cdk-sdk.ssm.SsmClient.updatePatchBaseline"></a>

```typescript
public updatePatchBaseline(input: SsmUpdatePatchBaselineRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest)

---

##### `updateResourceDataSync` <a name="aws-cdk-sdk.ssm.SsmClient.updateResourceDataSync"></a>

```typescript
public updateResourceDataSync(input: SsmUpdateResourceDataSyncRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateResourceDataSyncRequest`](#aws-cdk-sdk.ssm.SsmUpdateResourceDataSyncRequest)

---

##### `updateServiceSetting` <a name="aws-cdk-sdk.ssm.SsmClient.updateServiceSetting"></a>

```typescript
public updateServiceSetting(input: SsmUpdateServiceSettingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateServiceSettingRequest`](#aws-cdk-sdk.ssm.SsmUpdateServiceSettingRequest)

---




## Structs <a name="Structs"></a>

### SsmAccountSharingInfo <a name="aws-cdk-sdk.ssm.SsmAccountSharingInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAccountSharingInfo: ssm.SsmAccountSharingInfo = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAccountSharingInfo.property.accountId"></a>

- *Type:* `string`

---

##### `sharedDocumentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAccountSharingInfo.property.sharedDocumentVersion"></a>

- *Type:* `string`

---

### SsmActivation <a name="aws-cdk-sdk.ssm.SsmActivation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmActivation: ssm.SsmActivation = { ... }
```

##### `activationId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmActivation.property.activationId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmActivation.property.createdDate"></a>

- *Type:* `string`

---

##### `defaultInstanceName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmActivation.property.defaultInstanceName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmActivation.property.description"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmActivation.property.expirationDate"></a>

- *Type:* `string`

---

##### `expired`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmActivation.property.expired"></a>

- *Type:* `boolean`

---

##### `iamRole`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmActivation.property.iamRole"></a>

- *Type:* `string`

---

##### `registrationLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmActivation.property.registrationLimit"></a>

- *Type:* `number`

---

##### `registrationsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmActivation.property.registrationsCount"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmActivation.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTag`](#aws-cdk-sdk.ssm.SsmTag)[]

---

### SsmAddTagsToResourceRequest <a name="aws-cdk-sdk.ssm.SsmAddTagsToResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAddTagsToResourceRequest: ssm.SsmAddTagsToResourceRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmAddTagsToResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmAddTagsToResourceRequest.property.resourceType"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmAddTagsToResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTag`](#aws-cdk-sdk.ssm.SsmTag)[]

---

### SsmAddTagsToResourceResult <a name="aws-cdk-sdk.ssm.SsmAddTagsToResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAddTagsToResourceResult: ssm.SsmAddTagsToResourceResult = { ... }
```

### SsmAssociation <a name="aws-cdk-sdk.ssm.SsmAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAssociation: ssm.SsmAssociation = { ... }
```

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociation.property.associationId"></a>

- *Type:* `string`

---

##### `associationName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociation.property.associationName"></a>

- *Type:* `string`

---

##### `associationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociation.property.associationVersion"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociation.property.documentVersion"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociation.property.instanceId"></a>

- *Type:* `string`

---

##### `lastExecutionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociation.property.lastExecutionDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociation.property.name"></a>

- *Type:* `string`

---

##### `overview`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociation.property.overview"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationOverview`](#aws-cdk-sdk.ssm.SsmAssociationOverview)

---

##### `scheduleExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociation.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociation.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

### SsmAssociationDescription <a name="aws-cdk-sdk.ssm.SsmAssociationDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAssociationDescription: ssm.SsmAssociationDescription = { ... }
```

##### `applyOnlyAtCronInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.applyOnlyAtCronInterval"></a>

- *Type:* `boolean`

---

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.associationId"></a>

- *Type:* `string`

---

##### `associationName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.associationName"></a>

- *Type:* `string`

---

##### `associationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.associationVersion"></a>

- *Type:* `string`

---

##### `automationTargetParameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.automationTargetParameterName"></a>

- *Type:* `string`

---

##### `complianceSeverity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.complianceSeverity"></a>

- *Type:* `string`

---

##### `date`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.date"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.documentVersion"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.instanceId"></a>

- *Type:* `string`

---

##### `lastExecutionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.lastExecutionDate"></a>

- *Type:* `string`

---

##### `lastSuccessfulExecutionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.lastSuccessfulExecutionDate"></a>

- *Type:* `string`

---

##### `lastUpdateAssociationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.lastUpdateAssociationDate"></a>

- *Type:* `string`

---

##### `maxConcurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.maxErrors"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.name"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstanceAssociationOutputLocation`](#aws-cdk-sdk.ssm.SsmInstanceAssociationOutputLocation)

---

##### `overview`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.overview"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationOverview`](#aws-cdk-sdk.ssm.SsmAssociationOverview)

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `scheduleExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.status"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationStatus`](#aws-cdk-sdk.ssm.SsmAssociationStatus)

---

##### `syncCompliance`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.syncCompliance"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationDescription.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

### SsmAssociationExecution <a name="aws-cdk-sdk.ssm.SsmAssociationExecution"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAssociationExecution: ssm.SsmAssociationExecution = { ... }
```

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecution.property.associationId"></a>

- *Type:* `string`

---

##### `associationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecution.property.associationVersion"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecution.property.createdTime"></a>

- *Type:* `string`

---

##### `detailedStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecution.property.detailedStatus"></a>

- *Type:* `string`

---

##### `executionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecution.property.executionId"></a>

- *Type:* `string`

---

##### `lastExecutionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecution.property.lastExecutionDate"></a>

- *Type:* `string`

---

##### `resourceCountByStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecution.property.resourceCountByStatus"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecution.property.status"></a>

- *Type:* `string`

---

### SsmAssociationExecutionFilter <a name="aws-cdk-sdk.ssm.SsmAssociationExecutionFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAssociationExecutionFilter: ssm.SsmAssociationExecutionFilter = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecutionFilter.property.key"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecutionFilter.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecutionFilter.property.value"></a>

- *Type:* `string`

---

### SsmAssociationExecutionTarget <a name="aws-cdk-sdk.ssm.SsmAssociationExecutionTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAssociationExecutionTarget: ssm.SsmAssociationExecutionTarget = { ... }
```

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecutionTarget.property.associationId"></a>

- *Type:* `string`

---

##### `associationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecutionTarget.property.associationVersion"></a>

- *Type:* `string`

---

##### `detailedStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecutionTarget.property.detailedStatus"></a>

- *Type:* `string`

---

##### `executionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecutionTarget.property.executionId"></a>

- *Type:* `string`

---

##### `lastExecutionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecutionTarget.property.lastExecutionDate"></a>

- *Type:* `string`

---

##### `outputSource`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecutionTarget.property.outputSource"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmOutputSource`](#aws-cdk-sdk.ssm.SsmOutputSource)

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecutionTarget.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecutionTarget.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecutionTarget.property.status"></a>

- *Type:* `string`

---

### SsmAssociationExecutionTargetsFilter <a name="aws-cdk-sdk.ssm.SsmAssociationExecutionTargetsFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAssociationExecutionTargetsFilter: ssm.SsmAssociationExecutionTargetsFilter = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecutionTargetsFilter.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationExecutionTargetsFilter.property.value"></a>

- *Type:* `string`

---

### SsmAssociationFilter <a name="aws-cdk-sdk.ssm.SsmAssociationFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAssociationFilter: ssm.SsmAssociationFilter = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationFilter.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationFilter.property.value"></a>

- *Type:* `string`

---

### SsmAssociationOverview <a name="aws-cdk-sdk.ssm.SsmAssociationOverview"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAssociationOverview: ssm.SsmAssociationOverview = { ... }
```

##### `associationStatusAggregatedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationOverview.property.associationStatusAggregatedCount"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `detailedStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationOverview.property.detailedStatus"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationOverview.property.status"></a>

- *Type:* `string`

---

### SsmAssociationStatus <a name="aws-cdk-sdk.ssm.SsmAssociationStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAssociationStatus: ssm.SsmAssociationStatus = { ... }
```

##### `date`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationStatus.property.date"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationStatus.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationStatus.property.name"></a>

- *Type:* `string`

---

##### `additionalInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationStatus.property.additionalInfo"></a>

- *Type:* `string`

---

### SsmAssociationVersionInfo <a name="aws-cdk-sdk.ssm.SsmAssociationVersionInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAssociationVersionInfo: ssm.SsmAssociationVersionInfo = { ... }
```

##### `applyOnlyAtCronInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationVersionInfo.property.applyOnlyAtCronInterval"></a>

- *Type:* `boolean`

---

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationVersionInfo.property.associationId"></a>

- *Type:* `string`

---

##### `associationName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationVersionInfo.property.associationName"></a>

- *Type:* `string`

---

##### `associationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationVersionInfo.property.associationVersion"></a>

- *Type:* `string`

---

##### `complianceSeverity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationVersionInfo.property.complianceSeverity"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationVersionInfo.property.createdDate"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationVersionInfo.property.documentVersion"></a>

- *Type:* `string`

---

##### `maxConcurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationVersionInfo.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationVersionInfo.property.maxErrors"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationVersionInfo.property.name"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationVersionInfo.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstanceAssociationOutputLocation`](#aws-cdk-sdk.ssm.SsmInstanceAssociationOutputLocation)

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationVersionInfo.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `scheduleExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationVersionInfo.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `syncCompliance`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationVersionInfo.property.syncCompliance"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAssociationVersionInfo.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

### SsmAttachmentContent <a name="aws-cdk-sdk.ssm.SsmAttachmentContent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAttachmentContent: ssm.SsmAttachmentContent = { ... }
```

##### `hash`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAttachmentContent.property.hash"></a>

- *Type:* `string`

---

##### `hashType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAttachmentContent.property.hashType"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAttachmentContent.property.name"></a>

- *Type:* `string`

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAttachmentContent.property.size"></a>

- *Type:* `number`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAttachmentContent.property.url"></a>

- *Type:* `string`

---

### SsmAttachmentInformation <a name="aws-cdk-sdk.ssm.SsmAttachmentInformation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAttachmentInformation: ssm.SsmAttachmentInformation = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAttachmentInformation.property.name"></a>

- *Type:* `string`

---

### SsmAttachmentsSource <a name="aws-cdk-sdk.ssm.SsmAttachmentsSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAttachmentsSource: ssm.SsmAttachmentsSource = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAttachmentsSource.property.key"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAttachmentsSource.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAttachmentsSource.property.values"></a>

- *Type:* `string`[]

---

### SsmAutomationExecution <a name="aws-cdk-sdk.ssm.SsmAutomationExecution"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAutomationExecution: ssm.SsmAutomationExecution = { ... }
```

##### `automationExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.automationExecutionId"></a>

- *Type:* `string`

---

##### `automationExecutionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.automationExecutionStatus"></a>

- *Type:* `string`

---

##### `currentAction`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.currentAction"></a>

- *Type:* `string`

---

##### `currentStepName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.currentStepName"></a>

- *Type:* `string`

---

##### `documentName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.documentName"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.documentVersion"></a>

- *Type:* `string`

---

##### `executedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.executedBy"></a>

- *Type:* `string`

---

##### `executionEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.executionEndTime"></a>

- *Type:* `string`

---

##### `executionStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.executionStartTime"></a>

- *Type:* `string`

---

##### `failureMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.failureMessage"></a>

- *Type:* `string`

---

##### `maxConcurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.maxErrors"></a>

- *Type:* `string`

---

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.mode"></a>

- *Type:* `string`

---

##### `outputs`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.outputs"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `parentAutomationExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.parentAutomationExecutionId"></a>

- *Type:* `string`

---

##### `progressCounters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.progressCounters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmProgressCounters`](#aws-cdk-sdk.ssm.SsmProgressCounters)

---

##### `resolvedTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.resolvedTargets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResolvedTargets`](#aws-cdk-sdk.ssm.SsmResolvedTargets)

---

##### `stepExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.stepExecutions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmStepExecution`](#aws-cdk-sdk.ssm.SsmStepExecution)[]

---

##### `stepExecutionsTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.stepExecutionsTruncated"></a>

- *Type:* `boolean`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.target"></a>

- *Type:* `string`

---

##### `targetLocations`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.targetLocations"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTargetLocation`](#aws-cdk-sdk.ssm.SsmTargetLocation)[]

---

##### `targetMaps`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.targetMaps"></a>

- *Type:* {[ key: string ]: `string`[]}[]

---

##### `targetParameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.targetParameterName"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecution.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

### SsmAutomationExecutionFilter <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAutomationExecutionFilter: ssm.SsmAutomationExecutionFilter = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionFilter.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionFilter.property.values"></a>

- *Type:* `string`[]

---

### SsmAutomationExecutionMetadata <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmAutomationExecutionMetadata: ssm.SsmAutomationExecutionMetadata = { ... }
```

##### `automationExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.automationExecutionId"></a>

- *Type:* `string`

---

##### `automationExecutionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.automationExecutionStatus"></a>

- *Type:* `string`

---

##### `automationType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.automationType"></a>

- *Type:* `string`

---

##### `currentAction`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.currentAction"></a>

- *Type:* `string`

---

##### `currentStepName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.currentStepName"></a>

- *Type:* `string`

---

##### `documentName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.documentName"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.documentVersion"></a>

- *Type:* `string`

---

##### `executedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.executedBy"></a>

- *Type:* `string`

---

##### `executionEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.executionEndTime"></a>

- *Type:* `string`

---

##### `executionStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.executionStartTime"></a>

- *Type:* `string`

---

##### `failureMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.failureMessage"></a>

- *Type:* `string`

---

##### `logFile`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.logFile"></a>

- *Type:* `string`

---

##### `maxConcurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.maxErrors"></a>

- *Type:* `string`

---

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.mode"></a>

- *Type:* `string`

---

##### `outputs`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.outputs"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `parentAutomationExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.parentAutomationExecutionId"></a>

- *Type:* `string`

---

##### `resolvedTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.resolvedTargets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResolvedTargets`](#aws-cdk-sdk.ssm.SsmResolvedTargets)

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.target"></a>

- *Type:* `string`

---

##### `targetMaps`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.targetMaps"></a>

- *Type:* {[ key: string ]: `string`[]}[]

---

##### `targetParameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.targetParameterName"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

### SsmCancelCommandRequest <a name="aws-cdk-sdk.ssm.SsmCancelCommandRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCancelCommandRequest: ssm.SsmCancelCommandRequest = { ... }
```

##### `commandId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCancelCommandRequest.property.commandId"></a>

- *Type:* `string`

---

##### `instanceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCancelCommandRequest.property.instanceIds"></a>

- *Type:* `string`[]

---

### SsmCancelCommandResult <a name="aws-cdk-sdk.ssm.SsmCancelCommandResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCancelCommandResult: ssm.SsmCancelCommandResult = { ... }
```

### SsmCancelMaintenanceWindowExecutionRequest <a name="aws-cdk-sdk.ssm.SsmCancelMaintenanceWindowExecutionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCancelMaintenanceWindowExecutionRequest: ssm.SsmCancelMaintenanceWindowExecutionRequest = { ... }
```

##### `windowExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCancelMaintenanceWindowExecutionRequest.property.windowExecutionId"></a>

- *Type:* `string`

---

### SsmCancelMaintenanceWindowExecutionResult <a name="aws-cdk-sdk.ssm.SsmCancelMaintenanceWindowExecutionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCancelMaintenanceWindowExecutionResult: ssm.SsmCancelMaintenanceWindowExecutionResult = { ... }
```

##### `windowExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCancelMaintenanceWindowExecutionResult.property.windowExecutionId"></a>

- *Type:* `string`

---

### SsmCloudWatchOutputConfig <a name="aws-cdk-sdk.ssm.SsmCloudWatchOutputConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCloudWatchOutputConfig: ssm.SsmCloudWatchOutputConfig = { ... }
```

##### `cloudWatchLogGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCloudWatchOutputConfig.property.cloudWatchLogGroupName"></a>

- *Type:* `string`

---

##### `cloudWatchOutputEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCloudWatchOutputConfig.property.cloudWatchOutputEnabled"></a>

- *Type:* `boolean`

---

### SsmCommand <a name="aws-cdk-sdk.ssm.SsmCommand"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCommand: ssm.SsmCommand = { ... }
```

##### `cloudWatchOutputConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.cloudWatchOutputConfig"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCloudWatchOutputConfig`](#aws-cdk-sdk.ssm.SsmCloudWatchOutputConfig)

---

##### `commandId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.commandId"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.comment"></a>

- *Type:* `string`

---

##### `completedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.completedCount"></a>

- *Type:* `number`

---

##### `deliveryTimedOutCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.deliveryTimedOutCount"></a>

- *Type:* `number`

---

##### `documentName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.documentName"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.documentVersion"></a>

- *Type:* `string`

---

##### `errorCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.errorCount"></a>

- *Type:* `number`

---

##### `expiresAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.expiresAfter"></a>

- *Type:* `string`

---

##### `instanceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.instanceIds"></a>

- *Type:* `string`[]

---

##### `maxConcurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.maxErrors"></a>

- *Type:* `string`

---

##### `notificationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.notificationConfig"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmNotificationConfig`](#aws-cdk-sdk.ssm.SsmNotificationConfig)

---

##### `outputS3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.outputS3BucketName"></a>

- *Type:* `string`

---

##### `outputS3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.outputS3KeyPrefix"></a>

- *Type:* `string`

---

##### `outputS3Region`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.outputS3Region"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `requestedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.requestedDateTime"></a>

- *Type:* `string`

---

##### `serviceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.serviceRole"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.statusDetails"></a>

- *Type:* `string`

---

##### `targetCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.targetCount"></a>

- *Type:* `number`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommand.property.timeoutSeconds"></a>

- *Type:* `number`

---

### SsmCommandFilter <a name="aws-cdk-sdk.ssm.SsmCommandFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCommandFilter: ssm.SsmCommandFilter = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCommandFilter.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCommandFilter.property.value"></a>

- *Type:* `string`

---

### SsmCommandInvocation <a name="aws-cdk-sdk.ssm.SsmCommandInvocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCommandInvocation: ssm.SsmCommandInvocation = { ... }
```

##### `cloudWatchOutputConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandInvocation.property.cloudWatchOutputConfig"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCloudWatchOutputConfig`](#aws-cdk-sdk.ssm.SsmCloudWatchOutputConfig)

---

##### `commandId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandInvocation.property.commandId"></a>

- *Type:* `string`

---

##### `commandPlugins`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandInvocation.property.commandPlugins"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCommandPlugin`](#aws-cdk-sdk.ssm.SsmCommandPlugin)[]

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandInvocation.property.comment"></a>

- *Type:* `string`

---

##### `documentName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandInvocation.property.documentName"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandInvocation.property.documentVersion"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandInvocation.property.instanceId"></a>

- *Type:* `string`

---

##### `instanceName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandInvocation.property.instanceName"></a>

- *Type:* `string`

---

##### `notificationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandInvocation.property.notificationConfig"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmNotificationConfig`](#aws-cdk-sdk.ssm.SsmNotificationConfig)

---

##### `requestedDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandInvocation.property.requestedDateTime"></a>

- *Type:* `string`

---

##### `serviceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandInvocation.property.serviceRole"></a>

- *Type:* `string`

---

##### `standardErrorUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandInvocation.property.standardErrorUrl"></a>

- *Type:* `string`

---

##### `standardOutputUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandInvocation.property.standardOutputUrl"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandInvocation.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandInvocation.property.statusDetails"></a>

- *Type:* `string`

---

##### `traceOutput`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandInvocation.property.traceOutput"></a>

- *Type:* `string`

---

### SsmCommandPlugin <a name="aws-cdk-sdk.ssm.SsmCommandPlugin"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCommandPlugin: ssm.SsmCommandPlugin = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandPlugin.property.name"></a>

- *Type:* `string`

---

##### `output`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandPlugin.property.output"></a>

- *Type:* `string`

---

##### `outputS3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandPlugin.property.outputS3BucketName"></a>

- *Type:* `string`

---

##### `outputS3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandPlugin.property.outputS3KeyPrefix"></a>

- *Type:* `string`

---

##### `outputS3Region`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandPlugin.property.outputS3Region"></a>

- *Type:* `string`

---

##### `responseCode`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandPlugin.property.responseCode"></a>

- *Type:* `number`

---

##### `responseFinishDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandPlugin.property.responseFinishDateTime"></a>

- *Type:* `string`

---

##### `responseStartDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandPlugin.property.responseStartDateTime"></a>

- *Type:* `string`

---

##### `standardErrorUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandPlugin.property.standardErrorUrl"></a>

- *Type:* `string`

---

##### `standardOutputUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandPlugin.property.standardOutputUrl"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandPlugin.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCommandPlugin.property.statusDetails"></a>

- *Type:* `string`

---

### SsmComplianceExecutionSummary <a name="aws-cdk-sdk.ssm.SsmComplianceExecutionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmComplianceExecutionSummary: ssm.SsmComplianceExecutionSummary = { ... }
```

##### `executionTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceExecutionSummary.property.executionTime"></a>

- *Type:* `string`

---

##### `executionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceExecutionSummary.property.executionId"></a>

- *Type:* `string`

---

##### `executionType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceExecutionSummary.property.executionType"></a>

- *Type:* `string`

---

### SsmComplianceItem <a name="aws-cdk-sdk.ssm.SsmComplianceItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmComplianceItem: ssm.SsmComplianceItem = { ... }
```

##### `complianceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceItem.property.complianceType"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceItem.property.details"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `executionSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceItem.property.executionSummary"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmComplianceExecutionSummary`](#aws-cdk-sdk.ssm.SsmComplianceExecutionSummary)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceItem.property.id"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceItem.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceItem.property.resourceType"></a>

- *Type:* `string`

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceItem.property.severity"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceItem.property.status"></a>

- *Type:* `string`

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceItem.property.title"></a>

- *Type:* `string`

---

### SsmComplianceItemEntry <a name="aws-cdk-sdk.ssm.SsmComplianceItemEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmComplianceItemEntry: ssm.SsmComplianceItemEntry = { ... }
```

##### `severity`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceItemEntry.property.severity"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceItemEntry.property.status"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceItemEntry.property.details"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceItemEntry.property.id"></a>

- *Type:* `string`

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceItemEntry.property.title"></a>

- *Type:* `string`

---

### SsmComplianceStringFilter <a name="aws-cdk-sdk.ssm.SsmComplianceStringFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmComplianceStringFilter: ssm.SsmComplianceStringFilter = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceStringFilter.property.key"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceStringFilter.property.type"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceStringFilter.property.values"></a>

- *Type:* `string`[]

---

### SsmComplianceSummaryItem <a name="aws-cdk-sdk.ssm.SsmComplianceSummaryItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmComplianceSummaryItem: ssm.SsmComplianceSummaryItem = { ... }
```

##### `complianceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceSummaryItem.property.complianceType"></a>

- *Type:* `string`

---

##### `compliantSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceSummaryItem.property.compliantSummary"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCompliantSummary`](#aws-cdk-sdk.ssm.SsmCompliantSummary)

---

##### `nonCompliantSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmComplianceSummaryItem.property.nonCompliantSummary"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmNonCompliantSummary`](#aws-cdk-sdk.ssm.SsmNonCompliantSummary)

---

### SsmCompliantSummary <a name="aws-cdk-sdk.ssm.SsmCompliantSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCompliantSummary: ssm.SsmCompliantSummary = { ... }
```

##### `compliantCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCompliantSummary.property.compliantCount"></a>

- *Type:* `number`

---

##### `severitySummary`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCompliantSummary.property.severitySummary"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmSeveritySummary`](#aws-cdk-sdk.ssm.SsmSeveritySummary)

---

### SsmCreateActivationRequest <a name="aws-cdk-sdk.ssm.SsmCreateActivationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCreateActivationRequest: ssm.SsmCreateActivationRequest = { ... }
```

##### `iamRole`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCreateActivationRequest.property.iamRole"></a>

- *Type:* `string`

---

##### `defaultInstanceName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateActivationRequest.property.defaultInstanceName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateActivationRequest.property.description"></a>

- *Type:* `string`

---

##### `expirationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateActivationRequest.property.expirationDate"></a>

- *Type:* `string`

---

##### `registrationLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateActivationRequest.property.registrationLimit"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateActivationRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTag`](#aws-cdk-sdk.ssm.SsmTag)[]

---

### SsmCreateActivationResult <a name="aws-cdk-sdk.ssm.SsmCreateActivationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCreateActivationResult: ssm.SsmCreateActivationResult = { ... }
```

##### `activationCode`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateActivationResult.property.activationCode"></a>

- *Type:* `string`

---

##### `activationId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateActivationResult.property.activationId"></a>

- *Type:* `string`

---

### SsmCreateAssociationBatchRequest <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCreateAssociationBatchRequest: ssm.SsmCreateAssociationBatchRequest = { ... }
```

##### `entries`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequest.property.entries"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry`](#aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry)[]

---

### SsmCreateAssociationBatchRequestEntry <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCreateAssociationBatchRequestEntry: ssm.SsmCreateAssociationBatchRequestEntry = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry.property.name"></a>

- *Type:* `string`

---

##### `applyOnlyAtCronInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry.property.applyOnlyAtCronInterval"></a>

- *Type:* `boolean`

---

##### `associationName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry.property.associationName"></a>

- *Type:* `string`

---

##### `automationTargetParameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry.property.automationTargetParameterName"></a>

- *Type:* `string`

---

##### `complianceSeverity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry.property.complianceSeverity"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry.property.documentVersion"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry.property.instanceId"></a>

- *Type:* `string`

---

##### `maxConcurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry.property.maxErrors"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstanceAssociationOutputLocation`](#aws-cdk-sdk.ssm.SsmInstanceAssociationOutputLocation)

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `scheduleExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `syncCompliance`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry.property.syncCompliance"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

### SsmCreateAssociationBatchResult <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCreateAssociationBatchResult: ssm.SsmCreateAssociationBatchResult = { ... }
```

##### `failed`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchResult.property.failed"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmFailedCreateAssociation`](#aws-cdk-sdk.ssm.SsmFailedCreateAssociation)[]

---

##### `successful`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationBatchResult.property.successful"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationDescription`](#aws-cdk-sdk.ssm.SsmAssociationDescription)[]

---

### SsmCreateAssociationRequest <a name="aws-cdk-sdk.ssm.SsmCreateAssociationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCreateAssociationRequest: ssm.SsmCreateAssociationRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationRequest.property.name"></a>

- *Type:* `string`

---

##### `applyOnlyAtCronInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationRequest.property.applyOnlyAtCronInterval"></a>

- *Type:* `boolean`

---

##### `associationName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationRequest.property.associationName"></a>

- *Type:* `string`

---

##### `automationTargetParameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationRequest.property.automationTargetParameterName"></a>

- *Type:* `string`

---

##### `complianceSeverity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationRequest.property.complianceSeverity"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationRequest.property.documentVersion"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxConcurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationRequest.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationRequest.property.maxErrors"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationRequest.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstanceAssociationOutputLocation`](#aws-cdk-sdk.ssm.SsmInstanceAssociationOutputLocation)

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationRequest.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `scheduleExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationRequest.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `syncCompliance`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationRequest.property.syncCompliance"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationRequest.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

### SsmCreateAssociationResult <a name="aws-cdk-sdk.ssm.SsmCreateAssociationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCreateAssociationResult: ssm.SsmCreateAssociationResult = { ... }
```

##### `associationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateAssociationResult.property.associationDescription"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationDescription`](#aws-cdk-sdk.ssm.SsmAssociationDescription)

---

### SsmCreateDocumentRequest <a name="aws-cdk-sdk.ssm.SsmCreateDocumentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCreateDocumentRequest: ssm.SsmCreateDocumentRequest = { ... }
```

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCreateDocumentRequest.property.content"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCreateDocumentRequest.property.name"></a>

- *Type:* `string`

---

##### `attachments`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateDocumentRequest.property.attachments"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAttachmentsSource`](#aws-cdk-sdk.ssm.SsmAttachmentsSource)[]

---

##### `documentFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateDocumentRequest.property.documentFormat"></a>

- *Type:* `string`

---

##### `documentType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateDocumentRequest.property.documentType"></a>

- *Type:* `string`

---

##### `requires`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateDocumentRequest.property.requires"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentRequires`](#aws-cdk-sdk.ssm.SsmDocumentRequires)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateDocumentRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTag`](#aws-cdk-sdk.ssm.SsmTag)[]

---

##### `targetType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateDocumentRequest.property.targetType"></a>

- *Type:* `string`

---

##### `versionName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateDocumentRequest.property.versionName"></a>

- *Type:* `string`

---

### SsmCreateDocumentResult <a name="aws-cdk-sdk.ssm.SsmCreateDocumentResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCreateDocumentResult: ssm.SsmCreateDocumentResult = { ... }
```

##### `documentDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateDocumentResult.property.documentDescription"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentDescription`](#aws-cdk-sdk.ssm.SsmDocumentDescription)

---

### SsmCreateMaintenanceWindowRequest <a name="aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCreateMaintenanceWindowRequest: ssm.SsmCreateMaintenanceWindowRequest = { ... }
```

##### `allowUnassociatedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowRequest.property.allowUnassociatedTargets"></a>

- *Type:* `boolean`

---

##### `cutoff`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowRequest.property.cutoff"></a>

- *Type:* `number`

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowRequest.property.duration"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowRequest.property.name"></a>

- *Type:* `string`

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowRequest.property.schedule"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowRequest.property.description"></a>

- *Type:* `string`

---

##### `endDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowRequest.property.endDate"></a>

- *Type:* `string`

---

##### `scheduleOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowRequest.property.scheduleOffset"></a>

- *Type:* `number`

---

##### `scheduleTimezone`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowRequest.property.scheduleTimezone"></a>

- *Type:* `string`

---

##### `startDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowRequest.property.startDate"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTag`](#aws-cdk-sdk.ssm.SsmTag)[]

---

### SsmCreateMaintenanceWindowResult <a name="aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCreateMaintenanceWindowResult: ssm.SsmCreateMaintenanceWindowResult = { ... }
```

##### `windowId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowResult.property.windowId"></a>

- *Type:* `string`

---

### SsmCreateOpsItemRequest <a name="aws-cdk-sdk.ssm.SsmCreateOpsItemRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCreateOpsItemRequest: ssm.SsmCreateOpsItemRequest = { ... }
```

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCreateOpsItemRequest.property.description"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCreateOpsItemRequest.property.source"></a>

- *Type:* `string`

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCreateOpsItemRequest.property.title"></a>

- *Type:* `string`

---

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateOpsItemRequest.property.category"></a>

- *Type:* `string`

---

##### `notifications`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateOpsItemRequest.property.notifications"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmOpsItemNotification`](#aws-cdk-sdk.ssm.SsmOpsItemNotification)[]

---

##### `operationalData`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateOpsItemRequest.property.operationalData"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.ssm.SsmOpsItemDataValue`](#aws-cdk-sdk.ssm.SsmOpsItemDataValue)}

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateOpsItemRequest.property.priority"></a>

- *Type:* `number`

---

##### `relatedOpsItems`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateOpsItemRequest.property.relatedOpsItems"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmRelatedOpsItem`](#aws-cdk-sdk.ssm.SsmRelatedOpsItem)[]

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateOpsItemRequest.property.severity"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateOpsItemRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTag`](#aws-cdk-sdk.ssm.SsmTag)[]

---

### SsmCreateOpsItemResponse <a name="aws-cdk-sdk.ssm.SsmCreateOpsItemResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCreateOpsItemResponse: ssm.SsmCreateOpsItemResponse = { ... }
```

##### `opsItemId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateOpsItemResponse.property.opsItemId"></a>

- *Type:* `string`

---

### SsmCreatePatchBaselineRequest <a name="aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCreatePatchBaselineRequest: ssm.SsmCreatePatchBaselineRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest.property.name"></a>

- *Type:* `string`

---

##### `approvalRules`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest.property.approvalRules"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchRuleGroup`](#aws-cdk-sdk.ssm.SsmPatchRuleGroup)

---

##### `approvedPatches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest.property.approvedPatches"></a>

- *Type:* `string`[]

---

##### `approvedPatchesComplianceLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest.property.approvedPatchesComplianceLevel"></a>

- *Type:* `string`

---

##### `approvedPatchesEnableNonSecurity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest.property.approvedPatchesEnableNonSecurity"></a>

- *Type:* `boolean`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest.property.description"></a>

- *Type:* `string`

---

##### `globalFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest.property.globalFilters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchFilterGroup`](#aws-cdk-sdk.ssm.SsmPatchFilterGroup)

---

##### `operatingSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest.property.operatingSystem"></a>

- *Type:* `string`

---

##### `rejectedPatches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest.property.rejectedPatches"></a>

- *Type:* `string`[]

---

##### `rejectedPatchesAction`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest.property.rejectedPatchesAction"></a>

- *Type:* `string`

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest.property.sources"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchSource`](#aws-cdk-sdk.ssm.SsmPatchSource)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTag`](#aws-cdk-sdk.ssm.SsmTag)[]

---

### SsmCreatePatchBaselineResult <a name="aws-cdk-sdk.ssm.SsmCreatePatchBaselineResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCreatePatchBaselineResult: ssm.SsmCreatePatchBaselineResult = { ... }
```

##### `baselineId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreatePatchBaselineResult.property.baselineId"></a>

- *Type:* `string`

---

### SsmCreateResourceDataSyncRequest <a name="aws-cdk-sdk.ssm.SsmCreateResourceDataSyncRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCreateResourceDataSyncRequest: ssm.SsmCreateResourceDataSyncRequest = { ... }
```

##### `syncName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmCreateResourceDataSyncRequest.property.syncName"></a>

- *Type:* `string`

---

##### `s3Destination`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateResourceDataSyncRequest.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResourceDataSyncS3Destination`](#aws-cdk-sdk.ssm.SsmResourceDataSyncS3Destination)

---

##### `syncSource`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateResourceDataSyncRequest.property.syncSource"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResourceDataSyncSource`](#aws-cdk-sdk.ssm.SsmResourceDataSyncSource)

---

##### `syncType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmCreateResourceDataSyncRequest.property.syncType"></a>

- *Type:* `string`

---

### SsmCreateResourceDataSyncResult <a name="aws-cdk-sdk.ssm.SsmCreateResourceDataSyncResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmCreateResourceDataSyncResult: ssm.SsmCreateResourceDataSyncResult = { ... }
```

### SsmDeleteActivationRequest <a name="aws-cdk-sdk.ssm.SsmDeleteActivationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeleteActivationRequest: ssm.SsmDeleteActivationRequest = { ... }
```

##### `activationId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteActivationRequest.property.activationId"></a>

- *Type:* `string`

---

### SsmDeleteActivationResult <a name="aws-cdk-sdk.ssm.SsmDeleteActivationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeleteActivationResult: ssm.SsmDeleteActivationResult = { ... }
```

### SsmDeleteAssociationRequest <a name="aws-cdk-sdk.ssm.SsmDeleteAssociationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeleteAssociationRequest: ssm.SsmDeleteAssociationRequest = { ... }
```

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteAssociationRequest.property.associationId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteAssociationRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteAssociationRequest.property.name"></a>

- *Type:* `string`

---

### SsmDeleteAssociationResult <a name="aws-cdk-sdk.ssm.SsmDeleteAssociationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeleteAssociationResult: ssm.SsmDeleteAssociationResult = { ... }
```

### SsmDeleteDocumentRequest <a name="aws-cdk-sdk.ssm.SsmDeleteDocumentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeleteDocumentRequest: ssm.SsmDeleteDocumentRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteDocumentRequest.property.name"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteDocumentRequest.property.documentVersion"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteDocumentRequest.property.force"></a>

- *Type:* `boolean`

---

##### `versionName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteDocumentRequest.property.versionName"></a>

- *Type:* `string`

---

### SsmDeleteDocumentResult <a name="aws-cdk-sdk.ssm.SsmDeleteDocumentResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeleteDocumentResult: ssm.SsmDeleteDocumentResult = { ... }
```

### SsmDeleteInventoryRequest <a name="aws-cdk-sdk.ssm.SsmDeleteInventoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeleteInventoryRequest: ssm.SsmDeleteInventoryRequest = { ... }
```

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteInventoryRequest.property.typeName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteInventoryRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `dryRun`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteInventoryRequest.property.dryRun"></a>

- *Type:* `boolean`

---

##### `schemaDeleteOption`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteInventoryRequest.property.schemaDeleteOption"></a>

- *Type:* `string`

---

### SsmDeleteInventoryResult <a name="aws-cdk-sdk.ssm.SsmDeleteInventoryResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeleteInventoryResult: ssm.SsmDeleteInventoryResult = { ... }
```

##### `deletionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteInventoryResult.property.deletionId"></a>

- *Type:* `string`

---

##### `deletionSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteInventoryResult.property.deletionSummary"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryDeletionSummary`](#aws-cdk-sdk.ssm.SsmInventoryDeletionSummary)

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteInventoryResult.property.typeName"></a>

- *Type:* `string`

---

### SsmDeleteMaintenanceWindowRequest <a name="aws-cdk-sdk.ssm.SsmDeleteMaintenanceWindowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeleteMaintenanceWindowRequest: ssm.SsmDeleteMaintenanceWindowRequest = { ... }
```

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteMaintenanceWindowRequest.property.windowId"></a>

- *Type:* `string`

---

### SsmDeleteMaintenanceWindowResult <a name="aws-cdk-sdk.ssm.SsmDeleteMaintenanceWindowResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeleteMaintenanceWindowResult: ssm.SsmDeleteMaintenanceWindowResult = { ... }
```

##### `windowId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteMaintenanceWindowResult.property.windowId"></a>

- *Type:* `string`

---

### SsmDeleteParameterRequest <a name="aws-cdk-sdk.ssm.SsmDeleteParameterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeleteParameterRequest: ssm.SsmDeleteParameterRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteParameterRequest.property.name"></a>

- *Type:* `string`

---

### SsmDeleteParameterResult <a name="aws-cdk-sdk.ssm.SsmDeleteParameterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeleteParameterResult: ssm.SsmDeleteParameterResult = { ... }
```

### SsmDeleteParametersRequest <a name="aws-cdk-sdk.ssm.SsmDeleteParametersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeleteParametersRequest: ssm.SsmDeleteParametersRequest = { ... }
```

##### `names`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteParametersRequest.property.names"></a>

- *Type:* `string`[]

---

### SsmDeleteParametersResult <a name="aws-cdk-sdk.ssm.SsmDeleteParametersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeleteParametersResult: ssm.SsmDeleteParametersResult = { ... }
```

##### `deletedParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteParametersResult.property.deletedParameters"></a>

- *Type:* `string`[]

---

##### `invalidParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteParametersResult.property.invalidParameters"></a>

- *Type:* `string`[]

---

### SsmDeletePatchBaselineRequest <a name="aws-cdk-sdk.ssm.SsmDeletePatchBaselineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeletePatchBaselineRequest: ssm.SsmDeletePatchBaselineRequest = { ... }
```

##### `baselineId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDeletePatchBaselineRequest.property.baselineId"></a>

- *Type:* `string`

---

### SsmDeletePatchBaselineResult <a name="aws-cdk-sdk.ssm.SsmDeletePatchBaselineResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeletePatchBaselineResult: ssm.SsmDeletePatchBaselineResult = { ... }
```

##### `baselineId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeletePatchBaselineResult.property.baselineId"></a>

- *Type:* `string`

---

### SsmDeleteResourceDataSyncRequest <a name="aws-cdk-sdk.ssm.SsmDeleteResourceDataSyncRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeleteResourceDataSyncRequest: ssm.SsmDeleteResourceDataSyncRequest = { ... }
```

##### `syncName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteResourceDataSyncRequest.property.syncName"></a>

- *Type:* `string`

---

##### `syncType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeleteResourceDataSyncRequest.property.syncType"></a>

- *Type:* `string`

---

### SsmDeleteResourceDataSyncResult <a name="aws-cdk-sdk.ssm.SsmDeleteResourceDataSyncResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeleteResourceDataSyncResult: ssm.SsmDeleteResourceDataSyncResult = { ... }
```

### SsmDeregisterManagedInstanceRequest <a name="aws-cdk-sdk.ssm.SsmDeregisterManagedInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeregisterManagedInstanceRequest: ssm.SsmDeregisterManagedInstanceRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDeregisterManagedInstanceRequest.property.instanceId"></a>

- *Type:* `string`

---

### SsmDeregisterManagedInstanceResult <a name="aws-cdk-sdk.ssm.SsmDeregisterManagedInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeregisterManagedInstanceResult: ssm.SsmDeregisterManagedInstanceResult = { ... }
```

### SsmDeregisterPatchBaselineForPatchGroupRequest <a name="aws-cdk-sdk.ssm.SsmDeregisterPatchBaselineForPatchGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeregisterPatchBaselineForPatchGroupRequest: ssm.SsmDeregisterPatchBaselineForPatchGroupRequest = { ... }
```

##### `baselineId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDeregisterPatchBaselineForPatchGroupRequest.property.baselineId"></a>

- *Type:* `string`

---

##### `patchGroup`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDeregisterPatchBaselineForPatchGroupRequest.property.patchGroup"></a>

- *Type:* `string`

---

### SsmDeregisterPatchBaselineForPatchGroupResult <a name="aws-cdk-sdk.ssm.SsmDeregisterPatchBaselineForPatchGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeregisterPatchBaselineForPatchGroupResult: ssm.SsmDeregisterPatchBaselineForPatchGroupResult = { ... }
```

##### `baselineId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeregisterPatchBaselineForPatchGroupResult.property.baselineId"></a>

- *Type:* `string`

---

##### `patchGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeregisterPatchBaselineForPatchGroupResult.property.patchGroup"></a>

- *Type:* `string`

---

### SsmDeregisterTargetFromMaintenanceWindowRequest <a name="aws-cdk-sdk.ssm.SsmDeregisterTargetFromMaintenanceWindowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeregisterTargetFromMaintenanceWindowRequest: ssm.SsmDeregisterTargetFromMaintenanceWindowRequest = { ... }
```

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDeregisterTargetFromMaintenanceWindowRequest.property.windowId"></a>

- *Type:* `string`

---

##### `windowTargetId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDeregisterTargetFromMaintenanceWindowRequest.property.windowTargetId"></a>

- *Type:* `string`

---

##### `safe`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeregisterTargetFromMaintenanceWindowRequest.property.safe"></a>

- *Type:* `boolean`

---

### SsmDeregisterTargetFromMaintenanceWindowResult <a name="aws-cdk-sdk.ssm.SsmDeregisterTargetFromMaintenanceWindowResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeregisterTargetFromMaintenanceWindowResult: ssm.SsmDeregisterTargetFromMaintenanceWindowResult = { ... }
```

##### `windowId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeregisterTargetFromMaintenanceWindowResult.property.windowId"></a>

- *Type:* `string`

---

##### `windowTargetId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeregisterTargetFromMaintenanceWindowResult.property.windowTargetId"></a>

- *Type:* `string`

---

### SsmDeregisterTaskFromMaintenanceWindowRequest <a name="aws-cdk-sdk.ssm.SsmDeregisterTaskFromMaintenanceWindowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeregisterTaskFromMaintenanceWindowRequest: ssm.SsmDeregisterTaskFromMaintenanceWindowRequest = { ... }
```

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDeregisterTaskFromMaintenanceWindowRequest.property.windowId"></a>

- *Type:* `string`

---

##### `windowTaskId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDeregisterTaskFromMaintenanceWindowRequest.property.windowTaskId"></a>

- *Type:* `string`

---

### SsmDeregisterTaskFromMaintenanceWindowResult <a name="aws-cdk-sdk.ssm.SsmDeregisterTaskFromMaintenanceWindowResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDeregisterTaskFromMaintenanceWindowResult: ssm.SsmDeregisterTaskFromMaintenanceWindowResult = { ... }
```

##### `windowId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeregisterTaskFromMaintenanceWindowResult.property.windowId"></a>

- *Type:* `string`

---

##### `windowTaskId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDeregisterTaskFromMaintenanceWindowResult.property.windowTaskId"></a>

- *Type:* `string`

---

### SsmDescribeActivationsFilter <a name="aws-cdk-sdk.ssm.SsmDescribeActivationsFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeActivationsFilter: ssm.SsmDescribeActivationsFilter = { ... }
```

##### `filterKey`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeActivationsFilter.property.filterKey"></a>

- *Type:* `string`

---

##### `filterValues`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeActivationsFilter.property.filterValues"></a>

- *Type:* `string`[]

---

### SsmDescribeActivationsRequest <a name="aws-cdk-sdk.ssm.SsmDescribeActivationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeActivationsRequest: ssm.SsmDescribeActivationsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeActivationsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeActivationsFilter`](#aws-cdk-sdk.ssm.SsmDescribeActivationsFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeActivationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeActivationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeActivationsResult <a name="aws-cdk-sdk.ssm.SsmDescribeActivationsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeActivationsResult: ssm.SsmDescribeActivationsResult = { ... }
```

##### `activationList`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeActivationsResult.property.activationList"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmActivation`](#aws-cdk-sdk.ssm.SsmActivation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeActivationsResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeAssociationExecutionsRequest <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeAssociationExecutionsRequest: ssm.SsmDescribeAssociationExecutionsRequest = { ... }
```

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionsRequest.property.associationId"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationExecutionFilter`](#aws-cdk-sdk.ssm.SsmAssociationExecutionFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeAssociationExecutionsResult <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeAssociationExecutionsResult: ssm.SsmDescribeAssociationExecutionsResult = { ... }
```

##### `associationExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionsResult.property.associationExecutions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationExecution`](#aws-cdk-sdk.ssm.SsmAssociationExecution)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionsResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeAssociationExecutionTargetsRequest <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionTargetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeAssociationExecutionTargetsRequest: ssm.SsmDescribeAssociationExecutionTargetsRequest = { ... }
```

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionTargetsRequest.property.associationId"></a>

- *Type:* `string`

---

##### `executionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionTargetsRequest.property.executionId"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionTargetsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationExecutionTargetsFilter`](#aws-cdk-sdk.ssm.SsmAssociationExecutionTargetsFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionTargetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionTargetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeAssociationExecutionTargetsResult <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionTargetsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeAssociationExecutionTargetsResult: ssm.SsmDescribeAssociationExecutionTargetsResult = { ... }
```

##### `associationExecutionTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionTargetsResult.property.associationExecutionTargets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationExecutionTarget`](#aws-cdk-sdk.ssm.SsmAssociationExecutionTarget)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionTargetsResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeAssociationRequest <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeAssociationRequest: ssm.SsmDescribeAssociationRequest = { ... }
```

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationRequest.property.associationId"></a>

- *Type:* `string`

---

##### `associationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationRequest.property.associationVersion"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationRequest.property.name"></a>

- *Type:* `string`

---

### SsmDescribeAssociationResult <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeAssociationResult: ssm.SsmDescribeAssociationResult = { ... }
```

##### `associationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAssociationResult.property.associationDescription"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationDescription`](#aws-cdk-sdk.ssm.SsmAssociationDescription)

---

### SsmDescribeAutomationExecutionsRequest <a name="aws-cdk-sdk.ssm.SsmDescribeAutomationExecutionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeAutomationExecutionsRequest: ssm.SsmDescribeAutomationExecutionsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAutomationExecutionsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAutomationExecutionFilter`](#aws-cdk-sdk.ssm.SsmAutomationExecutionFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAutomationExecutionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAutomationExecutionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeAutomationExecutionsResult <a name="aws-cdk-sdk.ssm.SsmDescribeAutomationExecutionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeAutomationExecutionsResult: ssm.SsmDescribeAutomationExecutionsResult = { ... }
```

##### `automationExecutionMetadataList`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAutomationExecutionsResult.property.automationExecutionMetadataList"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata`](#aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAutomationExecutionsResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeAutomationStepExecutionsRequest <a name="aws-cdk-sdk.ssm.SsmDescribeAutomationStepExecutionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeAutomationStepExecutionsRequest: ssm.SsmDescribeAutomationStepExecutionsRequest = { ... }
```

##### `automationExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAutomationStepExecutionsRequest.property.automationExecutionId"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAutomationStepExecutionsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmStepExecutionFilter`](#aws-cdk-sdk.ssm.SsmStepExecutionFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAutomationStepExecutionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAutomationStepExecutionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `reverseOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAutomationStepExecutionsRequest.property.reverseOrder"></a>

- *Type:* `boolean`

---

### SsmDescribeAutomationStepExecutionsResult <a name="aws-cdk-sdk.ssm.SsmDescribeAutomationStepExecutionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeAutomationStepExecutionsResult: ssm.SsmDescribeAutomationStepExecutionsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAutomationStepExecutionsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `stepExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAutomationStepExecutionsResult.property.stepExecutions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmStepExecution`](#aws-cdk-sdk.ssm.SsmStepExecution)[]

---

### SsmDescribeAvailablePatchesRequest <a name="aws-cdk-sdk.ssm.SsmDescribeAvailablePatchesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeAvailablePatchesRequest: ssm.SsmDescribeAvailablePatchesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAvailablePatchesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchOrchestratorFilter`](#aws-cdk-sdk.ssm.SsmPatchOrchestratorFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAvailablePatchesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAvailablePatchesRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeAvailablePatchesResult <a name="aws-cdk-sdk.ssm.SsmDescribeAvailablePatchesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeAvailablePatchesResult: ssm.SsmDescribeAvailablePatchesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAvailablePatchesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `patches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeAvailablePatchesResult.property.patches"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatch`](#aws-cdk-sdk.ssm.SsmPatch)[]

---

### SsmDescribeDocumentPermissionRequest <a name="aws-cdk-sdk.ssm.SsmDescribeDocumentPermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeDocumentPermissionRequest: ssm.SsmDescribeDocumentPermissionRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeDocumentPermissionRequest.property.name"></a>

- *Type:* `string`

---

##### `permissionType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeDocumentPermissionRequest.property.permissionType"></a>

- *Type:* `string`

---

### SsmDescribeDocumentPermissionResponse <a name="aws-cdk-sdk.ssm.SsmDescribeDocumentPermissionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeDocumentPermissionResponse: ssm.SsmDescribeDocumentPermissionResponse = { ... }
```

##### `accountIds`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeDocumentPermissionResponse.property.accountIds"></a>

- *Type:* `string`[]

---

##### `accountSharingInfoList`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeDocumentPermissionResponse.property.accountSharingInfoList"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAccountSharingInfo`](#aws-cdk-sdk.ssm.SsmAccountSharingInfo)[]

---

### SsmDescribeDocumentRequest <a name="aws-cdk-sdk.ssm.SsmDescribeDocumentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeDocumentRequest: ssm.SsmDescribeDocumentRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeDocumentRequest.property.name"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeDocumentRequest.property.documentVersion"></a>

- *Type:* `string`

---

##### `versionName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeDocumentRequest.property.versionName"></a>

- *Type:* `string`

---

### SsmDescribeDocumentResult <a name="aws-cdk-sdk.ssm.SsmDescribeDocumentResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeDocumentResult: ssm.SsmDescribeDocumentResult = { ... }
```

##### `document`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeDocumentResult.property.document"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentDescription`](#aws-cdk-sdk.ssm.SsmDocumentDescription)

---

### SsmDescribeEffectiveInstanceAssociationsRequest <a name="aws-cdk-sdk.ssm.SsmDescribeEffectiveInstanceAssociationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeEffectiveInstanceAssociationsRequest: ssm.SsmDescribeEffectiveInstanceAssociationsRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeEffectiveInstanceAssociationsRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeEffectiveInstanceAssociationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeEffectiveInstanceAssociationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeEffectiveInstanceAssociationsResult <a name="aws-cdk-sdk.ssm.SsmDescribeEffectiveInstanceAssociationsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeEffectiveInstanceAssociationsResult: ssm.SsmDescribeEffectiveInstanceAssociationsResult = { ... }
```

##### `associations`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeEffectiveInstanceAssociationsResult.property.associations"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstanceAssociation`](#aws-cdk-sdk.ssm.SsmInstanceAssociation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeEffectiveInstanceAssociationsResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeEffectivePatchesForPatchBaselineRequest <a name="aws-cdk-sdk.ssm.SsmDescribeEffectivePatchesForPatchBaselineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeEffectivePatchesForPatchBaselineRequest: ssm.SsmDescribeEffectivePatchesForPatchBaselineRequest = { ... }
```

##### `baselineId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeEffectivePatchesForPatchBaselineRequest.property.baselineId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeEffectivePatchesForPatchBaselineRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeEffectivePatchesForPatchBaselineRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeEffectivePatchesForPatchBaselineResult <a name="aws-cdk-sdk.ssm.SsmDescribeEffectivePatchesForPatchBaselineResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeEffectivePatchesForPatchBaselineResult: ssm.SsmDescribeEffectivePatchesForPatchBaselineResult = { ... }
```

##### `effectivePatches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeEffectivePatchesForPatchBaselineResult.property.effectivePatches"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmEffectivePatch`](#aws-cdk-sdk.ssm.SsmEffectivePatch)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeEffectivePatchesForPatchBaselineResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeInstanceAssociationsStatusRequest <a name="aws-cdk-sdk.ssm.SsmDescribeInstanceAssociationsStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeInstanceAssociationsStatusRequest: ssm.SsmDescribeInstanceAssociationsStatusRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstanceAssociationsStatusRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstanceAssociationsStatusRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstanceAssociationsStatusRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeInstanceAssociationsStatusResult <a name="aws-cdk-sdk.ssm.SsmDescribeInstanceAssociationsStatusResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeInstanceAssociationsStatusResult: ssm.SsmDescribeInstanceAssociationsStatusResult = { ... }
```

##### `instanceAssociationStatusInfos`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstanceAssociationsStatusResult.property.instanceAssociationStatusInfos"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstanceAssociationStatusInfo`](#aws-cdk-sdk.ssm.SsmInstanceAssociationStatusInfo)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstanceAssociationsStatusResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeInstanceInformationRequest <a name="aws-cdk-sdk.ssm.SsmDescribeInstanceInformationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeInstanceInformationRequest: ssm.SsmDescribeInstanceInformationRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstanceInformationRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstanceInformationStringFilter`](#aws-cdk-sdk.ssm.SsmInstanceInformationStringFilter)[]

---

##### `instanceInformationFilterList`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstanceInformationRequest.property.instanceInformationFilterList"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstanceInformationFilter`](#aws-cdk-sdk.ssm.SsmInstanceInformationFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstanceInformationRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstanceInformationRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeInstanceInformationResult <a name="aws-cdk-sdk.ssm.SsmDescribeInstanceInformationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeInstanceInformationResult: ssm.SsmDescribeInstanceInformationResult = { ... }
```

##### `instanceInformationList`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstanceInformationResult.property.instanceInformationList"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstanceInformation`](#aws-cdk-sdk.ssm.SsmInstanceInformation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstanceInformationResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeInstancePatchesRequest <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeInstancePatchesRequest: ssm.SsmDescribeInstancePatchesRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchesRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchOrchestratorFilter`](#aws-cdk-sdk.ssm.SsmPatchOrchestratorFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchesRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeInstancePatchesResult <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeInstancePatchesResult: ssm.SsmDescribeInstancePatchesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `patches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchesResult.property.patches"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchComplianceData`](#aws-cdk-sdk.ssm.SsmPatchComplianceData)[]

---

### SsmDescribeInstancePatchStatesForPatchGroupRequest <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesForPatchGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeInstancePatchStatesForPatchGroupRequest: ssm.SsmDescribeInstancePatchStatesForPatchGroupRequest = { ... }
```

##### `patchGroup`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesForPatchGroupRequest.property.patchGroup"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesForPatchGroupRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstancePatchStateFilter`](#aws-cdk-sdk.ssm.SsmInstancePatchStateFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesForPatchGroupRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesForPatchGroupRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeInstancePatchStatesForPatchGroupResult <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesForPatchGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeInstancePatchStatesForPatchGroupResult: ssm.SsmDescribeInstancePatchStatesForPatchGroupResult = { ... }
```

##### `instancePatchStates`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesForPatchGroupResult.property.instancePatchStates"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstancePatchState`](#aws-cdk-sdk.ssm.SsmInstancePatchState)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesForPatchGroupResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeInstancePatchStatesRequest <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeInstancePatchStatesRequest: ssm.SsmDescribeInstancePatchStatesRequest = { ... }
```

##### `instanceIds`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesRequest.property.instanceIds"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeInstancePatchStatesResult <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeInstancePatchStatesResult: ssm.SsmDescribeInstancePatchStatesResult = { ... }
```

##### `instancePatchStates`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesResult.property.instancePatchStates"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstancePatchState`](#aws-cdk-sdk.ssm.SsmInstancePatchState)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeInventoryDeletionsRequest <a name="aws-cdk-sdk.ssm.SsmDescribeInventoryDeletionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeInventoryDeletionsRequest: ssm.SsmDescribeInventoryDeletionsRequest = { ... }
```

##### `deletionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInventoryDeletionsRequest.property.deletionId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInventoryDeletionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInventoryDeletionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeInventoryDeletionsResult <a name="aws-cdk-sdk.ssm.SsmDescribeInventoryDeletionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeInventoryDeletionsResult: ssm.SsmDescribeInventoryDeletionsResult = { ... }
```

##### `inventoryDeletions`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInventoryDeletionsResult.property.inventoryDeletions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryDeletionStatusItem`](#aws-cdk-sdk.ssm.SsmInventoryDeletionStatusItem)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeInventoryDeletionsResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeMaintenanceWindowExecutionsRequest <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeMaintenanceWindowExecutionsRequest: ssm.SsmDescribeMaintenanceWindowExecutionsRequest = { ... }
```

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionsRequest.property.windowId"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowFilter`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeMaintenanceWindowExecutionsResult <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeMaintenanceWindowExecutionsResult: ssm.SsmDescribeMaintenanceWindowExecutionsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `windowExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionsResult.property.windowExecutions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowExecution`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowExecution)[]

---

### SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeMaintenanceWindowExecutionTaskInvocationsRequest: ssm.SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest = { ... }
```

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest.property.taskId"></a>

- *Type:* `string`

---

##### `windowExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest.property.windowExecutionId"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowFilter`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeMaintenanceWindowExecutionTaskInvocationsResult <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTaskInvocationsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeMaintenanceWindowExecutionTaskInvocationsResult: ssm.SsmDescribeMaintenanceWindowExecutionTaskInvocationsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTaskInvocationsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `windowExecutionTaskInvocationIdentities`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTaskInvocationsResult.property.windowExecutionTaskInvocationIdentities"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity)[]

---

### SsmDescribeMaintenanceWindowExecutionTasksRequest <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTasksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeMaintenanceWindowExecutionTasksRequest: ssm.SsmDescribeMaintenanceWindowExecutionTasksRequest = { ... }
```

##### `windowExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTasksRequest.property.windowExecutionId"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTasksRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowFilter`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTasksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTasksRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeMaintenanceWindowExecutionTasksResult <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTasksResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeMaintenanceWindowExecutionTasksResult: ssm.SsmDescribeMaintenanceWindowExecutionTasksResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTasksResult.property.nextToken"></a>

- *Type:* `string`

---

##### `windowExecutionTaskIdentities`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTasksResult.property.windowExecutionTaskIdentities"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskIdentity`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskIdentity)[]

---

### SsmDescribeMaintenanceWindowScheduleRequest <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowScheduleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeMaintenanceWindowScheduleRequest: ssm.SsmDescribeMaintenanceWindowScheduleRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowScheduleRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchOrchestratorFilter`](#aws-cdk-sdk.ssm.SsmPatchOrchestratorFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowScheduleRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowScheduleRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowScheduleRequest.property.resourceType"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowScheduleRequest.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

##### `windowId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowScheduleRequest.property.windowId"></a>

- *Type:* `string`

---

### SsmDescribeMaintenanceWindowScheduleResult <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowScheduleResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeMaintenanceWindowScheduleResult: ssm.SsmDescribeMaintenanceWindowScheduleResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowScheduleResult.property.nextToken"></a>

- *Type:* `string`

---

##### `scheduledWindowExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowScheduleResult.property.scheduledWindowExecutions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmScheduledWindowExecution`](#aws-cdk-sdk.ssm.SsmScheduledWindowExecution)[]

---

### SsmDescribeMaintenanceWindowsForTargetRequest <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsForTargetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeMaintenanceWindowsForTargetRequest: ssm.SsmDescribeMaintenanceWindowsForTargetRequest = { ... }
```

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsForTargetRequest.property.resourceType"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsForTargetRequest.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsForTargetRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsForTargetRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeMaintenanceWindowsForTargetResult <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsForTargetResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeMaintenanceWindowsForTargetResult: ssm.SsmDescribeMaintenanceWindowsForTargetResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsForTargetResult.property.nextToken"></a>

- *Type:* `string`

---

##### `windowIdentities`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsForTargetResult.property.windowIdentities"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentityForTarget`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentityForTarget)[]

---

### SsmDescribeMaintenanceWindowsRequest <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeMaintenanceWindowsRequest: ssm.SsmDescribeMaintenanceWindowsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowFilter`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeMaintenanceWindowsResult <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeMaintenanceWindowsResult: ssm.SsmDescribeMaintenanceWindowsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `windowIdentities`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsResult.property.windowIdentities"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentity`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentity)[]

---

### SsmDescribeMaintenanceWindowTargetsRequest <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTargetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeMaintenanceWindowTargetsRequest: ssm.SsmDescribeMaintenanceWindowTargetsRequest = { ... }
```

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTargetsRequest.property.windowId"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTargetsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowFilter`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTargetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTargetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeMaintenanceWindowTargetsResult <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTargetsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeMaintenanceWindowTargetsResult: ssm.SsmDescribeMaintenanceWindowTargetsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTargetsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTargetsResult.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowTarget`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowTarget)[]

---

### SsmDescribeMaintenanceWindowTasksRequest <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTasksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeMaintenanceWindowTasksRequest: ssm.SsmDescribeMaintenanceWindowTasksRequest = { ... }
```

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTasksRequest.property.windowId"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTasksRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowFilter`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTasksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTasksRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeMaintenanceWindowTasksResult <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTasksResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeMaintenanceWindowTasksResult: ssm.SsmDescribeMaintenanceWindowTasksResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTasksResult.property.nextToken"></a>

- *Type:* `string`

---

##### `tasks`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTasksResult.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowTask`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowTask)[]

---

### SsmDescribeOpsItemsRequest <a name="aws-cdk-sdk.ssm.SsmDescribeOpsItemsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeOpsItemsRequest: ssm.SsmDescribeOpsItemsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeOpsItemsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeOpsItemsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `opsItemFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeOpsItemsRequest.property.opsItemFilters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmOpsItemFilter`](#aws-cdk-sdk.ssm.SsmOpsItemFilter)[]

---

### SsmDescribeOpsItemsResponse <a name="aws-cdk-sdk.ssm.SsmDescribeOpsItemsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeOpsItemsResponse: ssm.SsmDescribeOpsItemsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeOpsItemsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `opsItemSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeOpsItemsResponse.property.opsItemSummaries"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmOpsItemSummary`](#aws-cdk-sdk.ssm.SsmOpsItemSummary)[]

---

### SsmDescribeParametersRequest <a name="aws-cdk-sdk.ssm.SsmDescribeParametersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeParametersRequest: ssm.SsmDescribeParametersRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeParametersRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmParametersFilter`](#aws-cdk-sdk.ssm.SsmParametersFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeParametersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeParametersRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `parameterFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeParametersRequest.property.parameterFilters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmParameterStringFilter`](#aws-cdk-sdk.ssm.SsmParameterStringFilter)[]

---

### SsmDescribeParametersResult <a name="aws-cdk-sdk.ssm.SsmDescribeParametersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeParametersResult: ssm.SsmDescribeParametersResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeParametersResult.property.nextToken"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeParametersResult.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmParameterMetadata`](#aws-cdk-sdk.ssm.SsmParameterMetadata)[]

---

### SsmDescribePatchBaselinesRequest <a name="aws-cdk-sdk.ssm.SsmDescribePatchBaselinesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribePatchBaselinesRequest: ssm.SsmDescribePatchBaselinesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchBaselinesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchOrchestratorFilter`](#aws-cdk-sdk.ssm.SsmPatchOrchestratorFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchBaselinesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchBaselinesRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribePatchBaselinesResult <a name="aws-cdk-sdk.ssm.SsmDescribePatchBaselinesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribePatchBaselinesResult: ssm.SsmDescribePatchBaselinesResult = { ... }
```

##### `baselineIdentities`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchBaselinesResult.property.baselineIdentities"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchBaselineIdentity`](#aws-cdk-sdk.ssm.SsmPatchBaselineIdentity)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchBaselinesResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribePatchGroupsRequest <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribePatchGroupsRequest: ssm.SsmDescribePatchGroupsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchOrchestratorFilter`](#aws-cdk-sdk.ssm.SsmPatchOrchestratorFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribePatchGroupsResult <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribePatchGroupsResult: ssm.SsmDescribePatchGroupsResult = { ... }
```

##### `mappings`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupsResult.property.mappings"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchGroupPatchBaselineMapping`](#aws-cdk-sdk.ssm.SsmPatchGroupPatchBaselineMapping)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupsResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribePatchGroupStateRequest <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupStateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribePatchGroupStateRequest: ssm.SsmDescribePatchGroupStateRequest = { ... }
```

##### `patchGroup`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupStateRequest.property.patchGroup"></a>

- *Type:* `string`

---

### SsmDescribePatchGroupStateResult <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupStateResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribePatchGroupStateResult: ssm.SsmDescribePatchGroupStateResult = { ... }
```

##### `instances`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupStateResult.property.instances"></a>

- *Type:* `number`

---

##### `instancesWithFailedPatches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupStateResult.property.instancesWithFailedPatches"></a>

- *Type:* `number`

---

##### `instancesWithInstalledOtherPatches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupStateResult.property.instancesWithInstalledOtherPatches"></a>

- *Type:* `number`

---

##### `instancesWithInstalledPatches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupStateResult.property.instancesWithInstalledPatches"></a>

- *Type:* `number`

---

##### `instancesWithInstalledPendingRebootPatches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupStateResult.property.instancesWithInstalledPendingRebootPatches"></a>

- *Type:* `number`

---

##### `instancesWithInstalledRejectedPatches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupStateResult.property.instancesWithInstalledRejectedPatches"></a>

- *Type:* `number`

---

##### `instancesWithMissingPatches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupStateResult.property.instancesWithMissingPatches"></a>

- *Type:* `number`

---

##### `instancesWithNotApplicablePatches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupStateResult.property.instancesWithNotApplicablePatches"></a>

- *Type:* `number`

---

##### `instancesWithUnreportedNotApplicablePatches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchGroupStateResult.property.instancesWithUnreportedNotApplicablePatches"></a>

- *Type:* `number`

---

### SsmDescribePatchPropertiesRequest <a name="aws-cdk-sdk.ssm.SsmDescribePatchPropertiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribePatchPropertiesRequest: ssm.SsmDescribePatchPropertiesRequest = { ... }
```

##### `operatingSystem`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchPropertiesRequest.property.operatingSystem"></a>

- *Type:* `string`

---

##### `property`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchPropertiesRequest.property.property"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchPropertiesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchPropertiesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `patchSet`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchPropertiesRequest.property.patchSet"></a>

- *Type:* `string`

---

### SsmDescribePatchPropertiesResult <a name="aws-cdk-sdk.ssm.SsmDescribePatchPropertiesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribePatchPropertiesResult: ssm.SsmDescribePatchPropertiesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchPropertiesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `properties`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribePatchPropertiesResult.property.properties"></a>

- *Type:* {[ key: string ]: `string`}[]

---

### SsmDescribeSessionsRequest <a name="aws-cdk-sdk.ssm.SsmDescribeSessionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeSessionsRequest: ssm.SsmDescribeSessionsRequest = { ... }
```

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeSessionsRequest.property.state"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeSessionsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmSessionFilter`](#aws-cdk-sdk.ssm.SsmSessionFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeSessionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeSessionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmDescribeSessionsResponse <a name="aws-cdk-sdk.ssm.SsmDescribeSessionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDescribeSessionsResponse: ssm.SsmDescribeSessionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeSessionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `sessions`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDescribeSessionsResponse.property.sessions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmSession`](#aws-cdk-sdk.ssm.SsmSession)[]

---

### SsmDocumentDefaultVersionDescription <a name="aws-cdk-sdk.ssm.SsmDocumentDefaultVersionDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDocumentDefaultVersionDescription: ssm.SsmDocumentDefaultVersionDescription = { ... }
```

##### `defaultVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDefaultVersionDescription.property.defaultVersion"></a>

- *Type:* `string`

---

##### `defaultVersionName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDefaultVersionDescription.property.defaultVersionName"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDefaultVersionDescription.property.name"></a>

- *Type:* `string`

---

### SsmDocumentDescription <a name="aws-cdk-sdk.ssm.SsmDocumentDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDocumentDescription: ssm.SsmDocumentDescription = { ... }
```

##### `attachmentsInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.attachmentsInformation"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAttachmentInformation`](#aws-cdk-sdk.ssm.SsmAttachmentInformation)[]

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.createdDate"></a>

- *Type:* `string`

---

##### `defaultVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.defaultVersion"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.description"></a>

- *Type:* `string`

---

##### `documentFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.documentFormat"></a>

- *Type:* `string`

---

##### `documentType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.documentType"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.documentVersion"></a>

- *Type:* `string`

---

##### `hash`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.hash"></a>

- *Type:* `string`

---

##### `hashType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.hashType"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.latestVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.owner"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentParameter`](#aws-cdk-sdk.ssm.SsmDocumentParameter)[]

---

##### `platformTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.platformTypes"></a>

- *Type:* `string`[]

---

##### `requires`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.requires"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentRequires`](#aws-cdk-sdk.ssm.SsmDocumentRequires)[]

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.schemaVersion"></a>

- *Type:* `string`

---

##### `sha1`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.sha1"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.status"></a>

- *Type:* `string`

---

##### `statusInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.statusInformation"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTag`](#aws-cdk-sdk.ssm.SsmTag)[]

---

##### `targetType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.targetType"></a>

- *Type:* `string`

---

##### `versionName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentDescription.property.versionName"></a>

- *Type:* `string`

---

### SsmDocumentFilter <a name="aws-cdk-sdk.ssm.SsmDocumentFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDocumentFilter: ssm.SsmDocumentFilter = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentFilter.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentFilter.property.value"></a>

- *Type:* `string`

---

### SsmDocumentIdentifier <a name="aws-cdk-sdk.ssm.SsmDocumentIdentifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDocumentIdentifier: ssm.SsmDocumentIdentifier = { ... }
```

##### `documentFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentIdentifier.property.documentFormat"></a>

- *Type:* `string`

---

##### `documentType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentIdentifier.property.documentType"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentIdentifier.property.documentVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentIdentifier.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentIdentifier.property.owner"></a>

- *Type:* `string`

---

##### `platformTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentIdentifier.property.platformTypes"></a>

- *Type:* `string`[]

---

##### `requires`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentIdentifier.property.requires"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentRequires`](#aws-cdk-sdk.ssm.SsmDocumentRequires)[]

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentIdentifier.property.schemaVersion"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentIdentifier.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTag`](#aws-cdk-sdk.ssm.SsmTag)[]

---

##### `targetType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentIdentifier.property.targetType"></a>

- *Type:* `string`

---

##### `versionName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentIdentifier.property.versionName"></a>

- *Type:* `string`

---

### SsmDocumentKeyValuesFilter <a name="aws-cdk-sdk.ssm.SsmDocumentKeyValuesFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDocumentKeyValuesFilter: ssm.SsmDocumentKeyValuesFilter = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentKeyValuesFilter.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentKeyValuesFilter.property.values"></a>

- *Type:* `string`[]

---

### SsmDocumentParameter <a name="aws-cdk-sdk.ssm.SsmDocumentParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDocumentParameter: ssm.SsmDocumentParameter = { ... }
```

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentParameter.property.defaultValue"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentParameter.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentParameter.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentParameter.property.type"></a>

- *Type:* `string`

---

### SsmDocumentRequires <a name="aws-cdk-sdk.ssm.SsmDocumentRequires"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDocumentRequires: ssm.SsmDocumentRequires = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentRequires.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentRequires.property.version"></a>

- *Type:* `string`

---

### SsmDocumentVersionInfo <a name="aws-cdk-sdk.ssm.SsmDocumentVersionInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmDocumentVersionInfo: ssm.SsmDocumentVersionInfo = { ... }
```

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentVersionInfo.property.createdDate"></a>

- *Type:* `string`

---

##### `documentFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentVersionInfo.property.documentFormat"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentVersionInfo.property.documentVersion"></a>

- *Type:* `string`

---

##### `isDefaultVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentVersionInfo.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentVersionInfo.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentVersionInfo.property.status"></a>

- *Type:* `string`

---

##### `statusInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentVersionInfo.property.statusInformation"></a>

- *Type:* `string`

---

##### `versionName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmDocumentVersionInfo.property.versionName"></a>

- *Type:* `string`

---

### SsmEffectivePatch <a name="aws-cdk-sdk.ssm.SsmEffectivePatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmEffectivePatch: ssm.SsmEffectivePatch = { ... }
```

##### `patch`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmEffectivePatch.property.patch"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatch`](#aws-cdk-sdk.ssm.SsmPatch)

---

##### `patchStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmEffectivePatch.property.patchStatus"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchStatus`](#aws-cdk-sdk.ssm.SsmPatchStatus)

---

### SsmFailedCreateAssociation <a name="aws-cdk-sdk.ssm.SsmFailedCreateAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmFailedCreateAssociation: ssm.SsmFailedCreateAssociation = { ... }
```

##### `entry`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmFailedCreateAssociation.property.entry"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry`](#aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequestEntry)

---

##### `fault`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmFailedCreateAssociation.property.fault"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmFailedCreateAssociation.property.message"></a>

- *Type:* `string`

---

### SsmFailureDetails <a name="aws-cdk-sdk.ssm.SsmFailureDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmFailureDetails: ssm.SsmFailureDetails = { ... }
```

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmFailureDetails.property.details"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `failureStage`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmFailureDetails.property.failureStage"></a>

- *Type:* `string`

---

##### `failureType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmFailureDetails.property.failureType"></a>

- *Type:* `string`

---

### SsmGetAutomationExecutionRequest <a name="aws-cdk-sdk.ssm.SsmGetAutomationExecutionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetAutomationExecutionRequest: ssm.SsmGetAutomationExecutionRequest = { ... }
```

##### `automationExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetAutomationExecutionRequest.property.automationExecutionId"></a>

- *Type:* `string`

---

### SsmGetAutomationExecutionResult <a name="aws-cdk-sdk.ssm.SsmGetAutomationExecutionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetAutomationExecutionResult: ssm.SsmGetAutomationExecutionResult = { ... }
```

##### `automationExecution`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetAutomationExecutionResult.property.automationExecution"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAutomationExecution`](#aws-cdk-sdk.ssm.SsmAutomationExecution)

---

### SsmGetCalendarStateRequest <a name="aws-cdk-sdk.ssm.SsmGetCalendarStateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetCalendarStateRequest: ssm.SsmGetCalendarStateRequest = { ... }
```

##### `calendarNames`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetCalendarStateRequest.property.calendarNames"></a>

- *Type:* `string`[]

---

##### `atTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCalendarStateRequest.property.atTime"></a>

- *Type:* `string`

---

### SsmGetCalendarStateResponse <a name="aws-cdk-sdk.ssm.SsmGetCalendarStateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetCalendarStateResponse: ssm.SsmGetCalendarStateResponse = { ... }
```

##### `atTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCalendarStateResponse.property.atTime"></a>

- *Type:* `string`

---

##### `nextTransitionTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCalendarStateResponse.property.nextTransitionTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCalendarStateResponse.property.state"></a>

- *Type:* `string`

---

### SsmGetCommandInvocationRequest <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetCommandInvocationRequest: ssm.SsmGetCommandInvocationRequest = { ... }
```

##### `commandId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationRequest.property.commandId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `pluginName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationRequest.property.pluginName"></a>

- *Type:* `string`

---

### SsmGetCommandInvocationResult <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetCommandInvocationResult: ssm.SsmGetCommandInvocationResult = { ... }
```

##### `cloudWatchOutputConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult.property.cloudWatchOutputConfig"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCloudWatchOutputConfig`](#aws-cdk-sdk.ssm.SsmCloudWatchOutputConfig)

---

##### `commandId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult.property.commandId"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult.property.comment"></a>

- *Type:* `string`

---

##### `documentName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult.property.documentName"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult.property.documentVersion"></a>

- *Type:* `string`

---

##### `executionElapsedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult.property.executionElapsedTime"></a>

- *Type:* `string`

---

##### `executionEndDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult.property.executionEndDateTime"></a>

- *Type:* `string`

---

##### `executionStartDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult.property.executionStartDateTime"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult.property.instanceId"></a>

- *Type:* `string`

---

##### `pluginName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult.property.pluginName"></a>

- *Type:* `string`

---

##### `responseCode`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult.property.responseCode"></a>

- *Type:* `number`

---

##### `standardErrorContent`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult.property.standardErrorContent"></a>

- *Type:* `string`

---

##### `standardErrorUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult.property.standardErrorUrl"></a>

- *Type:* `string`

---

##### `standardOutputContent`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult.property.standardOutputContent"></a>

- *Type:* `string`

---

##### `standardOutputUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult.property.standardOutputUrl"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetCommandInvocationResult.property.statusDetails"></a>

- *Type:* `string`

---

### SsmGetConnectionStatusRequest <a name="aws-cdk-sdk.ssm.SsmGetConnectionStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetConnectionStatusRequest: ssm.SsmGetConnectionStatusRequest = { ... }
```

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetConnectionStatusRequest.property.target"></a>

- *Type:* `string`

---

### SsmGetConnectionStatusResponse <a name="aws-cdk-sdk.ssm.SsmGetConnectionStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetConnectionStatusResponse: ssm.SsmGetConnectionStatusResponse = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetConnectionStatusResponse.property.status"></a>

- *Type:* `string`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetConnectionStatusResponse.property.target"></a>

- *Type:* `string`

---

### SsmGetDefaultPatchBaselineRequest <a name="aws-cdk-sdk.ssm.SsmGetDefaultPatchBaselineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetDefaultPatchBaselineRequest: ssm.SsmGetDefaultPatchBaselineRequest = { ... }
```

##### `operatingSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDefaultPatchBaselineRequest.property.operatingSystem"></a>

- *Type:* `string`

---

### SsmGetDefaultPatchBaselineResult <a name="aws-cdk-sdk.ssm.SsmGetDefaultPatchBaselineResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetDefaultPatchBaselineResult: ssm.SsmGetDefaultPatchBaselineResult = { ... }
```

##### `baselineId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDefaultPatchBaselineResult.property.baselineId"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDefaultPatchBaselineResult.property.operatingSystem"></a>

- *Type:* `string`

---

### SsmGetDeployablePatchSnapshotForInstanceRequest <a name="aws-cdk-sdk.ssm.SsmGetDeployablePatchSnapshotForInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetDeployablePatchSnapshotForInstanceRequest: ssm.SsmGetDeployablePatchSnapshotForInstanceRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetDeployablePatchSnapshotForInstanceRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `snapshotId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetDeployablePatchSnapshotForInstanceRequest.property.snapshotId"></a>

- *Type:* `string`

---

### SsmGetDeployablePatchSnapshotForInstanceResult <a name="aws-cdk-sdk.ssm.SsmGetDeployablePatchSnapshotForInstanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetDeployablePatchSnapshotForInstanceResult: ssm.SsmGetDeployablePatchSnapshotForInstanceResult = { ... }
```

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDeployablePatchSnapshotForInstanceResult.property.instanceId"></a>

- *Type:* `string`

---

##### `product`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDeployablePatchSnapshotForInstanceResult.property.product"></a>

- *Type:* `string`

---

##### `snapshotDownloadUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDeployablePatchSnapshotForInstanceResult.property.snapshotDownloadUrl"></a>

- *Type:* `string`

---

##### `snapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDeployablePatchSnapshotForInstanceResult.property.snapshotId"></a>

- *Type:* `string`

---

### SsmGetDocumentRequest <a name="aws-cdk-sdk.ssm.SsmGetDocumentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetDocumentRequest: ssm.SsmGetDocumentRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetDocumentRequest.property.name"></a>

- *Type:* `string`

---

##### `documentFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDocumentRequest.property.documentFormat"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDocumentRequest.property.documentVersion"></a>

- *Type:* `string`

---

##### `versionName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDocumentRequest.property.versionName"></a>

- *Type:* `string`

---

### SsmGetDocumentResult <a name="aws-cdk-sdk.ssm.SsmGetDocumentResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetDocumentResult: ssm.SsmGetDocumentResult = { ... }
```

##### `attachmentsContent`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDocumentResult.property.attachmentsContent"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAttachmentContent`](#aws-cdk-sdk.ssm.SsmAttachmentContent)[]

---

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDocumentResult.property.content"></a>

- *Type:* `string`

---

##### `documentFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDocumentResult.property.documentFormat"></a>

- *Type:* `string`

---

##### `documentType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDocumentResult.property.documentType"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDocumentResult.property.documentVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDocumentResult.property.name"></a>

- *Type:* `string`

---

##### `requires`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDocumentResult.property.requires"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentRequires`](#aws-cdk-sdk.ssm.SsmDocumentRequires)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDocumentResult.property.status"></a>

- *Type:* `string`

---

##### `statusInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDocumentResult.property.statusInformation"></a>

- *Type:* `string`

---

##### `versionName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetDocumentResult.property.versionName"></a>

- *Type:* `string`

---

### SsmGetInventoryRequest <a name="aws-cdk-sdk.ssm.SsmGetInventoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetInventoryRequest: ssm.SsmGetInventoryRequest = { ... }
```

##### `aggregators`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetInventoryRequest.property.aggregators"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryAggregator`](#aws-cdk-sdk.ssm.SsmInventoryAggregator)[]

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetInventoryRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryFilter`](#aws-cdk-sdk.ssm.SsmInventoryFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetInventoryRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetInventoryRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resultAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetInventoryRequest.property.resultAttributes"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResultAttribute`](#aws-cdk-sdk.ssm.SsmResultAttribute)[]

---

### SsmGetInventoryResult <a name="aws-cdk-sdk.ssm.SsmGetInventoryResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetInventoryResult: ssm.SsmGetInventoryResult = { ... }
```

##### `entities`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetInventoryResult.property.entities"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryResultEntity`](#aws-cdk-sdk.ssm.SsmInventoryResultEntity)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetInventoryResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmGetInventorySchemaRequest <a name="aws-cdk-sdk.ssm.SsmGetInventorySchemaRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetInventorySchemaRequest: ssm.SsmGetInventorySchemaRequest = { ... }
```

##### `aggregator`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetInventorySchemaRequest.property.aggregator"></a>

- *Type:* `boolean`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetInventorySchemaRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetInventorySchemaRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `subType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetInventorySchemaRequest.property.subType"></a>

- *Type:* `boolean`

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetInventorySchemaRequest.property.typeName"></a>

- *Type:* `string`

---

### SsmGetInventorySchemaResult <a name="aws-cdk-sdk.ssm.SsmGetInventorySchemaResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetInventorySchemaResult: ssm.SsmGetInventorySchemaResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetInventorySchemaResult.property.nextToken"></a>

- *Type:* `string`

---

##### `schemas`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetInventorySchemaResult.property.schemas"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryItemSchema`](#aws-cdk-sdk.ssm.SsmInventoryItemSchema)[]

---

### SsmGetMaintenanceWindowExecutionRequest <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetMaintenanceWindowExecutionRequest: ssm.SsmGetMaintenanceWindowExecutionRequest = { ... }
```

##### `windowExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionRequest.property.windowExecutionId"></a>

- *Type:* `string`

---

### SsmGetMaintenanceWindowExecutionResult <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetMaintenanceWindowExecutionResult: ssm.SsmGetMaintenanceWindowExecutionResult = { ... }
```

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionResult.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionResult.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionResult.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionResult.property.statusDetails"></a>

- *Type:* `string`

---

##### `taskIds`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionResult.property.taskIds"></a>

- *Type:* `string`[]

---

##### `windowExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionResult.property.windowExecutionId"></a>

- *Type:* `string`

---

### SsmGetMaintenanceWindowExecutionTaskInvocationRequest <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetMaintenanceWindowExecutionTaskInvocationRequest: ssm.SsmGetMaintenanceWindowExecutionTaskInvocationRequest = { ... }
```

##### `invocationId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationRequest.property.invocationId"></a>

- *Type:* `string`

---

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationRequest.property.taskId"></a>

- *Type:* `string`

---

##### `windowExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationRequest.property.windowExecutionId"></a>

- *Type:* `string`

---

### SsmGetMaintenanceWindowExecutionTaskInvocationResult <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetMaintenanceWindowExecutionTaskInvocationResult: ssm.SsmGetMaintenanceWindowExecutionTaskInvocationResult = { ... }
```

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationResult.property.endTime"></a>

- *Type:* `string`

---

##### `executionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationResult.property.executionId"></a>

- *Type:* `string`

---

##### `invocationId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationResult.property.invocationId"></a>

- *Type:* `string`

---

##### `ownerInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationResult.property.ownerInformation"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationResult.property.parameters"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationResult.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationResult.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationResult.property.statusDetails"></a>

- *Type:* `string`

---

##### `taskExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationResult.property.taskExecutionId"></a>

- *Type:* `string`

---

##### `taskType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationResult.property.taskType"></a>

- *Type:* `string`

---

##### `windowExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationResult.property.windowExecutionId"></a>

- *Type:* `string`

---

##### `windowTargetId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationResult.property.windowTargetId"></a>

- *Type:* `string`

---

### SsmGetMaintenanceWindowExecutionTaskRequest <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetMaintenanceWindowExecutionTaskRequest: ssm.SsmGetMaintenanceWindowExecutionTaskRequest = { ... }
```

##### `taskId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskRequest.property.taskId"></a>

- *Type:* `string`

---

##### `windowExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskRequest.property.windowExecutionId"></a>

- *Type:* `string`

---

### SsmGetMaintenanceWindowExecutionTaskResult <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetMaintenanceWindowExecutionTaskResult: ssm.SsmGetMaintenanceWindowExecutionTaskResult = { ... }
```

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskResult.property.endTime"></a>

- *Type:* `string`

---

##### `maxConcurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskResult.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskResult.property.maxErrors"></a>

- *Type:* `string`

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskResult.property.priority"></a>

- *Type:* `number`

---

##### `serviceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskResult.property.serviceRole"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskResult.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskResult.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskResult.property.statusDetails"></a>

- *Type:* `string`

---

##### `taskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskResult.property.taskArn"></a>

- *Type:* `string`

---

##### `taskExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskResult.property.taskExecutionId"></a>

- *Type:* `string`

---

##### `taskParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskResult.property.taskParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression)}[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskResult.property.type"></a>

- *Type:* `string`

---

##### `windowExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskResult.property.windowExecutionId"></a>

- *Type:* `string`

---

### SsmGetMaintenanceWindowRequest <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetMaintenanceWindowRequest: ssm.SsmGetMaintenanceWindowRequest = { ... }
```

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowRequest.property.windowId"></a>

- *Type:* `string`

---

### SsmGetMaintenanceWindowResult <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetMaintenanceWindowResult: ssm.SsmGetMaintenanceWindowResult = { ... }
```

##### `allowUnassociatedTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowResult.property.allowUnassociatedTargets"></a>

- *Type:* `boolean`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowResult.property.createdDate"></a>

- *Type:* `string`

---

##### `cutoff`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowResult.property.cutoff"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowResult.property.description"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowResult.property.duration"></a>

- *Type:* `number`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowResult.property.enabled"></a>

- *Type:* `boolean`

---

##### `endDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowResult.property.endDate"></a>

- *Type:* `string`

---

##### `modifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowResult.property.modifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowResult.property.name"></a>

- *Type:* `string`

---

##### `nextExecutionTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowResult.property.nextExecutionTime"></a>

- *Type:* `string`

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowResult.property.schedule"></a>

- *Type:* `string`

---

##### `scheduleOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowResult.property.scheduleOffset"></a>

- *Type:* `number`

---

##### `scheduleTimezone`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowResult.property.scheduleTimezone"></a>

- *Type:* `string`

---

##### `startDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowResult.property.startDate"></a>

- *Type:* `string`

---

##### `windowId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowResult.property.windowId"></a>

- *Type:* `string`

---

### SsmGetMaintenanceWindowTaskRequest <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetMaintenanceWindowTaskRequest: ssm.SsmGetMaintenanceWindowTaskRequest = { ... }
```

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest.property.windowId"></a>

- *Type:* `string`

---

##### `windowTaskId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest.property.windowTaskId"></a>

- *Type:* `string`

---

### SsmGetMaintenanceWindowTaskResult <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetMaintenanceWindowTaskResult: ssm.SsmGetMaintenanceWindowTaskResult = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskResult.property.description"></a>

- *Type:* `string`

---

##### `loggingInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskResult.property.loggingInfo"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmLoggingInfo`](#aws-cdk-sdk.ssm.SsmLoggingInfo)

---

##### `maxConcurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskResult.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskResult.property.maxErrors"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskResult.property.name"></a>

- *Type:* `string`

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskResult.property.priority"></a>

- *Type:* `number`

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskResult.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskResult.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

##### `taskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskResult.property.taskArn"></a>

- *Type:* `string`

---

##### `taskInvocationParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskResult.property.taskInvocationParameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskInvocationParameters`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskInvocationParameters)

---

##### `taskParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskResult.property.taskParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression)}

---

##### `taskType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskResult.property.taskType"></a>

- *Type:* `string`

---

##### `windowId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskResult.property.windowId"></a>

- *Type:* `string`

---

##### `windowTaskId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskResult.property.windowTaskId"></a>

- *Type:* `string`

---

### SsmGetOpsItemRequest <a name="aws-cdk-sdk.ssm.SsmGetOpsItemRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetOpsItemRequest: ssm.SsmGetOpsItemRequest = { ... }
```

##### `opsItemId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetOpsItemRequest.property.opsItemId"></a>

- *Type:* `string`

---

### SsmGetOpsItemResponse <a name="aws-cdk-sdk.ssm.SsmGetOpsItemResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetOpsItemResponse: ssm.SsmGetOpsItemResponse = { ... }
```

##### `opsItem`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetOpsItemResponse.property.opsItem"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmOpsItem`](#aws-cdk-sdk.ssm.SsmOpsItem)

---

### SsmGetOpsSummaryRequest <a name="aws-cdk-sdk.ssm.SsmGetOpsSummaryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetOpsSummaryRequest: ssm.SsmGetOpsSummaryRequest = { ... }
```

##### `aggregators`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetOpsSummaryRequest.property.aggregators"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmOpsAggregator`](#aws-cdk-sdk.ssm.SsmOpsAggregator)[]

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetOpsSummaryRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmOpsFilter`](#aws-cdk-sdk.ssm.SsmOpsFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetOpsSummaryRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetOpsSummaryRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resultAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetOpsSummaryRequest.property.resultAttributes"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmOpsResultAttribute`](#aws-cdk-sdk.ssm.SsmOpsResultAttribute)[]

---

##### `syncName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetOpsSummaryRequest.property.syncName"></a>

- *Type:* `string`

---

### SsmGetOpsSummaryResult <a name="aws-cdk-sdk.ssm.SsmGetOpsSummaryResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetOpsSummaryResult: ssm.SsmGetOpsSummaryResult = { ... }
```

##### `entities`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetOpsSummaryResult.property.entities"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmOpsEntity`](#aws-cdk-sdk.ssm.SsmOpsEntity)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetOpsSummaryResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmGetParameterHistoryRequest <a name="aws-cdk-sdk.ssm.SsmGetParameterHistoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetParameterHistoryRequest: ssm.SsmGetParameterHistoryRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetParameterHistoryRequest.property.name"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetParameterHistoryRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetParameterHistoryRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `withDecryption`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetParameterHistoryRequest.property.withDecryption"></a>

- *Type:* `boolean`

---

### SsmGetParameterHistoryResult <a name="aws-cdk-sdk.ssm.SsmGetParameterHistoryResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetParameterHistoryResult: ssm.SsmGetParameterHistoryResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetParameterHistoryResult.property.nextToken"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetParameterHistoryResult.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmParameterHistory`](#aws-cdk-sdk.ssm.SsmParameterHistory)[]

---

### SsmGetParameterRequest <a name="aws-cdk-sdk.ssm.SsmGetParameterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetParameterRequest: ssm.SsmGetParameterRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetParameterRequest.property.name"></a>

- *Type:* `string`

---

##### `withDecryption`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetParameterRequest.property.withDecryption"></a>

- *Type:* `boolean`

---

### SsmGetParameterResult <a name="aws-cdk-sdk.ssm.SsmGetParameterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetParameterResult: ssm.SsmGetParameterResult = { ... }
```

##### `parameter`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetParameterResult.property.parameter"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmParameter`](#aws-cdk-sdk.ssm.SsmParameter)

---

### SsmGetParametersByPathRequest <a name="aws-cdk-sdk.ssm.SsmGetParametersByPathRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetParametersByPathRequest: ssm.SsmGetParametersByPathRequest = { ... }
```

##### `path`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetParametersByPathRequest.property.path"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetParametersByPathRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetParametersByPathRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `parameterFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetParametersByPathRequest.property.parameterFilters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmParameterStringFilter`](#aws-cdk-sdk.ssm.SsmParameterStringFilter)[]

---

##### `recursive`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetParametersByPathRequest.property.recursive"></a>

- *Type:* `boolean`

---

##### `withDecryption`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetParametersByPathRequest.property.withDecryption"></a>

- *Type:* `boolean`

---

### SsmGetParametersByPathResult <a name="aws-cdk-sdk.ssm.SsmGetParametersByPathResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetParametersByPathResult: ssm.SsmGetParametersByPathResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetParametersByPathResult.property.nextToken"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetParametersByPathResult.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmParameter`](#aws-cdk-sdk.ssm.SsmParameter)[]

---

### SsmGetParametersRequest <a name="aws-cdk-sdk.ssm.SsmGetParametersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetParametersRequest: ssm.SsmGetParametersRequest = { ... }
```

##### `names`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetParametersRequest.property.names"></a>

- *Type:* `string`[]

---

##### `withDecryption`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetParametersRequest.property.withDecryption"></a>

- *Type:* `boolean`

---

### SsmGetParametersResult <a name="aws-cdk-sdk.ssm.SsmGetParametersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetParametersResult: ssm.SsmGetParametersResult = { ... }
```

##### `invalidParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetParametersResult.property.invalidParameters"></a>

- *Type:* `string`[]

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetParametersResult.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmParameter`](#aws-cdk-sdk.ssm.SsmParameter)[]

---

### SsmGetPatchBaselineForPatchGroupRequest <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineForPatchGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetPatchBaselineForPatchGroupRequest: ssm.SsmGetPatchBaselineForPatchGroupRequest = { ... }
```

##### `patchGroup`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineForPatchGroupRequest.property.patchGroup"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineForPatchGroupRequest.property.operatingSystem"></a>

- *Type:* `string`

---

### SsmGetPatchBaselineForPatchGroupResult <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineForPatchGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetPatchBaselineForPatchGroupResult: ssm.SsmGetPatchBaselineForPatchGroupResult = { ... }
```

##### `baselineId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineForPatchGroupResult.property.baselineId"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineForPatchGroupResult.property.operatingSystem"></a>

- *Type:* `string`

---

##### `patchGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineForPatchGroupResult.property.patchGroup"></a>

- *Type:* `string`

---

### SsmGetPatchBaselineRequest <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetPatchBaselineRequest: ssm.SsmGetPatchBaselineRequest = { ... }
```

##### `baselineId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineRequest.property.baselineId"></a>

- *Type:* `string`

---

### SsmGetPatchBaselineResult <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetPatchBaselineResult: ssm.SsmGetPatchBaselineResult = { ... }
```

##### `approvalRules`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineResult.property.approvalRules"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchRuleGroup`](#aws-cdk-sdk.ssm.SsmPatchRuleGroup)

---

##### `approvedPatches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineResult.property.approvedPatches"></a>

- *Type:* `string`[]

---

##### `approvedPatchesComplianceLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineResult.property.approvedPatchesComplianceLevel"></a>

- *Type:* `string`

---

##### `approvedPatchesEnableNonSecurity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineResult.property.approvedPatchesEnableNonSecurity"></a>

- *Type:* `boolean`

---

##### `baselineId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineResult.property.baselineId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineResult.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineResult.property.description"></a>

- *Type:* `string`

---

##### `globalFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineResult.property.globalFilters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchFilterGroup`](#aws-cdk-sdk.ssm.SsmPatchFilterGroup)

---

##### `modifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineResult.property.modifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineResult.property.name"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineResult.property.operatingSystem"></a>

- *Type:* `string`

---

##### `patchGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineResult.property.patchGroups"></a>

- *Type:* `string`[]

---

##### `rejectedPatches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineResult.property.rejectedPatches"></a>

- *Type:* `string`[]

---

##### `rejectedPatchesAction`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineResult.property.rejectedPatchesAction"></a>

- *Type:* `string`

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetPatchBaselineResult.property.sources"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchSource`](#aws-cdk-sdk.ssm.SsmPatchSource)[]

---

### SsmGetServiceSettingRequest <a name="aws-cdk-sdk.ssm.SsmGetServiceSettingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetServiceSettingRequest: ssm.SsmGetServiceSettingRequest = { ... }
```

##### `settingId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmGetServiceSettingRequest.property.settingId"></a>

- *Type:* `string`

---

### SsmGetServiceSettingResult <a name="aws-cdk-sdk.ssm.SsmGetServiceSettingResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmGetServiceSettingResult: ssm.SsmGetServiceSettingResult = { ... }
```

##### `serviceSetting`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmGetServiceSettingResult.property.serviceSetting"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmServiceSetting`](#aws-cdk-sdk.ssm.SsmServiceSetting)

---

### SsmInstanceAggregatedAssociationOverview <a name="aws-cdk-sdk.ssm.SsmInstanceAggregatedAssociationOverview"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInstanceAggregatedAssociationOverview: ssm.SsmInstanceAggregatedAssociationOverview = { ... }
```

##### `detailedStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAggregatedAssociationOverview.property.detailedStatus"></a>

- *Type:* `string`

---

##### `instanceAssociationStatusAggregatedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAggregatedAssociationOverview.property.instanceAssociationStatusAggregatedCount"></a>

- *Type:* {[ key: string ]: `number`}

---

### SsmInstanceAssociation <a name="aws-cdk-sdk.ssm.SsmInstanceAssociation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInstanceAssociation: ssm.SsmInstanceAssociation = { ... }
```

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociation.property.associationId"></a>

- *Type:* `string`

---

##### `associationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociation.property.associationVersion"></a>

- *Type:* `string`

---

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociation.property.content"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociation.property.instanceId"></a>

- *Type:* `string`

---

### SsmInstanceAssociationOutputLocation <a name="aws-cdk-sdk.ssm.SsmInstanceAssociationOutputLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInstanceAssociationOutputLocation: ssm.SsmInstanceAssociationOutputLocation = { ... }
```

##### `s3Location`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociationOutputLocation.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.ssm.Ssms3OutputLocation`](#aws-cdk-sdk.ssm.Ssms3OutputLocation)

---

### SsmInstanceAssociationOutputUrl <a name="aws-cdk-sdk.ssm.SsmInstanceAssociationOutputUrl"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInstanceAssociationOutputUrl: ssm.SsmInstanceAssociationOutputUrl = { ... }
```

##### `s3OutputUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociationOutputUrl.property.s3OutputUrl"></a>

- *Type:* [`aws-cdk-sdk.ssm.Ssms3OutputUrl`](#aws-cdk-sdk.ssm.Ssms3OutputUrl)

---

### SsmInstanceAssociationStatusInfo <a name="aws-cdk-sdk.ssm.SsmInstanceAssociationStatusInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInstanceAssociationStatusInfo: ssm.SsmInstanceAssociationStatusInfo = { ... }
```

##### `associationId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociationStatusInfo.property.associationId"></a>

- *Type:* `string`

---

##### `associationName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociationStatusInfo.property.associationName"></a>

- *Type:* `string`

---

##### `associationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociationStatusInfo.property.associationVersion"></a>

- *Type:* `string`

---

##### `detailedStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociationStatusInfo.property.detailedStatus"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociationStatusInfo.property.documentVersion"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociationStatusInfo.property.errorCode"></a>

- *Type:* `string`

---

##### `executionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociationStatusInfo.property.executionDate"></a>

- *Type:* `string`

---

##### `executionSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociationStatusInfo.property.executionSummary"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociationStatusInfo.property.instanceId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociationStatusInfo.property.name"></a>

- *Type:* `string`

---

##### `outputUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociationStatusInfo.property.outputUrl"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstanceAssociationOutputUrl`](#aws-cdk-sdk.ssm.SsmInstanceAssociationOutputUrl)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceAssociationStatusInfo.property.status"></a>

- *Type:* `string`

---

### SsmInstanceInformation <a name="aws-cdk-sdk.ssm.SsmInstanceInformation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInstanceInformation: ssm.SsmInstanceInformation = { ... }
```

##### `activationId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.activationId"></a>

- *Type:* `string`

---

##### `agentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.agentVersion"></a>

- *Type:* `string`

---

##### `associationOverview`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.associationOverview"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstanceAggregatedAssociationOverview`](#aws-cdk-sdk.ssm.SsmInstanceAggregatedAssociationOverview)

---

##### `associationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.associationStatus"></a>

- *Type:* `string`

---

##### `computerName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.computerName"></a>

- *Type:* `string`

---

##### `iamRole`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.iamRole"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.instanceId"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.ipAddress"></a>

- *Type:* `string`

---

##### `isLatestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.isLatestVersion"></a>

- *Type:* `boolean`

---

##### `lastAssociationExecutionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.lastAssociationExecutionDate"></a>

- *Type:* `string`

---

##### `lastPingDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.lastPingDateTime"></a>

- *Type:* `string`

---

##### `lastSuccessfulAssociationExecutionDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.lastSuccessfulAssociationExecutionDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.name"></a>

- *Type:* `string`

---

##### `pingStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.pingStatus"></a>

- *Type:* `string`

---

##### `platformName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.platformName"></a>

- *Type:* `string`

---

##### `platformType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.platformType"></a>

- *Type:* `string`

---

##### `platformVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.platformVersion"></a>

- *Type:* `string`

---

##### `registrationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.registrationDate"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformation.property.resourceType"></a>

- *Type:* `string`

---

### SsmInstanceInformationFilter <a name="aws-cdk-sdk.ssm.SsmInstanceInformationFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInstanceInformationFilter: ssm.SsmInstanceInformationFilter = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformationFilter.property.key"></a>

- *Type:* `string`

---

##### `valueSet`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformationFilter.property.valueSet"></a>

- *Type:* `string`[]

---

### SsmInstanceInformationStringFilter <a name="aws-cdk-sdk.ssm.SsmInstanceInformationStringFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInstanceInformationStringFilter: ssm.SsmInstanceInformationStringFilter = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformationStringFilter.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInstanceInformationStringFilter.property.values"></a>

- *Type:* `string`[]

---

### SsmInstancePatchState <a name="aws-cdk-sdk.ssm.SsmInstancePatchState"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInstancePatchState: ssm.SsmInstancePatchState = { ... }
```

##### `baselineId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.baselineId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.instanceId"></a>

- *Type:* `string`

---

##### `operation`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.operation"></a>

- *Type:* `string`

---

##### `operationEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.operationEndTime"></a>

- *Type:* `string`

---

##### `operationStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.operationStartTime"></a>

- *Type:* `string`

---

##### `patchGroup`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.patchGroup"></a>

- *Type:* `string`

---

##### `failedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.failedCount"></a>

- *Type:* `number`

---

##### `installedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.installedCount"></a>

- *Type:* `number`

---

##### `installedOtherCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.installedOtherCount"></a>

- *Type:* `number`

---

##### `installedPendingRebootCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.installedPendingRebootCount"></a>

- *Type:* `number`

---

##### `installedRejectedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.installedRejectedCount"></a>

- *Type:* `number`

---

##### `installOverrideList`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.installOverrideList"></a>

- *Type:* `string`

---

##### `lastNoRebootInstallOperationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.lastNoRebootInstallOperationTime"></a>

- *Type:* `string`

---

##### `missingCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.missingCount"></a>

- *Type:* `number`

---

##### `notApplicableCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.notApplicableCount"></a>

- *Type:* `number`

---

##### `ownerInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.ownerInformation"></a>

- *Type:* `string`

---

##### `rebootOption`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.rebootOption"></a>

- *Type:* `string`

---

##### `snapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.snapshotId"></a>

- *Type:* `string`

---

##### `unreportedNotApplicableCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchState.property.unreportedNotApplicableCount"></a>

- *Type:* `number`

---

### SsmInstancePatchStateFilter <a name="aws-cdk-sdk.ssm.SsmInstancePatchStateFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInstancePatchStateFilter: ssm.SsmInstancePatchStateFilter = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchStateFilter.property.key"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchStateFilter.property.type"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInstancePatchStateFilter.property.values"></a>

- *Type:* `string`[]

---

### SsmInventoryAggregator <a name="aws-cdk-sdk.ssm.SsmInventoryAggregator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInventoryAggregator: ssm.SsmInventoryAggregator = { ... }
```

##### `aggregators`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryAggregator.property.aggregators"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryAggregator`](#aws-cdk-sdk.ssm.SsmInventoryAggregator)[]

---

##### `expression`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryAggregator.property.expression"></a>

- *Type:* `string`

---

##### `groups`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryAggregator.property.groups"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryGroup`](#aws-cdk-sdk.ssm.SsmInventoryGroup)[]

---

### SsmInventoryDeletionStatusItem <a name="aws-cdk-sdk.ssm.SsmInventoryDeletionStatusItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInventoryDeletionStatusItem: ssm.SsmInventoryDeletionStatusItem = { ... }
```

##### `deletionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryDeletionStatusItem.property.deletionId"></a>

- *Type:* `string`

---

##### `deletionStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryDeletionStatusItem.property.deletionStartTime"></a>

- *Type:* `string`

---

##### `deletionSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryDeletionStatusItem.property.deletionSummary"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryDeletionSummary`](#aws-cdk-sdk.ssm.SsmInventoryDeletionSummary)

---

##### `lastStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryDeletionStatusItem.property.lastStatus"></a>

- *Type:* `string`

---

##### `lastStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryDeletionStatusItem.property.lastStatusMessage"></a>

- *Type:* `string`

---

##### `lastStatusUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryDeletionStatusItem.property.lastStatusUpdateTime"></a>

- *Type:* `string`

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryDeletionStatusItem.property.typeName"></a>

- *Type:* `string`

---

### SsmInventoryDeletionSummary <a name="aws-cdk-sdk.ssm.SsmInventoryDeletionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInventoryDeletionSummary: ssm.SsmInventoryDeletionSummary = { ... }
```

##### `remainingCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryDeletionSummary.property.remainingCount"></a>

- *Type:* `number`

---

##### `summaryItems`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryDeletionSummary.property.summaryItems"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryDeletionSummaryItem`](#aws-cdk-sdk.ssm.SsmInventoryDeletionSummaryItem)[]

---

##### `totalCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryDeletionSummary.property.totalCount"></a>

- *Type:* `number`

---

### SsmInventoryDeletionSummaryItem <a name="aws-cdk-sdk.ssm.SsmInventoryDeletionSummaryItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInventoryDeletionSummaryItem: ssm.SsmInventoryDeletionSummaryItem = { ... }
```

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryDeletionSummaryItem.property.count"></a>

- *Type:* `number`

---

##### `remainingCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryDeletionSummaryItem.property.remainingCount"></a>

- *Type:* `number`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryDeletionSummaryItem.property.version"></a>

- *Type:* `string`

---

### SsmInventoryFilter <a name="aws-cdk-sdk.ssm.SsmInventoryFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInventoryFilter: ssm.SsmInventoryFilter = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryFilter.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryFilter.property.values"></a>

- *Type:* `string`[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryFilter.property.type"></a>

- *Type:* `string`

---

### SsmInventoryGroup <a name="aws-cdk-sdk.ssm.SsmInventoryGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInventoryGroup: ssm.SsmInventoryGroup = { ... }
```

##### `filters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryGroup.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryFilter`](#aws-cdk-sdk.ssm.SsmInventoryFilter)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryGroup.property.name"></a>

- *Type:* `string`

---

### SsmInventoryItem <a name="aws-cdk-sdk.ssm.SsmInventoryItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInventoryItem: ssm.SsmInventoryItem = { ... }
```

##### `captureTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryItem.property.captureTime"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryItem.property.schemaVersion"></a>

- *Type:* `string`

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryItem.property.typeName"></a>

- *Type:* `string`

---

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryItem.property.content"></a>

- *Type:* {[ key: string ]: `string`}[]

---

##### `contentHash`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryItem.property.contentHash"></a>

- *Type:* `string`

---

##### `context`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryItem.property.context"></a>

- *Type:* {[ key: string ]: `string`}

---

### SsmInventoryItemAttribute <a name="aws-cdk-sdk.ssm.SsmInventoryItemAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInventoryItemAttribute: ssm.SsmInventoryItemAttribute = { ... }
```

##### `dataType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryItemAttribute.property.dataType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryItemAttribute.property.name"></a>

- *Type:* `string`

---

### SsmInventoryItemSchema <a name="aws-cdk-sdk.ssm.SsmInventoryItemSchema"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInventoryItemSchema: ssm.SsmInventoryItemSchema = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryItemSchema.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryItemAttribute`](#aws-cdk-sdk.ssm.SsmInventoryItemAttribute)[]

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryItemSchema.property.typeName"></a>

- *Type:* `string`

---

##### `displayName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryItemSchema.property.displayName"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryItemSchema.property.version"></a>

- *Type:* `string`

---

### SsmInventoryResultEntity <a name="aws-cdk-sdk.ssm.SsmInventoryResultEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInventoryResultEntity: ssm.SsmInventoryResultEntity = { ... }
```

##### `data`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryResultEntity.property.data"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.ssm.SsmInventoryResultItem`](#aws-cdk-sdk.ssm.SsmInventoryResultItem)}

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryResultEntity.property.id"></a>

- *Type:* `string`

---

### SsmInventoryResultItem <a name="aws-cdk-sdk.ssm.SsmInventoryResultItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmInventoryResultItem: ssm.SsmInventoryResultItem = { ... }
```

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryResultItem.property.content"></a>

- *Type:* {[ key: string ]: `string`}[]

---

##### `schemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryResultItem.property.schemaVersion"></a>

- *Type:* `string`

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryResultItem.property.typeName"></a>

- *Type:* `string`

---

##### `captureTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryResultItem.property.captureTime"></a>

- *Type:* `string`

---

##### `contentHash`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmInventoryResultItem.property.contentHash"></a>

- *Type:* `string`

---

### SsmLabelParameterVersionRequest <a name="aws-cdk-sdk.ssm.SsmLabelParameterVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmLabelParameterVersionRequest: ssm.SsmLabelParameterVersionRequest = { ... }
```

##### `labels`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmLabelParameterVersionRequest.property.labels"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmLabelParameterVersionRequest.property.name"></a>

- *Type:* `string`

---

##### `parameterVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmLabelParameterVersionRequest.property.parameterVersion"></a>

- *Type:* `number`

---

### SsmLabelParameterVersionResult <a name="aws-cdk-sdk.ssm.SsmLabelParameterVersionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmLabelParameterVersionResult: ssm.SsmLabelParameterVersionResult = { ... }
```

##### `invalidLabels`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmLabelParameterVersionResult.property.invalidLabels"></a>

- *Type:* `string`[]

---

##### `parameterVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmLabelParameterVersionResult.property.parameterVersion"></a>

- *Type:* `number`

---

### SsmListAssociationsRequest <a name="aws-cdk-sdk.ssm.SsmListAssociationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListAssociationsRequest: ssm.SsmListAssociationsRequest = { ... }
```

##### `associationFilterList`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListAssociationsRequest.property.associationFilterList"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationFilter`](#aws-cdk-sdk.ssm.SsmAssociationFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListAssociationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListAssociationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmListAssociationsResult <a name="aws-cdk-sdk.ssm.SsmListAssociationsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListAssociationsResult: ssm.SsmListAssociationsResult = { ... }
```

##### `associations`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListAssociationsResult.property.associations"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociation`](#aws-cdk-sdk.ssm.SsmAssociation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListAssociationsResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmListAssociationVersionsRequest <a name="aws-cdk-sdk.ssm.SsmListAssociationVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListAssociationVersionsRequest: ssm.SsmListAssociationVersionsRequest = { ... }
```

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmListAssociationVersionsRequest.property.associationId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListAssociationVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListAssociationVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmListAssociationVersionsResult <a name="aws-cdk-sdk.ssm.SsmListAssociationVersionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListAssociationVersionsResult: ssm.SsmListAssociationVersionsResult = { ... }
```

##### `associationVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListAssociationVersionsResult.property.associationVersions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationVersionInfo`](#aws-cdk-sdk.ssm.SsmAssociationVersionInfo)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListAssociationVersionsResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmListCommandInvocationsRequest <a name="aws-cdk-sdk.ssm.SsmListCommandInvocationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListCommandInvocationsRequest: ssm.SsmListCommandInvocationsRequest = { ... }
```

##### `commandId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListCommandInvocationsRequest.property.commandId"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListCommandInvocationsRequest.property.details"></a>

- *Type:* `boolean`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListCommandInvocationsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCommandFilter`](#aws-cdk-sdk.ssm.SsmCommandFilter)[]

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListCommandInvocationsRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListCommandInvocationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListCommandInvocationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmListCommandInvocationsResult <a name="aws-cdk-sdk.ssm.SsmListCommandInvocationsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListCommandInvocationsResult: ssm.SsmListCommandInvocationsResult = { ... }
```

##### `commandInvocations`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListCommandInvocationsResult.property.commandInvocations"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCommandInvocation`](#aws-cdk-sdk.ssm.SsmCommandInvocation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListCommandInvocationsResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmListCommandsRequest <a name="aws-cdk-sdk.ssm.SsmListCommandsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListCommandsRequest: ssm.SsmListCommandsRequest = { ... }
```

##### `commandId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListCommandsRequest.property.commandId"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListCommandsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCommandFilter`](#aws-cdk-sdk.ssm.SsmCommandFilter)[]

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListCommandsRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListCommandsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListCommandsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmListCommandsResult <a name="aws-cdk-sdk.ssm.SsmListCommandsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListCommandsResult: ssm.SsmListCommandsResult = { ... }
```

##### `commands`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListCommandsResult.property.commands"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCommand`](#aws-cdk-sdk.ssm.SsmCommand)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListCommandsResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmListComplianceItemsRequest <a name="aws-cdk-sdk.ssm.SsmListComplianceItemsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListComplianceItemsRequest: ssm.SsmListComplianceItemsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListComplianceItemsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmComplianceStringFilter`](#aws-cdk-sdk.ssm.SsmComplianceStringFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListComplianceItemsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListComplianceItemsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListComplianceItemsRequest.property.resourceIds"></a>

- *Type:* `string`[]

---

##### `resourceTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListComplianceItemsRequest.property.resourceTypes"></a>

- *Type:* `string`[]

---

### SsmListComplianceItemsResult <a name="aws-cdk-sdk.ssm.SsmListComplianceItemsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListComplianceItemsResult: ssm.SsmListComplianceItemsResult = { ... }
```

##### `complianceItems`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListComplianceItemsResult.property.complianceItems"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmComplianceItem`](#aws-cdk-sdk.ssm.SsmComplianceItem)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListComplianceItemsResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmListComplianceSummariesRequest <a name="aws-cdk-sdk.ssm.SsmListComplianceSummariesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListComplianceSummariesRequest: ssm.SsmListComplianceSummariesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListComplianceSummariesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmComplianceStringFilter`](#aws-cdk-sdk.ssm.SsmComplianceStringFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListComplianceSummariesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListComplianceSummariesRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmListComplianceSummariesResult <a name="aws-cdk-sdk.ssm.SsmListComplianceSummariesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListComplianceSummariesResult: ssm.SsmListComplianceSummariesResult = { ... }
```

##### `complianceSummaryItems`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListComplianceSummariesResult.property.complianceSummaryItems"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmComplianceSummaryItem`](#aws-cdk-sdk.ssm.SsmComplianceSummaryItem)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListComplianceSummariesResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmListDocumentsRequest <a name="aws-cdk-sdk.ssm.SsmListDocumentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListDocumentsRequest: ssm.SsmListDocumentsRequest = { ... }
```

##### `documentFilterList`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListDocumentsRequest.property.documentFilterList"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentFilter`](#aws-cdk-sdk.ssm.SsmDocumentFilter)[]

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListDocumentsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentKeyValuesFilter`](#aws-cdk-sdk.ssm.SsmDocumentKeyValuesFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListDocumentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListDocumentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmListDocumentsResult <a name="aws-cdk-sdk.ssm.SsmListDocumentsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListDocumentsResult: ssm.SsmListDocumentsResult = { ... }
```

##### `documentIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListDocumentsResult.property.documentIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentIdentifier`](#aws-cdk-sdk.ssm.SsmDocumentIdentifier)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListDocumentsResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmListDocumentVersionsRequest <a name="aws-cdk-sdk.ssm.SsmListDocumentVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListDocumentVersionsRequest: ssm.SsmListDocumentVersionsRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmListDocumentVersionsRequest.property.name"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListDocumentVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListDocumentVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmListDocumentVersionsResult <a name="aws-cdk-sdk.ssm.SsmListDocumentVersionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListDocumentVersionsResult: ssm.SsmListDocumentVersionsResult = { ... }
```

##### `documentVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListDocumentVersionsResult.property.documentVersions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentVersionInfo`](#aws-cdk-sdk.ssm.SsmDocumentVersionInfo)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListDocumentVersionsResult.property.nextToken"></a>

- *Type:* `string`

---

### SsmListInventoryEntriesRequest <a name="aws-cdk-sdk.ssm.SsmListInventoryEntriesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListInventoryEntriesRequest: ssm.SsmListInventoryEntriesRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmListInventoryEntriesRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmListInventoryEntriesRequest.property.typeName"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListInventoryEntriesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryFilter`](#aws-cdk-sdk.ssm.SsmInventoryFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListInventoryEntriesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListInventoryEntriesRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmListInventoryEntriesResult <a name="aws-cdk-sdk.ssm.SsmListInventoryEntriesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListInventoryEntriesResult: ssm.SsmListInventoryEntriesResult = { ... }
```

##### `captureTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListInventoryEntriesResult.property.captureTime"></a>

- *Type:* `string`

---

##### `entries`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListInventoryEntriesResult.property.entries"></a>

- *Type:* {[ key: string ]: `string`}[]

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListInventoryEntriesResult.property.instanceId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListInventoryEntriesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListInventoryEntriesResult.property.schemaVersion"></a>

- *Type:* `string`

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListInventoryEntriesResult.property.typeName"></a>

- *Type:* `string`

---

### SsmListResourceComplianceSummariesRequest <a name="aws-cdk-sdk.ssm.SsmListResourceComplianceSummariesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListResourceComplianceSummariesRequest: ssm.SsmListResourceComplianceSummariesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListResourceComplianceSummariesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmComplianceStringFilter`](#aws-cdk-sdk.ssm.SsmComplianceStringFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListResourceComplianceSummariesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListResourceComplianceSummariesRequest.property.nextToken"></a>

- *Type:* `string`

---

### SsmListResourceComplianceSummariesResult <a name="aws-cdk-sdk.ssm.SsmListResourceComplianceSummariesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListResourceComplianceSummariesResult: ssm.SsmListResourceComplianceSummariesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListResourceComplianceSummariesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceComplianceSummaryItems`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListResourceComplianceSummariesResult.property.resourceComplianceSummaryItems"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResourceComplianceSummaryItem`](#aws-cdk-sdk.ssm.SsmResourceComplianceSummaryItem)[]

---

### SsmListResourceDataSyncRequest <a name="aws-cdk-sdk.ssm.SsmListResourceDataSyncRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListResourceDataSyncRequest: ssm.SsmListResourceDataSyncRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListResourceDataSyncRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListResourceDataSyncRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `syncType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListResourceDataSyncRequest.property.syncType"></a>

- *Type:* `string`

---

### SsmListResourceDataSyncResult <a name="aws-cdk-sdk.ssm.SsmListResourceDataSyncResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListResourceDataSyncResult: ssm.SsmListResourceDataSyncResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListResourceDataSyncResult.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceDataSyncItems`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListResourceDataSyncResult.property.resourceDataSyncItems"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResourceDataSyncItem`](#aws-cdk-sdk.ssm.SsmResourceDataSyncItem)[]

---

### SsmListTagsForResourceRequest <a name="aws-cdk-sdk.ssm.SsmListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListTagsForResourceRequest: ssm.SsmListTagsForResourceRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmListTagsForResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmListTagsForResourceRequest.property.resourceType"></a>

- *Type:* `string`

---

### SsmListTagsForResourceResult <a name="aws-cdk-sdk.ssm.SsmListTagsForResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmListTagsForResourceResult: ssm.SsmListTagsForResourceResult = { ... }
```

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmListTagsForResourceResult.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTag`](#aws-cdk-sdk.ssm.SsmTag)[]

---

### SsmLoggingInfo <a name="aws-cdk-sdk.ssm.SsmLoggingInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmLoggingInfo: ssm.SsmLoggingInfo = { ... }
```

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmLoggingInfo.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3Region`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmLoggingInfo.property.s3Region"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmLoggingInfo.property.s3KeyPrefix"></a>

- *Type:* `string`

---

### SsmMaintenanceWindowAutomationParameters <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowAutomationParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmMaintenanceWindowAutomationParameters: ssm.SsmMaintenanceWindowAutomationParameters = { ... }
```

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowAutomationParameters.property.documentVersion"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowAutomationParameters.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

### SsmMaintenanceWindowExecution <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecution"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmMaintenanceWindowExecution: ssm.SsmMaintenanceWindowExecution = { ... }
```

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecution.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecution.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecution.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecution.property.statusDetails"></a>

- *Type:* `string`

---

##### `windowExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecution.property.windowExecutionId"></a>

- *Type:* `string`

---

##### `windowId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecution.property.windowId"></a>

- *Type:* `string`

---

### SsmMaintenanceWindowExecutionTaskIdentity <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskIdentity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmMaintenanceWindowExecutionTaskIdentity: ssm.SsmMaintenanceWindowExecutionTaskIdentity = { ... }
```

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskIdentity.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskIdentity.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskIdentity.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskIdentity.property.statusDetails"></a>

- *Type:* `string`

---

##### `taskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskIdentity.property.taskArn"></a>

- *Type:* `string`

---

##### `taskExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskIdentity.property.taskExecutionId"></a>

- *Type:* `string`

---

##### `taskType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskIdentity.property.taskType"></a>

- *Type:* `string`

---

##### `windowExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskIdentity.property.windowExecutionId"></a>

- *Type:* `string`

---

### SsmMaintenanceWindowExecutionTaskInvocationIdentity <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmMaintenanceWindowExecutionTaskInvocationIdentity: ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity = { ... }
```

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity.property.endTime"></a>

- *Type:* `string`

---

##### `executionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity.property.executionId"></a>

- *Type:* `string`

---

##### `invocationId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity.property.invocationId"></a>

- *Type:* `string`

---

##### `ownerInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity.property.ownerInformation"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity.property.parameters"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity.property.statusDetails"></a>

- *Type:* `string`

---

##### `taskExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity.property.taskExecutionId"></a>

- *Type:* `string`

---

##### `taskType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity.property.taskType"></a>

- *Type:* `string`

---

##### `windowExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity.property.windowExecutionId"></a>

- *Type:* `string`

---

##### `windowTargetId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity.property.windowTargetId"></a>

- *Type:* `string`

---

### SsmMaintenanceWindowFilter <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmMaintenanceWindowFilter: ssm.SsmMaintenanceWindowFilter = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowFilter.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowFilter.property.values"></a>

- *Type:* `string`[]

---

### SsmMaintenanceWindowIdentity <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmMaintenanceWindowIdentity: ssm.SsmMaintenanceWindowIdentity = { ... }
```

##### `cutoff`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentity.property.cutoff"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentity.property.description"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentity.property.duration"></a>

- *Type:* `number`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentity.property.enabled"></a>

- *Type:* `boolean`

---

##### `endDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentity.property.endDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentity.property.name"></a>

- *Type:* `string`

---

##### `nextExecutionTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentity.property.nextExecutionTime"></a>

- *Type:* `string`

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentity.property.schedule"></a>

- *Type:* `string`

---

##### `scheduleOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentity.property.scheduleOffset"></a>

- *Type:* `number`

---

##### `scheduleTimezone`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentity.property.scheduleTimezone"></a>

- *Type:* `string`

---

##### `startDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentity.property.startDate"></a>

- *Type:* `string`

---

##### `windowId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentity.property.windowId"></a>

- *Type:* `string`

---

### SsmMaintenanceWindowIdentityForTarget <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentityForTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmMaintenanceWindowIdentityForTarget: ssm.SsmMaintenanceWindowIdentityForTarget = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentityForTarget.property.name"></a>

- *Type:* `string`

---

##### `windowId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentityForTarget.property.windowId"></a>

- *Type:* `string`

---

### SsmMaintenanceWindowLambdaParameters <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowLambdaParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmMaintenanceWindowLambdaParameters: ssm.SsmMaintenanceWindowLambdaParameters = { ... }
```

##### `clientContext`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowLambdaParameters.property.clientContext"></a>

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowLambdaParameters.property.payload"></a>

- *Type:* `any`

---

##### `qualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowLambdaParameters.property.qualifier"></a>

- *Type:* `string`

---

### SsmMaintenanceWindowRunCommandParameters <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowRunCommandParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmMaintenanceWindowRunCommandParameters: ssm.SsmMaintenanceWindowRunCommandParameters = { ... }
```

##### `cloudWatchOutputConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowRunCommandParameters.property.cloudWatchOutputConfig"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCloudWatchOutputConfig`](#aws-cdk-sdk.ssm.SsmCloudWatchOutputConfig)

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowRunCommandParameters.property.comment"></a>

- *Type:* `string`

---

##### `documentHash`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowRunCommandParameters.property.documentHash"></a>

- *Type:* `string`

---

##### `documentHashType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowRunCommandParameters.property.documentHashType"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowRunCommandParameters.property.documentVersion"></a>

- *Type:* `string`

---

##### `notificationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowRunCommandParameters.property.notificationConfig"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmNotificationConfig`](#aws-cdk-sdk.ssm.SsmNotificationConfig)

---

##### `outputS3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowRunCommandParameters.property.outputS3BucketName"></a>

- *Type:* `string`

---

##### `outputS3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowRunCommandParameters.property.outputS3KeyPrefix"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowRunCommandParameters.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowRunCommandParameters.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowRunCommandParameters.property.timeoutSeconds"></a>

- *Type:* `number`

---

### SsmMaintenanceWindowStepFunctionsParameters <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowStepFunctionsParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmMaintenanceWindowStepFunctionsParameters: ssm.SsmMaintenanceWindowStepFunctionsParameters = { ... }
```

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowStepFunctionsParameters.property.input"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowStepFunctionsParameters.property.name"></a>

- *Type:* `string`

---

### SsmMaintenanceWindowTarget <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmMaintenanceWindowTarget: ssm.SsmMaintenanceWindowTarget = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTarget.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTarget.property.name"></a>

- *Type:* `string`

---

##### `ownerInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTarget.property.ownerInformation"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTarget.property.resourceType"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTarget.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

##### `windowId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTarget.property.windowId"></a>

- *Type:* `string`

---

##### `windowTargetId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTarget.property.windowTargetId"></a>

- *Type:* `string`

---

### SsmMaintenanceWindowTask <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTask"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmMaintenanceWindowTask: ssm.SsmMaintenanceWindowTask = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTask.property.description"></a>

- *Type:* `string`

---

##### `loggingInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTask.property.loggingInfo"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmLoggingInfo`](#aws-cdk-sdk.ssm.SsmLoggingInfo)

---

##### `maxConcurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTask.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTask.property.maxErrors"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTask.property.name"></a>

- *Type:* `string`

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTask.property.priority"></a>

- *Type:* `number`

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTask.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTask.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

##### `taskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTask.property.taskArn"></a>

- *Type:* `string`

---

##### `taskParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTask.property.taskParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression)}

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTask.property.type"></a>

- *Type:* `string`

---

##### `windowId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTask.property.windowId"></a>

- *Type:* `string`

---

##### `windowTaskId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTask.property.windowTaskId"></a>

- *Type:* `string`

---

### SsmMaintenanceWindowTaskInvocationParameters <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskInvocationParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmMaintenanceWindowTaskInvocationParameters: ssm.SsmMaintenanceWindowTaskInvocationParameters = { ... }
```

##### `automation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskInvocationParameters.property.automation"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowAutomationParameters`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowAutomationParameters)

---

##### `lambda`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskInvocationParameters.property.lambda"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowLambdaParameters`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowLambdaParameters)

---

##### `runCommand`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskInvocationParameters.property.runCommand"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowRunCommandParameters`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowRunCommandParameters)

---

##### `stepFunctions`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskInvocationParameters.property.stepFunctions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowStepFunctionsParameters`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowStepFunctionsParameters)

---

### SsmMaintenanceWindowTaskParameterValueExpression <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmMaintenanceWindowTaskParameterValueExpression: ssm.SsmMaintenanceWindowTaskParameterValueExpression = { ... }
```

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression.property.values"></a>

- *Type:* `string`[]

---

### SsmModifyDocumentPermissionRequest <a name="aws-cdk-sdk.ssm.SsmModifyDocumentPermissionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmModifyDocumentPermissionRequest: ssm.SsmModifyDocumentPermissionRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmModifyDocumentPermissionRequest.property.name"></a>

- *Type:* `string`

---

##### `permissionType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmModifyDocumentPermissionRequest.property.permissionType"></a>

- *Type:* `string`

---

##### `accountIdsToAdd`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmModifyDocumentPermissionRequest.property.accountIdsToAdd"></a>

- *Type:* `string`[]

---

##### `accountIdsToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmModifyDocumentPermissionRequest.property.accountIdsToRemove"></a>

- *Type:* `string`[]

---

##### `sharedDocumentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmModifyDocumentPermissionRequest.property.sharedDocumentVersion"></a>

- *Type:* `string`

---

### SsmModifyDocumentPermissionResponse <a name="aws-cdk-sdk.ssm.SsmModifyDocumentPermissionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmModifyDocumentPermissionResponse: ssm.SsmModifyDocumentPermissionResponse = { ... }
```

### SsmNonCompliantSummary <a name="aws-cdk-sdk.ssm.SsmNonCompliantSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmNonCompliantSummary: ssm.SsmNonCompliantSummary = { ... }
```

##### `nonCompliantCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmNonCompliantSummary.property.nonCompliantCount"></a>

- *Type:* `number`

---

##### `severitySummary`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmNonCompliantSummary.property.severitySummary"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmSeveritySummary`](#aws-cdk-sdk.ssm.SsmSeveritySummary)

---

### SsmNotificationConfig <a name="aws-cdk-sdk.ssm.SsmNotificationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmNotificationConfig: ssm.SsmNotificationConfig = { ... }
```

##### `notificationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmNotificationConfig.property.notificationArn"></a>

- *Type:* `string`

---

##### `notificationEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmNotificationConfig.property.notificationEvents"></a>

- *Type:* `string`[]

---

##### `notificationType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmNotificationConfig.property.notificationType"></a>

- *Type:* `string`

---

### SsmOpsAggregator <a name="aws-cdk-sdk.ssm.SsmOpsAggregator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmOpsAggregator: ssm.SsmOpsAggregator = { ... }
```

##### `aggregators`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsAggregator.property.aggregators"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmOpsAggregator`](#aws-cdk-sdk.ssm.SsmOpsAggregator)[]

---

##### `aggregatorType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsAggregator.property.aggregatorType"></a>

- *Type:* `string`

---

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsAggregator.property.attributeName"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsAggregator.property.filters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmOpsFilter`](#aws-cdk-sdk.ssm.SsmOpsFilter)[]

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsAggregator.property.typeName"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsAggregator.property.values"></a>

- *Type:* {[ key: string ]: `string`}

---

### SsmOpsEntity <a name="aws-cdk-sdk.ssm.SsmOpsEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmOpsEntity: ssm.SsmOpsEntity = { ... }
```

##### `data`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsEntity.property.data"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.ssm.SsmOpsEntityItem`](#aws-cdk-sdk.ssm.SsmOpsEntityItem)}

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsEntity.property.id"></a>

- *Type:* `string`

---

### SsmOpsEntityItem <a name="aws-cdk-sdk.ssm.SsmOpsEntityItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmOpsEntityItem: ssm.SsmOpsEntityItem = { ... }
```

##### `captureTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsEntityItem.property.captureTime"></a>

- *Type:* `string`

---

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsEntityItem.property.content"></a>

- *Type:* {[ key: string ]: `string`}[]

---

### SsmOpsFilter <a name="aws-cdk-sdk.ssm.SsmOpsFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmOpsFilter: ssm.SsmOpsFilter = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmOpsFilter.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmOpsFilter.property.values"></a>

- *Type:* `string`[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsFilter.property.type"></a>

- *Type:* `string`

---

### SsmOpsItem <a name="aws-cdk-sdk.ssm.SsmOpsItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmOpsItem: ssm.SsmOpsItem = { ... }
```

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItem.property.category"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItem.property.createdBy"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItem.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItem.property.description"></a>

- *Type:* `string`

---

##### `lastModifiedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItem.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItem.property.lastModifiedTime"></a>

- *Type:* `string`

---

##### `notifications`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItem.property.notifications"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmOpsItemNotification`](#aws-cdk-sdk.ssm.SsmOpsItemNotification)[]

---

##### `operationalData`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItem.property.operationalData"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.ssm.SsmOpsItemDataValue`](#aws-cdk-sdk.ssm.SsmOpsItemDataValue)}

---

##### `opsItemId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItem.property.opsItemId"></a>

- *Type:* `string`

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItem.property.priority"></a>

- *Type:* `number`

---

##### `relatedOpsItems`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItem.property.relatedOpsItems"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmRelatedOpsItem`](#aws-cdk-sdk.ssm.SsmRelatedOpsItem)[]

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItem.property.severity"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItem.property.source"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItem.property.status"></a>

- *Type:* `string`

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItem.property.title"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItem.property.version"></a>

- *Type:* `string`

---

### SsmOpsItemDataValue <a name="aws-cdk-sdk.ssm.SsmOpsItemDataValue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmOpsItemDataValue: ssm.SsmOpsItemDataValue = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemDataValue.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemDataValue.property.value"></a>

- *Type:* `string`

---

### SsmOpsItemFilter <a name="aws-cdk-sdk.ssm.SsmOpsItemFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmOpsItemFilter: ssm.SsmOpsItemFilter = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemFilter.property.key"></a>

- *Type:* `string`

---

##### `operator`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemFilter.property.operator"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemFilter.property.values"></a>

- *Type:* `string`[]

---

### SsmOpsItemNotification <a name="aws-cdk-sdk.ssm.SsmOpsItemNotification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmOpsItemNotification: ssm.SsmOpsItemNotification = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemNotification.property.arn"></a>

- *Type:* `string`

---

### SsmOpsItemSummary <a name="aws-cdk-sdk.ssm.SsmOpsItemSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmOpsItemSummary: ssm.SsmOpsItemSummary = { ... }
```

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemSummary.property.category"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemSummary.property.createdBy"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemSummary.property.createdTime"></a>

- *Type:* `string`

---

##### `lastModifiedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemSummary.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemSummary.property.lastModifiedTime"></a>

- *Type:* `string`

---

##### `operationalData`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemSummary.property.operationalData"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.ssm.SsmOpsItemDataValue`](#aws-cdk-sdk.ssm.SsmOpsItemDataValue)}

---

##### `opsItemId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemSummary.property.opsItemId"></a>

- *Type:* `string`

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemSummary.property.priority"></a>

- *Type:* `number`

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemSummary.property.severity"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemSummary.property.source"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemSummary.property.status"></a>

- *Type:* `string`

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOpsItemSummary.property.title"></a>

- *Type:* `string`

---

### SsmOpsResultAttribute <a name="aws-cdk-sdk.ssm.SsmOpsResultAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmOpsResultAttribute: ssm.SsmOpsResultAttribute = { ... }
```

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmOpsResultAttribute.property.typeName"></a>

- *Type:* `string`

---

### SsmOutputSource <a name="aws-cdk-sdk.ssm.SsmOutputSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmOutputSource: ssm.SsmOutputSource = { ... }
```

##### `outputSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOutputSource.property.outputSourceId"></a>

- *Type:* `string`

---

##### `outputSourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmOutputSource.property.outputSourceType"></a>

- *Type:* `string`

---

### SsmParameter <a name="aws-cdk-sdk.ssm.SsmParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmParameter: ssm.SsmParameter = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameter.property.arn"></a>

- *Type:* `string`

---

##### `dataType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameter.property.dataType"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameter.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameter.property.name"></a>

- *Type:* `string`

---

##### `selector`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameter.property.selector"></a>

- *Type:* `string`

---

##### `sourceResult`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameter.property.sourceResult"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameter.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameter.property.value"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameter.property.version"></a>

- *Type:* `number`

---

### SsmParameterHistory <a name="aws-cdk-sdk.ssm.SsmParameterHistory"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmParameterHistory: ssm.SsmParameterHistory = { ... }
```

##### `allowedPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterHistory.property.allowedPattern"></a>

- *Type:* `string`

---

##### `dataType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterHistory.property.dataType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterHistory.property.description"></a>

- *Type:* `string`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterHistory.property.keyId"></a>

- *Type:* `string`

---

##### `labels`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterHistory.property.labels"></a>

- *Type:* `string`[]

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterHistory.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `lastModifiedUser`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterHistory.property.lastModifiedUser"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterHistory.property.name"></a>

- *Type:* `string`

---

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterHistory.property.policies"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmParameterInlinePolicy`](#aws-cdk-sdk.ssm.SsmParameterInlinePolicy)[]

---

##### `tier`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterHistory.property.tier"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterHistory.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterHistory.property.value"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterHistory.property.version"></a>

- *Type:* `number`

---

### SsmParameterInlinePolicy <a name="aws-cdk-sdk.ssm.SsmParameterInlinePolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmParameterInlinePolicy: ssm.SsmParameterInlinePolicy = { ... }
```

##### `policyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterInlinePolicy.property.policyStatus"></a>

- *Type:* `string`

---

##### `policyText`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterInlinePolicy.property.policyText"></a>

- *Type:* `string`

---

##### `policyType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterInlinePolicy.property.policyType"></a>

- *Type:* `string`

---

### SsmParameterMetadata <a name="aws-cdk-sdk.ssm.SsmParameterMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmParameterMetadata: ssm.SsmParameterMetadata = { ... }
```

##### `allowedPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterMetadata.property.allowedPattern"></a>

- *Type:* `string`

---

##### `dataType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterMetadata.property.dataType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterMetadata.property.description"></a>

- *Type:* `string`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterMetadata.property.keyId"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterMetadata.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `lastModifiedUser`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterMetadata.property.lastModifiedUser"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterMetadata.property.name"></a>

- *Type:* `string`

---

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterMetadata.property.policies"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmParameterInlinePolicy`](#aws-cdk-sdk.ssm.SsmParameterInlinePolicy)[]

---

##### `tier`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterMetadata.property.tier"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterMetadata.property.type"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterMetadata.property.version"></a>

- *Type:* `number`

---

### SsmParametersFilter <a name="aws-cdk-sdk.ssm.SsmParametersFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmParametersFilter: ssm.SsmParametersFilter = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmParametersFilter.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmParametersFilter.property.values"></a>

- *Type:* `string`[]

---

### SsmParameterStringFilter <a name="aws-cdk-sdk.ssm.SsmParameterStringFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmParameterStringFilter: ssm.SsmParameterStringFilter = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmParameterStringFilter.property.key"></a>

- *Type:* `string`

---

##### `option`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterStringFilter.property.option"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmParameterStringFilter.property.values"></a>

- *Type:* `string`[]

---

### SsmPatch <a name="aws-cdk-sdk.ssm.SsmPatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmPatch: ssm.SsmPatch = { ... }
```

##### `advisoryIds`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.advisoryIds"></a>

- *Type:* `string`[]

---

##### `arch`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.arch"></a>

- *Type:* `string`

---

##### `bugzillaIds`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.bugzillaIds"></a>

- *Type:* `string`[]

---

##### `classification`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.classification"></a>

- *Type:* `string`

---

##### `contentUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.contentUrl"></a>

- *Type:* `string`

---

##### `cveIds`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.cveIds"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.description"></a>

- *Type:* `string`

---

##### `epoch`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.epoch"></a>

- *Type:* `number`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.id"></a>

- *Type:* `string`

---

##### `kbNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.kbNumber"></a>

- *Type:* `string`

---

##### `language`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.language"></a>

- *Type:* `string`

---

##### `msrcNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.msrcNumber"></a>

- *Type:* `string`

---

##### `msrcSeverity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.msrcSeverity"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.name"></a>

- *Type:* `string`

---

##### `product`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.product"></a>

- *Type:* `string`

---

##### `productFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.productFamily"></a>

- *Type:* `string`

---

##### `release`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.release"></a>

- *Type:* `string`

---

##### `releaseDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.releaseDate"></a>

- *Type:* `string`

---

##### `repository`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.repository"></a>

- *Type:* `string`

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.severity"></a>

- *Type:* `string`

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.title"></a>

- *Type:* `string`

---

##### `vendor`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.vendor"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatch.property.version"></a>

- *Type:* `string`

---

### SsmPatchBaselineIdentity <a name="aws-cdk-sdk.ssm.SsmPatchBaselineIdentity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmPatchBaselineIdentity: ssm.SsmPatchBaselineIdentity = { ... }
```

##### `baselineDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatchBaselineIdentity.property.baselineDescription"></a>

- *Type:* `string`

---

##### `baselineId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatchBaselineIdentity.property.baselineId"></a>

- *Type:* `string`

---

##### `baselineName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatchBaselineIdentity.property.baselineName"></a>

- *Type:* `string`

---

##### `defaultBaseline`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatchBaselineIdentity.property.defaultBaseline"></a>

- *Type:* `boolean`

---

##### `operatingSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatchBaselineIdentity.property.operatingSystem"></a>

- *Type:* `string`

---

### SsmPatchComplianceData <a name="aws-cdk-sdk.ssm.SsmPatchComplianceData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmPatchComplianceData: ssm.SsmPatchComplianceData = { ... }
```

##### `classification`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPatchComplianceData.property.classification"></a>

- *Type:* `string`

---

##### `installedTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPatchComplianceData.property.installedTime"></a>

- *Type:* `string`

---

##### `kbId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPatchComplianceData.property.kbId"></a>

- *Type:* `string`

---

##### `severity`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPatchComplianceData.property.severity"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPatchComplianceData.property.state"></a>

- *Type:* `string`

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPatchComplianceData.property.title"></a>

- *Type:* `string`

---

##### `cveIds`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatchComplianceData.property.cveIds"></a>

- *Type:* `string`

---

### SsmPatchFilter <a name="aws-cdk-sdk.ssm.SsmPatchFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmPatchFilter: ssm.SsmPatchFilter = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPatchFilter.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPatchFilter.property.values"></a>

- *Type:* `string`[]

---

### SsmPatchFilterGroup <a name="aws-cdk-sdk.ssm.SsmPatchFilterGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmPatchFilterGroup: ssm.SsmPatchFilterGroup = { ... }
```

##### `patchFilters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPatchFilterGroup.property.patchFilters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchFilter`](#aws-cdk-sdk.ssm.SsmPatchFilter)[]

---

### SsmPatchGroupPatchBaselineMapping <a name="aws-cdk-sdk.ssm.SsmPatchGroupPatchBaselineMapping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmPatchGroupPatchBaselineMapping: ssm.SsmPatchGroupPatchBaselineMapping = { ... }
```

##### `baselineIdentity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatchGroupPatchBaselineMapping.property.baselineIdentity"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchBaselineIdentity`](#aws-cdk-sdk.ssm.SsmPatchBaselineIdentity)

---

##### `patchGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatchGroupPatchBaselineMapping.property.patchGroup"></a>

- *Type:* `string`

---

### SsmPatchOrchestratorFilter <a name="aws-cdk-sdk.ssm.SsmPatchOrchestratorFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmPatchOrchestratorFilter: ssm.SsmPatchOrchestratorFilter = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatchOrchestratorFilter.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatchOrchestratorFilter.property.values"></a>

- *Type:* `string`[]

---

### SsmPatchRule <a name="aws-cdk-sdk.ssm.SsmPatchRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmPatchRule: ssm.SsmPatchRule = { ... }
```

##### `patchFilterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPatchRule.property.patchFilterGroup"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchFilterGroup`](#aws-cdk-sdk.ssm.SsmPatchFilterGroup)

---

##### `approveAfterDays`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatchRule.property.approveAfterDays"></a>

- *Type:* `number`

---

##### `approveUntilDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatchRule.property.approveUntilDate"></a>

- *Type:* `string`

---

##### `complianceLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatchRule.property.complianceLevel"></a>

- *Type:* `string`

---

##### `enableNonSecurity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatchRule.property.enableNonSecurity"></a>

- *Type:* `boolean`

---

### SsmPatchRuleGroup <a name="aws-cdk-sdk.ssm.SsmPatchRuleGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmPatchRuleGroup: ssm.SsmPatchRuleGroup = { ... }
```

##### `patchRules`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPatchRuleGroup.property.patchRules"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchRule`](#aws-cdk-sdk.ssm.SsmPatchRule)[]

---

### SsmPatchSource <a name="aws-cdk-sdk.ssm.SsmPatchSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmPatchSource: ssm.SsmPatchSource = { ... }
```

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPatchSource.property.configuration"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPatchSource.property.name"></a>

- *Type:* `string`

---

##### `products`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPatchSource.property.products"></a>

- *Type:* `string`[]

---

### SsmPatchStatus <a name="aws-cdk-sdk.ssm.SsmPatchStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmPatchStatus: ssm.SsmPatchStatus = { ... }
```

##### `approvalDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatchStatus.property.approvalDate"></a>

- *Type:* `string`

---

##### `complianceLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatchStatus.property.complianceLevel"></a>

- *Type:* `string`

---

##### `deploymentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPatchStatus.property.deploymentStatus"></a>

- *Type:* `string`

---

### SsmProgressCounters <a name="aws-cdk-sdk.ssm.SsmProgressCounters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmProgressCounters: ssm.SsmProgressCounters = { ... }
```

##### `cancelledSteps`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmProgressCounters.property.cancelledSteps"></a>

- *Type:* `number`

---

##### `failedSteps`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmProgressCounters.property.failedSteps"></a>

- *Type:* `number`

---

##### `successSteps`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmProgressCounters.property.successSteps"></a>

- *Type:* `number`

---

##### `timedOutSteps`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmProgressCounters.property.timedOutSteps"></a>

- *Type:* `number`

---

##### `totalSteps`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmProgressCounters.property.totalSteps"></a>

- *Type:* `number`

---

### SsmPutComplianceItemsRequest <a name="aws-cdk-sdk.ssm.SsmPutComplianceItemsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmPutComplianceItemsRequest: ssm.SsmPutComplianceItemsRequest = { ... }
```

##### `complianceType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPutComplianceItemsRequest.property.complianceType"></a>

- *Type:* `string`

---

##### `executionSummary`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPutComplianceItemsRequest.property.executionSummary"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmComplianceExecutionSummary`](#aws-cdk-sdk.ssm.SsmComplianceExecutionSummary)

---

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPutComplianceItemsRequest.property.items"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmComplianceItemEntry`](#aws-cdk-sdk.ssm.SsmComplianceItemEntry)[]

---

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPutComplianceItemsRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPutComplianceItemsRequest.property.resourceType"></a>

- *Type:* `string`

---

##### `itemContentHash`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPutComplianceItemsRequest.property.itemContentHash"></a>

- *Type:* `string`

---

##### `uploadType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPutComplianceItemsRequest.property.uploadType"></a>

- *Type:* `string`

---

### SsmPutComplianceItemsResult <a name="aws-cdk-sdk.ssm.SsmPutComplianceItemsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmPutComplianceItemsResult: ssm.SsmPutComplianceItemsResult = { ... }
```

### SsmPutInventoryRequest <a name="aws-cdk-sdk.ssm.SsmPutInventoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmPutInventoryRequest: ssm.SsmPutInventoryRequest = { ... }
```

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPutInventoryRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `items`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPutInventoryRequest.property.items"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryItem`](#aws-cdk-sdk.ssm.SsmInventoryItem)[]

---

### SsmPutInventoryResult <a name="aws-cdk-sdk.ssm.SsmPutInventoryResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmPutInventoryResult: ssm.SsmPutInventoryResult = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPutInventoryResult.property.message"></a>

- *Type:* `string`

---

### SsmPutParameterRequest <a name="aws-cdk-sdk.ssm.SsmPutParameterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmPutParameterRequest: ssm.SsmPutParameterRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPutParameterRequest.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmPutParameterRequest.property.value"></a>

- *Type:* `string`

---

##### `allowedPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPutParameterRequest.property.allowedPattern"></a>

- *Type:* `string`

---

##### `dataType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPutParameterRequest.property.dataType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPutParameterRequest.property.description"></a>

- *Type:* `string`

---

##### `keyId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPutParameterRequest.property.keyId"></a>

- *Type:* `string`

---

##### `overwrite`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPutParameterRequest.property.overwrite"></a>

- *Type:* `boolean`

---

##### `policies`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPutParameterRequest.property.policies"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPutParameterRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTag`](#aws-cdk-sdk.ssm.SsmTag)[]

---

##### `tier`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPutParameterRequest.property.tier"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPutParameterRequest.property.type"></a>

- *Type:* `string`

---

### SsmPutParameterResult <a name="aws-cdk-sdk.ssm.SsmPutParameterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmPutParameterResult: ssm.SsmPutParameterResult = { ... }
```

##### `tier`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPutParameterResult.property.tier"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmPutParameterResult.property.version"></a>

- *Type:* `number`

---

### SsmRegisterDefaultPatchBaselineRequest <a name="aws-cdk-sdk.ssm.SsmRegisterDefaultPatchBaselineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmRegisterDefaultPatchBaselineRequest: ssm.SsmRegisterDefaultPatchBaselineRequest = { ... }
```

##### `baselineId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterDefaultPatchBaselineRequest.property.baselineId"></a>

- *Type:* `string`

---

### SsmRegisterDefaultPatchBaselineResult <a name="aws-cdk-sdk.ssm.SsmRegisterDefaultPatchBaselineResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmRegisterDefaultPatchBaselineResult: ssm.SsmRegisterDefaultPatchBaselineResult = { ... }
```

##### `baselineId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterDefaultPatchBaselineResult.property.baselineId"></a>

- *Type:* `string`

---

### SsmRegisterPatchBaselineForPatchGroupRequest <a name="aws-cdk-sdk.ssm.SsmRegisterPatchBaselineForPatchGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmRegisterPatchBaselineForPatchGroupRequest: ssm.SsmRegisterPatchBaselineForPatchGroupRequest = { ... }
```

##### `baselineId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterPatchBaselineForPatchGroupRequest.property.baselineId"></a>

- *Type:* `string`

---

##### `patchGroup`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterPatchBaselineForPatchGroupRequest.property.patchGroup"></a>

- *Type:* `string`

---

### SsmRegisterPatchBaselineForPatchGroupResult <a name="aws-cdk-sdk.ssm.SsmRegisterPatchBaselineForPatchGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmRegisterPatchBaselineForPatchGroupResult: ssm.SsmRegisterPatchBaselineForPatchGroupResult = { ... }
```

##### `baselineId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterPatchBaselineForPatchGroupResult.property.baselineId"></a>

- *Type:* `string`

---

##### `patchGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterPatchBaselineForPatchGroupResult.property.patchGroup"></a>

- *Type:* `string`

---

### SsmRegisterTargetWithMaintenanceWindowRequest <a name="aws-cdk-sdk.ssm.SsmRegisterTargetWithMaintenanceWindowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmRegisterTargetWithMaintenanceWindowRequest: ssm.SsmRegisterTargetWithMaintenanceWindowRequest = { ... }
```

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTargetWithMaintenanceWindowRequest.property.resourceType"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTargetWithMaintenanceWindowRequest.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTargetWithMaintenanceWindowRequest.property.windowId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTargetWithMaintenanceWindowRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTargetWithMaintenanceWindowRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTargetWithMaintenanceWindowRequest.property.name"></a>

- *Type:* `string`

---

##### `ownerInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTargetWithMaintenanceWindowRequest.property.ownerInformation"></a>

- *Type:* `string`

---

### SsmRegisterTargetWithMaintenanceWindowResult <a name="aws-cdk-sdk.ssm.SsmRegisterTargetWithMaintenanceWindowResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmRegisterTargetWithMaintenanceWindowResult: ssm.SsmRegisterTargetWithMaintenanceWindowResult = { ... }
```

##### `windowTargetId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTargetWithMaintenanceWindowResult.property.windowTargetId"></a>

- *Type:* `string`

---

### SsmRegisterTaskWithMaintenanceWindowRequest <a name="aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmRegisterTaskWithMaintenanceWindowRequest: ssm.SsmRegisterTaskWithMaintenanceWindowRequest = { ... }
```

##### `maxConcurrency`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest.property.maxErrors"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

##### `taskArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest.property.taskArn"></a>

- *Type:* `string`

---

##### `taskType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest.property.taskType"></a>

- *Type:* `string`

---

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest.property.windowId"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest.property.description"></a>

- *Type:* `string`

---

##### `loggingInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest.property.loggingInfo"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmLoggingInfo`](#aws-cdk-sdk.ssm.SsmLoggingInfo)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest.property.name"></a>

- *Type:* `string`

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest.property.priority"></a>

- *Type:* `number`

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `taskInvocationParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest.property.taskInvocationParameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskInvocationParameters`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskInvocationParameters)

---

##### `taskParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest.property.taskParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression)}

---

### SsmRegisterTaskWithMaintenanceWindowResult <a name="aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmRegisterTaskWithMaintenanceWindowResult: ssm.SsmRegisterTaskWithMaintenanceWindowResult = { ... }
```

##### `windowTaskId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowResult.property.windowTaskId"></a>

- *Type:* `string`

---

### SsmRelatedOpsItem <a name="aws-cdk-sdk.ssm.SsmRelatedOpsItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmRelatedOpsItem: ssm.SsmRelatedOpsItem = { ... }
```

##### `opsItemId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmRelatedOpsItem.property.opsItemId"></a>

- *Type:* `string`

---

### SsmRemoveTagsFromResourceRequest <a name="aws-cdk-sdk.ssm.SsmRemoveTagsFromResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmRemoveTagsFromResourceRequest: ssm.SsmRemoveTagsFromResourceRequest = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmRemoveTagsFromResourceRequest.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmRemoveTagsFromResourceRequest.property.resourceType"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmRemoveTagsFromResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### SsmRemoveTagsFromResourceResult <a name="aws-cdk-sdk.ssm.SsmRemoveTagsFromResourceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmRemoveTagsFromResourceResult: ssm.SsmRemoveTagsFromResourceResult = { ... }
```

### SsmResetServiceSettingRequest <a name="aws-cdk-sdk.ssm.SsmResetServiceSettingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmResetServiceSettingRequest: ssm.SsmResetServiceSettingRequest = { ... }
```

##### `settingId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmResetServiceSettingRequest.property.settingId"></a>

- *Type:* `string`

---

### SsmResetServiceSettingResult <a name="aws-cdk-sdk.ssm.SsmResetServiceSettingResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmResetServiceSettingResult: ssm.SsmResetServiceSettingResult = { ... }
```

##### `serviceSetting`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResetServiceSettingResult.property.serviceSetting"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmServiceSetting`](#aws-cdk-sdk.ssm.SsmServiceSetting)

---

### SsmResolvedTargets <a name="aws-cdk-sdk.ssm.SsmResolvedTargets"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmResolvedTargets: ssm.SsmResolvedTargets = { ... }
```

##### `parameterValues`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResolvedTargets.property.parameterValues"></a>

- *Type:* `string`[]

---

##### `truncated`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResolvedTargets.property.truncated"></a>

- *Type:* `boolean`

---

### SsmResourceComplianceSummaryItem <a name="aws-cdk-sdk.ssm.SsmResourceComplianceSummaryItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmResourceComplianceSummaryItem: ssm.SsmResourceComplianceSummaryItem = { ... }
```

##### `complianceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceComplianceSummaryItem.property.complianceType"></a>

- *Type:* `string`

---

##### `compliantSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceComplianceSummaryItem.property.compliantSummary"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCompliantSummary`](#aws-cdk-sdk.ssm.SsmCompliantSummary)

---

##### `executionSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceComplianceSummaryItem.property.executionSummary"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmComplianceExecutionSummary`](#aws-cdk-sdk.ssm.SsmComplianceExecutionSummary)

---

##### `nonCompliantSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceComplianceSummaryItem.property.nonCompliantSummary"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmNonCompliantSummary`](#aws-cdk-sdk.ssm.SsmNonCompliantSummary)

---

##### `overallSeverity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceComplianceSummaryItem.property.overallSeverity"></a>

- *Type:* `string`

---

##### `resourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceComplianceSummaryItem.property.resourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceComplianceSummaryItem.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceComplianceSummaryItem.property.status"></a>

- *Type:* `string`

---

### SsmResourceDataSyncAwsOrganizationsSource <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncAwsOrganizationsSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmResourceDataSyncAwsOrganizationsSource: ssm.SsmResourceDataSyncAwsOrganizationsSource = { ... }
```

##### `organizationSourceType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncAwsOrganizationsSource.property.organizationSourceType"></a>

- *Type:* `string`

---

##### `organizationalUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncAwsOrganizationsSource.property.organizationalUnits"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResourceDataSyncOrganizationalUnit`](#aws-cdk-sdk.ssm.SsmResourceDataSyncOrganizationalUnit)[]

---

### SsmResourceDataSyncDestinationDataSharing <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncDestinationDataSharing"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmResourceDataSyncDestinationDataSharing: ssm.SsmResourceDataSyncDestinationDataSharing = { ... }
```

##### `destinationDataSharingType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncDestinationDataSharing.property.destinationDataSharingType"></a>

- *Type:* `string`

---

### SsmResourceDataSyncItem <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmResourceDataSyncItem: ssm.SsmResourceDataSyncItem = { ... }
```

##### `lastStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncItem.property.lastStatus"></a>

- *Type:* `string`

---

##### `lastSuccessfulSyncTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncItem.property.lastSuccessfulSyncTime"></a>

- *Type:* `string`

---

##### `lastSyncStatusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncItem.property.lastSyncStatusMessage"></a>

- *Type:* `string`

---

##### `lastSyncTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncItem.property.lastSyncTime"></a>

- *Type:* `string`

---

##### `s3Destination`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncItem.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResourceDataSyncS3Destination`](#aws-cdk-sdk.ssm.SsmResourceDataSyncS3Destination)

---

##### `syncCreatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncItem.property.syncCreatedTime"></a>

- *Type:* `string`

---

##### `syncLastModifiedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncItem.property.syncLastModifiedTime"></a>

- *Type:* `string`

---

##### `syncName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncItem.property.syncName"></a>

- *Type:* `string`

---

##### `syncSource`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncItem.property.syncSource"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResourceDataSyncSourceWithState`](#aws-cdk-sdk.ssm.SsmResourceDataSyncSourceWithState)

---

##### `syncType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncItem.property.syncType"></a>

- *Type:* `string`

---

### SsmResourceDataSyncOrganizationalUnit <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncOrganizationalUnit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmResourceDataSyncOrganizationalUnit: ssm.SsmResourceDataSyncOrganizationalUnit = { ... }
```

##### `organizationalUnitId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncOrganizationalUnit.property.organizationalUnitId"></a>

- *Type:* `string`

---

### SsmResourceDataSyncS3Destination <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncS3Destination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmResourceDataSyncS3Destination: ssm.SsmResourceDataSyncS3Destination = { ... }
```

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncS3Destination.property.bucketName"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncS3Destination.property.region"></a>

- *Type:* `string`

---

##### `syncFormat`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncS3Destination.property.syncFormat"></a>

- *Type:* `string`

---

##### `awskmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncS3Destination.property.awskmsKeyArn"></a>

- *Type:* `string`

---

##### `destinationDataSharing`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncS3Destination.property.destinationDataSharing"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResourceDataSyncDestinationDataSharing`](#aws-cdk-sdk.ssm.SsmResourceDataSyncDestinationDataSharing)

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncS3Destination.property.prefix"></a>

- *Type:* `string`

---

### SsmResourceDataSyncSource <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmResourceDataSyncSource: ssm.SsmResourceDataSyncSource = { ... }
```

##### `sourceRegions`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncSource.property.sourceRegions"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncSource.property.sourceType"></a>

- *Type:* `string`

---

##### `awsOrganizationsSource`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncSource.property.awsOrganizationsSource"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResourceDataSyncAwsOrganizationsSource`](#aws-cdk-sdk.ssm.SsmResourceDataSyncAwsOrganizationsSource)

---

##### `includeFutureRegions`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncSource.property.includeFutureRegions"></a>

- *Type:* `boolean`

---

### SsmResourceDataSyncSourceWithState <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncSourceWithState"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmResourceDataSyncSourceWithState: ssm.SsmResourceDataSyncSourceWithState = { ... }
```

##### `awsOrganizationsSource`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncSourceWithState.property.awsOrganizationsSource"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResourceDataSyncAwsOrganizationsSource`](#aws-cdk-sdk.ssm.SsmResourceDataSyncAwsOrganizationsSource)

---

##### `includeFutureRegions`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncSourceWithState.property.includeFutureRegions"></a>

- *Type:* `boolean`

---

##### `sourceRegions`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncSourceWithState.property.sourceRegions"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncSourceWithState.property.sourceType"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResourceDataSyncSourceWithState.property.state"></a>

- *Type:* `string`

---

### SsmResultAttribute <a name="aws-cdk-sdk.ssm.SsmResultAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmResultAttribute: ssm.SsmResultAttribute = { ... }
```

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmResultAttribute.property.typeName"></a>

- *Type:* `string`

---

### SsmResumeSessionRequest <a name="aws-cdk-sdk.ssm.SsmResumeSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmResumeSessionRequest: ssm.SsmResumeSessionRequest = { ... }
```

##### `sessionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmResumeSessionRequest.property.sessionId"></a>

- *Type:* `string`

---

### SsmResumeSessionResponse <a name="aws-cdk-sdk.ssm.SsmResumeSessionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmResumeSessionResponse: ssm.SsmResumeSessionResponse = { ... }
```

##### `sessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResumeSessionResponse.property.sessionId"></a>

- *Type:* `string`

---

##### `streamUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResumeSessionResponse.property.streamUrl"></a>

- *Type:* `string`

---

##### `tokenValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmResumeSessionResponse.property.tokenValue"></a>

- *Type:* `string`

---

### Ssms3OutputLocation <a name="aws-cdk-sdk.ssm.Ssms3OutputLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssms3OutputLocation: ssm.Ssms3OutputLocation = { ... }
```

##### `outputS3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.Ssms3OutputLocation.property.outputS3BucketName"></a>

- *Type:* `string`

---

##### `outputS3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.Ssms3OutputLocation.property.outputS3KeyPrefix"></a>

- *Type:* `string`

---

##### `outputS3Region`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.Ssms3OutputLocation.property.outputS3Region"></a>

- *Type:* `string`

---

### Ssms3OutputUrl <a name="aws-cdk-sdk.ssm.Ssms3OutputUrl"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssms3OutputUrl: ssm.Ssms3OutputUrl = { ... }
```

##### `outputUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.Ssms3OutputUrl.property.outputUrl"></a>

- *Type:* `string`

---

### SsmScheduledWindowExecution <a name="aws-cdk-sdk.ssm.SsmScheduledWindowExecution"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmScheduledWindowExecution: ssm.SsmScheduledWindowExecution = { ... }
```

##### `executionTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmScheduledWindowExecution.property.executionTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmScheduledWindowExecution.property.name"></a>

- *Type:* `string`

---

##### `windowId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmScheduledWindowExecution.property.windowId"></a>

- *Type:* `string`

---

### SsmSendAutomationSignalRequest <a name="aws-cdk-sdk.ssm.SsmSendAutomationSignalRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmSendAutomationSignalRequest: ssm.SsmSendAutomationSignalRequest = { ... }
```

##### `automationExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmSendAutomationSignalRequest.property.automationExecutionId"></a>

- *Type:* `string`

---

##### `signalType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmSendAutomationSignalRequest.property.signalType"></a>

- *Type:* `string`

---

##### `payload`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendAutomationSignalRequest.property.payload"></a>

- *Type:* {[ key: string ]: `string`[]}

---

### SsmSendAutomationSignalResult <a name="aws-cdk-sdk.ssm.SsmSendAutomationSignalResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmSendAutomationSignalResult: ssm.SsmSendAutomationSignalResult = { ... }
```

### SsmSendCommandRequest <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmSendCommandRequest: ssm.SsmSendCommandRequest = { ... }
```

##### `documentName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest.property.documentName"></a>

- *Type:* `string`

---

##### `cloudWatchOutputConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest.property.cloudWatchOutputConfig"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCloudWatchOutputConfig`](#aws-cdk-sdk.ssm.SsmCloudWatchOutputConfig)

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest.property.comment"></a>

- *Type:* `string`

---

##### `documentHash`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest.property.documentHash"></a>

- *Type:* `string`

---

##### `documentHashType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest.property.documentHashType"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest.property.documentVersion"></a>

- *Type:* `string`

---

##### `instanceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest.property.instanceIds"></a>

- *Type:* `string`[]

---

##### `maxConcurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest.property.maxErrors"></a>

- *Type:* `string`

---

##### `notificationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest.property.notificationConfig"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmNotificationConfig`](#aws-cdk-sdk.ssm.SsmNotificationConfig)

---

##### `outputS3BucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest.property.outputS3BucketName"></a>

- *Type:* `string`

---

##### `outputS3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest.property.outputS3KeyPrefix"></a>

- *Type:* `string`

---

##### `outputS3Region`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest.property.outputS3Region"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandRequest.property.timeoutSeconds"></a>

- *Type:* `number`

---

### SsmSendCommandResult <a name="aws-cdk-sdk.ssm.SsmSendCommandResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmSendCommandResult: ssm.SsmSendCommandResult = { ... }
```

##### `command`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSendCommandResult.property.command"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCommand`](#aws-cdk-sdk.ssm.SsmCommand)

---

### SsmServiceSetting <a name="aws-cdk-sdk.ssm.SsmServiceSetting"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmServiceSetting: ssm.SsmServiceSetting = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmServiceSetting.property.arn"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmServiceSetting.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `lastModifiedUser`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmServiceSetting.property.lastModifiedUser"></a>

- *Type:* `string`

---

##### `settingId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmServiceSetting.property.settingId"></a>

- *Type:* `string`

---

##### `settingValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmServiceSetting.property.settingValue"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmServiceSetting.property.status"></a>

- *Type:* `string`

---

### SsmSession <a name="aws-cdk-sdk.ssm.SsmSession"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmSession: ssm.SsmSession = { ... }
```

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSession.property.details"></a>

- *Type:* `string`

---

##### `documentName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSession.property.documentName"></a>

- *Type:* `string`

---

##### `endDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSession.property.endDate"></a>

- *Type:* `string`

---

##### `outputUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSession.property.outputUrl"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmSessionManagerOutputUrl`](#aws-cdk-sdk.ssm.SsmSessionManagerOutputUrl)

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSession.property.owner"></a>

- *Type:* `string`

---

##### `sessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSession.property.sessionId"></a>

- *Type:* `string`

---

##### `startDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSession.property.startDate"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSession.property.status"></a>

- *Type:* `string`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSession.property.target"></a>

- *Type:* `string`

---

### SsmSessionFilter <a name="aws-cdk-sdk.ssm.SsmSessionFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmSessionFilter: ssm.SsmSessionFilter = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmSessionFilter.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmSessionFilter.property.value"></a>

- *Type:* `string`

---

### SsmSessionManagerOutputUrl <a name="aws-cdk-sdk.ssm.SsmSessionManagerOutputUrl"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmSessionManagerOutputUrl: ssm.SsmSessionManagerOutputUrl = { ... }
```

##### `cloudWatchOutputUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSessionManagerOutputUrl.property.cloudWatchOutputUrl"></a>

- *Type:* `string`

---

##### `s3OutputUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSessionManagerOutputUrl.property.s3OutputUrl"></a>

- *Type:* `string`

---

### SsmSeveritySummary <a name="aws-cdk-sdk.ssm.SsmSeveritySummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmSeveritySummary: ssm.SsmSeveritySummary = { ... }
```

##### `criticalCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSeveritySummary.property.criticalCount"></a>

- *Type:* `number`

---

##### `highCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSeveritySummary.property.highCount"></a>

- *Type:* `number`

---

##### `informationalCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSeveritySummary.property.informationalCount"></a>

- *Type:* `number`

---

##### `lowCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSeveritySummary.property.lowCount"></a>

- *Type:* `number`

---

##### `mediumCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSeveritySummary.property.mediumCount"></a>

- *Type:* `number`

---

##### `unspecifiedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmSeveritySummary.property.unspecifiedCount"></a>

- *Type:* `number`

---

### SsmStartAssociationsOnceRequest <a name="aws-cdk-sdk.ssm.SsmStartAssociationsOnceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmStartAssociationsOnceRequest: ssm.SsmStartAssociationsOnceRequest = { ... }
```

##### `associationIds`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmStartAssociationsOnceRequest.property.associationIds"></a>

- *Type:* `string`[]

---

### SsmStartAssociationsOnceResult <a name="aws-cdk-sdk.ssm.SsmStartAssociationsOnceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmStartAssociationsOnceResult: ssm.SsmStartAssociationsOnceResult = { ... }
```

### SsmStartAutomationExecutionRequest <a name="aws-cdk-sdk.ssm.SsmStartAutomationExecutionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmStartAutomationExecutionRequest: ssm.SsmStartAutomationExecutionRequest = { ... }
```

##### `documentName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmStartAutomationExecutionRequest.property.documentName"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStartAutomationExecutionRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStartAutomationExecutionRequest.property.documentVersion"></a>

- *Type:* `string`

---

##### `maxConcurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStartAutomationExecutionRequest.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStartAutomationExecutionRequest.property.maxErrors"></a>

- *Type:* `string`

---

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStartAutomationExecutionRequest.property.mode"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStartAutomationExecutionRequest.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStartAutomationExecutionRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTag`](#aws-cdk-sdk.ssm.SsmTag)[]

---

##### `targetLocations`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStartAutomationExecutionRequest.property.targetLocations"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTargetLocation`](#aws-cdk-sdk.ssm.SsmTargetLocation)[]

---

##### `targetMaps`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStartAutomationExecutionRequest.property.targetMaps"></a>

- *Type:* {[ key: string ]: `string`[]}[]

---

##### `targetParameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStartAutomationExecutionRequest.property.targetParameterName"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStartAutomationExecutionRequest.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

### SsmStartAutomationExecutionResult <a name="aws-cdk-sdk.ssm.SsmStartAutomationExecutionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmStartAutomationExecutionResult: ssm.SsmStartAutomationExecutionResult = { ... }
```

##### `automationExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStartAutomationExecutionResult.property.automationExecutionId"></a>

- *Type:* `string`

---

### SsmStartSessionRequest <a name="aws-cdk-sdk.ssm.SsmStartSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmStartSessionRequest: ssm.SsmStartSessionRequest = { ... }
```

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmStartSessionRequest.property.target"></a>

- *Type:* `string`

---

##### `documentName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStartSessionRequest.property.documentName"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStartSessionRequest.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

### SsmStartSessionResponse <a name="aws-cdk-sdk.ssm.SsmStartSessionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmStartSessionResponse: ssm.SsmStartSessionResponse = { ... }
```

##### `sessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStartSessionResponse.property.sessionId"></a>

- *Type:* `string`

---

##### `streamUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStartSessionResponse.property.streamUrl"></a>

- *Type:* `string`

---

##### `tokenValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStartSessionResponse.property.tokenValue"></a>

- *Type:* `string`

---

### SsmStepExecution <a name="aws-cdk-sdk.ssm.SsmStepExecution"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmStepExecution: ssm.SsmStepExecution = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.action"></a>

- *Type:* `string`

---

##### `executionEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.executionEndTime"></a>

- *Type:* `string`

---

##### `executionStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.executionStartTime"></a>

- *Type:* `string`

---

##### `failureDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.failureDetails"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmFailureDetails`](#aws-cdk-sdk.ssm.SsmFailureDetails)

---

##### `failureMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.failureMessage"></a>

- *Type:* `string`

---

##### `inputs`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.inputs"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `isCritical`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.isCritical"></a>

- *Type:* `boolean`

---

##### `isEnd`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.isEnd"></a>

- *Type:* `boolean`

---

##### `maxAttempts`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.maxAttempts"></a>

- *Type:* `number`

---

##### `nextStep`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.nextStep"></a>

- *Type:* `string`

---

##### `onFailure`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.onFailure"></a>

- *Type:* `string`

---

##### `outputs`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.outputs"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `overriddenParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.overriddenParameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `response`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.response"></a>

- *Type:* `string`

---

##### `responseCode`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.responseCode"></a>

- *Type:* `string`

---

##### `stepExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.stepExecutionId"></a>

- *Type:* `string`

---

##### `stepName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.stepName"></a>

- *Type:* `string`

---

##### `stepStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.stepStatus"></a>

- *Type:* `string`

---

##### `targetLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.targetLocation"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTargetLocation`](#aws-cdk-sdk.ssm.SsmTargetLocation)

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.timeoutSeconds"></a>

- *Type:* `number`

---

##### `validNextSteps`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecution.property.validNextSteps"></a>

- *Type:* `string`[]

---

### SsmStepExecutionFilter <a name="aws-cdk-sdk.ssm.SsmStepExecutionFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmStepExecutionFilter: ssm.SsmStepExecutionFilter = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecutionFilter.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmStepExecutionFilter.property.values"></a>

- *Type:* `string`[]

---

### SsmStopAutomationExecutionRequest <a name="aws-cdk-sdk.ssm.SsmStopAutomationExecutionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmStopAutomationExecutionRequest: ssm.SsmStopAutomationExecutionRequest = { ... }
```

##### `automationExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmStopAutomationExecutionRequest.property.automationExecutionId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmStopAutomationExecutionRequest.property.type"></a>

- *Type:* `string`

---

### SsmStopAutomationExecutionResult <a name="aws-cdk-sdk.ssm.SsmStopAutomationExecutionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmStopAutomationExecutionResult: ssm.SsmStopAutomationExecutionResult = { ... }
```

### SsmTag <a name="aws-cdk-sdk.ssm.SsmTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmTag: ssm.SsmTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmTag.property.value"></a>

- *Type:* `string`

---

### SsmTarget <a name="aws-cdk-sdk.ssm.SsmTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmTarget: ssm.SsmTarget = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmTarget.property.key"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmTarget.property.values"></a>

- *Type:* `string`[]

---

### SsmTargetLocation <a name="aws-cdk-sdk.ssm.SsmTargetLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmTargetLocation: ssm.SsmTargetLocation = { ... }
```

##### `accounts`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmTargetLocation.property.accounts"></a>

- *Type:* `string`[]

---

##### `executionRoleName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmTargetLocation.property.executionRoleName"></a>

- *Type:* `string`

---

##### `regions`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmTargetLocation.property.regions"></a>

- *Type:* `string`[]

---

##### `targetLocationMaxConcurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmTargetLocation.property.targetLocationMaxConcurrency"></a>

- *Type:* `string`

---

##### `targetLocationMaxErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmTargetLocation.property.targetLocationMaxErrors"></a>

- *Type:* `string`

---

### SsmTerminateSessionRequest <a name="aws-cdk-sdk.ssm.SsmTerminateSessionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmTerminateSessionRequest: ssm.SsmTerminateSessionRequest = { ... }
```

##### `sessionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmTerminateSessionRequest.property.sessionId"></a>

- *Type:* `string`

---

### SsmTerminateSessionResponse <a name="aws-cdk-sdk.ssm.SsmTerminateSessionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmTerminateSessionResponse: ssm.SsmTerminateSessionResponse = { ... }
```

##### `sessionId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmTerminateSessionResponse.property.sessionId"></a>

- *Type:* `string`

---

### SsmUpdateAssociationRequest <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateAssociationRequest: ssm.SsmUpdateAssociationRequest = { ... }
```

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationRequest.property.associationId"></a>

- *Type:* `string`

---

##### `applyOnlyAtCronInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationRequest.property.applyOnlyAtCronInterval"></a>

- *Type:* `boolean`

---

##### `associationName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationRequest.property.associationName"></a>

- *Type:* `string`

---

##### `associationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationRequest.property.associationVersion"></a>

- *Type:* `string`

---

##### `automationTargetParameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationRequest.property.automationTargetParameterName"></a>

- *Type:* `string`

---

##### `complianceSeverity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationRequest.property.complianceSeverity"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationRequest.property.documentVersion"></a>

- *Type:* `string`

---

##### `maxConcurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationRequest.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationRequest.property.maxErrors"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationRequest.property.name"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationRequest.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstanceAssociationOutputLocation`](#aws-cdk-sdk.ssm.SsmInstanceAssociationOutputLocation)

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationRequest.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `scheduleExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationRequest.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `syncCompliance`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationRequest.property.syncCompliance"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationRequest.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

### SsmUpdateAssociationResult <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateAssociationResult: ssm.SsmUpdateAssociationResult = { ... }
```

##### `associationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationResult.property.associationDescription"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationDescription`](#aws-cdk-sdk.ssm.SsmAssociationDescription)

---

### SsmUpdateAssociationStatusRequest <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateAssociationStatusRequest: ssm.SsmUpdateAssociationStatusRequest = { ... }
```

##### `associationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest.property.associationStatus"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationStatus`](#aws-cdk-sdk.ssm.SsmAssociationStatus)

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest.property.instanceId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest.property.name"></a>

- *Type:* `string`

---

### SsmUpdateAssociationStatusResult <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationStatusResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateAssociationStatusResult: ssm.SsmUpdateAssociationStatusResult = { ... }
```

##### `associationDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateAssociationStatusResult.property.associationDescription"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationDescription`](#aws-cdk-sdk.ssm.SsmAssociationDescription)

---

### SsmUpdateDocumentDefaultVersionRequest <a name="aws-cdk-sdk.ssm.SsmUpdateDocumentDefaultVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateDocumentDefaultVersionRequest: ssm.SsmUpdateDocumentDefaultVersionRequest = { ... }
```

##### `documentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateDocumentDefaultVersionRequest.property.documentVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateDocumentDefaultVersionRequest.property.name"></a>

- *Type:* `string`

---

### SsmUpdateDocumentDefaultVersionResult <a name="aws-cdk-sdk.ssm.SsmUpdateDocumentDefaultVersionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateDocumentDefaultVersionResult: ssm.SsmUpdateDocumentDefaultVersionResult = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateDocumentDefaultVersionResult.property.description"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentDefaultVersionDescription`](#aws-cdk-sdk.ssm.SsmDocumentDefaultVersionDescription)

---

### SsmUpdateDocumentRequest <a name="aws-cdk-sdk.ssm.SsmUpdateDocumentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateDocumentRequest: ssm.SsmUpdateDocumentRequest = { ... }
```

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateDocumentRequest.property.content"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateDocumentRequest.property.name"></a>

- *Type:* `string`

---

##### `attachments`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateDocumentRequest.property.attachments"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAttachmentsSource`](#aws-cdk-sdk.ssm.SsmAttachmentsSource)[]

---

##### `documentFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateDocumentRequest.property.documentFormat"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateDocumentRequest.property.documentVersion"></a>

- *Type:* `string`

---

##### `targetType`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateDocumentRequest.property.targetType"></a>

- *Type:* `string`

---

##### `versionName`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateDocumentRequest.property.versionName"></a>

- *Type:* `string`

---

### SsmUpdateDocumentResult <a name="aws-cdk-sdk.ssm.SsmUpdateDocumentResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateDocumentResult: ssm.SsmUpdateDocumentResult = { ... }
```

##### `documentDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateDocumentResult.property.documentDescription"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentDescription`](#aws-cdk-sdk.ssm.SsmDocumentDescription)

---

### SsmUpdateMaintenanceWindowRequest <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateMaintenanceWindowRequest: ssm.SsmUpdateMaintenanceWindowRequest = { ... }
```

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest.property.windowId"></a>

- *Type:* `string`

---

##### `allowUnassociatedTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest.property.allowUnassociatedTargets"></a>

- *Type:* `boolean`

---

##### `cutoff`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest.property.cutoff"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest.property.description"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest.property.duration"></a>

- *Type:* `number`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest.property.enabled"></a>

- *Type:* `boolean`

---

##### `endDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest.property.endDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest.property.name"></a>

- *Type:* `string`

---

##### `replace`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest.property.replace"></a>

- *Type:* `boolean`

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest.property.schedule"></a>

- *Type:* `string`

---

##### `scheduleOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest.property.scheduleOffset"></a>

- *Type:* `number`

---

##### `scheduleTimezone`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest.property.scheduleTimezone"></a>

- *Type:* `string`

---

##### `startDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest.property.startDate"></a>

- *Type:* `string`

---

### SsmUpdateMaintenanceWindowResult <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateMaintenanceWindowResult: ssm.SsmUpdateMaintenanceWindowResult = { ... }
```

##### `allowUnassociatedTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowResult.property.allowUnassociatedTargets"></a>

- *Type:* `boolean`

---

##### `cutoff`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowResult.property.cutoff"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowResult.property.description"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowResult.property.duration"></a>

- *Type:* `number`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowResult.property.enabled"></a>

- *Type:* `boolean`

---

##### `endDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowResult.property.endDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowResult.property.name"></a>

- *Type:* `string`

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowResult.property.schedule"></a>

- *Type:* `string`

---

##### `scheduleOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowResult.property.scheduleOffset"></a>

- *Type:* `number`

---

##### `scheduleTimezone`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowResult.property.scheduleTimezone"></a>

- *Type:* `string`

---

##### `startDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowResult.property.startDate"></a>

- *Type:* `string`

---

##### `windowId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowResult.property.windowId"></a>

- *Type:* `string`

---

### SsmUpdateMaintenanceWindowTargetRequest <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateMaintenanceWindowTargetRequest: ssm.SsmUpdateMaintenanceWindowTargetRequest = { ... }
```

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetRequest.property.windowId"></a>

- *Type:* `string`

---

##### `windowTargetId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetRequest.property.windowTargetId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetRequest.property.name"></a>

- *Type:* `string`

---

##### `ownerInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetRequest.property.ownerInformation"></a>

- *Type:* `string`

---

##### `replace`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetRequest.property.replace"></a>

- *Type:* `boolean`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetRequest.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

### SsmUpdateMaintenanceWindowTargetResult <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateMaintenanceWindowTargetResult: ssm.SsmUpdateMaintenanceWindowTargetResult = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetResult.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetResult.property.name"></a>

- *Type:* `string`

---

##### `ownerInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetResult.property.ownerInformation"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetResult.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

##### `windowId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetResult.property.windowId"></a>

- *Type:* `string`

---

##### `windowTargetId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetResult.property.windowTargetId"></a>

- *Type:* `string`

---

### SsmUpdateMaintenanceWindowTaskRequest <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateMaintenanceWindowTaskRequest: ssm.SsmUpdateMaintenanceWindowTaskRequest = { ... }
```

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest.property.windowId"></a>

- *Type:* `string`

---

##### `windowTaskId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest.property.windowTaskId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest.property.description"></a>

- *Type:* `string`

---

##### `loggingInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest.property.loggingInfo"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmLoggingInfo`](#aws-cdk-sdk.ssm.SsmLoggingInfo)

---

##### `maxConcurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest.property.maxErrors"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest.property.name"></a>

- *Type:* `string`

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest.property.priority"></a>

- *Type:* `number`

---

##### `replace`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest.property.replace"></a>

- *Type:* `boolean`

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

##### `taskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest.property.taskArn"></a>

- *Type:* `string`

---

##### `taskInvocationParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest.property.taskInvocationParameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskInvocationParameters`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskInvocationParameters)

---

##### `taskParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest.property.taskParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression)}

---

### SsmUpdateMaintenanceWindowTaskResult <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateMaintenanceWindowTaskResult: ssm.SsmUpdateMaintenanceWindowTaskResult = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskResult.property.description"></a>

- *Type:* `string`

---

##### `loggingInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskResult.property.loggingInfo"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmLoggingInfo`](#aws-cdk-sdk.ssm.SsmLoggingInfo)

---

##### `maxConcurrency`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskResult.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskResult.property.maxErrors"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskResult.property.name"></a>

- *Type:* `string`

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskResult.property.priority"></a>

- *Type:* `number`

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskResult.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskResult.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

##### `taskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskResult.property.taskArn"></a>

- *Type:* `string`

---

##### `taskInvocationParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskResult.property.taskInvocationParameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskInvocationParameters`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskInvocationParameters)

---

##### `taskParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskResult.property.taskParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression)}

---

##### `windowId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskResult.property.windowId"></a>

- *Type:* `string`

---

##### `windowTaskId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskResult.property.windowTaskId"></a>

- *Type:* `string`

---

### SsmUpdateManagedInstanceRoleRequest <a name="aws-cdk-sdk.ssm.SsmUpdateManagedInstanceRoleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateManagedInstanceRoleRequest: ssm.SsmUpdateManagedInstanceRoleRequest = { ... }
```

##### `iamRole`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateManagedInstanceRoleRequest.property.iamRole"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateManagedInstanceRoleRequest.property.instanceId"></a>

- *Type:* `string`

---

### SsmUpdateManagedInstanceRoleResult <a name="aws-cdk-sdk.ssm.SsmUpdateManagedInstanceRoleResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateManagedInstanceRoleResult: ssm.SsmUpdateManagedInstanceRoleResult = { ... }
```

### SsmUpdateOpsItemRequest <a name="aws-cdk-sdk.ssm.SsmUpdateOpsItemRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateOpsItemRequest: ssm.SsmUpdateOpsItemRequest = { ... }
```

##### `opsItemId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateOpsItemRequest.property.opsItemId"></a>

- *Type:* `string`

---

##### `category`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateOpsItemRequest.property.category"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateOpsItemRequest.property.description"></a>

- *Type:* `string`

---

##### `notifications`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateOpsItemRequest.property.notifications"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmOpsItemNotification`](#aws-cdk-sdk.ssm.SsmOpsItemNotification)[]

---

##### `operationalData`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateOpsItemRequest.property.operationalData"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.ssm.SsmOpsItemDataValue`](#aws-cdk-sdk.ssm.SsmOpsItemDataValue)}

---

##### `operationalDataToDelete`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateOpsItemRequest.property.operationalDataToDelete"></a>

- *Type:* `string`[]

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateOpsItemRequest.property.priority"></a>

- *Type:* `number`

---

##### `relatedOpsItems`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateOpsItemRequest.property.relatedOpsItems"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmRelatedOpsItem`](#aws-cdk-sdk.ssm.SsmRelatedOpsItem)[]

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateOpsItemRequest.property.severity"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateOpsItemRequest.property.status"></a>

- *Type:* `string`

---

##### `title`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateOpsItemRequest.property.title"></a>

- *Type:* `string`

---

### SsmUpdateOpsItemResponse <a name="aws-cdk-sdk.ssm.SsmUpdateOpsItemResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateOpsItemResponse: ssm.SsmUpdateOpsItemResponse = { ... }
```

### SsmUpdatePatchBaselineRequest <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdatePatchBaselineRequest: ssm.SsmUpdatePatchBaselineRequest = { ... }
```

##### `baselineId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest.property.baselineId"></a>

- *Type:* `string`

---

##### `approvalRules`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest.property.approvalRules"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchRuleGroup`](#aws-cdk-sdk.ssm.SsmPatchRuleGroup)

---

##### `approvedPatches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest.property.approvedPatches"></a>

- *Type:* `string`[]

---

##### `approvedPatchesComplianceLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest.property.approvedPatchesComplianceLevel"></a>

- *Type:* `string`

---

##### `approvedPatchesEnableNonSecurity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest.property.approvedPatchesEnableNonSecurity"></a>

- *Type:* `boolean`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest.property.description"></a>

- *Type:* `string`

---

##### `globalFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest.property.globalFilters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchFilterGroup`](#aws-cdk-sdk.ssm.SsmPatchFilterGroup)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest.property.name"></a>

- *Type:* `string`

---

##### `rejectedPatches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest.property.rejectedPatches"></a>

- *Type:* `string`[]

---

##### `rejectedPatchesAction`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest.property.rejectedPatchesAction"></a>

- *Type:* `string`

---

##### `replace`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest.property.replace"></a>

- *Type:* `boolean`

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest.property.sources"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchSource`](#aws-cdk-sdk.ssm.SsmPatchSource)[]

---

### SsmUpdatePatchBaselineResult <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdatePatchBaselineResult: ssm.SsmUpdatePatchBaselineResult = { ... }
```

##### `approvalRules`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineResult.property.approvalRules"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchRuleGroup`](#aws-cdk-sdk.ssm.SsmPatchRuleGroup)

---

##### `approvedPatches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineResult.property.approvedPatches"></a>

- *Type:* `string`[]

---

##### `approvedPatchesComplianceLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineResult.property.approvedPatchesComplianceLevel"></a>

- *Type:* `string`

---

##### `approvedPatchesEnableNonSecurity`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineResult.property.approvedPatchesEnableNonSecurity"></a>

- *Type:* `boolean`

---

##### `baselineId`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineResult.property.baselineId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineResult.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineResult.property.description"></a>

- *Type:* `string`

---

##### `globalFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineResult.property.globalFilters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchFilterGroup`](#aws-cdk-sdk.ssm.SsmPatchFilterGroup)

---

##### `modifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineResult.property.modifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineResult.property.name"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineResult.property.operatingSystem"></a>

- *Type:* `string`

---

##### `rejectedPatches`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineResult.property.rejectedPatches"></a>

- *Type:* `string`[]

---

##### `rejectedPatchesAction`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineResult.property.rejectedPatchesAction"></a>

- *Type:* `string`

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.ssm.SsmUpdatePatchBaselineResult.property.sources"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchSource`](#aws-cdk-sdk.ssm.SsmPatchSource)[]

---

### SsmUpdateResourceDataSyncRequest <a name="aws-cdk-sdk.ssm.SsmUpdateResourceDataSyncRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateResourceDataSyncRequest: ssm.SsmUpdateResourceDataSyncRequest = { ... }
```

##### `syncName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateResourceDataSyncRequest.property.syncName"></a>

- *Type:* `string`

---

##### `syncSource`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateResourceDataSyncRequest.property.syncSource"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResourceDataSyncSource`](#aws-cdk-sdk.ssm.SsmResourceDataSyncSource)

---

##### `syncType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateResourceDataSyncRequest.property.syncType"></a>

- *Type:* `string`

---

### SsmUpdateResourceDataSyncResult <a name="aws-cdk-sdk.ssm.SsmUpdateResourceDataSyncResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateResourceDataSyncResult: ssm.SsmUpdateResourceDataSyncResult = { ... }
```

### SsmUpdateServiceSettingRequest <a name="aws-cdk-sdk.ssm.SsmUpdateServiceSettingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateServiceSettingRequest: ssm.SsmUpdateServiceSettingRequest = { ... }
```

##### `settingId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateServiceSettingRequest.property.settingId"></a>

- *Type:* `string`

---

##### `settingValue`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SsmUpdateServiceSettingRequest.property.settingValue"></a>

- *Type:* `string`

---

### SsmUpdateServiceSettingResult <a name="aws-cdk-sdk.ssm.SsmUpdateServiceSettingResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

const ssmUpdateServiceSettingResult: ssm.SsmUpdateServiceSettingResult = { ... }
```

## Classes <a name="Classes"></a>

### SSMResponsesCancelMaintenanceWindowExecution <a name="aws-cdk-sdk.ssm.SSMResponsesCancelMaintenanceWindowExecution"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesCancelMaintenanceWindowExecution.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesCancelMaintenanceWindowExecution(__scope: Construct, __resources: string[], __input: SsmCancelMaintenanceWindowExecutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCancelMaintenanceWindowExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCancelMaintenanceWindowExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCancelMaintenanceWindowExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCancelMaintenanceWindowExecutionRequest`](#aws-cdk-sdk.ssm.SsmCancelMaintenanceWindowExecutionRequest)

---



#### Properties <a name="Properties"></a>

##### `windowExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCancelMaintenanceWindowExecution.property.windowExecutionId"></a>

- *Type:* `string`

---


### SSMResponsesCreateActivation <a name="aws-cdk-sdk.ssm.SSMResponsesCreateActivation"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesCreateActivation.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesCreateActivation(__scope: Construct, __resources: string[], __input: SsmCreateActivationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateActivation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateActivation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateActivation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateActivationRequest`](#aws-cdk-sdk.ssm.SsmCreateActivationRequest)

---



#### Properties <a name="Properties"></a>

##### `activationCode`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateActivation.property.activationCode"></a>

- *Type:* `string`

---

##### `activationId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateActivation.property.activationId"></a>

- *Type:* `string`

---


### SSMResponsesCreateAssociation <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociation.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesCreateAssociation(__scope: Construct, __resources: string[], __input: SsmCreateAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateAssociationRequest`](#aws-cdk-sdk.ssm.SsmCreateAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `associationDescription`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociation.property.associationDescription"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription`](#aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription)

---


### SSMResponsesCreateAssociationAssociationDescription <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesCreateAssociationAssociationDescription(__scope: Construct, __resources: string[], __input: SsmCreateAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateAssociationRequest`](#aws-cdk-sdk.ssm.SsmCreateAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `applyOnlyAtCronInterval`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.applyOnlyAtCronInterval"></a>

- *Type:* `boolean`

---

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.associationId"></a>

- *Type:* `string`

---

##### `associationName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.associationName"></a>

- *Type:* `string`

---

##### `associationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.associationVersion"></a>

- *Type:* `string`

---

##### `automationTargetParameterName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.automationTargetParameterName"></a>

- *Type:* `string`

---

##### `complianceSeverity`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.complianceSeverity"></a>

- *Type:* `string`

---

##### `date`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.date"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.documentVersion"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.instanceId"></a>

- *Type:* `string`

---

##### `lastExecutionDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.lastExecutionDate"></a>

- *Type:* `string`

---

##### `lastSuccessfulExecutionDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.lastSuccessfulExecutionDate"></a>

- *Type:* `string`

---

##### `lastUpdateAssociationDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.lastUpdateAssociationDate"></a>

- *Type:* `string`

---

##### `maxConcurrency`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.maxErrors"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.name"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocation`](#aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocation)

---

##### `overview`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.overview"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOverview`](#aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOverview)

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `scheduleExpression`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.status"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionStatus`](#aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionStatus)

---

##### `syncCompliance`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.syncCompliance"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescription.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---


### SSMResponsesCreateAssociationAssociationDescriptionOutputLocation <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocation"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocation.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocation(__scope: Construct, __resources: string[], __input: SsmCreateAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateAssociationRequest`](#aws-cdk-sdk.ssm.SsmCreateAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Location`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocation.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocationS3Location`](#aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocationS3Location)

---


### SSMResponsesCreateAssociationAssociationDescriptionOutputLocationS3Location <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocationS3Location"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocationS3Location.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocationS3Location(__scope: Construct, __resources: string[], __input: SsmCreateAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocationS3Location.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocationS3Location.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocationS3Location.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateAssociationRequest`](#aws-cdk-sdk.ssm.SsmCreateAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `outputS3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocationS3Location.property.outputS3BucketName"></a>

- *Type:* `string`

---

##### `outputS3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocationS3Location.property.outputS3KeyPrefix"></a>

- *Type:* `string`

---

##### `outputS3Region`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOutputLocationS3Location.property.outputS3Region"></a>

- *Type:* `string`

---


### SSMResponsesCreateAssociationAssociationDescriptionOverview <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOverview"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOverview.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesCreateAssociationAssociationDescriptionOverview(__scope: Construct, __resources: string[], __input: SsmCreateAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOverview.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOverview.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOverview.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateAssociationRequest`](#aws-cdk-sdk.ssm.SsmCreateAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `associationStatusAggregatedCount`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOverview.property.associationStatusAggregatedCount"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `detailedStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOverview.property.detailedStatus"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionOverview.property.status"></a>

- *Type:* `string`

---


### SSMResponsesCreateAssociationAssociationDescriptionStatus <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionStatus.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesCreateAssociationAssociationDescriptionStatus(__scope: Construct, __resources: string[], __input: SsmCreateAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateAssociationRequest`](#aws-cdk-sdk.ssm.SsmCreateAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `additionalInfo`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionStatus.property.additionalInfo"></a>

- *Type:* `string`

---

##### `date`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionStatus.property.date"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionStatus.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationAssociationDescriptionStatus.property.name"></a>

- *Type:* `string`

---


### SSMResponsesCreateAssociationBatch <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationBatch"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationBatch.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesCreateAssociationBatch(__scope: Construct, __resources: string[], __input: SsmCreateAssociationBatchRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationBatch.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationBatch.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationBatch.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequest`](#aws-cdk-sdk.ssm.SsmCreateAssociationBatchRequest)

---



#### Properties <a name="Properties"></a>

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationBatch.property.failed"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmFailedCreateAssociation`](#aws-cdk-sdk.ssm.SsmFailedCreateAssociation)[]

---

##### `successful`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateAssociationBatch.property.successful"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationDescription`](#aws-cdk-sdk.ssm.SsmAssociationDescription)[]

---


### SSMResponsesCreateDocument <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocument"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocument.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesCreateDocument(__scope: Construct, __resources: string[], __input: SsmCreateDocumentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocument.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocument.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocument.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateDocumentRequest`](#aws-cdk-sdk.ssm.SsmCreateDocumentRequest)

---



#### Properties <a name="Properties"></a>

##### `documentDescription`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocument.property.documentDescription"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription`](#aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription)

---


### SSMResponsesCreateDocumentDocumentDescription <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesCreateDocumentDocumentDescription(__scope: Construct, __resources: string[], __input: SsmCreateDocumentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateDocumentRequest`](#aws-cdk-sdk.ssm.SsmCreateDocumentRequest)

---



#### Properties <a name="Properties"></a>

##### `attachmentsInformation`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.attachmentsInformation"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAttachmentInformation`](#aws-cdk-sdk.ssm.SsmAttachmentInformation)[]

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.createdDate"></a>

- *Type:* `string`

---

##### `defaultVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.defaultVersion"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.description"></a>

- *Type:* `string`

---

##### `documentFormat`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.documentFormat"></a>

- *Type:* `string`

---

##### `documentType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.documentType"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.documentVersion"></a>

- *Type:* `string`

---

##### `hash`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.hash"></a>

- *Type:* `string`

---

##### `hashType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.hashType"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.latestVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.owner"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentParameter`](#aws-cdk-sdk.ssm.SsmDocumentParameter)[]

---

##### `platformTypes`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.platformTypes"></a>

- *Type:* `string`[]

---

##### `requires`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.requires"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentRequires`](#aws-cdk-sdk.ssm.SsmDocumentRequires)[]

---

##### `schemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.schemaVersion"></a>

- *Type:* `string`

---

##### `sha1`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.sha1"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.status"></a>

- *Type:* `string`

---

##### `statusInformation`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.statusInformation"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTag`](#aws-cdk-sdk.ssm.SsmTag)[]

---

##### `targetType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.targetType"></a>

- *Type:* `string`

---

##### `versionName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateDocumentDocumentDescription.property.versionName"></a>

- *Type:* `string`

---


### SSMResponsesCreateMaintenanceWindow <a name="aws-cdk-sdk.ssm.SSMResponsesCreateMaintenanceWindow"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesCreateMaintenanceWindow.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesCreateMaintenanceWindow(__scope: Construct, __resources: string[], __input: SsmCreateMaintenanceWindowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateMaintenanceWindow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateMaintenanceWindow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateMaintenanceWindow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowRequest`](#aws-cdk-sdk.ssm.SsmCreateMaintenanceWindowRequest)

---



#### Properties <a name="Properties"></a>

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateMaintenanceWindow.property.windowId"></a>

- *Type:* `string`

---


### SSMResponsesCreateOpsItem <a name="aws-cdk-sdk.ssm.SSMResponsesCreateOpsItem"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesCreateOpsItem.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesCreateOpsItem(__scope: Construct, __resources: string[], __input: SsmCreateOpsItemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateOpsItem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateOpsItem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateOpsItem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreateOpsItemRequest`](#aws-cdk-sdk.ssm.SsmCreateOpsItemRequest)

---



#### Properties <a name="Properties"></a>

##### `opsItemId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreateOpsItem.property.opsItemId"></a>

- *Type:* `string`

---


### SSMResponsesCreatePatchBaseline <a name="aws-cdk-sdk.ssm.SSMResponsesCreatePatchBaseline"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesCreatePatchBaseline.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesCreatePatchBaseline(__scope: Construct, __resources: string[], __input: SsmCreatePatchBaselineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreatePatchBaseline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreatePatchBaseline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreatePatchBaseline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmCreatePatchBaselineRequest)

---



#### Properties <a name="Properties"></a>

##### `baselineId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesCreatePatchBaseline.property.baselineId"></a>

- *Type:* `string`

---


### SSMResponsesDeleteInventory <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteInventory"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteInventory.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDeleteInventory(__scope: Construct, __resources: string[], __input: SsmDeleteInventoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteInventory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteInventory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteInventory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeleteInventoryRequest`](#aws-cdk-sdk.ssm.SsmDeleteInventoryRequest)

---



#### Properties <a name="Properties"></a>

##### `deletionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteInventory.property.deletionId"></a>

- *Type:* `string`

---

##### `deletionSummary`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteInventory.property.deletionSummary"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesDeleteInventoryDeletionSummary`](#aws-cdk-sdk.ssm.SSMResponsesDeleteInventoryDeletionSummary)

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteInventory.property.typeName"></a>

- *Type:* `string`

---


### SSMResponsesDeleteInventoryDeletionSummary <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteInventoryDeletionSummary"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteInventoryDeletionSummary.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDeleteInventoryDeletionSummary(__scope: Construct, __resources: string[], __input: SsmDeleteInventoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteInventoryDeletionSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteInventoryDeletionSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteInventoryDeletionSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeleteInventoryRequest`](#aws-cdk-sdk.ssm.SsmDeleteInventoryRequest)

---



#### Properties <a name="Properties"></a>

##### `remainingCount`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteInventoryDeletionSummary.property.remainingCount"></a>

- *Type:* `number`

---

##### `summaryItems`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteInventoryDeletionSummary.property.summaryItems"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryDeletionSummaryItem`](#aws-cdk-sdk.ssm.SsmInventoryDeletionSummaryItem)[]

---

##### `totalCount`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteInventoryDeletionSummary.property.totalCount"></a>

- *Type:* `number`

---


### SSMResponsesDeleteMaintenanceWindow <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteMaintenanceWindow"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteMaintenanceWindow.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDeleteMaintenanceWindow(__scope: Construct, __resources: string[], __input: SsmDeleteMaintenanceWindowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteMaintenanceWindow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteMaintenanceWindow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteMaintenanceWindow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeleteMaintenanceWindowRequest`](#aws-cdk-sdk.ssm.SsmDeleteMaintenanceWindowRequest)

---



#### Properties <a name="Properties"></a>

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteMaintenanceWindow.property.windowId"></a>

- *Type:* `string`

---


### SSMResponsesDeleteParameters <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteParameters"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteParameters.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDeleteParameters(__scope: Construct, __resources: string[], __input: SsmDeleteParametersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeleteParametersRequest`](#aws-cdk-sdk.ssm.SsmDeleteParametersRequest)

---



#### Properties <a name="Properties"></a>

##### `deletedParameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteParameters.property.deletedParameters"></a>

- *Type:* `string`[]

---

##### `invalidParameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeleteParameters.property.invalidParameters"></a>

- *Type:* `string`[]

---


### SSMResponsesDeletePatchBaseline <a name="aws-cdk-sdk.ssm.SSMResponsesDeletePatchBaseline"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDeletePatchBaseline.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDeletePatchBaseline(__scope: Construct, __resources: string[], __input: SsmDeletePatchBaselineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeletePatchBaseline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeletePatchBaseline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeletePatchBaseline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeletePatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmDeletePatchBaselineRequest)

---



#### Properties <a name="Properties"></a>

##### `baselineId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeletePatchBaseline.property.baselineId"></a>

- *Type:* `string`

---


### SSMResponsesDeregisterPatchBaselineForPatchGroup <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterPatchBaselineForPatchGroup"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterPatchBaselineForPatchGroup.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDeregisterPatchBaselineForPatchGroup(__scope: Construct, __resources: string[], __input: SsmDeregisterPatchBaselineForPatchGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterPatchBaselineForPatchGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterPatchBaselineForPatchGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterPatchBaselineForPatchGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeregisterPatchBaselineForPatchGroupRequest`](#aws-cdk-sdk.ssm.SsmDeregisterPatchBaselineForPatchGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `baselineId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterPatchBaselineForPatchGroup.property.baselineId"></a>

- *Type:* `string`

---

##### `patchGroup`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterPatchBaselineForPatchGroup.property.patchGroup"></a>

- *Type:* `string`

---


### SSMResponsesDeregisterTargetFromMaintenanceWindow <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterTargetFromMaintenanceWindow"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterTargetFromMaintenanceWindow.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDeregisterTargetFromMaintenanceWindow(__scope: Construct, __resources: string[], __input: SsmDeregisterTargetFromMaintenanceWindowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterTargetFromMaintenanceWindow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterTargetFromMaintenanceWindow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterTargetFromMaintenanceWindow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeregisterTargetFromMaintenanceWindowRequest`](#aws-cdk-sdk.ssm.SsmDeregisterTargetFromMaintenanceWindowRequest)

---



#### Properties <a name="Properties"></a>

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterTargetFromMaintenanceWindow.property.windowId"></a>

- *Type:* `string`

---

##### `windowTargetId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterTargetFromMaintenanceWindow.property.windowTargetId"></a>

- *Type:* `string`

---


### SSMResponsesDeregisterTaskFromMaintenanceWindow <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterTaskFromMaintenanceWindow"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterTaskFromMaintenanceWindow.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDeregisterTaskFromMaintenanceWindow(__scope: Construct, __resources: string[], __input: SsmDeregisterTaskFromMaintenanceWindowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterTaskFromMaintenanceWindow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterTaskFromMaintenanceWindow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterTaskFromMaintenanceWindow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDeregisterTaskFromMaintenanceWindowRequest`](#aws-cdk-sdk.ssm.SsmDeregisterTaskFromMaintenanceWindowRequest)

---



#### Properties <a name="Properties"></a>

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterTaskFromMaintenanceWindow.property.windowId"></a>

- *Type:* `string`

---

##### `windowTaskId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDeregisterTaskFromMaintenanceWindow.property.windowTaskId"></a>

- *Type:* `string`

---


### SSMResponsesDescribeActivations <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeActivations"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeActivations.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeActivations(__scope: Construct, __resources: string[], __input: SsmDescribeActivationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeActivations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeActivations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeActivations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeActivationsRequest`](#aws-cdk-sdk.ssm.SsmDescribeActivationsRequest)

---



#### Properties <a name="Properties"></a>

##### `activationList`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeActivations.property.activationList"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmActivation`](#aws-cdk-sdk.ssm.SsmActivation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeActivations.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesDescribeAssociation <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociation.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeAssociation(__scope: Construct, __resources: string[], __input: SsmDescribeAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeAssociationRequest`](#aws-cdk-sdk.ssm.SsmDescribeAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `associationDescription`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociation.property.associationDescription"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription`](#aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription)

---


### SSMResponsesDescribeAssociationAssociationDescription <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeAssociationAssociationDescription(__scope: Construct, __resources: string[], __input: SsmDescribeAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeAssociationRequest`](#aws-cdk-sdk.ssm.SsmDescribeAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `applyOnlyAtCronInterval`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.applyOnlyAtCronInterval"></a>

- *Type:* `boolean`

---

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.associationId"></a>

- *Type:* `string`

---

##### `associationName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.associationName"></a>

- *Type:* `string`

---

##### `associationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.associationVersion"></a>

- *Type:* `string`

---

##### `automationTargetParameterName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.automationTargetParameterName"></a>

- *Type:* `string`

---

##### `complianceSeverity`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.complianceSeverity"></a>

- *Type:* `string`

---

##### `date`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.date"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.documentVersion"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.instanceId"></a>

- *Type:* `string`

---

##### `lastExecutionDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.lastExecutionDate"></a>

- *Type:* `string`

---

##### `lastSuccessfulExecutionDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.lastSuccessfulExecutionDate"></a>

- *Type:* `string`

---

##### `lastUpdateAssociationDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.lastUpdateAssociationDate"></a>

- *Type:* `string`

---

##### `maxConcurrency`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.maxErrors"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.name"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocation`](#aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocation)

---

##### `overview`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.overview"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOverview`](#aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOverview)

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `scheduleExpression`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.status"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionStatus`](#aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionStatus)

---

##### `syncCompliance`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.syncCompliance"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescription.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---


### SSMResponsesDescribeAssociationAssociationDescriptionOutputLocation <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocation"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocation.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocation(__scope: Construct, __resources: string[], __input: SsmDescribeAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeAssociationRequest`](#aws-cdk-sdk.ssm.SsmDescribeAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Location`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocation.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocationS3Location`](#aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocationS3Location)

---


### SSMResponsesDescribeAssociationAssociationDescriptionOutputLocationS3Location <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocationS3Location"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocationS3Location.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocationS3Location(__scope: Construct, __resources: string[], __input: SsmDescribeAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocationS3Location.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocationS3Location.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocationS3Location.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeAssociationRequest`](#aws-cdk-sdk.ssm.SsmDescribeAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `outputS3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocationS3Location.property.outputS3BucketName"></a>

- *Type:* `string`

---

##### `outputS3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocationS3Location.property.outputS3KeyPrefix"></a>

- *Type:* `string`

---

##### `outputS3Region`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOutputLocationS3Location.property.outputS3Region"></a>

- *Type:* `string`

---


### SSMResponsesDescribeAssociationAssociationDescriptionOverview <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOverview"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOverview.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeAssociationAssociationDescriptionOverview(__scope: Construct, __resources: string[], __input: SsmDescribeAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOverview.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOverview.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOverview.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeAssociationRequest`](#aws-cdk-sdk.ssm.SsmDescribeAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `associationStatusAggregatedCount`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOverview.property.associationStatusAggregatedCount"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `detailedStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOverview.property.detailedStatus"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionOverview.property.status"></a>

- *Type:* `string`

---


### SSMResponsesDescribeAssociationAssociationDescriptionStatus <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionStatus.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeAssociationAssociationDescriptionStatus(__scope: Construct, __resources: string[], __input: SsmDescribeAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeAssociationRequest`](#aws-cdk-sdk.ssm.SsmDescribeAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `additionalInfo`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionStatus.property.additionalInfo"></a>

- *Type:* `string`

---

##### `date`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionStatus.property.date"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionStatus.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationAssociationDescriptionStatus.property.name"></a>

- *Type:* `string`

---


### SSMResponsesDescribeAssociationExecutions <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationExecutions"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationExecutions.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeAssociationExecutions(__scope: Construct, __resources: string[], __input: SsmDescribeAssociationExecutionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationExecutions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationExecutions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationExecutions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionsRequest`](#aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionsRequest)

---



#### Properties <a name="Properties"></a>

##### `associationExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationExecutions.property.associationExecutions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationExecution`](#aws-cdk-sdk.ssm.SsmAssociationExecution)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationExecutions.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesDescribeAssociationExecutionTargets <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationExecutionTargets"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationExecutionTargets.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeAssociationExecutionTargets(__scope: Construct, __resources: string[], __input: SsmDescribeAssociationExecutionTargetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationExecutionTargets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationExecutionTargets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationExecutionTargets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionTargetsRequest`](#aws-cdk-sdk.ssm.SsmDescribeAssociationExecutionTargetsRequest)

---



#### Properties <a name="Properties"></a>

##### `associationExecutionTargets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationExecutionTargets.property.associationExecutionTargets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationExecutionTarget`](#aws-cdk-sdk.ssm.SsmAssociationExecutionTarget)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAssociationExecutionTargets.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesDescribeAutomationExecutions <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAutomationExecutions"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAutomationExecutions.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeAutomationExecutions(__scope: Construct, __resources: string[], __input: SsmDescribeAutomationExecutionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAutomationExecutions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAutomationExecutions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAutomationExecutions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeAutomationExecutionsRequest`](#aws-cdk-sdk.ssm.SsmDescribeAutomationExecutionsRequest)

---



#### Properties <a name="Properties"></a>

##### `automationExecutionMetadataList`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAutomationExecutions.property.automationExecutionMetadataList"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata`](#aws-cdk-sdk.ssm.SsmAutomationExecutionMetadata)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAutomationExecutions.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesDescribeAutomationStepExecutions <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAutomationStepExecutions"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAutomationStepExecutions.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeAutomationStepExecutions(__scope: Construct, __resources: string[], __input: SsmDescribeAutomationStepExecutionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAutomationStepExecutions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAutomationStepExecutions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAutomationStepExecutions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeAutomationStepExecutionsRequest`](#aws-cdk-sdk.ssm.SsmDescribeAutomationStepExecutionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAutomationStepExecutions.property.nextToken"></a>

- *Type:* `string`

---

##### `stepExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAutomationStepExecutions.property.stepExecutions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmStepExecution`](#aws-cdk-sdk.ssm.SsmStepExecution)[]

---


### SSMResponsesDescribeAvailablePatches <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAvailablePatches"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAvailablePatches.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeAvailablePatches(__scope: Construct, __resources: string[], __input: SsmDescribeAvailablePatchesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAvailablePatches.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAvailablePatches.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAvailablePatches.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeAvailablePatchesRequest`](#aws-cdk-sdk.ssm.SsmDescribeAvailablePatchesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAvailablePatches.property.nextToken"></a>

- *Type:* `string`

---

##### `patches`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeAvailablePatches.property.patches"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatch`](#aws-cdk-sdk.ssm.SsmPatch)[]

---


### SSMResponsesDescribeDocument <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocument"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocument.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeDocument(__scope: Construct, __resources: string[], __input: SsmDescribeDocumentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocument.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocument.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocument.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeDocumentRequest`](#aws-cdk-sdk.ssm.SsmDescribeDocumentRequest)

---



#### Properties <a name="Properties"></a>

##### `document`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocument.property.document"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument`](#aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument)

---


### SSMResponsesDescribeDocumentDocument <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeDocumentDocument(__scope: Construct, __resources: string[], __input: SsmDescribeDocumentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeDocumentRequest`](#aws-cdk-sdk.ssm.SsmDescribeDocumentRequest)

---



#### Properties <a name="Properties"></a>

##### `attachmentsInformation`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.attachmentsInformation"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAttachmentInformation`](#aws-cdk-sdk.ssm.SsmAttachmentInformation)[]

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.createdDate"></a>

- *Type:* `string`

---

##### `defaultVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.defaultVersion"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.description"></a>

- *Type:* `string`

---

##### `documentFormat`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.documentFormat"></a>

- *Type:* `string`

---

##### `documentType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.documentType"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.documentVersion"></a>

- *Type:* `string`

---

##### `hash`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.hash"></a>

- *Type:* `string`

---

##### `hashType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.hashType"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.latestVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.owner"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentParameter`](#aws-cdk-sdk.ssm.SsmDocumentParameter)[]

---

##### `platformTypes`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.platformTypes"></a>

- *Type:* `string`[]

---

##### `requires`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.requires"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentRequires`](#aws-cdk-sdk.ssm.SsmDocumentRequires)[]

---

##### `schemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.schemaVersion"></a>

- *Type:* `string`

---

##### `sha1`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.sha1"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.status"></a>

- *Type:* `string`

---

##### `statusInformation`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.statusInformation"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTag`](#aws-cdk-sdk.ssm.SsmTag)[]

---

##### `targetType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.targetType"></a>

- *Type:* `string`

---

##### `versionName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentDocument.property.versionName"></a>

- *Type:* `string`

---


### SSMResponsesDescribeDocumentPermission <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentPermission"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentPermission.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeDocumentPermission(__scope: Construct, __resources: string[], __input: SsmDescribeDocumentPermissionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentPermission.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentPermission.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentPermission.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeDocumentPermissionRequest`](#aws-cdk-sdk.ssm.SsmDescribeDocumentPermissionRequest)

---



#### Properties <a name="Properties"></a>

##### `accountIds`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentPermission.property.accountIds"></a>

- *Type:* `string`[]

---

##### `accountSharingInfoList`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeDocumentPermission.property.accountSharingInfoList"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAccountSharingInfo`](#aws-cdk-sdk.ssm.SsmAccountSharingInfo)[]

---


### SSMResponsesDescribeEffectiveInstanceAssociations <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeEffectiveInstanceAssociations"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeEffectiveInstanceAssociations.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeEffectiveInstanceAssociations(__scope: Construct, __resources: string[], __input: SsmDescribeEffectiveInstanceAssociationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeEffectiveInstanceAssociations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeEffectiveInstanceAssociations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeEffectiveInstanceAssociations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeEffectiveInstanceAssociationsRequest`](#aws-cdk-sdk.ssm.SsmDescribeEffectiveInstanceAssociationsRequest)

---



#### Properties <a name="Properties"></a>

##### `associations`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeEffectiveInstanceAssociations.property.associations"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstanceAssociation`](#aws-cdk-sdk.ssm.SsmInstanceAssociation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeEffectiveInstanceAssociations.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesDescribeEffectivePatchesForPatchBaseline <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeEffectivePatchesForPatchBaseline"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeEffectivePatchesForPatchBaseline.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeEffectivePatchesForPatchBaseline(__scope: Construct, __resources: string[], __input: SsmDescribeEffectivePatchesForPatchBaselineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeEffectivePatchesForPatchBaseline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeEffectivePatchesForPatchBaseline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeEffectivePatchesForPatchBaseline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeEffectivePatchesForPatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmDescribeEffectivePatchesForPatchBaselineRequest)

---



#### Properties <a name="Properties"></a>

##### `effectivePatches`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeEffectivePatchesForPatchBaseline.property.effectivePatches"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmEffectivePatch`](#aws-cdk-sdk.ssm.SsmEffectivePatch)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeEffectivePatchesForPatchBaseline.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesDescribeInstanceAssociationsStatus <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstanceAssociationsStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstanceAssociationsStatus.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeInstanceAssociationsStatus(__scope: Construct, __resources: string[], __input: SsmDescribeInstanceAssociationsStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstanceAssociationsStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstanceAssociationsStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstanceAssociationsStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeInstanceAssociationsStatusRequest`](#aws-cdk-sdk.ssm.SsmDescribeInstanceAssociationsStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceAssociationStatusInfos`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstanceAssociationsStatus.property.instanceAssociationStatusInfos"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstanceAssociationStatusInfo`](#aws-cdk-sdk.ssm.SsmInstanceAssociationStatusInfo)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstanceAssociationsStatus.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesDescribeInstanceInformation <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstanceInformation"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstanceInformation.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeInstanceInformation(__scope: Construct, __resources: string[], __input: SsmDescribeInstanceInformationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstanceInformation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstanceInformation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstanceInformation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeInstanceInformationRequest`](#aws-cdk-sdk.ssm.SsmDescribeInstanceInformationRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceInformationList`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstanceInformation.property.instanceInformationList"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstanceInformation`](#aws-cdk-sdk.ssm.SsmInstanceInformation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstanceInformation.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesDescribeInstancePatches <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatches"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatches.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeInstancePatches(__scope: Construct, __resources: string[], __input: SsmDescribeInstancePatchesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatches.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatches.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatches.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeInstancePatchesRequest`](#aws-cdk-sdk.ssm.SsmDescribeInstancePatchesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatches.property.nextToken"></a>

- *Type:* `string`

---

##### `patches`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatches.property.patches"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchComplianceData`](#aws-cdk-sdk.ssm.SsmPatchComplianceData)[]

---


### SSMResponsesDescribeInstancePatchStates <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatchStates"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatchStates.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeInstancePatchStates(__scope: Construct, __resources: string[], __input: SsmDescribeInstancePatchStatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatchStates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatchStates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatchStates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesRequest`](#aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesRequest)

---



#### Properties <a name="Properties"></a>

##### `instancePatchStates`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatchStates.property.instancePatchStates"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstancePatchState`](#aws-cdk-sdk.ssm.SsmInstancePatchState)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatchStates.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesDescribeInstancePatchStatesForPatchGroup <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatchStatesForPatchGroup"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatchStatesForPatchGroup.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeInstancePatchStatesForPatchGroup(__scope: Construct, __resources: string[], __input: SsmDescribeInstancePatchStatesForPatchGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatchStatesForPatchGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatchStatesForPatchGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatchStatesForPatchGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesForPatchGroupRequest`](#aws-cdk-sdk.ssm.SsmDescribeInstancePatchStatesForPatchGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `instancePatchStates`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatchStatesForPatchGroup.property.instancePatchStates"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInstancePatchState`](#aws-cdk-sdk.ssm.SsmInstancePatchState)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInstancePatchStatesForPatchGroup.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesDescribeInventoryDeletions <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInventoryDeletions"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInventoryDeletions.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeInventoryDeletions(__scope: Construct, __resources: string[], __input: SsmDescribeInventoryDeletionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInventoryDeletions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInventoryDeletions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInventoryDeletions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeInventoryDeletionsRequest`](#aws-cdk-sdk.ssm.SsmDescribeInventoryDeletionsRequest)

---



#### Properties <a name="Properties"></a>

##### `inventoryDeletions`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInventoryDeletions.property.inventoryDeletions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryDeletionStatusItem`](#aws-cdk-sdk.ssm.SsmInventoryDeletionStatusItem)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeInventoryDeletions.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesDescribeMaintenanceWindowExecutions <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutions"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutions.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeMaintenanceWindowExecutions(__scope: Construct, __resources: string[], __input: SsmDescribeMaintenanceWindowExecutionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionsRequest`](#aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutions.property.nextToken"></a>

- *Type:* `string`

---

##### `windowExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutions.property.windowExecutions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowExecution`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowExecution)[]

---


### SSMResponsesDescribeMaintenanceWindowExecutionTaskInvocations <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutionTaskInvocations"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutionTaskInvocations.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeMaintenanceWindowExecutionTaskInvocations(__scope: Construct, __resources: string[], __input: SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutionTaskInvocations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutionTaskInvocations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutionTaskInvocations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest`](#aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutionTaskInvocations.property.nextToken"></a>

- *Type:* `string`

---

##### `windowExecutionTaskInvocationIdentities`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutionTaskInvocations.property.windowExecutionTaskInvocationIdentities"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskInvocationIdentity)[]

---


### SSMResponsesDescribeMaintenanceWindowExecutionTasks <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutionTasks"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutionTasks.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeMaintenanceWindowExecutionTasks(__scope: Construct, __resources: string[], __input: SsmDescribeMaintenanceWindowExecutionTasksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutionTasks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutionTasks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutionTasks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTasksRequest`](#aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowExecutionTasksRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutionTasks.property.nextToken"></a>

- *Type:* `string`

---

##### `windowExecutionTaskIdentities`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowExecutionTasks.property.windowExecutionTaskIdentities"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskIdentity`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowExecutionTaskIdentity)[]

---


### SSMResponsesDescribeMaintenanceWindows <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindows"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindows.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeMaintenanceWindows(__scope: Construct, __resources: string[], __input: SsmDescribeMaintenanceWindowsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindows.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindows.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindows.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsRequest`](#aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindows.property.nextToken"></a>

- *Type:* `string`

---

##### `windowIdentities`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindows.property.windowIdentities"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentity`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentity)[]

---


### SSMResponsesDescribeMaintenanceWindowSchedule <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowSchedule.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeMaintenanceWindowSchedule(__scope: Construct, __resources: string[], __input: SsmDescribeMaintenanceWindowScheduleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowScheduleRequest`](#aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowScheduleRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowSchedule.property.nextToken"></a>

- *Type:* `string`

---

##### `scheduledWindowExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowSchedule.property.scheduledWindowExecutions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmScheduledWindowExecution`](#aws-cdk-sdk.ssm.SsmScheduledWindowExecution)[]

---


### SSMResponsesDescribeMaintenanceWindowsForTarget <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowsForTarget"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowsForTarget.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeMaintenanceWindowsForTarget(__scope: Construct, __resources: string[], __input: SsmDescribeMaintenanceWindowsForTargetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowsForTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowsForTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowsForTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsForTargetRequest`](#aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowsForTargetRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowsForTarget.property.nextToken"></a>

- *Type:* `string`

---

##### `windowIdentities`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowsForTarget.property.windowIdentities"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentityForTarget`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowIdentityForTarget)[]

---


### SSMResponsesDescribeMaintenanceWindowTargets <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowTargets"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowTargets.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeMaintenanceWindowTargets(__scope: Construct, __resources: string[], __input: SsmDescribeMaintenanceWindowTargetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowTargets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowTargets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowTargets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTargetsRequest`](#aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTargetsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowTargets.property.nextToken"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowTargets.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowTarget`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowTarget)[]

---


### SSMResponsesDescribeMaintenanceWindowTasks <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowTasks"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowTasks.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeMaintenanceWindowTasks(__scope: Construct, __resources: string[], __input: SsmDescribeMaintenanceWindowTasksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowTasks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowTasks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowTasks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTasksRequest`](#aws-cdk-sdk.ssm.SsmDescribeMaintenanceWindowTasksRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowTasks.property.nextToken"></a>

- *Type:* `string`

---

##### `tasks`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeMaintenanceWindowTasks.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmMaintenanceWindowTask`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowTask)[]

---


### SSMResponsesDescribeOpsItems <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeOpsItems"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeOpsItems.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeOpsItems(__scope: Construct, __resources: string[], __input: SsmDescribeOpsItemsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeOpsItems.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeOpsItems.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeOpsItems.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeOpsItemsRequest`](#aws-cdk-sdk.ssm.SsmDescribeOpsItemsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeOpsItems.property.nextToken"></a>

- *Type:* `string`

---

##### `opsItemSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeOpsItems.property.opsItemSummaries"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmOpsItemSummary`](#aws-cdk-sdk.ssm.SsmOpsItemSummary)[]

---


### SSMResponsesDescribeParameters <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeParameters"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeParameters.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeParameters(__scope: Construct, __resources: string[], __input: SsmDescribeParametersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeParametersRequest`](#aws-cdk-sdk.ssm.SsmDescribeParametersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeParameters.property.nextToken"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeParameters.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmParameterMetadata`](#aws-cdk-sdk.ssm.SsmParameterMetadata)[]

---


### SSMResponsesDescribePatchBaselines <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchBaselines"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchBaselines.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribePatchBaselines(__scope: Construct, __resources: string[], __input: SsmDescribePatchBaselinesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchBaselines.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchBaselines.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchBaselines.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribePatchBaselinesRequest`](#aws-cdk-sdk.ssm.SsmDescribePatchBaselinesRequest)

---



#### Properties <a name="Properties"></a>

##### `baselineIdentities`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchBaselines.property.baselineIdentities"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchBaselineIdentity`](#aws-cdk-sdk.ssm.SsmPatchBaselineIdentity)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchBaselines.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesDescribePatchGroups <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroups"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroups.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribePatchGroups(__scope: Construct, __resources: string[], __input: SsmDescribePatchGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribePatchGroupsRequest`](#aws-cdk-sdk.ssm.SsmDescribePatchGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `mappings`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroups.property.mappings"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchGroupPatchBaselineMapping`](#aws-cdk-sdk.ssm.SsmPatchGroupPatchBaselineMapping)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroups.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesDescribePatchGroupState <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroupState"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroupState.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribePatchGroupState(__scope: Construct, __resources: string[], __input: SsmDescribePatchGroupStateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroupState.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroupState.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroupState.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribePatchGroupStateRequest`](#aws-cdk-sdk.ssm.SsmDescribePatchGroupStateRequest)

---



#### Properties <a name="Properties"></a>

##### `instances`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroupState.property.instances"></a>

- *Type:* `number`

---

##### `instancesWithFailedPatches`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroupState.property.instancesWithFailedPatches"></a>

- *Type:* `number`

---

##### `instancesWithInstalledOtherPatches`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroupState.property.instancesWithInstalledOtherPatches"></a>

- *Type:* `number`

---

##### `instancesWithInstalledPatches`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroupState.property.instancesWithInstalledPatches"></a>

- *Type:* `number`

---

##### `instancesWithInstalledPendingRebootPatches`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroupState.property.instancesWithInstalledPendingRebootPatches"></a>

- *Type:* `number`

---

##### `instancesWithInstalledRejectedPatches`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroupState.property.instancesWithInstalledRejectedPatches"></a>

- *Type:* `number`

---

##### `instancesWithMissingPatches`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroupState.property.instancesWithMissingPatches"></a>

- *Type:* `number`

---

##### `instancesWithNotApplicablePatches`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroupState.property.instancesWithNotApplicablePatches"></a>

- *Type:* `number`

---

##### `instancesWithUnreportedNotApplicablePatches`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchGroupState.property.instancesWithUnreportedNotApplicablePatches"></a>

- *Type:* `number`

---


### SSMResponsesDescribePatchProperties <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchProperties"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchProperties.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribePatchProperties(__scope: Construct, __resources: string[], __input: SsmDescribePatchPropertiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribePatchPropertiesRequest`](#aws-cdk-sdk.ssm.SsmDescribePatchPropertiesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchProperties.property.nextToken"></a>

- *Type:* `string`

---

##### `properties`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribePatchProperties.property.properties"></a>

- *Type:* {[ key: string ]: `string`}[]

---


### SSMResponsesDescribeSessions <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeSessions"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeSessions.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesDescribeSessions(__scope: Construct, __resources: string[], __input: SsmDescribeSessionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeSessions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeSessions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeSessions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDescribeSessionsRequest`](#aws-cdk-sdk.ssm.SsmDescribeSessionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeSessions.property.nextToken"></a>

- *Type:* `string`

---

##### `sessions`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesDescribeSessions.property.sessions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmSession`](#aws-cdk-sdk.ssm.SsmSession)[]

---


### SSMResponsesFetchAutomationExecution <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecution"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecution.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchAutomationExecution(__scope: Construct, __resources: string[], __input: SsmGetAutomationExecutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetAutomationExecutionRequest`](#aws-cdk-sdk.ssm.SsmGetAutomationExecutionRequest)

---



#### Properties <a name="Properties"></a>

##### `automationExecution`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecution.property.automationExecution"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution`](#aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution)

---


### SSMResponsesFetchAutomationExecutionAutomationExecution <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchAutomationExecutionAutomationExecution(__scope: Construct, __resources: string[], __input: SsmGetAutomationExecutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetAutomationExecutionRequest`](#aws-cdk-sdk.ssm.SsmGetAutomationExecutionRequest)

---



#### Properties <a name="Properties"></a>

##### `automationExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.automationExecutionId"></a>

- *Type:* `string`

---

##### `automationExecutionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.automationExecutionStatus"></a>

- *Type:* `string`

---

##### `currentAction`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.currentAction"></a>

- *Type:* `string`

---

##### `currentStepName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.currentStepName"></a>

- *Type:* `string`

---

##### `documentName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.documentName"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.documentVersion"></a>

- *Type:* `string`

---

##### `executedBy`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.executedBy"></a>

- *Type:* `string`

---

##### `executionEndTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.executionEndTime"></a>

- *Type:* `string`

---

##### `executionStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.executionStartTime"></a>

- *Type:* `string`

---

##### `failureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.failureMessage"></a>

- *Type:* `string`

---

##### `maxConcurrency`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.maxErrors"></a>

- *Type:* `string`

---

##### `mode`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.mode"></a>

- *Type:* `string`

---

##### `outputs`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.outputs"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `parentAutomationExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.parentAutomationExecutionId"></a>

- *Type:* `string`

---

##### `progressCounters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.progressCounters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionProgressCounters`](#aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionProgressCounters)

---

##### `resolvedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.resolvedTargets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionResolvedTargets`](#aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionResolvedTargets)

---

##### `stepExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.stepExecutions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmStepExecution`](#aws-cdk-sdk.ssm.SsmStepExecution)[]

---

##### `stepExecutionsTruncated`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.stepExecutionsTruncated"></a>

- *Type:* `boolean`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.target"></a>

- *Type:* `string`

---

##### `targetLocations`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.targetLocations"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTargetLocation`](#aws-cdk-sdk.ssm.SsmTargetLocation)[]

---

##### `targetMaps`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.targetMaps"></a>

- *Type:* {[ key: string ]: `string`[]}[]

---

##### `targetParameterName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.targetParameterName"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecution.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---


### SSMResponsesFetchAutomationExecutionAutomationExecutionProgressCounters <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionProgressCounters"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionProgressCounters.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionProgressCounters(__scope: Construct, __resources: string[], __input: SsmGetAutomationExecutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionProgressCounters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionProgressCounters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionProgressCounters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetAutomationExecutionRequest`](#aws-cdk-sdk.ssm.SsmGetAutomationExecutionRequest)

---



#### Properties <a name="Properties"></a>

##### `cancelledSteps`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionProgressCounters.property.cancelledSteps"></a>

- *Type:* `number`

---

##### `failedSteps`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionProgressCounters.property.failedSteps"></a>

- *Type:* `number`

---

##### `successSteps`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionProgressCounters.property.successSteps"></a>

- *Type:* `number`

---

##### `timedOutSteps`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionProgressCounters.property.timedOutSteps"></a>

- *Type:* `number`

---

##### `totalSteps`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionProgressCounters.property.totalSteps"></a>

- *Type:* `number`

---


### SSMResponsesFetchAutomationExecutionAutomationExecutionResolvedTargets <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionResolvedTargets"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionResolvedTargets.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionResolvedTargets(__scope: Construct, __resources: string[], __input: SsmGetAutomationExecutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionResolvedTargets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionResolvedTargets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionResolvedTargets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetAutomationExecutionRequest`](#aws-cdk-sdk.ssm.SsmGetAutomationExecutionRequest)

---



#### Properties <a name="Properties"></a>

##### `parameterValues`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionResolvedTargets.property.parameterValues"></a>

- *Type:* `string`[]

---

##### `truncated`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchAutomationExecutionAutomationExecutionResolvedTargets.property.truncated"></a>

- *Type:* `boolean`

---


### SSMResponsesFetchCalendarState <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCalendarState"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCalendarState.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchCalendarState(__scope: Construct, __resources: string[], __input: SsmGetCalendarStateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCalendarState.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCalendarState.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCalendarState.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetCalendarStateRequest`](#aws-cdk-sdk.ssm.SsmGetCalendarStateRequest)

---



#### Properties <a name="Properties"></a>

##### `atTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCalendarState.property.atTime"></a>

- *Type:* `string`

---

##### `nextTransitionTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCalendarState.property.nextTransitionTime"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCalendarState.property.state"></a>

- *Type:* `string`

---


### SSMResponsesFetchCommandInvocation <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchCommandInvocation(__scope: Construct, __resources: string[], __input: SsmGetCommandInvocationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetCommandInvocationRequest`](#aws-cdk-sdk.ssm.SsmGetCommandInvocationRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchOutputConfig`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.property.cloudWatchOutputConfig"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocationCloudWatchOutputConfig`](#aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocationCloudWatchOutputConfig)

---

##### `commandId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.property.commandId"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.property.comment"></a>

- *Type:* `string`

---

##### `documentName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.property.documentName"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.property.documentVersion"></a>

- *Type:* `string`

---

##### `executionElapsedTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.property.executionElapsedTime"></a>

- *Type:* `string`

---

##### `executionEndDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.property.executionEndDateTime"></a>

- *Type:* `string`

---

##### `executionStartDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.property.executionStartDateTime"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.property.instanceId"></a>

- *Type:* `string`

---

##### `pluginName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.property.pluginName"></a>

- *Type:* `string`

---

##### `responseCode`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.property.responseCode"></a>

- *Type:* `number`

---

##### `standardErrorContent`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.property.standardErrorContent"></a>

- *Type:* `string`

---

##### `standardErrorUrl`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.property.standardErrorUrl"></a>

- *Type:* `string`

---

##### `standardOutputContent`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.property.standardOutputContent"></a>

- *Type:* `string`

---

##### `standardOutputUrl`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.property.standardOutputUrl"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocation.property.statusDetails"></a>

- *Type:* `string`

---


### SSMResponsesFetchCommandInvocationCloudWatchOutputConfig <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocationCloudWatchOutputConfig"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocationCloudWatchOutputConfig.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchCommandInvocationCloudWatchOutputConfig(__scope: Construct, __resources: string[], __input: SsmGetCommandInvocationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocationCloudWatchOutputConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocationCloudWatchOutputConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocationCloudWatchOutputConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetCommandInvocationRequest`](#aws-cdk-sdk.ssm.SsmGetCommandInvocationRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocationCloudWatchOutputConfig.property.cloudWatchLogGroupName"></a>

- *Type:* `string`

---

##### `cloudWatchOutputEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchCommandInvocationCloudWatchOutputConfig.property.cloudWatchOutputEnabled"></a>

- *Type:* `boolean`

---


### SSMResponsesFetchConnectionStatus <a name="aws-cdk-sdk.ssm.SSMResponsesFetchConnectionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchConnectionStatus.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchConnectionStatus(__scope: Construct, __resources: string[], __input: SsmGetConnectionStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchConnectionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchConnectionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchConnectionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetConnectionStatusRequest`](#aws-cdk-sdk.ssm.SsmGetConnectionStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchConnectionStatus.property.status"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchConnectionStatus.property.target"></a>

- *Type:* `string`

---


### SSMResponsesFetchDefaultPatchBaseline <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDefaultPatchBaseline"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDefaultPatchBaseline.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchDefaultPatchBaseline(__scope: Construct, __resources: string[], __input: SsmGetDefaultPatchBaselineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDefaultPatchBaseline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDefaultPatchBaseline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDefaultPatchBaseline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetDefaultPatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmGetDefaultPatchBaselineRequest)

---



#### Properties <a name="Properties"></a>

##### `baselineId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDefaultPatchBaseline.property.baselineId"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDefaultPatchBaseline.property.operatingSystem"></a>

- *Type:* `string`

---


### SSMResponsesFetchDeployablePatchSnapshotForInstance <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDeployablePatchSnapshotForInstance"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDeployablePatchSnapshotForInstance.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchDeployablePatchSnapshotForInstance(__scope: Construct, __resources: string[], __input: SsmGetDeployablePatchSnapshotForInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDeployablePatchSnapshotForInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDeployablePatchSnapshotForInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDeployablePatchSnapshotForInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetDeployablePatchSnapshotForInstanceRequest`](#aws-cdk-sdk.ssm.SsmGetDeployablePatchSnapshotForInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDeployablePatchSnapshotForInstance.property.instanceId"></a>

- *Type:* `string`

---

##### `product`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDeployablePatchSnapshotForInstance.property.product"></a>

- *Type:* `string`

---

##### `snapshotDownloadUrl`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDeployablePatchSnapshotForInstance.property.snapshotDownloadUrl"></a>

- *Type:* `string`

---

##### `snapshotId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDeployablePatchSnapshotForInstance.property.snapshotId"></a>

- *Type:* `string`

---


### SSMResponsesFetchDocument <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDocument"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDocument.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchDocument(__scope: Construct, __resources: string[], __input: SsmGetDocumentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDocument.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDocument.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDocument.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetDocumentRequest`](#aws-cdk-sdk.ssm.SsmGetDocumentRequest)

---



#### Properties <a name="Properties"></a>

##### `attachmentsContent`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDocument.property.attachmentsContent"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAttachmentContent`](#aws-cdk-sdk.ssm.SsmAttachmentContent)[]

---

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDocument.property.content"></a>

- *Type:* `string`

---

##### `documentFormat`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDocument.property.documentFormat"></a>

- *Type:* `string`

---

##### `documentType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDocument.property.documentType"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDocument.property.documentVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDocument.property.name"></a>

- *Type:* `string`

---

##### `requires`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDocument.property.requires"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentRequires`](#aws-cdk-sdk.ssm.SsmDocumentRequires)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDocument.property.status"></a>

- *Type:* `string`

---

##### `statusInformation`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDocument.property.statusInformation"></a>

- *Type:* `string`

---

##### `versionName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchDocument.property.versionName"></a>

- *Type:* `string`

---


### SSMResponsesFetchInventory <a name="aws-cdk-sdk.ssm.SSMResponsesFetchInventory"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchInventory.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchInventory(__scope: Construct, __resources: string[], __input: SsmGetInventoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchInventory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchInventory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchInventory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetInventoryRequest`](#aws-cdk-sdk.ssm.SsmGetInventoryRequest)

---



#### Properties <a name="Properties"></a>

##### `entities`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchInventory.property.entities"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryResultEntity`](#aws-cdk-sdk.ssm.SsmInventoryResultEntity)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchInventory.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesFetchInventorySchema <a name="aws-cdk-sdk.ssm.SSMResponsesFetchInventorySchema"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchInventorySchema.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchInventorySchema(__scope: Construct, __resources: string[], __input: SsmGetInventorySchemaRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchInventorySchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchInventorySchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchInventorySchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetInventorySchemaRequest`](#aws-cdk-sdk.ssm.SsmGetInventorySchemaRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchInventorySchema.property.nextToken"></a>

- *Type:* `string`

---

##### `schemas`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchInventorySchema.property.schemas"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmInventoryItemSchema`](#aws-cdk-sdk.ssm.SsmInventoryItemSchema)[]

---


### SSMResponsesFetchMaintenanceWindow <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchMaintenanceWindow(__scope: Construct, __resources: string[], __input: SsmGetMaintenanceWindowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowRequest)

---



#### Properties <a name="Properties"></a>

##### `allowUnassociatedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.property.allowUnassociatedTargets"></a>

- *Type:* `boolean`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.property.createdDate"></a>

- *Type:* `string`

---

##### `cutoff`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.property.cutoff"></a>

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.property.description"></a>

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.property.duration"></a>

- *Type:* `number`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.property.enabled"></a>

- *Type:* `boolean`

---

##### `endDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.property.endDate"></a>

- *Type:* `string`

---

##### `modifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.property.modifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.property.name"></a>

- *Type:* `string`

---

##### `nextExecutionTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.property.nextExecutionTime"></a>

- *Type:* `string`

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.property.schedule"></a>

- *Type:* `string`

---

##### `scheduleOffset`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.property.scheduleOffset"></a>

- *Type:* `number`

---

##### `scheduleTimezone`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.property.scheduleTimezone"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.property.startDate"></a>

- *Type:* `string`

---

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindow.property.windowId"></a>

- *Type:* `string`

---


### SSMResponsesFetchMaintenanceWindowExecution <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecution"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecution.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchMaintenanceWindowExecution(__scope: Construct, __resources: string[], __input: SsmGetMaintenanceWindowExecutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionRequest)

---



#### Properties <a name="Properties"></a>

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecution.property.endTime"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecution.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecution.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecution.property.statusDetails"></a>

- *Type:* `string`

---

##### `taskIds`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecution.property.taskIds"></a>

- *Type:* `string`[]

---

##### `windowExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecution.property.windowExecutionId"></a>

- *Type:* `string`

---


### SSMResponsesFetchMaintenanceWindowExecutionTask <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchMaintenanceWindowExecutionTask(__scope: Construct, __resources: string[], __input: SsmGetMaintenanceWindowExecutionTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask.property.endTime"></a>

- *Type:* `string`

---

##### `maxConcurrency`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask.property.maxErrors"></a>

- *Type:* `string`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask.property.priority"></a>

- *Type:* `number`

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask.property.serviceRole"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask.property.statusDetails"></a>

- *Type:* `string`

---

##### `taskArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask.property.taskArn"></a>

- *Type:* `string`

---

##### `taskExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask.property.taskExecutionId"></a>

- *Type:* `string`

---

##### `taskParameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask.property.taskParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression)}[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask.property.type"></a>

- *Type:* `string`

---

##### `windowExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTask.property.windowExecutionId"></a>

- *Type:* `string`

---


### SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation(__scope: Construct, __resources: string[], __input: SsmGetMaintenanceWindowExecutionTaskInvocationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowExecutionTaskInvocationRequest)

---



#### Properties <a name="Properties"></a>

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation.property.endTime"></a>

- *Type:* `string`

---

##### `executionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation.property.executionId"></a>

- *Type:* `string`

---

##### `invocationId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation.property.invocationId"></a>

- *Type:* `string`

---

##### `ownerInformation`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation.property.ownerInformation"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation.property.parameters"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation.property.statusDetails"></a>

- *Type:* `string`

---

##### `taskExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation.property.taskExecutionId"></a>

- *Type:* `string`

---

##### `taskType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation.property.taskType"></a>

- *Type:* `string`

---

##### `windowExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation.property.windowExecutionId"></a>

- *Type:* `string`

---

##### `windowTargetId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation.property.windowTargetId"></a>

- *Type:* `string`

---


### SSMResponsesFetchMaintenanceWindowTask <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchMaintenanceWindowTask(__scope: Construct, __resources: string[], __input: SsmGetMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.property.description"></a>

- *Type:* `string`

---

##### `loggingInfo`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.property.loggingInfo"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskLoggingInfo`](#aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskLoggingInfo)

---

##### `maxConcurrency`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.property.maxErrors"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.property.name"></a>

- *Type:* `string`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.property.priority"></a>

- *Type:* `number`

---

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

##### `taskArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.property.taskArn"></a>

- *Type:* `string`

---

##### `taskInvocationParameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.property.taskInvocationParameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParameters`](#aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParameters)

---

##### `taskParameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.property.taskParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression)}

---

##### `taskType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.property.taskType"></a>

- *Type:* `string`

---

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.property.windowId"></a>

- *Type:* `string`

---

##### `windowTaskId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTask.property.windowTaskId"></a>

- *Type:* `string`

---


### SSMResponsesFetchMaintenanceWindowTaskLoggingInfo <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskLoggingInfo"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskLoggingInfo.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchMaintenanceWindowTaskLoggingInfo(__scope: Construct, __resources: string[], __input: SsmGetMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskLoggingInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskLoggingInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskLoggingInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskLoggingInfo.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskLoggingInfo.property.s3KeyPrefix"></a>

- *Type:* `string`

---

##### `s3Region`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskLoggingInfo.property.s3Region"></a>

- *Type:* `string`

---


### SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParameters <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParameters"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParameters.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParameters(__scope: Construct, __resources: string[], __input: SsmGetMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `automation`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParameters.property.automation"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersAutomation`](#aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersAutomation)

---

##### `lambda`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParameters.property.lambda"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersLambda`](#aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersLambda)

---

##### `runCommand`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParameters.property.runCommand"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand`](#aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand)

---

##### `stepFunctions`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParameters.property.stepFunctions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersStepFunctions`](#aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersStepFunctions)

---


### SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersAutomation <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersAutomation"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersAutomation.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersAutomation(__scope: Construct, __resources: string[], __input: SsmGetMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersAutomation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersAutomation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersAutomation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `documentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersAutomation.property.documentVersion"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersAutomation.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---


### SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersLambda <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersLambda"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersLambda.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersLambda(__scope: Construct, __resources: string[], __input: SsmGetMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersLambda.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersLambda.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersLambda.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `clientContext`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersLambda.property.clientContext"></a>

- *Type:* `string`

---

##### `payload`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersLambda.property.payload"></a>

- *Type:* `any`

---

##### `qualifier`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersLambda.property.qualifier"></a>

- *Type:* `string`

---


### SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand(__scope: Construct, __resources: string[], __input: SsmGetMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchOutputConfig`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.cloudWatchOutputConfig"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig`](#aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig)

---

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.comment"></a>

- *Type:* `string`

---

##### `documentHash`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.documentHash"></a>

- *Type:* `string`

---

##### `documentHashType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.documentHashType"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.documentVersion"></a>

- *Type:* `string`

---

##### `notificationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.notificationConfig"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig`](#aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig)

---

##### `outputS3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.outputS3BucketName"></a>

- *Type:* `string`

---

##### `outputS3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.outputS3KeyPrefix"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `timeoutSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.timeoutSeconds"></a>

- *Type:* `number`

---


### SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig(__scope: Construct, __resources: string[], __input: SsmGetMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig.property.cloudWatchLogGroupName"></a>

- *Type:* `string`

---

##### `cloudWatchOutputEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig.property.cloudWatchOutputEnabled"></a>

- *Type:* `boolean`

---


### SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig(__scope: Construct, __resources: string[], __input: SsmGetMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `notificationArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig.property.notificationArn"></a>

- *Type:* `string`

---

##### `notificationEvents`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig.property.notificationEvents"></a>

- *Type:* `string`[]

---

##### `notificationType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig.property.notificationType"></a>

- *Type:* `string`

---


### SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersStepFunctions <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersStepFunctions"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersStepFunctions.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersStepFunctions(__scope: Construct, __resources: string[], __input: SsmGetMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersStepFunctions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersStepFunctions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersStepFunctions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmGetMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersStepFunctions.property.input"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersStepFunctions.property.name"></a>

- *Type:* `string`

---


### SSMResponsesFetchOpsItem <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItem"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItem.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchOpsItem(__scope: Construct, __resources: string[], __input: SsmGetOpsItemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetOpsItemRequest`](#aws-cdk-sdk.ssm.SsmGetOpsItemRequest)

---



#### Properties <a name="Properties"></a>

##### `opsItem`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItem.property.opsItem"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem`](#aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem)

---


### SSMResponsesFetchOpsItemOpsItem <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchOpsItemOpsItem(__scope: Construct, __resources: string[], __input: SsmGetOpsItemRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetOpsItemRequest`](#aws-cdk-sdk.ssm.SsmGetOpsItemRequest)

---



#### Properties <a name="Properties"></a>

##### `category`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.property.category"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.property.createdBy"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.property.description"></a>

- *Type:* `string`

---

##### `lastModifiedBy`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.property.lastModifiedTime"></a>

- *Type:* `string`

---

##### `notifications`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.property.notifications"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmOpsItemNotification`](#aws-cdk-sdk.ssm.SsmOpsItemNotification)[]

---

##### `operationalData`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.property.operationalData"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.ssm.SsmOpsItemDataValue`](#aws-cdk-sdk.ssm.SsmOpsItemDataValue)}

---

##### `opsItemId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.property.opsItemId"></a>

- *Type:* `string`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.property.priority"></a>

- *Type:* `number`

---

##### `relatedOpsItems`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.property.relatedOpsItems"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmRelatedOpsItem`](#aws-cdk-sdk.ssm.SsmRelatedOpsItem)[]

---

##### `severity`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.property.severity"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.property.source"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.property.status"></a>

- *Type:* `string`

---

##### `title`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.property.title"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsItemOpsItem.property.version"></a>

- *Type:* `string`

---


### SSMResponsesFetchOpsSummary <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsSummary"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsSummary.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchOpsSummary(__scope: Construct, __resources: string[], __input: SsmGetOpsSummaryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetOpsSummaryRequest`](#aws-cdk-sdk.ssm.SsmGetOpsSummaryRequest)

---



#### Properties <a name="Properties"></a>

##### `entities`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsSummary.property.entities"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmOpsEntity`](#aws-cdk-sdk.ssm.SsmOpsEntity)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchOpsSummary.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesFetchParameter <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameter"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameter.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchParameter(__scope: Construct, __resources: string[], __input: SsmGetParameterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetParameterRequest`](#aws-cdk-sdk.ssm.SsmGetParameterRequest)

---



#### Properties <a name="Properties"></a>

##### `parameter`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameter.property.parameter"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesFetchParameterParameter`](#aws-cdk-sdk.ssm.SSMResponsesFetchParameterParameter)

---


### SSMResponsesFetchParameterHistory <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterHistory"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterHistory.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchParameterHistory(__scope: Construct, __resources: string[], __input: SsmGetParameterHistoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterHistory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterHistory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterHistory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetParameterHistoryRequest`](#aws-cdk-sdk.ssm.SsmGetParameterHistoryRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterHistory.property.nextToken"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterHistory.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmParameterHistory`](#aws-cdk-sdk.ssm.SsmParameterHistory)[]

---


### SSMResponsesFetchParameterParameter <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterParameter"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterParameter.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchParameterParameter(__scope: Construct, __resources: string[], __input: SsmGetParameterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterParameter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterParameter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterParameter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetParameterRequest`](#aws-cdk-sdk.ssm.SsmGetParameterRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterParameter.property.arn"></a>

- *Type:* `string`

---

##### `dataType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterParameter.property.dataType"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterParameter.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterParameter.property.name"></a>

- *Type:* `string`

---

##### `selector`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterParameter.property.selector"></a>

- *Type:* `string`

---

##### `sourceResult`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterParameter.property.sourceResult"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterParameter.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterParameter.property.value"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameterParameter.property.version"></a>

- *Type:* `number`

---


### SSMResponsesFetchParameters <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameters"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameters.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchParameters(__scope: Construct, __resources: string[], __input: SsmGetParametersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetParametersRequest`](#aws-cdk-sdk.ssm.SsmGetParametersRequest)

---



#### Properties <a name="Properties"></a>

##### `invalidParameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameters.property.invalidParameters"></a>

- *Type:* `string`[]

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParameters.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmParameter`](#aws-cdk-sdk.ssm.SsmParameter)[]

---


### SSMResponsesFetchParametersByPath <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParametersByPath"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParametersByPath.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchParametersByPath(__scope: Construct, __resources: string[], __input: SsmGetParametersByPathRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParametersByPath.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParametersByPath.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParametersByPath.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetParametersByPathRequest`](#aws-cdk-sdk.ssm.SsmGetParametersByPathRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParametersByPath.property.nextToken"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchParametersByPath.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmParameter`](#aws-cdk-sdk.ssm.SsmParameter)[]

---


### SSMResponsesFetchPatchBaseline <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchPatchBaseline(__scope: Construct, __resources: string[], __input: SsmGetPatchBaselineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetPatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmGetPatchBaselineRequest)

---



#### Properties <a name="Properties"></a>

##### `approvalRules`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.property.approvalRules"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineApprovalRules`](#aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineApprovalRules)

---

##### `approvedPatches`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.property.approvedPatches"></a>

- *Type:* `string`[]

---

##### `approvedPatchesComplianceLevel`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.property.approvedPatchesComplianceLevel"></a>

- *Type:* `string`

---

##### `approvedPatchesEnableNonSecurity`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.property.approvedPatchesEnableNonSecurity"></a>

- *Type:* `boolean`

---

##### `baselineId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.property.baselineId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.property.description"></a>

- *Type:* `string`

---

##### `globalFilters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.property.globalFilters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineGlobalFilters`](#aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineGlobalFilters)

---

##### `modifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.property.modifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.property.name"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.property.operatingSystem"></a>

- *Type:* `string`

---

##### `patchGroups`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.property.patchGroups"></a>

- *Type:* `string`[]

---

##### `rejectedPatches`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.property.rejectedPatches"></a>

- *Type:* `string`[]

---

##### `rejectedPatchesAction`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.property.rejectedPatchesAction"></a>

- *Type:* `string`

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaseline.property.sources"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchSource`](#aws-cdk-sdk.ssm.SsmPatchSource)[]

---


### SSMResponsesFetchPatchBaselineApprovalRules <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineApprovalRules"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineApprovalRules.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchPatchBaselineApprovalRules(__scope: Construct, __resources: string[], __input: SsmGetPatchBaselineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineApprovalRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineApprovalRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineApprovalRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetPatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmGetPatchBaselineRequest)

---



#### Properties <a name="Properties"></a>

##### `patchRules`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineApprovalRules.property.patchRules"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchRule`](#aws-cdk-sdk.ssm.SsmPatchRule)[]

---


### SSMResponsesFetchPatchBaselineForPatchGroup <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineForPatchGroup"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineForPatchGroup.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchPatchBaselineForPatchGroup(__scope: Construct, __resources: string[], __input: SsmGetPatchBaselineForPatchGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineForPatchGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineForPatchGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineForPatchGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetPatchBaselineForPatchGroupRequest`](#aws-cdk-sdk.ssm.SsmGetPatchBaselineForPatchGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `baselineId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineForPatchGroup.property.baselineId"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineForPatchGroup.property.operatingSystem"></a>

- *Type:* `string`

---

##### `patchGroup`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineForPatchGroup.property.patchGroup"></a>

- *Type:* `string`

---


### SSMResponsesFetchPatchBaselineGlobalFilters <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineGlobalFilters"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineGlobalFilters.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchPatchBaselineGlobalFilters(__scope: Construct, __resources: string[], __input: SsmGetPatchBaselineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineGlobalFilters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineGlobalFilters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineGlobalFilters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetPatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmGetPatchBaselineRequest)

---



#### Properties <a name="Properties"></a>

##### `patchFilters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchPatchBaselineGlobalFilters.property.patchFilters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchFilter`](#aws-cdk-sdk.ssm.SsmPatchFilter)[]

---


### SSMResponsesFetchServiceSetting <a name="aws-cdk-sdk.ssm.SSMResponsesFetchServiceSetting"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchServiceSetting.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchServiceSetting(__scope: Construct, __resources: string[], __input: SsmGetServiceSettingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchServiceSetting.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchServiceSetting.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchServiceSetting.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetServiceSettingRequest`](#aws-cdk-sdk.ssm.SsmGetServiceSettingRequest)

---



#### Properties <a name="Properties"></a>

##### `serviceSetting`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchServiceSetting.property.serviceSetting"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesFetchServiceSettingServiceSetting`](#aws-cdk-sdk.ssm.SSMResponsesFetchServiceSettingServiceSetting)

---


### SSMResponsesFetchServiceSettingServiceSetting <a name="aws-cdk-sdk.ssm.SSMResponsesFetchServiceSettingServiceSetting"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesFetchServiceSettingServiceSetting.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesFetchServiceSettingServiceSetting(__scope: Construct, __resources: string[], __input: SsmGetServiceSettingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchServiceSettingServiceSetting.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchServiceSettingServiceSetting.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchServiceSettingServiceSetting.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmGetServiceSettingRequest`](#aws-cdk-sdk.ssm.SsmGetServiceSettingRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchServiceSettingServiceSetting.property.arn"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchServiceSettingServiceSetting.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `lastModifiedUser`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchServiceSettingServiceSetting.property.lastModifiedUser"></a>

- *Type:* `string`

---

##### `settingId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchServiceSettingServiceSetting.property.settingId"></a>

- *Type:* `string`

---

##### `settingValue`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchServiceSettingServiceSetting.property.settingValue"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesFetchServiceSettingServiceSetting.property.status"></a>

- *Type:* `string`

---


### SSMResponsesLabelParameterVersion <a name="aws-cdk-sdk.ssm.SSMResponsesLabelParameterVersion"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesLabelParameterVersion.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesLabelParameterVersion(__scope: Construct, __resources: string[], __input: SsmLabelParameterVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesLabelParameterVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesLabelParameterVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesLabelParameterVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmLabelParameterVersionRequest`](#aws-cdk-sdk.ssm.SsmLabelParameterVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `invalidLabels`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesLabelParameterVersion.property.invalidLabels"></a>

- *Type:* `string`[]

---

##### `parameterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesLabelParameterVersion.property.parameterVersion"></a>

- *Type:* `number`

---


### SSMResponsesListAssociations <a name="aws-cdk-sdk.ssm.SSMResponsesListAssociations"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesListAssociations.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesListAssociations(__scope: Construct, __resources: string[], __input: SsmListAssociationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListAssociations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListAssociations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListAssociations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListAssociationsRequest`](#aws-cdk-sdk.ssm.SsmListAssociationsRequest)

---



#### Properties <a name="Properties"></a>

##### `associations`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListAssociations.property.associations"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociation`](#aws-cdk-sdk.ssm.SsmAssociation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListAssociations.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesListAssociationVersions <a name="aws-cdk-sdk.ssm.SSMResponsesListAssociationVersions"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesListAssociationVersions.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesListAssociationVersions(__scope: Construct, __resources: string[], __input: SsmListAssociationVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListAssociationVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListAssociationVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListAssociationVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListAssociationVersionsRequest`](#aws-cdk-sdk.ssm.SsmListAssociationVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `associationVersions`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListAssociationVersions.property.associationVersions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAssociationVersionInfo`](#aws-cdk-sdk.ssm.SsmAssociationVersionInfo)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListAssociationVersions.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesListCommandInvocations <a name="aws-cdk-sdk.ssm.SSMResponsesListCommandInvocations"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesListCommandInvocations.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesListCommandInvocations(__scope: Construct, __resources: string[], __input: SsmListCommandInvocationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListCommandInvocations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListCommandInvocations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListCommandInvocations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListCommandInvocationsRequest`](#aws-cdk-sdk.ssm.SsmListCommandInvocationsRequest)

---



#### Properties <a name="Properties"></a>

##### `commandInvocations`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListCommandInvocations.property.commandInvocations"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCommandInvocation`](#aws-cdk-sdk.ssm.SsmCommandInvocation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListCommandInvocations.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesListCommands <a name="aws-cdk-sdk.ssm.SSMResponsesListCommands"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesListCommands.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesListCommands(__scope: Construct, __resources: string[], __input: SsmListCommandsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListCommands.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListCommands.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListCommands.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListCommandsRequest`](#aws-cdk-sdk.ssm.SsmListCommandsRequest)

---



#### Properties <a name="Properties"></a>

##### `commands`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListCommands.property.commands"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmCommand`](#aws-cdk-sdk.ssm.SsmCommand)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListCommands.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesListComplianceItems <a name="aws-cdk-sdk.ssm.SSMResponsesListComplianceItems"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesListComplianceItems.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesListComplianceItems(__scope: Construct, __resources: string[], __input: SsmListComplianceItemsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListComplianceItems.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListComplianceItems.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListComplianceItems.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListComplianceItemsRequest`](#aws-cdk-sdk.ssm.SsmListComplianceItemsRequest)

---



#### Properties <a name="Properties"></a>

##### `complianceItems`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListComplianceItems.property.complianceItems"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmComplianceItem`](#aws-cdk-sdk.ssm.SsmComplianceItem)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListComplianceItems.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesListComplianceSummaries <a name="aws-cdk-sdk.ssm.SSMResponsesListComplianceSummaries"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesListComplianceSummaries.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesListComplianceSummaries(__scope: Construct, __resources: string[], __input: SsmListComplianceSummariesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListComplianceSummaries.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListComplianceSummaries.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListComplianceSummaries.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListComplianceSummariesRequest`](#aws-cdk-sdk.ssm.SsmListComplianceSummariesRequest)

---



#### Properties <a name="Properties"></a>

##### `complianceSummaryItems`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListComplianceSummaries.property.complianceSummaryItems"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmComplianceSummaryItem`](#aws-cdk-sdk.ssm.SsmComplianceSummaryItem)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListComplianceSummaries.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesListDocuments <a name="aws-cdk-sdk.ssm.SSMResponsesListDocuments"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesListDocuments.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesListDocuments(__scope: Construct, __resources: string[], __input: SsmListDocumentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListDocuments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListDocuments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListDocuments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListDocumentsRequest`](#aws-cdk-sdk.ssm.SsmListDocumentsRequest)

---



#### Properties <a name="Properties"></a>

##### `documentIdentifiers`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListDocuments.property.documentIdentifiers"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentIdentifier`](#aws-cdk-sdk.ssm.SsmDocumentIdentifier)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListDocuments.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesListDocumentVersions <a name="aws-cdk-sdk.ssm.SSMResponsesListDocumentVersions"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesListDocumentVersions.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesListDocumentVersions(__scope: Construct, __resources: string[], __input: SsmListDocumentVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListDocumentVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListDocumentVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListDocumentVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListDocumentVersionsRequest`](#aws-cdk-sdk.ssm.SsmListDocumentVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `documentVersions`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListDocumentVersions.property.documentVersions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentVersionInfo`](#aws-cdk-sdk.ssm.SsmDocumentVersionInfo)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListDocumentVersions.property.nextToken"></a>

- *Type:* `string`

---


### SSMResponsesListInventoryEntries <a name="aws-cdk-sdk.ssm.SSMResponsesListInventoryEntries"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesListInventoryEntries.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesListInventoryEntries(__scope: Construct, __resources: string[], __input: SsmListInventoryEntriesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListInventoryEntries.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListInventoryEntries.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListInventoryEntries.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListInventoryEntriesRequest`](#aws-cdk-sdk.ssm.SsmListInventoryEntriesRequest)

---



#### Properties <a name="Properties"></a>

##### `captureTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListInventoryEntries.property.captureTime"></a>

- *Type:* `string`

---

##### `entries`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListInventoryEntries.property.entries"></a>

- *Type:* {[ key: string ]: `string`}[]

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListInventoryEntries.property.instanceId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListInventoryEntries.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListInventoryEntries.property.schemaVersion"></a>

- *Type:* `string`

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListInventoryEntries.property.typeName"></a>

- *Type:* `string`

---


### SSMResponsesListResourceComplianceSummaries <a name="aws-cdk-sdk.ssm.SSMResponsesListResourceComplianceSummaries"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesListResourceComplianceSummaries.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesListResourceComplianceSummaries(__scope: Construct, __resources: string[], __input: SsmListResourceComplianceSummariesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListResourceComplianceSummaries.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListResourceComplianceSummaries.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListResourceComplianceSummaries.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListResourceComplianceSummariesRequest`](#aws-cdk-sdk.ssm.SsmListResourceComplianceSummariesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListResourceComplianceSummaries.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceComplianceSummaryItems`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListResourceComplianceSummaries.property.resourceComplianceSummaryItems"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResourceComplianceSummaryItem`](#aws-cdk-sdk.ssm.SsmResourceComplianceSummaryItem)[]

---


### SSMResponsesListResourceDataSync <a name="aws-cdk-sdk.ssm.SSMResponsesListResourceDataSync"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesListResourceDataSync.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesListResourceDataSync(__scope: Construct, __resources: string[], __input: SsmListResourceDataSyncRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListResourceDataSync.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListResourceDataSync.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListResourceDataSync.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListResourceDataSyncRequest`](#aws-cdk-sdk.ssm.SsmListResourceDataSyncRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListResourceDataSync.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceDataSyncItems`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListResourceDataSync.property.resourceDataSyncItems"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResourceDataSyncItem`](#aws-cdk-sdk.ssm.SsmResourceDataSyncItem)[]

---


### SSMResponsesListTagsForResource <a name="aws-cdk-sdk.ssm.SSMResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesListTagsForResource.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: SsmListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmListTagsForResourceRequest`](#aws-cdk-sdk.ssm.SsmListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesListTagsForResource.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTag`](#aws-cdk-sdk.ssm.SsmTag)[]

---


### SSMResponsesPutInventory <a name="aws-cdk-sdk.ssm.SSMResponsesPutInventory"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesPutInventory.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesPutInventory(__scope: Construct, __resources: string[], __input: SsmPutInventoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesPutInventory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesPutInventory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesPutInventory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPutInventoryRequest`](#aws-cdk-sdk.ssm.SsmPutInventoryRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesPutInventory.property.message"></a>

- *Type:* `string`

---


### SSMResponsesPutParameter <a name="aws-cdk-sdk.ssm.SSMResponsesPutParameter"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesPutParameter.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesPutParameter(__scope: Construct, __resources: string[], __input: SsmPutParameterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesPutParameter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesPutParameter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesPutParameter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPutParameterRequest`](#aws-cdk-sdk.ssm.SsmPutParameterRequest)

---



#### Properties <a name="Properties"></a>

##### `tier`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesPutParameter.property.tier"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesPutParameter.property.version"></a>

- *Type:* `number`

---


### SSMResponsesRegisterDefaultPatchBaseline <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterDefaultPatchBaseline"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterDefaultPatchBaseline.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesRegisterDefaultPatchBaseline(__scope: Construct, __resources: string[], __input: SsmRegisterDefaultPatchBaselineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterDefaultPatchBaseline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterDefaultPatchBaseline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterDefaultPatchBaseline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmRegisterDefaultPatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmRegisterDefaultPatchBaselineRequest)

---



#### Properties <a name="Properties"></a>

##### `baselineId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterDefaultPatchBaseline.property.baselineId"></a>

- *Type:* `string`

---


### SSMResponsesRegisterPatchBaselineForPatchGroup <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterPatchBaselineForPatchGroup"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterPatchBaselineForPatchGroup.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesRegisterPatchBaselineForPatchGroup(__scope: Construct, __resources: string[], __input: SsmRegisterPatchBaselineForPatchGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterPatchBaselineForPatchGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterPatchBaselineForPatchGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterPatchBaselineForPatchGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmRegisterPatchBaselineForPatchGroupRequest`](#aws-cdk-sdk.ssm.SsmRegisterPatchBaselineForPatchGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `baselineId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterPatchBaselineForPatchGroup.property.baselineId"></a>

- *Type:* `string`

---

##### `patchGroup`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterPatchBaselineForPatchGroup.property.patchGroup"></a>

- *Type:* `string`

---


### SSMResponsesRegisterTargetWithMaintenanceWindow <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterTargetWithMaintenanceWindow"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterTargetWithMaintenanceWindow.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesRegisterTargetWithMaintenanceWindow(__scope: Construct, __resources: string[], __input: SsmRegisterTargetWithMaintenanceWindowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterTargetWithMaintenanceWindow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterTargetWithMaintenanceWindow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterTargetWithMaintenanceWindow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmRegisterTargetWithMaintenanceWindowRequest`](#aws-cdk-sdk.ssm.SsmRegisterTargetWithMaintenanceWindowRequest)

---



#### Properties <a name="Properties"></a>

##### `windowTargetId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterTargetWithMaintenanceWindow.property.windowTargetId"></a>

- *Type:* `string`

---


### SSMResponsesRegisterTaskWithMaintenanceWindow <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterTaskWithMaintenanceWindow"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterTaskWithMaintenanceWindow.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesRegisterTaskWithMaintenanceWindow(__scope: Construct, __resources: string[], __input: SsmRegisterTaskWithMaintenanceWindowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterTaskWithMaintenanceWindow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterTaskWithMaintenanceWindow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterTaskWithMaintenanceWindow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest`](#aws-cdk-sdk.ssm.SsmRegisterTaskWithMaintenanceWindowRequest)

---



#### Properties <a name="Properties"></a>

##### `windowTaskId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesRegisterTaskWithMaintenanceWindow.property.windowTaskId"></a>

- *Type:* `string`

---


### SSMResponsesResetServiceSetting <a name="aws-cdk-sdk.ssm.SSMResponsesResetServiceSetting"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesResetServiceSetting.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesResetServiceSetting(__scope: Construct, __resources: string[], __input: SsmResetServiceSettingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResetServiceSetting.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResetServiceSetting.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResetServiceSetting.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResetServiceSettingRequest`](#aws-cdk-sdk.ssm.SsmResetServiceSettingRequest)

---



#### Properties <a name="Properties"></a>

##### `serviceSetting`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResetServiceSetting.property.serviceSetting"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesResetServiceSettingServiceSetting`](#aws-cdk-sdk.ssm.SSMResponsesResetServiceSettingServiceSetting)

---


### SSMResponsesResetServiceSettingServiceSetting <a name="aws-cdk-sdk.ssm.SSMResponsesResetServiceSettingServiceSetting"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesResetServiceSettingServiceSetting.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesResetServiceSettingServiceSetting(__scope: Construct, __resources: string[], __input: SsmResetServiceSettingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResetServiceSettingServiceSetting.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResetServiceSettingServiceSetting.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResetServiceSettingServiceSetting.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResetServiceSettingRequest`](#aws-cdk-sdk.ssm.SsmResetServiceSettingRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResetServiceSettingServiceSetting.property.arn"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResetServiceSettingServiceSetting.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `lastModifiedUser`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResetServiceSettingServiceSetting.property.lastModifiedUser"></a>

- *Type:* `string`

---

##### `settingId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResetServiceSettingServiceSetting.property.settingId"></a>

- *Type:* `string`

---

##### `settingValue`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResetServiceSettingServiceSetting.property.settingValue"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResetServiceSettingServiceSetting.property.status"></a>

- *Type:* `string`

---


### SSMResponsesResumeSession <a name="aws-cdk-sdk.ssm.SSMResponsesResumeSession"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesResumeSession.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesResumeSession(__scope: Construct, __resources: string[], __input: SsmResumeSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResumeSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResumeSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResumeSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmResumeSessionRequest`](#aws-cdk-sdk.ssm.SsmResumeSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `sessionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResumeSession.property.sessionId"></a>

- *Type:* `string`

---

##### `streamUrl`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResumeSession.property.streamUrl"></a>

- *Type:* `string`

---

##### `tokenValue`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesResumeSession.property.tokenValue"></a>

- *Type:* `string`

---


### SSMResponsesSendCommand <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommand"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommand.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesSendCommand(__scope: Construct, __resources: string[], __input: SsmSendCommandRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommand.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommand.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommand.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmSendCommandRequest`](#aws-cdk-sdk.ssm.SsmSendCommandRequest)

---



#### Properties <a name="Properties"></a>

##### `command`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommand.property.command"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand`](#aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand)

---


### SSMResponsesSendCommandCommand <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesSendCommandCommand(__scope: Construct, __resources: string[], __input: SsmSendCommandRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmSendCommandRequest`](#aws-cdk-sdk.ssm.SsmSendCommandRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchOutputConfig`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.cloudWatchOutputConfig"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandCloudWatchOutputConfig`](#aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandCloudWatchOutputConfig)

---

##### `commandId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.commandId"></a>

- *Type:* `string`

---

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.comment"></a>

- *Type:* `string`

---

##### `completedCount`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.completedCount"></a>

- *Type:* `number`

---

##### `deliveryTimedOutCount`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.deliveryTimedOutCount"></a>

- *Type:* `number`

---

##### `documentName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.documentName"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.documentVersion"></a>

- *Type:* `string`

---

##### `errorCount`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.errorCount"></a>

- *Type:* `number`

---

##### `expiresAfter`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.expiresAfter"></a>

- *Type:* `string`

---

##### `instanceIds`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.instanceIds"></a>

- *Type:* `string`[]

---

##### `maxConcurrency`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.maxErrors"></a>

- *Type:* `string`

---

##### `notificationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.notificationConfig"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandNotificationConfig`](#aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandNotificationConfig)

---

##### `outputS3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.outputS3BucketName"></a>

- *Type:* `string`

---

##### `outputS3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.outputS3KeyPrefix"></a>

- *Type:* `string`

---

##### `outputS3Region`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.outputS3Region"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `requestedDateTime`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.requestedDateTime"></a>

- *Type:* `string`

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.serviceRole"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.status"></a>

- *Type:* `string`

---

##### `statusDetails`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.statusDetails"></a>

- *Type:* `string`

---

##### `targetCount`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.targetCount"></a>

- *Type:* `number`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

##### `timeoutSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommand.property.timeoutSeconds"></a>

- *Type:* `number`

---


### SSMResponsesSendCommandCommandCloudWatchOutputConfig <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandCloudWatchOutputConfig"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandCloudWatchOutputConfig.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesSendCommandCommandCloudWatchOutputConfig(__scope: Construct, __resources: string[], __input: SsmSendCommandRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandCloudWatchOutputConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandCloudWatchOutputConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandCloudWatchOutputConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmSendCommandRequest`](#aws-cdk-sdk.ssm.SsmSendCommandRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandCloudWatchOutputConfig.property.cloudWatchLogGroupName"></a>

- *Type:* `string`

---

##### `cloudWatchOutputEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandCloudWatchOutputConfig.property.cloudWatchOutputEnabled"></a>

- *Type:* `boolean`

---


### SSMResponsesSendCommandCommandNotificationConfig <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandNotificationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandNotificationConfig.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesSendCommandCommandNotificationConfig(__scope: Construct, __resources: string[], __input: SsmSendCommandRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandNotificationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandNotificationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandNotificationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmSendCommandRequest`](#aws-cdk-sdk.ssm.SsmSendCommandRequest)

---



#### Properties <a name="Properties"></a>

##### `notificationArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandNotificationConfig.property.notificationArn"></a>

- *Type:* `string`

---

##### `notificationEvents`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandNotificationConfig.property.notificationEvents"></a>

- *Type:* `string`[]

---

##### `notificationType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesSendCommandCommandNotificationConfig.property.notificationType"></a>

- *Type:* `string`

---


### SSMResponsesStartAutomationExecution <a name="aws-cdk-sdk.ssm.SSMResponsesStartAutomationExecution"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesStartAutomationExecution.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesStartAutomationExecution(__scope: Construct, __resources: string[], __input: SsmStartAutomationExecutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesStartAutomationExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesStartAutomationExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesStartAutomationExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmStartAutomationExecutionRequest`](#aws-cdk-sdk.ssm.SsmStartAutomationExecutionRequest)

---



#### Properties <a name="Properties"></a>

##### `automationExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesStartAutomationExecution.property.automationExecutionId"></a>

- *Type:* `string`

---


### SSMResponsesStartSession <a name="aws-cdk-sdk.ssm.SSMResponsesStartSession"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesStartSession.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesStartSession(__scope: Construct, __resources: string[], __input: SsmStartSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesStartSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesStartSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesStartSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmStartSessionRequest`](#aws-cdk-sdk.ssm.SsmStartSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `sessionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesStartSession.property.sessionId"></a>

- *Type:* `string`

---

##### `streamUrl`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesStartSession.property.streamUrl"></a>

- *Type:* `string`

---

##### `tokenValue`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesStartSession.property.tokenValue"></a>

- *Type:* `string`

---


### SSMResponsesTerminateSession <a name="aws-cdk-sdk.ssm.SSMResponsesTerminateSession"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesTerminateSession.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesTerminateSession(__scope: Construct, __resources: string[], __input: SsmTerminateSessionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesTerminateSession.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesTerminateSession.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesTerminateSession.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTerminateSessionRequest`](#aws-cdk-sdk.ssm.SsmTerminateSessionRequest)

---



#### Properties <a name="Properties"></a>

##### `sessionId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesTerminateSession.property.sessionId"></a>

- *Type:* `string`

---


### SSMResponsesUpdateAssociation <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociation"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociation.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateAssociation(__scope: Construct, __resources: string[], __input: SsmUpdateAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateAssociationRequest`](#aws-cdk-sdk.ssm.SsmUpdateAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `associationDescription`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociation.property.associationDescription"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription`](#aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription)

---


### SSMResponsesUpdateAssociationAssociationDescription <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateAssociationAssociationDescription(__scope: Construct, __resources: string[], __input: SsmUpdateAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateAssociationRequest`](#aws-cdk-sdk.ssm.SsmUpdateAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `applyOnlyAtCronInterval`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.applyOnlyAtCronInterval"></a>

- *Type:* `boolean`

---

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.associationId"></a>

- *Type:* `string`

---

##### `associationName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.associationName"></a>

- *Type:* `string`

---

##### `associationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.associationVersion"></a>

- *Type:* `string`

---

##### `automationTargetParameterName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.automationTargetParameterName"></a>

- *Type:* `string`

---

##### `complianceSeverity`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.complianceSeverity"></a>

- *Type:* `string`

---

##### `date`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.date"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.documentVersion"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.instanceId"></a>

- *Type:* `string`

---

##### `lastExecutionDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.lastExecutionDate"></a>

- *Type:* `string`

---

##### `lastSuccessfulExecutionDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.lastSuccessfulExecutionDate"></a>

- *Type:* `string`

---

##### `lastUpdateAssociationDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.lastUpdateAssociationDate"></a>

- *Type:* `string`

---

##### `maxConcurrency`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.maxErrors"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.name"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocation`](#aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocation)

---

##### `overview`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.overview"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOverview`](#aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOverview)

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `scheduleExpression`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.status"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionStatus`](#aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionStatus)

---

##### `syncCompliance`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.syncCompliance"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescription.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---


### SSMResponsesUpdateAssociationAssociationDescriptionOutputLocation <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocation"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocation.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocation(__scope: Construct, __resources: string[], __input: SsmUpdateAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateAssociationRequest`](#aws-cdk-sdk.ssm.SsmUpdateAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Location`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocation.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocationS3Location`](#aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocationS3Location)

---


### SSMResponsesUpdateAssociationAssociationDescriptionOutputLocationS3Location <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocationS3Location"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocationS3Location.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocationS3Location(__scope: Construct, __resources: string[], __input: SsmUpdateAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocationS3Location.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocationS3Location.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocationS3Location.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateAssociationRequest`](#aws-cdk-sdk.ssm.SsmUpdateAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `outputS3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocationS3Location.property.outputS3BucketName"></a>

- *Type:* `string`

---

##### `outputS3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocationS3Location.property.outputS3KeyPrefix"></a>

- *Type:* `string`

---

##### `outputS3Region`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOutputLocationS3Location.property.outputS3Region"></a>

- *Type:* `string`

---


### SSMResponsesUpdateAssociationAssociationDescriptionOverview <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOverview"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOverview.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateAssociationAssociationDescriptionOverview(__scope: Construct, __resources: string[], __input: SsmUpdateAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOverview.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOverview.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOverview.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateAssociationRequest`](#aws-cdk-sdk.ssm.SsmUpdateAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `associationStatusAggregatedCount`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOverview.property.associationStatusAggregatedCount"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `detailedStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOverview.property.detailedStatus"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionOverview.property.status"></a>

- *Type:* `string`

---


### SSMResponsesUpdateAssociationAssociationDescriptionStatus <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionStatus.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateAssociationAssociationDescriptionStatus(__scope: Construct, __resources: string[], __input: SsmUpdateAssociationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateAssociationRequest`](#aws-cdk-sdk.ssm.SsmUpdateAssociationRequest)

---



#### Properties <a name="Properties"></a>

##### `additionalInfo`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionStatus.property.additionalInfo"></a>

- *Type:* `string`

---

##### `date`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionStatus.property.date"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionStatus.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationAssociationDescriptionStatus.property.name"></a>

- *Type:* `string`

---


### SSMResponsesUpdateAssociationStatus <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatus.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateAssociationStatus(__scope: Construct, __resources: string[], __input: SsmUpdateAssociationStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest`](#aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `associationDescription`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatus.property.associationDescription"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription`](#aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription)

---


### SSMResponsesUpdateAssociationStatusAssociationDescription <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateAssociationStatusAssociationDescription(__scope: Construct, __resources: string[], __input: SsmUpdateAssociationStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest`](#aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `applyOnlyAtCronInterval`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.applyOnlyAtCronInterval"></a>

- *Type:* `boolean`

---

##### `associationId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.associationId"></a>

- *Type:* `string`

---

##### `associationName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.associationName"></a>

- *Type:* `string`

---

##### `associationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.associationVersion"></a>

- *Type:* `string`

---

##### `automationTargetParameterName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.automationTargetParameterName"></a>

- *Type:* `string`

---

##### `complianceSeverity`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.complianceSeverity"></a>

- *Type:* `string`

---

##### `date`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.date"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.documentVersion"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.instanceId"></a>

- *Type:* `string`

---

##### `lastExecutionDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.lastExecutionDate"></a>

- *Type:* `string`

---

##### `lastSuccessfulExecutionDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.lastSuccessfulExecutionDate"></a>

- *Type:* `string`

---

##### `lastUpdateAssociationDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.lastUpdateAssociationDate"></a>

- *Type:* `string`

---

##### `maxConcurrency`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.maxErrors"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.name"></a>

- *Type:* `string`

---

##### `outputLocation`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.outputLocation"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocation`](#aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocation)

---

##### `overview`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.overview"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOverview`](#aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOverview)

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `scheduleExpression`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.status"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionStatus`](#aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionStatus)

---

##### `syncCompliance`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.syncCompliance"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescription.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---


### SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocation <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocation"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocation.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocation(__scope: Construct, __resources: string[], __input: SsmUpdateAssociationStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest`](#aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `s3Location`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocation.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location`](#aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location)

---


### SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location(__scope: Construct, __resources: string[], __input: SsmUpdateAssociationStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest`](#aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `outputS3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location.property.outputS3BucketName"></a>

- *Type:* `string`

---

##### `outputS3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location.property.outputS3KeyPrefix"></a>

- *Type:* `string`

---

##### `outputS3Region`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location.property.outputS3Region"></a>

- *Type:* `string`

---


### SSMResponsesUpdateAssociationStatusAssociationDescriptionOverview <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOverview"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOverview.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOverview(__scope: Construct, __resources: string[], __input: SsmUpdateAssociationStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOverview.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOverview.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOverview.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest`](#aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `associationStatusAggregatedCount`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOverview.property.associationStatusAggregatedCount"></a>

- *Type:* {[ key: string ]: `number`}

---

##### `detailedStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOverview.property.detailedStatus"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionOverview.property.status"></a>

- *Type:* `string`

---


### SSMResponsesUpdateAssociationStatusAssociationDescriptionStatus <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionStatus.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionStatus(__scope: Construct, __resources: string[], __input: SsmUpdateAssociationStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest`](#aws-cdk-sdk.ssm.SsmUpdateAssociationStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `additionalInfo`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionStatus.property.additionalInfo"></a>

- *Type:* `string`

---

##### `date`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionStatus.property.date"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionStatus.property.message"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateAssociationStatusAssociationDescriptionStatus.property.name"></a>

- *Type:* `string`

---


### SSMResponsesUpdateDocument <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocument"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocument.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateDocument(__scope: Construct, __resources: string[], __input: SsmUpdateDocumentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocument.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocument.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocument.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateDocumentRequest`](#aws-cdk-sdk.ssm.SsmUpdateDocumentRequest)

---



#### Properties <a name="Properties"></a>

##### `documentDescription`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocument.property.documentDescription"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription`](#aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription)

---


### SSMResponsesUpdateDocumentDefaultVersion <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDefaultVersion"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDefaultVersion.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateDocumentDefaultVersion(__scope: Construct, __resources: string[], __input: SsmUpdateDocumentDefaultVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDefaultVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDefaultVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDefaultVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateDocumentDefaultVersionRequest`](#aws-cdk-sdk.ssm.SsmUpdateDocumentDefaultVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDefaultVersion.property.description"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDefaultVersionDescription`](#aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDefaultVersionDescription)

---


### SSMResponsesUpdateDocumentDefaultVersionDescription <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDefaultVersionDescription"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDefaultVersionDescription.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateDocumentDefaultVersionDescription(__scope: Construct, __resources: string[], __input: SsmUpdateDocumentDefaultVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDefaultVersionDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDefaultVersionDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDefaultVersionDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateDocumentDefaultVersionRequest`](#aws-cdk-sdk.ssm.SsmUpdateDocumentDefaultVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDefaultVersionDescription.property.defaultVersion"></a>

- *Type:* `string`

---

##### `defaultVersionName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDefaultVersionDescription.property.defaultVersionName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDefaultVersionDescription.property.name"></a>

- *Type:* `string`

---


### SSMResponsesUpdateDocumentDocumentDescription <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateDocumentDocumentDescription(__scope: Construct, __resources: string[], __input: SsmUpdateDocumentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateDocumentRequest`](#aws-cdk-sdk.ssm.SsmUpdateDocumentRequest)

---



#### Properties <a name="Properties"></a>

##### `attachmentsInformation`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.attachmentsInformation"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmAttachmentInformation`](#aws-cdk-sdk.ssm.SsmAttachmentInformation)[]

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.createdDate"></a>

- *Type:* `string`

---

##### `defaultVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.defaultVersion"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.description"></a>

- *Type:* `string`

---

##### `documentFormat`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.documentFormat"></a>

- *Type:* `string`

---

##### `documentType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.documentType"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.documentVersion"></a>

- *Type:* `string`

---

##### `hash`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.hash"></a>

- *Type:* `string`

---

##### `hashType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.hashType"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.latestVersion"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.owner"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentParameter`](#aws-cdk-sdk.ssm.SsmDocumentParameter)[]

---

##### `platformTypes`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.platformTypes"></a>

- *Type:* `string`[]

---

##### `requires`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.requires"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmDocumentRequires`](#aws-cdk-sdk.ssm.SsmDocumentRequires)[]

---

##### `schemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.schemaVersion"></a>

- *Type:* `string`

---

##### `sha1`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.sha1"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.status"></a>

- *Type:* `string`

---

##### `statusInformation`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.statusInformation"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTag`](#aws-cdk-sdk.ssm.SsmTag)[]

---

##### `targetType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.targetType"></a>

- *Type:* `string`

---

##### `versionName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateDocumentDocumentDescription.property.versionName"></a>

- *Type:* `string`

---


### SSMResponsesUpdateMaintenanceWindow <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindow"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindow.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateMaintenanceWindow(__scope: Construct, __resources: string[], __input: SsmUpdateMaintenanceWindowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest`](#aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowRequest)

---



#### Properties <a name="Properties"></a>

##### `allowUnassociatedTargets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindow.property.allowUnassociatedTargets"></a>

- *Type:* `boolean`

---

##### `cutoff`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindow.property.cutoff"></a>

- *Type:* `number`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindow.property.description"></a>

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindow.property.duration"></a>

- *Type:* `number`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindow.property.enabled"></a>

- *Type:* `boolean`

---

##### `endDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindow.property.endDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindow.property.name"></a>

- *Type:* `string`

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindow.property.schedule"></a>

- *Type:* `string`

---

##### `scheduleOffset`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindow.property.scheduleOffset"></a>

- *Type:* `number`

---

##### `scheduleTimezone`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindow.property.scheduleTimezone"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindow.property.startDate"></a>

- *Type:* `string`

---

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindow.property.windowId"></a>

- *Type:* `string`

---


### SSMResponsesUpdateMaintenanceWindowTarget <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTarget"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTarget.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateMaintenanceWindowTarget(__scope: Construct, __resources: string[], __input: SsmUpdateMaintenanceWindowTargetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetRequest`](#aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTargetRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTarget.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTarget.property.name"></a>

- *Type:* `string`

---

##### `ownerInformation`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTarget.property.ownerInformation"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTarget.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTarget.property.windowId"></a>

- *Type:* `string`

---

##### `windowTargetId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTarget.property.windowTargetId"></a>

- *Type:* `string`

---


### SSMResponsesUpdateMaintenanceWindowTask <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateMaintenanceWindowTask(__scope: Construct, __resources: string[], __input: SsmUpdateMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask.property.description"></a>

- *Type:* `string`

---

##### `loggingInfo`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask.property.loggingInfo"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskLoggingInfo`](#aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskLoggingInfo)

---

##### `maxConcurrency`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask.property.maxConcurrency"></a>

- *Type:* `string`

---

##### `maxErrors`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask.property.maxErrors"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask.property.name"></a>

- *Type:* `string`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask.property.priority"></a>

- *Type:* `number`

---

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask.property.targets"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmTarget`](#aws-cdk-sdk.ssm.SsmTarget)[]

---

##### `taskArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask.property.taskArn"></a>

- *Type:* `string`

---

##### `taskInvocationParameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask.property.taskInvocationParameters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParameters`](#aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParameters)

---

##### `taskParameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask.property.taskParameters"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression`](#aws-cdk-sdk.ssm.SsmMaintenanceWindowTaskParameterValueExpression)}

---

##### `windowId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask.property.windowId"></a>

- *Type:* `string`

---

##### `windowTaskId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTask.property.windowTaskId"></a>

- *Type:* `string`

---


### SSMResponsesUpdateMaintenanceWindowTaskLoggingInfo <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskLoggingInfo"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskLoggingInfo.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateMaintenanceWindowTaskLoggingInfo(__scope: Construct, __resources: string[], __input: SsmUpdateMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskLoggingInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskLoggingInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskLoggingInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskLoggingInfo.property.s3BucketName"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskLoggingInfo.property.s3KeyPrefix"></a>

- *Type:* `string`

---

##### `s3Region`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskLoggingInfo.property.s3Region"></a>

- *Type:* `string`

---


### SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParameters <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParameters"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParameters.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParameters(__scope: Construct, __resources: string[], __input: SsmUpdateMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `automation`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParameters.property.automation"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersAutomation`](#aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersAutomation)

---

##### `lambda`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParameters.property.lambda"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersLambda`](#aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersLambda)

---

##### `runCommand`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParameters.property.runCommand"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand`](#aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand)

---

##### `stepFunctions`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParameters.property.stepFunctions"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersStepFunctions`](#aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersStepFunctions)

---


### SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersAutomation <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersAutomation"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersAutomation.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersAutomation(__scope: Construct, __resources: string[], __input: SsmUpdateMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersAutomation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersAutomation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersAutomation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `documentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersAutomation.property.documentVersion"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersAutomation.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---


### SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersLambda <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersLambda"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersLambda.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersLambda(__scope: Construct, __resources: string[], __input: SsmUpdateMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersLambda.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersLambda.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersLambda.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `clientContext`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersLambda.property.clientContext"></a>

- *Type:* `string`

---

##### `payload`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersLambda.property.payload"></a>

- *Type:* `any`

---

##### `qualifier`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersLambda.property.qualifier"></a>

- *Type:* `string`

---


### SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand(__scope: Construct, __resources: string[], __input: SsmUpdateMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchOutputConfig`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.cloudWatchOutputConfig"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig`](#aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig)

---

##### `comment`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.comment"></a>

- *Type:* `string`

---

##### `documentHash`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.documentHash"></a>

- *Type:* `string`

---

##### `documentHashType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.documentHashType"></a>

- *Type:* `string`

---

##### `documentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.documentVersion"></a>

- *Type:* `string`

---

##### `notificationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.notificationConfig"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig`](#aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig)

---

##### `outputS3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.outputS3BucketName"></a>

- *Type:* `string`

---

##### `outputS3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.outputS3KeyPrefix"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.parameters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `timeoutSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand.property.timeoutSeconds"></a>

- *Type:* `number`

---


### SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig(__scope: Construct, __resources: string[], __input: SsmUpdateMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig.property.cloudWatchLogGroupName"></a>

- *Type:* `string`

---

##### `cloudWatchOutputEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig.property.cloudWatchOutputEnabled"></a>

- *Type:* `boolean`

---


### SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig(__scope: Construct, __resources: string[], __input: SsmUpdateMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `notificationArn`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig.property.notificationArn"></a>

- *Type:* `string`

---

##### `notificationEvents`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig.property.notificationEvents"></a>

- *Type:* `string`[]

---

##### `notificationType`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig.property.notificationType"></a>

- *Type:* `string`

---


### SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersStepFunctions <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersStepFunctions"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersStepFunctions.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersStepFunctions(__scope: Construct, __resources: string[], __input: SsmUpdateMaintenanceWindowTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersStepFunctions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersStepFunctions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersStepFunctions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest`](#aws-cdk-sdk.ssm.SsmUpdateMaintenanceWindowTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersStepFunctions.property.input"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersStepFunctions.property.name"></a>

- *Type:* `string`

---


### SSMResponsesUpdatePatchBaseline <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdatePatchBaseline(__scope: Construct, __resources: string[], __input: SsmUpdatePatchBaselineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest)

---



#### Properties <a name="Properties"></a>

##### `approvalRules`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.property.approvalRules"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaselineApprovalRules`](#aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaselineApprovalRules)

---

##### `approvedPatches`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.property.approvedPatches"></a>

- *Type:* `string`[]

---

##### `approvedPatchesComplianceLevel`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.property.approvedPatchesComplianceLevel"></a>

- *Type:* `string`

---

##### `approvedPatchesEnableNonSecurity`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.property.approvedPatchesEnableNonSecurity"></a>

- *Type:* `boolean`

---

##### `baselineId`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.property.baselineId"></a>

- *Type:* `string`

---

##### `createdDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.property.createdDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.property.description"></a>

- *Type:* `string`

---

##### `globalFilters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.property.globalFilters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaselineGlobalFilters`](#aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaselineGlobalFilters)

---

##### `modifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.property.modifiedDate"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.property.name"></a>

- *Type:* `string`

---

##### `operatingSystem`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.property.operatingSystem"></a>

- *Type:* `string`

---

##### `rejectedPatches`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.property.rejectedPatches"></a>

- *Type:* `string`[]

---

##### `rejectedPatchesAction`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.property.rejectedPatchesAction"></a>

- *Type:* `string`

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaseline.property.sources"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchSource`](#aws-cdk-sdk.ssm.SsmPatchSource)[]

---


### SSMResponsesUpdatePatchBaselineApprovalRules <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaselineApprovalRules"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaselineApprovalRules.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdatePatchBaselineApprovalRules(__scope: Construct, __resources: string[], __input: SsmUpdatePatchBaselineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaselineApprovalRules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaselineApprovalRules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaselineApprovalRules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest)

---



#### Properties <a name="Properties"></a>

##### `patchRules`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaselineApprovalRules.property.patchRules"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchRule`](#aws-cdk-sdk.ssm.SsmPatchRule)[]

---


### SSMResponsesUpdatePatchBaselineGlobalFilters <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaselineGlobalFilters"></a>

#### Initializer <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaselineGlobalFilters.Initializer"></a>

```typescript
import { ssm } from 'aws-cdk-sdk'

new ssm.SSMResponsesUpdatePatchBaselineGlobalFilters(__scope: Construct, __resources: string[], __input: SsmUpdatePatchBaselineRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaselineGlobalFilters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaselineGlobalFilters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaselineGlobalFilters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest`](#aws-cdk-sdk.ssm.SsmUpdatePatchBaselineRequest)

---



#### Properties <a name="Properties"></a>

##### `patchFilters`<sup>Required</sup> <a name="aws-cdk-sdk.ssm.SSMResponsesUpdatePatchBaselineGlobalFilters.property.patchFilters"></a>

- *Type:* [`aws-cdk-sdk.ssm.SsmPatchFilter`](#aws-cdk-sdk.ssm.SsmPatchFilter)[]

---



