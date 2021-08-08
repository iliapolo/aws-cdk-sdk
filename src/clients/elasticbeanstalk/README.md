# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ElasticBeanstalkClient <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `abortEnvironmentUpdate` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.abortEnvironmentUpdate"></a>

```typescript
public abortEnvironmentUpdate(input: ElasticBeanstalkAbortEnvironmentUpdateMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkAbortEnvironmentUpdateMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkAbortEnvironmentUpdateMessage)

---

##### `applyEnvironmentManagedAction` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.applyEnvironmentManagedAction"></a>

```typescript
public applyEnvironmentManagedAction(input: ElasticBeanstalkApplyEnvironmentManagedActionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplyEnvironmentManagedActionRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplyEnvironmentManagedActionRequest)

---

##### `associateEnvironmentOperationsRole` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.associateEnvironmentOperationsRole"></a>

```typescript
public associateEnvironmentOperationsRole(input: ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage)

---

##### `checkDnsAvailability` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.checkDnsAvailability"></a>

```typescript
public checkDnsAvailability(input: ElasticBeanstalkCheckDnsAvailabilityMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCheckDnsAvailabilityMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCheckDnsAvailabilityMessage)

---

##### `composeEnvironments` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.composeEnvironments"></a>

```typescript
public composeEnvironments(input: ElasticBeanstalkComposeEnvironmentsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkComposeEnvironmentsMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkComposeEnvironmentsMessage)

---

##### `createApplication` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.createApplication"></a>

```typescript
public createApplication(input: ElasticBeanstalkCreateApplicationMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage)

---

##### `createApplicationVersion` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.createApplicationVersion"></a>

```typescript
public createApplicationVersion(input: ElasticBeanstalkCreateApplicationVersionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage)

---

##### `createConfigurationTemplate` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.createConfigurationTemplate"></a>

```typescript
public createConfigurationTemplate(input: ElasticBeanstalkCreateConfigurationTemplateMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateConfigurationTemplateMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateConfigurationTemplateMessage)

---

##### `createEnvironment` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.createEnvironment"></a>

```typescript
public createEnvironment(input: ElasticBeanstalkCreateEnvironmentMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage)

---

##### `createPlatformVersion` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.createPlatformVersion"></a>

```typescript
public createPlatformVersion(input: ElasticBeanstalkCreatePlatformVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionRequest)

---

##### `createStorageLocation` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.createStorageLocation"></a>

```typescript
public createStorageLocation()
```

##### `deleteApplication` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.deleteApplication"></a>

```typescript
public deleteApplication(input: ElasticBeanstalkDeleteApplicationMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteApplicationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteApplicationMessage)

---

##### `deleteApplicationVersion` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.deleteApplicationVersion"></a>

```typescript
public deleteApplicationVersion(input: ElasticBeanstalkDeleteApplicationVersionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteApplicationVersionMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteApplicationVersionMessage)

---

##### `deleteConfigurationTemplate` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.deleteConfigurationTemplate"></a>

```typescript
public deleteConfigurationTemplate(input: ElasticBeanstalkDeleteConfigurationTemplateMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteConfigurationTemplateMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteConfigurationTemplateMessage)

---

##### `deleteEnvironmentConfiguration` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.deleteEnvironmentConfiguration"></a>

```typescript
public deleteEnvironmentConfiguration(input: ElasticBeanstalkDeleteEnvironmentConfigurationMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteEnvironmentConfigurationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteEnvironmentConfigurationMessage)

---

##### `deletePlatformVersion` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.deletePlatformVersion"></a>

```typescript
public deletePlatformVersion(input: ElasticBeanstalkDeletePlatformVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeletePlatformVersionRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeletePlatformVersionRequest)

---

##### `describeAccountAttributes` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.describeAccountAttributes"></a>

```typescript
public describeAccountAttributes()
```

##### `describeApplications` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.describeApplications"></a>

```typescript
public describeApplications(input: ElasticBeanstalkDescribeApplicationsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeApplicationsMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeApplicationsMessage)

---

##### `describeApplicationVersions` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.describeApplicationVersions"></a>

```typescript
public describeApplicationVersions(input: ElasticBeanstalkDescribeApplicationVersionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeApplicationVersionsMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeApplicationVersionsMessage)

---

##### `describeConfigurationOptions` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.describeConfigurationOptions"></a>

```typescript
public describeConfigurationOptions(input: ElasticBeanstalkDescribeConfigurationOptionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationOptionsMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationOptionsMessage)

---

##### `describeConfigurationSettings` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.describeConfigurationSettings"></a>

```typescript
public describeConfigurationSettings(input: ElasticBeanstalkDescribeConfigurationSettingsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationSettingsMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationSettingsMessage)

---

##### `describeEnvironmentHealth` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.describeEnvironmentHealth"></a>

```typescript
public describeEnvironmentHealth(input: ElasticBeanstalkDescribeEnvironmentHealthRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthRequest)

---

##### `describeEnvironmentManagedActionHistory` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.describeEnvironmentManagedActionHistory"></a>

```typescript
public describeEnvironmentManagedActionHistory(input: ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest)

---

##### `describeEnvironmentManagedActions` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.describeEnvironmentManagedActions"></a>

```typescript
public describeEnvironmentManagedActions(input: ElasticBeanstalkDescribeEnvironmentManagedActionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionsRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionsRequest)

---

##### `describeEnvironmentResources` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.describeEnvironmentResources"></a>

```typescript
public describeEnvironmentResources(input: ElasticBeanstalkDescribeEnvironmentResourcesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentResourcesMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentResourcesMessage)

---

##### `describeEnvironments` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.describeEnvironments"></a>

```typescript
public describeEnvironments(input: ElasticBeanstalkDescribeEnvironmentsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentsMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentsMessage)

---

##### `describeEvents` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.describeEvents"></a>

```typescript
public describeEvents(input: ElasticBeanstalkDescribeEventsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage)

---

##### `describeInstancesHealth` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.describeInstancesHealth"></a>

```typescript
public describeInstancesHealth(input: ElasticBeanstalkDescribeInstancesHealthRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeInstancesHealthRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeInstancesHealthRequest)

---

##### `describePlatformVersion` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.describePlatformVersion"></a>

```typescript
public describePlatformVersion(input: ElasticBeanstalkDescribePlatformVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribePlatformVersionRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribePlatformVersionRequest)

---

##### `disassociateEnvironmentOperationsRole` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.disassociateEnvironmentOperationsRole"></a>

```typescript
public disassociateEnvironmentOperationsRole(input: ElasticBeanstalkDisassociateEnvironmentOperationsRoleMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDisassociateEnvironmentOperationsRoleMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDisassociateEnvironmentOperationsRoleMessage)

---

##### `listAvailableSolutionStacks` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.listAvailableSolutionStacks"></a>

```typescript
public listAvailableSolutionStacks()
```

##### `listPlatformBranches` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.listPlatformBranches"></a>

```typescript
public listPlatformBranches(input: ElasticBeanstalkListPlatformBranchesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformBranchesRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformBranchesRequest)

---

##### `listPlatformVersions` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.listPlatformVersions"></a>

```typescript
public listPlatformVersions(input: ElasticBeanstalkListPlatformVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformVersionsRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformVersionsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: ElasticBeanstalkListTagsForResourceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListTagsForResourceMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListTagsForResourceMessage)

---

##### `rebuildEnvironment` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.rebuildEnvironment"></a>

```typescript
public rebuildEnvironment(input: ElasticBeanstalkRebuildEnvironmentMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRebuildEnvironmentMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRebuildEnvironmentMessage)

---

##### `requestEnvironmentInfo` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.requestEnvironmentInfo"></a>

```typescript
public requestEnvironmentInfo(input: ElasticBeanstalkRequestEnvironmentInfoMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRequestEnvironmentInfoMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRequestEnvironmentInfoMessage)

---

##### `restartAppServer` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.restartAppServer"></a>

```typescript
public restartAppServer(input: ElasticBeanstalkRestartAppServerMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRestartAppServerMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRestartAppServerMessage)

---

##### `retrieveEnvironmentInfo` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.retrieveEnvironmentInfo"></a>

```typescript
public retrieveEnvironmentInfo(input: ElasticBeanstalkRetrieveEnvironmentInfoMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRetrieveEnvironmentInfoMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRetrieveEnvironmentInfoMessage)

---

##### `swapEnvironmentCnamEs` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.swapEnvironmentCnamEs"></a>

```typescript
public swapEnvironmentCnamEs(input: ElasticBeanstalkSwapEnvironmentCnamEsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSwapEnvironmentCnamEsMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSwapEnvironmentCnamEsMessage)

---

##### `terminateEnvironment` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.terminateEnvironment"></a>

```typescript
public terminateEnvironment(input: ElasticBeanstalkTerminateEnvironmentMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTerminateEnvironmentMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTerminateEnvironmentMessage)

---

##### `updateApplication` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.updateApplication"></a>

```typescript
public updateApplication(input: ElasticBeanstalkUpdateApplicationMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage)

---

##### `updateApplicationResourceLifecycle` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.updateApplicationResourceLifecycle"></a>

```typescript
public updateApplicationResourceLifecycle(input: ElasticBeanstalkUpdateApplicationResourceLifecycleMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage)

---

##### `updateApplicationVersion` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.updateApplicationVersion"></a>

```typescript
public updateApplicationVersion(input: ElasticBeanstalkUpdateApplicationVersionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationVersionMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationVersionMessage)

---

##### `updateConfigurationTemplate` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.updateConfigurationTemplate"></a>

```typescript
public updateConfigurationTemplate(input: ElasticBeanstalkUpdateConfigurationTemplateMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateConfigurationTemplateMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateConfigurationTemplateMessage)

---

##### `updateEnvironment` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.updateEnvironment"></a>

```typescript
public updateEnvironment(input: ElasticBeanstalkUpdateEnvironmentMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage)

---

##### `updateTagsForResource` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.updateTagsForResource"></a>

```typescript
public updateTagsForResource(input: ElasticBeanstalkUpdateTagsForResourceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateTagsForResourceMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateTagsForResourceMessage)

---

##### `validateConfigurationSettings` <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.validateConfigurationSettings"></a>

```typescript
public validateConfigurationSettings(input: ElasticBeanstalkValidateConfigurationSettingsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidateConfigurationSettingsMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidateConfigurationSettingsMessage)

---




## Structs <a name="Structs"></a>

### ElasticBeanstalkAbortEnvironmentUpdateMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkAbortEnvironmentUpdateMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkAbortEnvironmentUpdateMessage: elasticbeanstalk.ElasticBeanstalkAbortEnvironmentUpdateMessage = { ... }
```

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkAbortEnvironmentUpdateMessage.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkAbortEnvironmentUpdateMessage.property.environmentName"></a>

- *Type:* `string`

---

### ElasticBeanstalkApplicationDescription <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkApplicationDescription: elasticbeanstalk.ElasticBeanstalkApplicationDescription = { ... }
```

##### `applicationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescription.property.applicationArn"></a>

- *Type:* `string`

---

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescription.property.applicationName"></a>

- *Type:* `string`

---

##### `configurationTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescription.property.configurationTemplates"></a>

- *Type:* `string`[]

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescription.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescription.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescription.property.description"></a>

- *Type:* `string`

---

##### `resourceLifecycleConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescription.property.resourceLifecycleConfig"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationResourceLifecycleConfig`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationResourceLifecycleConfig)

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescription.property.versions"></a>

- *Type:* `string`[]

---

### ElasticBeanstalkApplicationDescriptionMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescriptionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkApplicationDescriptionMessage: elasticbeanstalk.ElasticBeanstalkApplicationDescriptionMessage = { ... }
```

##### `application`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescriptionMessage.property.application"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescription)

---

### ElasticBeanstalkApplicationDescriptionsMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescriptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkApplicationDescriptionsMessage: elasticbeanstalk.ElasticBeanstalkApplicationDescriptionsMessage = { ... }
```

##### `applications`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescriptionsMessage.property.applications"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescription)[]

---

### ElasticBeanstalkApplicationMetrics <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationMetrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkApplicationMetrics: elasticbeanstalk.ElasticBeanstalkApplicationMetrics = { ... }
```

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationMetrics.property.duration"></a>

- *Type:* `number`

---

##### `latency`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationMetrics.property.latency"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLatency`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLatency)

---

##### `requestCount`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationMetrics.property.requestCount"></a>

- *Type:* `number`

---

##### `statusCodes`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationMetrics.property.statusCodes"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkStatusCodes`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkStatusCodes)

---

### ElasticBeanstalkApplicationResourceLifecycleConfig <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationResourceLifecycleConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkApplicationResourceLifecycleConfig: elasticbeanstalk.ElasticBeanstalkApplicationResourceLifecycleConfig = { ... }
```

##### `serviceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationResourceLifecycleConfig.property.serviceRole"></a>

- *Type:* `string`

---

##### `versionLifecycleConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationResourceLifecycleConfig.property.versionLifecycleConfig"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionLifecycleConfig`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionLifecycleConfig)

---

### ElasticBeanstalkApplicationResourceLifecycleDescriptionMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationResourceLifecycleDescriptionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkApplicationResourceLifecycleDescriptionMessage: elasticbeanstalk.ElasticBeanstalkApplicationResourceLifecycleDescriptionMessage = { ... }
```

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationResourceLifecycleDescriptionMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `resourceLifecycleConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationResourceLifecycleDescriptionMessage.property.resourceLifecycleConfig"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationResourceLifecycleConfig`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationResourceLifecycleConfig)

---

### ElasticBeanstalkApplicationVersionDescription <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkApplicationVersionDescription: elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription = { ... }
```

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription.property.applicationName"></a>

- *Type:* `string`

---

##### `applicationVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription.property.applicationVersionArn"></a>

- *Type:* `string`

---

##### `buildArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription.property.buildArn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription.property.description"></a>

- *Type:* `string`

---

