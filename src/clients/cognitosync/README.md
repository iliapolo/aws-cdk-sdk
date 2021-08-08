# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CognitoSyncClient <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `bulkPublish` <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.bulkPublish"></a>

```typescript
public bulkPublish(input: CognitoSyncBulkPublishRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncBulkPublishRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncBulkPublishRequest)

---

##### `deleteDataset` <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.deleteDataset"></a>

```typescript
public deleteDataset(input: CognitoSyncDeleteDatasetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncDeleteDatasetRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncDeleteDatasetRequest)

---

##### `describeDataset` <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.describeDataset"></a>

```typescript
public describeDataset(input: CognitoSyncDescribeDatasetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncDescribeDatasetRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncDescribeDatasetRequest)

---

##### `describeIdentityPoolUsage` <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.describeIdentityPoolUsage"></a>

```typescript
public describeIdentityPoolUsage(input: CognitoSyncDescribeIdentityPoolUsageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityPoolUsageRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityPoolUsageRequest)

---

##### `describeIdentityUsage` <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.describeIdentityUsage"></a>

```typescript
public describeIdentityUsage(input: CognitoSyncDescribeIdentityUsageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityUsageRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityUsageRequest)

---

##### `fetchBulkPublishDetails` <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.fetchBulkPublishDetails"></a>

```typescript
public fetchBulkPublishDetails(input: CognitoSyncGetBulkPublishDetailsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncGetBulkPublishDetailsRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncGetBulkPublishDetailsRequest)

---

##### `fetchCognitoEvents` <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.fetchCognitoEvents"></a>

```typescript
public fetchCognitoEvents(input: CognitoSyncGetCognitoEventsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncGetCognitoEventsRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncGetCognitoEventsRequest)

---

##### `fetchIdentityPoolConfiguration` <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.fetchIdentityPoolConfiguration"></a>

```typescript
public fetchIdentityPoolConfiguration(input: CognitoSyncGetIdentityPoolConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncGetIdentityPoolConfigurationRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncGetIdentityPoolConfigurationRequest)

---

##### `listDatasets` <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.listDatasets"></a>

```typescript
public listDatasets(input: CognitoSyncListDatasetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncListDatasetsRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncListDatasetsRequest)

---

##### `listIdentityPoolUsage` <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.listIdentityPoolUsage"></a>

```typescript
public listIdentityPoolUsage(input: CognitoSyncListIdentityPoolUsageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncListIdentityPoolUsageRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncListIdentityPoolUsageRequest)

---

##### `listRecords` <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.listRecords"></a>

```typescript
public listRecords(input: CognitoSyncListRecordsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncListRecordsRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncListRecordsRequest)

---

##### `putCognitoEvents` <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.putCognitoEvents"></a>

```typescript
public putCognitoEvents(input: CognitoSyncSetCognitoEventsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncSetCognitoEventsRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncSetCognitoEventsRequest)

---

##### `putIdentityPoolConfiguration` <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.putIdentityPoolConfiguration"></a>

```typescript
public putIdentityPoolConfiguration(input: CognitoSyncSetIdentityPoolConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncSetIdentityPoolConfigurationRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncSetIdentityPoolConfigurationRequest)

---

##### `registerDevice` <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.registerDevice"></a>

```typescript
public registerDevice(input: CognitoSyncRegisterDeviceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncRegisterDeviceRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncRegisterDeviceRequest)

---

##### `subscribeToDataset` <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.subscribeToDataset"></a>

```typescript
public subscribeToDataset(input: CognitoSyncSubscribeToDatasetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncSubscribeToDatasetRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncSubscribeToDatasetRequest)

---

##### `unsubscribeFromDataset` <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.unsubscribeFromDataset"></a>

```typescript
public unsubscribeFromDataset(input: CognitoSyncUnsubscribeFromDatasetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncUnsubscribeFromDatasetRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncUnsubscribeFromDatasetRequest)

---

##### `updateRecords` <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.updateRecords"></a>

```typescript
public updateRecords(input: CognitoSyncUpdateRecordsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncUpdateRecordsRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncUpdateRecordsRequest)

---




## Structs <a name="Structs"></a>

### CognitoSyncBulkPublishRequest <a name="aws-cdk-sdk.cognitosync.CognitoSyncBulkPublishRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncBulkPublishRequest: cognitosync.CognitoSyncBulkPublishRequest = { ... }
```

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncBulkPublishRequest.property.identityPoolId"></a>

- *Type:* `string`

---

### CognitoSyncBulkPublishResponse <a name="aws-cdk-sdk.cognitosync.CognitoSyncBulkPublishResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncBulkPublishResponse: cognitosync.CognitoSyncBulkPublishResponse = { ... }
```

##### `identityPoolId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncBulkPublishResponse.property.identityPoolId"></a>

- *Type:* `string`

---

