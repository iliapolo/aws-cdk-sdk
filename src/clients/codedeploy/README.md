# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CodeDeployClient <a name="aws-cdk-sdk.codedeploy.CodeDeployClient"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addTagsToOnPremisesInstances` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.addTagsToOnPremisesInstances"></a>

```typescript
public addTagsToOnPremisesInstances(input: CodeDeployAddTagsToOnPremisesInstancesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAddTagsToOnPremisesInstancesInput`](#aws-cdk-sdk.codedeploy.CodeDeployAddTagsToOnPremisesInstancesInput)

---

##### `batchGetApplicationRevisions` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.batchGetApplicationRevisions"></a>

```typescript
public batchGetApplicationRevisions(input: CodeDeployBatchGetApplicationRevisionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationRevisionsInput`](#aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationRevisionsInput)

---

##### `batchGetApplications` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.batchGetApplications"></a>

```typescript
public batchGetApplications(input: CodeDeployBatchGetApplicationsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationsInput`](#aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationsInput)

---

##### `batchGetDeploymentGroups` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.batchGetDeploymentGroups"></a>

```typescript
public batchGetDeploymentGroups(input: CodeDeployBatchGetDeploymentGroupsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentGroupsInput`](#aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentGroupsInput)

---

##### `batchGetDeploymentInstances` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.batchGetDeploymentInstances"></a>

```typescript
public batchGetDeploymentInstances(input: CodeDeployBatchGetDeploymentInstancesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentInstancesInput`](#aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentInstancesInput)

---

##### `batchGetDeployments` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.batchGetDeployments"></a>

```typescript
public batchGetDeployments(input: CodeDeployBatchGetDeploymentsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentsInput`](#aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentsInput)

---

##### `batchGetDeploymentTargets` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.batchGetDeploymentTargets"></a>

```typescript
public batchGetDeploymentTargets(input: CodeDeployBatchGetDeploymentTargetsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentTargetsInput`](#aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentTargetsInput)

---

##### `batchGetOnPremisesInstances` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.batchGetOnPremisesInstances"></a>

```typescript
public batchGetOnPremisesInstances(input: CodeDeployBatchGetOnPremisesInstancesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBatchGetOnPremisesInstancesInput`](#aws-cdk-sdk.codedeploy.CodeDeployBatchGetOnPremisesInstancesInput)

---

##### `continueDeployment` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.continueDeployment"></a>

```typescript
public continueDeployment(input: CodeDeployContinueDeploymentInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployContinueDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployContinueDeploymentInput)

---

##### `createApplication` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.createApplication"></a>

```typescript
public createApplication(input: CodeDeployCreateApplicationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployCreateApplicationInput`](#aws-cdk-sdk.codedeploy.CodeDeployCreateApplicationInput)

---

##### `createDeployment` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.createDeployment"></a>

```typescript
public createDeployment(input: CodeDeployCreateDeploymentInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentInput)

---

##### `createDeploymentConfig` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.createDeploymentConfig"></a>

```typescript
public createDeploymentConfig(input: CodeDeployCreateDeploymentConfigInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentConfigInput`](#aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentConfigInput)

---

##### `createDeploymentGroup` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.createDeploymentGroup"></a>

```typescript
public createDeploymentGroup(input: CodeDeployCreateDeploymentGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput)

---

##### `deleteApplication` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.deleteApplication"></a>

```typescript
public deleteApplication(input: CodeDeployDeleteApplicationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeleteApplicationInput`](#aws-cdk-sdk.codedeploy.CodeDeployDeleteApplicationInput)

---

##### `deleteDeploymentConfig` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.deleteDeploymentConfig"></a>

```typescript
public deleteDeploymentConfig(input: CodeDeployDeleteDeploymentConfigInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeleteDeploymentConfigInput`](#aws-cdk-sdk.codedeploy.CodeDeployDeleteDeploymentConfigInput)

---

##### `deleteDeploymentGroup` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.deleteDeploymentGroup"></a>

```typescript
public deleteDeploymentGroup(input: CodeDeployDeleteDeploymentGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeleteDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployDeleteDeploymentGroupInput)

---

##### `deleteGitHubAccountToken` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.deleteGitHubAccountToken"></a>

```typescript
public deleteGitHubAccountToken(input: CodeDeployDeleteGitHubAccountTokenInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeleteGitHubAccountTokenInput`](#aws-cdk-sdk.codedeploy.CodeDeployDeleteGitHubAccountTokenInput)

---

##### `deleteResourcesByExternalId` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.deleteResourcesByExternalId"></a>

```typescript
public deleteResourcesByExternalId(input: CodeDeployDeleteResourcesByExternalIdInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeleteResourcesByExternalIdInput`](#aws-cdk-sdk.codedeploy.CodeDeployDeleteResourcesByExternalIdInput)

---

##### `deregisterOnPremisesInstance` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.deregisterOnPremisesInstance"></a>

```typescript
public deregisterOnPremisesInstance(input: CodeDeployDeregisterOnPremisesInstanceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeregisterOnPremisesInstanceInput`](#aws-cdk-sdk.codedeploy.CodeDeployDeregisterOnPremisesInstanceInput)

---

##### `fetchApplication` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.fetchApplication"></a>

```typescript
public fetchApplication(input: CodeDeployGetApplicationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetApplicationInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetApplicationInput)

---

##### `fetchApplicationRevision` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.fetchApplicationRevision"></a>

```typescript
public fetchApplicationRevision(input: CodeDeployGetApplicationRevisionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput)

---

##### `fetchDeployment` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.fetchDeployment"></a>

```typescript
public fetchDeployment(input: CodeDeployGetDeploymentInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---

##### `fetchDeploymentConfig` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.fetchDeploymentConfig"></a>

```typescript
public fetchDeploymentConfig(input: CodeDeployGetDeploymentConfigInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigInput)

---

##### `fetchDeploymentGroup` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.fetchDeploymentGroup"></a>

```typescript
public fetchDeploymentGroup(input: CodeDeployGetDeploymentGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---

##### `fetchDeploymentInstance` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.fetchDeploymentInstance"></a>

```typescript
public fetchDeploymentInstance(input: CodeDeployGetDeploymentInstanceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInstanceInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInstanceInput)

---

##### `fetchDeploymentTarget` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.fetchDeploymentTarget"></a>

```typescript
public fetchDeploymentTarget(input: CodeDeployGetDeploymentTargetInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput)

---

##### `fetchOnPremisesInstance` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.fetchOnPremisesInstance"></a>

```typescript
public fetchOnPremisesInstance(input: CodeDeployGetOnPremisesInstanceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetOnPremisesInstanceInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetOnPremisesInstanceInput)

---

##### `listApplicationRevisions` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.listApplicationRevisions"></a>

```typescript
public listApplicationRevisions(input: CodeDeployListApplicationRevisionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListApplicationRevisionsInput`](#aws-cdk-sdk.codedeploy.CodeDeployListApplicationRevisionsInput)

---

##### `listApplications` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.listApplications"></a>

```typescript
public listApplications(input: CodeDeployListApplicationsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListApplicationsInput`](#aws-cdk-sdk.codedeploy.CodeDeployListApplicationsInput)

---

##### `listDeploymentConfigs` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.listDeploymentConfigs"></a>

```typescript
public listDeploymentConfigs(input: CodeDeployListDeploymentConfigsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListDeploymentConfigsInput`](#aws-cdk-sdk.codedeploy.CodeDeployListDeploymentConfigsInput)

---

##### `listDeploymentGroups` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.listDeploymentGroups"></a>

```typescript
public listDeploymentGroups(input: CodeDeployListDeploymentGroupsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListDeploymentGroupsInput`](#aws-cdk-sdk.codedeploy.CodeDeployListDeploymentGroupsInput)

---

##### `listDeploymentInstances` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.listDeploymentInstances"></a>

```typescript
public listDeploymentInstances(input: CodeDeployListDeploymentInstancesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListDeploymentInstancesInput`](#aws-cdk-sdk.codedeploy.CodeDeployListDeploymentInstancesInput)

---

##### `listDeployments` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.listDeployments"></a>

```typescript
public listDeployments(input: CodeDeployListDeploymentsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListDeploymentsInput`](#aws-cdk-sdk.codedeploy.CodeDeployListDeploymentsInput)

---

##### `listDeploymentTargets` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.listDeploymentTargets"></a>

```typescript
public listDeploymentTargets(input: CodeDeployListDeploymentTargetsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListDeploymentTargetsInput`](#aws-cdk-sdk.codedeploy.CodeDeployListDeploymentTargetsInput)

---

##### `listGitHubAccountTokenNames` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.listGitHubAccountTokenNames"></a>

```typescript
public listGitHubAccountTokenNames(input: CodeDeployListGitHubAccountTokenNamesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListGitHubAccountTokenNamesInput`](#aws-cdk-sdk.codedeploy.CodeDeployListGitHubAccountTokenNamesInput)

---

##### `listOnPremisesInstances` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.listOnPremisesInstances"></a>

```typescript
public listOnPremisesInstances(input: CodeDeployListOnPremisesInstancesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListOnPremisesInstancesInput`](#aws-cdk-sdk.codedeploy.CodeDeployListOnPremisesInstancesInput)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: CodeDeployListTagsForResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListTagsForResourceInput`](#aws-cdk-sdk.codedeploy.CodeDeployListTagsForResourceInput)

---

##### `putLifecycleEventHookExecutionStatus` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.putLifecycleEventHookExecutionStatus"></a>

```typescript
public putLifecycleEventHookExecutionStatus(input: CodeDeployPutLifecycleEventHookExecutionStatusInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployPutLifecycleEventHookExecutionStatusInput`](#aws-cdk-sdk.codedeploy.CodeDeployPutLifecycleEventHookExecutionStatusInput)

---

##### `registerApplicationRevision` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.registerApplicationRevision"></a>

```typescript
public registerApplicationRevision(input: CodeDeployRegisterApplicationRevisionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRegisterApplicationRevisionInput`](#aws-cdk-sdk.codedeploy.CodeDeployRegisterApplicationRevisionInput)

---

##### `registerOnPremisesInstance` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.registerOnPremisesInstance"></a>

```typescript
public registerOnPremisesInstance(input: CodeDeployRegisterOnPremisesInstanceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRegisterOnPremisesInstanceInput`](#aws-cdk-sdk.codedeploy.CodeDeployRegisterOnPremisesInstanceInput)

---

##### `removeTagsFromOnPremisesInstances` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.removeTagsFromOnPremisesInstances"></a>

```typescript
public removeTagsFromOnPremisesInstances(input: CodeDeployRemoveTagsFromOnPremisesInstancesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRemoveTagsFromOnPremisesInstancesInput`](#aws-cdk-sdk.codedeploy.CodeDeployRemoveTagsFromOnPremisesInstancesInput)

---

##### `skipWaitTimeForInstanceTermination` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.skipWaitTimeForInstanceTermination"></a>

```typescript
public skipWaitTimeForInstanceTermination(input: CodeDeploySkipWaitTimeForInstanceTerminationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeploySkipWaitTimeForInstanceTerminationInput`](#aws-cdk-sdk.codedeploy.CodeDeploySkipWaitTimeForInstanceTerminationInput)

---

##### `stopDeployment` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.stopDeployment"></a>

```typescript
public stopDeployment(input: CodeDeployStopDeploymentInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployStopDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployStopDeploymentInput)

---

##### `tagResource` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.tagResource"></a>

```typescript
public tagResource(input: CodeDeployTagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTagResourceInput`](#aws-cdk-sdk.codedeploy.CodeDeployTagResourceInput)

---

##### `untagResource` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.untagResource"></a>

```typescript
public untagResource(input: CodeDeployUntagResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployUntagResourceInput`](#aws-cdk-sdk.codedeploy.CodeDeployUntagResourceInput)

---

##### `updateApplication` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.updateApplication"></a>

```typescript
public updateApplication(input: CodeDeployUpdateApplicationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployUpdateApplicationInput`](#aws-cdk-sdk.codedeploy.CodeDeployUpdateApplicationInput)

---

##### `updateDeploymentGroup` <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.updateDeploymentGroup"></a>

```typescript
public updateDeploymentGroup(input: CodeDeployUpdateDeploymentGroupInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput)

---




## Structs <a name="Structs"></a>

### CodeDeployAddTagsToOnPremisesInstancesInput <a name="aws-cdk-sdk.codedeploy.CodeDeployAddTagsToOnPremisesInstancesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployAddTagsToOnPremisesInstancesInput: codedeploy.CodeDeployAddTagsToOnPremisesInstancesInput = { ... }
```

##### `instanceNames`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployAddTagsToOnPremisesInstancesInput.property.instanceNames"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployAddTagsToOnPremisesInstancesInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTag`](#aws-cdk-sdk.codedeploy.CodeDeployTag)[]

---

### CodeDeployAlarm <a name="aws-cdk-sdk.codedeploy.CodeDeployAlarm"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployAlarm: codedeploy.CodeDeployAlarm = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployAlarm.property.name"></a>

- *Type:* `string`

---

### CodeDeployAlarmConfiguration <a name="aws-cdk-sdk.codedeploy.CodeDeployAlarmConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployAlarmConfiguration: codedeploy.CodeDeployAlarmConfiguration = { ... }
```

##### `alarms`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployAlarmConfiguration.property.alarms"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAlarm`](#aws-cdk-sdk.codedeploy.CodeDeployAlarm)[]

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployAlarmConfiguration.property.enabled"></a>

- *Type:* `boolean`

---

##### `ignorePollAlarmFailure`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployAlarmConfiguration.property.ignorePollAlarmFailure"></a>

- *Type:* `boolean`

---

### CodeDeployApplicationInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployApplicationInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployApplicationInfo: codedeploy.CodeDeployApplicationInfo = { ... }
```

##### `applicationId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployApplicationInfo.property.applicationId"></a>

- *Type:* `string`

---

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployApplicationInfo.property.applicationName"></a>

- *Type:* `string`

---

##### `computePlatform`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployApplicationInfo.property.computePlatform"></a>

- *Type:* `string`

---

##### `createTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployApplicationInfo.property.createTime"></a>

- *Type:* `string`

---

##### `gitHubAccountName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployApplicationInfo.property.gitHubAccountName"></a>

- *Type:* `string`

---

##### `linkedToGitHub`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployApplicationInfo.property.linkedToGitHub"></a>

- *Type:* `boolean`

---

### CodeDeployAppSpecContent <a name="aws-cdk-sdk.codedeploy.CodeDeployAppSpecContent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployAppSpecContent: codedeploy.CodeDeployAppSpecContent = { ... }
```

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployAppSpecContent.property.content"></a>

- *Type:* `string`

---

##### `sha256`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployAppSpecContent.property.sha256"></a>

- *Type:* `string`

---

### CodeDeployAutoRollbackConfiguration <a name="aws-cdk-sdk.codedeploy.CodeDeployAutoRollbackConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployAutoRollbackConfiguration: codedeploy.CodeDeployAutoRollbackConfiguration = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployAutoRollbackConfiguration.property.enabled"></a>

- *Type:* `boolean`

---

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployAutoRollbackConfiguration.property.events"></a>

- *Type:* `string`[]

---

### CodeDeployAutoScalingGroup <a name="aws-cdk-sdk.codedeploy.CodeDeployAutoScalingGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployAutoScalingGroup: codedeploy.CodeDeployAutoScalingGroup = { ... }
```

##### `hook`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployAutoScalingGroup.property.hook"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployAutoScalingGroup.property.name"></a>

- *Type:* `string`

---

### CodeDeployBatchGetApplicationRevisionsInput <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationRevisionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployBatchGetApplicationRevisionsInput: codedeploy.CodeDeployBatchGetApplicationRevisionsInput = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationRevisionsInput.property.applicationName"></a>

- *Type:* `string`

---

##### `revisions`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationRevisionsInput.property.revisions"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation`](#aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation)[]

---

### CodeDeployBatchGetApplicationRevisionsOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationRevisionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployBatchGetApplicationRevisionsOutput: codedeploy.CodeDeployBatchGetApplicationRevisionsOutput = { ... }
```

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationRevisionsOutput.property.applicationName"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationRevisionsOutput.property.errorMessage"></a>

- *Type:* `string`

---

##### `revisions`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationRevisionsOutput.property.revisions"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRevisionInfo`](#aws-cdk-sdk.codedeploy.CodeDeployRevisionInfo)[]

---

### CodeDeployBatchGetApplicationsInput <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployBatchGetApplicationsInput: codedeploy.CodeDeployBatchGetApplicationsInput = { ... }
```

##### `applicationNames`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationsInput.property.applicationNames"></a>

- *Type:* `string`[]

---

### CodeDeployBatchGetApplicationsOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployBatchGetApplicationsOutput: codedeploy.CodeDeployBatchGetApplicationsOutput = { ... }
```

##### `applicationsInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationsOutput.property.applicationsInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployApplicationInfo`](#aws-cdk-sdk.codedeploy.CodeDeployApplicationInfo)[]

---

### CodeDeployBatchGetDeploymentGroupsInput <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentGroupsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployBatchGetDeploymentGroupsInput: codedeploy.CodeDeployBatchGetDeploymentGroupsInput = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentGroupsInput.property.applicationName"></a>

- *Type:* `string`

---

##### `deploymentGroupNames`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentGroupsInput.property.deploymentGroupNames"></a>

- *Type:* `string`[]

---

### CodeDeployBatchGetDeploymentGroupsOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentGroupsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployBatchGetDeploymentGroupsOutput: codedeploy.CodeDeployBatchGetDeploymentGroupsOutput = { ... }
```

##### `deploymentGroupsInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentGroupsOutput.property.deploymentGroupsInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo`](#aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo)[]

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentGroupsOutput.property.errorMessage"></a>

- *Type:* `string`

---

### CodeDeployBatchGetDeploymentInstancesInput <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentInstancesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployBatchGetDeploymentInstancesInput: codedeploy.CodeDeployBatchGetDeploymentInstancesInput = { ... }
```

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentInstancesInput.property.deploymentId"></a>

- *Type:* `string`

---

##### `instanceIds`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentInstancesInput.property.instanceIds"></a>

- *Type:* `string`[]

---

### CodeDeployBatchGetDeploymentInstancesOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentInstancesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployBatchGetDeploymentInstancesOutput: codedeploy.CodeDeployBatchGetDeploymentInstancesOutput = { ... }
```

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentInstancesOutput.property.errorMessage"></a>

- *Type:* `string`

---

##### `instancesSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentInstancesOutput.property.instancesSummary"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployInstanceSummary`](#aws-cdk-sdk.codedeploy.CodeDeployInstanceSummary)[]

---

### CodeDeployBatchGetDeploymentsInput <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployBatchGetDeploymentsInput: codedeploy.CodeDeployBatchGetDeploymentsInput = { ... }
```

##### `deploymentIds`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentsInput.property.deploymentIds"></a>

- *Type:* `string`[]

---

### CodeDeployBatchGetDeploymentsOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployBatchGetDeploymentsOutput: codedeploy.CodeDeployBatchGetDeploymentsOutput = { ... }
```

##### `deploymentsInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentsOutput.property.deploymentsInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo`](#aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo)[]

---

### CodeDeployBatchGetDeploymentTargetsInput <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentTargetsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployBatchGetDeploymentTargetsInput: codedeploy.CodeDeployBatchGetDeploymentTargetsInput = { ... }
```

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentTargetsInput.property.deploymentId"></a>

- *Type:* `string`

---

##### `targetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentTargetsInput.property.targetIds"></a>

- *Type:* `string`[]

---

### CodeDeployBatchGetDeploymentTargetsOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentTargetsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployBatchGetDeploymentTargetsOutput: codedeploy.CodeDeployBatchGetDeploymentTargetsOutput = { ... }
```

##### `deploymentTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentTargetsOutput.property.deploymentTargets"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeploymentTarget`](#aws-cdk-sdk.codedeploy.CodeDeployDeploymentTarget)[]

---

### CodeDeployBatchGetOnPremisesInstancesInput <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetOnPremisesInstancesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployBatchGetOnPremisesInstancesInput: codedeploy.CodeDeployBatchGetOnPremisesInstancesInput = { ... }
```

##### `instanceNames`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetOnPremisesInstancesInput.property.instanceNames"></a>

- *Type:* `string`[]

---

### CodeDeployBatchGetOnPremisesInstancesOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetOnPremisesInstancesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployBatchGetOnPremisesInstancesOutput: codedeploy.CodeDeployBatchGetOnPremisesInstancesOutput = { ... }
```

##### `instanceInfos`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBatchGetOnPremisesInstancesOutput.property.instanceInfos"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployInstanceInfo`](#aws-cdk-sdk.codedeploy.CodeDeployInstanceInfo)[]

---

### CodeDeployBlueGreenDeploymentConfiguration <a name="aws-cdk-sdk.codedeploy.CodeDeployBlueGreenDeploymentConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployBlueGreenDeploymentConfiguration: codedeploy.CodeDeployBlueGreenDeploymentConfiguration = { ... }
```

##### `deploymentReadyOption`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBlueGreenDeploymentConfiguration.property.deploymentReadyOption"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeploymentReadyOption`](#aws-cdk-sdk.codedeploy.CodeDeployDeploymentReadyOption)

---

##### `greenFleetProvisioningOption`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBlueGreenDeploymentConfiguration.property.greenFleetProvisioningOption"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGreenFleetProvisioningOption`](#aws-cdk-sdk.codedeploy.CodeDeployGreenFleetProvisioningOption)

---

##### `terminateBlueInstancesOnDeploymentSuccess`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBlueGreenDeploymentConfiguration.property.terminateBlueInstancesOnDeploymentSuccess"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBlueInstanceTerminationOption`](#aws-cdk-sdk.codedeploy.CodeDeployBlueInstanceTerminationOption)

---

### CodeDeployBlueInstanceTerminationOption <a name="aws-cdk-sdk.codedeploy.CodeDeployBlueInstanceTerminationOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployBlueInstanceTerminationOption: codedeploy.CodeDeployBlueInstanceTerminationOption = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBlueInstanceTerminationOption.property.action"></a>

- *Type:* `string`

---

##### `terminationWaitTimeInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployBlueInstanceTerminationOption.property.terminationWaitTimeInMinutes"></a>

- *Type:* `number`

---

### CodeDeployCloudFormationTarget <a name="aws-cdk-sdk.codedeploy.CodeDeployCloudFormationTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployCloudFormationTarget: codedeploy.CodeDeployCloudFormationTarget = { ... }
```

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCloudFormationTarget.property.deploymentId"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCloudFormationTarget.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `lifecycleEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCloudFormationTarget.property.lifecycleEvents"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent`](#aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent)[]

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCloudFormationTarget.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCloudFormationTarget.property.status"></a>

- *Type:* `string`

---

##### `targetId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCloudFormationTarget.property.targetId"></a>

- *Type:* `string`

---

##### `targetVersionWeight`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCloudFormationTarget.property.targetVersionWeight"></a>

- *Type:* `number`

---

### CodeDeployContinueDeploymentInput <a name="aws-cdk-sdk.codedeploy.CodeDeployContinueDeploymentInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployContinueDeploymentInput: codedeploy.CodeDeployContinueDeploymentInput = { ... }
```

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployContinueDeploymentInput.property.deploymentId"></a>

- *Type:* `string`

---

##### `deploymentWaitType`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployContinueDeploymentInput.property.deploymentWaitType"></a>

- *Type:* `string`

---

### CodeDeployCreateApplicationInput <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateApplicationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployCreateApplicationInput: codedeploy.CodeDeployCreateApplicationInput = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateApplicationInput.property.applicationName"></a>

- *Type:* `string`

---

##### `computePlatform`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateApplicationInput.property.computePlatform"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateApplicationInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTag`](#aws-cdk-sdk.codedeploy.CodeDeployTag)[]

---

### CodeDeployCreateApplicationOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateApplicationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployCreateApplicationOutput: codedeploy.CodeDeployCreateApplicationOutput = { ... }
```

##### `applicationId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateApplicationOutput.property.applicationId"></a>

- *Type:* `string`

---

### CodeDeployCreateDeploymentConfigInput <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentConfigInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployCreateDeploymentConfigInput: codedeploy.CodeDeployCreateDeploymentConfigInput = { ... }
```

##### `deploymentConfigName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentConfigInput.property.deploymentConfigName"></a>

- *Type:* `string`

---

##### `computePlatform`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentConfigInput.property.computePlatform"></a>

- *Type:* `string`

---

##### `minimumHealthyHosts`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentConfigInput.property.minimumHealthyHosts"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployMinimumHealthyHosts`](#aws-cdk-sdk.codedeploy.CodeDeployMinimumHealthyHosts)

---

##### `trafficRoutingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentConfigInput.property.trafficRoutingConfig"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTrafficRoutingConfig`](#aws-cdk-sdk.codedeploy.CodeDeployTrafficRoutingConfig)

---

### CodeDeployCreateDeploymentConfigOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentConfigOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployCreateDeploymentConfigOutput: codedeploy.CodeDeployCreateDeploymentConfigOutput = { ... }
```

##### `deploymentConfigId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentConfigOutput.property.deploymentConfigId"></a>

- *Type:* `string`

---

### CodeDeployCreateDeploymentGroupInput <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployCreateDeploymentGroupInput: codedeploy.CodeDeployCreateDeploymentGroupInput = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput.property.applicationName"></a>

- *Type:* `string`

---

##### `deploymentGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput.property.deploymentGroupName"></a>

- *Type:* `string`

---

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `alarmConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput.property.alarmConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAlarmConfiguration`](#aws-cdk-sdk.codedeploy.CodeDeployAlarmConfiguration)

---

##### `autoRollbackConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput.property.autoRollbackConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAutoRollbackConfiguration`](#aws-cdk-sdk.codedeploy.CodeDeployAutoRollbackConfiguration)

---

##### `autoScalingGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput.property.autoScalingGroups"></a>

- *Type:* `string`[]

---

##### `blueGreenDeploymentConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput.property.blueGreenDeploymentConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBlueGreenDeploymentConfiguration`](#aws-cdk-sdk.codedeploy.CodeDeployBlueGreenDeploymentConfiguration)

---

##### `deploymentConfigName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput.property.deploymentConfigName"></a>

- *Type:* `string`

---

##### `deploymentStyle`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput.property.deploymentStyle"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeploymentStyle`](#aws-cdk-sdk.codedeploy.CodeDeployDeploymentStyle)

---

##### `ec2TagFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput.property.ec2TagFilters"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter`](#aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter)[]

---

##### `ec2TagSet`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput.property.ec2TagSet"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEc2TagSet`](#aws-cdk-sdk.codedeploy.CodeDeployEc2TagSet)

---

##### `ecsServices`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput.property.ecsServices"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEcsService`](#aws-cdk-sdk.codedeploy.CodeDeployEcsService)[]

---

##### `loadBalancerInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput.property.loadBalancerInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLoadBalancerInfo`](#aws-cdk-sdk.codedeploy.CodeDeployLoadBalancerInfo)

---

##### `onPremisesInstanceTagFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput.property.onPremisesInstanceTagFilters"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTagFilter`](#aws-cdk-sdk.codedeploy.CodeDeployTagFilter)[]

---

##### `onPremisesTagSet`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput.property.onPremisesTagSet"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployOnPremisesTagSet`](#aws-cdk-sdk.codedeploy.CodeDeployOnPremisesTagSet)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTag`](#aws-cdk-sdk.codedeploy.CodeDeployTag)[]

---

##### `triggerConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput.property.triggerConfigurations"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTriggerConfig`](#aws-cdk-sdk.codedeploy.CodeDeployTriggerConfig)[]

---

### CodeDeployCreateDeploymentGroupOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployCreateDeploymentGroupOutput: codedeploy.CodeDeployCreateDeploymentGroupOutput = { ... }
```

##### `deploymentGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupOutput.property.deploymentGroupId"></a>

- *Type:* `string`

---

### CodeDeployCreateDeploymentInput <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployCreateDeploymentInput: codedeploy.CodeDeployCreateDeploymentInput = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentInput.property.applicationName"></a>

- *Type:* `string`

---

##### `autoRollbackConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentInput.property.autoRollbackConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAutoRollbackConfiguration`](#aws-cdk-sdk.codedeploy.CodeDeployAutoRollbackConfiguration)

---

##### `deploymentConfigName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentInput.property.deploymentConfigName"></a>

- *Type:* `string`

---

##### `deploymentGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentInput.property.deploymentGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentInput.property.description"></a>

- *Type:* `string`

---

##### `fileExistsBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentInput.property.fileExistsBehavior"></a>

- *Type:* `string`

---

##### `ignoreApplicationStopFailures`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentInput.property.ignoreApplicationStopFailures"></a>

- *Type:* `boolean`

---

##### `revision`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentInput.property.revision"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation`](#aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation)

---

##### `targetInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentInput.property.targetInstances"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTargetInstances`](#aws-cdk-sdk.codedeploy.CodeDeployTargetInstances)

---

##### `updateOutdatedInstancesOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentInput.property.updateOutdatedInstancesOnly"></a>

- *Type:* `boolean`

---

### CodeDeployCreateDeploymentOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployCreateDeploymentOutput: codedeploy.CodeDeployCreateDeploymentOutput = { ... }
```

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentOutput.property.deploymentId"></a>

- *Type:* `string`

---

### CodeDeployDeleteApplicationInput <a name="aws-cdk-sdk.codedeploy.CodeDeployDeleteApplicationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployDeleteApplicationInput: codedeploy.CodeDeployDeleteApplicationInput = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeleteApplicationInput.property.applicationName"></a>

- *Type:* `string`

---

### CodeDeployDeleteDeploymentConfigInput <a name="aws-cdk-sdk.codedeploy.CodeDeployDeleteDeploymentConfigInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployDeleteDeploymentConfigInput: codedeploy.CodeDeployDeleteDeploymentConfigInput = { ... }
```

##### `deploymentConfigName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeleteDeploymentConfigInput.property.deploymentConfigName"></a>

- *Type:* `string`

---

### CodeDeployDeleteDeploymentGroupInput <a name="aws-cdk-sdk.codedeploy.CodeDeployDeleteDeploymentGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployDeleteDeploymentGroupInput: codedeploy.CodeDeployDeleteDeploymentGroupInput = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeleteDeploymentGroupInput.property.applicationName"></a>

- *Type:* `string`

---

##### `deploymentGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeleteDeploymentGroupInput.property.deploymentGroupName"></a>

- *Type:* `string`

---

### CodeDeployDeleteDeploymentGroupOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployDeleteDeploymentGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployDeleteDeploymentGroupOutput: codedeploy.CodeDeployDeleteDeploymentGroupOutput = { ... }
```

##### `hooksNotCleanedUp`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeleteDeploymentGroupOutput.property.hooksNotCleanedUp"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAutoScalingGroup`](#aws-cdk-sdk.codedeploy.CodeDeployAutoScalingGroup)[]

---

### CodeDeployDeleteGitHubAccountTokenInput <a name="aws-cdk-sdk.codedeploy.CodeDeployDeleteGitHubAccountTokenInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployDeleteGitHubAccountTokenInput: codedeploy.CodeDeployDeleteGitHubAccountTokenInput = { ... }
```

##### `tokenName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeleteGitHubAccountTokenInput.property.tokenName"></a>

- *Type:* `string`

---

### CodeDeployDeleteGitHubAccountTokenOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployDeleteGitHubAccountTokenOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployDeleteGitHubAccountTokenOutput: codedeploy.CodeDeployDeleteGitHubAccountTokenOutput = { ... }
```

##### `tokenName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeleteGitHubAccountTokenOutput.property.tokenName"></a>

- *Type:* `string`

---

### CodeDeployDeleteResourcesByExternalIdInput <a name="aws-cdk-sdk.codedeploy.CodeDeployDeleteResourcesByExternalIdInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployDeleteResourcesByExternalIdInput: codedeploy.CodeDeployDeleteResourcesByExternalIdInput = { ... }
```

##### `externalId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeleteResourcesByExternalIdInput.property.externalId"></a>

- *Type:* `string`

---

### CodeDeployDeleteResourcesByExternalIdOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployDeleteResourcesByExternalIdOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployDeleteResourcesByExternalIdOutput: codedeploy.CodeDeployDeleteResourcesByExternalIdOutput = { ... }
```

### CodeDeployDeploymentConfigInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentConfigInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployDeploymentConfigInfo: codedeploy.CodeDeployDeploymentConfigInfo = { ... }
```

##### `computePlatform`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentConfigInfo.property.computePlatform"></a>

- *Type:* `string`

---

##### `createTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentConfigInfo.property.createTime"></a>

- *Type:* `string`

---

##### `deploymentConfigId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentConfigInfo.property.deploymentConfigId"></a>

- *Type:* `string`

---

##### `deploymentConfigName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentConfigInfo.property.deploymentConfigName"></a>

- *Type:* `string`

---

##### `minimumHealthyHosts`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentConfigInfo.property.minimumHealthyHosts"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployMinimumHealthyHosts`](#aws-cdk-sdk.codedeploy.CodeDeployMinimumHealthyHosts)

---

##### `trafficRoutingConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentConfigInfo.property.trafficRoutingConfig"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTrafficRoutingConfig`](#aws-cdk-sdk.codedeploy.CodeDeployTrafficRoutingConfig)

---

### CodeDeployDeploymentGroupInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployDeploymentGroupInfo: codedeploy.CodeDeployDeploymentGroupInfo = { ... }
```

##### `alarmConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.alarmConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAlarmConfiguration`](#aws-cdk-sdk.codedeploy.CodeDeployAlarmConfiguration)

---

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.applicationName"></a>

- *Type:* `string`

---

##### `autoRollbackConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.autoRollbackConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAutoRollbackConfiguration`](#aws-cdk-sdk.codedeploy.CodeDeployAutoRollbackConfiguration)

---

##### `autoScalingGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.autoScalingGroups"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAutoScalingGroup`](#aws-cdk-sdk.codedeploy.CodeDeployAutoScalingGroup)[]

---

##### `blueGreenDeploymentConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.blueGreenDeploymentConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBlueGreenDeploymentConfiguration`](#aws-cdk-sdk.codedeploy.CodeDeployBlueGreenDeploymentConfiguration)

---

##### `computePlatform`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.computePlatform"></a>

- *Type:* `string`

---

##### `deploymentConfigName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.deploymentConfigName"></a>

- *Type:* `string`

---

##### `deploymentGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.deploymentGroupId"></a>

- *Type:* `string`

---

##### `deploymentGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.deploymentGroupName"></a>

- *Type:* `string`

---

##### `deploymentStyle`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.deploymentStyle"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeploymentStyle`](#aws-cdk-sdk.codedeploy.CodeDeployDeploymentStyle)

---

##### `ec2TagFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.ec2TagFilters"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter`](#aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter)[]

---

##### `ec2TagSet`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.ec2TagSet"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEc2TagSet`](#aws-cdk-sdk.codedeploy.CodeDeployEc2TagSet)

---

##### `ecsServices`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.ecsServices"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEcsService`](#aws-cdk-sdk.codedeploy.CodeDeployEcsService)[]

---

##### `lastAttemptedDeployment`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.lastAttemptedDeployment"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLastDeploymentInfo`](#aws-cdk-sdk.codedeploy.CodeDeployLastDeploymentInfo)

---

##### `lastSuccessfulDeployment`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.lastSuccessfulDeployment"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLastDeploymentInfo`](#aws-cdk-sdk.codedeploy.CodeDeployLastDeploymentInfo)

---

##### `loadBalancerInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.loadBalancerInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLoadBalancerInfo`](#aws-cdk-sdk.codedeploy.CodeDeployLoadBalancerInfo)

---

##### `onPremisesInstanceTagFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.onPremisesInstanceTagFilters"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTagFilter`](#aws-cdk-sdk.codedeploy.CodeDeployTagFilter)[]

---

##### `onPremisesTagSet`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.onPremisesTagSet"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployOnPremisesTagSet`](#aws-cdk-sdk.codedeploy.CodeDeployOnPremisesTagSet)

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `targetRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.targetRevision"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation`](#aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation)

---

##### `triggerConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo.property.triggerConfigurations"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTriggerConfig`](#aws-cdk-sdk.codedeploy.CodeDeployTriggerConfig)[]

---

### CodeDeployDeploymentInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployDeploymentInfo: codedeploy.CodeDeployDeploymentInfo = { ... }
```

##### `additionalDeploymentStatusInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.additionalDeploymentStatusInfo"></a>

- *Type:* `string`

---

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.applicationName"></a>

- *Type:* `string`

---

##### `autoRollbackConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.autoRollbackConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAutoRollbackConfiguration`](#aws-cdk-sdk.codedeploy.CodeDeployAutoRollbackConfiguration)

---

##### `blueGreenDeploymentConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.blueGreenDeploymentConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBlueGreenDeploymentConfiguration`](#aws-cdk-sdk.codedeploy.CodeDeployBlueGreenDeploymentConfiguration)

---

##### `completeTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.completeTime"></a>

- *Type:* `string`

---

##### `computePlatform`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.computePlatform"></a>

- *Type:* `string`

---

##### `createTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.createTime"></a>

- *Type:* `string`

---

##### `creator`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.creator"></a>

- *Type:* `string`

---

##### `deploymentConfigName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.deploymentConfigName"></a>

- *Type:* `string`

---

##### `deploymentGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.deploymentGroupName"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.deploymentId"></a>

- *Type:* `string`

---

##### `deploymentOverview`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.deploymentOverview"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeploymentOverview`](#aws-cdk-sdk.codedeploy.CodeDeployDeploymentOverview)

---

##### `deploymentStatusMessages`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.deploymentStatusMessages"></a>

- *Type:* `string`[]

---

##### `deploymentStyle`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.deploymentStyle"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeploymentStyle`](#aws-cdk-sdk.codedeploy.CodeDeployDeploymentStyle)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.description"></a>

- *Type:* `string`

---

##### `errorInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.errorInformation"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployErrorInformation`](#aws-cdk-sdk.codedeploy.CodeDeployErrorInformation)

---

##### `externalId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.externalId"></a>

- *Type:* `string`

---

##### `fileExistsBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.fileExistsBehavior"></a>

- *Type:* `string`

---

##### `ignoreApplicationStopFailures`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.ignoreApplicationStopFailures"></a>

- *Type:* `boolean`

---

##### `instanceTerminationWaitTimeStarted`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.instanceTerminationWaitTimeStarted"></a>

- *Type:* `boolean`

---

##### `loadBalancerInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.loadBalancerInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLoadBalancerInfo`](#aws-cdk-sdk.codedeploy.CodeDeployLoadBalancerInfo)

---

##### `previousRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.previousRevision"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation`](#aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation)

---

##### `revision`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.revision"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation`](#aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation)

---

##### `rollbackInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.rollbackInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRollbackInfo`](#aws-cdk-sdk.codedeploy.CodeDeployRollbackInfo)

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.status"></a>

- *Type:* `string`

---

##### `targetInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.targetInstances"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTargetInstances`](#aws-cdk-sdk.codedeploy.CodeDeployTargetInstances)

---

##### `updateOutdatedInstancesOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo.property.updateOutdatedInstancesOnly"></a>

- *Type:* `boolean`

---

### CodeDeployDeploymentOverview <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentOverview"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployDeploymentOverview: codedeploy.CodeDeployDeploymentOverview = { ... }
```

##### `failed`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentOverview.property.failed"></a>

- *Type:* `number`

---

##### `inProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentOverview.property.inProgress"></a>

- *Type:* `number`

---

##### `pending`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentOverview.property.pending"></a>

- *Type:* `number`

---

##### `ready`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentOverview.property.ready"></a>

- *Type:* `number`

---

##### `skipped`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentOverview.property.skipped"></a>

- *Type:* `number`

---

##### `succeeded`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentOverview.property.succeeded"></a>

- *Type:* `number`

---

### CodeDeployDeploymentReadyOption <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentReadyOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployDeploymentReadyOption: codedeploy.CodeDeployDeploymentReadyOption = { ... }
```

##### `actionOnTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentReadyOption.property.actionOnTimeout"></a>

- *Type:* `string`

---

##### `waitTimeInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentReadyOption.property.waitTimeInMinutes"></a>

- *Type:* `number`

---

### CodeDeployDeploymentStyle <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentStyle"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployDeploymentStyle: codedeploy.CodeDeployDeploymentStyle = { ... }
```

##### `deploymentOption`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentStyle.property.deploymentOption"></a>

- *Type:* `string`

---

##### `deploymentType`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentStyle.property.deploymentType"></a>

- *Type:* `string`

---

### CodeDeployDeploymentTarget <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployDeploymentTarget: codedeploy.CodeDeployDeploymentTarget = { ... }
```

##### `cloudFormationTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentTarget.property.cloudFormationTarget"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployCloudFormationTarget`](#aws-cdk-sdk.codedeploy.CodeDeployCloudFormationTarget)

---

##### `deploymentTargetType`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentTarget.property.deploymentTargetType"></a>

- *Type:* `string`

---

##### `ecsTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentTarget.property.ecsTarget"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEcsTarget`](#aws-cdk-sdk.codedeploy.CodeDeployEcsTarget)

---

##### `instanceTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentTarget.property.instanceTarget"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployInstanceTarget`](#aws-cdk-sdk.codedeploy.CodeDeployInstanceTarget)

---

##### `lambdaTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeploymentTarget.property.lambdaTarget"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLambdaTarget`](#aws-cdk-sdk.codedeploy.CodeDeployLambdaTarget)

---

### CodeDeployDeregisterOnPremisesInstanceInput <a name="aws-cdk-sdk.codedeploy.CodeDeployDeregisterOnPremisesInstanceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployDeregisterOnPremisesInstanceInput: codedeploy.CodeDeployDeregisterOnPremisesInstanceInput = { ... }
```

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDeregisterOnPremisesInstanceInput.property.instanceName"></a>

- *Type:* `string`

---

### CodeDeployDiagnostics <a name="aws-cdk-sdk.codedeploy.CodeDeployDiagnostics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployDiagnostics: codedeploy.CodeDeployDiagnostics = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDiagnostics.property.errorCode"></a>

- *Type:* `string`

---

##### `logTail`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDiagnostics.property.logTail"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDiagnostics.property.message"></a>

- *Type:* `string`

---

##### `scriptName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployDiagnostics.property.scriptName"></a>

- *Type:* `string`

---

### CodeDeployEc2TagFilter <a name="aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployEc2TagFilter: codedeploy.CodeDeployEc2TagFilter = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter.property.key"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter.property.value"></a>

- *Type:* `string`

---

### CodeDeployEc2TagSet <a name="aws-cdk-sdk.codedeploy.CodeDeployEc2TagSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployEc2TagSet: codedeploy.CodeDeployEc2TagSet = { ... }
```

##### `ec2TagSetList`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEc2TagSet.property.ec2TagSetList"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter`](#aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter)[][]

---

### CodeDeployEcsService <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployEcsService: codedeploy.CodeDeployEcsService = { ... }
```

##### `clusterName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsService.property.clusterName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsService.property.serviceName"></a>

- *Type:* `string`

---

### CodeDeployEcsTarget <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployEcsTarget: codedeploy.CodeDeployEcsTarget = { ... }
```

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsTarget.property.deploymentId"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsTarget.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `lifecycleEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsTarget.property.lifecycleEvents"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent`](#aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsTarget.property.status"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsTarget.property.targetArn"></a>

- *Type:* `string`

---

##### `targetId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsTarget.property.targetId"></a>

- *Type:* `string`

---

##### `taskSetsInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsTarget.property.taskSetsInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEcsTaskSet`](#aws-cdk-sdk.codedeploy.CodeDeployEcsTaskSet)[]

---

### CodeDeployEcsTaskSet <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsTaskSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployEcsTaskSet: codedeploy.CodeDeployEcsTaskSet = { ... }
```

##### `desiredCount`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsTaskSet.property.desiredCount"></a>

- *Type:* `number`

---

##### `identifer`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsTaskSet.property.identifer"></a>

- *Type:* `string`

---

##### `pendingCount`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsTaskSet.property.pendingCount"></a>

- *Type:* `number`

---

##### `runningCount`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsTaskSet.property.runningCount"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsTaskSet.property.status"></a>

- *Type:* `string`

---

##### `targetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsTaskSet.property.targetGroup"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTargetGroupInfo`](#aws-cdk-sdk.codedeploy.CodeDeployTargetGroupInfo)

---

##### `taskSetLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsTaskSet.property.taskSetLabel"></a>

- *Type:* `string`

---

##### `trafficWeight`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployEcsTaskSet.property.trafficWeight"></a>

- *Type:* `number`

---

### CodeDeployElbInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployElbInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployElbInfo: codedeploy.CodeDeployElbInfo = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployElbInfo.property.name"></a>

- *Type:* `string`

---

### CodeDeployErrorInformation <a name="aws-cdk-sdk.codedeploy.CodeDeployErrorInformation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployErrorInformation: codedeploy.CodeDeployErrorInformation = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployErrorInformation.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployErrorInformation.property.message"></a>

- *Type:* `string`

---

### CodeDeployGenericRevisionInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployGenericRevisionInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGenericRevisionInfo: codedeploy.CodeDeployGenericRevisionInfo = { ... }
```

##### `deploymentGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGenericRevisionInfo.property.deploymentGroups"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGenericRevisionInfo.property.description"></a>

- *Type:* `string`

---

##### `firstUsedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGenericRevisionInfo.property.firstUsedTime"></a>

- *Type:* `string`

---

##### `lastUsedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGenericRevisionInfo.property.lastUsedTime"></a>

- *Type:* `string`

---

##### `registerTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGenericRevisionInfo.property.registerTime"></a>

- *Type:* `string`

---

### CodeDeployGetApplicationInput <a name="aws-cdk-sdk.codedeploy.CodeDeployGetApplicationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGetApplicationInput: codedeploy.CodeDeployGetApplicationInput = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetApplicationInput.property.applicationName"></a>

- *Type:* `string`

---

### CodeDeployGetApplicationOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployGetApplicationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGetApplicationOutput: codedeploy.CodeDeployGetApplicationOutput = { ... }
```

##### `application`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetApplicationOutput.property.application"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployApplicationInfo`](#aws-cdk-sdk.codedeploy.CodeDeployApplicationInfo)

---

### CodeDeployGetApplicationRevisionInput <a name="aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGetApplicationRevisionInput: codedeploy.CodeDeployGetApplicationRevisionInput = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput.property.applicationName"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput.property.revision"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation`](#aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation)

---

### CodeDeployGetApplicationRevisionOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGetApplicationRevisionOutput: codedeploy.CodeDeployGetApplicationRevisionOutput = { ... }
```

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionOutput.property.applicationName"></a>

- *Type:* `string`

---

##### `revision`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionOutput.property.revision"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation`](#aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation)

---

##### `revisionInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionOutput.property.revisionInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGenericRevisionInfo`](#aws-cdk-sdk.codedeploy.CodeDeployGenericRevisionInfo)

---

### CodeDeployGetDeploymentConfigInput <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGetDeploymentConfigInput: codedeploy.CodeDeployGetDeploymentConfigInput = { ... }
```

##### `deploymentConfigName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigInput.property.deploymentConfigName"></a>

- *Type:* `string`

---

### CodeDeployGetDeploymentConfigOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGetDeploymentConfigOutput: codedeploy.CodeDeployGetDeploymentConfigOutput = { ... }
```

##### `deploymentConfigInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigOutput.property.deploymentConfigInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeploymentConfigInfo`](#aws-cdk-sdk.codedeploy.CodeDeployDeploymentConfigInfo)

---

### CodeDeployGetDeploymentGroupInput <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGetDeploymentGroupInput: codedeploy.CodeDeployGetDeploymentGroupInput = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput.property.applicationName"></a>

- *Type:* `string`

---

##### `deploymentGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput.property.deploymentGroupName"></a>

- *Type:* `string`

---

### CodeDeployGetDeploymentGroupOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGetDeploymentGroupOutput: codedeploy.CodeDeployGetDeploymentGroupOutput = { ... }
```

##### `deploymentGroupInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupOutput.property.deploymentGroupInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo`](#aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo)

---

### CodeDeployGetDeploymentInput <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGetDeploymentInput: codedeploy.CodeDeployGetDeploymentInput = { ... }
```

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput.property.deploymentId"></a>

- *Type:* `string`

---

### CodeDeployGetDeploymentInstanceInput <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInstanceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGetDeploymentInstanceInput: codedeploy.CodeDeployGetDeploymentInstanceInput = { ... }
```

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInstanceInput.property.deploymentId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInstanceInput.property.instanceId"></a>

- *Type:* `string`

---

### CodeDeployGetDeploymentInstanceOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInstanceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGetDeploymentInstanceOutput: codedeploy.CodeDeployGetDeploymentInstanceOutput = { ... }
```

##### `instanceSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInstanceOutput.property.instanceSummary"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployInstanceSummary`](#aws-cdk-sdk.codedeploy.CodeDeployInstanceSummary)

---

### CodeDeployGetDeploymentOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGetDeploymentOutput: codedeploy.CodeDeployGetDeploymentOutput = { ... }
```

##### `deploymentInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentOutput.property.deploymentInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo`](#aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo)

---

### CodeDeployGetDeploymentTargetInput <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGetDeploymentTargetInput: codedeploy.CodeDeployGetDeploymentTargetInput = { ... }
```

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput.property.deploymentId"></a>

- *Type:* `string`

---

##### `targetId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput.property.targetId"></a>

- *Type:* `string`

---

### CodeDeployGetDeploymentTargetOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGetDeploymentTargetOutput: codedeploy.CodeDeployGetDeploymentTargetOutput = { ... }
```

##### `deploymentTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetOutput.property.deploymentTarget"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeploymentTarget`](#aws-cdk-sdk.codedeploy.CodeDeployDeploymentTarget)

---

### CodeDeployGetOnPremisesInstanceInput <a name="aws-cdk-sdk.codedeploy.CodeDeployGetOnPremisesInstanceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGetOnPremisesInstanceInput: codedeploy.CodeDeployGetOnPremisesInstanceInput = { ... }
```

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetOnPremisesInstanceInput.property.instanceName"></a>

- *Type:* `string`

---

### CodeDeployGetOnPremisesInstanceOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployGetOnPremisesInstanceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGetOnPremisesInstanceOutput: codedeploy.CodeDeployGetOnPremisesInstanceOutput = { ... }
```

##### `instanceInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGetOnPremisesInstanceOutput.property.instanceInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployInstanceInfo`](#aws-cdk-sdk.codedeploy.CodeDeployInstanceInfo)

---

### CodeDeployGitHubLocation <a name="aws-cdk-sdk.codedeploy.CodeDeployGitHubLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGitHubLocation: codedeploy.CodeDeployGitHubLocation = { ... }
```

##### `commitId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGitHubLocation.property.commitId"></a>

- *Type:* `string`

---

##### `repository`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGitHubLocation.property.repository"></a>

- *Type:* `string`

---

### CodeDeployGreenFleetProvisioningOption <a name="aws-cdk-sdk.codedeploy.CodeDeployGreenFleetProvisioningOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployGreenFleetProvisioningOption: codedeploy.CodeDeployGreenFleetProvisioningOption = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployGreenFleetProvisioningOption.property.action"></a>

- *Type:* `string`

---

### CodeDeployInstanceInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployInstanceInfo: codedeploy.CodeDeployInstanceInfo = { ... }
```

##### `deregisterTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceInfo.property.deregisterTime"></a>

- *Type:* `string`

---

##### `iamSessionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceInfo.property.iamSessionArn"></a>

- *Type:* `string`

---

##### `iamUserArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceInfo.property.iamUserArn"></a>

- *Type:* `string`

---

##### `instanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceInfo.property.instanceArn"></a>

- *Type:* `string`

---

##### `instanceName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceInfo.property.instanceName"></a>

- *Type:* `string`

---

##### `registerTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceInfo.property.registerTime"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceInfo.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTag`](#aws-cdk-sdk.codedeploy.CodeDeployTag)[]

---

### CodeDeployInstanceSummary <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployInstanceSummary: codedeploy.CodeDeployInstanceSummary = { ... }
```

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceSummary.property.deploymentId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceSummary.property.instanceId"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceSummary.property.instanceType"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceSummary.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `lifecycleEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceSummary.property.lifecycleEvents"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent`](#aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceSummary.property.status"></a>

- *Type:* `string`

---

### CodeDeployInstanceTarget <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployInstanceTarget: codedeploy.CodeDeployInstanceTarget = { ... }
```

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceTarget.property.deploymentId"></a>

- *Type:* `string`

---

##### `instanceLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceTarget.property.instanceLabel"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceTarget.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `lifecycleEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceTarget.property.lifecycleEvents"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent`](#aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceTarget.property.status"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceTarget.property.targetArn"></a>

- *Type:* `string`

---

##### `targetId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployInstanceTarget.property.targetId"></a>

- *Type:* `string`

---

### CodeDeployLambdaFunctionInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployLambdaFunctionInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployLambdaFunctionInfo: codedeploy.CodeDeployLambdaFunctionInfo = { ... }
```

##### `currentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLambdaFunctionInfo.property.currentVersion"></a>

- *Type:* `string`

---

##### `functionAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLambdaFunctionInfo.property.functionAlias"></a>

- *Type:* `string`

---

##### `functionName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLambdaFunctionInfo.property.functionName"></a>

- *Type:* `string`

---

##### `targetVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLambdaFunctionInfo.property.targetVersion"></a>

- *Type:* `string`

---

##### `targetVersionWeight`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLambdaFunctionInfo.property.targetVersionWeight"></a>

- *Type:* `number`

---

### CodeDeployLambdaTarget <a name="aws-cdk-sdk.codedeploy.CodeDeployLambdaTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployLambdaTarget: codedeploy.CodeDeployLambdaTarget = { ... }
```

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLambdaTarget.property.deploymentId"></a>

- *Type:* `string`

---

##### `lambdaFunctionInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLambdaTarget.property.lambdaFunctionInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLambdaFunctionInfo`](#aws-cdk-sdk.codedeploy.CodeDeployLambdaFunctionInfo)

---

##### `lastUpdatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLambdaTarget.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `lifecycleEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLambdaTarget.property.lifecycleEvents"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent`](#aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLambdaTarget.property.status"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLambdaTarget.property.targetArn"></a>

- *Type:* `string`

---

##### `targetId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLambdaTarget.property.targetId"></a>

- *Type:* `string`

---

### CodeDeployLastDeploymentInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployLastDeploymentInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployLastDeploymentInfo: codedeploy.CodeDeployLastDeploymentInfo = { ... }
```

##### `createTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLastDeploymentInfo.property.createTime"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLastDeploymentInfo.property.deploymentId"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLastDeploymentInfo.property.endTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLastDeploymentInfo.property.status"></a>

- *Type:* `string`

---

### CodeDeployLifecycleEvent <a name="aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployLifecycleEvent: codedeploy.CodeDeployLifecycleEvent = { ... }
```

##### `diagnostics`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent.property.diagnostics"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDiagnostics`](#aws-cdk-sdk.codedeploy.CodeDeployDiagnostics)

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent.property.endTime"></a>

- *Type:* `string`

---

##### `lifecycleEventName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent.property.lifecycleEventName"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent.property.status"></a>

- *Type:* `string`

---

### CodeDeployListApplicationRevisionsInput <a name="aws-cdk-sdk.codedeploy.CodeDeployListApplicationRevisionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListApplicationRevisionsInput: codedeploy.CodeDeployListApplicationRevisionsInput = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListApplicationRevisionsInput.property.applicationName"></a>

- *Type:* `string`

---

##### `deployed`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListApplicationRevisionsInput.property.deployed"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListApplicationRevisionsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListApplicationRevisionsInput.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListApplicationRevisionsInput.property.s3KeyPrefix"></a>

- *Type:* `string`

---

##### `sortBy`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListApplicationRevisionsInput.property.sortBy"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListApplicationRevisionsInput.property.sortOrder"></a>

- *Type:* `string`

---

### CodeDeployListApplicationRevisionsOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployListApplicationRevisionsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListApplicationRevisionsOutput: codedeploy.CodeDeployListApplicationRevisionsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListApplicationRevisionsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `revisions`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListApplicationRevisionsOutput.property.revisions"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation`](#aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation)[]

---

### CodeDeployListApplicationsInput <a name="aws-cdk-sdk.codedeploy.CodeDeployListApplicationsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListApplicationsInput: codedeploy.CodeDeployListApplicationsInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListApplicationsInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeDeployListApplicationsOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployListApplicationsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListApplicationsOutput: codedeploy.CodeDeployListApplicationsOutput = { ... }
```

##### `applications`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListApplicationsOutput.property.applications"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListApplicationsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeDeployListDeploymentConfigsInput <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentConfigsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListDeploymentConfigsInput: codedeploy.CodeDeployListDeploymentConfigsInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentConfigsInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeDeployListDeploymentConfigsOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentConfigsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListDeploymentConfigsOutput: codedeploy.CodeDeployListDeploymentConfigsOutput = { ... }
```

##### `deploymentConfigsList`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentConfigsOutput.property.deploymentConfigsList"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentConfigsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeDeployListDeploymentGroupsInput <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentGroupsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListDeploymentGroupsInput: codedeploy.CodeDeployListDeploymentGroupsInput = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentGroupsInput.property.applicationName"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentGroupsInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeDeployListDeploymentGroupsOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentGroupsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListDeploymentGroupsOutput: codedeploy.CodeDeployListDeploymentGroupsOutput = { ... }
```

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentGroupsOutput.property.applicationName"></a>

- *Type:* `string`

---

##### `deploymentGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentGroupsOutput.property.deploymentGroups"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentGroupsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeDeployListDeploymentInstancesInput <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentInstancesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListDeploymentInstancesInput: codedeploy.CodeDeployListDeploymentInstancesInput = { ... }
```

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentInstancesInput.property.deploymentId"></a>

- *Type:* `string`

---

##### `instanceStatusFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentInstancesInput.property.instanceStatusFilter"></a>

- *Type:* `string`[]

---

##### `instanceTypeFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentInstancesInput.property.instanceTypeFilter"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentInstancesInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeDeployListDeploymentInstancesOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentInstancesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListDeploymentInstancesOutput: codedeploy.CodeDeployListDeploymentInstancesOutput = { ... }
```

##### `instancesList`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentInstancesOutput.property.instancesList"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentInstancesOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeDeployListDeploymentsInput <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListDeploymentsInput: codedeploy.CodeDeployListDeploymentsInput = { ... }
```

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentsInput.property.applicationName"></a>

- *Type:* `string`

---

##### `createTimeRange`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentsInput.property.createTimeRange"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTimeRange`](#aws-cdk-sdk.codedeploy.CodeDeployTimeRange)

---

##### `deploymentGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentsInput.property.deploymentGroupName"></a>

- *Type:* `string`

---

##### `externalId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentsInput.property.externalId"></a>

- *Type:* `string`

---

##### `includeOnlyStatuses`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentsInput.property.includeOnlyStatuses"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentsInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeDeployListDeploymentsOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListDeploymentsOutput: codedeploy.CodeDeployListDeploymentsOutput = { ... }
```

##### `deployments`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentsOutput.property.deployments"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentsOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeDeployListDeploymentTargetsInput <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentTargetsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListDeploymentTargetsInput: codedeploy.CodeDeployListDeploymentTargetsInput = { ... }
```

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentTargetsInput.property.deploymentId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentTargetsInput.property.nextToken"></a>

- *Type:* `string`

---

##### `targetFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentTargetsInput.property.targetFilters"></a>

- *Type:* {[ key: string ]: `string`[]}

---

### CodeDeployListDeploymentTargetsOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentTargetsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListDeploymentTargetsOutput: codedeploy.CodeDeployListDeploymentTargetsOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentTargetsOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `targetIds`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListDeploymentTargetsOutput.property.targetIds"></a>

- *Type:* `string`[]

---

### CodeDeployListGitHubAccountTokenNamesInput <a name="aws-cdk-sdk.codedeploy.CodeDeployListGitHubAccountTokenNamesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListGitHubAccountTokenNamesInput: codedeploy.CodeDeployListGitHubAccountTokenNamesInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListGitHubAccountTokenNamesInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeDeployListGitHubAccountTokenNamesOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployListGitHubAccountTokenNamesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListGitHubAccountTokenNamesOutput: codedeploy.CodeDeployListGitHubAccountTokenNamesOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListGitHubAccountTokenNamesOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `tokenNameList`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListGitHubAccountTokenNamesOutput.property.tokenNameList"></a>

- *Type:* `string`[]

---

### CodeDeployListOnPremisesInstancesInput <a name="aws-cdk-sdk.codedeploy.CodeDeployListOnPremisesInstancesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListOnPremisesInstancesInput: codedeploy.CodeDeployListOnPremisesInstancesInput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListOnPremisesInstancesInput.property.nextToken"></a>

- *Type:* `string`

---

##### `registrationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListOnPremisesInstancesInput.property.registrationStatus"></a>

- *Type:* `string`

---

##### `tagFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListOnPremisesInstancesInput.property.tagFilters"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTagFilter`](#aws-cdk-sdk.codedeploy.CodeDeployTagFilter)[]

---

### CodeDeployListOnPremisesInstancesOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployListOnPremisesInstancesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListOnPremisesInstancesOutput: codedeploy.CodeDeployListOnPremisesInstancesOutput = { ... }
```

##### `instanceNames`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListOnPremisesInstancesOutput.property.instanceNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListOnPremisesInstancesOutput.property.nextToken"></a>

- *Type:* `string`

---

### CodeDeployListTagsForResourceInput <a name="aws-cdk-sdk.codedeploy.CodeDeployListTagsForResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListTagsForResourceInput: codedeploy.CodeDeployListTagsForResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListTagsForResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListTagsForResourceInput.property.nextToken"></a>

- *Type:* `string`

---

### CodeDeployListTagsForResourceOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployListTagsForResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployListTagsForResourceOutput: codedeploy.CodeDeployListTagsForResourceOutput = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListTagsForResourceOutput.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployListTagsForResourceOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTag`](#aws-cdk-sdk.codedeploy.CodeDeployTag)[]

---

### CodeDeployLoadBalancerInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployLoadBalancerInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployLoadBalancerInfo: codedeploy.CodeDeployLoadBalancerInfo = { ... }
```

##### `elbInfoList`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLoadBalancerInfo.property.elbInfoList"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployElbInfo`](#aws-cdk-sdk.codedeploy.CodeDeployElbInfo)[]

---

##### `targetGroupInfoList`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLoadBalancerInfo.property.targetGroupInfoList"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTargetGroupInfo`](#aws-cdk-sdk.codedeploy.CodeDeployTargetGroupInfo)[]

---

##### `targetGroupPairInfoList`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployLoadBalancerInfo.property.targetGroupPairInfoList"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTargetGroupPairInfo`](#aws-cdk-sdk.codedeploy.CodeDeployTargetGroupPairInfo)[]

---

### CodeDeployMinimumHealthyHosts <a name="aws-cdk-sdk.codedeploy.CodeDeployMinimumHealthyHosts"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployMinimumHealthyHosts: codedeploy.CodeDeployMinimumHealthyHosts = { ... }
```

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployMinimumHealthyHosts.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployMinimumHealthyHosts.property.value"></a>

- *Type:* `number`

---

### CodeDeployOnPremisesTagSet <a name="aws-cdk-sdk.codedeploy.CodeDeployOnPremisesTagSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployOnPremisesTagSet: codedeploy.CodeDeployOnPremisesTagSet = { ... }
```

##### `onPremisesTagSetList`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployOnPremisesTagSet.property.onPremisesTagSetList"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTagFilter`](#aws-cdk-sdk.codedeploy.CodeDeployTagFilter)[][]

---

### CodeDeployPutLifecycleEventHookExecutionStatusInput <a name="aws-cdk-sdk.codedeploy.CodeDeployPutLifecycleEventHookExecutionStatusInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployPutLifecycleEventHookExecutionStatusInput: codedeploy.CodeDeployPutLifecycleEventHookExecutionStatusInput = { ... }
```

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployPutLifecycleEventHookExecutionStatusInput.property.deploymentId"></a>

- *Type:* `string`

---

##### `lifecycleEventHookExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployPutLifecycleEventHookExecutionStatusInput.property.lifecycleEventHookExecutionId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployPutLifecycleEventHookExecutionStatusInput.property.status"></a>

- *Type:* `string`

---

### CodeDeployPutLifecycleEventHookExecutionStatusOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployPutLifecycleEventHookExecutionStatusOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployPutLifecycleEventHookExecutionStatusOutput: codedeploy.CodeDeployPutLifecycleEventHookExecutionStatusOutput = { ... }
```

##### `lifecycleEventHookExecutionId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployPutLifecycleEventHookExecutionStatusOutput.property.lifecycleEventHookExecutionId"></a>

- *Type:* `string`

---

### CodeDeployRawString <a name="aws-cdk-sdk.codedeploy.CodeDeployRawString"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployRawString: codedeploy.CodeDeployRawString = { ... }
```

##### `content`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRawString.property.content"></a>

- *Type:* `string`

---

##### `sha256`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRawString.property.sha256"></a>

- *Type:* `string`

---

### CodeDeployRegisterApplicationRevisionInput <a name="aws-cdk-sdk.codedeploy.CodeDeployRegisterApplicationRevisionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployRegisterApplicationRevisionInput: codedeploy.CodeDeployRegisterApplicationRevisionInput = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRegisterApplicationRevisionInput.property.applicationName"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRegisterApplicationRevisionInput.property.revision"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation`](#aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRegisterApplicationRevisionInput.property.description"></a>

- *Type:* `string`

---

### CodeDeployRegisterOnPremisesInstanceInput <a name="aws-cdk-sdk.codedeploy.CodeDeployRegisterOnPremisesInstanceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployRegisterOnPremisesInstanceInput: codedeploy.CodeDeployRegisterOnPremisesInstanceInput = { ... }
```

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRegisterOnPremisesInstanceInput.property.instanceName"></a>

- *Type:* `string`

---

##### `iamSessionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRegisterOnPremisesInstanceInput.property.iamSessionArn"></a>

- *Type:* `string`

---

##### `iamUserArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRegisterOnPremisesInstanceInput.property.iamUserArn"></a>

- *Type:* `string`

---

### CodeDeployRemoveTagsFromOnPremisesInstancesInput <a name="aws-cdk-sdk.codedeploy.CodeDeployRemoveTagsFromOnPremisesInstancesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployRemoveTagsFromOnPremisesInstancesInput: codedeploy.CodeDeployRemoveTagsFromOnPremisesInstancesInput = { ... }
```

##### `instanceNames`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRemoveTagsFromOnPremisesInstancesInput.property.instanceNames"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRemoveTagsFromOnPremisesInstancesInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTag`](#aws-cdk-sdk.codedeploy.CodeDeployTag)[]

---

### CodeDeployRevisionInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployRevisionInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployRevisionInfo: codedeploy.CodeDeployRevisionInfo = { ... }
```

##### `genericRevisionInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRevisionInfo.property.genericRevisionInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGenericRevisionInfo`](#aws-cdk-sdk.codedeploy.CodeDeployGenericRevisionInfo)

---

##### `revisionLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRevisionInfo.property.revisionLocation"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation`](#aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation)

---

### CodeDeployRevisionLocation <a name="aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployRevisionLocation: codedeploy.CodeDeployRevisionLocation = { ... }
```

##### `appSpecContent`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation.property.appSpecContent"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAppSpecContent`](#aws-cdk-sdk.codedeploy.CodeDeployAppSpecContent)

---

##### `gitHubLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation.property.gitHubLocation"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGitHubLocation`](#aws-cdk-sdk.codedeploy.CodeDeployGitHubLocation)

---

##### `revisionType`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation.property.revisionType"></a>

- *Type:* `string`

---

##### `s3Location`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployS3Location`](#aws-cdk-sdk.codedeploy.CodeDeployS3Location)

---

##### `string`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation.property.string"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRawString`](#aws-cdk-sdk.codedeploy.CodeDeployRawString)

---

### CodeDeployRollbackInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployRollbackInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployRollbackInfo: codedeploy.CodeDeployRollbackInfo = { ... }
```

##### `rollbackDeploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRollbackInfo.property.rollbackDeploymentId"></a>

- *Type:* `string`

---

##### `rollbackMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRollbackInfo.property.rollbackMessage"></a>

- *Type:* `string`

---

##### `rollbackTriggeringDeploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployRollbackInfo.property.rollbackTriggeringDeploymentId"></a>

- *Type:* `string`

---

### CodeDeployS3Location <a name="aws-cdk-sdk.codedeploy.CodeDeployS3Location"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployS3Location: codedeploy.CodeDeployS3Location = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployS3Location.property.bucket"></a>

- *Type:* `string`

---

##### `bundleType`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployS3Location.property.bundleType"></a>

- *Type:* `string`

---

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployS3Location.property.eTag"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployS3Location.property.key"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployS3Location.property.version"></a>

- *Type:* `string`

---

### CodeDeploySkipWaitTimeForInstanceTerminationInput <a name="aws-cdk-sdk.codedeploy.CodeDeploySkipWaitTimeForInstanceTerminationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeploySkipWaitTimeForInstanceTerminationInput: codedeploy.CodeDeploySkipWaitTimeForInstanceTerminationInput = { ... }
```

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeploySkipWaitTimeForInstanceTerminationInput.property.deploymentId"></a>

- *Type:* `string`

---

### CodeDeployStopDeploymentInput <a name="aws-cdk-sdk.codedeploy.CodeDeployStopDeploymentInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployStopDeploymentInput: codedeploy.CodeDeployStopDeploymentInput = { ... }
```

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployStopDeploymentInput.property.deploymentId"></a>

- *Type:* `string`

---

##### `autoRollbackEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployStopDeploymentInput.property.autoRollbackEnabled"></a>

- *Type:* `boolean`

---

### CodeDeployStopDeploymentOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployStopDeploymentOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployStopDeploymentOutput: codedeploy.CodeDeployStopDeploymentOutput = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployStopDeploymentOutput.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployStopDeploymentOutput.property.statusMessage"></a>

- *Type:* `string`

---

### CodeDeployTag <a name="aws-cdk-sdk.codedeploy.CodeDeployTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployTag: codedeploy.CodeDeployTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTag.property.value"></a>

- *Type:* `string`

---

### CodeDeployTagFilter <a name="aws-cdk-sdk.codedeploy.CodeDeployTagFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployTagFilter: codedeploy.CodeDeployTagFilter = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTagFilter.property.key"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTagFilter.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTagFilter.property.value"></a>

- *Type:* `string`

---

### CodeDeployTagResourceInput <a name="aws-cdk-sdk.codedeploy.CodeDeployTagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployTagResourceInput: codedeploy.CodeDeployTagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTagResourceInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTag`](#aws-cdk-sdk.codedeploy.CodeDeployTag)[]

---

### CodeDeployTagResourceOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployTagResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployTagResourceOutput: codedeploy.CodeDeployTagResourceOutput = { ... }
```

### CodeDeployTargetGroupInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployTargetGroupInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployTargetGroupInfo: codedeploy.CodeDeployTargetGroupInfo = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTargetGroupInfo.property.name"></a>

- *Type:* `string`

---

### CodeDeployTargetGroupPairInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployTargetGroupPairInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployTargetGroupPairInfo: codedeploy.CodeDeployTargetGroupPairInfo = { ... }
```

##### `prodTrafficRoute`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTargetGroupPairInfo.property.prodTrafficRoute"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTrafficRoute`](#aws-cdk-sdk.codedeploy.CodeDeployTrafficRoute)

---

##### `targetGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTargetGroupPairInfo.property.targetGroups"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTargetGroupInfo`](#aws-cdk-sdk.codedeploy.CodeDeployTargetGroupInfo)[]

---

##### `testTrafficRoute`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTargetGroupPairInfo.property.testTrafficRoute"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTrafficRoute`](#aws-cdk-sdk.codedeploy.CodeDeployTrafficRoute)

---

### CodeDeployTargetInstances <a name="aws-cdk-sdk.codedeploy.CodeDeployTargetInstances"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployTargetInstances: codedeploy.CodeDeployTargetInstances = { ... }
```

##### `autoScalingGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTargetInstances.property.autoScalingGroups"></a>

- *Type:* `string`[]

---

##### `ec2TagSet`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTargetInstances.property.ec2TagSet"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEc2TagSet`](#aws-cdk-sdk.codedeploy.CodeDeployEc2TagSet)

---

##### `tagFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTargetInstances.property.tagFilters"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter`](#aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter)[]

---

### CodeDeployTimeBasedCanary <a name="aws-cdk-sdk.codedeploy.CodeDeployTimeBasedCanary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployTimeBasedCanary: codedeploy.CodeDeployTimeBasedCanary = { ... }
```

##### `canaryInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTimeBasedCanary.property.canaryInterval"></a>

- *Type:* `number`

---

##### `canaryPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTimeBasedCanary.property.canaryPercentage"></a>

- *Type:* `number`

---

### CodeDeployTimeBasedLinear <a name="aws-cdk-sdk.codedeploy.CodeDeployTimeBasedLinear"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployTimeBasedLinear: codedeploy.CodeDeployTimeBasedLinear = { ... }
```

##### `linearInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTimeBasedLinear.property.linearInterval"></a>

- *Type:* `number`

---

##### `linearPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTimeBasedLinear.property.linearPercentage"></a>

- *Type:* `number`

---

### CodeDeployTimeRange <a name="aws-cdk-sdk.codedeploy.CodeDeployTimeRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployTimeRange: codedeploy.CodeDeployTimeRange = { ... }
```

##### `end`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTimeRange.property.end"></a>

- *Type:* `string`

---

##### `start`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTimeRange.property.start"></a>

- *Type:* `string`

---

### CodeDeployTrafficRoute <a name="aws-cdk-sdk.codedeploy.CodeDeployTrafficRoute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployTrafficRoute: codedeploy.CodeDeployTrafficRoute = { ... }
```

##### `listenerArns`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTrafficRoute.property.listenerArns"></a>

- *Type:* `string`[]

---

### CodeDeployTrafficRoutingConfig <a name="aws-cdk-sdk.codedeploy.CodeDeployTrafficRoutingConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployTrafficRoutingConfig: codedeploy.CodeDeployTrafficRoutingConfig = { ... }
```

##### `timeBasedCanary`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTrafficRoutingConfig.property.timeBasedCanary"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTimeBasedCanary`](#aws-cdk-sdk.codedeploy.CodeDeployTimeBasedCanary)

---

##### `timeBasedLinear`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTrafficRoutingConfig.property.timeBasedLinear"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTimeBasedLinear`](#aws-cdk-sdk.codedeploy.CodeDeployTimeBasedLinear)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTrafficRoutingConfig.property.type"></a>

- *Type:* `string`

---

### CodeDeployTriggerConfig <a name="aws-cdk-sdk.codedeploy.CodeDeployTriggerConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployTriggerConfig: codedeploy.CodeDeployTriggerConfig = { ... }
```

##### `triggerEvents`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTriggerConfig.property.triggerEvents"></a>

- *Type:* `string`[]

---

##### `triggerName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTriggerConfig.property.triggerName"></a>

- *Type:* `string`

---

##### `triggerTargetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployTriggerConfig.property.triggerTargetArn"></a>

- *Type:* `string`

---

### CodeDeployUntagResourceInput <a name="aws-cdk-sdk.codedeploy.CodeDeployUntagResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployUntagResourceInput: codedeploy.CodeDeployUntagResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUntagResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUntagResourceInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### CodeDeployUntagResourceOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployUntagResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployUntagResourceOutput: codedeploy.CodeDeployUntagResourceOutput = { ... }
```

### CodeDeployUpdateApplicationInput <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateApplicationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployUpdateApplicationInput: codedeploy.CodeDeployUpdateApplicationInput = { ... }
```

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateApplicationInput.property.applicationName"></a>

- *Type:* `string`

---

##### `newApplicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateApplicationInput.property.newApplicationName"></a>

- *Type:* `string`

---

### CodeDeployUpdateDeploymentGroupInput <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployUpdateDeploymentGroupInput: codedeploy.CodeDeployUpdateDeploymentGroupInput = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput.property.applicationName"></a>

- *Type:* `string`

---

##### `currentDeploymentGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput.property.currentDeploymentGroupName"></a>

- *Type:* `string`

---

##### `alarmConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput.property.alarmConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAlarmConfiguration`](#aws-cdk-sdk.codedeploy.CodeDeployAlarmConfiguration)

---

##### `autoRollbackConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput.property.autoRollbackConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAutoRollbackConfiguration`](#aws-cdk-sdk.codedeploy.CodeDeployAutoRollbackConfiguration)

---

##### `autoScalingGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput.property.autoScalingGroups"></a>

- *Type:* `string`[]

---

##### `blueGreenDeploymentConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput.property.blueGreenDeploymentConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBlueGreenDeploymentConfiguration`](#aws-cdk-sdk.codedeploy.CodeDeployBlueGreenDeploymentConfiguration)

---

##### `deploymentConfigName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput.property.deploymentConfigName"></a>

- *Type:* `string`

---

##### `deploymentStyle`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput.property.deploymentStyle"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeploymentStyle`](#aws-cdk-sdk.codedeploy.CodeDeployDeploymentStyle)

---

##### `ec2TagFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput.property.ec2TagFilters"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter`](#aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter)[]

---

##### `ec2TagSet`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput.property.ec2TagSet"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEc2TagSet`](#aws-cdk-sdk.codedeploy.CodeDeployEc2TagSet)

---

##### `ecsServices`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput.property.ecsServices"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEcsService`](#aws-cdk-sdk.codedeploy.CodeDeployEcsService)[]

---

##### `loadBalancerInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput.property.loadBalancerInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLoadBalancerInfo`](#aws-cdk-sdk.codedeploy.CodeDeployLoadBalancerInfo)

---

##### `newDeploymentGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput.property.newDeploymentGroupName"></a>

- *Type:* `string`

---

##### `onPremisesInstanceTagFilters`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput.property.onPremisesInstanceTagFilters"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTagFilter`](#aws-cdk-sdk.codedeploy.CodeDeployTagFilter)[]

---

##### `onPremisesTagSet`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput.property.onPremisesTagSet"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployOnPremisesTagSet`](#aws-cdk-sdk.codedeploy.CodeDeployOnPremisesTagSet)

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `triggerConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput.property.triggerConfigurations"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTriggerConfig`](#aws-cdk-sdk.codedeploy.CodeDeployTriggerConfig)[]

---

### CodeDeployUpdateDeploymentGroupOutput <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

const codeDeployUpdateDeploymentGroupOutput: codedeploy.CodeDeployUpdateDeploymentGroupOutput = { ... }
```

##### `hooksNotCleanedUp`<sup>Optional</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupOutput.property.hooksNotCleanedUp"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAutoScalingGroup`](#aws-cdk-sdk.codedeploy.CodeDeployAutoScalingGroup)[]

---

## Classes <a name="Classes"></a>

### CodeDeployResponsesBatchGetApplicationRevisions <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetApplicationRevisions"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetApplicationRevisions.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesBatchGetApplicationRevisions(__scope: Construct, __resources: string[], __input: CodeDeployBatchGetApplicationRevisionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetApplicationRevisions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetApplicationRevisions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetApplicationRevisions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationRevisionsInput`](#aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationRevisionsInput)

---



#### Properties <a name="Properties"></a>

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetApplicationRevisions.property.applicationName"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetApplicationRevisions.property.errorMessage"></a>

- *Type:* `string`

---

##### `revisions`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetApplicationRevisions.property.revisions"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRevisionInfo`](#aws-cdk-sdk.codedeploy.CodeDeployRevisionInfo)[]

---


### CodeDeployResponsesBatchGetApplications <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetApplications"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetApplications.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesBatchGetApplications(__scope: Construct, __resources: string[], __input: CodeDeployBatchGetApplicationsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetApplications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetApplications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetApplications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationsInput`](#aws-cdk-sdk.codedeploy.CodeDeployBatchGetApplicationsInput)

---



#### Properties <a name="Properties"></a>

##### `applicationsInfo`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetApplications.property.applicationsInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployApplicationInfo`](#aws-cdk-sdk.codedeploy.CodeDeployApplicationInfo)[]

---


### CodeDeployResponsesBatchGetDeploymentGroups <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentGroups"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentGroups.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesBatchGetDeploymentGroups(__scope: Construct, __resources: string[], __input: CodeDeployBatchGetDeploymentGroupsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentGroupsInput`](#aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentGroupsInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentGroupsInfo`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentGroups.property.deploymentGroupsInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo`](#aws-cdk-sdk.codedeploy.CodeDeployDeploymentGroupInfo)[]

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentGroups.property.errorMessage"></a>

- *Type:* `string`

---


### CodeDeployResponsesBatchGetDeploymentInstances <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentInstances"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentInstances.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesBatchGetDeploymentInstances(__scope: Construct, __resources: string[], __input: CodeDeployBatchGetDeploymentInstancesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentInstancesInput`](#aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentInstancesInput)

---



#### Properties <a name="Properties"></a>

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentInstances.property.errorMessage"></a>

- *Type:* `string`

---

##### `instancesSummary`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentInstances.property.instancesSummary"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployInstanceSummary`](#aws-cdk-sdk.codedeploy.CodeDeployInstanceSummary)[]

---


### CodeDeployResponsesBatchGetDeployments <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeployments"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeployments.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesBatchGetDeployments(__scope: Construct, __resources: string[], __input: CodeDeployBatchGetDeploymentsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeployments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeployments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeployments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentsInput`](#aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentsInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentsInfo`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeployments.property.deploymentsInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo`](#aws-cdk-sdk.codedeploy.CodeDeployDeploymentInfo)[]

---


### CodeDeployResponsesBatchGetDeploymentTargets <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentTargets"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentTargets.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesBatchGetDeploymentTargets(__scope: Construct, __resources: string[], __input: CodeDeployBatchGetDeploymentTargetsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentTargets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentTargets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentTargets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentTargetsInput`](#aws-cdk-sdk.codedeploy.CodeDeployBatchGetDeploymentTargetsInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentTargets`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetDeploymentTargets.property.deploymentTargets"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeploymentTarget`](#aws-cdk-sdk.codedeploy.CodeDeployDeploymentTarget)[]

---


### CodeDeployResponsesBatchGetOnPremisesInstances <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetOnPremisesInstances"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetOnPremisesInstances.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesBatchGetOnPremisesInstances(__scope: Construct, __resources: string[], __input: CodeDeployBatchGetOnPremisesInstancesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetOnPremisesInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetOnPremisesInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetOnPremisesInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployBatchGetOnPremisesInstancesInput`](#aws-cdk-sdk.codedeploy.CodeDeployBatchGetOnPremisesInstancesInput)

---



#### Properties <a name="Properties"></a>

##### `instanceInfos`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesBatchGetOnPremisesInstances.property.instanceInfos"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployInstanceInfo`](#aws-cdk-sdk.codedeploy.CodeDeployInstanceInfo)[]

---


### CodeDeployResponsesCreateApplication <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateApplication"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateApplication.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesCreateApplication(__scope: Construct, __resources: string[], __input: CodeDeployCreateApplicationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployCreateApplicationInput`](#aws-cdk-sdk.codedeploy.CodeDeployCreateApplicationInput)

---



#### Properties <a name="Properties"></a>

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateApplication.property.applicationId"></a>

- *Type:* `string`

---


### CodeDeployResponsesCreateDeployment <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeployment.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesCreateDeployment(__scope: Construct, __resources: string[], __input: CodeDeployCreateDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeployment.property.deploymentId"></a>

- *Type:* `string`

---


### CodeDeployResponsesCreateDeploymentConfig <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeploymentConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeploymentConfig.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesCreateDeploymentConfig(__scope: Construct, __resources: string[], __input: CodeDeployCreateDeploymentConfigInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeploymentConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeploymentConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeploymentConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentConfigInput`](#aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentConfigInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentConfigId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeploymentConfig.property.deploymentConfigId"></a>

- *Type:* `string`

---


### CodeDeployResponsesCreateDeploymentGroup <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeploymentGroup"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeploymentGroup.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesCreateDeploymentGroup(__scope: Construct, __resources: string[], __input: CodeDeployCreateDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeploymentGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeploymentGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeploymentGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployCreateDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesCreateDeploymentGroup.property.deploymentGroupId"></a>

- *Type:* `string`

---


### CodeDeployResponsesDeleteDeploymentGroup <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesDeleteDeploymentGroup"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesDeleteDeploymentGroup.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesDeleteDeploymentGroup(__scope: Construct, __resources: string[], __input: CodeDeployDeleteDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesDeleteDeploymentGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesDeleteDeploymentGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesDeleteDeploymentGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeleteDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployDeleteDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `hooksNotCleanedUp`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesDeleteDeploymentGroup.property.hooksNotCleanedUp"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAutoScalingGroup`](#aws-cdk-sdk.codedeploy.CodeDeployAutoScalingGroup)[]

---


### CodeDeployResponsesDeleteGitHubAccountToken <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesDeleteGitHubAccountToken"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesDeleteGitHubAccountToken.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesDeleteGitHubAccountToken(__scope: Construct, __resources: string[], __input: CodeDeployDeleteGitHubAccountTokenInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesDeleteGitHubAccountToken.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesDeleteGitHubAccountToken.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesDeleteGitHubAccountToken.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployDeleteGitHubAccountTokenInput`](#aws-cdk-sdk.codedeploy.CodeDeployDeleteGitHubAccountTokenInput)

---



#### Properties <a name="Properties"></a>

##### `tokenName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesDeleteGitHubAccountToken.property.tokenName"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchApplication <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplication"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplication.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchApplication(__scope: Construct, __resources: string[], __input: CodeDeployGetApplicationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetApplicationInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetApplicationInput)

---



#### Properties <a name="Properties"></a>

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplication.property.application"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationApplication`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationApplication)

---


### CodeDeployResponsesFetchApplicationApplication <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationApplication"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationApplication.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchApplicationApplication(__scope: Construct, __resources: string[], __input: CodeDeployGetApplicationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetApplicationInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetApplicationInput)

---



#### Properties <a name="Properties"></a>

##### `applicationId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationApplication.property.applicationId"></a>

- *Type:* `string`

---

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationApplication.property.applicationName"></a>

- *Type:* `string`

---

##### `computePlatform`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationApplication.property.computePlatform"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationApplication.property.createTime"></a>

- *Type:* `string`

---

##### `gitHubAccountName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationApplication.property.gitHubAccountName"></a>

- *Type:* `string`

---

##### `linkedToGitHub`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationApplication.property.linkedToGitHub"></a>

- *Type:* `boolean`

---


### CodeDeployResponsesFetchApplicationRevision <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevision"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevision.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchApplicationRevision(__scope: Construct, __resources: string[], __input: CodeDeployGetApplicationRevisionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput)

---



#### Properties <a name="Properties"></a>

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevision.property.applicationName"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevision.property.revision"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevision`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevision)

---

##### `revisionInfo`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevision.property.revisionInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionInfo`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionInfo)

---


### CodeDeployResponsesFetchApplicationRevisionRevision <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevision"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevision.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchApplicationRevisionRevision(__scope: Construct, __resources: string[], __input: CodeDeployGetApplicationRevisionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput)

---



#### Properties <a name="Properties"></a>

##### `appSpecContent`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevision.property.appSpecContent"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionAppSpecContent`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionAppSpecContent)

---

##### `gitHubLocation`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevision.property.gitHubLocation"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionGitHubLocation`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionGitHubLocation)

---

##### `revisionType`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevision.property.revisionType"></a>

- *Type:* `string`

---

##### `s3Location`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevision.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionS3Location`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionS3Location)

---

##### `string`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevision.property.string"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionString`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionString)

---


### CodeDeployResponsesFetchApplicationRevisionRevisionAppSpecContent <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionAppSpecContent"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionAppSpecContent.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionAppSpecContent(__scope: Construct, __resources: string[], __input: CodeDeployGetApplicationRevisionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionAppSpecContent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionAppSpecContent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionAppSpecContent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput)

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionAppSpecContent.property.content"></a>

- *Type:* `string`

---

##### `sha256`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionAppSpecContent.property.sha256"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchApplicationRevisionRevisionGitHubLocation <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionGitHubLocation"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionGitHubLocation.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionGitHubLocation(__scope: Construct, __resources: string[], __input: CodeDeployGetApplicationRevisionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionGitHubLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionGitHubLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionGitHubLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput)

---



#### Properties <a name="Properties"></a>

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionGitHubLocation.property.commitId"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionGitHubLocation.property.repository"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchApplicationRevisionRevisionInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionInfo"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionInfo.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionInfo(__scope: Construct, __resources: string[], __input: CodeDeployGetApplicationRevisionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentGroups`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionInfo.property.deploymentGroups"></a>

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionInfo.property.description"></a>

- *Type:* `string`

---

##### `firstUsedTime`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionInfo.property.firstUsedTime"></a>

- *Type:* `string`

---

##### `lastUsedTime`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionInfo.property.lastUsedTime"></a>

- *Type:* `string`

---

##### `registerTime`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionInfo.property.registerTime"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchApplicationRevisionRevisionS3Location <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionS3Location"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionS3Location.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionS3Location(__scope: Construct, __resources: string[], __input: CodeDeployGetApplicationRevisionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionS3Location.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionS3Location.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionS3Location.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionS3Location.property.bucket"></a>

- *Type:* `string`

---

##### `bundleType`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionS3Location.property.bundleType"></a>

- *Type:* `string`

---

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionS3Location.property.eTag"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionS3Location.property.key"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionS3Location.property.version"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchApplicationRevisionRevisionString <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionString"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionString.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionString(__scope: Construct, __resources: string[], __input: CodeDeployGetApplicationRevisionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionString.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionString.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionString.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetApplicationRevisionInput)

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionString.property.content"></a>

- *Type:* `string`

---

##### `sha256`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchApplicationRevisionRevisionString.property.sha256"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeployment <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeployment.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeployment(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentInfo`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeployment.property.deploymentInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo)

---


### CodeDeployResponsesFetchDeploymentConfig <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfig.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentConfig(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentConfigInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentConfigInfo`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfig.property.deploymentConfigInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo)

---


### CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentConfigInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigInput)

---



#### Properties <a name="Properties"></a>

##### `computePlatform`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo.property.computePlatform"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo.property.createTime"></a>

- *Type:* `string`

---

##### `deploymentConfigId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo.property.deploymentConfigId"></a>

- *Type:* `string`

---

##### `deploymentConfigName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo.property.deploymentConfigName"></a>

- *Type:* `string`

---

##### `minimumHealthyHosts`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo.property.minimumHealthyHosts"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoMinimumHealthyHosts`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoMinimumHealthyHosts)

---

##### `trafficRoutingConfig`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfo.property.trafficRoutingConfig"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig)

---


### CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoMinimumHealthyHosts <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoMinimumHealthyHosts"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoMinimumHealthyHosts.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoMinimumHealthyHosts(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentConfigInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoMinimumHealthyHosts.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoMinimumHealthyHosts.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoMinimumHealthyHosts.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigInput)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoMinimumHealthyHosts.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoMinimumHealthyHosts.property.value"></a>

- *Type:* `number`

---


### CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentConfigInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigInput)

---



#### Properties <a name="Properties"></a>

##### `timeBasedCanary`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig.property.timeBasedCanary"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedCanary`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedCanary)

---

##### `timeBasedLinear`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig.property.timeBasedLinear"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedLinear`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedLinear)

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfig.property.type"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedCanary <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedCanary"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedCanary.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedCanary(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentConfigInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedCanary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedCanary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedCanary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigInput)

---



#### Properties <a name="Properties"></a>

##### `canaryInterval`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedCanary.property.canaryInterval"></a>

- *Type:* `number`

---

##### `canaryPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedCanary.property.canaryPercentage"></a>

- *Type:* `number`

---


### CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedLinear <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedLinear"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedLinear.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedLinear(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentConfigInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedLinear.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedLinear.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedLinear.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentConfigInput)

---



#### Properties <a name="Properties"></a>

##### `linearInterval`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedLinear.property.linearInterval"></a>

- *Type:* `number`

---

##### `linearPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentConfigDeploymentConfigInfoTrafficRoutingConfigTimeBasedLinear.property.linearPercentage"></a>

- *Type:* `number`

---


### CodeDeployResponsesFetchDeploymentDeploymentInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `additionalDeploymentStatusInfo`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.additionalDeploymentStatusInfo"></a>

- *Type:* `string`

---

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.applicationName"></a>

- *Type:* `string`

---

##### `autoRollbackConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.autoRollbackConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoAutoRollbackConfiguration`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoAutoRollbackConfiguration)

---

##### `blueGreenDeploymentConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.blueGreenDeploymentConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration)

---

##### `completeTime`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.completeTime"></a>

- *Type:* `string`

---

##### `computePlatform`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.computePlatform"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.createTime"></a>

- *Type:* `string`

---

##### `creator`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.creator"></a>

- *Type:* `string`

---

##### `deploymentConfigName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.deploymentConfigName"></a>

- *Type:* `string`

---

##### `deploymentGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.deploymentGroupName"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.deploymentId"></a>

- *Type:* `string`

---

##### `deploymentOverview`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.deploymentOverview"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview)

---

##### `deploymentStatusMessages`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.deploymentStatusMessages"></a>

- *Type:* `string`[]

---

##### `deploymentStyle`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.deploymentStyle"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentStyle`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentStyle)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.description"></a>

- *Type:* `string`

---

##### `errorInformation`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.errorInformation"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoErrorInformation`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoErrorInformation)

---

##### `externalId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.externalId"></a>

- *Type:* `string`

---

##### `fileExistsBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.fileExistsBehavior"></a>

- *Type:* `string`

---

##### `ignoreApplicationStopFailures`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.ignoreApplicationStopFailures"></a>

- *Type:* `boolean`

---

##### `instanceTerminationWaitTimeStarted`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.instanceTerminationWaitTimeStarted"></a>

- *Type:* `boolean`

---

##### `loadBalancerInfo`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.loadBalancerInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoLoadBalancerInfo`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoLoadBalancerInfo)

---

##### `previousRevision`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.previousRevision"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevision`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevision)

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.revision"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevision`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevision)

---

##### `rollbackInfo`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.rollbackInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRollbackInfo`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRollbackInfo)

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.status"></a>

- *Type:* `string`

---

##### `targetInstances`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.targetInstances"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstances`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstances)

---

##### `updateOutdatedInstancesOnly`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfo.property.updateOutdatedInstancesOnly"></a>

- *Type:* `boolean`

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoAutoRollbackConfiguration <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoAutoRollbackConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoAutoRollbackConfiguration.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoAutoRollbackConfiguration(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoAutoRollbackConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoAutoRollbackConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoAutoRollbackConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoAutoRollbackConfiguration.property.enabled"></a>

- *Type:* `boolean`

---

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoAutoRollbackConfiguration.property.events"></a>

- *Type:* `string`[]

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentReadyOption`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration.property.deploymentReadyOption"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationDeploymentReadyOption`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationDeploymentReadyOption)

---

##### `greenFleetProvisioningOption`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration.property.greenFleetProvisioningOption"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption)

---

##### `terminateBlueInstancesOnDeploymentSuccess`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfiguration.property.terminateBlueInstancesOnDeploymentSuccess"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess)

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationDeploymentReadyOption <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationDeploymentReadyOption"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationDeploymentReadyOption.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationDeploymentReadyOption(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationDeploymentReadyOption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationDeploymentReadyOption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationDeploymentReadyOption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `actionOnTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationDeploymentReadyOption.property.actionOnTimeout"></a>

- *Type:* `string`

---

##### `waitTimeInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationDeploymentReadyOption.property.waitTimeInMinutes"></a>

- *Type:* `number`

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.property.action"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.action"></a>

- *Type:* `string`

---

##### `terminationWaitTimeInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.terminationWaitTimeInMinutes"></a>

- *Type:* `number`

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview.property.failed"></a>

- *Type:* `number`

---

##### `inProgress`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview.property.inProgress"></a>

- *Type:* `number`

---

##### `pending`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview.property.pending"></a>

- *Type:* `number`

---

##### `ready`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview.property.ready"></a>

- *Type:* `number`

---

##### `skipped`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview.property.skipped"></a>

- *Type:* `number`

---

##### `succeeded`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentOverview.property.succeeded"></a>

- *Type:* `number`

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentStyle <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentStyle"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentStyle.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentStyle(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentStyle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentStyle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentStyle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentOption`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentStyle.property.deploymentOption"></a>

- *Type:* `string`

---

##### `deploymentType`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoDeploymentStyle.property.deploymentType"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoErrorInformation <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoErrorInformation"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoErrorInformation.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoErrorInformation(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoErrorInformation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoErrorInformation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoErrorInformation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoErrorInformation.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoErrorInformation.property.message"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoLoadBalancerInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoLoadBalancerInfo"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoLoadBalancerInfo.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoLoadBalancerInfo(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoLoadBalancerInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoLoadBalancerInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoLoadBalancerInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `elbInfoList`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoLoadBalancerInfo.property.elbInfoList"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployElbInfo`](#aws-cdk-sdk.codedeploy.CodeDeployElbInfo)[]

---

##### `targetGroupInfoList`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoLoadBalancerInfo.property.targetGroupInfoList"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTargetGroupInfo`](#aws-cdk-sdk.codedeploy.CodeDeployTargetGroupInfo)[]

---

##### `targetGroupPairInfoList`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoLoadBalancerInfo.property.targetGroupPairInfoList"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTargetGroupPairInfo`](#aws-cdk-sdk.codedeploy.CodeDeployTargetGroupPairInfo)[]

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevision <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevision"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevision.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevision(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `appSpecContent`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevision.property.appSpecContent"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionAppSpecContent`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionAppSpecContent)

---

##### `gitHubLocation`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevision.property.gitHubLocation"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionGitHubLocation`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionGitHubLocation)

---

##### `revisionType`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevision.property.revisionType"></a>

- *Type:* `string`

---

##### `s3Location`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevision.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionS3Location`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionS3Location)

---

##### `string`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevision.property.string"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionString`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionString)

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionAppSpecContent <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionAppSpecContent"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionAppSpecContent.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionAppSpecContent(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionAppSpecContent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionAppSpecContent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionAppSpecContent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionAppSpecContent.property.content"></a>

- *Type:* `string`

---

##### `sha256`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionAppSpecContent.property.sha256"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionGitHubLocation <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionGitHubLocation"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionGitHubLocation.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionGitHubLocation(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionGitHubLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionGitHubLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionGitHubLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionGitHubLocation.property.commitId"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionGitHubLocation.property.repository"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionS3Location <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionS3Location"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionS3Location.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionS3Location(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionS3Location.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionS3Location.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionS3Location.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionS3Location.property.bucket"></a>

- *Type:* `string`

---

##### `bundleType`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionS3Location.property.bundleType"></a>

- *Type:* `string`

---

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionS3Location.property.eTag"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionS3Location.property.key"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionS3Location.property.version"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionString <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionString"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionString.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionString(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionString.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionString.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionString.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionString.property.content"></a>

- *Type:* `string`

---

##### `sha256`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoPreviousRevisionString.property.sha256"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoRevision <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevision"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevision.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevision(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `appSpecContent`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevision.property.appSpecContent"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionAppSpecContent`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionAppSpecContent)

---

##### `gitHubLocation`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevision.property.gitHubLocation"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionGitHubLocation`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionGitHubLocation)

---

##### `revisionType`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevision.property.revisionType"></a>

- *Type:* `string`

---

##### `s3Location`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevision.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionS3Location`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionS3Location)

---

##### `string`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevision.property.string"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionString`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionString)

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionAppSpecContent <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionAppSpecContent"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionAppSpecContent.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionAppSpecContent(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionAppSpecContent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionAppSpecContent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionAppSpecContent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionAppSpecContent.property.content"></a>

- *Type:* `string`

---

##### `sha256`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionAppSpecContent.property.sha256"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionGitHubLocation <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionGitHubLocation"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionGitHubLocation.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionGitHubLocation(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionGitHubLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionGitHubLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionGitHubLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionGitHubLocation.property.commitId"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionGitHubLocation.property.repository"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionS3Location <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionS3Location"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionS3Location.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionS3Location(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionS3Location.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionS3Location.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionS3Location.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionS3Location.property.bucket"></a>

- *Type:* `string`

---

##### `bundleType`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionS3Location.property.bundleType"></a>

- *Type:* `string`

---

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionS3Location.property.eTag"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionS3Location.property.key"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionS3Location.property.version"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionString <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionString"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionString.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionString(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionString.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionString.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionString.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionString.property.content"></a>

- *Type:* `string`

---

##### `sha256`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRevisionString.property.sha256"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoRollbackInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRollbackInfo"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRollbackInfo.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRollbackInfo(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRollbackInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRollbackInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRollbackInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `rollbackDeploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRollbackInfo.property.rollbackDeploymentId"></a>

- *Type:* `string`

---

##### `rollbackMessage`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRollbackInfo.property.rollbackMessage"></a>

- *Type:* `string`

---

##### `rollbackTriggeringDeploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoRollbackInfo.property.rollbackTriggeringDeploymentId"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstances <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstances"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstances.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstances(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroups`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstances.property.autoScalingGroups"></a>

- *Type:* `string`[]

---

##### `ec2TagSet`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstances.property.ec2TagSet"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstancesEc2TagSet`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstancesEc2TagSet)

---

##### `tagFilters`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstances.property.tagFilters"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter`](#aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter)[]

---


### CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstancesEc2TagSet <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstancesEc2TagSet"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstancesEc2TagSet.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstancesEc2TagSet(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstancesEc2TagSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstancesEc2TagSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstancesEc2TagSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `ec2TagSetList`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentDeploymentInfoTargetInstancesEc2TagSet.property.ec2TagSetList"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter`](#aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter)[][]

---


### CodeDeployResponsesFetchDeploymentGroup <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroup"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroup.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroup(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentGroupInfo`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroup.property.deploymentGroupInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo)

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `alarmConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.alarmConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration)

---

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.applicationName"></a>

- *Type:* `string`

---

##### `autoRollbackConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.autoRollbackConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAutoRollbackConfiguration`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAutoRollbackConfiguration)

---

##### `autoScalingGroups`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.autoScalingGroups"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAutoScalingGroup`](#aws-cdk-sdk.codedeploy.CodeDeployAutoScalingGroup)[]

---

##### `blueGreenDeploymentConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.blueGreenDeploymentConfiguration"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration)

---

##### `computePlatform`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.computePlatform"></a>

- *Type:* `string`

---

##### `deploymentConfigName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.deploymentConfigName"></a>

- *Type:* `string`

---

##### `deploymentGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.deploymentGroupId"></a>

- *Type:* `string`

---

##### `deploymentGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.deploymentGroupName"></a>

- *Type:* `string`

---

##### `deploymentStyle`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.deploymentStyle"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoDeploymentStyle`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoDeploymentStyle)

---

##### `ec2TagFilters`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.ec2TagFilters"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter`](#aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter)[]

---

##### `ec2TagSet`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.ec2TagSet"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoEc2TagSet`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoEc2TagSet)

---

##### `ecsServices`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.ecsServices"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEcsService`](#aws-cdk-sdk.codedeploy.CodeDeployEcsService)[]

---

##### `lastAttemptedDeployment`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.lastAttemptedDeployment"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment)

---

##### `lastSuccessfulDeployment`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.lastSuccessfulDeployment"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment)

---

##### `loadBalancerInfo`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.loadBalancerInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo)

---

##### `onPremisesInstanceTagFilters`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.onPremisesInstanceTagFilters"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTagFilter`](#aws-cdk-sdk.codedeploy.CodeDeployTagFilter)[]

---

##### `onPremisesTagSet`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.onPremisesTagSet"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoOnPremisesTagSet`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoOnPremisesTagSet)

---

##### `serviceRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.serviceRoleArn"></a>

- *Type:* `string`

---

##### `targetRevision`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.targetRevision"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevision`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevision)

---

##### `triggerConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfo.property.triggerConfigurations"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTriggerConfig`](#aws-cdk-sdk.codedeploy.CodeDeployTriggerConfig)[]

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `alarms`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration.property.alarms"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAlarm`](#aws-cdk-sdk.codedeploy.CodeDeployAlarm)[]

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration.property.enabled"></a>

- *Type:* `boolean`

---

##### `ignorePollAlarmFailure`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAlarmConfiguration.property.ignorePollAlarmFailure"></a>

- *Type:* `boolean`

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAutoRollbackConfiguration <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAutoRollbackConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAutoRollbackConfiguration.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAutoRollbackConfiguration(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAutoRollbackConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAutoRollbackConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAutoRollbackConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAutoRollbackConfiguration.property.enabled"></a>

- *Type:* `boolean`

---

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoAutoRollbackConfiguration.property.events"></a>

- *Type:* `string`[]

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentReadyOption`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration.property.deploymentReadyOption"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationDeploymentReadyOption`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationDeploymentReadyOption)

---

##### `greenFleetProvisioningOption`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration.property.greenFleetProvisioningOption"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption)

---

##### `terminateBlueInstancesOnDeploymentSuccess`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfiguration.property.terminateBlueInstancesOnDeploymentSuccess"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess)

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationDeploymentReadyOption <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationDeploymentReadyOption"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationDeploymentReadyOption.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationDeploymentReadyOption(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationDeploymentReadyOption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationDeploymentReadyOption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationDeploymentReadyOption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `actionOnTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationDeploymentReadyOption.property.actionOnTimeout"></a>

- *Type:* `string`

---

##### `waitTimeInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationDeploymentReadyOption.property.waitTimeInMinutes"></a>

- *Type:* `number`

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.property.action"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.action"></a>

- *Type:* `string`

---

##### `terminationWaitTimeInMinutes`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.property.terminationWaitTimeInMinutes"></a>

- *Type:* `number`

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoDeploymentStyle <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoDeploymentStyle"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoDeploymentStyle.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoDeploymentStyle(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoDeploymentStyle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoDeploymentStyle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoDeploymentStyle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentOption`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoDeploymentStyle.property.deploymentOption"></a>

- *Type:* `string`

---

##### `deploymentType`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoDeploymentStyle.property.deploymentType"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoEc2TagSet <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoEc2TagSet"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoEc2TagSet.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoEc2TagSet(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoEc2TagSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoEc2TagSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoEc2TagSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `ec2TagSetList`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoEc2TagSet.property.ec2TagSetList"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter`](#aws-cdk-sdk.codedeploy.CodeDeployEc2TagFilter)[][]

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment.property.createTime"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment.property.deploymentId"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment.property.endTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastAttemptedDeployment.property.status"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment.property.createTime"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment.property.deploymentId"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment.property.endTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLastSuccessfulDeployment.property.status"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `elbInfoList`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo.property.elbInfoList"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployElbInfo`](#aws-cdk-sdk.codedeploy.CodeDeployElbInfo)[]

---

##### `targetGroupInfoList`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo.property.targetGroupInfoList"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTargetGroupInfo`](#aws-cdk-sdk.codedeploy.CodeDeployTargetGroupInfo)[]

---

##### `targetGroupPairInfoList`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoLoadBalancerInfo.property.targetGroupPairInfoList"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTargetGroupPairInfo`](#aws-cdk-sdk.codedeploy.CodeDeployTargetGroupPairInfo)[]

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoOnPremisesTagSet <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoOnPremisesTagSet"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoOnPremisesTagSet.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoOnPremisesTagSet(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoOnPremisesTagSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoOnPremisesTagSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoOnPremisesTagSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `onPremisesTagSetList`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoOnPremisesTagSet.property.onPremisesTagSetList"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTagFilter`](#aws-cdk-sdk.codedeploy.CodeDeployTagFilter)[][]

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevision <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevision"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevision.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevision(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `appSpecContent`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevision.property.appSpecContent"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionAppSpecContent`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionAppSpecContent)

---

##### `gitHubLocation`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevision.property.gitHubLocation"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionGitHubLocation`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionGitHubLocation)

---

##### `revisionType`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevision.property.revisionType"></a>

- *Type:* `string`

---

##### `s3Location`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevision.property.s3Location"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location)

---

##### `string`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevision.property.string"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionString`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionString)

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionAppSpecContent <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionAppSpecContent"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionAppSpecContent.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionAppSpecContent(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionAppSpecContent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionAppSpecContent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionAppSpecContent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionAppSpecContent.property.content"></a>

- *Type:* `string`

---

##### `sha256`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionAppSpecContent.property.sha256"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionGitHubLocation <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionGitHubLocation"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionGitHubLocation.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionGitHubLocation(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionGitHubLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionGitHubLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionGitHubLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `commitId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionGitHubLocation.property.commitId"></a>

- *Type:* `string`

---

##### `repository`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionGitHubLocation.property.repository"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location.property.bucket"></a>

- *Type:* `string`

---

##### `bundleType`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location.property.bundleType"></a>

- *Type:* `string`

---

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location.property.eTag"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location.property.key"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionS3Location.property.version"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionString <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionString"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionString.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionString(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionString.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionString.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionString.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `content`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionString.property.content"></a>

- *Type:* `string`

---

##### `sha256`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentGroupDeploymentGroupInfoTargetRevisionString.property.sha256"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentInstance <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstance"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstance.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentInstance(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInstanceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInstanceInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInstanceInput)

---



#### Properties <a name="Properties"></a>

##### `instanceSummary`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstance.property.instanceSummary"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstanceInstanceSummary`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstanceInstanceSummary)

---


### CodeDeployResponsesFetchDeploymentInstanceInstanceSummary <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstanceInstanceSummary"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstanceInstanceSummary.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentInstanceInstanceSummary(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentInstanceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstanceInstanceSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstanceInstanceSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstanceInstanceSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInstanceInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentInstanceInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstanceInstanceSummary.property.deploymentId"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstanceInstanceSummary.property.instanceId"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstanceInstanceSummary.property.instanceType"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstanceInstanceSummary.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `lifecycleEvents`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstanceInstanceSummary.property.lifecycleEvents"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent`](#aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentInstanceInstanceSummary.property.status"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentTarget <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTarget"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTarget.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentTarget(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentTargetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentTarget`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTarget.property.deploymentTarget"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTarget`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTarget)

---


### CodeDeployResponsesFetchDeploymentTargetDeploymentTarget <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTarget"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTarget.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTarget(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentTargetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput)

---



#### Properties <a name="Properties"></a>

##### `cloudFormationTarget`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTarget.property.cloudFormationTarget"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget)

---

##### `deploymentTargetType`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTarget.property.deploymentTargetType"></a>

- *Type:* `string`

---

##### `ecsTarget`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTarget.property.ecsTarget"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget)

---

##### `instanceTarget`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTarget.property.instanceTarget"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget)

---

##### `lambdaTarget`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTarget.property.lambdaTarget"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget)

---


### CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentTargetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget.property.deploymentId"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `lifecycleEvents`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget.property.lifecycleEvents"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent`](#aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent)[]

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget.property.status"></a>

- *Type:* `string`

---

##### `targetId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget.property.targetId"></a>

- *Type:* `string`

---

##### `targetVersionWeight`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetCloudFormationTarget.property.targetVersionWeight"></a>

- *Type:* `number`

---


### CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentTargetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget.property.deploymentId"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `lifecycleEvents`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget.property.lifecycleEvents"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent`](#aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget.property.status"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget.property.targetArn"></a>

- *Type:* `string`

---

##### `targetId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget.property.targetId"></a>

- *Type:* `string`

---

##### `taskSetsInfo`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetEcsTarget.property.taskSetsInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployEcsTaskSet`](#aws-cdk-sdk.codedeploy.CodeDeployEcsTaskSet)[]

---


### CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentTargetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget.property.deploymentId"></a>

- *Type:* `string`

---

##### `instanceLabel`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget.property.instanceLabel"></a>

- *Type:* `string`

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `lifecycleEvents`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget.property.lifecycleEvents"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent`](#aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget.property.status"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget.property.targetArn"></a>

- *Type:* `string`

---

##### `targetId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetInstanceTarget.property.targetId"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentTargetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget.property.deploymentId"></a>

- *Type:* `string`

---

##### `lambdaFunctionInfo`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget.property.lambdaFunctionInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo)

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget.property.lastUpdatedAt"></a>

- *Type:* `string`

---

##### `lifecycleEvents`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget.property.lifecycleEvents"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent`](#aws-cdk-sdk.codedeploy.CodeDeployLifecycleEvent)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget.property.status"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget.property.targetArn"></a>

- *Type:* `string`

---

##### `targetId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTarget.property.targetId"></a>

- *Type:* `string`

---


### CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo(__scope: Construct, __resources: string[], __input: CodeDeployGetDeploymentTargetInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetDeploymentTargetInput)

---



#### Properties <a name="Properties"></a>

##### `currentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo.property.currentVersion"></a>

- *Type:* `string`

---

##### `functionAlias`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo.property.functionAlias"></a>

- *Type:* `string`

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo.property.functionName"></a>

- *Type:* `string`

---

##### `targetVersion`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo.property.targetVersion"></a>

- *Type:* `string`

---

##### `targetVersionWeight`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchDeploymentTargetDeploymentTargetLambdaTargetLambdaFunctionInfo.property.targetVersionWeight"></a>

- *Type:* `number`

---


### CodeDeployResponsesFetchOnPremisesInstance <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstance"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstance.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchOnPremisesInstance(__scope: Construct, __resources: string[], __input: CodeDeployGetOnPremisesInstanceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetOnPremisesInstanceInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetOnPremisesInstanceInput)

---



#### Properties <a name="Properties"></a>

##### `instanceInfo`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstance.property.instanceInfo"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo`](#aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo)

---


### CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo(__scope: Construct, __resources: string[], __input: CodeDeployGetOnPremisesInstanceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployGetOnPremisesInstanceInput`](#aws-cdk-sdk.codedeploy.CodeDeployGetOnPremisesInstanceInput)

---



#### Properties <a name="Properties"></a>

##### `deregisterTime`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo.property.deregisterTime"></a>

- *Type:* `string`

---

##### `iamSessionArn`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo.property.iamSessionArn"></a>

- *Type:* `string`

---

##### `iamUserArn`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo.property.iamUserArn"></a>

- *Type:* `string`

---

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo.property.instanceArn"></a>

- *Type:* `string`

---

##### `instanceName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo.property.instanceName"></a>

- *Type:* `string`

---

##### `registerTime`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo.property.registerTime"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesFetchOnPremisesInstanceInstanceInfo.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTag`](#aws-cdk-sdk.codedeploy.CodeDeployTag)[]

---


### CodeDeployResponsesListApplicationRevisions <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListApplicationRevisions"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListApplicationRevisions.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesListApplicationRevisions(__scope: Construct, __resources: string[], __input: CodeDeployListApplicationRevisionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListApplicationRevisions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListApplicationRevisions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListApplicationRevisions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListApplicationRevisionsInput`](#aws-cdk-sdk.codedeploy.CodeDeployListApplicationRevisionsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListApplicationRevisions.property.nextToken"></a>

- *Type:* `string`

---

##### `revisions`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListApplicationRevisions.property.revisions"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation`](#aws-cdk-sdk.codedeploy.CodeDeployRevisionLocation)[]

---


### CodeDeployResponsesListApplications <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListApplications"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListApplications.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesListApplications(__scope: Construct, __resources: string[], __input: CodeDeployListApplicationsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListApplications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListApplications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListApplications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListApplicationsInput`](#aws-cdk-sdk.codedeploy.CodeDeployListApplicationsInput)

---



#### Properties <a name="Properties"></a>

##### `applications`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListApplications.property.applications"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListApplications.property.nextToken"></a>

- *Type:* `string`

---


### CodeDeployResponsesListDeploymentConfigs <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentConfigs"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentConfigs.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesListDeploymentConfigs(__scope: Construct, __resources: string[], __input: CodeDeployListDeploymentConfigsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentConfigs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentConfigs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentConfigs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListDeploymentConfigsInput`](#aws-cdk-sdk.codedeploy.CodeDeployListDeploymentConfigsInput)

---



#### Properties <a name="Properties"></a>

##### `deploymentConfigsList`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentConfigs.property.deploymentConfigsList"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentConfigs.property.nextToken"></a>

- *Type:* `string`

---


### CodeDeployResponsesListDeploymentGroups <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentGroups"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentGroups.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesListDeploymentGroups(__scope: Construct, __resources: string[], __input: CodeDeployListDeploymentGroupsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListDeploymentGroupsInput`](#aws-cdk-sdk.codedeploy.CodeDeployListDeploymentGroupsInput)

---



#### Properties <a name="Properties"></a>

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentGroups.property.applicationName"></a>

- *Type:* `string`

---

##### `deploymentGroups`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentGroups.property.deploymentGroups"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentGroups.property.nextToken"></a>

- *Type:* `string`

---


### CodeDeployResponsesListDeploymentInstances <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentInstances"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentInstances.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesListDeploymentInstances(__scope: Construct, __resources: string[], __input: CodeDeployListDeploymentInstancesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListDeploymentInstancesInput`](#aws-cdk-sdk.codedeploy.CodeDeployListDeploymentInstancesInput)

---



#### Properties <a name="Properties"></a>

##### `instancesList`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentInstances.property.instancesList"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentInstances.property.nextToken"></a>

- *Type:* `string`

---


### CodeDeployResponsesListDeployments <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeployments"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeployments.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesListDeployments(__scope: Construct, __resources: string[], __input: CodeDeployListDeploymentsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeployments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeployments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeployments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListDeploymentsInput`](#aws-cdk-sdk.codedeploy.CodeDeployListDeploymentsInput)

---



#### Properties <a name="Properties"></a>

##### `deployments`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeployments.property.deployments"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeployments.property.nextToken"></a>

- *Type:* `string`

---


### CodeDeployResponsesListDeploymentTargets <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentTargets"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentTargets.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesListDeploymentTargets(__scope: Construct, __resources: string[], __input: CodeDeployListDeploymentTargetsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentTargets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentTargets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentTargets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListDeploymentTargetsInput`](#aws-cdk-sdk.codedeploy.CodeDeployListDeploymentTargetsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentTargets.property.nextToken"></a>

- *Type:* `string`

---

##### `targetIds`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListDeploymentTargets.property.targetIds"></a>

- *Type:* `string`[]

---


### CodeDeployResponsesListGitHubAccountTokenNames <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListGitHubAccountTokenNames"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListGitHubAccountTokenNames.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesListGitHubAccountTokenNames(__scope: Construct, __resources: string[], __input: CodeDeployListGitHubAccountTokenNamesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListGitHubAccountTokenNames.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListGitHubAccountTokenNames.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListGitHubAccountTokenNames.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListGitHubAccountTokenNamesInput`](#aws-cdk-sdk.codedeploy.CodeDeployListGitHubAccountTokenNamesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListGitHubAccountTokenNames.property.nextToken"></a>

- *Type:* `string`

---

##### `tokenNameList`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListGitHubAccountTokenNames.property.tokenNameList"></a>

- *Type:* `string`[]

---


### CodeDeployResponsesListOnPremisesInstances <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListOnPremisesInstances"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListOnPremisesInstances.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesListOnPremisesInstances(__scope: Construct, __resources: string[], __input: CodeDeployListOnPremisesInstancesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListOnPremisesInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListOnPremisesInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListOnPremisesInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListOnPremisesInstancesInput`](#aws-cdk-sdk.codedeploy.CodeDeployListOnPremisesInstancesInput)

---



#### Properties <a name="Properties"></a>

##### `instanceNames`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListOnPremisesInstances.property.instanceNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListOnPremisesInstances.property.nextToken"></a>

- *Type:* `string`

---


### CodeDeployResponsesListTagsForResource <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListTagsForResource.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: CodeDeployListTagsForResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployListTagsForResourceInput`](#aws-cdk-sdk.codedeploy.CodeDeployListTagsForResourceInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployTag`](#aws-cdk-sdk.codedeploy.CodeDeployTag)[]

---


### CodeDeployResponsesPutLifecycleEventHookExecutionStatus <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesPutLifecycleEventHookExecutionStatus"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesPutLifecycleEventHookExecutionStatus.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesPutLifecycleEventHookExecutionStatus(__scope: Construct, __resources: string[], __input: CodeDeployPutLifecycleEventHookExecutionStatusInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesPutLifecycleEventHookExecutionStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesPutLifecycleEventHookExecutionStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesPutLifecycleEventHookExecutionStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployPutLifecycleEventHookExecutionStatusInput`](#aws-cdk-sdk.codedeploy.CodeDeployPutLifecycleEventHookExecutionStatusInput)

---



#### Properties <a name="Properties"></a>

##### `lifecycleEventHookExecutionId`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesPutLifecycleEventHookExecutionStatus.property.lifecycleEventHookExecutionId"></a>

- *Type:* `string`

---


### CodeDeployResponsesStopDeployment <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesStopDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesStopDeployment.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesStopDeployment(__scope: Construct, __resources: string[], __input: CodeDeployStopDeploymentInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesStopDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesStopDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesStopDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployStopDeploymentInput`](#aws-cdk-sdk.codedeploy.CodeDeployStopDeploymentInput)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesStopDeployment.property.status"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesStopDeployment.property.statusMessage"></a>

- *Type:* `string`

---


### CodeDeployResponsesUpdateDeploymentGroup <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesUpdateDeploymentGroup"></a>

#### Initializer <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesUpdateDeploymentGroup.Initializer"></a>

```typescript
import { codedeploy } from 'aws-cdk-sdk'

new codedeploy.CodeDeployResponsesUpdateDeploymentGroup(__scope: Construct, __resources: string[], __input: CodeDeployUpdateDeploymentGroupInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesUpdateDeploymentGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesUpdateDeploymentGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesUpdateDeploymentGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput`](#aws-cdk-sdk.codedeploy.CodeDeployUpdateDeploymentGroupInput)

---



#### Properties <a name="Properties"></a>

##### `hooksNotCleanedUp`<sup>Required</sup> <a name="aws-cdk-sdk.codedeploy.CodeDeployResponsesUpdateDeploymentGroup.property.hooksNotCleanedUp"></a>

- *Type:* [`aws-cdk-sdk.codedeploy.CodeDeployAutoScalingGroup`](#aws-cdk-sdk.codedeploy.CodeDeployAutoScalingGroup)[]

---