##### `sourceBuildInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription.property.sourceBuildInformation"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSourceBuildInformation`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSourceBuildInformation)

---

##### `sourceBundle`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription.property.sourceBundle"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkS3Location`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkS3Location)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription.property.status"></a>

- *Type:* `string`

---

##### `versionLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription.property.versionLabel"></a>

- *Type:* `string`

---

### ElasticBeanstalkApplicationVersionDescriptionMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescriptionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkApplicationVersionDescriptionMessage: elasticbeanstalk.ElasticBeanstalkApplicationVersionDescriptionMessage = { ... }
```

##### `applicationVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescriptionMessage.property.applicationVersion"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription)

---

### ElasticBeanstalkApplicationVersionDescriptionsMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescriptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkApplicationVersionDescriptionsMessage: elasticbeanstalk.ElasticBeanstalkApplicationVersionDescriptionsMessage = { ... }
```

##### `applicationVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescriptionsMessage.property.applicationVersions"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescriptionsMessage.property.nextToken"></a>

- *Type:* `string`

---

### ElasticBeanstalkApplicationVersionLifecycleConfig <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionLifecycleConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkApplicationVersionLifecycleConfig: elasticbeanstalk.ElasticBeanstalkApplicationVersionLifecycleConfig = { ... }
```

##### `maxAgeRule`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionLifecycleConfig.property.maxAgeRule"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkMaxAgeRule`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkMaxAgeRule)

---

##### `maxCountRule`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionLifecycleConfig.property.maxCountRule"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkMaxCountRule`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkMaxCountRule)

---

### ElasticBeanstalkApplyEnvironmentManagedActionRequest <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplyEnvironmentManagedActionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkApplyEnvironmentManagedActionRequest: elasticbeanstalk.ElasticBeanstalkApplyEnvironmentManagedActionRequest = { ... }
```

##### `actionId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplyEnvironmentManagedActionRequest.property.actionId"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplyEnvironmentManagedActionRequest.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplyEnvironmentManagedActionRequest.property.environmentName"></a>

- *Type:* `string`

---

### ElasticBeanstalkApplyEnvironmentManagedActionResult <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplyEnvironmentManagedActionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkApplyEnvironmentManagedActionResult: elasticbeanstalk.ElasticBeanstalkApplyEnvironmentManagedActionResult = { ... }
```

##### `actionDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplyEnvironmentManagedActionResult.property.actionDescription"></a>

- *Type:* `string`

---

##### `actionId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplyEnvironmentManagedActionResult.property.actionId"></a>

- *Type:* `string`

---

##### `actionType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplyEnvironmentManagedActionResult.property.actionType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplyEnvironmentManagedActionResult.property.status"></a>

- *Type:* `string`

---

### ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkAssociateEnvironmentOperationsRoleMessage: elasticbeanstalk.ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage = { ... }
```

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage.property.environmentName"></a>

- *Type:* `string`

---

##### `operationsRole`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkAssociateEnvironmentOperationsRoleMessage.property.operationsRole"></a>

- *Type:* `string`

---

### ElasticBeanstalkAutoScalingGroup <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkAutoScalingGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkAutoScalingGroup: elasticbeanstalk.ElasticBeanstalkAutoScalingGroup = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkAutoScalingGroup.property.name"></a>

- *Type:* `string`

---

### ElasticBeanstalkBuildConfiguration <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkBuildConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkBuildConfiguration: elasticbeanstalk.ElasticBeanstalkBuildConfiguration = { ... }
```

##### `codeBuildServiceRole`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkBuildConfiguration.property.codeBuildServiceRole"></a>

- *Type:* `string`

---

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkBuildConfiguration.property.image"></a>

- *Type:* `string`

---

##### `artifactName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkBuildConfiguration.property.artifactName"></a>

- *Type:* `string`

---

##### `computeType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkBuildConfiguration.property.computeType"></a>

- *Type:* `string`

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkBuildConfiguration.property.timeoutInMinutes"></a>

- *Type:* `number`

---

### ElasticBeanstalkBuilder <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkBuilder"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkBuilder: elasticbeanstalk.ElasticBeanstalkBuilder = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkBuilder.property.arn"></a>

- *Type:* `string`

---

### ElasticBeanstalkCheckDnsAvailabilityMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCheckDnsAvailabilityMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkCheckDnsAvailabilityMessage: elasticbeanstalk.ElasticBeanstalkCheckDnsAvailabilityMessage = { ... }
```

##### `cnamePrefix`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCheckDnsAvailabilityMessage.property.cnamePrefix"></a>

- *Type:* `string`

---

### ElasticBeanstalkCheckDnsAvailabilityResultMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCheckDnsAvailabilityResultMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkCheckDnsAvailabilityResultMessage: elasticbeanstalk.ElasticBeanstalkCheckDnsAvailabilityResultMessage = { ... }
```

##### `available`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCheckDnsAvailabilityResultMessage.property.available"></a>

- *Type:* `boolean`

---

##### `fullyQualifiedCname`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCheckDnsAvailabilityResultMessage.property.fullyQualifiedCname"></a>

- *Type:* `string`

---

### ElasticBeanstalkComposeEnvironmentsMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkComposeEnvironmentsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkComposeEnvironmentsMessage: elasticbeanstalk.ElasticBeanstalkComposeEnvironmentsMessage = { ... }
```

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkComposeEnvironmentsMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkComposeEnvironmentsMessage.property.groupName"></a>

- *Type:* `string`

---

##### `versionLabels`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkComposeEnvironmentsMessage.property.versionLabels"></a>

- *Type:* `string`[]

---

### ElasticBeanstalkConfigurationOptionDescription <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkConfigurationOptionDescription: elasticbeanstalk.ElasticBeanstalkConfigurationOptionDescription = { ... }
```

##### `changeSeverity`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionDescription.property.changeSeverity"></a>

- *Type:* `string`

---

##### `defaultValue`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionDescription.property.defaultValue"></a>

- *Type:* `string`

---

##### `maxLength`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionDescription.property.maxLength"></a>

- *Type:* `number`

---

##### `maxValue`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionDescription.property.maxValue"></a>

- *Type:* `number`

---

##### `minValue`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionDescription.property.minValue"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionDescription.property.name"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionDescription.property.namespace"></a>

- *Type:* `string`

---

##### `regex`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionDescription.property.regex"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkOptionRestrictionRegex`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkOptionRestrictionRegex)

---

##### `userDefined`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionDescription.property.userDefined"></a>

- *Type:* `boolean`

---

##### `valueOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionDescription.property.valueOptions"></a>

- *Type:* `string`[]

---

##### `valueType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionDescription.property.valueType"></a>

- *Type:* `string`

---

### ElasticBeanstalkConfigurationOptionsDescription <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionsDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkConfigurationOptionsDescription: elasticbeanstalk.ElasticBeanstalkConfigurationOptionsDescription = { ... }
```

##### `options`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionsDescription.property.options"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionDescription)[]

---

##### `platformArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionsDescription.property.platformArn"></a>

- *Type:* `string`

---

##### `solutionStackName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionsDescription.property.solutionStackName"></a>

- *Type:* `string`

---

### ElasticBeanstalkConfigurationOptionSetting <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkConfigurationOptionSetting: elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting = { ... }
```

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting.property.namespace"></a>

- *Type:* `string`

---

##### `optionName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting.property.optionName"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting.property.resourceName"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting.property.value"></a>

- *Type:* `string`

---

### ElasticBeanstalkConfigurationSettingsDescription <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkConfigurationSettingsDescription: elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescription = { ... }
```

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescription.property.applicationName"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescription.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescription.property.dateUpdated"></a>

- *Type:* `string`

---

##### `deploymentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescription.property.deploymentStatus"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescription.property.description"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescription.property.environmentName"></a>

- *Type:* `string`

---

##### `optionSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescription.property.optionSettings"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting)[]

---

##### `platformArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescription.property.platformArn"></a>

- *Type:* `string`

---

##### `solutionStackName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescription.property.solutionStackName"></a>

- *Type:* `string`

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescription.property.templateName"></a>

- *Type:* `string`

---

### ElasticBeanstalkConfigurationSettingsDescriptions <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescriptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkConfigurationSettingsDescriptions: elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescriptions = { ... }
```

##### `configurationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescriptions.property.configurationSettings"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescription)[]

---

### ElasticBeanstalkConfigurationSettingsValidationMessages <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsValidationMessages"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkConfigurationSettingsValidationMessages: elasticbeanstalk.ElasticBeanstalkConfigurationSettingsValidationMessages = { ... }
```

##### `messages`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsValidationMessages.property.messages"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidationMessage)[]

---

### ElasticBeanstalkCpuUtilization <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCpuUtilization"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkCpuUtilization: elasticbeanstalk.ElasticBeanstalkCpuUtilization = { ... }
```

##### `idle`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCpuUtilization.property.idle"></a>

- *Type:* `number`

---

##### `ioWait`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCpuUtilization.property.ioWait"></a>

- *Type:* `number`

---

##### `irq`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCpuUtilization.property.irq"></a>

- *Type:* `number`

---

##### `nice`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCpuUtilization.property.nice"></a>

- *Type:* `number`

---

##### `privileged`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCpuUtilization.property.privileged"></a>

- *Type:* `number`

---

##### `softIrq`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCpuUtilization.property.softIrq"></a>

- *Type:* `number`

---

##### `system`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCpuUtilization.property.system"></a>

- *Type:* `number`

---

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCpuUtilization.property.user"></a>

- *Type:* `number`

---

### ElasticBeanstalkCreateApplicationMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkCreateApplicationMessage: elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage.property.description"></a>

- *Type:* `string`

---

##### `resourceLifecycleConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage.property.resourceLifecycleConfig"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationResourceLifecycleConfig`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationResourceLifecycleConfig)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag)[]

---

### ElasticBeanstalkCreateApplicationVersionMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkCreateApplicationVersionMessage: elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `versionLabel`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage.property.versionLabel"></a>

- *Type:* `string`

---

##### `autoCreateApplication`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage.property.autoCreateApplication"></a>

- *Type:* `boolean`

---

##### `buildConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage.property.buildConfiguration"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkBuildConfiguration`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkBuildConfiguration)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage.property.description"></a>

- *Type:* `string`

---

##### `process`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage.property.process"></a>

- *Type:* `boolean`

---

##### `sourceBuildInformation`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage.property.sourceBuildInformation"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSourceBuildInformation`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSourceBuildInformation)

---

##### `sourceBundle`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage.property.sourceBundle"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkS3Location`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkS3Location)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag)[]

---

### ElasticBeanstalkCreateConfigurationTemplateMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateConfigurationTemplateMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkCreateConfigurationTemplateMessage: elasticbeanstalk.ElasticBeanstalkCreateConfigurationTemplateMessage = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateConfigurationTemplateMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateConfigurationTemplateMessage.property.templateName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateConfigurationTemplateMessage.property.description"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateConfigurationTemplateMessage.property.environmentId"></a>

- *Type:* `string`

---

##### `optionSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateConfigurationTemplateMessage.property.optionSettings"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting)[]

---

##### `platformArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateConfigurationTemplateMessage.property.platformArn"></a>

- *Type:* `string`

---

##### `solutionStackName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateConfigurationTemplateMessage.property.solutionStackName"></a>

- *Type:* `string`

---

##### `sourceConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateConfigurationTemplateMessage.property.sourceConfiguration"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSourceConfiguration`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSourceConfiguration)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateConfigurationTemplateMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag)[]

---

### ElasticBeanstalkCreateEnvironmentMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkCreateEnvironmentMessage: elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `cnamePrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage.property.cnamePrefix"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage.property.description"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage.property.environmentName"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage.property.groupName"></a>

- *Type:* `string`

---

##### `operationsRole`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage.property.operationsRole"></a>

- *Type:* `string`

---

##### `optionSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage.property.optionSettings"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting)[]

---

##### `optionsToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage.property.optionsToRemove"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkOptionSpecification`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkOptionSpecification)[]

---

##### `platformArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage.property.platformArn"></a>

- *Type:* `string`

---

##### `solutionStackName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage.property.solutionStackName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag)[]

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage.property.templateName"></a>

- *Type:* `string`

---

##### `tier`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage.property.tier"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentTier`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentTier)

---

##### `versionLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage.property.versionLabel"></a>

- *Type:* `string`

---

### ElasticBeanstalkCreatePlatformVersionRequest <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkCreatePlatformVersionRequest: elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionRequest = { ... }
```

##### `platformDefinitionBundle`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionRequest.property.platformDefinitionBundle"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkS3Location`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkS3Location)

---

##### `platformName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionRequest.property.platformName"></a>

- *Type:* `string`

---

##### `platformVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionRequest.property.platformVersion"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionRequest.property.environmentName"></a>

- *Type:* `string`

---

##### `optionSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionRequest.property.optionSettings"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag)[]

---

### ElasticBeanstalkCreatePlatformVersionResult <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkCreatePlatformVersionResult: elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionResult = { ... }
```

##### `builder`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionResult.property.builder"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkBuilder`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkBuilder)

---

##### `platformSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionResult.property.platformSummary"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary)

---

### ElasticBeanstalkCreateStorageLocationResultMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateStorageLocationResultMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkCreateStorageLocationResultMessage: elasticbeanstalk.ElasticBeanstalkCreateStorageLocationResultMessage = { ... }
```

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateStorageLocationResultMessage.property.s3Bucket"></a>

- *Type:* `string`

---

### ElasticBeanstalkCustomAmi <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCustomAmi"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkCustomAmi: elasticbeanstalk.ElasticBeanstalkCustomAmi = { ... }
```

##### `imageId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCustomAmi.property.imageId"></a>

- *Type:* `string`

---

##### `virtualizationType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCustomAmi.property.virtualizationType"></a>

- *Type:* `string`

