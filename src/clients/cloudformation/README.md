# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CloudFormationClient <a name="aws-cdk-sdk.cloudformation.CloudFormationClient"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `cancelUpdateStack` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.cancelUpdateStack"></a>

```typescript
public cancelUpdateStack(input: CloudFormationCancelUpdateStackInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationCancelUpdateStackInput`](#aws-cdk-sdk.cloudformation.CloudFormationCancelUpdateStackInput)

---

##### `continueUpdateRollback` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.continueUpdateRollback"></a>

```typescript
public continueUpdateRollback(input: CloudFormationContinueUpdateRollbackInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationContinueUpdateRollbackInput`](#aws-cdk-sdk.cloudformation.CloudFormationContinueUpdateRollbackInput)

---

##### `createChangeSet` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.createChangeSet"></a>

```typescript
public createChangeSet(input: CloudFormationCreateChangeSetInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput`](#aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput)

---

##### `createStack` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.createStack"></a>

```typescript
public createStack(input: CloudFormationCreateStackInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput`](#aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput)

---

##### `createStackInstances` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.createStackInstances"></a>

```typescript
public createStackInstances(input: CloudFormationCreateStackInstancesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationCreateStackInstancesInput`](#aws-cdk-sdk.cloudformation.CloudFormationCreateStackInstancesInput)

---

##### `createStackSet` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.createStackSet"></a>

```typescript
public createStackSet(input: CloudFormationCreateStackSetInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetInput`](#aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetInput)

---

##### `deleteChangeSet` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.deleteChangeSet"></a>

```typescript
public deleteChangeSet(input: CloudFormationDeleteChangeSetInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDeleteChangeSetInput`](#aws-cdk-sdk.cloudformation.CloudFormationDeleteChangeSetInput)

---

##### `deleteStack` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.deleteStack"></a>

```typescript
public deleteStack(input: CloudFormationDeleteStackInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInput`](#aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInput)

---

##### `deleteStackInstances` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.deleteStackInstances"></a>

```typescript
public deleteStackInstances(input: CloudFormationDeleteStackInstancesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInstancesInput`](#aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInstancesInput)

---

##### `deleteStackSet` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.deleteStackSet"></a>

```typescript
public deleteStackSet(input: CloudFormationDeleteStackSetInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDeleteStackSetInput`](#aws-cdk-sdk.cloudformation.CloudFormationDeleteStackSetInput)

---

##### `deregisterType` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.deregisterType"></a>

```typescript
public deregisterType(input: CloudFormationDeregisterTypeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDeregisterTypeInput`](#aws-cdk-sdk.cloudformation.CloudFormationDeregisterTypeInput)

---

##### `describeAccountLimits` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.describeAccountLimits"></a>

```typescript
public describeAccountLimits(input: CloudFormationDescribeAccountLimitsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeAccountLimitsInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeAccountLimitsInput)

---

##### `describeChangeSet` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.describeChangeSet"></a>

```typescript
public describeChangeSet(input: CloudFormationDescribeChangeSetInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetInput)

---

##### `describeStackDriftDetectionStatus` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.describeStackDriftDetectionStatus"></a>

```typescript
public describeStackDriftDetectionStatus(input: CloudFormationDescribeStackDriftDetectionStatusInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackDriftDetectionStatusInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackDriftDetectionStatusInput)

---

##### `describeStackEvents` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.describeStackEvents"></a>

```typescript
public describeStackEvents(input: CloudFormationDescribeStackEventsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackEventsInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackEventsInput)

---

##### `describeStackInstance` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.describeStackInstance"></a>

```typescript
public describeStackInstance(input: CloudFormationDescribeStackInstanceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackInstanceInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackInstanceInput)

---

##### `describeStackResource` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.describeStackResource"></a>

```typescript
public describeStackResource(input: CloudFormationDescribeStackResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceInput)

---

##### `describeStackResourceDrifts` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.describeStackResourceDrifts"></a>

```typescript
public describeStackResourceDrifts(input: CloudFormationDescribeStackResourceDriftsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceDriftsInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceDriftsInput)

---

##### `describeStackResources` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.describeStackResources"></a>

```typescript
public describeStackResources(input: CloudFormationDescribeStackResourcesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourcesInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourcesInput)

---

##### `describeStacks` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.describeStacks"></a>

```typescript
public describeStacks(input: CloudFormationDescribeStacksInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStacksInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStacksInput)

---

##### `describeStackSet` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.describeStackSet"></a>

```typescript
public describeStackSet(input: CloudFormationDescribeStackSetInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetInput)

---

##### `describeStackSetOperation` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.describeStackSetOperation"></a>

```typescript
public describeStackSetOperation(input: CloudFormationDescribeStackSetOperationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOperationInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOperationInput)

---

##### `describeType` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.describeType"></a>

```typescript
public describeType(input: CloudFormationDescribeTypeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeInput)

---

##### `describeTypeRegistration` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.describeTypeRegistration"></a>

```typescript
public describeTypeRegistration(input: CloudFormationDescribeTypeRegistrationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeRegistrationInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeRegistrationInput)

---

##### `detectStackDrift` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.detectStackDrift"></a>

```typescript
public detectStackDrift(input: CloudFormationDetectStackDriftInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDetectStackDriftInput`](#aws-cdk-sdk.cloudformation.CloudFormationDetectStackDriftInput)

---

##### `detectStackResourceDrift` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.detectStackResourceDrift"></a>

```typescript
public detectStackResourceDrift(input: CloudFormationDetectStackResourceDriftInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDetectStackResourceDriftInput`](#aws-cdk-sdk.cloudformation.CloudFormationDetectStackResourceDriftInput)

---

##### `detectStackSetDrift` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.detectStackSetDrift"></a>

```typescript
public detectStackSetDrift(input: CloudFormationDetectStackSetDriftInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDetectStackSetDriftInput`](#aws-cdk-sdk.cloudformation.CloudFormationDetectStackSetDriftInput)

---

##### `estimateTemplateCost` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.estimateTemplateCost"></a>

```typescript
public estimateTemplateCost(input: CloudFormationEstimateTemplateCostInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationEstimateTemplateCostInput`](#aws-cdk-sdk.cloudformation.CloudFormationEstimateTemplateCostInput)

---

##### `executeChangeSet` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.executeChangeSet"></a>

```typescript
public executeChangeSet(input: CloudFormationExecuteChangeSetInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationExecuteChangeSetInput`](#aws-cdk-sdk.cloudformation.CloudFormationExecuteChangeSetInput)

---

##### `fetchStackPolicy` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.fetchStackPolicy"></a>

```typescript
public fetchStackPolicy(input: CloudFormationGetStackPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationGetStackPolicyInput`](#aws-cdk-sdk.cloudformation.CloudFormationGetStackPolicyInput)

---

##### `fetchTemplate` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.fetchTemplate"></a>

```typescript
public fetchTemplate(input: CloudFormationGetTemplateInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationGetTemplateInput`](#aws-cdk-sdk.cloudformation.CloudFormationGetTemplateInput)

---

##### `fetchTemplateSummary` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.fetchTemplateSummary"></a>

```typescript
public fetchTemplateSummary(input: CloudFormationGetTemplateSummaryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryInput`](#aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryInput)

---

##### `listChangeSets` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.listChangeSets"></a>

```typescript
public listChangeSets(input: CloudFormationListChangeSetsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListChangeSetsInput`](#aws-cdk-sdk.cloudformation.CloudFormationListChangeSetsInput)

---

##### `listExports` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.listExports"></a>

```typescript
public listExports(input: CloudFormationListExportsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListExportsInput`](#aws-cdk-sdk.cloudformation.CloudFormationListExportsInput)

---

##### `listImports` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.listImports"></a>

```typescript
public listImports(input: CloudFormationListImportsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListImportsInput`](#aws-cdk-sdk.cloudformation.CloudFormationListImportsInput)

---

##### `listStackInstances` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.listStackInstances"></a>

```typescript
public listStackInstances(input: CloudFormationListStackInstancesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListStackInstancesInput`](#aws-cdk-sdk.cloudformation.CloudFormationListStackInstancesInput)

---

##### `listStackResources` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.listStackResources"></a>

```typescript
public listStackResources(input: CloudFormationListStackResourcesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListStackResourcesInput`](#aws-cdk-sdk.cloudformation.CloudFormationListStackResourcesInput)

---

##### `listStacks` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.listStacks"></a>

```typescript
public listStacks(input: CloudFormationListStacksInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListStacksInput`](#aws-cdk-sdk.cloudformation.CloudFormationListStacksInput)

---

##### `listStackSetOperationResults` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.listStackSetOperationResults"></a>

```typescript
public listStackSetOperationResults(input: CloudFormationListStackSetOperationResultsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationResultsInput`](#aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationResultsInput)

---

##### `listStackSetOperations` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.listStackSetOperations"></a>

```typescript
public listStackSetOperations(input: CloudFormationListStackSetOperationsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationsInput`](#aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationsInput)

---

##### `listStackSets` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.listStackSets"></a>

```typescript
public listStackSets(input: CloudFormationListStackSetsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListStackSetsInput`](#aws-cdk-sdk.cloudformation.CloudFormationListStackSetsInput)

---

##### `listTypeRegistrations` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.listTypeRegistrations"></a>

```typescript
public listTypeRegistrations(input: CloudFormationListTypeRegistrationsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListTypeRegistrationsInput`](#aws-cdk-sdk.cloudformation.CloudFormationListTypeRegistrationsInput)

---

##### `listTypes` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.listTypes"></a>

```typescript
public listTypes(input: CloudFormationListTypesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListTypesInput`](#aws-cdk-sdk.cloudformation.CloudFormationListTypesInput)

---

##### `listTypeVersions` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.listTypeVersions"></a>

```typescript
public listTypeVersions(input: CloudFormationListTypeVersionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListTypeVersionsInput`](#aws-cdk-sdk.cloudformation.CloudFormationListTypeVersionsInput)

---

##### `putStackPolicy` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.putStackPolicy"></a>

```typescript
public putStackPolicy(input: CloudFormationSetStackPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationSetStackPolicyInput`](#aws-cdk-sdk.cloudformation.CloudFormationSetStackPolicyInput)

---

##### `putTypeDefaultVersion` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.putTypeDefaultVersion"></a>

```typescript
public putTypeDefaultVersion(input: CloudFormationSetTypeDefaultVersionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationSetTypeDefaultVersionInput`](#aws-cdk-sdk.cloudformation.CloudFormationSetTypeDefaultVersionInput)

---

##### `recordHandlerProgress` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.recordHandlerProgress"></a>

```typescript
public recordHandlerProgress(input: CloudFormationRecordHandlerProgressInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationRecordHandlerProgressInput`](#aws-cdk-sdk.cloudformation.CloudFormationRecordHandlerProgressInput)

---

##### `registerType` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.registerType"></a>

```typescript
public registerType(input: CloudFormationRegisterTypeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationRegisterTypeInput`](#aws-cdk-sdk.cloudformation.CloudFormationRegisterTypeInput)

---

##### `signalResource` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.signalResource"></a>

```typescript
public signalResource(input: CloudFormationSignalResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationSignalResourceInput`](#aws-cdk-sdk.cloudformation.CloudFormationSignalResourceInput)

---

##### `stopStackSetOperation` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.stopStackSetOperation"></a>

```typescript
public stopStackSetOperation(input: CloudFormationStopStackSetOperationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStopStackSetOperationInput`](#aws-cdk-sdk.cloudformation.CloudFormationStopStackSetOperationInput)

---

##### `updateStack` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.updateStack"></a>

```typescript
public updateStack(input: CloudFormationUpdateStackInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput`](#aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput)

---

##### `updateStackInstances` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.updateStackInstances"></a>

```typescript
public updateStackInstances(input: CloudFormationUpdateStackInstancesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInstancesInput`](#aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInstancesInput)

---

##### `updateStackSet` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.updateStackSet"></a>

```typescript
public updateStackSet(input: CloudFormationUpdateStackSetInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput`](#aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput)

---

##### `updateTerminationProtection` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.updateTerminationProtection"></a>

```typescript
public updateTerminationProtection(input: CloudFormationUpdateTerminationProtectionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationUpdateTerminationProtectionInput`](#aws-cdk-sdk.cloudformation.CloudFormationUpdateTerminationProtectionInput)

---

##### `validateTemplate` <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.validateTemplate"></a>

```typescript
public validateTemplate(input: CloudFormationValidateTemplateInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationValidateTemplateInput`](#aws-cdk-sdk.cloudformation.CloudFormationValidateTemplateInput)

---




## Structs <a name="Structs"></a>

### CloudFormationAccountGateResult <a name="aws-cdk-sdk.cloudformation.CloudFormationAccountGateResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationAccountGateResult: cloudformation.CloudFormationAccountGateResult = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationAccountGateResult.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationAccountGateResult.property.statusReason"></a>

- *Type:* `string`

---

### CloudFormationAccountLimit <a name="aws-cdk-sdk.cloudformation.CloudFormationAccountLimit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationAccountLimit: cloudformation.CloudFormationAccountLimit = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationAccountLimit.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationAccountLimit.property.value"></a>

- *Type:* `number`

---

### CloudFormationAutoDeployment <a name="aws-cdk-sdk.cloudformation.CloudFormationAutoDeployment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationAutoDeployment: cloudformation.CloudFormationAutoDeployment = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationAutoDeployment.property.enabled"></a>

- *Type:* `boolean`

---

##### `retainStacksOnAccountRemoval`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationAutoDeployment.property.retainStacksOnAccountRemoval"></a>

- *Type:* `boolean`

---

### CloudFormationCancelUpdateStackInput <a name="aws-cdk-sdk.cloudformation.CloudFormationCancelUpdateStackInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationCancelUpdateStackInput: cloudformation.CloudFormationCancelUpdateStackInput = { ... }
```

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCancelUpdateStackInput.property.stackName"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCancelUpdateStackInput.property.clientRequestToken"></a>

- *Type:* `string`

---

### CloudFormationChange <a name="aws-cdk-sdk.cloudformation.CloudFormationChange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationChange: cloudformation.CloudFormationChange = { ... }
```

##### `resourceChange`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationChange.property.resourceChange"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResourceChange`](#aws-cdk-sdk.cloudformation.CloudFormationResourceChange)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationChange.property.type"></a>

- *Type:* `string`

---

### CloudFormationChangeSetSummary <a name="aws-cdk-sdk.cloudformation.CloudFormationChangeSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationChangeSetSummary: cloudformation.CloudFormationChangeSetSummary = { ... }
```

##### `changeSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationChangeSetSummary.property.changeSetId"></a>

- *Type:* `string`

---

##### `changeSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationChangeSetSummary.property.changeSetName"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationChangeSetSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationChangeSetSummary.property.description"></a>

- *Type:* `string`

---

##### `executionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationChangeSetSummary.property.executionStatus"></a>

- *Type:* `string`

---

##### `includeNestedStacks`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationChangeSetSummary.property.includeNestedStacks"></a>

- *Type:* `boolean`

---

##### `parentChangeSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationChangeSetSummary.property.parentChangeSetId"></a>

- *Type:* `string`

---

##### `rootChangeSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationChangeSetSummary.property.rootChangeSetId"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationChangeSetSummary.property.stackId"></a>

- *Type:* `string`

---

##### `stackName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationChangeSetSummary.property.stackName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationChangeSetSummary.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationChangeSetSummary.property.statusReason"></a>

- *Type:* `string`

---

### CloudFormationContinueUpdateRollbackInput <a name="aws-cdk-sdk.cloudformation.CloudFormationContinueUpdateRollbackInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationContinueUpdateRollbackInput: cloudformation.CloudFormationContinueUpdateRollbackInput = { ... }
```

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationContinueUpdateRollbackInput.property.stackName"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationContinueUpdateRollbackInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `resourcesToSkip`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationContinueUpdateRollbackInput.property.resourcesToSkip"></a>

- *Type:* `string`[]

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationContinueUpdateRollbackInput.property.roleArn"></a>

- *Type:* `string`

---

### CloudFormationContinueUpdateRollbackOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationContinueUpdateRollbackOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationContinueUpdateRollbackOutput: cloudformation.CloudFormationContinueUpdateRollbackOutput = { ... }
```

### CloudFormationCreateChangeSetInput <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationCreateChangeSetInput: cloudformation.CloudFormationCreateChangeSetInput = { ... }
```

##### `changeSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput.property.changeSetName"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput.property.stackName"></a>

- *Type:* `string`

---

##### `capabilities`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput.property.capabilities"></a>

- *Type:* `string`[]

---

##### `changeSetType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput.property.changeSetType"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput.property.clientToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput.property.description"></a>

- *Type:* `string`

---

##### `includeNestedStacks`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput.property.includeNestedStacks"></a>

- *Type:* `boolean`

---

##### `notificationArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput.property.notificationArNs"></a>

- *Type:* `string`[]

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameter`](#aws-cdk-sdk.cloudformation.CloudFormationParameter)[]

---

##### `resourcesToImport`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput.property.resourcesToImport"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResourceToImport`](#aws-cdk-sdk.cloudformation.CloudFormationResourceToImport)[]

---

##### `resourceTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput.property.resourceTypes"></a>

- *Type:* `string`[]

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput.property.roleArn"></a>

- *Type:* `string`

---

##### `rollbackConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput.property.rollbackConfiguration"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationRollbackConfiguration`](#aws-cdk-sdk.cloudformation.CloudFormationRollbackConfiguration)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationTag`](#aws-cdk-sdk.cloudformation.CloudFormationTag)[]

---

##### `templateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput.property.templateBody"></a>

- *Type:* `string`

---

##### `templateUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput.property.templateUrl"></a>

- *Type:* `string`

---

##### `usePreviousTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput.property.usePreviousTemplate"></a>

- *Type:* `boolean`

---

### CloudFormationCreateChangeSetOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationCreateChangeSetOutput: cloudformation.CloudFormationCreateChangeSetOutput = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetOutput.property.id"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetOutput.property.stackId"></a>

- *Type:* `string`

---

### CloudFormationCreateStackInput <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationCreateStackInput: cloudformation.CloudFormationCreateStackInput = { ... }
```

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput.property.stackName"></a>

- *Type:* `string`

---

##### `capabilities`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput.property.capabilities"></a>

- *Type:* `string`[]

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `disableRollback`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput.property.disableRollback"></a>

- *Type:* `boolean`

---

##### `enableTerminationProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput.property.enableTerminationProtection"></a>

- *Type:* `boolean`

---

##### `notificationArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput.property.notificationArNs"></a>

- *Type:* `string`[]

---

##### `onFailure`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput.property.onFailure"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameter`](#aws-cdk-sdk.cloudformation.CloudFormationParameter)[]

---

##### `resourceTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput.property.resourceTypes"></a>

- *Type:* `string`[]

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput.property.roleArn"></a>

- *Type:* `string`

---

##### `rollbackConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput.property.rollbackConfiguration"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationRollbackConfiguration`](#aws-cdk-sdk.cloudformation.CloudFormationRollbackConfiguration)

---

##### `stackPolicyBody`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput.property.stackPolicyBody"></a>

- *Type:* `string`

---

##### `stackPolicyUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput.property.stackPolicyUrl"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationTag`](#aws-cdk-sdk.cloudformation.CloudFormationTag)[]

---

##### `templateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput.property.templateBody"></a>

- *Type:* `string`

---

##### `templateUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput.property.templateUrl"></a>

- *Type:* `string`

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput.property.timeoutInMinutes"></a>

- *Type:* `number`

---

### CloudFormationCreateStackInstancesInput <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInstancesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationCreateStackInstancesInput: cloudformation.CloudFormationCreateStackInstancesInput = { ... }
```

##### `regions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInstancesInput.property.regions"></a>

- *Type:* `string`[]

---

##### `stackSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInstancesInput.property.stackSetName"></a>

- *Type:* `string`

---

##### `accounts`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInstancesInput.property.accounts"></a>

- *Type:* `string`[]

---

##### `deploymentTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInstancesInput.property.deploymentTargets"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDeploymentTargets`](#aws-cdk-sdk.cloudformation.CloudFormationDeploymentTargets)

---

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInstancesInput.property.operationId"></a>

- *Type:* `string`

---

##### `operationPreferences`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInstancesInput.property.operationPreferences"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences`](#aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences)

---

##### `parameterOverrides`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInstancesInput.property.parameterOverrides"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameter`](#aws-cdk-sdk.cloudformation.CloudFormationParameter)[]

---

### CloudFormationCreateStackInstancesOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInstancesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationCreateStackInstancesOutput: cloudformation.CloudFormationCreateStackInstancesOutput = { ... }
```

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackInstancesOutput.property.operationId"></a>

- *Type:* `string`

---

### CloudFormationCreateStackOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationCreateStackOutput: cloudformation.CloudFormationCreateStackOutput = { ... }
```

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackOutput.property.stackId"></a>

- *Type:* `string`

---

### CloudFormationCreateStackSetInput <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationCreateStackSetInput: cloudformation.CloudFormationCreateStackSetInput = { ... }
```

##### `stackSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetInput.property.stackSetName"></a>

- *Type:* `string`

---

##### `administrationRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetInput.property.administrationRoleArn"></a>

- *Type:* `string`

---

##### `autoDeployment`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetInput.property.autoDeployment"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationAutoDeployment`](#aws-cdk-sdk.cloudformation.CloudFormationAutoDeployment)

---

##### `capabilities`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetInput.property.capabilities"></a>

- *Type:* `string`[]

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetInput.property.description"></a>

- *Type:* `string`

---

##### `executionRoleName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetInput.property.executionRoleName"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetInput.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameter`](#aws-cdk-sdk.cloudformation.CloudFormationParameter)[]

---

##### `permissionModel`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetInput.property.permissionModel"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationTag`](#aws-cdk-sdk.cloudformation.CloudFormationTag)[]

---

##### `templateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetInput.property.templateBody"></a>

- *Type:* `string`

---

##### `templateUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetInput.property.templateUrl"></a>

- *Type:* `string`

---

### CloudFormationCreateStackSetOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationCreateStackSetOutput: cloudformation.CloudFormationCreateStackSetOutput = { ... }
```

##### `stackSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetOutput.property.stackSetId"></a>

- *Type:* `string`

---

### CloudFormationDeleteChangeSetInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteChangeSetInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDeleteChangeSetInput: cloudformation.CloudFormationDeleteChangeSetInput = { ... }
```

##### `changeSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteChangeSetInput.property.changeSetName"></a>

- *Type:* `string`

---

##### `stackName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteChangeSetInput.property.stackName"></a>

- *Type:* `string`

---

### CloudFormationDeleteChangeSetOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteChangeSetOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDeleteChangeSetOutput: cloudformation.CloudFormationDeleteChangeSetOutput = { ... }
```

### CloudFormationDeleteStackInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDeleteStackInput: cloudformation.CloudFormationDeleteStackInput = { ... }
```

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInput.property.stackName"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `retainResources`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInput.property.retainResources"></a>

- *Type:* `string`[]

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInput.property.roleArn"></a>

- *Type:* `string`

---

### CloudFormationDeleteStackInstancesInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInstancesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDeleteStackInstancesInput: cloudformation.CloudFormationDeleteStackInstancesInput = { ... }
```

##### `regions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInstancesInput.property.regions"></a>

- *Type:* `string`[]

---

##### `retainStacks`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInstancesInput.property.retainStacks"></a>

- *Type:* `boolean`

---

##### `stackSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInstancesInput.property.stackSetName"></a>

- *Type:* `string`

---

##### `accounts`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInstancesInput.property.accounts"></a>

- *Type:* `string`[]

---

##### `deploymentTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInstancesInput.property.deploymentTargets"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDeploymentTargets`](#aws-cdk-sdk.cloudformation.CloudFormationDeploymentTargets)

---

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInstancesInput.property.operationId"></a>

- *Type:* `string`

---

##### `operationPreferences`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInstancesInput.property.operationPreferences"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences`](#aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences)

---

### CloudFormationDeleteStackInstancesOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInstancesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDeleteStackInstancesOutput: cloudformation.CloudFormationDeleteStackInstancesOutput = { ... }
```

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInstancesOutput.property.operationId"></a>

- *Type:* `string`

---

### CloudFormationDeleteStackSetInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackSetInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDeleteStackSetInput: cloudformation.CloudFormationDeleteStackSetInput = { ... }
```

##### `stackSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackSetInput.property.stackSetName"></a>

- *Type:* `string`

---

### CloudFormationDeleteStackSetOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDeleteStackSetOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDeleteStackSetOutput: cloudformation.CloudFormationDeleteStackSetOutput = { ... }
```

### CloudFormationDeploymentTargets <a name="aws-cdk-sdk.cloudformation.CloudFormationDeploymentTargets"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDeploymentTargets: cloudformation.CloudFormationDeploymentTargets = { ... }
```

##### `accounts`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeploymentTargets.property.accounts"></a>

- *Type:* `string`[]

---

##### `organizationalUnitIds`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeploymentTargets.property.organizationalUnitIds"></a>

- *Type:* `string`[]

---

### CloudFormationDeregisterTypeInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDeregisterTypeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDeregisterTypeInput: cloudformation.CloudFormationDeregisterTypeInput = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeregisterTypeInput.property.arn"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeregisterTypeInput.property.type"></a>

- *Type:* `string`

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeregisterTypeInput.property.typeName"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDeregisterTypeInput.property.versionId"></a>

- *Type:* `string`

---

### CloudFormationDeregisterTypeOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDeregisterTypeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDeregisterTypeOutput: cloudformation.CloudFormationDeregisterTypeOutput = { ... }
```

### CloudFormationDescribeAccountLimitsInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeAccountLimitsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeAccountLimitsInput: cloudformation.CloudFormationDescribeAccountLimitsInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeAccountLimitsInput.property.nextToken"></a>

- *Type:* `string`

---

### CloudFormationDescribeAccountLimitsOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeAccountLimitsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeAccountLimitsOutput: cloudformation.CloudFormationDescribeAccountLimitsOutput = { ... }
```

##### `accountLimits`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeAccountLimitsOutput.property.accountLimits"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationAccountLimit`](#aws-cdk-sdk.cloudformation.CloudFormationAccountLimit)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeAccountLimitsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CloudFormationDescribeChangeSetInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeChangeSetInput: cloudformation.CloudFormationDescribeChangeSetInput = { ... }
```

##### `changeSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetInput.property.changeSetName"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetInput.property.nextToken"></a>

- *Type:* `string`

---

##### `stackName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetInput.property.stackName"></a>

- *Type:* `string`

---

### CloudFormationDescribeChangeSetOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeChangeSetOutput: cloudformation.CloudFormationDescribeChangeSetOutput = { ... }
```

##### `capabilities`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.capabilities"></a>

- *Type:* `string`[]

---

##### `changes`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.changes"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationChange`](#aws-cdk-sdk.cloudformation.CloudFormationChange)[]

---

##### `changeSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.changeSetId"></a>

- *Type:* `string`

---

##### `changeSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.changeSetName"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.description"></a>

- *Type:* `string`

---

##### `executionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.executionStatus"></a>

- *Type:* `string`

---

##### `includeNestedStacks`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.includeNestedStacks"></a>

- *Type:* `boolean`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `notificationArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.notificationArNs"></a>

- *Type:* `string`[]

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameter`](#aws-cdk-sdk.cloudformation.CloudFormationParameter)[]

---

##### `parentChangeSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.parentChangeSetId"></a>

- *Type:* `string`

---

##### `rollbackConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.rollbackConfiguration"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationRollbackConfiguration`](#aws-cdk-sdk.cloudformation.CloudFormationRollbackConfiguration)

---

##### `rootChangeSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.rootChangeSetId"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.stackId"></a>

- *Type:* `string`

---

##### `stackName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.stackName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.statusReason"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationTag`](#aws-cdk-sdk.cloudformation.CloudFormationTag)[]

---

### CloudFormationDescribeStackDriftDetectionStatusInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackDriftDetectionStatusInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStackDriftDetectionStatusInput: cloudformation.CloudFormationDescribeStackDriftDetectionStatusInput = { ... }
```

##### `stackDriftDetectionId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackDriftDetectionStatusInput.property.stackDriftDetectionId"></a>

- *Type:* `string`

---

### CloudFormationDescribeStackDriftDetectionStatusOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackDriftDetectionStatusOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStackDriftDetectionStatusOutput: cloudformation.CloudFormationDescribeStackDriftDetectionStatusOutput = { ... }
```

##### `detectionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackDriftDetectionStatusOutput.property.detectionStatus"></a>

- *Type:* `string`

---

##### `stackDriftDetectionId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackDriftDetectionStatusOutput.property.stackDriftDetectionId"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackDriftDetectionStatusOutput.property.stackId"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackDriftDetectionStatusOutput.property.timestamp"></a>

- *Type:* `string`

---

##### `detectionStatusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackDriftDetectionStatusOutput.property.detectionStatusReason"></a>

- *Type:* `string`

---

##### `driftedStackResourceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackDriftDetectionStatusOutput.property.driftedStackResourceCount"></a>

- *Type:* `number`

---

##### `stackDriftStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackDriftDetectionStatusOutput.property.stackDriftStatus"></a>

- *Type:* `string`

---

### CloudFormationDescribeStackEventsInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackEventsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStackEventsInput: cloudformation.CloudFormationDescribeStackEventsInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackEventsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `stackName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackEventsInput.property.stackName"></a>

- *Type:* `string`

---

### CloudFormationDescribeStackEventsOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackEventsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStackEventsOutput: cloudformation.CloudFormationDescribeStackEventsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackEventsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `stackEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackEventsOutput.property.stackEvents"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackEvent`](#aws-cdk-sdk.cloudformation.CloudFormationStackEvent)[]

---

### CloudFormationDescribeStackInstanceInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackInstanceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStackInstanceInput: cloudformation.CloudFormationDescribeStackInstanceInput = { ... }
```

##### `stackInstanceAccount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackInstanceInput.property.stackInstanceAccount"></a>

- *Type:* `string`

---

##### `stackInstanceRegion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackInstanceInput.property.stackInstanceRegion"></a>

- *Type:* `string`

---

##### `stackSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackInstanceInput.property.stackSetName"></a>

- *Type:* `string`

---

### CloudFormationDescribeStackInstanceOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackInstanceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStackInstanceOutput: cloudformation.CloudFormationDescribeStackInstanceOutput = { ... }
```

##### `stackInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackInstanceOutput.property.stackInstance"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackInstance`](#aws-cdk-sdk.cloudformation.CloudFormationStackInstance)

---

### CloudFormationDescribeStackResourceDriftsInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceDriftsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStackResourceDriftsInput: cloudformation.CloudFormationDescribeStackResourceDriftsInput = { ... }
```

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceDriftsInput.property.stackName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceDriftsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceDriftsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `stackResourceDriftStatusFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceDriftsInput.property.stackResourceDriftStatusFilters"></a>

- *Type:* `string`[]

---

### CloudFormationDescribeStackResourceDriftsOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceDriftsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStackResourceDriftsOutput: cloudformation.CloudFormationDescribeStackResourceDriftsOutput = { ... }
```

##### `stackResourceDrifts`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceDriftsOutput.property.stackResourceDrifts"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift`](#aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceDriftsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CloudFormationDescribeStackResourceInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStackResourceInput: cloudformation.CloudFormationDescribeStackResourceInput = { ... }
```

##### `logicalResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceInput.property.logicalResourceId"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceInput.property.stackName"></a>

- *Type:* `string`

---

### CloudFormationDescribeStackResourceOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStackResourceOutput: cloudformation.CloudFormationDescribeStackResourceOutput = { ... }
```

##### `stackResourceDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceOutput.property.stackResourceDetail"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackResourceDetail`](#aws-cdk-sdk.cloudformation.CloudFormationStackResourceDetail)

---

### CloudFormationDescribeStackResourcesInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourcesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStackResourcesInput: cloudformation.CloudFormationDescribeStackResourcesInput = { ... }
```

##### `logicalResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourcesInput.property.logicalResourceId"></a>

- *Type:* `string`

---

##### `physicalResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourcesInput.property.physicalResourceId"></a>

- *Type:* `string`

---

##### `stackName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourcesInput.property.stackName"></a>

- *Type:* `string`

---

### CloudFormationDescribeStackResourcesOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourcesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStackResourcesOutput: cloudformation.CloudFormationDescribeStackResourcesOutput = { ... }
```

##### `stackResources`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourcesOutput.property.stackResources"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackResource`](#aws-cdk-sdk.cloudformation.CloudFormationStackResource)[]

---

### CloudFormationDescribeStackSetInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStackSetInput: cloudformation.CloudFormationDescribeStackSetInput = { ... }
```

##### `stackSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetInput.property.stackSetName"></a>

- *Type:* `string`

---

### CloudFormationDescribeStackSetOperationInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOperationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStackSetOperationInput: cloudformation.CloudFormationDescribeStackSetOperationInput = { ... }
```

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOperationInput.property.operationId"></a>

- *Type:* `string`

---

##### `stackSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOperationInput.property.stackSetName"></a>

- *Type:* `string`

---

### CloudFormationDescribeStackSetOperationOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOperationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStackSetOperationOutput: cloudformation.CloudFormationDescribeStackSetOperationOutput = { ... }
```

##### `stackSetOperation`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOperationOutput.property.stackSetOperation"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSetOperation`](#aws-cdk-sdk.cloudformation.CloudFormationStackSetOperation)

---

### CloudFormationDescribeStackSetOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStackSetOutput: cloudformation.CloudFormationDescribeStackSetOutput = { ... }
```

##### `stackSet`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOutput.property.stackSet"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSet`](#aws-cdk-sdk.cloudformation.CloudFormationStackSet)

---

### CloudFormationDescribeStacksInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStacksInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStacksInput: cloudformation.CloudFormationDescribeStacksInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStacksInput.property.nextToken"></a>

- *Type:* `string`

---

##### `stackName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStacksInput.property.stackName"></a>

- *Type:* `string`

---

### CloudFormationDescribeStacksOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStacksOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeStacksOutput: cloudformation.CloudFormationDescribeStacksOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStacksOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `stacks`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeStacksOutput.property.stacks"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStack`](#aws-cdk-sdk.cloudformation.CloudFormationStack)[]

---

### CloudFormationDescribeTypeInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeTypeInput: cloudformation.CloudFormationDescribeTypeInput = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeInput.property.arn"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeInput.property.type"></a>

- *Type:* `string`

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeInput.property.typeName"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeInput.property.versionId"></a>

- *Type:* `string`

---

### CloudFormationDescribeTypeOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeTypeOutput: cloudformation.CloudFormationDescribeTypeOutput = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeOutput.property.arn"></a>

- *Type:* `string`

---

##### `defaultVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeOutput.property.defaultVersionId"></a>

- *Type:* `string`

---

##### `deprecatedStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeOutput.property.deprecatedStatus"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeOutput.property.description"></a>

- *Type:* `string`

---

##### `documentationUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeOutput.property.documentationUrl"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeOutput.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `isDefaultVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeOutput.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `lastUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeOutput.property.lastUpdated"></a>

- *Type:* `string`

---

##### `loggingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeOutput.property.loggingConfig"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationLoggingConfig`](#aws-cdk-sdk.cloudformation.CloudFormationLoggingConfig)

---

##### `provisioningType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeOutput.property.provisioningType"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeOutput.property.schema"></a>

- *Type:* `string`

---

##### `sourceUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeOutput.property.sourceUrl"></a>

- *Type:* `string`

---

##### `timeCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeOutput.property.timeCreated"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeOutput.property.type"></a>

- *Type:* `string`

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeOutput.property.typeName"></a>

- *Type:* `string`

---

##### `visibility`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeOutput.property.visibility"></a>

- *Type:* `string`

---

### CloudFormationDescribeTypeRegistrationInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeRegistrationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeTypeRegistrationInput: cloudformation.CloudFormationDescribeTypeRegistrationInput = { ... }
```

##### `registrationToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeRegistrationInput.property.registrationToken"></a>

- *Type:* `string`

---

### CloudFormationDescribeTypeRegistrationOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeRegistrationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDescribeTypeRegistrationOutput: cloudformation.CloudFormationDescribeTypeRegistrationOutput = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeRegistrationOutput.property.description"></a>

- *Type:* `string`

---

##### `progressStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeRegistrationOutput.property.progressStatus"></a>

- *Type:* `string`

---

##### `typeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeRegistrationOutput.property.typeArn"></a>

- *Type:* `string`

---

##### `typeVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeRegistrationOutput.property.typeVersionArn"></a>

- *Type:* `string`

---

### CloudFormationDetectStackDriftInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDetectStackDriftInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDetectStackDriftInput: cloudformation.CloudFormationDetectStackDriftInput = { ... }
```

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDetectStackDriftInput.property.stackName"></a>

- *Type:* `string`

---

##### `logicalResourceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDetectStackDriftInput.property.logicalResourceIds"></a>

- *Type:* `string`[]

---

### CloudFormationDetectStackDriftOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDetectStackDriftOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDetectStackDriftOutput: cloudformation.CloudFormationDetectStackDriftOutput = { ... }
```

##### `stackDriftDetectionId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDetectStackDriftOutput.property.stackDriftDetectionId"></a>

- *Type:* `string`

---

### CloudFormationDetectStackResourceDriftInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDetectStackResourceDriftInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDetectStackResourceDriftInput: cloudformation.CloudFormationDetectStackResourceDriftInput = { ... }
```

##### `logicalResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDetectStackResourceDriftInput.property.logicalResourceId"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDetectStackResourceDriftInput.property.stackName"></a>

- *Type:* `string`

---

### CloudFormationDetectStackResourceDriftOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDetectStackResourceDriftOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDetectStackResourceDriftOutput: cloudformation.CloudFormationDetectStackResourceDriftOutput = { ... }
```

##### `stackResourceDrift`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDetectStackResourceDriftOutput.property.stackResourceDrift"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift`](#aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift)

---

### CloudFormationDetectStackSetDriftInput <a name="aws-cdk-sdk.cloudformation.CloudFormationDetectStackSetDriftInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDetectStackSetDriftInput: cloudformation.CloudFormationDetectStackSetDriftInput = { ... }
```

##### `stackSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDetectStackSetDriftInput.property.stackSetName"></a>

- *Type:* `string`

---

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDetectStackSetDriftInput.property.operationId"></a>

- *Type:* `string`

---

##### `operationPreferences`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDetectStackSetDriftInput.property.operationPreferences"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences`](#aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences)

---

### CloudFormationDetectStackSetDriftOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationDetectStackSetDriftOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationDetectStackSetDriftOutput: cloudformation.CloudFormationDetectStackSetDriftOutput = { ... }
```

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationDetectStackSetDriftOutput.property.operationId"></a>

- *Type:* `string`

---

### CloudFormationEstimateTemplateCostInput <a name="aws-cdk-sdk.cloudformation.CloudFormationEstimateTemplateCostInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationEstimateTemplateCostInput: cloudformation.CloudFormationEstimateTemplateCostInput = { ... }
```

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationEstimateTemplateCostInput.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameter`](#aws-cdk-sdk.cloudformation.CloudFormationParameter)[]

---

##### `templateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationEstimateTemplateCostInput.property.templateBody"></a>

- *Type:* `string`

---

##### `templateUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationEstimateTemplateCostInput.property.templateUrl"></a>

- *Type:* `string`

---

### CloudFormationEstimateTemplateCostOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationEstimateTemplateCostOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationEstimateTemplateCostOutput: cloudformation.CloudFormationEstimateTemplateCostOutput = { ... }
```

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationEstimateTemplateCostOutput.property.url"></a>

- *Type:* `string`

---

### CloudFormationExecuteChangeSetInput <a name="aws-cdk-sdk.cloudformation.CloudFormationExecuteChangeSetInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationExecuteChangeSetInput: cloudformation.CloudFormationExecuteChangeSetInput = { ... }
```

##### `changeSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationExecuteChangeSetInput.property.changeSetName"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationExecuteChangeSetInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `stackName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationExecuteChangeSetInput.property.stackName"></a>

- *Type:* `string`

---

### CloudFormationExecuteChangeSetOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationExecuteChangeSetOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationExecuteChangeSetOutput: cloudformation.CloudFormationExecuteChangeSetOutput = { ... }
```

### CloudFormationExport <a name="aws-cdk-sdk.cloudformation.CloudFormationExport"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationExport: cloudformation.CloudFormationExport = { ... }
```

##### `exportingStackId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationExport.property.exportingStackId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationExport.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationExport.property.value"></a>

- *Type:* `string`

---

### CloudFormationGetStackPolicyInput <a name="aws-cdk-sdk.cloudformation.CloudFormationGetStackPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationGetStackPolicyInput: cloudformation.CloudFormationGetStackPolicyInput = { ... }
```

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetStackPolicyInput.property.stackName"></a>

- *Type:* `string`

---

### CloudFormationGetStackPolicyOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationGetStackPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationGetStackPolicyOutput: cloudformation.CloudFormationGetStackPolicyOutput = { ... }
```

##### `stackPolicyBody`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetStackPolicyOutput.property.stackPolicyBody"></a>

- *Type:* `string`

---

### CloudFormationGetTemplateInput <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationGetTemplateInput: cloudformation.CloudFormationGetTemplateInput = { ... }
```

##### `changeSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateInput.property.changeSetName"></a>

- *Type:* `string`

---

##### `stackName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateInput.property.stackName"></a>

- *Type:* `string`

---

##### `templateStage`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateInput.property.templateStage"></a>

- *Type:* `string`

---

### CloudFormationGetTemplateOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationGetTemplateOutput: cloudformation.CloudFormationGetTemplateOutput = { ... }
```

##### `stagesAvailable`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateOutput.property.stagesAvailable"></a>

- *Type:* `string`[]

---

##### `templateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateOutput.property.templateBody"></a>

- *Type:* `string`

---

### CloudFormationGetTemplateSummaryInput <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationGetTemplateSummaryInput: cloudformation.CloudFormationGetTemplateSummaryInput = { ... }
```

##### `stackName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryInput.property.stackName"></a>

- *Type:* `string`

---

##### `stackSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryInput.property.stackSetName"></a>

- *Type:* `string`

---

##### `templateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryInput.property.templateBody"></a>

- *Type:* `string`

---

##### `templateUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryInput.property.templateUrl"></a>

- *Type:* `string`

---

### CloudFormationGetTemplateSummaryOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationGetTemplateSummaryOutput: cloudformation.CloudFormationGetTemplateSummaryOutput = { ... }
```

##### `capabilities`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryOutput.property.capabilities"></a>

- *Type:* `string`[]

---

##### `capabilitiesReason`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryOutput.property.capabilitiesReason"></a>

- *Type:* `string`

---

##### `declaredTransforms`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryOutput.property.declaredTransforms"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryOutput.property.description"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryOutput.property.metadata"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryOutput.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameterDeclaration`](#aws-cdk-sdk.cloudformation.CloudFormationParameterDeclaration)[]

---

##### `resourceIdentifierSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryOutput.property.resourceIdentifierSummaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResourceIdentifierSummary`](#aws-cdk-sdk.cloudformation.CloudFormationResourceIdentifierSummary)[]

---

##### `resourceTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryOutput.property.resourceTypes"></a>

- *Type:* `string`[]

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryOutput.property.version"></a>

- *Type:* `string`

---

### CloudFormationListChangeSetsInput <a name="aws-cdk-sdk.cloudformation.CloudFormationListChangeSetsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListChangeSetsInput: cloudformation.CloudFormationListChangeSetsInput = { ... }
```

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListChangeSetsInput.property.stackName"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListChangeSetsInput.property.nextToken"></a>

- *Type:* `string`

---

### CloudFormationListChangeSetsOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationListChangeSetsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListChangeSetsOutput: cloudformation.CloudFormationListChangeSetsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListChangeSetsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListChangeSetsOutput.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationChangeSetSummary`](#aws-cdk-sdk.cloudformation.CloudFormationChangeSetSummary)[]

---

### CloudFormationListExportsInput <a name="aws-cdk-sdk.cloudformation.CloudFormationListExportsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListExportsInput: cloudformation.CloudFormationListExportsInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListExportsInput.property.nextToken"></a>

- *Type:* `string`

---

### CloudFormationListExportsOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationListExportsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListExportsOutput: cloudformation.CloudFormationListExportsOutput = { ... }
```

##### `exports`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListExportsOutput.property.exports"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationExport`](#aws-cdk-sdk.cloudformation.CloudFormationExport)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListExportsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CloudFormationListImportsInput <a name="aws-cdk-sdk.cloudformation.CloudFormationListImportsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListImportsInput: cloudformation.CloudFormationListImportsInput = { ... }
```

##### `exportName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListImportsInput.property.exportName"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListImportsInput.property.nextToken"></a>

- *Type:* `string`

---

### CloudFormationListImportsOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationListImportsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListImportsOutput: cloudformation.CloudFormationListImportsOutput = { ... }
```

##### `imports`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListImportsOutput.property.imports"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListImportsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CloudFormationListStackInstancesInput <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackInstancesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListStackInstancesInput: cloudformation.CloudFormationListStackInstancesInput = { ... }
```

##### `stackSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackInstancesInput.property.stackSetName"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackInstancesInput.property.filters"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackInstanceFilter`](#aws-cdk-sdk.cloudformation.CloudFormationStackInstanceFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackInstancesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackInstancesInput.property.nextToken"></a>

- *Type:* `string`

---

##### `stackInstanceAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackInstancesInput.property.stackInstanceAccount"></a>

- *Type:* `string`

---

##### `stackInstanceRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackInstancesInput.property.stackInstanceRegion"></a>

- *Type:* `string`

---

### CloudFormationListStackInstancesOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackInstancesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListStackInstancesOutput: cloudformation.CloudFormationListStackInstancesOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackInstancesOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackInstancesOutput.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackInstanceSummary`](#aws-cdk-sdk.cloudformation.CloudFormationStackInstanceSummary)[]

---

### CloudFormationListStackResourcesInput <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackResourcesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListStackResourcesInput: cloudformation.CloudFormationListStackResourcesInput = { ... }
```

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackResourcesInput.property.stackName"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackResourcesInput.property.nextToken"></a>

- *Type:* `string`

---

### CloudFormationListStackResourcesOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackResourcesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListStackResourcesOutput: cloudformation.CloudFormationListStackResourcesOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackResourcesOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `stackResourceSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackResourcesOutput.property.stackResourceSummaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackResourceSummary`](#aws-cdk-sdk.cloudformation.CloudFormationStackResourceSummary)[]

---

### CloudFormationListStackSetOperationResultsInput <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationResultsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListStackSetOperationResultsInput: cloudformation.CloudFormationListStackSetOperationResultsInput = { ... }
```

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationResultsInput.property.operationId"></a>

- *Type:* `string`

---

##### `stackSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationResultsInput.property.stackSetName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationResultsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationResultsInput.property.nextToken"></a>

- *Type:* `string`

---

### CloudFormationListStackSetOperationResultsOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationResultsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListStackSetOperationResultsOutput: cloudformation.CloudFormationListStackSetOperationResultsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationResultsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationResultsOutput.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationResultSummary`](#aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationResultSummary)[]

---

### CloudFormationListStackSetOperationsInput <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListStackSetOperationsInput: cloudformation.CloudFormationListStackSetOperationsInput = { ... }
```

##### `stackSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationsInput.property.stackSetName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationsInput.property.nextToken"></a>

- *Type:* `string`

---

### CloudFormationListStackSetOperationsOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListStackSetOperationsOutput: cloudformation.CloudFormationListStackSetOperationsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationsOutput.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationSummary`](#aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationSummary)[]

---

### CloudFormationListStackSetsInput <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListStackSetsInput: cloudformation.CloudFormationListStackSetsInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetsInput.property.status"></a>

- *Type:* `string`

---

### CloudFormationListStackSetsOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListStackSetsOutput: cloudformation.CloudFormationListStackSetsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStackSetsOutput.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSetSummary`](#aws-cdk-sdk.cloudformation.CloudFormationStackSetSummary)[]

---

### CloudFormationListStacksInput <a name="aws-cdk-sdk.cloudformation.CloudFormationListStacksInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListStacksInput: cloudformation.CloudFormationListStacksInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStacksInput.property.nextToken"></a>

- *Type:* `string`

---

##### `stackStatusFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStacksInput.property.stackStatusFilter"></a>

- *Type:* `string`[]

---

### CloudFormationListStacksOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationListStacksOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListStacksOutput: cloudformation.CloudFormationListStacksOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStacksOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `stackSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListStacksOutput.property.stackSummaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSummary`](#aws-cdk-sdk.cloudformation.CloudFormationStackSummary)[]

---

### CloudFormationListTypeRegistrationsInput <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeRegistrationsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListTypeRegistrationsInput: cloudformation.CloudFormationListTypeRegistrationsInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeRegistrationsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeRegistrationsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `registrationStatusFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeRegistrationsInput.property.registrationStatusFilter"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeRegistrationsInput.property.type"></a>

- *Type:* `string`

---

##### `typeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeRegistrationsInput.property.typeArn"></a>

- *Type:* `string`

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeRegistrationsInput.property.typeName"></a>

- *Type:* `string`

---

### CloudFormationListTypeRegistrationsOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeRegistrationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListTypeRegistrationsOutput: cloudformation.CloudFormationListTypeRegistrationsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeRegistrationsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `registrationTokenList`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeRegistrationsOutput.property.registrationTokenList"></a>

- *Type:* `string`[]

---

### CloudFormationListTypesInput <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListTypesInput: cloudformation.CloudFormationListTypesInput = { ... }
```

##### `deprecatedStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypesInput.property.deprecatedStatus"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypesInput.property.nextToken"></a>

- *Type:* `string`

---

##### `provisioningType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypesInput.property.provisioningType"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypesInput.property.type"></a>

- *Type:* `string`

---

##### `visibility`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypesInput.property.visibility"></a>

- *Type:* `string`

---

### CloudFormationListTypesOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListTypesOutput: cloudformation.CloudFormationListTypesOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypesOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `typeSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypesOutput.property.typeSummaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationTypeSummary`](#aws-cdk-sdk.cloudformation.CloudFormationTypeSummary)[]

---

### CloudFormationListTypeVersionsInput <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeVersionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListTypeVersionsInput: cloudformation.CloudFormationListTypeVersionsInput = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeVersionsInput.property.arn"></a>

- *Type:* `string`

---

##### `deprecatedStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeVersionsInput.property.deprecatedStatus"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeVersionsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeVersionsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeVersionsInput.property.type"></a>

- *Type:* `string`

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeVersionsInput.property.typeName"></a>

- *Type:* `string`

---

### CloudFormationListTypeVersionsOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeVersionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationListTypeVersionsOutput: cloudformation.CloudFormationListTypeVersionsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeVersionsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `typeVersionSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationListTypeVersionsOutput.property.typeVersionSummaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationTypeVersionSummary`](#aws-cdk-sdk.cloudformation.CloudFormationTypeVersionSummary)[]

---

### CloudFormationLoggingConfig <a name="aws-cdk-sdk.cloudformation.CloudFormationLoggingConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationLoggingConfig: cloudformation.CloudFormationLoggingConfig = { ... }
```

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationLoggingConfig.property.logGroupName"></a>

- *Type:* `string`

---

##### `logRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationLoggingConfig.property.logRoleArn"></a>

- *Type:* `string`

---

### CloudFormationModuleInfo <a name="aws-cdk-sdk.cloudformation.CloudFormationModuleInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationModuleInfo: cloudformation.CloudFormationModuleInfo = { ... }
```

##### `logicalIdHierarchy`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationModuleInfo.property.logicalIdHierarchy"></a>

- *Type:* `string`

---

##### `typeHierarchy`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationModuleInfo.property.typeHierarchy"></a>

- *Type:* `string`

---

### CloudFormationOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationOutput: cloudformation.CloudFormationOutput = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationOutput.property.description"></a>

- *Type:* `string`

---

##### `exportName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationOutput.property.exportName"></a>

- *Type:* `string`

---

##### `outputKey`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationOutput.property.outputKey"></a>

- *Type:* `string`

---

##### `outputValue`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationOutput.property.outputValue"></a>

- *Type:* `string`

---

### CloudFormationParameter <a name="aws-cdk-sdk.cloudformation.CloudFormationParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationParameter: cloudformation.CloudFormationParameter = { ... }
```

##### `parameterKey`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationParameter.property.parameterKey"></a>

- *Type:* `string`

---

##### `parameterValue`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationParameter.property.parameterValue"></a>

- *Type:* `string`

---

##### `resolvedValue`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationParameter.property.resolvedValue"></a>

- *Type:* `string`

---

##### `usePreviousValue`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationParameter.property.usePreviousValue"></a>

- *Type:* `boolean`

---

### CloudFormationParameterConstraints <a name="aws-cdk-sdk.cloudformation.CloudFormationParameterConstraints"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationParameterConstraints: cloudformation.CloudFormationParameterConstraints = { ... }
```

##### `allowedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationParameterConstraints.property.allowedValues"></a>

- *Type:* `string`[]

---

### CloudFormationParameterDeclaration <a name="aws-cdk-sdk.cloudformation.CloudFormationParameterDeclaration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationParameterDeclaration: cloudformation.CloudFormationParameterDeclaration = { ... }
```

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationParameterDeclaration.property.defaultValue"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationParameterDeclaration.property.description"></a>

- *Type:* `string`

---

##### `noEcho`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationParameterDeclaration.property.noEcho"></a>

- *Type:* `boolean`

---

##### `parameterConstraints`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationParameterDeclaration.property.parameterConstraints"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameterConstraints`](#aws-cdk-sdk.cloudformation.CloudFormationParameterConstraints)

---

##### `parameterKey`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationParameterDeclaration.property.parameterKey"></a>

- *Type:* `string`

---

##### `parameterType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationParameterDeclaration.property.parameterType"></a>

- *Type:* `string`

---

### CloudFormationPhysicalResourceIdContextKeyValuePair <a name="aws-cdk-sdk.cloudformation.CloudFormationPhysicalResourceIdContextKeyValuePair"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationPhysicalResourceIdContextKeyValuePair: cloudformation.CloudFormationPhysicalResourceIdContextKeyValuePair = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationPhysicalResourceIdContextKeyValuePair.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationPhysicalResourceIdContextKeyValuePair.property.value"></a>

- *Type:* `string`

---

### CloudFormationPropertyDifference <a name="aws-cdk-sdk.cloudformation.CloudFormationPropertyDifference"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationPropertyDifference: cloudformation.CloudFormationPropertyDifference = { ... }
```

##### `actualValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationPropertyDifference.property.actualValue"></a>

- *Type:* `string`

---

##### `differenceType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationPropertyDifference.property.differenceType"></a>

- *Type:* `string`

---

##### `expectedValue`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationPropertyDifference.property.expectedValue"></a>

- *Type:* `string`

---

##### `propertyPath`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationPropertyDifference.property.propertyPath"></a>

- *Type:* `string`

---

### CloudFormationRecordHandlerProgressInput <a name="aws-cdk-sdk.cloudformation.CloudFormationRecordHandlerProgressInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationRecordHandlerProgressInput: cloudformation.CloudFormationRecordHandlerProgressInput = { ... }
```

##### `bearerToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRecordHandlerProgressInput.property.bearerToken"></a>

- *Type:* `string`

---

##### `operationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRecordHandlerProgressInput.property.operationStatus"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRecordHandlerProgressInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `currentOperationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRecordHandlerProgressInput.property.currentOperationStatus"></a>

- *Type:* `string`

---

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRecordHandlerProgressInput.property.errorCode"></a>

- *Type:* `string`

---

##### `resourceModel`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRecordHandlerProgressInput.property.resourceModel"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRecordHandlerProgressInput.property.statusMessage"></a>

- *Type:* `string`

---

### CloudFormationRecordHandlerProgressOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationRecordHandlerProgressOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationRecordHandlerProgressOutput: cloudformation.CloudFormationRecordHandlerProgressOutput = { ... }
```

### CloudFormationRegisterTypeInput <a name="aws-cdk-sdk.cloudformation.CloudFormationRegisterTypeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationRegisterTypeInput: cloudformation.CloudFormationRegisterTypeInput = { ... }
```

##### `schemaHandlerPackage`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRegisterTypeInput.property.schemaHandlerPackage"></a>

- *Type:* `string`

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRegisterTypeInput.property.typeName"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRegisterTypeInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRegisterTypeInput.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `loggingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRegisterTypeInput.property.loggingConfig"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationLoggingConfig`](#aws-cdk-sdk.cloudformation.CloudFormationLoggingConfig)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRegisterTypeInput.property.type"></a>

- *Type:* `string`

---

### CloudFormationRegisterTypeOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationRegisterTypeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationRegisterTypeOutput: cloudformation.CloudFormationRegisterTypeOutput = { ... }
```

##### `registrationToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRegisterTypeOutput.property.registrationToken"></a>

- *Type:* `string`

---

### CloudFormationResourceChange <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceChange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationResourceChange: cloudformation.CloudFormationResourceChange = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceChange.property.action"></a>

- *Type:* `string`

---

##### `changeSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceChange.property.changeSetId"></a>

- *Type:* `string`

---

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceChange.property.details"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResourceChangeDetail`](#aws-cdk-sdk.cloudformation.CloudFormationResourceChangeDetail)[]

---

##### `logicalResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceChange.property.logicalResourceId"></a>

- *Type:* `string`

---

##### `moduleInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceChange.property.moduleInfo"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationModuleInfo`](#aws-cdk-sdk.cloudformation.CloudFormationModuleInfo)

---

##### `physicalResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceChange.property.physicalResourceId"></a>

- *Type:* `string`

---

##### `replacement`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceChange.property.replacement"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceChange.property.resourceType"></a>

- *Type:* `string`

---

##### `scope`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceChange.property.scope"></a>

- *Type:* `string`[]

---

### CloudFormationResourceChangeDetail <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceChangeDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationResourceChangeDetail: cloudformation.CloudFormationResourceChangeDetail = { ... }
```

##### `causingEntity`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceChangeDetail.property.causingEntity"></a>

- *Type:* `string`

---

##### `changeSource`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceChangeDetail.property.changeSource"></a>

- *Type:* `string`

---

##### `evaluation`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceChangeDetail.property.evaluation"></a>

- *Type:* `string`

---

##### `target`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceChangeDetail.property.target"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResourceTargetDefinition`](#aws-cdk-sdk.cloudformation.CloudFormationResourceTargetDefinition)

---

### CloudFormationResourceIdentifierSummary <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceIdentifierSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationResourceIdentifierSummary: cloudformation.CloudFormationResourceIdentifierSummary = { ... }
```

##### `logicalResourceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceIdentifierSummary.property.logicalResourceIds"></a>

- *Type:* `string`[]

---

##### `resourceIdentifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceIdentifierSummary.property.resourceIdentifiers"></a>

- *Type:* `string`[]

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceIdentifierSummary.property.resourceType"></a>

- *Type:* `string`

---

### CloudFormationResourceTargetDefinition <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceTargetDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationResourceTargetDefinition: cloudformation.CloudFormationResourceTargetDefinition = { ... }
```

##### `attribute`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceTargetDefinition.property.attribute"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceTargetDefinition.property.name"></a>

- *Type:* `string`

---

##### `requiresRecreation`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceTargetDefinition.property.requiresRecreation"></a>

- *Type:* `string`

---

### CloudFormationResourceToImport <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceToImport"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationResourceToImport: cloudformation.CloudFormationResourceToImport = { ... }
```

##### `logicalResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceToImport.property.logicalResourceId"></a>

- *Type:* `string`

---

##### `resourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceToImport.property.resourceIdentifier"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResourceToImport.property.resourceType"></a>

- *Type:* `string`

---

### CloudFormationRollbackConfiguration <a name="aws-cdk-sdk.cloudformation.CloudFormationRollbackConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationRollbackConfiguration: cloudformation.CloudFormationRollbackConfiguration = { ... }
```

##### `monitoringTimeInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRollbackConfiguration.property.monitoringTimeInMinutes"></a>

- *Type:* `number`

---

##### `rollbackTriggers`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRollbackConfiguration.property.rollbackTriggers"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationRollbackTrigger`](#aws-cdk-sdk.cloudformation.CloudFormationRollbackTrigger)[]

---

### CloudFormationRollbackTrigger <a name="aws-cdk-sdk.cloudformation.CloudFormationRollbackTrigger"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationRollbackTrigger: cloudformation.CloudFormationRollbackTrigger = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRollbackTrigger.property.arn"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationRollbackTrigger.property.type"></a>

- *Type:* `string`

---

### CloudFormationSetStackPolicyInput <a name="aws-cdk-sdk.cloudformation.CloudFormationSetStackPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationSetStackPolicyInput: cloudformation.CloudFormationSetStackPolicyInput = { ... }
```

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationSetStackPolicyInput.property.stackName"></a>

- *Type:* `string`

---

##### `stackPolicyBody`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationSetStackPolicyInput.property.stackPolicyBody"></a>

- *Type:* `string`

---

##### `stackPolicyUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationSetStackPolicyInput.property.stackPolicyUrl"></a>

- *Type:* `string`

---

### CloudFormationSetTypeDefaultVersionInput <a name="aws-cdk-sdk.cloudformation.CloudFormationSetTypeDefaultVersionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationSetTypeDefaultVersionInput: cloudformation.CloudFormationSetTypeDefaultVersionInput = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationSetTypeDefaultVersionInput.property.arn"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationSetTypeDefaultVersionInput.property.type"></a>

- *Type:* `string`

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationSetTypeDefaultVersionInput.property.typeName"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationSetTypeDefaultVersionInput.property.versionId"></a>

- *Type:* `string`

---

### CloudFormationSetTypeDefaultVersionOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationSetTypeDefaultVersionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationSetTypeDefaultVersionOutput: cloudformation.CloudFormationSetTypeDefaultVersionOutput = { ... }
```

### CloudFormationSignalResourceInput <a name="aws-cdk-sdk.cloudformation.CloudFormationSignalResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationSignalResourceInput: cloudformation.CloudFormationSignalResourceInput = { ... }
```

##### `logicalResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationSignalResourceInput.property.logicalResourceId"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationSignalResourceInput.property.stackName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationSignalResourceInput.property.status"></a>

- *Type:* `string`

---

##### `uniqueId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationSignalResourceInput.property.uniqueId"></a>

- *Type:* `string`

---

### CloudFormationStack <a name="aws-cdk-sdk.cloudformation.CloudFormationStack"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStack: cloudformation.CloudFormationStack = { ... }
```

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.creationTime"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.stackName"></a>

- *Type:* `string`

---

##### `stackStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.stackStatus"></a>

- *Type:* `string`

---

##### `capabilities`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.capabilities"></a>

- *Type:* `string`[]

---

##### `changeSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.changeSetId"></a>

- *Type:* `string`

---

##### `deletionTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.deletionTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.description"></a>

- *Type:* `string`

---

##### `disableRollback`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.disableRollback"></a>

- *Type:* `boolean`

---

##### `driftInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.driftInformation"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackDriftInformation`](#aws-cdk-sdk.cloudformation.CloudFormationStackDriftInformation)

---

##### `enableTerminationProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.enableTerminationProtection"></a>

- *Type:* `boolean`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `notificationArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.notificationArNs"></a>

- *Type:* `string`[]

---

##### `outputs`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationOutput`](#aws-cdk-sdk.cloudformation.CloudFormationOutput)[]

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameter`](#aws-cdk-sdk.cloudformation.CloudFormationParameter)[]

---

##### `parentId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.parentId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.roleArn"></a>

- *Type:* `string`

---

##### `rollbackConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.rollbackConfiguration"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationRollbackConfiguration`](#aws-cdk-sdk.cloudformation.CloudFormationRollbackConfiguration)

---

##### `rootId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.rootId"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.stackId"></a>

- *Type:* `string`

---

##### `stackStatusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.stackStatusReason"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.tags"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationTag`](#aws-cdk-sdk.cloudformation.CloudFormationTag)[]

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStack.property.timeoutInMinutes"></a>

- *Type:* `number`

---

### CloudFormationStackDriftInformation <a name="aws-cdk-sdk.cloudformation.CloudFormationStackDriftInformation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackDriftInformation: cloudformation.CloudFormationStackDriftInformation = { ... }
```

##### `stackDriftStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackDriftInformation.property.stackDriftStatus"></a>

- *Type:* `string`

---

##### `lastCheckTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackDriftInformation.property.lastCheckTimestamp"></a>

- *Type:* `string`

---

### CloudFormationStackDriftInformationSummary <a name="aws-cdk-sdk.cloudformation.CloudFormationStackDriftInformationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackDriftInformationSummary: cloudformation.CloudFormationStackDriftInformationSummary = { ... }
```

##### `stackDriftStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackDriftInformationSummary.property.stackDriftStatus"></a>

- *Type:* `string`

---

##### `lastCheckTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackDriftInformationSummary.property.lastCheckTimestamp"></a>

- *Type:* `string`

---

### CloudFormationStackEvent <a name="aws-cdk-sdk.cloudformation.CloudFormationStackEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackEvent: cloudformation.CloudFormationStackEvent = { ... }
```

##### `eventId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackEvent.property.eventId"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackEvent.property.stackId"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackEvent.property.stackName"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackEvent.property.timestamp"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackEvent.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `logicalResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackEvent.property.logicalResourceId"></a>

- *Type:* `string`

---

##### `physicalResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackEvent.property.physicalResourceId"></a>

- *Type:* `string`

---

##### `resourceProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackEvent.property.resourceProperties"></a>

- *Type:* `string`

---

##### `resourceStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackEvent.property.resourceStatus"></a>

- *Type:* `string`

---

##### `resourceStatusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackEvent.property.resourceStatusReason"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackEvent.property.resourceType"></a>

- *Type:* `string`

---

### CloudFormationStackInstance <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackInstance: cloudformation.CloudFormationStackInstance = { ... }
```

##### `account`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstance.property.account"></a>

- *Type:* `string`

---

##### `driftStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstance.property.driftStatus"></a>

- *Type:* `string`

---

##### `lastDriftCheckTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstance.property.lastDriftCheckTimestamp"></a>

- *Type:* `string`

---

##### `organizationalUnitId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstance.property.organizationalUnitId"></a>

- *Type:* `string`

---

##### `parameterOverrides`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstance.property.parameterOverrides"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameter`](#aws-cdk-sdk.cloudformation.CloudFormationParameter)[]

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstance.property.region"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstance.property.stackId"></a>

- *Type:* `string`

---

##### `stackInstanceStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstance.property.stackInstanceStatus"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackInstanceComprehensiveStatus`](#aws-cdk-sdk.cloudformation.CloudFormationStackInstanceComprehensiveStatus)

---

##### `stackSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstance.property.stackSetId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstance.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstance.property.statusReason"></a>

- *Type:* `string`

---

### CloudFormationStackInstanceComprehensiveStatus <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstanceComprehensiveStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackInstanceComprehensiveStatus: cloudformation.CloudFormationStackInstanceComprehensiveStatus = { ... }
```

##### `detailedStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstanceComprehensiveStatus.property.detailedStatus"></a>

- *Type:* `string`

---

### CloudFormationStackInstanceFilter <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstanceFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackInstanceFilter: cloudformation.CloudFormationStackInstanceFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstanceFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstanceFilter.property.values"></a>

- *Type:* `string`

---

### CloudFormationStackInstanceSummary <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstanceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackInstanceSummary: cloudformation.CloudFormationStackInstanceSummary = { ... }
```

##### `account`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstanceSummary.property.account"></a>

- *Type:* `string`

---

##### `driftStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstanceSummary.property.driftStatus"></a>

- *Type:* `string`

---

##### `lastDriftCheckTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstanceSummary.property.lastDriftCheckTimestamp"></a>

- *Type:* `string`

---

##### `organizationalUnitId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstanceSummary.property.organizationalUnitId"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstanceSummary.property.region"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstanceSummary.property.stackId"></a>

- *Type:* `string`

---

##### `stackInstanceStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstanceSummary.property.stackInstanceStatus"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackInstanceComprehensiveStatus`](#aws-cdk-sdk.cloudformation.CloudFormationStackInstanceComprehensiveStatus)

---

##### `stackSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstanceSummary.property.stackSetId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstanceSummary.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackInstanceSummary.property.statusReason"></a>

- *Type:* `string`

---

### CloudFormationStackResource <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackResource: cloudformation.CloudFormationStackResource = { ... }
```

##### `logicalResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResource.property.logicalResourceId"></a>

- *Type:* `string`

---

##### `resourceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResource.property.resourceStatus"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResource.property.resourceType"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResource.property.timestamp"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResource.property.description"></a>

- *Type:* `string`

---

##### `driftInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResource.property.driftInformation"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackResourceDriftInformation`](#aws-cdk-sdk.cloudformation.CloudFormationStackResourceDriftInformation)

---

##### `moduleInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResource.property.moduleInfo"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationModuleInfo`](#aws-cdk-sdk.cloudformation.CloudFormationModuleInfo)

---

##### `physicalResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResource.property.physicalResourceId"></a>

- *Type:* `string`

---

##### `resourceStatusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResource.property.resourceStatusReason"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResource.property.stackId"></a>

- *Type:* `string`

---

##### `stackName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResource.property.stackName"></a>

- *Type:* `string`

---

### CloudFormationStackResourceDetail <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackResourceDetail: cloudformation.CloudFormationStackResourceDetail = { ... }
```

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDetail.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `logicalResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDetail.property.logicalResourceId"></a>

- *Type:* `string`

---

##### `resourceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDetail.property.resourceStatus"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDetail.property.resourceType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDetail.property.description"></a>

- *Type:* `string`

---

##### `driftInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDetail.property.driftInformation"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackResourceDriftInformation`](#aws-cdk-sdk.cloudformation.CloudFormationStackResourceDriftInformation)

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDetail.property.metadata"></a>

- *Type:* `string`

---

##### `moduleInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDetail.property.moduleInfo"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationModuleInfo`](#aws-cdk-sdk.cloudformation.CloudFormationModuleInfo)

---

##### `physicalResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDetail.property.physicalResourceId"></a>

- *Type:* `string`

---

##### `resourceStatusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDetail.property.resourceStatusReason"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDetail.property.stackId"></a>

- *Type:* `string`

---

##### `stackName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDetail.property.stackName"></a>

- *Type:* `string`

---

### CloudFormationStackResourceDrift <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackResourceDrift: cloudformation.CloudFormationStackResourceDrift = { ... }
```

##### `logicalResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift.property.logicalResourceId"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift.property.resourceType"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift.property.stackId"></a>

- *Type:* `string`

---

##### `stackResourceDriftStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift.property.stackResourceDriftStatus"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift.property.timestamp"></a>

- *Type:* `string`

---

##### `actualProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift.property.actualProperties"></a>

- *Type:* `string`

---

##### `expectedProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift.property.expectedProperties"></a>

- *Type:* `string`

---

##### `moduleInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift.property.moduleInfo"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationModuleInfo`](#aws-cdk-sdk.cloudformation.CloudFormationModuleInfo)

---

##### `physicalResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift.property.physicalResourceId"></a>

- *Type:* `string`

---

##### `physicalResourceIdContext`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift.property.physicalResourceIdContext"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationPhysicalResourceIdContextKeyValuePair`](#aws-cdk-sdk.cloudformation.CloudFormationPhysicalResourceIdContextKeyValuePair)[]

---

##### `propertyDifferences`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift.property.propertyDifferences"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationPropertyDifference`](#aws-cdk-sdk.cloudformation.CloudFormationPropertyDifference)[]

---

### CloudFormationStackResourceDriftInformation <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDriftInformation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackResourceDriftInformation: cloudformation.CloudFormationStackResourceDriftInformation = { ... }
```

##### `stackResourceDriftStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDriftInformation.property.stackResourceDriftStatus"></a>

- *Type:* `string`

---

##### `lastCheckTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDriftInformation.property.lastCheckTimestamp"></a>

- *Type:* `string`

---

### CloudFormationStackResourceDriftInformationSummary <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDriftInformationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackResourceDriftInformationSummary: cloudformation.CloudFormationStackResourceDriftInformationSummary = { ... }
```

##### `stackResourceDriftStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDriftInformationSummary.property.stackResourceDriftStatus"></a>

- *Type:* `string`

---

##### `lastCheckTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceDriftInformationSummary.property.lastCheckTimestamp"></a>

- *Type:* `string`

---

### CloudFormationStackResourceSummary <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackResourceSummary: cloudformation.CloudFormationStackResourceSummary = { ... }
```

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceSummary.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `logicalResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceSummary.property.logicalResourceId"></a>

- *Type:* `string`

---

##### `resourceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceSummary.property.resourceStatus"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceSummary.property.resourceType"></a>

- *Type:* `string`

---

##### `driftInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceSummary.property.driftInformation"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackResourceDriftInformationSummary`](#aws-cdk-sdk.cloudformation.CloudFormationStackResourceDriftInformationSummary)

---

##### `moduleInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceSummary.property.moduleInfo"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationModuleInfo`](#aws-cdk-sdk.cloudformation.CloudFormationModuleInfo)

---

##### `physicalResourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceSummary.property.physicalResourceId"></a>

- *Type:* `string`

---

##### `resourceStatusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackResourceSummary.property.resourceStatusReason"></a>

- *Type:* `string`

---

### CloudFormationStackSet <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackSet: cloudformation.CloudFormationStackSet = { ... }
```

##### `administrationRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSet.property.administrationRoleArn"></a>

- *Type:* `string`

---

##### `autoDeployment`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSet.property.autoDeployment"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationAutoDeployment`](#aws-cdk-sdk.cloudformation.CloudFormationAutoDeployment)

---

##### `capabilities`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSet.property.capabilities"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSet.property.description"></a>

- *Type:* `string`

---

##### `executionRoleName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSet.property.executionRoleName"></a>

- *Type:* `string`

---

##### `organizationalUnitIds`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSet.property.organizationalUnitIds"></a>

- *Type:* `string`[]

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSet.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameter`](#aws-cdk-sdk.cloudformation.CloudFormationParameter)[]

---

##### `permissionModel`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSet.property.permissionModel"></a>

- *Type:* `string`

---

##### `stackSetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSet.property.stackSetArn"></a>

- *Type:* `string`

---

##### `stackSetDriftDetectionDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSet.property.stackSetDriftDetectionDetails"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSetDriftDetectionDetails`](#aws-cdk-sdk.cloudformation.CloudFormationStackSetDriftDetectionDetails)

---

##### `stackSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSet.property.stackSetId"></a>

- *Type:* `string`

---

##### `stackSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSet.property.stackSetName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSet.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSet.property.tags"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationTag`](#aws-cdk-sdk.cloudformation.CloudFormationTag)[]

---

##### `templateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSet.property.templateBody"></a>

- *Type:* `string`

---

### CloudFormationStackSetDriftDetectionDetails <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetDriftDetectionDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackSetDriftDetectionDetails: cloudformation.CloudFormationStackSetDriftDetectionDetails = { ... }
```

##### `driftDetectionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetDriftDetectionDetails.property.driftDetectionStatus"></a>

- *Type:* `string`

---

##### `driftedStackInstancesCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetDriftDetectionDetails.property.driftedStackInstancesCount"></a>

- *Type:* `number`

---

##### `driftStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetDriftDetectionDetails.property.driftStatus"></a>

- *Type:* `string`

---

##### `failedStackInstancesCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetDriftDetectionDetails.property.failedStackInstancesCount"></a>

- *Type:* `number`

---

##### `inProgressStackInstancesCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetDriftDetectionDetails.property.inProgressStackInstancesCount"></a>

- *Type:* `number`

---

##### `inSyncStackInstancesCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetDriftDetectionDetails.property.inSyncStackInstancesCount"></a>

- *Type:* `number`

---

##### `lastDriftCheckTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetDriftDetectionDetails.property.lastDriftCheckTimestamp"></a>

- *Type:* `string`

---

##### `totalStackInstancesCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetDriftDetectionDetails.property.totalStackInstancesCount"></a>

- *Type:* `number`

---

### CloudFormationStackSetOperation <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackSetOperation: cloudformation.CloudFormationStackSetOperation = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperation.property.action"></a>

- *Type:* `string`

---

##### `administrationRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperation.property.administrationRoleArn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperation.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `deploymentTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperation.property.deploymentTargets"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDeploymentTargets`](#aws-cdk-sdk.cloudformation.CloudFormationDeploymentTargets)

---

##### `endTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperation.property.endTimestamp"></a>

- *Type:* `string`

---

##### `executionRoleName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperation.property.executionRoleName"></a>

- *Type:* `string`

---

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperation.property.operationId"></a>

- *Type:* `string`

---

##### `operationPreferences`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperation.property.operationPreferences"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences`](#aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences)

---

##### `retainStacks`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperation.property.retainStacks"></a>

- *Type:* `boolean`

---

##### `stackSetDriftDetectionDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperation.property.stackSetDriftDetectionDetails"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSetDriftDetectionDetails`](#aws-cdk-sdk.cloudformation.CloudFormationStackSetDriftDetectionDetails)

---

##### `stackSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperation.property.stackSetId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperation.property.status"></a>

- *Type:* `string`

---

### CloudFormationStackSetOperationPreferences <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackSetOperationPreferences: cloudformation.CloudFormationStackSetOperationPreferences = { ... }
```

##### `failureToleranceCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences.property.failureToleranceCount"></a>

- *Type:* `number`

---

##### `failureTolerancePercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences.property.failureTolerancePercentage"></a>

- *Type:* `number`

---

##### `maxConcurrentCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences.property.maxConcurrentCount"></a>

- *Type:* `number`

---

##### `maxConcurrentPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences.property.maxConcurrentPercentage"></a>

- *Type:* `number`

---

##### `regionOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences.property.regionOrder"></a>

- *Type:* `string`[]

---

### CloudFormationStackSetOperationResultSummary <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationResultSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackSetOperationResultSummary: cloudformation.CloudFormationStackSetOperationResultSummary = { ... }
```

##### `account`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationResultSummary.property.account"></a>

- *Type:* `string`

---

##### `accountGateResult`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationResultSummary.property.accountGateResult"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationAccountGateResult`](#aws-cdk-sdk.cloudformation.CloudFormationAccountGateResult)

---

##### `organizationalUnitId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationResultSummary.property.organizationalUnitId"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationResultSummary.property.region"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationResultSummary.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationResultSummary.property.statusReason"></a>

- *Type:* `string`

---

### CloudFormationStackSetOperationSummary <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackSetOperationSummary: cloudformation.CloudFormationStackSetOperationSummary = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationSummary.property.action"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationSummary.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `endTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationSummary.property.endTimestamp"></a>

- *Type:* `string`

---

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationSummary.property.operationId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationSummary.property.status"></a>

- *Type:* `string`

---

### CloudFormationStackSetSummary <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackSetSummary: cloudformation.CloudFormationStackSetSummary = { ... }
```

##### `autoDeployment`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetSummary.property.autoDeployment"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationAutoDeployment`](#aws-cdk-sdk.cloudformation.CloudFormationAutoDeployment)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetSummary.property.description"></a>

- *Type:* `string`

---

##### `driftStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetSummary.property.driftStatus"></a>

- *Type:* `string`

---

##### `lastDriftCheckTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetSummary.property.lastDriftCheckTimestamp"></a>

- *Type:* `string`

---

##### `permissionModel`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetSummary.property.permissionModel"></a>

- *Type:* `string`

---

##### `stackSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetSummary.property.stackSetId"></a>

- *Type:* `string`

---

##### `stackSetName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetSummary.property.stackSetName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSetSummary.property.status"></a>

- *Type:* `string`

---

### CloudFormationStackSummary <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStackSummary: cloudformation.CloudFormationStackSummary = { ... }
```

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSummary.property.creationTime"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSummary.property.stackName"></a>

- *Type:* `string`

---

##### `stackStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSummary.property.stackStatus"></a>

- *Type:* `string`

---

##### `deletionTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSummary.property.deletionTime"></a>

- *Type:* `string`

---

##### `driftInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSummary.property.driftInformation"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackDriftInformationSummary`](#aws-cdk-sdk.cloudformation.CloudFormationStackDriftInformationSummary)

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSummary.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `parentId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSummary.property.parentId"></a>

- *Type:* `string`

---

##### `rootId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSummary.property.rootId"></a>

- *Type:* `string`

---

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSummary.property.stackId"></a>

- *Type:* `string`

---

##### `stackStatusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSummary.property.stackStatusReason"></a>

- *Type:* `string`

---

##### `templateDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStackSummary.property.templateDescription"></a>

- *Type:* `string`

---

### CloudFormationStopStackSetOperationInput <a name="aws-cdk-sdk.cloudformation.CloudFormationStopStackSetOperationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStopStackSetOperationInput: cloudformation.CloudFormationStopStackSetOperationInput = { ... }
```

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStopStackSetOperationInput.property.operationId"></a>

- *Type:* `string`

---

##### `stackSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationStopStackSetOperationInput.property.stackSetName"></a>

- *Type:* `string`

---

### CloudFormationStopStackSetOperationOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationStopStackSetOperationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationStopStackSetOperationOutput: cloudformation.CloudFormationStopStackSetOperationOutput = { ... }
```

### CloudFormationTag <a name="aws-cdk-sdk.cloudformation.CloudFormationTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationTag: cloudformation.CloudFormationTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTag.property.value"></a>

- *Type:* `string`

---

### CloudFormationTemplateParameter <a name="aws-cdk-sdk.cloudformation.CloudFormationTemplateParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationTemplateParameter: cloudformation.CloudFormationTemplateParameter = { ... }
```

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTemplateParameter.property.defaultValue"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTemplateParameter.property.description"></a>

- *Type:* `string`

---

##### `noEcho`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTemplateParameter.property.noEcho"></a>

- *Type:* `boolean`

---

##### `parameterKey`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTemplateParameter.property.parameterKey"></a>

- *Type:* `string`

---

### CloudFormationTypeSummary <a name="aws-cdk-sdk.cloudformation.CloudFormationTypeSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationTypeSummary: cloudformation.CloudFormationTypeSummary = { ... }
```

##### `defaultVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTypeSummary.property.defaultVersionId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTypeSummary.property.description"></a>

- *Type:* `string`

---

##### `lastUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTypeSummary.property.lastUpdated"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTypeSummary.property.type"></a>

- *Type:* `string`

---

##### `typeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTypeSummary.property.typeArn"></a>

- *Type:* `string`

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTypeSummary.property.typeName"></a>

- *Type:* `string`

---

### CloudFormationTypeVersionSummary <a name="aws-cdk-sdk.cloudformation.CloudFormationTypeVersionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationTypeVersionSummary: cloudformation.CloudFormationTypeVersionSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTypeVersionSummary.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTypeVersionSummary.property.description"></a>

- *Type:* `string`

---

##### `isDefaultVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTypeVersionSummary.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `timeCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTypeVersionSummary.property.timeCreated"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTypeVersionSummary.property.type"></a>

- *Type:* `string`

---

##### `typeName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTypeVersionSummary.property.typeName"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationTypeVersionSummary.property.versionId"></a>

- *Type:* `string`

---

### CloudFormationUpdateStackInput <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationUpdateStackInput: cloudformation.CloudFormationUpdateStackInput = { ... }
```

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput.property.stackName"></a>

- *Type:* `string`

---

##### `capabilities`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput.property.capabilities"></a>

- *Type:* `string`[]

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `notificationArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput.property.notificationArNs"></a>

- *Type:* `string`[]

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameter`](#aws-cdk-sdk.cloudformation.CloudFormationParameter)[]

---

##### `resourceTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput.property.resourceTypes"></a>

- *Type:* `string`[]

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput.property.roleArn"></a>

- *Type:* `string`

---

##### `rollbackConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput.property.rollbackConfiguration"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationRollbackConfiguration`](#aws-cdk-sdk.cloudformation.CloudFormationRollbackConfiguration)

---

##### `stackPolicyBody`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput.property.stackPolicyBody"></a>

- *Type:* `string`

---

##### `stackPolicyDuringUpdateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput.property.stackPolicyDuringUpdateBody"></a>

- *Type:* `string`

---

##### `stackPolicyDuringUpdateUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput.property.stackPolicyDuringUpdateUrl"></a>

- *Type:* `string`

---

##### `stackPolicyUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput.property.stackPolicyUrl"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationTag`](#aws-cdk-sdk.cloudformation.CloudFormationTag)[]

---

##### `templateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput.property.templateBody"></a>

- *Type:* `string`

---

##### `templateUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput.property.templateUrl"></a>

- *Type:* `string`

---

##### `usePreviousTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput.property.usePreviousTemplate"></a>

- *Type:* `boolean`

---

### CloudFormationUpdateStackInstancesInput <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInstancesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationUpdateStackInstancesInput: cloudformation.CloudFormationUpdateStackInstancesInput = { ... }
```

##### `regions`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInstancesInput.property.regions"></a>

- *Type:* `string`[]

---

##### `stackSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInstancesInput.property.stackSetName"></a>

- *Type:* `string`

---

##### `accounts`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInstancesInput.property.accounts"></a>

- *Type:* `string`[]

---

##### `deploymentTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInstancesInput.property.deploymentTargets"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDeploymentTargets`](#aws-cdk-sdk.cloudformation.CloudFormationDeploymentTargets)

---

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInstancesInput.property.operationId"></a>

- *Type:* `string`

---

##### `operationPreferences`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInstancesInput.property.operationPreferences"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences`](#aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences)

---

##### `parameterOverrides`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInstancesInput.property.parameterOverrides"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameter`](#aws-cdk-sdk.cloudformation.CloudFormationParameter)[]

---

### CloudFormationUpdateStackInstancesOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInstancesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationUpdateStackInstancesOutput: cloudformation.CloudFormationUpdateStackInstancesOutput = { ... }
```

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInstancesOutput.property.operationId"></a>

- *Type:* `string`

---

### CloudFormationUpdateStackOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationUpdateStackOutput: cloudformation.CloudFormationUpdateStackOutput = { ... }
```

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackOutput.property.stackId"></a>

- *Type:* `string`

---

### CloudFormationUpdateStackSetInput <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationUpdateStackSetInput: cloudformation.CloudFormationUpdateStackSetInput = { ... }
```

##### `stackSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput.property.stackSetName"></a>

- *Type:* `string`

---

##### `accounts`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput.property.accounts"></a>

- *Type:* `string`[]

---

##### `administrationRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput.property.administrationRoleArn"></a>

- *Type:* `string`

---

##### `autoDeployment`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput.property.autoDeployment"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationAutoDeployment`](#aws-cdk-sdk.cloudformation.CloudFormationAutoDeployment)

---

##### `capabilities`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput.property.capabilities"></a>

- *Type:* `string`[]

---

##### `deploymentTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput.property.deploymentTargets"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDeploymentTargets`](#aws-cdk-sdk.cloudformation.CloudFormationDeploymentTargets)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput.property.description"></a>

- *Type:* `string`

---

##### `executionRoleName`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput.property.executionRoleName"></a>

- *Type:* `string`

---

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput.property.operationId"></a>

- *Type:* `string`

---

##### `operationPreferences`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput.property.operationPreferences"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences`](#aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationPreferences)

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameter`](#aws-cdk-sdk.cloudformation.CloudFormationParameter)[]

---

##### `permissionModel`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput.property.permissionModel"></a>

- *Type:* `string`

---

##### `regions`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput.property.regions"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationTag`](#aws-cdk-sdk.cloudformation.CloudFormationTag)[]

---

##### `templateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput.property.templateBody"></a>

- *Type:* `string`

---

##### `templateUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput.property.templateUrl"></a>

- *Type:* `string`

---

##### `usePreviousTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput.property.usePreviousTemplate"></a>

- *Type:* `boolean`

---

### CloudFormationUpdateStackSetOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationUpdateStackSetOutput: cloudformation.CloudFormationUpdateStackSetOutput = { ... }
```

##### `operationId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetOutput.property.operationId"></a>

- *Type:* `string`

---

### CloudFormationUpdateTerminationProtectionInput <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateTerminationProtectionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationUpdateTerminationProtectionInput: cloudformation.CloudFormationUpdateTerminationProtectionInput = { ... }
```

##### `enableTerminationProtection`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateTerminationProtectionInput.property.enableTerminationProtection"></a>

- *Type:* `boolean`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateTerminationProtectionInput.property.stackName"></a>

- *Type:* `string`

---

### CloudFormationUpdateTerminationProtectionOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateTerminationProtectionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationUpdateTerminationProtectionOutput: cloudformation.CloudFormationUpdateTerminationProtectionOutput = { ... }
```

##### `stackId`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationUpdateTerminationProtectionOutput.property.stackId"></a>

- *Type:* `string`

---

### CloudFormationValidateTemplateInput <a name="aws-cdk-sdk.cloudformation.CloudFormationValidateTemplateInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationValidateTemplateInput: cloudformation.CloudFormationValidateTemplateInput = { ... }
```

##### `templateBody`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationValidateTemplateInput.property.templateBody"></a>

- *Type:* `string`

---

##### `templateUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationValidateTemplateInput.property.templateUrl"></a>

- *Type:* `string`

---

### CloudFormationValidateTemplateOutput <a name="aws-cdk-sdk.cloudformation.CloudFormationValidateTemplateOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

const cloudFormationValidateTemplateOutput: cloudformation.CloudFormationValidateTemplateOutput = { ... }
```

##### `capabilities`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationValidateTemplateOutput.property.capabilities"></a>

- *Type:* `string`[]

---

##### `capabilitiesReason`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationValidateTemplateOutput.property.capabilitiesReason"></a>

- *Type:* `string`

---

##### `declaredTransforms`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationValidateTemplateOutput.property.declaredTransforms"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationValidateTemplateOutput.property.description"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationValidateTemplateOutput.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationTemplateParameter`](#aws-cdk-sdk.cloudformation.CloudFormationTemplateParameter)[]

---

## Classes <a name="Classes"></a>

### CloudFormationResponsesCreateChangeSet <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateChangeSet"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateChangeSet.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesCreateChangeSet(__scope: Construct, __resources: string[], __input: CloudFormationCreateChangeSetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateChangeSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateChangeSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateChangeSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput`](#aws-cdk-sdk.cloudformation.CloudFormationCreateChangeSetInput)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateChangeSet.property.id"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateChangeSet.property.stackId"></a>

- *Type:* `string`

---


### CloudFormationResponsesCreateStack <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStack"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStack.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesCreateStack(__scope: Construct, __resources: string[], __input: CloudFormationCreateStackInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStack.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStack.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStack.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput`](#aws-cdk-sdk.cloudformation.CloudFormationCreateStackInput)

---



#### Properties <a name="Properties"></a>

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStack.property.stackId"></a>

- *Type:* `string`

---


### CloudFormationResponsesCreateStackInstances <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStackInstances"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStackInstances.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesCreateStackInstances(__scope: Construct, __resources: string[], __input: CloudFormationCreateStackInstancesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStackInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStackInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStackInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationCreateStackInstancesInput`](#aws-cdk-sdk.cloudformation.CloudFormationCreateStackInstancesInput)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStackInstances.property.operationId"></a>

- *Type:* `string`

---


### CloudFormationResponsesCreateStackSet <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStackSet"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStackSet.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesCreateStackSet(__scope: Construct, __resources: string[], __input: CloudFormationCreateStackSetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStackSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStackSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStackSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetInput`](#aws-cdk-sdk.cloudformation.CloudFormationCreateStackSetInput)

---



#### Properties <a name="Properties"></a>

##### `stackSetId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesCreateStackSet.property.stackSetId"></a>

- *Type:* `string`

---


### CloudFormationResponsesDeleteStackInstances <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDeleteStackInstances"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDeleteStackInstances.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDeleteStackInstances(__scope: Construct, __resources: string[], __input: CloudFormationDeleteStackInstancesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDeleteStackInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDeleteStackInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDeleteStackInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInstancesInput`](#aws-cdk-sdk.cloudformation.CloudFormationDeleteStackInstancesInput)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDeleteStackInstances.property.operationId"></a>

- *Type:* `string`

---


### CloudFormationResponsesDescribeAccountLimits <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeAccountLimits"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeAccountLimits.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeAccountLimits(__scope: Construct, __resources: string[], __input: CloudFormationDescribeAccountLimitsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeAccountLimits.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeAccountLimits.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeAccountLimits.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeAccountLimitsInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeAccountLimitsInput)

---



#### Properties <a name="Properties"></a>

##### `accountLimits`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeAccountLimits.property.accountLimits"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationAccountLimit`](#aws-cdk-sdk.cloudformation.CloudFormationAccountLimit)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeAccountLimits.property.nextToken"></a>

- *Type:* `string`

---


### CloudFormationResponsesDescribeChangeSet <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeChangeSet(__scope: Construct, __resources: string[], __input: CloudFormationDescribeChangeSetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetInput)

---



#### Properties <a name="Properties"></a>

##### `capabilities`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.capabilities"></a>

- *Type:* `string`[]

---

##### `changes`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.changes"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationChange`](#aws-cdk-sdk.cloudformation.CloudFormationChange)[]

---

##### `changeSetId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.changeSetId"></a>

- *Type:* `string`

---

##### `changeSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.changeSetName"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.description"></a>

- *Type:* `string`

---

##### `executionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.executionStatus"></a>

- *Type:* `string`

---

##### `includeNestedStacks`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.includeNestedStacks"></a>

- *Type:* `boolean`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.nextToken"></a>

- *Type:* `string`

---

##### `notificationArNs`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.notificationArNs"></a>

- *Type:* `string`[]

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameter`](#aws-cdk-sdk.cloudformation.CloudFormationParameter)[]

---

##### `parentChangeSetId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.parentChangeSetId"></a>

- *Type:* `string`

---

##### `rollbackConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.rollbackConfiguration"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSetRollbackConfiguration`](#aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSetRollbackConfiguration)

---

##### `rootChangeSetId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.rootChangeSetId"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.stackId"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.stackName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.statusReason"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSet.property.tags"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationTag`](#aws-cdk-sdk.cloudformation.CloudFormationTag)[]

---


### CloudFormationResponsesDescribeChangeSetRollbackConfiguration <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSetRollbackConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSetRollbackConfiguration.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeChangeSetRollbackConfiguration(__scope: Construct, __resources: string[], __input: CloudFormationDescribeChangeSetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSetRollbackConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSetRollbackConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSetRollbackConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeChangeSetInput)

---



#### Properties <a name="Properties"></a>

##### `monitoringTimeInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSetRollbackConfiguration.property.monitoringTimeInMinutes"></a>

- *Type:* `number`

---

##### `rollbackTriggers`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeChangeSetRollbackConfiguration.property.rollbackTriggers"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationRollbackTrigger`](#aws-cdk-sdk.cloudformation.CloudFormationRollbackTrigger)[]

---


### CloudFormationResponsesDescribeStackDriftDetectionStatus <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackDriftDetectionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackDriftDetectionStatus.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackDriftDetectionStatus(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackDriftDetectionStatusInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackDriftDetectionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackDriftDetectionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackDriftDetectionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackDriftDetectionStatusInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackDriftDetectionStatusInput)

---



#### Properties <a name="Properties"></a>

##### `detectionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackDriftDetectionStatus.property.detectionStatus"></a>

- *Type:* `string`

---

##### `detectionStatusReason`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackDriftDetectionStatus.property.detectionStatusReason"></a>

- *Type:* `string`

---

##### `driftedStackResourceCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackDriftDetectionStatus.property.driftedStackResourceCount"></a>

- *Type:* `number`

---

##### `stackDriftDetectionId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackDriftDetectionStatus.property.stackDriftDetectionId"></a>

- *Type:* `string`

---

##### `stackDriftStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackDriftDetectionStatus.property.stackDriftStatus"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackDriftDetectionStatus.property.stackId"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackDriftDetectionStatus.property.timestamp"></a>

- *Type:* `string`

---


### CloudFormationResponsesDescribeStackEvents <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackEvents"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackEvents.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackEvents(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackEventsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackEventsInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackEventsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackEvents.property.nextToken"></a>

- *Type:* `string`

---

##### `stackEvents`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackEvents.property.stackEvents"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackEvent`](#aws-cdk-sdk.cloudformation.CloudFormationStackEvent)[]

---


### CloudFormationResponsesDescribeStackInstance <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstance"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstance.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackInstance(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackInstanceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackInstanceInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackInstanceInput)

---



#### Properties <a name="Properties"></a>

##### `stackInstance`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstance.property.stackInstance"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance`](#aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance)

---


### CloudFormationResponsesDescribeStackInstanceStackInstance <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackInstanceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackInstanceInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackInstanceInput)

---



#### Properties <a name="Properties"></a>

##### `account`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance.property.account"></a>

- *Type:* `string`

---

##### `driftStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance.property.driftStatus"></a>

- *Type:* `string`

---

##### `lastDriftCheckTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance.property.lastDriftCheckTimestamp"></a>

- *Type:* `string`

---

##### `organizationalUnitId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance.property.organizationalUnitId"></a>

- *Type:* `string`

---

##### `parameterOverrides`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance.property.parameterOverrides"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameter`](#aws-cdk-sdk.cloudformation.CloudFormationParameter)[]

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance.property.region"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance.property.stackId"></a>

- *Type:* `string`

---

##### `stackInstanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance.property.stackInstanceStatus"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstanceStackInstanceStatus`](#aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstanceStackInstanceStatus)

---

##### `stackSetId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance.property.stackSetId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstance.property.statusReason"></a>

- *Type:* `string`

---


### CloudFormationResponsesDescribeStackInstanceStackInstanceStackInstanceStatus <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstanceStackInstanceStatus"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstanceStackInstanceStatus.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstanceStackInstanceStatus(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackInstanceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstanceStackInstanceStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstanceStackInstanceStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstanceStackInstanceStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackInstanceInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackInstanceInput)

---



#### Properties <a name="Properties"></a>

##### `detailedStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackInstanceStackInstanceStackInstanceStatus.property.detailedStatus"></a>

- *Type:* `string`

---


### CloudFormationResponsesDescribeStackResource <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResource"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResource.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackResource(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceInput)

---



#### Properties <a name="Properties"></a>

##### `stackResourceDetail`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResource.property.stackResourceDetail"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail`](#aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail)

---


### CloudFormationResponsesDescribeStackResourceDrifts <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceDrifts"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceDrifts.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackResourceDrifts(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackResourceDriftsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceDrifts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceDrifts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceDrifts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceDriftsInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceDriftsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceDrifts.property.nextToken"></a>

- *Type:* `string`

---

##### `stackResourceDrifts`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceDrifts.property.stackResourceDrifts"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift`](#aws-cdk-sdk.cloudformation.CloudFormationStackResourceDrift)[]

---


### CloudFormationResponsesDescribeStackResources <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResources"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResources.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackResources(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackResourcesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourcesInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourcesInput)

---



#### Properties <a name="Properties"></a>

##### `stackResources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResources.property.stackResources"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackResource`](#aws-cdk-sdk.cloudformation.CloudFormationStackResource)[]

---


### CloudFormationResponsesDescribeStackResourceStackResourceDetail <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceInput)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail.property.description"></a>

- *Type:* `string`

---

##### `driftInformation`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail.property.driftInformation"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailDriftInformation`](#aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailDriftInformation)

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `logicalResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail.property.logicalResourceId"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail.property.metadata"></a>

- *Type:* `string`

---

##### `moduleInfo`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail.property.moduleInfo"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailModuleInfo`](#aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailModuleInfo)

---

##### `physicalResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail.property.physicalResourceId"></a>

- *Type:* `string`

---

##### `resourceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail.property.resourceStatus"></a>

- *Type:* `string`

---

##### `resourceStatusReason`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail.property.resourceStatusReason"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail.property.resourceType"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail.property.stackId"></a>

- *Type:* `string`

---

##### `stackName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetail.property.stackName"></a>

- *Type:* `string`

---


### CloudFormationResponsesDescribeStackResourceStackResourceDetailDriftInformation <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailDriftInformation"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailDriftInformation.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailDriftInformation(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailDriftInformation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailDriftInformation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailDriftInformation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceInput)

---



#### Properties <a name="Properties"></a>

##### `lastCheckTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailDriftInformation.property.lastCheckTimestamp"></a>

- *Type:* `string`

---

##### `stackResourceDriftStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailDriftInformation.property.stackResourceDriftStatus"></a>

- *Type:* `string`

---


### CloudFormationResponsesDescribeStackResourceStackResourceDetailModuleInfo <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailModuleInfo"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailModuleInfo.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailModuleInfo(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailModuleInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailModuleInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailModuleInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackResourceInput)

---



#### Properties <a name="Properties"></a>

##### `logicalIdHierarchy`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailModuleInfo.property.logicalIdHierarchy"></a>

- *Type:* `string`

---

##### `typeHierarchy`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackResourceStackResourceDetailModuleInfo.property.typeHierarchy"></a>

- *Type:* `string`

---


### CloudFormationResponsesDescribeStacks <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStacks"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStacks.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStacks(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStacksInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStacks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStacks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStacks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStacksInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStacksInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStacks.property.nextToken"></a>

- *Type:* `string`

---

##### `stacks`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStacks.property.stacks"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStack`](#aws-cdk-sdk.cloudformation.CloudFormationStack)[]

---


### CloudFormationResponsesDescribeStackSet <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSet"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSet.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackSet(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackSetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetInput)

---



#### Properties <a name="Properties"></a>

##### `stackSet`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSet.property.stackSet"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet`](#aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet)

---


### CloudFormationResponsesDescribeStackSetOperation <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperation"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperation.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackSetOperation(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackSetOperationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOperationInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOperationInput)

---



#### Properties <a name="Properties"></a>

##### `stackSetOperation`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperation.property.stackSetOperation"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation`](#aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation)

---


### CloudFormationResponsesDescribeStackSetOperationStackSetOperation <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackSetOperationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOperationInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOperationInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation.property.action"></a>

- *Type:* `string`

---

##### `administrationRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation.property.administrationRoleArn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `deploymentTargets`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation.property.deploymentTargets"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationDeploymentTargets`](#aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationDeploymentTargets)

---

##### `endTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation.property.endTimestamp"></a>

- *Type:* `string`

---

##### `executionRoleName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation.property.executionRoleName"></a>

- *Type:* `string`

---

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation.property.operationId"></a>

- *Type:* `string`

---

##### `operationPreferences`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation.property.operationPreferences"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationOperationPreferences`](#aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationOperationPreferences)

---

##### `retainStacks`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation.property.retainStacks"></a>

- *Type:* `boolean`

---

##### `stackSetDriftDetectionDetails`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation.property.stackSetDriftDetectionDetails"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails`](#aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails)

---

##### `stackSetId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation.property.stackSetId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperation.property.status"></a>

- *Type:* `string`

---


### CloudFormationResponsesDescribeStackSetOperationStackSetOperationDeploymentTargets <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationDeploymentTargets"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationDeploymentTargets.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationDeploymentTargets(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackSetOperationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationDeploymentTargets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationDeploymentTargets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationDeploymentTargets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOperationInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOperationInput)

---



#### Properties <a name="Properties"></a>

##### `accounts`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationDeploymentTargets.property.accounts"></a>

- *Type:* `string`[]

---

##### `organizationalUnitIds`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationDeploymentTargets.property.organizationalUnitIds"></a>

- *Type:* `string`[]

---


### CloudFormationResponsesDescribeStackSetOperationStackSetOperationOperationPreferences <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationOperationPreferences"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationOperationPreferences.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationOperationPreferences(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackSetOperationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationOperationPreferences.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationOperationPreferences.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationOperationPreferences.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOperationInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOperationInput)

---



#### Properties <a name="Properties"></a>

##### `failureToleranceCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationOperationPreferences.property.failureToleranceCount"></a>

- *Type:* `number`

---

##### `failureTolerancePercentage`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationOperationPreferences.property.failureTolerancePercentage"></a>

- *Type:* `number`

---

##### `maxConcurrentCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationOperationPreferences.property.maxConcurrentCount"></a>

- *Type:* `number`

---

##### `maxConcurrentPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationOperationPreferences.property.maxConcurrentPercentage"></a>

- *Type:* `number`

---

##### `regionOrder`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationOperationPreferences.property.regionOrder"></a>

- *Type:* `string`[]

---


### CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackSetOperationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOperationInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetOperationInput)

---



#### Properties <a name="Properties"></a>

##### `driftDetectionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails.property.driftDetectionStatus"></a>

- *Type:* `string`

---

##### `driftedStackInstancesCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails.property.driftedStackInstancesCount"></a>

- *Type:* `number`

---

##### `driftStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails.property.driftStatus"></a>

- *Type:* `string`

---

##### `failedStackInstancesCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails.property.failedStackInstancesCount"></a>

- *Type:* `number`

---

##### `inProgressStackInstancesCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails.property.inProgressStackInstancesCount"></a>

- *Type:* `number`

---

##### `inSyncStackInstancesCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails.property.inSyncStackInstancesCount"></a>

- *Type:* `number`

---

##### `lastDriftCheckTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails.property.lastDriftCheckTimestamp"></a>

- *Type:* `string`

---

##### `totalStackInstancesCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails.property.totalStackInstancesCount"></a>

- *Type:* `number`

---


### CloudFormationResponsesDescribeStackSetStackSet <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackSetStackSet(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackSetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetInput)

---



#### Properties <a name="Properties"></a>

##### `administrationRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.property.administrationRoleArn"></a>

- *Type:* `string`

---

##### `autoDeployment`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.property.autoDeployment"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetAutoDeployment`](#aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetAutoDeployment)

---

##### `capabilities`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.property.capabilities"></a>

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.property.description"></a>

- *Type:* `string`

---

##### `executionRoleName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.property.executionRoleName"></a>

- *Type:* `string`

---

##### `organizationalUnitIds`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.property.organizationalUnitIds"></a>

- *Type:* `string`[]

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameter`](#aws-cdk-sdk.cloudformation.CloudFormationParameter)[]

---

##### `permissionModel`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.property.permissionModel"></a>

- *Type:* `string`

---

##### `stackSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.property.stackSetArn"></a>

- *Type:* `string`

---

##### `stackSetDriftDetectionDetails`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.property.stackSetDriftDetectionDetails"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails`](#aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails)

---

##### `stackSetId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.property.stackSetId"></a>

- *Type:* `string`

---

##### `stackSetName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.property.stackSetName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.property.tags"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationTag`](#aws-cdk-sdk.cloudformation.CloudFormationTag)[]

---

##### `templateBody`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSet.property.templateBody"></a>

- *Type:* `string`

---


### CloudFormationResponsesDescribeStackSetStackSetAutoDeployment <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetAutoDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetAutoDeployment.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackSetStackSetAutoDeployment(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackSetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetAutoDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetAutoDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetAutoDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetInput)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetAutoDeployment.property.enabled"></a>

- *Type:* `boolean`

---

##### `retainStacksOnAccountRemoval`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetAutoDeployment.property.retainStacksOnAccountRemoval"></a>

- *Type:* `boolean`

---


### CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails(__scope: Construct, __resources: string[], __input: CloudFormationDescribeStackSetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeStackSetInput)

---



#### Properties <a name="Properties"></a>

##### `driftDetectionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails.property.driftDetectionStatus"></a>

- *Type:* `string`

---

##### `driftedStackInstancesCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails.property.driftedStackInstancesCount"></a>

- *Type:* `number`

---

##### `driftStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails.property.driftStatus"></a>

- *Type:* `string`

---

##### `failedStackInstancesCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails.property.failedStackInstancesCount"></a>

- *Type:* `number`

---

##### `inProgressStackInstancesCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails.property.inProgressStackInstancesCount"></a>

- *Type:* `number`

---

##### `inSyncStackInstancesCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails.property.inSyncStackInstancesCount"></a>

- *Type:* `number`

---

##### `lastDriftCheckTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails.property.lastDriftCheckTimestamp"></a>

- *Type:* `string`

---

##### `totalStackInstancesCount`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails.property.totalStackInstancesCount"></a>

- *Type:* `number`

---


### CloudFormationResponsesDescribeType <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeType(__scope: Construct, __resources: string[], __input: CloudFormationDescribeTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeInput)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.property.arn"></a>

- *Type:* `string`

---

##### `defaultVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.property.defaultVersionId"></a>

- *Type:* `string`

---

##### `deprecatedStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.property.deprecatedStatus"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.property.description"></a>

- *Type:* `string`

---

##### `documentationUrl`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.property.documentationUrl"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `isDefaultVersion`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.property.isDefaultVersion"></a>

- *Type:* `boolean`

---

##### `lastUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.property.lastUpdated"></a>

- *Type:* `string`

---

##### `loggingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.property.loggingConfig"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeLoggingConfig`](#aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeLoggingConfig)

---

##### `provisioningType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.property.provisioningType"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.property.schema"></a>

- *Type:* `string`

---

##### `sourceUrl`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.property.sourceUrl"></a>

- *Type:* `string`

---

##### `timeCreated`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.property.timeCreated"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.property.type"></a>

- *Type:* `string`

---

##### `typeName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.property.typeName"></a>

- *Type:* `string`

---

##### `visibility`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeType.property.visibility"></a>

- *Type:* `string`

---


### CloudFormationResponsesDescribeTypeLoggingConfig <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeLoggingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeLoggingConfig.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeTypeLoggingConfig(__scope: Construct, __resources: string[], __input: CloudFormationDescribeTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeLoggingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeLoggingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeLoggingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeInput)

---



#### Properties <a name="Properties"></a>

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeLoggingConfig.property.logGroupName"></a>

- *Type:* `string`

---

##### `logRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeLoggingConfig.property.logRoleArn"></a>

- *Type:* `string`

---


### CloudFormationResponsesDescribeTypeRegistration <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeRegistration"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeRegistration.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDescribeTypeRegistration(__scope: Construct, __resources: string[], __input: CloudFormationDescribeTypeRegistrationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeRegistration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeRegistration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeRegistration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeRegistrationInput`](#aws-cdk-sdk.cloudformation.CloudFormationDescribeTypeRegistrationInput)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeRegistration.property.description"></a>

- *Type:* `string`

---

##### `progressStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeRegistration.property.progressStatus"></a>

- *Type:* `string`

---

##### `typeArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeRegistration.property.typeArn"></a>

- *Type:* `string`

---

##### `typeVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDescribeTypeRegistration.property.typeVersionArn"></a>

- *Type:* `string`

---


### CloudFormationResponsesDetectStackDrift <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackDrift"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackDrift.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDetectStackDrift(__scope: Construct, __resources: string[], __input: CloudFormationDetectStackDriftInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackDrift.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackDrift.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackDrift.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDetectStackDriftInput`](#aws-cdk-sdk.cloudformation.CloudFormationDetectStackDriftInput)

---



#### Properties <a name="Properties"></a>

##### `stackDriftDetectionId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackDrift.property.stackDriftDetectionId"></a>

- *Type:* `string`

---


### CloudFormationResponsesDetectStackResourceDrift <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDrift"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDrift.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDetectStackResourceDrift(__scope: Construct, __resources: string[], __input: CloudFormationDetectStackResourceDriftInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDrift.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDrift.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDrift.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDetectStackResourceDriftInput`](#aws-cdk-sdk.cloudformation.CloudFormationDetectStackResourceDriftInput)

---



#### Properties <a name="Properties"></a>

##### `stackResourceDrift`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDrift.property.stackResourceDrift"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift`](#aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift)

---


### CloudFormationResponsesDetectStackResourceDriftStackResourceDrift <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift(__scope: Construct, __resources: string[], __input: CloudFormationDetectStackResourceDriftInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDetectStackResourceDriftInput`](#aws-cdk-sdk.cloudformation.CloudFormationDetectStackResourceDriftInput)

---



#### Properties <a name="Properties"></a>

##### `actualProperties`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift.property.actualProperties"></a>

- *Type:* `string`

---

##### `expectedProperties`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift.property.expectedProperties"></a>

- *Type:* `string`

---

##### `logicalResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift.property.logicalResourceId"></a>

- *Type:* `string`

---

##### `moduleInfo`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift.property.moduleInfo"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDriftModuleInfo`](#aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDriftModuleInfo)

---

##### `physicalResourceId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift.property.physicalResourceId"></a>

- *Type:* `string`

---

##### `physicalResourceIdContext`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift.property.physicalResourceIdContext"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationPhysicalResourceIdContextKeyValuePair`](#aws-cdk-sdk.cloudformation.CloudFormationPhysicalResourceIdContextKeyValuePair)[]

---

##### `propertyDifferences`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift.property.propertyDifferences"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationPropertyDifference`](#aws-cdk-sdk.cloudformation.CloudFormationPropertyDifference)[]

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift.property.resourceType"></a>

- *Type:* `string`

---

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift.property.stackId"></a>

- *Type:* `string`

---

##### `stackResourceDriftStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift.property.stackResourceDriftStatus"></a>

- *Type:* `string`

---

##### `timestamp`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDrift.property.timestamp"></a>

- *Type:* `string`

---


### CloudFormationResponsesDetectStackResourceDriftStackResourceDriftModuleInfo <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDriftModuleInfo"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDriftModuleInfo.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDriftModuleInfo(__scope: Construct, __resources: string[], __input: CloudFormationDetectStackResourceDriftInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDriftModuleInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDriftModuleInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDriftModuleInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDetectStackResourceDriftInput`](#aws-cdk-sdk.cloudformation.CloudFormationDetectStackResourceDriftInput)

---



#### Properties <a name="Properties"></a>

##### `logicalIdHierarchy`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDriftModuleInfo.property.logicalIdHierarchy"></a>

- *Type:* `string`

---

##### `typeHierarchy`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackResourceDriftStackResourceDriftModuleInfo.property.typeHierarchy"></a>

- *Type:* `string`

---


### CloudFormationResponsesDetectStackSetDrift <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackSetDrift"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackSetDrift.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesDetectStackSetDrift(__scope: Construct, __resources: string[], __input: CloudFormationDetectStackSetDriftInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackSetDrift.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackSetDrift.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackSetDrift.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationDetectStackSetDriftInput`](#aws-cdk-sdk.cloudformation.CloudFormationDetectStackSetDriftInput)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesDetectStackSetDrift.property.operationId"></a>

- *Type:* `string`

---


### CloudFormationResponsesEstimateTemplateCost <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesEstimateTemplateCost"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesEstimateTemplateCost.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesEstimateTemplateCost(__scope: Construct, __resources: string[], __input: CloudFormationEstimateTemplateCostInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesEstimateTemplateCost.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesEstimateTemplateCost.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesEstimateTemplateCost.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationEstimateTemplateCostInput`](#aws-cdk-sdk.cloudformation.CloudFormationEstimateTemplateCostInput)

---



#### Properties <a name="Properties"></a>

##### `url`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesEstimateTemplateCost.property.url"></a>

- *Type:* `string`

---


### CloudFormationResponsesFetchStackPolicy <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchStackPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchStackPolicy.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesFetchStackPolicy(__scope: Construct, __resources: string[], __input: CloudFormationGetStackPolicyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchStackPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchStackPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchStackPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationGetStackPolicyInput`](#aws-cdk-sdk.cloudformation.CloudFormationGetStackPolicyInput)

---



#### Properties <a name="Properties"></a>

##### `stackPolicyBody`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchStackPolicy.property.stackPolicyBody"></a>

- *Type:* `string`

---


### CloudFormationResponsesFetchTemplate <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplate.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesFetchTemplate(__scope: Construct, __resources: string[], __input: CloudFormationGetTemplateInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationGetTemplateInput`](#aws-cdk-sdk.cloudformation.CloudFormationGetTemplateInput)

---



#### Properties <a name="Properties"></a>

##### `stagesAvailable`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplate.property.stagesAvailable"></a>

- *Type:* `string`[]

---

##### `templateBody`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplate.property.templateBody"></a>

- *Type:* `string`

---


### CloudFormationResponsesFetchTemplateSummary <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplateSummary"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplateSummary.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesFetchTemplateSummary(__scope: Construct, __resources: string[], __input: CloudFormationGetTemplateSummaryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplateSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplateSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplateSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryInput`](#aws-cdk-sdk.cloudformation.CloudFormationGetTemplateSummaryInput)

---



#### Properties <a name="Properties"></a>

##### `capabilities`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplateSummary.property.capabilities"></a>

- *Type:* `string`[]

---

##### `capabilitiesReason`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplateSummary.property.capabilitiesReason"></a>

- *Type:* `string`

---

##### `declaredTransforms`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplateSummary.property.declaredTransforms"></a>

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplateSummary.property.description"></a>

- *Type:* `string`

---

##### `metadata`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplateSummary.property.metadata"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplateSummary.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationParameterDeclaration`](#aws-cdk-sdk.cloudformation.CloudFormationParameterDeclaration)[]

---

##### `resourceIdentifierSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplateSummary.property.resourceIdentifierSummaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationResourceIdentifierSummary`](#aws-cdk-sdk.cloudformation.CloudFormationResourceIdentifierSummary)[]

---

##### `resourceTypes`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplateSummary.property.resourceTypes"></a>

- *Type:* `string`[]

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesFetchTemplateSummary.property.version"></a>

- *Type:* `string`

---


### CloudFormationResponsesListChangeSets <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListChangeSets"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListChangeSets.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesListChangeSets(__scope: Construct, __resources: string[], __input: CloudFormationListChangeSetsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListChangeSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListChangeSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListChangeSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListChangeSetsInput`](#aws-cdk-sdk.cloudformation.CloudFormationListChangeSetsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListChangeSets.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListChangeSets.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationChangeSetSummary`](#aws-cdk-sdk.cloudformation.CloudFormationChangeSetSummary)[]

---


### CloudFormationResponsesListExports <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListExports"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListExports.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesListExports(__scope: Construct, __resources: string[], __input: CloudFormationListExportsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListExports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListExports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListExports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListExportsInput`](#aws-cdk-sdk.cloudformation.CloudFormationListExportsInput)

---



#### Properties <a name="Properties"></a>

##### `exports`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListExports.property.exports"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationExport`](#aws-cdk-sdk.cloudformation.CloudFormationExport)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListExports.property.nextToken"></a>

- *Type:* `string`

---


### CloudFormationResponsesListImports <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListImports"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListImports.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesListImports(__scope: Construct, __resources: string[], __input: CloudFormationListImportsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListImports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListImports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListImports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListImportsInput`](#aws-cdk-sdk.cloudformation.CloudFormationListImportsInput)

---



#### Properties <a name="Properties"></a>

##### `imports`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListImports.property.imports"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListImports.property.nextToken"></a>

- *Type:* `string`

---


### CloudFormationResponsesListStackInstances <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackInstances"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackInstances.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesListStackInstances(__scope: Construct, __resources: string[], __input: CloudFormationListStackInstancesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListStackInstancesInput`](#aws-cdk-sdk.cloudformation.CloudFormationListStackInstancesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackInstances.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackInstances.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackInstanceSummary`](#aws-cdk-sdk.cloudformation.CloudFormationStackInstanceSummary)[]

---


### CloudFormationResponsesListStackResources <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackResources"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackResources.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesListStackResources(__scope: Construct, __resources: string[], __input: CloudFormationListStackResourcesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListStackResourcesInput`](#aws-cdk-sdk.cloudformation.CloudFormationListStackResourcesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackResources.property.nextToken"></a>

- *Type:* `string`

---

##### `stackResourceSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackResources.property.stackResourceSummaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackResourceSummary`](#aws-cdk-sdk.cloudformation.CloudFormationStackResourceSummary)[]

---


### CloudFormationResponsesListStacks <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStacks"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStacks.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesListStacks(__scope: Construct, __resources: string[], __input: CloudFormationListStacksInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStacks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStacks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStacks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListStacksInput`](#aws-cdk-sdk.cloudformation.CloudFormationListStacksInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStacks.property.nextToken"></a>

- *Type:* `string`

---

##### `stackSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStacks.property.stackSummaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSummary`](#aws-cdk-sdk.cloudformation.CloudFormationStackSummary)[]

---


### CloudFormationResponsesListStackSetOperationResults <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSetOperationResults"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSetOperationResults.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesListStackSetOperationResults(__scope: Construct, __resources: string[], __input: CloudFormationListStackSetOperationResultsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSetOperationResults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSetOperationResults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSetOperationResults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationResultsInput`](#aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationResultsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSetOperationResults.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSetOperationResults.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationResultSummary`](#aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationResultSummary)[]

---


### CloudFormationResponsesListStackSetOperations <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSetOperations"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSetOperations.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesListStackSetOperations(__scope: Construct, __resources: string[], __input: CloudFormationListStackSetOperationsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSetOperations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSetOperations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSetOperations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationsInput`](#aws-cdk-sdk.cloudformation.CloudFormationListStackSetOperationsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSetOperations.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSetOperations.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationSummary`](#aws-cdk-sdk.cloudformation.CloudFormationStackSetOperationSummary)[]

---


### CloudFormationResponsesListStackSets <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSets"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSets.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesListStackSets(__scope: Construct, __resources: string[], __input: CloudFormationListStackSetsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListStackSetsInput`](#aws-cdk-sdk.cloudformation.CloudFormationListStackSetsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSets.property.nextToken"></a>

- *Type:* `string`

---

##### `summaries`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListStackSets.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationStackSetSummary`](#aws-cdk-sdk.cloudformation.CloudFormationStackSetSummary)[]

---


### CloudFormationResponsesListTypeRegistrations <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypeRegistrations"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypeRegistrations.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesListTypeRegistrations(__scope: Construct, __resources: string[], __input: CloudFormationListTypeRegistrationsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypeRegistrations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypeRegistrations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypeRegistrations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListTypeRegistrationsInput`](#aws-cdk-sdk.cloudformation.CloudFormationListTypeRegistrationsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypeRegistrations.property.nextToken"></a>

- *Type:* `string`

---

##### `registrationTokenList`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypeRegistrations.property.registrationTokenList"></a>

- *Type:* `string`[]

---


### CloudFormationResponsesListTypes <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypes"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypes.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesListTypes(__scope: Construct, __resources: string[], __input: CloudFormationListTypesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListTypesInput`](#aws-cdk-sdk.cloudformation.CloudFormationListTypesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypes.property.nextToken"></a>

- *Type:* `string`

---

##### `typeSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypes.property.typeSummaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationTypeSummary`](#aws-cdk-sdk.cloudformation.CloudFormationTypeSummary)[]

---


### CloudFormationResponsesListTypeVersions <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypeVersions"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypeVersions.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesListTypeVersions(__scope: Construct, __resources: string[], __input: CloudFormationListTypeVersionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypeVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypeVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypeVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationListTypeVersionsInput`](#aws-cdk-sdk.cloudformation.CloudFormationListTypeVersionsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypeVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `typeVersionSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesListTypeVersions.property.typeVersionSummaries"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationTypeVersionSummary`](#aws-cdk-sdk.cloudformation.CloudFormationTypeVersionSummary)[]

---


### CloudFormationResponsesRegisterType <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesRegisterType"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesRegisterType.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesRegisterType(__scope: Construct, __resources: string[], __input: CloudFormationRegisterTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesRegisterType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesRegisterType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesRegisterType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationRegisterTypeInput`](#aws-cdk-sdk.cloudformation.CloudFormationRegisterTypeInput)

---



#### Properties <a name="Properties"></a>

##### `registrationToken`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesRegisterType.property.registrationToken"></a>

- *Type:* `string`

---


### CloudFormationResponsesUpdateStack <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStack"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStack.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesUpdateStack(__scope: Construct, __resources: string[], __input: CloudFormationUpdateStackInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStack.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStack.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStack.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput`](#aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInput)

---



#### Properties <a name="Properties"></a>

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStack.property.stackId"></a>

- *Type:* `string`

---


### CloudFormationResponsesUpdateStackInstances <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStackInstances"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStackInstances.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesUpdateStackInstances(__scope: Construct, __resources: string[], __input: CloudFormationUpdateStackInstancesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStackInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStackInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStackInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInstancesInput`](#aws-cdk-sdk.cloudformation.CloudFormationUpdateStackInstancesInput)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStackInstances.property.operationId"></a>

- *Type:* `string`

---


### CloudFormationResponsesUpdateStackSet <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStackSet"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStackSet.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesUpdateStackSet(__scope: Construct, __resources: string[], __input: CloudFormationUpdateStackSetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStackSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStackSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStackSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput`](#aws-cdk-sdk.cloudformation.CloudFormationUpdateStackSetInput)

---



#### Properties <a name="Properties"></a>

##### `operationId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateStackSet.property.operationId"></a>

- *Type:* `string`

---


### CloudFormationResponsesUpdateTerminationProtection <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateTerminationProtection"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateTerminationProtection.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesUpdateTerminationProtection(__scope: Construct, __resources: string[], __input: CloudFormationUpdateTerminationProtectionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateTerminationProtection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateTerminationProtection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateTerminationProtection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationUpdateTerminationProtectionInput`](#aws-cdk-sdk.cloudformation.CloudFormationUpdateTerminationProtectionInput)

---



#### Properties <a name="Properties"></a>

##### `stackId`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesUpdateTerminationProtection.property.stackId"></a>

- *Type:* `string`

---


### CloudFormationResponsesValidateTemplate <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesValidateTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesValidateTemplate.Initializer"></a>

```typescript
import { cloudformation } from 'aws-cdk-sdk'

new cloudformation.CloudFormationResponsesValidateTemplate(__scope: Construct, __resources: string[], __input: CloudFormationValidateTemplateInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesValidateTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesValidateTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesValidateTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationValidateTemplateInput`](#aws-cdk-sdk.cloudformation.CloudFormationValidateTemplateInput)

---



#### Properties <a name="Properties"></a>

##### `capabilities`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesValidateTemplate.property.capabilities"></a>

- *Type:* `string`[]

---

##### `capabilitiesReason`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesValidateTemplate.property.capabilitiesReason"></a>

- *Type:* `string`

---

##### `declaredTransforms`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesValidateTemplate.property.declaredTransforms"></a>

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesValidateTemplate.property.description"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.cloudformation.CloudFormationResponsesValidateTemplate.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.cloudformation.CloudFormationTemplateParameter`](#aws-cdk-sdk.cloudformation.CloudFormationTemplateParameter)[]

---



