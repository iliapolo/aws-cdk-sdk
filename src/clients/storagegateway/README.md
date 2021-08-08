# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### StorageGatewayClient <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `activateGateway` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.activateGateway"></a>

```typescript
public activateGateway(input: StorageGatewayActivateGatewayInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayActivateGatewayInput`](#aws-cdk-sdk.storagegateway.StorageGatewayActivateGatewayInput)

---

##### `addCache` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.addCache"></a>

```typescript
public addCache(input: StorageGatewayAddCacheInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayAddCacheInput`](#aws-cdk-sdk.storagegateway.StorageGatewayAddCacheInput)

---

##### `addTagsToResource` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.addTagsToResource"></a>

```typescript
public addTagsToResource(input: StorageGatewayAddTagsToResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayAddTagsToResourceInput`](#aws-cdk-sdk.storagegateway.StorageGatewayAddTagsToResourceInput)

---

##### `addUploadBuffer` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.addUploadBuffer"></a>

```typescript
public addUploadBuffer(input: StorageGatewayAddUploadBufferInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayAddUploadBufferInput`](#aws-cdk-sdk.storagegateway.StorageGatewayAddUploadBufferInput)

---

##### `addWorkingStorage` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.addWorkingStorage"></a>

```typescript
public addWorkingStorage(input: StorageGatewayAddWorkingStorageInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayAddWorkingStorageInput`](#aws-cdk-sdk.storagegateway.StorageGatewayAddWorkingStorageInput)

---

##### `assignTapePool` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.assignTapePool"></a>

```typescript
public assignTapePool(input: StorageGatewayAssignTapePoolInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayAssignTapePoolInput`](#aws-cdk-sdk.storagegateway.StorageGatewayAssignTapePoolInput)

---

##### `attachVolume` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.attachVolume"></a>

```typescript
public attachVolume(input: StorageGatewayAttachVolumeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayAttachVolumeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayAttachVolumeInput)

---

##### `cancelArchival` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.cancelArchival"></a>

```typescript
public cancelArchival(input: StorageGatewayCancelArchivalInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCancelArchivalInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCancelArchivalInput)

---

##### `cancelRetrieval` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.cancelRetrieval"></a>

```typescript
public cancelRetrieval(input: StorageGatewayCancelRetrievalInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCancelRetrievalInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCancelRetrievalInput)

---

##### `createCachediScsiVolume` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.createCachediScsiVolume"></a>

```typescript
public createCachediScsiVolume(input: StorageGatewayCreateCachediScsiVolumeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeInput)

---

##### `createNfsFileShare` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.createNfsFileShare"></a>

```typescript
public createNfsFileShare(input: StorageGatewayCreateNfsFileShareInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput)

---

##### `createSmbFileShare` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.createSmbFileShare"></a>

```typescript
public createSmbFileShare(input: StorageGatewayCreateSmbFileShareInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput)

---

##### `createSnapshot` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.createSnapshot"></a>

```typescript
public createSnapshot(input: StorageGatewayCreateSnapshotInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotInput)

---

##### `createSnapshotFromVolumeRecoveryPoint` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.createSnapshotFromVolumeRecoveryPoint"></a>

```typescript
public createSnapshotFromVolumeRecoveryPoint(input: StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput)

---

##### `createStorediScsiVolume` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.createStorediScsiVolume"></a>

```typescript
public createStorediScsiVolume(input: StorageGatewayCreateStorediScsiVolumeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeInput)

---

##### `createTapePool` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.createTapePool"></a>

```typescript
public createTapePool(input: StorageGatewayCreateTapePoolInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateTapePoolInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateTapePoolInput)

---

##### `createTapes` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.createTapes"></a>

```typescript
public createTapes(input: StorageGatewayCreateTapesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateTapesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateTapesInput)

---

##### `createTapeWithBarcode` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.createTapeWithBarcode"></a>

```typescript
public createTapeWithBarcode(input: StorageGatewayCreateTapeWithBarcodeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateTapeWithBarcodeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateTapeWithBarcodeInput)

---

##### `deleteAutomaticTapeCreationPolicy` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.deleteAutomaticTapeCreationPolicy"></a>

```typescript
public deleteAutomaticTapeCreationPolicy(input: StorageGatewayDeleteAutomaticTapeCreationPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteAutomaticTapeCreationPolicyInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteAutomaticTapeCreationPolicyInput)

---

##### `deleteBandwidthRateLimit` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.deleteBandwidthRateLimit"></a>

```typescript
public deleteBandwidthRateLimit(input: StorageGatewayDeleteBandwidthRateLimitInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteBandwidthRateLimitInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteBandwidthRateLimitInput)

---

##### `deleteChapCredentials` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.deleteChapCredentials"></a>

```typescript
public deleteChapCredentials(input: StorageGatewayDeleteChapCredentialsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteChapCredentialsInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteChapCredentialsInput)

---

##### `deleteFileShare` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.deleteFileShare"></a>

```typescript
public deleteFileShare(input: StorageGatewayDeleteFileShareInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteFileShareInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteFileShareInput)

---

##### `deleteGateway` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.deleteGateway"></a>

```typescript
public deleteGateway(input: StorageGatewayDeleteGatewayInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteGatewayInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteGatewayInput)

---

##### `deleteSnapshotSchedule` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.deleteSnapshotSchedule"></a>

```typescript
public deleteSnapshotSchedule(input: StorageGatewayDeleteSnapshotScheduleInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteSnapshotScheduleInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteSnapshotScheduleInput)

---

##### `deleteTape` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.deleteTape"></a>

```typescript
public deleteTape(input: StorageGatewayDeleteTapeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeInput)

---

##### `deleteTapeArchive` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.deleteTapeArchive"></a>

```typescript
public deleteTapeArchive(input: StorageGatewayDeleteTapeArchiveInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeArchiveInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeArchiveInput)

---

##### `deleteTapePool` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.deleteTapePool"></a>

```typescript
public deleteTapePool(input: StorageGatewayDeleteTapePoolInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapePoolInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapePoolInput)

---

##### `deleteVolume` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.deleteVolume"></a>

```typescript
public deleteVolume(input: StorageGatewayDeleteVolumeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteVolumeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteVolumeInput)

---

##### `describeAvailabilityMonitorTest` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeAvailabilityMonitorTest"></a>

```typescript
public describeAvailabilityMonitorTest(input: StorageGatewayDescribeAvailabilityMonitorTestInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeAvailabilityMonitorTestInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeAvailabilityMonitorTestInput)

---

##### `describeBandwidthRateLimit` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeBandwidthRateLimit"></a>

```typescript
public describeBandwidthRateLimit(input: StorageGatewayDescribeBandwidthRateLimitInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitInput)

---

##### `describeBandwidthRateLimitSchedule` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeBandwidthRateLimitSchedule"></a>

```typescript
public describeBandwidthRateLimitSchedule(input: StorageGatewayDescribeBandwidthRateLimitScheduleInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitScheduleInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitScheduleInput)

---

##### `describeCache` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeCache"></a>

```typescript
public describeCache(input: StorageGatewayDescribeCacheInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeCacheInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeCacheInput)

---

##### `describeCachediScsiVolumes` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeCachediScsiVolumes"></a>

```typescript
public describeCachediScsiVolumes(input: StorageGatewayDescribeCachediScsiVolumesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeCachediScsiVolumesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeCachediScsiVolumesInput)

---

##### `describeChapCredentials` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeChapCredentials"></a>

```typescript
public describeChapCredentials(input: StorageGatewayDescribeChapCredentialsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeChapCredentialsInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeChapCredentialsInput)

---

##### `describeGatewayInformation` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeGatewayInformation"></a>

```typescript
public describeGatewayInformation(input: StorageGatewayDescribeGatewayInformationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationInput)

---

##### `describeMaintenanceStartTime` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeMaintenanceStartTime"></a>

```typescript
public describeMaintenanceStartTime(input: StorageGatewayDescribeMaintenanceStartTimeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeMaintenanceStartTimeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeMaintenanceStartTimeInput)

---

##### `describeNfsFileShares` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeNfsFileShares"></a>

```typescript
public describeNfsFileShares(input: StorageGatewayDescribeNfsFileSharesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeNfsFileSharesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeNfsFileSharesInput)

---

##### `describeSmbFileShares` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeSmbFileShares"></a>

```typescript
public describeSmbFileShares(input: StorageGatewayDescribeSmbFileSharesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbFileSharesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbFileSharesInput)

---

##### `describeSmbSettings` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeSmbSettings"></a>

```typescript
public describeSmbSettings(input: StorageGatewayDescribeSmbSettingsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbSettingsInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbSettingsInput)

---

##### `describeSnapshotSchedule` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeSnapshotSchedule"></a>

```typescript
public describeSnapshotSchedule(input: StorageGatewayDescribeSnapshotScheduleInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeSnapshotScheduleInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeSnapshotScheduleInput)

---

##### `describeStorediScsiVolumes` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeStorediScsiVolumes"></a>

```typescript
public describeStorediScsiVolumes(input: StorageGatewayDescribeStorediScsiVolumesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeStorediScsiVolumesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeStorediScsiVolumesInput)

---

##### `describeTapeArchives` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeTapeArchives"></a>

```typescript
public describeTapeArchives(input: StorageGatewayDescribeTapeArchivesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeArchivesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeArchivesInput)

---

##### `describeTapeRecoveryPoints` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeTapeRecoveryPoints"></a>

```typescript
public describeTapeRecoveryPoints(input: StorageGatewayDescribeTapeRecoveryPointsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeRecoveryPointsInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeRecoveryPointsInput)

---

##### `describeTapes` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeTapes"></a>

```typescript
public describeTapes(input: StorageGatewayDescribeTapesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapesInput)

---

##### `describeUploadBuffer` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeUploadBuffer"></a>

```typescript
public describeUploadBuffer(input: StorageGatewayDescribeUploadBufferInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeUploadBufferInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeUploadBufferInput)

---

##### `describeVtlDevices` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeVtlDevices"></a>

```typescript
public describeVtlDevices(input: StorageGatewayDescribeVtlDevicesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeVtlDevicesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeVtlDevicesInput)

---

##### `describeWorkingStorage` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.describeWorkingStorage"></a>

```typescript
public describeWorkingStorage(input: StorageGatewayDescribeWorkingStorageInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeWorkingStorageInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeWorkingStorageInput)

---

##### `detachVolume` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.detachVolume"></a>

```typescript
public detachVolume(input: StorageGatewayDetachVolumeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDetachVolumeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDetachVolumeInput)

---

##### `disableGateway` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.disableGateway"></a>

```typescript
public disableGateway(input: StorageGatewayDisableGatewayInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDisableGatewayInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDisableGatewayInput)

---

##### `joinDomain` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.joinDomain"></a>

```typescript
public joinDomain(input: StorageGatewayJoinDomainInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayJoinDomainInput`](#aws-cdk-sdk.storagegateway.StorageGatewayJoinDomainInput)

---

##### `listAutomaticTapeCreationPolicies` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.listAutomaticTapeCreationPolicies"></a>

```typescript
public listAutomaticTapeCreationPolicies(input: StorageGatewayListAutomaticTapeCreationPoliciesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListAutomaticTapeCreationPoliciesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListAutomaticTapeCreationPoliciesInput)

---

##### `listFileShares` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.listFileShares"></a>

```typescript
public listFileShares(input: StorageGatewayListFileSharesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListFileSharesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListFileSharesInput)

---

##### `listGateways` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.listGateways"></a>

```typescript
public listGateways(input: StorageGatewayListGatewaysInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListGatewaysInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListGatewaysInput)

---

##### `listLocalDisks` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.listLocalDisks"></a>

```typescript
public listLocalDisks(input: StorageGatewayListLocalDisksInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListLocalDisksInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListLocalDisksInput)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: StorageGatewayListTagsForResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListTagsForResourceInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListTagsForResourceInput)

---

##### `listTapePools` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.listTapePools"></a>

```typescript
public listTapePools(input: StorageGatewayListTapePoolsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListTapePoolsInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListTapePoolsInput)

---

##### `listTapes` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.listTapes"></a>

```typescript
public listTapes(input: StorageGatewayListTapesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListTapesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListTapesInput)

---

##### `listVolumeInitiators` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.listVolumeInitiators"></a>

```typescript
public listVolumeInitiators(input: StorageGatewayListVolumeInitiatorsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListVolumeInitiatorsInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListVolumeInitiatorsInput)

---

##### `listVolumeRecoveryPoints` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.listVolumeRecoveryPoints"></a>

```typescript
public listVolumeRecoveryPoints(input: StorageGatewayListVolumeRecoveryPointsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListVolumeRecoveryPointsInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListVolumeRecoveryPointsInput)

---

##### `listVolumes` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.listVolumes"></a>

```typescript
public listVolumes(input: StorageGatewayListVolumesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListVolumesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListVolumesInput)

---

##### `notifyWhenUploaded` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.notifyWhenUploaded"></a>

```typescript
public notifyWhenUploaded(input: StorageGatewayNotifyWhenUploadedInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayNotifyWhenUploadedInput`](#aws-cdk-sdk.storagegateway.StorageGatewayNotifyWhenUploadedInput)

---

##### `putLocalConsolePassword` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.putLocalConsolePassword"></a>

```typescript
public putLocalConsolePassword(input: StorageGatewaySetLocalConsolePasswordInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewaySetLocalConsolePasswordInput`](#aws-cdk-sdk.storagegateway.StorageGatewaySetLocalConsolePasswordInput)

---

##### `putSmbGuestPassword` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.putSmbGuestPassword"></a>

```typescript
public putSmbGuestPassword(input: StorageGatewaySetSmbGuestPasswordInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewaySetSmbGuestPasswordInput`](#aws-cdk-sdk.storagegateway.StorageGatewaySetSmbGuestPasswordInput)

---

##### `refreshCache` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.refreshCache"></a>

```typescript
public refreshCache(input: StorageGatewayRefreshCacheInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayRefreshCacheInput`](#aws-cdk-sdk.storagegateway.StorageGatewayRefreshCacheInput)

---

##### `removeTagsFromResource` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.removeTagsFromResource"></a>

```typescript
public removeTagsFromResource(input: StorageGatewayRemoveTagsFromResourceInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayRemoveTagsFromResourceInput`](#aws-cdk-sdk.storagegateway.StorageGatewayRemoveTagsFromResourceInput)

---

##### `resetCache` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.resetCache"></a>

```typescript
public resetCache(input: StorageGatewayResetCacheInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayResetCacheInput`](#aws-cdk-sdk.storagegateway.StorageGatewayResetCacheInput)

---

##### `retrieveTapeArchive` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.retrieveTapeArchive"></a>

```typescript
public retrieveTapeArchive(input: StorageGatewayRetrieveTapeArchiveInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeArchiveInput`](#aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeArchiveInput)

---

##### `retrieveTapeRecoveryPoint` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.retrieveTapeRecoveryPoint"></a>

```typescript
public retrieveTapeRecoveryPoint(input: StorageGatewayRetrieveTapeRecoveryPointInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeRecoveryPointInput`](#aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeRecoveryPointInput)

---

##### `shutdownGateway` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.shutdownGateway"></a>

```typescript
public shutdownGateway(input: StorageGatewayShutdownGatewayInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayShutdownGatewayInput`](#aws-cdk-sdk.storagegateway.StorageGatewayShutdownGatewayInput)

---

##### `startAvailabilityMonitorTest` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.startAvailabilityMonitorTest"></a>

```typescript
public startAvailabilityMonitorTest(input: StorageGatewayStartAvailabilityMonitorTestInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayStartAvailabilityMonitorTestInput`](#aws-cdk-sdk.storagegateway.StorageGatewayStartAvailabilityMonitorTestInput)

---

##### `startGateway` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.startGateway"></a>

```typescript
public startGateway(input: StorageGatewayStartGatewayInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayStartGatewayInput`](#aws-cdk-sdk.storagegateway.StorageGatewayStartGatewayInput)

---

##### `updateAutomaticTapeCreationPolicy` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.updateAutomaticTapeCreationPolicy"></a>

```typescript
public updateAutomaticTapeCreationPolicy(input: StorageGatewayUpdateAutomaticTapeCreationPolicyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateAutomaticTapeCreationPolicyInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateAutomaticTapeCreationPolicyInput)

---

##### `updateBandwidthRateLimit` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.updateBandwidthRateLimit"></a>

```typescript
public updateBandwidthRateLimit(input: StorageGatewayUpdateBandwidthRateLimitInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitInput)

---

##### `updateBandwidthRateLimitSchedule` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.updateBandwidthRateLimitSchedule"></a>

```typescript
public updateBandwidthRateLimitSchedule(input: StorageGatewayUpdateBandwidthRateLimitScheduleInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitScheduleInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitScheduleInput)

---

##### `updateChapCredentials` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.updateChapCredentials"></a>

```typescript
public updateChapCredentials(input: StorageGatewayUpdateChapCredentialsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateChapCredentialsInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateChapCredentialsInput)

---

##### `updateGatewayInformation` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.updateGatewayInformation"></a>

```typescript
public updateGatewayInformation(input: StorageGatewayUpdateGatewayInformationInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewayInformationInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewayInformationInput)

---

##### `updateGatewaySoftwareNow` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.updateGatewaySoftwareNow"></a>

```typescript
public updateGatewaySoftwareNow(input: StorageGatewayUpdateGatewaySoftwareNowInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewaySoftwareNowInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewaySoftwareNowInput)

---

##### `updateMaintenanceStartTime` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.updateMaintenanceStartTime"></a>

```typescript
public updateMaintenanceStartTime(input: StorageGatewayUpdateMaintenanceStartTimeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateMaintenanceStartTimeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateMaintenanceStartTimeInput)

---

##### `updateNfsFileShare` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.updateNfsFileShare"></a>

```typescript
public updateNfsFileShare(input: StorageGatewayUpdateNfsFileShareInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput)

---

##### `updateSmbFileShare` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.updateSmbFileShare"></a>

```typescript
public updateSmbFileShare(input: StorageGatewayUpdateSmbFileShareInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput)

---

##### `updateSmbFileShareVisibility` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.updateSmbFileShareVisibility"></a>

```typescript
public updateSmbFileShareVisibility(input: StorageGatewayUpdateSmbFileShareVisibilityInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareVisibilityInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareVisibilityInput)

---

##### `updateSmbSecurityStrategy` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.updateSmbSecurityStrategy"></a>

```typescript
public updateSmbSecurityStrategy(input: StorageGatewayUpdateSmbSecurityStrategyInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbSecurityStrategyInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbSecurityStrategyInput)

---

##### `updateSnapshotSchedule` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.updateSnapshotSchedule"></a>

```typescript
public updateSnapshotSchedule(input: StorageGatewayUpdateSnapshotScheduleInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateSnapshotScheduleInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateSnapshotScheduleInput)

---

##### `updateVtlDeviceType` <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.updateVtlDeviceType"></a>

```typescript
public updateVtlDeviceType(input: StorageGatewayUpdateVtlDeviceTypeInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateVtlDeviceTypeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateVtlDeviceTypeInput)

---




## Structs <a name="Structs"></a>

### StorageGatewayActivateGatewayInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayActivateGatewayInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayActivateGatewayInput: storagegateway.StorageGatewayActivateGatewayInput = { ... }
```

##### `activationKey`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayActivateGatewayInput.property.activationKey"></a>

- *Type:* `string`

---

##### `gatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayActivateGatewayInput.property.gatewayName"></a>

- *Type:* `string`

---

##### `gatewayRegion`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayActivateGatewayInput.property.gatewayRegion"></a>

- *Type:* `string`

---

##### `gatewayTimezone`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayActivateGatewayInput.property.gatewayTimezone"></a>

- *Type:* `string`

---

##### `gatewayType`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayActivateGatewayInput.property.gatewayType"></a>

- *Type:* `string`

---

##### `mediumChangerType`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayActivateGatewayInput.property.mediumChangerType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayActivateGatewayInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

##### `tapeDriveType`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayActivateGatewayInput.property.tapeDriveType"></a>

- *Type:* `string`

---

### StorageGatewayActivateGatewayOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayActivateGatewayOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayActivateGatewayOutput: storagegateway.StorageGatewayActivateGatewayOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayActivateGatewayOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayAddCacheInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddCacheInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayAddCacheInput: storagegateway.StorageGatewayAddCacheInput = { ... }
```

##### `diskIds`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddCacheInput.property.diskIds"></a>

- *Type:* `string`[]

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddCacheInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayAddCacheOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddCacheOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayAddCacheOutput: storagegateway.StorageGatewayAddCacheOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddCacheOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayAddTagsToResourceInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddTagsToResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayAddTagsToResourceInput: storagegateway.StorageGatewayAddTagsToResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddTagsToResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddTagsToResourceInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

### StorageGatewayAddTagsToResourceOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddTagsToResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayAddTagsToResourceOutput: storagegateway.StorageGatewayAddTagsToResourceOutput = { ... }
```

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddTagsToResourceOutput.property.resourceArn"></a>

- *Type:* `string`

---

### StorageGatewayAddUploadBufferInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddUploadBufferInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayAddUploadBufferInput: storagegateway.StorageGatewayAddUploadBufferInput = { ... }
```

##### `diskIds`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddUploadBufferInput.property.diskIds"></a>

- *Type:* `string`[]

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddUploadBufferInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayAddUploadBufferOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddUploadBufferOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayAddUploadBufferOutput: storagegateway.StorageGatewayAddUploadBufferOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddUploadBufferOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayAddWorkingStorageInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddWorkingStorageInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayAddWorkingStorageInput: storagegateway.StorageGatewayAddWorkingStorageInput = { ... }
```

##### `diskIds`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddWorkingStorageInput.property.diskIds"></a>

- *Type:* `string`[]

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddWorkingStorageInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayAddWorkingStorageOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddWorkingStorageOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayAddWorkingStorageOutput: storagegateway.StorageGatewayAddWorkingStorageOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAddWorkingStorageOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayAssignTapePoolInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayAssignTapePoolInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayAssignTapePoolInput: storagegateway.StorageGatewayAssignTapePoolInput = { ... }
```

##### `poolId`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAssignTapePoolInput.property.poolId"></a>

- *Type:* `string`

---

##### `tapeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAssignTapePoolInput.property.tapeArn"></a>

- *Type:* `string`

---

##### `bypassGovernanceRetention`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAssignTapePoolInput.property.bypassGovernanceRetention"></a>

- *Type:* `boolean`

---

### StorageGatewayAssignTapePoolOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayAssignTapePoolOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayAssignTapePoolOutput: storagegateway.StorageGatewayAssignTapePoolOutput = { ... }
```

##### `tapeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAssignTapePoolOutput.property.tapeArn"></a>

- *Type:* `string`

---

### StorageGatewayAttachVolumeInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayAttachVolumeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayAttachVolumeInput: storagegateway.StorageGatewayAttachVolumeInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAttachVolumeInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `networkInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAttachVolumeInput.property.networkInterfaceId"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAttachVolumeInput.property.volumeArn"></a>

- *Type:* `string`

---

##### `diskId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAttachVolumeInput.property.diskId"></a>

- *Type:* `string`

---

##### `targetName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAttachVolumeInput.property.targetName"></a>

- *Type:* `string`

---

### StorageGatewayAttachVolumeOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayAttachVolumeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayAttachVolumeOutput: storagegateway.StorageGatewayAttachVolumeOutput = { ... }
```

##### `targetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAttachVolumeOutput.property.targetArn"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAttachVolumeOutput.property.volumeArn"></a>

- *Type:* `string`

---

### StorageGatewayAutomaticTapeCreationPolicyInfo <a name="aws-cdk-sdk.storagegateway.StorageGatewayAutomaticTapeCreationPolicyInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayAutomaticTapeCreationPolicyInfo: storagegateway.StorageGatewayAutomaticTapeCreationPolicyInfo = { ... }
```

##### `automaticTapeCreationRules`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAutomaticTapeCreationPolicyInfo.property.automaticTapeCreationRules"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayAutomaticTapeCreationRule`](#aws-cdk-sdk.storagegateway.StorageGatewayAutomaticTapeCreationRule)[]

---

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAutomaticTapeCreationPolicyInfo.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayAutomaticTapeCreationRule <a name="aws-cdk-sdk.storagegateway.StorageGatewayAutomaticTapeCreationRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayAutomaticTapeCreationRule: storagegateway.StorageGatewayAutomaticTapeCreationRule = { ... }
```

##### `minimumNumTapes`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAutomaticTapeCreationRule.property.minimumNumTapes"></a>

- *Type:* `number`

---

##### `poolId`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAutomaticTapeCreationRule.property.poolId"></a>

- *Type:* `string`

---

##### `tapeBarcodePrefix`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAutomaticTapeCreationRule.property.tapeBarcodePrefix"></a>

- *Type:* `string`

---

##### `tapeSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAutomaticTapeCreationRule.property.tapeSizeInBytes"></a>

- *Type:* `number`

---

##### `worm`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayAutomaticTapeCreationRule.property.worm"></a>

- *Type:* `boolean`

---

### StorageGatewayBandwidthRateLimitInterval <a name="aws-cdk-sdk.storagegateway.StorageGatewayBandwidthRateLimitInterval"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayBandwidthRateLimitInterval: storagegateway.StorageGatewayBandwidthRateLimitInterval = { ... }
```

##### `daysOfWeek`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayBandwidthRateLimitInterval.property.daysOfWeek"></a>

- *Type:* `number`[]

---

##### `endHourOfDay`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayBandwidthRateLimitInterval.property.endHourOfDay"></a>

- *Type:* `number`

---

##### `endMinuteOfHour`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayBandwidthRateLimitInterval.property.endMinuteOfHour"></a>

- *Type:* `number`

---

##### `startHourOfDay`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayBandwidthRateLimitInterval.property.startHourOfDay"></a>

- *Type:* `number`

---

##### `startMinuteOfHour`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayBandwidthRateLimitInterval.property.startMinuteOfHour"></a>

- *Type:* `number`

---

##### `averageDownloadRateLimitInBitsPerSec`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayBandwidthRateLimitInterval.property.averageDownloadRateLimitInBitsPerSec"></a>

- *Type:* `number`

---

##### `averageUploadRateLimitInBitsPerSec`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayBandwidthRateLimitInterval.property.averageUploadRateLimitInBitsPerSec"></a>

- *Type:* `number`

---

### StorageGatewayCacheAttributes <a name="aws-cdk-sdk.storagegateway.StorageGatewayCacheAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCacheAttributes: storagegateway.StorageGatewayCacheAttributes = { ... }
```

##### `cacheStaleTimeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCacheAttributes.property.cacheStaleTimeoutInSeconds"></a>

- *Type:* `number`

---

### StorageGatewayCachediScsiVolume <a name="aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCachediScsiVolume: storagegateway.StorageGatewayCachediScsiVolume = { ... }
```

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume.property.createdDate"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume.property.kmsKey"></a>

- *Type:* `string`

---

##### `sourceSnapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume.property.sourceSnapshotId"></a>

- *Type:* `string`

---

##### `targetName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume.property.targetName"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume.property.volumeArn"></a>

- *Type:* `string`

---

##### `volumeAttachmentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume.property.volumeAttachmentStatus"></a>

- *Type:* `string`

---

##### `volumeId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume.property.volumeId"></a>

- *Type:* `string`

---

##### `volumeiScsiAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume.property.volumeiScsiAttributes"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayVolumeiScsiAttributes`](#aws-cdk-sdk.storagegateway.StorageGatewayVolumeiScsiAttributes)

---

##### `volumeProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume.property.volumeProgress"></a>

- *Type:* `number`

---

##### `volumeSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume.property.volumeSizeInBytes"></a>

- *Type:* `number`

---

##### `volumeStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume.property.volumeStatus"></a>

- *Type:* `string`

---

##### `volumeType`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume.property.volumeType"></a>

- *Type:* `string`

---

##### `volumeUsedInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume.property.volumeUsedInBytes"></a>

- *Type:* `number`

---

### StorageGatewayCancelArchivalInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCancelArchivalInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCancelArchivalInput: storagegateway.StorageGatewayCancelArchivalInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCancelArchivalInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `tapeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCancelArchivalInput.property.tapeArn"></a>

- *Type:* `string`

---

### StorageGatewayCancelArchivalOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCancelArchivalOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCancelArchivalOutput: storagegateway.StorageGatewayCancelArchivalOutput = { ... }
```

##### `tapeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCancelArchivalOutput.property.tapeArn"></a>

- *Type:* `string`

---

### StorageGatewayCancelRetrievalInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCancelRetrievalInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCancelRetrievalInput: storagegateway.StorageGatewayCancelRetrievalInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCancelRetrievalInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `tapeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCancelRetrievalInput.property.tapeArn"></a>

- *Type:* `string`

---

### StorageGatewayCancelRetrievalOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCancelRetrievalOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCancelRetrievalOutput: storagegateway.StorageGatewayCancelRetrievalOutput = { ... }
```

##### `tapeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCancelRetrievalOutput.property.tapeArn"></a>

- *Type:* `string`

---

### StorageGatewayChapInfo <a name="aws-cdk-sdk.storagegateway.StorageGatewayChapInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayChapInfo: storagegateway.StorageGatewayChapInfo = { ... }
```

##### `initiatorName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayChapInfo.property.initiatorName"></a>

- *Type:* `string`

---

##### `secretToAuthenticateInitiator`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayChapInfo.property.secretToAuthenticateInitiator"></a>

- *Type:* `string`

---

##### `secretToAuthenticateTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayChapInfo.property.secretToAuthenticateTarget"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayChapInfo.property.targetArn"></a>

- *Type:* `string`

---

### StorageGatewayCreateCachediScsiVolumeInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateCachediScsiVolumeInput: storagegateway.StorageGatewayCreateCachediScsiVolumeInput = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeInput.property.clientToken"></a>

- *Type:* `string`

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `networkInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeInput.property.networkInterfaceId"></a>

- *Type:* `string`

---

##### `targetName`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeInput.property.targetName"></a>

- *Type:* `string`

---

##### `volumeSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeInput.property.volumeSizeInBytes"></a>

- *Type:* `number`

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeInput.property.kmsEncrypted"></a>

- *Type:* `boolean`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeInput.property.kmsKey"></a>

- *Type:* `string`

---

##### `snapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeInput.property.snapshotId"></a>

- *Type:* `string`

---

##### `sourceVolumeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeInput.property.sourceVolumeArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

### StorageGatewayCreateCachediScsiVolumeOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateCachediScsiVolumeOutput: storagegateway.StorageGatewayCreateCachediScsiVolumeOutput = { ... }
```

##### `targetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeOutput.property.targetArn"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeOutput.property.volumeArn"></a>

- *Type:* `string`

---

### StorageGatewayCreateNfsFileShareInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateNfsFileShareInput: storagegateway.StorageGatewayCreateNfsFileShareInput = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.clientToken"></a>

- *Type:* `string`

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.locationArn"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.role"></a>

- *Type:* `string`

---

##### `cacheAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.cacheAttributes"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCacheAttributes`](#aws-cdk-sdk.storagegateway.StorageGatewayCacheAttributes)

---

##### `clientList`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.clientList"></a>

- *Type:* `string`[]

---

##### `defaultStorageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.defaultStorageClass"></a>

- *Type:* `string`

---

##### `fileShareName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.fileShareName"></a>

- *Type:* `string`

---

##### `guessMimeTypeEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.guessMimeTypeEnabled"></a>

- *Type:* `boolean`

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.kmsEncrypted"></a>

- *Type:* `boolean`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.kmsKey"></a>

- *Type:* `string`

---

##### `nfsFileShareDefaults`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.nfsFileShareDefaults"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareDefaults`](#aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareDefaults)

---

##### `notificationPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.notificationPolicy"></a>

- *Type:* `string`

---

##### `objectAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.objectAcl"></a>

- *Type:* `string`

---

##### `readOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.readOnly"></a>

- *Type:* `boolean`

---

##### `requesterPays`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.requesterPays"></a>

- *Type:* `boolean`

---

##### `squash`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.squash"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

### StorageGatewayCreateNfsFileShareOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateNfsFileShareOutput: storagegateway.StorageGatewayCreateNfsFileShareOutput = { ... }
```

##### `fileShareArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareOutput.property.fileShareArn"></a>

- *Type:* `string`

---

### StorageGatewayCreateSmbFileShareInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateSmbFileShareInput: storagegateway.StorageGatewayCreateSmbFileShareInput = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.clientToken"></a>

- *Type:* `string`

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `locationArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.locationArn"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.role"></a>

- *Type:* `string`

---

##### `accessBasedEnumeration`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.accessBasedEnumeration"></a>

- *Type:* `boolean`

---

##### `adminUserList`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.adminUserList"></a>

- *Type:* `string`[]

---

##### `auditDestinationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.auditDestinationArn"></a>

- *Type:* `string`

---

##### `authentication`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.authentication"></a>

- *Type:* `string`

---

##### `cacheAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.cacheAttributes"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCacheAttributes`](#aws-cdk-sdk.storagegateway.StorageGatewayCacheAttributes)

---

##### `caseSensitivity`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.caseSensitivity"></a>

- *Type:* `string`

---

##### `defaultStorageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.defaultStorageClass"></a>

- *Type:* `string`

---

##### `fileShareName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.fileShareName"></a>

- *Type:* `string`

---

##### `guessMimeTypeEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.guessMimeTypeEnabled"></a>

- *Type:* `boolean`

---

##### `invalidUserList`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.invalidUserList"></a>

- *Type:* `string`[]

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.kmsEncrypted"></a>

- *Type:* `boolean`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.kmsKey"></a>

- *Type:* `string`

---

##### `notificationPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.notificationPolicy"></a>

- *Type:* `string`

---

##### `objectAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.objectAcl"></a>

- *Type:* `string`

---

##### `readOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.readOnly"></a>

- *Type:* `boolean`

---

##### `requesterPays`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.requesterPays"></a>

- *Type:* `boolean`

---

##### `smbaclEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.smbaclEnabled"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

##### `validUserList`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput.property.validUserList"></a>

- *Type:* `string`[]

---

### StorageGatewayCreateSmbFileShareOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateSmbFileShareOutput: storagegateway.StorageGatewayCreateSmbFileShareOutput = { ... }
```

##### `fileShareArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareOutput.property.fileShareArn"></a>

- *Type:* `string`

---

### StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateSnapshotFromVolumeRecoveryPointInput: storagegateway.StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput = { ... }
```

##### `snapshotDescription`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput.property.snapshotDescription"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput.property.volumeArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

### StorageGatewayCreateSnapshotFromVolumeRecoveryPointOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotFromVolumeRecoveryPointOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateSnapshotFromVolumeRecoveryPointOutput: storagegateway.StorageGatewayCreateSnapshotFromVolumeRecoveryPointOutput = { ... }
```

##### `snapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotFromVolumeRecoveryPointOutput.property.snapshotId"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotFromVolumeRecoveryPointOutput.property.volumeArn"></a>

- *Type:* `string`

---

##### `volumeRecoveryPointTime`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotFromVolumeRecoveryPointOutput.property.volumeRecoveryPointTime"></a>

- *Type:* `string`

---

### StorageGatewayCreateSnapshotInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateSnapshotInput: storagegateway.StorageGatewayCreateSnapshotInput = { ... }
```

##### `snapshotDescription`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotInput.property.snapshotDescription"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotInput.property.volumeArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

### StorageGatewayCreateSnapshotOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateSnapshotOutput: storagegateway.StorageGatewayCreateSnapshotOutput = { ... }
```

##### `snapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotOutput.property.snapshotId"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotOutput.property.volumeArn"></a>

- *Type:* `string`

---

### StorageGatewayCreateStorediScsiVolumeInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateStorediScsiVolumeInput: storagegateway.StorageGatewayCreateStorediScsiVolumeInput = { ... }
```

##### `diskId`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeInput.property.diskId"></a>

- *Type:* `string`

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `networkInterfaceId`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeInput.property.networkInterfaceId"></a>

- *Type:* `string`

---

##### `preserveExistingData`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeInput.property.preserveExistingData"></a>

- *Type:* `boolean`

---

##### `targetName`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeInput.property.targetName"></a>

- *Type:* `string`

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeInput.property.kmsEncrypted"></a>

- *Type:* `boolean`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeInput.property.kmsKey"></a>

- *Type:* `string`

---

##### `snapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeInput.property.snapshotId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

### StorageGatewayCreateStorediScsiVolumeOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateStorediScsiVolumeOutput: storagegateway.StorageGatewayCreateStorediScsiVolumeOutput = { ... }
```

##### `targetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeOutput.property.targetArn"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeOutput.property.volumeArn"></a>

- *Type:* `string`

---

##### `volumeSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeOutput.property.volumeSizeInBytes"></a>

- *Type:* `number`

---

### StorageGatewayCreateTapePoolInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapePoolInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateTapePoolInput: storagegateway.StorageGatewayCreateTapePoolInput = { ... }
```

##### `poolName`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapePoolInput.property.poolName"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapePoolInput.property.storageClass"></a>

- *Type:* `string`

---

##### `retentionLockTimeInDays`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapePoolInput.property.retentionLockTimeInDays"></a>

- *Type:* `number`

---

##### `retentionLockType`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapePoolInput.property.retentionLockType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapePoolInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

### StorageGatewayCreateTapePoolOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapePoolOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateTapePoolOutput: storagegateway.StorageGatewayCreateTapePoolOutput = { ... }
```

##### `poolArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapePoolOutput.property.poolArn"></a>

- *Type:* `string`

---

### StorageGatewayCreateTapesInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateTapesInput: storagegateway.StorageGatewayCreateTapesInput = { ... }
```

##### `clientToken`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapesInput.property.clientToken"></a>

- *Type:* `string`

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapesInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `numTapesToCreate`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapesInput.property.numTapesToCreate"></a>

- *Type:* `number`

---

##### `tapeBarcodePrefix`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapesInput.property.tapeBarcodePrefix"></a>

- *Type:* `string`

---

##### `tapeSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapesInput.property.tapeSizeInBytes"></a>

- *Type:* `number`

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapesInput.property.kmsEncrypted"></a>

- *Type:* `boolean`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapesInput.property.kmsKey"></a>

- *Type:* `string`

---

##### `poolId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapesInput.property.poolId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapesInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

##### `worm`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapesInput.property.worm"></a>

- *Type:* `boolean`

---

### StorageGatewayCreateTapesOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateTapesOutput: storagegateway.StorageGatewayCreateTapesOutput = { ... }
```

##### `tapeArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapesOutput.property.tapeArNs"></a>

- *Type:* `string`[]

---

### StorageGatewayCreateTapeWithBarcodeInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapeWithBarcodeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateTapeWithBarcodeInput: storagegateway.StorageGatewayCreateTapeWithBarcodeInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapeWithBarcodeInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `tapeBarcode`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapeWithBarcodeInput.property.tapeBarcode"></a>

- *Type:* `string`

---

##### `tapeSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapeWithBarcodeInput.property.tapeSizeInBytes"></a>

- *Type:* `number`

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapeWithBarcodeInput.property.kmsEncrypted"></a>

- *Type:* `boolean`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapeWithBarcodeInput.property.kmsKey"></a>

- *Type:* `string`

---

##### `poolId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapeWithBarcodeInput.property.poolId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapeWithBarcodeInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

##### `worm`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapeWithBarcodeInput.property.worm"></a>

- *Type:* `boolean`

---

### StorageGatewayCreateTapeWithBarcodeOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapeWithBarcodeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayCreateTapeWithBarcodeOutput: storagegateway.StorageGatewayCreateTapeWithBarcodeOutput = { ... }
```

##### `tapeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayCreateTapeWithBarcodeOutput.property.tapeArn"></a>

- *Type:* `string`

---

### StorageGatewayDeleteAutomaticTapeCreationPolicyInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteAutomaticTapeCreationPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteAutomaticTapeCreationPolicyInput: storagegateway.StorageGatewayDeleteAutomaticTapeCreationPolicyInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteAutomaticTapeCreationPolicyInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDeleteAutomaticTapeCreationPolicyOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteAutomaticTapeCreationPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteAutomaticTapeCreationPolicyOutput: storagegateway.StorageGatewayDeleteAutomaticTapeCreationPolicyOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteAutomaticTapeCreationPolicyOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDeleteBandwidthRateLimitInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteBandwidthRateLimitInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteBandwidthRateLimitInput: storagegateway.StorageGatewayDeleteBandwidthRateLimitInput = { ... }
```

##### `bandwidthType`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteBandwidthRateLimitInput.property.bandwidthType"></a>

- *Type:* `string`

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteBandwidthRateLimitInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDeleteBandwidthRateLimitOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteBandwidthRateLimitOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteBandwidthRateLimitOutput: storagegateway.StorageGatewayDeleteBandwidthRateLimitOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteBandwidthRateLimitOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDeleteChapCredentialsInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteChapCredentialsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteChapCredentialsInput: storagegateway.StorageGatewayDeleteChapCredentialsInput = { ... }
```

##### `initiatorName`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteChapCredentialsInput.property.initiatorName"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteChapCredentialsInput.property.targetArn"></a>

- *Type:* `string`

---

### StorageGatewayDeleteChapCredentialsOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteChapCredentialsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteChapCredentialsOutput: storagegateway.StorageGatewayDeleteChapCredentialsOutput = { ... }
```

##### `initiatorName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteChapCredentialsOutput.property.initiatorName"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteChapCredentialsOutput.property.targetArn"></a>

- *Type:* `string`

---

### StorageGatewayDeleteFileShareInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteFileShareInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteFileShareInput: storagegateway.StorageGatewayDeleteFileShareInput = { ... }
```

##### `fileShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteFileShareInput.property.fileShareArn"></a>

- *Type:* `string`

---

##### `forceDelete`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteFileShareInput.property.forceDelete"></a>

- *Type:* `boolean`

---

### StorageGatewayDeleteFileShareOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteFileShareOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteFileShareOutput: storagegateway.StorageGatewayDeleteFileShareOutput = { ... }
```

##### `fileShareArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteFileShareOutput.property.fileShareArn"></a>

- *Type:* `string`

---

### StorageGatewayDeleteGatewayInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteGatewayInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteGatewayInput: storagegateway.StorageGatewayDeleteGatewayInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteGatewayInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDeleteGatewayOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteGatewayOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteGatewayOutput: storagegateway.StorageGatewayDeleteGatewayOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteGatewayOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDeleteSnapshotScheduleInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteSnapshotScheduleInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteSnapshotScheduleInput: storagegateway.StorageGatewayDeleteSnapshotScheduleInput = { ... }
```

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteSnapshotScheduleInput.property.volumeArn"></a>

- *Type:* `string`

---

### StorageGatewayDeleteSnapshotScheduleOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteSnapshotScheduleOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteSnapshotScheduleOutput: storagegateway.StorageGatewayDeleteSnapshotScheduleOutput = { ... }
```

##### `volumeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteSnapshotScheduleOutput.property.volumeArn"></a>

- *Type:* `string`

---

### StorageGatewayDeleteTapeArchiveInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeArchiveInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteTapeArchiveInput: storagegateway.StorageGatewayDeleteTapeArchiveInput = { ... }
```

##### `tapeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeArchiveInput.property.tapeArn"></a>

- *Type:* `string`

---

##### `bypassGovernanceRetention`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeArchiveInput.property.bypassGovernanceRetention"></a>

- *Type:* `boolean`

---

### StorageGatewayDeleteTapeArchiveOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeArchiveOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteTapeArchiveOutput: storagegateway.StorageGatewayDeleteTapeArchiveOutput = { ... }
```

##### `tapeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeArchiveOutput.property.tapeArn"></a>

- *Type:* `string`

---

### StorageGatewayDeleteTapeInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteTapeInput: storagegateway.StorageGatewayDeleteTapeInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `tapeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeInput.property.tapeArn"></a>

- *Type:* `string`

---

##### `bypassGovernanceRetention`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeInput.property.bypassGovernanceRetention"></a>

- *Type:* `boolean`

---

### StorageGatewayDeleteTapeOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteTapeOutput: storagegateway.StorageGatewayDeleteTapeOutput = { ... }
```

##### `tapeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeOutput.property.tapeArn"></a>

- *Type:* `string`

---

### StorageGatewayDeleteTapePoolInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapePoolInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteTapePoolInput: storagegateway.StorageGatewayDeleteTapePoolInput = { ... }
```

##### `poolArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapePoolInput.property.poolArn"></a>

- *Type:* `string`

---

### StorageGatewayDeleteTapePoolOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapePoolOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteTapePoolOutput: storagegateway.StorageGatewayDeleteTapePoolOutput = { ... }
```

##### `poolArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapePoolOutput.property.poolArn"></a>

- *Type:* `string`

---

### StorageGatewayDeleteVolumeInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteVolumeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteVolumeInput: storagegateway.StorageGatewayDeleteVolumeInput = { ... }
```

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteVolumeInput.property.volumeArn"></a>

- *Type:* `string`

---

### StorageGatewayDeleteVolumeOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteVolumeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeleteVolumeOutput: storagegateway.StorageGatewayDeleteVolumeOutput = { ... }
```

##### `volumeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeleteVolumeOutput.property.volumeArn"></a>

- *Type:* `string`

---

### StorageGatewayDescribeAvailabilityMonitorTestInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeAvailabilityMonitorTestInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeAvailabilityMonitorTestInput: storagegateway.StorageGatewayDescribeAvailabilityMonitorTestInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeAvailabilityMonitorTestInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDescribeAvailabilityMonitorTestOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeAvailabilityMonitorTestOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeAvailabilityMonitorTestOutput: storagegateway.StorageGatewayDescribeAvailabilityMonitorTestOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeAvailabilityMonitorTestOutput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeAvailabilityMonitorTestOutput.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeAvailabilityMonitorTestOutput.property.status"></a>

- *Type:* `string`

---

### StorageGatewayDescribeBandwidthRateLimitInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeBandwidthRateLimitInput: storagegateway.StorageGatewayDescribeBandwidthRateLimitInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDescribeBandwidthRateLimitOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeBandwidthRateLimitOutput: storagegateway.StorageGatewayDescribeBandwidthRateLimitOutput = { ... }
```

##### `averageDownloadRateLimitInBitsPerSec`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitOutput.property.averageDownloadRateLimitInBitsPerSec"></a>

- *Type:* `number`

---

##### `averageUploadRateLimitInBitsPerSec`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitOutput.property.averageUploadRateLimitInBitsPerSec"></a>

- *Type:* `number`

---

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDescribeBandwidthRateLimitScheduleInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitScheduleInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeBandwidthRateLimitScheduleInput: storagegateway.StorageGatewayDescribeBandwidthRateLimitScheduleInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitScheduleInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDescribeBandwidthRateLimitScheduleOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitScheduleOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeBandwidthRateLimitScheduleOutput: storagegateway.StorageGatewayDescribeBandwidthRateLimitScheduleOutput = { ... }
```

##### `bandwidthRateLimitIntervals`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitScheduleOutput.property.bandwidthRateLimitIntervals"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayBandwidthRateLimitInterval`](#aws-cdk-sdk.storagegateway.StorageGatewayBandwidthRateLimitInterval)[]

---

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitScheduleOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDescribeCachediScsiVolumesInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeCachediScsiVolumesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeCachediScsiVolumesInput: storagegateway.StorageGatewayDescribeCachediScsiVolumesInput = { ... }
```

##### `volumeArNs`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeCachediScsiVolumesInput.property.volumeArNs"></a>

- *Type:* `string`[]

---

### StorageGatewayDescribeCachediScsiVolumesOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeCachediScsiVolumesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeCachediScsiVolumesOutput: storagegateway.StorageGatewayDescribeCachediScsiVolumesOutput = { ... }
```

##### `cachediScsiVolumes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeCachediScsiVolumesOutput.property.cachediScsiVolumes"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume`](#aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume)[]

---

### StorageGatewayDescribeCacheInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeCacheInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeCacheInput: storagegateway.StorageGatewayDescribeCacheInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeCacheInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDescribeCacheOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeCacheOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeCacheOutput: storagegateway.StorageGatewayDescribeCacheOutput = { ... }
```

##### `cacheAllocatedInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeCacheOutput.property.cacheAllocatedInBytes"></a>

- *Type:* `number`

---

##### `cacheDirtyPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeCacheOutput.property.cacheDirtyPercentage"></a>

- *Type:* `number`

---

##### `cacheHitPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeCacheOutput.property.cacheHitPercentage"></a>

- *Type:* `number`

---

##### `cacheMissPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeCacheOutput.property.cacheMissPercentage"></a>

- *Type:* `number`

---

##### `cacheUsedPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeCacheOutput.property.cacheUsedPercentage"></a>

- *Type:* `number`

---

##### `diskIds`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeCacheOutput.property.diskIds"></a>

- *Type:* `string`[]

---

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeCacheOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDescribeChapCredentialsInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeChapCredentialsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeChapCredentialsInput: storagegateway.StorageGatewayDescribeChapCredentialsInput = { ... }
```

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeChapCredentialsInput.property.targetArn"></a>

- *Type:* `string`

---

### StorageGatewayDescribeChapCredentialsOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeChapCredentialsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeChapCredentialsOutput: storagegateway.StorageGatewayDescribeChapCredentialsOutput = { ... }
```

##### `chapCredentials`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeChapCredentialsOutput.property.chapCredentials"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayChapInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayChapInfo)[]

---

### StorageGatewayDescribeGatewayInformationInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeGatewayInformationInput: storagegateway.StorageGatewayDescribeGatewayInformationInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDescribeGatewayInformationOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeGatewayInformationOutput: storagegateway.StorageGatewayDescribeGatewayInformationOutput = { ... }
```

##### `cloudWatchLogGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.cloudWatchLogGroupArn"></a>

- *Type:* `string`

---

##### `deprecationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.deprecationDate"></a>

- *Type:* `string`

---

##### `ec2InstanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.ec2InstanceId"></a>

- *Type:* `string`

---

##### `ec2InstanceRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.ec2InstanceRegion"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.endpointType"></a>

- *Type:* `string`

---

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `gatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.gatewayId"></a>

- *Type:* `string`

---

##### `gatewayName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.gatewayName"></a>

- *Type:* `string`

---

##### `gatewayNetworkInterfaces`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.gatewayNetworkInterfaces"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayNetworkInterface`](#aws-cdk-sdk.storagegateway.StorageGatewayNetworkInterface)[]

---

##### `gatewayState`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.gatewayState"></a>

- *Type:* `string`

---

##### `gatewayTimezone`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.gatewayTimezone"></a>

- *Type:* `string`

---

##### `gatewayType`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.gatewayType"></a>

- *Type:* `string`

---

##### `hostEnvironment`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.hostEnvironment"></a>

- *Type:* `string`

---

##### `lastSoftwareUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.lastSoftwareUpdate"></a>

- *Type:* `string`

---

##### `nextUpdateAvailabilityDate`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.nextUpdateAvailabilityDate"></a>

- *Type:* `string`

---

##### `softwareUpdatesEndDate`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.softwareUpdatesEndDate"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

##### `vpcEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationOutput.property.vpcEndpoint"></a>

- *Type:* `string`

---

### StorageGatewayDescribeMaintenanceStartTimeInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeMaintenanceStartTimeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeMaintenanceStartTimeInput: storagegateway.StorageGatewayDescribeMaintenanceStartTimeInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeMaintenanceStartTimeInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDescribeMaintenanceStartTimeOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeMaintenanceStartTimeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeMaintenanceStartTimeOutput: storagegateway.StorageGatewayDescribeMaintenanceStartTimeOutput = { ... }
```

##### `dayOfMonth`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeMaintenanceStartTimeOutput.property.dayOfMonth"></a>

- *Type:* `number`

---

##### `dayOfWeek`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeMaintenanceStartTimeOutput.property.dayOfWeek"></a>

- *Type:* `number`

---

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeMaintenanceStartTimeOutput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `hourOfDay`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeMaintenanceStartTimeOutput.property.hourOfDay"></a>

- *Type:* `number`

---

##### `minuteOfHour`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeMaintenanceStartTimeOutput.property.minuteOfHour"></a>

- *Type:* `number`

---

##### `timezone`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeMaintenanceStartTimeOutput.property.timezone"></a>

- *Type:* `string`

---

### StorageGatewayDescribeNfsFileSharesInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeNfsFileSharesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeNfsFileSharesInput: storagegateway.StorageGatewayDescribeNfsFileSharesInput = { ... }
```

##### `fileShareArnList`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeNfsFileSharesInput.property.fileShareArnList"></a>

- *Type:* `string`[]

---

### StorageGatewayDescribeNfsFileSharesOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeNfsFileSharesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeNfsFileSharesOutput: storagegateway.StorageGatewayDescribeNfsFileSharesOutput = { ... }
```

##### `nfsFileShareInfoList`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeNfsFileSharesOutput.property.nfsFileShareInfoList"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo)[]

---

### StorageGatewayDescribeSmbFileSharesInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbFileSharesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeSmbFileSharesInput: storagegateway.StorageGatewayDescribeSmbFileSharesInput = { ... }
```

##### `fileShareArnList`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbFileSharesInput.property.fileShareArnList"></a>

- *Type:* `string`[]

---

### StorageGatewayDescribeSmbFileSharesOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbFileSharesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeSmbFileSharesOutput: storagegateway.StorageGatewayDescribeSmbFileSharesOutput = { ... }
```

##### `smbFileShareInfoList`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbFileSharesOutput.property.smbFileShareInfoList"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo`](#aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo)[]

---

### StorageGatewayDescribeSmbSettingsInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbSettingsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeSmbSettingsInput: storagegateway.StorageGatewayDescribeSmbSettingsInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbSettingsInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDescribeSmbSettingsOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbSettingsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeSmbSettingsOutput: storagegateway.StorageGatewayDescribeSmbSettingsOutput = { ... }
```

##### `activeDirectoryStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbSettingsOutput.property.activeDirectoryStatus"></a>

- *Type:* `string`

---

##### `domainName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbSettingsOutput.property.domainName"></a>

- *Type:* `string`

---

##### `fileSharesVisible`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbSettingsOutput.property.fileSharesVisible"></a>

- *Type:* `boolean`

---

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbSettingsOutput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `smbGuestPasswordSet`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbSettingsOutput.property.smbGuestPasswordSet"></a>

- *Type:* `boolean`

---

##### `smbSecurityStrategy`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbSettingsOutput.property.smbSecurityStrategy"></a>

- *Type:* `string`

---

### StorageGatewayDescribeSnapshotScheduleInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSnapshotScheduleInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeSnapshotScheduleInput: storagegateway.StorageGatewayDescribeSnapshotScheduleInput = { ... }
```

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSnapshotScheduleInput.property.volumeArn"></a>

- *Type:* `string`

---

### StorageGatewayDescribeSnapshotScheduleOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSnapshotScheduleOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeSnapshotScheduleOutput: storagegateway.StorageGatewayDescribeSnapshotScheduleOutput = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSnapshotScheduleOutput.property.description"></a>

- *Type:* `string`

---

##### `recurrenceInHours`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSnapshotScheduleOutput.property.recurrenceInHours"></a>

- *Type:* `number`

---

##### `startAt`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSnapshotScheduleOutput.property.startAt"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSnapshotScheduleOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

##### `timezone`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSnapshotScheduleOutput.property.timezone"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeSnapshotScheduleOutput.property.volumeArn"></a>

- *Type:* `string`

---

### StorageGatewayDescribeStorediScsiVolumesInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeStorediScsiVolumesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeStorediScsiVolumesInput: storagegateway.StorageGatewayDescribeStorediScsiVolumesInput = { ... }
```

##### `volumeArNs`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeStorediScsiVolumesInput.property.volumeArNs"></a>

- *Type:* `string`[]

---

### StorageGatewayDescribeStorediScsiVolumesOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeStorediScsiVolumesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeStorediScsiVolumesOutput: storagegateway.StorageGatewayDescribeStorediScsiVolumesOutput = { ... }
```

##### `storediScsiVolumes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeStorediScsiVolumesOutput.property.storediScsiVolumes"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume`](#aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume)[]

---

### StorageGatewayDescribeTapeArchivesInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeArchivesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeTapeArchivesInput: storagegateway.StorageGatewayDescribeTapeArchivesInput = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeArchivesInput.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeArchivesInput.property.marker"></a>

- *Type:* `string`

---

##### `tapeArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeArchivesInput.property.tapeArNs"></a>

- *Type:* `string`[]

---

### StorageGatewayDescribeTapeArchivesOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeArchivesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeTapeArchivesOutput: storagegateway.StorageGatewayDescribeTapeArchivesOutput = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeArchivesOutput.property.marker"></a>

- *Type:* `string`

---

##### `tapeArchives`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeArchivesOutput.property.tapeArchives"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive`](#aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive)[]

---

### StorageGatewayDescribeTapeRecoveryPointsInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeRecoveryPointsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeTapeRecoveryPointsInput: storagegateway.StorageGatewayDescribeTapeRecoveryPointsInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeRecoveryPointsInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeRecoveryPointsInput.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeRecoveryPointsInput.property.marker"></a>

- *Type:* `string`

---

### StorageGatewayDescribeTapeRecoveryPointsOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeRecoveryPointsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeTapeRecoveryPointsOutput: storagegateway.StorageGatewayDescribeTapeRecoveryPointsOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeRecoveryPointsOutput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeRecoveryPointsOutput.property.marker"></a>

- *Type:* `string`

---

##### `tapeRecoveryPointInfos`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeRecoveryPointsOutput.property.tapeRecoveryPointInfos"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTapeRecoveryPointInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayTapeRecoveryPointInfo)[]

---

### StorageGatewayDescribeTapesInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeTapesInput: storagegateway.StorageGatewayDescribeTapesInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapesInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapesInput.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapesInput.property.marker"></a>

- *Type:* `string`

---

##### `tapeArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapesInput.property.tapeArNs"></a>

- *Type:* `string`[]

---

### StorageGatewayDescribeTapesOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeTapesOutput: storagegateway.StorageGatewayDescribeTapesOutput = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapesOutput.property.marker"></a>

- *Type:* `string`

---

##### `tapes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapesOutput.property.tapes"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTape`](#aws-cdk-sdk.storagegateway.StorageGatewayTape)[]

---

### StorageGatewayDescribeUploadBufferInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeUploadBufferInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeUploadBufferInput: storagegateway.StorageGatewayDescribeUploadBufferInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeUploadBufferInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDescribeUploadBufferOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeUploadBufferOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeUploadBufferOutput: storagegateway.StorageGatewayDescribeUploadBufferOutput = { ... }
```

##### `diskIds`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeUploadBufferOutput.property.diskIds"></a>

- *Type:* `string`[]

---

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeUploadBufferOutput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `uploadBufferAllocatedInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeUploadBufferOutput.property.uploadBufferAllocatedInBytes"></a>

- *Type:* `number`

---

##### `uploadBufferUsedInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeUploadBufferOutput.property.uploadBufferUsedInBytes"></a>

- *Type:* `number`

---

### StorageGatewayDescribeVtlDevicesInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeVtlDevicesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeVtlDevicesInput: storagegateway.StorageGatewayDescribeVtlDevicesInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeVtlDevicesInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeVtlDevicesInput.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeVtlDevicesInput.property.marker"></a>

- *Type:* `string`

---

##### `vtlDeviceArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeVtlDevicesInput.property.vtlDeviceArNs"></a>

- *Type:* `string`[]

---

### StorageGatewayDescribeVtlDevicesOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeVtlDevicesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeVtlDevicesOutput: storagegateway.StorageGatewayDescribeVtlDevicesOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeVtlDevicesOutput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeVtlDevicesOutput.property.marker"></a>

- *Type:* `string`

---

##### `vtlDevices`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeVtlDevicesOutput.property.vtlDevices"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayVtlDevice`](#aws-cdk-sdk.storagegateway.StorageGatewayVtlDevice)[]

---

### StorageGatewayDescribeWorkingStorageInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeWorkingStorageInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeWorkingStorageInput: storagegateway.StorageGatewayDescribeWorkingStorageInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeWorkingStorageInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDescribeWorkingStorageOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeWorkingStorageOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDescribeWorkingStorageOutput: storagegateway.StorageGatewayDescribeWorkingStorageOutput = { ... }
```

##### `diskIds`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeWorkingStorageOutput.property.diskIds"></a>

- *Type:* `string`[]

---

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeWorkingStorageOutput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `workingStorageAllocatedInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeWorkingStorageOutput.property.workingStorageAllocatedInBytes"></a>

- *Type:* `number`

---

##### `workingStorageUsedInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDescribeWorkingStorageOutput.property.workingStorageUsedInBytes"></a>

- *Type:* `number`

---

### StorageGatewayDetachVolumeInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDetachVolumeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDetachVolumeInput: storagegateway.StorageGatewayDetachVolumeInput = { ... }
```

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDetachVolumeInput.property.volumeArn"></a>

- *Type:* `string`

---

##### `forceDetach`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDetachVolumeInput.property.forceDetach"></a>

- *Type:* `boolean`

---

### StorageGatewayDetachVolumeOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDetachVolumeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDetachVolumeOutput: storagegateway.StorageGatewayDetachVolumeOutput = { ... }
```

##### `volumeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDetachVolumeOutput.property.volumeArn"></a>

- *Type:* `string`

---

### StorageGatewayDeviceiScsiAttributes <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeviceiScsiAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDeviceiScsiAttributes: storagegateway.StorageGatewayDeviceiScsiAttributes = { ... }
```

##### `chapEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeviceiScsiAttributes.property.chapEnabled"></a>

- *Type:* `boolean`

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeviceiScsiAttributes.property.networkInterfaceId"></a>

- *Type:* `string`

---

##### `networkInterfacePort`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeviceiScsiAttributes.property.networkInterfacePort"></a>

- *Type:* `number`

---

##### `targetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDeviceiScsiAttributes.property.targetArn"></a>

- *Type:* `string`

---

### StorageGatewayDisableGatewayInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDisableGatewayInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDisableGatewayInput: storagegateway.StorageGatewayDisableGatewayInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDisableGatewayInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDisableGatewayOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayDisableGatewayOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDisableGatewayOutput: storagegateway.StorageGatewayDisableGatewayOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDisableGatewayOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayDisk <a name="aws-cdk-sdk.storagegateway.StorageGatewayDisk"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayDisk: storagegateway.StorageGatewayDisk = { ... }
```

##### `diskAllocationResource`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDisk.property.diskAllocationResource"></a>

- *Type:* `string`

---

##### `diskAllocationType`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDisk.property.diskAllocationType"></a>

- *Type:* `string`

---

##### `diskAttributeList`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDisk.property.diskAttributeList"></a>

- *Type:* `string`[]

---

##### `diskId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDisk.property.diskId"></a>

- *Type:* `string`

---

##### `diskNode`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDisk.property.diskNode"></a>

- *Type:* `string`

---

##### `diskPath`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDisk.property.diskPath"></a>

- *Type:* `string`

---

##### `diskSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDisk.property.diskSizeInBytes"></a>

- *Type:* `number`

---

##### `diskStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayDisk.property.diskStatus"></a>

- *Type:* `string`

---

### StorageGatewayFileShareInfo <a name="aws-cdk-sdk.storagegateway.StorageGatewayFileShareInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayFileShareInfo: storagegateway.StorageGatewayFileShareInfo = { ... }
```

##### `fileShareArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayFileShareInfo.property.fileShareArn"></a>

- *Type:* `string`

---

##### `fileShareId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayFileShareInfo.property.fileShareId"></a>

- *Type:* `string`

---

##### `fileShareStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayFileShareInfo.property.fileShareStatus"></a>

- *Type:* `string`

---

##### `fileShareType`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayFileShareInfo.property.fileShareType"></a>

- *Type:* `string`

---

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayFileShareInfo.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayGatewayInfo <a name="aws-cdk-sdk.storagegateway.StorageGatewayGatewayInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayGatewayInfo: storagegateway.StorageGatewayGatewayInfo = { ... }
```

##### `ec2InstanceId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayGatewayInfo.property.ec2InstanceId"></a>

- *Type:* `string`

---

##### `ec2InstanceRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayGatewayInfo.property.ec2InstanceRegion"></a>

- *Type:* `string`

---

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayGatewayInfo.property.gatewayArn"></a>

- *Type:* `string`

---

##### `gatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayGatewayInfo.property.gatewayId"></a>

- *Type:* `string`

---

##### `gatewayName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayGatewayInfo.property.gatewayName"></a>

- *Type:* `string`

---

##### `gatewayOperationalState`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayGatewayInfo.property.gatewayOperationalState"></a>

- *Type:* `string`

---

##### `gatewayType`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayGatewayInfo.property.gatewayType"></a>

- *Type:* `string`

---

### StorageGatewayJoinDomainInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayJoinDomainInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayJoinDomainInput: storagegateway.StorageGatewayJoinDomainInput = { ... }
```

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayJoinDomainInput.property.domainName"></a>

- *Type:* `string`

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayJoinDomainInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayJoinDomainInput.property.password"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayJoinDomainInput.property.userName"></a>

- *Type:* `string`

---

##### `domainControllers`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayJoinDomainInput.property.domainControllers"></a>

- *Type:* `string`[]

---

##### `organizationalUnit`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayJoinDomainInput.property.organizationalUnit"></a>

- *Type:* `string`

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayJoinDomainInput.property.timeoutInSeconds"></a>

- *Type:* `number`

---

### StorageGatewayJoinDomainOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayJoinDomainOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayJoinDomainOutput: storagegateway.StorageGatewayJoinDomainOutput = { ... }
```

##### `activeDirectoryStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayJoinDomainOutput.property.activeDirectoryStatus"></a>

- *Type:* `string`

---

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayJoinDomainOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayListAutomaticTapeCreationPoliciesInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListAutomaticTapeCreationPoliciesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListAutomaticTapeCreationPoliciesInput: storagegateway.StorageGatewayListAutomaticTapeCreationPoliciesInput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListAutomaticTapeCreationPoliciesInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayListAutomaticTapeCreationPoliciesOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListAutomaticTapeCreationPoliciesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListAutomaticTapeCreationPoliciesOutput: storagegateway.StorageGatewayListAutomaticTapeCreationPoliciesOutput = { ... }
```

##### `automaticTapeCreationPolicyInfos`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListAutomaticTapeCreationPoliciesOutput.property.automaticTapeCreationPolicyInfos"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayAutomaticTapeCreationPolicyInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayAutomaticTapeCreationPolicyInfo)[]

---

### StorageGatewayListFileSharesInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListFileSharesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListFileSharesInput: storagegateway.StorageGatewayListFileSharesInput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListFileSharesInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListFileSharesInput.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListFileSharesInput.property.marker"></a>

- *Type:* `string`

---

### StorageGatewayListFileSharesOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListFileSharesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListFileSharesOutput: storagegateway.StorageGatewayListFileSharesOutput = { ... }
```

##### `fileShareInfoList`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListFileSharesOutput.property.fileShareInfoList"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayFileShareInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayFileShareInfo)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListFileSharesOutput.property.marker"></a>

- *Type:* `string`

---

##### `nextMarker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListFileSharesOutput.property.nextMarker"></a>

- *Type:* `string`

---

### StorageGatewayListGatewaysInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListGatewaysInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListGatewaysInput: storagegateway.StorageGatewayListGatewaysInput = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListGatewaysInput.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListGatewaysInput.property.marker"></a>

- *Type:* `string`

---

### StorageGatewayListGatewaysOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListGatewaysOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListGatewaysOutput: storagegateway.StorageGatewayListGatewaysOutput = { ... }
```

##### `gateways`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListGatewaysOutput.property.gateways"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayGatewayInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayGatewayInfo)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListGatewaysOutput.property.marker"></a>

- *Type:* `string`

---

### StorageGatewayListLocalDisksInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListLocalDisksInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListLocalDisksInput: storagegateway.StorageGatewayListLocalDisksInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListLocalDisksInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayListLocalDisksOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListLocalDisksOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListLocalDisksOutput: storagegateway.StorageGatewayListLocalDisksOutput = { ... }
```

##### `disks`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListLocalDisksOutput.property.disks"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDisk`](#aws-cdk-sdk.storagegateway.StorageGatewayDisk)[]

---

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListLocalDisksOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayListTagsForResourceInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTagsForResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListTagsForResourceInput: storagegateway.StorageGatewayListTagsForResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTagsForResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTagsForResourceInput.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTagsForResourceInput.property.marker"></a>

- *Type:* `string`

---

### StorageGatewayListTagsForResourceOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTagsForResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListTagsForResourceOutput: storagegateway.StorageGatewayListTagsForResourceOutput = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTagsForResourceOutput.property.marker"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTagsForResourceOutput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTagsForResourceOutput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

### StorageGatewayListTapePoolsInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTapePoolsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListTapePoolsInput: storagegateway.StorageGatewayListTapePoolsInput = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTapePoolsInput.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTapePoolsInput.property.marker"></a>

- *Type:* `string`

---

##### `poolArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTapePoolsInput.property.poolArNs"></a>

- *Type:* `string`[]

---

### StorageGatewayListTapePoolsOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTapePoolsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListTapePoolsOutput: storagegateway.StorageGatewayListTapePoolsOutput = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTapePoolsOutput.property.marker"></a>

- *Type:* `string`

---

##### `poolInfos`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTapePoolsOutput.property.poolInfos"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayPoolInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayPoolInfo)[]

---

### StorageGatewayListTapesInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTapesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListTapesInput: storagegateway.StorageGatewayListTapesInput = { ... }
```

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTapesInput.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTapesInput.property.marker"></a>

- *Type:* `string`

---

##### `tapeArNs`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTapesInput.property.tapeArNs"></a>

- *Type:* `string`[]

---

### StorageGatewayListTapesOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTapesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListTapesOutput: storagegateway.StorageGatewayListTapesOutput = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTapesOutput.property.marker"></a>

- *Type:* `string`

---

##### `tapeInfos`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListTapesOutput.property.tapeInfos"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTapeInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayTapeInfo)[]

---

### StorageGatewayListVolumeInitiatorsInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListVolumeInitiatorsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListVolumeInitiatorsInput: storagegateway.StorageGatewayListVolumeInitiatorsInput = { ... }
```

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListVolumeInitiatorsInput.property.volumeArn"></a>

- *Type:* `string`

---

### StorageGatewayListVolumeInitiatorsOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListVolumeInitiatorsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListVolumeInitiatorsOutput: storagegateway.StorageGatewayListVolumeInitiatorsOutput = { ... }
```

##### `initiators`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListVolumeInitiatorsOutput.property.initiators"></a>

- *Type:* `string`[]

---

### StorageGatewayListVolumeRecoveryPointsInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListVolumeRecoveryPointsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListVolumeRecoveryPointsInput: storagegateway.StorageGatewayListVolumeRecoveryPointsInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListVolumeRecoveryPointsInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayListVolumeRecoveryPointsOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListVolumeRecoveryPointsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListVolumeRecoveryPointsOutput: storagegateway.StorageGatewayListVolumeRecoveryPointsOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListVolumeRecoveryPointsOutput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `volumeRecoveryPointInfos`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListVolumeRecoveryPointsOutput.property.volumeRecoveryPointInfos"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayVolumeRecoveryPointInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayVolumeRecoveryPointInfo)[]

---

### StorageGatewayListVolumesInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListVolumesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListVolumesInput: storagegateway.StorageGatewayListVolumesInput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListVolumesInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `limit`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListVolumesInput.property.limit"></a>

- *Type:* `number`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListVolumesInput.property.marker"></a>

- *Type:* `string`

---

### StorageGatewayListVolumesOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayListVolumesOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayListVolumesOutput: storagegateway.StorageGatewayListVolumesOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListVolumesOutput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListVolumesOutput.property.marker"></a>

- *Type:* `string`

---

##### `volumeInfos`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayListVolumesOutput.property.volumeInfos"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayVolumeInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayVolumeInfo)[]

---

### StorageGatewayNetworkInterface <a name="aws-cdk-sdk.storagegateway.StorageGatewayNetworkInterface"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayNetworkInterface: storagegateway.StorageGatewayNetworkInterface = { ... }
```

##### `ipv4Address`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNetworkInterface.property.ipv4Address"></a>

- *Type:* `string`

---

##### `ipv6Address`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNetworkInterface.property.ipv6Address"></a>

- *Type:* `string`

---

##### `macAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNetworkInterface.property.macAddress"></a>

- *Type:* `string`

---

### StorageGatewayNfsFileShareDefaults <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareDefaults"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayNfsFileShareDefaults: storagegateway.StorageGatewayNfsFileShareDefaults = { ... }
```

##### `directoryMode`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareDefaults.property.directoryMode"></a>

- *Type:* `string`

---

##### `fileMode`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareDefaults.property.fileMode"></a>

- *Type:* `string`

---

##### `groupId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareDefaults.property.groupId"></a>

- *Type:* `number`

---

##### `ownerId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareDefaults.property.ownerId"></a>

- *Type:* `number`

---

### StorageGatewayNfsFileShareInfo <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayNfsFileShareInfo: storagegateway.StorageGatewayNfsFileShareInfo = { ... }
```

##### `cacheAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.cacheAttributes"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCacheAttributes`](#aws-cdk-sdk.storagegateway.StorageGatewayCacheAttributes)

---

##### `clientList`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.clientList"></a>

- *Type:* `string`[]

---

##### `defaultStorageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.defaultStorageClass"></a>

- *Type:* `string`

---

##### `fileShareArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.fileShareArn"></a>

- *Type:* `string`

---

##### `fileShareId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.fileShareId"></a>

- *Type:* `string`

---

##### `fileShareName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.fileShareName"></a>

- *Type:* `string`

---

##### `fileShareStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.fileShareStatus"></a>

- *Type:* `string`

---

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.gatewayArn"></a>

- *Type:* `string`

---

##### `guessMimeTypeEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.guessMimeTypeEnabled"></a>

- *Type:* `boolean`

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.kmsEncrypted"></a>

- *Type:* `boolean`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.kmsKey"></a>

- *Type:* `string`

---

##### `locationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.locationArn"></a>

- *Type:* `string`

---

##### `nfsFileShareDefaults`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.nfsFileShareDefaults"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareDefaults`](#aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareDefaults)

---

##### `notificationPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.notificationPolicy"></a>

- *Type:* `string`

---

##### `objectAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.objectAcl"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.path"></a>

- *Type:* `string`

---

##### `readOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.readOnly"></a>

- *Type:* `boolean`

---

##### `requesterPays`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.requesterPays"></a>

- *Type:* `boolean`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.role"></a>

- *Type:* `string`

---

##### `squash`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.squash"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

### StorageGatewayNotifyWhenUploadedInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayNotifyWhenUploadedInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayNotifyWhenUploadedInput: storagegateway.StorageGatewayNotifyWhenUploadedInput = { ... }
```

##### `fileShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNotifyWhenUploadedInput.property.fileShareArn"></a>

- *Type:* `string`

---

### StorageGatewayNotifyWhenUploadedOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayNotifyWhenUploadedOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayNotifyWhenUploadedOutput: storagegateway.StorageGatewayNotifyWhenUploadedOutput = { ... }
```

##### `fileShareArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNotifyWhenUploadedOutput.property.fileShareArn"></a>

- *Type:* `string`

---

##### `notificationId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayNotifyWhenUploadedOutput.property.notificationId"></a>

- *Type:* `string`

---

### StorageGatewayPoolInfo <a name="aws-cdk-sdk.storagegateway.StorageGatewayPoolInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayPoolInfo: storagegateway.StorageGatewayPoolInfo = { ... }
```

##### `poolArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayPoolInfo.property.poolArn"></a>

- *Type:* `string`

---

##### `poolName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayPoolInfo.property.poolName"></a>

- *Type:* `string`

---

##### `poolStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayPoolInfo.property.poolStatus"></a>

- *Type:* `string`

---

##### `retentionLockTimeInDays`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayPoolInfo.property.retentionLockTimeInDays"></a>

- *Type:* `number`

---

##### `retentionLockType`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayPoolInfo.property.retentionLockType"></a>

- *Type:* `string`

---

##### `storageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayPoolInfo.property.storageClass"></a>

- *Type:* `string`

---

### StorageGatewayRefreshCacheInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayRefreshCacheInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayRefreshCacheInput: storagegateway.StorageGatewayRefreshCacheInput = { ... }
```

##### `fileShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayRefreshCacheInput.property.fileShareArn"></a>

- *Type:* `string`

---

##### `folderList`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayRefreshCacheInput.property.folderList"></a>

- *Type:* `string`[]

---

##### `recursive`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayRefreshCacheInput.property.recursive"></a>

- *Type:* `boolean`

---

### StorageGatewayRefreshCacheOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayRefreshCacheOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayRefreshCacheOutput: storagegateway.StorageGatewayRefreshCacheOutput = { ... }
```

##### `fileShareArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayRefreshCacheOutput.property.fileShareArn"></a>

- *Type:* `string`

---

##### `notificationId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayRefreshCacheOutput.property.notificationId"></a>

- *Type:* `string`

---

### StorageGatewayRemoveTagsFromResourceInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayRemoveTagsFromResourceInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayRemoveTagsFromResourceInput: storagegateway.StorageGatewayRemoveTagsFromResourceInput = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayRemoveTagsFromResourceInput.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayRemoveTagsFromResourceInput.property.tagKeys"></a>

- *Type:* `string`[]

---

### StorageGatewayRemoveTagsFromResourceOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayRemoveTagsFromResourceOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayRemoveTagsFromResourceOutput: storagegateway.StorageGatewayRemoveTagsFromResourceOutput = { ... }
```

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayRemoveTagsFromResourceOutput.property.resourceArn"></a>

- *Type:* `string`

---

### StorageGatewayResetCacheInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayResetCacheInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayResetCacheInput: storagegateway.StorageGatewayResetCacheInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResetCacheInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayResetCacheOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayResetCacheOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayResetCacheOutput: storagegateway.StorageGatewayResetCacheOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResetCacheOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayRetrieveTapeArchiveInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeArchiveInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayRetrieveTapeArchiveInput: storagegateway.StorageGatewayRetrieveTapeArchiveInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeArchiveInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `tapeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeArchiveInput.property.tapeArn"></a>

- *Type:* `string`

---

### StorageGatewayRetrieveTapeArchiveOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeArchiveOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayRetrieveTapeArchiveOutput: storagegateway.StorageGatewayRetrieveTapeArchiveOutput = { ... }
```

##### `tapeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeArchiveOutput.property.tapeArn"></a>

- *Type:* `string`

---

### StorageGatewayRetrieveTapeRecoveryPointInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeRecoveryPointInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayRetrieveTapeRecoveryPointInput: storagegateway.StorageGatewayRetrieveTapeRecoveryPointInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeRecoveryPointInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `tapeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeRecoveryPointInput.property.tapeArn"></a>

- *Type:* `string`

---

### StorageGatewayRetrieveTapeRecoveryPointOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeRecoveryPointOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayRetrieveTapeRecoveryPointOutput: storagegateway.StorageGatewayRetrieveTapeRecoveryPointOutput = { ... }
```

##### `tapeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeRecoveryPointOutput.property.tapeArn"></a>

- *Type:* `string`

---

### StorageGatewaySetLocalConsolePasswordInput <a name="aws-cdk-sdk.storagegateway.StorageGatewaySetLocalConsolePasswordInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewaySetLocalConsolePasswordInput: storagegateway.StorageGatewaySetLocalConsolePasswordInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySetLocalConsolePasswordInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `localConsolePassword`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySetLocalConsolePasswordInput.property.localConsolePassword"></a>

- *Type:* `string`

---

### StorageGatewaySetLocalConsolePasswordOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewaySetLocalConsolePasswordOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewaySetLocalConsolePasswordOutput: storagegateway.StorageGatewaySetLocalConsolePasswordOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySetLocalConsolePasswordOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewaySetSmbGuestPasswordInput <a name="aws-cdk-sdk.storagegateway.StorageGatewaySetSmbGuestPasswordInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewaySetSmbGuestPasswordInput: storagegateway.StorageGatewaySetSmbGuestPasswordInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySetSmbGuestPasswordInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySetSmbGuestPasswordInput.property.password"></a>

- *Type:* `string`

---

### StorageGatewaySetSmbGuestPasswordOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewaySetSmbGuestPasswordOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewaySetSmbGuestPasswordOutput: storagegateway.StorageGatewaySetSmbGuestPasswordOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySetSmbGuestPasswordOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayShutdownGatewayInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayShutdownGatewayInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayShutdownGatewayInput: storagegateway.StorageGatewayShutdownGatewayInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayShutdownGatewayInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayShutdownGatewayOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayShutdownGatewayOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayShutdownGatewayOutput: storagegateway.StorageGatewayShutdownGatewayOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayShutdownGatewayOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewaySmbFileShareInfo <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewaySmbFileShareInfo: storagegateway.StorageGatewaySmbFileShareInfo = { ... }
```

##### `accessBasedEnumeration`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.accessBasedEnumeration"></a>

- *Type:* `boolean`

---

##### `adminUserList`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.adminUserList"></a>

- *Type:* `string`[]

---

##### `auditDestinationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.auditDestinationArn"></a>

- *Type:* `string`

---

##### `authentication`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.authentication"></a>

- *Type:* `string`

---

##### `cacheAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.cacheAttributes"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCacheAttributes`](#aws-cdk-sdk.storagegateway.StorageGatewayCacheAttributes)

---

##### `caseSensitivity`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.caseSensitivity"></a>

- *Type:* `string`

---

##### `defaultStorageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.defaultStorageClass"></a>

- *Type:* `string`

---

##### `fileShareArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.fileShareArn"></a>

- *Type:* `string`

---

##### `fileShareId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.fileShareId"></a>

- *Type:* `string`

---

##### `fileShareName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.fileShareName"></a>

- *Type:* `string`

---

##### `fileShareStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.fileShareStatus"></a>

- *Type:* `string`

---

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.gatewayArn"></a>

- *Type:* `string`

---

##### `guessMimeTypeEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.guessMimeTypeEnabled"></a>

- *Type:* `boolean`

---

##### `invalidUserList`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.invalidUserList"></a>

- *Type:* `string`[]

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.kmsEncrypted"></a>

- *Type:* `boolean`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.kmsKey"></a>

- *Type:* `string`

---

##### `locationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.locationArn"></a>

- *Type:* `string`

---

##### `notificationPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.notificationPolicy"></a>

- *Type:* `string`

---

##### `objectAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.objectAcl"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.path"></a>

- *Type:* `string`

---

##### `readOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.readOnly"></a>

- *Type:* `boolean`

---

##### `requesterPays`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.requesterPays"></a>

- *Type:* `boolean`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.role"></a>

- *Type:* `string`

---

##### `smbaclEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.smbaclEnabled"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

##### `validUserList`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo.property.validUserList"></a>

- *Type:* `string`[]

---

### StorageGatewayStartAvailabilityMonitorTestInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayStartAvailabilityMonitorTestInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayStartAvailabilityMonitorTestInput: storagegateway.StorageGatewayStartAvailabilityMonitorTestInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStartAvailabilityMonitorTestInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayStartAvailabilityMonitorTestOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayStartAvailabilityMonitorTestOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayStartAvailabilityMonitorTestOutput: storagegateway.StorageGatewayStartAvailabilityMonitorTestOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStartAvailabilityMonitorTestOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayStartGatewayInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayStartGatewayInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayStartGatewayInput: storagegateway.StorageGatewayStartGatewayInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStartGatewayInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayStartGatewayOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayStartGatewayOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayStartGatewayOutput: storagegateway.StorageGatewayStartGatewayOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStartGatewayOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayStorediScsiVolume <a name="aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayStorediScsiVolume: storagegateway.StorageGatewayStorediScsiVolume = { ... }
```

##### `createdDate`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume.property.createdDate"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume.property.kmsKey"></a>

- *Type:* `string`

---

##### `preservedExistingData`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume.property.preservedExistingData"></a>

- *Type:* `boolean`

---

##### `sourceSnapshotId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume.property.sourceSnapshotId"></a>

- *Type:* `string`

---

##### `targetName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume.property.targetName"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume.property.volumeArn"></a>

- *Type:* `string`

---

##### `volumeAttachmentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume.property.volumeAttachmentStatus"></a>

- *Type:* `string`

---

##### `volumeDiskId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume.property.volumeDiskId"></a>

- *Type:* `string`

---

##### `volumeId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume.property.volumeId"></a>

- *Type:* `string`

---

##### `volumeiScsiAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume.property.volumeiScsiAttributes"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayVolumeiScsiAttributes`](#aws-cdk-sdk.storagegateway.StorageGatewayVolumeiScsiAttributes)

---

##### `volumeProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume.property.volumeProgress"></a>

- *Type:* `number`

---

##### `volumeSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume.property.volumeSizeInBytes"></a>

- *Type:* `number`

---

##### `volumeStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume.property.volumeStatus"></a>

- *Type:* `string`

---

##### `volumeType`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume.property.volumeType"></a>

- *Type:* `string`

---

##### `volumeUsedInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume.property.volumeUsedInBytes"></a>

- *Type:* `number`

---

### StorageGatewayTag <a name="aws-cdk-sdk.storagegateway.StorageGatewayTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayTag: storagegateway.StorageGatewayTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTag.property.value"></a>

- *Type:* `string`

---

### StorageGatewayTape <a name="aws-cdk-sdk.storagegateway.StorageGatewayTape"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayTape: storagegateway.StorageGatewayTape = { ... }
```

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTape.property.kmsKey"></a>

- *Type:* `string`

---

##### `poolEntryDate`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTape.property.poolEntryDate"></a>

- *Type:* `string`

---

##### `poolId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTape.property.poolId"></a>

- *Type:* `string`

---

##### `progress`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTape.property.progress"></a>

- *Type:* `number`

---

##### `retentionStartDate`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTape.property.retentionStartDate"></a>

- *Type:* `string`

---

##### `tapeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTape.property.tapeArn"></a>

- *Type:* `string`

---

##### `tapeBarcode`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTape.property.tapeBarcode"></a>

- *Type:* `string`

---

##### `tapeCreatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTape.property.tapeCreatedDate"></a>

- *Type:* `string`

---

##### `tapeSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTape.property.tapeSizeInBytes"></a>

- *Type:* `number`

---

##### `tapeStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTape.property.tapeStatus"></a>

- *Type:* `string`

---

##### `tapeUsedInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTape.property.tapeUsedInBytes"></a>

- *Type:* `number`

---

##### `vtlDevice`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTape.property.vtlDevice"></a>

- *Type:* `string`

---

##### `worm`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTape.property.worm"></a>

- *Type:* `boolean`

---

### StorageGatewayTapeArchive <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayTapeArchive: storagegateway.StorageGatewayTapeArchive = { ... }
```

##### `completionTime`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive.property.completionTime"></a>

- *Type:* `string`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive.property.kmsKey"></a>

- *Type:* `string`

---

##### `poolEntryDate`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive.property.poolEntryDate"></a>

- *Type:* `string`

---

##### `poolId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive.property.poolId"></a>

- *Type:* `string`

---

##### `retentionStartDate`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive.property.retentionStartDate"></a>

- *Type:* `string`

---

##### `retrievedTo`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive.property.retrievedTo"></a>

- *Type:* `string`

---

##### `tapeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive.property.tapeArn"></a>

- *Type:* `string`

---

##### `tapeBarcode`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive.property.tapeBarcode"></a>

- *Type:* `string`

---

##### `tapeCreatedDate`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive.property.tapeCreatedDate"></a>

- *Type:* `string`

---

##### `tapeSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive.property.tapeSizeInBytes"></a>

- *Type:* `number`

---

##### `tapeStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive.property.tapeStatus"></a>

- *Type:* `string`

---

##### `tapeUsedInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive.property.tapeUsedInBytes"></a>

- *Type:* `number`

---

##### `worm`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive.property.worm"></a>

- *Type:* `boolean`

---

### StorageGatewayTapeInfo <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayTapeInfo: storagegateway.StorageGatewayTapeInfo = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeInfo.property.gatewayArn"></a>

- *Type:* `string`

---

##### `poolEntryDate`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeInfo.property.poolEntryDate"></a>

- *Type:* `string`

---

##### `poolId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeInfo.property.poolId"></a>

- *Type:* `string`

---

##### `retentionStartDate`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeInfo.property.retentionStartDate"></a>

- *Type:* `string`

---

##### `tapeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeInfo.property.tapeArn"></a>

- *Type:* `string`

---

##### `tapeBarcode`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeInfo.property.tapeBarcode"></a>

- *Type:* `string`

---

##### `tapeSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeInfo.property.tapeSizeInBytes"></a>

- *Type:* `number`

---

##### `tapeStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeInfo.property.tapeStatus"></a>

- *Type:* `string`

---

### StorageGatewayTapeRecoveryPointInfo <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeRecoveryPointInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayTapeRecoveryPointInfo: storagegateway.StorageGatewayTapeRecoveryPointInfo = { ... }
```

##### `tapeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeRecoveryPointInfo.property.tapeArn"></a>

- *Type:* `string`

---

##### `tapeRecoveryPointTime`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeRecoveryPointInfo.property.tapeRecoveryPointTime"></a>

- *Type:* `string`

---

##### `tapeSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeRecoveryPointInfo.property.tapeSizeInBytes"></a>

- *Type:* `number`

---

##### `tapeStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayTapeRecoveryPointInfo.property.tapeStatus"></a>

- *Type:* `string`

---

### StorageGatewayUpdateAutomaticTapeCreationPolicyInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateAutomaticTapeCreationPolicyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateAutomaticTapeCreationPolicyInput: storagegateway.StorageGatewayUpdateAutomaticTapeCreationPolicyInput = { ... }
```

##### `automaticTapeCreationRules`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateAutomaticTapeCreationPolicyInput.property.automaticTapeCreationRules"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayAutomaticTapeCreationRule`](#aws-cdk-sdk.storagegateway.StorageGatewayAutomaticTapeCreationRule)[]

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateAutomaticTapeCreationPolicyInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayUpdateAutomaticTapeCreationPolicyOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateAutomaticTapeCreationPolicyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateAutomaticTapeCreationPolicyOutput: storagegateway.StorageGatewayUpdateAutomaticTapeCreationPolicyOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateAutomaticTapeCreationPolicyOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayUpdateBandwidthRateLimitInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateBandwidthRateLimitInput: storagegateway.StorageGatewayUpdateBandwidthRateLimitInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `averageDownloadRateLimitInBitsPerSec`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitInput.property.averageDownloadRateLimitInBitsPerSec"></a>

- *Type:* `number`

---

##### `averageUploadRateLimitInBitsPerSec`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitInput.property.averageUploadRateLimitInBitsPerSec"></a>

- *Type:* `number`

---

### StorageGatewayUpdateBandwidthRateLimitOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateBandwidthRateLimitOutput: storagegateway.StorageGatewayUpdateBandwidthRateLimitOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayUpdateBandwidthRateLimitScheduleInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitScheduleInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateBandwidthRateLimitScheduleInput: storagegateway.StorageGatewayUpdateBandwidthRateLimitScheduleInput = { ... }
```

##### `bandwidthRateLimitIntervals`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitScheduleInput.property.bandwidthRateLimitIntervals"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayBandwidthRateLimitInterval`](#aws-cdk-sdk.storagegateway.StorageGatewayBandwidthRateLimitInterval)[]

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitScheduleInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayUpdateBandwidthRateLimitScheduleOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitScheduleOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateBandwidthRateLimitScheduleOutput: storagegateway.StorageGatewayUpdateBandwidthRateLimitScheduleOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitScheduleOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayUpdateChapCredentialsInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateChapCredentialsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateChapCredentialsInput: storagegateway.StorageGatewayUpdateChapCredentialsInput = { ... }
```

##### `initiatorName`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateChapCredentialsInput.property.initiatorName"></a>

- *Type:* `string`

---

##### `secretToAuthenticateInitiator`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateChapCredentialsInput.property.secretToAuthenticateInitiator"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateChapCredentialsInput.property.targetArn"></a>

- *Type:* `string`

---

##### `secretToAuthenticateTarget`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateChapCredentialsInput.property.secretToAuthenticateTarget"></a>

- *Type:* `string`

---

### StorageGatewayUpdateChapCredentialsOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateChapCredentialsOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateChapCredentialsOutput: storagegateway.StorageGatewayUpdateChapCredentialsOutput = { ... }
```

##### `initiatorName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateChapCredentialsOutput.property.initiatorName"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateChapCredentialsOutput.property.targetArn"></a>

- *Type:* `string`

---

### StorageGatewayUpdateGatewayInformationInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewayInformationInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateGatewayInformationInput: storagegateway.StorageGatewayUpdateGatewayInformationInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewayInformationInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `cloudWatchLogGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewayInformationInput.property.cloudWatchLogGroupArn"></a>

- *Type:* `string`

---

##### `gatewayName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewayInformationInput.property.gatewayName"></a>

- *Type:* `string`

---

##### `gatewayTimezone`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewayInformationInput.property.gatewayTimezone"></a>

- *Type:* `string`

---

### StorageGatewayUpdateGatewayInformationOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewayInformationOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateGatewayInformationOutput: storagegateway.StorageGatewayUpdateGatewayInformationOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewayInformationOutput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `gatewayName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewayInformationOutput.property.gatewayName"></a>

- *Type:* `string`

---

### StorageGatewayUpdateGatewaySoftwareNowInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewaySoftwareNowInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateGatewaySoftwareNowInput: storagegateway.StorageGatewayUpdateGatewaySoftwareNowInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewaySoftwareNowInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayUpdateGatewaySoftwareNowOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewaySoftwareNowOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateGatewaySoftwareNowOutput: storagegateway.StorageGatewayUpdateGatewaySoftwareNowOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewaySoftwareNowOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayUpdateMaintenanceStartTimeInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateMaintenanceStartTimeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateMaintenanceStartTimeInput: storagegateway.StorageGatewayUpdateMaintenanceStartTimeInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateMaintenanceStartTimeInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `hourOfDay`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateMaintenanceStartTimeInput.property.hourOfDay"></a>

- *Type:* `number`

---

##### `minuteOfHour`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateMaintenanceStartTimeInput.property.minuteOfHour"></a>

- *Type:* `number`

---

##### `dayOfMonth`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateMaintenanceStartTimeInput.property.dayOfMonth"></a>

- *Type:* `number`

---

##### `dayOfWeek`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateMaintenanceStartTimeInput.property.dayOfWeek"></a>

- *Type:* `number`

---

### StorageGatewayUpdateMaintenanceStartTimeOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateMaintenanceStartTimeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateMaintenanceStartTimeOutput: storagegateway.StorageGatewayUpdateMaintenanceStartTimeOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateMaintenanceStartTimeOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayUpdateNfsFileShareInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateNfsFileShareInput: storagegateway.StorageGatewayUpdateNfsFileShareInput = { ... }
```

##### `fileShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput.property.fileShareArn"></a>

- *Type:* `string`

---

##### `cacheAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput.property.cacheAttributes"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCacheAttributes`](#aws-cdk-sdk.storagegateway.StorageGatewayCacheAttributes)

---

##### `clientList`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput.property.clientList"></a>

- *Type:* `string`[]

---

##### `defaultStorageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput.property.defaultStorageClass"></a>

- *Type:* `string`

---

##### `fileShareName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput.property.fileShareName"></a>

- *Type:* `string`

---

##### `guessMimeTypeEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput.property.guessMimeTypeEnabled"></a>

- *Type:* `boolean`

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput.property.kmsEncrypted"></a>

- *Type:* `boolean`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput.property.kmsKey"></a>

- *Type:* `string`

---

##### `nfsFileShareDefaults`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput.property.nfsFileShareDefaults"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareDefaults`](#aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareDefaults)

---

##### `notificationPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput.property.notificationPolicy"></a>

- *Type:* `string`

---

##### `objectAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput.property.objectAcl"></a>

- *Type:* `string`

---

##### `readOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput.property.readOnly"></a>

- *Type:* `boolean`

---

##### `requesterPays`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput.property.requesterPays"></a>

- *Type:* `boolean`

---

##### `squash`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput.property.squash"></a>

- *Type:* `string`

---

### StorageGatewayUpdateNfsFileShareOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateNfsFileShareOutput: storagegateway.StorageGatewayUpdateNfsFileShareOutput = { ... }
```

##### `fileShareArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareOutput.property.fileShareArn"></a>

- *Type:* `string`

---

### StorageGatewayUpdateSmbFileShareInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateSmbFileShareInput: storagegateway.StorageGatewayUpdateSmbFileShareInput = { ... }
```

##### `fileShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.fileShareArn"></a>

- *Type:* `string`

---

##### `accessBasedEnumeration`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.accessBasedEnumeration"></a>

- *Type:* `boolean`

---

##### `adminUserList`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.adminUserList"></a>

- *Type:* `string`[]

---

##### `auditDestinationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.auditDestinationArn"></a>

- *Type:* `string`

---

##### `cacheAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.cacheAttributes"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCacheAttributes`](#aws-cdk-sdk.storagegateway.StorageGatewayCacheAttributes)

---

##### `caseSensitivity`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.caseSensitivity"></a>

- *Type:* `string`

---

##### `defaultStorageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.defaultStorageClass"></a>

- *Type:* `string`

---

##### `fileShareName`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.fileShareName"></a>

- *Type:* `string`

---

##### `guessMimeTypeEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.guessMimeTypeEnabled"></a>

- *Type:* `boolean`

---

##### `invalidUserList`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.invalidUserList"></a>

- *Type:* `string`[]

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.kmsEncrypted"></a>

- *Type:* `boolean`

---

##### `kmsKey`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.kmsKey"></a>

- *Type:* `string`

---

##### `notificationPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.notificationPolicy"></a>

- *Type:* `string`

---

##### `objectAcl`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.objectAcl"></a>

- *Type:* `string`

---

##### `readOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.readOnly"></a>

- *Type:* `boolean`

---

##### `requesterPays`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.requesterPays"></a>

- *Type:* `boolean`

---

##### `smbaclEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.smbaclEnabled"></a>

- *Type:* `boolean`

---

##### `validUserList`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput.property.validUserList"></a>

- *Type:* `string`[]

---

### StorageGatewayUpdateSmbFileShareOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateSmbFileShareOutput: storagegateway.StorageGatewayUpdateSmbFileShareOutput = { ... }
```

##### `fileShareArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareOutput.property.fileShareArn"></a>

- *Type:* `string`

---

### StorageGatewayUpdateSmbFileShareVisibilityInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareVisibilityInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateSmbFileShareVisibilityInput: storagegateway.StorageGatewayUpdateSmbFileShareVisibilityInput = { ... }
```

##### `fileSharesVisible`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareVisibilityInput.property.fileSharesVisible"></a>

- *Type:* `boolean`

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareVisibilityInput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayUpdateSmbFileShareVisibilityOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareVisibilityOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateSmbFileShareVisibilityOutput: storagegateway.StorageGatewayUpdateSmbFileShareVisibilityOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareVisibilityOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayUpdateSmbSecurityStrategyInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbSecurityStrategyInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateSmbSecurityStrategyInput: storagegateway.StorageGatewayUpdateSmbSecurityStrategyInput = { ... }
```

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbSecurityStrategyInput.property.gatewayArn"></a>

- *Type:* `string`

---

##### `smbSecurityStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbSecurityStrategyInput.property.smbSecurityStrategy"></a>

- *Type:* `string`

---

### StorageGatewayUpdateSmbSecurityStrategyOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbSecurityStrategyOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateSmbSecurityStrategyOutput: storagegateway.StorageGatewayUpdateSmbSecurityStrategyOutput = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbSecurityStrategyOutput.property.gatewayArn"></a>

- *Type:* `string`

---

### StorageGatewayUpdateSnapshotScheduleInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSnapshotScheduleInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateSnapshotScheduleInput: storagegateway.StorageGatewayUpdateSnapshotScheduleInput = { ... }
```

##### `recurrenceInHours`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSnapshotScheduleInput.property.recurrenceInHours"></a>

- *Type:* `number`

---

##### `startAt`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSnapshotScheduleInput.property.startAt"></a>

- *Type:* `number`

---

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSnapshotScheduleInput.property.volumeArn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSnapshotScheduleInput.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSnapshotScheduleInput.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

### StorageGatewayUpdateSnapshotScheduleOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSnapshotScheduleOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateSnapshotScheduleOutput: storagegateway.StorageGatewayUpdateSnapshotScheduleOutput = { ... }
```

##### `volumeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateSnapshotScheduleOutput.property.volumeArn"></a>

- *Type:* `string`

---

### StorageGatewayUpdateVtlDeviceTypeInput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateVtlDeviceTypeInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateVtlDeviceTypeInput: storagegateway.StorageGatewayUpdateVtlDeviceTypeInput = { ... }
```

##### `deviceType`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateVtlDeviceTypeInput.property.deviceType"></a>

- *Type:* `string`

---

##### `vtlDeviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateVtlDeviceTypeInput.property.vtlDeviceArn"></a>

- *Type:* `string`

---

### StorageGatewayUpdateVtlDeviceTypeOutput <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateVtlDeviceTypeOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayUpdateVtlDeviceTypeOutput: storagegateway.StorageGatewayUpdateVtlDeviceTypeOutput = { ... }
```

##### `vtlDeviceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayUpdateVtlDeviceTypeOutput.property.vtlDeviceArn"></a>

- *Type:* `string`

---

### StorageGatewayVolumeInfo <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayVolumeInfo: storagegateway.StorageGatewayVolumeInfo = { ... }
```

##### `gatewayArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeInfo.property.gatewayArn"></a>

- *Type:* `string`

---

##### `gatewayId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeInfo.property.gatewayId"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeInfo.property.volumeArn"></a>

- *Type:* `string`

---

##### `volumeAttachmentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeInfo.property.volumeAttachmentStatus"></a>

- *Type:* `string`

---

##### `volumeId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeInfo.property.volumeId"></a>

- *Type:* `string`

---

##### `volumeSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeInfo.property.volumeSizeInBytes"></a>

- *Type:* `number`

---

##### `volumeType`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeInfo.property.volumeType"></a>

- *Type:* `string`

---

### StorageGatewayVolumeiScsiAttributes <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeiScsiAttributes"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayVolumeiScsiAttributes: storagegateway.StorageGatewayVolumeiScsiAttributes = { ... }
```

##### `chapEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeiScsiAttributes.property.chapEnabled"></a>

- *Type:* `boolean`

---

##### `lunNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeiScsiAttributes.property.lunNumber"></a>

- *Type:* `number`

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeiScsiAttributes.property.networkInterfaceId"></a>

- *Type:* `string`

---

##### `networkInterfacePort`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeiScsiAttributes.property.networkInterfacePort"></a>

- *Type:* `number`

---

##### `targetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeiScsiAttributes.property.targetArn"></a>

- *Type:* `string`

---

### StorageGatewayVolumeRecoveryPointInfo <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeRecoveryPointInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayVolumeRecoveryPointInfo: storagegateway.StorageGatewayVolumeRecoveryPointInfo = { ... }
```

##### `volumeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeRecoveryPointInfo.property.volumeArn"></a>

- *Type:* `string`

---

##### `volumeRecoveryPointTime`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeRecoveryPointInfo.property.volumeRecoveryPointTime"></a>

- *Type:* `string`

---

##### `volumeSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeRecoveryPointInfo.property.volumeSizeInBytes"></a>

- *Type:* `number`

---

##### `volumeUsageInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVolumeRecoveryPointInfo.property.volumeUsageInBytes"></a>

- *Type:* `number`

---

### StorageGatewayVtlDevice <a name="aws-cdk-sdk.storagegateway.StorageGatewayVtlDevice"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

const storageGatewayVtlDevice: storagegateway.StorageGatewayVtlDevice = { ... }
```

##### `deviceiScsiAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVtlDevice.property.deviceiScsiAttributes"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeviceiScsiAttributes`](#aws-cdk-sdk.storagegateway.StorageGatewayDeviceiScsiAttributes)

---

##### `vtlDeviceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVtlDevice.property.vtlDeviceArn"></a>

- *Type:* `string`

---

##### `vtlDeviceProductIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVtlDevice.property.vtlDeviceProductIdentifier"></a>

- *Type:* `string`

---

##### `vtlDeviceType`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVtlDevice.property.vtlDeviceType"></a>

- *Type:* `string`

---

##### `vtlDeviceVendor`<sup>Optional</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayVtlDevice.property.vtlDeviceVendor"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### StorageGatewayResponsesActivateGateway <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesActivateGateway"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesActivateGateway.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesActivateGateway(__scope: Construct, __resources: string[], __input: StorageGatewayActivateGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesActivateGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesActivateGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesActivateGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayActivateGatewayInput`](#aws-cdk-sdk.storagegateway.StorageGatewayActivateGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesActivateGateway.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesAddCache <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddCache"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddCache.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesAddCache(__scope: Construct, __resources: string[], __input: StorageGatewayAddCacheInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddCache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddCache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddCache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayAddCacheInput`](#aws-cdk-sdk.storagegateway.StorageGatewayAddCacheInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddCache.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesAddTagsToResource <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddTagsToResource"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddTagsToResource.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesAddTagsToResource(__scope: Construct, __resources: string[], __input: StorageGatewayAddTagsToResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddTagsToResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddTagsToResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddTagsToResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayAddTagsToResourceInput`](#aws-cdk-sdk.storagegateway.StorageGatewayAddTagsToResourceInput)

---



#### Properties <a name="Properties"></a>

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddTagsToResource.property.resourceArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesAddUploadBuffer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddUploadBuffer"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddUploadBuffer.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesAddUploadBuffer(__scope: Construct, __resources: string[], __input: StorageGatewayAddUploadBufferInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddUploadBuffer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddUploadBuffer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddUploadBuffer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayAddUploadBufferInput`](#aws-cdk-sdk.storagegateway.StorageGatewayAddUploadBufferInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddUploadBuffer.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesAddWorkingStorage <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddWorkingStorage"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddWorkingStorage.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesAddWorkingStorage(__scope: Construct, __resources: string[], __input: StorageGatewayAddWorkingStorageInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddWorkingStorage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddWorkingStorage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddWorkingStorage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayAddWorkingStorageInput`](#aws-cdk-sdk.storagegateway.StorageGatewayAddWorkingStorageInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAddWorkingStorage.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesAssignTapePool <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAssignTapePool"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAssignTapePool.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesAssignTapePool(__scope: Construct, __resources: string[], __input: StorageGatewayAssignTapePoolInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAssignTapePool.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAssignTapePool.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAssignTapePool.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayAssignTapePoolInput`](#aws-cdk-sdk.storagegateway.StorageGatewayAssignTapePoolInput)

---



#### Properties <a name="Properties"></a>

##### `tapeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAssignTapePool.property.tapeArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesAttachVolume <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAttachVolume"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAttachVolume.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesAttachVolume(__scope: Construct, __resources: string[], __input: StorageGatewayAttachVolumeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAttachVolume.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAttachVolume.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAttachVolume.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayAttachVolumeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayAttachVolumeInput)

---



#### Properties <a name="Properties"></a>

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAttachVolume.property.targetArn"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesAttachVolume.property.volumeArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesCancelArchival <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCancelArchival"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCancelArchival.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesCancelArchival(__scope: Construct, __resources: string[], __input: StorageGatewayCancelArchivalInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCancelArchival.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCancelArchival.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCancelArchival.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCancelArchivalInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCancelArchivalInput)

---



#### Properties <a name="Properties"></a>

##### `tapeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCancelArchival.property.tapeArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesCancelRetrieval <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCancelRetrieval"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCancelRetrieval.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesCancelRetrieval(__scope: Construct, __resources: string[], __input: StorageGatewayCancelRetrievalInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCancelRetrieval.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCancelRetrieval.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCancelRetrieval.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCancelRetrievalInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCancelRetrievalInput)

---



#### Properties <a name="Properties"></a>

##### `tapeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCancelRetrieval.property.tapeArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesCreateCachediScsiVolume <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateCachediScsiVolume"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateCachediScsiVolume.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesCreateCachediScsiVolume(__scope: Construct, __resources: string[], __input: StorageGatewayCreateCachediScsiVolumeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateCachediScsiVolume.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateCachediScsiVolume.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateCachediScsiVolume.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateCachediScsiVolumeInput)

---



#### Properties <a name="Properties"></a>

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateCachediScsiVolume.property.targetArn"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateCachediScsiVolume.property.volumeArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesCreateNfsFileShare <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateNfsFileShare"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateNfsFileShare.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesCreateNfsFileShare(__scope: Construct, __resources: string[], __input: StorageGatewayCreateNfsFileShareInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateNfsFileShare.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateNfsFileShare.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateNfsFileShare.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateNfsFileShareInput)

---



#### Properties <a name="Properties"></a>

##### `fileShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateNfsFileShare.property.fileShareArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesCreateSmbFileShare <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSmbFileShare"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSmbFileShare.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesCreateSmbFileShare(__scope: Construct, __resources: string[], __input: StorageGatewayCreateSmbFileShareInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSmbFileShare.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSmbFileShare.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSmbFileShare.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateSmbFileShareInput)

---



#### Properties <a name="Properties"></a>

##### `fileShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSmbFileShare.property.fileShareArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesCreateSnapshot <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSnapshot.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesCreateSnapshot(__scope: Construct, __resources: string[], __input: StorageGatewayCreateSnapshotInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotInput)

---



#### Properties <a name="Properties"></a>

##### `snapshotId`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSnapshot.property.snapshotId"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSnapshot.property.volumeArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesCreateSnapshotFromVolumeRecoveryPoint <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSnapshotFromVolumeRecoveryPoint"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSnapshotFromVolumeRecoveryPoint.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesCreateSnapshotFromVolumeRecoveryPoint(__scope: Construct, __resources: string[], __input: StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSnapshotFromVolumeRecoveryPoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSnapshotFromVolumeRecoveryPoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSnapshotFromVolumeRecoveryPoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput)

---



#### Properties <a name="Properties"></a>

##### `snapshotId`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSnapshotFromVolumeRecoveryPoint.property.snapshotId"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSnapshotFromVolumeRecoveryPoint.property.volumeArn"></a>

- *Type:* `string`

---

##### `volumeRecoveryPointTime`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateSnapshotFromVolumeRecoveryPoint.property.volumeRecoveryPointTime"></a>

- *Type:* `string`

---


### StorageGatewayResponsesCreateStorediScsiVolume <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateStorediScsiVolume"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateStorediScsiVolume.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesCreateStorediScsiVolume(__scope: Construct, __resources: string[], __input: StorageGatewayCreateStorediScsiVolumeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateStorediScsiVolume.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateStorediScsiVolume.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateStorediScsiVolume.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateStorediScsiVolumeInput)

---



#### Properties <a name="Properties"></a>

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateStorediScsiVolume.property.targetArn"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateStorediScsiVolume.property.volumeArn"></a>

- *Type:* `string`

---

##### `volumeSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateStorediScsiVolume.property.volumeSizeInBytes"></a>

- *Type:* `number`

---


### StorageGatewayResponsesCreateTapePool <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapePool"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapePool.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesCreateTapePool(__scope: Construct, __resources: string[], __input: StorageGatewayCreateTapePoolInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapePool.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapePool.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapePool.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateTapePoolInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateTapePoolInput)

---



#### Properties <a name="Properties"></a>

##### `poolArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapePool.property.poolArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesCreateTapes <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapes"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapes.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesCreateTapes(__scope: Construct, __resources: string[], __input: StorageGatewayCreateTapesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateTapesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateTapesInput)

---



#### Properties <a name="Properties"></a>

##### `tapeArNs`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapes.property.tapeArNs"></a>

- *Type:* `string`[]

---


### StorageGatewayResponsesCreateTapeWithBarcode <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapeWithBarcode"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapeWithBarcode.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesCreateTapeWithBarcode(__scope: Construct, __resources: string[], __input: StorageGatewayCreateTapeWithBarcodeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapeWithBarcode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapeWithBarcode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapeWithBarcode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCreateTapeWithBarcodeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayCreateTapeWithBarcodeInput)

---



#### Properties <a name="Properties"></a>

##### `tapeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesCreateTapeWithBarcode.property.tapeArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDeleteAutomaticTapeCreationPolicy <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteAutomaticTapeCreationPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteAutomaticTapeCreationPolicy.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDeleteAutomaticTapeCreationPolicy(__scope: Construct, __resources: string[], __input: StorageGatewayDeleteAutomaticTapeCreationPolicyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteAutomaticTapeCreationPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteAutomaticTapeCreationPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteAutomaticTapeCreationPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteAutomaticTapeCreationPolicyInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteAutomaticTapeCreationPolicyInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteAutomaticTapeCreationPolicy.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDeleteBandwidthRateLimit <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteBandwidthRateLimit"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteBandwidthRateLimit.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDeleteBandwidthRateLimit(__scope: Construct, __resources: string[], __input: StorageGatewayDeleteBandwidthRateLimitInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteBandwidthRateLimit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteBandwidthRateLimit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteBandwidthRateLimit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteBandwidthRateLimitInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteBandwidthRateLimitInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteBandwidthRateLimit.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDeleteChapCredentials <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteChapCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteChapCredentials.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDeleteChapCredentials(__scope: Construct, __resources: string[], __input: StorageGatewayDeleteChapCredentialsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteChapCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteChapCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteChapCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteChapCredentialsInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteChapCredentialsInput)

---



#### Properties <a name="Properties"></a>

##### `initiatorName`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteChapCredentials.property.initiatorName"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteChapCredentials.property.targetArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDeleteFileShare <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteFileShare"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteFileShare.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDeleteFileShare(__scope: Construct, __resources: string[], __input: StorageGatewayDeleteFileShareInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteFileShare.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteFileShare.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteFileShare.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteFileShareInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteFileShareInput)

---



#### Properties <a name="Properties"></a>

##### `fileShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteFileShare.property.fileShareArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDeleteGateway <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteGateway"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteGateway.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDeleteGateway(__scope: Construct, __resources: string[], __input: StorageGatewayDeleteGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteGatewayInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteGateway.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDeleteSnapshotSchedule <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteSnapshotSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteSnapshotSchedule.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDeleteSnapshotSchedule(__scope: Construct, __resources: string[], __input: StorageGatewayDeleteSnapshotScheduleInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteSnapshotSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteSnapshotSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteSnapshotSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteSnapshotScheduleInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteSnapshotScheduleInput)

---



#### Properties <a name="Properties"></a>

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteSnapshotSchedule.property.volumeArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDeleteTape <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTape"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTape.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDeleteTape(__scope: Construct, __resources: string[], __input: StorageGatewayDeleteTapeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTape.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTape.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTape.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeInput)

---



#### Properties <a name="Properties"></a>

##### `tapeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTape.property.tapeArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDeleteTapeArchive <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTapeArchive"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTapeArchive.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDeleteTapeArchive(__scope: Construct, __resources: string[], __input: StorageGatewayDeleteTapeArchiveInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTapeArchive.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTapeArchive.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTapeArchive.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeArchiveInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapeArchiveInput)

---



#### Properties <a name="Properties"></a>

##### `tapeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTapeArchive.property.tapeArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDeleteTapePool <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTapePool"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTapePool.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDeleteTapePool(__scope: Construct, __resources: string[], __input: StorageGatewayDeleteTapePoolInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTapePool.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTapePool.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTapePool.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapePoolInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteTapePoolInput)

---



#### Properties <a name="Properties"></a>

##### `poolArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteTapePool.property.poolArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDeleteVolume <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteVolume"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteVolume.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDeleteVolume(__scope: Construct, __resources: string[], __input: StorageGatewayDeleteVolumeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteVolume.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteVolume.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteVolume.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDeleteVolumeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDeleteVolumeInput)

---



#### Properties <a name="Properties"></a>

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDeleteVolume.property.volumeArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDescribeAvailabilityMonitorTest <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeAvailabilityMonitorTest"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeAvailabilityMonitorTest.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeAvailabilityMonitorTest(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeAvailabilityMonitorTestInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeAvailabilityMonitorTest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeAvailabilityMonitorTest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeAvailabilityMonitorTest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeAvailabilityMonitorTestInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeAvailabilityMonitorTestInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeAvailabilityMonitorTest.property.gatewayArn"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeAvailabilityMonitorTest.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeAvailabilityMonitorTest.property.status"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDescribeBandwidthRateLimit <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeBandwidthRateLimit"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeBandwidthRateLimit.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeBandwidthRateLimit(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeBandwidthRateLimitInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeBandwidthRateLimit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeBandwidthRateLimit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeBandwidthRateLimit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitInput)

---



#### Properties <a name="Properties"></a>

##### `averageDownloadRateLimitInBitsPerSec`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeBandwidthRateLimit.property.averageDownloadRateLimitInBitsPerSec"></a>

- *Type:* `number`

---

##### `averageUploadRateLimitInBitsPerSec`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeBandwidthRateLimit.property.averageUploadRateLimitInBitsPerSec"></a>

- *Type:* `number`

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeBandwidthRateLimit.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDescribeBandwidthRateLimitSchedule <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeBandwidthRateLimitSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeBandwidthRateLimitSchedule.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeBandwidthRateLimitSchedule(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeBandwidthRateLimitScheduleInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeBandwidthRateLimitSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeBandwidthRateLimitSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeBandwidthRateLimitSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitScheduleInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeBandwidthRateLimitScheduleInput)

---



#### Properties <a name="Properties"></a>

##### `bandwidthRateLimitIntervals`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeBandwidthRateLimitSchedule.property.bandwidthRateLimitIntervals"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayBandwidthRateLimitInterval`](#aws-cdk-sdk.storagegateway.StorageGatewayBandwidthRateLimitInterval)[]

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeBandwidthRateLimitSchedule.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDescribeCache <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCache"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCache.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeCache(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeCacheInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeCacheInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeCacheInput)

---



#### Properties <a name="Properties"></a>

##### `cacheAllocatedInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCache.property.cacheAllocatedInBytes"></a>

- *Type:* `number`

---

##### `cacheDirtyPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCache.property.cacheDirtyPercentage"></a>

- *Type:* `number`

---

##### `cacheHitPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCache.property.cacheHitPercentage"></a>

- *Type:* `number`

---

##### `cacheMissPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCache.property.cacheMissPercentage"></a>

- *Type:* `number`

---

##### `cacheUsedPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCache.property.cacheUsedPercentage"></a>

- *Type:* `number`

---

##### `diskIds`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCache.property.diskIds"></a>

- *Type:* `string`[]

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCache.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDescribeCachediScsiVolumes <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCachediScsiVolumes"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCachediScsiVolumes.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeCachediScsiVolumes(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeCachediScsiVolumesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCachediScsiVolumes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCachediScsiVolumes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCachediScsiVolumes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeCachediScsiVolumesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeCachediScsiVolumesInput)

---



#### Properties <a name="Properties"></a>

##### `cachediScsiVolumes`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeCachediScsiVolumes.property.cachediScsiVolumes"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume`](#aws-cdk-sdk.storagegateway.StorageGatewayCachediScsiVolume)[]

---


### StorageGatewayResponsesDescribeChapCredentials <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeChapCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeChapCredentials.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeChapCredentials(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeChapCredentialsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeChapCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeChapCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeChapCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeChapCredentialsInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeChapCredentialsInput)

---



#### Properties <a name="Properties"></a>

##### `chapCredentials`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeChapCredentials.property.chapCredentials"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayChapInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayChapInfo)[]

---


### StorageGatewayResponsesDescribeGatewayInformation <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeGatewayInformation(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeGatewayInformationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeGatewayInformationInput)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogGroupArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.cloudWatchLogGroupArn"></a>

- *Type:* `string`

---

##### `deprecationDate`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.deprecationDate"></a>

- *Type:* `string`

---

##### `ec2InstanceId`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.ec2InstanceId"></a>

- *Type:* `string`

---

##### `ec2InstanceRegion`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.ec2InstanceRegion"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.endpointType"></a>

- *Type:* `string`

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.gatewayArn"></a>

- *Type:* `string`

---

##### `gatewayId`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.gatewayId"></a>

- *Type:* `string`

---

##### `gatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.gatewayName"></a>

- *Type:* `string`

---

##### `gatewayNetworkInterfaces`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.gatewayNetworkInterfaces"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayNetworkInterface`](#aws-cdk-sdk.storagegateway.StorageGatewayNetworkInterface)[]

---

##### `gatewayState`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.gatewayState"></a>

- *Type:* `string`

---

##### `gatewayTimezone`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.gatewayTimezone"></a>

- *Type:* `string`

---

##### `gatewayType`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.gatewayType"></a>

- *Type:* `string`

---

##### `hostEnvironment`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.hostEnvironment"></a>

- *Type:* `string`

---

##### `lastSoftwareUpdate`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.lastSoftwareUpdate"></a>

- *Type:* `string`

---

##### `nextUpdateAvailabilityDate`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.nextUpdateAvailabilityDate"></a>

- *Type:* `string`

---

##### `softwareUpdatesEndDate`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.softwareUpdatesEndDate"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

##### `vpcEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeGatewayInformation.property.vpcEndpoint"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDescribeMaintenanceStartTime <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeMaintenanceStartTime"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeMaintenanceStartTime.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeMaintenanceStartTime(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeMaintenanceStartTimeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeMaintenanceStartTime.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeMaintenanceStartTime.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeMaintenanceStartTime.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeMaintenanceStartTimeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeMaintenanceStartTimeInput)

---



#### Properties <a name="Properties"></a>

##### `dayOfMonth`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeMaintenanceStartTime.property.dayOfMonth"></a>

- *Type:* `number`

---

##### `dayOfWeek`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeMaintenanceStartTime.property.dayOfWeek"></a>

- *Type:* `number`

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeMaintenanceStartTime.property.gatewayArn"></a>

- *Type:* `string`

---

##### `hourOfDay`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeMaintenanceStartTime.property.hourOfDay"></a>

- *Type:* `number`

---

##### `minuteOfHour`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeMaintenanceStartTime.property.minuteOfHour"></a>

- *Type:* `number`

---

##### `timezone`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeMaintenanceStartTime.property.timezone"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDescribeNfsFileShares <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeNfsFileShares"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeNfsFileShares.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeNfsFileShares(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeNfsFileSharesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeNfsFileShares.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeNfsFileShares.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeNfsFileShares.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeNfsFileSharesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeNfsFileSharesInput)

---



#### Properties <a name="Properties"></a>

##### `nfsFileShareInfoList`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeNfsFileShares.property.nfsFileShareInfoList"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayNfsFileShareInfo)[]

---


### StorageGatewayResponsesDescribeSmbFileShares <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSmbFileShares"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSmbFileShares.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeSmbFileShares(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeSmbFileSharesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSmbFileShares.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSmbFileShares.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSmbFileShares.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbFileSharesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbFileSharesInput)

---



#### Properties <a name="Properties"></a>

##### `smbFileShareInfoList`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSmbFileShares.property.smbFileShareInfoList"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo`](#aws-cdk-sdk.storagegateway.StorageGatewaySmbFileShareInfo)[]

---


### StorageGatewayResponsesDescribeSmbSettings <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSmbSettings"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSmbSettings.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeSmbSettings(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeSmbSettingsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSmbSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSmbSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSmbSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbSettingsInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeSmbSettingsInput)

---



#### Properties <a name="Properties"></a>

##### `activeDirectoryStatus`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSmbSettings.property.activeDirectoryStatus"></a>

- *Type:* `string`

---

##### `domainName`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSmbSettings.property.domainName"></a>

- *Type:* `string`

---

##### `fileSharesVisible`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSmbSettings.property.fileSharesVisible"></a>

- *Type:* `boolean`

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSmbSettings.property.gatewayArn"></a>

- *Type:* `string`

---

##### `smbGuestPasswordSet`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSmbSettings.property.smbGuestPasswordSet"></a>

- *Type:* `boolean`

---

##### `smbSecurityStrategy`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSmbSettings.property.smbSecurityStrategy"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDescribeSnapshotSchedule <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSnapshotSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSnapshotSchedule.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeSnapshotSchedule(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeSnapshotScheduleInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSnapshotSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSnapshotSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSnapshotSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeSnapshotScheduleInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeSnapshotScheduleInput)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSnapshotSchedule.property.description"></a>

- *Type:* `string`

---

##### `recurrenceInHours`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSnapshotSchedule.property.recurrenceInHours"></a>

- *Type:* `number`

---

##### `startAt`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSnapshotSchedule.property.startAt"></a>

- *Type:* `number`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSnapshotSchedule.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---

##### `timezone`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSnapshotSchedule.property.timezone"></a>

- *Type:* `string`

---

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeSnapshotSchedule.property.volumeArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDescribeStorediScsiVolumes <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeStorediScsiVolumes"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeStorediScsiVolumes.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeStorediScsiVolumes(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeStorediScsiVolumesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeStorediScsiVolumes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeStorediScsiVolumes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeStorediScsiVolumes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeStorediScsiVolumesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeStorediScsiVolumesInput)

---



#### Properties <a name="Properties"></a>

##### `storediScsiVolumes`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeStorediScsiVolumes.property.storediScsiVolumes"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume`](#aws-cdk-sdk.storagegateway.StorageGatewayStorediScsiVolume)[]

---


### StorageGatewayResponsesDescribeTapeArchives <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapeArchives"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapeArchives.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeTapeArchives(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeTapeArchivesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapeArchives.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapeArchives.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapeArchives.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeArchivesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeArchivesInput)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapeArchives.property.marker"></a>

- *Type:* `string`

---

##### `tapeArchives`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapeArchives.property.tapeArchives"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive`](#aws-cdk-sdk.storagegateway.StorageGatewayTapeArchive)[]

---


### StorageGatewayResponsesDescribeTapeRecoveryPoints <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapeRecoveryPoints"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapeRecoveryPoints.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeTapeRecoveryPoints(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeTapeRecoveryPointsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapeRecoveryPoints.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapeRecoveryPoints.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapeRecoveryPoints.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeRecoveryPointsInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapeRecoveryPointsInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapeRecoveryPoints.property.gatewayArn"></a>

- *Type:* `string`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapeRecoveryPoints.property.marker"></a>

- *Type:* `string`

---

##### `tapeRecoveryPointInfos`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapeRecoveryPoints.property.tapeRecoveryPointInfos"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTapeRecoveryPointInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayTapeRecoveryPointInfo)[]

---


### StorageGatewayResponsesDescribeTapes <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapes"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapes.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeTapes(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeTapesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeTapesInput)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapes.property.marker"></a>

- *Type:* `string`

---

##### `tapes`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeTapes.property.tapes"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTape`](#aws-cdk-sdk.storagegateway.StorageGatewayTape)[]

---


### StorageGatewayResponsesDescribeUploadBuffer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeUploadBuffer"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeUploadBuffer.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeUploadBuffer(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeUploadBufferInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeUploadBuffer.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeUploadBuffer.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeUploadBuffer.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeUploadBufferInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeUploadBufferInput)

---



#### Properties <a name="Properties"></a>

##### `diskIds`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeUploadBuffer.property.diskIds"></a>

- *Type:* `string`[]

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeUploadBuffer.property.gatewayArn"></a>

- *Type:* `string`

---

##### `uploadBufferAllocatedInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeUploadBuffer.property.uploadBufferAllocatedInBytes"></a>

- *Type:* `number`

---

##### `uploadBufferUsedInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeUploadBuffer.property.uploadBufferUsedInBytes"></a>

- *Type:* `number`

---


### StorageGatewayResponsesDescribeVtlDevices <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeVtlDevices"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeVtlDevices.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeVtlDevices(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeVtlDevicesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeVtlDevices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeVtlDevices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeVtlDevices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeVtlDevicesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeVtlDevicesInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeVtlDevices.property.gatewayArn"></a>

- *Type:* `string`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeVtlDevices.property.marker"></a>

- *Type:* `string`

---

##### `vtlDevices`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeVtlDevices.property.vtlDevices"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayVtlDevice`](#aws-cdk-sdk.storagegateway.StorageGatewayVtlDevice)[]

---


### StorageGatewayResponsesDescribeWorkingStorage <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeWorkingStorage"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeWorkingStorage.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDescribeWorkingStorage(__scope: Construct, __resources: string[], __input: StorageGatewayDescribeWorkingStorageInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeWorkingStorage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeWorkingStorage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeWorkingStorage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDescribeWorkingStorageInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDescribeWorkingStorageInput)

---



#### Properties <a name="Properties"></a>

##### `diskIds`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeWorkingStorage.property.diskIds"></a>

- *Type:* `string`[]

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeWorkingStorage.property.gatewayArn"></a>

- *Type:* `string`

---

##### `workingStorageAllocatedInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeWorkingStorage.property.workingStorageAllocatedInBytes"></a>

- *Type:* `number`

---

##### `workingStorageUsedInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDescribeWorkingStorage.property.workingStorageUsedInBytes"></a>

- *Type:* `number`

---


### StorageGatewayResponsesDetachVolume <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDetachVolume"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDetachVolume.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDetachVolume(__scope: Construct, __resources: string[], __input: StorageGatewayDetachVolumeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDetachVolume.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDetachVolume.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDetachVolume.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDetachVolumeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDetachVolumeInput)

---



#### Properties <a name="Properties"></a>

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDetachVolume.property.volumeArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesDisableGateway <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDisableGateway"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDisableGateway.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesDisableGateway(__scope: Construct, __resources: string[], __input: StorageGatewayDisableGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDisableGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDisableGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDisableGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDisableGatewayInput`](#aws-cdk-sdk.storagegateway.StorageGatewayDisableGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesDisableGateway.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesJoinDomain <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesJoinDomain"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesJoinDomain.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesJoinDomain(__scope: Construct, __resources: string[], __input: StorageGatewayJoinDomainInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesJoinDomain.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesJoinDomain.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesJoinDomain.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayJoinDomainInput`](#aws-cdk-sdk.storagegateway.StorageGatewayJoinDomainInput)

---



#### Properties <a name="Properties"></a>

##### `activeDirectoryStatus`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesJoinDomain.property.activeDirectoryStatus"></a>

- *Type:* `string`

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesJoinDomain.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesListAutomaticTapeCreationPolicies <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListAutomaticTapeCreationPolicies"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListAutomaticTapeCreationPolicies.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesListAutomaticTapeCreationPolicies(__scope: Construct, __resources: string[], __input: StorageGatewayListAutomaticTapeCreationPoliciesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListAutomaticTapeCreationPolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListAutomaticTapeCreationPolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListAutomaticTapeCreationPolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListAutomaticTapeCreationPoliciesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListAutomaticTapeCreationPoliciesInput)

---



#### Properties <a name="Properties"></a>

##### `automaticTapeCreationPolicyInfos`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListAutomaticTapeCreationPolicies.property.automaticTapeCreationPolicyInfos"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayAutomaticTapeCreationPolicyInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayAutomaticTapeCreationPolicyInfo)[]

---


### StorageGatewayResponsesListFileShares <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListFileShares"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListFileShares.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesListFileShares(__scope: Construct, __resources: string[], __input: StorageGatewayListFileSharesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListFileShares.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListFileShares.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListFileShares.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListFileSharesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListFileSharesInput)

---



#### Properties <a name="Properties"></a>

##### `fileShareInfoList`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListFileShares.property.fileShareInfoList"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayFileShareInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayFileShareInfo)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListFileShares.property.marker"></a>

- *Type:* `string`

---

##### `nextMarker`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListFileShares.property.nextMarker"></a>

- *Type:* `string`

---


### StorageGatewayResponsesListGateways <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListGateways"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListGateways.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesListGateways(__scope: Construct, __resources: string[], __input: StorageGatewayListGatewaysInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListGateways.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListGateways.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListGateways.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListGatewaysInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListGatewaysInput)

---



#### Properties <a name="Properties"></a>

##### `gateways`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListGateways.property.gateways"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayGatewayInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayGatewayInfo)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListGateways.property.marker"></a>

- *Type:* `string`

---


### StorageGatewayResponsesListLocalDisks <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListLocalDisks"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListLocalDisks.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesListLocalDisks(__scope: Construct, __resources: string[], __input: StorageGatewayListLocalDisksInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListLocalDisks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListLocalDisks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListLocalDisks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListLocalDisksInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListLocalDisksInput)

---



#### Properties <a name="Properties"></a>

##### `disks`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListLocalDisks.property.disks"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayDisk`](#aws-cdk-sdk.storagegateway.StorageGatewayDisk)[]

---

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListLocalDisks.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesListTagsForResource <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTagsForResource.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: StorageGatewayListTagsForResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListTagsForResourceInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListTagsForResourceInput)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTagsForResource.property.marker"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTagsForResource.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTag`](#aws-cdk-sdk.storagegateway.StorageGatewayTag)[]

---


### StorageGatewayResponsesListTapePools <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTapePools"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTapePools.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesListTapePools(__scope: Construct, __resources: string[], __input: StorageGatewayListTapePoolsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTapePools.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTapePools.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTapePools.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListTapePoolsInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListTapePoolsInput)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTapePools.property.marker"></a>

- *Type:* `string`

---

##### `poolInfos`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTapePools.property.poolInfos"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayPoolInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayPoolInfo)[]

---


### StorageGatewayResponsesListTapes <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTapes"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTapes.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesListTapes(__scope: Construct, __resources: string[], __input: StorageGatewayListTapesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTapes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTapes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTapes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListTapesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListTapesInput)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTapes.property.marker"></a>

- *Type:* `string`

---

##### `tapeInfos`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListTapes.property.tapeInfos"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayTapeInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayTapeInfo)[]

---


### StorageGatewayResponsesListVolumeInitiators <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumeInitiators"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumeInitiators.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesListVolumeInitiators(__scope: Construct, __resources: string[], __input: StorageGatewayListVolumeInitiatorsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumeInitiators.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumeInitiators.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumeInitiators.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListVolumeInitiatorsInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListVolumeInitiatorsInput)

---



#### Properties <a name="Properties"></a>

##### `initiators`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumeInitiators.property.initiators"></a>

- *Type:* `string`[]

---


### StorageGatewayResponsesListVolumeRecoveryPoints <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumeRecoveryPoints"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumeRecoveryPoints.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesListVolumeRecoveryPoints(__scope: Construct, __resources: string[], __input: StorageGatewayListVolumeRecoveryPointsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumeRecoveryPoints.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumeRecoveryPoints.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumeRecoveryPoints.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListVolumeRecoveryPointsInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListVolumeRecoveryPointsInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumeRecoveryPoints.property.gatewayArn"></a>

- *Type:* `string`

---

##### `volumeRecoveryPointInfos`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumeRecoveryPoints.property.volumeRecoveryPointInfos"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayVolumeRecoveryPointInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayVolumeRecoveryPointInfo)[]

---


### StorageGatewayResponsesListVolumes <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumes"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumes.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesListVolumes(__scope: Construct, __resources: string[], __input: StorageGatewayListVolumesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayListVolumesInput`](#aws-cdk-sdk.storagegateway.StorageGatewayListVolumesInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumes.property.gatewayArn"></a>

- *Type:* `string`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumes.property.marker"></a>

- *Type:* `string`

---

##### `volumeInfos`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesListVolumes.property.volumeInfos"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayVolumeInfo`](#aws-cdk-sdk.storagegateway.StorageGatewayVolumeInfo)[]

---


### StorageGatewayResponsesNotifyWhenUploaded <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesNotifyWhenUploaded"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesNotifyWhenUploaded.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesNotifyWhenUploaded(__scope: Construct, __resources: string[], __input: StorageGatewayNotifyWhenUploadedInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesNotifyWhenUploaded.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesNotifyWhenUploaded.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesNotifyWhenUploaded.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayNotifyWhenUploadedInput`](#aws-cdk-sdk.storagegateway.StorageGatewayNotifyWhenUploadedInput)

---



#### Properties <a name="Properties"></a>

##### `fileShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesNotifyWhenUploaded.property.fileShareArn"></a>

- *Type:* `string`

---

##### `notificationId`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesNotifyWhenUploaded.property.notificationId"></a>

- *Type:* `string`

---


### StorageGatewayResponsesPutLocalConsolePassword <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesPutLocalConsolePassword"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesPutLocalConsolePassword.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesPutLocalConsolePassword(__scope: Construct, __resources: string[], __input: StorageGatewaySetLocalConsolePasswordInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesPutLocalConsolePassword.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesPutLocalConsolePassword.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesPutLocalConsolePassword.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewaySetLocalConsolePasswordInput`](#aws-cdk-sdk.storagegateway.StorageGatewaySetLocalConsolePasswordInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesPutLocalConsolePassword.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesPutSmbGuestPassword <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesPutSmbGuestPassword"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesPutSmbGuestPassword.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesPutSmbGuestPassword(__scope: Construct, __resources: string[], __input: StorageGatewaySetSmbGuestPasswordInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesPutSmbGuestPassword.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesPutSmbGuestPassword.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesPutSmbGuestPassword.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewaySetSmbGuestPasswordInput`](#aws-cdk-sdk.storagegateway.StorageGatewaySetSmbGuestPasswordInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesPutSmbGuestPassword.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesRefreshCache <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRefreshCache"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRefreshCache.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesRefreshCache(__scope: Construct, __resources: string[], __input: StorageGatewayRefreshCacheInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRefreshCache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRefreshCache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRefreshCache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayRefreshCacheInput`](#aws-cdk-sdk.storagegateway.StorageGatewayRefreshCacheInput)

---



#### Properties <a name="Properties"></a>

##### `fileShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRefreshCache.property.fileShareArn"></a>

- *Type:* `string`

---

##### `notificationId`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRefreshCache.property.notificationId"></a>

- *Type:* `string`

---


### StorageGatewayResponsesRemoveTagsFromResource <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRemoveTagsFromResource"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRemoveTagsFromResource.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesRemoveTagsFromResource(__scope: Construct, __resources: string[], __input: StorageGatewayRemoveTagsFromResourceInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRemoveTagsFromResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRemoveTagsFromResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRemoveTagsFromResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayRemoveTagsFromResourceInput`](#aws-cdk-sdk.storagegateway.StorageGatewayRemoveTagsFromResourceInput)

---



#### Properties <a name="Properties"></a>

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRemoveTagsFromResource.property.resourceArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesResetCache <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesResetCache"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesResetCache.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesResetCache(__scope: Construct, __resources: string[], __input: StorageGatewayResetCacheInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesResetCache.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesResetCache.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesResetCache.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayResetCacheInput`](#aws-cdk-sdk.storagegateway.StorageGatewayResetCacheInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesResetCache.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesRetrieveTapeArchive <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRetrieveTapeArchive"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRetrieveTapeArchive.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesRetrieveTapeArchive(__scope: Construct, __resources: string[], __input: StorageGatewayRetrieveTapeArchiveInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRetrieveTapeArchive.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRetrieveTapeArchive.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRetrieveTapeArchive.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeArchiveInput`](#aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeArchiveInput)

---



#### Properties <a name="Properties"></a>

##### `tapeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRetrieveTapeArchive.property.tapeArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesRetrieveTapeRecoveryPoint <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRetrieveTapeRecoveryPoint"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRetrieveTapeRecoveryPoint.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesRetrieveTapeRecoveryPoint(__scope: Construct, __resources: string[], __input: StorageGatewayRetrieveTapeRecoveryPointInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRetrieveTapeRecoveryPoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRetrieveTapeRecoveryPoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRetrieveTapeRecoveryPoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeRecoveryPointInput`](#aws-cdk-sdk.storagegateway.StorageGatewayRetrieveTapeRecoveryPointInput)

---



#### Properties <a name="Properties"></a>

##### `tapeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesRetrieveTapeRecoveryPoint.property.tapeArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesShutdownGateway <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesShutdownGateway"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesShutdownGateway.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesShutdownGateway(__scope: Construct, __resources: string[], __input: StorageGatewayShutdownGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesShutdownGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesShutdownGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesShutdownGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayShutdownGatewayInput`](#aws-cdk-sdk.storagegateway.StorageGatewayShutdownGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesShutdownGateway.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesStartAvailabilityMonitorTest <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesStartAvailabilityMonitorTest"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesStartAvailabilityMonitorTest.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesStartAvailabilityMonitorTest(__scope: Construct, __resources: string[], __input: StorageGatewayStartAvailabilityMonitorTestInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesStartAvailabilityMonitorTest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesStartAvailabilityMonitorTest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesStartAvailabilityMonitorTest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayStartAvailabilityMonitorTestInput`](#aws-cdk-sdk.storagegateway.StorageGatewayStartAvailabilityMonitorTestInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesStartAvailabilityMonitorTest.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesStartGateway <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesStartGateway"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesStartGateway.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesStartGateway(__scope: Construct, __resources: string[], __input: StorageGatewayStartGatewayInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesStartGateway.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesStartGateway.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesStartGateway.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayStartGatewayInput`](#aws-cdk-sdk.storagegateway.StorageGatewayStartGatewayInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesStartGateway.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesUpdateAutomaticTapeCreationPolicy <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateAutomaticTapeCreationPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateAutomaticTapeCreationPolicy.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesUpdateAutomaticTapeCreationPolicy(__scope: Construct, __resources: string[], __input: StorageGatewayUpdateAutomaticTapeCreationPolicyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateAutomaticTapeCreationPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateAutomaticTapeCreationPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateAutomaticTapeCreationPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateAutomaticTapeCreationPolicyInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateAutomaticTapeCreationPolicyInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateAutomaticTapeCreationPolicy.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesUpdateBandwidthRateLimit <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateBandwidthRateLimit"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateBandwidthRateLimit.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesUpdateBandwidthRateLimit(__scope: Construct, __resources: string[], __input: StorageGatewayUpdateBandwidthRateLimitInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateBandwidthRateLimit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateBandwidthRateLimit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateBandwidthRateLimit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateBandwidthRateLimit.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesUpdateBandwidthRateLimitSchedule <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateBandwidthRateLimitSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateBandwidthRateLimitSchedule.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesUpdateBandwidthRateLimitSchedule(__scope: Construct, __resources: string[], __input: StorageGatewayUpdateBandwidthRateLimitScheduleInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateBandwidthRateLimitSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateBandwidthRateLimitSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateBandwidthRateLimitSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitScheduleInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateBandwidthRateLimitScheduleInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateBandwidthRateLimitSchedule.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesUpdateChapCredentials <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateChapCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateChapCredentials.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesUpdateChapCredentials(__scope: Construct, __resources: string[], __input: StorageGatewayUpdateChapCredentialsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateChapCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateChapCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateChapCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateChapCredentialsInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateChapCredentialsInput)

---



#### Properties <a name="Properties"></a>

##### `initiatorName`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateChapCredentials.property.initiatorName"></a>

- *Type:* `string`

---

##### `targetArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateChapCredentials.property.targetArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesUpdateGatewayInformation <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateGatewayInformation"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateGatewayInformation.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesUpdateGatewayInformation(__scope: Construct, __resources: string[], __input: StorageGatewayUpdateGatewayInformationInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateGatewayInformation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateGatewayInformation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateGatewayInformation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewayInformationInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewayInformationInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateGatewayInformation.property.gatewayArn"></a>

- *Type:* `string`

---

##### `gatewayName`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateGatewayInformation.property.gatewayName"></a>

- *Type:* `string`

---


### StorageGatewayResponsesUpdateGatewaySoftwareNow <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateGatewaySoftwareNow"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateGatewaySoftwareNow.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesUpdateGatewaySoftwareNow(__scope: Construct, __resources: string[], __input: StorageGatewayUpdateGatewaySoftwareNowInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateGatewaySoftwareNow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateGatewaySoftwareNow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateGatewaySoftwareNow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewaySoftwareNowInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateGatewaySoftwareNowInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateGatewaySoftwareNow.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesUpdateMaintenanceStartTime <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateMaintenanceStartTime"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateMaintenanceStartTime.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesUpdateMaintenanceStartTime(__scope: Construct, __resources: string[], __input: StorageGatewayUpdateMaintenanceStartTimeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateMaintenanceStartTime.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateMaintenanceStartTime.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateMaintenanceStartTime.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateMaintenanceStartTimeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateMaintenanceStartTimeInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateMaintenanceStartTime.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesUpdateNfsFileShare <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateNfsFileShare"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateNfsFileShare.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesUpdateNfsFileShare(__scope: Construct, __resources: string[], __input: StorageGatewayUpdateNfsFileShareInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateNfsFileShare.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateNfsFileShare.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateNfsFileShare.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateNfsFileShareInput)

---



#### Properties <a name="Properties"></a>

##### `fileShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateNfsFileShare.property.fileShareArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesUpdateSmbFileShare <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbFileShare"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbFileShare.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesUpdateSmbFileShare(__scope: Construct, __resources: string[], __input: StorageGatewayUpdateSmbFileShareInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbFileShare.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbFileShare.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbFileShare.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareInput)

---



#### Properties <a name="Properties"></a>

##### `fileShareArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbFileShare.property.fileShareArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesUpdateSmbFileShareVisibility <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbFileShareVisibility"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbFileShareVisibility.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesUpdateSmbFileShareVisibility(__scope: Construct, __resources: string[], __input: StorageGatewayUpdateSmbFileShareVisibilityInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbFileShareVisibility.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbFileShareVisibility.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbFileShareVisibility.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareVisibilityInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbFileShareVisibilityInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbFileShareVisibility.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesUpdateSmbSecurityStrategy <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbSecurityStrategy"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbSecurityStrategy.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesUpdateSmbSecurityStrategy(__scope: Construct, __resources: string[], __input: StorageGatewayUpdateSmbSecurityStrategyInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbSecurityStrategy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbSecurityStrategy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbSecurityStrategy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbSecurityStrategyInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateSmbSecurityStrategyInput)

---



#### Properties <a name="Properties"></a>

##### `gatewayArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSmbSecurityStrategy.property.gatewayArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesUpdateSnapshotSchedule <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSnapshotSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSnapshotSchedule.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesUpdateSnapshotSchedule(__scope: Construct, __resources: string[], __input: StorageGatewayUpdateSnapshotScheduleInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSnapshotSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSnapshotSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSnapshotSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateSnapshotScheduleInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateSnapshotScheduleInput)

---



#### Properties <a name="Properties"></a>

##### `volumeArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateSnapshotSchedule.property.volumeArn"></a>

- *Type:* `string`

---


### StorageGatewayResponsesUpdateVtlDeviceType <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateVtlDeviceType"></a>

#### Initializer <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateVtlDeviceType.Initializer"></a>

```typescript
import { storagegateway } from 'aws-cdk-sdk'

new storagegateway.StorageGatewayResponsesUpdateVtlDeviceType(__scope: Construct, __resources: string[], __input: StorageGatewayUpdateVtlDeviceTypeInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateVtlDeviceType.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateVtlDeviceType.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateVtlDeviceType.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.storagegateway.StorageGatewayUpdateVtlDeviceTypeInput`](#aws-cdk-sdk.storagegateway.StorageGatewayUpdateVtlDeviceTypeInput)

---



#### Properties <a name="Properties"></a>

##### `vtlDeviceArn`<sup>Required</sup> <a name="aws-cdk-sdk.storagegateway.StorageGatewayResponsesUpdateVtlDeviceType.property.vtlDeviceArn"></a>

- *Type:* `string`

---