---

### ElasticBeanstalkDeleteApplicationMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteApplicationMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDeleteApplicationMessage: elasticbeanstalk.ElasticBeanstalkDeleteApplicationMessage = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteApplicationMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `terminateEnvByForce`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteApplicationMessage.property.terminateEnvByForce"></a>

- *Type:* `boolean`

---

### ElasticBeanstalkDeleteApplicationVersionMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteApplicationVersionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDeleteApplicationVersionMessage: elasticbeanstalk.ElasticBeanstalkDeleteApplicationVersionMessage = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteApplicationVersionMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `versionLabel`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteApplicationVersionMessage.property.versionLabel"></a>

- *Type:* `string`

---

##### `deleteSourceBundle`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteApplicationVersionMessage.property.deleteSourceBundle"></a>

- *Type:* `boolean`

---

### ElasticBeanstalkDeleteConfigurationTemplateMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteConfigurationTemplateMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDeleteConfigurationTemplateMessage: elasticbeanstalk.ElasticBeanstalkDeleteConfigurationTemplateMessage = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteConfigurationTemplateMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteConfigurationTemplateMessage.property.templateName"></a>

- *Type:* `string`

---

### ElasticBeanstalkDeleteEnvironmentConfigurationMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteEnvironmentConfigurationMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDeleteEnvironmentConfigurationMessage: elasticbeanstalk.ElasticBeanstalkDeleteEnvironmentConfigurationMessage = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteEnvironmentConfigurationMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeleteEnvironmentConfigurationMessage.property.environmentName"></a>

- *Type:* `string`

---

### ElasticBeanstalkDeletePlatformVersionRequest <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeletePlatformVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDeletePlatformVersionRequest: elasticbeanstalk.ElasticBeanstalkDeletePlatformVersionRequest = { ... }
```

##### `platformArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeletePlatformVersionRequest.property.platformArn"></a>

- *Type:* `string`

---

### ElasticBeanstalkDeletePlatformVersionResult <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeletePlatformVersionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDeletePlatformVersionResult: elasticbeanstalk.ElasticBeanstalkDeletePlatformVersionResult = { ... }
```

##### `platformSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeletePlatformVersionResult.property.platformSummary"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary)

---

### ElasticBeanstalkDeployment <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeployment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDeployment: elasticbeanstalk.ElasticBeanstalkDeployment = { ... }
```

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeployment.property.deploymentId"></a>

- *Type:* `number`

---

##### `deploymentTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeployment.property.deploymentTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeployment.property.status"></a>

- *Type:* `string`

---

##### `versionLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeployment.property.versionLabel"></a>

- *Type:* `string`

---

### ElasticBeanstalkDescribeAccountAttributesResult <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeAccountAttributesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribeAccountAttributesResult: elasticbeanstalk.ElasticBeanstalkDescribeAccountAttributesResult = { ... }
```

##### `resourceQuotas`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeAccountAttributesResult.property.resourceQuotas"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuotas`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuotas)

---

### ElasticBeanstalkDescribeApplicationsMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeApplicationsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribeApplicationsMessage: elasticbeanstalk.ElasticBeanstalkDescribeApplicationsMessage = { ... }
```

##### `applicationNames`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeApplicationsMessage.property.applicationNames"></a>

- *Type:* `string`[]

---

### ElasticBeanstalkDescribeApplicationVersionsMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeApplicationVersionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribeApplicationVersionsMessage: elasticbeanstalk.ElasticBeanstalkDescribeApplicationVersionsMessage = { ... }
```

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeApplicationVersionsMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeApplicationVersionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeApplicationVersionsMessage.property.nextToken"></a>

- *Type:* `string`

---

##### `versionLabels`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeApplicationVersionsMessage.property.versionLabels"></a>

- *Type:* `string`[]

---

### ElasticBeanstalkDescribeConfigurationOptionsMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationOptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribeConfigurationOptionsMessage: elasticbeanstalk.ElasticBeanstalkDescribeConfigurationOptionsMessage = { ... }
```

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationOptionsMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationOptionsMessage.property.environmentName"></a>

- *Type:* `string`

---

##### `options`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationOptionsMessage.property.options"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkOptionSpecification`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkOptionSpecification)[]

---

##### `platformArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationOptionsMessage.property.platformArn"></a>

- *Type:* `string`

---

##### `solutionStackName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationOptionsMessage.property.solutionStackName"></a>

- *Type:* `string`

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationOptionsMessage.property.templateName"></a>

- *Type:* `string`

---

### ElasticBeanstalkDescribeConfigurationSettingsMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationSettingsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribeConfigurationSettingsMessage: elasticbeanstalk.ElasticBeanstalkDescribeConfigurationSettingsMessage = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationSettingsMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationSettingsMessage.property.environmentName"></a>

- *Type:* `string`

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationSettingsMessage.property.templateName"></a>

- *Type:* `string`

---

### ElasticBeanstalkDescribeEnvironmentHealthRequest <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribeEnvironmentHealthRequest: elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthRequest = { ... }
```

##### `attributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthRequest.property.attributeNames"></a>

- *Type:* `string`[]

---

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthRequest.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthRequest.property.environmentName"></a>

- *Type:* `string`

---

### ElasticBeanstalkDescribeEnvironmentHealthResult <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribeEnvironmentHealthResult: elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthResult = { ... }
```

##### `applicationMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthResult.property.applicationMetrics"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationMetrics`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationMetrics)

---

##### `causes`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthResult.property.causes"></a>

- *Type:* `string`[]

---

##### `color`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthResult.property.color"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthResult.property.environmentName"></a>

- *Type:* `string`

---

##### `healthStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthResult.property.healthStatus"></a>

- *Type:* `string`

---

##### `instancesHealth`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthResult.property.instancesHealth"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkInstanceHealthSummary`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkInstanceHealthSummary)

---

##### `refreshedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthResult.property.refreshedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthResult.property.status"></a>

- *Type:* `string`

---

### ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest: elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest = { ... }
```

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest.property.environmentName"></a>

- *Type:* `string`

---

##### `maxItems`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest.property.maxItems"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest.property.nextToken"></a>

- *Type:* `string`

---

### ElasticBeanstalkDescribeEnvironmentManagedActionHistoryResult <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribeEnvironmentManagedActionHistoryResult: elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryResult = { ... }
```

##### `managedActionHistoryItems`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryResult.property.managedActionHistoryItems"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedActionHistoryItem`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedActionHistoryItem)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryResult.property.nextToken"></a>

- *Type:* `string`

---

### ElasticBeanstalkDescribeEnvironmentManagedActionsRequest <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribeEnvironmentManagedActionsRequest: elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionsRequest = { ... }
```

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionsRequest.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionsRequest.property.environmentName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionsRequest.property.status"></a>

- *Type:* `string`

---

### ElasticBeanstalkDescribeEnvironmentManagedActionsResult <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribeEnvironmentManagedActionsResult: elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionsResult = { ... }
```

##### `managedActions`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionsResult.property.managedActions"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedAction`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedAction)[]

---

### ElasticBeanstalkDescribeEnvironmentResourcesMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentResourcesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribeEnvironmentResourcesMessage: elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentResourcesMessage = { ... }
```

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentResourcesMessage.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentResourcesMessage.property.environmentName"></a>

- *Type:* `string`

---

### ElasticBeanstalkDescribeEnvironmentsMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribeEnvironmentsMessage: elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentsMessage = { ... }
```

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentsMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `environmentIds`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentsMessage.property.environmentIds"></a>

- *Type:* `string`[]

---

##### `environmentNames`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentsMessage.property.environmentNames"></a>

- *Type:* `string`[]

---

##### `includedDeletedBackTo`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentsMessage.property.includedDeletedBackTo"></a>

- *Type:* `string`

---

##### `includeDeleted`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentsMessage.property.includeDeleted"></a>

- *Type:* `boolean`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentsMessage.property.nextToken"></a>

- *Type:* `string`

---

##### `versionLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentsMessage.property.versionLabel"></a>

- *Type:* `string`

---

### ElasticBeanstalkDescribeEventsMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribeEventsMessage: elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage = { ... }
```

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage.property.endTime"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage.property.environmentName"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage.property.nextToken"></a>

- *Type:* `string`

---

##### `platformArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage.property.platformArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage.property.requestId"></a>

- *Type:* `string`

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage.property.severity"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage.property.startTime"></a>

- *Type:* `string`

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage.property.templateName"></a>

- *Type:* `string`

---

##### `versionLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage.property.versionLabel"></a>

- *Type:* `string`

---

### ElasticBeanstalkDescribeInstancesHealthRequest <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeInstancesHealthRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribeInstancesHealthRequest: elasticbeanstalk.ElasticBeanstalkDescribeInstancesHealthRequest = { ... }
```

##### `attributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeInstancesHealthRequest.property.attributeNames"></a>

- *Type:* `string`[]

---

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeInstancesHealthRequest.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeInstancesHealthRequest.property.environmentName"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeInstancesHealthRequest.property.nextToken"></a>

- *Type:* `string`

---

### ElasticBeanstalkDescribeInstancesHealthResult <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeInstancesHealthResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribeInstancesHealthResult: elasticbeanstalk.ElasticBeanstalkDescribeInstancesHealthResult = { ... }
```

##### `instanceHealthList`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeInstancesHealthResult.property.instanceHealthList"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSingleInstanceHealth`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSingleInstanceHealth)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeInstancesHealthResult.property.nextToken"></a>

- *Type:* `string`

---

##### `refreshedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeInstancesHealthResult.property.refreshedAt"></a>

- *Type:* `string`

---

### ElasticBeanstalkDescribePlatformVersionRequest <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribePlatformVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribePlatformVersionRequest: elasticbeanstalk.ElasticBeanstalkDescribePlatformVersionRequest = { ... }
```

##### `platformArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribePlatformVersionRequest.property.platformArn"></a>

- *Type:* `string`

---

### ElasticBeanstalkDescribePlatformVersionResult <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribePlatformVersionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDescribePlatformVersionResult: elasticbeanstalk.ElasticBeanstalkDescribePlatformVersionResult = { ... }
```

##### `platformDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribePlatformVersionResult.property.platformDescription"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription)

---

### ElasticBeanstalkDisassociateEnvironmentOperationsRoleMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDisassociateEnvironmentOperationsRoleMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkDisassociateEnvironmentOperationsRoleMessage: elasticbeanstalk.ElasticBeanstalkDisassociateEnvironmentOperationsRoleMessage = { ... }
```

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDisassociateEnvironmentOperationsRoleMessage.property.environmentName"></a>

- *Type:* `string`

---

### ElasticBeanstalkEnvironmentDescription <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkEnvironmentDescription: elasticbeanstalk.ElasticBeanstalkEnvironmentDescription = { ... }
```

##### `abortableOperationInProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.abortableOperationInProgress"></a>

- *Type:* `boolean`

---

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.applicationName"></a>

- *Type:* `string`

---

##### `cname`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.cname"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.description"></a>

- *Type:* `string`

---

##### `endpointUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.endpointUrl"></a>

- *Type:* `string`

---

##### `environmentArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.environmentArn"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentLinks`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.environmentLinks"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentLink`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentLink)[]

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.environmentName"></a>

- *Type:* `string`

---

##### `health`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.health"></a>

- *Type:* `string`

---

##### `healthStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.healthStatus"></a>

- *Type:* `string`

---

##### `operationsRole`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.operationsRole"></a>

- *Type:* `string`

---

##### `platformArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.platformArn"></a>

- *Type:* `string`

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.resources"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentResourcesDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentResourcesDescription)

---

##### `solutionStackName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.solutionStackName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.status"></a>

- *Type:* `string`

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.templateName"></a>

- *Type:* `string`

---

##### `tier`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.tier"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentTier`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentTier)

---

##### `versionLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription.property.versionLabel"></a>

- *Type:* `string`

---

### ElasticBeanstalkEnvironmentDescriptionsMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescriptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkEnvironmentDescriptionsMessage: elasticbeanstalk.ElasticBeanstalkEnvironmentDescriptionsMessage = { ... }
```

##### `environments`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescriptionsMessage.property.environments"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescriptionsMessage.property.nextToken"></a>

- *Type:* `string`

---

### ElasticBeanstalkEnvironmentInfoDescription <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentInfoDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkEnvironmentInfoDescription: elasticbeanstalk.ElasticBeanstalkEnvironmentInfoDescription = { ... }
```

##### `ec2InstanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentInfoDescription.property.ec2InstanceId"></a>

- *Type:* `string`

---

##### `infoType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentInfoDescription.property.infoType"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentInfoDescription.property.message"></a>

- *Type:* `string`

---

##### `sampleTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentInfoDescription.property.sampleTimestamp"></a>

- *Type:* `string`

---

### ElasticBeanstalkEnvironmentLink <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentLink"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkEnvironmentLink: elasticbeanstalk.ElasticBeanstalkEnvironmentLink = { ... }
```

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentLink.property.environmentName"></a>

- *Type:* `string`

---

##### `linkName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentLink.property.linkName"></a>

- *Type:* `string`

---

### ElasticBeanstalkEnvironmentResourceDescription <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentResourceDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkEnvironmentResourceDescription: elasticbeanstalk.ElasticBeanstalkEnvironmentResourceDescription = { ... }
```

##### `autoScalingGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentResourceDescription.property.autoScalingGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkAutoScalingGroup`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkAutoScalingGroup)[]

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentResourceDescription.property.environmentName"></a>

- *Type:* `string`

---

##### `instances`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentResourceDescription.property.instances"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkInstance`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkInstance)[]

---

##### `launchConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentResourceDescription.property.launchConfigurations"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLaunchConfiguration`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLaunchConfiguration)[]

---

##### `launchTemplates`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentResourceDescription.property.launchTemplates"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLaunchTemplate`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLaunchTemplate)[]

