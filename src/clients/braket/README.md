# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### BraketClient <a name="aws-cdk-sdk.braket.BraketClient"></a>

#### Initializer <a name="aws-cdk-sdk.braket.BraketClient.Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

new braket.BraketClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `cancelQuantumTask` <a name="aws-cdk-sdk.braket.BraketClient.cancelQuantumTask"></a>

```typescript
public cancelQuantumTask(input: BraketCancelQuantumTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketCancelQuantumTaskRequest`](#aws-cdk-sdk.braket.BraketCancelQuantumTaskRequest)

---

##### `createQuantumTask` <a name="aws-cdk-sdk.braket.BraketClient.createQuantumTask"></a>

```typescript
public createQuantumTask(input: BraketCreateQuantumTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketCreateQuantumTaskRequest`](#aws-cdk-sdk.braket.BraketCreateQuantumTaskRequest)

---

##### `fetchDevice` <a name="aws-cdk-sdk.braket.BraketClient.fetchDevice"></a>

```typescript
public fetchDevice(input: BraketGetDeviceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketGetDeviceRequest`](#aws-cdk-sdk.braket.BraketGetDeviceRequest)

---

##### `fetchQuantumTask` <a name="aws-cdk-sdk.braket.BraketClient.fetchQuantumTask"></a>

```typescript
public fetchQuantumTask(input: BraketGetQuantumTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketGetQuantumTaskRequest`](#aws-cdk-sdk.braket.BraketGetQuantumTaskRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.braket.BraketClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: BraketListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketListTagsForResourceRequest`](#aws-cdk-sdk.braket.BraketListTagsForResourceRequest)

---

##### `searchDevices` <a name="aws-cdk-sdk.braket.BraketClient.searchDevices"></a>

```typescript
public searchDevices(input: BraketSearchDevicesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketSearchDevicesRequest`](#aws-cdk-sdk.braket.BraketSearchDevicesRequest)

---

##### `searchQuantumTasks` <a name="aws-cdk-sdk.braket.BraketClient.searchQuantumTasks"></a>

```typescript
public searchQuantumTasks(input: BraketSearchQuantumTasksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketSearchQuantumTasksRequest`](#aws-cdk-sdk.braket.BraketSearchQuantumTasksRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.braket.BraketClient.tagResource"></a>

```typescript
public tagResource(input: BraketTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketTagResourceRequest`](#aws-cdk-sdk.braket.BraketTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.braket.BraketClient.untagResource"></a>

```typescript
public untagResource(input: BraketUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketUntagResourceRequest`](#aws-cdk-sdk.braket.BraketUntagResourceRequest)

---




## Structs <a name="Structs"></a>

### BraketCancelQuantumTaskRequest <a name="aws-cdk-sdk.braket.BraketCancelQuantumTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketCancelQuantumTaskRequest: braket.BraketCancelQuantumTaskRequest = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketCancelQuantumTaskRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `quantumTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketCancelQuantumTaskRequest.property.quantumTaskArn"></a>

- *Type:* `string`

---

### BraketCancelQuantumTaskResponse <a name="aws-cdk-sdk.braket.BraketCancelQuantumTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketCancelQuantumTaskResponse: braket.BraketCancelQuantumTaskResponse = { ... }
```

##### `cancellationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketCancelQuantumTaskResponse.property.cancellationStatus"></a>

- *Type:* `string`

---

##### `quantumTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketCancelQuantumTaskResponse.property.quantumTaskArn"></a>

- *Type:* `string`

---

### BraketCreateQuantumTaskRequest <a name="aws-cdk-sdk.braket.BraketCreateQuantumTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketCreateQuantumTaskRequest: braket.BraketCreateQuantumTaskRequest = { ... }
```

##### `action`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketCreateQuantumTaskRequest.property.action"></a>

- *Type:* `string`

---

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketCreateQuantumTaskRequest.property.clientToken"></a>

- *Type:* `string`

---

##### `deviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketCreateQuantumTaskRequest.property.deviceArn"></a>

- *Type:* `string`

---

##### `outputS3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketCreateQuantumTaskRequest.property.outputS3Bucket"></a>

- *Type:* `string`

---

##### `outputS3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketCreateQuantumTaskRequest.property.outputS3KeyPrefix"></a>

- *Type:* `string`

---

##### `shots`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketCreateQuantumTaskRequest.property.shots"></a>

- *Type:* `number`

---

##### `deviceParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.braket.BraketCreateQuantumTaskRequest.property.deviceParameters"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.braket.BraketCreateQuantumTaskRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### BraketCreateQuantumTaskResponse <a name="aws-cdk-sdk.braket.BraketCreateQuantumTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketCreateQuantumTaskResponse: braket.BraketCreateQuantumTaskResponse = { ... }
```

##### `quantumTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketCreateQuantumTaskResponse.property.quantumTaskArn"></a>

- *Type:* `string`

---

### BraketDeviceSummary <a name="aws-cdk-sdk.braket.BraketDeviceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketDeviceSummary: braket.BraketDeviceSummary = { ... }
```

##### `deviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketDeviceSummary.property.deviceArn"></a>

- *Type:* `string`

---

##### `deviceName`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketDeviceSummary.property.deviceName"></a>

- *Type:* `string`

---

##### `deviceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketDeviceSummary.property.deviceStatus"></a>

- *Type:* `string`

---

##### `deviceType`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketDeviceSummary.property.deviceType"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketDeviceSummary.property.providerName"></a>

- *Type:* `string`

---

### BraketGetDeviceRequest <a name="aws-cdk-sdk.braket.BraketGetDeviceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketGetDeviceRequest: braket.BraketGetDeviceRequest = { ... }
```

##### `deviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketGetDeviceRequest.property.deviceArn"></a>

- *Type:* `string`

---

### BraketGetDeviceResponse <a name="aws-cdk-sdk.braket.BraketGetDeviceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketGetDeviceResponse: braket.BraketGetDeviceResponse = { ... }
```

##### `deviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketGetDeviceResponse.property.deviceArn"></a>

- *Type:* `string`

---

##### `deviceCapabilities`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketGetDeviceResponse.property.deviceCapabilities"></a>

- *Type:* `string`

---

##### `deviceName`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketGetDeviceResponse.property.deviceName"></a>

- *Type:* `string`

---

##### `deviceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketGetDeviceResponse.property.deviceStatus"></a>

- *Type:* `string`

---

##### `deviceType`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketGetDeviceResponse.property.deviceType"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketGetDeviceResponse.property.providerName"></a>

- *Type:* `string`

---

### BraketGetQuantumTaskRequest <a name="aws-cdk-sdk.braket.BraketGetQuantumTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketGetQuantumTaskRequest: braket.BraketGetQuantumTaskRequest = { ... }
```

##### `quantumTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketGetQuantumTaskRequest.property.quantumTaskArn"></a>

- *Type:* `string`

---

### BraketGetQuantumTaskResponse <a name="aws-cdk-sdk.braket.BraketGetQuantumTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketGetQuantumTaskResponse: braket.BraketGetQuantumTaskResponse = { ... }
```

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketGetQuantumTaskResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `deviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketGetQuantumTaskResponse.property.deviceArn"></a>

- *Type:* `string`

---

##### `deviceParameters`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketGetQuantumTaskResponse.property.deviceParameters"></a>

- *Type:* `string`

---

##### `outputS3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketGetQuantumTaskResponse.property.outputS3Bucket"></a>

- *Type:* `string`

---

##### `outputS3Directory`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketGetQuantumTaskResponse.property.outputS3Directory"></a>

- *Type:* `string`

---

##### `quantumTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketGetQuantumTaskResponse.property.quantumTaskArn"></a>

- *Type:* `string`

---

##### `shots`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketGetQuantumTaskResponse.property.shots"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketGetQuantumTaskResponse.property.status"></a>

- *Type:* `string`

---

##### `endedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.braket.BraketGetQuantumTaskResponse.property.endedAt"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.braket.BraketGetQuantumTaskResponse.property.failureReason"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.braket.BraketGetQuantumTaskResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### BraketListTagsForResourceRequest <a name="aws-cdk-sdk.braket.BraketListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketListTagsForResourceRequest: braket.BraketListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### BraketListTagsForResourceResponse <a name="aws-cdk-sdk.braket.BraketListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketListTagsForResourceResponse: braket.BraketListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.braket.BraketListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### BraketQuantumTaskSummary <a name="aws-cdk-sdk.braket.BraketQuantumTaskSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketQuantumTaskSummary: braket.BraketQuantumTaskSummary = { ... }
```

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketQuantumTaskSummary.property.createdAt"></a>

- *Type:* `string`

---

##### `deviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketQuantumTaskSummary.property.deviceArn"></a>

- *Type:* `string`

---

##### `outputS3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketQuantumTaskSummary.property.outputS3Bucket"></a>

- *Type:* `string`

---

##### `outputS3Directory`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketQuantumTaskSummary.property.outputS3Directory"></a>

- *Type:* `string`

---

##### `quantumTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketQuantumTaskSummary.property.quantumTaskArn"></a>

- *Type:* `string`

---

##### `shots`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketQuantumTaskSummary.property.shots"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketQuantumTaskSummary.property.status"></a>

- *Type:* `string`

---

##### `endedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.braket.BraketQuantumTaskSummary.property.endedAt"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.braket.BraketQuantumTaskSummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### BraketSearchDevicesFilter <a name="aws-cdk-sdk.braket.BraketSearchDevicesFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketSearchDevicesFilter: braket.BraketSearchDevicesFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketSearchDevicesFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketSearchDevicesFilter.property.values"></a>

- *Type:* `string`[]

---

### BraketSearchDevicesRequest <a name="aws-cdk-sdk.braket.BraketSearchDevicesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketSearchDevicesRequest: braket.BraketSearchDevicesRequest = { ... }
```

##### `filters`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketSearchDevicesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketSearchDevicesFilter`](#aws-cdk-sdk.braket.BraketSearchDevicesFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.braket.BraketSearchDevicesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.braket.BraketSearchDevicesRequest.property.nextToken"></a>

- *Type:* `string`

---

### BraketSearchDevicesResponse <a name="aws-cdk-sdk.braket.BraketSearchDevicesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketSearchDevicesResponse: braket.BraketSearchDevicesResponse = { ... }
```

##### `devices`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketSearchDevicesResponse.property.devices"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketDeviceSummary`](#aws-cdk-sdk.braket.BraketDeviceSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.braket.BraketSearchDevicesResponse.property.nextToken"></a>

- *Type:* `string`

---

### BraketSearchQuantumTasksFilter <a name="aws-cdk-sdk.braket.BraketSearchQuantumTasksFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketSearchQuantumTasksFilter: braket.BraketSearchQuantumTasksFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketSearchQuantumTasksFilter.property.name"></a>

- *Type:* `string`

---

##### `operator`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketSearchQuantumTasksFilter.property.operator"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketSearchQuantumTasksFilter.property.values"></a>

- *Type:* `string`[]

---

### BraketSearchQuantumTasksRequest <a name="aws-cdk-sdk.braket.BraketSearchQuantumTasksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketSearchQuantumTasksRequest: braket.BraketSearchQuantumTasksRequest = { ... }
```

##### `filters`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketSearchQuantumTasksRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketSearchQuantumTasksFilter`](#aws-cdk-sdk.braket.BraketSearchQuantumTasksFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.braket.BraketSearchQuantumTasksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.braket.BraketSearchQuantumTasksRequest.property.nextToken"></a>

- *Type:* `string`

---

### BraketSearchQuantumTasksResponse <a name="aws-cdk-sdk.braket.BraketSearchQuantumTasksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketSearchQuantumTasksResponse: braket.BraketSearchQuantumTasksResponse = { ... }
```

##### `quantumTasks`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketSearchQuantumTasksResponse.property.quantumTasks"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketQuantumTaskSummary`](#aws-cdk-sdk.braket.BraketQuantumTaskSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.braket.BraketSearchQuantumTasksResponse.property.nextToken"></a>

- *Type:* `string`

---

### BraketTagResourceRequest <a name="aws-cdk-sdk.braket.BraketTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketTagResourceRequest: braket.BraketTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### BraketTagResourceResponse <a name="aws-cdk-sdk.braket.BraketTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketTagResourceResponse: braket.BraketTagResourceResponse = { ... }
```

### BraketUntagResourceRequest <a name="aws-cdk-sdk.braket.BraketUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketUntagResourceRequest: braket.BraketUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### BraketUntagResourceResponse <a name="aws-cdk-sdk.braket.BraketUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

const braketUntagResourceResponse: braket.BraketUntagResourceResponse = { ... }
```

## Classes <a name="Classes"></a>

### BraketResponsesCancelQuantumTask <a name="aws-cdk-sdk.braket.BraketResponsesCancelQuantumTask"></a>

#### Initializer <a name="aws-cdk-sdk.braket.BraketResponsesCancelQuantumTask.Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

new braket.BraketResponsesCancelQuantumTask(__scope: Construct, __resources: string[], __input: BraketCancelQuantumTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesCancelQuantumTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesCancelQuantumTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesCancelQuantumTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketCancelQuantumTaskRequest`](#aws-cdk-sdk.braket.BraketCancelQuantumTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `cancellationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesCancelQuantumTask.property.cancellationStatus"></a>

- *Type:* `string`

---

##### `quantumTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesCancelQuantumTask.property.quantumTaskArn"></a>

- *Type:* `string`

---


### BraketResponsesCreateQuantumTask <a name="aws-cdk-sdk.braket.BraketResponsesCreateQuantumTask"></a>

#### Initializer <a name="aws-cdk-sdk.braket.BraketResponsesCreateQuantumTask.Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

new braket.BraketResponsesCreateQuantumTask(__scope: Construct, __resources: string[], __input: BraketCreateQuantumTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesCreateQuantumTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesCreateQuantumTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesCreateQuantumTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketCreateQuantumTaskRequest`](#aws-cdk-sdk.braket.BraketCreateQuantumTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `quantumTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesCreateQuantumTask.property.quantumTaskArn"></a>

- *Type:* `string`

---


### BraketResponsesFetchDevice <a name="aws-cdk-sdk.braket.BraketResponsesFetchDevice"></a>

#### Initializer <a name="aws-cdk-sdk.braket.BraketResponsesFetchDevice.Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

new braket.BraketResponsesFetchDevice(__scope: Construct, __resources: string[], __input: BraketGetDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketGetDeviceRequest`](#aws-cdk-sdk.braket.BraketGetDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `deviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchDevice.property.deviceArn"></a>

- *Type:* `string`

---

##### `deviceCapabilities`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchDevice.property.deviceCapabilities"></a>

- *Type:* `string`

---

##### `deviceName`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchDevice.property.deviceName"></a>

- *Type:* `string`

---

##### `deviceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchDevice.property.deviceStatus"></a>

- *Type:* `string`

---

##### `deviceType`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchDevice.property.deviceType"></a>

- *Type:* `string`

---

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchDevice.property.providerName"></a>

- *Type:* `string`

---


### BraketResponsesFetchQuantumTask <a name="aws-cdk-sdk.braket.BraketResponsesFetchQuantumTask"></a>

#### Initializer <a name="aws-cdk-sdk.braket.BraketResponsesFetchQuantumTask.Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

new braket.BraketResponsesFetchQuantumTask(__scope: Construct, __resources: string[], __input: BraketGetQuantumTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchQuantumTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchQuantumTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchQuantumTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketGetQuantumTaskRequest`](#aws-cdk-sdk.braket.BraketGetQuantumTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchQuantumTask.property.createdAt"></a>

- *Type:* `string`

---

##### `deviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchQuantumTask.property.deviceArn"></a>

- *Type:* `string`

---

##### `deviceParameters`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchQuantumTask.property.deviceParameters"></a>

- *Type:* `string`

---

##### `endedAt`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchQuantumTask.property.endedAt"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchQuantumTask.property.failureReason"></a>

- *Type:* `string`

---

##### `outputS3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchQuantumTask.property.outputS3Bucket"></a>

- *Type:* `string`

---

##### `outputS3Directory`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchQuantumTask.property.outputS3Directory"></a>

- *Type:* `string`

---

##### `quantumTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchQuantumTask.property.quantumTaskArn"></a>

- *Type:* `string`

---

##### `shots`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchQuantumTask.property.shots"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchQuantumTask.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesFetchQuantumTask.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### BraketResponsesListTagsForResource <a name="aws-cdk-sdk.braket.BraketResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.braket.BraketResponsesListTagsForResource.Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

new braket.BraketResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: BraketListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketListTagsForResourceRequest`](#aws-cdk-sdk.braket.BraketListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### BraketResponsesSearchDevices <a name="aws-cdk-sdk.braket.BraketResponsesSearchDevices"></a>

#### Initializer <a name="aws-cdk-sdk.braket.BraketResponsesSearchDevices.Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

new braket.BraketResponsesSearchDevices(__scope: Construct, __resources: string[], __input: BraketSearchDevicesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesSearchDevices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesSearchDevices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesSearchDevices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketSearchDevicesRequest`](#aws-cdk-sdk.braket.BraketSearchDevicesRequest)

---



#### Properties <a name="Properties"></a>

##### `devices`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesSearchDevices.property.devices"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketDeviceSummary`](#aws-cdk-sdk.braket.BraketDeviceSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesSearchDevices.property.nextToken"></a>

- *Type:* `string`

---


### BraketResponsesSearchQuantumTasks <a name="aws-cdk-sdk.braket.BraketResponsesSearchQuantumTasks"></a>

#### Initializer <a name="aws-cdk-sdk.braket.BraketResponsesSearchQuantumTasks.Initializer"></a>

```typescript
import { braket } from 'aws-cdk-sdk'

new braket.BraketResponsesSearchQuantumTasks(__scope: Construct, __resources: string[], __input: BraketSearchQuantumTasksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesSearchQuantumTasks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesSearchQuantumTasks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesSearchQuantumTasks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketSearchQuantumTasksRequest`](#aws-cdk-sdk.braket.BraketSearchQuantumTasksRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesSearchQuantumTasks.property.nextToken"></a>

- *Type:* `string`

---

##### `quantumTasks`<sup>Required</sup> <a name="aws-cdk-sdk.braket.BraketResponsesSearchQuantumTasks.property.quantumTasks"></a>

- *Type:* [`aws-cdk-sdk.braket.BraketQuantumTaskSummary`](#aws-cdk-sdk.braket.BraketQuantumTaskSummary)[]

---



