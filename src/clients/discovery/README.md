# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DiscoveryClient <a name="aws-cdk-sdk.discovery.DiscoveryClient"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryClient.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateConfigurationItemsToApplication` <a name="aws-cdk-sdk.discovery.DiscoveryClient.associateConfigurationItemsToApplication"></a>

```typescript
public associateConfigurationItemsToApplication(input: DiscoveryAssociateConfigurationItemsToApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryAssociateConfigurationItemsToApplicationRequest`](#aws-cdk-sdk.discovery.DiscoveryAssociateConfigurationItemsToApplicationRequest)

---

##### `batchDeleteImportData` <a name="aws-cdk-sdk.discovery.DiscoveryClient.batchDeleteImportData"></a>

```typescript
public batchDeleteImportData(input: DiscoveryBatchDeleteImportDataRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryBatchDeleteImportDataRequest`](#aws-cdk-sdk.discovery.DiscoveryBatchDeleteImportDataRequest)

---

##### `createApplication` <a name="aws-cdk-sdk.discovery.DiscoveryClient.createApplication"></a>

```typescript
public createApplication(input: DiscoveryCreateApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryCreateApplicationRequest`](#aws-cdk-sdk.discovery.DiscoveryCreateApplicationRequest)

---

##### `createTags` <a name="aws-cdk-sdk.discovery.DiscoveryClient.createTags"></a>

```typescript
public createTags(input: DiscoveryCreateTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryCreateTagsRequest`](#aws-cdk-sdk.discovery.DiscoveryCreateTagsRequest)

---

##### `deleteApplications` <a name="aws-cdk-sdk.discovery.DiscoveryClient.deleteApplications"></a>

```typescript
public deleteApplications(input: DiscoveryDeleteApplicationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryDeleteApplicationsRequest`](#aws-cdk-sdk.discovery.DiscoveryDeleteApplicationsRequest)

---

##### `deleteTags` <a name="aws-cdk-sdk.discovery.DiscoveryClient.deleteTags"></a>

```typescript
public deleteTags(input: DiscoveryDeleteTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryDeleteTagsRequest`](#aws-cdk-sdk.discovery.DiscoveryDeleteTagsRequest)

---

##### `describeAgents` <a name="aws-cdk-sdk.discovery.DiscoveryClient.describeAgents"></a>

```typescript
public describeAgents(input: DiscoveryDescribeAgentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryDescribeAgentsRequest`](#aws-cdk-sdk.discovery.DiscoveryDescribeAgentsRequest)

---

##### `describeConfigurations` <a name="aws-cdk-sdk.discovery.DiscoveryClient.describeConfigurations"></a>

```typescript
public describeConfigurations(input: DiscoveryDescribeConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryDescribeConfigurationsRequest`](#aws-cdk-sdk.discovery.DiscoveryDescribeConfigurationsRequest)

---

##### `describeContinuousExports` <a name="aws-cdk-sdk.discovery.DiscoveryClient.describeContinuousExports"></a>

```typescript
public describeContinuousExports(input: DiscoveryDescribeContinuousExportsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryDescribeContinuousExportsRequest`](#aws-cdk-sdk.discovery.DiscoveryDescribeContinuousExportsRequest)

---

##### `describeExportConfigurations` <a name="aws-cdk-sdk.discovery.DiscoveryClient.describeExportConfigurations"></a>

```typescript
public describeExportConfigurations(input: DiscoveryDescribeExportConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryDescribeExportConfigurationsRequest`](#aws-cdk-sdk.discovery.DiscoveryDescribeExportConfigurationsRequest)

---

##### `describeExportTasks` <a name="aws-cdk-sdk.discovery.DiscoveryClient.describeExportTasks"></a>

```typescript
public describeExportTasks(input: DiscoveryDescribeExportTasksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryDescribeExportTasksRequest`](#aws-cdk-sdk.discovery.DiscoveryDescribeExportTasksRequest)

---

##### `describeImportTasks` <a name="aws-cdk-sdk.discovery.DiscoveryClient.describeImportTasks"></a>

```typescript
public describeImportTasks(input: DiscoveryDescribeImportTasksRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryDescribeImportTasksRequest`](#aws-cdk-sdk.discovery.DiscoveryDescribeImportTasksRequest)

---

##### `describeTags` <a name="aws-cdk-sdk.discovery.DiscoveryClient.describeTags"></a>

```typescript
public describeTags(input: DiscoveryDescribeTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryDescribeTagsRequest`](#aws-cdk-sdk.discovery.DiscoveryDescribeTagsRequest)

---

##### `disassociateConfigurationItemsFromApplication` <a name="aws-cdk-sdk.discovery.DiscoveryClient.disassociateConfigurationItemsFromApplication"></a>

```typescript
public disassociateConfigurationItemsFromApplication(input: DiscoveryDisassociateConfigurationItemsFromApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryDisassociateConfigurationItemsFromApplicationRequest`](#aws-cdk-sdk.discovery.DiscoveryDisassociateConfigurationItemsFromApplicationRequest)

---

##### `exportConfigurations` <a name="aws-cdk-sdk.discovery.DiscoveryClient.exportConfigurations"></a>

```typescript
public exportConfigurations()
```

##### `fetchDiscoverySummary` <a name="aws-cdk-sdk.discovery.DiscoveryClient.fetchDiscoverySummary"></a>

```typescript
public fetchDiscoverySummary()
```

##### `listConfigurations` <a name="aws-cdk-sdk.discovery.DiscoveryClient.listConfigurations"></a>

```typescript
public listConfigurations(input: DiscoveryListConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryListConfigurationsRequest`](#aws-cdk-sdk.discovery.DiscoveryListConfigurationsRequest)

---

##### `listServerNeighbors` <a name="aws-cdk-sdk.discovery.DiscoveryClient.listServerNeighbors"></a>

```typescript
public listServerNeighbors(input: DiscoveryListServerNeighborsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryListServerNeighborsRequest`](#aws-cdk-sdk.discovery.DiscoveryListServerNeighborsRequest)

---

##### `startContinuousExport` <a name="aws-cdk-sdk.discovery.DiscoveryClient.startContinuousExport"></a>

```typescript
public startContinuousExport()
```

##### `startDataCollectionByAgentIds` <a name="aws-cdk-sdk.discovery.DiscoveryClient.startDataCollectionByAgentIds"></a>

```typescript
public startDataCollectionByAgentIds(input: DiscoveryStartDataCollectionByAgentIdsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryStartDataCollectionByAgentIdsRequest`](#aws-cdk-sdk.discovery.DiscoveryStartDataCollectionByAgentIdsRequest)

---

##### `startExportTask` <a name="aws-cdk-sdk.discovery.DiscoveryClient.startExportTask"></a>

```typescript
public startExportTask(input: DiscoveryStartExportTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryStartExportTaskRequest`](#aws-cdk-sdk.discovery.DiscoveryStartExportTaskRequest)

---

##### `startImportTask` <a name="aws-cdk-sdk.discovery.DiscoveryClient.startImportTask"></a>

```typescript
public startImportTask(input: DiscoveryStartImportTaskRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryStartImportTaskRequest`](#aws-cdk-sdk.discovery.DiscoveryStartImportTaskRequest)

---

##### `stopContinuousExport` <a name="aws-cdk-sdk.discovery.DiscoveryClient.stopContinuousExport"></a>

```typescript
public stopContinuousExport(input: DiscoveryStopContinuousExportRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryStopContinuousExportRequest`](#aws-cdk-sdk.discovery.DiscoveryStopContinuousExportRequest)

---

##### `stopDataCollectionByAgentIds` <a name="aws-cdk-sdk.discovery.DiscoveryClient.stopDataCollectionByAgentIds"></a>

```typescript
public stopDataCollectionByAgentIds(input: DiscoveryStopDataCollectionByAgentIdsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryStopDataCollectionByAgentIdsRequest`](#aws-cdk-sdk.discovery.DiscoveryStopDataCollectionByAgentIdsRequest)

---

##### `updateApplication` <a name="aws-cdk-sdk.discovery.DiscoveryClient.updateApplication"></a>

```typescript
public updateApplication(input: DiscoveryUpdateApplicationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryUpdateApplicationRequest`](#aws-cdk-sdk.discovery.DiscoveryUpdateApplicationRequest)

---




## Structs <a name="Structs"></a>

### DiscoveryAgentConfigurationStatus <a name="aws-cdk-sdk.discovery.DiscoveryAgentConfigurationStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryAgentConfigurationStatus: discovery.DiscoveryAgentConfigurationStatus = { ... }
```

##### `agentId`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryAgentConfigurationStatus.property.agentId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryAgentConfigurationStatus.property.description"></a>

- *Type:* `string`

---

##### `operationSucceeded`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryAgentConfigurationStatus.property.operationSucceeded"></a>

- *Type:* `boolean`

---

### DiscoveryAgentInfo <a name="aws-cdk-sdk.discovery.DiscoveryAgentInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryAgentInfo: discovery.DiscoveryAgentInfo = { ... }
```

##### `agentId`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryAgentInfo.property.agentId"></a>

- *Type:* `string`

---

##### `agentNetworkInfoList`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryAgentInfo.property.agentNetworkInfoList"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryAgentNetworkInfo`](#aws-cdk-sdk.discovery.DiscoveryAgentNetworkInfo)[]

---

##### `agentType`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryAgentInfo.property.agentType"></a>

- *Type:* `string`

---

##### `collectionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryAgentInfo.property.collectionStatus"></a>

- *Type:* `string`

---

##### `connectorId`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryAgentInfo.property.connectorId"></a>

- *Type:* `string`

---

##### `health`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryAgentInfo.property.health"></a>

- *Type:* `string`

---

##### `hostName`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryAgentInfo.property.hostName"></a>

- *Type:* `string`

---

##### `lastHealthPingTime`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryAgentInfo.property.lastHealthPingTime"></a>

- *Type:* `string`

---

##### `registeredTime`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryAgentInfo.property.registeredTime"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryAgentInfo.property.version"></a>

- *Type:* `string`

---

### DiscoveryAgentNetworkInfo <a name="aws-cdk-sdk.discovery.DiscoveryAgentNetworkInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryAgentNetworkInfo: discovery.DiscoveryAgentNetworkInfo = { ... }
```

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryAgentNetworkInfo.property.ipAddress"></a>

- *Type:* `string`

---

##### `macAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryAgentNetworkInfo.property.macAddress"></a>

- *Type:* `string`

---

### DiscoveryAssociateConfigurationItemsToApplicationRequest <a name="aws-cdk-sdk.discovery.DiscoveryAssociateConfigurationItemsToApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryAssociateConfigurationItemsToApplicationRequest: discovery.DiscoveryAssociateConfigurationItemsToApplicationRequest = { ... }
```

##### `applicationConfigurationId`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryAssociateConfigurationItemsToApplicationRequest.property.applicationConfigurationId"></a>

- *Type:* `string`

---

##### `configurationIds`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryAssociateConfigurationItemsToApplicationRequest.property.configurationIds"></a>

- *Type:* `string`[]

---

### DiscoveryAssociateConfigurationItemsToApplicationResponse <a name="aws-cdk-sdk.discovery.DiscoveryAssociateConfigurationItemsToApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryAssociateConfigurationItemsToApplicationResponse: discovery.DiscoveryAssociateConfigurationItemsToApplicationResponse = { ... }
```

### DiscoveryBatchDeleteImportDataError <a name="aws-cdk-sdk.discovery.DiscoveryBatchDeleteImportDataError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryBatchDeleteImportDataError: discovery.DiscoveryBatchDeleteImportDataError = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryBatchDeleteImportDataError.property.errorCode"></a>

- *Type:* `string`

---

##### `errorDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryBatchDeleteImportDataError.property.errorDescription"></a>

- *Type:* `string`

---

##### `importTaskId`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryBatchDeleteImportDataError.property.importTaskId"></a>

- *Type:* `string`

---

### DiscoveryBatchDeleteImportDataRequest <a name="aws-cdk-sdk.discovery.DiscoveryBatchDeleteImportDataRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryBatchDeleteImportDataRequest: discovery.DiscoveryBatchDeleteImportDataRequest = { ... }
```

##### `importTaskIds`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryBatchDeleteImportDataRequest.property.importTaskIds"></a>

- *Type:* `string`[]

---

### DiscoveryBatchDeleteImportDataResponse <a name="aws-cdk-sdk.discovery.DiscoveryBatchDeleteImportDataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryBatchDeleteImportDataResponse: discovery.DiscoveryBatchDeleteImportDataResponse = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryBatchDeleteImportDataResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryBatchDeleteImportDataError`](#aws-cdk-sdk.discovery.DiscoveryBatchDeleteImportDataError)[]

---

### DiscoveryConfigurationTag <a name="aws-cdk-sdk.discovery.DiscoveryConfigurationTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryConfigurationTag: discovery.DiscoveryConfigurationTag = { ... }
```

##### `configurationId`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryConfigurationTag.property.configurationId"></a>

- *Type:* `string`

---

##### `configurationType`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryConfigurationTag.property.configurationType"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryConfigurationTag.property.key"></a>

- *Type:* `string`

---

##### `timeOfCreation`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryConfigurationTag.property.timeOfCreation"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryConfigurationTag.property.value"></a>

- *Type:* `string`

---

### DiscoveryContinuousExportDescription <a name="aws-cdk-sdk.discovery.DiscoveryContinuousExportDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryContinuousExportDescription: discovery.DiscoveryContinuousExportDescription = { ... }
```

##### `dataSource`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryContinuousExportDescription.property.dataSource"></a>

- *Type:* `string`

---

##### `exportId`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryContinuousExportDescription.property.exportId"></a>

- *Type:* `string`

---

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryContinuousExportDescription.property.s3Bucket"></a>

- *Type:* `string`

---

##### `schemaStorageConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryContinuousExportDescription.property.schemaStorageConfig"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryContinuousExportDescription.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryContinuousExportDescription.property.status"></a>

- *Type:* `string`

---

##### `statusDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryContinuousExportDescription.property.statusDetail"></a>

- *Type:* `string`

---

##### `stopTime`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryContinuousExportDescription.property.stopTime"></a>

- *Type:* `string`

---

### DiscoveryCreateApplicationRequest <a name="aws-cdk-sdk.discovery.DiscoveryCreateApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryCreateApplicationRequest: discovery.DiscoveryCreateApplicationRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCreateApplicationRequest.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCreateApplicationRequest.property.description"></a>

- *Type:* `string`

---

### DiscoveryCreateApplicationResponse <a name="aws-cdk-sdk.discovery.DiscoveryCreateApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryCreateApplicationResponse: discovery.DiscoveryCreateApplicationResponse = { ... }
```

##### `configurationId`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCreateApplicationResponse.property.configurationId"></a>

- *Type:* `string`

---

### DiscoveryCreateTagsRequest <a name="aws-cdk-sdk.discovery.DiscoveryCreateTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryCreateTagsRequest: discovery.DiscoveryCreateTagsRequest = { ... }
```

##### `configurationIds`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCreateTagsRequest.property.configurationIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCreateTagsRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryTag`](#aws-cdk-sdk.discovery.DiscoveryTag)[]

---

### DiscoveryCreateTagsResponse <a name="aws-cdk-sdk.discovery.DiscoveryCreateTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryCreateTagsResponse: discovery.DiscoveryCreateTagsResponse = { ... }
```

### DiscoveryCustomerAgentInfo <a name="aws-cdk-sdk.discovery.DiscoveryCustomerAgentInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryCustomerAgentInfo: discovery.DiscoveryCustomerAgentInfo = { ... }
```

##### `activeAgents`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCustomerAgentInfo.property.activeAgents"></a>

- *Type:* `number`

---

##### `blackListedAgents`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCustomerAgentInfo.property.blackListedAgents"></a>

- *Type:* `number`

---

##### `healthyAgents`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCustomerAgentInfo.property.healthyAgents"></a>

- *Type:* `number`

---

##### `shutdownAgents`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCustomerAgentInfo.property.shutdownAgents"></a>

- *Type:* `number`

---

##### `totalAgents`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCustomerAgentInfo.property.totalAgents"></a>

- *Type:* `number`

---

##### `unhealthyAgents`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCustomerAgentInfo.property.unhealthyAgents"></a>

- *Type:* `number`

---

##### `unknownAgents`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCustomerAgentInfo.property.unknownAgents"></a>

- *Type:* `number`

---

### DiscoveryCustomerConnectorInfo <a name="aws-cdk-sdk.discovery.DiscoveryCustomerConnectorInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryCustomerConnectorInfo: discovery.DiscoveryCustomerConnectorInfo = { ... }
```

##### `activeConnectors`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCustomerConnectorInfo.property.activeConnectors"></a>

- *Type:* `number`

---

##### `blackListedConnectors`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCustomerConnectorInfo.property.blackListedConnectors"></a>

- *Type:* `number`

---

##### `healthyConnectors`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCustomerConnectorInfo.property.healthyConnectors"></a>

- *Type:* `number`

---

##### `shutdownConnectors`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCustomerConnectorInfo.property.shutdownConnectors"></a>

- *Type:* `number`

---

##### `totalConnectors`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCustomerConnectorInfo.property.totalConnectors"></a>

- *Type:* `number`

---

##### `unhealthyConnectors`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCustomerConnectorInfo.property.unhealthyConnectors"></a>

- *Type:* `number`

---

##### `unknownConnectors`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryCustomerConnectorInfo.property.unknownConnectors"></a>

- *Type:* `number`

---

### DiscoveryDeleteApplicationsRequest <a name="aws-cdk-sdk.discovery.DiscoveryDeleteApplicationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDeleteApplicationsRequest: discovery.DiscoveryDeleteApplicationsRequest = { ... }
```

##### `configurationIds`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDeleteApplicationsRequest.property.configurationIds"></a>

- *Type:* `string`[]

---

### DiscoveryDeleteApplicationsResponse <a name="aws-cdk-sdk.discovery.DiscoveryDeleteApplicationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDeleteApplicationsResponse: discovery.DiscoveryDeleteApplicationsResponse = { ... }
```

### DiscoveryDeleteTagsRequest <a name="aws-cdk-sdk.discovery.DiscoveryDeleteTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDeleteTagsRequest: discovery.DiscoveryDeleteTagsRequest = { ... }
```

##### `configurationIds`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDeleteTagsRequest.property.configurationIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDeleteTagsRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryTag`](#aws-cdk-sdk.discovery.DiscoveryTag)[]

---

### DiscoveryDeleteTagsResponse <a name="aws-cdk-sdk.discovery.DiscoveryDeleteTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDeleteTagsResponse: discovery.DiscoveryDeleteTagsResponse = { ... }
```

### DiscoveryDescribeAgentsRequest <a name="aws-cdk-sdk.discovery.DiscoveryDescribeAgentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDescribeAgentsRequest: discovery.DiscoveryDescribeAgentsRequest = { ... }
```

##### `agentIds`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeAgentsRequest.property.agentIds"></a>

- *Type:* `string`[]

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeAgentsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryFilter`](#aws-cdk-sdk.discovery.DiscoveryFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeAgentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeAgentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DiscoveryDescribeAgentsResponse <a name="aws-cdk-sdk.discovery.DiscoveryDescribeAgentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDescribeAgentsResponse: discovery.DiscoveryDescribeAgentsResponse = { ... }
```

##### `agentsInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeAgentsResponse.property.agentsInfo"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryAgentInfo`](#aws-cdk-sdk.discovery.DiscoveryAgentInfo)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeAgentsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DiscoveryDescribeConfigurationsRequest <a name="aws-cdk-sdk.discovery.DiscoveryDescribeConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDescribeConfigurationsRequest: discovery.DiscoveryDescribeConfigurationsRequest = { ... }
```

##### `configurationIds`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeConfigurationsRequest.property.configurationIds"></a>

- *Type:* `string`[]

---

### DiscoveryDescribeConfigurationsResponse <a name="aws-cdk-sdk.discovery.DiscoveryDescribeConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDescribeConfigurationsResponse: discovery.DiscoveryDescribeConfigurationsResponse = { ... }
```

##### `configurations`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeConfigurationsResponse.property.configurations"></a>

- *Type:* {[ key: string ]: `string`}[]

---

### DiscoveryDescribeContinuousExportsRequest <a name="aws-cdk-sdk.discovery.DiscoveryDescribeContinuousExportsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDescribeContinuousExportsRequest: discovery.DiscoveryDescribeContinuousExportsRequest = { ... }
```

##### `exportIds`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeContinuousExportsRequest.property.exportIds"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeContinuousExportsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeContinuousExportsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DiscoveryDescribeContinuousExportsResponse <a name="aws-cdk-sdk.discovery.DiscoveryDescribeContinuousExportsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDescribeContinuousExportsResponse: discovery.DiscoveryDescribeContinuousExportsResponse = { ... }
```

##### `descriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeContinuousExportsResponse.property.descriptions"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryContinuousExportDescription`](#aws-cdk-sdk.discovery.DiscoveryContinuousExportDescription)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeContinuousExportsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DiscoveryDescribeExportConfigurationsRequest <a name="aws-cdk-sdk.discovery.DiscoveryDescribeExportConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDescribeExportConfigurationsRequest: discovery.DiscoveryDescribeExportConfigurationsRequest = { ... }
```

##### `exportIds`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeExportConfigurationsRequest.property.exportIds"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeExportConfigurationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeExportConfigurationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DiscoveryDescribeExportConfigurationsResponse <a name="aws-cdk-sdk.discovery.DiscoveryDescribeExportConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDescribeExportConfigurationsResponse: discovery.DiscoveryDescribeExportConfigurationsResponse = { ... }
```

##### `exportsInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeExportConfigurationsResponse.property.exportsInfo"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryExportInfo`](#aws-cdk-sdk.discovery.DiscoveryExportInfo)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeExportConfigurationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DiscoveryDescribeExportTasksRequest <a name="aws-cdk-sdk.discovery.DiscoveryDescribeExportTasksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDescribeExportTasksRequest: discovery.DiscoveryDescribeExportTasksRequest = { ... }
```

##### `exportIds`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeExportTasksRequest.property.exportIds"></a>

- *Type:* `string`[]

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeExportTasksRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryExportFilter`](#aws-cdk-sdk.discovery.DiscoveryExportFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeExportTasksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeExportTasksRequest.property.nextToken"></a>

- *Type:* `string`

---

### DiscoveryDescribeExportTasksResponse <a name="aws-cdk-sdk.discovery.DiscoveryDescribeExportTasksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDescribeExportTasksResponse: discovery.DiscoveryDescribeExportTasksResponse = { ... }
```

##### `exportsInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeExportTasksResponse.property.exportsInfo"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryExportInfo`](#aws-cdk-sdk.discovery.DiscoveryExportInfo)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeExportTasksResponse.property.nextToken"></a>

- *Type:* `string`

---

### DiscoveryDescribeImportTasksRequest <a name="aws-cdk-sdk.discovery.DiscoveryDescribeImportTasksRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDescribeImportTasksRequest: discovery.DiscoveryDescribeImportTasksRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeImportTasksRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryImportTaskFilter`](#aws-cdk-sdk.discovery.DiscoveryImportTaskFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeImportTasksRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeImportTasksRequest.property.nextToken"></a>

- *Type:* `string`

---

### DiscoveryDescribeImportTasksResponse <a name="aws-cdk-sdk.discovery.DiscoveryDescribeImportTasksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDescribeImportTasksResponse: discovery.DiscoveryDescribeImportTasksResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeImportTasksResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tasks`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeImportTasksResponse.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryImportTask`](#aws-cdk-sdk.discovery.DiscoveryImportTask)[]

---

### DiscoveryDescribeTagsRequest <a name="aws-cdk-sdk.discovery.DiscoveryDescribeTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDescribeTagsRequest: discovery.DiscoveryDescribeTagsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeTagsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryTagFilter`](#aws-cdk-sdk.discovery.DiscoveryTagFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeTagsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeTagsRequest.property.nextToken"></a>

- *Type:* `string`

---

### DiscoveryDescribeTagsResponse <a name="aws-cdk-sdk.discovery.DiscoveryDescribeTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDescribeTagsResponse: discovery.DiscoveryDescribeTagsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeTagsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDescribeTagsResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryConfigurationTag`](#aws-cdk-sdk.discovery.DiscoveryConfigurationTag)[]

---

### DiscoveryDisassociateConfigurationItemsFromApplicationRequest <a name="aws-cdk-sdk.discovery.DiscoveryDisassociateConfigurationItemsFromApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDisassociateConfigurationItemsFromApplicationRequest: discovery.DiscoveryDisassociateConfigurationItemsFromApplicationRequest = { ... }
```

##### `applicationConfigurationId`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDisassociateConfigurationItemsFromApplicationRequest.property.applicationConfigurationId"></a>

- *Type:* `string`

---

##### `configurationIds`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryDisassociateConfigurationItemsFromApplicationRequest.property.configurationIds"></a>

- *Type:* `string`[]

---

### DiscoveryDisassociateConfigurationItemsFromApplicationResponse <a name="aws-cdk-sdk.discovery.DiscoveryDisassociateConfigurationItemsFromApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryDisassociateConfigurationItemsFromApplicationResponse: discovery.DiscoveryDisassociateConfigurationItemsFromApplicationResponse = { ... }
```

### DiscoveryExportConfigurationsResponse <a name="aws-cdk-sdk.discovery.DiscoveryExportConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryExportConfigurationsResponse: discovery.DiscoveryExportConfigurationsResponse = { ... }
```

##### `exportId`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryExportConfigurationsResponse.property.exportId"></a>

- *Type:* `string`

---

### DiscoveryExportFilter <a name="aws-cdk-sdk.discovery.DiscoveryExportFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryExportFilter: discovery.DiscoveryExportFilter = { ... }
```

##### `condition`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryExportFilter.property.condition"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryExportFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryExportFilter.property.values"></a>

- *Type:* `string`[]

---

### DiscoveryExportInfo <a name="aws-cdk-sdk.discovery.DiscoveryExportInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryExportInfo: discovery.DiscoveryExportInfo = { ... }
```

##### `exportId`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryExportInfo.property.exportId"></a>

- *Type:* `string`

---

##### `exportRequestTime`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryExportInfo.property.exportRequestTime"></a>

- *Type:* `string`

---

##### `exportStatus`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryExportInfo.property.exportStatus"></a>

- *Type:* `string`

---

##### `statusMessage`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryExportInfo.property.statusMessage"></a>

- *Type:* `string`

---

##### `configurationsDownloadUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryExportInfo.property.configurationsDownloadUrl"></a>

- *Type:* `string`

---

##### `isTruncated`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryExportInfo.property.isTruncated"></a>

- *Type:* `boolean`

---

##### `requestedEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryExportInfo.property.requestedEndTime"></a>

- *Type:* `string`

---

##### `requestedStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryExportInfo.property.requestedStartTime"></a>

- *Type:* `string`

---

### DiscoveryFilter <a name="aws-cdk-sdk.discovery.DiscoveryFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryFilter: discovery.DiscoveryFilter = { ... }
```

##### `condition`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryFilter.property.condition"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryFilter.property.values"></a>

- *Type:* `string`[]

---

### DiscoveryGetDiscoverySummaryRequest <a name="aws-cdk-sdk.discovery.DiscoveryGetDiscoverySummaryRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryGetDiscoverySummaryRequest: discovery.DiscoveryGetDiscoverySummaryRequest = { ... }
```

### DiscoveryGetDiscoverySummaryResponse <a name="aws-cdk-sdk.discovery.DiscoveryGetDiscoverySummaryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryGetDiscoverySummaryResponse: discovery.DiscoveryGetDiscoverySummaryResponse = { ... }
```

##### `agentSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryGetDiscoverySummaryResponse.property.agentSummary"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryCustomerAgentInfo`](#aws-cdk-sdk.discovery.DiscoveryCustomerAgentInfo)

---

##### `applications`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryGetDiscoverySummaryResponse.property.applications"></a>

- *Type:* `number`

---

##### `connectorSummary`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryGetDiscoverySummaryResponse.property.connectorSummary"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryCustomerConnectorInfo`](#aws-cdk-sdk.discovery.DiscoveryCustomerConnectorInfo)

---

##### `servers`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryGetDiscoverySummaryResponse.property.servers"></a>

- *Type:* `number`

---

##### `serversMappedToApplications`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryGetDiscoverySummaryResponse.property.serversMappedToApplications"></a>

- *Type:* `number`

---

##### `serversMappedtoTags`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryGetDiscoverySummaryResponse.property.serversMappedtoTags"></a>

- *Type:* `number`

---

### DiscoveryImportTask <a name="aws-cdk-sdk.discovery.DiscoveryImportTask"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryImportTask: discovery.DiscoveryImportTask = { ... }
```

##### `applicationImportFailure`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryImportTask.property.applicationImportFailure"></a>

- *Type:* `number`

---

##### `applicationImportSuccess`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryImportTask.property.applicationImportSuccess"></a>

- *Type:* `number`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryImportTask.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `errorsAndFailedEntriesZip`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryImportTask.property.errorsAndFailedEntriesZip"></a>

- *Type:* `string`

---

##### `importCompletionTime`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryImportTask.property.importCompletionTime"></a>

- *Type:* `string`

---

##### `importDeletedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryImportTask.property.importDeletedTime"></a>

- *Type:* `string`

---

##### `importRequestTime`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryImportTask.property.importRequestTime"></a>

- *Type:* `string`

---

##### `importTaskId`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryImportTask.property.importTaskId"></a>

- *Type:* `string`

---

##### `importUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryImportTask.property.importUrl"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryImportTask.property.name"></a>

- *Type:* `string`

---

##### `serverImportFailure`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryImportTask.property.serverImportFailure"></a>

- *Type:* `number`

---

##### `serverImportSuccess`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryImportTask.property.serverImportSuccess"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryImportTask.property.status"></a>

- *Type:* `string`

---

### DiscoveryImportTaskFilter <a name="aws-cdk-sdk.discovery.DiscoveryImportTaskFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryImportTaskFilter: discovery.DiscoveryImportTaskFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryImportTaskFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryImportTaskFilter.property.values"></a>

- *Type:* `string`[]

---

### DiscoveryListConfigurationsRequest <a name="aws-cdk-sdk.discovery.DiscoveryListConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryListConfigurationsRequest: discovery.DiscoveryListConfigurationsRequest = { ... }
```

##### `configurationType`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryListConfigurationsRequest.property.configurationType"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryListConfigurationsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryFilter`](#aws-cdk-sdk.discovery.DiscoveryFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryListConfigurationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryListConfigurationsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `orderBy`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryListConfigurationsRequest.property.orderBy"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryOrderByElement`](#aws-cdk-sdk.discovery.DiscoveryOrderByElement)[]

---

### DiscoveryListConfigurationsResponse <a name="aws-cdk-sdk.discovery.DiscoveryListConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryListConfigurationsResponse: discovery.DiscoveryListConfigurationsResponse = { ... }
```

##### `configurations`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryListConfigurationsResponse.property.configurations"></a>

- *Type:* {[ key: string ]: `string`}[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryListConfigurationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DiscoveryListServerNeighborsRequest <a name="aws-cdk-sdk.discovery.DiscoveryListServerNeighborsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryListServerNeighborsRequest: discovery.DiscoveryListServerNeighborsRequest = { ... }
```

##### `configurationId`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryListServerNeighborsRequest.property.configurationId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryListServerNeighborsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `neighborConfigurationIds`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryListServerNeighborsRequest.property.neighborConfigurationIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryListServerNeighborsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `portInformationNeeded`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryListServerNeighborsRequest.property.portInformationNeeded"></a>

- *Type:* `boolean`

---

### DiscoveryListServerNeighborsResponse <a name="aws-cdk-sdk.discovery.DiscoveryListServerNeighborsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryListServerNeighborsResponse: discovery.DiscoveryListServerNeighborsResponse = { ... }
```

##### `neighbors`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryListServerNeighborsResponse.property.neighbors"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryNeighborConnectionDetail`](#aws-cdk-sdk.discovery.DiscoveryNeighborConnectionDetail)[]

---

##### `knownDependencyCount`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryListServerNeighborsResponse.property.knownDependencyCount"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryListServerNeighborsResponse.property.nextToken"></a>

- *Type:* `string`

---

### DiscoveryNeighborConnectionDetail <a name="aws-cdk-sdk.discovery.DiscoveryNeighborConnectionDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryNeighborConnectionDetail: discovery.DiscoveryNeighborConnectionDetail = { ... }
```

##### `connectionsCount`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryNeighborConnectionDetail.property.connectionsCount"></a>

- *Type:* `number`

---

##### `destinationServerId`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryNeighborConnectionDetail.property.destinationServerId"></a>

- *Type:* `string`

---

##### `sourceServerId`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryNeighborConnectionDetail.property.sourceServerId"></a>

- *Type:* `string`

---

##### `destinationPort`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryNeighborConnectionDetail.property.destinationPort"></a>

- *Type:* `number`

---

##### `transportProtocol`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryNeighborConnectionDetail.property.transportProtocol"></a>

- *Type:* `string`

---

### DiscoveryOrderByElement <a name="aws-cdk-sdk.discovery.DiscoveryOrderByElement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryOrderByElement: discovery.DiscoveryOrderByElement = { ... }
```

##### `fieldName`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryOrderByElement.property.fieldName"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryOrderByElement.property.sortOrder"></a>

- *Type:* `string`

---

### DiscoveryStartContinuousExportRequest <a name="aws-cdk-sdk.discovery.DiscoveryStartContinuousExportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryStartContinuousExportRequest: discovery.DiscoveryStartContinuousExportRequest = { ... }
```

### DiscoveryStartContinuousExportResponse <a name="aws-cdk-sdk.discovery.DiscoveryStartContinuousExportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryStartContinuousExportResponse: discovery.DiscoveryStartContinuousExportResponse = { ... }
```

##### `dataSource`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStartContinuousExportResponse.property.dataSource"></a>

- *Type:* `string`

---

##### `exportId`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStartContinuousExportResponse.property.exportId"></a>

- *Type:* `string`

---

##### `s3Bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStartContinuousExportResponse.property.s3Bucket"></a>

- *Type:* `string`

---

##### `schemaStorageConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStartContinuousExportResponse.property.schemaStorageConfig"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStartContinuousExportResponse.property.startTime"></a>

- *Type:* `string`

---

### DiscoveryStartDataCollectionByAgentIdsRequest <a name="aws-cdk-sdk.discovery.DiscoveryStartDataCollectionByAgentIdsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryStartDataCollectionByAgentIdsRequest: discovery.DiscoveryStartDataCollectionByAgentIdsRequest = { ... }
```

##### `agentIds`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStartDataCollectionByAgentIdsRequest.property.agentIds"></a>

- *Type:* `string`[]

---

### DiscoveryStartDataCollectionByAgentIdsResponse <a name="aws-cdk-sdk.discovery.DiscoveryStartDataCollectionByAgentIdsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryStartDataCollectionByAgentIdsResponse: discovery.DiscoveryStartDataCollectionByAgentIdsResponse = { ... }
```

##### `agentsConfigurationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStartDataCollectionByAgentIdsResponse.property.agentsConfigurationStatus"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryAgentConfigurationStatus`](#aws-cdk-sdk.discovery.DiscoveryAgentConfigurationStatus)[]

---

### DiscoveryStartExportTaskRequest <a name="aws-cdk-sdk.discovery.DiscoveryStartExportTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryStartExportTaskRequest: discovery.DiscoveryStartExportTaskRequest = { ... }
```

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStartExportTaskRequest.property.endTime"></a>

- *Type:* `string`

---

##### `exportDataFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStartExportTaskRequest.property.exportDataFormat"></a>

- *Type:* `string`[]

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStartExportTaskRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryExportFilter`](#aws-cdk-sdk.discovery.DiscoveryExportFilter)[]

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStartExportTaskRequest.property.startTime"></a>

- *Type:* `string`

---

### DiscoveryStartExportTaskResponse <a name="aws-cdk-sdk.discovery.DiscoveryStartExportTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryStartExportTaskResponse: discovery.DiscoveryStartExportTaskResponse = { ... }
```

##### `exportId`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStartExportTaskResponse.property.exportId"></a>

- *Type:* `string`

---

### DiscoveryStartImportTaskRequest <a name="aws-cdk-sdk.discovery.DiscoveryStartImportTaskRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryStartImportTaskRequest: discovery.DiscoveryStartImportTaskRequest = { ... }
```

##### `importUrl`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStartImportTaskRequest.property.importUrl"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStartImportTaskRequest.property.name"></a>

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStartImportTaskRequest.property.clientRequestToken"></a>

- *Type:* `string`

---

### DiscoveryStartImportTaskResponse <a name="aws-cdk-sdk.discovery.DiscoveryStartImportTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryStartImportTaskResponse: discovery.DiscoveryStartImportTaskResponse = { ... }
```

##### `task`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStartImportTaskResponse.property.task"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryImportTask`](#aws-cdk-sdk.discovery.DiscoveryImportTask)

---

### DiscoveryStopContinuousExportRequest <a name="aws-cdk-sdk.discovery.DiscoveryStopContinuousExportRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryStopContinuousExportRequest: discovery.DiscoveryStopContinuousExportRequest = { ... }
```

##### `exportId`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStopContinuousExportRequest.property.exportId"></a>

- *Type:* `string`

---

### DiscoveryStopContinuousExportResponse <a name="aws-cdk-sdk.discovery.DiscoveryStopContinuousExportResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryStopContinuousExportResponse: discovery.DiscoveryStopContinuousExportResponse = { ... }
```

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStopContinuousExportResponse.property.startTime"></a>

- *Type:* `string`

---

##### `stopTime`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStopContinuousExportResponse.property.stopTime"></a>

- *Type:* `string`

---

### DiscoveryStopDataCollectionByAgentIdsRequest <a name="aws-cdk-sdk.discovery.DiscoveryStopDataCollectionByAgentIdsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryStopDataCollectionByAgentIdsRequest: discovery.DiscoveryStopDataCollectionByAgentIdsRequest = { ... }
```

##### `agentIds`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStopDataCollectionByAgentIdsRequest.property.agentIds"></a>

- *Type:* `string`[]

---

### DiscoveryStopDataCollectionByAgentIdsResponse <a name="aws-cdk-sdk.discovery.DiscoveryStopDataCollectionByAgentIdsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryStopDataCollectionByAgentIdsResponse: discovery.DiscoveryStopDataCollectionByAgentIdsResponse = { ... }
```

##### `agentsConfigurationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryStopDataCollectionByAgentIdsResponse.property.agentsConfigurationStatus"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryAgentConfigurationStatus`](#aws-cdk-sdk.discovery.DiscoveryAgentConfigurationStatus)[]

---

### DiscoveryTag <a name="aws-cdk-sdk.discovery.DiscoveryTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryTag: discovery.DiscoveryTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryTag.property.value"></a>

- *Type:* `string`

---

### DiscoveryTagFilter <a name="aws-cdk-sdk.discovery.DiscoveryTagFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryTagFilter: discovery.DiscoveryTagFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryTagFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryTagFilter.property.values"></a>

- *Type:* `string`[]

---

### DiscoveryUpdateApplicationRequest <a name="aws-cdk-sdk.discovery.DiscoveryUpdateApplicationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryUpdateApplicationRequest: discovery.DiscoveryUpdateApplicationRequest = { ... }
```

##### `configurationId`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryUpdateApplicationRequest.property.configurationId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryUpdateApplicationRequest.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.discovery.DiscoveryUpdateApplicationRequest.property.name"></a>

- *Type:* `string`

---

### DiscoveryUpdateApplicationResponse <a name="aws-cdk-sdk.discovery.DiscoveryUpdateApplicationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

const discoveryUpdateApplicationResponse: discovery.DiscoveryUpdateApplicationResponse = { ... }
```

## Classes <a name="Classes"></a>

### DiscoveryResponsesBatchDeleteImportData <a name="aws-cdk-sdk.discovery.DiscoveryResponsesBatchDeleteImportData"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesBatchDeleteImportData.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesBatchDeleteImportData(__scope: Construct, __resources: string[], __input: DiscoveryBatchDeleteImportDataRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesBatchDeleteImportData.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesBatchDeleteImportData.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesBatchDeleteImportData.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryBatchDeleteImportDataRequest`](#aws-cdk-sdk.discovery.DiscoveryBatchDeleteImportDataRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesBatchDeleteImportData.property.errors"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryBatchDeleteImportDataError`](#aws-cdk-sdk.discovery.DiscoveryBatchDeleteImportDataError)[]

---


### DiscoveryResponsesCreateApplication <a name="aws-cdk-sdk.discovery.DiscoveryResponsesCreateApplication"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesCreateApplication.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesCreateApplication(__scope: Construct, __resources: string[], __input: DiscoveryCreateApplicationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesCreateApplication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesCreateApplication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesCreateApplication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryCreateApplicationRequest`](#aws-cdk-sdk.discovery.DiscoveryCreateApplicationRequest)

---



#### Properties <a name="Properties"></a>

##### `configurationId`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesCreateApplication.property.configurationId"></a>

- *Type:* `string`

---


### DiscoveryResponsesDescribeAgents <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeAgents"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeAgents.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesDescribeAgents(__scope: Construct, __resources: string[], __input: DiscoveryDescribeAgentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeAgents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeAgents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeAgents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryDescribeAgentsRequest`](#aws-cdk-sdk.discovery.DiscoveryDescribeAgentsRequest)

---



#### Properties <a name="Properties"></a>

##### `agentsInfo`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeAgents.property.agentsInfo"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryAgentInfo`](#aws-cdk-sdk.discovery.DiscoveryAgentInfo)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeAgents.property.nextToken"></a>

- *Type:* `string`

---


### DiscoveryResponsesDescribeConfigurations <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeConfigurations.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesDescribeConfigurations(__scope: Construct, __resources: string[], __input: DiscoveryDescribeConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryDescribeConfigurationsRequest`](#aws-cdk-sdk.discovery.DiscoveryDescribeConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `configurations`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeConfigurations.property.configurations"></a>

- *Type:* {[ key: string ]: `string`}[]

---


### DiscoveryResponsesDescribeContinuousExports <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeContinuousExports"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeContinuousExports.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesDescribeContinuousExports(__scope: Construct, __resources: string[], __input: DiscoveryDescribeContinuousExportsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeContinuousExports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeContinuousExports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeContinuousExports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryDescribeContinuousExportsRequest`](#aws-cdk-sdk.discovery.DiscoveryDescribeContinuousExportsRequest)

---



#### Properties <a name="Properties"></a>

##### `descriptions`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeContinuousExports.property.descriptions"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryContinuousExportDescription`](#aws-cdk-sdk.discovery.DiscoveryContinuousExportDescription)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeContinuousExports.property.nextToken"></a>

- *Type:* `string`

---


### DiscoveryResponsesDescribeExportConfigurations <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeExportConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeExportConfigurations.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesDescribeExportConfigurations(__scope: Construct, __resources: string[], __input: DiscoveryDescribeExportConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeExportConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeExportConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeExportConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryDescribeExportConfigurationsRequest`](#aws-cdk-sdk.discovery.DiscoveryDescribeExportConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `exportsInfo`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeExportConfigurations.property.exportsInfo"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryExportInfo`](#aws-cdk-sdk.discovery.DiscoveryExportInfo)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeExportConfigurations.property.nextToken"></a>

- *Type:* `string`

---


### DiscoveryResponsesDescribeExportTasks <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeExportTasks"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeExportTasks.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesDescribeExportTasks(__scope: Construct, __resources: string[], __input: DiscoveryDescribeExportTasksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeExportTasks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeExportTasks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeExportTasks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryDescribeExportTasksRequest`](#aws-cdk-sdk.discovery.DiscoveryDescribeExportTasksRequest)

---



#### Properties <a name="Properties"></a>

##### `exportsInfo`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeExportTasks.property.exportsInfo"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryExportInfo`](#aws-cdk-sdk.discovery.DiscoveryExportInfo)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeExportTasks.property.nextToken"></a>

- *Type:* `string`

---


### DiscoveryResponsesDescribeImportTasks <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeImportTasks"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeImportTasks.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesDescribeImportTasks(__scope: Construct, __resources: string[], __input: DiscoveryDescribeImportTasksRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeImportTasks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeImportTasks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeImportTasks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryDescribeImportTasksRequest`](#aws-cdk-sdk.discovery.DiscoveryDescribeImportTasksRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeImportTasks.property.nextToken"></a>

- *Type:* `string`

---

##### `tasks`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeImportTasks.property.tasks"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryImportTask`](#aws-cdk-sdk.discovery.DiscoveryImportTask)[]

---


### DiscoveryResponsesDescribeTags <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeTags"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeTags.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesDescribeTags(__scope: Construct, __resources: string[], __input: DiscoveryDescribeTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryDescribeTagsRequest`](#aws-cdk-sdk.discovery.DiscoveryDescribeTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeTags.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesDescribeTags.property.tags"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryConfigurationTag`](#aws-cdk-sdk.discovery.DiscoveryConfigurationTag)[]

---


### DiscoveryResponsesExportConfigurations <a name="aws-cdk-sdk.discovery.DiscoveryResponsesExportConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesExportConfigurations.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesExportConfigurations(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesExportConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesExportConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `exportId`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesExportConfigurations.property.exportId"></a>

- *Type:* `string`

---


### DiscoveryResponsesFetchDiscoverySummary <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummary"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummary.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesFetchDiscoverySummary(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummary.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `agentSummary`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummary.property.agentSummary"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryAgentSummary`](#aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryAgentSummary)

---

##### `applications`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummary.property.applications"></a>

- *Type:* `number`

---

##### `connectorSummary`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummary.property.connectorSummary"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryConnectorSummary`](#aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryConnectorSummary)

---

##### `servers`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummary.property.servers"></a>

- *Type:* `number`

---

##### `serversMappedToApplications`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummary.property.serversMappedToApplications"></a>

- *Type:* `number`

---

##### `serversMappedtoTags`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummary.property.serversMappedtoTags"></a>

- *Type:* `number`

---


### DiscoveryResponsesFetchDiscoverySummaryAgentSummary <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryAgentSummary"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryAgentSummary.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesFetchDiscoverySummaryAgentSummary(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryAgentSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryAgentSummary.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `activeAgents`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryAgentSummary.property.activeAgents"></a>

- *Type:* `number`

---

##### `blackListedAgents`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryAgentSummary.property.blackListedAgents"></a>

- *Type:* `number`

---

##### `healthyAgents`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryAgentSummary.property.healthyAgents"></a>

- *Type:* `number`

---

##### `shutdownAgents`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryAgentSummary.property.shutdownAgents"></a>

- *Type:* `number`

---

##### `totalAgents`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryAgentSummary.property.totalAgents"></a>

- *Type:* `number`

---

##### `unhealthyAgents`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryAgentSummary.property.unhealthyAgents"></a>

- *Type:* `number`

---

##### `unknownAgents`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryAgentSummary.property.unknownAgents"></a>

- *Type:* `number`

---


### DiscoveryResponsesFetchDiscoverySummaryConnectorSummary <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryConnectorSummary"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryConnectorSummary.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesFetchDiscoverySummaryConnectorSummary(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryConnectorSummary.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryConnectorSummary.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `activeConnectors`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryConnectorSummary.property.activeConnectors"></a>

- *Type:* `number`

---

##### `blackListedConnectors`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryConnectorSummary.property.blackListedConnectors"></a>

- *Type:* `number`

---

##### `healthyConnectors`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryConnectorSummary.property.healthyConnectors"></a>

- *Type:* `number`

---

##### `shutdownConnectors`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryConnectorSummary.property.shutdownConnectors"></a>

- *Type:* `number`

---

##### `totalConnectors`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryConnectorSummary.property.totalConnectors"></a>

- *Type:* `number`

---

##### `unhealthyConnectors`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryConnectorSummary.property.unhealthyConnectors"></a>

- *Type:* `number`

---

##### `unknownConnectors`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesFetchDiscoverySummaryConnectorSummary.property.unknownConnectors"></a>

- *Type:* `number`

---


### DiscoveryResponsesListConfigurations <a name="aws-cdk-sdk.discovery.DiscoveryResponsesListConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesListConfigurations.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesListConfigurations(__scope: Construct, __resources: string[], __input: DiscoveryListConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesListConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesListConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesListConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryListConfigurationsRequest`](#aws-cdk-sdk.discovery.DiscoveryListConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `configurations`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesListConfigurations.property.configurations"></a>

- *Type:* {[ key: string ]: `string`}[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesListConfigurations.property.nextToken"></a>

- *Type:* `string`

---


### DiscoveryResponsesListServerNeighbors <a name="aws-cdk-sdk.discovery.DiscoveryResponsesListServerNeighbors"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesListServerNeighbors.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesListServerNeighbors(__scope: Construct, __resources: string[], __input: DiscoveryListServerNeighborsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesListServerNeighbors.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesListServerNeighbors.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesListServerNeighbors.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryListServerNeighborsRequest`](#aws-cdk-sdk.discovery.DiscoveryListServerNeighborsRequest)

---



#### Properties <a name="Properties"></a>

##### `knownDependencyCount`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesListServerNeighbors.property.knownDependencyCount"></a>

- *Type:* `number`

---

##### `neighbors`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesListServerNeighbors.property.neighbors"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryNeighborConnectionDetail`](#aws-cdk-sdk.discovery.DiscoveryNeighborConnectionDetail)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesListServerNeighbors.property.nextToken"></a>

- *Type:* `string`

---


### DiscoveryResponsesStartContinuousExport <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartContinuousExport"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartContinuousExport.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesStartContinuousExport(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartContinuousExport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartContinuousExport.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `dataSource`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartContinuousExport.property.dataSource"></a>

- *Type:* `string`

---

##### `exportId`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartContinuousExport.property.exportId"></a>

- *Type:* `string`

---

##### `s3Bucket`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartContinuousExport.property.s3Bucket"></a>

- *Type:* `string`

---

##### `schemaStorageConfig`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartContinuousExport.property.schemaStorageConfig"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartContinuousExport.property.startTime"></a>

- *Type:* `string`

---


### DiscoveryResponsesStartDataCollectionByAgentIds <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartDataCollectionByAgentIds"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartDataCollectionByAgentIds.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesStartDataCollectionByAgentIds(__scope: Construct, __resources: string[], __input: DiscoveryStartDataCollectionByAgentIdsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartDataCollectionByAgentIds.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartDataCollectionByAgentIds.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartDataCollectionByAgentIds.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryStartDataCollectionByAgentIdsRequest`](#aws-cdk-sdk.discovery.DiscoveryStartDataCollectionByAgentIdsRequest)

---



#### Properties <a name="Properties"></a>

##### `agentsConfigurationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartDataCollectionByAgentIds.property.agentsConfigurationStatus"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryAgentConfigurationStatus`](#aws-cdk-sdk.discovery.DiscoveryAgentConfigurationStatus)[]

---


### DiscoveryResponsesStartExportTask <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartExportTask"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartExportTask.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesStartExportTask(__scope: Construct, __resources: string[], __input: DiscoveryStartExportTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartExportTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartExportTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartExportTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryStartExportTaskRequest`](#aws-cdk-sdk.discovery.DiscoveryStartExportTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `exportId`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartExportTask.property.exportId"></a>

- *Type:* `string`

---


### DiscoveryResponsesStartImportTask <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTask"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTask.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesStartImportTask(__scope: Construct, __resources: string[], __input: DiscoveryStartImportTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryStartImportTaskRequest`](#aws-cdk-sdk.discovery.DiscoveryStartImportTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `task`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTask.property.task"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask`](#aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask)

---


### DiscoveryResponsesStartImportTaskTask <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesStartImportTaskTask(__scope: Construct, __resources: string[], __input: DiscoveryStartImportTaskRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryStartImportTaskRequest`](#aws-cdk-sdk.discovery.DiscoveryStartImportTaskRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationImportFailure`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask.property.applicationImportFailure"></a>

- *Type:* `number`

---

##### `applicationImportSuccess`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask.property.applicationImportSuccess"></a>

- *Type:* `number`

---

##### `clientRequestToken`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask.property.clientRequestToken"></a>

- *Type:* `string`

---

##### `errorsAndFailedEntriesZip`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask.property.errorsAndFailedEntriesZip"></a>

- *Type:* `string`

---

##### `importCompletionTime`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask.property.importCompletionTime"></a>

- *Type:* `string`

---

##### `importDeletedTime`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask.property.importDeletedTime"></a>

- *Type:* `string`

---

##### `importRequestTime`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask.property.importRequestTime"></a>

- *Type:* `string`

---

##### `importTaskId`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask.property.importTaskId"></a>

- *Type:* `string`

---

##### `importUrl`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask.property.importUrl"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask.property.name"></a>

- *Type:* `string`

---

##### `serverImportFailure`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask.property.serverImportFailure"></a>

- *Type:* `number`

---

##### `serverImportSuccess`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask.property.serverImportSuccess"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStartImportTaskTask.property.status"></a>

- *Type:* `string`

---


### DiscoveryResponsesStopContinuousExport <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStopContinuousExport"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStopContinuousExport.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesStopContinuousExport(__scope: Construct, __resources: string[], __input: DiscoveryStopContinuousExportRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStopContinuousExport.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStopContinuousExport.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStopContinuousExport.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryStopContinuousExportRequest`](#aws-cdk-sdk.discovery.DiscoveryStopContinuousExportRequest)

---



#### Properties <a name="Properties"></a>

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStopContinuousExport.property.startTime"></a>

- *Type:* `string`

---

##### `stopTime`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStopContinuousExport.property.stopTime"></a>

- *Type:* `string`

---


### DiscoveryResponsesStopDataCollectionByAgentIds <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStopDataCollectionByAgentIds"></a>

#### Initializer <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStopDataCollectionByAgentIds.Initializer"></a>

```typescript
import { discovery } from 'aws-cdk-sdk'

new discovery.DiscoveryResponsesStopDataCollectionByAgentIds(__scope: Construct, __resources: string[], __input: DiscoveryStopDataCollectionByAgentIdsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStopDataCollectionByAgentIds.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStopDataCollectionByAgentIds.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStopDataCollectionByAgentIds.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryStopDataCollectionByAgentIdsRequest`](#aws-cdk-sdk.discovery.DiscoveryStopDataCollectionByAgentIdsRequest)

---



#### Properties <a name="Properties"></a>

##### `agentsConfigurationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.discovery.DiscoveryResponsesStopDataCollectionByAgentIds.property.agentsConfigurationStatus"></a>

- *Type:* [`aws-cdk-sdk.discovery.DiscoveryAgentConfigurationStatus`](#aws-cdk-sdk.discovery.DiscoveryAgentConfigurationStatus)[]

---