---

##### `loadBalancers`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentResourceDescription.property.loadBalancers"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLoadBalancer`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLoadBalancer)[]

---

##### `queues`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentResourceDescription.property.queues"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkQueue`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkQueue)[]

---

##### `triggers`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentResourceDescription.property.triggers"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTrigger`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTrigger)[]

---

### ElasticBeanstalkEnvironmentResourceDescriptionsMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentResourceDescriptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkEnvironmentResourceDescriptionsMessage: elasticbeanstalk.ElasticBeanstalkEnvironmentResourceDescriptionsMessage = { ... }
```

##### `environmentResources`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentResourceDescriptionsMessage.property.environmentResources"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentResourceDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentResourceDescription)

---

### ElasticBeanstalkEnvironmentResourcesDescription <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentResourcesDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkEnvironmentResourcesDescription: elasticbeanstalk.ElasticBeanstalkEnvironmentResourcesDescription = { ... }
```

##### `loadBalancer`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentResourcesDescription.property.loadBalancer"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLoadBalancerDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLoadBalancerDescription)

---

### ElasticBeanstalkEnvironmentTier <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentTier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkEnvironmentTier: elasticbeanstalk.ElasticBeanstalkEnvironmentTier = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentTier.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentTier.property.type"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentTier.property.version"></a>

- *Type:* `string`

---

### ElasticBeanstalkEventDescription <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEventDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkEventDescription: elasticbeanstalk.ElasticBeanstalkEventDescription = { ... }
```

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEventDescription.property.applicationName"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEventDescription.property.environmentName"></a>

- *Type:* `string`

---

##### `eventDate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEventDescription.property.eventDate"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEventDescription.property.message"></a>

- *Type:* `string`

---

##### `platformArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEventDescription.property.platformArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEventDescription.property.requestId"></a>

- *Type:* `string`

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEventDescription.property.severity"></a>

- *Type:* `string`

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEventDescription.property.templateName"></a>

- *Type:* `string`

---

##### `versionLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEventDescription.property.versionLabel"></a>

- *Type:* `string`

---

### ElasticBeanstalkEventDescriptionsMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEventDescriptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkEventDescriptionsMessage: elasticbeanstalk.ElasticBeanstalkEventDescriptionsMessage = { ... }
```

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEventDescriptionsMessage.property.events"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEventDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEventDescription)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEventDescriptionsMessage.property.nextToken"></a>

- *Type:* `string`

---

### ElasticBeanstalkInstance <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkInstance: elasticbeanstalk.ElasticBeanstalkInstance = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkInstance.property.id"></a>

- *Type:* `string`

---

### ElasticBeanstalkInstanceHealthSummary <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkInstanceHealthSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkInstanceHealthSummary: elasticbeanstalk.ElasticBeanstalkInstanceHealthSummary = { ... }
```

##### `degraded`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkInstanceHealthSummary.property.degraded"></a>

- *Type:* `number`

---

##### `info`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkInstanceHealthSummary.property.info"></a>

- *Type:* `number`

---

##### `noData`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkInstanceHealthSummary.property.noData"></a>

- *Type:* `number`

---

##### `ok`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkInstanceHealthSummary.property.ok"></a>

- *Type:* `number`

---

##### `pending`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkInstanceHealthSummary.property.pending"></a>

- *Type:* `number`

---

##### `severe`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkInstanceHealthSummary.property.severe"></a>

- *Type:* `number`

---

##### `unknown`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkInstanceHealthSummary.property.unknown"></a>

- *Type:* `number`

---

##### `warning`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkInstanceHealthSummary.property.warning"></a>

- *Type:* `number`

---

### ElasticBeanstalkLatency <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLatency"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkLatency: elasticbeanstalk.ElasticBeanstalkLatency = { ... }
```

##### `p10`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLatency.property.p10"></a>

- *Type:* `number`

---

##### `p50`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLatency.property.p50"></a>

- *Type:* `number`

---

##### `p75`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLatency.property.p75"></a>

- *Type:* `number`

---

##### `p85`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLatency.property.p85"></a>

- *Type:* `number`

---

##### `p90`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLatency.property.p90"></a>

- *Type:* `number`

---

##### `p95`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLatency.property.p95"></a>

- *Type:* `number`

---

##### `p99`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLatency.property.p99"></a>

- *Type:* `number`

---

##### `p999`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLatency.property.p999"></a>

- *Type:* `number`

---

### ElasticBeanstalkLaunchConfiguration <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLaunchConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkLaunchConfiguration: elasticbeanstalk.ElasticBeanstalkLaunchConfiguration = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLaunchConfiguration.property.name"></a>

- *Type:* `string`

---

### ElasticBeanstalkLaunchTemplate <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLaunchTemplate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkLaunchTemplate: elasticbeanstalk.ElasticBeanstalkLaunchTemplate = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLaunchTemplate.property.id"></a>

- *Type:* `string`

---

### ElasticBeanstalkListAvailableSolutionStacksResultMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListAvailableSolutionStacksResultMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkListAvailableSolutionStacksResultMessage: elasticbeanstalk.ElasticBeanstalkListAvailableSolutionStacksResultMessage = { ... }
```

##### `solutionStackDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListAvailableSolutionStacksResultMessage.property.solutionStackDetails"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSolutionStackDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSolutionStackDescription)[]

---

##### `solutionStacks`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListAvailableSolutionStacksResultMessage.property.solutionStacks"></a>

- *Type:* `string`[]

---

### ElasticBeanstalkListener <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListener"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkListener: elasticbeanstalk.ElasticBeanstalkListener = { ... }
```

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListener.property.port"></a>

- *Type:* `number`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListener.property.protocol"></a>

- *Type:* `string`

---

### ElasticBeanstalkListPlatformBranchesRequest <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformBranchesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkListPlatformBranchesRequest: elasticbeanstalk.ElasticBeanstalkListPlatformBranchesRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformBranchesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSearchFilter`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSearchFilter)[]

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformBranchesRequest.property.maxRecords"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformBranchesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ElasticBeanstalkListPlatformBranchesResult <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformBranchesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkListPlatformBranchesResult: elasticbeanstalk.ElasticBeanstalkListPlatformBranchesResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformBranchesResult.property.nextToken"></a>

- *Type:* `string`

---

##### `platformBranchSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformBranchesResult.property.platformBranchSummaryList"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformBranchSummary`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformBranchSummary)[]

---

### ElasticBeanstalkListPlatformVersionsRequest <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkListPlatformVersionsRequest: elasticbeanstalk.ElasticBeanstalkListPlatformVersionsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformVersionsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformFilter`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformFilter)[]

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformVersionsRequest.property.maxRecords"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ElasticBeanstalkListPlatformVersionsResult <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformVersionsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkListPlatformVersionsResult: elasticbeanstalk.ElasticBeanstalkListPlatformVersionsResult = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformVersionsResult.property.nextToken"></a>

- *Type:* `string`

---

##### `platformSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformVersionsResult.property.platformSummaryList"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary)[]

---

### ElasticBeanstalkListTagsForResourceMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListTagsForResourceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkListTagsForResourceMessage: elasticbeanstalk.ElasticBeanstalkListTagsForResourceMessage = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListTagsForResourceMessage.property.resourceArn"></a>

- *Type:* `string`

---

### ElasticBeanstalkLoadBalancer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLoadBalancer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkLoadBalancer: elasticbeanstalk.ElasticBeanstalkLoadBalancer = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLoadBalancer.property.name"></a>

- *Type:* `string`

---

### ElasticBeanstalkLoadBalancerDescription <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLoadBalancerDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkLoadBalancerDescription: elasticbeanstalk.ElasticBeanstalkLoadBalancerDescription = { ... }
```

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLoadBalancerDescription.property.domain"></a>

- *Type:* `string`

---

##### `listeners`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLoadBalancerDescription.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListener`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListener)[]

---

##### `loadBalancerName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLoadBalancerDescription.property.loadBalancerName"></a>

- *Type:* `string`

---

### ElasticBeanstalkManagedAction <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkManagedAction: elasticbeanstalk.ElasticBeanstalkManagedAction = { ... }
```

##### `actionDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedAction.property.actionDescription"></a>

- *Type:* `string`

---

##### `actionId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedAction.property.actionId"></a>

- *Type:* `string`

---

##### `actionType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedAction.property.actionType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedAction.property.status"></a>

- *Type:* `string`

---

##### `windowStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedAction.property.windowStartTime"></a>

- *Type:* `string`

---

### ElasticBeanstalkManagedActionHistoryItem <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedActionHistoryItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkManagedActionHistoryItem: elasticbeanstalk.ElasticBeanstalkManagedActionHistoryItem = { ... }
```

##### `actionDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedActionHistoryItem.property.actionDescription"></a>

- *Type:* `string`

---

##### `actionId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedActionHistoryItem.property.actionId"></a>

- *Type:* `string`

---

##### `actionType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedActionHistoryItem.property.actionType"></a>

- *Type:* `string`

---

##### `executedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedActionHistoryItem.property.executedTime"></a>

- *Type:* `string`

---

##### `failureDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedActionHistoryItem.property.failureDescription"></a>

- *Type:* `string`

---

##### `failureType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedActionHistoryItem.property.failureType"></a>

- *Type:* `string`

---

##### `finishedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedActionHistoryItem.property.finishedTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedActionHistoryItem.property.status"></a>

- *Type:* `string`

---

### ElasticBeanstalkMaxAgeRule <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkMaxAgeRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkMaxAgeRule: elasticbeanstalk.ElasticBeanstalkMaxAgeRule = { ... }
```

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkMaxAgeRule.property.enabled"></a>

- *Type:* `boolean`

---

##### `deleteSourceFromS3`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkMaxAgeRule.property.deleteSourceFromS3"></a>

- *Type:* `boolean`

---

##### `maxAgeInDays`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkMaxAgeRule.property.maxAgeInDays"></a>

- *Type:* `number`

---

### ElasticBeanstalkMaxCountRule <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkMaxCountRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkMaxCountRule: elasticbeanstalk.ElasticBeanstalkMaxCountRule = { ... }
```

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkMaxCountRule.property.enabled"></a>

- *Type:* `boolean`

---

##### `deleteSourceFromS3`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkMaxCountRule.property.deleteSourceFromS3"></a>

- *Type:* `boolean`

---

##### `maxCount`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkMaxCountRule.property.maxCount"></a>

- *Type:* `number`

---

### ElasticBeanstalkOptionRestrictionRegex <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkOptionRestrictionRegex"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkOptionRestrictionRegex: elasticbeanstalk.ElasticBeanstalkOptionRestrictionRegex = { ... }
```

##### `label`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkOptionRestrictionRegex.property.label"></a>

- *Type:* `string`

---

##### `pattern`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkOptionRestrictionRegex.property.pattern"></a>

- *Type:* `string`

---

### ElasticBeanstalkOptionSpecification <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkOptionSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkOptionSpecification: elasticbeanstalk.ElasticBeanstalkOptionSpecification = { ... }
```

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkOptionSpecification.property.namespace"></a>

- *Type:* `string`

---

##### `optionName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkOptionSpecification.property.optionName"></a>

- *Type:* `string`

---

##### `resourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkOptionSpecification.property.resourceName"></a>

- *Type:* `string`

---

### ElasticBeanstalkPlatformBranchSummary <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformBranchSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkPlatformBranchSummary: elasticbeanstalk.ElasticBeanstalkPlatformBranchSummary = { ... }
```

##### `branchName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformBranchSummary.property.branchName"></a>

- *Type:* `string`

---

##### `branchOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformBranchSummary.property.branchOrder"></a>

- *Type:* `number`

---

##### `lifecycleState`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformBranchSummary.property.lifecycleState"></a>

- *Type:* `string`

---

##### `platformName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformBranchSummary.property.platformName"></a>

- *Type:* `string`

---

##### `supportedTierList`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformBranchSummary.property.supportedTierList"></a>

- *Type:* `string`[]

---

### ElasticBeanstalkPlatformDescription <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkPlatformDescription: elasticbeanstalk.ElasticBeanstalkPlatformDescription = { ... }
```

##### `customAmiList`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.customAmiList"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCustomAmi`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCustomAmi)[]

---

##### `dateCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.description"></a>

- *Type:* `string`

---

##### `frameworks`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.frameworks"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformFramework`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformFramework)[]

---

##### `maintainer`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.maintainer"></a>

- *Type:* `string`

---

##### `operatingSystemName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.operatingSystemName"></a>

- *Type:* `string`

---

##### `operatingSystemVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.operatingSystemVersion"></a>

- *Type:* `string`

---

##### `platformArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.platformArn"></a>

- *Type:* `string`

---

##### `platformBranchLifecycleState`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.platformBranchLifecycleState"></a>

- *Type:* `string`

---

##### `platformBranchName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.platformBranchName"></a>

- *Type:* `string`

---

##### `platformCategory`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.platformCategory"></a>

- *Type:* `string`

---

##### `platformLifecycleState`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.platformLifecycleState"></a>

- *Type:* `string`

---

##### `platformName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.platformName"></a>

- *Type:* `string`

---

##### `platformOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.platformOwner"></a>

- *Type:* `string`

---

##### `platformStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.platformStatus"></a>

- *Type:* `string`

---

##### `platformVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.platformVersion"></a>

- *Type:* `string`

---

##### `programmingLanguages`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.programmingLanguages"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformProgrammingLanguage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformProgrammingLanguage)[]

---

##### `solutionStackName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.solutionStackName"></a>

- *Type:* `string`

---

##### `supportedAddonList`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.supportedAddonList"></a>

- *Type:* `string`[]

---

##### `supportedTierList`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformDescription.property.supportedTierList"></a>

- *Type:* `string`[]

---