### CognitoSyncCognitoStreams <a name="aws-cdk-sdk.cognitosync.CognitoSyncCognitoStreams"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncCognitoStreams: cognitosync.CognitoSyncCognitoStreams = { ... }
```

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncCognitoStreams.property.roleArn"></a>

- *Type:* `string`

---

##### `streamingStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncCognitoStreams.property.streamingStatus"></a>

- *Type:* `string`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncCognitoStreams.property.streamName"></a>

- *Type:* `string`

---

### CognitoSyncDataset <a name="aws-cdk-sdk.cognitosync.CognitoSyncDataset"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncDataset: cognitosync.CognitoSyncDataset = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDataset.property.creationDate"></a>

- *Type:* `string`

---

##### `datasetName`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDataset.property.datasetName"></a>

- *Type:* `string`

---

##### `dataStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDataset.property.dataStorage"></a>

- *Type:* `number`

---

##### `identityId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDataset.property.identityId"></a>

- *Type:* `string`

---

##### `lastModifiedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDataset.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDataset.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `numRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDataset.property.numRecords"></a>

- *Type:* `number`

---

### CognitoSyncDeleteDatasetRequest <a name="aws-cdk-sdk.cognitosync.CognitoSyncDeleteDatasetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncDeleteDatasetRequest: cognitosync.CognitoSyncDeleteDatasetRequest = { ... }
```

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDeleteDatasetRequest.property.datasetName"></a>

- *Type:* `string`

---

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDeleteDatasetRequest.property.identityId"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDeleteDatasetRequest.property.identityPoolId"></a>

- *Type:* `string`

---

### CognitoSyncDeleteDatasetResponse <a name="aws-cdk-sdk.cognitosync.CognitoSyncDeleteDatasetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncDeleteDatasetResponse: cognitosync.CognitoSyncDeleteDatasetResponse = { ... }
```

##### `dataset`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDeleteDatasetResponse.property.dataset"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncDataset`](#aws-cdk-sdk.cognitosync.CognitoSyncDataset)

---

### CognitoSyncDescribeDatasetRequest <a name="aws-cdk-sdk.cognitosync.CognitoSyncDescribeDatasetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncDescribeDatasetRequest: cognitosync.CognitoSyncDescribeDatasetRequest = { ... }
```

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDescribeDatasetRequest.property.datasetName"></a>

- *Type:* `string`

---

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDescribeDatasetRequest.property.identityId"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDescribeDatasetRequest.property.identityPoolId"></a>

- *Type:* `string`

---

### CognitoSyncDescribeDatasetResponse <a name="aws-cdk-sdk.cognitosync.CognitoSyncDescribeDatasetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncDescribeDatasetResponse: cognitosync.CognitoSyncDescribeDatasetResponse = { ... }
```

##### `dataset`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDescribeDatasetResponse.property.dataset"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncDataset`](#aws-cdk-sdk.cognitosync.CognitoSyncDataset)

---

### CognitoSyncDescribeIdentityPoolUsageRequest <a name="aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityPoolUsageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncDescribeIdentityPoolUsageRequest: cognitosync.CognitoSyncDescribeIdentityPoolUsageRequest = { ... }
```

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityPoolUsageRequest.property.identityPoolId"></a>

- *Type:* `string`

---

### CognitoSyncDescribeIdentityPoolUsageResponse <a name="aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityPoolUsageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncDescribeIdentityPoolUsageResponse: cognitosync.CognitoSyncDescribeIdentityPoolUsageResponse = { ... }
```

##### `identityPoolUsage`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityPoolUsageResponse.property.identityPoolUsage"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncIdentityPoolUsage`](#aws-cdk-sdk.cognitosync.CognitoSyncIdentityPoolUsage)

---

### CognitoSyncDescribeIdentityUsageRequest <a name="aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityUsageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncDescribeIdentityUsageRequest: cognitosync.CognitoSyncDescribeIdentityUsageRequest = { ... }
```

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityUsageRequest.property.identityId"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityUsageRequest.property.identityPoolId"></a>

- *Type:* `string`

---

### CognitoSyncDescribeIdentityUsageResponse <a name="aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityUsageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncDescribeIdentityUsageResponse: cognitosync.CognitoSyncDescribeIdentityUsageResponse = { ... }
```

##### `identityUsage`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityUsageResponse.property.identityUsage"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncIdentityUsage`](#aws-cdk-sdk.cognitosync.CognitoSyncIdentityUsage)

---

### CognitoSyncGetBulkPublishDetailsRequest <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetBulkPublishDetailsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncGetBulkPublishDetailsRequest: cognitosync.CognitoSyncGetBulkPublishDetailsRequest = { ... }
```

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetBulkPublishDetailsRequest.property.identityPoolId"></a>

- *Type:* `string`

---

### CognitoSyncGetBulkPublishDetailsResponse <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetBulkPublishDetailsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncGetBulkPublishDetailsResponse: cognitosync.CognitoSyncGetBulkPublishDetailsResponse = { ... }
```

##### `bulkPublishCompleteTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetBulkPublishDetailsResponse.property.bulkPublishCompleteTime"></a>

- *Type:* `string`

---

