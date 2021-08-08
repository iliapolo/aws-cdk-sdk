# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### BatchClient <a name="aws-cdk-sdk.batch.BatchClient"></a>

#### Initializer <a name="aws-cdk-sdk.batch.BatchClient.Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

new batch.BatchClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `cancelJob` <a name="aws-cdk-sdk.batch.BatchClient.cancelJob"></a>

```typescript
public cancelJob(input: BatchCancelJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchCancelJobRequest`](#aws-cdk-sdk.batch.BatchCancelJobRequest)

---

##### `createComputeEnvironment` <a name="aws-cdk-sdk.batch.BatchClient.createComputeEnvironment"></a>

```typescript
public createComputeEnvironment(input: BatchCreateComputeEnvironmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchCreateComputeEnvironmentRequest`](#aws-cdk-sdk.batch.BatchCreateComputeEnvironmentRequest)

---

##### `createJobQueue` <a name="aws-cdk-sdk.batch.BatchClient.createJobQueue"></a>

```typescript
public createJobQueue(input: BatchCreateJobQueueRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchCreateJobQueueRequest`](#aws-cdk-sdk.batch.BatchCreateJobQueueRequest)

---

##### `deleteComputeEnvironment` <a name="aws-cdk-sdk.batch.BatchClient.deleteComputeEnvironment"></a>

```typescript
public deleteComputeEnvironment(input: BatchDeleteComputeEnvironmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchDeleteComputeEnvironmentRequest`](#aws-cdk-sdk.batch.BatchDeleteComputeEnvironmentRequest)

---

##### `deleteJobQueue` <a name="aws-cdk-sdk.batch.BatchClient.deleteJobQueue"></a>

```typescript
public deleteJobQueue(input: BatchDeleteJobQueueRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchDeleteJobQueueRequest`](#aws-cdk-sdk.batch.BatchDeleteJobQueueRequest)

---

##### `deregisterJobDefinition` <a name="aws-cdk-sdk.batch.BatchClient.deregisterJobDefinition"></a>

```typescript
public deregisterJobDefinition(input: BatchDeregisterJobDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchDeregisterJobDefinitionRequest`](#aws-cdk-sdk.batch.BatchDeregisterJobDefinitionRequest)

---

##### `describeComputeEnvironments` <a name="aws-cdk-sdk.batch.BatchClient.describeComputeEnvironments"></a>

```typescript
public describeComputeEnvironments(input: BatchDescribeComputeEnvironmentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchDescribeComputeEnvironmentsRequest`](#aws-cdk-sdk.batch.BatchDescribeComputeEnvironmentsRequest)

---

##### `describeJobDefinitions` <a name="aws-cdk-sdk.batch.BatchClient.describeJobDefinitions"></a>

```typescript
public describeJobDefinitions(input: BatchDescribeJobDefinitionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchDescribeJobDefinitionsRequest`](#aws-cdk-sdk.batch.BatchDescribeJobDefinitionsRequest)

---

##### `describeJobQueues` <a name="aws-cdk-sdk.batch.BatchClient.describeJobQueues"></a>

```typescript
public describeJobQueues(input: BatchDescribeJobQueuesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchDescribeJobQueuesRequest`](#aws-cdk-sdk.batch.BatchDescribeJobQueuesRequest)

---

##### `describeJobs` <a name="aws-cdk-sdk.batch.BatchClient.describeJobs"></a>

```typescript
public describeJobs(input: BatchDescribeJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchDescribeJobsRequest`](#aws-cdk-sdk.batch.BatchDescribeJobsRequest)

---

##### `listJobs` <a name="aws-cdk-sdk.batch.BatchClient.listJobs"></a>

```typescript
public listJobs(input: BatchListJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchListJobsRequest`](#aws-cdk-sdk.batch.BatchListJobsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.batch.BatchClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: BatchListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchListTagsForResourceRequest`](#aws-cdk-sdk.batch.BatchListTagsForResourceRequest)

---

##### `registerJobDefinition` <a name="aws-cdk-sdk.batch.BatchClient.registerJobDefinition"></a>

```typescript
public registerJobDefinition(input: BatchRegisterJobDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchRegisterJobDefinitionRequest`](#aws-cdk-sdk.batch.BatchRegisterJobDefinitionRequest)

---

##### `submitJob` <a name="aws-cdk-sdk.batch.BatchClient.submitJob"></a>

```typescript
public submitJob(input: BatchSubmitJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchSubmitJobRequest`](#aws-cdk-sdk.batch.BatchSubmitJobRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.batch.BatchClient.tagResource"></a>

```typescript
public tagResource(input: BatchTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchTagResourceRequest`](#aws-cdk-sdk.batch.BatchTagResourceRequest)

---

##### `terminateJob` <a name="aws-cdk-sdk.batch.BatchClient.terminateJob"></a>

```typescript
public terminateJob(input: BatchTerminateJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchTerminateJobRequest`](#aws-cdk-sdk.batch.BatchTerminateJobRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.batch.BatchClient.untagResource"></a>

```typescript
public untagResource(input: BatchUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchUntagResourceRequest`](#aws-cdk-sdk.batch.BatchUntagResourceRequest)

---

##### `updateComputeEnvironment` <a name="aws-cdk-sdk.batch.BatchClient.updateComputeEnvironment"></a>

```typescript
public updateComputeEnvironment(input: BatchUpdateComputeEnvironmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchUpdateComputeEnvironmentRequest`](#aws-cdk-sdk.batch.BatchUpdateComputeEnvironmentRequest)

---

##### `updateJobQueue` <a name="aws-cdk-sdk.batch.BatchClient.updateJobQueue"></a>

```typescript
public updateJobQueue(input: BatchUpdateJobQueueRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchUpdateJobQueueRequest`](#aws-cdk-sdk.batch.BatchUpdateJobQueueRequest)

---




## Structs <a name="Structs"></a>

### BatchArrayProperties <a name="aws-cdk-sdk.batch.BatchArrayProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchArrayProperties: batch.BatchArrayProperties = { ... }
```

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchArrayProperties.property.size"></a>

- *Type:* `number`

---

### BatchArrayPropertiesDetail <a name="aws-cdk-sdk.batch.BatchArrayPropertiesDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchArrayPropertiesDetail: batch.BatchArrayPropertiesDetail = { ... }
```

##### `index`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchArrayPropertiesDetail.property.index"></a>

- *Type:* `number`

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchArrayPropertiesDetail.property.size"></a>

- *Type:* `number`

---

##### `statusSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchArrayPropertiesDetail.property.statusSummary"></a>

- *Type:* {[ key: string ]: `number`}

---

### BatchArrayPropertiesSummary <a name="aws-cdk-sdk.batch.BatchArrayPropertiesSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchArrayPropertiesSummary: batch.BatchArrayPropertiesSummary = { ... }
```

##### `index`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchArrayPropertiesSummary.property.index"></a>

- *Type:* `number`

---

##### `size`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchArrayPropertiesSummary.property.size"></a>

- *Type:* `number`

---

### BatchAttemptContainerDetail <a name="aws-cdk-sdk.batch.BatchAttemptContainerDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchAttemptContainerDetail: batch.BatchAttemptContainerDetail = { ... }
```

##### `containerInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchAttemptContainerDetail.property.containerInstanceArn"></a>

- *Type:* `string`

---

##### `exitCode`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchAttemptContainerDetail.property.exitCode"></a>

- *Type:* `number`

---

##### `logStreamName`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchAttemptContainerDetail.property.logStreamName"></a>

- *Type:* `string`

---

##### `networkInterfaces`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchAttemptContainerDetail.property.networkInterfaces"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchNetworkInterface`](#aws-cdk-sdk.batch.BatchNetworkInterface)[]

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchAttemptContainerDetail.property.reason"></a>

- *Type:* `string`

---

##### `taskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchAttemptContainerDetail.property.taskArn"></a>

- *Type:* `string`

---

### BatchAttemptDetail <a name="aws-cdk-sdk.batch.BatchAttemptDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchAttemptDetail: batch.BatchAttemptDetail = { ... }
```

##### `container`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchAttemptDetail.property.container"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchAttemptContainerDetail`](#aws-cdk-sdk.batch.BatchAttemptContainerDetail)

---

##### `startedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchAttemptDetail.property.startedAt"></a>

- *Type:* `number`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchAttemptDetail.property.statusReason"></a>

- *Type:* `string`

---

##### `stoppedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchAttemptDetail.property.stoppedAt"></a>

- *Type:* `number`

---

### BatchCancelJobRequest <a name="aws-cdk-sdk.batch.BatchCancelJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchCancelJobRequest: batch.BatchCancelJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchCancelJobRequest.property.jobId"></a>

- *Type:* `string`

---

##### `reason`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchCancelJobRequest.property.reason"></a>

- *Type:* `string`

---

### BatchCancelJobResponse <a name="aws-cdk-sdk.batch.BatchCancelJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchCancelJobResponse: batch.BatchCancelJobResponse = { ... }
```

### BatchComputeEnvironmentDetail <a name="aws-cdk-sdk.batch.BatchComputeEnvironmentDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchComputeEnvironmentDetail: batch.BatchComputeEnvironmentDetail = { ... }
```

##### `computeEnvironmentArn`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchComputeEnvironmentDetail.property.computeEnvironmentArn"></a>

- *Type:* `string`

---

##### `computeEnvironmentName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchComputeEnvironmentDetail.property.computeEnvironmentName"></a>

- *Type:* `string`

---

##### `ecsClusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchComputeEnvironmentDetail.property.ecsClusterArn"></a>

- *Type:* `string`

---

##### `computeResources`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeEnvironmentDetail.property.computeResources"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchComputeResource`](#aws-cdk-sdk.batch.BatchComputeResource)

---

##### `serviceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeEnvironmentDetail.property.serviceRole"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeEnvironmentDetail.property.state"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeEnvironmentDetail.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeEnvironmentDetail.property.statusReason"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeEnvironmentDetail.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeEnvironmentDetail.property.type"></a>

- *Type:* `string`

---

### BatchComputeEnvironmentOrder <a name="aws-cdk-sdk.batch.BatchComputeEnvironmentOrder"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchComputeEnvironmentOrder: batch.BatchComputeEnvironmentOrder = { ... }
```

##### `computeEnvironment`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchComputeEnvironmentOrder.property.computeEnvironment"></a>

- *Type:* `string`

---

##### `order`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchComputeEnvironmentOrder.property.order"></a>

- *Type:* `number`

---

### BatchComputeResource <a name="aws-cdk-sdk.batch.BatchComputeResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchComputeResource: batch.BatchComputeResource = { ... }
```

##### `instanceRole`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchComputeResource.property.instanceRole"></a>

- *Type:* `string`

---

##### `instanceTypes`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchComputeResource.property.instanceTypes"></a>

- *Type:* `string`[]

---

##### `maxvCpus`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchComputeResource.property.maxvCpus"></a>

- *Type:* `number`

---

##### `minvCpus`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchComputeResource.property.minvCpus"></a>

- *Type:* `number`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchComputeResource.property.subnets"></a>

- *Type:* `string`[]

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchComputeResource.property.type"></a>

- *Type:* `string`

---

##### `allocationStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeResource.property.allocationStrategy"></a>

- *Type:* `string`

---

##### `bidPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeResource.property.bidPercentage"></a>

- *Type:* `number`

---

##### `desiredvCpus`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeResource.property.desiredvCpus"></a>

- *Type:* `number`

---

##### `ec2Configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeResource.property.ec2Configuration"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchEc2Configuration`](#aws-cdk-sdk.batch.BatchEc2Configuration)[]

---

##### `ec2KeyPair`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeResource.property.ec2KeyPair"></a>

- *Type:* `string`

---

##### `imageId`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeResource.property.imageId"></a>

- *Type:* `string`

---

##### `launchTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeResource.property.launchTemplate"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchLaunchTemplateSpecification`](#aws-cdk-sdk.batch.BatchLaunchTemplateSpecification)

---

##### `placementGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeResource.property.placementGroup"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeResource.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `spotIamFleetRole`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeResource.property.spotIamFleetRole"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### BatchComputeResourceUpdate <a name="aws-cdk-sdk.batch.BatchComputeResourceUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchComputeResourceUpdate: batch.BatchComputeResourceUpdate = { ... }
```

##### `desiredvCpus`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeResourceUpdate.property.desiredvCpus"></a>

- *Type:* `number`

---

##### `maxvCpus`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeResourceUpdate.property.maxvCpus"></a>

- *Type:* `number`

---

##### `minvCpus`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchComputeResourceUpdate.property.minvCpus"></a>

- *Type:* `number`

---

### BatchContainerDetail <a name="aws-cdk-sdk.batch.BatchContainerDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchContainerDetail: batch.BatchContainerDetail = { ... }
```

##### `command`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.command"></a>

- *Type:* `string`[]

---

##### `containerInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.containerInstanceArn"></a>

- *Type:* `string`

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.environment"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchKeyValuePair`](#aws-cdk-sdk.batch.BatchKeyValuePair)[]

---

##### `executionRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `exitCode`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.exitCode"></a>

- *Type:* `number`

---

##### `image`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.image"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.instanceType"></a>

- *Type:* `string`

---

##### `jobRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.jobRoleArn"></a>

- *Type:* `string`

---

##### `linuxParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.linuxParameters"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchLinuxParameters`](#aws-cdk-sdk.batch.BatchLinuxParameters)

---

##### `logConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.logConfiguration"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchLogConfiguration`](#aws-cdk-sdk.batch.BatchLogConfiguration)

---

##### `logStreamName`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.logStreamName"></a>

- *Type:* `string`

---

##### `memory`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.memory"></a>

- *Type:* `number`

---

##### `mountPoints`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.mountPoints"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchMountPoint`](#aws-cdk-sdk.batch.BatchMountPoint)[]

---

##### `networkInterfaces`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.networkInterfaces"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchNetworkInterface`](#aws-cdk-sdk.batch.BatchNetworkInterface)[]

---

##### `privileged`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.privileged"></a>

- *Type:* `boolean`

---

##### `readonlyRootFilesystem`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.readonlyRootFilesystem"></a>

- *Type:* `boolean`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.reason"></a>

- *Type:* `string`

---

##### `resourceRequirements`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.resourceRequirements"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchResourceRequirement`](#aws-cdk-sdk.batch.BatchResourceRequirement)[]

---

##### `secrets`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.secrets"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchSecret`](#aws-cdk-sdk.batch.BatchSecret)[]

---

##### `taskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.taskArn"></a>

- *Type:* `string`

---

##### `ulimits`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.ulimits"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchUlimit`](#aws-cdk-sdk.batch.BatchUlimit)[]

---

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.user"></a>

- *Type:* `string`

---

##### `vcpus`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.vcpus"></a>

- *Type:* `number`

---

##### `volumes`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerDetail.property.volumes"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchVolume`](#aws-cdk-sdk.batch.BatchVolume)[]

---

### BatchContainerOverrides <a name="aws-cdk-sdk.batch.BatchContainerOverrides"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchContainerOverrides: batch.BatchContainerOverrides = { ... }
```

##### `command`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerOverrides.property.command"></a>

- *Type:* `string`[]

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerOverrides.property.environment"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchKeyValuePair`](#aws-cdk-sdk.batch.BatchKeyValuePair)[]

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerOverrides.property.instanceType"></a>

- *Type:* `string`

---

##### `memory`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerOverrides.property.memory"></a>

- *Type:* `number`

---

##### `resourceRequirements`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerOverrides.property.resourceRequirements"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchResourceRequirement`](#aws-cdk-sdk.batch.BatchResourceRequirement)[]

---

##### `vcpus`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerOverrides.property.vcpus"></a>

- *Type:* `number`

---

### BatchContainerProperties <a name="aws-cdk-sdk.batch.BatchContainerProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchContainerProperties: batch.BatchContainerProperties = { ... }
```

##### `command`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.command"></a>

- *Type:* `string`[]

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.environment"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchKeyValuePair`](#aws-cdk-sdk.batch.BatchKeyValuePair)[]

---

##### `executionRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `image`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.image"></a>

- *Type:* `string`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.instanceType"></a>

- *Type:* `string`

---

##### `jobRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.jobRoleArn"></a>

- *Type:* `string`

---

##### `linuxParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.linuxParameters"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchLinuxParameters`](#aws-cdk-sdk.batch.BatchLinuxParameters)

---

##### `logConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.logConfiguration"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchLogConfiguration`](#aws-cdk-sdk.batch.BatchLogConfiguration)

---

##### `memory`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.memory"></a>

- *Type:* `number`

---

##### `mountPoints`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.mountPoints"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchMountPoint`](#aws-cdk-sdk.batch.BatchMountPoint)[]

---

##### `privileged`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.privileged"></a>

- *Type:* `boolean`

---

##### `readonlyRootFilesystem`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.readonlyRootFilesystem"></a>

- *Type:* `boolean`

---

##### `resourceRequirements`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.resourceRequirements"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchResourceRequirement`](#aws-cdk-sdk.batch.BatchResourceRequirement)[]

---

##### `secrets`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.secrets"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchSecret`](#aws-cdk-sdk.batch.BatchSecret)[]

---

##### `ulimits`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.ulimits"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchUlimit`](#aws-cdk-sdk.batch.BatchUlimit)[]

---

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.user"></a>

- *Type:* `string`

---

##### `vcpus`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.vcpus"></a>

- *Type:* `number`

---

##### `volumes`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerProperties.property.volumes"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchVolume`](#aws-cdk-sdk.batch.BatchVolume)[]

---

### BatchContainerSummary <a name="aws-cdk-sdk.batch.BatchContainerSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchContainerSummary: batch.BatchContainerSummary = { ... }
```

##### `exitCode`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerSummary.property.exitCode"></a>

- *Type:* `number`

---

##### `reason`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchContainerSummary.property.reason"></a>

- *Type:* `string`

---

### BatchCreateComputeEnvironmentRequest <a name="aws-cdk-sdk.batch.BatchCreateComputeEnvironmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchCreateComputeEnvironmentRequest: batch.BatchCreateComputeEnvironmentRequest = { ... }
```

##### `computeEnvironmentName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchCreateComputeEnvironmentRequest.property.computeEnvironmentName"></a>

- *Type:* `string`

---

##### `serviceRole`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchCreateComputeEnvironmentRequest.property.serviceRole"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchCreateComputeEnvironmentRequest.property.type"></a>

- *Type:* `string`

---

##### `computeResources`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchCreateComputeEnvironmentRequest.property.computeResources"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchComputeResource`](#aws-cdk-sdk.batch.BatchComputeResource)

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchCreateComputeEnvironmentRequest.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchCreateComputeEnvironmentRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### BatchCreateComputeEnvironmentResponse <a name="aws-cdk-sdk.batch.BatchCreateComputeEnvironmentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchCreateComputeEnvironmentResponse: batch.BatchCreateComputeEnvironmentResponse = { ... }
```

##### `computeEnvironmentArn`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchCreateComputeEnvironmentResponse.property.computeEnvironmentArn"></a>

- *Type:* `string`

---

##### `computeEnvironmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchCreateComputeEnvironmentResponse.property.computeEnvironmentName"></a>

- *Type:* `string`

---

### BatchCreateJobQueueRequest <a name="aws-cdk-sdk.batch.BatchCreateJobQueueRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchCreateJobQueueRequest: batch.BatchCreateJobQueueRequest = { ... }
```

##### `computeEnvironmentOrder`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchCreateJobQueueRequest.property.computeEnvironmentOrder"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchComputeEnvironmentOrder`](#aws-cdk-sdk.batch.BatchComputeEnvironmentOrder)[]

---

##### `jobQueueName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchCreateJobQueueRequest.property.jobQueueName"></a>

- *Type:* `string`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchCreateJobQueueRequest.property.priority"></a>

- *Type:* `number`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchCreateJobQueueRequest.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchCreateJobQueueRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### BatchCreateJobQueueResponse <a name="aws-cdk-sdk.batch.BatchCreateJobQueueResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchCreateJobQueueResponse: batch.BatchCreateJobQueueResponse = { ... }
```

##### `jobQueueArn`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchCreateJobQueueResponse.property.jobQueueArn"></a>

- *Type:* `string`

---

##### `jobQueueName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchCreateJobQueueResponse.property.jobQueueName"></a>

- *Type:* `string`

---

### BatchDeleteComputeEnvironmentRequest <a name="aws-cdk-sdk.batch.BatchDeleteComputeEnvironmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchDeleteComputeEnvironmentRequest: batch.BatchDeleteComputeEnvironmentRequest = { ... }
```

##### `computeEnvironment`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchDeleteComputeEnvironmentRequest.property.computeEnvironment"></a>

- *Type:* `string`

---

### BatchDeleteComputeEnvironmentResponse <a name="aws-cdk-sdk.batch.BatchDeleteComputeEnvironmentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchDeleteComputeEnvironmentResponse: batch.BatchDeleteComputeEnvironmentResponse = { ... }
```

### BatchDeleteJobQueueRequest <a name="aws-cdk-sdk.batch.BatchDeleteJobQueueRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchDeleteJobQueueRequest: batch.BatchDeleteJobQueueRequest = { ... }
```

##### `jobQueue`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchDeleteJobQueueRequest.property.jobQueue"></a>

- *Type:* `string`

---

### BatchDeleteJobQueueResponse <a name="aws-cdk-sdk.batch.BatchDeleteJobQueueResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchDeleteJobQueueResponse: batch.BatchDeleteJobQueueResponse = { ... }
```

### BatchDeregisterJobDefinitionRequest <a name="aws-cdk-sdk.batch.BatchDeregisterJobDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchDeregisterJobDefinitionRequest: batch.BatchDeregisterJobDefinitionRequest = { ... }
```

##### `jobDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchDeregisterJobDefinitionRequest.property.jobDefinition"></a>

- *Type:* `string`

---

### BatchDeregisterJobDefinitionResponse <a name="aws-cdk-sdk.batch.BatchDeregisterJobDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchDeregisterJobDefinitionResponse: batch.BatchDeregisterJobDefinitionResponse = { ... }
```

### BatchDescribeComputeEnvironmentsRequest <a name="aws-cdk-sdk.batch.BatchDescribeComputeEnvironmentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchDescribeComputeEnvironmentsRequest: batch.BatchDescribeComputeEnvironmentsRequest = { ... }
```

##### `computeEnvironments`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeComputeEnvironmentsRequest.property.computeEnvironments"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeComputeEnvironmentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeComputeEnvironmentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### BatchDescribeComputeEnvironmentsResponse <a name="aws-cdk-sdk.batch.BatchDescribeComputeEnvironmentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchDescribeComputeEnvironmentsResponse: batch.BatchDescribeComputeEnvironmentsResponse = { ... }
```

##### `computeEnvironments`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeComputeEnvironmentsResponse.property.computeEnvironments"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchComputeEnvironmentDetail`](#aws-cdk-sdk.batch.BatchComputeEnvironmentDetail)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeComputeEnvironmentsResponse.property.nextToken"></a>

- *Type:* `string`

---

### BatchDescribeJobDefinitionsRequest <a name="aws-cdk-sdk.batch.BatchDescribeJobDefinitionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchDescribeJobDefinitionsRequest: batch.BatchDescribeJobDefinitionsRequest = { ... }
```

##### `jobDefinitionName`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeJobDefinitionsRequest.property.jobDefinitionName"></a>

- *Type:* `string`

---

##### `jobDefinitions`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeJobDefinitionsRequest.property.jobDefinitions"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeJobDefinitionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeJobDefinitionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeJobDefinitionsRequest.property.status"></a>

- *Type:* `string`

---

### BatchDescribeJobDefinitionsResponse <a name="aws-cdk-sdk.batch.BatchDescribeJobDefinitionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchDescribeJobDefinitionsResponse: batch.BatchDescribeJobDefinitionsResponse = { ... }
```

##### `jobDefinitions`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeJobDefinitionsResponse.property.jobDefinitions"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchJobDefinition`](#aws-cdk-sdk.batch.BatchJobDefinition)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeJobDefinitionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### BatchDescribeJobQueuesRequest <a name="aws-cdk-sdk.batch.BatchDescribeJobQueuesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchDescribeJobQueuesRequest: batch.BatchDescribeJobQueuesRequest = { ... }
```

##### `jobQueues`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeJobQueuesRequest.property.jobQueues"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeJobQueuesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeJobQueuesRequest.property.nextToken"></a>

- *Type:* `string`

---

### BatchDescribeJobQueuesResponse <a name="aws-cdk-sdk.batch.BatchDescribeJobQueuesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchDescribeJobQueuesResponse: batch.BatchDescribeJobQueuesResponse = { ... }
```

##### `jobQueues`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeJobQueuesResponse.property.jobQueues"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchJobQueueDetail`](#aws-cdk-sdk.batch.BatchJobQueueDetail)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeJobQueuesResponse.property.nextToken"></a>

- *Type:* `string`

---

### BatchDescribeJobsRequest <a name="aws-cdk-sdk.batch.BatchDescribeJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchDescribeJobsRequest: batch.BatchDescribeJobsRequest = { ... }
```

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchDescribeJobsRequest.property.jobs"></a>

- *Type:* `string`[]

---

### BatchDescribeJobsResponse <a name="aws-cdk-sdk.batch.BatchDescribeJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchDescribeJobsResponse: batch.BatchDescribeJobsResponse = { ... }
```

##### `jobs`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDescribeJobsResponse.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchJobDetail`](#aws-cdk-sdk.batch.BatchJobDetail)[]

---

### BatchDevice <a name="aws-cdk-sdk.batch.BatchDevice"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchDevice: batch.BatchDevice = { ... }
```

##### `hostPath`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchDevice.property.hostPath"></a>

- *Type:* `string`

---

##### `containerPath`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDevice.property.containerPath"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchDevice.property.permissions"></a>

- *Type:* `string`[]

---

### BatchEc2Configuration <a name="aws-cdk-sdk.batch.BatchEc2Configuration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchEc2Configuration: batch.BatchEc2Configuration = { ... }
```

##### `imageType`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchEc2Configuration.property.imageType"></a>

- *Type:* `string`

---

##### `imageIdOverride`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchEc2Configuration.property.imageIdOverride"></a>

- *Type:* `string`

---

### BatchEvaluateOnExit <a name="aws-cdk-sdk.batch.BatchEvaluateOnExit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchEvaluateOnExit: batch.BatchEvaluateOnExit = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchEvaluateOnExit.property.action"></a>

- *Type:* `string`

---

##### `onExitCode`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchEvaluateOnExit.property.onExitCode"></a>

- *Type:* `string`

---

##### `onReason`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchEvaluateOnExit.property.onReason"></a>

- *Type:* `string`

---

##### `onStatusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchEvaluateOnExit.property.onStatusReason"></a>

- *Type:* `string`

---

### BatchHost <a name="aws-cdk-sdk.batch.BatchHost"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchHost: batch.BatchHost = { ... }
```

##### `sourcePath`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchHost.property.sourcePath"></a>

- *Type:* `string`

---

### BatchJobDefinition <a name="aws-cdk-sdk.batch.BatchJobDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchJobDefinition: batch.BatchJobDefinition = { ... }
```

##### `jobDefinitionArn`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchJobDefinition.property.jobDefinitionArn"></a>

- *Type:* `string`

---

##### `jobDefinitionName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchJobDefinition.property.jobDefinitionName"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchJobDefinition.property.revision"></a>

- *Type:* `number`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchJobDefinition.property.type"></a>

- *Type:* `string`

---

##### `containerProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDefinition.property.containerProperties"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchContainerProperties`](#aws-cdk-sdk.batch.BatchContainerProperties)

---

##### `nodeProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDefinition.property.nodeProperties"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchNodeProperties`](#aws-cdk-sdk.batch.BatchNodeProperties)

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDefinition.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `retryStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDefinition.property.retryStrategy"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchRetryStrategy`](#aws-cdk-sdk.batch.BatchRetryStrategy)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDefinition.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDefinition.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDefinition.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchJobTimeout`](#aws-cdk-sdk.batch.BatchJobTimeout)

---

### BatchJobDependency <a name="aws-cdk-sdk.batch.BatchJobDependency"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchJobDependency: batch.BatchJobDependency = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDependency.property.jobId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDependency.property.type"></a>

- *Type:* `string`

---

### BatchJobDetail <a name="aws-cdk-sdk.batch.BatchJobDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchJobDetail: batch.BatchJobDetail = { ... }
```

##### `jobDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.jobDefinition"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.jobName"></a>

- *Type:* `string`

---

##### `jobQueue`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.jobQueue"></a>

- *Type:* `string`

---

##### `startedAt`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.startedAt"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.status"></a>

- *Type:* `string`

---

##### `arrayProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.arrayProperties"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchArrayPropertiesDetail`](#aws-cdk-sdk.batch.BatchArrayPropertiesDetail)

---

##### `attempts`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.attempts"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchAttemptDetail`](#aws-cdk-sdk.batch.BatchAttemptDetail)[]

---

##### `container`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.container"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchContainerDetail`](#aws-cdk-sdk.batch.BatchContainerDetail)

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.createdAt"></a>

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.dependsOn"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchJobDependency`](#aws-cdk-sdk.batch.BatchJobDependency)[]

---

##### `jobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.jobArn"></a>

- *Type:* `string`

---

##### `nodeDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.nodeDetails"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchNodeDetails`](#aws-cdk-sdk.batch.BatchNodeDetails)

---

##### `nodeProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.nodeProperties"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchNodeProperties`](#aws-cdk-sdk.batch.BatchNodeProperties)

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `retryStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.retryStrategy"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchRetryStrategy`](#aws-cdk-sdk.batch.BatchRetryStrategy)

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.statusReason"></a>

- *Type:* `string`

---

##### `stoppedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.stoppedAt"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobDetail.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchJobTimeout`](#aws-cdk-sdk.batch.BatchJobTimeout)

---

### BatchJobQueueDetail <a name="aws-cdk-sdk.batch.BatchJobQueueDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchJobQueueDetail: batch.BatchJobQueueDetail = { ... }
```

##### `computeEnvironmentOrder`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchJobQueueDetail.property.computeEnvironmentOrder"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchComputeEnvironmentOrder`](#aws-cdk-sdk.batch.BatchComputeEnvironmentOrder)[]

---

##### `jobQueueArn`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchJobQueueDetail.property.jobQueueArn"></a>

- *Type:* `string`

---

##### `jobQueueName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchJobQueueDetail.property.jobQueueName"></a>

- *Type:* `string`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchJobQueueDetail.property.priority"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchJobQueueDetail.property.state"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobQueueDetail.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobQueueDetail.property.statusReason"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobQueueDetail.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### BatchJobSummary <a name="aws-cdk-sdk.batch.BatchJobSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchJobSummary: batch.BatchJobSummary = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchJobSummary.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchJobSummary.property.jobName"></a>

- *Type:* `string`

---

##### `arrayProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobSummary.property.arrayProperties"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchArrayPropertiesSummary`](#aws-cdk-sdk.batch.BatchArrayPropertiesSummary)

---

##### `container`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobSummary.property.container"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchContainerSummary`](#aws-cdk-sdk.batch.BatchContainerSummary)

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobSummary.property.createdAt"></a>

- *Type:* `number`

---

##### `jobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobSummary.property.jobArn"></a>

- *Type:* `string`

---

##### `nodeProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobSummary.property.nodeProperties"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchNodePropertiesSummary`](#aws-cdk-sdk.batch.BatchNodePropertiesSummary)

---

##### `startedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobSummary.property.startedAt"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobSummary.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobSummary.property.statusReason"></a>

- *Type:* `string`

---

##### `stoppedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobSummary.property.stoppedAt"></a>

- *Type:* `number`

---

### BatchJobTimeout <a name="aws-cdk-sdk.batch.BatchJobTimeout"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchJobTimeout: batch.BatchJobTimeout = { ... }
```

##### `attemptDurationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchJobTimeout.property.attemptDurationSeconds"></a>

- *Type:* `number`

---

### BatchKeyValuePair <a name="aws-cdk-sdk.batch.BatchKeyValuePair"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchKeyValuePair: batch.BatchKeyValuePair = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchKeyValuePair.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchKeyValuePair.property.value"></a>

- *Type:* `string`

---

### BatchLaunchTemplateSpecification <a name="aws-cdk-sdk.batch.BatchLaunchTemplateSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchLaunchTemplateSpecification: batch.BatchLaunchTemplateSpecification = { ... }
```

##### `launchTemplateId`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchLaunchTemplateSpecification.property.launchTemplateId"></a>

- *Type:* `string`

---

##### `launchTemplateName`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchLaunchTemplateSpecification.property.launchTemplateName"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchLaunchTemplateSpecification.property.version"></a>

- *Type:* `string`

---

### BatchLinuxParameters <a name="aws-cdk-sdk.batch.BatchLinuxParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchLinuxParameters: batch.BatchLinuxParameters = { ... }
```

##### `devices`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchLinuxParameters.property.devices"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchDevice`](#aws-cdk-sdk.batch.BatchDevice)[]

---

##### `initProcessEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchLinuxParameters.property.initProcessEnabled"></a>

- *Type:* `boolean`

---

##### `maxSwap`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchLinuxParameters.property.maxSwap"></a>

- *Type:* `number`

---

##### `sharedMemorySize`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchLinuxParameters.property.sharedMemorySize"></a>

- *Type:* `number`

---

##### `swappiness`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchLinuxParameters.property.swappiness"></a>

- *Type:* `number`

---

##### `tmpfs`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchLinuxParameters.property.tmpfs"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchTmpfs`](#aws-cdk-sdk.batch.BatchTmpfs)[]

---

### BatchListJobsRequest <a name="aws-cdk-sdk.batch.BatchListJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchListJobsRequest: batch.BatchListJobsRequest = { ... }
```

##### `arrayJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchListJobsRequest.property.arrayJobId"></a>

- *Type:* `string`

---

##### `jobQueue`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchListJobsRequest.property.jobQueue"></a>

- *Type:* `string`

---

##### `jobStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchListJobsRequest.property.jobStatus"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchListJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `multiNodeJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchListJobsRequest.property.multiNodeJobId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchListJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### BatchListJobsResponse <a name="aws-cdk-sdk.batch.BatchListJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchListJobsResponse: batch.BatchListJobsResponse = { ... }
```

##### `jobSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchListJobsResponse.property.jobSummaryList"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchJobSummary`](#aws-cdk-sdk.batch.BatchJobSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchListJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### BatchListTagsForResourceRequest <a name="aws-cdk-sdk.batch.BatchListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchListTagsForResourceRequest: batch.BatchListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### BatchListTagsForResourceResponse <a name="aws-cdk-sdk.batch.BatchListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchListTagsForResourceResponse: batch.BatchListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### BatchLogConfiguration <a name="aws-cdk-sdk.batch.BatchLogConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchLogConfiguration: batch.BatchLogConfiguration = { ... }
```

##### `logDriver`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchLogConfiguration.property.logDriver"></a>

- *Type:* `string`

---

##### `options`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchLogConfiguration.property.options"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `secretOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchLogConfiguration.property.secretOptions"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchSecret`](#aws-cdk-sdk.batch.BatchSecret)[]

---

### BatchMountPoint <a name="aws-cdk-sdk.batch.BatchMountPoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchMountPoint: batch.BatchMountPoint = { ... }
```

##### `containerPath`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchMountPoint.property.containerPath"></a>

- *Type:* `string`

---

##### `readOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchMountPoint.property.readOnly"></a>

- *Type:* `boolean`

---

##### `sourceVolume`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchMountPoint.property.sourceVolume"></a>

- *Type:* `string`

---

### BatchNetworkInterface <a name="aws-cdk-sdk.batch.BatchNetworkInterface"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchNetworkInterface: batch.BatchNetworkInterface = { ... }
```

##### `attachmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchNetworkInterface.property.attachmentId"></a>

- *Type:* `string`

---

##### `ipv6Address`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchNetworkInterface.property.ipv6Address"></a>

- *Type:* `string`

---

##### `privateIpv4Address`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchNetworkInterface.property.privateIpv4Address"></a>

- *Type:* `string`

---

### BatchNodeDetails <a name="aws-cdk-sdk.batch.BatchNodeDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchNodeDetails: batch.BatchNodeDetails = { ... }
```

##### `isMainNode`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchNodeDetails.property.isMainNode"></a>

- *Type:* `boolean`

---

##### `nodeIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchNodeDetails.property.nodeIndex"></a>

- *Type:* `number`

---

### BatchNodeOverrides <a name="aws-cdk-sdk.batch.BatchNodeOverrides"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchNodeOverrides: batch.BatchNodeOverrides = { ... }
```

##### `nodePropertyOverrides`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchNodeOverrides.property.nodePropertyOverrides"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchNodePropertyOverride`](#aws-cdk-sdk.batch.BatchNodePropertyOverride)[]

---

##### `numNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchNodeOverrides.property.numNodes"></a>

- *Type:* `number`

---

### BatchNodeProperties <a name="aws-cdk-sdk.batch.BatchNodeProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchNodeProperties: batch.BatchNodeProperties = { ... }
```

##### `mainNode`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchNodeProperties.property.mainNode"></a>

- *Type:* `number`

---

##### `nodeRangeProperties`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchNodeProperties.property.nodeRangeProperties"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchNodeRangeProperty`](#aws-cdk-sdk.batch.BatchNodeRangeProperty)[]

---

##### `numNodes`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchNodeProperties.property.numNodes"></a>

- *Type:* `number`

---

### BatchNodePropertiesSummary <a name="aws-cdk-sdk.batch.BatchNodePropertiesSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchNodePropertiesSummary: batch.BatchNodePropertiesSummary = { ... }
```

##### `isMainNode`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchNodePropertiesSummary.property.isMainNode"></a>

- *Type:* `boolean`

---

##### `nodeIndex`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchNodePropertiesSummary.property.nodeIndex"></a>

- *Type:* `number`

---

##### `numNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchNodePropertiesSummary.property.numNodes"></a>

- *Type:* `number`

---

### BatchNodePropertyOverride <a name="aws-cdk-sdk.batch.BatchNodePropertyOverride"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchNodePropertyOverride: batch.BatchNodePropertyOverride = { ... }
```

##### `targetNodes`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchNodePropertyOverride.property.targetNodes"></a>

- *Type:* `string`

---

##### `containerOverrides`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchNodePropertyOverride.property.containerOverrides"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchContainerOverrides`](#aws-cdk-sdk.batch.BatchContainerOverrides)

---

### BatchNodeRangeProperty <a name="aws-cdk-sdk.batch.BatchNodeRangeProperty"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchNodeRangeProperty: batch.BatchNodeRangeProperty = { ... }
```

##### `targetNodes`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchNodeRangeProperty.property.targetNodes"></a>

- *Type:* `string`

---

##### `container`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchNodeRangeProperty.property.container"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchContainerProperties`](#aws-cdk-sdk.batch.BatchContainerProperties)

---

### BatchRegisterJobDefinitionRequest <a name="aws-cdk-sdk.batch.BatchRegisterJobDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchRegisterJobDefinitionRequest: batch.BatchRegisterJobDefinitionRequest = { ... }
```

##### `jobDefinitionName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchRegisterJobDefinitionRequest.property.jobDefinitionName"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchRegisterJobDefinitionRequest.property.type"></a>

- *Type:* `string`

---

##### `containerProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchRegisterJobDefinitionRequest.property.containerProperties"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchContainerProperties`](#aws-cdk-sdk.batch.BatchContainerProperties)

---

##### `nodeProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchRegisterJobDefinitionRequest.property.nodeProperties"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchNodeProperties`](#aws-cdk-sdk.batch.BatchNodeProperties)

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchRegisterJobDefinitionRequest.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `retryStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchRegisterJobDefinitionRequest.property.retryStrategy"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchRetryStrategy`](#aws-cdk-sdk.batch.BatchRetryStrategy)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchRegisterJobDefinitionRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchRegisterJobDefinitionRequest.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchJobTimeout`](#aws-cdk-sdk.batch.BatchJobTimeout)

---

### BatchRegisterJobDefinitionResponse <a name="aws-cdk-sdk.batch.BatchRegisterJobDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchRegisterJobDefinitionResponse: batch.BatchRegisterJobDefinitionResponse = { ... }
```

##### `jobDefinitionArn`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchRegisterJobDefinitionResponse.property.jobDefinitionArn"></a>

- *Type:* `string`

---

##### `jobDefinitionName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchRegisterJobDefinitionResponse.property.jobDefinitionName"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchRegisterJobDefinitionResponse.property.revision"></a>

- *Type:* `number`

---

### BatchResourceRequirement <a name="aws-cdk-sdk.batch.BatchResourceRequirement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchResourceRequirement: batch.BatchResourceRequirement = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResourceRequirement.property.type"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResourceRequirement.property.value"></a>

- *Type:* `string`

---

### BatchRetryStrategy <a name="aws-cdk-sdk.batch.BatchRetryStrategy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchRetryStrategy: batch.BatchRetryStrategy = { ... }
```

##### `attempts`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchRetryStrategy.property.attempts"></a>

- *Type:* `number`

---

##### `evaluateOnExit`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchRetryStrategy.property.evaluateOnExit"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchEvaluateOnExit`](#aws-cdk-sdk.batch.BatchEvaluateOnExit)[]

---

### BatchSecret <a name="aws-cdk-sdk.batch.BatchSecret"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchSecret: batch.BatchSecret = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchSecret.property.name"></a>

- *Type:* `string`

---

##### `valueFrom`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchSecret.property.valueFrom"></a>

- *Type:* `string`

---

### BatchSubmitJobRequest <a name="aws-cdk-sdk.batch.BatchSubmitJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchSubmitJobRequest: batch.BatchSubmitJobRequest = { ... }
```

##### `jobDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchSubmitJobRequest.property.jobDefinition"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchSubmitJobRequest.property.jobName"></a>

- *Type:* `string`

---

##### `jobQueue`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchSubmitJobRequest.property.jobQueue"></a>

- *Type:* `string`

---

##### `arrayProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchSubmitJobRequest.property.arrayProperties"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchArrayProperties`](#aws-cdk-sdk.batch.BatchArrayProperties)

---

##### `containerOverrides`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchSubmitJobRequest.property.containerOverrides"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchContainerOverrides`](#aws-cdk-sdk.batch.BatchContainerOverrides)

---

##### `dependsOn`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchSubmitJobRequest.property.dependsOn"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchJobDependency`](#aws-cdk-sdk.batch.BatchJobDependency)[]

---

##### `nodeOverrides`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchSubmitJobRequest.property.nodeOverrides"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchNodeOverrides`](#aws-cdk-sdk.batch.BatchNodeOverrides)

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchSubmitJobRequest.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `retryStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchSubmitJobRequest.property.retryStrategy"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchRetryStrategy`](#aws-cdk-sdk.batch.BatchRetryStrategy)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchSubmitJobRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchSubmitJobRequest.property.timeout"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchJobTimeout`](#aws-cdk-sdk.batch.BatchJobTimeout)

---

### BatchSubmitJobResponse <a name="aws-cdk-sdk.batch.BatchSubmitJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchSubmitJobResponse: batch.BatchSubmitJobResponse = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchSubmitJobResponse.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchSubmitJobResponse.property.jobName"></a>

- *Type:* `string`

---

##### `jobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchSubmitJobResponse.property.jobArn"></a>

- *Type:* `string`

---

### BatchTagResourceRequest <a name="aws-cdk-sdk.batch.BatchTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchTagResourceRequest: batch.BatchTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### BatchTagResourceResponse <a name="aws-cdk-sdk.batch.BatchTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchTagResourceResponse: batch.BatchTagResourceResponse = { ... }
```

### BatchTerminateJobRequest <a name="aws-cdk-sdk.batch.BatchTerminateJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchTerminateJobRequest: batch.BatchTerminateJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchTerminateJobRequest.property.jobId"></a>

- *Type:* `string`

---

##### `reason`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchTerminateJobRequest.property.reason"></a>

- *Type:* `string`

---

### BatchTerminateJobResponse <a name="aws-cdk-sdk.batch.BatchTerminateJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchTerminateJobResponse: batch.BatchTerminateJobResponse = { ... }
```

### BatchTmpfs <a name="aws-cdk-sdk.batch.BatchTmpfs"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchTmpfs: batch.BatchTmpfs = { ... }
```

##### `containerPath`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchTmpfs.property.containerPath"></a>

- *Type:* `string`

---

##### `size`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchTmpfs.property.size"></a>

- *Type:* `number`

---

##### `mountOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchTmpfs.property.mountOptions"></a>

- *Type:* `string`[]

---

### BatchUlimit <a name="aws-cdk-sdk.batch.BatchUlimit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchUlimit: batch.BatchUlimit = { ... }
```

##### `hardLimit`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchUlimit.property.hardLimit"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchUlimit.property.name"></a>

- *Type:* `string`

---

##### `softLimit`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchUlimit.property.softLimit"></a>

- *Type:* `number`

---

### BatchUntagResourceRequest <a name="aws-cdk-sdk.batch.BatchUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchUntagResourceRequest: batch.BatchUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### BatchUntagResourceResponse <a name="aws-cdk-sdk.batch.BatchUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchUntagResourceResponse: batch.BatchUntagResourceResponse = { ... }
```

### BatchUpdateComputeEnvironmentRequest <a name="aws-cdk-sdk.batch.BatchUpdateComputeEnvironmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchUpdateComputeEnvironmentRequest: batch.BatchUpdateComputeEnvironmentRequest = { ... }
```

##### `computeEnvironment`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchUpdateComputeEnvironmentRequest.property.computeEnvironment"></a>

- *Type:* `string`

---

##### `computeResources`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchUpdateComputeEnvironmentRequest.property.computeResources"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchComputeResourceUpdate`](#aws-cdk-sdk.batch.BatchComputeResourceUpdate)

---

##### `serviceRole`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchUpdateComputeEnvironmentRequest.property.serviceRole"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchUpdateComputeEnvironmentRequest.property.state"></a>

- *Type:* `string`

---

### BatchUpdateComputeEnvironmentResponse <a name="aws-cdk-sdk.batch.BatchUpdateComputeEnvironmentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchUpdateComputeEnvironmentResponse: batch.BatchUpdateComputeEnvironmentResponse = { ... }
```

##### `computeEnvironmentArn`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchUpdateComputeEnvironmentResponse.property.computeEnvironmentArn"></a>

- *Type:* `string`

---

##### `computeEnvironmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchUpdateComputeEnvironmentResponse.property.computeEnvironmentName"></a>

- *Type:* `string`

---

### BatchUpdateJobQueueRequest <a name="aws-cdk-sdk.batch.BatchUpdateJobQueueRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchUpdateJobQueueRequest: batch.BatchUpdateJobQueueRequest = { ... }
```

##### `jobQueue`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchUpdateJobQueueRequest.property.jobQueue"></a>

- *Type:* `string`

---

##### `computeEnvironmentOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchUpdateJobQueueRequest.property.computeEnvironmentOrder"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchComputeEnvironmentOrder`](#aws-cdk-sdk.batch.BatchComputeEnvironmentOrder)[]

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchUpdateJobQueueRequest.property.priority"></a>

- *Type:* `number`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchUpdateJobQueueRequest.property.state"></a>

- *Type:* `string`

---

### BatchUpdateJobQueueResponse <a name="aws-cdk-sdk.batch.BatchUpdateJobQueueResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchUpdateJobQueueResponse: batch.BatchUpdateJobQueueResponse = { ... }
```

##### `jobQueueArn`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchUpdateJobQueueResponse.property.jobQueueArn"></a>

- *Type:* `string`

---

##### `jobQueueName`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchUpdateJobQueueResponse.property.jobQueueName"></a>

- *Type:* `string`

---

### BatchVolume <a name="aws-cdk-sdk.batch.BatchVolume"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

const batchVolume: batch.BatchVolume = { ... }
```

##### `host`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchVolume.property.host"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchHost`](#aws-cdk-sdk.batch.BatchHost)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.batch.BatchVolume.property.name"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### BatchResponsesCreateComputeEnvironment <a name="aws-cdk-sdk.batch.BatchResponsesCreateComputeEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.batch.BatchResponsesCreateComputeEnvironment.Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

new batch.BatchResponsesCreateComputeEnvironment(__scope: Construct, __resources: string[], __input: BatchCreateComputeEnvironmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesCreateComputeEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesCreateComputeEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesCreateComputeEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchCreateComputeEnvironmentRequest`](#aws-cdk-sdk.batch.BatchCreateComputeEnvironmentRequest)

---



#### Properties <a name="Properties"></a>

##### `computeEnvironmentArn`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesCreateComputeEnvironment.property.computeEnvironmentArn"></a>

- *Type:* `string`

---

##### `computeEnvironmentName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesCreateComputeEnvironment.property.computeEnvironmentName"></a>

- *Type:* `string`

---


### BatchResponsesCreateJobQueue <a name="aws-cdk-sdk.batch.BatchResponsesCreateJobQueue"></a>

#### Initializer <a name="aws-cdk-sdk.batch.BatchResponsesCreateJobQueue.Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

new batch.BatchResponsesCreateJobQueue(__scope: Construct, __resources: string[], __input: BatchCreateJobQueueRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesCreateJobQueue.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesCreateJobQueue.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesCreateJobQueue.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchCreateJobQueueRequest`](#aws-cdk-sdk.batch.BatchCreateJobQueueRequest)

---



#### Properties <a name="Properties"></a>

##### `jobQueueArn`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesCreateJobQueue.property.jobQueueArn"></a>

- *Type:* `string`

---

##### `jobQueueName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesCreateJobQueue.property.jobQueueName"></a>

- *Type:* `string`

---


### BatchResponsesDescribeComputeEnvironments <a name="aws-cdk-sdk.batch.BatchResponsesDescribeComputeEnvironments"></a>

#### Initializer <a name="aws-cdk-sdk.batch.BatchResponsesDescribeComputeEnvironments.Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

new batch.BatchResponsesDescribeComputeEnvironments(__scope: Construct, __resources: string[], __input: BatchDescribeComputeEnvironmentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeComputeEnvironments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeComputeEnvironments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeComputeEnvironments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchDescribeComputeEnvironmentsRequest`](#aws-cdk-sdk.batch.BatchDescribeComputeEnvironmentsRequest)

---



#### Properties <a name="Properties"></a>

##### `computeEnvironments`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeComputeEnvironments.property.computeEnvironments"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchComputeEnvironmentDetail`](#aws-cdk-sdk.batch.BatchComputeEnvironmentDetail)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeComputeEnvironments.property.nextToken"></a>

- *Type:* `string`

---


### BatchResponsesDescribeJobDefinitions <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobDefinitions"></a>

#### Initializer <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobDefinitions.Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

new batch.BatchResponsesDescribeJobDefinitions(__scope: Construct, __resources: string[], __input: BatchDescribeJobDefinitionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobDefinitions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobDefinitions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobDefinitions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchDescribeJobDefinitionsRequest`](#aws-cdk-sdk.batch.BatchDescribeJobDefinitionsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobDefinitions.property.jobDefinitions"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchJobDefinition`](#aws-cdk-sdk.batch.BatchJobDefinition)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobDefinitions.property.nextToken"></a>

- *Type:* `string`

---


### BatchResponsesDescribeJobQueues <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobQueues"></a>

#### Initializer <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobQueues.Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

new batch.BatchResponsesDescribeJobQueues(__scope: Construct, __resources: string[], __input: BatchDescribeJobQueuesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobQueues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobQueues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobQueues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchDescribeJobQueuesRequest`](#aws-cdk-sdk.batch.BatchDescribeJobQueuesRequest)

---



#### Properties <a name="Properties"></a>

##### `jobQueues`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobQueues.property.jobQueues"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchJobQueueDetail`](#aws-cdk-sdk.batch.BatchJobQueueDetail)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobQueues.property.nextToken"></a>

- *Type:* `string`

---


### BatchResponsesDescribeJobs <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobs"></a>

#### Initializer <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobs.Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

new batch.BatchResponsesDescribeJobs(__scope: Construct, __resources: string[], __input: BatchDescribeJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchDescribeJobsRequest`](#aws-cdk-sdk.batch.BatchDescribeJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesDescribeJobs.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchJobDetail`](#aws-cdk-sdk.batch.BatchJobDetail)[]

---


### BatchResponsesListJobs <a name="aws-cdk-sdk.batch.BatchResponsesListJobs"></a>

#### Initializer <a name="aws-cdk-sdk.batch.BatchResponsesListJobs.Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

new batch.BatchResponsesListJobs(__scope: Construct, __resources: string[], __input: BatchListJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesListJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesListJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesListJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchListJobsRequest`](#aws-cdk-sdk.batch.BatchListJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesListJobs.property.jobSummaryList"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchJobSummary`](#aws-cdk-sdk.batch.BatchJobSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesListJobs.property.nextToken"></a>

- *Type:* `string`

---


### BatchResponsesListTagsForResource <a name="aws-cdk-sdk.batch.BatchResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.batch.BatchResponsesListTagsForResource.Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

new batch.BatchResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: BatchListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchListTagsForResourceRequest`](#aws-cdk-sdk.batch.BatchListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### BatchResponsesRegisterJobDefinition <a name="aws-cdk-sdk.batch.BatchResponsesRegisterJobDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.batch.BatchResponsesRegisterJobDefinition.Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

new batch.BatchResponsesRegisterJobDefinition(__scope: Construct, __resources: string[], __input: BatchRegisterJobDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesRegisterJobDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesRegisterJobDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesRegisterJobDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchRegisterJobDefinitionRequest`](#aws-cdk-sdk.batch.BatchRegisterJobDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `jobDefinitionArn`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesRegisterJobDefinition.property.jobDefinitionArn"></a>

- *Type:* `string`

---

##### `jobDefinitionName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesRegisterJobDefinition.property.jobDefinitionName"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesRegisterJobDefinition.property.revision"></a>

- *Type:* `number`

---


### BatchResponsesSubmitJob <a name="aws-cdk-sdk.batch.BatchResponsesSubmitJob"></a>

#### Initializer <a name="aws-cdk-sdk.batch.BatchResponsesSubmitJob.Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

new batch.BatchResponsesSubmitJob(__scope: Construct, __resources: string[], __input: BatchSubmitJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesSubmitJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesSubmitJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesSubmitJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchSubmitJobRequest`](#aws-cdk-sdk.batch.BatchSubmitJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobArn`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesSubmitJob.property.jobArn"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesSubmitJob.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesSubmitJob.property.jobName"></a>

- *Type:* `string`

---


### BatchResponsesUpdateComputeEnvironment <a name="aws-cdk-sdk.batch.BatchResponsesUpdateComputeEnvironment"></a>

#### Initializer <a name="aws-cdk-sdk.batch.BatchResponsesUpdateComputeEnvironment.Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

new batch.BatchResponsesUpdateComputeEnvironment(__scope: Construct, __resources: string[], __input: BatchUpdateComputeEnvironmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesUpdateComputeEnvironment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesUpdateComputeEnvironment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesUpdateComputeEnvironment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchUpdateComputeEnvironmentRequest`](#aws-cdk-sdk.batch.BatchUpdateComputeEnvironmentRequest)

---



#### Properties <a name="Properties"></a>

##### `computeEnvironmentArn`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesUpdateComputeEnvironment.property.computeEnvironmentArn"></a>

- *Type:* `string`

---

##### `computeEnvironmentName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesUpdateComputeEnvironment.property.computeEnvironmentName"></a>

- *Type:* `string`

---


### BatchResponsesUpdateJobQueue <a name="aws-cdk-sdk.batch.BatchResponsesUpdateJobQueue"></a>

#### Initializer <a name="aws-cdk-sdk.batch.BatchResponsesUpdateJobQueue.Initializer"></a>

```typescript
import { batch } from 'aws-cdk-sdk'

new batch.BatchResponsesUpdateJobQueue(__scope: Construct, __resources: string[], __input: BatchUpdateJobQueueRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesUpdateJobQueue.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesUpdateJobQueue.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesUpdateJobQueue.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.batch.BatchUpdateJobQueueRequest`](#aws-cdk-sdk.batch.BatchUpdateJobQueueRequest)

---



#### Properties <a name="Properties"></a>

##### `jobQueueArn`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesUpdateJobQueue.property.jobQueueArn"></a>

- *Type:* `string`

---

##### `jobQueueName`<sup>Required</sup> <a name="aws-cdk-sdk.batch.BatchResponsesUpdateJobQueue.property.jobQueueName"></a>

- *Type:* `string`

---