### ElasticBeanstalkPlatformFilter <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkPlatformFilter: elasticbeanstalk.ElasticBeanstalkPlatformFilter = { ... }
```

##### `operator`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformFilter.property.operator"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformFilter.property.type"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformFilter.property.values"></a>

- *Type:* `string`[]

---

### ElasticBeanstalkPlatformFramework <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformFramework"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkPlatformFramework: elasticbeanstalk.ElasticBeanstalkPlatformFramework = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformFramework.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformFramework.property.version"></a>

- *Type:* `string`

---

### ElasticBeanstalkPlatformProgrammingLanguage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformProgrammingLanguage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkPlatformProgrammingLanguage: elasticbeanstalk.ElasticBeanstalkPlatformProgrammingLanguage = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformProgrammingLanguage.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformProgrammingLanguage.property.version"></a>

- *Type:* `string`

---

### ElasticBeanstalkPlatformSummary <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkPlatformSummary: elasticbeanstalk.ElasticBeanstalkPlatformSummary = { ... }
```

##### `operatingSystemName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary.property.operatingSystemName"></a>

- *Type:* `string`

---

##### `operatingSystemVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary.property.operatingSystemVersion"></a>

- *Type:* `string`

---

##### `platformArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary.property.platformArn"></a>

- *Type:* `string`

---

##### `platformBranchLifecycleState`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary.property.platformBranchLifecycleState"></a>

- *Type:* `string`

---

##### `platformBranchName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary.property.platformBranchName"></a>

- *Type:* `string`

---

##### `platformCategory`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary.property.platformCategory"></a>

- *Type:* `string`

---

##### `platformLifecycleState`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary.property.platformLifecycleState"></a>

- *Type:* `string`

---

##### `platformOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary.property.platformOwner"></a>

- *Type:* `string`

---

##### `platformStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary.property.platformStatus"></a>

- *Type:* `string`

---

##### `platformVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary.property.platformVersion"></a>

- *Type:* `string`

---

##### `supportedAddonList`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary.property.supportedAddonList"></a>

- *Type:* `string`[]

---

##### `supportedTierList`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary.property.supportedTierList"></a>

- *Type:* `string`[]

---

### ElasticBeanstalkQueue <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkQueue"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkQueue: elasticbeanstalk.ElasticBeanstalkQueue = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkQueue.property.name"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkQueue.property.url"></a>

- *Type:* `string`

---

### ElasticBeanstalkRebuildEnvironmentMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRebuildEnvironmentMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkRebuildEnvironmentMessage: elasticbeanstalk.ElasticBeanstalkRebuildEnvironmentMessage = { ... }
```

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRebuildEnvironmentMessage.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRebuildEnvironmentMessage.property.environmentName"></a>

- *Type:* `string`

---

### ElasticBeanstalkRequestEnvironmentInfoMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRequestEnvironmentInfoMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkRequestEnvironmentInfoMessage: elasticbeanstalk.ElasticBeanstalkRequestEnvironmentInfoMessage = { ... }
```

##### `infoType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRequestEnvironmentInfoMessage.property.infoType"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRequestEnvironmentInfoMessage.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRequestEnvironmentInfoMessage.property.environmentName"></a>

- *Type:* `string`

---

### ElasticBeanstalkResourceQuota <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuota"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkResourceQuota: elasticbeanstalk.ElasticBeanstalkResourceQuota = { ... }
```

##### `maximum`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuota.property.maximum"></a>

- *Type:* `number`

---

### ElasticBeanstalkResourceQuotas <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuotas"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkResourceQuotas: elasticbeanstalk.ElasticBeanstalkResourceQuotas = { ... }
```

##### `applicationQuota`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuotas.property.applicationQuota"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuota`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuota)

---

##### `applicationVersionQuota`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuotas.property.applicationVersionQuota"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuota`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuota)

---

##### `configurationTemplateQuota`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuotas.property.configurationTemplateQuota"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuota`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuota)

---

##### `customPlatformQuota`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuotas.property.customPlatformQuota"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuota`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuota)

---

##### `environmentQuota`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuotas.property.environmentQuota"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuota`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceQuota)

---

### ElasticBeanstalkResourceTagsDescriptionMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceTagsDescriptionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkResourceTagsDescriptionMessage: elasticbeanstalk.ElasticBeanstalkResourceTagsDescriptionMessage = { ... }
```

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceTagsDescriptionMessage.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceTags`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResourceTagsDescriptionMessage.property.resourceTags"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag)[]

---

### ElasticBeanstalkRestartAppServerMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRestartAppServerMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkRestartAppServerMessage: elasticbeanstalk.ElasticBeanstalkRestartAppServerMessage = { ... }
```

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRestartAppServerMessage.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRestartAppServerMessage.property.environmentName"></a>

- *Type:* `string`

---

### ElasticBeanstalkRetrieveEnvironmentInfoMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRetrieveEnvironmentInfoMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkRetrieveEnvironmentInfoMessage: elasticbeanstalk.ElasticBeanstalkRetrieveEnvironmentInfoMessage = { ... }
```

##### `infoType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRetrieveEnvironmentInfoMessage.property.infoType"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRetrieveEnvironmentInfoMessage.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRetrieveEnvironmentInfoMessage.property.environmentName"></a>

- *Type:* `string`

---

### ElasticBeanstalkRetrieveEnvironmentInfoResultMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRetrieveEnvironmentInfoResultMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkRetrieveEnvironmentInfoResultMessage: elasticbeanstalk.ElasticBeanstalkRetrieveEnvironmentInfoResultMessage = { ... }
```

##### `environmentInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRetrieveEnvironmentInfoResultMessage.property.environmentInfo"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentInfoDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentInfoDescription)[]

---

### ElasticBeanstalkS3Location <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkS3Location"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkS3Location: elasticbeanstalk.ElasticBeanstalkS3Location = { ... }
```

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkS3Location.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkS3Location.property.s3Key"></a>

- *Type:* `string`

---

### ElasticBeanstalkSearchFilter <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSearchFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkSearchFilter: elasticbeanstalk.ElasticBeanstalkSearchFilter = { ... }
```

##### `attribute`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSearchFilter.property.attribute"></a>

- *Type:* `string`

---

##### `operator`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSearchFilter.property.operator"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSearchFilter.property.values"></a>

- *Type:* `string`[]

---

### ElasticBeanstalkSingleInstanceHealth <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSingleInstanceHealth"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkSingleInstanceHealth: elasticbeanstalk.ElasticBeanstalkSingleInstanceHealth = { ... }
```

##### `applicationMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSingleInstanceHealth.property.applicationMetrics"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationMetrics`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationMetrics)

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSingleInstanceHealth.property.availabilityZone"></a>

- *Type:* `string`

---

##### `causes`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSingleInstanceHealth.property.causes"></a>

- *Type:* `string`[]

---

##### `color`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSingleInstanceHealth.property.color"></a>

- *Type:* `string`

---

##### `deployment`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSingleInstanceHealth.property.deployment"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeployment`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeployment)

---

##### `healthStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSingleInstanceHealth.property.healthStatus"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSingleInstanceHealth.property.instanceId"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSingleInstanceHealth.property.instanceType"></a>

- *Type:* `string`

---

##### `launchedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSingleInstanceHealth.property.launchedAt"></a>

- *Type:* `string`

---

##### `system`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSingleInstanceHealth.property.system"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSystemStatus`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSystemStatus)

---

### ElasticBeanstalkSolutionStackDescription <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSolutionStackDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkSolutionStackDescription: elasticbeanstalk.ElasticBeanstalkSolutionStackDescription = { ... }
```

##### `permittedFileTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSolutionStackDescription.property.permittedFileTypes"></a>

- *Type:* `string`[]

---

##### `solutionStackName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSolutionStackDescription.property.solutionStackName"></a>

- *Type:* `string`

---

### ElasticBeanstalkSourceBuildInformation <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSourceBuildInformation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkSourceBuildInformation: elasticbeanstalk.ElasticBeanstalkSourceBuildInformation = { ... }
```

##### `sourceLocation`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSourceBuildInformation.property.sourceLocation"></a>

- *Type:* `string`

---

##### `sourceRepository`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSourceBuildInformation.property.sourceRepository"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSourceBuildInformation.property.sourceType"></a>

- *Type:* `string`

---

### ElasticBeanstalkSourceConfiguration <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSourceConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkSourceConfiguration: elasticbeanstalk.ElasticBeanstalkSourceConfiguration = { ... }
```

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSourceConfiguration.property.applicationName"></a>

- *Type:* `string`

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSourceConfiguration.property.templateName"></a>

- *Type:* `string`

---

### ElasticBeanstalkStatusCodes <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkStatusCodes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkStatusCodes: elasticbeanstalk.ElasticBeanstalkStatusCodes = { ... }
```

##### `status2Xx`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkStatusCodes.property.status2Xx"></a>

- *Type:* `number`

---

##### `status3Xx`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkStatusCodes.property.status3Xx"></a>

- *Type:* `number`

---

##### `status4Xx`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkStatusCodes.property.status4Xx"></a>

- *Type:* `number`

---

##### `status5Xx`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkStatusCodes.property.status5Xx"></a>

- *Type:* `number`

---

### ElasticBeanstalkSwapEnvironmentCnamEsMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSwapEnvironmentCnamEsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkSwapEnvironmentCnamEsMessage: elasticbeanstalk.ElasticBeanstalkSwapEnvironmentCnamEsMessage = { ... }
```

##### `destinationEnvironmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSwapEnvironmentCnamEsMessage.property.destinationEnvironmentId"></a>

- *Type:* `string`

---

##### `destinationEnvironmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSwapEnvironmentCnamEsMessage.property.destinationEnvironmentName"></a>

- *Type:* `string`

---

##### `sourceEnvironmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSwapEnvironmentCnamEsMessage.property.sourceEnvironmentId"></a>

- *Type:* `string`

---

##### `sourceEnvironmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSwapEnvironmentCnamEsMessage.property.sourceEnvironmentName"></a>

- *Type:* `string`

---

### ElasticBeanstalkSystemStatus <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSystemStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkSystemStatus: elasticbeanstalk.ElasticBeanstalkSystemStatus = { ... }
```

##### `cpuUtilization`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSystemStatus.property.cpuUtilization"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCpuUtilization`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCpuUtilization)

---

##### `loadAverage`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSystemStatus.property.loadAverage"></a>

- *Type:* `number`[]

---

### ElasticBeanstalkTag <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkTag: elasticbeanstalk.ElasticBeanstalkTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag.property.value"></a>

- *Type:* `string`

---

### ElasticBeanstalkTerminateEnvironmentMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTerminateEnvironmentMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkTerminateEnvironmentMessage: elasticbeanstalk.ElasticBeanstalkTerminateEnvironmentMessage = { ... }
```

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTerminateEnvironmentMessage.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTerminateEnvironmentMessage.property.environmentName"></a>

- *Type:* `string`

---

##### `forceTerminate`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTerminateEnvironmentMessage.property.forceTerminate"></a>

- *Type:* `boolean`

---

##### `terminateResources`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTerminateEnvironmentMessage.property.terminateResources"></a>

- *Type:* `boolean`

---

### ElasticBeanstalkTrigger <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTrigger"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkTrigger: elasticbeanstalk.ElasticBeanstalkTrigger = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTrigger.property.name"></a>

- *Type:* `string`

---

### ElasticBeanstalkUpdateApplicationMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkUpdateApplicationMessage: elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage.property.description"></a>

- *Type:* `string`

---

### ElasticBeanstalkUpdateApplicationResourceLifecycleMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkUpdateApplicationResourceLifecycleMessage: elasticbeanstalk.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `resourceLifecycleConfig`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage.property.resourceLifecycleConfig"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationResourceLifecycleConfig`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationResourceLifecycleConfig)

---

### ElasticBeanstalkUpdateApplicationVersionMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationVersionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkUpdateApplicationVersionMessage: elasticbeanstalk.ElasticBeanstalkUpdateApplicationVersionMessage = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationVersionMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `versionLabel`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationVersionMessage.property.versionLabel"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationVersionMessage.property.description"></a>

- *Type:* `string`

---

### ElasticBeanstalkUpdateConfigurationTemplateMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateConfigurationTemplateMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkUpdateConfigurationTemplateMessage: elasticbeanstalk.ElasticBeanstalkUpdateConfigurationTemplateMessage = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateConfigurationTemplateMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateConfigurationTemplateMessage.property.templateName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateConfigurationTemplateMessage.property.description"></a>

- *Type:* `string`

---

##### `optionSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateConfigurationTemplateMessage.property.optionSettings"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting)[]

---

##### `optionsToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateConfigurationTemplateMessage.property.optionsToRemove"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkOptionSpecification`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkOptionSpecification)[]

---

### ElasticBeanstalkUpdateEnvironmentMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkUpdateEnvironmentMessage: elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage = { ... }
```

##### `applicationName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage.property.description"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage.property.environmentName"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage.property.groupName"></a>

- *Type:* `string`

---

##### `optionSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage.property.optionSettings"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting)[]

---

##### `optionsToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage.property.optionsToRemove"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkOptionSpecification`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkOptionSpecification)[]

---

##### `platformArn`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage.property.platformArn"></a>

- *Type:* `string`

---

##### `solutionStackName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage.property.solutionStackName"></a>

- *Type:* `string`

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage.property.templateName"></a>

- *Type:* `string`

---

##### `tier`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage.property.tier"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentTier`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentTier)

---

##### `versionLabel`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage.property.versionLabel"></a>

- *Type:* `string`

---

### ElasticBeanstalkUpdateTagsForResourceMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateTagsForResourceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkUpdateTagsForResourceMessage: elasticbeanstalk.ElasticBeanstalkUpdateTagsForResourceMessage = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateTagsForResourceMessage.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagsToAdd`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateTagsForResourceMessage.property.tagsToAdd"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag)[]

---

##### `tagsToRemove`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateTagsForResourceMessage.property.tagsToRemove"></a>

- *Type:* `string`[]

---