##### `bulkPublishStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetBulkPublishDetailsResponse.property.bulkPublishStartTime"></a>

- *Type:* `string`

---

##### `bulkPublishStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetBulkPublishDetailsResponse.property.bulkPublishStatus"></a>

- *Type:* `string`

---

##### `failureMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetBulkPublishDetailsResponse.property.failureMessage"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetBulkPublishDetailsResponse.property.identityPoolId"></a>

- *Type:* `string`

---

### CognitoSyncGetCognitoEventsRequest <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetCognitoEventsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncGetCognitoEventsRequest: cognitosync.CognitoSyncGetCognitoEventsRequest = { ... }
```

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetCognitoEventsRequest.property.identityPoolId"></a>

- *Type:* `string`

---

### CognitoSyncGetCognitoEventsResponse <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetCognitoEventsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncGetCognitoEventsResponse: cognitosync.CognitoSyncGetCognitoEventsResponse = { ... }
```

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetCognitoEventsResponse.property.events"></a>

- *Type:* {[ key: string ]: `string`}

---

### CognitoSyncGetIdentityPoolConfigurationRequest <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetIdentityPoolConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncGetIdentityPoolConfigurationRequest: cognitosync.CognitoSyncGetIdentityPoolConfigurationRequest = { ... }
```

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetIdentityPoolConfigurationRequest.property.identityPoolId"></a>

- *Type:* `string`

---

### CognitoSyncGetIdentityPoolConfigurationResponse <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetIdentityPoolConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncGetIdentityPoolConfigurationResponse: cognitosync.CognitoSyncGetIdentityPoolConfigurationResponse = { ... }
```

##### `cognitoStreams`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetIdentityPoolConfigurationResponse.property.cognitoStreams"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncCognitoStreams`](#aws-cdk-sdk.cognitosync.CognitoSyncCognitoStreams)

---

##### `identityPoolId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetIdentityPoolConfigurationResponse.property.identityPoolId"></a>

- *Type:* `string`

---

##### `pushSync`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncGetIdentityPoolConfigurationResponse.property.pushSync"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncPushSync`](#aws-cdk-sdk.cognitosync.CognitoSyncPushSync)

---

### CognitoSyncIdentityPoolUsage <a name="aws-cdk-sdk.cognitosync.CognitoSyncIdentityPoolUsage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncIdentityPoolUsage: cognitosync.CognitoSyncIdentityPoolUsage = { ... }
```

##### `dataStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncIdentityPoolUsage.property.dataStorage"></a>

- *Type:* `number`

---

##### `identityPoolId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncIdentityPoolUsage.property.identityPoolId"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncIdentityPoolUsage.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `syncSessionsCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncIdentityPoolUsage.property.syncSessionsCount"></a>

- *Type:* `number`

---

### CognitoSyncIdentityUsage <a name="aws-cdk-sdk.cognitosync.CognitoSyncIdentityUsage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncIdentityUsage: cognitosync.CognitoSyncIdentityUsage = { ... }
```

##### `datasetCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncIdentityUsage.property.datasetCount"></a>

- *Type:* `number`

---

##### `dataStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncIdentityUsage.property.dataStorage"></a>

- *Type:* `number`

---

##### `identityId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncIdentityUsage.property.identityId"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncIdentityUsage.property.identityPoolId"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncIdentityUsage.property.lastModifiedDate"></a>

- *Type:* `string`

---

### CognitoSyncListDatasetsRequest <a name="aws-cdk-sdk.cognitosync.CognitoSyncListDatasetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncListDatasetsRequest: cognitosync.CognitoSyncListDatasetsRequest = { ... }
```

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListDatasetsRequest.property.identityId"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListDatasetsRequest.property.identityPoolId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListDatasetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListDatasetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### CognitoSyncListDatasetsResponse <a name="aws-cdk-sdk.cognitosync.CognitoSyncListDatasetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncListDatasetsResponse: cognitosync.CognitoSyncListDatasetsResponse = { ... }
```

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListDatasetsResponse.property.count"></a>

- *Type:* `number`

---

##### `datasets`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListDatasetsResponse.property.datasets"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncDataset`](#aws-cdk-sdk.cognitosync.CognitoSyncDataset)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListDatasetsResponse.property.nextToken"></a>

- *Type:* `string`

---

### CognitoSyncListIdentityPoolUsageRequest <a name="aws-cdk-sdk.cognitosync.CognitoSyncListIdentityPoolUsageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncListIdentityPoolUsageRequest: cognitosync.CognitoSyncListIdentityPoolUsageRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListIdentityPoolUsageRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListIdentityPoolUsageRequest.property.nextToken"></a>

- *Type:* `string`

---

