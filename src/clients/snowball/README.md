# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### SnowballClient <a name="aws-cdk-sdk.snowball.SnowballClient"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballClient.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `cancelCluster` <a name="aws-cdk-sdk.snowball.SnowballClient.cancelCluster"></a>

```typescript
public cancelCluster(input: SnowballCancelClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballCancelClusterRequest`](#aws-cdk-sdk.snowball.SnowballCancelClusterRequest)

---

##### `cancelJob` <a name="aws-cdk-sdk.snowball.SnowballClient.cancelJob"></a>

```typescript
public cancelJob(input: SnowballCancelJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballCancelJobRequest`](#aws-cdk-sdk.snowball.SnowballCancelJobRequest)

---

##### `createAddress` <a name="aws-cdk-sdk.snowball.SnowballClient.createAddress"></a>

```typescript
public createAddress(input: SnowballCreateAddressRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballCreateAddressRequest`](#aws-cdk-sdk.snowball.SnowballCreateAddressRequest)

---

##### `createCluster` <a name="aws-cdk-sdk.snowball.SnowballClient.createCluster"></a>

```typescript
public createCluster(input: SnowballCreateClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballCreateClusterRequest`](#aws-cdk-sdk.snowball.SnowballCreateClusterRequest)

---

##### `createJob` <a name="aws-cdk-sdk.snowball.SnowballClient.createJob"></a>

```typescript
public createJob(input: SnowballCreateJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballCreateJobRequest`](#aws-cdk-sdk.snowball.SnowballCreateJobRequest)

---

##### `createReturnShippingLabel` <a name="aws-cdk-sdk.snowball.SnowballClient.createReturnShippingLabel"></a>

```typescript
public createReturnShippingLabel(input: SnowballCreateReturnShippingLabelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballCreateReturnShippingLabelRequest`](#aws-cdk-sdk.snowball.SnowballCreateReturnShippingLabelRequest)

---

##### `describeAddress` <a name="aws-cdk-sdk.snowball.SnowballClient.describeAddress"></a>

```typescript
public describeAddress(input: SnowballDescribeAddressRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeAddressRequest`](#aws-cdk-sdk.snowball.SnowballDescribeAddressRequest)

---

##### `describeAddresses` <a name="aws-cdk-sdk.snowball.SnowballClient.describeAddresses"></a>

```typescript
public describeAddresses(input: SnowballDescribeAddressesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeAddressesRequest`](#aws-cdk-sdk.snowball.SnowballDescribeAddressesRequest)

---

##### `describeCluster` <a name="aws-cdk-sdk.snowball.SnowballClient.describeCluster"></a>

```typescript
public describeCluster(input: SnowballDescribeClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeClusterRequest`](#aws-cdk-sdk.snowball.SnowballDescribeClusterRequest)

---

##### `describeJob` <a name="aws-cdk-sdk.snowball.SnowballClient.describeJob"></a>

```typescript
public describeJob(input: SnowballDescribeJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeJobRequest`](#aws-cdk-sdk.snowball.SnowballDescribeJobRequest)

---

##### `describeReturnShippingLabel` <a name="aws-cdk-sdk.snowball.SnowballClient.describeReturnShippingLabel"></a>

```typescript
public describeReturnShippingLabel(input: SnowballDescribeReturnShippingLabelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeReturnShippingLabelRequest`](#aws-cdk-sdk.snowball.SnowballDescribeReturnShippingLabelRequest)

---

##### `fetchJobManifest` <a name="aws-cdk-sdk.snowball.SnowballClient.fetchJobManifest"></a>

```typescript
public fetchJobManifest(input: SnowballGetJobManifestRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballGetJobManifestRequest`](#aws-cdk-sdk.snowball.SnowballGetJobManifestRequest)

---

##### `fetchJobUnlockCode` <a name="aws-cdk-sdk.snowball.SnowballClient.fetchJobUnlockCode"></a>

```typescript
public fetchJobUnlockCode(input: SnowballGetJobUnlockCodeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballGetJobUnlockCodeRequest`](#aws-cdk-sdk.snowball.SnowballGetJobUnlockCodeRequest)

---

##### `fetchSnowballUsage` <a name="aws-cdk-sdk.snowball.SnowballClient.fetchSnowballUsage"></a>

```typescript
public fetchSnowballUsage()
```

##### `fetchSoftwareUpdates` <a name="aws-cdk-sdk.snowball.SnowballClient.fetchSoftwareUpdates"></a>

```typescript
public fetchSoftwareUpdates(input: SnowballGetSoftwareUpdatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballGetSoftwareUpdatesRequest`](#aws-cdk-sdk.snowball.SnowballGetSoftwareUpdatesRequest)

---

##### `listClusterJobs` <a name="aws-cdk-sdk.snowball.SnowballClient.listClusterJobs"></a>

```typescript
public listClusterJobs(input: SnowballListClusterJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballListClusterJobsRequest`](#aws-cdk-sdk.snowball.SnowballListClusterJobsRequest)

---

##### `listClusters` <a name="aws-cdk-sdk.snowball.SnowballClient.listClusters"></a>

```typescript
public listClusters(input: SnowballListClustersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballListClustersRequest`](#aws-cdk-sdk.snowball.SnowballListClustersRequest)

---

##### `listCompatibleImages` <a name="aws-cdk-sdk.snowball.SnowballClient.listCompatibleImages"></a>

```typescript
public listCompatibleImages(input: SnowballListCompatibleImagesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballListCompatibleImagesRequest`](#aws-cdk-sdk.snowball.SnowballListCompatibleImagesRequest)

---

##### `listJobs` <a name="aws-cdk-sdk.snowball.SnowballClient.listJobs"></a>

```typescript
public listJobs(input: SnowballListJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballListJobsRequest`](#aws-cdk-sdk.snowball.SnowballListJobsRequest)

---

##### `updateCluster` <a name="aws-cdk-sdk.snowball.SnowballClient.updateCluster"></a>

```typescript
public updateCluster(input: SnowballUpdateClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballUpdateClusterRequest`](#aws-cdk-sdk.snowball.SnowballUpdateClusterRequest)

---

##### `updateJob` <a name="aws-cdk-sdk.snowball.SnowballClient.updateJob"></a>

```typescript
public updateJob(input: SnowballUpdateJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballUpdateJobRequest`](#aws-cdk-sdk.snowball.SnowballUpdateJobRequest)

---

##### `updateJobShipmentState` <a name="aws-cdk-sdk.snowball.SnowballClient.updateJobShipmentState"></a>

```typescript
public updateJobShipmentState(input: SnowballUpdateJobShipmentStateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballUpdateJobShipmentStateRequest`](#aws-cdk-sdk.snowball.SnowballUpdateJobShipmentStateRequest)

---




## Structs <a name="Structs"></a>

### SnowballAddress <a name="aws-cdk-sdk.snowball.SnowballAddress"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballAddress: snowball.SnowballAddress = { ... }
```

##### `addressId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballAddress.property.addressId"></a>

- *Type:* `string`

---

##### `city`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballAddress.property.city"></a>

- *Type:* `string`

---

##### `company`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballAddress.property.company"></a>

- *Type:* `string`

---

##### `country`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballAddress.property.country"></a>

- *Type:* `string`

---

##### `isRestricted`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballAddress.property.isRestricted"></a>

- *Type:* `boolean`

---

##### `landmark`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballAddress.property.landmark"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballAddress.property.name"></a>

- *Type:* `string`

---

##### `phoneNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballAddress.property.phoneNumber"></a>

- *Type:* `string`

---

##### `postalCode`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballAddress.property.postalCode"></a>

- *Type:* `string`

---

##### `prefectureOrDistrict`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballAddress.property.prefectureOrDistrict"></a>

- *Type:* `string`

---

##### `stateOrProvince`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballAddress.property.stateOrProvince"></a>

- *Type:* `string`

---

##### `street1`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballAddress.property.street1"></a>

- *Type:* `string`

---

##### `street2`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballAddress.property.street2"></a>

- *Type:* `string`

---

##### `street3`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballAddress.property.street3"></a>

- *Type:* `string`

---

### SnowballCancelClusterRequest <a name="aws-cdk-sdk.snowball.SnowballCancelClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballCancelClusterRequest: snowball.SnowballCancelClusterRequest = { ... }
```

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballCancelClusterRequest.property.clusterId"></a>

- *Type:* `string`

---

### SnowballCancelClusterResult <a name="aws-cdk-sdk.snowball.SnowballCancelClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballCancelClusterResult: snowball.SnowballCancelClusterResult = { ... }
```

### SnowballCancelJobRequest <a name="aws-cdk-sdk.snowball.SnowballCancelJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballCancelJobRequest: snowball.SnowballCancelJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballCancelJobRequest.property.jobId"></a>

- *Type:* `string`

---

### SnowballCancelJobResult <a name="aws-cdk-sdk.snowball.SnowballCancelJobResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballCancelJobResult: snowball.SnowballCancelJobResult = { ... }
```

### SnowballClusterListEntry <a name="aws-cdk-sdk.snowball.SnowballClusterListEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballClusterListEntry: snowball.SnowballClusterListEntry = { ... }
```

##### `clusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterListEntry.property.clusterId"></a>

- *Type:* `string`

---

##### `clusterState`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterListEntry.property.clusterState"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterListEntry.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterListEntry.property.description"></a>

- *Type:* `string`

---

### SnowballClusterMetadata <a name="aws-cdk-sdk.snowball.SnowballClusterMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballClusterMetadata: snowball.SnowballClusterMetadata = { ... }
```

##### `addressId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterMetadata.property.addressId"></a>

- *Type:* `string`

---

##### `clusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterMetadata.property.clusterId"></a>

- *Type:* `string`

---

##### `clusterState`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterMetadata.property.clusterState"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterMetadata.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterMetadata.property.description"></a>

- *Type:* `string`

---

##### `forwardingAddressId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterMetadata.property.forwardingAddressId"></a>

- *Type:* `string`

---

##### `jobType`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterMetadata.property.jobType"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterMetadata.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `notification`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterMetadata.property.notification"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballNotification`](#aws-cdk-sdk.snowball.SnowballNotification)

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterMetadata.property.resources"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballJobResource`](#aws-cdk-sdk.snowball.SnowballJobResource)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterMetadata.property.roleArn"></a>

- *Type:* `string`

---

##### `shippingOption`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterMetadata.property.shippingOption"></a>

- *Type:* `string`

---

##### `snowballType`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterMetadata.property.snowballType"></a>

- *Type:* `string`

---

##### `taxDocuments`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballClusterMetadata.property.taxDocuments"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballTaxDocuments`](#aws-cdk-sdk.snowball.SnowballTaxDocuments)

---

### SnowballCompatibleImage <a name="aws-cdk-sdk.snowball.SnowballCompatibleImage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballCompatibleImage: snowball.SnowballCompatibleImage = { ... }
```

##### `amiId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCompatibleImage.property.amiId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCompatibleImage.property.name"></a>

- *Type:* `string`

---

### SnowballCreateAddressRequest <a name="aws-cdk-sdk.snowball.SnowballCreateAddressRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballCreateAddressRequest: snowball.SnowballCreateAddressRequest = { ... }
```

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateAddressRequest.property.address"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballAddress`](#aws-cdk-sdk.snowball.SnowballAddress)

---

### SnowballCreateAddressResult <a name="aws-cdk-sdk.snowball.SnowballCreateAddressResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballCreateAddressResult: snowball.SnowballCreateAddressResult = { ... }
```

##### `addressId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateAddressResult.property.addressId"></a>

- *Type:* `string`

---

### SnowballCreateClusterRequest <a name="aws-cdk-sdk.snowball.SnowballCreateClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballCreateClusterRequest: snowball.SnowballCreateClusterRequest = { ... }
```

##### `addressId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateClusterRequest.property.addressId"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateClusterRequest.property.jobType"></a>

- *Type:* `string`

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateClusterRequest.property.resources"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballJobResource`](#aws-cdk-sdk.snowball.SnowballJobResource)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateClusterRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `shippingOption`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateClusterRequest.property.shippingOption"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateClusterRequest.property.description"></a>

- *Type:* `string`

---

##### `forwardingAddressId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateClusterRequest.property.forwardingAddressId"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateClusterRequest.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `notification`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateClusterRequest.property.notification"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballNotification`](#aws-cdk-sdk.snowball.SnowballNotification)

---

##### `snowballType`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateClusterRequest.property.snowballType"></a>

- *Type:* `string`

---

##### `taxDocuments`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateClusterRequest.property.taxDocuments"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballTaxDocuments`](#aws-cdk-sdk.snowball.SnowballTaxDocuments)

---

### SnowballCreateClusterResult <a name="aws-cdk-sdk.snowball.SnowballCreateClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballCreateClusterResult: snowball.SnowballCreateClusterResult = { ... }
```

##### `clusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateClusterResult.property.clusterId"></a>

- *Type:* `string`

---

### SnowballCreateJobRequest <a name="aws-cdk-sdk.snowball.SnowballCreateJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballCreateJobRequest: snowball.SnowballCreateJobRequest = { ... }
```

##### `addressId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateJobRequest.property.addressId"></a>

- *Type:* `string`

---

##### `clusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateJobRequest.property.clusterId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateJobRequest.property.description"></a>

- *Type:* `string`

---

##### `deviceConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateJobRequest.property.deviceConfiguration"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDeviceConfiguration`](#aws-cdk-sdk.snowball.SnowballDeviceConfiguration)

---

##### `forwardingAddressId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateJobRequest.property.forwardingAddressId"></a>

- *Type:* `string`

---

##### `jobType`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateJobRequest.property.jobType"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateJobRequest.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `notification`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateJobRequest.property.notification"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballNotification`](#aws-cdk-sdk.snowball.SnowballNotification)

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateJobRequest.property.resources"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballJobResource`](#aws-cdk-sdk.snowball.SnowballJobResource)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateJobRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `shippingOption`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateJobRequest.property.shippingOption"></a>

- *Type:* `string`

---

##### `snowballCapacityPreference`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateJobRequest.property.snowballCapacityPreference"></a>

- *Type:* `string`

---

##### `snowballType`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateJobRequest.property.snowballType"></a>

- *Type:* `string`

---

##### `taxDocuments`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateJobRequest.property.taxDocuments"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballTaxDocuments`](#aws-cdk-sdk.snowball.SnowballTaxDocuments)

---

### SnowballCreateJobResult <a name="aws-cdk-sdk.snowball.SnowballCreateJobResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballCreateJobResult: snowball.SnowballCreateJobResult = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateJobResult.property.jobId"></a>

- *Type:* `string`

---

### SnowballCreateReturnShippingLabelRequest <a name="aws-cdk-sdk.snowball.SnowballCreateReturnShippingLabelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballCreateReturnShippingLabelRequest: snowball.SnowballCreateReturnShippingLabelRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateReturnShippingLabelRequest.property.jobId"></a>

- *Type:* `string`

---

##### `shippingOption`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateReturnShippingLabelRequest.property.shippingOption"></a>

- *Type:* `string`

---

### SnowballCreateReturnShippingLabelResult <a name="aws-cdk-sdk.snowball.SnowballCreateReturnShippingLabelResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballCreateReturnShippingLabelResult: snowball.SnowballCreateReturnShippingLabelResult = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballCreateReturnShippingLabelResult.property.status"></a>

- *Type:* `string`

---

### SnowballDataTransfer <a name="aws-cdk-sdk.snowball.SnowballDataTransfer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballDataTransfer: snowball.SnowballDataTransfer = { ... }
```

##### `bytesTransferred`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballDataTransfer.property.bytesTransferred"></a>

- *Type:* `number`

---

##### `objectsTransferred`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballDataTransfer.property.objectsTransferred"></a>

- *Type:* `number`

---

##### `totalBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballDataTransfer.property.totalBytes"></a>

- *Type:* `number`

---

##### `totalObjects`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballDataTransfer.property.totalObjects"></a>

- *Type:* `number`

---

### SnowballDescribeAddressesRequest <a name="aws-cdk-sdk.snowball.SnowballDescribeAddressesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballDescribeAddressesRequest: snowball.SnowballDescribeAddressesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballDescribeAddressesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballDescribeAddressesRequest.property.nextToken"></a>

- *Type:* `string`

---

### SnowballDescribeAddressesResult <a name="aws-cdk-sdk.snowball.SnowballDescribeAddressesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballDescribeAddressesResult: snowball.SnowballDescribeAddressesResult = { ... }
```

##### `addresses`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballDescribeAddressesResult.property.addresses"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballAddress`](#aws-cdk-sdk.snowball.SnowballAddress)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballDescribeAddressesResult.property.nextToken"></a>

- *Type:* `string`

---

### SnowballDescribeAddressRequest <a name="aws-cdk-sdk.snowball.SnowballDescribeAddressRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballDescribeAddressRequest: snowball.SnowballDescribeAddressRequest = { ... }
```

##### `addressId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballDescribeAddressRequest.property.addressId"></a>

- *Type:* `string`

---

### SnowballDescribeAddressResult <a name="aws-cdk-sdk.snowball.SnowballDescribeAddressResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballDescribeAddressResult: snowball.SnowballDescribeAddressResult = { ... }
```

##### `address`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballDescribeAddressResult.property.address"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballAddress`](#aws-cdk-sdk.snowball.SnowballAddress)

---

### SnowballDescribeClusterRequest <a name="aws-cdk-sdk.snowball.SnowballDescribeClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballDescribeClusterRequest: snowball.SnowballDescribeClusterRequest = { ... }
```

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballDescribeClusterRequest.property.clusterId"></a>

- *Type:* `string`

---

### SnowballDescribeClusterResult <a name="aws-cdk-sdk.snowball.SnowballDescribeClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballDescribeClusterResult: snowball.SnowballDescribeClusterResult = { ... }
```

##### `clusterMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballDescribeClusterResult.property.clusterMetadata"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballClusterMetadata`](#aws-cdk-sdk.snowball.SnowballClusterMetadata)

---

### SnowballDescribeJobRequest <a name="aws-cdk-sdk.snowball.SnowballDescribeJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballDescribeJobRequest: snowball.SnowballDescribeJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballDescribeJobRequest.property.jobId"></a>

- *Type:* `string`

---

### SnowballDescribeJobResult <a name="aws-cdk-sdk.snowball.SnowballDescribeJobResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballDescribeJobResult: snowball.SnowballDescribeJobResult = { ... }
```

##### `jobMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballDescribeJobResult.property.jobMetadata"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballJobMetadata`](#aws-cdk-sdk.snowball.SnowballJobMetadata)

---

##### `subJobMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballDescribeJobResult.property.subJobMetadata"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballJobMetadata`](#aws-cdk-sdk.snowball.SnowballJobMetadata)[]

---

### SnowballDescribeReturnShippingLabelRequest <a name="aws-cdk-sdk.snowball.SnowballDescribeReturnShippingLabelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballDescribeReturnShippingLabelRequest: snowball.SnowballDescribeReturnShippingLabelRequest = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballDescribeReturnShippingLabelRequest.property.jobId"></a>

- *Type:* `string`

---

### SnowballDescribeReturnShippingLabelResult <a name="aws-cdk-sdk.snowball.SnowballDescribeReturnShippingLabelResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballDescribeReturnShippingLabelResult: snowball.SnowballDescribeReturnShippingLabelResult = { ... }
```

##### `expirationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballDescribeReturnShippingLabelResult.property.expirationDate"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballDescribeReturnShippingLabelResult.property.status"></a>

- *Type:* `string`

---

### SnowballDeviceConfiguration <a name="aws-cdk-sdk.snowball.SnowballDeviceConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballDeviceConfiguration: snowball.SnowballDeviceConfiguration = { ... }
```

##### `snowconeDeviceConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballDeviceConfiguration.property.snowconeDeviceConfiguration"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballSnowconeDeviceConfiguration`](#aws-cdk-sdk.snowball.SnowballSnowconeDeviceConfiguration)

---

### SnowballEc2AmiResource <a name="aws-cdk-sdk.snowball.SnowballEc2AmiResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballEc2AmiResource: snowball.SnowballEc2AmiResource = { ... }
```

##### `amiId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballEc2AmiResource.property.amiId"></a>

- *Type:* `string`

---

##### `snowballAmiId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballEc2AmiResource.property.snowballAmiId"></a>

- *Type:* `string`

---

### SnowballEventTriggerDefinition <a name="aws-cdk-sdk.snowball.SnowballEventTriggerDefinition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballEventTriggerDefinition: snowball.SnowballEventTriggerDefinition = { ... }
```

##### `eventResourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballEventTriggerDefinition.property.eventResourceArn"></a>

- *Type:* `string`

---

### SnowballGetJobManifestRequest <a name="aws-cdk-sdk.snowball.SnowballGetJobManifestRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballGetJobManifestRequest: snowball.SnowballGetJobManifestRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballGetJobManifestRequest.property.jobId"></a>

- *Type:* `string`

---

### SnowballGetJobManifestResult <a name="aws-cdk-sdk.snowball.SnowballGetJobManifestResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballGetJobManifestResult: snowball.SnowballGetJobManifestResult = { ... }
```

##### `manifestUri`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballGetJobManifestResult.property.manifestUri"></a>

- *Type:* `string`

---

### SnowballGetJobUnlockCodeRequest <a name="aws-cdk-sdk.snowball.SnowballGetJobUnlockCodeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballGetJobUnlockCodeRequest: snowball.SnowballGetJobUnlockCodeRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballGetJobUnlockCodeRequest.property.jobId"></a>

- *Type:* `string`

---

### SnowballGetJobUnlockCodeResult <a name="aws-cdk-sdk.snowball.SnowballGetJobUnlockCodeResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballGetJobUnlockCodeResult: snowball.SnowballGetJobUnlockCodeResult = { ... }
```

##### `unlockCode`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballGetJobUnlockCodeResult.property.unlockCode"></a>

- *Type:* `string`

---

### SnowballGetSnowballUsageRequest <a name="aws-cdk-sdk.snowball.SnowballGetSnowballUsageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballGetSnowballUsageRequest: snowball.SnowballGetSnowballUsageRequest = { ... }
```

### SnowballGetSnowballUsageResult <a name="aws-cdk-sdk.snowball.SnowballGetSnowballUsageResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballGetSnowballUsageResult: snowball.SnowballGetSnowballUsageResult = { ... }
```

##### `snowballLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballGetSnowballUsageResult.property.snowballLimit"></a>

- *Type:* `number`

---

##### `snowballsInUse`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballGetSnowballUsageResult.property.snowballsInUse"></a>

- *Type:* `number`

---

### SnowballGetSoftwareUpdatesRequest <a name="aws-cdk-sdk.snowball.SnowballGetSoftwareUpdatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballGetSoftwareUpdatesRequest: snowball.SnowballGetSoftwareUpdatesRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballGetSoftwareUpdatesRequest.property.jobId"></a>

- *Type:* `string`

---

### SnowballGetSoftwareUpdatesResult <a name="aws-cdk-sdk.snowball.SnowballGetSoftwareUpdatesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballGetSoftwareUpdatesResult: snowball.SnowballGetSoftwareUpdatesResult = { ... }
```

##### `updatesUri`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballGetSoftwareUpdatesResult.property.updatesUri"></a>

- *Type:* `string`

---

### SnowballIndTaxDocuments <a name="aws-cdk-sdk.snowball.SnowballIndTaxDocuments"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballIndTaxDocuments: snowball.SnowballIndTaxDocuments = { ... }
```

##### `gstin`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballIndTaxDocuments.property.gstin"></a>

- *Type:* `string`

---

### SnowballJobListEntry <a name="aws-cdk-sdk.snowball.SnowballJobListEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballJobListEntry: snowball.SnowballJobListEntry = { ... }
```

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobListEntry.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobListEntry.property.description"></a>

- *Type:* `string`

---

##### `isMaster`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobListEntry.property.isMaster"></a>

- *Type:* `boolean`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobListEntry.property.jobId"></a>

- *Type:* `string`

---

##### `jobState`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobListEntry.property.jobState"></a>

- *Type:* `string`

---

##### `jobType`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobListEntry.property.jobType"></a>

- *Type:* `string`

---

##### `snowballType`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobListEntry.property.snowballType"></a>

- *Type:* `string`

---

### SnowballJobLogs <a name="aws-cdk-sdk.snowball.SnowballJobLogs"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballJobLogs: snowball.SnowballJobLogs = { ... }
```

##### `jobCompletionReportUri`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobLogs.property.jobCompletionReportUri"></a>

- *Type:* `string`

---

##### `jobFailureLogUri`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobLogs.property.jobFailureLogUri"></a>

- *Type:* `string`

---

##### `jobSuccessLogUri`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobLogs.property.jobSuccessLogUri"></a>

- *Type:* `string`

---

### SnowballJobMetadata <a name="aws-cdk-sdk.snowball.SnowballJobMetadata"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballJobMetadata: snowball.SnowballJobMetadata = { ... }
```

##### `addressId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.addressId"></a>

- *Type:* `string`

---

##### `clusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.clusterId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.creationDate"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDataTransfer`](#aws-cdk-sdk.snowball.SnowballDataTransfer)

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.description"></a>

- *Type:* `string`

---

##### `deviceConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.deviceConfiguration"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDeviceConfiguration`](#aws-cdk-sdk.snowball.SnowballDeviceConfiguration)

---

##### `forwardingAddressId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.forwardingAddressId"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.jobId"></a>

- *Type:* `string`

---

##### `jobLogInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.jobLogInfo"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballJobLogs`](#aws-cdk-sdk.snowball.SnowballJobLogs)

---

##### `jobState`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.jobState"></a>

- *Type:* `string`

---

##### `jobType`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.jobType"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `notification`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.notification"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballNotification`](#aws-cdk-sdk.snowball.SnowballNotification)

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.resources"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballJobResource`](#aws-cdk-sdk.snowball.SnowballJobResource)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.roleArn"></a>

- *Type:* `string`

---

##### `shippingDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.shippingDetails"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballShippingDetails`](#aws-cdk-sdk.snowball.SnowballShippingDetails)

---

##### `snowballCapacityPreference`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.snowballCapacityPreference"></a>

- *Type:* `string`

---

##### `snowballType`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.snowballType"></a>

- *Type:* `string`

---

##### `taxDocuments`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobMetadata.property.taxDocuments"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballTaxDocuments`](#aws-cdk-sdk.snowball.SnowballTaxDocuments)

---

### SnowballJobResource <a name="aws-cdk-sdk.snowball.SnowballJobResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballJobResource: snowball.SnowballJobResource = { ... }
```

##### `ec2AmiResources`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobResource.property.ec2AmiResources"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballEc2AmiResource`](#aws-cdk-sdk.snowball.SnowballEc2AmiResource)[]

---

##### `lambdaResources`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobResource.property.lambdaResources"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballLambdaResource`](#aws-cdk-sdk.snowball.SnowballLambdaResource)[]

---

##### `s3Resources`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballJobResource.property.s3Resources"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballS3Resource`](#aws-cdk-sdk.snowball.SnowballS3Resource)[]

---

### SnowballKeyRange <a name="aws-cdk-sdk.snowball.SnowballKeyRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballKeyRange: snowball.SnowballKeyRange = { ... }
```

##### `beginMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballKeyRange.property.beginMarker"></a>

- *Type:* `string`

---

##### `endMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballKeyRange.property.endMarker"></a>

- *Type:* `string`

---

### SnowballLambdaResource <a name="aws-cdk-sdk.snowball.SnowballLambdaResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballLambdaResource: snowball.SnowballLambdaResource = { ... }
```

##### `eventTriggers`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballLambdaResource.property.eventTriggers"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballEventTriggerDefinition`](#aws-cdk-sdk.snowball.SnowballEventTriggerDefinition)[]

---

##### `lambdaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballLambdaResource.property.lambdaArn"></a>

- *Type:* `string`

---

### SnowballListClusterJobsRequest <a name="aws-cdk-sdk.snowball.SnowballListClusterJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballListClusterJobsRequest: snowball.SnowballListClusterJobsRequest = { ... }
```

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballListClusterJobsRequest.property.clusterId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballListClusterJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballListClusterJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SnowballListClusterJobsResult <a name="aws-cdk-sdk.snowball.SnowballListClusterJobsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballListClusterJobsResult: snowball.SnowballListClusterJobsResult = { ... }
```

##### `jobListEntries`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballListClusterJobsResult.property.jobListEntries"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballJobListEntry`](#aws-cdk-sdk.snowball.SnowballJobListEntry)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballListClusterJobsResult.property.nextToken"></a>

- *Type:* `string`

---

### SnowballListClustersRequest <a name="aws-cdk-sdk.snowball.SnowballListClustersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballListClustersRequest: snowball.SnowballListClustersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballListClustersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballListClustersRequest.property.nextToken"></a>

- *Type:* `string`

---

### SnowballListClustersResult <a name="aws-cdk-sdk.snowball.SnowballListClustersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballListClustersResult: snowball.SnowballListClustersResult = { ... }
```

##### `clusterListEntries`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballListClustersResult.property.clusterListEntries"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballClusterListEntry`](#aws-cdk-sdk.snowball.SnowballClusterListEntry)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballListClustersResult.property.nextToken"></a>

- *Type:* `string`

---

### SnowballListCompatibleImagesRequest <a name="aws-cdk-sdk.snowball.SnowballListCompatibleImagesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballListCompatibleImagesRequest: snowball.SnowballListCompatibleImagesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballListCompatibleImagesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballListCompatibleImagesRequest.property.nextToken"></a>

- *Type:* `string`

---

### SnowballListCompatibleImagesResult <a name="aws-cdk-sdk.snowball.SnowballListCompatibleImagesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballListCompatibleImagesResult: snowball.SnowballListCompatibleImagesResult = { ... }
```

##### `compatibleImages`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballListCompatibleImagesResult.property.compatibleImages"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballCompatibleImage`](#aws-cdk-sdk.snowball.SnowballCompatibleImage)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballListCompatibleImagesResult.property.nextToken"></a>

- *Type:* `string`

---

### SnowballListJobsRequest <a name="aws-cdk-sdk.snowball.SnowballListJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballListJobsRequest: snowball.SnowballListJobsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballListJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballListJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### SnowballListJobsResult <a name="aws-cdk-sdk.snowball.SnowballListJobsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballListJobsResult: snowball.SnowballListJobsResult = { ... }
```

##### `jobListEntries`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballListJobsResult.property.jobListEntries"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballJobListEntry`](#aws-cdk-sdk.snowball.SnowballJobListEntry)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballListJobsResult.property.nextToken"></a>

- *Type:* `string`

---

### SnowballNotification <a name="aws-cdk-sdk.snowball.SnowballNotification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballNotification: snowball.SnowballNotification = { ... }
```

##### `jobStatesToNotify`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballNotification.property.jobStatesToNotify"></a>

- *Type:* `string`[]

---

##### `notifyAll`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballNotification.property.notifyAll"></a>

- *Type:* `boolean`

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballNotification.property.snsTopicArn"></a>

- *Type:* `string`

---

### SnowballS3Resource <a name="aws-cdk-sdk.snowball.SnowballS3Resource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballS3Resource: snowball.SnowballS3Resource = { ... }
```

##### `bucketArn`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballS3Resource.property.bucketArn"></a>

- *Type:* `string`

---

##### `keyRange`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballS3Resource.property.keyRange"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballKeyRange`](#aws-cdk-sdk.snowball.SnowballKeyRange)

---

### SnowballShipment <a name="aws-cdk-sdk.snowball.SnowballShipment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballShipment: snowball.SnowballShipment = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballShipment.property.status"></a>

- *Type:* `string`

---

##### `trackingNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballShipment.property.trackingNumber"></a>

- *Type:* `string`

---

### SnowballShippingDetails <a name="aws-cdk-sdk.snowball.SnowballShippingDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballShippingDetails: snowball.SnowballShippingDetails = { ... }
```

##### `inboundShipment`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballShippingDetails.property.inboundShipment"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballShipment`](#aws-cdk-sdk.snowball.SnowballShipment)

---

##### `outboundShipment`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballShippingDetails.property.outboundShipment"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballShipment`](#aws-cdk-sdk.snowball.SnowballShipment)

---

##### `shippingOption`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballShippingDetails.property.shippingOption"></a>

- *Type:* `string`

---

### SnowballSnowconeDeviceConfiguration <a name="aws-cdk-sdk.snowball.SnowballSnowconeDeviceConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballSnowconeDeviceConfiguration: snowball.SnowballSnowconeDeviceConfiguration = { ... }
```

##### `wirelessConnection`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballSnowconeDeviceConfiguration.property.wirelessConnection"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballWirelessConnection`](#aws-cdk-sdk.snowball.SnowballWirelessConnection)

---

### SnowballTaxDocuments <a name="aws-cdk-sdk.snowball.SnowballTaxDocuments"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballTaxDocuments: snowball.SnowballTaxDocuments = { ... }
```

##### `ind`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballTaxDocuments.property.ind"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballIndTaxDocuments`](#aws-cdk-sdk.snowball.SnowballIndTaxDocuments)

---

### SnowballUpdateClusterRequest <a name="aws-cdk-sdk.snowball.SnowballUpdateClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballUpdateClusterRequest: snowball.SnowballUpdateClusterRequest = { ... }
```

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateClusterRequest.property.clusterId"></a>

- *Type:* `string`

---

##### `addressId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateClusterRequest.property.addressId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateClusterRequest.property.description"></a>

- *Type:* `string`

---

##### `forwardingAddressId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateClusterRequest.property.forwardingAddressId"></a>

- *Type:* `string`

---

##### `notification`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateClusterRequest.property.notification"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballNotification`](#aws-cdk-sdk.snowball.SnowballNotification)

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateClusterRequest.property.resources"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballJobResource`](#aws-cdk-sdk.snowball.SnowballJobResource)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateClusterRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `shippingOption`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateClusterRequest.property.shippingOption"></a>

- *Type:* `string`

---

### SnowballUpdateClusterResult <a name="aws-cdk-sdk.snowball.SnowballUpdateClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballUpdateClusterResult: snowball.SnowballUpdateClusterResult = { ... }
```

### SnowballUpdateJobRequest <a name="aws-cdk-sdk.snowball.SnowballUpdateJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballUpdateJobRequest: snowball.SnowballUpdateJobRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateJobRequest.property.jobId"></a>

- *Type:* `string`

---

##### `addressId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateJobRequest.property.addressId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateJobRequest.property.description"></a>

- *Type:* `string`

---

##### `forwardingAddressId`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateJobRequest.property.forwardingAddressId"></a>

- *Type:* `string`

---

##### `notification`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateJobRequest.property.notification"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballNotification`](#aws-cdk-sdk.snowball.SnowballNotification)

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateJobRequest.property.resources"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballJobResource`](#aws-cdk-sdk.snowball.SnowballJobResource)

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateJobRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `shippingOption`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateJobRequest.property.shippingOption"></a>

- *Type:* `string`

---

##### `snowballCapacityPreference`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateJobRequest.property.snowballCapacityPreference"></a>

- *Type:* `string`

---

### SnowballUpdateJobResult <a name="aws-cdk-sdk.snowball.SnowballUpdateJobResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballUpdateJobResult: snowball.SnowballUpdateJobResult = { ... }
```

### SnowballUpdateJobShipmentStateRequest <a name="aws-cdk-sdk.snowball.SnowballUpdateJobShipmentStateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballUpdateJobShipmentStateRequest: snowball.SnowballUpdateJobShipmentStateRequest = { ... }
```

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateJobShipmentStateRequest.property.jobId"></a>

- *Type:* `string`

---

##### `shipmentState`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballUpdateJobShipmentStateRequest.property.shipmentState"></a>

- *Type:* `string`

---

### SnowballUpdateJobShipmentStateResult <a name="aws-cdk-sdk.snowball.SnowballUpdateJobShipmentStateResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballUpdateJobShipmentStateResult: snowball.SnowballUpdateJobShipmentStateResult = { ... }
```

### SnowballWirelessConnection <a name="aws-cdk-sdk.snowball.SnowballWirelessConnection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

const snowballWirelessConnection: snowball.SnowballWirelessConnection = { ... }
```

##### `isWifiEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.snowball.SnowballWirelessConnection.property.isWifiEnabled"></a>

- *Type:* `boolean`

---

## Classes <a name="Classes"></a>

### SnowballResponsesCreateAddress <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateAddress"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateAddress.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesCreateAddress(__scope: Construct, __resources: string[], __input: SnowballCreateAddressRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateAddress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateAddress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateAddress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballCreateAddressRequest`](#aws-cdk-sdk.snowball.SnowballCreateAddressRequest)

---



#### Properties <a name="Properties"></a>

##### `addressId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateAddress.property.addressId"></a>

- *Type:* `string`

---


### SnowballResponsesCreateCluster <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateCluster"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateCluster.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesCreateCluster(__scope: Construct, __resources: string[], __input: SnowballCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballCreateClusterRequest`](#aws-cdk-sdk.snowball.SnowballCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateCluster.property.clusterId"></a>

- *Type:* `string`

---


### SnowballResponsesCreateJob <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateJob"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateJob.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesCreateJob(__scope: Construct, __resources: string[], __input: SnowballCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballCreateJobRequest`](#aws-cdk-sdk.snowball.SnowballCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateJob.property.jobId"></a>

- *Type:* `string`

---


### SnowballResponsesCreateReturnShippingLabel <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateReturnShippingLabel"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateReturnShippingLabel.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesCreateReturnShippingLabel(__scope: Construct, __resources: string[], __input: SnowballCreateReturnShippingLabelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateReturnShippingLabel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateReturnShippingLabel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateReturnShippingLabel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballCreateReturnShippingLabelRequest`](#aws-cdk-sdk.snowball.SnowballCreateReturnShippingLabelRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesCreateReturnShippingLabel.property.status"></a>

- *Type:* `string`

---


### SnowballResponsesDescribeAddress <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddress"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddress.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeAddress(__scope: Construct, __resources: string[], __input: SnowballDescribeAddressRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeAddressRequest`](#aws-cdk-sdk.snowball.SnowballDescribeAddressRequest)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddress.property.address"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress)

---


### SnowballResponsesDescribeAddressAddress <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeAddressAddress(__scope: Construct, __resources: string[], __input: SnowballDescribeAddressRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeAddressRequest`](#aws-cdk-sdk.snowball.SnowballDescribeAddressRequest)

---



#### Properties <a name="Properties"></a>

##### `addressId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.property.addressId"></a>

- *Type:* `string`

---

##### `city`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.property.city"></a>

- *Type:* `string`

---

##### `company`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.property.company"></a>

- *Type:* `string`

---

##### `country`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.property.country"></a>

- *Type:* `string`

---

##### `isRestricted`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.property.isRestricted"></a>

- *Type:* `boolean`

---

##### `landmark`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.property.landmark"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.property.name"></a>

- *Type:* `string`

---

##### `phoneNumber`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.property.phoneNumber"></a>

- *Type:* `string`

---

##### `postalCode`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.property.postalCode"></a>

- *Type:* `string`

---

##### `prefectureOrDistrict`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.property.prefectureOrDistrict"></a>

- *Type:* `string`

---

##### `stateOrProvince`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.property.stateOrProvince"></a>

- *Type:* `string`

---

##### `street1`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.property.street1"></a>

- *Type:* `string`

---

##### `street2`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.property.street2"></a>

- *Type:* `string`

---

##### `street3`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddressAddress.property.street3"></a>

- *Type:* `string`

---


### SnowballResponsesDescribeAddresses <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddresses"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddresses.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeAddresses(__scope: Construct, __resources: string[], __input: SnowballDescribeAddressesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddresses.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddresses.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddresses.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeAddressesRequest`](#aws-cdk-sdk.snowball.SnowballDescribeAddressesRequest)

---



#### Properties <a name="Properties"></a>

##### `addresses`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddresses.property.addresses"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballAddress`](#aws-cdk-sdk.snowball.SnowballAddress)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeAddresses.property.nextToken"></a>

- *Type:* `string`

---


### SnowballResponsesDescribeCluster <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeCluster"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeCluster.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeCluster(__scope: Construct, __resources: string[], __input: SnowballDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeClusterRequest`](#aws-cdk-sdk.snowball.SnowballDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeCluster.property.clusterMetadata"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata)

---


### SnowballResponsesDescribeClusterClusterMetadata <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeClusterClusterMetadata(__scope: Construct, __resources: string[], __input: SnowballDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeClusterRequest`](#aws-cdk-sdk.snowball.SnowballDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `addressId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.property.addressId"></a>

- *Type:* `string`

---

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.property.clusterId"></a>

- *Type:* `string`

---

##### `clusterState`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.property.clusterState"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.property.creationDate"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.property.description"></a>

- *Type:* `string`

---

##### `forwardingAddressId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.property.forwardingAddressId"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.property.jobType"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `notification`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.property.notification"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataNotification`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataNotification)

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.property.resources"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataResources`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataResources)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.property.roleArn"></a>

- *Type:* `string`

---

##### `shippingOption`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.property.shippingOption"></a>

- *Type:* `string`

---

##### `snowballType`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.property.snowballType"></a>

- *Type:* `string`

---

##### `taxDocuments`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadata.property.taxDocuments"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocuments`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocuments)

---


### SnowballResponsesDescribeClusterClusterMetadataNotification <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataNotification"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataNotification.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeClusterClusterMetadataNotification(__scope: Construct, __resources: string[], __input: SnowballDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataNotification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataNotification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataNotification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeClusterRequest`](#aws-cdk-sdk.snowball.SnowballDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `jobStatesToNotify`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataNotification.property.jobStatesToNotify"></a>

- *Type:* `string`[]

---

##### `notifyAll`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataNotification.property.notifyAll"></a>

- *Type:* `boolean`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataNotification.property.snsTopicArn"></a>

- *Type:* `string`

---


### SnowballResponsesDescribeClusterClusterMetadataResources <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataResources"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataResources.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeClusterClusterMetadataResources(__scope: Construct, __resources: string[], __input: SnowballDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeClusterRequest`](#aws-cdk-sdk.snowball.SnowballDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `ec2AmiResources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataResources.property.ec2AmiResources"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballEc2AmiResource`](#aws-cdk-sdk.snowball.SnowballEc2AmiResource)[]

---

##### `lambdaResources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataResources.property.lambdaResources"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballLambdaResource`](#aws-cdk-sdk.snowball.SnowballLambdaResource)[]

---

##### `s3Resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataResources.property.s3Resources"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballS3Resource`](#aws-cdk-sdk.snowball.SnowballS3Resource)[]

---


### SnowballResponsesDescribeClusterClusterMetadataTaxDocuments <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocuments"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocuments.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocuments(__scope: Construct, __resources: string[], __input: SnowballDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocuments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocuments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocuments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeClusterRequest`](#aws-cdk-sdk.snowball.SnowballDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `ind`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocuments.property.ind"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocumentsInd`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocumentsInd)

---


### SnowballResponsesDescribeClusterClusterMetadataTaxDocumentsInd <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocumentsInd"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocumentsInd.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocumentsInd(__scope: Construct, __resources: string[], __input: SnowballDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocumentsInd.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocumentsInd.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocumentsInd.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeClusterRequest`](#aws-cdk-sdk.snowball.SnowballDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `gstin`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeClusterClusterMetadataTaxDocumentsInd.property.gstin"></a>

- *Type:* `string`

---


### SnowballResponsesDescribeJob <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJob"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJob.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeJob(__scope: Construct, __resources: string[], __input: SnowballDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeJobRequest`](#aws-cdk-sdk.snowball.SnowballDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJob.property.jobMetadata"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata)

---

##### `subJobMetadata`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJob.property.subJobMetadata"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballJobMetadata`](#aws-cdk-sdk.snowball.SnowballJobMetadata)[]

---


### SnowballResponsesDescribeJobJobMetadata <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeJobJobMetadata(__scope: Construct, __resources: string[], __input: SnowballDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeJobRequest`](#aws-cdk-sdk.snowball.SnowballDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `addressId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.addressId"></a>

- *Type:* `string`

---

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.clusterId"></a>

- *Type:* `string`

---

##### `creationDate`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.creationDate"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDataTransferProgress`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDataTransferProgress)

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.description"></a>

- *Type:* `string`

---

##### `deviceConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.deviceConfiguration"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfiguration`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfiguration)

---

##### `forwardingAddressId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.forwardingAddressId"></a>

- *Type:* `string`

---

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.jobId"></a>

- *Type:* `string`

---

##### `jobLogInfo`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.jobLogInfo"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataJobLogInfo`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataJobLogInfo)

---

##### `jobState`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.jobState"></a>

- *Type:* `string`

---

##### `jobType`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.jobType"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `notification`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.notification"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataNotification`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataNotification)

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.resources"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataResources`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataResources)

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.roleArn"></a>

- *Type:* `string`

---

##### `shippingDetails`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.shippingDetails"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetails`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetails)

---

##### `snowballCapacityPreference`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.snowballCapacityPreference"></a>

- *Type:* `string`

---

##### `snowballType`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.snowballType"></a>

- *Type:* `string`

---

##### `taxDocuments`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadata.property.taxDocuments"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataTaxDocuments`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataTaxDocuments)

---


### SnowballResponsesDescribeJobJobMetadataDataTransferProgress <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDataTransferProgress"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDataTransferProgress.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeJobJobMetadataDataTransferProgress(__scope: Construct, __resources: string[], __input: SnowballDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDataTransferProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDataTransferProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDataTransferProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeJobRequest`](#aws-cdk-sdk.snowball.SnowballDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `bytesTransferred`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDataTransferProgress.property.bytesTransferred"></a>

- *Type:* `number`

---

##### `objectsTransferred`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDataTransferProgress.property.objectsTransferred"></a>

- *Type:* `number`

---

##### `totalBytes`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDataTransferProgress.property.totalBytes"></a>

- *Type:* `number`

---

##### `totalObjects`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDataTransferProgress.property.totalObjects"></a>

- *Type:* `number`

---


### SnowballResponsesDescribeJobJobMetadataDeviceConfiguration <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfiguration.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfiguration(__scope: Construct, __resources: string[], __input: SnowballDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeJobRequest`](#aws-cdk-sdk.snowball.SnowballDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `snowconeDeviceConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfiguration.property.snowconeDeviceConfiguration"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfiguration`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfiguration)

---


### SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfiguration <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfiguration.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfiguration(__scope: Construct, __resources: string[], __input: SnowballDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeJobRequest`](#aws-cdk-sdk.snowball.SnowballDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `wirelessConnection`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfiguration.property.wirelessConnection"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfigurationWirelessConnection`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfigurationWirelessConnection)

---


### SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfigurationWirelessConnection <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfigurationWirelessConnection"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfigurationWirelessConnection.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfigurationWirelessConnection(__scope: Construct, __resources: string[], __input: SnowballDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfigurationWirelessConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfigurationWirelessConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfigurationWirelessConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeJobRequest`](#aws-cdk-sdk.snowball.SnowballDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `isWifiEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataDeviceConfigurationSnowconeDeviceConfigurationWirelessConnection.property.isWifiEnabled"></a>

- *Type:* `boolean`

---


### SnowballResponsesDescribeJobJobMetadataJobLogInfo <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataJobLogInfo"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataJobLogInfo.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeJobJobMetadataJobLogInfo(__scope: Construct, __resources: string[], __input: SnowballDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataJobLogInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataJobLogInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataJobLogInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeJobRequest`](#aws-cdk-sdk.snowball.SnowballDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobCompletionReportUri`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataJobLogInfo.property.jobCompletionReportUri"></a>

- *Type:* `string`

---

##### `jobFailureLogUri`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataJobLogInfo.property.jobFailureLogUri"></a>

- *Type:* `string`

---

##### `jobSuccessLogUri`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataJobLogInfo.property.jobSuccessLogUri"></a>

- *Type:* `string`

---


### SnowballResponsesDescribeJobJobMetadataNotification <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataNotification"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataNotification.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeJobJobMetadataNotification(__scope: Construct, __resources: string[], __input: SnowballDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataNotification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataNotification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataNotification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeJobRequest`](#aws-cdk-sdk.snowball.SnowballDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobStatesToNotify`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataNotification.property.jobStatesToNotify"></a>

- *Type:* `string`[]

---

##### `notifyAll`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataNotification.property.notifyAll"></a>

- *Type:* `boolean`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataNotification.property.snsTopicArn"></a>

- *Type:* `string`

---


### SnowballResponsesDescribeJobJobMetadataResources <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataResources"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataResources.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeJobJobMetadataResources(__scope: Construct, __resources: string[], __input: SnowballDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataResources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataResources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataResources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeJobRequest`](#aws-cdk-sdk.snowball.SnowballDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `ec2AmiResources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataResources.property.ec2AmiResources"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballEc2AmiResource`](#aws-cdk-sdk.snowball.SnowballEc2AmiResource)[]

---

##### `lambdaResources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataResources.property.lambdaResources"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballLambdaResource`](#aws-cdk-sdk.snowball.SnowballLambdaResource)[]

---

##### `s3Resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataResources.property.s3Resources"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballS3Resource`](#aws-cdk-sdk.snowball.SnowballS3Resource)[]

---


### SnowballResponsesDescribeJobJobMetadataShippingDetails <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetails"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetails.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeJobJobMetadataShippingDetails(__scope: Construct, __resources: string[], __input: SnowballDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetails.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetails.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetails.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeJobRequest`](#aws-cdk-sdk.snowball.SnowballDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `inboundShipment`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetails.property.inboundShipment"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsInboundShipment`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsInboundShipment)

---

##### `outboundShipment`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetails.property.outboundShipment"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsOutboundShipment`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsOutboundShipment)

---

##### `shippingOption`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetails.property.shippingOption"></a>

- *Type:* `string`

---


### SnowballResponsesDescribeJobJobMetadataShippingDetailsInboundShipment <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsInboundShipment"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsInboundShipment.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsInboundShipment(__scope: Construct, __resources: string[], __input: SnowballDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsInboundShipment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsInboundShipment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsInboundShipment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeJobRequest`](#aws-cdk-sdk.snowball.SnowballDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsInboundShipment.property.status"></a>

- *Type:* `string`

---

##### `trackingNumber`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsInboundShipment.property.trackingNumber"></a>

- *Type:* `string`

---


### SnowballResponsesDescribeJobJobMetadataShippingDetailsOutboundShipment <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsOutboundShipment"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsOutboundShipment.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsOutboundShipment(__scope: Construct, __resources: string[], __input: SnowballDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsOutboundShipment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsOutboundShipment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsOutboundShipment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeJobRequest`](#aws-cdk-sdk.snowball.SnowballDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsOutboundShipment.property.status"></a>

- *Type:* `string`

---

##### `trackingNumber`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataShippingDetailsOutboundShipment.property.trackingNumber"></a>

- *Type:* `string`

---


### SnowballResponsesDescribeJobJobMetadataTaxDocuments <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataTaxDocuments"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataTaxDocuments.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeJobJobMetadataTaxDocuments(__scope: Construct, __resources: string[], __input: SnowballDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataTaxDocuments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataTaxDocuments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataTaxDocuments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeJobRequest`](#aws-cdk-sdk.snowball.SnowballDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `ind`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataTaxDocuments.property.ind"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataTaxDocumentsInd`](#aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataTaxDocumentsInd)

---


### SnowballResponsesDescribeJobJobMetadataTaxDocumentsInd <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataTaxDocumentsInd"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataTaxDocumentsInd.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeJobJobMetadataTaxDocumentsInd(__scope: Construct, __resources: string[], __input: SnowballDescribeJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataTaxDocumentsInd.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataTaxDocumentsInd.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataTaxDocumentsInd.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeJobRequest`](#aws-cdk-sdk.snowball.SnowballDescribeJobRequest)

---



#### Properties <a name="Properties"></a>

##### `gstin`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeJobJobMetadataTaxDocumentsInd.property.gstin"></a>

- *Type:* `string`

---


### SnowballResponsesDescribeReturnShippingLabel <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeReturnShippingLabel"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeReturnShippingLabel.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesDescribeReturnShippingLabel(__scope: Construct, __resources: string[], __input: SnowballDescribeReturnShippingLabelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeReturnShippingLabel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeReturnShippingLabel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeReturnShippingLabel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballDescribeReturnShippingLabelRequest`](#aws-cdk-sdk.snowball.SnowballDescribeReturnShippingLabelRequest)

---



#### Properties <a name="Properties"></a>

##### `expirationDate`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeReturnShippingLabel.property.expirationDate"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesDescribeReturnShippingLabel.property.status"></a>

- *Type:* `string`

---


### SnowballResponsesFetchJobManifest <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchJobManifest"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchJobManifest.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesFetchJobManifest(__scope: Construct, __resources: string[], __input: SnowballGetJobManifestRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchJobManifest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchJobManifest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchJobManifest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballGetJobManifestRequest`](#aws-cdk-sdk.snowball.SnowballGetJobManifestRequest)

---



#### Properties <a name="Properties"></a>

##### `manifestUri`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchJobManifest.property.manifestUri"></a>

- *Type:* `string`

---


### SnowballResponsesFetchJobUnlockCode <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchJobUnlockCode"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchJobUnlockCode.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesFetchJobUnlockCode(__scope: Construct, __resources: string[], __input: SnowballGetJobUnlockCodeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchJobUnlockCode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchJobUnlockCode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchJobUnlockCode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballGetJobUnlockCodeRequest`](#aws-cdk-sdk.snowball.SnowballGetJobUnlockCodeRequest)

---



#### Properties <a name="Properties"></a>

##### `unlockCode`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchJobUnlockCode.property.unlockCode"></a>

- *Type:* `string`

---


### SnowballResponsesFetchSnowballUsage <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchSnowballUsage"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchSnowballUsage.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesFetchSnowballUsage(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchSnowballUsage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchSnowballUsage.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `snowballLimit`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchSnowballUsage.property.snowballLimit"></a>

- *Type:* `number`

---

##### `snowballsInUse`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchSnowballUsage.property.snowballsInUse"></a>

- *Type:* `number`

---


### SnowballResponsesFetchSoftwareUpdates <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchSoftwareUpdates"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchSoftwareUpdates.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesFetchSoftwareUpdates(__scope: Construct, __resources: string[], __input: SnowballGetSoftwareUpdatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchSoftwareUpdates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchSoftwareUpdates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchSoftwareUpdates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballGetSoftwareUpdatesRequest`](#aws-cdk-sdk.snowball.SnowballGetSoftwareUpdatesRequest)

---



#### Properties <a name="Properties"></a>

##### `updatesUri`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesFetchSoftwareUpdates.property.updatesUri"></a>

- *Type:* `string`

---


### SnowballResponsesListClusterJobs <a name="aws-cdk-sdk.snowball.SnowballResponsesListClusterJobs"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesListClusterJobs.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesListClusterJobs(__scope: Construct, __resources: string[], __input: SnowballListClusterJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListClusterJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListClusterJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListClusterJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballListClusterJobsRequest`](#aws-cdk-sdk.snowball.SnowballListClusterJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobListEntries`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListClusterJobs.property.jobListEntries"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballJobListEntry`](#aws-cdk-sdk.snowball.SnowballJobListEntry)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListClusterJobs.property.nextToken"></a>

- *Type:* `string`

---


### SnowballResponsesListClusters <a name="aws-cdk-sdk.snowball.SnowballResponsesListClusters"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesListClusters.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesListClusters(__scope: Construct, __resources: string[], __input: SnowballListClustersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListClusters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListClusters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListClusters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballListClustersRequest`](#aws-cdk-sdk.snowball.SnowballListClustersRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterListEntries`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListClusters.property.clusterListEntries"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballClusterListEntry`](#aws-cdk-sdk.snowball.SnowballClusterListEntry)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListClusters.property.nextToken"></a>

- *Type:* `string`

---


### SnowballResponsesListCompatibleImages <a name="aws-cdk-sdk.snowball.SnowballResponsesListCompatibleImages"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesListCompatibleImages.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesListCompatibleImages(__scope: Construct, __resources: string[], __input: SnowballListCompatibleImagesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListCompatibleImages.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListCompatibleImages.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListCompatibleImages.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballListCompatibleImagesRequest`](#aws-cdk-sdk.snowball.SnowballListCompatibleImagesRequest)

---



#### Properties <a name="Properties"></a>

##### `compatibleImages`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListCompatibleImages.property.compatibleImages"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballCompatibleImage`](#aws-cdk-sdk.snowball.SnowballCompatibleImage)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListCompatibleImages.property.nextToken"></a>

- *Type:* `string`

---


### SnowballResponsesListJobs <a name="aws-cdk-sdk.snowball.SnowballResponsesListJobs"></a>

#### Initializer <a name="aws-cdk-sdk.snowball.SnowballResponsesListJobs.Initializer"></a>

```typescript
import { snowball } from 'aws-cdk-sdk'

new snowball.SnowballResponsesListJobs(__scope: Construct, __resources: string[], __input: SnowballListJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballListJobsRequest`](#aws-cdk-sdk.snowball.SnowballListJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobListEntries`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListJobs.property.jobListEntries"></a>

- *Type:* [`aws-cdk-sdk.snowball.SnowballJobListEntry`](#aws-cdk-sdk.snowball.SnowballJobListEntry)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.snowball.SnowballResponsesListJobs.property.nextToken"></a>

- *Type:* `string`

---