### ElasticBeanstalkValidateConfigurationSettingsMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidateConfigurationSettingsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkValidateConfigurationSettingsMessage: elasticbeanstalk.ElasticBeanstalkValidateConfigurationSettingsMessage = { ... }
```

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidateConfigurationSettingsMessage.property.applicationName"></a>

- *Type:* `string`

---

##### `optionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidateConfigurationSettingsMessage.property.optionSettings"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting)[]

---

##### `environmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidateConfigurationSettingsMessage.property.environmentName"></a>

- *Type:* `string`

---

##### `templateName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidateConfigurationSettingsMessage.property.templateName"></a>

- *Type:* `string`

---

### ElasticBeanstalkValidationMessage <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidationMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

const elasticBeanstalkValidationMessage: elasticbeanstalk.ElasticBeanstalkValidationMessage = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidationMessage.property.message"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidationMessage.property.namespace"></a>

- *Type:* `string`

---

##### `optionName`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidationMessage.property.optionName"></a>

- *Type:* `string`

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidationMessage.property.severity"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### ElasticBeanstalkResponsesApplyEnvironmentManagedAction <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesApplyEnvironmentManagedAction"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesApplyEnvironmentManagedAction.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesApplyEnvironmentManagedAction(__scope: Construct, __resources: string[], __input: ElasticBeanstalkApplyEnvironmentManagedActionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesApplyEnvironmentManagedAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesApplyEnvironmentManagedAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesApplyEnvironmentManagedAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplyEnvironmentManagedActionRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplyEnvironmentManagedActionRequest)

---



#### Properties <a name="Properties"></a>

##### `actionDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesApplyEnvironmentManagedAction.property.actionDescription"></a>

- *Type:* `string`

---

##### `actionId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesApplyEnvironmentManagedAction.property.actionId"></a>

- *Type:* `string`

---

##### `actionType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesApplyEnvironmentManagedAction.property.actionType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesApplyEnvironmentManagedAction.property.status"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesCheckDnsAvailability <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCheckDnsAvailability"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCheckDnsAvailability.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCheckDnsAvailability(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCheckDnsAvailabilityMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCheckDnsAvailability.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCheckDnsAvailability.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCheckDnsAvailability.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCheckDnsAvailabilityMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCheckDnsAvailabilityMessage)

---



#### Properties <a name="Properties"></a>

##### `available`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCheckDnsAvailability.property.available"></a>

- *Type:* `boolean`

---

##### `fullyQualifiedCname`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCheckDnsAvailability.property.fullyQualifiedCname"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesComposeEnvironments <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesComposeEnvironments"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesComposeEnvironments.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesComposeEnvironments(__scope: Construct, __resources: string[], __input: ElasticBeanstalkComposeEnvironmentsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesComposeEnvironments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesComposeEnvironments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesComposeEnvironments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkComposeEnvironmentsMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkComposeEnvironmentsMessage)

---



#### Properties <a name="Properties"></a>

##### `environments`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesComposeEnvironments.property.environments"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesComposeEnvironments.property.nextToken"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesCreateApplication <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplication"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplication.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreateApplication(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreateApplicationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage)

---



#### Properties <a name="Properties"></a>

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplication.property.application"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplication`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplication)

---


### ElasticBeanstalkResponsesCreateApplicationApplication <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplication"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplication.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplication(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreateApplicationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage)

---



#### Properties <a name="Properties"></a>

##### `applicationArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplication.property.applicationArn"></a>

- *Type:* `string`

---

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplication.property.applicationName"></a>

- *Type:* `string`

---

##### `configurationTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplication.property.configurationTemplates"></a>

- *Type:* `string`[]

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplication.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplication.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplication.property.description"></a>

- *Type:* `string`

---

##### `resourceLifecycleConfig`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplication.property.resourceLifecycleConfig"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfig`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfig)

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplication.property.versions"></a>

- *Type:* `string`[]

---


### ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfig <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfig"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfig.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfig(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreateApplicationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage)

---



#### Properties <a name="Properties"></a>

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfig.property.serviceRole"></a>

- *Type:* `string`

---

##### `versionLifecycleConfig`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfig.property.versionLifecycleConfig"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig)

---


### ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreateApplicationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage)

---



#### Properties <a name="Properties"></a>

##### `maxAgeRule`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig.property.maxAgeRule"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule)

---

##### `maxCountRule`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig.property.maxCountRule"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule)

---


### ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreateApplicationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage)

---



#### Properties <a name="Properties"></a>

##### `deleteSourceFromS3`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.deleteSourceFromS3"></a>

- *Type:* `boolean`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.enabled"></a>

- *Type:* `boolean`

---

##### `maxAgeInDays`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.maxAgeInDays"></a>

- *Type:* `number`

---


### ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreateApplicationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationMessage)

---



#### Properties <a name="Properties"></a>

##### `deleteSourceFromS3`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.deleteSourceFromS3"></a>

- *Type:* `boolean`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.enabled"></a>

- *Type:* `boolean`

---

##### `maxCount`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.maxCount"></a>

- *Type:* `number`

---


### ElasticBeanstalkResponsesCreateApplicationVersion <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersion"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersion.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersion(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreateApplicationVersionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage)

---



#### Properties <a name="Properties"></a>

##### `applicationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersion.property.applicationVersion"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion)

---


### ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreateApplicationVersionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage)

---



#### Properties <a name="Properties"></a>

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion.property.applicationName"></a>

- *Type:* `string`

---

##### `applicationVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion.property.applicationVersionArn"></a>

- *Type:* `string`

---

##### `buildArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion.property.buildArn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion.property.description"></a>

- *Type:* `string`

---

##### `sourceBuildInformation`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion.property.sourceBuildInformation"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBuildInformation`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBuildInformation)

---

##### `sourceBundle`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion.property.sourceBundle"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBundle`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBundle)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion.property.status"></a>

- *Type:* `string`

---

##### `versionLabel`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersion.property.versionLabel"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBuildInformation <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBuildInformation"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBuildInformation.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBuildInformation(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreateApplicationVersionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBuildInformation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBuildInformation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBuildInformation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage)

---



#### Properties <a name="Properties"></a>

##### `sourceLocation`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBuildInformation.property.sourceLocation"></a>

- *Type:* `string`

---

##### `sourceRepository`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBuildInformation.property.sourceRepository"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBuildInformation.property.sourceType"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBundle <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBundle"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBundle.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBundle(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreateApplicationVersionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBundle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBundle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBundle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateApplicationVersionMessage)

---



#### Properties <a name="Properties"></a>

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBundle.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateApplicationVersionApplicationVersionSourceBundle.property.s3Key"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesCreateConfigurationTemplate <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateConfigurationTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateConfigurationTemplate.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreateConfigurationTemplate(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreateConfigurationTemplateMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateConfigurationTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateConfigurationTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateConfigurationTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateConfigurationTemplateMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateConfigurationTemplateMessage)

---



#### Properties <a name="Properties"></a>

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateConfigurationTemplate.property.applicationName"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateConfigurationTemplate.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateConfigurationTemplate.property.dateUpdated"></a>

- *Type:* `string`

---

##### `deploymentStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateConfigurationTemplate.property.deploymentStatus"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateConfigurationTemplate.property.description"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateConfigurationTemplate.property.environmentName"></a>

- *Type:* `string`

---

##### `optionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateConfigurationTemplate.property.optionSettings"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting)[]

---

##### `platformArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateConfigurationTemplate.property.platformArn"></a>

- *Type:* `string`

---

##### `solutionStackName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateConfigurationTemplate.property.solutionStackName"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateConfigurationTemplate.property.templateName"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesCreateEnvironment <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreateEnvironmentMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage)

---



#### Properties <a name="Properties"></a>

##### `abortableOperationInProgress`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.abortableOperationInProgress"></a>

- *Type:* `boolean`

---

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.applicationName"></a>

- *Type:* `string`

---

##### `cname`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.cname"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.description"></a>

- *Type:* `string`

---

##### `endpointUrl`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.endpointUrl"></a>

- *Type:* `string`

---

##### `environmentArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.environmentArn"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentLinks`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.environmentLinks"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentLink`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentLink)[]

---

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.environmentName"></a>

- *Type:* `string`

---

##### `health`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.health"></a>

- *Type:* `string`

---

##### `healthStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.healthStatus"></a>

- *Type:* `string`

---

##### `operationsRole`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.operationsRole"></a>

- *Type:* `string`

---

##### `platformArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.platformArn"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.resources"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResources`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResources)

---

##### `solutionStackName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.solutionStackName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.status"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.templateName"></a>

- *Type:* `string`

---

##### `tier`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.tier"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentTier`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentTier)

---

##### `versionLabel`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironment.property.versionLabel"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesCreateEnvironmentResources <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResources"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResources.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResources(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreateEnvironmentMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage)

---



#### Properties <a name="Properties"></a>

##### `loadBalancer`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResources.property.loadBalancer"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResourcesLoadBalancer`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResourcesLoadBalancer)

---


### ElasticBeanstalkResponsesCreateEnvironmentResourcesLoadBalancer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResourcesLoadBalancer"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResourcesLoadBalancer.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResourcesLoadBalancer(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreateEnvironmentMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResourcesLoadBalancer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResourcesLoadBalancer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResourcesLoadBalancer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage)

---



#### Properties <a name="Properties"></a>

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResourcesLoadBalancer.property.domain"></a>

- *Type:* `string`

---

##### `listeners`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResourcesLoadBalancer.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListener`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListener)[]

---

##### `loadBalancerName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentResourcesLoadBalancer.property.loadBalancerName"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesCreateEnvironmentTier <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentTier"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentTier.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentTier(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreateEnvironmentMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentTier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentTier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentTier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreateEnvironmentMessage)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentTier.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentTier.property.type"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateEnvironmentTier.property.version"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesCreatePlatformVersion <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersion"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersion.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersion(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreatePlatformVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `builder`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersion.property.builder"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionBuilder`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionBuilder)

---

##### `platformSummary`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersion.property.platformSummary"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary)

---


### ElasticBeanstalkResponsesCreatePlatformVersionBuilder <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionBuilder"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionBuilder.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionBuilder(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreatePlatformVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionBuilder.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionBuilder.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionBuilder.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionBuilder.property.arn"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary(__scope: Construct, __resources: string[], __input: ElasticBeanstalkCreatePlatformVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCreatePlatformVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `operatingSystemName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary.property.operatingSystemName"></a>

- *Type:* `string`

---

##### `operatingSystemVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary.property.operatingSystemVersion"></a>

- *Type:* `string`

---

##### `platformArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary.property.platformArn"></a>

- *Type:* `string`

---

##### `platformBranchLifecycleState`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary.property.platformBranchLifecycleState"></a>

- *Type:* `string`

---

##### `platformBranchName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary.property.platformBranchName"></a>

- *Type:* `string`

---

##### `platformCategory`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary.property.platformCategory"></a>

- *Type:* `string`

---

##### `platformLifecycleState`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary.property.platformLifecycleState"></a>

- *Type:* `string`

---

##### `platformOwner`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary.property.platformOwner"></a>

- *Type:* `string`

---

##### `platformStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary.property.platformStatus"></a>

- *Type:* `string`

---

##### `platformVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary.property.platformVersion"></a>

- *Type:* `string`

---

##### `supportedAddonList`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary.property.supportedAddonList"></a>

- *Type:* `string`[]

---

##### `supportedTierList`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreatePlatformVersionPlatformSummary.property.supportedTierList"></a>

- *Type:* `string`[]

---


### ElasticBeanstalkResponsesCreateStorageLocation <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateStorageLocation"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateStorageLocation.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesCreateStorageLocation(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateStorageLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateStorageLocation.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesCreateStorageLocation.property.s3Bucket"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesDeletePlatformVersion <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersion"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersion.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersion(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDeletePlatformVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeletePlatformVersionRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeletePlatformVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `platformSummary`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersion.property.platformSummary"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary)

---


### ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDeletePlatformVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeletePlatformVersionRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDeletePlatformVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `operatingSystemName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary.property.operatingSystemName"></a>

- *Type:* `string`

---

##### `operatingSystemVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary.property.operatingSystemVersion"></a>

- *Type:* `string`

---

##### `platformArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary.property.platformArn"></a>

- *Type:* `string`

---

##### `platformBranchLifecycleState`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary.property.platformBranchLifecycleState"></a>

- *Type:* `string`

---

##### `platformBranchName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary.property.platformBranchName"></a>

- *Type:* `string`

---

##### `platformCategory`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary.property.platformCategory"></a>

- *Type:* `string`

---

##### `platformLifecycleState`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary.property.platformLifecycleState"></a>

- *Type:* `string`

---

##### `platformOwner`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary.property.platformOwner"></a>

- *Type:* `string`

---

##### `platformStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary.property.platformStatus"></a>

- *Type:* `string`

---

##### `platformVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary.property.platformVersion"></a>

- *Type:* `string`

---

##### `supportedAddonList`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary.property.supportedAddonList"></a>

- *Type:* `string`[]

---

##### `supportedTierList`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDeletePlatformVersionPlatformSummary.property.supportedTierList"></a>

- *Type:* `string`[]

---


### ElasticBeanstalkResponsesDescribeAccountAttributes <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributes.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributes(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `resourceQuotas`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributes.property.resourceQuotas"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotas`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotas)

---


### ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotas <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotas"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotas.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotas(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotas.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotas.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `applicationQuota`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotas.property.applicationQuota"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationQuota`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationQuota)

---

##### `applicationVersionQuota`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotas.property.applicationVersionQuota"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationVersionQuota`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationVersionQuota)

---

