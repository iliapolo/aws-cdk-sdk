# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DataSyncClient <a name="aws-cdk-sdk.datasync.DataSyncClient"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncClient.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `cancelTaskExecution` <a name="aws-cdk-sdk.datasync.DataSyncClient.cancelTaskExecution"></a>

```typescript
public cancelTaskExecution(input: DataSyncCancelTaskExecutionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncCancelTaskExecutionRequest`](#aws-cdk-sdk.datasync.DataSyncCancelTaskExecutionRequest)

---

##### `createAgent` <a name="aws-cdk-sdk.datasync.DataSyncClient.createAgent"></a>

```typescript
public createAgent(input: DataSyncCreateAgentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncCreateAgentRequest`](#aws-cdk-sdk.datasync.DataSyncCreateAgentRequest)

---

##### `createLocationEfs` <a name="aws-cdk-sdk.datasync.DataSyncClient.createLocationEfs"></a>

```typescript
public createLocationEfs(input: DataSyncCreateLocationEfsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncCreateLocationEfsRequest`](#aws-cdk-sdk.datasync.DataSyncCreateLocationEfsRequest)

---

##### `createLocationFsxWindows` <a name="aws-cdk-sdk.datasync.DataSyncClient.createLocationFsxWindows"></a>

```typescript
public createLocationFsxWindows(input: DataSyncCreateLocationFsxWindowsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncCreateLocationFsxWindowsRequest`](#aws-cdk-sdk.datasync.DataSyncCreateLocationFsxWindowsRequest)

---

##### `createLocationNfs` <a name="aws-cdk-sdk.datasync.DataSyncClient.createLocationNfs"></a>

```typescript
public createLocationNfs(input: DataSyncCreateLocationNfsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncCreateLocationNfsRequest`](#aws-cdk-sdk.datasync.DataSyncCreateLocationNfsRequest)

---

##### `createLocationObjectStorage` <a name="aws-cdk-sdk.datasync.DataSyncClient.createLocationObjectStorage"></a>

```typescript
public createLocationObjectStorage(input: DataSyncCreateLocationObjectStorageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncCreateLocationObjectStorageRequest`](#aws-cdk-sdk.datasync.DataSyncCreateLocationObjectStorageRequest)

---

##### `createLocationS3` <a name="aws-cdk-sdk.datasync.DataSyncClient.createLocationS3"></a>

```typescript
public createLocationS3(input: DataSyncCreateLocationS3Request)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncCreateLocationS3Request`](#aws-cdk-sdk.datasync.DataSyncCreateLocationS3Request)

---

##### `createLocationSmb` <a name="aws-cdk-sdk.datasync.DataSyncClient.createLocationSmb"></a>

```typescript
public createLocationSmb(input: DataSyncCreateLocationSmbRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncCreateLocationSmbRequest`](#aws-cdk-sdk.datasync.DataSyncCreateLocationSmbRequest)

---

##### `createTask` <a name="aws-cdk-sdk.datasync.DataSyncClient.createTask"></a>

```typescript
public createTask(input: DataSyncCreateTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncCreateTaskRequest`](#aws-cdk-sdk.datasync.DataSyncCreateTaskRequest)

---

##### `deleteAgent` <a name="aws-cdk-sdk.datasync.DataSyncClient.deleteAgent"></a>

```typescript
public deleteAgent(input: DataSyncDeleteAgentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDeleteAgentRequest`](#aws-cdk-sdk.datasync.DataSyncDeleteAgentRequest)

---

##### `deleteLocation` <a name="aws-cdk-sdk.datasync.DataSyncClient.deleteLocation"></a>

```typescript
public deleteLocation(input: DataSyncDeleteLocationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDeleteLocationRequest`](#aws-cdk-sdk.datasync.DataSyncDeleteLocationRequest)

---

##### `deleteTask` <a name="aws-cdk-sdk.datasync.DataSyncClient.deleteTask"></a>

```typescript
public deleteTask(input: DataSyncDeleteTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDeleteTaskRequest`](#aws-cdk-sdk.datasync.DataSyncDeleteTaskRequest)

---

##### `describeAgent` <a name="aws-cdk-sdk.datasync.DataSyncClient.describeAgent"></a>

```typescript
public describeAgent(input: DataSyncDescribeAgentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeAgentRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeAgentRequest)

---

##### `describeLocationEfs` <a name="aws-cdk-sdk.datasync.DataSyncClient.describeLocationEfs"></a>

```typescript
public describeLocationEfs(input: DataSyncDescribeLocationEfsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeLocationEfsRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeLocationEfsRequest)

---

##### `describeLocationFsxWindows` <a name="aws-cdk-sdk.datasync.DataSyncClient.describeLocationFsxWindows"></a>

```typescript
public describeLocationFsxWindows(input: DataSyncDescribeLocationFsxWindowsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeLocationFsxWindowsRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeLocationFsxWindowsRequest)

---

##### `describeLocationNfs` <a name="aws-cdk-sdk.datasync.DataSyncClient.describeLocationNfs"></a>

```typescript
public describeLocationNfs(input: DataSyncDescribeLocationNfsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeLocationNfsRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeLocationNfsRequest)

---

##### `describeLocationObjectStorage` <a name="aws-cdk-sdk.datasync.DataSyncClient.describeLocationObjectStorage"></a>

```typescript
public describeLocationObjectStorage(input: DataSyncDescribeLocationObjectStorageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeLocationObjectStorageRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeLocationObjectStorageRequest)

---

##### `describeLocationS3` <a name="aws-cdk-sdk.datasync.DataSyncClient.describeLocationS3"></a>

```typescript
public describeLocationS3(input: DataSyncDescribeLocationS3Request)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeLocationS3Request`](#aws-cdk-sdk.datasync.DataSyncDescribeLocationS3Request)

---

##### `describeLocationSmb` <a name="aws-cdk-sdk.datasync.DataSyncClient.describeLocationSmb"></a>

```typescript
public describeLocationSmb(input: DataSyncDescribeLocationSmbRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeLocationSmbRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeLocationSmbRequest)

---

##### `describeTask` <a name="aws-cdk-sdk.datasync.DataSyncClient.describeTask"></a>

```typescript
public describeTask(input: DataSyncDescribeTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeTaskRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeTaskRequest)

---

##### `describeTaskExecution` <a name="aws-cdk-sdk.datasync.DataSyncClient.describeTaskExecution"></a>

```typescript
public describeTaskExecution(input: DataSyncDescribeTaskExecutionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionRequest)

---

##### `listAgents` <a name="aws-cdk-sdk.datasync.DataSyncClient.listAgents"></a>

```typescript
public listAgents(input: DataSyncListAgentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncListAgentsRequest`](#aws-cdk-sdk.datasync.DataSyncListAgentsRequest)

---

##### `listLocations` <a name="aws-cdk-sdk.datasync.DataSyncClient.listLocations"></a>

```typescript
public listLocations(input: DataSyncListLocationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncListLocationsRequest`](#aws-cdk-sdk.datasync.DataSyncListLocationsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.datasync.DataSyncClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: DataSyncListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncListTagsForResourceRequest`](#aws-cdk-sdk.datasync.DataSyncListTagsForResourceRequest)

---

##### `listTaskExecutions` <a name="aws-cdk-sdk.datasync.DataSyncClient.listTaskExecutions"></a>

```typescript
public listTaskExecutions(input: DataSyncListTaskExecutionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncListTaskExecutionsRequest`](#aws-cdk-sdk.datasync.DataSyncListTaskExecutionsRequest)

---

##### `listTasks` <a name="aws-cdk-sdk.datasync.DataSyncClient.listTasks"></a>

```typescript
public listTasks(input: DataSyncListTasksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncListTasksRequest`](#aws-cdk-sdk.datasync.DataSyncListTasksRequest)

---

##### `startTaskExecution` <a name="aws-cdk-sdk.datasync.DataSyncClient.startTaskExecution"></a>

```typescript
public startTaskExecution(input: DataSyncStartTaskExecutionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncStartTaskExecutionRequest`](#aws-cdk-sdk.datasync.DataSyncStartTaskExecutionRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.datasync.DataSyncClient.tagResource"></a>

```typescript
public tagResource(input: DataSyncTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTagResourceRequest`](#aws-cdk-sdk.datasync.DataSyncTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.datasync.DataSyncClient.untagResource"></a>

```typescript
public untagResource(input: DataSyncUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncUntagResourceRequest`](#aws-cdk-sdk.datasync.DataSyncUntagResourceRequest)

---

##### `updateAgent` <a name="aws-cdk-sdk.datasync.DataSyncClient.updateAgent"></a>

```typescript
public updateAgent(input: DataSyncUpdateAgentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncUpdateAgentRequest`](#aws-cdk-sdk.datasync.DataSyncUpdateAgentRequest)

---

##### `updateTask` <a name="aws-cdk-sdk.datasync.DataSyncClient.updateTask"></a>

```typescript
public updateTask(input: DataSyncUpdateTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncUpdateTaskRequest`](#aws-cdk-sdk.datasync.DataSyncUpdateTaskRequest)

---

##### `updateTaskExecution` <a name="aws-cdk-sdk.datasync.DataSyncClient.updateTaskExecution"></a>

```typescript
public updateTaskExecution(input: DataSyncUpdateTaskExecutionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncUpdateTaskExecutionRequest`](#aws-cdk-sdk.datasync.DataSyncUpdateTaskExecutionRequest)

---




## Structs <a name="Structs"></a>

### DataSyncAgentListEntry <a name="aws-cdk-sdk.datasync.DataSyncAgentListEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncAgentListEntry: datasync.DataSyncAgentListEntry = { ... }
```

##### `agentArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncAgentListEntry.property.agentArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncAgentListEntry.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncAgentListEntry.property.status"></a>

- *Type:* `string`

---

### DataSyncCancelTaskExecutionRequest <a name="aws-cdk-sdk.datasync.DataSyncCancelTaskExecutionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCancelTaskExecutionRequest: datasync.DataSyncCancelTaskExecutionRequest = { ... }
```

##### `taskExecutionArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCancelTaskExecutionRequest.property.taskExecutionArn"></a>

- *Type:* `string`

---

### DataSyncCancelTaskExecutionResponse <a name="aws-cdk-sdk.datasync.DataSyncCancelTaskExecutionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCancelTaskExecutionResponse: datasync.DataSyncCancelTaskExecutionResponse = { ... }
```

### DataSyncCreateAgentRequest <a name="aws-cdk-sdk.datasync.DataSyncCreateAgentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCreateAgentRequest: datasync.DataSyncCreateAgentRequest = { ... }
```

##### `activationKey`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateAgentRequest.property.activationKey"></a>

- *Type:* `string`

---

##### `agentName`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateAgentRequest.property.agentName"></a>

- *Type:* `string`

---

##### `securityGroupArns`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateAgentRequest.property.securityGroupArns"></a>

- *Type:* `string`[]

---

##### `subnetArns`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateAgentRequest.property.subnetArns"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateAgentRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTagListEntry`](#aws-cdk-sdk.datasync.DataSyncTagListEntry)[]

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateAgentRequest.property.vpcEndpointId"></a>

- *Type:* `string`

---

### DataSyncCreateAgentResponse <a name="aws-cdk-sdk.datasync.DataSyncCreateAgentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCreateAgentResponse: datasync.DataSyncCreateAgentResponse = { ... }
```

##### `agentArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateAgentResponse.property.agentArn"></a>

- *Type:* `string`

---

### DataSyncCreateLocationEfsRequest <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationEfsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCreateLocationEfsRequest: datasync.DataSyncCreateLocationEfsRequest = { ... }
```

##### `ec2Config`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationEfsRequest.property.ec2Config"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncEc2Config`](#aws-cdk-sdk.datasync.DataSyncEc2Config)

---

##### `efsFilesystemArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationEfsRequest.property.efsFilesystemArn"></a>

- *Type:* `string`

---

##### `subdirectory`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationEfsRequest.property.subdirectory"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationEfsRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTagListEntry`](#aws-cdk-sdk.datasync.DataSyncTagListEntry)[]

---

### DataSyncCreateLocationEfsResponse <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationEfsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCreateLocationEfsResponse: datasync.DataSyncCreateLocationEfsResponse = { ... }
```

##### `locationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationEfsResponse.property.locationArn"></a>

- *Type:* `string`

---

### DataSyncCreateLocationFsxWindowsRequest <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationFsxWindowsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCreateLocationFsxWindowsRequest: datasync.DataSyncCreateLocationFsxWindowsRequest = { ... }
```

##### `fsxFilesystemArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationFsxWindowsRequest.property.fsxFilesystemArn"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationFsxWindowsRequest.property.password"></a>

- *Type:* `string`

---

##### `securityGroupArns`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationFsxWindowsRequest.property.securityGroupArns"></a>

- *Type:* `string`[]

---

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationFsxWindowsRequest.property.user"></a>

- *Type:* `string`

---

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationFsxWindowsRequest.property.domain"></a>

- *Type:* `string`

---

##### `subdirectory`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationFsxWindowsRequest.property.subdirectory"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationFsxWindowsRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTagListEntry`](#aws-cdk-sdk.datasync.DataSyncTagListEntry)[]

---

### DataSyncCreateLocationFsxWindowsResponse <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationFsxWindowsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCreateLocationFsxWindowsResponse: datasync.DataSyncCreateLocationFsxWindowsResponse = { ... }
```

##### `locationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationFsxWindowsResponse.property.locationArn"></a>

- *Type:* `string`

---

### DataSyncCreateLocationNfsRequest <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationNfsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCreateLocationNfsRequest: datasync.DataSyncCreateLocationNfsRequest = { ... }
```

##### `onPremConfig`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationNfsRequest.property.onPremConfig"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncOnPremConfig`](#aws-cdk-sdk.datasync.DataSyncOnPremConfig)

---

##### `serverHostname`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationNfsRequest.property.serverHostname"></a>

- *Type:* `string`

---

##### `subdirectory`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationNfsRequest.property.subdirectory"></a>

- *Type:* `string`

---

##### `mountOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationNfsRequest.property.mountOptions"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncNfsMountOptions`](#aws-cdk-sdk.datasync.DataSyncNfsMountOptions)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationNfsRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTagListEntry`](#aws-cdk-sdk.datasync.DataSyncTagListEntry)[]

---

### DataSyncCreateLocationNfsResponse <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationNfsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCreateLocationNfsResponse: datasync.DataSyncCreateLocationNfsResponse = { ... }
```

##### `locationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationNfsResponse.property.locationArn"></a>

- *Type:* `string`

---

### DataSyncCreateLocationObjectStorageRequest <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationObjectStorageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCreateLocationObjectStorageRequest: datasync.DataSyncCreateLocationObjectStorageRequest = { ... }
```

##### `agentArns`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationObjectStorageRequest.property.agentArns"></a>

- *Type:* `string`[]

---

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationObjectStorageRequest.property.bucketName"></a>

- *Type:* `string`

---

##### `serverHostname`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationObjectStorageRequest.property.serverHostname"></a>

- *Type:* `string`

---

##### `accessKey`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationObjectStorageRequest.property.accessKey"></a>

- *Type:* `string`

---

##### `secretKey`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationObjectStorageRequest.property.secretKey"></a>

- *Type:* `string`

---

##### `serverPort`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationObjectStorageRequest.property.serverPort"></a>

- *Type:* `number`

---

##### `serverProtocol`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationObjectStorageRequest.property.serverProtocol"></a>

- *Type:* `string`

---

##### `subdirectory`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationObjectStorageRequest.property.subdirectory"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationObjectStorageRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTagListEntry`](#aws-cdk-sdk.datasync.DataSyncTagListEntry)[]

---

### DataSyncCreateLocationObjectStorageResponse <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationObjectStorageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCreateLocationObjectStorageResponse: datasync.DataSyncCreateLocationObjectStorageResponse = { ... }
```

##### `locationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationObjectStorageResponse.property.locationArn"></a>

- *Type:* `string`

---

### DataSyncCreateLocationS3Request <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationS3Request"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCreateLocationS3Request: datasync.DataSyncCreateLocationS3Request = { ... }
```

##### `s3BucketArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationS3Request.property.s3BucketArn"></a>

- *Type:* `string`

---

##### `s3Config`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationS3Request.property.s3Config"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncS3Config`](#aws-cdk-sdk.datasync.DataSyncS3Config)

---

##### `agentArns`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationS3Request.property.agentArns"></a>

- *Type:* `string`[]

---

##### `s3StorageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationS3Request.property.s3StorageClass"></a>

- *Type:* `string`

---

##### `subdirectory`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationS3Request.property.subdirectory"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationS3Request.property.tags"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTagListEntry`](#aws-cdk-sdk.datasync.DataSyncTagListEntry)[]

---

### DataSyncCreateLocationS3Response <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationS3Response"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCreateLocationS3Response: datasync.DataSyncCreateLocationS3Response = { ... }
```

##### `locationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationS3Response.property.locationArn"></a>

- *Type:* `string`

---

### DataSyncCreateLocationSmbRequest <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationSmbRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCreateLocationSmbRequest: datasync.DataSyncCreateLocationSmbRequest = { ... }
```

##### `agentArns`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationSmbRequest.property.agentArns"></a>

- *Type:* `string`[]

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationSmbRequest.property.password"></a>

- *Type:* `string`

---

##### `serverHostname`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationSmbRequest.property.serverHostname"></a>

- *Type:* `string`

---

##### `subdirectory`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationSmbRequest.property.subdirectory"></a>

- *Type:* `string`

---

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationSmbRequest.property.user"></a>

- *Type:* `string`

---

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationSmbRequest.property.domain"></a>

- *Type:* `string`

---

##### `mountOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationSmbRequest.property.mountOptions"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncSmbMountOptions`](#aws-cdk-sdk.datasync.DataSyncSmbMountOptions)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationSmbRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTagListEntry`](#aws-cdk-sdk.datasync.DataSyncTagListEntry)[]

---

### DataSyncCreateLocationSmbResponse <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationSmbResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCreateLocationSmbResponse: datasync.DataSyncCreateLocationSmbResponse = { ... }
```

##### `locationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateLocationSmbResponse.property.locationArn"></a>

- *Type:* `string`

---

### DataSyncCreateTaskRequest <a name="aws-cdk-sdk.datasync.DataSyncCreateTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCreateTaskRequest: datasync.DataSyncCreateTaskRequest = { ... }
```

##### `destinationLocationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateTaskRequest.property.destinationLocationArn"></a>

- *Type:* `string`

---

##### `sourceLocationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateTaskRequest.property.sourceLocationArn"></a>

- *Type:* `string`

---

##### `cloudWatchLogGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateTaskRequest.property.cloudWatchLogGroupArn"></a>

- *Type:* `string`

---

##### `excludes`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateTaskRequest.property.excludes"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncFilterRule`](#aws-cdk-sdk.datasync.DataSyncFilterRule)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateTaskRequest.property.name"></a>

- *Type:* `string`

---

##### `options`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateTaskRequest.property.options"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncOptions`](#aws-cdk-sdk.datasync.DataSyncOptions)

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateTaskRequest.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTaskSchedule`](#aws-cdk-sdk.datasync.DataSyncTaskSchedule)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateTaskRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTagListEntry`](#aws-cdk-sdk.datasync.DataSyncTagListEntry)[]

---

### DataSyncCreateTaskResponse <a name="aws-cdk-sdk.datasync.DataSyncCreateTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncCreateTaskResponse: datasync.DataSyncCreateTaskResponse = { ... }
```

##### `taskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncCreateTaskResponse.property.taskArn"></a>

- *Type:* `string`

---

### DataSyncDeleteAgentRequest <a name="aws-cdk-sdk.datasync.DataSyncDeleteAgentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDeleteAgentRequest: datasync.DataSyncDeleteAgentRequest = { ... }
```

##### `agentArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncDeleteAgentRequest.property.agentArn"></a>

- *Type:* `string`

---

### DataSyncDeleteAgentResponse <a name="aws-cdk-sdk.datasync.DataSyncDeleteAgentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDeleteAgentResponse: datasync.DataSyncDeleteAgentResponse = { ... }
```

### DataSyncDeleteLocationRequest <a name="aws-cdk-sdk.datasync.DataSyncDeleteLocationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDeleteLocationRequest: datasync.DataSyncDeleteLocationRequest = { ... }
```

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncDeleteLocationRequest.property.locationArn"></a>

- *Type:* `string`

---

### DataSyncDeleteLocationResponse <a name="aws-cdk-sdk.datasync.DataSyncDeleteLocationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDeleteLocationResponse: datasync.DataSyncDeleteLocationResponse = { ... }
```

### DataSyncDeleteTaskRequest <a name="aws-cdk-sdk.datasync.DataSyncDeleteTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDeleteTaskRequest: datasync.DataSyncDeleteTaskRequest = { ... }
```

##### `taskArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncDeleteTaskRequest.property.taskArn"></a>

- *Type:* `string`

---

### DataSyncDeleteTaskResponse <a name="aws-cdk-sdk.datasync.DataSyncDeleteTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDeleteTaskResponse: datasync.DataSyncDeleteTaskResponse = { ... }
```

### DataSyncDescribeAgentRequest <a name="aws-cdk-sdk.datasync.DataSyncDescribeAgentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeAgentRequest: datasync.DataSyncDescribeAgentRequest = { ... }
```

##### `agentArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeAgentRequest.property.agentArn"></a>

- *Type:* `string`

---

### DataSyncDescribeAgentResponse <a name="aws-cdk-sdk.datasync.DataSyncDescribeAgentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeAgentResponse: datasync.DataSyncDescribeAgentResponse = { ... }
```

##### `agentArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeAgentResponse.property.agentArn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeAgentResponse.property.creationTime"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeAgentResponse.property.endpointType"></a>

- *Type:* `string`

---

##### `lastConnectionTime`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeAgentResponse.property.lastConnectionTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeAgentResponse.property.name"></a>

- *Type:* `string`

---

##### `privateLinkConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeAgentResponse.property.privateLinkConfig"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncPrivateLinkConfig`](#aws-cdk-sdk.datasync.DataSyncPrivateLinkConfig)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeAgentResponse.property.status"></a>

- *Type:* `string`

---

### DataSyncDescribeLocationEfsRequest <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationEfsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeLocationEfsRequest: datasync.DataSyncDescribeLocationEfsRequest = { ... }
```

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationEfsRequest.property.locationArn"></a>

- *Type:* `string`

---

### DataSyncDescribeLocationEfsResponse <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationEfsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeLocationEfsResponse: datasync.DataSyncDescribeLocationEfsResponse = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationEfsResponse.property.creationTime"></a>

- *Type:* `string`

---

##### `ec2Config`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationEfsResponse.property.ec2Config"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncEc2Config`](#aws-cdk-sdk.datasync.DataSyncEc2Config)

---

##### `locationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationEfsResponse.property.locationArn"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationEfsResponse.property.locationUri"></a>

- *Type:* `string`

---

### DataSyncDescribeLocationFsxWindowsRequest <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationFsxWindowsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeLocationFsxWindowsRequest: datasync.DataSyncDescribeLocationFsxWindowsRequest = { ... }
```

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationFsxWindowsRequest.property.locationArn"></a>

- *Type:* `string`

---

### DataSyncDescribeLocationFsxWindowsResponse <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationFsxWindowsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeLocationFsxWindowsResponse: datasync.DataSyncDescribeLocationFsxWindowsResponse = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationFsxWindowsResponse.property.creationTime"></a>

- *Type:* `string`

---

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationFsxWindowsResponse.property.domain"></a>

- *Type:* `string`

---

##### `locationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationFsxWindowsResponse.property.locationArn"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationFsxWindowsResponse.property.locationUri"></a>

- *Type:* `string`

---

##### `securityGroupArns`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationFsxWindowsResponse.property.securityGroupArns"></a>

- *Type:* `string`[]

---

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationFsxWindowsResponse.property.user"></a>

- *Type:* `string`

---

### DataSyncDescribeLocationNfsRequest <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationNfsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeLocationNfsRequest: datasync.DataSyncDescribeLocationNfsRequest = { ... }
```

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationNfsRequest.property.locationArn"></a>

- *Type:* `string`

---

### DataSyncDescribeLocationNfsResponse <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationNfsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeLocationNfsResponse: datasync.DataSyncDescribeLocationNfsResponse = { ... }
```

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationNfsResponse.property.creationTime"></a>

- *Type:* `string`

---

##### `locationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationNfsResponse.property.locationArn"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationNfsResponse.property.locationUri"></a>

- *Type:* `string`

---

##### `mountOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationNfsResponse.property.mountOptions"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncNfsMountOptions`](#aws-cdk-sdk.datasync.DataSyncNfsMountOptions)

---

##### `onPremConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationNfsResponse.property.onPremConfig"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncOnPremConfig`](#aws-cdk-sdk.datasync.DataSyncOnPremConfig)

---

### DataSyncDescribeLocationObjectStorageRequest <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationObjectStorageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeLocationObjectStorageRequest: datasync.DataSyncDescribeLocationObjectStorageRequest = { ... }
```

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationObjectStorageRequest.property.locationArn"></a>

- *Type:* `string`

---

### DataSyncDescribeLocationObjectStorageResponse <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationObjectStorageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeLocationObjectStorageResponse: datasync.DataSyncDescribeLocationObjectStorageResponse = { ... }
```

##### `accessKey`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationObjectStorageResponse.property.accessKey"></a>

- *Type:* `string`

---

##### `agentArns`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationObjectStorageResponse.property.agentArns"></a>

- *Type:* `string`[]

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationObjectStorageResponse.property.creationTime"></a>

- *Type:* `string`

---

##### `locationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationObjectStorageResponse.property.locationArn"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationObjectStorageResponse.property.locationUri"></a>

- *Type:* `string`

---

##### `serverPort`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationObjectStorageResponse.property.serverPort"></a>

- *Type:* `number`

---

##### `serverProtocol`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationObjectStorageResponse.property.serverProtocol"></a>

- *Type:* `string`

---

### DataSyncDescribeLocationS3Request <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationS3Request"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeLocationS3Request: datasync.DataSyncDescribeLocationS3Request = { ... }
```

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationS3Request.property.locationArn"></a>

- *Type:* `string`

---

### DataSyncDescribeLocationS3Response <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationS3Response"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeLocationS3Response: datasync.DataSyncDescribeLocationS3Response = { ... }
```

##### `agentArns`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationS3Response.property.agentArns"></a>

- *Type:* `string`[]

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationS3Response.property.creationTime"></a>

- *Type:* `string`

---

##### `locationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationS3Response.property.locationArn"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationS3Response.property.locationUri"></a>

- *Type:* `string`

---

##### `s3Config`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationS3Response.property.s3Config"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncS3Config`](#aws-cdk-sdk.datasync.DataSyncS3Config)

---

##### `s3StorageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationS3Response.property.s3StorageClass"></a>

- *Type:* `string`

---

### DataSyncDescribeLocationSmbRequest <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationSmbRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeLocationSmbRequest: datasync.DataSyncDescribeLocationSmbRequest = { ... }
```

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationSmbRequest.property.locationArn"></a>

- *Type:* `string`

---

### DataSyncDescribeLocationSmbResponse <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationSmbResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeLocationSmbResponse: datasync.DataSyncDescribeLocationSmbResponse = { ... }
```

##### `agentArns`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationSmbResponse.property.agentArns"></a>

- *Type:* `string`[]

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationSmbResponse.property.creationTime"></a>

- *Type:* `string`

---

##### `domain`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationSmbResponse.property.domain"></a>

- *Type:* `string`

---

##### `locationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationSmbResponse.property.locationArn"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationSmbResponse.property.locationUri"></a>

- *Type:* `string`

---

##### `mountOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationSmbResponse.property.mountOptions"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncSmbMountOptions`](#aws-cdk-sdk.datasync.DataSyncSmbMountOptions)

---

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeLocationSmbResponse.property.user"></a>

- *Type:* `string`

---

### DataSyncDescribeTaskExecutionRequest <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeTaskExecutionRequest: datasync.DataSyncDescribeTaskExecutionRequest = { ... }
```

##### `taskExecutionArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionRequest.property.taskExecutionArn"></a>

- *Type:* `string`

---

### DataSyncDescribeTaskExecutionResponse <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeTaskExecutionResponse: datasync.DataSyncDescribeTaskExecutionResponse = { ... }
```

##### `bytesTransferred`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionResponse.property.bytesTransferred"></a>

- *Type:* `number`

---

##### `bytesWritten`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionResponse.property.bytesWritten"></a>

- *Type:* `number`

---

##### `estimatedBytesToTransfer`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionResponse.property.estimatedBytesToTransfer"></a>

- *Type:* `number`

---

##### `estimatedFilesToTransfer`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionResponse.property.estimatedFilesToTransfer"></a>

- *Type:* `number`

---

##### `excludes`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionResponse.property.excludes"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncFilterRule`](#aws-cdk-sdk.datasync.DataSyncFilterRule)[]

---

##### `filesTransferred`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionResponse.property.filesTransferred"></a>

- *Type:* `number`

---

##### `includes`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionResponse.property.includes"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncFilterRule`](#aws-cdk-sdk.datasync.DataSyncFilterRule)[]

---

##### `options`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionResponse.property.options"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncOptions`](#aws-cdk-sdk.datasync.DataSyncOptions)

---

##### `result`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionResponse.property.result"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTaskExecutionResultDetail`](#aws-cdk-sdk.datasync.DataSyncTaskExecutionResultDetail)

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionResponse.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionResponse.property.status"></a>

- *Type:* `string`

---

##### `taskExecutionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionResponse.property.taskExecutionArn"></a>

- *Type:* `string`

---

### DataSyncDescribeTaskRequest <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeTaskRequest: datasync.DataSyncDescribeTaskRequest = { ... }
```

##### `taskArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskRequest.property.taskArn"></a>

- *Type:* `string`

---

### DataSyncDescribeTaskResponse <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncDescribeTaskResponse: datasync.DataSyncDescribeTaskResponse = { ... }
```

##### `cloudWatchLogGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskResponse.property.cloudWatchLogGroupArn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskResponse.property.creationTime"></a>

- *Type:* `string`

---

##### `currentTaskExecutionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskResponse.property.currentTaskExecutionArn"></a>

- *Type:* `string`

---

##### `destinationLocationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskResponse.property.destinationLocationArn"></a>

- *Type:* `string`

---

##### `destinationNetworkInterfaceArns`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskResponse.property.destinationNetworkInterfaceArns"></a>

- *Type:* `string`[]

---

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskResponse.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskResponse.property.errorDetail"></a>

- *Type:* `string`

---

##### `excludes`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskResponse.property.excludes"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncFilterRule`](#aws-cdk-sdk.datasync.DataSyncFilterRule)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskResponse.property.name"></a>

- *Type:* `string`

---

##### `options`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskResponse.property.options"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncOptions`](#aws-cdk-sdk.datasync.DataSyncOptions)

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskResponse.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTaskSchedule`](#aws-cdk-sdk.datasync.DataSyncTaskSchedule)

---

##### `sourceLocationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskResponse.property.sourceLocationArn"></a>

- *Type:* `string`

---

##### `sourceNetworkInterfaceArns`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskResponse.property.sourceNetworkInterfaceArns"></a>

- *Type:* `string`[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskResponse.property.status"></a>

- *Type:* `string`

---

##### `taskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncDescribeTaskResponse.property.taskArn"></a>

- *Type:* `string`

---

### DataSyncEc2Config <a name="aws-cdk-sdk.datasync.DataSyncEc2Config"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncEc2Config: datasync.DataSyncEc2Config = { ... }
```

##### `securityGroupArns`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncEc2Config.property.securityGroupArns"></a>

- *Type:* `string`[]

---

##### `subnetArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncEc2Config.property.subnetArn"></a>

- *Type:* `string`

---

### DataSyncFilterRule <a name="aws-cdk-sdk.datasync.DataSyncFilterRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncFilterRule: datasync.DataSyncFilterRule = { ... }
```

##### `filterType`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncFilterRule.property.filterType"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncFilterRule.property.value"></a>

- *Type:* `string`

---

### DataSyncListAgentsRequest <a name="aws-cdk-sdk.datasync.DataSyncListAgentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncListAgentsRequest: datasync.DataSyncListAgentsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListAgentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListAgentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DataSyncListAgentsResponse <a name="aws-cdk-sdk.datasync.DataSyncListAgentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncListAgentsResponse: datasync.DataSyncListAgentsResponse = { ... }
```

##### `agents`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListAgentsResponse.property.agents"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncAgentListEntry`](#aws-cdk-sdk.datasync.DataSyncAgentListEntry)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListAgentsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DataSyncListLocationsRequest <a name="aws-cdk-sdk.datasync.DataSyncListLocationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncListLocationsRequest: datasync.DataSyncListLocationsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListLocationsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncLocationFilter`](#aws-cdk-sdk.datasync.DataSyncLocationFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListLocationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListLocationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DataSyncListLocationsResponse <a name="aws-cdk-sdk.datasync.DataSyncListLocationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncListLocationsResponse: datasync.DataSyncListLocationsResponse = { ... }
```

##### `locations`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListLocationsResponse.property.locations"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncLocationListEntry`](#aws-cdk-sdk.datasync.DataSyncLocationListEntry)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListLocationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DataSyncListTagsForResourceRequest <a name="aws-cdk-sdk.datasync.DataSyncListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncListTagsForResourceRequest: datasync.DataSyncListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListTagsForResourceRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListTagsForResourceRequest.property.nextToken"></a>

- *Type:* `string`

---

### DataSyncListTagsForResourceResponse <a name="aws-cdk-sdk.datasync.DataSyncListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncListTagsForResourceResponse: datasync.DataSyncListTagsForResourceResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListTagsForResourceResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTagListEntry`](#aws-cdk-sdk.datasync.DataSyncTagListEntry)[]

---

### DataSyncListTaskExecutionsRequest <a name="aws-cdk-sdk.datasync.DataSyncListTaskExecutionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncListTaskExecutionsRequest: datasync.DataSyncListTaskExecutionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListTaskExecutionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListTaskExecutionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `taskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListTaskExecutionsRequest.property.taskArn"></a>

- *Type:* `string`

---

### DataSyncListTaskExecutionsResponse <a name="aws-cdk-sdk.datasync.DataSyncListTaskExecutionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncListTaskExecutionsResponse: datasync.DataSyncListTaskExecutionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListTaskExecutionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `taskExecutions`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListTaskExecutionsResponse.property.taskExecutions"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTaskExecutionListEntry`](#aws-cdk-sdk.datasync.DataSyncTaskExecutionListEntry)[]

---

### DataSyncListTasksRequest <a name="aws-cdk-sdk.datasync.DataSyncListTasksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncListTasksRequest: datasync.DataSyncListTasksRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListTasksRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTaskFilter`](#aws-cdk-sdk.datasync.DataSyncTaskFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListTasksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListTasksRequest.property.nextToken"></a>

- *Type:* `string`

---

### DataSyncListTasksResponse <a name="aws-cdk-sdk.datasync.DataSyncListTasksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncListTasksResponse: datasync.DataSyncListTasksResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListTasksResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tasks`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncListTasksResponse.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTaskListEntry`](#aws-cdk-sdk.datasync.DataSyncTaskListEntry)[]

---

### DataSyncLocationFilter <a name="aws-cdk-sdk.datasync.DataSyncLocationFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncLocationFilter: datasync.DataSyncLocationFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncLocationFilter.property.name"></a>

- *Type:* `string`

---

##### `operator`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncLocationFilter.property.operator"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncLocationFilter.property.values"></a>

- *Type:* `string`[]

---

### DataSyncLocationListEntry <a name="aws-cdk-sdk.datasync.DataSyncLocationListEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncLocationListEntry: datasync.DataSyncLocationListEntry = { ... }
```

##### `locationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncLocationListEntry.property.locationArn"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncLocationListEntry.property.locationUri"></a>

- *Type:* `string`

---

### DataSyncNfsMountOptions <a name="aws-cdk-sdk.datasync.DataSyncNfsMountOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncNfsMountOptions: datasync.DataSyncNfsMountOptions = { ... }
```

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncNfsMountOptions.property.version"></a>

- *Type:* `string`

---

### DataSyncOnPremConfig <a name="aws-cdk-sdk.datasync.DataSyncOnPremConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncOnPremConfig: datasync.DataSyncOnPremConfig = { ... }
```

##### `agentArns`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncOnPremConfig.property.agentArns"></a>

- *Type:* `string`[]

---

### DataSyncOptions <a name="aws-cdk-sdk.datasync.DataSyncOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncOptions: datasync.DataSyncOptions = { ... }
```

##### `atime`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncOptions.property.atime"></a>

- *Type:* `string`

---

##### `bytesPerSecond`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncOptions.property.bytesPerSecond"></a>

- *Type:* `number`

---

##### `gid`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncOptions.property.gid"></a>

- *Type:* `string`

---

##### `logLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncOptions.property.logLevel"></a>

- *Type:* `string`

---

##### `mtime`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncOptions.property.mtime"></a>

- *Type:* `string`

---

##### `overwriteMode`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncOptions.property.overwriteMode"></a>

- *Type:* `string`

---

##### `posixPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncOptions.property.posixPermissions"></a>

- *Type:* `string`

---

##### `preserveDeletedFiles`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncOptions.property.preserveDeletedFiles"></a>

- *Type:* `string`

---

##### `preserveDevices`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncOptions.property.preserveDevices"></a>

- *Type:* `string`

---

##### `taskQueueing`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncOptions.property.taskQueueing"></a>

- *Type:* `string`

---

##### `transferMode`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncOptions.property.transferMode"></a>

- *Type:* `string`

---

##### `uid`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncOptions.property.uid"></a>

- *Type:* `string`

---

##### `verifyMode`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncOptions.property.verifyMode"></a>

- *Type:* `string`

---

### DataSyncPrivateLinkConfig <a name="aws-cdk-sdk.datasync.DataSyncPrivateLinkConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncPrivateLinkConfig: datasync.DataSyncPrivateLinkConfig = { ... }
```

##### `privateLinkEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncPrivateLinkConfig.property.privateLinkEndpoint"></a>

- *Type:* `string`

---

##### `securityGroupArns`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncPrivateLinkConfig.property.securityGroupArns"></a>

- *Type:* `string`[]

---

##### `subnetArns`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncPrivateLinkConfig.property.subnetArns"></a>

- *Type:* `string`[]

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncPrivateLinkConfig.property.vpcEndpointId"></a>

- *Type:* `string`

---

### DataSyncS3Config <a name="aws-cdk-sdk.datasync.DataSyncS3Config"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncS3Config: datasync.DataSyncS3Config = { ... }
```

##### `bucketAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncS3Config.property.bucketAccessRoleArn"></a>

- *Type:* `string`

---

### DataSyncSmbMountOptions <a name="aws-cdk-sdk.datasync.DataSyncSmbMountOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncSmbMountOptions: datasync.DataSyncSmbMountOptions = { ... }
```

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncSmbMountOptions.property.version"></a>

- *Type:* `string`

---

### DataSyncStartTaskExecutionRequest <a name="aws-cdk-sdk.datasync.DataSyncStartTaskExecutionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncStartTaskExecutionRequest: datasync.DataSyncStartTaskExecutionRequest = { ... }
```

##### `taskArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncStartTaskExecutionRequest.property.taskArn"></a>

- *Type:* `string`

---

##### `includes`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncStartTaskExecutionRequest.property.includes"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncFilterRule`](#aws-cdk-sdk.datasync.DataSyncFilterRule)[]

---

##### `overrideOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncStartTaskExecutionRequest.property.overrideOptions"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncOptions`](#aws-cdk-sdk.datasync.DataSyncOptions)

---

### DataSyncStartTaskExecutionResponse <a name="aws-cdk-sdk.datasync.DataSyncStartTaskExecutionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncStartTaskExecutionResponse: datasync.DataSyncStartTaskExecutionResponse = { ... }
```

##### `taskExecutionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncStartTaskExecutionResponse.property.taskExecutionArn"></a>

- *Type:* `string`

---

### DataSyncTagListEntry <a name="aws-cdk-sdk.datasync.DataSyncTagListEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncTagListEntry: datasync.DataSyncTagListEntry = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncTagListEntry.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncTagListEntry.property.value"></a>

- *Type:* `string`

---

### DataSyncTagResourceRequest <a name="aws-cdk-sdk.datasync.DataSyncTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncTagResourceRequest: datasync.DataSyncTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTagListEntry`](#aws-cdk-sdk.datasync.DataSyncTagListEntry)[]

---

### DataSyncTagResourceResponse <a name="aws-cdk-sdk.datasync.DataSyncTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncTagResourceResponse: datasync.DataSyncTagResourceResponse = { ... }
```

### DataSyncTaskExecutionListEntry <a name="aws-cdk-sdk.datasync.DataSyncTaskExecutionListEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncTaskExecutionListEntry: datasync.DataSyncTaskExecutionListEntry = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskExecutionListEntry.property.status"></a>

- *Type:* `string`

---

##### `taskExecutionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskExecutionListEntry.property.taskExecutionArn"></a>

- *Type:* `string`

---

### DataSyncTaskExecutionResultDetail <a name="aws-cdk-sdk.datasync.DataSyncTaskExecutionResultDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncTaskExecutionResultDetail: datasync.DataSyncTaskExecutionResultDetail = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskExecutionResultDetail.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskExecutionResultDetail.property.errorDetail"></a>

- *Type:* `string`

---

##### `prepareDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskExecutionResultDetail.property.prepareDuration"></a>

- *Type:* `number`

---

##### `prepareStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskExecutionResultDetail.property.prepareStatus"></a>

- *Type:* `string`

---

##### `totalDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskExecutionResultDetail.property.totalDuration"></a>

- *Type:* `number`

---

##### `transferDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskExecutionResultDetail.property.transferDuration"></a>

- *Type:* `number`

---

##### `transferStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskExecutionResultDetail.property.transferStatus"></a>

- *Type:* `string`

---

##### `verifyDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskExecutionResultDetail.property.verifyDuration"></a>

- *Type:* `number`

---

##### `verifyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskExecutionResultDetail.property.verifyStatus"></a>

- *Type:* `string`

---

### DataSyncTaskFilter <a name="aws-cdk-sdk.datasync.DataSyncTaskFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncTaskFilter: datasync.DataSyncTaskFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskFilter.property.name"></a>

- *Type:* `string`

---

##### `operator`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskFilter.property.operator"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskFilter.property.values"></a>

- *Type:* `string`[]

---

### DataSyncTaskListEntry <a name="aws-cdk-sdk.datasync.DataSyncTaskListEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncTaskListEntry: datasync.DataSyncTaskListEntry = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskListEntry.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskListEntry.property.status"></a>

- *Type:* `string`

---

##### `taskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskListEntry.property.taskArn"></a>

- *Type:* `string`

---

### DataSyncTaskSchedule <a name="aws-cdk-sdk.datasync.DataSyncTaskSchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncTaskSchedule: datasync.DataSyncTaskSchedule = { ... }
```

##### `scheduleExpression`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncTaskSchedule.property.scheduleExpression"></a>

- *Type:* `string`

---

### DataSyncUntagResourceRequest <a name="aws-cdk-sdk.datasync.DataSyncUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncUntagResourceRequest: datasync.DataSyncUntagResourceRequest = { ... }
```

##### `keys`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncUntagResourceRequest.property.keys"></a>

- *Type:* `string`[]

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### DataSyncUntagResourceResponse <a name="aws-cdk-sdk.datasync.DataSyncUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncUntagResourceResponse: datasync.DataSyncUntagResourceResponse = { ... }
```

### DataSyncUpdateAgentRequest <a name="aws-cdk-sdk.datasync.DataSyncUpdateAgentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncUpdateAgentRequest: datasync.DataSyncUpdateAgentRequest = { ... }
```

##### `agentArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncUpdateAgentRequest.property.agentArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncUpdateAgentRequest.property.name"></a>

- *Type:* `string`

---

### DataSyncUpdateAgentResponse <a name="aws-cdk-sdk.datasync.DataSyncUpdateAgentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncUpdateAgentResponse: datasync.DataSyncUpdateAgentResponse = { ... }
```

### DataSyncUpdateTaskExecutionRequest <a name="aws-cdk-sdk.datasync.DataSyncUpdateTaskExecutionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncUpdateTaskExecutionRequest: datasync.DataSyncUpdateTaskExecutionRequest = { ... }
```

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncUpdateTaskExecutionRequest.property.options"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncOptions`](#aws-cdk-sdk.datasync.DataSyncOptions)

---

##### `taskExecutionArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncUpdateTaskExecutionRequest.property.taskExecutionArn"></a>

- *Type:* `string`

---

### DataSyncUpdateTaskExecutionResponse <a name="aws-cdk-sdk.datasync.DataSyncUpdateTaskExecutionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncUpdateTaskExecutionResponse: datasync.DataSyncUpdateTaskExecutionResponse = { ... }
```

### DataSyncUpdateTaskRequest <a name="aws-cdk-sdk.datasync.DataSyncUpdateTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncUpdateTaskRequest: datasync.DataSyncUpdateTaskRequest = { ... }
```

##### `taskArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncUpdateTaskRequest.property.taskArn"></a>

- *Type:* `string`

---

##### `cloudWatchLogGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncUpdateTaskRequest.property.cloudWatchLogGroupArn"></a>

- *Type:* `string`

---

##### `excludes`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncUpdateTaskRequest.property.excludes"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncFilterRule`](#aws-cdk-sdk.datasync.DataSyncFilterRule)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncUpdateTaskRequest.property.name"></a>

- *Type:* `string`

---

##### `options`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncUpdateTaskRequest.property.options"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncOptions`](#aws-cdk-sdk.datasync.DataSyncOptions)

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.datasync.DataSyncUpdateTaskRequest.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTaskSchedule`](#aws-cdk-sdk.datasync.DataSyncTaskSchedule)

---

### DataSyncUpdateTaskResponse <a name="aws-cdk-sdk.datasync.DataSyncUpdateTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

const dataSyncUpdateTaskResponse: datasync.DataSyncUpdateTaskResponse = { ... }
```

## Classes <a name="Classes"></a>

### DataSyncResponsesCreateAgent <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateAgent"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateAgent.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesCreateAgent(__scope: Construct, __resources: string[], __input: DataSyncCreateAgentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateAgent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateAgent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateAgent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncCreateAgentRequest`](#aws-cdk-sdk.datasync.DataSyncCreateAgentRequest)

---



#### Properties <a name="Properties"></a>

##### `agentArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateAgent.property.agentArn"></a>

- *Type:* `string`

---


### DataSyncResponsesCreateLocationEfs <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationEfs"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationEfs.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesCreateLocationEfs(__scope: Construct, __resources: string[], __input: DataSyncCreateLocationEfsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationEfs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationEfs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationEfs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncCreateLocationEfsRequest`](#aws-cdk-sdk.datasync.DataSyncCreateLocationEfsRequest)

---



#### Properties <a name="Properties"></a>

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationEfs.property.locationArn"></a>

- *Type:* `string`

---


### DataSyncResponsesCreateLocationFsxWindows <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationFsxWindows"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationFsxWindows.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesCreateLocationFsxWindows(__scope: Construct, __resources: string[], __input: DataSyncCreateLocationFsxWindowsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationFsxWindows.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationFsxWindows.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationFsxWindows.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncCreateLocationFsxWindowsRequest`](#aws-cdk-sdk.datasync.DataSyncCreateLocationFsxWindowsRequest)

---



#### Properties <a name="Properties"></a>

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationFsxWindows.property.locationArn"></a>

- *Type:* `string`

---


### DataSyncResponsesCreateLocationNfs <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationNfs"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationNfs.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesCreateLocationNfs(__scope: Construct, __resources: string[], __input: DataSyncCreateLocationNfsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationNfs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationNfs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationNfs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncCreateLocationNfsRequest`](#aws-cdk-sdk.datasync.DataSyncCreateLocationNfsRequest)

---



#### Properties <a name="Properties"></a>

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationNfs.property.locationArn"></a>

- *Type:* `string`

---


### DataSyncResponsesCreateLocationObjectStorage <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationObjectStorage"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationObjectStorage.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesCreateLocationObjectStorage(__scope: Construct, __resources: string[], __input: DataSyncCreateLocationObjectStorageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationObjectStorage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationObjectStorage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationObjectStorage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncCreateLocationObjectStorageRequest`](#aws-cdk-sdk.datasync.DataSyncCreateLocationObjectStorageRequest)

---



#### Properties <a name="Properties"></a>

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationObjectStorage.property.locationArn"></a>

- *Type:* `string`

---


### DataSyncResponsesCreateLocationS3 <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationS3"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationS3.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesCreateLocationS3(__scope: Construct, __resources: string[], __input: DataSyncCreateLocationS3Request)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncCreateLocationS3Request`](#aws-cdk-sdk.datasync.DataSyncCreateLocationS3Request)

---



#### Properties <a name="Properties"></a>

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationS3.property.locationArn"></a>

- *Type:* `string`

---


### DataSyncResponsesCreateLocationSmb <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationSmb"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationSmb.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesCreateLocationSmb(__scope: Construct, __resources: string[], __input: DataSyncCreateLocationSmbRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationSmb.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationSmb.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationSmb.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncCreateLocationSmbRequest`](#aws-cdk-sdk.datasync.DataSyncCreateLocationSmbRequest)

---



#### Properties <a name="Properties"></a>

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateLocationSmb.property.locationArn"></a>

- *Type:* `string`

---


### DataSyncResponsesCreateTask <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateTask"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateTask.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesCreateTask(__scope: Construct, __resources: string[], __input: DataSyncCreateTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncCreateTaskRequest`](#aws-cdk-sdk.datasync.DataSyncCreateTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `taskArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesCreateTask.property.taskArn"></a>

- *Type:* `string`

---


### DataSyncResponsesDescribeAgent <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgent"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgent.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeAgent(__scope: Construct, __resources: string[], __input: DataSyncDescribeAgentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgent.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgent.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgent.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeAgentRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeAgentRequest)

---



#### Properties <a name="Properties"></a>

##### `agentArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgent.property.agentArn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgent.property.creationTime"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgent.property.endpointType"></a>

- *Type:* `string`

---

##### `lastConnectionTime`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgent.property.lastConnectionTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgent.property.name"></a>

- *Type:* `string`

---

##### `privateLinkConfig`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgent.property.privateLinkConfig"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgentPrivateLinkConfig`](#aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgentPrivateLinkConfig)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgent.property.status"></a>

- *Type:* `string`

---


### DataSyncResponsesDescribeAgentPrivateLinkConfig <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgentPrivateLinkConfig"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgentPrivateLinkConfig.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeAgentPrivateLinkConfig(__scope: Construct, __resources: string[], __input: DataSyncDescribeAgentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgentPrivateLinkConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgentPrivateLinkConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgentPrivateLinkConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeAgentRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeAgentRequest)

---



#### Properties <a name="Properties"></a>

##### `privateLinkEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgentPrivateLinkConfig.property.privateLinkEndpoint"></a>

- *Type:* `string`

---

##### `securityGroupArns`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgentPrivateLinkConfig.property.securityGroupArns"></a>

- *Type:* `string`[]

---

##### `subnetArns`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgentPrivateLinkConfig.property.subnetArns"></a>

- *Type:* `string`[]

---

##### `vpcEndpointId`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeAgentPrivateLinkConfig.property.vpcEndpointId"></a>

- *Type:* `string`

---


### DataSyncResponsesDescribeLocationEfs <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfs"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfs.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeLocationEfs(__scope: Construct, __resources: string[], __input: DataSyncDescribeLocationEfsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeLocationEfsRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeLocationEfsRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfs.property.creationTime"></a>

- *Type:* `string`

---

##### `ec2Config`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfs.property.ec2Config"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfsEc2Config`](#aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfsEc2Config)

---

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfs.property.locationArn"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfs.property.locationUri"></a>

- *Type:* `string`

---


### DataSyncResponsesDescribeLocationEfsEc2Config <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfsEc2Config"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfsEc2Config.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeLocationEfsEc2Config(__scope: Construct, __resources: string[], __input: DataSyncDescribeLocationEfsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfsEc2Config.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfsEc2Config.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfsEc2Config.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeLocationEfsRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeLocationEfsRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroupArns`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfsEc2Config.property.securityGroupArns"></a>

- *Type:* `string`[]

---

##### `subnetArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationEfsEc2Config.property.subnetArn"></a>

- *Type:* `string`

---


### DataSyncResponsesDescribeLocationFsxWindows <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationFsxWindows"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationFsxWindows.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeLocationFsxWindows(__scope: Construct, __resources: string[], __input: DataSyncDescribeLocationFsxWindowsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationFsxWindows.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationFsxWindows.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationFsxWindows.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeLocationFsxWindowsRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeLocationFsxWindowsRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationFsxWindows.property.creationTime"></a>

- *Type:* `string`

---

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationFsxWindows.property.domain"></a>

- *Type:* `string`

---

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationFsxWindows.property.locationArn"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationFsxWindows.property.locationUri"></a>

- *Type:* `string`

---

##### `securityGroupArns`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationFsxWindows.property.securityGroupArns"></a>

- *Type:* `string`[]

---

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationFsxWindows.property.user"></a>

- *Type:* `string`

---


### DataSyncResponsesDescribeLocationNfs <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfs"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfs.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeLocationNfs(__scope: Construct, __resources: string[], __input: DataSyncDescribeLocationNfsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeLocationNfsRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeLocationNfsRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfs.property.creationTime"></a>

- *Type:* `string`

---

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfs.property.locationArn"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfs.property.locationUri"></a>

- *Type:* `string`

---

##### `mountOptions`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfs.property.mountOptions"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfsMountOptions`](#aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfsMountOptions)

---

##### `onPremConfig`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfs.property.onPremConfig"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfsOnPremConfig`](#aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfsOnPremConfig)

---


### DataSyncResponsesDescribeLocationNfsMountOptions <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfsMountOptions"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfsMountOptions.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeLocationNfsMountOptions(__scope: Construct, __resources: string[], __input: DataSyncDescribeLocationNfsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfsMountOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfsMountOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfsMountOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeLocationNfsRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeLocationNfsRequest)

---



#### Properties <a name="Properties"></a>

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfsMountOptions.property.version"></a>

- *Type:* `string`

---


### DataSyncResponsesDescribeLocationNfsOnPremConfig <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfsOnPremConfig"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfsOnPremConfig.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeLocationNfsOnPremConfig(__scope: Construct, __resources: string[], __input: DataSyncDescribeLocationNfsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfsOnPremConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfsOnPremConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfsOnPremConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeLocationNfsRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeLocationNfsRequest)

---



#### Properties <a name="Properties"></a>

##### `agentArns`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationNfsOnPremConfig.property.agentArns"></a>

- *Type:* `string`[]

---


### DataSyncResponsesDescribeLocationObjectStorage <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationObjectStorage"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationObjectStorage.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeLocationObjectStorage(__scope: Construct, __resources: string[], __input: DataSyncDescribeLocationObjectStorageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationObjectStorage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationObjectStorage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationObjectStorage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeLocationObjectStorageRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeLocationObjectStorageRequest)

---



#### Properties <a name="Properties"></a>

##### `accessKey`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationObjectStorage.property.accessKey"></a>

- *Type:* `string`

---

##### `agentArns`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationObjectStorage.property.agentArns"></a>

- *Type:* `string`[]

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationObjectStorage.property.creationTime"></a>

- *Type:* `string`

---

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationObjectStorage.property.locationArn"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationObjectStorage.property.locationUri"></a>

- *Type:* `string`

---

##### `serverPort`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationObjectStorage.property.serverPort"></a>

- *Type:* `number`

---

##### `serverProtocol`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationObjectStorage.property.serverProtocol"></a>

- *Type:* `string`

---


### DataSyncResponsesDescribeLocationS3 <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeLocationS3(__scope: Construct, __resources: string[], __input: DataSyncDescribeLocationS3Request)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeLocationS3Request`](#aws-cdk-sdk.datasync.DataSyncDescribeLocationS3Request)

---



#### Properties <a name="Properties"></a>

##### `agentArns`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3.property.agentArns"></a>

- *Type:* `string`[]

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3.property.creationTime"></a>

- *Type:* `string`

---

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3.property.locationArn"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3.property.locationUri"></a>

- *Type:* `string`

---

##### `s3Config`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3.property.s3Config"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3S3Config`](#aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3S3Config)

---

##### `s3StorageClass`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3.property.s3StorageClass"></a>

- *Type:* `string`

---


### DataSyncResponsesDescribeLocationS3S3Config <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3S3Config"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3S3Config.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeLocationS3S3Config(__scope: Construct, __resources: string[], __input: DataSyncDescribeLocationS3Request)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3S3Config.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3S3Config.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3S3Config.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeLocationS3Request`](#aws-cdk-sdk.datasync.DataSyncDescribeLocationS3Request)

---



#### Properties <a name="Properties"></a>

##### `bucketAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationS3S3Config.property.bucketAccessRoleArn"></a>

- *Type:* `string`

---


### DataSyncResponsesDescribeLocationSmb <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmb"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmb.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeLocationSmb(__scope: Construct, __resources: string[], __input: DataSyncDescribeLocationSmbRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmb.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmb.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmb.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeLocationSmbRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeLocationSmbRequest)

---



#### Properties <a name="Properties"></a>

##### `agentArns`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmb.property.agentArns"></a>

- *Type:* `string`[]

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmb.property.creationTime"></a>

- *Type:* `string`

---

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmb.property.domain"></a>

- *Type:* `string`

---

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmb.property.locationArn"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmb.property.locationUri"></a>

- *Type:* `string`

---

##### `mountOptions`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmb.property.mountOptions"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmbMountOptions`](#aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmbMountOptions)

---

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmb.property.user"></a>

- *Type:* `string`

---


### DataSyncResponsesDescribeLocationSmbMountOptions <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmbMountOptions"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmbMountOptions.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeLocationSmbMountOptions(__scope: Construct, __resources: string[], __input: DataSyncDescribeLocationSmbRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmbMountOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmbMountOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmbMountOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeLocationSmbRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeLocationSmbRequest)

---



#### Properties <a name="Properties"></a>

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeLocationSmbMountOptions.property.version"></a>

- *Type:* `string`

---


### DataSyncResponsesDescribeTask <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeTask(__scope: Construct, __resources: string[], __input: DataSyncDescribeTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeTaskRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.property.cloudWatchLogGroupArn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.property.creationTime"></a>

- *Type:* `string`

---

##### `currentTaskExecutionArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.property.currentTaskExecutionArn"></a>

- *Type:* `string`

---

##### `destinationLocationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.property.destinationLocationArn"></a>

- *Type:* `string`

---

##### `destinationNetworkInterfaceArns`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.property.destinationNetworkInterfaceArns"></a>

- *Type:* `string`[]

---

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetail`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.property.errorDetail"></a>

- *Type:* `string`

---

##### `excludes`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.property.excludes"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncFilterRule`](#aws-cdk-sdk.datasync.DataSyncFilterRule)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.property.name"></a>

- *Type:* `string`

---

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.property.options"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions`](#aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions)

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskSchedule`](#aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskSchedule)

---

##### `sourceLocationArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.property.sourceLocationArn"></a>

- *Type:* `string`

---

##### `sourceNetworkInterfaceArns`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.property.sourceNetworkInterfaceArns"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.property.status"></a>

- *Type:* `string`

---

##### `taskArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTask.property.taskArn"></a>

- *Type:* `string`

---


### DataSyncResponsesDescribeTaskExecution <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecution"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecution.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeTaskExecution(__scope: Construct, __resources: string[], __input: DataSyncDescribeTaskExecutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionRequest)

---



#### Properties <a name="Properties"></a>

##### `bytesTransferred`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecution.property.bytesTransferred"></a>

- *Type:* `number`

---

##### `bytesWritten`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecution.property.bytesWritten"></a>

- *Type:* `number`

---

##### `estimatedBytesToTransfer`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecution.property.estimatedBytesToTransfer"></a>

- *Type:* `number`

---

##### `estimatedFilesToTransfer`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecution.property.estimatedFilesToTransfer"></a>

- *Type:* `number`

---

##### `excludes`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecution.property.excludes"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncFilterRule`](#aws-cdk-sdk.datasync.DataSyncFilterRule)[]

---

##### `filesTransferred`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecution.property.filesTransferred"></a>

- *Type:* `number`

---

##### `includes`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecution.property.includes"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncFilterRule`](#aws-cdk-sdk.datasync.DataSyncFilterRule)[]

---

##### `options`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecution.property.options"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions`](#aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions)

---

##### `result`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecution.property.result"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionResult`](#aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionResult)

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecution.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecution.property.status"></a>

- *Type:* `string`

---

##### `taskExecutionArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecution.property.taskExecutionArn"></a>

- *Type:* `string`

---


### DataSyncResponsesDescribeTaskExecutionOptions <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeTaskExecutionOptions(__scope: Construct, __resources: string[], __input: DataSyncDescribeTaskExecutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionRequest)

---



#### Properties <a name="Properties"></a>

##### `atime`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions.property.atime"></a>

- *Type:* `string`

---

##### `bytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions.property.bytesPerSecond"></a>

- *Type:* `number`

---

##### `gid`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions.property.gid"></a>

- *Type:* `string`

---

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions.property.logLevel"></a>

- *Type:* `string`

---

##### `mtime`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions.property.mtime"></a>

- *Type:* `string`

---

##### `overwriteMode`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions.property.overwriteMode"></a>

- *Type:* `string`

---

##### `posixPermissions`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions.property.posixPermissions"></a>

- *Type:* `string`

---

##### `preserveDeletedFiles`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions.property.preserveDeletedFiles"></a>

- *Type:* `string`

---

##### `preserveDevices`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions.property.preserveDevices"></a>

- *Type:* `string`

---

##### `taskQueueing`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions.property.taskQueueing"></a>

- *Type:* `string`

---

##### `transferMode`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions.property.transferMode"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions.property.uid"></a>

- *Type:* `string`

---

##### `verifyMode`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionOptions.property.verifyMode"></a>

- *Type:* `string`

---


### DataSyncResponsesDescribeTaskExecutionResult <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionResult"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionResult.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeTaskExecutionResult(__scope: Construct, __resources: string[], __input: DataSyncDescribeTaskExecutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionResult.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionResult.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionResult.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeTaskExecutionRequest)

---



#### Properties <a name="Properties"></a>

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionResult.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDetail`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionResult.property.errorDetail"></a>

- *Type:* `string`

---

##### `prepareDuration`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionResult.property.prepareDuration"></a>

- *Type:* `number`

---

##### `prepareStatus`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionResult.property.prepareStatus"></a>

- *Type:* `string`

---

##### `totalDuration`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionResult.property.totalDuration"></a>

- *Type:* `number`

---

##### `transferDuration`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionResult.property.transferDuration"></a>

- *Type:* `number`

---

##### `transferStatus`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionResult.property.transferStatus"></a>

- *Type:* `string`

---

##### `verifyDuration`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionResult.property.verifyDuration"></a>

- *Type:* `number`

---

##### `verifyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskExecutionResult.property.verifyStatus"></a>

- *Type:* `string`

---


### DataSyncResponsesDescribeTaskOptions <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeTaskOptions(__scope: Construct, __resources: string[], __input: DataSyncDescribeTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeTaskRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `atime`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions.property.atime"></a>

- *Type:* `string`

---

##### `bytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions.property.bytesPerSecond"></a>

- *Type:* `number`

---

##### `gid`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions.property.gid"></a>

- *Type:* `string`

---

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions.property.logLevel"></a>

- *Type:* `string`

---

##### `mtime`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions.property.mtime"></a>

- *Type:* `string`

---

##### `overwriteMode`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions.property.overwriteMode"></a>

- *Type:* `string`

---

##### `posixPermissions`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions.property.posixPermissions"></a>

- *Type:* `string`

---

##### `preserveDeletedFiles`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions.property.preserveDeletedFiles"></a>

- *Type:* `string`

---

##### `preserveDevices`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions.property.preserveDevices"></a>

- *Type:* `string`

---

##### `taskQueueing`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions.property.taskQueueing"></a>

- *Type:* `string`

---

##### `transferMode`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions.property.transferMode"></a>

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions.property.uid"></a>

- *Type:* `string`

---

##### `verifyMode`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskOptions.property.verifyMode"></a>

- *Type:* `string`

---


### DataSyncResponsesDescribeTaskSchedule <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskSchedule.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesDescribeTaskSchedule(__scope: Construct, __resources: string[], __input: DataSyncDescribeTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncDescribeTaskRequest`](#aws-cdk-sdk.datasync.DataSyncDescribeTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `scheduleExpression`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesDescribeTaskSchedule.property.scheduleExpression"></a>

- *Type:* `string`

---


### DataSyncResponsesListAgents <a name="aws-cdk-sdk.datasync.DataSyncResponsesListAgents"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesListAgents.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesListAgents(__scope: Construct, __resources: string[], __input: DataSyncListAgentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListAgents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListAgents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListAgents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncListAgentsRequest`](#aws-cdk-sdk.datasync.DataSyncListAgentsRequest)

---



#### Properties <a name="Properties"></a>

##### `agents`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListAgents.property.agents"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncAgentListEntry`](#aws-cdk-sdk.datasync.DataSyncAgentListEntry)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListAgents.property.nextToken"></a>

- *Type:* `string`

---


### DataSyncResponsesListLocations <a name="aws-cdk-sdk.datasync.DataSyncResponsesListLocations"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesListLocations.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesListLocations(__scope: Construct, __resources: string[], __input: DataSyncListLocationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListLocations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListLocations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListLocations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncListLocationsRequest`](#aws-cdk-sdk.datasync.DataSyncListLocationsRequest)

---



#### Properties <a name="Properties"></a>

##### `locations`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListLocations.property.locations"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncLocationListEntry`](#aws-cdk-sdk.datasync.DataSyncLocationListEntry)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListLocations.property.nextToken"></a>

- *Type:* `string`

---


### DataSyncResponsesListTagsForResource <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTagsForResource.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: DataSyncListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncListTagsForResourceRequest`](#aws-cdk-sdk.datasync.DataSyncListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTagsForResource.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTagListEntry`](#aws-cdk-sdk.datasync.DataSyncTagListEntry)[]

---


### DataSyncResponsesListTaskExecutions <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTaskExecutions"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTaskExecutions.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesListTaskExecutions(__scope: Construct, __resources: string[], __input: DataSyncListTaskExecutionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTaskExecutions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTaskExecutions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTaskExecutions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncListTaskExecutionsRequest`](#aws-cdk-sdk.datasync.DataSyncListTaskExecutionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTaskExecutions.property.nextToken"></a>

- *Type:* `string`

---

##### `taskExecutions`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTaskExecutions.property.taskExecutions"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTaskExecutionListEntry`](#aws-cdk-sdk.datasync.DataSyncTaskExecutionListEntry)[]

---


### DataSyncResponsesListTasks <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTasks"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTasks.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesListTasks(__scope: Construct, __resources: string[], __input: DataSyncListTasksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTasks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTasks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTasks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncListTasksRequest`](#aws-cdk-sdk.datasync.DataSyncListTasksRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTasks.property.nextToken"></a>

- *Type:* `string`

---

##### `tasks`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesListTasks.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncTaskListEntry`](#aws-cdk-sdk.datasync.DataSyncTaskListEntry)[]

---


### DataSyncResponsesStartTaskExecution <a name="aws-cdk-sdk.datasync.DataSyncResponsesStartTaskExecution"></a>

#### Initializer <a name="aws-cdk-sdk.datasync.DataSyncResponsesStartTaskExecution.Initializer"></a>

```typescript
import { datasync } from 'aws-cdk-sdk'

new datasync.DataSyncResponsesStartTaskExecution(__scope: Construct, __resources: string[], __input: DataSyncStartTaskExecutionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesStartTaskExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesStartTaskExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesStartTaskExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.datasync.DataSyncStartTaskExecutionRequest`](#aws-cdk-sdk.datasync.DataSyncStartTaskExecutionRequest)

---



#### Properties <a name="Properties"></a>

##### `taskExecutionArn`<sup>Required</sup> <a name="aws-cdk-sdk.datasync.DataSyncResponsesStartTaskExecution.property.taskExecutionArn"></a>

- *Type:* `string`

---