### CognitoSyncListIdentityPoolUsageResponse <a name="aws-cdk-sdk.cognitosync.CognitoSyncListIdentityPoolUsageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncListIdentityPoolUsageResponse: cognitosync.CognitoSyncListIdentityPoolUsageResponse = { ... }
```

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListIdentityPoolUsageResponse.property.count"></a>

- *Type:* `number`

---

##### `identityPoolUsages`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListIdentityPoolUsageResponse.property.identityPoolUsages"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncIdentityPoolUsage`](#aws-cdk-sdk.cognitosync.CognitoSyncIdentityPoolUsage)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListIdentityPoolUsageResponse.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListIdentityPoolUsageResponse.property.nextToken"></a>

- *Type:* `string`

---

### CognitoSyncListRecordsRequest <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncListRecordsRequest: cognitosync.CognitoSyncListRecordsRequest = { ... }
```

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsRequest.property.datasetName"></a>

- *Type:* `string`

---

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsRequest.property.identityId"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsRequest.property.identityPoolId"></a>

- *Type:* `string`

---

##### `lastSyncCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsRequest.property.lastSyncCount"></a>

- *Type:* `number`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `syncSessionToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsRequest.property.syncSessionToken"></a>

- *Type:* `string`

---

### CognitoSyncListRecordsResponse <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncListRecordsResponse: cognitosync.CognitoSyncListRecordsResponse = { ... }
```

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsResponse.property.count"></a>

- *Type:* `number`

---

##### `datasetDeletedAfterRequestedSyncCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsResponse.property.datasetDeletedAfterRequestedSyncCount"></a>

- *Type:* `boolean`

---

##### `datasetExists`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsResponse.property.datasetExists"></a>

- *Type:* `boolean`

---

##### `datasetSyncCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsResponse.property.datasetSyncCount"></a>

- *Type:* `number`

---

##### `lastModifiedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsResponse.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `mergedDatasetNames`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsResponse.property.mergedDatasetNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `records`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsResponse.property.records"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncRecord`](#aws-cdk-sdk.cognitosync.CognitoSyncRecord)[]

---

##### `syncSessionToken`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncListRecordsResponse.property.syncSessionToken"></a>

- *Type:* `string`

---

### CognitoSyncPushSync <a name="aws-cdk-sdk.cognitosync.CognitoSyncPushSync"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncPushSync: cognitosync.CognitoSyncPushSync = { ... }
```

##### `applicationArns`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncPushSync.property.applicationArns"></a>

- *Type:* `string`[]

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncPushSync.property.roleArn"></a>

- *Type:* `string`

---

### CognitoSyncRecord <a name="aws-cdk-sdk.cognitosync.CognitoSyncRecord"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncRecord: cognitosync.CognitoSyncRecord = { ... }
```

##### `deviceLastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncRecord.property.deviceLastModifiedDate"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncRecord.property.key"></a>

- *Type:* `string`

---

##### `lastModifiedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncRecord.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncRecord.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `syncCount`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncRecord.property.syncCount"></a>

- *Type:* `number`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncRecord.property.value"></a>

- *Type:* `string`

---

### CognitoSyncRecordPatch <a name="aws-cdk-sdk.cognitosync.CognitoSyncRecordPatch"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncRecordPatch: cognitosync.CognitoSyncRecordPatch = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncRecordPatch.property.key"></a>

- *Type:* `string`

---

##### `op`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncRecordPatch.property.op"></a>

- *Type:* `string`

---

##### `syncCount`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncRecordPatch.property.syncCount"></a>

- *Type:* `number`

---

##### `deviceLastModifiedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncRecordPatch.property.deviceLastModifiedDate"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncRecordPatch.property.value"></a>

- *Type:* `string`

---

### CognitoSyncRegisterDeviceRequest <a name="aws-cdk-sdk.cognitosync.CognitoSyncRegisterDeviceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncRegisterDeviceRequest: cognitosync.CognitoSyncRegisterDeviceRequest = { ... }
```

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncRegisterDeviceRequest.property.identityId"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncRegisterDeviceRequest.property.identityPoolId"></a>

- *Type:* `string`

---

##### `platform`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncRegisterDeviceRequest.property.platform"></a>

- *Type:* `string`

---

##### `token`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncRegisterDeviceRequest.property.token"></a>

- *Type:* `string`

---

### CognitoSyncRegisterDeviceResponse <a name="aws-cdk-sdk.cognitosync.CognitoSyncRegisterDeviceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncRegisterDeviceResponse: cognitosync.CognitoSyncRegisterDeviceResponse = { ... }
```

##### `deviceId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncRegisterDeviceResponse.property.deviceId"></a>

- *Type:* `string`

---

### CognitoSyncSetCognitoEventsRequest <a name="aws-cdk-sdk.cognitosync.CognitoSyncSetCognitoEventsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncSetCognitoEventsRequest: cognitosync.CognitoSyncSetCognitoEventsRequest = { ... }
```

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncSetCognitoEventsRequest.property.events"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncSetCognitoEventsRequest.property.identityPoolId"></a>

- *Type:* `string`

---

### CognitoSyncSetIdentityPoolConfigurationRequest <a name="aws-cdk-sdk.cognitosync.CognitoSyncSetIdentityPoolConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncSetIdentityPoolConfigurationRequest: cognitosync.CognitoSyncSetIdentityPoolConfigurationRequest = { ... }
```

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncSetIdentityPoolConfigurationRequest.property.identityPoolId"></a>

- *Type:* `string`

---

##### `cognitoStreams`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncSetIdentityPoolConfigurationRequest.property.cognitoStreams"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncCognitoStreams`](#aws-cdk-sdk.cognitosync.CognitoSyncCognitoStreams)

---

##### `pushSync`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncSetIdentityPoolConfigurationRequest.property.pushSync"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncPushSync`](#aws-cdk-sdk.cognitosync.CognitoSyncPushSync)

---

### CognitoSyncSetIdentityPoolConfigurationResponse <a name="aws-cdk-sdk.cognitosync.CognitoSyncSetIdentityPoolConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncSetIdentityPoolConfigurationResponse: cognitosync.CognitoSyncSetIdentityPoolConfigurationResponse = { ... }
```

##### `cognitoStreams`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncSetIdentityPoolConfigurationResponse.property.cognitoStreams"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncCognitoStreams`](#aws-cdk-sdk.cognitosync.CognitoSyncCognitoStreams)

---

##### `identityPoolId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncSetIdentityPoolConfigurationResponse.property.identityPoolId"></a>

- *Type:* `string`

---

##### `pushSync`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncSetIdentityPoolConfigurationResponse.property.pushSync"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncPushSync`](#aws-cdk-sdk.cognitosync.CognitoSyncPushSync)

---

### CognitoSyncSubscribeToDatasetRequest <a name="aws-cdk-sdk.cognitosync.CognitoSyncSubscribeToDatasetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncSubscribeToDatasetRequest: cognitosync.CognitoSyncSubscribeToDatasetRequest = { ... }
```

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncSubscribeToDatasetRequest.property.datasetName"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncSubscribeToDatasetRequest.property.deviceId"></a>

- *Type:* `string`

---

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncSubscribeToDatasetRequest.property.identityId"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncSubscribeToDatasetRequest.property.identityPoolId"></a>

- *Type:* `string`

---

### CognitoSyncSubscribeToDatasetResponse <a name="aws-cdk-sdk.cognitosync.CognitoSyncSubscribeToDatasetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncSubscribeToDatasetResponse: cognitosync.CognitoSyncSubscribeToDatasetResponse = { ... }
```

### CognitoSyncUnsubscribeFromDatasetRequest <a name="aws-cdk-sdk.cognitosync.CognitoSyncUnsubscribeFromDatasetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncUnsubscribeFromDatasetRequest: cognitosync.CognitoSyncUnsubscribeFromDatasetRequest = { ... }
```

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncUnsubscribeFromDatasetRequest.property.datasetName"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncUnsubscribeFromDatasetRequest.property.deviceId"></a>

- *Type:* `string`

---

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncUnsubscribeFromDatasetRequest.property.identityId"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncUnsubscribeFromDatasetRequest.property.identityPoolId"></a>

- *Type:* `string`

---

### CognitoSyncUnsubscribeFromDatasetResponse <a name="aws-cdk-sdk.cognitosync.CognitoSyncUnsubscribeFromDatasetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncUnsubscribeFromDatasetResponse: cognitosync.CognitoSyncUnsubscribeFromDatasetResponse = { ... }
```

### CognitoSyncUpdateRecordsRequest <a name="aws-cdk-sdk.cognitosync.CognitoSyncUpdateRecordsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncUpdateRecordsRequest: cognitosync.CognitoSyncUpdateRecordsRequest = { ... }
```

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncUpdateRecordsRequest.property.datasetName"></a>

- *Type:* `string`

---

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncUpdateRecordsRequest.property.identityId"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncUpdateRecordsRequest.property.identityPoolId"></a>

- *Type:* `string`

---

##### `syncSessionToken`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncUpdateRecordsRequest.property.syncSessionToken"></a>

- *Type:* `string`

---

##### `clientContext`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncUpdateRecordsRequest.property.clientContext"></a>

- *Type:* `string`

---

##### `deviceId`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncUpdateRecordsRequest.property.deviceId"></a>

- *Type:* `string`

---

##### `recordPatches`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncUpdateRecordsRequest.property.recordPatches"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncRecordPatch`](#aws-cdk-sdk.cognitosync.CognitoSyncRecordPatch)[]

---

### CognitoSyncUpdateRecordsResponse <a name="aws-cdk-sdk.cognitosync.CognitoSyncUpdateRecordsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

const cognitoSyncUpdateRecordsResponse: cognitosync.CognitoSyncUpdateRecordsResponse = { ... }
```

##### `records`<sup>Optional</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncUpdateRecordsResponse.property.records"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncRecord`](#aws-cdk-sdk.cognitosync.CognitoSyncRecord)[]

---

## Classes <a name="Classes"></a>

### CognitoSyncResponsesBulkPublish <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesBulkPublish"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesBulkPublish.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesBulkPublish(__scope: Construct, __resources: string[], __input: CognitoSyncBulkPublishRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesBulkPublish.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesBulkPublish.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesBulkPublish.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncBulkPublishRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncBulkPublishRequest)

---



#### Properties <a name="Properties"></a>

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesBulkPublish.property.identityPoolId"></a>

- *Type:* `string`

---


### CognitoSyncResponsesDeleteDataset <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDataset"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDataset.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesDeleteDataset(__scope: Construct, __resources: string[], __input: CognitoSyncDeleteDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDataset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDataset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDataset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncDeleteDatasetRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncDeleteDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `dataset`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDataset.property.dataset"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDatasetDataset`](#aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDatasetDataset)

---


### CognitoSyncResponsesDeleteDatasetDataset <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDatasetDataset"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDatasetDataset.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesDeleteDatasetDataset(__scope: Construct, __resources: string[], __input: CognitoSyncDeleteDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDatasetDataset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDatasetDataset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDatasetDataset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncDeleteDatasetRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncDeleteDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDatasetDataset.property.creationDate"></a>

- *Type:* `string`

---

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDatasetDataset.property.datasetName"></a>

- *Type:* `string`

---

##### `dataStorage`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDatasetDataset.property.dataStorage"></a>

- *Type:* `number`

---

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDatasetDataset.property.identityId"></a>

- *Type:* `string`

---

##### `lastModifiedBy`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDatasetDataset.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDatasetDataset.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `numRecords`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDeleteDatasetDataset.property.numRecords"></a>

- *Type:* `number`

---


### CognitoSyncResponsesDescribeDataset <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDataset"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDataset.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesDescribeDataset(__scope: Construct, __resources: string[], __input: CognitoSyncDescribeDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDataset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDataset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDataset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncDescribeDatasetRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncDescribeDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `dataset`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDataset.property.dataset"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDatasetDataset`](#aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDatasetDataset)

---


### CognitoSyncResponsesDescribeDatasetDataset <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDatasetDataset"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDatasetDataset.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesDescribeDatasetDataset(__scope: Construct, __resources: string[], __input: CognitoSyncDescribeDatasetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDatasetDataset.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDatasetDataset.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDatasetDataset.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncDescribeDatasetRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncDescribeDatasetRequest)

---



#### Properties <a name="Properties"></a>

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDatasetDataset.property.creationDate"></a>

- *Type:* `string`

---

##### `datasetName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDatasetDataset.property.datasetName"></a>

- *Type:* `string`

---

##### `dataStorage`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDatasetDataset.property.dataStorage"></a>

- *Type:* `number`

---

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDatasetDataset.property.identityId"></a>

- *Type:* `string`

---

##### `lastModifiedBy`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDatasetDataset.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDatasetDataset.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `numRecords`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeDatasetDataset.property.numRecords"></a>

- *Type:* `number`

---


### CognitoSyncResponsesDescribeIdentityPoolUsage <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsage"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsage.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsage(__scope: Construct, __resources: string[], __input: CognitoSyncDescribeIdentityPoolUsageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityPoolUsageRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityPoolUsageRequest)

---



#### Properties <a name="Properties"></a>

##### `identityPoolUsage`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsage.property.identityPoolUsage"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsageIdentityPoolUsage`](#aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsageIdentityPoolUsage)

---


### CognitoSyncResponsesDescribeIdentityPoolUsageIdentityPoolUsage <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsageIdentityPoolUsage"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsageIdentityPoolUsage.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsageIdentityPoolUsage(__scope: Construct, __resources: string[], __input: CognitoSyncDescribeIdentityPoolUsageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsageIdentityPoolUsage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsageIdentityPoolUsage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsageIdentityPoolUsage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityPoolUsageRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityPoolUsageRequest)

---



#### Properties <a name="Properties"></a>

##### `dataStorage`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsageIdentityPoolUsage.property.dataStorage"></a>

- *Type:* `number`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsageIdentityPoolUsage.property.identityPoolId"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsageIdentityPoolUsage.property.lastModifiedDate"></a>

- *Type:* `string`

---

##### `syncSessionsCount`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityPoolUsageIdentityPoolUsage.property.syncSessionsCount"></a>

- *Type:* `number`

---


### CognitoSyncResponsesDescribeIdentityUsage <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsage"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsage.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesDescribeIdentityUsage(__scope: Construct, __resources: string[], __input: CognitoSyncDescribeIdentityUsageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityUsageRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityUsageRequest)

---



#### Properties <a name="Properties"></a>

##### `identityUsage`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsage.property.identityUsage"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsageIdentityUsage`](#aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsageIdentityUsage)

---


### CognitoSyncResponsesDescribeIdentityUsageIdentityUsage <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsageIdentityUsage"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsageIdentityUsage.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesDescribeIdentityUsageIdentityUsage(__scope: Construct, __resources: string[], __input: CognitoSyncDescribeIdentityUsageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsageIdentityUsage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsageIdentityUsage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsageIdentityUsage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityUsageRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncDescribeIdentityUsageRequest)

---



#### Properties <a name="Properties"></a>

##### `datasetCount`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsageIdentityUsage.property.datasetCount"></a>

- *Type:* `number`

---

##### `dataStorage`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsageIdentityUsage.property.dataStorage"></a>

- *Type:* `number`

---

##### `identityId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsageIdentityUsage.property.identityId"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsageIdentityUsage.property.identityPoolId"></a>

- *Type:* `string`

---

##### `lastModifiedDate`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesDescribeIdentityUsageIdentityUsage.property.lastModifiedDate"></a>

- *Type:* `string`

---


### CognitoSyncResponsesFetchBulkPublishDetails <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchBulkPublishDetails"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchBulkPublishDetails.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesFetchBulkPublishDetails(__scope: Construct, __resources: string[], __input: CognitoSyncGetBulkPublishDetailsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchBulkPublishDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchBulkPublishDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchBulkPublishDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncGetBulkPublishDetailsRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncGetBulkPublishDetailsRequest)

---



#### Properties <a name="Properties"></a>

##### `bulkPublishCompleteTime`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchBulkPublishDetails.property.bulkPublishCompleteTime"></a>

- *Type:* `string`

---

##### `bulkPublishStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchBulkPublishDetails.property.bulkPublishStartTime"></a>

- *Type:* `string`

---

##### `bulkPublishStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchBulkPublishDetails.property.bulkPublishStatus"></a>

- *Type:* `string`

---

##### `failureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchBulkPublishDetails.property.failureMessage"></a>

- *Type:* `string`

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchBulkPublishDetails.property.identityPoolId"></a>

- *Type:* `string`

---


### CognitoSyncResponsesFetchCognitoEvents <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchCognitoEvents"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchCognitoEvents.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesFetchCognitoEvents(__scope: Construct, __resources: string[], __input: CognitoSyncGetCognitoEventsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchCognitoEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchCognitoEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchCognitoEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncGetCognitoEventsRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncGetCognitoEventsRequest)

---



#### Properties <a name="Properties"></a>

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchCognitoEvents.property.events"></a>

- *Type:* {[ key: string ]: `string`}

---


### CognitoSyncResponsesFetchIdentityPoolConfiguration <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfiguration.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesFetchIdentityPoolConfiguration(__scope: Construct, __resources: string[], __input: CognitoSyncGetIdentityPoolConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncGetIdentityPoolConfigurationRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncGetIdentityPoolConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `cognitoStreams`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfiguration.property.cognitoStreams"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationCognitoStreams`](#aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationCognitoStreams)

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfiguration.property.identityPoolId"></a>

- *Type:* `string`

---

##### `pushSync`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfiguration.property.pushSync"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationPushSync`](#aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationPushSync)

---


### CognitoSyncResponsesFetchIdentityPoolConfigurationCognitoStreams <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationCognitoStreams"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationCognitoStreams.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationCognitoStreams(__scope: Construct, __resources: string[], __input: CognitoSyncGetIdentityPoolConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationCognitoStreams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationCognitoStreams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationCognitoStreams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncGetIdentityPoolConfigurationRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncGetIdentityPoolConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationCognitoStreams.property.roleArn"></a>

- *Type:* `string`

---

##### `streamingStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationCognitoStreams.property.streamingStatus"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationCognitoStreams.property.streamName"></a>

- *Type:* `string`

---


### CognitoSyncResponsesFetchIdentityPoolConfigurationPushSync <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationPushSync"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationPushSync.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationPushSync(__scope: Construct, __resources: string[], __input: CognitoSyncGetIdentityPoolConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationPushSync.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationPushSync.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationPushSync.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncGetIdentityPoolConfigurationRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncGetIdentityPoolConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationArns`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationPushSync.property.applicationArns"></a>

- *Type:* `string`[]

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesFetchIdentityPoolConfigurationPushSync.property.roleArn"></a>

- *Type:* `string`

---


### CognitoSyncResponsesListDatasets <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListDatasets"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListDatasets.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesListDatasets(__scope: Construct, __resources: string[], __input: CognitoSyncListDatasetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListDatasets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListDatasets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListDatasets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncListDatasetsRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncListDatasetsRequest)

---



#### Properties <a name="Properties"></a>

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListDatasets.property.count"></a>

- *Type:* `number`

---

##### `datasets`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListDatasets.property.datasets"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncDataset`](#aws-cdk-sdk.cognitosync.CognitoSyncDataset)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListDatasets.property.nextToken"></a>

- *Type:* `string`

---


### CognitoSyncResponsesListIdentityPoolUsage <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListIdentityPoolUsage"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListIdentityPoolUsage.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesListIdentityPoolUsage(__scope: Construct, __resources: string[], __input: CognitoSyncListIdentityPoolUsageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListIdentityPoolUsage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListIdentityPoolUsage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListIdentityPoolUsage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncListIdentityPoolUsageRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncListIdentityPoolUsageRequest)

---



#### Properties <a name="Properties"></a>

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListIdentityPoolUsage.property.count"></a>

- *Type:* `number`

---

##### `identityPoolUsages`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListIdentityPoolUsage.property.identityPoolUsages"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncIdentityPoolUsage`](#aws-cdk-sdk.cognitosync.CognitoSyncIdentityPoolUsage)[]

---

##### `maxResults`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListIdentityPoolUsage.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListIdentityPoolUsage.property.nextToken"></a>

- *Type:* `string`

---


### CognitoSyncResponsesListRecords <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListRecords"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListRecords.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesListRecords(__scope: Construct, __resources: string[], __input: CognitoSyncListRecordsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListRecords.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListRecords.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListRecords.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncListRecordsRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncListRecordsRequest)

---



#### Properties <a name="Properties"></a>

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListRecords.property.count"></a>

- *Type:* `number`

---

##### `datasetDeletedAfterRequestedSyncCount`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListRecords.property.datasetDeletedAfterRequestedSyncCount"></a>

- *Type:* `boolean`

---

##### `datasetExists`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListRecords.property.datasetExists"></a>

- *Type:* `boolean`

---

##### `datasetSyncCount`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListRecords.property.datasetSyncCount"></a>

- *Type:* `number`

---

##### `lastModifiedBy`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListRecords.property.lastModifiedBy"></a>

- *Type:* `string`

---

##### `mergedDatasetNames`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListRecords.property.mergedDatasetNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListRecords.property.nextToken"></a>

- *Type:* `string`

---

##### `records`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListRecords.property.records"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncRecord`](#aws-cdk-sdk.cognitosync.CognitoSyncRecord)[]

---

##### `syncSessionToken`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesListRecords.property.syncSessionToken"></a>

- *Type:* `string`

---


### CognitoSyncResponsesPutIdentityPoolConfiguration <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfiguration.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesPutIdentityPoolConfiguration(__scope: Construct, __resources: string[], __input: CognitoSyncSetIdentityPoolConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncSetIdentityPoolConfigurationRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncSetIdentityPoolConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `cognitoStreams`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfiguration.property.cognitoStreams"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationCognitoStreams`](#aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationCognitoStreams)

---

##### `identityPoolId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfiguration.property.identityPoolId"></a>

- *Type:* `string`

---

##### `pushSync`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfiguration.property.pushSync"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationPushSync`](#aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationPushSync)

---


### CognitoSyncResponsesPutIdentityPoolConfigurationCognitoStreams <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationCognitoStreams"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationCognitoStreams.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationCognitoStreams(__scope: Construct, __resources: string[], __input: CognitoSyncSetIdentityPoolConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationCognitoStreams.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationCognitoStreams.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationCognitoStreams.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncSetIdentityPoolConfigurationRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncSetIdentityPoolConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationCognitoStreams.property.roleArn"></a>

- *Type:* `string`

---

##### `streamingStatus`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationCognitoStreams.property.streamingStatus"></a>

- *Type:* `string`

---

##### `streamName`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationCognitoStreams.property.streamName"></a>

- *Type:* `string`

---


### CognitoSyncResponsesPutIdentityPoolConfigurationPushSync <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationPushSync"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationPushSync.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationPushSync(__scope: Construct, __resources: string[], __input: CognitoSyncSetIdentityPoolConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationPushSync.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationPushSync.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationPushSync.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncSetIdentityPoolConfigurationRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncSetIdentityPoolConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `applicationArns`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationPushSync.property.applicationArns"></a>

- *Type:* `string`[]

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesPutIdentityPoolConfigurationPushSync.property.roleArn"></a>

- *Type:* `string`

---


### CognitoSyncResponsesRegisterDevice <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesRegisterDevice"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesRegisterDevice.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesRegisterDevice(__scope: Construct, __resources: string[], __input: CognitoSyncRegisterDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesRegisterDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesRegisterDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesRegisterDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncRegisterDeviceRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncRegisterDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `deviceId`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesRegisterDevice.property.deviceId"></a>

- *Type:* `string`

---


### CognitoSyncResponsesUpdateRecords <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesUpdateRecords"></a>

#### Initializer <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesUpdateRecords.Initializer"></a>

```typescript
import { cognitosync } from 'aws-cdk-sdk'

new cognitosync.CognitoSyncResponsesUpdateRecords(__scope: Construct, __resources: string[], __input: CognitoSyncUpdateRecordsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesUpdateRecords.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesUpdateRecords.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesUpdateRecords.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncUpdateRecordsRequest`](#aws-cdk-sdk.cognitosync.CognitoSyncUpdateRecordsRequest)

---



#### Properties <a name="Properties"></a>

##### `records`<sup>Required</sup> <a name="aws-cdk-sdk.cognitosync.CognitoSyncResponsesUpdateRecords.property.records"></a>

- *Type:* [`aws-cdk-sdk.cognitosync.CognitoSyncRecord`](#aws-cdk-sdk.cognitosync.CognitoSyncRecord)[]

---