##### `configurationTemplateQuota`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotas.property.configurationTemplateQuota"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasConfigurationTemplateQuota`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasConfigurationTemplateQuota)

---

##### `customPlatformQuota`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotas.property.customPlatformQuota"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasCustomPlatformQuota`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasCustomPlatformQuota)

---

##### `environmentQuota`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotas.property.environmentQuota"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasEnvironmentQuota`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasEnvironmentQuota)

---


### ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationQuota <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationQuota"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationQuota.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationQuota(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationQuota.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationQuota.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `maximum`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationQuota.property.maximum"></a>

- *Type:* `number`

---


### ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationVersionQuota <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationVersionQuota"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationVersionQuota.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationVersionQuota(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationVersionQuota.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationVersionQuota.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `maximum`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasApplicationVersionQuota.property.maximum"></a>

- *Type:* `number`

---


### ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasConfigurationTemplateQuota <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasConfigurationTemplateQuota"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasConfigurationTemplateQuota.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasConfigurationTemplateQuota(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasConfigurationTemplateQuota.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasConfigurationTemplateQuota.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `maximum`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasConfigurationTemplateQuota.property.maximum"></a>

- *Type:* `number`

---


### ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasCustomPlatformQuota <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasCustomPlatformQuota"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasCustomPlatformQuota.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasCustomPlatformQuota(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasCustomPlatformQuota.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasCustomPlatformQuota.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `maximum`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasCustomPlatformQuota.property.maximum"></a>

- *Type:* `number`

---


### ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasEnvironmentQuota <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasEnvironmentQuota"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasEnvironmentQuota.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasEnvironmentQuota(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasEnvironmentQuota.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasEnvironmentQuota.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `maximum`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeAccountAttributesResourceQuotasEnvironmentQuota.property.maximum"></a>

- *Type:* `number`

---


### ElasticBeanstalkResponsesDescribeApplications <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeApplications"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeApplications.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeApplications(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribeApplicationsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeApplications.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeApplications.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeApplications.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeApplicationsMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeApplicationsMessage)

---



#### Properties <a name="Properties"></a>

##### `applications`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeApplications.property.applications"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationDescription)[]

---


### ElasticBeanstalkResponsesDescribeApplicationVersions <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeApplicationVersions"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeApplicationVersions.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeApplicationVersions(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribeApplicationVersionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeApplicationVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeApplicationVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeApplicationVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeApplicationVersionsMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeApplicationVersionsMessage)

---



#### Properties <a name="Properties"></a>

##### `applicationVersions`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeApplicationVersions.property.applicationVersions"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkApplicationVersionDescription)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeApplicationVersions.property.nextToken"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesDescribeConfigurationOptions <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeConfigurationOptions"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeConfigurationOptions.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeConfigurationOptions(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribeConfigurationOptionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeConfigurationOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeConfigurationOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeConfigurationOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationOptionsMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationOptionsMessage)

---



#### Properties <a name="Properties"></a>

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeConfigurationOptions.property.options"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionDescription)[]

---

##### `platformArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeConfigurationOptions.property.platformArn"></a>

- *Type:* `string`

---

##### `solutionStackName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeConfigurationOptions.property.solutionStackName"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesDescribeConfigurationSettings <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeConfigurationSettings"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeConfigurationSettings.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeConfigurationSettings(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribeConfigurationSettingsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeConfigurationSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeConfigurationSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeConfigurationSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationSettingsMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeConfigurationSettingsMessage)

---



#### Properties <a name="Properties"></a>

##### `configurationSettings`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeConfigurationSettings.property.configurationSettings"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationSettingsDescription)[]

---


### ElasticBeanstalkResponsesDescribeEnvironmentHealth <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealth"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealth.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealth(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribeEnvironmentHealthRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealth.property.applicationMetrics"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetrics`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetrics)

---

##### `causes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealth.property.causes"></a>

- *Type:* `string`[]

---

##### `color`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealth.property.color"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealth.property.environmentName"></a>

- *Type:* `string`

---

##### `healthStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealth.property.healthStatus"></a>

- *Type:* `string`

---

##### `instancesHealth`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealth.property.instancesHealth"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth)

---

##### `refreshedAt`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealth.property.refreshedAt"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealth.property.status"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetrics <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetrics.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetrics(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribeEnvironmentHealthRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthRequest)

---



#### Properties <a name="Properties"></a>

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetrics.property.duration"></a>

- *Type:* `number`

---

##### `latency`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetrics.property.latency"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency)

---

##### `requestCount`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetrics.property.requestCount"></a>

- *Type:* `number`

---

##### `statusCodes`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetrics.property.statusCodes"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsStatusCodes`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsStatusCodes)

---


### ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribeEnvironmentHealthRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthRequest)

---



#### Properties <a name="Properties"></a>

##### `p10`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency.property.p10"></a>

- *Type:* `number`

---

##### `p50`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency.property.p50"></a>

- *Type:* `number`

---

##### `p75`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency.property.p75"></a>

- *Type:* `number`

---

##### `p85`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency.property.p85"></a>

- *Type:* `number`

---

##### `p90`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency.property.p90"></a>

- *Type:* `number`

---

##### `p95`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency.property.p95"></a>

- *Type:* `number`

---

##### `p99`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency.property.p99"></a>

- *Type:* `number`

---

##### `p999`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsLatency.property.p999"></a>

- *Type:* `number`

---


### ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsStatusCodes <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsStatusCodes"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsStatusCodes.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsStatusCodes(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribeEnvironmentHealthRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsStatusCodes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsStatusCodes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsStatusCodes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthRequest)

---



#### Properties <a name="Properties"></a>

##### `status2Xx`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsStatusCodes.property.status2Xx"></a>

- *Type:* `number`

---

##### `status3Xx`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsStatusCodes.property.status3Xx"></a>

- *Type:* `number`

---

##### `status4Xx`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsStatusCodes.property.status4Xx"></a>

- *Type:* `number`

---

##### `status5Xx`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthApplicationMetricsStatusCodes.property.status5Xx"></a>

- *Type:* `number`

---


### ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribeEnvironmentHealthRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentHealthRequest)

---



#### Properties <a name="Properties"></a>

##### `degraded`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth.property.degraded"></a>

- *Type:* `number`

---

##### `info`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth.property.info"></a>

- *Type:* `number`

---

##### `noData`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth.property.noData"></a>

- *Type:* `number`

---

##### `ok`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth.property.ok"></a>

- *Type:* `number`

---

##### `pending`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth.property.pending"></a>

- *Type:* `number`

---

##### `severe`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth.property.severe"></a>

- *Type:* `number`

---

##### `unknown`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth.property.unknown"></a>

- *Type:* `number`

---

##### `warning`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentHealthInstancesHealth.property.warning"></a>

- *Type:* `number`

---


### ElasticBeanstalkResponsesDescribeEnvironmentManagedActionHistory <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentManagedActionHistory"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentManagedActionHistory.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentManagedActionHistory(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentManagedActionHistory.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentManagedActionHistory.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentManagedActionHistory.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionHistoryRequest)

---



#### Properties <a name="Properties"></a>

##### `managedActionHistoryItems`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentManagedActionHistory.property.managedActionHistoryItems"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedActionHistoryItem`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedActionHistoryItem)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentManagedActionHistory.property.nextToken"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesDescribeEnvironmentManagedActions <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentManagedActions"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentManagedActions.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentManagedActions(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribeEnvironmentManagedActionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentManagedActions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentManagedActions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentManagedActions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionsRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentManagedActionsRequest)

---



#### Properties <a name="Properties"></a>

##### `managedActions`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentManagedActions.property.managedActions"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedAction`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkManagedAction)[]

---


### ElasticBeanstalkResponsesDescribeEnvironmentResources <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResources"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResources.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResources(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribeEnvironmentResourcesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentResourcesMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentResourcesMessage)

---



#### Properties <a name="Properties"></a>

##### `environmentResources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResources.property.environmentResources"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources)

---


### ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribeEnvironmentResourcesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentResourcesMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentResourcesMessage)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroups`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources.property.autoScalingGroups"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkAutoScalingGroup`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkAutoScalingGroup)[]

---

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources.property.environmentName"></a>

- *Type:* `string`

---

##### `instances`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources.property.instances"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkInstance`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkInstance)[]

---

##### `launchConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources.property.launchConfigurations"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLaunchConfiguration`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLaunchConfiguration)[]

---

##### `launchTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources.property.launchTemplates"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLaunchTemplate`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLaunchTemplate)[]

---

##### `loadBalancers`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources.property.loadBalancers"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLoadBalancer`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkLoadBalancer)[]

---

##### `queues`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources.property.queues"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkQueue`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkQueue)[]

---

##### `triggers`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironmentResourcesEnvironmentResources.property.triggers"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTrigger`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTrigger)[]

---


### ElasticBeanstalkResponsesDescribeEnvironments <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironments"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironments.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironments(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribeEnvironmentsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentsMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEnvironmentsMessage)

---



#### Properties <a name="Properties"></a>

##### `environments`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironments.property.environments"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentDescription)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEnvironments.property.nextToken"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesDescribeEvents <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEvents"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEvents.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeEvents(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribeEventsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeEventsMessage)

---



#### Properties <a name="Properties"></a>

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEvents.property.events"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEventDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEventDescription)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeEvents.property.nextToken"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesDescribeInstancesHealth <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeInstancesHealth"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeInstancesHealth.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribeInstancesHealth(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribeInstancesHealthRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeInstancesHealth.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeInstancesHealth.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeInstancesHealth.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeInstancesHealthRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribeInstancesHealthRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceHealthList`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeInstancesHealth.property.instanceHealthList"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSingleInstanceHealth`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSingleInstanceHealth)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeInstancesHealth.property.nextToken"></a>

- *Type:* `string`

---

##### `refreshedAt`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribeInstancesHealth.property.refreshedAt"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesDescribePlatformVersion <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersion"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersion.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersion(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribePlatformVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribePlatformVersionRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribePlatformVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `platformDescription`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersion.property.platformDescription"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription)

---


### ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription(__scope: Construct, __resources: string[], __input: ElasticBeanstalkDescribePlatformVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribePlatformVersionRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkDescribePlatformVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `customAmiList`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.customAmiList"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCustomAmi`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkCustomAmi)[]

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.description"></a>

- *Type:* `string`

---

##### `frameworks`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.frameworks"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformFramework`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformFramework)[]

---

##### `maintainer`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.maintainer"></a>

- *Type:* `string`

---

##### `operatingSystemName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.operatingSystemName"></a>

- *Type:* `string`

---

##### `operatingSystemVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.operatingSystemVersion"></a>

- *Type:* `string`

---

##### `platformArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.platformArn"></a>

- *Type:* `string`

---

##### `platformBranchLifecycleState`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.platformBranchLifecycleState"></a>

- *Type:* `string`

---

##### `platformBranchName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.platformBranchName"></a>

- *Type:* `string`

---

##### `platformCategory`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.platformCategory"></a>

- *Type:* `string`

---

##### `platformLifecycleState`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.platformLifecycleState"></a>

- *Type:* `string`

---

##### `platformName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.platformName"></a>

- *Type:* `string`

---

##### `platformOwner`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.platformOwner"></a>

- *Type:* `string`

---

##### `platformStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.platformStatus"></a>

- *Type:* `string`

---

##### `platformVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.platformVersion"></a>

- *Type:* `string`

---

##### `programmingLanguages`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.programmingLanguages"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformProgrammingLanguage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformProgrammingLanguage)[]

---

##### `solutionStackName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.solutionStackName"></a>

- *Type:* `string`

---

##### `supportedAddonList`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.supportedAddonList"></a>

- *Type:* `string`[]

---

##### `supportedTierList`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesDescribePlatformVersionPlatformDescription.property.supportedTierList"></a>

- *Type:* `string`[]

---


### ElasticBeanstalkResponsesListAvailableSolutionStacks <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListAvailableSolutionStacks"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListAvailableSolutionStacks.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesListAvailableSolutionStacks(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListAvailableSolutionStacks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListAvailableSolutionStacks.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `solutionStackDetails`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListAvailableSolutionStacks.property.solutionStackDetails"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSolutionStackDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkSolutionStackDescription)[]

---

##### `solutionStacks`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListAvailableSolutionStacks.property.solutionStacks"></a>

- *Type:* `string`[]

---


### ElasticBeanstalkResponsesListPlatformBranches <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListPlatformBranches"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListPlatformBranches.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesListPlatformBranches(__scope: Construct, __resources: string[], __input: ElasticBeanstalkListPlatformBranchesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListPlatformBranches.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListPlatformBranches.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListPlatformBranches.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformBranchesRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformBranchesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListPlatformBranches.property.nextToken"></a>

- *Type:* `string`

---

##### `platformBranchSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListPlatformBranches.property.platformBranchSummaryList"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformBranchSummary`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformBranchSummary)[]

---


### ElasticBeanstalkResponsesListPlatformVersions <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListPlatformVersions"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListPlatformVersions.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesListPlatformVersions(__scope: Construct, __resources: string[], __input: ElasticBeanstalkListPlatformVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListPlatformVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListPlatformVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListPlatformVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformVersionsRequest`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListPlatformVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListPlatformVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `platformSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListPlatformVersions.property.platformSummaryList"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkPlatformSummary)[]

---


### ElasticBeanstalkResponsesListTagsForResource <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListTagsForResource.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: ElasticBeanstalkListTagsForResourceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListTagsForResourceMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListTagsForResourceMessage)

---



#### Properties <a name="Properties"></a>

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListTagsForResource.property.resourceArn"></a>

- *Type:* `string`

---

##### `resourceTags`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesListTagsForResource.property.resourceTags"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTag)[]

---


