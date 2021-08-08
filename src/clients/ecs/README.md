# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### EcsClient <a name="aws-cdk-sdk.ecs.EcsClient"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.EcsClient.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.EcsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `createCapacityProvider` <a name="aws-cdk-sdk.ecs.EcsClient.createCapacityProvider"></a>

```typescript
public createCapacityProvider(input: EcsCreateCapacityProviderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateCapacityProviderRequest`](#aws-cdk-sdk.ecs.EcsCreateCapacityProviderRequest)

---

##### `createCluster` <a name="aws-cdk-sdk.ecs.EcsClient.createCluster"></a>

```typescript
public createCluster(input: EcsCreateClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateClusterRequest`](#aws-cdk-sdk.ecs.EcsCreateClusterRequest)

---

##### `createService` <a name="aws-cdk-sdk.ecs.EcsClient.createService"></a>

```typescript
public createService(input: EcsCreateServiceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateServiceRequest`](#aws-cdk-sdk.ecs.EcsCreateServiceRequest)

---

##### `createTaskSet` <a name="aws-cdk-sdk.ecs.EcsClient.createTaskSet"></a>

```typescript
public createTaskSet(input: EcsCreateTaskSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateTaskSetRequest`](#aws-cdk-sdk.ecs.EcsCreateTaskSetRequest)

---

##### `deleteAccountSetting` <a name="aws-cdk-sdk.ecs.EcsClient.deleteAccountSetting"></a>

```typescript
public deleteAccountSetting(input: EcsDeleteAccountSettingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteAccountSettingRequest`](#aws-cdk-sdk.ecs.EcsDeleteAccountSettingRequest)

---

##### `deleteAttributes` <a name="aws-cdk-sdk.ecs.EcsClient.deleteAttributes"></a>

```typescript
public deleteAttributes(input: EcsDeleteAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteAttributesRequest`](#aws-cdk-sdk.ecs.EcsDeleteAttributesRequest)

---

##### `deleteCapacityProvider` <a name="aws-cdk-sdk.ecs.EcsClient.deleteCapacityProvider"></a>

```typescript
public deleteCapacityProvider(input: EcsDeleteCapacityProviderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteCapacityProviderRequest`](#aws-cdk-sdk.ecs.EcsDeleteCapacityProviderRequest)

---

##### `deleteCluster` <a name="aws-cdk-sdk.ecs.EcsClient.deleteCluster"></a>

```typescript
public deleteCluster(input: EcsDeleteClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteClusterRequest`](#aws-cdk-sdk.ecs.EcsDeleteClusterRequest)

---

##### `deleteService` <a name="aws-cdk-sdk.ecs.EcsClient.deleteService"></a>

```typescript
public deleteService(input: EcsDeleteServiceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteServiceRequest`](#aws-cdk-sdk.ecs.EcsDeleteServiceRequest)

---

##### `deleteTaskSet` <a name="aws-cdk-sdk.ecs.EcsClient.deleteTaskSet"></a>

```typescript
public deleteTaskSet(input: EcsDeleteTaskSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteTaskSetRequest`](#aws-cdk-sdk.ecs.EcsDeleteTaskSetRequest)

---

##### `deregisterContainerInstance` <a name="aws-cdk-sdk.ecs.EcsClient.deregisterContainerInstance"></a>

```typescript
public deregisterContainerInstance(input: EcsDeregisterContainerInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeregisterContainerInstanceRequest`](#aws-cdk-sdk.ecs.EcsDeregisterContainerInstanceRequest)

---

##### `deregisterTaskDefinition` <a name="aws-cdk-sdk.ecs.EcsClient.deregisterTaskDefinition"></a>

```typescript
public deregisterTaskDefinition(input: EcsDeregisterTaskDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeregisterTaskDefinitionRequest`](#aws-cdk-sdk.ecs.EcsDeregisterTaskDefinitionRequest)

---

##### `describeCapacityProviders` <a name="aws-cdk-sdk.ecs.EcsClient.describeCapacityProviders"></a>

```typescript
public describeCapacityProviders(input: EcsDescribeCapacityProvidersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDescribeCapacityProvidersRequest`](#aws-cdk-sdk.ecs.EcsDescribeCapacityProvidersRequest)

---

##### `describeClusters` <a name="aws-cdk-sdk.ecs.EcsClient.describeClusters"></a>

```typescript
public describeClusters(input: EcsDescribeClustersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDescribeClustersRequest`](#aws-cdk-sdk.ecs.EcsDescribeClustersRequest)

---

##### `describeContainerInstances` <a name="aws-cdk-sdk.ecs.EcsClient.describeContainerInstances"></a>

```typescript
public describeContainerInstances(input: EcsDescribeContainerInstancesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDescribeContainerInstancesRequest`](#aws-cdk-sdk.ecs.EcsDescribeContainerInstancesRequest)

---

##### `describeServices` <a name="aws-cdk-sdk.ecs.EcsClient.describeServices"></a>

```typescript
public describeServices(input: EcsDescribeServicesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDescribeServicesRequest`](#aws-cdk-sdk.ecs.EcsDescribeServicesRequest)

---

##### `describeTaskDefinition` <a name="aws-cdk-sdk.ecs.EcsClient.describeTaskDefinition"></a>

```typescript
public describeTaskDefinition(input: EcsDescribeTaskDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDescribeTaskDefinitionRequest`](#aws-cdk-sdk.ecs.EcsDescribeTaskDefinitionRequest)

---

##### `describeTasks` <a name="aws-cdk-sdk.ecs.EcsClient.describeTasks"></a>

```typescript
public describeTasks(input: EcsDescribeTasksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDescribeTasksRequest`](#aws-cdk-sdk.ecs.EcsDescribeTasksRequest)

---

##### `describeTaskSets` <a name="aws-cdk-sdk.ecs.EcsClient.describeTaskSets"></a>

```typescript
public describeTaskSets(input: EcsDescribeTaskSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDescribeTaskSetsRequest`](#aws-cdk-sdk.ecs.EcsDescribeTaskSetsRequest)

---

##### `discoverPollEndpoint` <a name="aws-cdk-sdk.ecs.EcsClient.discoverPollEndpoint"></a>

```typescript
public discoverPollEndpoint(input: EcsDiscoverPollEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDiscoverPollEndpointRequest`](#aws-cdk-sdk.ecs.EcsDiscoverPollEndpointRequest)

---

##### `listAccountSettings` <a name="aws-cdk-sdk.ecs.EcsClient.listAccountSettings"></a>

```typescript
public listAccountSettings(input: EcsListAccountSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListAccountSettingsRequest`](#aws-cdk-sdk.ecs.EcsListAccountSettingsRequest)

---

##### `listAttributes` <a name="aws-cdk-sdk.ecs.EcsClient.listAttributes"></a>

```typescript
public listAttributes(input: EcsListAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListAttributesRequest`](#aws-cdk-sdk.ecs.EcsListAttributesRequest)

---

##### `listClusters` <a name="aws-cdk-sdk.ecs.EcsClient.listClusters"></a>

```typescript
public listClusters(input: EcsListClustersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListClustersRequest`](#aws-cdk-sdk.ecs.EcsListClustersRequest)

---

##### `listContainerInstances` <a name="aws-cdk-sdk.ecs.EcsClient.listContainerInstances"></a>

```typescript
public listContainerInstances(input: EcsListContainerInstancesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListContainerInstancesRequest`](#aws-cdk-sdk.ecs.EcsListContainerInstancesRequest)

---

##### `listServices` <a name="aws-cdk-sdk.ecs.EcsClient.listServices"></a>

```typescript
public listServices(input: EcsListServicesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListServicesRequest`](#aws-cdk-sdk.ecs.EcsListServicesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.ecs.EcsClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: EcsListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListTagsForResourceRequest`](#aws-cdk-sdk.ecs.EcsListTagsForResourceRequest)

---

##### `listTaskDefinitionFamilies` <a name="aws-cdk-sdk.ecs.EcsClient.listTaskDefinitionFamilies"></a>

```typescript
public listTaskDefinitionFamilies(input: EcsListTaskDefinitionFamiliesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListTaskDefinitionFamiliesRequest`](#aws-cdk-sdk.ecs.EcsListTaskDefinitionFamiliesRequest)

---

##### `listTaskDefinitions` <a name="aws-cdk-sdk.ecs.EcsClient.listTaskDefinitions"></a>

```typescript
public listTaskDefinitions(input: EcsListTaskDefinitionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListTaskDefinitionsRequest`](#aws-cdk-sdk.ecs.EcsListTaskDefinitionsRequest)

---

##### `listTasks` <a name="aws-cdk-sdk.ecs.EcsClient.listTasks"></a>

```typescript
public listTasks(input: EcsListTasksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListTasksRequest`](#aws-cdk-sdk.ecs.EcsListTasksRequest)

---

##### `putAccountSetting` <a name="aws-cdk-sdk.ecs.EcsClient.putAccountSetting"></a>

```typescript
public putAccountSetting(input: EcsPutAccountSettingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPutAccountSettingRequest`](#aws-cdk-sdk.ecs.EcsPutAccountSettingRequest)

---

##### `putAccountSettingDefault` <a name="aws-cdk-sdk.ecs.EcsClient.putAccountSettingDefault"></a>

```typescript
public putAccountSettingDefault(input: EcsPutAccountSettingDefaultRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPutAccountSettingDefaultRequest`](#aws-cdk-sdk.ecs.EcsPutAccountSettingDefaultRequest)

---

##### `putAttributes` <a name="aws-cdk-sdk.ecs.EcsClient.putAttributes"></a>

```typescript
public putAttributes(input: EcsPutAttributesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPutAttributesRequest`](#aws-cdk-sdk.ecs.EcsPutAttributesRequest)

---

##### `putClusterCapacityProviders` <a name="aws-cdk-sdk.ecs.EcsClient.putClusterCapacityProviders"></a>

```typescript
public putClusterCapacityProviders(input: EcsPutClusterCapacityProvidersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPutClusterCapacityProvidersRequest`](#aws-cdk-sdk.ecs.EcsPutClusterCapacityProvidersRequest)

---

##### `registerContainerInstance` <a name="aws-cdk-sdk.ecs.EcsClient.registerContainerInstance"></a>

```typescript
public registerContainerInstance(input: EcsRegisterContainerInstanceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest`](#aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest)

---

##### `registerTaskDefinition` <a name="aws-cdk-sdk.ecs.EcsClient.registerTaskDefinition"></a>

```typescript
public registerTaskDefinition(input: EcsRegisterTaskDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest`](#aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest)

---

##### `runTask` <a name="aws-cdk-sdk.ecs.EcsClient.runTask"></a>

```typescript
public runTask(input: EcsRunTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsRunTaskRequest`](#aws-cdk-sdk.ecs.EcsRunTaskRequest)

---

##### `startTask` <a name="aws-cdk-sdk.ecs.EcsClient.startTask"></a>

```typescript
public startTask(input: EcsStartTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsStartTaskRequest`](#aws-cdk-sdk.ecs.EcsStartTaskRequest)

---

##### `stopTask` <a name="aws-cdk-sdk.ecs.EcsClient.stopTask"></a>

```typescript
public stopTask(input: EcsStopTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsStopTaskRequest`](#aws-cdk-sdk.ecs.EcsStopTaskRequest)

---

##### `submitAttachmentStateChanges` <a name="aws-cdk-sdk.ecs.EcsClient.submitAttachmentStateChanges"></a>

```typescript
public submitAttachmentStateChanges(input: EcsSubmitAttachmentStateChangesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsSubmitAttachmentStateChangesRequest`](#aws-cdk-sdk.ecs.EcsSubmitAttachmentStateChangesRequest)

---

##### `submitContainerStateChange` <a name="aws-cdk-sdk.ecs.EcsClient.submitContainerStateChange"></a>

```typescript
public submitContainerStateChange(input: EcsSubmitContainerStateChangeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsSubmitContainerStateChangeRequest`](#aws-cdk-sdk.ecs.EcsSubmitContainerStateChangeRequest)

---

##### `submitTaskStateChange` <a name="aws-cdk-sdk.ecs.EcsClient.submitTaskStateChange"></a>

```typescript
public submitTaskStateChange(input: EcsSubmitTaskStateChangeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsSubmitTaskStateChangeRequest`](#aws-cdk-sdk.ecs.EcsSubmitTaskStateChangeRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.ecs.EcsClient.tagResource"></a>

```typescript
public tagResource(input: EcsTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTagResourceRequest`](#aws-cdk-sdk.ecs.EcsTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.ecs.EcsClient.untagResource"></a>

```typescript
public untagResource(input: EcsUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUntagResourceRequest`](#aws-cdk-sdk.ecs.EcsUntagResourceRequest)

---

##### `updateCapacityProvider` <a name="aws-cdk-sdk.ecs.EcsClient.updateCapacityProvider"></a>

```typescript
public updateCapacityProvider(input: EcsUpdateCapacityProviderRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateCapacityProviderRequest`](#aws-cdk-sdk.ecs.EcsUpdateCapacityProviderRequest)

---

##### `updateClusterSettings` <a name="aws-cdk-sdk.ecs.EcsClient.updateClusterSettings"></a>

```typescript
public updateClusterSettings(input: EcsUpdateClusterSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateClusterSettingsRequest`](#aws-cdk-sdk.ecs.EcsUpdateClusterSettingsRequest)

---

##### `updateContainerAgent` <a name="aws-cdk-sdk.ecs.EcsClient.updateContainerAgent"></a>

```typescript
public updateContainerAgent(input: EcsUpdateContainerAgentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateContainerAgentRequest`](#aws-cdk-sdk.ecs.EcsUpdateContainerAgentRequest)

---

##### `updateContainerInstancesState` <a name="aws-cdk-sdk.ecs.EcsClient.updateContainerInstancesState"></a>

```typescript
public updateContainerInstancesState(input: EcsUpdateContainerInstancesStateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateContainerInstancesStateRequest`](#aws-cdk-sdk.ecs.EcsUpdateContainerInstancesStateRequest)

---

##### `updateService` <a name="aws-cdk-sdk.ecs.EcsClient.updateService"></a>

```typescript
public updateService(input: EcsUpdateServiceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateServiceRequest`](#aws-cdk-sdk.ecs.EcsUpdateServiceRequest)

---

##### `updateServicePrimaryTaskSet` <a name="aws-cdk-sdk.ecs.EcsClient.updateServicePrimaryTaskSet"></a>

```typescript
public updateServicePrimaryTaskSet(input: EcsUpdateServicePrimaryTaskSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetRequest`](#aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetRequest)

---

##### `updateTaskSet` <a name="aws-cdk-sdk.ecs.EcsClient.updateTaskSet"></a>

```typescript
public updateTaskSet(input: EcsUpdateTaskSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateTaskSetRequest`](#aws-cdk-sdk.ecs.EcsUpdateTaskSetRequest)

---




## Structs <a name="Structs"></a>

### EcsAttachment <a name="aws-cdk-sdk.ecs.EcsAttachment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsAttachment: ecs.EcsAttachment = { ... }
```

##### `details`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsAttachment.property.details"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsKeyValuePair`](#aws-cdk-sdk.ecs.EcsKeyValuePair)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsAttachment.property.id"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsAttachment.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsAttachment.property.type"></a>

- *Type:* `string`

---

### EcsAttachmentStateChange <a name="aws-cdk-sdk.ecs.EcsAttachmentStateChange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsAttachmentStateChange: ecs.EcsAttachmentStateChange = { ... }
```

##### `attachmentArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsAttachmentStateChange.property.attachmentArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsAttachmentStateChange.property.status"></a>

- *Type:* `string`

---

### EcsAttribute <a name="aws-cdk-sdk.ecs.EcsAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsAttribute: ecs.EcsAttribute = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsAttribute.property.name"></a>

- *Type:* `string`

---

##### `targetId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsAttribute.property.targetId"></a>

- *Type:* `string`

---

##### `targetType`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsAttribute.property.targetType"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsAttribute.property.value"></a>

- *Type:* `string`

---

### EcsAutoScalingGroupProvider <a name="aws-cdk-sdk.ecs.EcsAutoScalingGroupProvider"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsAutoScalingGroupProvider: ecs.EcsAutoScalingGroupProvider = { ... }
```

##### `autoScalingGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsAutoScalingGroupProvider.property.autoScalingGroupArn"></a>

- *Type:* `string`

---

##### `managedScaling`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsAutoScalingGroupProvider.property.managedScaling"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsManagedScaling`](#aws-cdk-sdk.ecs.EcsManagedScaling)

---

##### `managedTerminationProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsAutoScalingGroupProvider.property.managedTerminationProtection"></a>

- *Type:* `string`

---

### EcsAutoScalingGroupProviderUpdate <a name="aws-cdk-sdk.ecs.EcsAutoScalingGroupProviderUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsAutoScalingGroupProviderUpdate: ecs.EcsAutoScalingGroupProviderUpdate = { ... }
```

##### `managedScaling`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsAutoScalingGroupProviderUpdate.property.managedScaling"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsManagedScaling`](#aws-cdk-sdk.ecs.EcsManagedScaling)

---

##### `managedTerminationProtection`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsAutoScalingGroupProviderUpdate.property.managedTerminationProtection"></a>

- *Type:* `string`

---

### EcsAwsVpcConfiguration <a name="aws-cdk-sdk.ecs.EcsAwsVpcConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsAwsVpcConfiguration: ecs.EcsAwsVpcConfiguration = { ... }
```

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsAwsVpcConfiguration.property.subnets"></a>

- *Type:* `string`[]

---

##### `assignPublicIp`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsAwsVpcConfiguration.property.assignPublicIp"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsAwsVpcConfiguration.property.securityGroups"></a>

- *Type:* `string`[]

---

### EcsCapacityProvider <a name="aws-cdk-sdk.ecs.EcsCapacityProvider"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsCapacityProvider: ecs.EcsCapacityProvider = { ... }
```

##### `autoScalingGroupProvider`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCapacityProvider.property.autoScalingGroupProvider"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAutoScalingGroupProvider`](#aws-cdk-sdk.ecs.EcsAutoScalingGroupProvider)

---

##### `capacityProviderArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCapacityProvider.property.capacityProviderArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCapacityProvider.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCapacityProvider.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCapacityProvider.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `updateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCapacityProvider.property.updateStatus"></a>

- *Type:* `string`

---

##### `updateStatusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCapacityProvider.property.updateStatusReason"></a>

- *Type:* `string`

---

### EcsCapacityProviderStrategyItem <a name="aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsCapacityProviderStrategyItem: ecs.EcsCapacityProviderStrategyItem = { ... }
```

##### `capacityProvider`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem.property.capacityProvider"></a>

- *Type:* `string`

---

##### `base`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem.property.base"></a>

- *Type:* `number`

---

##### `weight`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem.property.weight"></a>

- *Type:* `number`

---

### EcsCluster <a name="aws-cdk-sdk.ecs.EcsCluster"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsCluster: ecs.EcsCluster = { ... }
```

##### `activeServicesCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCluster.property.activeServicesCount"></a>

- *Type:* `number`

---

##### `attachments`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCluster.property.attachments"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttachment`](#aws-cdk-sdk.ecs.EcsAttachment)[]

---

##### `attachmentsStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCluster.property.attachmentsStatus"></a>

- *Type:* `string`

---

##### `capacityProviders`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCluster.property.capacityProviders"></a>

- *Type:* `string`[]

---

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCluster.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCluster.property.clusterName"></a>

- *Type:* `string`

---

##### `defaultCapacityProviderStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCluster.property.defaultCapacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `pendingTasksCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCluster.property.pendingTasksCount"></a>

- *Type:* `number`

---

##### `registeredContainerInstancesCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCluster.property.registeredContainerInstancesCount"></a>

- *Type:* `number`

---

##### `runningTasksCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCluster.property.runningTasksCount"></a>

- *Type:* `number`

---

##### `settings`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCluster.property.settings"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsClusterSetting`](#aws-cdk-sdk.ecs.EcsClusterSetting)[]

---

##### `statistics`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCluster.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsKeyValuePair`](#aws-cdk-sdk.ecs.EcsKeyValuePair)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCluster.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

### EcsClusterSetting <a name="aws-cdk-sdk.ecs.EcsClusterSetting"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsClusterSetting: ecs.EcsClusterSetting = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsClusterSetting.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsClusterSetting.property.value"></a>

- *Type:* `string`

---

### EcsContainer <a name="aws-cdk-sdk.ecs.EcsContainer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsContainer: ecs.EcsContainer = { ... }
```

##### `containerArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainer.property.containerArn"></a>

- *Type:* `string`

---

##### `cpu`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainer.property.cpu"></a>

- *Type:* `string`

---

##### `exitCode`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainer.property.exitCode"></a>

- *Type:* `number`

---

##### `gpuIds`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainer.property.gpuIds"></a>

- *Type:* `string`[]

---

##### `healthStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainer.property.healthStatus"></a>

- *Type:* `string`

---

##### `image`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainer.property.image"></a>

- *Type:* `string`

---

##### `imageDigest`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainer.property.imageDigest"></a>

- *Type:* `string`

---

##### `lastStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainer.property.lastStatus"></a>

- *Type:* `string`

---

##### `memory`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainer.property.memory"></a>

- *Type:* `string`

---

##### `memoryReservation`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainer.property.memoryReservation"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainer.property.name"></a>

- *Type:* `string`

---

##### `networkBindings`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainer.property.networkBindings"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsNetworkBinding`](#aws-cdk-sdk.ecs.EcsNetworkBinding)[]

---

##### `networkInterfaces`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainer.property.networkInterfaces"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsNetworkInterface`](#aws-cdk-sdk.ecs.EcsNetworkInterface)[]

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainer.property.reason"></a>

- *Type:* `string`

---

##### `runtimeId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainer.property.runtimeId"></a>

- *Type:* `string`

---

##### `taskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainer.property.taskArn"></a>

- *Type:* `string`

---

### EcsContainerDefinition <a name="aws-cdk-sdk.ecs.EcsContainerDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsContainerDefinition: ecs.EcsContainerDefinition = { ... }
```

##### `command`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.command"></a>

- *Type:* `string`[]

---

##### `cpu`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.cpu"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.dependsOn"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainerDependency`](#aws-cdk-sdk.ecs.EcsContainerDependency)[]

---

##### `disableNetworking`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.disableNetworking"></a>

- *Type:* `boolean`

---

##### `dnsSearchDomains`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.dnsSearchDomains"></a>

- *Type:* `string`[]

---

##### `dnsServers`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.dnsServers"></a>

- *Type:* `string`[]

---

##### `dockerLabels`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.dockerLabels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `dockerSecurityOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.dockerSecurityOptions"></a>

- *Type:* `string`[]

---

##### `entryPoint`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.entryPoint"></a>

- *Type:* `string`[]

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.environment"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsKeyValuePair`](#aws-cdk-sdk.ecs.EcsKeyValuePair)[]

---

##### `environmentFiles`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.environmentFiles"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsEnvironmentFile`](#aws-cdk-sdk.ecs.EcsEnvironmentFile)[]

---

##### `essential`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.essential"></a>

- *Type:* `boolean`

---

##### `extraHosts`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.extraHosts"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsHostEntry`](#aws-cdk-sdk.ecs.EcsHostEntry)[]

---

##### `firelensConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.firelensConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFirelensConfiguration`](#aws-cdk-sdk.ecs.EcsFirelensConfiguration)

---

##### `healthCheck`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.healthCheck"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsHealthCheck`](#aws-cdk-sdk.ecs.EcsHealthCheck)

---

##### `hostname`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.hostname"></a>

- *Type:* `string`

---

##### `image`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.image"></a>

- *Type:* `string`

---

##### `interactive`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.interactive"></a>

- *Type:* `boolean`

---

##### `links`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.links"></a>

- *Type:* `string`[]

---

##### `linuxParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.linuxParameters"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsLinuxParameters`](#aws-cdk-sdk.ecs.EcsLinuxParameters)

---

##### `logConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.logConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsLogConfiguration`](#aws-cdk-sdk.ecs.EcsLogConfiguration)

---

##### `memory`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.memory"></a>

- *Type:* `number`

---

##### `memoryReservation`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.memoryReservation"></a>

- *Type:* `number`

---

##### `mountPoints`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.mountPoints"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsMountPoint`](#aws-cdk-sdk.ecs.EcsMountPoint)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.name"></a>

- *Type:* `string`

---

##### `portMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.portMappings"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPortMapping`](#aws-cdk-sdk.ecs.EcsPortMapping)[]

---

##### `privileged`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.privileged"></a>

- *Type:* `boolean`

---

##### `pseudoTerminal`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.pseudoTerminal"></a>

- *Type:* `boolean`

---

##### `readonlyRootFilesystem`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.readonlyRootFilesystem"></a>

- *Type:* `boolean`

---

##### `repositoryCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.repositoryCredentials"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsRepositoryCredentials`](#aws-cdk-sdk.ecs.EcsRepositoryCredentials)

---

##### `resourceRequirements`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.resourceRequirements"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsResourceRequirement`](#aws-cdk-sdk.ecs.EcsResourceRequirement)[]

---

##### `secrets`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.secrets"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsSecret`](#aws-cdk-sdk.ecs.EcsSecret)[]

---

##### `startTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.startTimeout"></a>

- *Type:* `number`

---

##### `stopTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.stopTimeout"></a>

- *Type:* `number`

---

##### `systemControls`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.systemControls"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsSystemControl`](#aws-cdk-sdk.ecs.EcsSystemControl)[]

---

##### `ulimits`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.ulimits"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUlimit`](#aws-cdk-sdk.ecs.EcsUlimit)[]

---

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.user"></a>

- *Type:* `string`

---

##### `volumesFrom`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.volumesFrom"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsVolumeFrom`](#aws-cdk-sdk.ecs.EcsVolumeFrom)[]

---

##### `workingDirectory`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDefinition.property.workingDirectory"></a>

- *Type:* `string`

---

### EcsContainerDependency <a name="aws-cdk-sdk.ecs.EcsContainerDependency"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsContainerDependency: ecs.EcsContainerDependency = { ... }
```

##### `condition`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDependency.property.condition"></a>

- *Type:* `string`

---

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsContainerDependency.property.containerName"></a>

- *Type:* `string`

---

### EcsContainerInstance <a name="aws-cdk-sdk.ecs.EcsContainerInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsContainerInstance: ecs.EcsContainerInstance = { ... }
```

##### `agentConnected`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerInstance.property.agentConnected"></a>

- *Type:* `boolean`

---

##### `agentUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerInstance.property.agentUpdateStatus"></a>

- *Type:* `string`

---

##### `attachments`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerInstance.property.attachments"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttachment`](#aws-cdk-sdk.ecs.EcsAttachment)[]

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerInstance.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---

##### `capacityProviderName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerInstance.property.capacityProviderName"></a>

- *Type:* `string`

---

##### `containerInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerInstance.property.containerInstanceArn"></a>

- *Type:* `string`

---

##### `ec2InstanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerInstance.property.ec2InstanceId"></a>

- *Type:* `string`

---

##### `pendingTasksCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerInstance.property.pendingTasksCount"></a>

- *Type:* `number`

---

##### `registeredAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerInstance.property.registeredAt"></a>

- *Type:* `string`

---

##### `registeredResources`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerInstance.property.registeredResources"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsResource`](#aws-cdk-sdk.ecs.EcsResource)[]

---

##### `remainingResources`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerInstance.property.remainingResources"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsResource`](#aws-cdk-sdk.ecs.EcsResource)[]

---

##### `runningTasksCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerInstance.property.runningTasksCount"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerInstance.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerInstance.property.statusReason"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerInstance.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerInstance.property.version"></a>

- *Type:* `number`

---

##### `versionInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerInstance.property.versionInfo"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsVersionInfo`](#aws-cdk-sdk.ecs.EcsVersionInfo)

---

### EcsContainerOverride <a name="aws-cdk-sdk.ecs.EcsContainerOverride"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsContainerOverride: ecs.EcsContainerOverride = { ... }
```

##### `command`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerOverride.property.command"></a>

- *Type:* `string`[]

---

##### `cpu`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerOverride.property.cpu"></a>

- *Type:* `number`

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerOverride.property.environment"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsKeyValuePair`](#aws-cdk-sdk.ecs.EcsKeyValuePair)[]

---

##### `environmentFiles`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerOverride.property.environmentFiles"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsEnvironmentFile`](#aws-cdk-sdk.ecs.EcsEnvironmentFile)[]

---

##### `memory`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerOverride.property.memory"></a>

- *Type:* `number`

---

##### `memoryReservation`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerOverride.property.memoryReservation"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerOverride.property.name"></a>

- *Type:* `string`

---

##### `resourceRequirements`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerOverride.property.resourceRequirements"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsResourceRequirement`](#aws-cdk-sdk.ecs.EcsResourceRequirement)[]

---

### EcsContainerStateChange <a name="aws-cdk-sdk.ecs.EcsContainerStateChange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsContainerStateChange: ecs.EcsContainerStateChange = { ... }
```

##### `containerName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerStateChange.property.containerName"></a>

- *Type:* `string`

---

##### `exitCode`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerStateChange.property.exitCode"></a>

- *Type:* `number`

---

##### `imageDigest`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerStateChange.property.imageDigest"></a>

- *Type:* `string`

---

##### `networkBindings`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerStateChange.property.networkBindings"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsNetworkBinding`](#aws-cdk-sdk.ecs.EcsNetworkBinding)[]

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerStateChange.property.reason"></a>

- *Type:* `string`

---

##### `runtimeId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerStateChange.property.runtimeId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsContainerStateChange.property.status"></a>

- *Type:* `string`

---

### EcsCreateCapacityProviderRequest <a name="aws-cdk-sdk.ecs.EcsCreateCapacityProviderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsCreateCapacityProviderRequest: ecs.EcsCreateCapacityProviderRequest = { ... }
```

##### `autoScalingGroupProvider`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsCreateCapacityProviderRequest.property.autoScalingGroupProvider"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAutoScalingGroupProvider`](#aws-cdk-sdk.ecs.EcsAutoScalingGroupProvider)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsCreateCapacityProviderRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateCapacityProviderRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

### EcsCreateCapacityProviderResponse <a name="aws-cdk-sdk.ecs.EcsCreateCapacityProviderResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsCreateCapacityProviderResponse: ecs.EcsCreateCapacityProviderResponse = { ... }
```

##### `capacityProvider`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateCapacityProviderResponse.property.capacityProvider"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProvider`](#aws-cdk-sdk.ecs.EcsCapacityProvider)

---

### EcsCreateClusterRequest <a name="aws-cdk-sdk.ecs.EcsCreateClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsCreateClusterRequest: ecs.EcsCreateClusterRequest = { ... }
```

##### `capacityProviders`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateClusterRequest.property.capacityProviders"></a>

- *Type:* `string`[]

---

##### `clusterName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateClusterRequest.property.clusterName"></a>

- *Type:* `string`

---

##### `defaultCapacityProviderStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateClusterRequest.property.defaultCapacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `settings`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateClusterRequest.property.settings"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsClusterSetting`](#aws-cdk-sdk.ecs.EcsClusterSetting)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateClusterRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

### EcsCreateClusterResponse <a name="aws-cdk-sdk.ecs.EcsCreateClusterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsCreateClusterResponse: ecs.EcsCreateClusterResponse = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateClusterResponse.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCluster`](#aws-cdk-sdk.ecs.EcsCluster)

---

### EcsCreateServiceRequest <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsCreateServiceRequest: ecs.EcsCreateServiceRequest = { ... }
```

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.serviceName"></a>

- *Type:* `string`

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.capacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.cluster"></a>

- *Type:* `string`

---

##### `deploymentConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.deploymentConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeploymentConfiguration`](#aws-cdk-sdk.ecs.EcsDeploymentConfiguration)

---

##### `deploymentController`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.deploymentController"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeploymentController`](#aws-cdk-sdk.ecs.EcsDeploymentController)

---

##### `desiredCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.desiredCount"></a>

- *Type:* `number`

---

##### `enableECSManagedTags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.enableECSManagedTags"></a>

- *Type:* `boolean`

---

##### `healthCheckGracePeriodSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.healthCheckGracePeriodSeconds"></a>

- *Type:* `number`

---

##### `launchType`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.launchType"></a>

- *Type:* `string`

---

##### `loadBalancers`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.loadBalancers"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsLoadBalancer`](#aws-cdk-sdk.ecs.EcsLoadBalancer)[]

---

##### `networkConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsNetworkConfiguration`](#aws-cdk-sdk.ecs.EcsNetworkConfiguration)

---

##### `placementConstraints`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.placementConstraints"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPlacementConstraint`](#aws-cdk-sdk.ecs.EcsPlacementConstraint)[]

---

##### `placementStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.placementStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPlacementStrategy`](#aws-cdk-sdk.ecs.EcsPlacementStrategy)[]

---

##### `platformVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.platformVersion"></a>

- *Type:* `string`

---

##### `propagateTags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.propagateTags"></a>

- *Type:* `string`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.role"></a>

- *Type:* `string`

---

##### `schedulingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.schedulingStrategy"></a>

- *Type:* `string`

---

##### `serviceRegistries`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.serviceRegistries"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsServiceRegistry`](#aws-cdk-sdk.ecs.EcsServiceRegistry)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `taskDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceRequest.property.taskDefinition"></a>

- *Type:* `string`

---

### EcsCreateServiceResponse <a name="aws-cdk-sdk.ecs.EcsCreateServiceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsCreateServiceResponse: ecs.EcsCreateServiceResponse = { ... }
```

##### `service`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateServiceResponse.property.service"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsService`](#aws-cdk-sdk.ecs.EcsService)

---

### EcsCreateTaskSetRequest <a name="aws-cdk-sdk.ecs.EcsCreateTaskSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsCreateTaskSetRequest: ecs.EcsCreateTaskSetRequest = { ... }
```

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsCreateTaskSetRequest.property.cluster"></a>

- *Type:* `string`

---

##### `service`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsCreateTaskSetRequest.property.service"></a>

- *Type:* `string`

---

##### `taskDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsCreateTaskSetRequest.property.taskDefinition"></a>

- *Type:* `string`

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateTaskSetRequest.property.capacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `clientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateTaskSetRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `externalId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateTaskSetRequest.property.externalId"></a>

- *Type:* `string`

---

##### `launchType`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateTaskSetRequest.property.launchType"></a>

- *Type:* `string`

---

##### `loadBalancers`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateTaskSetRequest.property.loadBalancers"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsLoadBalancer`](#aws-cdk-sdk.ecs.EcsLoadBalancer)[]

---

##### `networkConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateTaskSetRequest.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsNetworkConfiguration`](#aws-cdk-sdk.ecs.EcsNetworkConfiguration)

---

##### `platformVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateTaskSetRequest.property.platformVersion"></a>

- *Type:* `string`

---

##### `scale`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateTaskSetRequest.property.scale"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsScale`](#aws-cdk-sdk.ecs.EcsScale)

---

##### `serviceRegistries`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateTaskSetRequest.property.serviceRegistries"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsServiceRegistry`](#aws-cdk-sdk.ecs.EcsServiceRegistry)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateTaskSetRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

### EcsCreateTaskSetResponse <a name="aws-cdk-sdk.ecs.EcsCreateTaskSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsCreateTaskSetResponse: ecs.EcsCreateTaskSetResponse = { ... }
```

##### `taskSet`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsCreateTaskSetResponse.property.taskSet"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskSet`](#aws-cdk-sdk.ecs.EcsTaskSet)

---

### EcsDeleteAccountSettingRequest <a name="aws-cdk-sdk.ecs.EcsDeleteAccountSettingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeleteAccountSettingRequest: ecs.EcsDeleteAccountSettingRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteAccountSettingRequest.property.name"></a>

- *Type:* `string`

---

##### `principalArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteAccountSettingRequest.property.principalArn"></a>

- *Type:* `string`

---

### EcsDeleteAccountSettingResponse <a name="aws-cdk-sdk.ecs.EcsDeleteAccountSettingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeleteAccountSettingResponse: ecs.EcsDeleteAccountSettingResponse = { ... }
```

##### `setting`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteAccountSettingResponse.property.setting"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsSetting`](#aws-cdk-sdk.ecs.EcsSetting)

---

### EcsDeleteAttributesRequest <a name="aws-cdk-sdk.ecs.EcsDeleteAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeleteAttributesRequest: ecs.EcsDeleteAttributesRequest = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteAttributesRequest.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteAttributesRequest.property.cluster"></a>

- *Type:* `string`

---

### EcsDeleteAttributesResponse <a name="aws-cdk-sdk.ecs.EcsDeleteAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeleteAttributesResponse: ecs.EcsDeleteAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteAttributesResponse.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---

### EcsDeleteCapacityProviderRequest <a name="aws-cdk-sdk.ecs.EcsDeleteCapacityProviderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeleteCapacityProviderRequest: ecs.EcsDeleteCapacityProviderRequest = { ... }
```

##### `capacityProvider`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteCapacityProviderRequest.property.capacityProvider"></a>

- *Type:* `string`

---

### EcsDeleteCapacityProviderResponse <a name="aws-cdk-sdk.ecs.EcsDeleteCapacityProviderResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeleteCapacityProviderResponse: ecs.EcsDeleteCapacityProviderResponse = { ... }
```

##### `capacityProvider`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteCapacityProviderResponse.property.capacityProvider"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProvider`](#aws-cdk-sdk.ecs.EcsCapacityProvider)

---

### EcsDeleteClusterRequest <a name="aws-cdk-sdk.ecs.EcsDeleteClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeleteClusterRequest: ecs.EcsDeleteClusterRequest = { ... }
```

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteClusterRequest.property.cluster"></a>

- *Type:* `string`

---

### EcsDeleteClusterResponse <a name="aws-cdk-sdk.ecs.EcsDeleteClusterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeleteClusterResponse: ecs.EcsDeleteClusterResponse = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteClusterResponse.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCluster`](#aws-cdk-sdk.ecs.EcsCluster)

---

### EcsDeleteServiceRequest <a name="aws-cdk-sdk.ecs.EcsDeleteServiceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeleteServiceRequest: ecs.EcsDeleteServiceRequest = { ... }
```

##### `service`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteServiceRequest.property.service"></a>

- *Type:* `string`

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteServiceRequest.property.cluster"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteServiceRequest.property.force"></a>

- *Type:* `boolean`

---

### EcsDeleteServiceResponse <a name="aws-cdk-sdk.ecs.EcsDeleteServiceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeleteServiceResponse: ecs.EcsDeleteServiceResponse = { ... }
```

##### `service`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteServiceResponse.property.service"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsService`](#aws-cdk-sdk.ecs.EcsService)

---

### EcsDeleteTaskSetRequest <a name="aws-cdk-sdk.ecs.EcsDeleteTaskSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeleteTaskSetRequest: ecs.EcsDeleteTaskSetRequest = { ... }
```

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteTaskSetRequest.property.cluster"></a>

- *Type:* `string`

---

##### `service`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteTaskSetRequest.property.service"></a>

- *Type:* `string`

---

##### `taskSet`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteTaskSetRequest.property.taskSet"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteTaskSetRequest.property.force"></a>

- *Type:* `boolean`

---

### EcsDeleteTaskSetResponse <a name="aws-cdk-sdk.ecs.EcsDeleteTaskSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeleteTaskSetResponse: ecs.EcsDeleteTaskSetResponse = { ... }
```

##### `taskSet`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeleteTaskSetResponse.property.taskSet"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskSet`](#aws-cdk-sdk.ecs.EcsTaskSet)

---

### EcsDeployment <a name="aws-cdk-sdk.ecs.EcsDeployment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeployment: ecs.EcsDeployment = { ... }
```

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeployment.property.capacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeployment.property.createdAt"></a>

- *Type:* `string`

---

##### `desiredCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeployment.property.desiredCount"></a>

- *Type:* `number`

---

##### `failedTasks`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeployment.property.failedTasks"></a>

- *Type:* `number`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeployment.property.id"></a>

- *Type:* `string`

---

##### `launchType`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeployment.property.launchType"></a>

- *Type:* `string`

---

##### `networkConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeployment.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsNetworkConfiguration`](#aws-cdk-sdk.ecs.EcsNetworkConfiguration)

---

##### `pendingCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeployment.property.pendingCount"></a>

- *Type:* `number`

---

##### `platformVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeployment.property.platformVersion"></a>

- *Type:* `string`

---

##### `rolloutState`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeployment.property.rolloutState"></a>

- *Type:* `string`

---

##### `rolloutStateReason`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeployment.property.rolloutStateReason"></a>

- *Type:* `string`

---

##### `runningCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeployment.property.runningCount"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeployment.property.status"></a>

- *Type:* `string`

---

##### `taskDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeployment.property.taskDefinition"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeployment.property.updatedAt"></a>

- *Type:* `string`

---

### EcsDeploymentCircuitBreaker <a name="aws-cdk-sdk.ecs.EcsDeploymentCircuitBreaker"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeploymentCircuitBreaker: ecs.EcsDeploymentCircuitBreaker = { ... }
```

##### `enable`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDeploymentCircuitBreaker.property.enable"></a>

- *Type:* `boolean`

---

##### `rollback`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDeploymentCircuitBreaker.property.rollback"></a>

- *Type:* `boolean`

---

### EcsDeploymentConfiguration <a name="aws-cdk-sdk.ecs.EcsDeploymentConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeploymentConfiguration: ecs.EcsDeploymentConfiguration = { ... }
```

##### `deploymentCircuitBreaker`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeploymentConfiguration.property.deploymentCircuitBreaker"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeploymentCircuitBreaker`](#aws-cdk-sdk.ecs.EcsDeploymentCircuitBreaker)

---

##### `maximumPercent`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeploymentConfiguration.property.maximumPercent"></a>

- *Type:* `number`

---

##### `minimumHealthyPercent`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeploymentConfiguration.property.minimumHealthyPercent"></a>

- *Type:* `number`

---

### EcsDeploymentController <a name="aws-cdk-sdk.ecs.EcsDeploymentController"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeploymentController: ecs.EcsDeploymentController = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDeploymentController.property.type"></a>

- *Type:* `string`

---

### EcsDeregisterContainerInstanceRequest <a name="aws-cdk-sdk.ecs.EcsDeregisterContainerInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeregisterContainerInstanceRequest: ecs.EcsDeregisterContainerInstanceRequest = { ... }
```

##### `containerInstance`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDeregisterContainerInstanceRequest.property.containerInstance"></a>

- *Type:* `string`

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeregisterContainerInstanceRequest.property.cluster"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeregisterContainerInstanceRequest.property.force"></a>

- *Type:* `boolean`

---

### EcsDeregisterContainerInstanceResponse <a name="aws-cdk-sdk.ecs.EcsDeregisterContainerInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeregisterContainerInstanceResponse: ecs.EcsDeregisterContainerInstanceResponse = { ... }
```

##### `containerInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeregisterContainerInstanceResponse.property.containerInstance"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainerInstance`](#aws-cdk-sdk.ecs.EcsContainerInstance)

---

### EcsDeregisterTaskDefinitionRequest <a name="aws-cdk-sdk.ecs.EcsDeregisterTaskDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeregisterTaskDefinitionRequest: ecs.EcsDeregisterTaskDefinitionRequest = { ... }
```

##### `taskDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDeregisterTaskDefinitionRequest.property.taskDefinition"></a>

- *Type:* `string`

---

### EcsDeregisterTaskDefinitionResponse <a name="aws-cdk-sdk.ecs.EcsDeregisterTaskDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDeregisterTaskDefinitionResponse: ecs.EcsDeregisterTaskDefinitionResponse = { ... }
```

##### `taskDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDeregisterTaskDefinitionResponse.property.taskDefinition"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskDefinition`](#aws-cdk-sdk.ecs.EcsTaskDefinition)

---

### EcsDescribeCapacityProvidersRequest <a name="aws-cdk-sdk.ecs.EcsDescribeCapacityProvidersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDescribeCapacityProvidersRequest: ecs.EcsDescribeCapacityProvidersRequest = { ... }
```

##### `capacityProviders`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeCapacityProvidersRequest.property.capacityProviders"></a>

- *Type:* `string`[]

---

##### `include`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeCapacityProvidersRequest.property.include"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeCapacityProvidersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeCapacityProvidersRequest.property.nextToken"></a>

- *Type:* `string`

---

### EcsDescribeCapacityProvidersResponse <a name="aws-cdk-sdk.ecs.EcsDescribeCapacityProvidersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDescribeCapacityProvidersResponse: ecs.EcsDescribeCapacityProvidersResponse = { ... }
```

##### `capacityProviders`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeCapacityProvidersResponse.property.capacityProviders"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProvider`](#aws-cdk-sdk.ecs.EcsCapacityProvider)[]

---

##### `failures`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeCapacityProvidersResponse.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeCapacityProvidersResponse.property.nextToken"></a>

- *Type:* `string`

---

### EcsDescribeClustersRequest <a name="aws-cdk-sdk.ecs.EcsDescribeClustersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDescribeClustersRequest: ecs.EcsDescribeClustersRequest = { ... }
```

##### `clusters`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeClustersRequest.property.clusters"></a>

- *Type:* `string`[]

---

##### `include`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeClustersRequest.property.include"></a>

- *Type:* `string`[]

---

### EcsDescribeClustersResponse <a name="aws-cdk-sdk.ecs.EcsDescribeClustersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDescribeClustersResponse: ecs.EcsDescribeClustersResponse = { ... }
```

##### `clusters`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeClustersResponse.property.clusters"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCluster`](#aws-cdk-sdk.ecs.EcsCluster)[]

---

##### `failures`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeClustersResponse.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---

### EcsDescribeContainerInstancesRequest <a name="aws-cdk-sdk.ecs.EcsDescribeContainerInstancesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDescribeContainerInstancesRequest: ecs.EcsDescribeContainerInstancesRequest = { ... }
```

##### `containerInstances`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeContainerInstancesRequest.property.containerInstances"></a>

- *Type:* `string`[]

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeContainerInstancesRequest.property.cluster"></a>

- *Type:* `string`

---

##### `include`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeContainerInstancesRequest.property.include"></a>

- *Type:* `string`[]

---

### EcsDescribeContainerInstancesResponse <a name="aws-cdk-sdk.ecs.EcsDescribeContainerInstancesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDescribeContainerInstancesResponse: ecs.EcsDescribeContainerInstancesResponse = { ... }
```

##### `containerInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeContainerInstancesResponse.property.containerInstances"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainerInstance`](#aws-cdk-sdk.ecs.EcsContainerInstance)[]

---

##### `failures`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeContainerInstancesResponse.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---

### EcsDescribeServicesRequest <a name="aws-cdk-sdk.ecs.EcsDescribeServicesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDescribeServicesRequest: ecs.EcsDescribeServicesRequest = { ... }
```

##### `services`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeServicesRequest.property.services"></a>

- *Type:* `string`[]

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeServicesRequest.property.cluster"></a>

- *Type:* `string`

---

##### `include`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeServicesRequest.property.include"></a>

- *Type:* `string`[]

---

### EcsDescribeServicesResponse <a name="aws-cdk-sdk.ecs.EcsDescribeServicesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDescribeServicesResponse: ecs.EcsDescribeServicesResponse = { ... }
```

##### `failures`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeServicesResponse.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---

##### `services`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeServicesResponse.property.services"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsService`](#aws-cdk-sdk.ecs.EcsService)[]

---

### EcsDescribeTaskDefinitionRequest <a name="aws-cdk-sdk.ecs.EcsDescribeTaskDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDescribeTaskDefinitionRequest: ecs.EcsDescribeTaskDefinitionRequest = { ... }
```

##### `taskDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeTaskDefinitionRequest.property.taskDefinition"></a>

- *Type:* `string`

---

##### `include`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeTaskDefinitionRequest.property.include"></a>

- *Type:* `string`[]

---

### EcsDescribeTaskDefinitionResponse <a name="aws-cdk-sdk.ecs.EcsDescribeTaskDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDescribeTaskDefinitionResponse: ecs.EcsDescribeTaskDefinitionResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeTaskDefinitionResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `taskDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeTaskDefinitionResponse.property.taskDefinition"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskDefinition`](#aws-cdk-sdk.ecs.EcsTaskDefinition)

---

### EcsDescribeTaskSetsRequest <a name="aws-cdk-sdk.ecs.EcsDescribeTaskSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDescribeTaskSetsRequest: ecs.EcsDescribeTaskSetsRequest = { ... }
```

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeTaskSetsRequest.property.cluster"></a>

- *Type:* `string`

---

##### `service`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeTaskSetsRequest.property.service"></a>

- *Type:* `string`

---

##### `include`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeTaskSetsRequest.property.include"></a>

- *Type:* `string`[]

---

##### `taskSets`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeTaskSetsRequest.property.taskSets"></a>

- *Type:* `string`[]

---

### EcsDescribeTaskSetsResponse <a name="aws-cdk-sdk.ecs.EcsDescribeTaskSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDescribeTaskSetsResponse: ecs.EcsDescribeTaskSetsResponse = { ... }
```

##### `failures`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeTaskSetsResponse.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---

##### `taskSets`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeTaskSetsResponse.property.taskSets"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskSet`](#aws-cdk-sdk.ecs.EcsTaskSet)[]

---

### EcsDescribeTasksRequest <a name="aws-cdk-sdk.ecs.EcsDescribeTasksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDescribeTasksRequest: ecs.EcsDescribeTasksRequest = { ... }
```

##### `tasks`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeTasksRequest.property.tasks"></a>

- *Type:* `string`[]

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeTasksRequest.property.cluster"></a>

- *Type:* `string`

---

##### `include`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeTasksRequest.property.include"></a>

- *Type:* `string`[]

---

### EcsDescribeTasksResponse <a name="aws-cdk-sdk.ecs.EcsDescribeTasksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDescribeTasksResponse: ecs.EcsDescribeTasksResponse = { ... }
```

##### `failures`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeTasksResponse.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---

##### `tasks`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDescribeTasksResponse.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTask`](#aws-cdk-sdk.ecs.EcsTask)[]

---

### EcsDevice <a name="aws-cdk-sdk.ecs.EcsDevice"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDevice: ecs.EcsDevice = { ... }
```

##### `hostPath`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsDevice.property.hostPath"></a>

- *Type:* `string`

---

##### `containerPath`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDevice.property.containerPath"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDevice.property.permissions"></a>

- *Type:* `string`[]

---

### EcsDiscoverPollEndpointRequest <a name="aws-cdk-sdk.ecs.EcsDiscoverPollEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDiscoverPollEndpointRequest: ecs.EcsDiscoverPollEndpointRequest = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDiscoverPollEndpointRequest.property.cluster"></a>

- *Type:* `string`

---

##### `containerInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDiscoverPollEndpointRequest.property.containerInstance"></a>

- *Type:* `string`

---

### EcsDiscoverPollEndpointResponse <a name="aws-cdk-sdk.ecs.EcsDiscoverPollEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDiscoverPollEndpointResponse: ecs.EcsDiscoverPollEndpointResponse = { ... }
```

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDiscoverPollEndpointResponse.property.endpoint"></a>

- *Type:* `string`

---

##### `telemetryEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDiscoverPollEndpointResponse.property.telemetryEndpoint"></a>

- *Type:* `string`

---

### EcsDockerVolumeConfiguration <a name="aws-cdk-sdk.ecs.EcsDockerVolumeConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsDockerVolumeConfiguration: ecs.EcsDockerVolumeConfiguration = { ... }
```

##### `autoprovision`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDockerVolumeConfiguration.property.autoprovision"></a>

- *Type:* `boolean`

---

##### `driver`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDockerVolumeConfiguration.property.driver"></a>

- *Type:* `string`

---

##### `driverOpts`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDockerVolumeConfiguration.property.driverOpts"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `labels`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDockerVolumeConfiguration.property.labels"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `scope`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsDockerVolumeConfiguration.property.scope"></a>

- *Type:* `string`

---

### EcsefsAuthorizationConfig <a name="aws-cdk-sdk.ecs.EcsefsAuthorizationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsefsAuthorizationConfig: ecs.EcsefsAuthorizationConfig = { ... }
```

##### `accessPointId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsefsAuthorizationConfig.property.accessPointId"></a>

- *Type:* `string`

---

##### `iam`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsefsAuthorizationConfig.property.iam"></a>

- *Type:* `string`

---

### EcsefsVolumeConfiguration <a name="aws-cdk-sdk.ecs.EcsefsVolumeConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsefsVolumeConfiguration: ecs.EcsefsVolumeConfiguration = { ... }
```

##### `fileSystemId`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsefsVolumeConfiguration.property.fileSystemId"></a>

- *Type:* `string`

---

##### `authorizationConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsefsVolumeConfiguration.property.authorizationConfig"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsefsAuthorizationConfig`](#aws-cdk-sdk.ecs.EcsefsAuthorizationConfig)

---

##### `rootDirectory`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsefsVolumeConfiguration.property.rootDirectory"></a>

- *Type:* `string`

---

##### `transitEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsefsVolumeConfiguration.property.transitEncryption"></a>

- *Type:* `string`

---

##### `transitEncryptionPort`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsefsVolumeConfiguration.property.transitEncryptionPort"></a>

- *Type:* `number`

---

### EcsEnvironmentFile <a name="aws-cdk-sdk.ecs.EcsEnvironmentFile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsEnvironmentFile: ecs.EcsEnvironmentFile = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsEnvironmentFile.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsEnvironmentFile.property.value"></a>

- *Type:* `string`

---

### EcsFailure <a name="aws-cdk-sdk.ecs.EcsFailure"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsFailure: ecs.EcsFailure = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsFailure.property.arn"></a>

- *Type:* `string`

---

##### `detail`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsFailure.property.detail"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsFailure.property.reason"></a>

- *Type:* `string`

---

### EcsFirelensConfiguration <a name="aws-cdk-sdk.ecs.EcsFirelensConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsFirelensConfiguration: ecs.EcsFirelensConfiguration = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsFirelensConfiguration.property.type"></a>

- *Type:* `string`

---

##### `options`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsFirelensConfiguration.property.options"></a>

- *Type:* {[ key: string ]: `string`}

---

### EcsfSxWindowsFileServerAuthorizationConfig <a name="aws-cdk-sdk.ecs.EcsfSxWindowsFileServerAuthorizationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsfSxWindowsFileServerAuthorizationConfig: ecs.EcsfSxWindowsFileServerAuthorizationConfig = { ... }
```

##### `credentialsParameter`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsfSxWindowsFileServerAuthorizationConfig.property.credentialsParameter"></a>

- *Type:* `string`

---

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsfSxWindowsFileServerAuthorizationConfig.property.domain"></a>

- *Type:* `string`

---

### EcsfSxWindowsFileServerVolumeConfiguration <a name="aws-cdk-sdk.ecs.EcsfSxWindowsFileServerVolumeConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsfSxWindowsFileServerVolumeConfiguration: ecs.EcsfSxWindowsFileServerVolumeConfiguration = { ... }
```

##### `authorizationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsfSxWindowsFileServerVolumeConfiguration.property.authorizationConfig"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsfSxWindowsFileServerAuthorizationConfig`](#aws-cdk-sdk.ecs.EcsfSxWindowsFileServerAuthorizationConfig)

---

##### `fileSystemId`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsfSxWindowsFileServerVolumeConfiguration.property.fileSystemId"></a>

- *Type:* `string`

---

##### `rootDirectory`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsfSxWindowsFileServerVolumeConfiguration.property.rootDirectory"></a>

- *Type:* `string`

---

### EcsHealthCheck <a name="aws-cdk-sdk.ecs.EcsHealthCheck"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsHealthCheck: ecs.EcsHealthCheck = { ... }
```

##### `command`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsHealthCheck.property.command"></a>

- *Type:* `string`[]

---

##### `interval`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsHealthCheck.property.interval"></a>

- *Type:* `number`

---

##### `retries`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsHealthCheck.property.retries"></a>

- *Type:* `number`

---

##### `startPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsHealthCheck.property.startPeriod"></a>

- *Type:* `number`

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsHealthCheck.property.timeout"></a>

- *Type:* `number`

---

### EcsHostEntry <a name="aws-cdk-sdk.ecs.EcsHostEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsHostEntry: ecs.EcsHostEntry = { ... }
```

##### `hostname`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsHostEntry.property.hostname"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsHostEntry.property.ipAddress"></a>

- *Type:* `string`

---

### EcsHostVolumeProperties <a name="aws-cdk-sdk.ecs.EcsHostVolumeProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsHostVolumeProperties: ecs.EcsHostVolumeProperties = { ... }
```

##### `sourcePath`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsHostVolumeProperties.property.sourcePath"></a>

- *Type:* `string`

---

### EcsInferenceAccelerator <a name="aws-cdk-sdk.ecs.EcsInferenceAccelerator"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsInferenceAccelerator: ecs.EcsInferenceAccelerator = { ... }
```

##### `deviceName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsInferenceAccelerator.property.deviceName"></a>

- *Type:* `string`

---

##### `deviceType`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsInferenceAccelerator.property.deviceType"></a>

- *Type:* `string`

---

### EcsInferenceAcceleratorOverride <a name="aws-cdk-sdk.ecs.EcsInferenceAcceleratorOverride"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsInferenceAcceleratorOverride: ecs.EcsInferenceAcceleratorOverride = { ... }
```

##### `deviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsInferenceAcceleratorOverride.property.deviceName"></a>

- *Type:* `string`

---

##### `deviceType`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsInferenceAcceleratorOverride.property.deviceType"></a>

- *Type:* `string`

---

### EcsKernelCapabilities <a name="aws-cdk-sdk.ecs.EcsKernelCapabilities"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsKernelCapabilities: ecs.EcsKernelCapabilities = { ... }
```

##### `add`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsKernelCapabilities.property.add"></a>

- *Type:* `string`[]

---

##### `drop`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsKernelCapabilities.property.drop"></a>

- *Type:* `string`[]

---

### EcsKeyValuePair <a name="aws-cdk-sdk.ecs.EcsKeyValuePair"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsKeyValuePair: ecs.EcsKeyValuePair = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsKeyValuePair.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsKeyValuePair.property.value"></a>

- *Type:* `string`

---

### EcsLinuxParameters <a name="aws-cdk-sdk.ecs.EcsLinuxParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsLinuxParameters: ecs.EcsLinuxParameters = { ... }
```

##### `capabilities`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsLinuxParameters.property.capabilities"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsKernelCapabilities`](#aws-cdk-sdk.ecs.EcsKernelCapabilities)

---

##### `devices`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsLinuxParameters.property.devices"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDevice`](#aws-cdk-sdk.ecs.EcsDevice)[]

---

##### `initProcessEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsLinuxParameters.property.initProcessEnabled"></a>

- *Type:* `boolean`

---

##### `maxSwap`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsLinuxParameters.property.maxSwap"></a>

- *Type:* `number`

---

##### `sharedMemorySize`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsLinuxParameters.property.sharedMemorySize"></a>

- *Type:* `number`

---

##### `swappiness`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsLinuxParameters.property.swappiness"></a>

- *Type:* `number`

---

##### `tmpfs`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsLinuxParameters.property.tmpfs"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTmpfs`](#aws-cdk-sdk.ecs.EcsTmpfs)[]

---

### EcsListAccountSettingsRequest <a name="aws-cdk-sdk.ecs.EcsListAccountSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListAccountSettingsRequest: ecs.EcsListAccountSettingsRequest = { ... }
```

##### `effectiveSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListAccountSettingsRequest.property.effectiveSettings"></a>

- *Type:* `boolean`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListAccountSettingsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListAccountSettingsRequest.property.name"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListAccountSettingsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `principalArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListAccountSettingsRequest.property.principalArn"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListAccountSettingsRequest.property.value"></a>

- *Type:* `string`

---

### EcsListAccountSettingsResponse <a name="aws-cdk-sdk.ecs.EcsListAccountSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListAccountSettingsResponse: ecs.EcsListAccountSettingsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListAccountSettingsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `settings`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListAccountSettingsResponse.property.settings"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsSetting`](#aws-cdk-sdk.ecs.EcsSetting)[]

---

### EcsListAttributesRequest <a name="aws-cdk-sdk.ecs.EcsListAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListAttributesRequest: ecs.EcsListAttributesRequest = { ... }
```

##### `targetType`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsListAttributesRequest.property.targetType"></a>

- *Type:* `string`

---

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListAttributesRequest.property.attributeName"></a>

- *Type:* `string`

---

##### `attributeValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListAttributesRequest.property.attributeValue"></a>

- *Type:* `string`

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListAttributesRequest.property.cluster"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListAttributesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListAttributesRequest.property.nextToken"></a>

- *Type:* `string`

---

### EcsListAttributesResponse <a name="aws-cdk-sdk.ecs.EcsListAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListAttributesResponse: ecs.EcsListAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListAttributesResponse.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListAttributesResponse.property.nextToken"></a>

- *Type:* `string`

---

### EcsListClustersRequest <a name="aws-cdk-sdk.ecs.EcsListClustersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListClustersRequest: ecs.EcsListClustersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListClustersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListClustersRequest.property.nextToken"></a>

- *Type:* `string`

---

### EcsListClustersResponse <a name="aws-cdk-sdk.ecs.EcsListClustersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListClustersResponse: ecs.EcsListClustersResponse = { ... }
```

##### `clusterArns`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListClustersResponse.property.clusterArns"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListClustersResponse.property.nextToken"></a>

- *Type:* `string`

---

### EcsListContainerInstancesRequest <a name="aws-cdk-sdk.ecs.EcsListContainerInstancesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListContainerInstancesRequest: ecs.EcsListContainerInstancesRequest = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListContainerInstancesRequest.property.cluster"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListContainerInstancesRequest.property.filter"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListContainerInstancesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListContainerInstancesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListContainerInstancesRequest.property.status"></a>

- *Type:* `string`

---

### EcsListContainerInstancesResponse <a name="aws-cdk-sdk.ecs.EcsListContainerInstancesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListContainerInstancesResponse: ecs.EcsListContainerInstancesResponse = { ... }
```

##### `containerInstanceArns`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListContainerInstancesResponse.property.containerInstanceArns"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListContainerInstancesResponse.property.nextToken"></a>

- *Type:* `string`

---

### EcsListServicesRequest <a name="aws-cdk-sdk.ecs.EcsListServicesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListServicesRequest: ecs.EcsListServicesRequest = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListServicesRequest.property.cluster"></a>

- *Type:* `string`

---

##### `launchType`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListServicesRequest.property.launchType"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListServicesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListServicesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `schedulingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListServicesRequest.property.schedulingStrategy"></a>

- *Type:* `string`

---

### EcsListServicesResponse <a name="aws-cdk-sdk.ecs.EcsListServicesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListServicesResponse: ecs.EcsListServicesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListServicesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `serviceArns`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListServicesResponse.property.serviceArns"></a>

- *Type:* `string`[]

---

### EcsListTagsForResourceRequest <a name="aws-cdk-sdk.ecs.EcsListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListTagsForResourceRequest: ecs.EcsListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### EcsListTagsForResourceResponse <a name="aws-cdk-sdk.ecs.EcsListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListTagsForResourceResponse: ecs.EcsListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

### EcsListTaskDefinitionFamiliesRequest <a name="aws-cdk-sdk.ecs.EcsListTaskDefinitionFamiliesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListTaskDefinitionFamiliesRequest: ecs.EcsListTaskDefinitionFamiliesRequest = { ... }
```

##### `familyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTaskDefinitionFamiliesRequest.property.familyPrefix"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTaskDefinitionFamiliesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTaskDefinitionFamiliesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTaskDefinitionFamiliesRequest.property.status"></a>

- *Type:* `string`

---

### EcsListTaskDefinitionFamiliesResponse <a name="aws-cdk-sdk.ecs.EcsListTaskDefinitionFamiliesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListTaskDefinitionFamiliesResponse: ecs.EcsListTaskDefinitionFamiliesResponse = { ... }
```

##### `families`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTaskDefinitionFamiliesResponse.property.families"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTaskDefinitionFamiliesResponse.property.nextToken"></a>

- *Type:* `string`

---

### EcsListTaskDefinitionsRequest <a name="aws-cdk-sdk.ecs.EcsListTaskDefinitionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListTaskDefinitionsRequest: ecs.EcsListTaskDefinitionsRequest = { ... }
```

##### `familyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTaskDefinitionsRequest.property.familyPrefix"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTaskDefinitionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTaskDefinitionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sort`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTaskDefinitionsRequest.property.sort"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTaskDefinitionsRequest.property.status"></a>

- *Type:* `string`

---

### EcsListTaskDefinitionsResponse <a name="aws-cdk-sdk.ecs.EcsListTaskDefinitionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListTaskDefinitionsResponse: ecs.EcsListTaskDefinitionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTaskDefinitionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `taskDefinitionArns`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTaskDefinitionsResponse.property.taskDefinitionArns"></a>

- *Type:* `string`[]

---

### EcsListTasksRequest <a name="aws-cdk-sdk.ecs.EcsListTasksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListTasksRequest: ecs.EcsListTasksRequest = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTasksRequest.property.cluster"></a>

- *Type:* `string`

---

##### `containerInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTasksRequest.property.containerInstance"></a>

- *Type:* `string`

---

##### `desiredStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTasksRequest.property.desiredStatus"></a>

- *Type:* `string`

---

##### `family`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTasksRequest.property.family"></a>

- *Type:* `string`

---

##### `launchType`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTasksRequest.property.launchType"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTasksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTasksRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTasksRequest.property.serviceName"></a>

- *Type:* `string`

---

##### `startedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTasksRequest.property.startedBy"></a>

- *Type:* `string`

---

### EcsListTasksResponse <a name="aws-cdk-sdk.ecs.EcsListTasksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsListTasksResponse: ecs.EcsListTasksResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTasksResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `taskArns`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsListTasksResponse.property.taskArns"></a>

- *Type:* `string`[]

---

### EcsLoadBalancer <a name="aws-cdk-sdk.ecs.EcsLoadBalancer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsLoadBalancer: ecs.EcsLoadBalancer = { ... }
```

##### `containerName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsLoadBalancer.property.containerName"></a>

- *Type:* `string`

---

##### `containerPort`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsLoadBalancer.property.containerPort"></a>

- *Type:* `number`

---

##### `loadBalancerName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsLoadBalancer.property.loadBalancerName"></a>

- *Type:* `string`

---

##### `targetGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsLoadBalancer.property.targetGroupArn"></a>

- *Type:* `string`

---

### EcsLogConfiguration <a name="aws-cdk-sdk.ecs.EcsLogConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsLogConfiguration: ecs.EcsLogConfiguration = { ... }
```

##### `logDriver`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsLogConfiguration.property.logDriver"></a>

- *Type:* `string`

---

##### `options`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsLogConfiguration.property.options"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `secretOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsLogConfiguration.property.secretOptions"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsSecret`](#aws-cdk-sdk.ecs.EcsSecret)[]

---

### EcsManagedScaling <a name="aws-cdk-sdk.ecs.EcsManagedScaling"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsManagedScaling: ecs.EcsManagedScaling = { ... }
```

##### `instanceWarmupPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsManagedScaling.property.instanceWarmupPeriod"></a>

- *Type:* `number`

---

##### `maximumScalingStepSize`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsManagedScaling.property.maximumScalingStepSize"></a>

- *Type:* `number`

---

##### `minimumScalingStepSize`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsManagedScaling.property.minimumScalingStepSize"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsManagedScaling.property.status"></a>

- *Type:* `string`

---

##### `targetCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsManagedScaling.property.targetCapacity"></a>

- *Type:* `number`

---

### EcsMountPoint <a name="aws-cdk-sdk.ecs.EcsMountPoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsMountPoint: ecs.EcsMountPoint = { ... }
```

##### `containerPath`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsMountPoint.property.containerPath"></a>

- *Type:* `string`

---

##### `readOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsMountPoint.property.readOnly"></a>

- *Type:* `boolean`

---

##### `sourceVolume`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsMountPoint.property.sourceVolume"></a>

- *Type:* `string`

---

### EcsNetworkBinding <a name="aws-cdk-sdk.ecs.EcsNetworkBinding"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsNetworkBinding: ecs.EcsNetworkBinding = { ... }
```

##### `bindIP`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsNetworkBinding.property.bindIP"></a>

- *Type:* `string`

---

##### `containerPort`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsNetworkBinding.property.containerPort"></a>

- *Type:* `number`

---

##### `hostPort`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsNetworkBinding.property.hostPort"></a>

- *Type:* `number`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsNetworkBinding.property.protocol"></a>

- *Type:* `string`

---

### EcsNetworkConfiguration <a name="aws-cdk-sdk.ecs.EcsNetworkConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsNetworkConfiguration: ecs.EcsNetworkConfiguration = { ... }
```

##### `awsvpcConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsNetworkConfiguration.property.awsvpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAwsVpcConfiguration`](#aws-cdk-sdk.ecs.EcsAwsVpcConfiguration)

---

### EcsNetworkInterface <a name="aws-cdk-sdk.ecs.EcsNetworkInterface"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsNetworkInterface: ecs.EcsNetworkInterface = { ... }
```

##### `attachmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsNetworkInterface.property.attachmentId"></a>

- *Type:* `string`

---

##### `ipv6Address`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsNetworkInterface.property.ipv6Address"></a>

- *Type:* `string`

---

##### `privateIpv4Address`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsNetworkInterface.property.privateIpv4Address"></a>

- *Type:* `string`

---

### EcsPlacementConstraint <a name="aws-cdk-sdk.ecs.EcsPlacementConstraint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsPlacementConstraint: ecs.EcsPlacementConstraint = { ... }
```

##### `expression`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsPlacementConstraint.property.expression"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsPlacementConstraint.property.type"></a>

- *Type:* `string`

---

### EcsPlacementStrategy <a name="aws-cdk-sdk.ecs.EcsPlacementStrategy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsPlacementStrategy: ecs.EcsPlacementStrategy = { ... }
```

##### `field`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsPlacementStrategy.property.field"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsPlacementStrategy.property.type"></a>

- *Type:* `string`

---

### EcsPlatformDevice <a name="aws-cdk-sdk.ecs.EcsPlatformDevice"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsPlatformDevice: ecs.EcsPlatformDevice = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsPlatformDevice.property.id"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsPlatformDevice.property.type"></a>

- *Type:* `string`

---

### EcsPortMapping <a name="aws-cdk-sdk.ecs.EcsPortMapping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsPortMapping: ecs.EcsPortMapping = { ... }
```

##### `containerPort`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsPortMapping.property.containerPort"></a>

- *Type:* `number`

---

##### `hostPort`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsPortMapping.property.hostPort"></a>

- *Type:* `number`

---

##### `protocol`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsPortMapping.property.protocol"></a>

- *Type:* `string`

---

### EcsProxyConfiguration <a name="aws-cdk-sdk.ecs.EcsProxyConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsProxyConfiguration: ecs.EcsProxyConfiguration = { ... }
```

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsProxyConfiguration.property.containerName"></a>

- *Type:* `string`

---

##### `properties`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsProxyConfiguration.property.properties"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsKeyValuePair`](#aws-cdk-sdk.ecs.EcsKeyValuePair)[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsProxyConfiguration.property.type"></a>

- *Type:* `string`

---

### EcsPutAccountSettingDefaultRequest <a name="aws-cdk-sdk.ecs.EcsPutAccountSettingDefaultRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsPutAccountSettingDefaultRequest: ecs.EcsPutAccountSettingDefaultRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsPutAccountSettingDefaultRequest.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsPutAccountSettingDefaultRequest.property.value"></a>

- *Type:* `string`

---

### EcsPutAccountSettingDefaultResponse <a name="aws-cdk-sdk.ecs.EcsPutAccountSettingDefaultResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsPutAccountSettingDefaultResponse: ecs.EcsPutAccountSettingDefaultResponse = { ... }
```

##### `setting`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsPutAccountSettingDefaultResponse.property.setting"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsSetting`](#aws-cdk-sdk.ecs.EcsSetting)

---

### EcsPutAccountSettingRequest <a name="aws-cdk-sdk.ecs.EcsPutAccountSettingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsPutAccountSettingRequest: ecs.EcsPutAccountSettingRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsPutAccountSettingRequest.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsPutAccountSettingRequest.property.value"></a>

- *Type:* `string`

---

##### `principalArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsPutAccountSettingRequest.property.principalArn"></a>

- *Type:* `string`

---

### EcsPutAccountSettingResponse <a name="aws-cdk-sdk.ecs.EcsPutAccountSettingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsPutAccountSettingResponse: ecs.EcsPutAccountSettingResponse = { ... }
```

##### `setting`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsPutAccountSettingResponse.property.setting"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsSetting`](#aws-cdk-sdk.ecs.EcsSetting)

---

### EcsPutAttributesRequest <a name="aws-cdk-sdk.ecs.EcsPutAttributesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsPutAttributesRequest: ecs.EcsPutAttributesRequest = { ... }
```

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsPutAttributesRequest.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsPutAttributesRequest.property.cluster"></a>

- *Type:* `string`

---

### EcsPutAttributesResponse <a name="aws-cdk-sdk.ecs.EcsPutAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsPutAttributesResponse: ecs.EcsPutAttributesResponse = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsPutAttributesResponse.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---

### EcsPutClusterCapacityProvidersRequest <a name="aws-cdk-sdk.ecs.EcsPutClusterCapacityProvidersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsPutClusterCapacityProvidersRequest: ecs.EcsPutClusterCapacityProvidersRequest = { ... }
```

##### `capacityProviders`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsPutClusterCapacityProvidersRequest.property.capacityProviders"></a>

- *Type:* `string`[]

---

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsPutClusterCapacityProvidersRequest.property.cluster"></a>

- *Type:* `string`

---

##### `defaultCapacityProviderStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsPutClusterCapacityProvidersRequest.property.defaultCapacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

### EcsPutClusterCapacityProvidersResponse <a name="aws-cdk-sdk.ecs.EcsPutClusterCapacityProvidersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsPutClusterCapacityProvidersResponse: ecs.EcsPutClusterCapacityProvidersResponse = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsPutClusterCapacityProvidersResponse.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCluster`](#aws-cdk-sdk.ecs.EcsCluster)

---

### EcsRegisterContainerInstanceRequest <a name="aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsRegisterContainerInstanceRequest: ecs.EcsRegisterContainerInstanceRequest = { ... }
```

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest.property.cluster"></a>

- *Type:* `string`

---

##### `containerInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest.property.containerInstanceArn"></a>

- *Type:* `string`

---

##### `instanceIdentityDocument`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest.property.instanceIdentityDocument"></a>

- *Type:* `string`

---

##### `instanceIdentityDocumentSignature`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest.property.instanceIdentityDocumentSignature"></a>

- *Type:* `string`

---

##### `platformDevices`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest.property.platformDevices"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPlatformDevice`](#aws-cdk-sdk.ecs.EcsPlatformDevice)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `totalResources`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest.property.totalResources"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsResource`](#aws-cdk-sdk.ecs.EcsResource)[]

---

##### `versionInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest.property.versionInfo"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsVersionInfo`](#aws-cdk-sdk.ecs.EcsVersionInfo)

---

### EcsRegisterContainerInstanceResponse <a name="aws-cdk-sdk.ecs.EcsRegisterContainerInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsRegisterContainerInstanceResponse: ecs.EcsRegisterContainerInstanceResponse = { ... }
```

##### `containerInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterContainerInstanceResponse.property.containerInstance"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainerInstance`](#aws-cdk-sdk.ecs.EcsContainerInstance)

---

### EcsRegisterTaskDefinitionRequest <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsRegisterTaskDefinitionRequest: ecs.EcsRegisterTaskDefinitionRequest = { ... }
```

##### `containerDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest.property.containerDefinitions"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainerDefinition`](#aws-cdk-sdk.ecs.EcsContainerDefinition)[]

---

##### `family`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest.property.family"></a>

- *Type:* `string`

---

##### `cpu`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest.property.cpu"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `inferenceAccelerators`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest.property.inferenceAccelerators"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsInferenceAccelerator`](#aws-cdk-sdk.ecs.EcsInferenceAccelerator)[]

---

##### `ipcMode`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest.property.ipcMode"></a>

- *Type:* `string`

---

##### `memory`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest.property.memory"></a>

- *Type:* `string`

---

##### `networkMode`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest.property.networkMode"></a>

- *Type:* `string`

---

##### `pidMode`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest.property.pidMode"></a>

- *Type:* `string`

---

##### `placementConstraints`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest.property.placementConstraints"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskDefinitionPlacementConstraint`](#aws-cdk-sdk.ecs.EcsTaskDefinitionPlacementConstraint)[]

---

##### `proxyConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest.property.proxyConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsProxyConfiguration`](#aws-cdk-sdk.ecs.EcsProxyConfiguration)

---

##### `requiresCompatibilities`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest.property.requiresCompatibilities"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `taskRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest.property.taskRoleArn"></a>

- *Type:* `string`

---

##### `volumes`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest.property.volumes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsVolume`](#aws-cdk-sdk.ecs.EcsVolume)[]

---

### EcsRegisterTaskDefinitionResponse <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsRegisterTaskDefinitionResponse: ecs.EcsRegisterTaskDefinitionResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `taskDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionResponse.property.taskDefinition"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskDefinition`](#aws-cdk-sdk.ecs.EcsTaskDefinition)

---

### EcsRepositoryCredentials <a name="aws-cdk-sdk.ecs.EcsRepositoryCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsRepositoryCredentials: ecs.EcsRepositoryCredentials = { ... }
```

##### `credentialsParameter`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsRepositoryCredentials.property.credentialsParameter"></a>

- *Type:* `string`

---

### EcsResource <a name="aws-cdk-sdk.ecs.EcsResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsResource: ecs.EcsResource = { ... }
```

##### `doubleValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsResource.property.doubleValue"></a>

- *Type:* `number`

---

##### `integerValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsResource.property.integerValue"></a>

- *Type:* `number`

---

##### `longValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsResource.property.longValue"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsResource.property.name"></a>

- *Type:* `string`

---

##### `stringSetValue`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsResource.property.stringSetValue"></a>

- *Type:* `string`[]

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsResource.property.type"></a>

- *Type:* `string`

---

### EcsResourceRequirement <a name="aws-cdk-sdk.ecs.EcsResourceRequirement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsResourceRequirement: ecs.EcsResourceRequirement = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsResourceRequirement.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsResourceRequirement.property.value"></a>

- *Type:* `string`

---

### EcsRunTaskRequest <a name="aws-cdk-sdk.ecs.EcsRunTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsRunTaskRequest: ecs.EcsRunTaskRequest = { ... }
```

##### `taskDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskRequest.property.taskDefinition"></a>

- *Type:* `string`

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskRequest.property.capacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskRequest.property.cluster"></a>

- *Type:* `string`

---

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskRequest.property.count"></a>

- *Type:* `number`

---

##### `enableECSManagedTags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskRequest.property.enableECSManagedTags"></a>

- *Type:* `boolean`

---

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskRequest.property.group"></a>

- *Type:* `string`

---

##### `launchType`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskRequest.property.launchType"></a>

- *Type:* `string`

---

##### `networkConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskRequest.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsNetworkConfiguration`](#aws-cdk-sdk.ecs.EcsNetworkConfiguration)

---

##### `overrides`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskRequest.property.overrides"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskOverride`](#aws-cdk-sdk.ecs.EcsTaskOverride)

---

##### `placementConstraints`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskRequest.property.placementConstraints"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPlacementConstraint`](#aws-cdk-sdk.ecs.EcsPlacementConstraint)[]

---

##### `placementStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskRequest.property.placementStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPlacementStrategy`](#aws-cdk-sdk.ecs.EcsPlacementStrategy)[]

---

##### `platformVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskRequest.property.platformVersion"></a>

- *Type:* `string`

---

##### `propagateTags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskRequest.property.propagateTags"></a>

- *Type:* `string`

---

##### `referenceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskRequest.property.referenceId"></a>

- *Type:* `string`

---

##### `startedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskRequest.property.startedBy"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

### EcsRunTaskResponse <a name="aws-cdk-sdk.ecs.EcsRunTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsRunTaskResponse: ecs.EcsRunTaskResponse = { ... }
```

##### `failures`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskResponse.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---

##### `tasks`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsRunTaskResponse.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTask`](#aws-cdk-sdk.ecs.EcsTask)[]

---

### EcsScale <a name="aws-cdk-sdk.ecs.EcsScale"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsScale: ecs.EcsScale = { ... }
```

##### `unit`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsScale.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsScale.property.value"></a>

- *Type:* `number`

---

### EcsSecret <a name="aws-cdk-sdk.ecs.EcsSecret"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsSecret: ecs.EcsSecret = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsSecret.property.name"></a>

- *Type:* `string`

---

##### `valueFrom`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsSecret.property.valueFrom"></a>

- *Type:* `string`

---

### EcsService <a name="aws-cdk-sdk.ecs.EcsService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsService: ecs.EcsService = { ... }
```

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.capacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.clusterArn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.createdAt"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.createdBy"></a>

- *Type:* `string`

---

##### `deploymentConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.deploymentConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeploymentConfiguration`](#aws-cdk-sdk.ecs.EcsDeploymentConfiguration)

---

##### `deploymentController`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.deploymentController"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeploymentController`](#aws-cdk-sdk.ecs.EcsDeploymentController)

---

##### `deployments`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.deployments"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeployment`](#aws-cdk-sdk.ecs.EcsDeployment)[]

---

##### `desiredCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.desiredCount"></a>

- *Type:* `number`

---

##### `enableECSManagedTags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.enableECSManagedTags"></a>

- *Type:* `boolean`

---

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.events"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsServiceEvent`](#aws-cdk-sdk.ecs.EcsServiceEvent)[]

---

##### `healthCheckGracePeriodSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.healthCheckGracePeriodSeconds"></a>

- *Type:* `number`

---

##### `launchType`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.launchType"></a>

- *Type:* `string`

---

##### `loadBalancers`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.loadBalancers"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsLoadBalancer`](#aws-cdk-sdk.ecs.EcsLoadBalancer)[]

---

##### `networkConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsNetworkConfiguration`](#aws-cdk-sdk.ecs.EcsNetworkConfiguration)

---

##### `pendingCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.pendingCount"></a>

- *Type:* `number`

---

##### `placementConstraints`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.placementConstraints"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPlacementConstraint`](#aws-cdk-sdk.ecs.EcsPlacementConstraint)[]

---

##### `placementStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.placementStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPlacementStrategy`](#aws-cdk-sdk.ecs.EcsPlacementStrategy)[]

---

##### `platformVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.platformVersion"></a>

- *Type:* `string`

---

##### `propagateTags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.propagateTags"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.roleArn"></a>

- *Type:* `string`

---

##### `runningCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.runningCount"></a>

- *Type:* `number`

---

##### `schedulingStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.schedulingStrategy"></a>

- *Type:* `string`

---

##### `serviceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.serviceArn"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.serviceName"></a>

- *Type:* `string`

---

##### `serviceRegistries`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.serviceRegistries"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsServiceRegistry`](#aws-cdk-sdk.ecs.EcsServiceRegistry)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `taskDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.taskDefinition"></a>

- *Type:* `string`

---

##### `taskSets`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsService.property.taskSets"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskSet`](#aws-cdk-sdk.ecs.EcsTaskSet)[]

---

### EcsServiceEvent <a name="aws-cdk-sdk.ecs.EcsServiceEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsServiceEvent: ecs.EcsServiceEvent = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsServiceEvent.property.createdAt"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsServiceEvent.property.id"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsServiceEvent.property.message"></a>

- *Type:* `string`

---

### EcsServiceRegistry <a name="aws-cdk-sdk.ecs.EcsServiceRegistry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsServiceRegistry: ecs.EcsServiceRegistry = { ... }
```

##### `containerName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsServiceRegistry.property.containerName"></a>

- *Type:* `string`

---

##### `containerPort`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsServiceRegistry.property.containerPort"></a>

- *Type:* `number`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsServiceRegistry.property.port"></a>

- *Type:* `number`

---

##### `registryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsServiceRegistry.property.registryArn"></a>

- *Type:* `string`

---

### EcsSetting <a name="aws-cdk-sdk.ecs.EcsSetting"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsSetting: ecs.EcsSetting = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSetting.property.name"></a>

- *Type:* `string`

---

##### `principalArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSetting.property.principalArn"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSetting.property.value"></a>

- *Type:* `string`

---

### EcsStartTaskRequest <a name="aws-cdk-sdk.ecs.EcsStartTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsStartTaskRequest: ecs.EcsStartTaskRequest = { ... }
```

##### `containerInstances`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsStartTaskRequest.property.containerInstances"></a>

- *Type:* `string`[]

---

##### `taskDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsStartTaskRequest.property.taskDefinition"></a>

- *Type:* `string`

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsStartTaskRequest.property.cluster"></a>

- *Type:* `string`

---

##### `enableECSManagedTags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsStartTaskRequest.property.enableECSManagedTags"></a>

- *Type:* `boolean`

---

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsStartTaskRequest.property.group"></a>

- *Type:* `string`

---

##### `networkConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsStartTaskRequest.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsNetworkConfiguration`](#aws-cdk-sdk.ecs.EcsNetworkConfiguration)

---

##### `overrides`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsStartTaskRequest.property.overrides"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskOverride`](#aws-cdk-sdk.ecs.EcsTaskOverride)

---

##### `propagateTags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsStartTaskRequest.property.propagateTags"></a>

- *Type:* `string`

---

##### `referenceId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsStartTaskRequest.property.referenceId"></a>

- *Type:* `string`

---

##### `startedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsStartTaskRequest.property.startedBy"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsStartTaskRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

### EcsStartTaskResponse <a name="aws-cdk-sdk.ecs.EcsStartTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsStartTaskResponse: ecs.EcsStartTaskResponse = { ... }
```

##### `failures`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsStartTaskResponse.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---

##### `tasks`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsStartTaskResponse.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTask`](#aws-cdk-sdk.ecs.EcsTask)[]

---

### EcsStopTaskRequest <a name="aws-cdk-sdk.ecs.EcsStopTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsStopTaskRequest: ecs.EcsStopTaskRequest = { ... }
```

##### `task`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsStopTaskRequest.property.task"></a>

- *Type:* `string`

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsStopTaskRequest.property.cluster"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsStopTaskRequest.property.reason"></a>

- *Type:* `string`

---

### EcsStopTaskResponse <a name="aws-cdk-sdk.ecs.EcsStopTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsStopTaskResponse: ecs.EcsStopTaskResponse = { ... }
```

##### `task`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsStopTaskResponse.property.task"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTask`](#aws-cdk-sdk.ecs.EcsTask)

---

### EcsSubmitAttachmentStateChangesRequest <a name="aws-cdk-sdk.ecs.EcsSubmitAttachmentStateChangesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsSubmitAttachmentStateChangesRequest: ecs.EcsSubmitAttachmentStateChangesRequest = { ... }
```

##### `attachments`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitAttachmentStateChangesRequest.property.attachments"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttachmentStateChange`](#aws-cdk-sdk.ecs.EcsAttachmentStateChange)[]

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitAttachmentStateChangesRequest.property.cluster"></a>

- *Type:* `string`

---

### EcsSubmitAttachmentStateChangesResponse <a name="aws-cdk-sdk.ecs.EcsSubmitAttachmentStateChangesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsSubmitAttachmentStateChangesResponse: ecs.EcsSubmitAttachmentStateChangesResponse = { ... }
```

##### `acknowledgment`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitAttachmentStateChangesResponse.property.acknowledgment"></a>

- *Type:* `string`

---

### EcsSubmitContainerStateChangeRequest <a name="aws-cdk-sdk.ecs.EcsSubmitContainerStateChangeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsSubmitContainerStateChangeRequest: ecs.EcsSubmitContainerStateChangeRequest = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitContainerStateChangeRequest.property.cluster"></a>

- *Type:* `string`

---

##### `containerName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitContainerStateChangeRequest.property.containerName"></a>

- *Type:* `string`

---

##### `exitCode`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitContainerStateChangeRequest.property.exitCode"></a>

- *Type:* `number`

---

##### `networkBindings`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitContainerStateChangeRequest.property.networkBindings"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsNetworkBinding`](#aws-cdk-sdk.ecs.EcsNetworkBinding)[]

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitContainerStateChangeRequest.property.reason"></a>

- *Type:* `string`

---

##### `runtimeId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitContainerStateChangeRequest.property.runtimeId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitContainerStateChangeRequest.property.status"></a>

- *Type:* `string`

---

##### `task`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitContainerStateChangeRequest.property.task"></a>

- *Type:* `string`

---

### EcsSubmitContainerStateChangeResponse <a name="aws-cdk-sdk.ecs.EcsSubmitContainerStateChangeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsSubmitContainerStateChangeResponse: ecs.EcsSubmitContainerStateChangeResponse = { ... }
```

##### `acknowledgment`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitContainerStateChangeResponse.property.acknowledgment"></a>

- *Type:* `string`

---

### EcsSubmitTaskStateChangeRequest <a name="aws-cdk-sdk.ecs.EcsSubmitTaskStateChangeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsSubmitTaskStateChangeRequest: ecs.EcsSubmitTaskStateChangeRequest = { ... }
```

##### `attachments`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitTaskStateChangeRequest.property.attachments"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttachmentStateChange`](#aws-cdk-sdk.ecs.EcsAttachmentStateChange)[]

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitTaskStateChangeRequest.property.cluster"></a>

- *Type:* `string`

---

##### `containers`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitTaskStateChangeRequest.property.containers"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainerStateChange`](#aws-cdk-sdk.ecs.EcsContainerStateChange)[]

---

##### `executionStoppedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitTaskStateChangeRequest.property.executionStoppedAt"></a>

- *Type:* `string`

---

##### `pullStartedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitTaskStateChangeRequest.property.pullStartedAt"></a>

- *Type:* `string`

---

##### `pullStoppedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitTaskStateChangeRequest.property.pullStoppedAt"></a>

- *Type:* `string`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitTaskStateChangeRequest.property.reason"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitTaskStateChangeRequest.property.status"></a>

- *Type:* `string`

---

##### `task`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitTaskStateChangeRequest.property.task"></a>

- *Type:* `string`

---

### EcsSubmitTaskStateChangeResponse <a name="aws-cdk-sdk.ecs.EcsSubmitTaskStateChangeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsSubmitTaskStateChangeResponse: ecs.EcsSubmitTaskStateChangeResponse = { ... }
```

##### `acknowledgment`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSubmitTaskStateChangeResponse.property.acknowledgment"></a>

- *Type:* `string`

---

### EcsSystemControl <a name="aws-cdk-sdk.ecs.EcsSystemControl"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsSystemControl: ecs.EcsSystemControl = { ... }
```

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSystemControl.property.namespace"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsSystemControl.property.value"></a>

- *Type:* `string`

---

### EcsTag <a name="aws-cdk-sdk.ecs.EcsTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsTag: ecs.EcsTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTag.property.value"></a>

- *Type:* `string`

---

### EcsTagResourceRequest <a name="aws-cdk-sdk.ecs.EcsTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsTagResourceRequest: ecs.EcsTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

### EcsTagResourceResponse <a name="aws-cdk-sdk.ecs.EcsTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsTagResourceResponse: ecs.EcsTagResourceResponse = { ... }
```

### EcsTask <a name="aws-cdk-sdk.ecs.EcsTask"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsTask: ecs.EcsTask = { ... }
```

##### `attachments`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.attachments"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttachment`](#aws-cdk-sdk.ecs.EcsAttachment)[]

---

##### `attributes`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.availabilityZone"></a>

- *Type:* `string`

---

##### `capacityProviderName`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.capacityProviderName"></a>

- *Type:* `string`

---

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.clusterArn"></a>

- *Type:* `string`

---

##### `connectivity`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.connectivity"></a>

- *Type:* `string`

---

##### `connectivityAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.connectivityAt"></a>

- *Type:* `string`

---

##### `containerInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.containerInstanceArn"></a>

- *Type:* `string`

---

##### `containers`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.containers"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainer`](#aws-cdk-sdk.ecs.EcsContainer)[]

---

##### `cpu`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.cpu"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.createdAt"></a>

- *Type:* `string`

---

##### `desiredStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.desiredStatus"></a>

- *Type:* `string`

---

##### `executionStoppedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.executionStoppedAt"></a>

- *Type:* `string`

---

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.group"></a>

- *Type:* `string`

---

##### `healthStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.healthStatus"></a>

- *Type:* `string`

---

##### `inferenceAccelerators`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.inferenceAccelerators"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsInferenceAccelerator`](#aws-cdk-sdk.ecs.EcsInferenceAccelerator)[]

---

##### `lastStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.lastStatus"></a>

- *Type:* `string`

---

##### `launchType`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.launchType"></a>

- *Type:* `string`

---

##### `memory`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.memory"></a>

- *Type:* `string`

---

##### `overrides`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.overrides"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskOverride`](#aws-cdk-sdk.ecs.EcsTaskOverride)

---

##### `platformVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.platformVersion"></a>

- *Type:* `string`

---

##### `pullStartedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.pullStartedAt"></a>

- *Type:* `string`

---

##### `pullStoppedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.pullStoppedAt"></a>

- *Type:* `string`

---

##### `startedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.startedAt"></a>

- *Type:* `string`

---

##### `startedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.startedBy"></a>

- *Type:* `string`

---

##### `stopCode`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.stopCode"></a>

- *Type:* `string`

---

##### `stoppedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.stoppedAt"></a>

- *Type:* `string`

---

##### `stoppedReason`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.stoppedReason"></a>

- *Type:* `string`

---

##### `stoppingAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.stoppingAt"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `taskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.taskArn"></a>

- *Type:* `string`

---

##### `taskDefinitionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.taskDefinitionArn"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTask.property.version"></a>

- *Type:* `number`

---

### EcsTaskDefinition <a name="aws-cdk-sdk.ecs.EcsTaskDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsTaskDefinition: ecs.EcsTaskDefinition = { ... }
```

##### `compatibilities`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.compatibilities"></a>

- *Type:* `string`[]

---

##### `containerDefinitions`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.containerDefinitions"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainerDefinition`](#aws-cdk-sdk.ecs.EcsContainerDefinition)[]

---

##### `cpu`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.cpu"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `family`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.family"></a>

- *Type:* `string`

---

##### `inferenceAccelerators`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.inferenceAccelerators"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsInferenceAccelerator`](#aws-cdk-sdk.ecs.EcsInferenceAccelerator)[]

---

##### `ipcMode`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.ipcMode"></a>

- *Type:* `string`

---

##### `memory`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.memory"></a>

- *Type:* `string`

---

##### `networkMode`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.networkMode"></a>

- *Type:* `string`

---

##### `pidMode`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.pidMode"></a>

- *Type:* `string`

---

##### `placementConstraints`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.placementConstraints"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskDefinitionPlacementConstraint`](#aws-cdk-sdk.ecs.EcsTaskDefinitionPlacementConstraint)[]

---

##### `proxyConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.proxyConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsProxyConfiguration`](#aws-cdk-sdk.ecs.EcsProxyConfiguration)

---

##### `requiresAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.requiresAttributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---

##### `requiresCompatibilities`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.requiresCompatibilities"></a>

- *Type:* `string`[]

---

##### `revision`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.revision"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.status"></a>

- *Type:* `string`

---

##### `taskDefinitionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.taskDefinitionArn"></a>

- *Type:* `string`

---

##### `taskRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.taskRoleArn"></a>

- *Type:* `string`

---

##### `volumes`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinition.property.volumes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsVolume`](#aws-cdk-sdk.ecs.EcsVolume)[]

---

### EcsTaskDefinitionPlacementConstraint <a name="aws-cdk-sdk.ecs.EcsTaskDefinitionPlacementConstraint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsTaskDefinitionPlacementConstraint: ecs.EcsTaskDefinitionPlacementConstraint = { ... }
```

##### `expression`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinitionPlacementConstraint.property.expression"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskDefinitionPlacementConstraint.property.type"></a>

- *Type:* `string`

---

### EcsTaskOverride <a name="aws-cdk-sdk.ecs.EcsTaskOverride"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsTaskOverride: ecs.EcsTaskOverride = { ... }
```

##### `containerOverrides`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskOverride.property.containerOverrides"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainerOverride`](#aws-cdk-sdk.ecs.EcsContainerOverride)[]

---

##### `cpu`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskOverride.property.cpu"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskOverride.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `inferenceAcceleratorOverrides`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskOverride.property.inferenceAcceleratorOverrides"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsInferenceAcceleratorOverride`](#aws-cdk-sdk.ecs.EcsInferenceAcceleratorOverride)[]

---

##### `memory`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskOverride.property.memory"></a>

- *Type:* `string`

---

##### `taskRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskOverride.property.taskRoleArn"></a>

- *Type:* `string`

---

### EcsTaskSet <a name="aws-cdk-sdk.ecs.EcsTaskSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsTaskSet: ecs.EcsTaskSet = { ... }
```

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.capacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.clusterArn"></a>

- *Type:* `string`

---

##### `computedDesiredCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.computedDesiredCount"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.createdAt"></a>

- *Type:* `string`

---

##### `externalId`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.externalId"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.id"></a>

- *Type:* `string`

---

##### `launchType`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.launchType"></a>

- *Type:* `string`

---

##### `loadBalancers`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.loadBalancers"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsLoadBalancer`](#aws-cdk-sdk.ecs.EcsLoadBalancer)[]

---

##### `networkConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsNetworkConfiguration`](#aws-cdk-sdk.ecs.EcsNetworkConfiguration)

---

##### `pendingCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.pendingCount"></a>

- *Type:* `number`

---

##### `platformVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.platformVersion"></a>

- *Type:* `string`

---

##### `runningCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.runningCount"></a>

- *Type:* `number`

---

##### `scale`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.scale"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsScale`](#aws-cdk-sdk.ecs.EcsScale)

---

##### `serviceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.serviceArn"></a>

- *Type:* `string`

---

##### `serviceRegistries`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.serviceRegistries"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsServiceRegistry`](#aws-cdk-sdk.ecs.EcsServiceRegistry)[]

---

##### `stabilityStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.stabilityStatus"></a>

- *Type:* `string`

---

##### `stabilityStatusAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.stabilityStatusAt"></a>

- *Type:* `string`

---

##### `startedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.startedBy"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `taskDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.taskDefinition"></a>

- *Type:* `string`

---

##### `taskSetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.taskSetArn"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTaskSet.property.updatedAt"></a>

- *Type:* `string`

---

### EcsTmpfs <a name="aws-cdk-sdk.ecs.EcsTmpfs"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsTmpfs: ecs.EcsTmpfs = { ... }
```

##### `containerPath`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsTmpfs.property.containerPath"></a>

- *Type:* `string`

---

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsTmpfs.property.size"></a>

- *Type:* `number`

---

##### `mountOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsTmpfs.property.mountOptions"></a>

- *Type:* `string`[]

---

### EcsUlimit <a name="aws-cdk-sdk.ecs.EcsUlimit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsUlimit: ecs.EcsUlimit = { ... }
```

##### `hardLimit`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUlimit.property.hardLimit"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUlimit.property.name"></a>

- *Type:* `string`

---

##### `softLimit`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUlimit.property.softLimit"></a>

- *Type:* `number`

---

### EcsUntagResourceRequest <a name="aws-cdk-sdk.ecs.EcsUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsUntagResourceRequest: ecs.EcsUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### EcsUntagResourceResponse <a name="aws-cdk-sdk.ecs.EcsUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsUntagResourceResponse: ecs.EcsUntagResourceResponse = { ... }
```

### EcsUpdateCapacityProviderRequest <a name="aws-cdk-sdk.ecs.EcsUpdateCapacityProviderRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsUpdateCapacityProviderRequest: ecs.EcsUpdateCapacityProviderRequest = { ... }
```

##### `autoScalingGroupProvider`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateCapacityProviderRequest.property.autoScalingGroupProvider"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAutoScalingGroupProviderUpdate`](#aws-cdk-sdk.ecs.EcsAutoScalingGroupProviderUpdate)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateCapacityProviderRequest.property.name"></a>

- *Type:* `string`

---

### EcsUpdateCapacityProviderResponse <a name="aws-cdk-sdk.ecs.EcsUpdateCapacityProviderResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsUpdateCapacityProviderResponse: ecs.EcsUpdateCapacityProviderResponse = { ... }
```

##### `capacityProvider`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateCapacityProviderResponse.property.capacityProvider"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProvider`](#aws-cdk-sdk.ecs.EcsCapacityProvider)

---

### EcsUpdateClusterSettingsRequest <a name="aws-cdk-sdk.ecs.EcsUpdateClusterSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsUpdateClusterSettingsRequest: ecs.EcsUpdateClusterSettingsRequest = { ... }
```

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateClusterSettingsRequest.property.cluster"></a>

- *Type:* `string`

---

##### `settings`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateClusterSettingsRequest.property.settings"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsClusterSetting`](#aws-cdk-sdk.ecs.EcsClusterSetting)[]

---

### EcsUpdateClusterSettingsResponse <a name="aws-cdk-sdk.ecs.EcsUpdateClusterSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsUpdateClusterSettingsResponse: ecs.EcsUpdateClusterSettingsResponse = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateClusterSettingsResponse.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCluster`](#aws-cdk-sdk.ecs.EcsCluster)

---

### EcsUpdateContainerAgentRequest <a name="aws-cdk-sdk.ecs.EcsUpdateContainerAgentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsUpdateContainerAgentRequest: ecs.EcsUpdateContainerAgentRequest = { ... }
```

##### `containerInstance`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateContainerAgentRequest.property.containerInstance"></a>

- *Type:* `string`

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateContainerAgentRequest.property.cluster"></a>

- *Type:* `string`

---

### EcsUpdateContainerAgentResponse <a name="aws-cdk-sdk.ecs.EcsUpdateContainerAgentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsUpdateContainerAgentResponse: ecs.EcsUpdateContainerAgentResponse = { ... }
```

##### `containerInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateContainerAgentResponse.property.containerInstance"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainerInstance`](#aws-cdk-sdk.ecs.EcsContainerInstance)

---

### EcsUpdateContainerInstancesStateRequest <a name="aws-cdk-sdk.ecs.EcsUpdateContainerInstancesStateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsUpdateContainerInstancesStateRequest: ecs.EcsUpdateContainerInstancesStateRequest = { ... }
```

##### `containerInstances`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateContainerInstancesStateRequest.property.containerInstances"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateContainerInstancesStateRequest.property.status"></a>

- *Type:* `string`

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateContainerInstancesStateRequest.property.cluster"></a>

- *Type:* `string`

---

### EcsUpdateContainerInstancesStateResponse <a name="aws-cdk-sdk.ecs.EcsUpdateContainerInstancesStateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsUpdateContainerInstancesStateResponse: ecs.EcsUpdateContainerInstancesStateResponse = { ... }
```

##### `containerInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateContainerInstancesStateResponse.property.containerInstances"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainerInstance`](#aws-cdk-sdk.ecs.EcsContainerInstance)[]

---

##### `failures`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateContainerInstancesStateResponse.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---

### EcsUpdateServicePrimaryTaskSetRequest <a name="aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsUpdateServicePrimaryTaskSetRequest: ecs.EcsUpdateServicePrimaryTaskSetRequest = { ... }
```

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetRequest.property.cluster"></a>

- *Type:* `string`

---

##### `primaryTaskSet`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetRequest.property.primaryTaskSet"></a>

- *Type:* `string`

---

##### `service`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetRequest.property.service"></a>

- *Type:* `string`

---

### EcsUpdateServicePrimaryTaskSetResponse <a name="aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsUpdateServicePrimaryTaskSetResponse: ecs.EcsUpdateServicePrimaryTaskSetResponse = { ... }
```

##### `taskSet`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetResponse.property.taskSet"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskSet`](#aws-cdk-sdk.ecs.EcsTaskSet)

---

### EcsUpdateServiceRequest <a name="aws-cdk-sdk.ecs.EcsUpdateServiceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsUpdateServiceRequest: ecs.EcsUpdateServiceRequest = { ... }
```

##### `service`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateServiceRequest.property.service"></a>

- *Type:* `string`

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateServiceRequest.property.capacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateServiceRequest.property.cluster"></a>

- *Type:* `string`

---

##### `deploymentConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateServiceRequest.property.deploymentConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeploymentConfiguration`](#aws-cdk-sdk.ecs.EcsDeploymentConfiguration)

---

##### `desiredCount`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateServiceRequest.property.desiredCount"></a>

- *Type:* `number`

---

##### `forceNewDeployment`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateServiceRequest.property.forceNewDeployment"></a>

- *Type:* `boolean`

---

##### `healthCheckGracePeriodSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateServiceRequest.property.healthCheckGracePeriodSeconds"></a>

- *Type:* `number`

---

##### `networkConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateServiceRequest.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsNetworkConfiguration`](#aws-cdk-sdk.ecs.EcsNetworkConfiguration)

---

##### `placementConstraints`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateServiceRequest.property.placementConstraints"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPlacementConstraint`](#aws-cdk-sdk.ecs.EcsPlacementConstraint)[]

---

##### `placementStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateServiceRequest.property.placementStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPlacementStrategy`](#aws-cdk-sdk.ecs.EcsPlacementStrategy)[]

---

##### `platformVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateServiceRequest.property.platformVersion"></a>

- *Type:* `string`

---

##### `taskDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateServiceRequest.property.taskDefinition"></a>

- *Type:* `string`

---

### EcsUpdateServiceResponse <a name="aws-cdk-sdk.ecs.EcsUpdateServiceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsUpdateServiceResponse: ecs.EcsUpdateServiceResponse = { ... }
```

##### `service`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateServiceResponse.property.service"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsService`](#aws-cdk-sdk.ecs.EcsService)

---

### EcsUpdateTaskSetRequest <a name="aws-cdk-sdk.ecs.EcsUpdateTaskSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsUpdateTaskSetRequest: ecs.EcsUpdateTaskSetRequest = { ... }
```

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateTaskSetRequest.property.cluster"></a>

- *Type:* `string`

---

##### `scale`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateTaskSetRequest.property.scale"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsScale`](#aws-cdk-sdk.ecs.EcsScale)

---

##### `service`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateTaskSetRequest.property.service"></a>

- *Type:* `string`

---

##### `taskSet`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateTaskSetRequest.property.taskSet"></a>

- *Type:* `string`

---

### EcsUpdateTaskSetResponse <a name="aws-cdk-sdk.ecs.EcsUpdateTaskSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsUpdateTaskSetResponse: ecs.EcsUpdateTaskSetResponse = { ... }
```

##### `taskSet`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsUpdateTaskSetResponse.property.taskSet"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskSet`](#aws-cdk-sdk.ecs.EcsTaskSet)

---

### EcsVersionInfo <a name="aws-cdk-sdk.ecs.EcsVersionInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsVersionInfo: ecs.EcsVersionInfo = { ... }
```

##### `agentHash`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsVersionInfo.property.agentHash"></a>

- *Type:* `string`

---

##### `agentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsVersionInfo.property.agentVersion"></a>

- *Type:* `string`

---

##### `dockerVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsVersionInfo.property.dockerVersion"></a>

- *Type:* `string`

---

### EcsVolume <a name="aws-cdk-sdk.ecs.EcsVolume"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsVolume: ecs.EcsVolume = { ... }
```

##### `dockerVolumeConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsVolume.property.dockerVolumeConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDockerVolumeConfiguration`](#aws-cdk-sdk.ecs.EcsDockerVolumeConfiguration)

---

##### `efsVolumeConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsVolume.property.efsVolumeConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsefsVolumeConfiguration`](#aws-cdk-sdk.ecs.EcsefsVolumeConfiguration)

---

##### `fsxWindowsFileServerVolumeConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsVolume.property.fsxWindowsFileServerVolumeConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsfSxWindowsFileServerVolumeConfiguration`](#aws-cdk-sdk.ecs.EcsfSxWindowsFileServerVolumeConfiguration)

---

##### `host`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsVolume.property.host"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsHostVolumeProperties`](#aws-cdk-sdk.ecs.EcsHostVolumeProperties)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsVolume.property.name"></a>

- *Type:* `string`

---

### EcsVolumeFrom <a name="aws-cdk-sdk.ecs.EcsVolumeFrom"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

const ecsVolumeFrom: ecs.EcsVolumeFrom = { ... }
```

##### `readOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsVolumeFrom.property.readOnly"></a>

- *Type:* `boolean`

---

##### `sourceContainer`<sup>Optional</sup> <a name="aws-cdk-sdk.ecs.EcsVolumeFrom.property.sourceContainer"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### ECSResponsesCreateCapacityProvider <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProvider"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProvider.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateCapacityProvider(__scope: Construct, __resources: string[], __input: EcsCreateCapacityProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateCapacityProviderRequest`](#aws-cdk-sdk.ecs.EcsCreateCapacityProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `capacityProvider`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProvider.property.capacityProvider"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProvider`](#aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProvider)

---


### ECSResponsesCreateCapacityProviderCapacityProvider <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProvider"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProvider.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateCapacityProviderCapacityProvider(__scope: Construct, __resources: string[], __input: EcsCreateCapacityProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateCapacityProviderRequest`](#aws-cdk-sdk.ecs.EcsCreateCapacityProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroupProvider`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProvider.property.autoScalingGroupProvider"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProvider`](#aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProvider)

---

##### `capacityProviderArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProvider.property.capacityProviderArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProvider.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProvider.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProvider.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `updateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProvider.property.updateStatus"></a>

- *Type:* `string`

---

##### `updateStatusReason`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProvider.property.updateStatusReason"></a>

- *Type:* `string`

---


### ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProvider <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProvider"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProvider.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProvider(__scope: Construct, __resources: string[], __input: EcsCreateCapacityProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateCapacityProviderRequest`](#aws-cdk-sdk.ecs.EcsCreateCapacityProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProvider.property.autoScalingGroupArn"></a>

- *Type:* `string`

---

##### `managedScaling`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProvider.property.managedScaling"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling`](#aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling)

---

##### `managedTerminationProtection`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProvider.property.managedTerminationProtection"></a>

- *Type:* `string`

---


### ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling(__scope: Construct, __resources: string[], __input: EcsCreateCapacityProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateCapacityProviderRequest`](#aws-cdk-sdk.ecs.EcsCreateCapacityProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceWarmupPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.property.instanceWarmupPeriod"></a>

- *Type:* `number`

---

##### `maximumScalingStepSize`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.property.maximumScalingStepSize"></a>

- *Type:* `number`

---

##### `minimumScalingStepSize`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.property.minimumScalingStepSize"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.property.status"></a>

- *Type:* `string`

---

##### `targetCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.property.targetCapacity"></a>

- *Type:* `number`

---


### ECSResponsesCreateCluster <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCluster"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCluster.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateCluster(__scope: Construct, __resources: string[], __input: EcsCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateClusterRequest`](#aws-cdk-sdk.ecs.EcsCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster`](#aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster)

---


### ECSResponsesCreateClusterCluster <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateClusterCluster(__scope: Construct, __resources: string[], __input: EcsCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateClusterRequest`](#aws-cdk-sdk.ecs.EcsCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `activeServicesCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.property.activeServicesCount"></a>

- *Type:* `number`

---

##### `attachments`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.property.attachments"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttachment`](#aws-cdk-sdk.ecs.EcsAttachment)[]

---

##### `attachmentsStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.property.attachmentsStatus"></a>

- *Type:* `string`

---

##### `capacityProviders`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.property.capacityProviders"></a>

- *Type:* `string`[]

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.property.clusterName"></a>

- *Type:* `string`

---

##### `defaultCapacityProviderStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.property.defaultCapacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `pendingTasksCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.property.pendingTasksCount"></a>

- *Type:* `number`

---

##### `registeredContainerInstancesCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.property.registeredContainerInstancesCount"></a>

- *Type:* `number`

---

##### `runningTasksCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.property.runningTasksCount"></a>

- *Type:* `number`

---

##### `settings`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.property.settings"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsClusterSetting`](#aws-cdk-sdk.ecs.EcsClusterSetting)[]

---

##### `statistics`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsKeyValuePair`](#aws-cdk-sdk.ecs.EcsKeyValuePair)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateClusterCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---


### ECSResponsesCreateService <a name="aws-cdk-sdk.ecs.ECSResponsesCreateService"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateService.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateService(__scope: Construct, __resources: string[], __input: EcsCreateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateServiceRequest`](#aws-cdk-sdk.ecs.EcsCreateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `service`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateService.property.service"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesCreateServiceService`](#aws-cdk-sdk.ecs.ECSResponsesCreateServiceService)

---


### ECSResponsesCreateServiceService <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateServiceService(__scope: Construct, __resources: string[], __input: EcsCreateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateServiceRequest`](#aws-cdk-sdk.ecs.EcsCreateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `capacityProviderStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.capacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.clusterArn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.createdAt"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.createdBy"></a>

- *Type:* `string`

---

##### `deploymentConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.deploymentConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfiguration)

---

##### `deploymentController`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.deploymentController"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentController`](#aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentController)

---

##### `deployments`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.deployments"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeployment`](#aws-cdk-sdk.ecs.EcsDeployment)[]

---

##### `desiredCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.desiredCount"></a>

- *Type:* `number`

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.enableEcsManagedTags"></a>

- *Type:* `boolean`

---

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.events"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsServiceEvent`](#aws-cdk-sdk.ecs.EcsServiceEvent)[]

---

##### `healthCheckGracePeriodSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.healthCheckGracePeriodSeconds"></a>

- *Type:* `number`

---

##### `launchType`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.launchType"></a>

- *Type:* `string`

---

##### `loadBalancers`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.loadBalancers"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsLoadBalancer`](#aws-cdk-sdk.ecs.EcsLoadBalancer)[]

---

##### `networkConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfiguration)

---

##### `pendingCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.pendingCount"></a>

- *Type:* `number`

---

##### `placementConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.placementConstraints"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPlacementConstraint`](#aws-cdk-sdk.ecs.EcsPlacementConstraint)[]

---

##### `placementStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.placementStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPlacementStrategy`](#aws-cdk-sdk.ecs.EcsPlacementStrategy)[]

---

##### `platformVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.platformVersion"></a>

- *Type:* `string`

---

##### `propagateTags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.propagateTags"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.roleArn"></a>

- *Type:* `string`

---

##### `runningCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.runningCount"></a>

- *Type:* `number`

---

##### `schedulingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.schedulingStrategy"></a>

- *Type:* `string`

---

##### `serviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.serviceArn"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.serviceName"></a>

- *Type:* `string`

---

##### `serviceRegistries`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.serviceRegistries"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsServiceRegistry`](#aws-cdk-sdk.ecs.EcsServiceRegistry)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `taskDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.taskDefinition"></a>

- *Type:* `string`

---

##### `taskSets`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceService.property.taskSets"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskSet`](#aws-cdk-sdk.ecs.EcsTaskSet)[]

---


### ECSResponsesCreateServiceServiceDeploymentConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateServiceServiceDeploymentConfiguration(__scope: Construct, __resources: string[], __input: EcsCreateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateServiceRequest`](#aws-cdk-sdk.ecs.EcsCreateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `deploymentCircuitBreaker`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfiguration.property.deploymentCircuitBreaker"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker`](#aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker)

---

##### `maximumPercent`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfiguration.property.maximumPercent"></a>

- *Type:* `number`

---

##### `minimumHealthyPercent`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfiguration.property.minimumHealthyPercent"></a>

- *Type:* `number`

---


### ECSResponsesCreateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker(__scope: Construct, __resources: string[], __input: EcsCreateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateServiceRequest`](#aws-cdk-sdk.ecs.EcsCreateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `enable`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.property.enable"></a>

- *Type:* `boolean`

---

##### `rollback`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.property.rollback"></a>

- *Type:* `boolean`

---


### ECSResponsesCreateServiceServiceDeploymentController <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentController"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentController.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateServiceServiceDeploymentController(__scope: Construct, __resources: string[], __input: EcsCreateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentController.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentController.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentController.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateServiceRequest`](#aws-cdk-sdk.ecs.EcsCreateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceDeploymentController.property.type"></a>

- *Type:* `string`

---


### ECSResponsesCreateServiceServiceNetworkConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateServiceServiceNetworkConfiguration(__scope: Construct, __resources: string[], __input: EcsCreateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateServiceRequest`](#aws-cdk-sdk.ecs.EcsCreateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `awsvpcConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfiguration.property.awsvpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfigurationAwsvpcConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfigurationAwsvpcConfiguration)

---


### ECSResponsesCreateServiceServiceNetworkConfigurationAwsvpcConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfigurationAwsvpcConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfigurationAwsvpcConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateServiceServiceNetworkConfigurationAwsvpcConfiguration(__scope: Construct, __resources: string[], __input: EcsCreateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfigurationAwsvpcConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfigurationAwsvpcConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfigurationAwsvpcConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateServiceRequest`](#aws-cdk-sdk.ecs.EcsCreateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `assignPublicIp`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfigurationAwsvpcConfiguration.property.assignPublicIp"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfigurationAwsvpcConfiguration.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateServiceServiceNetworkConfigurationAwsvpcConfiguration.property.subnets"></a>

- *Type:* `string`[]

---


### ECSResponsesCreateTaskSet <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSet"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSet.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateTaskSet(__scope: Construct, __resources: string[], __input: EcsCreateTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateTaskSetRequest`](#aws-cdk-sdk.ecs.EcsCreateTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `taskSet`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSet.property.taskSet"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet`](#aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet)

---


### ECSResponsesCreateTaskSetTaskSet <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateTaskSetTaskSet(__scope: Construct, __resources: string[], __input: EcsCreateTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateTaskSetRequest`](#aws-cdk-sdk.ecs.EcsCreateTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `capacityProviderStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.capacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.clusterArn"></a>

- *Type:* `string`

---

##### `computedDesiredCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.computedDesiredCount"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.createdAt"></a>

- *Type:* `string`

---

##### `externalId`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.externalId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.id"></a>

- *Type:* `string`

---

##### `launchType`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.launchType"></a>

- *Type:* `string`

---

##### `loadBalancers`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.loadBalancers"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsLoadBalancer`](#aws-cdk-sdk.ecs.EcsLoadBalancer)[]

---

##### `networkConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfiguration)

---

##### `pendingCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.pendingCount"></a>

- *Type:* `number`

---

##### `platformVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.platformVersion"></a>

- *Type:* `string`

---

##### `runningCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.runningCount"></a>

- *Type:* `number`

---

##### `scale`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.scale"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetScale`](#aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetScale)

---

##### `serviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.serviceArn"></a>

- *Type:* `string`

---

##### `serviceRegistries`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.serviceRegistries"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsServiceRegistry`](#aws-cdk-sdk.ecs.EcsServiceRegistry)[]

---

##### `stabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.stabilityStatus"></a>

- *Type:* `string`

---

##### `stabilityStatusAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.stabilityStatusAt"></a>

- *Type:* `string`

---

##### `startedBy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.startedBy"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `taskDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.taskDefinition"></a>

- *Type:* `string`

---

##### `taskSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.taskSetArn"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSet.property.updatedAt"></a>

- *Type:* `string`

---


### ECSResponsesCreateTaskSetTaskSetNetworkConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfiguration(__scope: Construct, __resources: string[], __input: EcsCreateTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateTaskSetRequest`](#aws-cdk-sdk.ecs.EcsCreateTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `awsvpcConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfiguration.property.awsvpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration)

---


### ECSResponsesCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration(__scope: Construct, __resources: string[], __input: EcsCreateTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateTaskSetRequest`](#aws-cdk-sdk.ecs.EcsCreateTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `assignPublicIp`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.property.assignPublicIp"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.property.subnets"></a>

- *Type:* `string`[]

---


### ECSResponsesCreateTaskSetTaskSetScale <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetScale"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetScale.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesCreateTaskSetTaskSetScale(__scope: Construct, __resources: string[], __input: EcsCreateTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetScale.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetScale.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetScale.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCreateTaskSetRequest`](#aws-cdk-sdk.ecs.EcsCreateTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetScale.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesCreateTaskSetTaskSetScale.property.value"></a>

- *Type:* `number`

---


### ECSResponsesDeleteAccountSetting <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAccountSetting"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAccountSetting.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteAccountSetting(__scope: Construct, __resources: string[], __input: EcsDeleteAccountSettingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAccountSetting.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAccountSetting.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAccountSetting.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteAccountSettingRequest`](#aws-cdk-sdk.ecs.EcsDeleteAccountSettingRequest)

---



#### Properties <a name="Properties"></a>

##### `setting`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAccountSetting.property.setting"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeleteAccountSettingSetting`](#aws-cdk-sdk.ecs.ECSResponsesDeleteAccountSettingSetting)

---


### ECSResponsesDeleteAccountSettingSetting <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAccountSettingSetting"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAccountSettingSetting.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteAccountSettingSetting(__scope: Construct, __resources: string[], __input: EcsDeleteAccountSettingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAccountSettingSetting.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAccountSettingSetting.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAccountSettingSetting.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteAccountSettingRequest`](#aws-cdk-sdk.ecs.EcsDeleteAccountSettingRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAccountSettingSetting.property.name"></a>

- *Type:* `string`

---

##### `principalArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAccountSettingSetting.property.principalArn"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAccountSettingSetting.property.value"></a>

- *Type:* `string`

---


### ECSResponsesDeleteAttributes <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAttributes.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteAttributes(__scope: Construct, __resources: string[], __input: EcsDeleteAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteAttributesRequest`](#aws-cdk-sdk.ecs.EcsDeleteAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteAttributes.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---


### ECSResponsesDeleteCapacityProvider <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProvider"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProvider.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteCapacityProvider(__scope: Construct, __resources: string[], __input: EcsDeleteCapacityProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteCapacityProviderRequest`](#aws-cdk-sdk.ecs.EcsDeleteCapacityProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `capacityProvider`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProvider.property.capacityProvider"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProvider`](#aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProvider)

---


### ECSResponsesDeleteCapacityProviderCapacityProvider <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProvider"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProvider.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteCapacityProviderCapacityProvider(__scope: Construct, __resources: string[], __input: EcsDeleteCapacityProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteCapacityProviderRequest`](#aws-cdk-sdk.ecs.EcsDeleteCapacityProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroupProvider`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProvider.property.autoScalingGroupProvider"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider`](#aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider)

---

##### `capacityProviderArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProvider.property.capacityProviderArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProvider.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProvider.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProvider.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `updateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProvider.property.updateStatus"></a>

- *Type:* `string`

---

##### `updateStatusReason`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProvider.property.updateStatusReason"></a>

- *Type:* `string`

---


### ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider(__scope: Construct, __resources: string[], __input: EcsDeleteCapacityProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteCapacityProviderRequest`](#aws-cdk-sdk.ecs.EcsDeleteCapacityProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider.property.autoScalingGroupArn"></a>

- *Type:* `string`

---

##### `managedScaling`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider.property.managedScaling"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling`](#aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling)

---

##### `managedTerminationProtection`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProvider.property.managedTerminationProtection"></a>

- *Type:* `string`

---


### ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling(__scope: Construct, __resources: string[], __input: EcsDeleteCapacityProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteCapacityProviderRequest`](#aws-cdk-sdk.ecs.EcsDeleteCapacityProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceWarmupPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.property.instanceWarmupPeriod"></a>

- *Type:* `number`

---

##### `maximumScalingStepSize`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.property.maximumScalingStepSize"></a>

- *Type:* `number`

---

##### `minimumScalingStepSize`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.property.minimumScalingStepSize"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.property.status"></a>

- *Type:* `string`

---

##### `targetCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.property.targetCapacity"></a>

- *Type:* `number`

---


### ECSResponsesDeleteCluster <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCluster"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCluster.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteCluster(__scope: Construct, __resources: string[], __input: EcsDeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteClusterRequest`](#aws-cdk-sdk.ecs.EcsDeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster`](#aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster)

---


### ECSResponsesDeleteClusterCluster <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteClusterCluster(__scope: Construct, __resources: string[], __input: EcsDeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteClusterRequest`](#aws-cdk-sdk.ecs.EcsDeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `activeServicesCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.property.activeServicesCount"></a>

- *Type:* `number`

---

##### `attachments`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.property.attachments"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttachment`](#aws-cdk-sdk.ecs.EcsAttachment)[]

---

##### `attachmentsStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.property.attachmentsStatus"></a>

- *Type:* `string`

---

##### `capacityProviders`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.property.capacityProviders"></a>

- *Type:* `string`[]

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.property.clusterName"></a>

- *Type:* `string`

---

##### `defaultCapacityProviderStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.property.defaultCapacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `pendingTasksCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.property.pendingTasksCount"></a>

- *Type:* `number`

---

##### `registeredContainerInstancesCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.property.registeredContainerInstancesCount"></a>

- *Type:* `number`

---

##### `runningTasksCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.property.runningTasksCount"></a>

- *Type:* `number`

---

##### `settings`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.property.settings"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsClusterSetting`](#aws-cdk-sdk.ecs.EcsClusterSetting)[]

---

##### `statistics`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsKeyValuePair`](#aws-cdk-sdk.ecs.EcsKeyValuePair)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteClusterCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---


### ECSResponsesDeleteService <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteService"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteService.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteService(__scope: Construct, __resources: string[], __input: EcsDeleteServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteServiceRequest`](#aws-cdk-sdk.ecs.EcsDeleteServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `service`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteService.property.service"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService`](#aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService)

---


### ECSResponsesDeleteServiceService <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteServiceService(__scope: Construct, __resources: string[], __input: EcsDeleteServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteServiceRequest`](#aws-cdk-sdk.ecs.EcsDeleteServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `capacityProviderStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.capacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.clusterArn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.createdAt"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.createdBy"></a>

- *Type:* `string`

---

##### `deploymentConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.deploymentConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfiguration)

---

##### `deploymentController`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.deploymentController"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentController`](#aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentController)

---

##### `deployments`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.deployments"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeployment`](#aws-cdk-sdk.ecs.EcsDeployment)[]

---

##### `desiredCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.desiredCount"></a>

- *Type:* `number`

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.enableEcsManagedTags"></a>

- *Type:* `boolean`

---

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.events"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsServiceEvent`](#aws-cdk-sdk.ecs.EcsServiceEvent)[]

---

##### `healthCheckGracePeriodSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.healthCheckGracePeriodSeconds"></a>

- *Type:* `number`

---

##### `launchType`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.launchType"></a>

- *Type:* `string`

---

##### `loadBalancers`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.loadBalancers"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsLoadBalancer`](#aws-cdk-sdk.ecs.EcsLoadBalancer)[]

---

##### `networkConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfiguration)

---

##### `pendingCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.pendingCount"></a>

- *Type:* `number`

---

##### `placementConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.placementConstraints"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPlacementConstraint`](#aws-cdk-sdk.ecs.EcsPlacementConstraint)[]

---

##### `placementStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.placementStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPlacementStrategy`](#aws-cdk-sdk.ecs.EcsPlacementStrategy)[]

---

##### `platformVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.platformVersion"></a>

- *Type:* `string`

---

##### `propagateTags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.propagateTags"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.roleArn"></a>

- *Type:* `string`

---

##### `runningCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.runningCount"></a>

- *Type:* `number`

---

##### `schedulingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.schedulingStrategy"></a>

- *Type:* `string`

---

##### `serviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.serviceArn"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.serviceName"></a>

- *Type:* `string`

---

##### `serviceRegistries`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.serviceRegistries"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsServiceRegistry`](#aws-cdk-sdk.ecs.EcsServiceRegistry)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `taskDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.taskDefinition"></a>

- *Type:* `string`

---

##### `taskSets`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceService.property.taskSets"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskSet`](#aws-cdk-sdk.ecs.EcsTaskSet)[]

---


### ECSResponsesDeleteServiceServiceDeploymentConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteServiceServiceDeploymentConfiguration(__scope: Construct, __resources: string[], __input: EcsDeleteServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteServiceRequest`](#aws-cdk-sdk.ecs.EcsDeleteServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `deploymentCircuitBreaker`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfiguration.property.deploymentCircuitBreaker"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfigurationDeploymentCircuitBreaker`](#aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfigurationDeploymentCircuitBreaker)

---

##### `maximumPercent`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfiguration.property.maximumPercent"></a>

- *Type:* `number`

---

##### `minimumHealthyPercent`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfiguration.property.minimumHealthyPercent"></a>

- *Type:* `number`

---


### ECSResponsesDeleteServiceServiceDeploymentConfigurationDeploymentCircuitBreaker <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfigurationDeploymentCircuitBreaker"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteServiceServiceDeploymentConfigurationDeploymentCircuitBreaker(__scope: Construct, __resources: string[], __input: EcsDeleteServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteServiceRequest`](#aws-cdk-sdk.ecs.EcsDeleteServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `enable`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.property.enable"></a>

- *Type:* `boolean`

---

##### `rollback`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.property.rollback"></a>

- *Type:* `boolean`

---


### ECSResponsesDeleteServiceServiceDeploymentController <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentController"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentController.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteServiceServiceDeploymentController(__scope: Construct, __resources: string[], __input: EcsDeleteServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentController.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentController.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentController.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteServiceRequest`](#aws-cdk-sdk.ecs.EcsDeleteServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceDeploymentController.property.type"></a>

- *Type:* `string`

---


### ECSResponsesDeleteServiceServiceNetworkConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteServiceServiceNetworkConfiguration(__scope: Construct, __resources: string[], __input: EcsDeleteServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteServiceRequest`](#aws-cdk-sdk.ecs.EcsDeleteServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `awsvpcConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfiguration.property.awsvpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration)

---


### ECSResponsesDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration(__scope: Construct, __resources: string[], __input: EcsDeleteServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteServiceRequest`](#aws-cdk-sdk.ecs.EcsDeleteServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `assignPublicIp`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration.property.assignPublicIp"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteServiceServiceNetworkConfigurationAwsvpcConfiguration.property.subnets"></a>

- *Type:* `string`[]

---


### ECSResponsesDeleteTaskSet <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSet"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSet.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteTaskSet(__scope: Construct, __resources: string[], __input: EcsDeleteTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteTaskSetRequest`](#aws-cdk-sdk.ecs.EcsDeleteTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `taskSet`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSet.property.taskSet"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet`](#aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet)

---


### ECSResponsesDeleteTaskSetTaskSet <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteTaskSetTaskSet(__scope: Construct, __resources: string[], __input: EcsDeleteTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteTaskSetRequest`](#aws-cdk-sdk.ecs.EcsDeleteTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `capacityProviderStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.capacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.clusterArn"></a>

- *Type:* `string`

---

##### `computedDesiredCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.computedDesiredCount"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.createdAt"></a>

- *Type:* `string`

---

##### `externalId`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.externalId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.id"></a>

- *Type:* `string`

---

##### `launchType`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.launchType"></a>

- *Type:* `string`

---

##### `loadBalancers`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.loadBalancers"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsLoadBalancer`](#aws-cdk-sdk.ecs.EcsLoadBalancer)[]

---

##### `networkConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfiguration)

---

##### `pendingCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.pendingCount"></a>

- *Type:* `number`

---

##### `platformVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.platformVersion"></a>

- *Type:* `string`

---

##### `runningCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.runningCount"></a>

- *Type:* `number`

---

##### `scale`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.scale"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetScale`](#aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetScale)

---

##### `serviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.serviceArn"></a>

- *Type:* `string`

---

##### `serviceRegistries`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.serviceRegistries"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsServiceRegistry`](#aws-cdk-sdk.ecs.EcsServiceRegistry)[]

---

##### `stabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.stabilityStatus"></a>

- *Type:* `string`

---

##### `stabilityStatusAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.stabilityStatusAt"></a>

- *Type:* `string`

---

##### `startedBy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.startedBy"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `taskDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.taskDefinition"></a>

- *Type:* `string`

---

##### `taskSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.taskSetArn"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSet.property.updatedAt"></a>

- *Type:* `string`

---


### ECSResponsesDeleteTaskSetTaskSetNetworkConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfiguration(__scope: Construct, __resources: string[], __input: EcsDeleteTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteTaskSetRequest`](#aws-cdk-sdk.ecs.EcsDeleteTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `awsvpcConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfiguration.property.awsvpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration)

---


### ECSResponsesDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration(__scope: Construct, __resources: string[], __input: EcsDeleteTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteTaskSetRequest`](#aws-cdk-sdk.ecs.EcsDeleteTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `assignPublicIp`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.property.assignPublicIp"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.property.subnets"></a>

- *Type:* `string`[]

---


### ECSResponsesDeleteTaskSetTaskSetScale <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetScale"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetScale.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeleteTaskSetTaskSetScale(__scope: Construct, __resources: string[], __input: EcsDeleteTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetScale.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetScale.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetScale.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeleteTaskSetRequest`](#aws-cdk-sdk.ecs.EcsDeleteTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetScale.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeleteTaskSetTaskSetScale.property.value"></a>

- *Type:* `number`

---


### ECSResponsesDeregisterContainerInstance <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstance"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstance.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeregisterContainerInstance(__scope: Construct, __resources: string[], __input: EcsDeregisterContainerInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeregisterContainerInstanceRequest`](#aws-cdk-sdk.ecs.EcsDeregisterContainerInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `containerInstance`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstance.property.containerInstance"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance`](#aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance)

---


### ECSResponsesDeregisterContainerInstanceContainerInstance <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeregisterContainerInstanceContainerInstance(__scope: Construct, __resources: string[], __input: EcsDeregisterContainerInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeregisterContainerInstanceRequest`](#aws-cdk-sdk.ecs.EcsDeregisterContainerInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `agentConnected`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.property.agentConnected"></a>

- *Type:* `boolean`

---

##### `agentUpdateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.property.agentUpdateStatus"></a>

- *Type:* `string`

---

##### `attachments`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.property.attachments"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttachment`](#aws-cdk-sdk.ecs.EcsAttachment)[]

---

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---

##### `capacityProviderName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.property.capacityProviderName"></a>

- *Type:* `string`

---

##### `containerInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.property.containerInstanceArn"></a>

- *Type:* `string`

---

##### `ec2InstanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.property.ec2InstanceId"></a>

- *Type:* `string`

---

##### `pendingTasksCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.property.pendingTasksCount"></a>

- *Type:* `number`

---

##### `registeredAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.property.registeredAt"></a>

- *Type:* `string`

---

##### `registeredResources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.property.registeredResources"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsResource`](#aws-cdk-sdk.ecs.EcsResource)[]

---

##### `remainingResources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.property.remainingResources"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsResource`](#aws-cdk-sdk.ecs.EcsResource)[]

---

##### `runningTasksCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.property.runningTasksCount"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.property.statusReason"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.property.version"></a>

- *Type:* `number`

---

##### `versionInfo`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstance.property.versionInfo"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstanceVersionInfo`](#aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstanceVersionInfo)

---


### ECSResponsesDeregisterContainerInstanceContainerInstanceVersionInfo <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstanceVersionInfo"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstanceVersionInfo.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeregisterContainerInstanceContainerInstanceVersionInfo(__scope: Construct, __resources: string[], __input: EcsDeregisterContainerInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstanceVersionInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstanceVersionInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstanceVersionInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeregisterContainerInstanceRequest`](#aws-cdk-sdk.ecs.EcsDeregisterContainerInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `agentHash`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstanceVersionInfo.property.agentHash"></a>

- *Type:* `string`

---

##### `agentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstanceVersionInfo.property.agentVersion"></a>

- *Type:* `string`

---

##### `dockerVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterContainerInstanceContainerInstanceVersionInfo.property.dockerVersion"></a>

- *Type:* `string`

---


### ECSResponsesDeregisterTaskDefinition <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinition.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeregisterTaskDefinition(__scope: Construct, __resources: string[], __input: EcsDeregisterTaskDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeregisterTaskDefinitionRequest`](#aws-cdk-sdk.ecs.EcsDeregisterTaskDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `taskDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinition.property.taskDefinition"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition`](#aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition)

---


### ECSResponsesDeregisterTaskDefinitionTaskDefinition <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition(__scope: Construct, __resources: string[], __input: EcsDeregisterTaskDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeregisterTaskDefinitionRequest`](#aws-cdk-sdk.ecs.EcsDeregisterTaskDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `compatibilities`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.compatibilities"></a>

- *Type:* `string`[]

---

##### `containerDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.containerDefinitions"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainerDefinition`](#aws-cdk-sdk.ecs.EcsContainerDefinition)[]

---

##### `cpu`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.cpu"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `family`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.family"></a>

- *Type:* `string`

---

##### `inferenceAccelerators`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.inferenceAccelerators"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsInferenceAccelerator`](#aws-cdk-sdk.ecs.EcsInferenceAccelerator)[]

---

##### `ipcMode`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.ipcMode"></a>

- *Type:* `string`

---

##### `memory`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.memory"></a>

- *Type:* `string`

---

##### `networkMode`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.networkMode"></a>

- *Type:* `string`

---

##### `pidMode`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.pidMode"></a>

- *Type:* `string`

---

##### `placementConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.placementConstraints"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskDefinitionPlacementConstraint`](#aws-cdk-sdk.ecs.EcsTaskDefinitionPlacementConstraint)[]

---

##### `proxyConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.proxyConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinitionProxyConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinitionProxyConfiguration)

---

##### `requiresAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.requiresAttributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---

##### `requiresCompatibilities`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.requiresCompatibilities"></a>

- *Type:* `string`[]

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.revision"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.status"></a>

- *Type:* `string`

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.taskDefinitionArn"></a>

- *Type:* `string`

---

##### `taskRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.taskRoleArn"></a>

- *Type:* `string`

---

##### `volumes`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinition.property.volumes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsVolume`](#aws-cdk-sdk.ecs.EcsVolume)[]

---


### ECSResponsesDeregisterTaskDefinitionTaskDefinitionProxyConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinitionProxyConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinitionProxyConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinitionProxyConfiguration(__scope: Construct, __resources: string[], __input: EcsDeregisterTaskDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinitionProxyConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinitionProxyConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinitionProxyConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeregisterTaskDefinitionRequest`](#aws-cdk-sdk.ecs.EcsDeregisterTaskDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinitionProxyConfiguration.property.containerName"></a>

- *Type:* `string`

---

##### `properties`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinitionProxyConfiguration.property.properties"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsKeyValuePair`](#aws-cdk-sdk.ecs.EcsKeyValuePair)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDeregisterTaskDefinitionTaskDefinitionProxyConfiguration.property.type"></a>

- *Type:* `string`

---


### ECSResponsesDescribeCapacityProviders <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeCapacityProviders"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeCapacityProviders.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDescribeCapacityProviders(__scope: Construct, __resources: string[], __input: EcsDescribeCapacityProvidersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeCapacityProviders.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeCapacityProviders.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeCapacityProviders.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDescribeCapacityProvidersRequest`](#aws-cdk-sdk.ecs.EcsDescribeCapacityProvidersRequest)

---



#### Properties <a name="Properties"></a>

##### `capacityProviders`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeCapacityProviders.property.capacityProviders"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProvider`](#aws-cdk-sdk.ecs.EcsCapacityProvider)[]

---

##### `failures`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeCapacityProviders.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeCapacityProviders.property.nextToken"></a>

- *Type:* `string`

---


### ECSResponsesDescribeClusters <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeClusters"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeClusters.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDescribeClusters(__scope: Construct, __resources: string[], __input: EcsDescribeClustersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeClusters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeClusters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeClusters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDescribeClustersRequest`](#aws-cdk-sdk.ecs.EcsDescribeClustersRequest)

---



#### Properties <a name="Properties"></a>

##### `clusters`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeClusters.property.clusters"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCluster`](#aws-cdk-sdk.ecs.EcsCluster)[]

---

##### `failures`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeClusters.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---


### ECSResponsesDescribeContainerInstances <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeContainerInstances"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeContainerInstances.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDescribeContainerInstances(__scope: Construct, __resources: string[], __input: EcsDescribeContainerInstancesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeContainerInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeContainerInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeContainerInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDescribeContainerInstancesRequest`](#aws-cdk-sdk.ecs.EcsDescribeContainerInstancesRequest)

---



#### Properties <a name="Properties"></a>

##### `containerInstances`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeContainerInstances.property.containerInstances"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainerInstance`](#aws-cdk-sdk.ecs.EcsContainerInstance)[]

---

##### `failures`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeContainerInstances.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---


### ECSResponsesDescribeServices <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeServices"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeServices.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDescribeServices(__scope: Construct, __resources: string[], __input: EcsDescribeServicesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeServices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeServices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeServices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDescribeServicesRequest`](#aws-cdk-sdk.ecs.EcsDescribeServicesRequest)

---



#### Properties <a name="Properties"></a>

##### `failures`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeServices.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---

##### `services`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeServices.property.services"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsService`](#aws-cdk-sdk.ecs.EcsService)[]

---


### ECSResponsesDescribeTaskDefinition <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinition.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDescribeTaskDefinition(__scope: Construct, __resources: string[], __input: EcsDescribeTaskDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDescribeTaskDefinitionRequest`](#aws-cdk-sdk.ecs.EcsDescribeTaskDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinition.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `taskDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinition.property.taskDefinition"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition`](#aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition)

---


### ECSResponsesDescribeTaskDefinitionTaskDefinition <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition(__scope: Construct, __resources: string[], __input: EcsDescribeTaskDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDescribeTaskDefinitionRequest`](#aws-cdk-sdk.ecs.EcsDescribeTaskDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `compatibilities`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.compatibilities"></a>

- *Type:* `string`[]

---

##### `containerDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.containerDefinitions"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainerDefinition`](#aws-cdk-sdk.ecs.EcsContainerDefinition)[]

---

##### `cpu`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.cpu"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `family`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.family"></a>

- *Type:* `string`

---

##### `inferenceAccelerators`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.inferenceAccelerators"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsInferenceAccelerator`](#aws-cdk-sdk.ecs.EcsInferenceAccelerator)[]

---

##### `ipcMode`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.ipcMode"></a>

- *Type:* `string`

---

##### `memory`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.memory"></a>

- *Type:* `string`

---

##### `networkMode`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.networkMode"></a>

- *Type:* `string`

---

##### `pidMode`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.pidMode"></a>

- *Type:* `string`

---

##### `placementConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.placementConstraints"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskDefinitionPlacementConstraint`](#aws-cdk-sdk.ecs.EcsTaskDefinitionPlacementConstraint)[]

---

##### `proxyConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.proxyConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinitionProxyConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinitionProxyConfiguration)

---

##### `requiresAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.requiresAttributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---

##### `requiresCompatibilities`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.requiresCompatibilities"></a>

- *Type:* `string`[]

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.revision"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.status"></a>

- *Type:* `string`

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.taskDefinitionArn"></a>

- *Type:* `string`

---

##### `taskRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.taskRoleArn"></a>

- *Type:* `string`

---

##### `volumes`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinition.property.volumes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsVolume`](#aws-cdk-sdk.ecs.EcsVolume)[]

---


### ECSResponsesDescribeTaskDefinitionTaskDefinitionProxyConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinitionProxyConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinitionProxyConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDescribeTaskDefinitionTaskDefinitionProxyConfiguration(__scope: Construct, __resources: string[], __input: EcsDescribeTaskDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinitionProxyConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinitionProxyConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinitionProxyConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDescribeTaskDefinitionRequest`](#aws-cdk-sdk.ecs.EcsDescribeTaskDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinitionProxyConfiguration.property.containerName"></a>

- *Type:* `string`

---

##### `properties`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinitionProxyConfiguration.property.properties"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsKeyValuePair`](#aws-cdk-sdk.ecs.EcsKeyValuePair)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskDefinitionTaskDefinitionProxyConfiguration.property.type"></a>

- *Type:* `string`

---


### ECSResponsesDescribeTasks <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTasks"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTasks.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDescribeTasks(__scope: Construct, __resources: string[], __input: EcsDescribeTasksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTasks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTasks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTasks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDescribeTasksRequest`](#aws-cdk-sdk.ecs.EcsDescribeTasksRequest)

---



#### Properties <a name="Properties"></a>

##### `failures`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTasks.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---

##### `tasks`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTasks.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTask`](#aws-cdk-sdk.ecs.EcsTask)[]

---


### ECSResponsesDescribeTaskSets <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskSets"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskSets.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDescribeTaskSets(__scope: Construct, __resources: string[], __input: EcsDescribeTaskSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDescribeTaskSetsRequest`](#aws-cdk-sdk.ecs.EcsDescribeTaskSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `failures`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskSets.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---

##### `taskSets`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDescribeTaskSets.property.taskSets"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskSet`](#aws-cdk-sdk.ecs.EcsTaskSet)[]

---


### ECSResponsesDiscoverPollEndpoint <a name="aws-cdk-sdk.ecs.ECSResponsesDiscoverPollEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesDiscoverPollEndpoint.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesDiscoverPollEndpoint(__scope: Construct, __resources: string[], __input: EcsDiscoverPollEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDiscoverPollEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDiscoverPollEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDiscoverPollEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDiscoverPollEndpointRequest`](#aws-cdk-sdk.ecs.EcsDiscoverPollEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDiscoverPollEndpoint.property.endpoint"></a>

- *Type:* `string`

---

##### `telemetryEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesDiscoverPollEndpoint.property.telemetryEndpoint"></a>

- *Type:* `string`

---


### ECSResponsesListAccountSettings <a name="aws-cdk-sdk.ecs.ECSResponsesListAccountSettings"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesListAccountSettings.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesListAccountSettings(__scope: Construct, __resources: string[], __input: EcsListAccountSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListAccountSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListAccountSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListAccountSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListAccountSettingsRequest`](#aws-cdk-sdk.ecs.EcsListAccountSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListAccountSettings.property.nextToken"></a>

- *Type:* `string`

---

##### `settings`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListAccountSettings.property.settings"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsSetting`](#aws-cdk-sdk.ecs.EcsSetting)[]

---


### ECSResponsesListAttributes <a name="aws-cdk-sdk.ecs.ECSResponsesListAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesListAttributes.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesListAttributes(__scope: Construct, __resources: string[], __input: EcsListAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListAttributesRequest`](#aws-cdk-sdk.ecs.EcsListAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListAttributes.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListAttributes.property.nextToken"></a>

- *Type:* `string`

---


### ECSResponsesListClusters <a name="aws-cdk-sdk.ecs.ECSResponsesListClusters"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesListClusters.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesListClusters(__scope: Construct, __resources: string[], __input: EcsListClustersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListClusters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListClusters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListClusters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListClustersRequest`](#aws-cdk-sdk.ecs.EcsListClustersRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterArns`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListClusters.property.clusterArns"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListClusters.property.nextToken"></a>

- *Type:* `string`

---


### ECSResponsesListContainerInstances <a name="aws-cdk-sdk.ecs.ECSResponsesListContainerInstances"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesListContainerInstances.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesListContainerInstances(__scope: Construct, __resources: string[], __input: EcsListContainerInstancesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListContainerInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListContainerInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListContainerInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListContainerInstancesRequest`](#aws-cdk-sdk.ecs.EcsListContainerInstancesRequest)

---



#### Properties <a name="Properties"></a>

##### `containerInstanceArns`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListContainerInstances.property.containerInstanceArns"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListContainerInstances.property.nextToken"></a>

- *Type:* `string`

---


### ECSResponsesListServices <a name="aws-cdk-sdk.ecs.ECSResponsesListServices"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesListServices.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesListServices(__scope: Construct, __resources: string[], __input: EcsListServicesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListServices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListServices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListServices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListServicesRequest`](#aws-cdk-sdk.ecs.EcsListServicesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListServices.property.nextToken"></a>

- *Type:* `string`

---

##### `serviceArns`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListServices.property.serviceArns"></a>

- *Type:* `string`[]

---


### ECSResponsesListTagsForResource <a name="aws-cdk-sdk.ecs.ECSResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesListTagsForResource.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: EcsListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListTagsForResourceRequest`](#aws-cdk-sdk.ecs.EcsListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---


### ECSResponsesListTaskDefinitionFamilies <a name="aws-cdk-sdk.ecs.ECSResponsesListTaskDefinitionFamilies"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesListTaskDefinitionFamilies.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesListTaskDefinitionFamilies(__scope: Construct, __resources: string[], __input: EcsListTaskDefinitionFamiliesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTaskDefinitionFamilies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTaskDefinitionFamilies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTaskDefinitionFamilies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListTaskDefinitionFamiliesRequest`](#aws-cdk-sdk.ecs.EcsListTaskDefinitionFamiliesRequest)

---



#### Properties <a name="Properties"></a>

##### `families`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTaskDefinitionFamilies.property.families"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTaskDefinitionFamilies.property.nextToken"></a>

- *Type:* `string`

---


### ECSResponsesListTaskDefinitions <a name="aws-cdk-sdk.ecs.ECSResponsesListTaskDefinitions"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesListTaskDefinitions.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesListTaskDefinitions(__scope: Construct, __resources: string[], __input: EcsListTaskDefinitionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTaskDefinitions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTaskDefinitions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTaskDefinitions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListTaskDefinitionsRequest`](#aws-cdk-sdk.ecs.EcsListTaskDefinitionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTaskDefinitions.property.nextToken"></a>

- *Type:* `string`

---

##### `taskDefinitionArns`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTaskDefinitions.property.taskDefinitionArns"></a>

- *Type:* `string`[]

---


### ECSResponsesListTasks <a name="aws-cdk-sdk.ecs.ECSResponsesListTasks"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesListTasks.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesListTasks(__scope: Construct, __resources: string[], __input: EcsListTasksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTasks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTasks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTasks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsListTasksRequest`](#aws-cdk-sdk.ecs.EcsListTasksRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTasks.property.nextToken"></a>

- *Type:* `string`

---

##### `taskArns`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesListTasks.property.taskArns"></a>

- *Type:* `string`[]

---


### ECSResponsesPutAccountSetting <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSetting"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSetting.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesPutAccountSetting(__scope: Construct, __resources: string[], __input: EcsPutAccountSettingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSetting.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSetting.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSetting.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPutAccountSettingRequest`](#aws-cdk-sdk.ecs.EcsPutAccountSettingRequest)

---



#### Properties <a name="Properties"></a>

##### `setting`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSetting.property.setting"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingSetting`](#aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingSetting)

---


### ECSResponsesPutAccountSettingDefault <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingDefault"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingDefault.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesPutAccountSettingDefault(__scope: Construct, __resources: string[], __input: EcsPutAccountSettingDefaultRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingDefault.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingDefault.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingDefault.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPutAccountSettingDefaultRequest`](#aws-cdk-sdk.ecs.EcsPutAccountSettingDefaultRequest)

---



#### Properties <a name="Properties"></a>

##### `setting`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingDefault.property.setting"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingDefaultSetting`](#aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingDefaultSetting)

---


### ECSResponsesPutAccountSettingDefaultSetting <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingDefaultSetting"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingDefaultSetting.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesPutAccountSettingDefaultSetting(__scope: Construct, __resources: string[], __input: EcsPutAccountSettingDefaultRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingDefaultSetting.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingDefaultSetting.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingDefaultSetting.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPutAccountSettingDefaultRequest`](#aws-cdk-sdk.ecs.EcsPutAccountSettingDefaultRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingDefaultSetting.property.name"></a>

- *Type:* `string`

---

##### `principalArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingDefaultSetting.property.principalArn"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingDefaultSetting.property.value"></a>

- *Type:* `string`

---


### ECSResponsesPutAccountSettingSetting <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingSetting"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingSetting.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesPutAccountSettingSetting(__scope: Construct, __resources: string[], __input: EcsPutAccountSettingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingSetting.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingSetting.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingSetting.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPutAccountSettingRequest`](#aws-cdk-sdk.ecs.EcsPutAccountSettingRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingSetting.property.name"></a>

- *Type:* `string`

---

##### `principalArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingSetting.property.principalArn"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAccountSettingSetting.property.value"></a>

- *Type:* `string`

---


### ECSResponsesPutAttributes <a name="aws-cdk-sdk.ecs.ECSResponsesPutAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesPutAttributes.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesPutAttributes(__scope: Construct, __resources: string[], __input: EcsPutAttributesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPutAttributesRequest`](#aws-cdk-sdk.ecs.EcsPutAttributesRequest)

---



#### Properties <a name="Properties"></a>

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutAttributes.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---


### ECSResponsesPutClusterCapacityProviders <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProviders"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProviders.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesPutClusterCapacityProviders(__scope: Construct, __resources: string[], __input: EcsPutClusterCapacityProvidersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProviders.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProviders.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProviders.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPutClusterCapacityProvidersRequest`](#aws-cdk-sdk.ecs.EcsPutClusterCapacityProvidersRequest)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProviders.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster`](#aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster)

---


### ECSResponsesPutClusterCapacityProvidersCluster <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesPutClusterCapacityProvidersCluster(__scope: Construct, __resources: string[], __input: EcsPutClusterCapacityProvidersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPutClusterCapacityProvidersRequest`](#aws-cdk-sdk.ecs.EcsPutClusterCapacityProvidersRequest)

---



#### Properties <a name="Properties"></a>

##### `activeServicesCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.property.activeServicesCount"></a>

- *Type:* `number`

---

##### `attachments`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.property.attachments"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttachment`](#aws-cdk-sdk.ecs.EcsAttachment)[]

---

##### `attachmentsStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.property.attachmentsStatus"></a>

- *Type:* `string`

---

##### `capacityProviders`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.property.capacityProviders"></a>

- *Type:* `string`[]

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.property.clusterName"></a>

- *Type:* `string`

---

##### `defaultCapacityProviderStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.property.defaultCapacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `pendingTasksCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.property.pendingTasksCount"></a>

- *Type:* `number`

---

##### `registeredContainerInstancesCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.property.registeredContainerInstancesCount"></a>

- *Type:* `number`

---

##### `runningTasksCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.property.runningTasksCount"></a>

- *Type:* `number`

---

##### `settings`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.property.settings"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsClusterSetting`](#aws-cdk-sdk.ecs.EcsClusterSetting)[]

---

##### `statistics`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsKeyValuePair`](#aws-cdk-sdk.ecs.EcsKeyValuePair)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesPutClusterCapacityProvidersCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---


### ECSResponsesRegisterContainerInstance <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstance"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstance.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesRegisterContainerInstance(__scope: Construct, __resources: string[], __input: EcsRegisterContainerInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest`](#aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `containerInstance`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstance.property.containerInstance"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance`](#aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance)

---


### ECSResponsesRegisterContainerInstanceContainerInstance <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesRegisterContainerInstanceContainerInstance(__scope: Construct, __resources: string[], __input: EcsRegisterContainerInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest`](#aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `agentConnected`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.property.agentConnected"></a>

- *Type:* `boolean`

---

##### `agentUpdateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.property.agentUpdateStatus"></a>

- *Type:* `string`

---

##### `attachments`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.property.attachments"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttachment`](#aws-cdk-sdk.ecs.EcsAttachment)[]

---

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---

##### `capacityProviderName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.property.capacityProviderName"></a>

- *Type:* `string`

---

##### `containerInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.property.containerInstanceArn"></a>

- *Type:* `string`

---

##### `ec2InstanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.property.ec2InstanceId"></a>

- *Type:* `string`

---

##### `pendingTasksCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.property.pendingTasksCount"></a>

- *Type:* `number`

---

##### `registeredAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.property.registeredAt"></a>

- *Type:* `string`

---

##### `registeredResources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.property.registeredResources"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsResource`](#aws-cdk-sdk.ecs.EcsResource)[]

---

##### `remainingResources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.property.remainingResources"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsResource`](#aws-cdk-sdk.ecs.EcsResource)[]

---

##### `runningTasksCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.property.runningTasksCount"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.property.statusReason"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.property.version"></a>

- *Type:* `number`

---

##### `versionInfo`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstance.property.versionInfo"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstanceVersionInfo`](#aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstanceVersionInfo)

---


### ECSResponsesRegisterContainerInstanceContainerInstanceVersionInfo <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstanceVersionInfo"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstanceVersionInfo.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesRegisterContainerInstanceContainerInstanceVersionInfo(__scope: Construct, __resources: string[], __input: EcsRegisterContainerInstanceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstanceVersionInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstanceVersionInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstanceVersionInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest`](#aws-cdk-sdk.ecs.EcsRegisterContainerInstanceRequest)

---



#### Properties <a name="Properties"></a>

##### `agentHash`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstanceVersionInfo.property.agentHash"></a>

- *Type:* `string`

---

##### `agentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstanceVersionInfo.property.agentVersion"></a>

- *Type:* `string`

---

##### `dockerVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterContainerInstanceContainerInstanceVersionInfo.property.dockerVersion"></a>

- *Type:* `string`

---


### ECSResponsesRegisterTaskDefinition <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinition.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesRegisterTaskDefinition(__scope: Construct, __resources: string[], __input: EcsRegisterTaskDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest`](#aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinition.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `taskDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinition.property.taskDefinition"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition`](#aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition)

---


### ECSResponsesRegisterTaskDefinitionTaskDefinition <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition(__scope: Construct, __resources: string[], __input: EcsRegisterTaskDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest`](#aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `compatibilities`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.compatibilities"></a>

- *Type:* `string`[]

---

##### `containerDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.containerDefinitions"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainerDefinition`](#aws-cdk-sdk.ecs.EcsContainerDefinition)[]

---

##### `cpu`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.cpu"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `family`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.family"></a>

- *Type:* `string`

---

##### `inferenceAccelerators`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.inferenceAccelerators"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsInferenceAccelerator`](#aws-cdk-sdk.ecs.EcsInferenceAccelerator)[]

---

##### `ipcMode`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.ipcMode"></a>

- *Type:* `string`

---

##### `memory`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.memory"></a>

- *Type:* `string`

---

##### `networkMode`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.networkMode"></a>

- *Type:* `string`

---

##### `pidMode`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.pidMode"></a>

- *Type:* `string`

---

##### `placementConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.placementConstraints"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskDefinitionPlacementConstraint`](#aws-cdk-sdk.ecs.EcsTaskDefinitionPlacementConstraint)[]

---

##### `proxyConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.proxyConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinitionProxyConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinitionProxyConfiguration)

---

##### `requiresAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.requiresAttributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---

##### `requiresCompatibilities`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.requiresCompatibilities"></a>

- *Type:* `string`[]

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.revision"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.status"></a>

- *Type:* `string`

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.taskDefinitionArn"></a>

- *Type:* `string`

---

##### `taskRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.taskRoleArn"></a>

- *Type:* `string`

---

##### `volumes`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinition.property.volumes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsVolume`](#aws-cdk-sdk.ecs.EcsVolume)[]

---


### ECSResponsesRegisterTaskDefinitionTaskDefinitionProxyConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinitionProxyConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinitionProxyConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesRegisterTaskDefinitionTaskDefinitionProxyConfiguration(__scope: Construct, __resources: string[], __input: EcsRegisterTaskDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinitionProxyConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinitionProxyConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinitionProxyConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest`](#aws-cdk-sdk.ecs.EcsRegisterTaskDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `containerName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinitionProxyConfiguration.property.containerName"></a>

- *Type:* `string`

---

##### `properties`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinitionProxyConfiguration.property.properties"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsKeyValuePair`](#aws-cdk-sdk.ecs.EcsKeyValuePair)[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRegisterTaskDefinitionTaskDefinitionProxyConfiguration.property.type"></a>

- *Type:* `string`

---


### ECSResponsesRunTask <a name="aws-cdk-sdk.ecs.ECSResponsesRunTask"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesRunTask.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesRunTask(__scope: Construct, __resources: string[], __input: EcsRunTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRunTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRunTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRunTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsRunTaskRequest`](#aws-cdk-sdk.ecs.EcsRunTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `failures`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRunTask.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---

##### `tasks`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesRunTask.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTask`](#aws-cdk-sdk.ecs.EcsTask)[]

---


### ECSResponsesStartTask <a name="aws-cdk-sdk.ecs.ECSResponsesStartTask"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesStartTask.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesStartTask(__scope: Construct, __resources: string[], __input: EcsStartTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStartTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStartTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStartTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsStartTaskRequest`](#aws-cdk-sdk.ecs.EcsStartTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `failures`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStartTask.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---

##### `tasks`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStartTask.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTask`](#aws-cdk-sdk.ecs.EcsTask)[]

---


### ECSResponsesStopTask <a name="aws-cdk-sdk.ecs.ECSResponsesStopTask"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesStopTask.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesStopTask(__scope: Construct, __resources: string[], __input: EcsStopTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsStopTaskRequest`](#aws-cdk-sdk.ecs.EcsStopTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `task`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTask.property.task"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesStopTaskTask`](#aws-cdk-sdk.ecs.ECSResponsesStopTaskTask)

---


### ECSResponsesStopTaskTask <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesStopTaskTask(__scope: Construct, __resources: string[], __input: EcsStopTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsStopTaskRequest`](#aws-cdk-sdk.ecs.EcsStopTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `attachments`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.attachments"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttachment`](#aws-cdk-sdk.ecs.EcsAttachment)[]

---

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.availabilityZone"></a>

- *Type:* `string`

---

##### `capacityProviderName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.capacityProviderName"></a>

- *Type:* `string`

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.clusterArn"></a>

- *Type:* `string`

---

##### `connectivity`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.connectivity"></a>

- *Type:* `string`

---

##### `connectivityAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.connectivityAt"></a>

- *Type:* `string`

---

##### `containerInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.containerInstanceArn"></a>

- *Type:* `string`

---

##### `containers`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.containers"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainer`](#aws-cdk-sdk.ecs.EcsContainer)[]

---

##### `cpu`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.cpu"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.createdAt"></a>

- *Type:* `string`

---

##### `desiredStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.desiredStatus"></a>

- *Type:* `string`

---

##### `executionStoppedAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.executionStoppedAt"></a>

- *Type:* `string`

---

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.group"></a>

- *Type:* `string`

---

##### `healthStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.healthStatus"></a>

- *Type:* `string`

---

##### `inferenceAccelerators`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.inferenceAccelerators"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsInferenceAccelerator`](#aws-cdk-sdk.ecs.EcsInferenceAccelerator)[]

---

##### `lastStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.lastStatus"></a>

- *Type:* `string`

---

##### `launchType`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.launchType"></a>

- *Type:* `string`

---

##### `memory`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.memory"></a>

- *Type:* `string`

---

##### `overrides`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.overrides"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesStopTaskTaskOverrides`](#aws-cdk-sdk.ecs.ECSResponsesStopTaskTaskOverrides)

---

##### `platformVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.platformVersion"></a>

- *Type:* `string`

---

##### `pullStartedAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.pullStartedAt"></a>

- *Type:* `string`

---

##### `pullStoppedAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.pullStoppedAt"></a>

- *Type:* `string`

---

##### `startedAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.startedAt"></a>

- *Type:* `string`

---

##### `startedBy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.startedBy"></a>

- *Type:* `string`

---

##### `stopCode`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.stopCode"></a>

- *Type:* `string`

---

##### `stoppedAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.stoppedAt"></a>

- *Type:* `string`

---

##### `stoppedReason`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.stoppedReason"></a>

- *Type:* `string`

---

##### `stoppingAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.stoppingAt"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `taskArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.taskArn"></a>

- *Type:* `string`

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.taskDefinitionArn"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTask.property.version"></a>

- *Type:* `number`

---


### ECSResponsesStopTaskTaskOverrides <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTaskOverrides"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTaskOverrides.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesStopTaskTaskOverrides(__scope: Construct, __resources: string[], __input: EcsStopTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTaskOverrides.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTaskOverrides.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTaskOverrides.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsStopTaskRequest`](#aws-cdk-sdk.ecs.EcsStopTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `containerOverrides`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTaskOverrides.property.containerOverrides"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainerOverride`](#aws-cdk-sdk.ecs.EcsContainerOverride)[]

---

##### `cpu`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTaskOverrides.property.cpu"></a>

- *Type:* `string`

---

##### `executionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTaskOverrides.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `inferenceAcceleratorOverrides`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTaskOverrides.property.inferenceAcceleratorOverrides"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsInferenceAcceleratorOverride`](#aws-cdk-sdk.ecs.EcsInferenceAcceleratorOverride)[]

---

##### `memory`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTaskOverrides.property.memory"></a>

- *Type:* `string`

---

##### `taskRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesStopTaskTaskOverrides.property.taskRoleArn"></a>

- *Type:* `string`

---


### ECSResponsesSubmitAttachmentStateChanges <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitAttachmentStateChanges"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitAttachmentStateChanges.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesSubmitAttachmentStateChanges(__scope: Construct, __resources: string[], __input: EcsSubmitAttachmentStateChangesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitAttachmentStateChanges.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitAttachmentStateChanges.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitAttachmentStateChanges.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsSubmitAttachmentStateChangesRequest`](#aws-cdk-sdk.ecs.EcsSubmitAttachmentStateChangesRequest)

---



#### Properties <a name="Properties"></a>

##### `acknowledgment`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitAttachmentStateChanges.property.acknowledgment"></a>

- *Type:* `string`

---


### ECSResponsesSubmitContainerStateChange <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitContainerStateChange"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitContainerStateChange.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesSubmitContainerStateChange(__scope: Construct, __resources: string[], __input: EcsSubmitContainerStateChangeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitContainerStateChange.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitContainerStateChange.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitContainerStateChange.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsSubmitContainerStateChangeRequest`](#aws-cdk-sdk.ecs.EcsSubmitContainerStateChangeRequest)

---



#### Properties <a name="Properties"></a>

##### `acknowledgment`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitContainerStateChange.property.acknowledgment"></a>

- *Type:* `string`

---


### ECSResponsesSubmitTaskStateChange <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitTaskStateChange"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitTaskStateChange.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesSubmitTaskStateChange(__scope: Construct, __resources: string[], __input: EcsSubmitTaskStateChangeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitTaskStateChange.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitTaskStateChange.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitTaskStateChange.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsSubmitTaskStateChangeRequest`](#aws-cdk-sdk.ecs.EcsSubmitTaskStateChangeRequest)

---



#### Properties <a name="Properties"></a>

##### `acknowledgment`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesSubmitTaskStateChange.property.acknowledgment"></a>

- *Type:* `string`

---


### ECSResponsesUpdateCapacityProvider <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProvider"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProvider.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateCapacityProvider(__scope: Construct, __resources: string[], __input: EcsUpdateCapacityProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateCapacityProviderRequest`](#aws-cdk-sdk.ecs.EcsUpdateCapacityProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `capacityProvider`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProvider.property.capacityProvider"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProvider`](#aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProvider)

---


### ECSResponsesUpdateCapacityProviderCapacityProvider <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProvider"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProvider.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateCapacityProviderCapacityProvider(__scope: Construct, __resources: string[], __input: EcsUpdateCapacityProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateCapacityProviderRequest`](#aws-cdk-sdk.ecs.EcsUpdateCapacityProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroupProvider`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProvider.property.autoScalingGroupProvider"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider`](#aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider)

---

##### `capacityProviderArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProvider.property.capacityProviderArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProvider.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProvider.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProvider.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `updateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProvider.property.updateStatus"></a>

- *Type:* `string`

---

##### `updateStatusReason`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProvider.property.updateStatusReason"></a>

- *Type:* `string`

---


### ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider(__scope: Construct, __resources: string[], __input: EcsUpdateCapacityProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateCapacityProviderRequest`](#aws-cdk-sdk.ecs.EcsUpdateCapacityProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider.property.autoScalingGroupArn"></a>

- *Type:* `string`

---

##### `managedScaling`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider.property.managedScaling"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling`](#aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling)

---

##### `managedTerminationProtection`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProvider.property.managedTerminationProtection"></a>

- *Type:* `string`

---


### ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling(__scope: Construct, __resources: string[], __input: EcsUpdateCapacityProviderRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateCapacityProviderRequest`](#aws-cdk-sdk.ecs.EcsUpdateCapacityProviderRequest)

---



#### Properties <a name="Properties"></a>

##### `instanceWarmupPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.property.instanceWarmupPeriod"></a>

- *Type:* `number`

---

##### `maximumScalingStepSize`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.property.maximumScalingStepSize"></a>

- *Type:* `number`

---

##### `minimumScalingStepSize`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.property.minimumScalingStepSize"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.property.status"></a>

- *Type:* `string`

---

##### `targetCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateCapacityProviderCapacityProviderAutoScalingGroupProviderManagedScaling.property.targetCapacity"></a>

- *Type:* `number`

---


### ECSResponsesUpdateClusterSettings <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettings"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettings.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateClusterSettings(__scope: Construct, __resources: string[], __input: EcsUpdateClusterSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateClusterSettingsRequest`](#aws-cdk-sdk.ecs.EcsUpdateClusterSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettings.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster`](#aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster)

---


### ECSResponsesUpdateClusterSettingsCluster <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateClusterSettingsCluster(__scope: Construct, __resources: string[], __input: EcsUpdateClusterSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateClusterSettingsRequest`](#aws-cdk-sdk.ecs.EcsUpdateClusterSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `activeServicesCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.property.activeServicesCount"></a>

- *Type:* `number`

---

##### `attachments`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.property.attachments"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttachment`](#aws-cdk-sdk.ecs.EcsAttachment)[]

---

##### `attachmentsStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.property.attachmentsStatus"></a>

- *Type:* `string`

---

##### `capacityProviders`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.property.capacityProviders"></a>

- *Type:* `string`[]

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.property.clusterName"></a>

- *Type:* `string`

---

##### `defaultCapacityProviderStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.property.defaultCapacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `pendingTasksCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.property.pendingTasksCount"></a>

- *Type:* `number`

---

##### `registeredContainerInstancesCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.property.registeredContainerInstancesCount"></a>

- *Type:* `number`

---

##### `runningTasksCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.property.runningTasksCount"></a>

- *Type:* `number`

---

##### `settings`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.property.settings"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsClusterSetting`](#aws-cdk-sdk.ecs.EcsClusterSetting)[]

---

##### `statistics`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsKeyValuePair`](#aws-cdk-sdk.ecs.EcsKeyValuePair)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateClusterSettingsCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---


### ECSResponsesUpdateContainerAgent <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgent"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgent.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateContainerAgent(__scope: Construct, __resources: string[], __input: EcsUpdateContainerAgentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateContainerAgentRequest`](#aws-cdk-sdk.ecs.EcsUpdateContainerAgentRequest)

---



#### Properties <a name="Properties"></a>

##### `containerInstance`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgent.property.containerInstance"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance`](#aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance)

---


### ECSResponsesUpdateContainerAgentContainerInstance <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateContainerAgentContainerInstance(__scope: Construct, __resources: string[], __input: EcsUpdateContainerAgentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateContainerAgentRequest`](#aws-cdk-sdk.ecs.EcsUpdateContainerAgentRequest)

---



#### Properties <a name="Properties"></a>

##### `agentConnected`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.property.agentConnected"></a>

- *Type:* `boolean`

---

##### `agentUpdateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.property.agentUpdateStatus"></a>

- *Type:* `string`

---

##### `attachments`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.property.attachments"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttachment`](#aws-cdk-sdk.ecs.EcsAttachment)[]

---

##### `attributes`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.property.attributes"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsAttribute`](#aws-cdk-sdk.ecs.EcsAttribute)[]

---

##### `capacityProviderName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.property.capacityProviderName"></a>

- *Type:* `string`

---

##### `containerInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.property.containerInstanceArn"></a>

- *Type:* `string`

---

##### `ec2InstanceId`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.property.ec2InstanceId"></a>

- *Type:* `string`

---

##### `pendingTasksCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.property.pendingTasksCount"></a>

- *Type:* `number`

---

##### `registeredAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.property.registeredAt"></a>

- *Type:* `string`

---

##### `registeredResources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.property.registeredResources"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsResource`](#aws-cdk-sdk.ecs.EcsResource)[]

---

##### `remainingResources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.property.remainingResources"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsResource`](#aws-cdk-sdk.ecs.EcsResource)[]

---

##### `runningTasksCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.property.runningTasksCount"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.property.statusReason"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.property.version"></a>

- *Type:* `number`

---

##### `versionInfo`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstance.property.versionInfo"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstanceVersionInfo`](#aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstanceVersionInfo)

---


### ECSResponsesUpdateContainerAgentContainerInstanceVersionInfo <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstanceVersionInfo"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstanceVersionInfo.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateContainerAgentContainerInstanceVersionInfo(__scope: Construct, __resources: string[], __input: EcsUpdateContainerAgentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstanceVersionInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstanceVersionInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstanceVersionInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateContainerAgentRequest`](#aws-cdk-sdk.ecs.EcsUpdateContainerAgentRequest)

---



#### Properties <a name="Properties"></a>

##### `agentHash`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstanceVersionInfo.property.agentHash"></a>

- *Type:* `string`

---

##### `agentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstanceVersionInfo.property.agentVersion"></a>

- *Type:* `string`

---

##### `dockerVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerAgentContainerInstanceVersionInfo.property.dockerVersion"></a>

- *Type:* `string`

---


### ECSResponsesUpdateContainerInstancesState <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerInstancesState"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerInstancesState.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateContainerInstancesState(__scope: Construct, __resources: string[], __input: EcsUpdateContainerInstancesStateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerInstancesState.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerInstancesState.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerInstancesState.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateContainerInstancesStateRequest`](#aws-cdk-sdk.ecs.EcsUpdateContainerInstancesStateRequest)

---



#### Properties <a name="Properties"></a>

##### `containerInstances`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerInstancesState.property.containerInstances"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsContainerInstance`](#aws-cdk-sdk.ecs.EcsContainerInstance)[]

---

##### `failures`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateContainerInstancesState.property.failures"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsFailure`](#aws-cdk-sdk.ecs.EcsFailure)[]

---


### ECSResponsesUpdateService <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateService"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateService.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateService(__scope: Construct, __resources: string[], __input: EcsUpdateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateServiceRequest`](#aws-cdk-sdk.ecs.EcsUpdateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `service`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateService.property.service"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService`](#aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService)

---


### ECSResponsesUpdateServicePrimaryTaskSet <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSet"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSet.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateServicePrimaryTaskSet(__scope: Construct, __resources: string[], __input: EcsUpdateServicePrimaryTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetRequest`](#aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `taskSet`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSet.property.taskSet"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet`](#aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet)

---


### ECSResponsesUpdateServicePrimaryTaskSetTaskSet <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet(__scope: Construct, __resources: string[], __input: EcsUpdateServicePrimaryTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetRequest`](#aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `capacityProviderStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.capacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.clusterArn"></a>

- *Type:* `string`

---

##### `computedDesiredCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.computedDesiredCount"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.createdAt"></a>

- *Type:* `string`

---

##### `externalId`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.externalId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.id"></a>

- *Type:* `string`

---

##### `launchType`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.launchType"></a>

- *Type:* `string`

---

##### `loadBalancers`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.loadBalancers"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsLoadBalancer`](#aws-cdk-sdk.ecs.EcsLoadBalancer)[]

---

##### `networkConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfiguration)

---

##### `pendingCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.pendingCount"></a>

- *Type:* `number`

---

##### `platformVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.platformVersion"></a>

- *Type:* `string`

---

##### `runningCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.runningCount"></a>

- *Type:* `number`

---

##### `scale`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.scale"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetScale`](#aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetScale)

---

##### `serviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.serviceArn"></a>

- *Type:* `string`

---

##### `serviceRegistries`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.serviceRegistries"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsServiceRegistry`](#aws-cdk-sdk.ecs.EcsServiceRegistry)[]

---

##### `stabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.stabilityStatus"></a>

- *Type:* `string`

---

##### `stabilityStatusAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.stabilityStatusAt"></a>

- *Type:* `string`

---

##### `startedBy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.startedBy"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `taskDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.taskDefinition"></a>

- *Type:* `string`

---

##### `taskSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.taskSetArn"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSet.property.updatedAt"></a>

- *Type:* `string`

---


### ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfiguration(__scope: Construct, __resources: string[], __input: EcsUpdateServicePrimaryTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetRequest`](#aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `awsvpcConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfiguration.property.awsvpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration)

---


### ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration(__scope: Construct, __resources: string[], __input: EcsUpdateServicePrimaryTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetRequest`](#aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `assignPublicIp`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.property.assignPublicIp"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.property.subnets"></a>

- *Type:* `string`[]

---


### ECSResponsesUpdateServicePrimaryTaskSetTaskSetScale <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetScale"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetScale.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetScale(__scope: Construct, __resources: string[], __input: EcsUpdateServicePrimaryTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetScale.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetScale.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetScale.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetRequest`](#aws-cdk-sdk.ecs.EcsUpdateServicePrimaryTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetScale.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServicePrimaryTaskSetTaskSetScale.property.value"></a>

- *Type:* `number`

---


### ECSResponsesUpdateServiceService <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateServiceService(__scope: Construct, __resources: string[], __input: EcsUpdateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateServiceRequest`](#aws-cdk-sdk.ecs.EcsUpdateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `capacityProviderStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.capacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.clusterArn"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.createdAt"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.createdBy"></a>

- *Type:* `string`

---

##### `deploymentConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.deploymentConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfiguration)

---

##### `deploymentController`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.deploymentController"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentController`](#aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentController)

---

##### `deployments`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.deployments"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsDeployment`](#aws-cdk-sdk.ecs.EcsDeployment)[]

---

##### `desiredCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.desiredCount"></a>

- *Type:* `number`

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.enableEcsManagedTags"></a>

- *Type:* `boolean`

---

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.events"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsServiceEvent`](#aws-cdk-sdk.ecs.EcsServiceEvent)[]

---

##### `healthCheckGracePeriodSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.healthCheckGracePeriodSeconds"></a>

- *Type:* `number`

---

##### `launchType`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.launchType"></a>

- *Type:* `string`

---

##### `loadBalancers`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.loadBalancers"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsLoadBalancer`](#aws-cdk-sdk.ecs.EcsLoadBalancer)[]

---

##### `networkConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfiguration)

---

##### `pendingCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.pendingCount"></a>

- *Type:* `number`

---

##### `placementConstraints`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.placementConstraints"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPlacementConstraint`](#aws-cdk-sdk.ecs.EcsPlacementConstraint)[]

---

##### `placementStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.placementStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsPlacementStrategy`](#aws-cdk-sdk.ecs.EcsPlacementStrategy)[]

---

##### `platformVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.platformVersion"></a>

- *Type:* `string`

---

##### `propagateTags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.propagateTags"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.roleArn"></a>

- *Type:* `string`

---

##### `runningCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.runningCount"></a>

- *Type:* `number`

---

##### `schedulingStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.schedulingStrategy"></a>

- *Type:* `string`

---

##### `serviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.serviceArn"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.serviceName"></a>

- *Type:* `string`

---

##### `serviceRegistries`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.serviceRegistries"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsServiceRegistry`](#aws-cdk-sdk.ecs.EcsServiceRegistry)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `taskDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.taskDefinition"></a>

- *Type:* `string`

---

##### `taskSets`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceService.property.taskSets"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTaskSet`](#aws-cdk-sdk.ecs.EcsTaskSet)[]

---


### ECSResponsesUpdateServiceServiceDeploymentConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateServiceServiceDeploymentConfiguration(__scope: Construct, __resources: string[], __input: EcsUpdateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateServiceRequest`](#aws-cdk-sdk.ecs.EcsUpdateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `deploymentCircuitBreaker`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfiguration.property.deploymentCircuitBreaker"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker`](#aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker)

---

##### `maximumPercent`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfiguration.property.maximumPercent"></a>

- *Type:* `number`

---

##### `minimumHealthyPercent`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfiguration.property.minimumHealthyPercent"></a>

- *Type:* `number`

---


### ECSResponsesUpdateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker(__scope: Construct, __resources: string[], __input: EcsUpdateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateServiceRequest`](#aws-cdk-sdk.ecs.EcsUpdateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `enable`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.property.enable"></a>

- *Type:* `boolean`

---

##### `rollback`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentConfigurationDeploymentCircuitBreaker.property.rollback"></a>

- *Type:* `boolean`

---


### ECSResponsesUpdateServiceServiceDeploymentController <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentController"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentController.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateServiceServiceDeploymentController(__scope: Construct, __resources: string[], __input: EcsUpdateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentController.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentController.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentController.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateServiceRequest`](#aws-cdk-sdk.ecs.EcsUpdateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceDeploymentController.property.type"></a>

- *Type:* `string`

---


### ECSResponsesUpdateServiceServiceNetworkConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateServiceServiceNetworkConfiguration(__scope: Construct, __resources: string[], __input: EcsUpdateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateServiceRequest`](#aws-cdk-sdk.ecs.EcsUpdateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `awsvpcConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfiguration.property.awsvpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration)

---


### ECSResponsesUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration(__scope: Construct, __resources: string[], __input: EcsUpdateServiceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateServiceRequest`](#aws-cdk-sdk.ecs.EcsUpdateServiceRequest)

---



#### Properties <a name="Properties"></a>

##### `assignPublicIp`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration.property.assignPublicIp"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateServiceServiceNetworkConfigurationAwsvpcConfiguration.property.subnets"></a>

- *Type:* `string`[]

---


### ECSResponsesUpdateTaskSet <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSet"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSet.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateTaskSet(__scope: Construct, __resources: string[], __input: EcsUpdateTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateTaskSetRequest`](#aws-cdk-sdk.ecs.EcsUpdateTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `taskSet`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSet.property.taskSet"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet`](#aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet)

---


### ECSResponsesUpdateTaskSetTaskSet <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateTaskSetTaskSet(__scope: Construct, __resources: string[], __input: EcsUpdateTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateTaskSetRequest`](#aws-cdk-sdk.ecs.EcsUpdateTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `capacityProviderStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.capacityProviderStrategy"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem`](#aws-cdk-sdk.ecs.EcsCapacityProviderStrategyItem)[]

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.clusterArn"></a>

- *Type:* `string`

---

##### `computedDesiredCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.computedDesiredCount"></a>

- *Type:* `number`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.createdAt"></a>

- *Type:* `string`

---

##### `externalId`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.externalId"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.id"></a>

- *Type:* `string`

---

##### `launchType`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.launchType"></a>

- *Type:* `string`

---

##### `loadBalancers`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.loadBalancers"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsLoadBalancer`](#aws-cdk-sdk.ecs.EcsLoadBalancer)[]

---

##### `networkConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.networkConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfiguration)

---

##### `pendingCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.pendingCount"></a>

- *Type:* `number`

---

##### `platformVersion`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.platformVersion"></a>

- *Type:* `string`

---

##### `runningCount`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.runningCount"></a>

- *Type:* `number`

---

##### `scale`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.scale"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetScale`](#aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetScale)

---

##### `serviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.serviceArn"></a>

- *Type:* `string`

---

##### `serviceRegistries`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.serviceRegistries"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsServiceRegistry`](#aws-cdk-sdk.ecs.EcsServiceRegistry)[]

---

##### `stabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.stabilityStatus"></a>

- *Type:* `string`

---

##### `stabilityStatusAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.stabilityStatusAt"></a>

- *Type:* `string`

---

##### `startedBy`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.startedBy"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.tags"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsTag`](#aws-cdk-sdk.ecs.EcsTag)[]

---

##### `taskDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.taskDefinition"></a>

- *Type:* `string`

---

##### `taskSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.taskSetArn"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSet.property.updatedAt"></a>

- *Type:* `string`

---


### ECSResponsesUpdateTaskSetTaskSetNetworkConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfiguration(__scope: Construct, __resources: string[], __input: EcsUpdateTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateTaskSetRequest`](#aws-cdk-sdk.ecs.EcsUpdateTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `awsvpcConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfiguration.property.awsvpcConfiguration"></a>

- *Type:* [`aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration`](#aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration)

---


### ECSResponsesUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration(__scope: Construct, __resources: string[], __input: EcsUpdateTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateTaskSetRequest`](#aws-cdk-sdk.ecs.EcsUpdateTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `assignPublicIp`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.property.assignPublicIp"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetNetworkConfigurationAwsvpcConfiguration.property.subnets"></a>

- *Type:* `string`[]

---


### ECSResponsesUpdateTaskSetTaskSetScale <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetScale"></a>

#### Initializer <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetScale.Initializer"></a>

```typescript
import { ecs } from 'aws-cdk-sdk'

new ecs.ECSResponsesUpdateTaskSetTaskSetScale(__scope: Construct, __resources: string[], __input: EcsUpdateTaskSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetScale.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetScale.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetScale.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.ecs.EcsUpdateTaskSetRequest`](#aws-cdk-sdk.ecs.EcsUpdateTaskSetRequest)

---



#### Properties <a name="Properties"></a>

##### `unit`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetScale.property.unit"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.ecs.ECSResponsesUpdateTaskSetTaskSetScale.property.value"></a>

- *Type:* `number`

---