### ElasticBeanstalkResponsesRetrieveEnvironmentInfo <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesRetrieveEnvironmentInfo"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesRetrieveEnvironmentInfo.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesRetrieveEnvironmentInfo(__scope: Construct, __resources: string[], __input: ElasticBeanstalkRetrieveEnvironmentInfoMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesRetrieveEnvironmentInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesRetrieveEnvironmentInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesRetrieveEnvironmentInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRetrieveEnvironmentInfoMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkRetrieveEnvironmentInfoMessage)

---



#### Properties <a name="Properties"></a>

##### `environmentInfo`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesRetrieveEnvironmentInfo.property.environmentInfo"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentInfoDescription`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentInfoDescription)[]

---


### ElasticBeanstalkResponsesTerminateEnvironment <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment(__scope: Construct, __resources: string[], __input: ElasticBeanstalkTerminateEnvironmentMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTerminateEnvironmentMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTerminateEnvironmentMessage)

---



#### Properties <a name="Properties"></a>

##### `abortableOperationInProgress`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.abortableOperationInProgress"></a>

- *Type:* `boolean`

---

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.applicationName"></a>

- *Type:* `string`

---

##### `cname`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.cname"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.description"></a>

- *Type:* `string`

---

##### `endpointUrl`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.endpointUrl"></a>

- *Type:* `string`

---

##### `environmentArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.environmentArn"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentLinks`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.environmentLinks"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentLink`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentLink)[]

---

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.environmentName"></a>

- *Type:* `string`

---

##### `health`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.health"></a>

- *Type:* `string`

---

##### `healthStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.healthStatus"></a>

- *Type:* `string`

---

##### `operationsRole`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.operationsRole"></a>

- *Type:* `string`

---

##### `platformArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.platformArn"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.resources"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResources`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResources)

---

##### `solutionStackName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.solutionStackName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.status"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.templateName"></a>

- *Type:* `string`

---

##### `tier`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.tier"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentTier`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentTier)

---

##### `versionLabel`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironment.property.versionLabel"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesTerminateEnvironmentResources <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResources"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResources.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResources(__scope: Construct, __resources: string[], __input: ElasticBeanstalkTerminateEnvironmentMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTerminateEnvironmentMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTerminateEnvironmentMessage)

---



#### Properties <a name="Properties"></a>

##### `loadBalancer`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResources.property.loadBalancer"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResourcesLoadBalancer`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResourcesLoadBalancer)

---


### ElasticBeanstalkResponsesTerminateEnvironmentResourcesLoadBalancer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResourcesLoadBalancer"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResourcesLoadBalancer.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResourcesLoadBalancer(__scope: Construct, __resources: string[], __input: ElasticBeanstalkTerminateEnvironmentMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResourcesLoadBalancer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResourcesLoadBalancer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResourcesLoadBalancer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTerminateEnvironmentMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTerminateEnvironmentMessage)

---



#### Properties <a name="Properties"></a>

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResourcesLoadBalancer.property.domain"></a>

- *Type:* `string`

---

##### `listeners`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResourcesLoadBalancer.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListener`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListener)[]

---

##### `loadBalancerName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentResourcesLoadBalancer.property.loadBalancerName"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesTerminateEnvironmentTier <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentTier"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentTier.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentTier(__scope: Construct, __resources: string[], __input: ElasticBeanstalkTerminateEnvironmentMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentTier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentTier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentTier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTerminateEnvironmentMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkTerminateEnvironmentMessage)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentTier.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentTier.property.type"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesTerminateEnvironmentTier.property.version"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesUpdateApplication <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplication"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplication.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplication(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateApplicationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage)

---



#### Properties <a name="Properties"></a>

##### `application`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplication.property.application"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplication`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplication)

---


### ElasticBeanstalkResponsesUpdateApplicationApplication <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplication"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplication.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplication(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateApplicationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage)

---



#### Properties <a name="Properties"></a>

##### `applicationArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplication.property.applicationArn"></a>

- *Type:* `string`

---

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplication.property.applicationName"></a>

- *Type:* `string`

---

##### `configurationTemplates`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplication.property.configurationTemplates"></a>

- *Type:* `string`[]

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplication.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplication.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplication.property.description"></a>

- *Type:* `string`

---

##### `resourceLifecycleConfig`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplication.property.resourceLifecycleConfig"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfig`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfig)

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplication.property.versions"></a>

- *Type:* `string`[]

---


### ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfig <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfig"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfig.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfig(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateApplicationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage)

---



#### Properties <a name="Properties"></a>

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfig.property.serviceRole"></a>

- *Type:* `string`

---

##### `versionLifecycleConfig`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfig.property.versionLifecycleConfig"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig)

---


### ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateApplicationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage)

---



#### Properties <a name="Properties"></a>

##### `maxAgeRule`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig.property.maxAgeRule"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule)

---

##### `maxCountRule`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfig.property.maxCountRule"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule)

---


### ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateApplicationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage)

---



#### Properties <a name="Properties"></a>

##### `deleteSourceFromS3`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.deleteSourceFromS3"></a>

- *Type:* `boolean`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.enabled"></a>

- *Type:* `boolean`

---

##### `maxAgeInDays`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.maxAgeInDays"></a>

- *Type:* `number`

---


### ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateApplicationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationMessage)

---



#### Properties <a name="Properties"></a>

##### `deleteSourceFromS3`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.deleteSourceFromS3"></a>

- *Type:* `boolean`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.enabled"></a>

- *Type:* `boolean`

---

##### `maxCount`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.maxCount"></a>

- *Type:* `number`

---


### ElasticBeanstalkResponsesUpdateApplicationResourceLifecycle <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycle"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycle.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycle(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateApplicationResourceLifecycleMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage)

---



#### Properties <a name="Properties"></a>

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycle.property.applicationName"></a>

- *Type:* `string`

---

##### `resourceLifecycleConfig`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycle.property.resourceLifecycleConfig"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfig`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfig)

---


### ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfig <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfig"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfig.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfig(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateApplicationResourceLifecycleMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage)

---



#### Properties <a name="Properties"></a>

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfig.property.serviceRole"></a>

- *Type:* `string`

---

##### `versionLifecycleConfig`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfig.property.versionLifecycleConfig"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfig`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfig)

---


### ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfig <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfig"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfig.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfig(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateApplicationResourceLifecycleMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage)

---



#### Properties <a name="Properties"></a>

##### `maxAgeRule`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfig.property.maxAgeRule"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule)

---

##### `maxCountRule`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfig.property.maxCountRule"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule)

---


### ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateApplicationResourceLifecycleMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage)

---



#### Properties <a name="Properties"></a>

##### `deleteSourceFromS3`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.deleteSourceFromS3"></a>

- *Type:* `boolean`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.enabled"></a>

- *Type:* `boolean`

---

##### `maxAgeInDays`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.maxAgeInDays"></a>

- *Type:* `number`

---


### ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateApplicationResourceLifecycleMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationResourceLifecycleMessage)

---



#### Properties <a name="Properties"></a>

##### `deleteSourceFromS3`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.deleteSourceFromS3"></a>

- *Type:* `boolean`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.enabled"></a>

- *Type:* `boolean`

---

##### `maxCount`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationResourceLifecycleResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.maxCount"></a>

- *Type:* `number`

---


### ElasticBeanstalkResponsesUpdateApplicationVersion <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersion"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersion.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersion(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateApplicationVersionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationVersionMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationVersionMessage)

---



#### Properties <a name="Properties"></a>

##### `applicationVersion`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersion.property.applicationVersion"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion)

---


### ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateApplicationVersionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationVersionMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationVersionMessage)

---



#### Properties <a name="Properties"></a>

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion.property.applicationName"></a>

- *Type:* `string`

---

##### `applicationVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion.property.applicationVersionArn"></a>

- *Type:* `string`

---

##### `buildArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion.property.buildArn"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion.property.description"></a>

- *Type:* `string`

---

##### `sourceBuildInformation`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion.property.sourceBuildInformation"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBuildInformation`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBuildInformation)

---

##### `sourceBundle`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion.property.sourceBundle"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBundle`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBundle)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion.property.status"></a>

- *Type:* `string`

---

##### `versionLabel`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersion.property.versionLabel"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBuildInformation <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBuildInformation"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBuildInformation.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBuildInformation(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateApplicationVersionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBuildInformation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBuildInformation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBuildInformation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationVersionMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationVersionMessage)

---



#### Properties <a name="Properties"></a>

##### `sourceLocation`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBuildInformation.property.sourceLocation"></a>

- *Type:* `string`

---

##### `sourceRepository`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBuildInformation.property.sourceRepository"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBuildInformation.property.sourceType"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBundle <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBundle"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBundle.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBundle(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateApplicationVersionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBundle.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBundle.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBundle.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationVersionMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateApplicationVersionMessage)

---



#### Properties <a name="Properties"></a>

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBundle.property.s3Bucket"></a>

- *Type:* `string`

---

##### `s3Key`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateApplicationVersionApplicationVersionSourceBundle.property.s3Key"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesUpdateConfigurationTemplate <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateConfigurationTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateConfigurationTemplate.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateConfigurationTemplate(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateConfigurationTemplateMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateConfigurationTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateConfigurationTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateConfigurationTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateConfigurationTemplateMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateConfigurationTemplateMessage)

---



#### Properties <a name="Properties"></a>

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateConfigurationTemplate.property.applicationName"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateConfigurationTemplate.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateConfigurationTemplate.property.dateUpdated"></a>

- *Type:* `string`

---

##### `deploymentStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateConfigurationTemplate.property.deploymentStatus"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateConfigurationTemplate.property.description"></a>

- *Type:* `string`

---

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateConfigurationTemplate.property.environmentName"></a>

- *Type:* `string`

---

##### `optionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateConfigurationTemplate.property.optionSettings"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkConfigurationOptionSetting)[]

---

##### `platformArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateConfigurationTemplate.property.platformArn"></a>

- *Type:* `string`

---

##### `solutionStackName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateConfigurationTemplate.property.solutionStackName"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateConfigurationTemplate.property.templateName"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesUpdateEnvironment <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateEnvironmentMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage)

---



#### Properties <a name="Properties"></a>

##### `abortableOperationInProgress`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.abortableOperationInProgress"></a>

- *Type:* `boolean`

---

##### `applicationName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.applicationName"></a>

- *Type:* `string`

---

##### `cname`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.cname"></a>

- *Type:* `string`

---

##### `dateCreated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.dateCreated"></a>

- *Type:* `string`

---

##### `dateUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.dateUpdated"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.description"></a>

- *Type:* `string`

---

##### `endpointUrl`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.endpointUrl"></a>

- *Type:* `string`

---

##### `environmentArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.environmentArn"></a>

- *Type:* `string`

---

##### `environmentId`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.environmentId"></a>

- *Type:* `string`

---

##### `environmentLinks`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.environmentLinks"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentLink`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkEnvironmentLink)[]

---

##### `environmentName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.environmentName"></a>

- *Type:* `string`

---

##### `health`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.health"></a>

- *Type:* `string`

---

##### `healthStatus`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.healthStatus"></a>

- *Type:* `string`

---

##### `operationsRole`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.operationsRole"></a>

- *Type:* `string`

---

##### `platformArn`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.platformArn"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.resources"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResources`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResources)

---

##### `solutionStackName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.solutionStackName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.status"></a>

- *Type:* `string`

---

##### `templateName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.templateName"></a>

- *Type:* `string`

---

##### `tier`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.tier"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentTier`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentTier)

---

##### `versionLabel`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironment.property.versionLabel"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesUpdateEnvironmentResources <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResources"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResources.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResources(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateEnvironmentMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage)

---



#### Properties <a name="Properties"></a>

##### `loadBalancer`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResources.property.loadBalancer"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResourcesLoadBalancer`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResourcesLoadBalancer)

---


### ElasticBeanstalkResponsesUpdateEnvironmentResourcesLoadBalancer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResourcesLoadBalancer"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResourcesLoadBalancer.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResourcesLoadBalancer(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateEnvironmentMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResourcesLoadBalancer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResourcesLoadBalancer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResourcesLoadBalancer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage)

---



#### Properties <a name="Properties"></a>

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResourcesLoadBalancer.property.domain"></a>

- *Type:* `string`

---

##### `listeners`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResourcesLoadBalancer.property.listeners"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListener`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkListener)[]

---

##### `loadBalancerName`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentResourcesLoadBalancer.property.loadBalancerName"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesUpdateEnvironmentTier <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentTier"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentTier.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentTier(__scope: Construct, __resources: string[], __input: ElasticBeanstalkUpdateEnvironmentMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentTier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentTier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentTier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkUpdateEnvironmentMessage)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentTier.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentTier.property.type"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesUpdateEnvironmentTier.property.version"></a>

- *Type:* `string`

---


### ElasticBeanstalkResponsesValidateConfigurationSettings <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesValidateConfigurationSettings"></a>

#### Initializer <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesValidateConfigurationSettings.Initializer"></a>

```typescript
import { elasticbeanstalk } from 'aws-cdk-sdk'

new elasticbeanstalk.ElasticBeanstalkResponsesValidateConfigurationSettings(__scope: Construct, __resources: string[], __input: ElasticBeanstalkValidateConfigurationSettingsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesValidateConfigurationSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesValidateConfigurationSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesValidateConfigurationSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidateConfigurationSettingsMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidateConfigurationSettingsMessage)

---



#### Properties <a name="Properties"></a>

##### `messages`<sup>Required</sup> <a name="aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkResponsesValidateConfigurationSettings.property.messages"></a>

- *Type:* [`aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidationMessage`](#aws-cdk-sdk.elasticbeanstalk.ElasticBeanstalkValidationMessage)[]

---



