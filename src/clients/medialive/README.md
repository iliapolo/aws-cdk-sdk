# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### MediaLiveClient <a name="aws-cdk-sdk.medialive.MediaLiveClient"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveClient.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `acceptInputDeviceTransfer` <a name="aws-cdk-sdk.medialive.MediaLiveClient.acceptInputDeviceTransfer"></a>

```typescript
public acceptInputDeviceTransfer(input: MediaLiveAcceptInputDeviceTransferRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAcceptInputDeviceTransferRequest`](#aws-cdk-sdk.medialive.MediaLiveAcceptInputDeviceTransferRequest)

---

##### `batchDelete` <a name="aws-cdk-sdk.medialive.MediaLiveClient.batchDelete"></a>

```typescript
public batchDelete(input: MediaLiveBatchDeleteRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchDeleteRequest`](#aws-cdk-sdk.medialive.MediaLiveBatchDeleteRequest)

---

##### `batchStart` <a name="aws-cdk-sdk.medialive.MediaLiveClient.batchStart"></a>

```typescript
public batchStart(input: MediaLiveBatchStartRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchStartRequest`](#aws-cdk-sdk.medialive.MediaLiveBatchStartRequest)

---

##### `batchStop` <a name="aws-cdk-sdk.medialive.MediaLiveClient.batchStop"></a>

```typescript
public batchStop(input: MediaLiveBatchStopRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchStopRequest`](#aws-cdk-sdk.medialive.MediaLiveBatchStopRequest)

---

##### `batchUpdateSchedule` <a name="aws-cdk-sdk.medialive.MediaLiveClient.batchUpdateSchedule"></a>

```typescript
public batchUpdateSchedule(input: MediaLiveBatchUpdateScheduleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchUpdateScheduleRequest`](#aws-cdk-sdk.medialive.MediaLiveBatchUpdateScheduleRequest)

---

##### `cancelInputDeviceTransfer` <a name="aws-cdk-sdk.medialive.MediaLiveClient.cancelInputDeviceTransfer"></a>

```typescript
public cancelInputDeviceTransfer(input: MediaLiveCancelInputDeviceTransferRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCancelInputDeviceTransferRequest`](#aws-cdk-sdk.medialive.MediaLiveCancelInputDeviceTransferRequest)

---

##### `createChannel` <a name="aws-cdk-sdk.medialive.MediaLiveClient.createChannel"></a>

```typescript
public createChannel(input: MediaLiveCreateChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---

##### `createInput` <a name="aws-cdk-sdk.medialive.MediaLiveClient.createInput"></a>

```typescript
public createInput(input: MediaLiveCreateInputRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateInputRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateInputRequest)

---

##### `createInputSecurityGroup` <a name="aws-cdk-sdk.medialive.MediaLiveClient.createInputSecurityGroup"></a>

```typescript
public createInputSecurityGroup(input: MediaLiveCreateInputSecurityGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateInputSecurityGroupRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateInputSecurityGroupRequest)

---

##### `createMultiplex` <a name="aws-cdk-sdk.medialive.MediaLiveClient.createMultiplex"></a>

```typescript
public createMultiplex(input: MediaLiveCreateMultiplexRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateMultiplexRequest)

---

##### `createMultiplexProgram` <a name="aws-cdk-sdk.medialive.MediaLiveClient.createMultiplexProgram"></a>

```typescript
public createMultiplexProgram(input: MediaLiveCreateMultiplexProgramRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest)

---

##### `createTags` <a name="aws-cdk-sdk.medialive.MediaLiveClient.createTags"></a>

```typescript
public createTags(input: MediaLiveCreateTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateTagsRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateTagsRequest)

---

##### `deleteChannel` <a name="aws-cdk-sdk.medialive.MediaLiveClient.deleteChannel"></a>

```typescript
public deleteChannel(input: MediaLiveDeleteChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---

##### `deleteInput` <a name="aws-cdk-sdk.medialive.MediaLiveClient.deleteInput"></a>

```typescript
public deleteInput(input: MediaLiveDeleteInputRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteInputRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteInputRequest)

---

##### `deleteInputSecurityGroup` <a name="aws-cdk-sdk.medialive.MediaLiveClient.deleteInputSecurityGroup"></a>

```typescript
public deleteInputSecurityGroup(input: MediaLiveDeleteInputSecurityGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteInputSecurityGroupRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteInputSecurityGroupRequest)

---

##### `deleteMultiplex` <a name="aws-cdk-sdk.medialive.MediaLiveClient.deleteMultiplex"></a>

```typescript
public deleteMultiplex(input: MediaLiveDeleteMultiplexRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexRequest)

---

##### `deleteMultiplexProgram` <a name="aws-cdk-sdk.medialive.MediaLiveClient.deleteMultiplexProgram"></a>

```typescript
public deleteMultiplexProgram(input: MediaLiveDeleteMultiplexProgramRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramRequest)

---

##### `deleteReservation` <a name="aws-cdk-sdk.medialive.MediaLiveClient.deleteReservation"></a>

```typescript
public deleteReservation(input: MediaLiveDeleteReservationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteReservationRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteReservationRequest)

---

##### `deleteSchedule` <a name="aws-cdk-sdk.medialive.MediaLiveClient.deleteSchedule"></a>

```typescript
public deleteSchedule(input: MediaLiveDeleteScheduleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteScheduleRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteScheduleRequest)

---

##### `deleteTags` <a name="aws-cdk-sdk.medialive.MediaLiveClient.deleteTags"></a>

```typescript
public deleteTags(input: MediaLiveDeleteTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteTagsRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteTagsRequest)

---

##### `describeChannel` <a name="aws-cdk-sdk.medialive.MediaLiveClient.describeChannel"></a>

```typescript
public describeChannel(input: MediaLiveDescribeChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---

##### `describeInput` <a name="aws-cdk-sdk.medialive.MediaLiveClient.describeInput"></a>

```typescript
public describeInput(input: MediaLiveDescribeInputRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeInputRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeInputRequest)

---

##### `describeInputDevice` <a name="aws-cdk-sdk.medialive.MediaLiveClient.describeInputDevice"></a>

```typescript
public describeInputDevice(input: MediaLiveDescribeInputDeviceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceRequest)

---

##### `describeInputDeviceThumbnail` <a name="aws-cdk-sdk.medialive.MediaLiveClient.describeInputDeviceThumbnail"></a>

```typescript
public describeInputDeviceThumbnail(input: MediaLiveDescribeInputDeviceThumbnailRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceThumbnailRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceThumbnailRequest)

---

##### `describeInputSecurityGroup` <a name="aws-cdk-sdk.medialive.MediaLiveClient.describeInputSecurityGroup"></a>

```typescript
public describeInputSecurityGroup(input: MediaLiveDescribeInputSecurityGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeInputSecurityGroupRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeInputSecurityGroupRequest)

---

##### `describeMultiplex` <a name="aws-cdk-sdk.medialive.MediaLiveClient.describeMultiplex"></a>

```typescript
public describeMultiplex(input: MediaLiveDescribeMultiplexRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexRequest)

---

##### `describeMultiplexProgram` <a name="aws-cdk-sdk.medialive.MediaLiveClient.describeMultiplexProgram"></a>

```typescript
public describeMultiplexProgram(input: MediaLiveDescribeMultiplexProgramRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramRequest)

---

##### `describeOffering` <a name="aws-cdk-sdk.medialive.MediaLiveClient.describeOffering"></a>

```typescript
public describeOffering(input: MediaLiveDescribeOfferingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeOfferingRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeOfferingRequest)

---

##### `describeReservation` <a name="aws-cdk-sdk.medialive.MediaLiveClient.describeReservation"></a>

```typescript
public describeReservation(input: MediaLiveDescribeReservationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeReservationRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeReservationRequest)

---

##### `describeSchedule` <a name="aws-cdk-sdk.medialive.MediaLiveClient.describeSchedule"></a>

```typescript
public describeSchedule(input: MediaLiveDescribeScheduleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeScheduleRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeScheduleRequest)

---

##### `listChannels` <a name="aws-cdk-sdk.medialive.MediaLiveClient.listChannels"></a>

```typescript
public listChannels(input: MediaLiveListChannelsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListChannelsRequest`](#aws-cdk-sdk.medialive.MediaLiveListChannelsRequest)

---

##### `listInputDevices` <a name="aws-cdk-sdk.medialive.MediaLiveClient.listInputDevices"></a>

```typescript
public listInputDevices(input: MediaLiveListInputDevicesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListInputDevicesRequest`](#aws-cdk-sdk.medialive.MediaLiveListInputDevicesRequest)

---

##### `listInputDeviceTransfers` <a name="aws-cdk-sdk.medialive.MediaLiveClient.listInputDeviceTransfers"></a>

```typescript
public listInputDeviceTransfers(input: MediaLiveListInputDeviceTransfersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListInputDeviceTransfersRequest`](#aws-cdk-sdk.medialive.MediaLiveListInputDeviceTransfersRequest)

---

##### `listInputs` <a name="aws-cdk-sdk.medialive.MediaLiveClient.listInputs"></a>

```typescript
public listInputs(input: MediaLiveListInputsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListInputsRequest`](#aws-cdk-sdk.medialive.MediaLiveListInputsRequest)

---

##### `listInputSecurityGroups` <a name="aws-cdk-sdk.medialive.MediaLiveClient.listInputSecurityGroups"></a>

```typescript
public listInputSecurityGroups(input: MediaLiveListInputSecurityGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListInputSecurityGroupsRequest`](#aws-cdk-sdk.medialive.MediaLiveListInputSecurityGroupsRequest)

---

##### `listMultiplexes` <a name="aws-cdk-sdk.medialive.MediaLiveClient.listMultiplexes"></a>

```typescript
public listMultiplexes(input: MediaLiveListMultiplexesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListMultiplexesRequest`](#aws-cdk-sdk.medialive.MediaLiveListMultiplexesRequest)

---

##### `listMultiplexPrograms` <a name="aws-cdk-sdk.medialive.MediaLiveClient.listMultiplexPrograms"></a>

```typescript
public listMultiplexPrograms(input: MediaLiveListMultiplexProgramsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListMultiplexProgramsRequest`](#aws-cdk-sdk.medialive.MediaLiveListMultiplexProgramsRequest)

---

##### `listOfferings` <a name="aws-cdk-sdk.medialive.MediaLiveClient.listOfferings"></a>

```typescript
public listOfferings(input: MediaLiveListOfferingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListOfferingsRequest`](#aws-cdk-sdk.medialive.MediaLiveListOfferingsRequest)

---

##### `listReservations` <a name="aws-cdk-sdk.medialive.MediaLiveClient.listReservations"></a>

```typescript
public listReservations(input: MediaLiveListReservationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListReservationsRequest`](#aws-cdk-sdk.medialive.MediaLiveListReservationsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.medialive.MediaLiveClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: MediaLiveListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListTagsForResourceRequest`](#aws-cdk-sdk.medialive.MediaLiveListTagsForResourceRequest)

---

##### `purchaseOffering` <a name="aws-cdk-sdk.medialive.MediaLiveClient.purchaseOffering"></a>

```typescript
public purchaseOffering(input: MediaLivePurchaseOfferingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePurchaseOfferingRequest`](#aws-cdk-sdk.medialive.MediaLivePurchaseOfferingRequest)

---

##### `rejectInputDeviceTransfer` <a name="aws-cdk-sdk.medialive.MediaLiveClient.rejectInputDeviceTransfer"></a>

```typescript
public rejectInputDeviceTransfer(input: MediaLiveRejectInputDeviceTransferRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveRejectInputDeviceTransferRequest`](#aws-cdk-sdk.medialive.MediaLiveRejectInputDeviceTransferRequest)

---

##### `startChannel` <a name="aws-cdk-sdk.medialive.MediaLiveClient.startChannel"></a>

```typescript
public startChannel(input: MediaLiveStartChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---

##### `startMultiplex` <a name="aws-cdk-sdk.medialive.MediaLiveClient.startMultiplex"></a>

```typescript
public startMultiplex(input: MediaLiveStartMultiplexRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveStartMultiplexRequest)

---

##### `stopChannel` <a name="aws-cdk-sdk.medialive.MediaLiveClient.stopChannel"></a>

```typescript
public stopChannel(input: MediaLiveStopChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---

##### `stopMultiplex` <a name="aws-cdk-sdk.medialive.MediaLiveClient.stopMultiplex"></a>

```typescript
public stopMultiplex(input: MediaLiveStopMultiplexRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveStopMultiplexRequest)

---

##### `transferInputDevice` <a name="aws-cdk-sdk.medialive.MediaLiveClient.transferInputDevice"></a>

```typescript
public transferInputDevice(input: MediaLiveTransferInputDeviceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveTransferInputDeviceRequest`](#aws-cdk-sdk.medialive.MediaLiveTransferInputDeviceRequest)

---

##### `updateChannel` <a name="aws-cdk-sdk.medialive.MediaLiveClient.updateChannel"></a>

```typescript
public updateChannel(input: MediaLiveUpdateChannelRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---

##### `updateChannelClass` <a name="aws-cdk-sdk.medialive.MediaLiveClient.updateChannelClass"></a>

```typescript
public updateChannelClass(input: MediaLiveUpdateChannelClassRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---

##### `updateInput` <a name="aws-cdk-sdk.medialive.MediaLiveClient.updateInput"></a>

```typescript
public updateInput(input: MediaLiveUpdateInputRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateInputRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateInputRequest)

---

##### `updateInputDevice` <a name="aws-cdk-sdk.medialive.MediaLiveClient.updateInputDevice"></a>

```typescript
public updateInputDevice(input: MediaLiveUpdateInputDeviceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceRequest)

---

##### `updateInputSecurityGroup` <a name="aws-cdk-sdk.medialive.MediaLiveClient.updateInputSecurityGroup"></a>

```typescript
public updateInputSecurityGroup(input: MediaLiveUpdateInputSecurityGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateInputSecurityGroupRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateInputSecurityGroupRequest)

---

##### `updateMultiplex` <a name="aws-cdk-sdk.medialive.MediaLiveClient.updateMultiplex"></a>

```typescript
public updateMultiplex(input: MediaLiveUpdateMultiplexRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexRequest)

---

##### `updateMultiplexProgram` <a name="aws-cdk-sdk.medialive.MediaLiveClient.updateMultiplexProgram"></a>

```typescript
public updateMultiplexProgram(input: MediaLiveUpdateMultiplexProgramRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest)

---

##### `updateReservation` <a name="aws-cdk-sdk.medialive.MediaLiveClient.updateReservation"></a>

```typescript
public updateReservation(input: MediaLiveUpdateReservationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateReservationRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateReservationRequest)

---




## Structs <a name="Structs"></a>

### MediaLiveAacSettings <a name="aws-cdk-sdk.medialive.MediaLiveAacSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAacSettings: medialive.MediaLiveAacSettings = { ... }
```

##### `bitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAacSettings.property.bitrate"></a>

- *Type:* `number`

---

##### `codingMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAacSettings.property.codingMode"></a>

- *Type:* `string`

---

##### `inputType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAacSettings.property.inputType"></a>

- *Type:* `string`

---

##### `profile`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAacSettings.property.profile"></a>

- *Type:* `string`

---

##### `rateControlMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAacSettings.property.rateControlMode"></a>

- *Type:* `string`

---

##### `rawFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAacSettings.property.rawFormat"></a>

- *Type:* `string`

---

##### `sampleRate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAacSettings.property.sampleRate"></a>

- *Type:* `number`

---

##### `spec`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAacSettings.property.spec"></a>

- *Type:* `string`

---

##### `vbrQuality`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAacSettings.property.vbrQuality"></a>

- *Type:* `string`

---

### MediaLiveAc3Settings <a name="aws-cdk-sdk.medialive.MediaLiveAc3Settings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAc3Settings: medialive.MediaLiveAc3Settings = { ... }
```

##### `bitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAc3Settings.property.bitrate"></a>

- *Type:* `number`

---

##### `bitstreamMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAc3Settings.property.bitstreamMode"></a>

- *Type:* `string`

---

##### `codingMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAc3Settings.property.codingMode"></a>

- *Type:* `string`

---

##### `dialnorm`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAc3Settings.property.dialnorm"></a>

- *Type:* `number`

---

##### `drcProfile`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAc3Settings.property.drcProfile"></a>

- *Type:* `string`

---

##### `lfeFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAc3Settings.property.lfeFilter"></a>

- *Type:* `string`

---

##### `metadataControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAc3Settings.property.metadataControl"></a>

- *Type:* `string`

---

### MediaLiveAcceptInputDeviceTransferRequest <a name="aws-cdk-sdk.medialive.MediaLiveAcceptInputDeviceTransferRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAcceptInputDeviceTransferRequest: medialive.MediaLiveAcceptInputDeviceTransferRequest = { ... }
```

##### `inputDeviceId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAcceptInputDeviceTransferRequest.property.inputDeviceId"></a>

- *Type:* `string`

---

### MediaLiveAcceptInputDeviceTransferResponse <a name="aws-cdk-sdk.medialive.MediaLiveAcceptInputDeviceTransferResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAcceptInputDeviceTransferResponse: medialive.MediaLiveAcceptInputDeviceTransferResponse = { ... }
```

### MediaLiveAncillarySourceSettings <a name="aws-cdk-sdk.medialive.MediaLiveAncillarySourceSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAncillarySourceSettings: medialive.MediaLiveAncillarySourceSettings = { ... }
```

##### `sourceAncillaryChannelNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAncillarySourceSettings.property.sourceAncillaryChannelNumber"></a>

- *Type:* `number`

---

### MediaLiveArchiveContainerSettings <a name="aws-cdk-sdk.medialive.MediaLiveArchiveContainerSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveArchiveContainerSettings: medialive.MediaLiveArchiveContainerSettings = { ... }
```

##### `m2TsSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveArchiveContainerSettings.property.m2TsSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveM2tsSettings`](#aws-cdk-sdk.medialive.MediaLiveM2tsSettings)

---

##### `rawSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveArchiveContainerSettings.property.rawSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveRawSettings`](#aws-cdk-sdk.medialive.MediaLiveRawSettings)

---

### MediaLiveArchiveGroupSettings <a name="aws-cdk-sdk.medialive.MediaLiveArchiveGroupSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveArchiveGroupSettings: medialive.MediaLiveArchiveGroupSettings = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveArchiveGroupSettings.property.destination"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputLocationRef`](#aws-cdk-sdk.medialive.MediaLiveOutputLocationRef)

---

##### `rolloverInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveArchiveGroupSettings.property.rolloverInterval"></a>

- *Type:* `number`

---

### MediaLiveArchiveOutputSettings <a name="aws-cdk-sdk.medialive.MediaLiveArchiveOutputSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveArchiveOutputSettings: medialive.MediaLiveArchiveOutputSettings = { ... }
```

##### `containerSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveArchiveOutputSettings.property.containerSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveArchiveContainerSettings`](#aws-cdk-sdk.medialive.MediaLiveArchiveContainerSettings)

---

##### `extension`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveArchiveOutputSettings.property.extension"></a>

- *Type:* `string`

---

##### `nameModifier`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveArchiveOutputSettings.property.nameModifier"></a>

- *Type:* `string`

---

### MediaLiveAribDestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveAribDestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAribDestinationSettings: medialive.MediaLiveAribDestinationSettings = { ... }
```

### MediaLiveAribSourceSettings <a name="aws-cdk-sdk.medialive.MediaLiveAribSourceSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAribSourceSettings: medialive.MediaLiveAribSourceSettings = { ... }
```

### MediaLiveAudioChannelMapping <a name="aws-cdk-sdk.medialive.MediaLiveAudioChannelMapping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAudioChannelMapping: medialive.MediaLiveAudioChannelMapping = { ... }
```

##### `inputChannelLevels`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioChannelMapping.property.inputChannelLevels"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputChannelLevel`](#aws-cdk-sdk.medialive.MediaLiveInputChannelLevel)[]

---

##### `outputChannel`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioChannelMapping.property.outputChannel"></a>

- *Type:* `number`

---

### MediaLiveAudioCodecSettings <a name="aws-cdk-sdk.medialive.MediaLiveAudioCodecSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAudioCodecSettings: medialive.MediaLiveAudioCodecSettings = { ... }
```

##### `aacSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioCodecSettings.property.aacSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAacSettings`](#aws-cdk-sdk.medialive.MediaLiveAacSettings)

---

##### `ac3Settings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioCodecSettings.property.ac3Settings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAc3Settings`](#aws-cdk-sdk.medialive.MediaLiveAc3Settings)

---

##### `eac3Settings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioCodecSettings.property.eac3Settings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveEac3Settings`](#aws-cdk-sdk.medialive.MediaLiveEac3Settings)

---

##### `mp2Settings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioCodecSettings.property.mp2Settings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMp2Settings`](#aws-cdk-sdk.medialive.MediaLiveMp2Settings)

---

##### `passThroughSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioCodecSettings.property.passThroughSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePassThroughSettings`](#aws-cdk-sdk.medialive.MediaLivePassThroughSettings)

---

##### `wavSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioCodecSettings.property.wavSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveWavSettings`](#aws-cdk-sdk.medialive.MediaLiveWavSettings)

---

### MediaLiveAudioDescription <a name="aws-cdk-sdk.medialive.MediaLiveAudioDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAudioDescription: medialive.MediaLiveAudioDescription = { ... }
```

##### `audioSelectorName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioDescription.property.audioSelectorName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioDescription.property.name"></a>

- *Type:* `string`

---

##### `audioNormalizationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioDescription.property.audioNormalizationSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioNormalizationSettings`](#aws-cdk-sdk.medialive.MediaLiveAudioNormalizationSettings)

---

##### `audioType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioDescription.property.audioType"></a>

- *Type:* `string`

---

##### `audioTypeControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioDescription.property.audioTypeControl"></a>

- *Type:* `string`

---

##### `codecSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioDescription.property.codecSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioCodecSettings`](#aws-cdk-sdk.medialive.MediaLiveAudioCodecSettings)

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioDescription.property.languageCode"></a>

- *Type:* `string`

---

##### `languageCodeControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioDescription.property.languageCodeControl"></a>

- *Type:* `string`

---

##### `remixSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioDescription.property.remixSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveRemixSettings`](#aws-cdk-sdk.medialive.MediaLiveRemixSettings)

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioDescription.property.streamName"></a>

- *Type:* `string`

---

### MediaLiveAudioLanguageSelection <a name="aws-cdk-sdk.medialive.MediaLiveAudioLanguageSelection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAudioLanguageSelection: medialive.MediaLiveAudioLanguageSelection = { ... }
```

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioLanguageSelection.property.languageCode"></a>

- *Type:* `string`

---

##### `languageSelectionPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioLanguageSelection.property.languageSelectionPolicy"></a>

- *Type:* `string`

---

### MediaLiveAudioNormalizationSettings <a name="aws-cdk-sdk.medialive.MediaLiveAudioNormalizationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAudioNormalizationSettings: medialive.MediaLiveAudioNormalizationSettings = { ... }
```

##### `algorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioNormalizationSettings.property.algorithm"></a>

- *Type:* `string`

---

##### `algorithmControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioNormalizationSettings.property.algorithmControl"></a>

- *Type:* `string`

---

##### `targetLkfs`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioNormalizationSettings.property.targetLkfs"></a>

- *Type:* `number`

---

### MediaLiveAudioOnlyHlsSettings <a name="aws-cdk-sdk.medialive.MediaLiveAudioOnlyHlsSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAudioOnlyHlsSettings: medialive.MediaLiveAudioOnlyHlsSettings = { ... }
```

##### `audioGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioOnlyHlsSettings.property.audioGroupId"></a>

- *Type:* `string`

---

##### `audioOnlyImage`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioOnlyHlsSettings.property.audioOnlyImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputLocation`](#aws-cdk-sdk.medialive.MediaLiveInputLocation)

---

##### `audioTrackType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioOnlyHlsSettings.property.audioTrackType"></a>

- *Type:* `string`

---

##### `segmentType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioOnlyHlsSettings.property.segmentType"></a>

- *Type:* `string`

---

### MediaLiveAudioPidSelection <a name="aws-cdk-sdk.medialive.MediaLiveAudioPidSelection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAudioPidSelection: medialive.MediaLiveAudioPidSelection = { ... }
```

##### `pid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioPidSelection.property.pid"></a>

- *Type:* `number`

---

### MediaLiveAudioSelector <a name="aws-cdk-sdk.medialive.MediaLiveAudioSelector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAudioSelector: medialive.MediaLiveAudioSelector = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioSelector.property.name"></a>

- *Type:* `string`

---

##### `selectorSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioSelector.property.selectorSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioSelectorSettings`](#aws-cdk-sdk.medialive.MediaLiveAudioSelectorSettings)

---

### MediaLiveAudioSelectorSettings <a name="aws-cdk-sdk.medialive.MediaLiveAudioSelectorSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAudioSelectorSettings: medialive.MediaLiveAudioSelectorSettings = { ... }
```

##### `audioLanguageSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioSelectorSettings.property.audioLanguageSelection"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioLanguageSelection`](#aws-cdk-sdk.medialive.MediaLiveAudioLanguageSelection)

---

##### `audioPidSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioSelectorSettings.property.audioPidSelection"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioPidSelection`](#aws-cdk-sdk.medialive.MediaLiveAudioPidSelection)

---

##### `audioTrackSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioSelectorSettings.property.audioTrackSelection"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioTrackSelection`](#aws-cdk-sdk.medialive.MediaLiveAudioTrackSelection)

---

### MediaLiveAudioTrack <a name="aws-cdk-sdk.medialive.MediaLiveAudioTrack"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAudioTrack: medialive.MediaLiveAudioTrack = { ... }
```

##### `track`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioTrack.property.track"></a>

- *Type:* `number`

---

### MediaLiveAudioTrackSelection <a name="aws-cdk-sdk.medialive.MediaLiveAudioTrackSelection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAudioTrackSelection: medialive.MediaLiveAudioTrackSelection = { ... }
```

##### `tracks`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAudioTrackSelection.property.tracks"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioTrack`](#aws-cdk-sdk.medialive.MediaLiveAudioTrack)[]

---

### MediaLiveAutomaticInputFailoverSettings <a name="aws-cdk-sdk.medialive.MediaLiveAutomaticInputFailoverSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAutomaticInputFailoverSettings: medialive.MediaLiveAutomaticInputFailoverSettings = { ... }
```

##### `secondaryInputId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAutomaticInputFailoverSettings.property.secondaryInputId"></a>

- *Type:* `string`

---

##### `errorClearTimeMsec`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAutomaticInputFailoverSettings.property.errorClearTimeMsec"></a>

- *Type:* `number`

---

##### `failoverConditions`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAutomaticInputFailoverSettings.property.failoverConditions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveFailoverCondition`](#aws-cdk-sdk.medialive.MediaLiveFailoverCondition)[]

---

##### `inputPreference`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAutomaticInputFailoverSettings.property.inputPreference"></a>

- *Type:* `string`

---

### MediaLiveAvailBlanking <a name="aws-cdk-sdk.medialive.MediaLiveAvailBlanking"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAvailBlanking: medialive.MediaLiveAvailBlanking = { ... }
```

##### `availBlankingImage`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAvailBlanking.property.availBlankingImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputLocation`](#aws-cdk-sdk.medialive.MediaLiveInputLocation)

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAvailBlanking.property.state"></a>

- *Type:* `string`

---

### MediaLiveAvailConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveAvailConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAvailConfiguration: medialive.MediaLiveAvailConfiguration = { ... }
```

##### `availSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAvailConfiguration.property.availSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAvailSettings`](#aws-cdk-sdk.medialive.MediaLiveAvailSettings)

---

### MediaLiveAvailSettings <a name="aws-cdk-sdk.medialive.MediaLiveAvailSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveAvailSettings: medialive.MediaLiveAvailSettings = { ... }
```

##### `scte35SpliceInsert`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAvailSettings.property.scte35SpliceInsert"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScte35SpliceInsert`](#aws-cdk-sdk.medialive.MediaLiveScte35SpliceInsert)

---

##### `scte35TimeSignalApos`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveAvailSettings.property.scte35TimeSignalApos"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScte35TimeSignalApos`](#aws-cdk-sdk.medialive.MediaLiveScte35TimeSignalApos)

---

### MediaLiveBatchDeleteRequest <a name="aws-cdk-sdk.medialive.MediaLiveBatchDeleteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveBatchDeleteRequest: medialive.MediaLiveBatchDeleteRequest = { ... }
```

##### `channelIds`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchDeleteRequest.property.channelIds"></a>

- *Type:* `string`[]

---

##### `inputIds`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchDeleteRequest.property.inputIds"></a>

- *Type:* `string`[]

---

##### `inputSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchDeleteRequest.property.inputSecurityGroupIds"></a>

- *Type:* `string`[]

---

##### `multiplexIds`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchDeleteRequest.property.multiplexIds"></a>

- *Type:* `string`[]

---

### MediaLiveBatchDeleteResponse <a name="aws-cdk-sdk.medialive.MediaLiveBatchDeleteResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveBatchDeleteResponse: medialive.MediaLiveBatchDeleteResponse = { ... }
```

##### `failed`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchDeleteResponse.property.failed"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchFailedResultModel`](#aws-cdk-sdk.medialive.MediaLiveBatchFailedResultModel)[]

---

##### `successful`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchDeleteResponse.property.successful"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchSuccessfulResultModel`](#aws-cdk-sdk.medialive.MediaLiveBatchSuccessfulResultModel)[]

---

### MediaLiveBatchFailedResultModel <a name="aws-cdk-sdk.medialive.MediaLiveBatchFailedResultModel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveBatchFailedResultModel: medialive.MediaLiveBatchFailedResultModel = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchFailedResultModel.property.arn"></a>

- *Type:* `string`

---

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchFailedResultModel.property.code"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchFailedResultModel.property.id"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchFailedResultModel.property.message"></a>

- *Type:* `string`

---

### MediaLiveBatchScheduleActionCreateRequest <a name="aws-cdk-sdk.medialive.MediaLiveBatchScheduleActionCreateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveBatchScheduleActionCreateRequest: medialive.MediaLiveBatchScheduleActionCreateRequest = { ... }
```

##### `scheduleActions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchScheduleActionCreateRequest.property.scheduleActions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScheduleAction`](#aws-cdk-sdk.medialive.MediaLiveScheduleAction)[]

---

### MediaLiveBatchScheduleActionCreateResult <a name="aws-cdk-sdk.medialive.MediaLiveBatchScheduleActionCreateResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveBatchScheduleActionCreateResult: medialive.MediaLiveBatchScheduleActionCreateResult = { ... }
```

##### `scheduleActions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchScheduleActionCreateResult.property.scheduleActions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScheduleAction`](#aws-cdk-sdk.medialive.MediaLiveScheduleAction)[]

---

### MediaLiveBatchScheduleActionDeleteRequest <a name="aws-cdk-sdk.medialive.MediaLiveBatchScheduleActionDeleteRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveBatchScheduleActionDeleteRequest: medialive.MediaLiveBatchScheduleActionDeleteRequest = { ... }
```

##### `actionNames`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchScheduleActionDeleteRequest.property.actionNames"></a>

- *Type:* `string`[]

---

### MediaLiveBatchScheduleActionDeleteResult <a name="aws-cdk-sdk.medialive.MediaLiveBatchScheduleActionDeleteResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveBatchScheduleActionDeleteResult: medialive.MediaLiveBatchScheduleActionDeleteResult = { ... }
```

##### `scheduleActions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchScheduleActionDeleteResult.property.scheduleActions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScheduleAction`](#aws-cdk-sdk.medialive.MediaLiveScheduleAction)[]

---

### MediaLiveBatchStartRequest <a name="aws-cdk-sdk.medialive.MediaLiveBatchStartRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveBatchStartRequest: medialive.MediaLiveBatchStartRequest = { ... }
```

##### `channelIds`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchStartRequest.property.channelIds"></a>

- *Type:* `string`[]

---

##### `multiplexIds`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchStartRequest.property.multiplexIds"></a>

- *Type:* `string`[]

---

### MediaLiveBatchStartResponse <a name="aws-cdk-sdk.medialive.MediaLiveBatchStartResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveBatchStartResponse: medialive.MediaLiveBatchStartResponse = { ... }
```

##### `failed`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchStartResponse.property.failed"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchFailedResultModel`](#aws-cdk-sdk.medialive.MediaLiveBatchFailedResultModel)[]

---

##### `successful`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchStartResponse.property.successful"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchSuccessfulResultModel`](#aws-cdk-sdk.medialive.MediaLiveBatchSuccessfulResultModel)[]

---

### MediaLiveBatchStopRequest <a name="aws-cdk-sdk.medialive.MediaLiveBatchStopRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveBatchStopRequest: medialive.MediaLiveBatchStopRequest = { ... }
```

##### `channelIds`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchStopRequest.property.channelIds"></a>

- *Type:* `string`[]

---

##### `multiplexIds`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchStopRequest.property.multiplexIds"></a>

- *Type:* `string`[]

---

### MediaLiveBatchStopResponse <a name="aws-cdk-sdk.medialive.MediaLiveBatchStopResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveBatchStopResponse: medialive.MediaLiveBatchStopResponse = { ... }
```

##### `failed`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchStopResponse.property.failed"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchFailedResultModel`](#aws-cdk-sdk.medialive.MediaLiveBatchFailedResultModel)[]

---

##### `successful`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchStopResponse.property.successful"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchSuccessfulResultModel`](#aws-cdk-sdk.medialive.MediaLiveBatchSuccessfulResultModel)[]

---

### MediaLiveBatchSuccessfulResultModel <a name="aws-cdk-sdk.medialive.MediaLiveBatchSuccessfulResultModel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveBatchSuccessfulResultModel: medialive.MediaLiveBatchSuccessfulResultModel = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchSuccessfulResultModel.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchSuccessfulResultModel.property.id"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchSuccessfulResultModel.property.state"></a>

- *Type:* `string`

---

### MediaLiveBatchUpdateScheduleRequest <a name="aws-cdk-sdk.medialive.MediaLiveBatchUpdateScheduleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveBatchUpdateScheduleRequest: medialive.MediaLiveBatchUpdateScheduleRequest = { ... }
```

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchUpdateScheduleRequest.property.channelId"></a>

- *Type:* `string`

---

##### `creates`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchUpdateScheduleRequest.property.creates"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchScheduleActionCreateRequest`](#aws-cdk-sdk.medialive.MediaLiveBatchScheduleActionCreateRequest)

---

##### `deletes`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchUpdateScheduleRequest.property.deletes"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchScheduleActionDeleteRequest`](#aws-cdk-sdk.medialive.MediaLiveBatchScheduleActionDeleteRequest)

---

### MediaLiveBatchUpdateScheduleResponse <a name="aws-cdk-sdk.medialive.MediaLiveBatchUpdateScheduleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveBatchUpdateScheduleResponse: medialive.MediaLiveBatchUpdateScheduleResponse = { ... }
```

##### `creates`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchUpdateScheduleResponse.property.creates"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchScheduleActionCreateResult`](#aws-cdk-sdk.medialive.MediaLiveBatchScheduleActionCreateResult)

---

##### `deletes`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBatchUpdateScheduleResponse.property.deletes"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchScheduleActionDeleteResult`](#aws-cdk-sdk.medialive.MediaLiveBatchScheduleActionDeleteResult)

---

### MediaLiveBlackoutSlate <a name="aws-cdk-sdk.medialive.MediaLiveBlackoutSlate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveBlackoutSlate: medialive.MediaLiveBlackoutSlate = { ... }
```

##### `blackoutSlateImage`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBlackoutSlate.property.blackoutSlateImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputLocation`](#aws-cdk-sdk.medialive.MediaLiveInputLocation)

---

##### `networkEndBlackout`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBlackoutSlate.property.networkEndBlackout"></a>

- *Type:* `string`

---

##### `networkEndBlackoutImage`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBlackoutSlate.property.networkEndBlackoutImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputLocation`](#aws-cdk-sdk.medialive.MediaLiveInputLocation)

---

##### `networkId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBlackoutSlate.property.networkId"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBlackoutSlate.property.state"></a>

- *Type:* `string`

---

### MediaLiveBurnInDestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveBurnInDestinationSettings: medialive.MediaLiveBurnInDestinationSettings = { ... }
```

##### `alignment`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings.property.alignment"></a>

- *Type:* `string`

---

##### `backgroundColor`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings.property.backgroundColor"></a>

- *Type:* `string`

---

##### `backgroundOpacity`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings.property.backgroundOpacity"></a>

- *Type:* `number`

---

##### `font`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings.property.font"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputLocation`](#aws-cdk-sdk.medialive.MediaLiveInputLocation)

---

##### `fontColor`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings.property.fontColor"></a>

- *Type:* `string`

---

##### `fontOpacity`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings.property.fontOpacity"></a>

- *Type:* `number`

---

##### `fontResolution`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings.property.fontResolution"></a>

- *Type:* `number`

---

##### `fontSize`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings.property.fontSize"></a>

- *Type:* `string`

---

##### `outlineColor`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings.property.outlineColor"></a>

- *Type:* `string`

---

##### `outlineSize`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings.property.outlineSize"></a>

- *Type:* `number`

---

##### `shadowColor`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings.property.shadowColor"></a>

- *Type:* `string`

---

##### `shadowOpacity`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings.property.shadowOpacity"></a>

- *Type:* `number`

---

##### `shadowXOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings.property.shadowXOffset"></a>

- *Type:* `number`

---

##### `shadowYOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings.property.shadowYOffset"></a>

- *Type:* `number`

---

##### `teletextGridControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings.property.teletextGridControl"></a>

- *Type:* `string`

---

##### `xPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings.property.xPosition"></a>

- *Type:* `number`

---

##### `yPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings.property.yPosition"></a>

- *Type:* `number`

---

### MediaLiveCancelInputDeviceTransferRequest <a name="aws-cdk-sdk.medialive.MediaLiveCancelInputDeviceTransferRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCancelInputDeviceTransferRequest: medialive.MediaLiveCancelInputDeviceTransferRequest = { ... }
```

##### `inputDeviceId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCancelInputDeviceTransferRequest.property.inputDeviceId"></a>

- *Type:* `string`

---

### MediaLiveCancelInputDeviceTransferResponse <a name="aws-cdk-sdk.medialive.MediaLiveCancelInputDeviceTransferResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCancelInputDeviceTransferResponse: medialive.MediaLiveCancelInputDeviceTransferResponse = { ... }
```

### MediaLiveCaptionDescription <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCaptionDescription: medialive.MediaLiveCaptionDescription = { ... }
```

##### `captionSelectorName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDescription.property.captionSelectorName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDescription.property.name"></a>

- *Type:* `string`

---

##### `destinationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDescription.property.destinationSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCaptionDestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveCaptionDestinationSettings)

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDescription.property.languageCode"></a>

- *Type:* `string`

---

##### `languageDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDescription.property.languageDescription"></a>

- *Type:* `string`

---

### MediaLiveCaptionDestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCaptionDestinationSettings: medialive.MediaLiveCaptionDestinationSettings = { ... }
```

##### `aribDestinationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDestinationSettings.property.aribDestinationSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAribDestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveAribDestinationSettings)

---

##### `burnInDestinationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDestinationSettings.property.burnInDestinationSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveBurnInDestinationSettings)

---

##### `dvbSubDestinationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDestinationSettings.property.dvbSubDestinationSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings)

---

##### `ebuTtDDestinationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDestinationSettings.property.ebuTtDDestinationSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveEbuTtDDestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveEbuTtDDestinationSettings)

---

##### `embeddedDestinationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDestinationSettings.property.embeddedDestinationSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveEmbeddedDestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveEmbeddedDestinationSettings)

---

##### `embeddedPlusScte20DestinationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDestinationSettings.property.embeddedPlusScte20DestinationSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveEmbeddedPlusScte20DestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveEmbeddedPlusScte20DestinationSettings)

---

##### `rtmpCaptionInfoDestinationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDestinationSettings.property.rtmpCaptionInfoDestinationSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveRtmpCaptionInfoDestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveRtmpCaptionInfoDestinationSettings)

---

##### `scte20PlusEmbeddedDestinationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDestinationSettings.property.scte20PlusEmbeddedDestinationSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScte20PlusEmbeddedDestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveScte20PlusEmbeddedDestinationSettings)

---

##### `scte27DestinationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDestinationSettings.property.scte27DestinationSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScte27DestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveScte27DestinationSettings)

---

##### `smpteTtDestinationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDestinationSettings.property.smpteTtDestinationSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveSmpteTtDestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveSmpteTtDestinationSettings)

---

##### `teletextDestinationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDestinationSettings.property.teletextDestinationSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveTeletextDestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveTeletextDestinationSettings)

---

##### `ttmlDestinationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDestinationSettings.property.ttmlDestinationSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveTtmlDestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveTtmlDestinationSettings)

---

##### `webvttDestinationSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionDestinationSettings.property.webvttDestinationSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveWebvttDestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveWebvttDestinationSettings)

---

### MediaLiveCaptionLanguageMapping <a name="aws-cdk-sdk.medialive.MediaLiveCaptionLanguageMapping"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCaptionLanguageMapping: medialive.MediaLiveCaptionLanguageMapping = { ... }
```

##### `captionChannel`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionLanguageMapping.property.captionChannel"></a>

- *Type:* `number`

---

##### `languageCode`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionLanguageMapping.property.languageCode"></a>

- *Type:* `string`

---

##### `languageDescription`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionLanguageMapping.property.languageDescription"></a>

- *Type:* `string`

---

### MediaLiveCaptionSelector <a name="aws-cdk-sdk.medialive.MediaLiveCaptionSelector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCaptionSelector: medialive.MediaLiveCaptionSelector = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionSelector.property.name"></a>

- *Type:* `string`

---

##### `languageCode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionSelector.property.languageCode"></a>

- *Type:* `string`

---

##### `selectorSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionSelector.property.selectorSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCaptionSelectorSettings`](#aws-cdk-sdk.medialive.MediaLiveCaptionSelectorSettings)

---

### MediaLiveCaptionSelectorSettings <a name="aws-cdk-sdk.medialive.MediaLiveCaptionSelectorSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCaptionSelectorSettings: medialive.MediaLiveCaptionSelectorSettings = { ... }
```

##### `ancillarySourceSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionSelectorSettings.property.ancillarySourceSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAncillarySourceSettings`](#aws-cdk-sdk.medialive.MediaLiveAncillarySourceSettings)

---

##### `aribSourceSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionSelectorSettings.property.aribSourceSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAribSourceSettings`](#aws-cdk-sdk.medialive.MediaLiveAribSourceSettings)

---

##### `dvbSubSourceSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionSelectorSettings.property.dvbSubSourceSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDvbSubSourceSettings`](#aws-cdk-sdk.medialive.MediaLiveDvbSubSourceSettings)

---

##### `embeddedSourceSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionSelectorSettings.property.embeddedSourceSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveEmbeddedSourceSettings`](#aws-cdk-sdk.medialive.MediaLiveEmbeddedSourceSettings)

---

##### `scte20SourceSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionSelectorSettings.property.scte20SourceSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScte20SourceSettings`](#aws-cdk-sdk.medialive.MediaLiveScte20SourceSettings)

---

##### `scte27SourceSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionSelectorSettings.property.scte27SourceSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScte27SourceSettings`](#aws-cdk-sdk.medialive.MediaLiveScte27SourceSettings)

---

##### `teletextSourceSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCaptionSelectorSettings.property.teletextSourceSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveTeletextSourceSettings`](#aws-cdk-sdk.medialive.MediaLiveTeletextSourceSettings)

---

### MediaLiveCdiInputSpecification <a name="aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCdiInputSpecification: medialive.MediaLiveCdiInputSpecification = { ... }
```

##### `resolution`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification.property.resolution"></a>

- *Type:* `string`

---

### MediaLiveChannel <a name="aws-cdk-sdk.medialive.MediaLiveChannel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveChannel: medialive.MediaLiveChannel = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannel.property.arn"></a>

- *Type:* `string`

---

##### `cdiInputSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannel.property.cdiInputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification)

---

##### `channelClass`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannel.property.channelClass"></a>

- *Type:* `string`

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannel.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveOutputDestination)[]

---

##### `egressEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannel.property.egressEndpoints"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint`](#aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint)[]

---

##### `encoderSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannel.property.encoderSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveEncoderSettings`](#aws-cdk-sdk.medialive.MediaLiveEncoderSettings)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannel.property.id"></a>

- *Type:* `string`

---

##### `inputAttachments`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannel.property.inputAttachments"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputAttachment`](#aws-cdk-sdk.medialive.MediaLiveInputAttachment)[]

---

##### `inputSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannel.property.inputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveInputSpecification)

---

##### `logLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannel.property.logLevel"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannel.property.name"></a>

- *Type:* `string`

---

##### `pipelineDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannel.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePipelineDetail`](#aws-cdk-sdk.medialive.MediaLivePipelineDetail)[]

---

##### `pipelinesRunningCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannel.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannel.property.roleArn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannel.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannel.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaLiveChannelEgressEndpoint <a name="aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveChannelEgressEndpoint: medialive.MediaLiveChannelEgressEndpoint = { ... }
```

##### `sourceIp`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint.property.sourceIp"></a>

- *Type:* `string`

---

### MediaLiveChannelSummary <a name="aws-cdk-sdk.medialive.MediaLiveChannelSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveChannelSummary: medialive.MediaLiveChannelSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannelSummary.property.arn"></a>

- *Type:* `string`

---

##### `cdiInputSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannelSummary.property.cdiInputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification)

---

##### `channelClass`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannelSummary.property.channelClass"></a>

- *Type:* `string`

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannelSummary.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveOutputDestination)[]

---

##### `egressEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannelSummary.property.egressEndpoints"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint`](#aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannelSummary.property.id"></a>

- *Type:* `string`

---

##### `inputAttachments`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannelSummary.property.inputAttachments"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputAttachment`](#aws-cdk-sdk.medialive.MediaLiveInputAttachment)[]

---

##### `inputSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannelSummary.property.inputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveInputSpecification)

---

##### `logLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannelSummary.property.logLevel"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannelSummary.property.name"></a>

- *Type:* `string`

---

##### `pipelinesRunningCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannelSummary.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannelSummary.property.roleArn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannelSummary.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveChannelSummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaLiveColorSpacePassthroughSettings <a name="aws-cdk-sdk.medialive.MediaLiveColorSpacePassthroughSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveColorSpacePassthroughSettings: medialive.MediaLiveColorSpacePassthroughSettings = { ... }
```

### MediaLiveCreateChannelRequest <a name="aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCreateChannelRequest: medialive.MediaLiveCreateChannelRequest = { ... }
```

##### `cdiInputSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest.property.cdiInputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification)

---

##### `channelClass`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest.property.channelClass"></a>

- *Type:* `string`

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveOutputDestination)[]

---

##### `encoderSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest.property.encoderSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveEncoderSettings`](#aws-cdk-sdk.medialive.MediaLiveEncoderSettings)

---

##### `inputAttachments`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest.property.inputAttachments"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputAttachment`](#aws-cdk-sdk.medialive.MediaLiveInputAttachment)[]

---

##### `inputSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest.property.inputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveInputSpecification)

---

##### `logLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest.property.logLevel"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest.property.name"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest.property.requestId"></a>

- *Type:* `string`

---

##### `reserved`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest.property.reserved"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaLiveCreateChannelResponse <a name="aws-cdk-sdk.medialive.MediaLiveCreateChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCreateChannelResponse: medialive.MediaLiveCreateChannelResponse = { ... }
```

##### `channel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateChannelResponse.property.channel"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannel`](#aws-cdk-sdk.medialive.MediaLiveChannel)

---

### MediaLiveCreateInputRequest <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCreateInputRequest: medialive.MediaLiveCreateInputRequest = { ... }
```

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputRequest.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDestinationRequest`](#aws-cdk-sdk.medialive.MediaLiveInputDestinationRequest)[]

---

##### `inputDevices`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputRequest.property.inputDevices"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDeviceSettings`](#aws-cdk-sdk.medialive.MediaLiveInputDeviceSettings)[]

---

##### `inputSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputRequest.property.inputSecurityGroups"></a>

- *Type:* `string`[]

---

##### `mediaConnectFlows`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputRequest.property.mediaConnectFlows"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMediaConnectFlowRequest`](#aws-cdk-sdk.medialive.MediaLiveMediaConnectFlowRequest)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputRequest.property.name"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputRequest.property.requestId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputRequest.property.sources"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSourceRequest`](#aws-cdk-sdk.medialive.MediaLiveInputSourceRequest)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputRequest.property.type"></a>

- *Type:* `string`

---

##### `vpc`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputRequest.property.vpc"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputVpcRequest`](#aws-cdk-sdk.medialive.MediaLiveInputVpcRequest)

---

### MediaLiveCreateInputResponse <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCreateInputResponse: medialive.MediaLiveCreateInputResponse = { ... }
```

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputResponse.property.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInput`](#aws-cdk-sdk.medialive.MediaLiveInput)

---

### MediaLiveCreateInputSecurityGroupRequest <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputSecurityGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCreateInputSecurityGroupRequest: medialive.MediaLiveCreateInputSecurityGroupRequest = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputSecurityGroupRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `whitelistRules`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputSecurityGroupRequest.property.whitelistRules"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputWhitelistRuleCidr`](#aws-cdk-sdk.medialive.MediaLiveInputWhitelistRuleCidr)[]

---

### MediaLiveCreateInputSecurityGroupResponse <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputSecurityGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCreateInputSecurityGroupResponse: medialive.MediaLiveCreateInputSecurityGroupResponse = { ... }
```

##### `securityGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateInputSecurityGroupResponse.property.securityGroup"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSecurityGroup`](#aws-cdk-sdk.medialive.MediaLiveInputSecurityGroup)

---

### MediaLiveCreateMultiplexProgramRequest <a name="aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCreateMultiplexProgramRequest: medialive.MediaLiveCreateMultiplexProgramRequest = { ... }
```

##### `multiplexId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest.property.multiplexId"></a>

- *Type:* `string`

---

##### `multiplexProgramSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest.property.multiplexProgramSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSettings)

---

##### `programName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest.property.programName"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest.property.requestId"></a>

- *Type:* `string`

---

### MediaLiveCreateMultiplexProgramResponse <a name="aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCreateMultiplexProgramResponse: medialive.MediaLiveCreateMultiplexProgramResponse = { ... }
```

##### `multiplexProgram`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramResponse.property.multiplexProgram"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgram`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgram)

---

### MediaLiveCreateMultiplexRequest <a name="aws-cdk-sdk.medialive.MediaLiveCreateMultiplexRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCreateMultiplexRequest: medialive.MediaLiveCreateMultiplexRequest = { ... }
```

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateMultiplexRequest.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `multiplexSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateMultiplexRequest.property.multiplexSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexSettings)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateMultiplexRequest.property.name"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateMultiplexRequest.property.requestId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateMultiplexRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaLiveCreateMultiplexResponse <a name="aws-cdk-sdk.medialive.MediaLiveCreateMultiplexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCreateMultiplexResponse: medialive.MediaLiveCreateMultiplexResponse = { ... }
```

##### `multiplex`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateMultiplexResponse.property.multiplex"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplex`](#aws-cdk-sdk.medialive.MediaLiveMultiplex)

---

### MediaLiveCreateTagsRequest <a name="aws-cdk-sdk.medialive.MediaLiveCreateTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveCreateTagsRequest: medialive.MediaLiveCreateTagsRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateTagsRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveCreateTagsRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaLiveDeleteChannelRequest <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDeleteChannelRequest: medialive.MediaLiveDeleteChannelRequest = { ... }
```

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest.property.channelId"></a>

- *Type:* `string`

---

### MediaLiveDeleteChannelResponse <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDeleteChannelResponse: medialive.MediaLiveDeleteChannelResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelResponse.property.arn"></a>

- *Type:* `string`

---

##### `cdiInputSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelResponse.property.cdiInputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification)

---

##### `channelClass`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelResponse.property.channelClass"></a>

- *Type:* `string`

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelResponse.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveOutputDestination)[]

---

##### `egressEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelResponse.property.egressEndpoints"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint`](#aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint)[]

---

##### `encoderSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelResponse.property.encoderSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveEncoderSettings`](#aws-cdk-sdk.medialive.MediaLiveEncoderSettings)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelResponse.property.id"></a>

- *Type:* `string`

---

##### `inputAttachments`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelResponse.property.inputAttachments"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputAttachment`](#aws-cdk-sdk.medialive.MediaLiveInputAttachment)[]

---

##### `inputSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelResponse.property.inputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveInputSpecification)

---

##### `logLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelResponse.property.logLevel"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelResponse.property.name"></a>

- *Type:* `string`

---

##### `pipelineDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelResponse.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePipelineDetail`](#aws-cdk-sdk.medialive.MediaLivePipelineDetail)[]

---

##### `pipelinesRunningCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelResponse.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelResponse.property.roleArn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelResponse.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteChannelResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaLiveDeleteInputRequest <a name="aws-cdk-sdk.medialive.MediaLiveDeleteInputRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDeleteInputRequest: medialive.MediaLiveDeleteInputRequest = { ... }
```

##### `inputId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteInputRequest.property.inputId"></a>

- *Type:* `string`

---

### MediaLiveDeleteInputResponse <a name="aws-cdk-sdk.medialive.MediaLiveDeleteInputResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDeleteInputResponse: medialive.MediaLiveDeleteInputResponse = { ... }
```

### MediaLiveDeleteInputSecurityGroupRequest <a name="aws-cdk-sdk.medialive.MediaLiveDeleteInputSecurityGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDeleteInputSecurityGroupRequest: medialive.MediaLiveDeleteInputSecurityGroupRequest = { ... }
```

##### `inputSecurityGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteInputSecurityGroupRequest.property.inputSecurityGroupId"></a>

- *Type:* `string`

---

### MediaLiveDeleteInputSecurityGroupResponse <a name="aws-cdk-sdk.medialive.MediaLiveDeleteInputSecurityGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDeleteInputSecurityGroupResponse: medialive.MediaLiveDeleteInputSecurityGroupResponse = { ... }
```

### MediaLiveDeleteMultiplexProgramRequest <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDeleteMultiplexProgramRequest: medialive.MediaLiveDeleteMultiplexProgramRequest = { ... }
```

##### `multiplexId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramRequest.property.multiplexId"></a>

- *Type:* `string`

---

##### `programName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramRequest.property.programName"></a>

- *Type:* `string`

---

### MediaLiveDeleteMultiplexProgramResponse <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDeleteMultiplexProgramResponse: medialive.MediaLiveDeleteMultiplexProgramResponse = { ... }
```

##### `channelId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramResponse.property.channelId"></a>

- *Type:* `string`

---

##### `multiplexProgramSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramResponse.property.multiplexProgramSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSettings)

---

##### `packetIdentifiersMap`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramResponse.property.packetIdentifiersMap"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap)

---

##### `pipelineDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramResponse.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPipelineDetail`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPipelineDetail)[]

---

##### `programName`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramResponse.property.programName"></a>

- *Type:* `string`

---

### MediaLiveDeleteMultiplexRequest <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDeleteMultiplexRequest: medialive.MediaLiveDeleteMultiplexRequest = { ... }
```

##### `multiplexId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexRequest.property.multiplexId"></a>

- *Type:* `string`

---

### MediaLiveDeleteMultiplexResponse <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDeleteMultiplexResponse: medialive.MediaLiveDeleteMultiplexResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexResponse.property.arn"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexResponse.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexResponse.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexResponse.property.id"></a>

- *Type:* `string`

---

##### `multiplexSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexResponse.property.multiplexSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexSettings)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexResponse.property.name"></a>

- *Type:* `string`

---

##### `pipelinesRunningCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexResponse.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `programCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexResponse.property.programCount"></a>

- *Type:* `number`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexResponse.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaLiveDeleteReservationRequest <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDeleteReservationRequest: medialive.MediaLiveDeleteReservationRequest = { ... }
```

##### `reservationId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationRequest.property.reservationId"></a>

- *Type:* `string`

---

### MediaLiveDeleteReservationResponse <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDeleteReservationResponse: medialive.MediaLiveDeleteReservationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.arn"></a>

- *Type:* `string`

---

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.count"></a>

- *Type:* `number`

---

##### `currencyCode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.duration"></a>

- *Type:* `number`

---

##### `durationUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.durationUnits"></a>

- *Type:* `string`

---

##### `end`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.end"></a>

- *Type:* `string`

---

##### `fixedPrice`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.fixedPrice"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.name"></a>

- *Type:* `string`

---

##### `offeringDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.offeringDescription"></a>

- *Type:* `string`

---

##### `offeringId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.offeringId"></a>

- *Type:* `string`

---

##### `offeringType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.offeringType"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.region"></a>

- *Type:* `string`

---

##### `reservationId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.reservationId"></a>

- *Type:* `string`

---

##### `resourceSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.resourceSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification`](#aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification)

---

##### `start`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.start"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `usagePrice`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteReservationResponse.property.usagePrice"></a>

- *Type:* `number`

---

### MediaLiveDeleteScheduleRequest <a name="aws-cdk-sdk.medialive.MediaLiveDeleteScheduleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDeleteScheduleRequest: medialive.MediaLiveDeleteScheduleRequest = { ... }
```

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteScheduleRequest.property.channelId"></a>

- *Type:* `string`

---

### MediaLiveDeleteScheduleResponse <a name="aws-cdk-sdk.medialive.MediaLiveDeleteScheduleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDeleteScheduleResponse: medialive.MediaLiveDeleteScheduleResponse = { ... }
```

### MediaLiveDeleteTagsRequest <a name="aws-cdk-sdk.medialive.MediaLiveDeleteTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDeleteTagsRequest: medialive.MediaLiveDeleteTagsRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteTagsRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDeleteTagsRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### MediaLiveDescribeChannelRequest <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeChannelRequest: medialive.MediaLiveDescribeChannelRequest = { ... }
```

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest.property.channelId"></a>

- *Type:* `string`

---

### MediaLiveDescribeChannelResponse <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeChannelResponse: medialive.MediaLiveDescribeChannelResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelResponse.property.arn"></a>

- *Type:* `string`

---

##### `cdiInputSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelResponse.property.cdiInputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification)

---

##### `channelClass`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelResponse.property.channelClass"></a>

- *Type:* `string`

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelResponse.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveOutputDestination)[]

---

##### `egressEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelResponse.property.egressEndpoints"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint`](#aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint)[]

---

##### `encoderSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelResponse.property.encoderSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveEncoderSettings`](#aws-cdk-sdk.medialive.MediaLiveEncoderSettings)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelResponse.property.id"></a>

- *Type:* `string`

---

##### `inputAttachments`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelResponse.property.inputAttachments"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputAttachment`](#aws-cdk-sdk.medialive.MediaLiveInputAttachment)[]

---

##### `inputSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelResponse.property.inputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveInputSpecification)

---

##### `logLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelResponse.property.logLevel"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelResponse.property.name"></a>

- *Type:* `string`

---

##### `pipelineDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelResponse.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePipelineDetail`](#aws-cdk-sdk.medialive.MediaLivePipelineDetail)[]

---

##### `pipelinesRunningCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelResponse.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelResponse.property.roleArn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelResponse.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeChannelResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaLiveDescribeInputDeviceRequest <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeInputDeviceRequest: medialive.MediaLiveDescribeInputDeviceRequest = { ... }
```

##### `inputDeviceId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceRequest.property.inputDeviceId"></a>

- *Type:* `string`

---

### MediaLiveDescribeInputDeviceResponse <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeInputDeviceResponse: medialive.MediaLiveDescribeInputDeviceResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceResponse.property.arn"></a>

- *Type:* `string`

---

##### `connectionState`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceResponse.property.connectionState"></a>

- *Type:* `string`

---

##### `deviceSettingsSyncState`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceResponse.property.deviceSettingsSyncState"></a>

- *Type:* `string`

---

##### `deviceUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceResponse.property.deviceUpdateStatus"></a>

- *Type:* `string`

---

##### `hdDeviceSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceResponse.property.hdDeviceSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDeviceHdSettings`](#aws-cdk-sdk.medialive.MediaLiveInputDeviceHdSettings)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceResponse.property.id"></a>

- *Type:* `string`

---

##### `macAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceResponse.property.macAddress"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceResponse.property.name"></a>

- *Type:* `string`

---

##### `networkSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceResponse.property.networkSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDeviceNetworkSettings`](#aws-cdk-sdk.medialive.MediaLiveInputDeviceNetworkSettings)

---

##### `serialNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceResponse.property.serialNumber"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceResponse.property.type"></a>

- *Type:* `string`

---

### MediaLiveDescribeInputDeviceThumbnailRequest <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceThumbnailRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeInputDeviceThumbnailRequest: medialive.MediaLiveDescribeInputDeviceThumbnailRequest = { ... }
```

##### `accept`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceThumbnailRequest.property.accept"></a>

- *Type:* `string`

---

##### `inputDeviceId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceThumbnailRequest.property.inputDeviceId"></a>

- *Type:* `string`

---

### MediaLiveDescribeInputDeviceThumbnailResponse <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceThumbnailResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeInputDeviceThumbnailResponse: medialive.MediaLiveDescribeInputDeviceThumbnailResponse = { ... }
```

##### `body`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceThumbnailResponse.property.body"></a>

- *Type:* `any`

---

##### `contentLength`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceThumbnailResponse.property.contentLength"></a>

- *Type:* `number`

---

##### `contentType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceThumbnailResponse.property.contentType"></a>

- *Type:* `string`

---

##### `eTag`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceThumbnailResponse.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceThumbnailResponse.property.lastModified"></a>

- *Type:* `string`

---

### MediaLiveDescribeInputRequest <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeInputRequest: medialive.MediaLiveDescribeInputRequest = { ... }
```

##### `inputId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputRequest.property.inputId"></a>

- *Type:* `string`

---

### MediaLiveDescribeInputResponse <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeInputResponse: medialive.MediaLiveDescribeInputResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputResponse.property.arn"></a>

- *Type:* `string`

---

##### `attachedChannels`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputResponse.property.attachedChannels"></a>

- *Type:* `string`[]

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputResponse.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDestination`](#aws-cdk-sdk.medialive.MediaLiveInputDestination)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputResponse.property.id"></a>

- *Type:* `string`

---

##### `inputClass`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputResponse.property.inputClass"></a>

- *Type:* `string`

---

##### `inputDevices`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputResponse.property.inputDevices"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDeviceSettings`](#aws-cdk-sdk.medialive.MediaLiveInputDeviceSettings)[]

---

##### `inputSourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputResponse.property.inputSourceType"></a>

- *Type:* `string`

---

##### `mediaConnectFlows`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputResponse.property.mediaConnectFlows"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMediaConnectFlow`](#aws-cdk-sdk.medialive.MediaLiveMediaConnectFlow)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputResponse.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputResponse.property.roleArn"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputResponse.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputResponse.property.sources"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSource`](#aws-cdk-sdk.medialive.MediaLiveInputSource)[]

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputResponse.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputResponse.property.type"></a>

- *Type:* `string`

---

### MediaLiveDescribeInputSecurityGroupRequest <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputSecurityGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeInputSecurityGroupRequest: medialive.MediaLiveDescribeInputSecurityGroupRequest = { ... }
```

##### `inputSecurityGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputSecurityGroupRequest.property.inputSecurityGroupId"></a>

- *Type:* `string`

---

### MediaLiveDescribeInputSecurityGroupResponse <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputSecurityGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeInputSecurityGroupResponse: medialive.MediaLiveDescribeInputSecurityGroupResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputSecurityGroupResponse.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputSecurityGroupResponse.property.id"></a>

- *Type:* `string`

---

##### `inputs`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputSecurityGroupResponse.property.inputs"></a>

- *Type:* `string`[]

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputSecurityGroupResponse.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputSecurityGroupResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `whitelistRules`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeInputSecurityGroupResponse.property.whitelistRules"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputWhitelistRule`](#aws-cdk-sdk.medialive.MediaLiveInputWhitelistRule)[]

---

### MediaLiveDescribeMultiplexProgramRequest <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeMultiplexProgramRequest: medialive.MediaLiveDescribeMultiplexProgramRequest = { ... }
```

##### `multiplexId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramRequest.property.multiplexId"></a>

- *Type:* `string`

---

##### `programName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramRequest.property.programName"></a>

- *Type:* `string`

---

### MediaLiveDescribeMultiplexProgramResponse <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeMultiplexProgramResponse: medialive.MediaLiveDescribeMultiplexProgramResponse = { ... }
```

##### `channelId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramResponse.property.channelId"></a>

- *Type:* `string`

---

##### `multiplexProgramSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramResponse.property.multiplexProgramSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSettings)

---

##### `packetIdentifiersMap`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramResponse.property.packetIdentifiersMap"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap)

---

##### `pipelineDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramResponse.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPipelineDetail`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPipelineDetail)[]

---

##### `programName`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramResponse.property.programName"></a>

- *Type:* `string`

---

### MediaLiveDescribeMultiplexRequest <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeMultiplexRequest: medialive.MediaLiveDescribeMultiplexRequest = { ... }
```

##### `multiplexId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexRequest.property.multiplexId"></a>

- *Type:* `string`

---

### MediaLiveDescribeMultiplexResponse <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeMultiplexResponse: medialive.MediaLiveDescribeMultiplexResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexResponse.property.arn"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexResponse.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexResponse.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexResponse.property.id"></a>

- *Type:* `string`

---

##### `multiplexSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexResponse.property.multiplexSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexSettings)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexResponse.property.name"></a>

- *Type:* `string`

---

##### `pipelinesRunningCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexResponse.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `programCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexResponse.property.programCount"></a>

- *Type:* `number`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexResponse.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaLiveDescribeOfferingRequest <a name="aws-cdk-sdk.medialive.MediaLiveDescribeOfferingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeOfferingRequest: medialive.MediaLiveDescribeOfferingRequest = { ... }
```

##### `offeringId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeOfferingRequest.property.offeringId"></a>

- *Type:* `string`

---

### MediaLiveDescribeOfferingResponse <a name="aws-cdk-sdk.medialive.MediaLiveDescribeOfferingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeOfferingResponse: medialive.MediaLiveDescribeOfferingResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeOfferingResponse.property.arn"></a>

- *Type:* `string`

---

##### `currencyCode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeOfferingResponse.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeOfferingResponse.property.duration"></a>

- *Type:* `number`

---

##### `durationUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeOfferingResponse.property.durationUnits"></a>

- *Type:* `string`

---

##### `fixedPrice`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeOfferingResponse.property.fixedPrice"></a>

- *Type:* `number`

---

##### `offeringDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeOfferingResponse.property.offeringDescription"></a>

- *Type:* `string`

---

##### `offeringId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeOfferingResponse.property.offeringId"></a>

- *Type:* `string`

---

##### `offeringType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeOfferingResponse.property.offeringType"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeOfferingResponse.property.region"></a>

- *Type:* `string`

---

##### `resourceSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeOfferingResponse.property.resourceSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification`](#aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification)

---

##### `usagePrice`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeOfferingResponse.property.usagePrice"></a>

- *Type:* `number`

---

### MediaLiveDescribeReservationRequest <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeReservationRequest: medialive.MediaLiveDescribeReservationRequest = { ... }
```

##### `reservationId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationRequest.property.reservationId"></a>

- *Type:* `string`

---

### MediaLiveDescribeReservationResponse <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeReservationResponse: medialive.MediaLiveDescribeReservationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.arn"></a>

- *Type:* `string`

---

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.count"></a>

- *Type:* `number`

---

##### `currencyCode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.duration"></a>

- *Type:* `number`

---

##### `durationUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.durationUnits"></a>

- *Type:* `string`

---

##### `end`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.end"></a>

- *Type:* `string`

---

##### `fixedPrice`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.fixedPrice"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.name"></a>

- *Type:* `string`

---

##### `offeringDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.offeringDescription"></a>

- *Type:* `string`

---

##### `offeringId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.offeringId"></a>

- *Type:* `string`

---

##### `offeringType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.offeringType"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.region"></a>

- *Type:* `string`

---

##### `reservationId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.reservationId"></a>

- *Type:* `string`

---

##### `resourceSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.resourceSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification`](#aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification)

---

##### `start`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.start"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `usagePrice`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeReservationResponse.property.usagePrice"></a>

- *Type:* `number`

---

### MediaLiveDescribeScheduleRequest <a name="aws-cdk-sdk.medialive.MediaLiveDescribeScheduleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeScheduleRequest: medialive.MediaLiveDescribeScheduleRequest = { ... }
```

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeScheduleRequest.property.channelId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeScheduleRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeScheduleRequest.property.nextToken"></a>

- *Type:* `string`

---

### MediaLiveDescribeScheduleResponse <a name="aws-cdk-sdk.medialive.MediaLiveDescribeScheduleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDescribeScheduleResponse: medialive.MediaLiveDescribeScheduleResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeScheduleResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `scheduleActions`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDescribeScheduleResponse.property.scheduleActions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScheduleAction`](#aws-cdk-sdk.medialive.MediaLiveScheduleAction)[]

---

### MediaLiveDvbNitSettings <a name="aws-cdk-sdk.medialive.MediaLiveDvbNitSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDvbNitSettings: medialive.MediaLiveDvbNitSettings = { ... }
```

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbNitSettings.property.networkId"></a>

- *Type:* `number`

---

##### `networkName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbNitSettings.property.networkName"></a>

- *Type:* `string`

---

##### `repInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbNitSettings.property.repInterval"></a>

- *Type:* `number`

---

### MediaLiveDvbSdtSettings <a name="aws-cdk-sdk.medialive.MediaLiveDvbSdtSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDvbSdtSettings: medialive.MediaLiveDvbSdtSettings = { ... }
```

##### `outputSdt`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSdtSettings.property.outputSdt"></a>

- *Type:* `string`

---

##### `repInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSdtSettings.property.repInterval"></a>

- *Type:* `number`

---

##### `serviceName`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSdtSettings.property.serviceName"></a>

- *Type:* `string`

---

##### `serviceProviderName`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSdtSettings.property.serviceProviderName"></a>

- *Type:* `string`

---

### MediaLiveDvbSubDestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDvbSubDestinationSettings: medialive.MediaLiveDvbSubDestinationSettings = { ... }
```

##### `alignment`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings.property.alignment"></a>

- *Type:* `string`

---

##### `backgroundColor`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings.property.backgroundColor"></a>

- *Type:* `string`

---

##### `backgroundOpacity`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings.property.backgroundOpacity"></a>

- *Type:* `number`

---

##### `font`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings.property.font"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputLocation`](#aws-cdk-sdk.medialive.MediaLiveInputLocation)

---

##### `fontColor`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings.property.fontColor"></a>

- *Type:* `string`

---

##### `fontOpacity`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings.property.fontOpacity"></a>

- *Type:* `number`

---

##### `fontResolution`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings.property.fontResolution"></a>

- *Type:* `number`

---

##### `fontSize`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings.property.fontSize"></a>

- *Type:* `string`

---

##### `outlineColor`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings.property.outlineColor"></a>

- *Type:* `string`

---

##### `outlineSize`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings.property.outlineSize"></a>

- *Type:* `number`

---

##### `shadowColor`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings.property.shadowColor"></a>

- *Type:* `string`

---

##### `shadowOpacity`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings.property.shadowOpacity"></a>

- *Type:* `number`

---

##### `shadowXOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings.property.shadowXOffset"></a>

- *Type:* `number`

---

##### `shadowYOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings.property.shadowYOffset"></a>

- *Type:* `number`

---

##### `teletextGridControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings.property.teletextGridControl"></a>

- *Type:* `string`

---

##### `xPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings.property.xPosition"></a>

- *Type:* `number`

---

##### `yPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubDestinationSettings.property.yPosition"></a>

- *Type:* `number`

---

### MediaLiveDvbSubSourceSettings <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubSourceSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDvbSubSourceSettings: medialive.MediaLiveDvbSubSourceSettings = { ... }
```

##### `pid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbSubSourceSettings.property.pid"></a>

- *Type:* `number`

---

### MediaLiveDvbTdtSettings <a name="aws-cdk-sdk.medialive.MediaLiveDvbTdtSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveDvbTdtSettings: medialive.MediaLiveDvbTdtSettings = { ... }
```

##### `repInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveDvbTdtSettings.property.repInterval"></a>

- *Type:* `number`

---

### MediaLiveEac3Settings <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveEac3Settings: medialive.MediaLiveEac3Settings = { ... }
```

##### `attenuationControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.attenuationControl"></a>

- *Type:* `string`

---

##### `bitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.bitrate"></a>

- *Type:* `number`

---

##### `bitstreamMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.bitstreamMode"></a>

- *Type:* `string`

---

##### `codingMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.codingMode"></a>

- *Type:* `string`

---

##### `dcFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.dcFilter"></a>

- *Type:* `string`

---

##### `dialnorm`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.dialnorm"></a>

- *Type:* `number`

---

##### `drcLine`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.drcLine"></a>

- *Type:* `string`

---

##### `drcRf`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.drcRf"></a>

- *Type:* `string`

---

##### `lfeControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.lfeControl"></a>

- *Type:* `string`

---

##### `lfeFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.lfeFilter"></a>

- *Type:* `string`

---

##### `loRoCenterMixLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.loRoCenterMixLevel"></a>

- *Type:* `number`

---

##### `loRoSurroundMixLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.loRoSurroundMixLevel"></a>

- *Type:* `number`

---

##### `ltRtCenterMixLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.ltRtCenterMixLevel"></a>

- *Type:* `number`

---

##### `ltRtSurroundMixLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.ltRtSurroundMixLevel"></a>

- *Type:* `number`

---

##### `metadataControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.metadataControl"></a>

- *Type:* `string`

---

##### `passthroughControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.passthroughControl"></a>

- *Type:* `string`

---

##### `phaseControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.phaseControl"></a>

- *Type:* `string`

---

##### `stereoDownmix`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.stereoDownmix"></a>

- *Type:* `string`

---

##### `surroundExMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.surroundExMode"></a>

- *Type:* `string`

---

##### `surroundMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEac3Settings.property.surroundMode"></a>

- *Type:* `string`

---

### MediaLiveEbuTtDDestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveEbuTtDDestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveEbuTtDDestinationSettings: medialive.MediaLiveEbuTtDDestinationSettings = { ... }
```

##### `fillLineGap`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEbuTtDDestinationSettings.property.fillLineGap"></a>

- *Type:* `string`

---

##### `fontFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEbuTtDDestinationSettings.property.fontFamily"></a>

- *Type:* `string`

---

##### `styleControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEbuTtDDestinationSettings.property.styleControl"></a>

- *Type:* `string`

---

### MediaLiveEmbeddedDestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveEmbeddedDestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveEmbeddedDestinationSettings: medialive.MediaLiveEmbeddedDestinationSettings = { ... }
```

### MediaLiveEmbeddedPlusScte20DestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveEmbeddedPlusScte20DestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveEmbeddedPlusScte20DestinationSettings: medialive.MediaLiveEmbeddedPlusScte20DestinationSettings = { ... }
```

### MediaLiveEmbeddedSourceSettings <a name="aws-cdk-sdk.medialive.MediaLiveEmbeddedSourceSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveEmbeddedSourceSettings: medialive.MediaLiveEmbeddedSourceSettings = { ... }
```

##### `convert608To708`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEmbeddedSourceSettings.property.convert608To708"></a>

- *Type:* `string`

---

##### `scte20Detection`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEmbeddedSourceSettings.property.scte20Detection"></a>

- *Type:* `string`

---

##### `source608ChannelNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEmbeddedSourceSettings.property.source608ChannelNumber"></a>

- *Type:* `number`

---

##### `source608TrackNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEmbeddedSourceSettings.property.source608TrackNumber"></a>

- *Type:* `number`

---

### MediaLiveEncoderSettings <a name="aws-cdk-sdk.medialive.MediaLiveEncoderSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveEncoderSettings: medialive.MediaLiveEncoderSettings = { ... }
```

##### `audioDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEncoderSettings.property.audioDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioDescription`](#aws-cdk-sdk.medialive.MediaLiveAudioDescription)[]

---

##### `outputGroups`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEncoderSettings.property.outputGroups"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputGroup`](#aws-cdk-sdk.medialive.MediaLiveOutputGroup)[]

---

##### `timecodeConfig`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEncoderSettings.property.timecodeConfig"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveTimecodeConfig`](#aws-cdk-sdk.medialive.MediaLiveTimecodeConfig)

---

##### `videoDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEncoderSettings.property.videoDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveVideoDescription`](#aws-cdk-sdk.medialive.MediaLiveVideoDescription)[]

---

##### `availBlanking`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEncoderSettings.property.availBlanking"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAvailBlanking`](#aws-cdk-sdk.medialive.MediaLiveAvailBlanking)

---

##### `availConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEncoderSettings.property.availConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAvailConfiguration`](#aws-cdk-sdk.medialive.MediaLiveAvailConfiguration)

---

##### `blackoutSlate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEncoderSettings.property.blackoutSlate"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBlackoutSlate`](#aws-cdk-sdk.medialive.MediaLiveBlackoutSlate)

---

##### `captionDescriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEncoderSettings.property.captionDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCaptionDescription`](#aws-cdk-sdk.medialive.MediaLiveCaptionDescription)[]

---

##### `featureActivations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEncoderSettings.property.featureActivations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveFeatureActivations`](#aws-cdk-sdk.medialive.MediaLiveFeatureActivations)

---

##### `globalConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEncoderSettings.property.globalConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveGlobalConfiguration`](#aws-cdk-sdk.medialive.MediaLiveGlobalConfiguration)

---

##### `nielsenConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveEncoderSettings.property.nielsenConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveNielsenConfiguration`](#aws-cdk-sdk.medialive.MediaLiveNielsenConfiguration)

---

### MediaLiveFailoverCondition <a name="aws-cdk-sdk.medialive.MediaLiveFailoverCondition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveFailoverCondition: medialive.MediaLiveFailoverCondition = { ... }
```

##### `failoverConditionSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveFailoverCondition.property.failoverConditionSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveFailoverConditionSettings`](#aws-cdk-sdk.medialive.MediaLiveFailoverConditionSettings)

---

### MediaLiveFailoverConditionSettings <a name="aws-cdk-sdk.medialive.MediaLiveFailoverConditionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveFailoverConditionSettings: medialive.MediaLiveFailoverConditionSettings = { ... }
```

##### `inputLossSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveFailoverConditionSettings.property.inputLossSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputLossFailoverSettings`](#aws-cdk-sdk.medialive.MediaLiveInputLossFailoverSettings)

---

### MediaLiveFeatureActivations <a name="aws-cdk-sdk.medialive.MediaLiveFeatureActivations"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveFeatureActivations: medialive.MediaLiveFeatureActivations = { ... }
```

##### `inputPrepareScheduleActions`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveFeatureActivations.property.inputPrepareScheduleActions"></a>

- *Type:* `string`

---

### MediaLiveFecOutputSettings <a name="aws-cdk-sdk.medialive.MediaLiveFecOutputSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveFecOutputSettings: medialive.MediaLiveFecOutputSettings = { ... }
```

##### `columnDepth`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveFecOutputSettings.property.columnDepth"></a>

- *Type:* `number`

---

##### `includeFec`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveFecOutputSettings.property.includeFec"></a>

- *Type:* `string`

---

##### `rowLength`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveFecOutputSettings.property.rowLength"></a>

- *Type:* `number`

---

### MediaLiveFixedModeScheduleActionStartSettings <a name="aws-cdk-sdk.medialive.MediaLiveFixedModeScheduleActionStartSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveFixedModeScheduleActionStartSettings: medialive.MediaLiveFixedModeScheduleActionStartSettings = { ... }
```

##### `time`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveFixedModeScheduleActionStartSettings.property.time"></a>

- *Type:* `string`

---

### MediaLiveFmp4HlsSettings <a name="aws-cdk-sdk.medialive.MediaLiveFmp4HlsSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveFmp4HlsSettings: medialive.MediaLiveFmp4HlsSettings = { ... }
```

##### `audioRenditionSets`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveFmp4HlsSettings.property.audioRenditionSets"></a>

- *Type:* `string`

---

##### `nielsenId3Behavior`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveFmp4HlsSettings.property.nielsenId3Behavior"></a>

- *Type:* `string`

---

##### `timedMetadataBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveFmp4HlsSettings.property.timedMetadataBehavior"></a>

- *Type:* `string`

---

### MediaLiveFollowModeScheduleActionStartSettings <a name="aws-cdk-sdk.medialive.MediaLiveFollowModeScheduleActionStartSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveFollowModeScheduleActionStartSettings: medialive.MediaLiveFollowModeScheduleActionStartSettings = { ... }
```

##### `followPoint`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveFollowModeScheduleActionStartSettings.property.followPoint"></a>

- *Type:* `string`

---

##### `referenceActionName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveFollowModeScheduleActionStartSettings.property.referenceActionName"></a>

- *Type:* `string`

---

### MediaLiveFrameCaptureGroupSettings <a name="aws-cdk-sdk.medialive.MediaLiveFrameCaptureGroupSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveFrameCaptureGroupSettings: medialive.MediaLiveFrameCaptureGroupSettings = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveFrameCaptureGroupSettings.property.destination"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputLocationRef`](#aws-cdk-sdk.medialive.MediaLiveOutputLocationRef)

---

### MediaLiveFrameCaptureOutputSettings <a name="aws-cdk-sdk.medialive.MediaLiveFrameCaptureOutputSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveFrameCaptureOutputSettings: medialive.MediaLiveFrameCaptureOutputSettings = { ... }
```

##### `nameModifier`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveFrameCaptureOutputSettings.property.nameModifier"></a>

- *Type:* `string`

---

### MediaLiveFrameCaptureSettings <a name="aws-cdk-sdk.medialive.MediaLiveFrameCaptureSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveFrameCaptureSettings: medialive.MediaLiveFrameCaptureSettings = { ... }
```

##### `captureInterval`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveFrameCaptureSettings.property.captureInterval"></a>

- *Type:* `number`

---

##### `captureIntervalUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveFrameCaptureSettings.property.captureIntervalUnits"></a>

- *Type:* `string`

---

### MediaLiveGlobalConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveGlobalConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveGlobalConfiguration: medialive.MediaLiveGlobalConfiguration = { ... }
```

##### `initialAudioGain`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveGlobalConfiguration.property.initialAudioGain"></a>

- *Type:* `number`

---

##### `inputEndAction`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveGlobalConfiguration.property.inputEndAction"></a>

- *Type:* `string`

---

##### `inputLossBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveGlobalConfiguration.property.inputLossBehavior"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputLossBehavior`](#aws-cdk-sdk.medialive.MediaLiveInputLossBehavior)

---

##### `outputLockingMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveGlobalConfiguration.property.outputLockingMode"></a>

- *Type:* `string`

---

##### `outputTimingSource`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveGlobalConfiguration.property.outputTimingSource"></a>

- *Type:* `string`

---

##### `supportLowFramerateInputs`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveGlobalConfiguration.property.supportLowFramerateInputs"></a>

- *Type:* `string`

---

### MediaLiveH264ColorSpaceSettings <a name="aws-cdk-sdk.medialive.MediaLiveH264ColorSpaceSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveH264ColorSpaceSettings: medialive.MediaLiveH264ColorSpaceSettings = { ... }
```

##### `colorSpacePassthroughSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264ColorSpaceSettings.property.colorSpacePassthroughSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveColorSpacePassthroughSettings`](#aws-cdk-sdk.medialive.MediaLiveColorSpacePassthroughSettings)

---

##### `rec601Settings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264ColorSpaceSettings.property.rec601Settings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveRec601Settings`](#aws-cdk-sdk.medialive.MediaLiveRec601Settings)

---

##### `rec709Settings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264ColorSpaceSettings.property.rec709Settings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveRec709Settings`](#aws-cdk-sdk.medialive.MediaLiveRec709Settings)

---

### MediaLiveH264FilterSettings <a name="aws-cdk-sdk.medialive.MediaLiveH264FilterSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveH264FilterSettings: medialive.MediaLiveH264FilterSettings = { ... }
```

##### `temporalFilterSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264FilterSettings.property.temporalFilterSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveTemporalFilterSettings`](#aws-cdk-sdk.medialive.MediaLiveTemporalFilterSettings)

---

### MediaLiveH264Settings <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveH264Settings: medialive.MediaLiveH264Settings = { ... }
```

##### `adaptiveQuantization`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.adaptiveQuantization"></a>

- *Type:* `string`

---

##### `afdSignaling`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.afdSignaling"></a>

- *Type:* `string`

---

##### `bitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.bitrate"></a>

- *Type:* `number`

---

##### `bufFillPct`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.bufFillPct"></a>

- *Type:* `number`

---

##### `bufSize`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.bufSize"></a>

- *Type:* `number`

---

##### `colorMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.colorMetadata"></a>

- *Type:* `string`

---

##### `colorSpaceSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.colorSpaceSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveH264ColorSpaceSettings`](#aws-cdk-sdk.medialive.MediaLiveH264ColorSpaceSettings)

---

##### `entropyEncoding`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.entropyEncoding"></a>

- *Type:* `string`

---

##### `filterSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.filterSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveH264FilterSettings`](#aws-cdk-sdk.medialive.MediaLiveH264FilterSettings)

---

##### `fixedAfd`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.fixedAfd"></a>

- *Type:* `string`

---

##### `flickerAq`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.flickerAq"></a>

- *Type:* `string`

---

##### `forceFieldPictures`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.forceFieldPictures"></a>

- *Type:* `string`

---

##### `framerateControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.framerateControl"></a>

- *Type:* `string`

---

##### `framerateDenominator`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.framerateDenominator"></a>

- *Type:* `number`

---

##### `framerateNumerator`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.framerateNumerator"></a>

- *Type:* `number`

---

##### `gopBReference`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.gopBReference"></a>

- *Type:* `string`

---

##### `gopClosedCadence`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.gopClosedCadence"></a>

- *Type:* `number`

---

##### `gopNumBFrames`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.gopNumBFrames"></a>

- *Type:* `number`

---

##### `gopSize`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.gopSize"></a>

- *Type:* `number`

---

##### `gopSizeUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.gopSizeUnits"></a>

- *Type:* `string`

---

##### `level`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.level"></a>

- *Type:* `string`

---

##### `lookAheadRateControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.lookAheadRateControl"></a>

- *Type:* `string`

---

##### `maxBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.maxBitrate"></a>

- *Type:* `number`

---

##### `minIInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.minIInterval"></a>

- *Type:* `number`

---

##### `numRefFrames`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.numRefFrames"></a>

- *Type:* `number`

---

##### `parControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.parControl"></a>

- *Type:* `string`

---

##### `parDenominator`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.parDenominator"></a>

- *Type:* `number`

---

##### `parNumerator`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.parNumerator"></a>

- *Type:* `number`

---

##### `profile`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.profile"></a>

- *Type:* `string`

---

##### `qualityLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.qualityLevel"></a>

- *Type:* `string`

---

##### `qvbrQualityLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.qvbrQualityLevel"></a>

- *Type:* `number`

---

##### `rateControlMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.rateControlMode"></a>

- *Type:* `string`

---

##### `scanType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.scanType"></a>

- *Type:* `string`

---

##### `sceneChangeDetect`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.sceneChangeDetect"></a>

- *Type:* `string`

---

##### `slices`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.slices"></a>

- *Type:* `number`

---

##### `softness`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.softness"></a>

- *Type:* `number`

---

##### `spatialAq`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.spatialAq"></a>

- *Type:* `string`

---

##### `subgopLength`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.subgopLength"></a>

- *Type:* `string`

---

##### `syntax`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.syntax"></a>

- *Type:* `string`

---

##### `temporalAq`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.temporalAq"></a>

- *Type:* `string`

---

##### `timecodeInsertion`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH264Settings.property.timecodeInsertion"></a>

- *Type:* `string`

---

### MediaLiveH265ColorSpaceSettings <a name="aws-cdk-sdk.medialive.MediaLiveH265ColorSpaceSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveH265ColorSpaceSettings: medialive.MediaLiveH265ColorSpaceSettings = { ... }
```

##### `colorSpacePassthroughSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265ColorSpaceSettings.property.colorSpacePassthroughSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveColorSpacePassthroughSettings`](#aws-cdk-sdk.medialive.MediaLiveColorSpacePassthroughSettings)

---

##### `hdr10Settings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265ColorSpaceSettings.property.hdr10Settings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveHdr10Settings`](#aws-cdk-sdk.medialive.MediaLiveHdr10Settings)

---

##### `rec601Settings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265ColorSpaceSettings.property.rec601Settings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveRec601Settings`](#aws-cdk-sdk.medialive.MediaLiveRec601Settings)

---

##### `rec709Settings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265ColorSpaceSettings.property.rec709Settings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveRec709Settings`](#aws-cdk-sdk.medialive.MediaLiveRec709Settings)

---

### MediaLiveH265FilterSettings <a name="aws-cdk-sdk.medialive.MediaLiveH265FilterSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveH265FilterSettings: medialive.MediaLiveH265FilterSettings = { ... }
```

##### `temporalFilterSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265FilterSettings.property.temporalFilterSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveTemporalFilterSettings`](#aws-cdk-sdk.medialive.MediaLiveTemporalFilterSettings)

---

### MediaLiveH265Settings <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveH265Settings: medialive.MediaLiveH265Settings = { ... }
```

##### `framerateDenominator`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.framerateDenominator"></a>

- *Type:* `number`

---

##### `framerateNumerator`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.framerateNumerator"></a>

- *Type:* `number`

---

##### `adaptiveQuantization`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.adaptiveQuantization"></a>

- *Type:* `string`

---

##### `afdSignaling`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.afdSignaling"></a>

- *Type:* `string`

---

##### `alternativeTransferFunction`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.alternativeTransferFunction"></a>

- *Type:* `string`

---

##### `bitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.bitrate"></a>

- *Type:* `number`

---

##### `bufSize`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.bufSize"></a>

- *Type:* `number`

---

##### `colorMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.colorMetadata"></a>

- *Type:* `string`

---

##### `colorSpaceSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.colorSpaceSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveH265ColorSpaceSettings`](#aws-cdk-sdk.medialive.MediaLiveH265ColorSpaceSettings)

---

##### `filterSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.filterSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveH265FilterSettings`](#aws-cdk-sdk.medialive.MediaLiveH265FilterSettings)

---

##### `fixedAfd`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.fixedAfd"></a>

- *Type:* `string`

---

##### `flickerAq`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.flickerAq"></a>

- *Type:* `string`

---

##### `gopClosedCadence`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.gopClosedCadence"></a>

- *Type:* `number`

---

##### `gopSize`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.gopSize"></a>

- *Type:* `number`

---

##### `gopSizeUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.gopSizeUnits"></a>

- *Type:* `string`

---

##### `level`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.level"></a>

- *Type:* `string`

---

##### `lookAheadRateControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.lookAheadRateControl"></a>

- *Type:* `string`

---

##### `maxBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.maxBitrate"></a>

- *Type:* `number`

---

##### `minIInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.minIInterval"></a>

- *Type:* `number`

---

##### `parDenominator`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.parDenominator"></a>

- *Type:* `number`

---

##### `parNumerator`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.parNumerator"></a>

- *Type:* `number`

---

##### `profile`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.profile"></a>

- *Type:* `string`

---

##### `qvbrQualityLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.qvbrQualityLevel"></a>

- *Type:* `number`

---

##### `rateControlMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.rateControlMode"></a>

- *Type:* `string`

---

##### `scanType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.scanType"></a>

- *Type:* `string`

---

##### `sceneChangeDetect`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.sceneChangeDetect"></a>

- *Type:* `string`

---

##### `slices`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.slices"></a>

- *Type:* `number`

---

##### `tier`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.tier"></a>

- *Type:* `string`

---

##### `timecodeInsertion`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveH265Settings.property.timecodeInsertion"></a>

- *Type:* `string`

---

### MediaLiveHdr10Settings <a name="aws-cdk-sdk.medialive.MediaLiveHdr10Settings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveHdr10Settings: medialive.MediaLiveHdr10Settings = { ... }
```

##### `maxCll`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHdr10Settings.property.maxCll"></a>

- *Type:* `number`

---

##### `maxFall`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHdr10Settings.property.maxFall"></a>

- *Type:* `number`

---

### MediaLiveHlsAkamaiSettings <a name="aws-cdk-sdk.medialive.MediaLiveHlsAkamaiSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveHlsAkamaiSettings: medialive.MediaLiveHlsAkamaiSettings = { ... }
```

##### `connectionRetryInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsAkamaiSettings.property.connectionRetryInterval"></a>

- *Type:* `number`

---

##### `filecacheDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsAkamaiSettings.property.filecacheDuration"></a>

- *Type:* `number`

---

##### `httpTransferMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsAkamaiSettings.property.httpTransferMode"></a>

- *Type:* `string`

---

##### `numRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsAkamaiSettings.property.numRetries"></a>

- *Type:* `number`

---

##### `restartDelay`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsAkamaiSettings.property.restartDelay"></a>

- *Type:* `number`

---

##### `salt`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsAkamaiSettings.property.salt"></a>

- *Type:* `string`

---

##### `token`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsAkamaiSettings.property.token"></a>

- *Type:* `string`

---

### MediaLiveHlsBasicPutSettings <a name="aws-cdk-sdk.medialive.MediaLiveHlsBasicPutSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveHlsBasicPutSettings: medialive.MediaLiveHlsBasicPutSettings = { ... }
```

##### `connectionRetryInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsBasicPutSettings.property.connectionRetryInterval"></a>

- *Type:* `number`

---

##### `filecacheDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsBasicPutSettings.property.filecacheDuration"></a>

- *Type:* `number`

---

##### `numRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsBasicPutSettings.property.numRetries"></a>

- *Type:* `number`

---

##### `restartDelay`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsBasicPutSettings.property.restartDelay"></a>

- *Type:* `number`

---

### MediaLiveHlsCdnSettings <a name="aws-cdk-sdk.medialive.MediaLiveHlsCdnSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveHlsCdnSettings: medialive.MediaLiveHlsCdnSettings = { ... }
```

##### `hlsAkamaiSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsCdnSettings.property.hlsAkamaiSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveHlsAkamaiSettings`](#aws-cdk-sdk.medialive.MediaLiveHlsAkamaiSettings)

---

##### `hlsBasicPutSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsCdnSettings.property.hlsBasicPutSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveHlsBasicPutSettings`](#aws-cdk-sdk.medialive.MediaLiveHlsBasicPutSettings)

---

##### `hlsMediaStoreSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsCdnSettings.property.hlsMediaStoreSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveHlsMediaStoreSettings`](#aws-cdk-sdk.medialive.MediaLiveHlsMediaStoreSettings)

---

##### `hlsWebdavSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsCdnSettings.property.hlsWebdavSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveHlsWebdavSettings`](#aws-cdk-sdk.medialive.MediaLiveHlsWebdavSettings)

---

### MediaLiveHlsGroupSettings <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveHlsGroupSettings: medialive.MediaLiveHlsGroupSettings = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.destination"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputLocationRef`](#aws-cdk-sdk.medialive.MediaLiveOutputLocationRef)

---

##### `adMarkers`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.adMarkers"></a>

- *Type:* `string`[]

---

##### `baseUrlContent`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.baseUrlContent"></a>

- *Type:* `string`

---

##### `baseUrlContent1`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.baseUrlContent1"></a>

- *Type:* `string`

---

##### `baseUrlManifest`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.baseUrlManifest"></a>

- *Type:* `string`

---

##### `baseUrlManifest1`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.baseUrlManifest1"></a>

- *Type:* `string`

---

##### `captionLanguageMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.captionLanguageMappings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCaptionLanguageMapping`](#aws-cdk-sdk.medialive.MediaLiveCaptionLanguageMapping)[]

---

##### `captionLanguageSetting`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.captionLanguageSetting"></a>

- *Type:* `string`

---

##### `clientCache`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.clientCache"></a>

- *Type:* `string`

---

##### `codecSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.codecSpecification"></a>

- *Type:* `string`

---

##### `constantIv`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.constantIv"></a>

- *Type:* `string`

---

##### `directoryStructure`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.directoryStructure"></a>

- *Type:* `string`

---

##### `discontinuityTags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.discontinuityTags"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.encryptionType"></a>

- *Type:* `string`

---

##### `hlsCdnSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.hlsCdnSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveHlsCdnSettings`](#aws-cdk-sdk.medialive.MediaLiveHlsCdnSettings)

---

##### `hlsId3SegmentTagging`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.hlsId3SegmentTagging"></a>

- *Type:* `string`

---

##### `iFrameOnlyPlaylists`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.iFrameOnlyPlaylists"></a>

- *Type:* `string`

---

##### `incompleteSegmentBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.incompleteSegmentBehavior"></a>

- *Type:* `string`

---

##### `indexNSegments`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.indexNSegments"></a>

- *Type:* `number`

---

##### `inputLossAction`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.inputLossAction"></a>

- *Type:* `string`

---

##### `ivInManifest`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.ivInManifest"></a>

- *Type:* `string`

---

##### `ivSource`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.ivSource"></a>

- *Type:* `string`

---

##### `keepSegments`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.keepSegments"></a>

- *Type:* `number`

---

##### `keyFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.keyFormat"></a>

- *Type:* `string`

---

##### `keyFormatVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.keyFormatVersions"></a>

- *Type:* `string`

---

##### `keyProviderSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.keyProviderSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveKeyProviderSettings`](#aws-cdk-sdk.medialive.MediaLiveKeyProviderSettings)

---

##### `manifestCompression`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.manifestCompression"></a>

- *Type:* `string`

---

##### `manifestDurationFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.manifestDurationFormat"></a>

- *Type:* `string`

---

##### `minSegmentLength`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.minSegmentLength"></a>

- *Type:* `number`

---

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.mode"></a>

- *Type:* `string`

---

##### `outputSelection`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.outputSelection"></a>

- *Type:* `string`

---

##### `programDateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.programDateTime"></a>

- *Type:* `string`

---

##### `programDateTimePeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.programDateTimePeriod"></a>

- *Type:* `number`

---

##### `redundantManifest`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.redundantManifest"></a>

- *Type:* `string`

---

##### `segmentationMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.segmentationMode"></a>

- *Type:* `string`

---

##### `segmentLength`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.segmentLength"></a>

- *Type:* `number`

---

##### `segmentsPerSubdirectory`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.segmentsPerSubdirectory"></a>

- *Type:* `number`

---

##### `streamInfResolution`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.streamInfResolution"></a>

- *Type:* `string`

---

##### `timedMetadataId3Frame`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.timedMetadataId3Frame"></a>

- *Type:* `string`

---

##### `timedMetadataId3Period`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.timedMetadataId3Period"></a>

- *Type:* `number`

---

##### `timestampDeltaMilliseconds`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.timestampDeltaMilliseconds"></a>

- *Type:* `number`

---

##### `tsFileMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings.property.tsFileMode"></a>

- *Type:* `string`

---

### MediaLiveHlsId3SegmentTaggingScheduleActionSettings <a name="aws-cdk-sdk.medialive.MediaLiveHlsId3SegmentTaggingScheduleActionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveHlsId3SegmentTaggingScheduleActionSettings: medialive.MediaLiveHlsId3SegmentTaggingScheduleActionSettings = { ... }
```

##### `tag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsId3SegmentTaggingScheduleActionSettings.property.tag"></a>

- *Type:* `string`

---

### MediaLiveHlsInputSettings <a name="aws-cdk-sdk.medialive.MediaLiveHlsInputSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveHlsInputSettings: medialive.MediaLiveHlsInputSettings = { ... }
```

##### `bandwidth`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsInputSettings.property.bandwidth"></a>

- *Type:* `number`

---

##### `bufferSegments`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsInputSettings.property.bufferSegments"></a>

- *Type:* `number`

---

##### `retries`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsInputSettings.property.retries"></a>

- *Type:* `number`

---

##### `retryInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsInputSettings.property.retryInterval"></a>

- *Type:* `number`

---

### MediaLiveHlsMediaStoreSettings <a name="aws-cdk-sdk.medialive.MediaLiveHlsMediaStoreSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveHlsMediaStoreSettings: medialive.MediaLiveHlsMediaStoreSettings = { ... }
```

##### `connectionRetryInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsMediaStoreSettings.property.connectionRetryInterval"></a>

- *Type:* `number`

---

##### `filecacheDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsMediaStoreSettings.property.filecacheDuration"></a>

- *Type:* `number`

---

##### `mediaStoreStorageClass`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsMediaStoreSettings.property.mediaStoreStorageClass"></a>

- *Type:* `string`

---

##### `numRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsMediaStoreSettings.property.numRetries"></a>

- *Type:* `number`

---

##### `restartDelay`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsMediaStoreSettings.property.restartDelay"></a>

- *Type:* `number`

---

### MediaLiveHlsOutputSettings <a name="aws-cdk-sdk.medialive.MediaLiveHlsOutputSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveHlsOutputSettings: medialive.MediaLiveHlsOutputSettings = { ... }
```

##### `hlsSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsOutputSettings.property.hlsSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveHlsSettings`](#aws-cdk-sdk.medialive.MediaLiveHlsSettings)

---

##### `h265PackagingType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsOutputSettings.property.h265PackagingType"></a>

- *Type:* `string`

---

##### `nameModifier`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsOutputSettings.property.nameModifier"></a>

- *Type:* `string`

---

##### `segmentModifier`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsOutputSettings.property.segmentModifier"></a>

- *Type:* `string`

---

### MediaLiveHlsSettings <a name="aws-cdk-sdk.medialive.MediaLiveHlsSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveHlsSettings: medialive.MediaLiveHlsSettings = { ... }
```

##### `audioOnlyHlsSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsSettings.property.audioOnlyHlsSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioOnlyHlsSettings`](#aws-cdk-sdk.medialive.MediaLiveAudioOnlyHlsSettings)

---

##### `fmp4HlsSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsSettings.property.fmp4HlsSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveFmp4HlsSettings`](#aws-cdk-sdk.medialive.MediaLiveFmp4HlsSettings)

---

##### `standardHlsSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsSettings.property.standardHlsSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStandardHlsSettings`](#aws-cdk-sdk.medialive.MediaLiveStandardHlsSettings)

---

### MediaLiveHlsTimedMetadataScheduleActionSettings <a name="aws-cdk-sdk.medialive.MediaLiveHlsTimedMetadataScheduleActionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveHlsTimedMetadataScheduleActionSettings: medialive.MediaLiveHlsTimedMetadataScheduleActionSettings = { ... }
```

##### `id3`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsTimedMetadataScheduleActionSettings.property.id3"></a>

- *Type:* `string`

---

### MediaLiveHlsWebdavSettings <a name="aws-cdk-sdk.medialive.MediaLiveHlsWebdavSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveHlsWebdavSettings: medialive.MediaLiveHlsWebdavSettings = { ... }
```

##### `connectionRetryInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsWebdavSettings.property.connectionRetryInterval"></a>

- *Type:* `number`

---

##### `filecacheDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsWebdavSettings.property.filecacheDuration"></a>

- *Type:* `number`

---

##### `httpTransferMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsWebdavSettings.property.httpTransferMode"></a>

- *Type:* `string`

---

##### `numRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsWebdavSettings.property.numRetries"></a>

- *Type:* `number`

---

##### `restartDelay`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveHlsWebdavSettings.property.restartDelay"></a>

- *Type:* `number`

---

### MediaLiveImmediateModeScheduleActionStartSettings <a name="aws-cdk-sdk.medialive.MediaLiveImmediateModeScheduleActionStartSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveImmediateModeScheduleActionStartSettings: medialive.MediaLiveImmediateModeScheduleActionStartSettings = { ... }
```

### MediaLiveInput <a name="aws-cdk-sdk.medialive.MediaLiveInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInput: medialive.MediaLiveInput = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInput.property.arn"></a>

- *Type:* `string`

---

##### `attachedChannels`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInput.property.attachedChannels"></a>

- *Type:* `string`[]

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInput.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDestination`](#aws-cdk-sdk.medialive.MediaLiveInputDestination)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInput.property.id"></a>

- *Type:* `string`

---

##### `inputClass`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInput.property.inputClass"></a>

- *Type:* `string`

---

##### `inputDevices`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInput.property.inputDevices"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDeviceSettings`](#aws-cdk-sdk.medialive.MediaLiveInputDeviceSettings)[]

---

##### `inputSourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInput.property.inputSourceType"></a>

- *Type:* `string`

---

##### `mediaConnectFlows`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInput.property.mediaConnectFlows"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMediaConnectFlow`](#aws-cdk-sdk.medialive.MediaLiveMediaConnectFlow)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInput.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInput.property.roleArn"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInput.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInput.property.sources"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSource`](#aws-cdk-sdk.medialive.MediaLiveInputSource)[]

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInput.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInput.property.type"></a>

- *Type:* `string`

---

### MediaLiveInputAttachment <a name="aws-cdk-sdk.medialive.MediaLiveInputAttachment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputAttachment: medialive.MediaLiveInputAttachment = { ... }
```

##### `automaticInputFailoverSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputAttachment.property.automaticInputFailoverSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAutomaticInputFailoverSettings`](#aws-cdk-sdk.medialive.MediaLiveAutomaticInputFailoverSettings)

---

##### `inputAttachmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputAttachment.property.inputAttachmentName"></a>

- *Type:* `string`

---

##### `inputId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputAttachment.property.inputId"></a>

- *Type:* `string`

---

##### `inputSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputAttachment.property.inputSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSettings`](#aws-cdk-sdk.medialive.MediaLiveInputSettings)

---

### MediaLiveInputChannelLevel <a name="aws-cdk-sdk.medialive.MediaLiveInputChannelLevel"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputChannelLevel: medialive.MediaLiveInputChannelLevel = { ... }
```

##### `gain`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputChannelLevel.property.gain"></a>

- *Type:* `number`

---

##### `inputChannel`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputChannelLevel.property.inputChannel"></a>

- *Type:* `number`

---

### MediaLiveInputClippingSettings <a name="aws-cdk-sdk.medialive.MediaLiveInputClippingSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputClippingSettings: medialive.MediaLiveInputClippingSettings = { ... }
```

##### `inputTimecodeSource`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputClippingSettings.property.inputTimecodeSource"></a>

- *Type:* `string`

---

##### `startTimecode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputClippingSettings.property.startTimecode"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartTimecode`](#aws-cdk-sdk.medialive.MediaLiveStartTimecode)

---

##### `stopTimecode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputClippingSettings.property.stopTimecode"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopTimecode`](#aws-cdk-sdk.medialive.MediaLiveStopTimecode)

---

### MediaLiveInputDestination <a name="aws-cdk-sdk.medialive.MediaLiveInputDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputDestination: medialive.MediaLiveInputDestination = { ... }
```

##### `ip`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDestination.property.ip"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDestination.property.port"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDestination.property.url"></a>

- *Type:* `string`

---

##### `vpc`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDestination.property.vpc"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDestinationVpc`](#aws-cdk-sdk.medialive.MediaLiveInputDestinationVpc)

---

### MediaLiveInputDestinationRequest <a name="aws-cdk-sdk.medialive.MediaLiveInputDestinationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputDestinationRequest: medialive.MediaLiveInputDestinationRequest = { ... }
```

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDestinationRequest.property.streamName"></a>

- *Type:* `string`

---

### MediaLiveInputDestinationVpc <a name="aws-cdk-sdk.medialive.MediaLiveInputDestinationVpc"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputDestinationVpc: medialive.MediaLiveInputDestinationVpc = { ... }
```

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDestinationVpc.property.availabilityZone"></a>

- *Type:* `string`

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDestinationVpc.property.networkInterfaceId"></a>

- *Type:* `string`

---

### MediaLiveInputDeviceConfigurableSettings <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceConfigurableSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputDeviceConfigurableSettings: medialive.MediaLiveInputDeviceConfigurableSettings = { ... }
```

##### `configuredInput`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceConfigurableSettings.property.configuredInput"></a>

- *Type:* `string`

---

##### `maxBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceConfigurableSettings.property.maxBitrate"></a>

- *Type:* `number`

---

### MediaLiveInputDeviceHdSettings <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceHdSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputDeviceHdSettings: medialive.MediaLiveInputDeviceHdSettings = { ... }
```

##### `activeInput`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceHdSettings.property.activeInput"></a>

- *Type:* `string`

---

##### `configuredInput`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceHdSettings.property.configuredInput"></a>

- *Type:* `string`

---

##### `deviceState`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceHdSettings.property.deviceState"></a>

- *Type:* `string`

---

##### `framerate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceHdSettings.property.framerate"></a>

- *Type:* `number`

---

##### `height`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceHdSettings.property.height"></a>

- *Type:* `number`

---

##### `maxBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceHdSettings.property.maxBitrate"></a>

- *Type:* `number`

---

##### `scanType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceHdSettings.property.scanType"></a>

- *Type:* `string`

---

##### `width`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceHdSettings.property.width"></a>

- *Type:* `number`

---

### MediaLiveInputDeviceNetworkSettings <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceNetworkSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputDeviceNetworkSettings: medialive.MediaLiveInputDeviceNetworkSettings = { ... }
```

##### `dnsAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceNetworkSettings.property.dnsAddresses"></a>

- *Type:* `string`[]

---

##### `gateway`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceNetworkSettings.property.gateway"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceNetworkSettings.property.ipAddress"></a>

- *Type:* `string`

---

##### `ipScheme`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceNetworkSettings.property.ipScheme"></a>

- *Type:* `string`

---

##### `subnetMask`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceNetworkSettings.property.subnetMask"></a>

- *Type:* `string`

---

### MediaLiveInputDeviceRequest <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputDeviceRequest: medialive.MediaLiveInputDeviceRequest = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceRequest.property.id"></a>

- *Type:* `string`

---

### MediaLiveInputDeviceSettings <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputDeviceSettings: medialive.MediaLiveInputDeviceSettings = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceSettings.property.id"></a>

- *Type:* `string`

---

### MediaLiveInputDeviceSummary <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputDeviceSummary: medialive.MediaLiveInputDeviceSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceSummary.property.arn"></a>

- *Type:* `string`

---

##### `connectionState`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceSummary.property.connectionState"></a>

- *Type:* `string`

---

##### `deviceSettingsSyncState`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceSummary.property.deviceSettingsSyncState"></a>

- *Type:* `string`

---

##### `deviceUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceSummary.property.deviceUpdateStatus"></a>

- *Type:* `string`

---

##### `hdDeviceSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceSummary.property.hdDeviceSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDeviceHdSettings`](#aws-cdk-sdk.medialive.MediaLiveInputDeviceHdSettings)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceSummary.property.id"></a>

- *Type:* `string`

---

##### `macAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceSummary.property.macAddress"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceSummary.property.name"></a>

- *Type:* `string`

---

##### `networkSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceSummary.property.networkSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDeviceNetworkSettings`](#aws-cdk-sdk.medialive.MediaLiveInputDeviceNetworkSettings)

---

##### `serialNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceSummary.property.serialNumber"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputDeviceSummary.property.type"></a>

- *Type:* `string`

---

### MediaLiveInputLocation <a name="aws-cdk-sdk.medialive.MediaLiveInputLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputLocation: medialive.MediaLiveInputLocation = { ... }
```

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputLocation.property.uri"></a>

- *Type:* `string`

---

##### `passwordParam`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputLocation.property.passwordParam"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputLocation.property.username"></a>

- *Type:* `string`

---

### MediaLiveInputLossBehavior <a name="aws-cdk-sdk.medialive.MediaLiveInputLossBehavior"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputLossBehavior: medialive.MediaLiveInputLossBehavior = { ... }
```

##### `blackFrameMsec`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputLossBehavior.property.blackFrameMsec"></a>

- *Type:* `number`

---

##### `inputLossImageColor`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputLossBehavior.property.inputLossImageColor"></a>

- *Type:* `string`

---

##### `inputLossImageSlate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputLossBehavior.property.inputLossImageSlate"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputLocation`](#aws-cdk-sdk.medialive.MediaLiveInputLocation)

---

##### `inputLossImageType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputLossBehavior.property.inputLossImageType"></a>

- *Type:* `string`

---

##### `repeatFrameMsec`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputLossBehavior.property.repeatFrameMsec"></a>

- *Type:* `number`

---

### MediaLiveInputLossFailoverSettings <a name="aws-cdk-sdk.medialive.MediaLiveInputLossFailoverSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputLossFailoverSettings: medialive.MediaLiveInputLossFailoverSettings = { ... }
```

##### `inputLossThresholdMsec`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputLossFailoverSettings.property.inputLossThresholdMsec"></a>

- *Type:* `number`

---

### MediaLiveInputPrepareScheduleActionSettings <a name="aws-cdk-sdk.medialive.MediaLiveInputPrepareScheduleActionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputPrepareScheduleActionSettings: medialive.MediaLiveInputPrepareScheduleActionSettings = { ... }
```

##### `inputAttachmentNameReference`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputPrepareScheduleActionSettings.property.inputAttachmentNameReference"></a>

- *Type:* `string`

---

##### `inputClippingSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputPrepareScheduleActionSettings.property.inputClippingSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputClippingSettings`](#aws-cdk-sdk.medialive.MediaLiveInputClippingSettings)

---

##### `urlPath`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputPrepareScheduleActionSettings.property.urlPath"></a>

- *Type:* `string`[]

---

### MediaLiveInputSecurityGroup <a name="aws-cdk-sdk.medialive.MediaLiveInputSecurityGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputSecurityGroup: medialive.MediaLiveInputSecurityGroup = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSecurityGroup.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSecurityGroup.property.id"></a>

- *Type:* `string`

---

##### `inputs`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSecurityGroup.property.inputs"></a>

- *Type:* `string`[]

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSecurityGroup.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSecurityGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `whitelistRules`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSecurityGroup.property.whitelistRules"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputWhitelistRule`](#aws-cdk-sdk.medialive.MediaLiveInputWhitelistRule)[]

---

### MediaLiveInputSettings <a name="aws-cdk-sdk.medialive.MediaLiveInputSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputSettings: medialive.MediaLiveInputSettings = { ... }
```

##### `audioSelectors`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSettings.property.audioSelectors"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioSelector`](#aws-cdk-sdk.medialive.MediaLiveAudioSelector)[]

---

##### `captionSelectors`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSettings.property.captionSelectors"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCaptionSelector`](#aws-cdk-sdk.medialive.MediaLiveCaptionSelector)[]

---

##### `deblockFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSettings.property.deblockFilter"></a>

- *Type:* `string`

---

##### `denoiseFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSettings.property.denoiseFilter"></a>

- *Type:* `string`

---

##### `filterStrength`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSettings.property.filterStrength"></a>

- *Type:* `number`

---

##### `inputFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSettings.property.inputFilter"></a>

- *Type:* `string`

---

##### `networkInputSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSettings.property.networkInputSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveNetworkInputSettings`](#aws-cdk-sdk.medialive.MediaLiveNetworkInputSettings)

---

##### `smpte2038DataPreference`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSettings.property.smpte2038DataPreference"></a>

- *Type:* `string`

---

##### `sourceEndBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSettings.property.sourceEndBehavior"></a>

- *Type:* `string`

---

##### `videoSelector`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSettings.property.videoSelector"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveVideoSelector`](#aws-cdk-sdk.medialive.MediaLiveVideoSelector)

---

### MediaLiveInputSource <a name="aws-cdk-sdk.medialive.MediaLiveInputSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputSource: medialive.MediaLiveInputSource = { ... }
```

##### `passwordParam`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSource.property.passwordParam"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSource.property.url"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSource.property.username"></a>

- *Type:* `string`

---

### MediaLiveInputSourceRequest <a name="aws-cdk-sdk.medialive.MediaLiveInputSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputSourceRequest: medialive.MediaLiveInputSourceRequest = { ... }
```

##### `passwordParam`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSourceRequest.property.passwordParam"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSourceRequest.property.url"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSourceRequest.property.username"></a>

- *Type:* `string`

---

### MediaLiveInputSpecification <a name="aws-cdk-sdk.medialive.MediaLiveInputSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputSpecification: medialive.MediaLiveInputSpecification = { ... }
```

##### `codec`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSpecification.property.codec"></a>

- *Type:* `string`

---

##### `maximumBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSpecification.property.maximumBitrate"></a>

- *Type:* `string`

---

##### `resolution`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSpecification.property.resolution"></a>

- *Type:* `string`

---

### MediaLiveInputSwitchScheduleActionSettings <a name="aws-cdk-sdk.medialive.MediaLiveInputSwitchScheduleActionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputSwitchScheduleActionSettings: medialive.MediaLiveInputSwitchScheduleActionSettings = { ... }
```

##### `inputAttachmentNameReference`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSwitchScheduleActionSettings.property.inputAttachmentNameReference"></a>

- *Type:* `string`

---

##### `inputClippingSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSwitchScheduleActionSettings.property.inputClippingSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputClippingSettings`](#aws-cdk-sdk.medialive.MediaLiveInputClippingSettings)

---

##### `urlPath`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputSwitchScheduleActionSettings.property.urlPath"></a>

- *Type:* `string`[]

---

### MediaLiveInputVpcRequest <a name="aws-cdk-sdk.medialive.MediaLiveInputVpcRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputVpcRequest: medialive.MediaLiveInputVpcRequest = { ... }
```

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputVpcRequest.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputVpcRequest.property.securityGroupIds"></a>

- *Type:* `string`[]

---

### MediaLiveInputWhitelistRule <a name="aws-cdk-sdk.medialive.MediaLiveInputWhitelistRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputWhitelistRule: medialive.MediaLiveInputWhitelistRule = { ... }
```

##### `cidr`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputWhitelistRule.property.cidr"></a>

- *Type:* `string`

---

### MediaLiveInputWhitelistRuleCidr <a name="aws-cdk-sdk.medialive.MediaLiveInputWhitelistRuleCidr"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveInputWhitelistRuleCidr: medialive.MediaLiveInputWhitelistRuleCidr = { ... }
```

##### `cidr`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveInputWhitelistRuleCidr.property.cidr"></a>

- *Type:* `string`

---

### MediaLiveKeyProviderSettings <a name="aws-cdk-sdk.medialive.MediaLiveKeyProviderSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveKeyProviderSettings: medialive.MediaLiveKeyProviderSettings = { ... }
```

##### `staticKeySettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveKeyProviderSettings.property.staticKeySettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStaticKeySettings`](#aws-cdk-sdk.medialive.MediaLiveStaticKeySettings)

---

### MediaLiveListChannelsRequest <a name="aws-cdk-sdk.medialive.MediaLiveListChannelsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListChannelsRequest: medialive.MediaLiveListChannelsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListChannelsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListChannelsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MediaLiveListChannelsResponse <a name="aws-cdk-sdk.medialive.MediaLiveListChannelsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListChannelsResponse: medialive.MediaLiveListChannelsResponse = { ... }
```

##### `channels`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListChannelsResponse.property.channels"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannelSummary`](#aws-cdk-sdk.medialive.MediaLiveChannelSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListChannelsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MediaLiveListInputDevicesRequest <a name="aws-cdk-sdk.medialive.MediaLiveListInputDevicesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListInputDevicesRequest: medialive.MediaLiveListInputDevicesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListInputDevicesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListInputDevicesRequest.property.nextToken"></a>

- *Type:* `string`

---

### MediaLiveListInputDevicesResponse <a name="aws-cdk-sdk.medialive.MediaLiveListInputDevicesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListInputDevicesResponse: medialive.MediaLiveListInputDevicesResponse = { ... }
```

##### `inputDevices`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListInputDevicesResponse.property.inputDevices"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDeviceSummary`](#aws-cdk-sdk.medialive.MediaLiveInputDeviceSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListInputDevicesResponse.property.nextToken"></a>

- *Type:* `string`

---

### MediaLiveListInputDeviceTransfersRequest <a name="aws-cdk-sdk.medialive.MediaLiveListInputDeviceTransfersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListInputDeviceTransfersRequest: medialive.MediaLiveListInputDeviceTransfersRequest = { ... }
```

##### `transferType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListInputDeviceTransfersRequest.property.transferType"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListInputDeviceTransfersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListInputDeviceTransfersRequest.property.nextToken"></a>

- *Type:* `string`

---

### MediaLiveListInputDeviceTransfersResponse <a name="aws-cdk-sdk.medialive.MediaLiveListInputDeviceTransfersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListInputDeviceTransfersResponse: medialive.MediaLiveListInputDeviceTransfersResponse = { ... }
```

##### `inputDeviceTransfers`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListInputDeviceTransfersResponse.property.inputDeviceTransfers"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveTransferringInputDeviceSummary`](#aws-cdk-sdk.medialive.MediaLiveTransferringInputDeviceSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListInputDeviceTransfersResponse.property.nextToken"></a>

- *Type:* `string`

---

### MediaLiveListInputSecurityGroupsRequest <a name="aws-cdk-sdk.medialive.MediaLiveListInputSecurityGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListInputSecurityGroupsRequest: medialive.MediaLiveListInputSecurityGroupsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListInputSecurityGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListInputSecurityGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MediaLiveListInputSecurityGroupsResponse <a name="aws-cdk-sdk.medialive.MediaLiveListInputSecurityGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListInputSecurityGroupsResponse: medialive.MediaLiveListInputSecurityGroupsResponse = { ... }
```

##### `inputSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListInputSecurityGroupsResponse.property.inputSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSecurityGroup`](#aws-cdk-sdk.medialive.MediaLiveInputSecurityGroup)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListInputSecurityGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MediaLiveListInputsRequest <a name="aws-cdk-sdk.medialive.MediaLiveListInputsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListInputsRequest: medialive.MediaLiveListInputsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListInputsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListInputsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MediaLiveListInputsResponse <a name="aws-cdk-sdk.medialive.MediaLiveListInputsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListInputsResponse: medialive.MediaLiveListInputsResponse = { ... }
```

##### `inputs`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListInputsResponse.property.inputs"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInput`](#aws-cdk-sdk.medialive.MediaLiveInput)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListInputsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MediaLiveListMultiplexesRequest <a name="aws-cdk-sdk.medialive.MediaLiveListMultiplexesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListMultiplexesRequest: medialive.MediaLiveListMultiplexesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListMultiplexesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListMultiplexesRequest.property.nextToken"></a>

- *Type:* `string`

---

### MediaLiveListMultiplexesResponse <a name="aws-cdk-sdk.medialive.MediaLiveListMultiplexesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListMultiplexesResponse: medialive.MediaLiveListMultiplexesResponse = { ... }
```

##### `multiplexes`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListMultiplexesResponse.property.multiplexes"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexSummary`](#aws-cdk-sdk.medialive.MediaLiveMultiplexSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListMultiplexesResponse.property.nextToken"></a>

- *Type:* `string`

---

### MediaLiveListMultiplexProgramsRequest <a name="aws-cdk-sdk.medialive.MediaLiveListMultiplexProgramsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListMultiplexProgramsRequest: medialive.MediaLiveListMultiplexProgramsRequest = { ... }
```

##### `multiplexId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListMultiplexProgramsRequest.property.multiplexId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListMultiplexProgramsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListMultiplexProgramsRequest.property.nextToken"></a>

- *Type:* `string`

---

### MediaLiveListMultiplexProgramsResponse <a name="aws-cdk-sdk.medialive.MediaLiveListMultiplexProgramsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListMultiplexProgramsResponse: medialive.MediaLiveListMultiplexProgramsResponse = { ... }
```

##### `multiplexPrograms`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListMultiplexProgramsResponse.property.multiplexPrograms"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSummary`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListMultiplexProgramsResponse.property.nextToken"></a>

- *Type:* `string`

---

### MediaLiveListOfferingsRequest <a name="aws-cdk-sdk.medialive.MediaLiveListOfferingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListOfferingsRequest: medialive.MediaLiveListOfferingsRequest = { ... }
```

##### `channelClass`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListOfferingsRequest.property.channelClass"></a>

- *Type:* `string`

---

##### `channelConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListOfferingsRequest.property.channelConfiguration"></a>

- *Type:* `string`

---

##### `codec`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListOfferingsRequest.property.codec"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListOfferingsRequest.property.duration"></a>

- *Type:* `string`

---

##### `maximumBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListOfferingsRequest.property.maximumBitrate"></a>

- *Type:* `string`

---

##### `maximumFramerate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListOfferingsRequest.property.maximumFramerate"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListOfferingsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListOfferingsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resolution`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListOfferingsRequest.property.resolution"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListOfferingsRequest.property.resourceType"></a>

- *Type:* `string`

---

##### `specialFeature`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListOfferingsRequest.property.specialFeature"></a>

- *Type:* `string`

---

##### `videoQuality`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListOfferingsRequest.property.videoQuality"></a>

- *Type:* `string`

---

### MediaLiveListOfferingsResponse <a name="aws-cdk-sdk.medialive.MediaLiveListOfferingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListOfferingsResponse: medialive.MediaLiveListOfferingsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListOfferingsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `offerings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListOfferingsResponse.property.offerings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOffering`](#aws-cdk-sdk.medialive.MediaLiveOffering)[]

---

### MediaLiveListReservationsRequest <a name="aws-cdk-sdk.medialive.MediaLiveListReservationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListReservationsRequest: medialive.MediaLiveListReservationsRequest = { ... }
```

##### `channelClass`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListReservationsRequest.property.channelClass"></a>

- *Type:* `string`

---

##### `codec`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListReservationsRequest.property.codec"></a>

- *Type:* `string`

---

##### `maximumBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListReservationsRequest.property.maximumBitrate"></a>

- *Type:* `string`

---

##### `maximumFramerate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListReservationsRequest.property.maximumFramerate"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListReservationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListReservationsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resolution`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListReservationsRequest.property.resolution"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListReservationsRequest.property.resourceType"></a>

- *Type:* `string`

---

##### `specialFeature`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListReservationsRequest.property.specialFeature"></a>

- *Type:* `string`

---

##### `videoQuality`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListReservationsRequest.property.videoQuality"></a>

- *Type:* `string`

---

### MediaLiveListReservationsResponse <a name="aws-cdk-sdk.medialive.MediaLiveListReservationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListReservationsResponse: medialive.MediaLiveListReservationsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListReservationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `reservations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListReservationsResponse.property.reservations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveReservation`](#aws-cdk-sdk.medialive.MediaLiveReservation)[]

---

### MediaLiveListTagsForResourceRequest <a name="aws-cdk-sdk.medialive.MediaLiveListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListTagsForResourceRequest: medialive.MediaLiveListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### MediaLiveListTagsForResourceResponse <a name="aws-cdk-sdk.medialive.MediaLiveListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveListTagsForResourceResponse: medialive.MediaLiveListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaLiveM2tsSettings <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveM2tsSettings: medialive.MediaLiveM2tsSettings = { ... }
```

##### `absentInputAudioBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.absentInputAudioBehavior"></a>

- *Type:* `string`

---

##### `arib`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.arib"></a>

- *Type:* `string`

---

##### `aribCaptionsPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.aribCaptionsPid"></a>

- *Type:* `string`

---

##### `aribCaptionsPidControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.aribCaptionsPidControl"></a>

- *Type:* `string`

---

##### `audioBufferModel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.audioBufferModel"></a>

- *Type:* `string`

---

##### `audioFramesPerPes`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.audioFramesPerPes"></a>

- *Type:* `number`

---

##### `audioPids`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.audioPids"></a>

- *Type:* `string`

---

##### `audioStreamType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.audioStreamType"></a>

- *Type:* `string`

---

##### `bitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.bitrate"></a>

- *Type:* `number`

---

##### `bufferModel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.bufferModel"></a>

- *Type:* `string`

---

##### `ccDescriptor`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.ccDescriptor"></a>

- *Type:* `string`

---

##### `dvbNitSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.dvbNitSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDvbNitSettings`](#aws-cdk-sdk.medialive.MediaLiveDvbNitSettings)

---

##### `dvbSdtSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.dvbSdtSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDvbSdtSettings`](#aws-cdk-sdk.medialive.MediaLiveDvbSdtSettings)

---

##### `dvbSubPids`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.dvbSubPids"></a>

- *Type:* `string`

---

##### `dvbTdtSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.dvbTdtSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDvbTdtSettings`](#aws-cdk-sdk.medialive.MediaLiveDvbTdtSettings)

---

##### `dvbTeletextPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.dvbTeletextPid"></a>

- *Type:* `string`

---

##### `ebif`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.ebif"></a>

- *Type:* `string`

---

##### `ebpAudioInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.ebpAudioInterval"></a>

- *Type:* `string`

---

##### `ebpLookaheadMs`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.ebpLookaheadMs"></a>

- *Type:* `number`

---

##### `ebpPlacement`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.ebpPlacement"></a>

- *Type:* `string`

---

##### `ecmPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.ecmPid"></a>

- *Type:* `string`

---

##### `esRateInPes`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.esRateInPes"></a>

- *Type:* `string`

---

##### `etvPlatformPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.etvPlatformPid"></a>

- *Type:* `string`

---

##### `etvSignalPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.etvSignalPid"></a>

- *Type:* `string`

---

##### `fragmentTime`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.fragmentTime"></a>

- *Type:* `number`

---

##### `klv`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.klv"></a>

- *Type:* `string`

---

##### `klvDataPids`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.klvDataPids"></a>

- *Type:* `string`

---

##### `nielsenId3Behavior`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.nielsenId3Behavior"></a>

- *Type:* `string`

---

##### `nullPacketBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.nullPacketBitrate"></a>

- *Type:* `number`

---

##### `patInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.patInterval"></a>

- *Type:* `number`

---

##### `pcrControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.pcrControl"></a>

- *Type:* `string`

---

##### `pcrPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.pcrPeriod"></a>

- *Type:* `number`

---

##### `pcrPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.pcrPid"></a>

- *Type:* `string`

---

##### `pmtInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.pmtInterval"></a>

- *Type:* `number`

---

##### `pmtPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.pmtPid"></a>

- *Type:* `string`

---

##### `programNum`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.programNum"></a>

- *Type:* `number`

---

##### `rateMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.rateMode"></a>

- *Type:* `string`

---

##### `scte27Pids`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.scte27Pids"></a>

- *Type:* `string`

---

##### `scte35Control`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.scte35Control"></a>

- *Type:* `string`

---

##### `scte35Pid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.scte35Pid"></a>

- *Type:* `string`

---

##### `segmentationMarkers`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.segmentationMarkers"></a>

- *Type:* `string`

---

##### `segmentationStyle`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.segmentationStyle"></a>

- *Type:* `string`

---

##### `segmentationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.segmentationTime"></a>

- *Type:* `number`

---

##### `timedMetadataBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.timedMetadataBehavior"></a>

- *Type:* `string`

---

##### `timedMetadataPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.timedMetadataPid"></a>

- *Type:* `string`

---

##### `transportStreamId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.transportStreamId"></a>

- *Type:* `number`

---

##### `videoPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM2tsSettings.property.videoPid"></a>

- *Type:* `string`

---

### MediaLiveM3u8Settings <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveM3u8Settings: medialive.MediaLiveM3u8Settings = { ... }
```

##### `audioFramesPerPes`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings.property.audioFramesPerPes"></a>

- *Type:* `number`

---

##### `audioPids`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings.property.audioPids"></a>

- *Type:* `string`

---

##### `ecmPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings.property.ecmPid"></a>

- *Type:* `string`

---

##### `nielsenId3Behavior`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings.property.nielsenId3Behavior"></a>

- *Type:* `string`

---

##### `patInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings.property.patInterval"></a>

- *Type:* `number`

---

##### `pcrControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings.property.pcrControl"></a>

- *Type:* `string`

---

##### `pcrPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings.property.pcrPeriod"></a>

- *Type:* `number`

---

##### `pcrPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings.property.pcrPid"></a>

- *Type:* `string`

---

##### `pmtInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings.property.pmtInterval"></a>

- *Type:* `number`

---

##### `pmtPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings.property.pmtPid"></a>

- *Type:* `string`

---

##### `programNum`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings.property.programNum"></a>

- *Type:* `number`

---

##### `scte35Behavior`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings.property.scte35Behavior"></a>

- *Type:* `string`

---

##### `scte35Pid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings.property.scte35Pid"></a>

- *Type:* `string`

---

##### `timedMetadataBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings.property.timedMetadataBehavior"></a>

- *Type:* `string`

---

##### `timedMetadataPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings.property.timedMetadataPid"></a>

- *Type:* `string`

---

##### `transportStreamId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings.property.transportStreamId"></a>

- *Type:* `number`

---

##### `videoPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveM3u8Settings.property.videoPid"></a>

- *Type:* `string`

---

### MediaLiveMediaConnectFlow <a name="aws-cdk-sdk.medialive.MediaLiveMediaConnectFlow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMediaConnectFlow: medialive.MediaLiveMediaConnectFlow = { ... }
```

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMediaConnectFlow.property.flowArn"></a>

- *Type:* `string`

---

### MediaLiveMediaConnectFlowRequest <a name="aws-cdk-sdk.medialive.MediaLiveMediaConnectFlowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMediaConnectFlowRequest: medialive.MediaLiveMediaConnectFlowRequest = { ... }
```

##### `flowArn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMediaConnectFlowRequest.property.flowArn"></a>

- *Type:* `string`

---

### MediaLiveMediaPackageGroupSettings <a name="aws-cdk-sdk.medialive.MediaLiveMediaPackageGroupSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMediaPackageGroupSettings: medialive.MediaLiveMediaPackageGroupSettings = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMediaPackageGroupSettings.property.destination"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputLocationRef`](#aws-cdk-sdk.medialive.MediaLiveOutputLocationRef)

---

### MediaLiveMediaPackageOutputDestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveMediaPackageOutputDestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMediaPackageOutputDestinationSettings: medialive.MediaLiveMediaPackageOutputDestinationSettings = { ... }
```

##### `channelId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMediaPackageOutputDestinationSettings.property.channelId"></a>

- *Type:* `string`

---

### MediaLiveMediaPackageOutputSettings <a name="aws-cdk-sdk.medialive.MediaLiveMediaPackageOutputSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMediaPackageOutputSettings: medialive.MediaLiveMediaPackageOutputSettings = { ... }
```

### MediaLiveMp2Settings <a name="aws-cdk-sdk.medialive.MediaLiveMp2Settings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMp2Settings: medialive.MediaLiveMp2Settings = { ... }
```

##### `bitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMp2Settings.property.bitrate"></a>

- *Type:* `number`

---

##### `codingMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMp2Settings.property.codingMode"></a>

- *Type:* `string`

---

##### `sampleRate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMp2Settings.property.sampleRate"></a>

- *Type:* `number`

---

### MediaLiveMpeg2FilterSettings <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2FilterSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMpeg2FilterSettings: medialive.MediaLiveMpeg2FilterSettings = { ... }
```

##### `temporalFilterSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2FilterSettings.property.temporalFilterSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveTemporalFilterSettings`](#aws-cdk-sdk.medialive.MediaLiveTemporalFilterSettings)

---

### MediaLiveMpeg2Settings <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2Settings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMpeg2Settings: medialive.MediaLiveMpeg2Settings = { ... }
```

##### `framerateDenominator`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2Settings.property.framerateDenominator"></a>

- *Type:* `number`

---

##### `framerateNumerator`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2Settings.property.framerateNumerator"></a>

- *Type:* `number`

---

##### `adaptiveQuantization`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2Settings.property.adaptiveQuantization"></a>

- *Type:* `string`

---

##### `afdSignaling`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2Settings.property.afdSignaling"></a>

- *Type:* `string`

---

##### `colorMetadata`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2Settings.property.colorMetadata"></a>

- *Type:* `string`

---

##### `colorSpace`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2Settings.property.colorSpace"></a>

- *Type:* `string`

---

##### `displayAspectRatio`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2Settings.property.displayAspectRatio"></a>

- *Type:* `string`

---

##### `filterSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2Settings.property.filterSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMpeg2FilterSettings`](#aws-cdk-sdk.medialive.MediaLiveMpeg2FilterSettings)

---

##### `fixedAfd`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2Settings.property.fixedAfd"></a>

- *Type:* `string`

---

##### `gopClosedCadence`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2Settings.property.gopClosedCadence"></a>

- *Type:* `number`

---

##### `gopNumBFrames`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2Settings.property.gopNumBFrames"></a>

- *Type:* `number`

---

##### `gopSize`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2Settings.property.gopSize"></a>

- *Type:* `number`

---

##### `gopSizeUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2Settings.property.gopSizeUnits"></a>

- *Type:* `string`

---

##### `scanType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2Settings.property.scanType"></a>

- *Type:* `string`

---

##### `subgopLength`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2Settings.property.subgopLength"></a>

- *Type:* `string`

---

##### `timecodeInsertion`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMpeg2Settings.property.timecodeInsertion"></a>

- *Type:* `string`

---

### MediaLiveMsSmoothGroupSettings <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMsSmoothGroupSettings: medialive.MediaLiveMsSmoothGroupSettings = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.destination"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputLocationRef`](#aws-cdk-sdk.medialive.MediaLiveOutputLocationRef)

---

##### `acquisitionPointId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.acquisitionPointId"></a>

- *Type:* `string`

---

##### `audioOnlyTimecodeControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.audioOnlyTimecodeControl"></a>

- *Type:* `string`

---

##### `certificateMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.certificateMode"></a>

- *Type:* `string`

---

##### `connectionRetryInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.connectionRetryInterval"></a>

- *Type:* `number`

---

##### `eventId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.eventId"></a>

- *Type:* `string`

---

##### `eventIdMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.eventIdMode"></a>

- *Type:* `string`

---

##### `eventStopBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.eventStopBehavior"></a>

- *Type:* `string`

---

##### `filecacheDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.filecacheDuration"></a>

- *Type:* `number`

---

##### `fragmentLength`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.fragmentLength"></a>

- *Type:* `number`

---

##### `inputLossAction`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.inputLossAction"></a>

- *Type:* `string`

---

##### `numRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.numRetries"></a>

- *Type:* `number`

---

##### `restartDelay`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.restartDelay"></a>

- *Type:* `number`

---

##### `segmentationMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.segmentationMode"></a>

- *Type:* `string`

---

##### `sendDelayMs`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.sendDelayMs"></a>

- *Type:* `number`

---

##### `sparseTrackType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.sparseTrackType"></a>

- *Type:* `string`

---

##### `streamManifestBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.streamManifestBehavior"></a>

- *Type:* `string`

---

##### `timestampOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.timestampOffset"></a>

- *Type:* `string`

---

##### `timestampOffsetMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings.property.timestampOffsetMode"></a>

- *Type:* `string`

---

### MediaLiveMsSmoothOutputSettings <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothOutputSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMsSmoothOutputSettings: medialive.MediaLiveMsSmoothOutputSettings = { ... }
```

##### `h265PackagingType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothOutputSettings.property.h265PackagingType"></a>

- *Type:* `string`

---

##### `nameModifier`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMsSmoothOutputSettings.property.nameModifier"></a>

- *Type:* `string`

---

### MediaLiveMultiplex <a name="aws-cdk-sdk.medialive.MediaLiveMultiplex"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMultiplex: medialive.MediaLiveMultiplex = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplex.property.arn"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplex.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplex.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplex.property.id"></a>

- *Type:* `string`

---

##### `multiplexSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplex.property.multiplexSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexSettings)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplex.property.name"></a>

- *Type:* `string`

---

##### `pipelinesRunningCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplex.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `programCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplex.property.programCount"></a>

- *Type:* `number`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplex.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplex.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaLiveMultiplexGroupSettings <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexGroupSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMultiplexGroupSettings: medialive.MediaLiveMultiplexGroupSettings = { ... }
```

### MediaLiveMultiplexMediaConnectOutputDestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexMediaConnectOutputDestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMultiplexMediaConnectOutputDestinationSettings: medialive.MediaLiveMultiplexMediaConnectOutputDestinationSettings = { ... }
```

##### `entitlementArn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexMediaConnectOutputDestinationSettings.property.entitlementArn"></a>

- *Type:* `string`

---

### MediaLiveMultiplexOutputDestination <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMultiplexOutputDestination: medialive.MediaLiveMultiplexOutputDestination = { ... }
```

##### `mediaConnectSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination.property.mediaConnectSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexMediaConnectOutputDestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexMediaConnectOutputDestinationSettings)

---

### MediaLiveMultiplexOutputSettings <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexOutputSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMultiplexOutputSettings: medialive.MediaLiveMultiplexOutputSettings = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexOutputSettings.property.destination"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputLocationRef`](#aws-cdk-sdk.medialive.MediaLiveOutputLocationRef)

---

### MediaLiveMultiplexProgram <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgram"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMultiplexProgram: medialive.MediaLiveMultiplexProgram = { ... }
```

##### `channelId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgram.property.channelId"></a>

- *Type:* `string`

---

##### `multiplexProgramSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgram.property.multiplexProgramSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSettings)

---

##### `packetIdentifiersMap`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgram.property.packetIdentifiersMap"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap)

---

##### `pipelineDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgram.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPipelineDetail`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPipelineDetail)[]

---

##### `programName`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgram.property.programName"></a>

- *Type:* `string`

---

### MediaLiveMultiplexProgramChannelDestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramChannelDestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMultiplexProgramChannelDestinationSettings: medialive.MediaLiveMultiplexProgramChannelDestinationSettings = { ... }
```

##### `multiplexId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramChannelDestinationSettings.property.multiplexId"></a>

- *Type:* `string`

---

##### `programName`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramChannelDestinationSettings.property.programName"></a>

- *Type:* `string`

---

### MediaLiveMultiplexProgramPacketIdentifiersMap <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMultiplexProgramPacketIdentifiersMap: medialive.MediaLiveMultiplexProgramPacketIdentifiersMap = { ... }
```

##### `audioPids`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap.property.audioPids"></a>

- *Type:* `number`[]

---

##### `dvbSubPids`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap.property.dvbSubPids"></a>

- *Type:* `number`[]

---

##### `dvbTeletextPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap.property.dvbTeletextPid"></a>

- *Type:* `number`

---

##### `etvPlatformPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap.property.etvPlatformPid"></a>

- *Type:* `number`

---

##### `etvSignalPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap.property.etvSignalPid"></a>

- *Type:* `number`

---

##### `klvDataPids`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap.property.klvDataPids"></a>

- *Type:* `number`[]

---

##### `pcrPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap.property.pcrPid"></a>

- *Type:* `number`

---

##### `pmtPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap.property.pmtPid"></a>

- *Type:* `number`

---

##### `privateMetadataPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap.property.privateMetadataPid"></a>

- *Type:* `number`

---

##### `scte27Pids`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap.property.scte27Pids"></a>

- *Type:* `number`[]

---

##### `scte35Pid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap.property.scte35Pid"></a>

- *Type:* `number`

---

##### `timedMetadataPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap.property.timedMetadataPid"></a>

- *Type:* `number`

---

##### `videoPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPacketIdentifiersMap.property.videoPid"></a>

- *Type:* `number`

---

### MediaLiveMultiplexProgramPipelineDetail <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPipelineDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMultiplexProgramPipelineDetail: medialive.MediaLiveMultiplexProgramPipelineDetail = { ... }
```

##### `activeChannelPipeline`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPipelineDetail.property.activeChannelPipeline"></a>

- *Type:* `string`

---

##### `pipelineId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPipelineDetail.property.pipelineId"></a>

- *Type:* `string`

---

### MediaLiveMultiplexProgramServiceDescriptor <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramServiceDescriptor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMultiplexProgramServiceDescriptor: medialive.MediaLiveMultiplexProgramServiceDescriptor = { ... }
```

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramServiceDescriptor.property.providerName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramServiceDescriptor.property.serviceName"></a>

- *Type:* `string`

---

### MediaLiveMultiplexProgramSettings <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMultiplexProgramSettings: medialive.MediaLiveMultiplexProgramSettings = { ... }
```

##### `programNumber`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSettings.property.programNumber"></a>

- *Type:* `number`

---

##### `preferredChannelPipeline`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSettings.property.preferredChannelPipeline"></a>

- *Type:* `string`

---

##### `serviceDescriptor`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSettings.property.serviceDescriptor"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramServiceDescriptor`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramServiceDescriptor)

---

##### `videoSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSettings.property.videoSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexVideoSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexVideoSettings)

---

### MediaLiveMultiplexProgramSummary <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMultiplexProgramSummary: medialive.MediaLiveMultiplexProgramSummary = { ... }
```

##### `channelId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSummary.property.channelId"></a>

- *Type:* `string`

---

##### `programName`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSummary.property.programName"></a>

- *Type:* `string`

---

### MediaLiveMultiplexSettings <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMultiplexSettings: medialive.MediaLiveMultiplexSettings = { ... }
```

##### `transportStreamBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexSettings.property.transportStreamBitrate"></a>

- *Type:* `number`

---

##### `transportStreamId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexSettings.property.transportStreamId"></a>

- *Type:* `number`

---

##### `maximumVideoBufferDelayMilliseconds`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexSettings.property.maximumVideoBufferDelayMilliseconds"></a>

- *Type:* `number`

---

##### `transportStreamReservedBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexSettings.property.transportStreamReservedBitrate"></a>

- *Type:* `number`

---

### MediaLiveMultiplexSettingsSummary <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexSettingsSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMultiplexSettingsSummary: medialive.MediaLiveMultiplexSettingsSummary = { ... }
```

##### `transportStreamBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexSettingsSummary.property.transportStreamBitrate"></a>

- *Type:* `number`

---

### MediaLiveMultiplexStatmuxVideoSettings <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexStatmuxVideoSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMultiplexStatmuxVideoSettings: medialive.MediaLiveMultiplexStatmuxVideoSettings = { ... }
```

##### `maximumBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexStatmuxVideoSettings.property.maximumBitrate"></a>

- *Type:* `number`

---

##### `minimumBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexStatmuxVideoSettings.property.minimumBitrate"></a>

- *Type:* `number`

---

##### `priority`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexStatmuxVideoSettings.property.priority"></a>

- *Type:* `number`

---

### MediaLiveMultiplexSummary <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMultiplexSummary: medialive.MediaLiveMultiplexSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexSummary.property.arn"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexSummary.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexSummary.property.id"></a>

- *Type:* `string`

---

##### `multiplexSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexSummary.property.multiplexSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexSettingsSummary`](#aws-cdk-sdk.medialive.MediaLiveMultiplexSettingsSummary)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexSummary.property.name"></a>

- *Type:* `string`

---

##### `pipelinesRunningCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexSummary.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `programCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexSummary.property.programCount"></a>

- *Type:* `number`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexSummary.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexSummary.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaLiveMultiplexVideoSettings <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexVideoSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveMultiplexVideoSettings: medialive.MediaLiveMultiplexVideoSettings = { ... }
```

##### `constantBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexVideoSettings.property.constantBitrate"></a>

- *Type:* `number`

---

##### `statmuxSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveMultiplexVideoSettings.property.statmuxSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexStatmuxVideoSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexStatmuxVideoSettings)

---

### MediaLiveNetworkInputSettings <a name="aws-cdk-sdk.medialive.MediaLiveNetworkInputSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveNetworkInputSettings: medialive.MediaLiveNetworkInputSettings = { ... }
```

##### `hlsInputSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveNetworkInputSettings.property.hlsInputSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveHlsInputSettings`](#aws-cdk-sdk.medialive.MediaLiveHlsInputSettings)

---

##### `serverValidation`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveNetworkInputSettings.property.serverValidation"></a>

- *Type:* `string`

---

### MediaLiveNielsenConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveNielsenConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveNielsenConfiguration: medialive.MediaLiveNielsenConfiguration = { ... }
```

##### `distributorId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveNielsenConfiguration.property.distributorId"></a>

- *Type:* `string`

---

##### `nielsenPcmToId3Tagging`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveNielsenConfiguration.property.nielsenPcmToId3Tagging"></a>

- *Type:* `string`

---

### MediaLiveOffering <a name="aws-cdk-sdk.medialive.MediaLiveOffering"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveOffering: medialive.MediaLiveOffering = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOffering.property.arn"></a>

- *Type:* `string`

---

##### `currencyCode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOffering.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOffering.property.duration"></a>

- *Type:* `number`

---

##### `durationUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOffering.property.durationUnits"></a>

- *Type:* `string`

---

##### `fixedPrice`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOffering.property.fixedPrice"></a>

- *Type:* `number`

---

##### `offeringDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOffering.property.offeringDescription"></a>

- *Type:* `string`

---

##### `offeringId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOffering.property.offeringId"></a>

- *Type:* `string`

---

##### `offeringType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOffering.property.offeringType"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOffering.property.region"></a>

- *Type:* `string`

---

##### `resourceSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOffering.property.resourceSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification`](#aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification)

---

##### `usagePrice`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOffering.property.usagePrice"></a>

- *Type:* `number`

---

### MediaLiveOutput <a name="aws-cdk-sdk.medialive.MediaLiveOutput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveOutput: medialive.MediaLiveOutput = { ... }
```

##### `outputSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutput.property.outputSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputSettings`](#aws-cdk-sdk.medialive.MediaLiveOutputSettings)

---

##### `audioDescriptionNames`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutput.property.audioDescriptionNames"></a>

- *Type:* `string`[]

---

##### `captionDescriptionNames`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutput.property.captionDescriptionNames"></a>

- *Type:* `string`[]

---

##### `outputName`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutput.property.outputName"></a>

- *Type:* `string`

---

##### `videoDescriptionName`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutput.property.videoDescriptionName"></a>

- *Type:* `string`

---

### MediaLiveOutputDestination <a name="aws-cdk-sdk.medialive.MediaLiveOutputDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveOutputDestination: medialive.MediaLiveOutputDestination = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputDestination.property.id"></a>

- *Type:* `string`

---

##### `mediaPackageSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputDestination.property.mediaPackageSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMediaPackageOutputDestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveMediaPackageOutputDestinationSettings)[]

---

##### `multiplexSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputDestination.property.multiplexSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramChannelDestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramChannelDestinationSettings)

---

##### `settings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputDestination.property.settings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputDestinationSettings`](#aws-cdk-sdk.medialive.MediaLiveOutputDestinationSettings)[]

---

### MediaLiveOutputDestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveOutputDestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveOutputDestinationSettings: medialive.MediaLiveOutputDestinationSettings = { ... }
```

##### `passwordParam`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputDestinationSettings.property.passwordParam"></a>

- *Type:* `string`

---

##### `streamName`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputDestinationSettings.property.streamName"></a>

- *Type:* `string`

---

##### `url`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputDestinationSettings.property.url"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputDestinationSettings.property.username"></a>

- *Type:* `string`

---

### MediaLiveOutputGroup <a name="aws-cdk-sdk.medialive.MediaLiveOutputGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveOutputGroup: medialive.MediaLiveOutputGroup = { ... }
```

##### `outputGroupSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputGroup.property.outputGroupSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputGroupSettings`](#aws-cdk-sdk.medialive.MediaLiveOutputGroupSettings)

---

##### `outputs`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputGroup.property.outputs"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutput`](#aws-cdk-sdk.medialive.MediaLiveOutput)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputGroup.property.name"></a>

- *Type:* `string`

---

### MediaLiveOutputGroupSettings <a name="aws-cdk-sdk.medialive.MediaLiveOutputGroupSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveOutputGroupSettings: medialive.MediaLiveOutputGroupSettings = { ... }
```

##### `archiveGroupSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputGroupSettings.property.archiveGroupSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveArchiveGroupSettings`](#aws-cdk-sdk.medialive.MediaLiveArchiveGroupSettings)

---

##### `frameCaptureGroupSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputGroupSettings.property.frameCaptureGroupSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveFrameCaptureGroupSettings`](#aws-cdk-sdk.medialive.MediaLiveFrameCaptureGroupSettings)

---

##### `hlsGroupSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputGroupSettings.property.hlsGroupSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings`](#aws-cdk-sdk.medialive.MediaLiveHlsGroupSettings)

---

##### `mediaPackageGroupSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputGroupSettings.property.mediaPackageGroupSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMediaPackageGroupSettings`](#aws-cdk-sdk.medialive.MediaLiveMediaPackageGroupSettings)

---

##### `msSmoothGroupSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputGroupSettings.property.msSmoothGroupSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings`](#aws-cdk-sdk.medialive.MediaLiveMsSmoothGroupSettings)

---

##### `multiplexGroupSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputGroupSettings.property.multiplexGroupSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexGroupSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexGroupSettings)

---

##### `rtmpGroupSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputGroupSettings.property.rtmpGroupSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveRtmpGroupSettings`](#aws-cdk-sdk.medialive.MediaLiveRtmpGroupSettings)

---

##### `udpGroupSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputGroupSettings.property.udpGroupSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUdpGroupSettings`](#aws-cdk-sdk.medialive.MediaLiveUdpGroupSettings)

---

### MediaLiveOutputLocationRef <a name="aws-cdk-sdk.medialive.MediaLiveOutputLocationRef"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveOutputLocationRef: medialive.MediaLiveOutputLocationRef = { ... }
```

##### `destinationRefId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputLocationRef.property.destinationRefId"></a>

- *Type:* `string`

---

### MediaLiveOutputSettings <a name="aws-cdk-sdk.medialive.MediaLiveOutputSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveOutputSettings: medialive.MediaLiveOutputSettings = { ... }
```

##### `archiveOutputSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputSettings.property.archiveOutputSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveArchiveOutputSettings`](#aws-cdk-sdk.medialive.MediaLiveArchiveOutputSettings)

---

##### `frameCaptureOutputSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputSettings.property.frameCaptureOutputSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveFrameCaptureOutputSettings`](#aws-cdk-sdk.medialive.MediaLiveFrameCaptureOutputSettings)

---

##### `hlsOutputSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputSettings.property.hlsOutputSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveHlsOutputSettings`](#aws-cdk-sdk.medialive.MediaLiveHlsOutputSettings)

---

##### `mediaPackageOutputSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputSettings.property.mediaPackageOutputSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMediaPackageOutputSettings`](#aws-cdk-sdk.medialive.MediaLiveMediaPackageOutputSettings)

---

##### `msSmoothOutputSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputSettings.property.msSmoothOutputSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMsSmoothOutputSettings`](#aws-cdk-sdk.medialive.MediaLiveMsSmoothOutputSettings)

---

##### `multiplexOutputSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputSettings.property.multiplexOutputSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexOutputSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexOutputSettings)

---

##### `rtmpOutputSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputSettings.property.rtmpOutputSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveRtmpOutputSettings`](#aws-cdk-sdk.medialive.MediaLiveRtmpOutputSettings)

---

##### `udpOutputSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveOutputSettings.property.udpOutputSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUdpOutputSettings`](#aws-cdk-sdk.medialive.MediaLiveUdpOutputSettings)

---

### MediaLivePassThroughSettings <a name="aws-cdk-sdk.medialive.MediaLivePassThroughSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLivePassThroughSettings: medialive.MediaLivePassThroughSettings = { ... }
```

### MediaLivePauseStateScheduleActionSettings <a name="aws-cdk-sdk.medialive.MediaLivePauseStateScheduleActionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLivePauseStateScheduleActionSettings: medialive.MediaLivePauseStateScheduleActionSettings = { ... }
```

##### `pipelines`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLivePauseStateScheduleActionSettings.property.pipelines"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePipelinePauseStateSettings`](#aws-cdk-sdk.medialive.MediaLivePipelinePauseStateSettings)[]

---

### MediaLivePipelineDetail <a name="aws-cdk-sdk.medialive.MediaLivePipelineDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLivePipelineDetail: medialive.MediaLivePipelineDetail = { ... }
```

##### `activeInputAttachmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLivePipelineDetail.property.activeInputAttachmentName"></a>

- *Type:* `string`

---

##### `activeInputSwitchActionName`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLivePipelineDetail.property.activeInputSwitchActionName"></a>

- *Type:* `string`

---

##### `pipelineId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLivePipelineDetail.property.pipelineId"></a>

- *Type:* `string`

---

### MediaLivePipelinePauseStateSettings <a name="aws-cdk-sdk.medialive.MediaLivePipelinePauseStateSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLivePipelinePauseStateSettings: medialive.MediaLivePipelinePauseStateSettings = { ... }
```

##### `pipelineId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLivePipelinePauseStateSettings.property.pipelineId"></a>

- *Type:* `string`

---

### MediaLivePurchaseOfferingRequest <a name="aws-cdk-sdk.medialive.MediaLivePurchaseOfferingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLivePurchaseOfferingRequest: medialive.MediaLivePurchaseOfferingRequest = { ... }
```

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLivePurchaseOfferingRequest.property.count"></a>

- *Type:* `number`

---

##### `offeringId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLivePurchaseOfferingRequest.property.offeringId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLivePurchaseOfferingRequest.property.name"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLivePurchaseOfferingRequest.property.requestId"></a>

- *Type:* `string`

---

##### `start`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLivePurchaseOfferingRequest.property.start"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLivePurchaseOfferingRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaLivePurchaseOfferingResponse <a name="aws-cdk-sdk.medialive.MediaLivePurchaseOfferingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLivePurchaseOfferingResponse: medialive.MediaLivePurchaseOfferingResponse = { ... }
```

##### `reservation`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLivePurchaseOfferingResponse.property.reservation"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveReservation`](#aws-cdk-sdk.medialive.MediaLiveReservation)

---

### MediaLiveRawSettings <a name="aws-cdk-sdk.medialive.MediaLiveRawSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveRawSettings: medialive.MediaLiveRawSettings = { ... }
```

### MediaLiveRec601Settings <a name="aws-cdk-sdk.medialive.MediaLiveRec601Settings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveRec601Settings: medialive.MediaLiveRec601Settings = { ... }
```

### MediaLiveRec709Settings <a name="aws-cdk-sdk.medialive.MediaLiveRec709Settings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveRec709Settings: medialive.MediaLiveRec709Settings = { ... }
```

### MediaLiveRejectInputDeviceTransferRequest <a name="aws-cdk-sdk.medialive.MediaLiveRejectInputDeviceTransferRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveRejectInputDeviceTransferRequest: medialive.MediaLiveRejectInputDeviceTransferRequest = { ... }
```

##### `inputDeviceId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveRejectInputDeviceTransferRequest.property.inputDeviceId"></a>

- *Type:* `string`

---

### MediaLiveRejectInputDeviceTransferResponse <a name="aws-cdk-sdk.medialive.MediaLiveRejectInputDeviceTransferResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveRejectInputDeviceTransferResponse: medialive.MediaLiveRejectInputDeviceTransferResponse = { ... }
```

### MediaLiveRemixSettings <a name="aws-cdk-sdk.medialive.MediaLiveRemixSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveRemixSettings: medialive.MediaLiveRemixSettings = { ... }
```

##### `channelMappings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveRemixSettings.property.channelMappings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioChannelMapping`](#aws-cdk-sdk.medialive.MediaLiveAudioChannelMapping)[]

---

##### `channelsIn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveRemixSettings.property.channelsIn"></a>

- *Type:* `number`

---

##### `channelsOut`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveRemixSettings.property.channelsOut"></a>

- *Type:* `number`

---

### MediaLiveReservation <a name="aws-cdk-sdk.medialive.MediaLiveReservation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveReservation: medialive.MediaLiveReservation = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.arn"></a>

- *Type:* `string`

---

##### `count`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.count"></a>

- *Type:* `number`

---

##### `currencyCode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.duration"></a>

- *Type:* `number`

---

##### `durationUnits`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.durationUnits"></a>

- *Type:* `string`

---

##### `end`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.end"></a>

- *Type:* `string`

---

##### `fixedPrice`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.fixedPrice"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.name"></a>

- *Type:* `string`

---

##### `offeringDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.offeringDescription"></a>

- *Type:* `string`

---

##### `offeringId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.offeringId"></a>

- *Type:* `string`

---

##### `offeringType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.offeringType"></a>

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.region"></a>

- *Type:* `string`

---

##### `reservationId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.reservationId"></a>

- *Type:* `string`

---

##### `resourceSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.resourceSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification`](#aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification)

---

##### `start`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.start"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `usagePrice`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservation.property.usagePrice"></a>

- *Type:* `number`

---

### MediaLiveReservationResourceSpecification <a name="aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveReservationResourceSpecification: medialive.MediaLiveReservationResourceSpecification = { ... }
```

##### `channelClass`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification.property.channelClass"></a>

- *Type:* `string`

---

##### `codec`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification.property.codec"></a>

- *Type:* `string`

---

##### `maximumBitrate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification.property.maximumBitrate"></a>

- *Type:* `string`

---

##### `maximumFramerate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification.property.maximumFramerate"></a>

- *Type:* `string`

---

##### `resolution`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification.property.resolution"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification.property.resourceType"></a>

- *Type:* `string`

---

##### `specialFeature`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification.property.specialFeature"></a>

- *Type:* `string`

---

##### `videoQuality`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveReservationResourceSpecification.property.videoQuality"></a>

- *Type:* `string`

---

### MediaLiveRtmpCaptionInfoDestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveRtmpCaptionInfoDestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveRtmpCaptionInfoDestinationSettings: medialive.MediaLiveRtmpCaptionInfoDestinationSettings = { ... }
```

### MediaLiveRtmpGroupSettings <a name="aws-cdk-sdk.medialive.MediaLiveRtmpGroupSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveRtmpGroupSettings: medialive.MediaLiveRtmpGroupSettings = { ... }
```

##### `adMarkers`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveRtmpGroupSettings.property.adMarkers"></a>

- *Type:* `string`[]

---

##### `authenticationScheme`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveRtmpGroupSettings.property.authenticationScheme"></a>

- *Type:* `string`

---

##### `cacheFullBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveRtmpGroupSettings.property.cacheFullBehavior"></a>

- *Type:* `string`

---

##### `cacheLength`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveRtmpGroupSettings.property.cacheLength"></a>

- *Type:* `number`

---

##### `captionData`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveRtmpGroupSettings.property.captionData"></a>

- *Type:* `string`

---

##### `inputLossAction`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveRtmpGroupSettings.property.inputLossAction"></a>

- *Type:* `string`

---

##### `restartDelay`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveRtmpGroupSettings.property.restartDelay"></a>

- *Type:* `number`

---

### MediaLiveRtmpOutputSettings <a name="aws-cdk-sdk.medialive.MediaLiveRtmpOutputSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveRtmpOutputSettings: medialive.MediaLiveRtmpOutputSettings = { ... }
```

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveRtmpOutputSettings.property.destination"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputLocationRef`](#aws-cdk-sdk.medialive.MediaLiveOutputLocationRef)

---

##### `certificateMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveRtmpOutputSettings.property.certificateMode"></a>

- *Type:* `string`

---

##### `connectionRetryInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveRtmpOutputSettings.property.connectionRetryInterval"></a>

- *Type:* `number`

---

##### `numRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveRtmpOutputSettings.property.numRetries"></a>

- *Type:* `number`

---

### MediaLiveScheduleAction <a name="aws-cdk-sdk.medialive.MediaLiveScheduleAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveScheduleAction: medialive.MediaLiveScheduleAction = { ... }
```

##### `actionName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScheduleAction.property.actionName"></a>

- *Type:* `string`

---

##### `scheduleActionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScheduleAction.property.scheduleActionSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScheduleActionSettings`](#aws-cdk-sdk.medialive.MediaLiveScheduleActionSettings)

---

##### `scheduleActionStartSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScheduleAction.property.scheduleActionStartSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScheduleActionStartSettings`](#aws-cdk-sdk.medialive.MediaLiveScheduleActionStartSettings)

---

### MediaLiveScheduleActionSettings <a name="aws-cdk-sdk.medialive.MediaLiveScheduleActionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveScheduleActionSettings: medialive.MediaLiveScheduleActionSettings = { ... }
```

##### `hlsId3SegmentTaggingSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScheduleActionSettings.property.hlsId3SegmentTaggingSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveHlsId3SegmentTaggingScheduleActionSettings`](#aws-cdk-sdk.medialive.MediaLiveHlsId3SegmentTaggingScheduleActionSettings)

---

##### `hlsTimedMetadataSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScheduleActionSettings.property.hlsTimedMetadataSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveHlsTimedMetadataScheduleActionSettings`](#aws-cdk-sdk.medialive.MediaLiveHlsTimedMetadataScheduleActionSettings)

---

##### `inputPrepareSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScheduleActionSettings.property.inputPrepareSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputPrepareScheduleActionSettings`](#aws-cdk-sdk.medialive.MediaLiveInputPrepareScheduleActionSettings)

---

##### `inputSwitchSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScheduleActionSettings.property.inputSwitchSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSwitchScheduleActionSettings`](#aws-cdk-sdk.medialive.MediaLiveInputSwitchScheduleActionSettings)

---

##### `pauseStateSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScheduleActionSettings.property.pauseStateSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePauseStateScheduleActionSettings`](#aws-cdk-sdk.medialive.MediaLivePauseStateScheduleActionSettings)

---

##### `scte35ReturnToNetworkSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScheduleActionSettings.property.scte35ReturnToNetworkSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScte35ReturnToNetworkScheduleActionSettings`](#aws-cdk-sdk.medialive.MediaLiveScte35ReturnToNetworkScheduleActionSettings)

---

##### `scte35SpliceInsertSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScheduleActionSettings.property.scte35SpliceInsertSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScte35SpliceInsertScheduleActionSettings`](#aws-cdk-sdk.medialive.MediaLiveScte35SpliceInsertScheduleActionSettings)

---

##### `scte35TimeSignalSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScheduleActionSettings.property.scte35TimeSignalSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScte35TimeSignalScheduleActionSettings`](#aws-cdk-sdk.medialive.MediaLiveScte35TimeSignalScheduleActionSettings)

---

##### `staticImageActivateSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScheduleActionSettings.property.staticImageActivateSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStaticImageActivateScheduleActionSettings`](#aws-cdk-sdk.medialive.MediaLiveStaticImageActivateScheduleActionSettings)

---

##### `staticImageDeactivateSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScheduleActionSettings.property.staticImageDeactivateSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStaticImageDeactivateScheduleActionSettings`](#aws-cdk-sdk.medialive.MediaLiveStaticImageDeactivateScheduleActionSettings)

---

### MediaLiveScheduleActionStartSettings <a name="aws-cdk-sdk.medialive.MediaLiveScheduleActionStartSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveScheduleActionStartSettings: medialive.MediaLiveScheduleActionStartSettings = { ... }
```

##### `fixedModeScheduleActionStartSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScheduleActionStartSettings.property.fixedModeScheduleActionStartSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveFixedModeScheduleActionStartSettings`](#aws-cdk-sdk.medialive.MediaLiveFixedModeScheduleActionStartSettings)

---

##### `followModeScheduleActionStartSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScheduleActionStartSettings.property.followModeScheduleActionStartSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveFollowModeScheduleActionStartSettings`](#aws-cdk-sdk.medialive.MediaLiveFollowModeScheduleActionStartSettings)

---

##### `immediateModeScheduleActionStartSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScheduleActionStartSettings.property.immediateModeScheduleActionStartSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveImmediateModeScheduleActionStartSettings`](#aws-cdk-sdk.medialive.MediaLiveImmediateModeScheduleActionStartSettings)

---

### MediaLiveScte20PlusEmbeddedDestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveScte20PlusEmbeddedDestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveScte20PlusEmbeddedDestinationSettings: medialive.MediaLiveScte20PlusEmbeddedDestinationSettings = { ... }
```

### MediaLiveScte20SourceSettings <a name="aws-cdk-sdk.medialive.MediaLiveScte20SourceSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveScte20SourceSettings: medialive.MediaLiveScte20SourceSettings = { ... }
```

##### `convert608To708`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte20SourceSettings.property.convert608To708"></a>

- *Type:* `string`

---

##### `source608ChannelNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte20SourceSettings.property.source608ChannelNumber"></a>

- *Type:* `number`

---

### MediaLiveScte27DestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveScte27DestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveScte27DestinationSettings: medialive.MediaLiveScte27DestinationSettings = { ... }
```

### MediaLiveScte27SourceSettings <a name="aws-cdk-sdk.medialive.MediaLiveScte27SourceSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveScte27SourceSettings: medialive.MediaLiveScte27SourceSettings = { ... }
```

##### `pid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte27SourceSettings.property.pid"></a>

- *Type:* `number`

---

### MediaLiveScte35DeliveryRestrictions <a name="aws-cdk-sdk.medialive.MediaLiveScte35DeliveryRestrictions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveScte35DeliveryRestrictions: medialive.MediaLiveScte35DeliveryRestrictions = { ... }
```

##### `archiveAllowedFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35DeliveryRestrictions.property.archiveAllowedFlag"></a>

- *Type:* `string`

---

##### `deviceRestrictions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35DeliveryRestrictions.property.deviceRestrictions"></a>

- *Type:* `string`

---

##### `noRegionalBlackoutFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35DeliveryRestrictions.property.noRegionalBlackoutFlag"></a>

- *Type:* `string`

---

##### `webDeliveryAllowedFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35DeliveryRestrictions.property.webDeliveryAllowedFlag"></a>

- *Type:* `string`

---

### MediaLiveScte35Descriptor <a name="aws-cdk-sdk.medialive.MediaLiveScte35Descriptor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveScte35Descriptor: medialive.MediaLiveScte35Descriptor = { ... }
```

##### `scte35DescriptorSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35Descriptor.property.scte35DescriptorSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScte35DescriptorSettings`](#aws-cdk-sdk.medialive.MediaLiveScte35DescriptorSettings)

---

### MediaLiveScte35DescriptorSettings <a name="aws-cdk-sdk.medialive.MediaLiveScte35DescriptorSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveScte35DescriptorSettings: medialive.MediaLiveScte35DescriptorSettings = { ... }
```

##### `segmentationDescriptorScte35DescriptorSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35DescriptorSettings.property.segmentationDescriptorScte35DescriptorSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScte35SegmentationDescriptor`](#aws-cdk-sdk.medialive.MediaLiveScte35SegmentationDescriptor)

---

### MediaLiveScte35ReturnToNetworkScheduleActionSettings <a name="aws-cdk-sdk.medialive.MediaLiveScte35ReturnToNetworkScheduleActionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveScte35ReturnToNetworkScheduleActionSettings: medialive.MediaLiveScte35ReturnToNetworkScheduleActionSettings = { ... }
```

##### `spliceEventId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35ReturnToNetworkScheduleActionSettings.property.spliceEventId"></a>

- *Type:* `number`

---

### MediaLiveScte35SegmentationDescriptor <a name="aws-cdk-sdk.medialive.MediaLiveScte35SegmentationDescriptor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveScte35SegmentationDescriptor: medialive.MediaLiveScte35SegmentationDescriptor = { ... }
```

##### `segmentationCancelIndicator`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35SegmentationDescriptor.property.segmentationCancelIndicator"></a>

- *Type:* `string`

---

##### `segmentationEventId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35SegmentationDescriptor.property.segmentationEventId"></a>

- *Type:* `number`

---

##### `deliveryRestrictions`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35SegmentationDescriptor.property.deliveryRestrictions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScte35DeliveryRestrictions`](#aws-cdk-sdk.medialive.MediaLiveScte35DeliveryRestrictions)

---

##### `segmentationDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35SegmentationDescriptor.property.segmentationDuration"></a>

- *Type:* `number`

---

##### `segmentationTypeId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35SegmentationDescriptor.property.segmentationTypeId"></a>

- *Type:* `number`

---

##### `segmentationUpid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35SegmentationDescriptor.property.segmentationUpid"></a>

- *Type:* `string`

---

##### `segmentationUpidType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35SegmentationDescriptor.property.segmentationUpidType"></a>

- *Type:* `number`

---

##### `segmentNum`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35SegmentationDescriptor.property.segmentNum"></a>

- *Type:* `number`

---

##### `segmentsExpected`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35SegmentationDescriptor.property.segmentsExpected"></a>

- *Type:* `number`

---

##### `subSegmentNum`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35SegmentationDescriptor.property.subSegmentNum"></a>

- *Type:* `number`

---

##### `subSegmentsExpected`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35SegmentationDescriptor.property.subSegmentsExpected"></a>

- *Type:* `number`

---

### MediaLiveScte35SpliceInsert <a name="aws-cdk-sdk.medialive.MediaLiveScte35SpliceInsert"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveScte35SpliceInsert: medialive.MediaLiveScte35SpliceInsert = { ... }
```

##### `adAvailOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35SpliceInsert.property.adAvailOffset"></a>

- *Type:* `number`

---

##### `noRegionalBlackoutFlag`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35SpliceInsert.property.noRegionalBlackoutFlag"></a>

- *Type:* `string`

---

##### `webDeliveryAllowedFlag`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35SpliceInsert.property.webDeliveryAllowedFlag"></a>

- *Type:* `string`

---

### MediaLiveScte35SpliceInsertScheduleActionSettings <a name="aws-cdk-sdk.medialive.MediaLiveScte35SpliceInsertScheduleActionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveScte35SpliceInsertScheduleActionSettings: medialive.MediaLiveScte35SpliceInsertScheduleActionSettings = { ... }
```

##### `spliceEventId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35SpliceInsertScheduleActionSettings.property.spliceEventId"></a>

- *Type:* `number`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35SpliceInsertScheduleActionSettings.property.duration"></a>

- *Type:* `number`

---

### MediaLiveScte35TimeSignalApos <a name="aws-cdk-sdk.medialive.MediaLiveScte35TimeSignalApos"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveScte35TimeSignalApos: medialive.MediaLiveScte35TimeSignalApos = { ... }
```

##### `adAvailOffset`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35TimeSignalApos.property.adAvailOffset"></a>

- *Type:* `number`

---

##### `noRegionalBlackoutFlag`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35TimeSignalApos.property.noRegionalBlackoutFlag"></a>

- *Type:* `string`

---

##### `webDeliveryAllowedFlag`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35TimeSignalApos.property.webDeliveryAllowedFlag"></a>

- *Type:* `string`

---

### MediaLiveScte35TimeSignalScheduleActionSettings <a name="aws-cdk-sdk.medialive.MediaLiveScte35TimeSignalScheduleActionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveScte35TimeSignalScheduleActionSettings: medialive.MediaLiveScte35TimeSignalScheduleActionSettings = { ... }
```

##### `scte35Descriptors`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveScte35TimeSignalScheduleActionSettings.property.scte35Descriptors"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScte35Descriptor`](#aws-cdk-sdk.medialive.MediaLiveScte35Descriptor)[]

---

### MediaLiveSmpteTtDestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveSmpteTtDestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveSmpteTtDestinationSettings: medialive.MediaLiveSmpteTtDestinationSettings = { ... }
```

### MediaLiveStandardHlsSettings <a name="aws-cdk-sdk.medialive.MediaLiveStandardHlsSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveStandardHlsSettings: medialive.MediaLiveStandardHlsSettings = { ... }
```

##### `m3U8Settings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStandardHlsSettings.property.m3U8Settings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveM3u8Settings`](#aws-cdk-sdk.medialive.MediaLiveM3u8Settings)

---

##### `audioRenditionSets`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStandardHlsSettings.property.audioRenditionSets"></a>

- *Type:* `string`

---

### MediaLiveStartChannelRequest <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveStartChannelRequest: medialive.MediaLiveStartChannelRequest = { ... }
```

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelRequest.property.channelId"></a>

- *Type:* `string`

---

### MediaLiveStartChannelResponse <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveStartChannelResponse: medialive.MediaLiveStartChannelResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelResponse.property.arn"></a>

- *Type:* `string`

---

##### `cdiInputSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelResponse.property.cdiInputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification)

---

##### `channelClass`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelResponse.property.channelClass"></a>

- *Type:* `string`

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelResponse.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveOutputDestination)[]

---

##### `egressEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelResponse.property.egressEndpoints"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint`](#aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint)[]

---

##### `encoderSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelResponse.property.encoderSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveEncoderSettings`](#aws-cdk-sdk.medialive.MediaLiveEncoderSettings)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelResponse.property.id"></a>

- *Type:* `string`

---

##### `inputAttachments`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelResponse.property.inputAttachments"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputAttachment`](#aws-cdk-sdk.medialive.MediaLiveInputAttachment)[]

---

##### `inputSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelResponse.property.inputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveInputSpecification)

---

##### `logLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelResponse.property.logLevel"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelResponse.property.name"></a>

- *Type:* `string`

---

##### `pipelineDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelResponse.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePipelineDetail`](#aws-cdk-sdk.medialive.MediaLivePipelineDetail)[]

---

##### `pipelinesRunningCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelResponse.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelResponse.property.roleArn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelResponse.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartChannelResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaLiveStartMultiplexRequest <a name="aws-cdk-sdk.medialive.MediaLiveStartMultiplexRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveStartMultiplexRequest: medialive.MediaLiveStartMultiplexRequest = { ... }
```

##### `multiplexId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartMultiplexRequest.property.multiplexId"></a>

- *Type:* `string`

---

### MediaLiveStartMultiplexResponse <a name="aws-cdk-sdk.medialive.MediaLiveStartMultiplexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveStartMultiplexResponse: medialive.MediaLiveStartMultiplexResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartMultiplexResponse.property.arn"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartMultiplexResponse.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartMultiplexResponse.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartMultiplexResponse.property.id"></a>

- *Type:* `string`

---

##### `multiplexSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartMultiplexResponse.property.multiplexSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexSettings)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartMultiplexResponse.property.name"></a>

- *Type:* `string`

---

##### `pipelinesRunningCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartMultiplexResponse.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `programCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartMultiplexResponse.property.programCount"></a>

- *Type:* `number`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartMultiplexResponse.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartMultiplexResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaLiveStartTimecode <a name="aws-cdk-sdk.medialive.MediaLiveStartTimecode"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveStartTimecode: medialive.MediaLiveStartTimecode = { ... }
```

##### `timecode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStartTimecode.property.timecode"></a>

- *Type:* `string`

---

### MediaLiveStaticImageActivateScheduleActionSettings <a name="aws-cdk-sdk.medialive.MediaLiveStaticImageActivateScheduleActionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveStaticImageActivateScheduleActionSettings: medialive.MediaLiveStaticImageActivateScheduleActionSettings = { ... }
```

##### `image`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStaticImageActivateScheduleActionSettings.property.image"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputLocation`](#aws-cdk-sdk.medialive.MediaLiveInputLocation)

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStaticImageActivateScheduleActionSettings.property.duration"></a>

- *Type:* `number`

---

##### `fadeIn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStaticImageActivateScheduleActionSettings.property.fadeIn"></a>

- *Type:* `number`

---

##### `fadeOut`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStaticImageActivateScheduleActionSettings.property.fadeOut"></a>

- *Type:* `number`

---

##### `height`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStaticImageActivateScheduleActionSettings.property.height"></a>

- *Type:* `number`

---

##### `imageX`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStaticImageActivateScheduleActionSettings.property.imageX"></a>

- *Type:* `number`

---

##### `imageY`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStaticImageActivateScheduleActionSettings.property.imageY"></a>

- *Type:* `number`

---

##### `layer`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStaticImageActivateScheduleActionSettings.property.layer"></a>

- *Type:* `number`

---

##### `opacity`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStaticImageActivateScheduleActionSettings.property.opacity"></a>

- *Type:* `number`

---

##### `width`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStaticImageActivateScheduleActionSettings.property.width"></a>

- *Type:* `number`

---

### MediaLiveStaticImageDeactivateScheduleActionSettings <a name="aws-cdk-sdk.medialive.MediaLiveStaticImageDeactivateScheduleActionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveStaticImageDeactivateScheduleActionSettings: medialive.MediaLiveStaticImageDeactivateScheduleActionSettings = { ... }
```

##### `fadeOut`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStaticImageDeactivateScheduleActionSettings.property.fadeOut"></a>

- *Type:* `number`

---

##### `layer`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStaticImageDeactivateScheduleActionSettings.property.layer"></a>

- *Type:* `number`

---

### MediaLiveStaticKeySettings <a name="aws-cdk-sdk.medialive.MediaLiveStaticKeySettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveStaticKeySettings: medialive.MediaLiveStaticKeySettings = { ... }
```

##### `staticKeyValue`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStaticKeySettings.property.staticKeyValue"></a>

- *Type:* `string`

---

##### `keyProviderServer`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStaticKeySettings.property.keyProviderServer"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputLocation`](#aws-cdk-sdk.medialive.MediaLiveInputLocation)

---

### MediaLiveStopChannelRequest <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveStopChannelRequest: medialive.MediaLiveStopChannelRequest = { ... }
```

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelRequest.property.channelId"></a>

- *Type:* `string`

---

### MediaLiveStopChannelResponse <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveStopChannelResponse: medialive.MediaLiveStopChannelResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelResponse.property.arn"></a>

- *Type:* `string`

---

##### `cdiInputSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelResponse.property.cdiInputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification)

---

##### `channelClass`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelResponse.property.channelClass"></a>

- *Type:* `string`

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelResponse.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveOutputDestination)[]

---

##### `egressEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelResponse.property.egressEndpoints"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint`](#aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint)[]

---

##### `encoderSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelResponse.property.encoderSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveEncoderSettings`](#aws-cdk-sdk.medialive.MediaLiveEncoderSettings)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelResponse.property.id"></a>

- *Type:* `string`

---

##### `inputAttachments`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelResponse.property.inputAttachments"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputAttachment`](#aws-cdk-sdk.medialive.MediaLiveInputAttachment)[]

---

##### `inputSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelResponse.property.inputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveInputSpecification)

---

##### `logLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelResponse.property.logLevel"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelResponse.property.name"></a>

- *Type:* `string`

---

##### `pipelineDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelResponse.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePipelineDetail`](#aws-cdk-sdk.medialive.MediaLivePipelineDetail)[]

---

##### `pipelinesRunningCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelResponse.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelResponse.property.roleArn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelResponse.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopChannelResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaLiveStopMultiplexRequest <a name="aws-cdk-sdk.medialive.MediaLiveStopMultiplexRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveStopMultiplexRequest: medialive.MediaLiveStopMultiplexRequest = { ... }
```

##### `multiplexId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopMultiplexRequest.property.multiplexId"></a>

- *Type:* `string`

---

### MediaLiveStopMultiplexResponse <a name="aws-cdk-sdk.medialive.MediaLiveStopMultiplexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveStopMultiplexResponse: medialive.MediaLiveStopMultiplexResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopMultiplexResponse.property.arn"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopMultiplexResponse.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopMultiplexResponse.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination)[]

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopMultiplexResponse.property.id"></a>

- *Type:* `string`

---

##### `multiplexSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopMultiplexResponse.property.multiplexSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexSettings)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopMultiplexResponse.property.name"></a>

- *Type:* `string`

---

##### `pipelinesRunningCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopMultiplexResponse.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `programCount`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopMultiplexResponse.property.programCount"></a>

- *Type:* `number`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopMultiplexResponse.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopMultiplexResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### MediaLiveStopTimecode <a name="aws-cdk-sdk.medialive.MediaLiveStopTimecode"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveStopTimecode: medialive.MediaLiveStopTimecode = { ... }
```

##### `lastFrameClippingBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopTimecode.property.lastFrameClippingBehavior"></a>

- *Type:* `string`

---

##### `timecode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveStopTimecode.property.timecode"></a>

- *Type:* `string`

---

### MediaLiveTeletextDestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveTeletextDestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveTeletextDestinationSettings: medialive.MediaLiveTeletextDestinationSettings = { ... }
```

### MediaLiveTeletextSourceSettings <a name="aws-cdk-sdk.medialive.MediaLiveTeletextSourceSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveTeletextSourceSettings: medialive.MediaLiveTeletextSourceSettings = { ... }
```

##### `pageNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveTeletextSourceSettings.property.pageNumber"></a>

- *Type:* `string`

---

### MediaLiveTemporalFilterSettings <a name="aws-cdk-sdk.medialive.MediaLiveTemporalFilterSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveTemporalFilterSettings: medialive.MediaLiveTemporalFilterSettings = { ... }
```

##### `postFilterSharpening`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveTemporalFilterSettings.property.postFilterSharpening"></a>

- *Type:* `string`

---

##### `strength`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveTemporalFilterSettings.property.strength"></a>

- *Type:* `string`

---

### MediaLiveTimecodeConfig <a name="aws-cdk-sdk.medialive.MediaLiveTimecodeConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveTimecodeConfig: medialive.MediaLiveTimecodeConfig = { ... }
```

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveTimecodeConfig.property.source"></a>

- *Type:* `string`

---

##### `syncThreshold`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveTimecodeConfig.property.syncThreshold"></a>

- *Type:* `number`

---

### MediaLiveTransferInputDeviceRequest <a name="aws-cdk-sdk.medialive.MediaLiveTransferInputDeviceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveTransferInputDeviceRequest: medialive.MediaLiveTransferInputDeviceRequest = { ... }
```

##### `inputDeviceId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveTransferInputDeviceRequest.property.inputDeviceId"></a>

- *Type:* `string`

---

##### `targetCustomerId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveTransferInputDeviceRequest.property.targetCustomerId"></a>

- *Type:* `string`

---

##### `transferMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveTransferInputDeviceRequest.property.transferMessage"></a>

- *Type:* `string`

---

### MediaLiveTransferInputDeviceResponse <a name="aws-cdk-sdk.medialive.MediaLiveTransferInputDeviceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveTransferInputDeviceResponse: medialive.MediaLiveTransferInputDeviceResponse = { ... }
```

### MediaLiveTransferringInputDeviceSummary <a name="aws-cdk-sdk.medialive.MediaLiveTransferringInputDeviceSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveTransferringInputDeviceSummary: medialive.MediaLiveTransferringInputDeviceSummary = { ... }
```

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveTransferringInputDeviceSummary.property.id"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveTransferringInputDeviceSummary.property.message"></a>

- *Type:* `string`

---

##### `targetCustomerId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveTransferringInputDeviceSummary.property.targetCustomerId"></a>

- *Type:* `string`

---

##### `transferType`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveTransferringInputDeviceSummary.property.transferType"></a>

- *Type:* `string`

---

### MediaLiveTtmlDestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveTtmlDestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveTtmlDestinationSettings: medialive.MediaLiveTtmlDestinationSettings = { ... }
```

##### `styleControl`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveTtmlDestinationSettings.property.styleControl"></a>

- *Type:* `string`

---

### MediaLiveUdpContainerSettings <a name="aws-cdk-sdk.medialive.MediaLiveUdpContainerSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUdpContainerSettings: medialive.MediaLiveUdpContainerSettings = { ... }
```

##### `m2TsSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUdpContainerSettings.property.m2TsSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveM2tsSettings`](#aws-cdk-sdk.medialive.MediaLiveM2tsSettings)

---

### MediaLiveUdpGroupSettings <a name="aws-cdk-sdk.medialive.MediaLiveUdpGroupSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUdpGroupSettings: medialive.MediaLiveUdpGroupSettings = { ... }
```

##### `inputLossAction`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUdpGroupSettings.property.inputLossAction"></a>

- *Type:* `string`

---

##### `timedMetadataId3Frame`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUdpGroupSettings.property.timedMetadataId3Frame"></a>

- *Type:* `string`

---

##### `timedMetadataId3Period`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUdpGroupSettings.property.timedMetadataId3Period"></a>

- *Type:* `number`

---

### MediaLiveUdpOutputSettings <a name="aws-cdk-sdk.medialive.MediaLiveUdpOutputSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUdpOutputSettings: medialive.MediaLiveUdpOutputSettings = { ... }
```

##### `containerSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUdpOutputSettings.property.containerSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUdpContainerSettings`](#aws-cdk-sdk.medialive.MediaLiveUdpContainerSettings)

---

##### `destination`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUdpOutputSettings.property.destination"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputLocationRef`](#aws-cdk-sdk.medialive.MediaLiveOutputLocationRef)

---

##### `bufferMsec`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUdpOutputSettings.property.bufferMsec"></a>

- *Type:* `number`

---

##### `fecOutputSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUdpOutputSettings.property.fecOutputSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveFecOutputSettings`](#aws-cdk-sdk.medialive.MediaLiveFecOutputSettings)

---

### MediaLiveUpdateChannelClassRequest <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUpdateChannelClassRequest: medialive.MediaLiveUpdateChannelClassRequest = { ... }
```

##### `channelClass`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest.property.channelClass"></a>

- *Type:* `string`

---

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest.property.channelId"></a>

- *Type:* `string`

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveOutputDestination)[]

---

### MediaLiveUpdateChannelClassResponse <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUpdateChannelClassResponse: medialive.MediaLiveUpdateChannelClassResponse = { ... }
```

##### `channel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassResponse.property.channel"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannel`](#aws-cdk-sdk.medialive.MediaLiveChannel)

---

### MediaLiveUpdateChannelRequest <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUpdateChannelRequest: medialive.MediaLiveUpdateChannelRequest = { ... }
```

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest.property.channelId"></a>

- *Type:* `string`

---

##### `cdiInputSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest.property.cdiInputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveCdiInputSpecification)

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveOutputDestination)[]

---

##### `encoderSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest.property.encoderSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveEncoderSettings`](#aws-cdk-sdk.medialive.MediaLiveEncoderSettings)

---

##### `inputAttachments`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest.property.inputAttachments"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputAttachment`](#aws-cdk-sdk.medialive.MediaLiveInputAttachment)[]

---

##### `inputSpecification`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest.property.inputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveInputSpecification)

---

##### `logLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest.property.logLevel"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest.property.roleArn"></a>

- *Type:* `string`

---

### MediaLiveUpdateChannelResponse <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUpdateChannelResponse: medialive.MediaLiveUpdateChannelResponse = { ... }
```

##### `channel`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateChannelResponse.property.channel"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannel`](#aws-cdk-sdk.medialive.MediaLiveChannel)

---

### MediaLiveUpdateInputDeviceRequest <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUpdateInputDeviceRequest: medialive.MediaLiveUpdateInputDeviceRequest = { ... }
```

##### `inputDeviceId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceRequest.property.inputDeviceId"></a>

- *Type:* `string`

---

##### `hdDeviceSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceRequest.property.hdDeviceSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDeviceConfigurableSettings`](#aws-cdk-sdk.medialive.MediaLiveInputDeviceConfigurableSettings)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceRequest.property.name"></a>

- *Type:* `string`

---

### MediaLiveUpdateInputDeviceResponse <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUpdateInputDeviceResponse: medialive.MediaLiveUpdateInputDeviceResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceResponse.property.arn"></a>

- *Type:* `string`

---

##### `connectionState`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceResponse.property.connectionState"></a>

- *Type:* `string`

---

##### `deviceSettingsSyncState`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceResponse.property.deviceSettingsSyncState"></a>

- *Type:* `string`

---

##### `deviceUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceResponse.property.deviceUpdateStatus"></a>

- *Type:* `string`

---

##### `hdDeviceSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceResponse.property.hdDeviceSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDeviceHdSettings`](#aws-cdk-sdk.medialive.MediaLiveInputDeviceHdSettings)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceResponse.property.id"></a>

- *Type:* `string`

---

##### `macAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceResponse.property.macAddress"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceResponse.property.name"></a>

- *Type:* `string`

---

##### `networkSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceResponse.property.networkSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDeviceNetworkSettings`](#aws-cdk-sdk.medialive.MediaLiveInputDeviceNetworkSettings)

---

##### `serialNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceResponse.property.serialNumber"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceResponse.property.type"></a>

- *Type:* `string`

---

### MediaLiveUpdateInputRequest <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUpdateInputRequest: medialive.MediaLiveUpdateInputRequest = { ... }
```

##### `inputId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputRequest.property.inputId"></a>

- *Type:* `string`

---

##### `destinations`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputRequest.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDestinationRequest`](#aws-cdk-sdk.medialive.MediaLiveInputDestinationRequest)[]

---

##### `inputDevices`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputRequest.property.inputDevices"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDeviceRequest`](#aws-cdk-sdk.medialive.MediaLiveInputDeviceRequest)[]

---

##### `inputSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputRequest.property.inputSecurityGroups"></a>

- *Type:* `string`[]

---

##### `mediaConnectFlows`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputRequest.property.mediaConnectFlows"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMediaConnectFlowRequest`](#aws-cdk-sdk.medialive.MediaLiveMediaConnectFlowRequest)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputRequest.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `sources`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputRequest.property.sources"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSourceRequest`](#aws-cdk-sdk.medialive.MediaLiveInputSourceRequest)[]

---

### MediaLiveUpdateInputResponse <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUpdateInputResponse: medialive.MediaLiveUpdateInputResponse = { ... }
```

##### `input`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputResponse.property.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInput`](#aws-cdk-sdk.medialive.MediaLiveInput)

---

### MediaLiveUpdateInputSecurityGroupRequest <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputSecurityGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUpdateInputSecurityGroupRequest: medialive.MediaLiveUpdateInputSecurityGroupRequest = { ... }
```

##### `inputSecurityGroupId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputSecurityGroupRequest.property.inputSecurityGroupId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputSecurityGroupRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `whitelistRules`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputSecurityGroupRequest.property.whitelistRules"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputWhitelistRuleCidr`](#aws-cdk-sdk.medialive.MediaLiveInputWhitelistRuleCidr)[]

---

### MediaLiveUpdateInputSecurityGroupResponse <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputSecurityGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUpdateInputSecurityGroupResponse: medialive.MediaLiveUpdateInputSecurityGroupResponse = { ... }
```

##### `securityGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateInputSecurityGroupResponse.property.securityGroup"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSecurityGroup`](#aws-cdk-sdk.medialive.MediaLiveInputSecurityGroup)

---

### MediaLiveUpdateMultiplexProgramRequest <a name="aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUpdateMultiplexProgramRequest: medialive.MediaLiveUpdateMultiplexProgramRequest = { ... }
```

##### `multiplexId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest.property.multiplexId"></a>

- *Type:* `string`

---

##### `programName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest.property.programName"></a>

- *Type:* `string`

---

##### `multiplexProgramSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest.property.multiplexProgramSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSettings)

---

### MediaLiveUpdateMultiplexProgramResponse <a name="aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUpdateMultiplexProgramResponse: medialive.MediaLiveUpdateMultiplexProgramResponse = { ... }
```

##### `multiplexProgram`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramResponse.property.multiplexProgram"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgram`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgram)

---

### MediaLiveUpdateMultiplexRequest <a name="aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUpdateMultiplexRequest: medialive.MediaLiveUpdateMultiplexRequest = { ... }
```

##### `multiplexId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexRequest.property.multiplexId"></a>

- *Type:* `string`

---

##### `multiplexSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexRequest.property.multiplexSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexSettings`](#aws-cdk-sdk.medialive.MediaLiveMultiplexSettings)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexRequest.property.name"></a>

- *Type:* `string`

---

### MediaLiveUpdateMultiplexResponse <a name="aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUpdateMultiplexResponse: medialive.MediaLiveUpdateMultiplexResponse = { ... }
```

##### `multiplex`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexResponse.property.multiplex"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplex`](#aws-cdk-sdk.medialive.MediaLiveMultiplex)

---

### MediaLiveUpdateReservationRequest <a name="aws-cdk-sdk.medialive.MediaLiveUpdateReservationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUpdateReservationRequest: medialive.MediaLiveUpdateReservationRequest = { ... }
```

##### `reservationId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateReservationRequest.property.reservationId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateReservationRequest.property.name"></a>

- *Type:* `string`

---

### MediaLiveUpdateReservationResponse <a name="aws-cdk-sdk.medialive.MediaLiveUpdateReservationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveUpdateReservationResponse: medialive.MediaLiveUpdateReservationResponse = { ... }
```

##### `reservation`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveUpdateReservationResponse.property.reservation"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveReservation`](#aws-cdk-sdk.medialive.MediaLiveReservation)

---

### MediaLiveVideoCodecSettings <a name="aws-cdk-sdk.medialive.MediaLiveVideoCodecSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveVideoCodecSettings: medialive.MediaLiveVideoCodecSettings = { ... }
```

##### `frameCaptureSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoCodecSettings.property.frameCaptureSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveFrameCaptureSettings`](#aws-cdk-sdk.medialive.MediaLiveFrameCaptureSettings)

---

##### `h264Settings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoCodecSettings.property.h264Settings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveH264Settings`](#aws-cdk-sdk.medialive.MediaLiveH264Settings)

---

##### `h265Settings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoCodecSettings.property.h265Settings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveH265Settings`](#aws-cdk-sdk.medialive.MediaLiveH265Settings)

---

##### `mpeg2Settings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoCodecSettings.property.mpeg2Settings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMpeg2Settings`](#aws-cdk-sdk.medialive.MediaLiveMpeg2Settings)

---

### MediaLiveVideoDescription <a name="aws-cdk-sdk.medialive.MediaLiveVideoDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveVideoDescription: medialive.MediaLiveVideoDescription = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoDescription.property.name"></a>

- *Type:* `string`

---

##### `codecSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoDescription.property.codecSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveVideoCodecSettings`](#aws-cdk-sdk.medialive.MediaLiveVideoCodecSettings)

---

##### `height`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoDescription.property.height"></a>

- *Type:* `number`

---

##### `respondToAfd`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoDescription.property.respondToAfd"></a>

- *Type:* `string`

---

##### `scalingBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoDescription.property.scalingBehavior"></a>

- *Type:* `string`

---

##### `sharpness`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoDescription.property.sharpness"></a>

- *Type:* `number`

---

##### `width`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoDescription.property.width"></a>

- *Type:* `number`

---

### MediaLiveVideoSelector <a name="aws-cdk-sdk.medialive.MediaLiveVideoSelector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveVideoSelector: medialive.MediaLiveVideoSelector = { ... }
```

##### `colorSpace`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoSelector.property.colorSpace"></a>

- *Type:* `string`

---

##### `colorSpaceUsage`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoSelector.property.colorSpaceUsage"></a>

- *Type:* `string`

---

##### `selectorSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoSelector.property.selectorSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveVideoSelectorSettings`](#aws-cdk-sdk.medialive.MediaLiveVideoSelectorSettings)

---

### MediaLiveVideoSelectorPid <a name="aws-cdk-sdk.medialive.MediaLiveVideoSelectorPid"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveVideoSelectorPid: medialive.MediaLiveVideoSelectorPid = { ... }
```

##### `pid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoSelectorPid.property.pid"></a>

- *Type:* `number`

---

### MediaLiveVideoSelectorProgramId <a name="aws-cdk-sdk.medialive.MediaLiveVideoSelectorProgramId"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveVideoSelectorProgramId: medialive.MediaLiveVideoSelectorProgramId = { ... }
```

##### `programId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoSelectorProgramId.property.programId"></a>

- *Type:* `number`

---

### MediaLiveVideoSelectorSettings <a name="aws-cdk-sdk.medialive.MediaLiveVideoSelectorSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveVideoSelectorSettings: medialive.MediaLiveVideoSelectorSettings = { ... }
```

##### `videoSelectorPid`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoSelectorSettings.property.videoSelectorPid"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveVideoSelectorPid`](#aws-cdk-sdk.medialive.MediaLiveVideoSelectorPid)

---

##### `videoSelectorProgramId`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveVideoSelectorSettings.property.videoSelectorProgramId"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveVideoSelectorProgramId`](#aws-cdk-sdk.medialive.MediaLiveVideoSelectorProgramId)

---

### MediaLiveWavSettings <a name="aws-cdk-sdk.medialive.MediaLiveWavSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveWavSettings: medialive.MediaLiveWavSettings = { ... }
```

##### `bitDepth`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveWavSettings.property.bitDepth"></a>

- *Type:* `number`

---

##### `codingMode`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveWavSettings.property.codingMode"></a>

- *Type:* `string`

---

##### `sampleRate`<sup>Optional</sup> <a name="aws-cdk-sdk.medialive.MediaLiveWavSettings.property.sampleRate"></a>

- *Type:* `number`

---

### MediaLiveWebvttDestinationSettings <a name="aws-cdk-sdk.medialive.MediaLiveWebvttDestinationSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

const mediaLiveWebvttDestinationSettings: medialive.MediaLiveWebvttDestinationSettings = { ... }
```

## Classes <a name="Classes"></a>

### MediaLiveResponsesBatchDelete <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchDelete"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchDelete.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesBatchDelete(__scope: Construct, __resources: string[], __input: MediaLiveBatchDeleteRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchDelete.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchDelete.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchDelete.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchDeleteRequest`](#aws-cdk-sdk.medialive.MediaLiveBatchDeleteRequest)

---



#### Properties <a name="Properties"></a>

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchDelete.property.failed"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchFailedResultModel`](#aws-cdk-sdk.medialive.MediaLiveBatchFailedResultModel)[]

---

##### `successful`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchDelete.property.successful"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchSuccessfulResultModel`](#aws-cdk-sdk.medialive.MediaLiveBatchSuccessfulResultModel)[]

---


### MediaLiveResponsesBatchStart <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchStart"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchStart.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesBatchStart(__scope: Construct, __resources: string[], __input: MediaLiveBatchStartRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchStart.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchStart.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchStart.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchStartRequest`](#aws-cdk-sdk.medialive.MediaLiveBatchStartRequest)

---



#### Properties <a name="Properties"></a>

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchStart.property.failed"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchFailedResultModel`](#aws-cdk-sdk.medialive.MediaLiveBatchFailedResultModel)[]

---

##### `successful`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchStart.property.successful"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchSuccessfulResultModel`](#aws-cdk-sdk.medialive.MediaLiveBatchSuccessfulResultModel)[]

---


### MediaLiveResponsesBatchStop <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchStop"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchStop.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesBatchStop(__scope: Construct, __resources: string[], __input: MediaLiveBatchStopRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchStop.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchStop.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchStop.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchStopRequest`](#aws-cdk-sdk.medialive.MediaLiveBatchStopRequest)

---



#### Properties <a name="Properties"></a>

##### `failed`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchStop.property.failed"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchFailedResultModel`](#aws-cdk-sdk.medialive.MediaLiveBatchFailedResultModel)[]

---

##### `successful`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchStop.property.successful"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchSuccessfulResultModel`](#aws-cdk-sdk.medialive.MediaLiveBatchSuccessfulResultModel)[]

---


### MediaLiveResponsesBatchUpdateSchedule <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateSchedule.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesBatchUpdateSchedule(__scope: Construct, __resources: string[], __input: MediaLiveBatchUpdateScheduleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchUpdateScheduleRequest`](#aws-cdk-sdk.medialive.MediaLiveBatchUpdateScheduleRequest)

---



#### Properties <a name="Properties"></a>

##### `creates`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateSchedule.property.creates"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateScheduleCreates`](#aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateScheduleCreates)

---

##### `deletes`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateSchedule.property.deletes"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateScheduleDeletes`](#aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateScheduleDeletes)

---


### MediaLiveResponsesBatchUpdateScheduleCreates <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateScheduleCreates"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateScheduleCreates.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesBatchUpdateScheduleCreates(__scope: Construct, __resources: string[], __input: MediaLiveBatchUpdateScheduleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateScheduleCreates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateScheduleCreates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateScheduleCreates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchUpdateScheduleRequest`](#aws-cdk-sdk.medialive.MediaLiveBatchUpdateScheduleRequest)

---



#### Properties <a name="Properties"></a>

##### `scheduleActions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateScheduleCreates.property.scheduleActions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScheduleAction`](#aws-cdk-sdk.medialive.MediaLiveScheduleAction)[]

---


### MediaLiveResponsesBatchUpdateScheduleDeletes <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateScheduleDeletes"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateScheduleDeletes.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesBatchUpdateScheduleDeletes(__scope: Construct, __resources: string[], __input: MediaLiveBatchUpdateScheduleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateScheduleDeletes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateScheduleDeletes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateScheduleDeletes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveBatchUpdateScheduleRequest`](#aws-cdk-sdk.medialive.MediaLiveBatchUpdateScheduleRequest)

---



#### Properties <a name="Properties"></a>

##### `scheduleActions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesBatchUpdateScheduleDeletes.property.scheduleActions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScheduleAction`](#aws-cdk-sdk.medialive.MediaLiveScheduleAction)[]

---


### MediaLiveResponsesCreateChannel <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannel"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannel.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannel(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `channel`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannel.property.channel"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel)

---


### MediaLiveResponsesCreateChannelChannel <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannel(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.property.arn"></a>

- *Type:* `string`

---

##### `cdiInputSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.property.cdiInputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelCdiInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelCdiInputSpecification)

---

##### `channelClass`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.property.channelClass"></a>

- *Type:* `string`

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveOutputDestination)[]

---

##### `egressEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.property.egressEndpoints"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint`](#aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint)[]

---

##### `encoderSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.property.encoderSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.property.id"></a>

- *Type:* `string`

---

##### `inputAttachments`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.property.inputAttachments"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputAttachment`](#aws-cdk-sdk.medialive.MediaLiveInputAttachment)[]

---

##### `inputSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.property.inputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelInputSpecification)

---

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.property.logLevel"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.property.name"></a>

- *Type:* `string`

---

##### `pipelineDetails`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePipelineDetail`](#aws-cdk-sdk.medialive.MediaLivePipelineDetail)[]

---

##### `pipelinesRunningCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.property.roleArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannel.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaLiveResponsesCreateChannelChannelCdiInputSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelCdiInputSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelCdiInputSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelCdiInputSpecification(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelCdiInputSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelCdiInputSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelCdiInputSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelCdiInputSpecification.property.resolution"></a>

- *Type:* `string`

---


### MediaLiveResponsesCreateChannelChannelEncoderSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `audioDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings.property.audioDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioDescription`](#aws-cdk-sdk.medialive.MediaLiveAudioDescription)[]

---

##### `availBlanking`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings.property.availBlanking"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlanking`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlanking)

---

##### `availConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings.property.availConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfiguration)

---

##### `blackoutSlate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings.property.blackoutSlate"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlate`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlate)

---

##### `captionDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings.property.captionDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCaptionDescription`](#aws-cdk-sdk.medialive.MediaLiveCaptionDescription)[]

---

##### `featureActivations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings.property.featureActivations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsFeatureActivations`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsFeatureActivations)

---

##### `globalConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings.property.globalConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfiguration)

---

##### `nielsenConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings.property.nielsenConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsNielsenConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsNielsenConfiguration)

---

##### `outputGroups`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings.property.outputGroups"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputGroup`](#aws-cdk-sdk.medialive.MediaLiveOutputGroup)[]

---

##### `timecodeConfig`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings.property.timecodeConfig"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsTimecodeConfig`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsTimecodeConfig)

---

##### `videoDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettings.property.videoDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveVideoDescription`](#aws-cdk-sdk.medialive.MediaLiveVideoDescription)[]

---


### MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlanking <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlanking"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlanking.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlanking(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlanking.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlanking.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlanking.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `availBlankingImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlanking.property.availBlankingImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlanking.property.state"></a>

- *Type:* `string`

---


### MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `availSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfiguration.property.availSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettings)

---


### MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettings(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `scte35SpliceInsert`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettings.property.scte35SpliceInsert"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert)

---

##### `scte35TimeSignalApos`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettings.property.scte35TimeSignalApos"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos)

---


### MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `adAvailOffset`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.adAvailOffset"></a>

- *Type:* `number`

---

##### `noRegionalBlackoutFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.noRegionalBlackoutFlag"></a>

- *Type:* `string`

---

##### `webDeliveryAllowedFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.webDeliveryAllowedFlag"></a>

- *Type:* `string`

---


### MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `adAvailOffset`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.adAvailOffset"></a>

- *Type:* `number`

---

##### `noRegionalBlackoutFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.noRegionalBlackoutFlag"></a>

- *Type:* `string`

---

##### `webDeliveryAllowedFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.webDeliveryAllowedFlag"></a>

- *Type:* `string`

---


### MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlate <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlate"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlate.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlate(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `blackoutSlateImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlate.property.blackoutSlateImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage)

---

##### `networkEndBlackout`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlate.property.networkEndBlackout"></a>

- *Type:* `string`

---

##### `networkEndBlackoutImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlate.property.networkEndBlackoutImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage)

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlate.property.networkId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlate.property.state"></a>

- *Type:* `string`

---


### MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesCreateChannelChannelEncoderSettingsFeatureActivations <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsFeatureActivations"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsFeatureActivations.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsFeatureActivations(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsFeatureActivations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsFeatureActivations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsFeatureActivations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `inputPrepareScheduleActions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsFeatureActivations.property.inputPrepareScheduleActions"></a>

- *Type:* `string`

---


### MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `initialAudioGain`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfiguration.property.initialAudioGain"></a>

- *Type:* `number`

---

##### `inputEndAction`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfiguration.property.inputEndAction"></a>

- *Type:* `string`

---

##### `inputLossBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfiguration.property.inputLossBehavior"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior)

---

##### `outputLockingMode`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfiguration.property.outputLockingMode"></a>

- *Type:* `string`

---

##### `outputTimingSource`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfiguration.property.outputTimingSource"></a>

- *Type:* `string`

---

##### `supportLowFramerateInputs`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfiguration.property.supportLowFramerateInputs"></a>

- *Type:* `string`

---


### MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `blackFrameMsec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.blackFrameMsec"></a>

- *Type:* `number`

---

##### `inputLossImageColor`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageColor"></a>

- *Type:* `string`

---

##### `inputLossImageSlate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageSlate"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate)

---

##### `inputLossImageType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageType"></a>

- *Type:* `string`

---

##### `repeatFrameMsec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.repeatFrameMsec"></a>

- *Type:* `number`

---


### MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesCreateChannelChannelEncoderSettingsNielsenConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsNielsenConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsNielsenConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsNielsenConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsNielsenConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsNielsenConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsNielsenConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `distributorId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsNielsenConfiguration.property.distributorId"></a>

- *Type:* `string`

---

##### `nielsenPcmToId3Tagging`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsNielsenConfiguration.property.nielsenPcmToId3Tagging"></a>

- *Type:* `string`

---


### MediaLiveResponsesCreateChannelChannelEncoderSettingsTimecodeConfig <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsTimecodeConfig"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsTimecodeConfig.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsTimecodeConfig(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsTimecodeConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsTimecodeConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsTimecodeConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsTimecodeConfig.property.source"></a>

- *Type:* `string`

---

##### `syncThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelEncoderSettingsTimecodeConfig.property.syncThreshold"></a>

- *Type:* `number`

---


### MediaLiveResponsesCreateChannelChannelInputSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelInputSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelInputSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateChannelChannelInputSpecification(__scope: Construct, __resources: string[], __input: MediaLiveCreateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelInputSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelInputSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelInputSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelInputSpecification.property.codec"></a>

- *Type:* `string`

---

##### `maximumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelInputSpecification.property.maximumBitrate"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateChannelChannelInputSpecification.property.resolution"></a>

- *Type:* `string`

---


### MediaLiveResponsesCreateInput <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInput"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInput.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateInput(__scope: Construct, __resources: string[], __input: MediaLiveCreateInputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateInputRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateInputRequest)

---



#### Properties <a name="Properties"></a>

##### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInput.property.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput)

---


### MediaLiveResponsesCreateInputInput <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateInputInput(__scope: Construct, __resources: string[], __input: MediaLiveCreateInputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateInputRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateInputRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.property.arn"></a>

- *Type:* `string`

---

##### `attachedChannels`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.property.attachedChannels"></a>

- *Type:* `string`[]

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDestination`](#aws-cdk-sdk.medialive.MediaLiveInputDestination)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.property.id"></a>

- *Type:* `string`

---

##### `inputClass`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.property.inputClass"></a>

- *Type:* `string`

---

##### `inputDevices`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.property.inputDevices"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDeviceSettings`](#aws-cdk-sdk.medialive.MediaLiveInputDeviceSettings)[]

---

##### `inputSourceType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.property.inputSourceType"></a>

- *Type:* `string`

---

##### `mediaConnectFlows`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.property.mediaConnectFlows"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMediaConnectFlow`](#aws-cdk-sdk.medialive.MediaLiveMediaConnectFlow)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.property.roleArn"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.property.sources"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSource`](#aws-cdk-sdk.medialive.MediaLiveInputSource)[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputInput.property.type"></a>

- *Type:* `string`

---


### MediaLiveResponsesCreateInputSecurityGroup <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroup"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroup.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateInputSecurityGroup(__scope: Construct, __resources: string[], __input: MediaLiveCreateInputSecurityGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateInputSecurityGroupRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateInputSecurityGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroup`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroup.property.securityGroup"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroupSecurityGroup`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroupSecurityGroup)

---


### MediaLiveResponsesCreateInputSecurityGroupSecurityGroup <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroupSecurityGroup"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroupSecurityGroup.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateInputSecurityGroupSecurityGroup(__scope: Construct, __resources: string[], __input: MediaLiveCreateInputSecurityGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroupSecurityGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroupSecurityGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroupSecurityGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateInputSecurityGroupRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateInputSecurityGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroupSecurityGroup.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroupSecurityGroup.property.id"></a>

- *Type:* `string`

---

##### `inputs`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroupSecurityGroup.property.inputs"></a>

- *Type:* `string`[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroupSecurityGroup.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroupSecurityGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `whitelistRules`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateInputSecurityGroupSecurityGroup.property.whitelistRules"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputWhitelistRule`](#aws-cdk-sdk.medialive.MediaLiveInputWhitelistRule)[]

---


### MediaLiveResponsesCreateMultiplex <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplex"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplex.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateMultiplex(__scope: Construct, __resources: string[], __input: MediaLiveCreateMultiplexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplex.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplex.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplex.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateMultiplexRequest)

---



#### Properties <a name="Properties"></a>

##### `multiplex`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplex.property.multiplex"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplex`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplex)

---


### MediaLiveResponsesCreateMultiplexMultiplex <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplex"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplex.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateMultiplexMultiplex(__scope: Construct, __resources: string[], __input: MediaLiveCreateMultiplexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplex.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplex.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplex.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateMultiplexRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplex.property.arn"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplex.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplex.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplex.property.id"></a>

- *Type:* `string`

---

##### `multiplexSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplex.property.multiplexSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplexMultiplexSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplexMultiplexSettings)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplex.property.name"></a>

- *Type:* `string`

---

##### `pipelinesRunningCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplex.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `programCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplex.property.programCount"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplex.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplex.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaLiveResponsesCreateMultiplexMultiplexMultiplexSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplexMultiplexSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplexMultiplexSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateMultiplexMultiplexMultiplexSettings(__scope: Construct, __resources: string[], __input: MediaLiveCreateMultiplexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplexMultiplexSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplexMultiplexSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplexMultiplexSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateMultiplexRequest)

---



#### Properties <a name="Properties"></a>

##### `maximumVideoBufferDelayMilliseconds`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplexMultiplexSettings.property.maximumVideoBufferDelayMilliseconds"></a>

- *Type:* `number`

---

##### `transportStreamBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplexMultiplexSettings.property.transportStreamBitrate"></a>

- *Type:* `number`

---

##### `transportStreamId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplexMultiplexSettings.property.transportStreamId"></a>

- *Type:* `number`

---

##### `transportStreamReservedBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexMultiplexMultiplexSettings.property.transportStreamReservedBitrate"></a>

- *Type:* `number`

---


### MediaLiveResponsesCreateMultiplexProgram <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgram"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgram.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateMultiplexProgram(__scope: Construct, __resources: string[], __input: MediaLiveCreateMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgram.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgram.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgram.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `multiplexProgram`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgram.property.multiplexProgram"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgram`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgram)

---


### MediaLiveResponsesCreateMultiplexProgramMultiplexProgram <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgram"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgram.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgram(__scope: Construct, __resources: string[], __input: MediaLiveCreateMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgram.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgram.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgram.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgram.property.channelId"></a>

- *Type:* `string`

---

##### `multiplexProgramSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgram.property.multiplexProgramSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettings)

---

##### `packetIdentifiersMap`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgram.property.packetIdentifiersMap"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap)

---

##### `pipelineDetails`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgram.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPipelineDetail`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPipelineDetail)[]

---

##### `programName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgram.property.programName"></a>

- *Type:* `string`

---


### MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettings(__scope: Construct, __resources: string[], __input: MediaLiveCreateMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `preferredChannelPipeline`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettings.property.preferredChannelPipeline"></a>

- *Type:* `string`

---

##### `programNumber`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettings.property.programNumber"></a>

- *Type:* `number`

---

##### `serviceDescriptor`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettings.property.serviceDescriptor"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor)

---

##### `videoSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettings.property.videoSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings)

---


### MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor(__scope: Construct, __resources: string[], __input: MediaLiveCreateMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.providerName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.serviceName"></a>

- *Type:* `string`

---


### MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings(__scope: Construct, __resources: string[], __input: MediaLiveCreateMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `constantBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings.property.constantBitrate"></a>

- *Type:* `number`

---

##### `statmuxSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings.property.statmuxSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings)

---


### MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings(__scope: Construct, __resources: string[], __input: MediaLiveCreateMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `maximumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate"></a>

- *Type:* `number`

---

##### `minimumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate"></a>

- *Type:* `number`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority"></a>

- *Type:* `number`

---


### MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap(__scope: Construct, __resources: string[], __input: MediaLiveCreateMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveCreateMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `audioPids`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.audioPids"></a>

- *Type:* `number`[]

---

##### `dvbSubPids`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.dvbSubPids"></a>

- *Type:* `number`[]

---

##### `dvbTeletextPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.dvbTeletextPid"></a>

- *Type:* `number`

---

##### `etvPlatformPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.etvPlatformPid"></a>

- *Type:* `number`

---

##### `etvSignalPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.etvSignalPid"></a>

- *Type:* `number`

---

##### `klvDataPids`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.klvDataPids"></a>

- *Type:* `number`[]

---

##### `pcrPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.pcrPid"></a>

- *Type:* `number`

---

##### `pmtPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.pmtPid"></a>

- *Type:* `number`

---

##### `privateMetadataPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.privateMetadataPid"></a>

- *Type:* `number`

---

##### `scte27Pids`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.scte27Pids"></a>

- *Type:* `number`[]

---

##### `scte35Pid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.scte35Pid"></a>

- *Type:* `number`

---

##### `timedMetadataPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.timedMetadataPid"></a>

- *Type:* `number`

---

##### `videoPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesCreateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.videoPid"></a>

- *Type:* `number`

---


### MediaLiveResponsesDeleteChannel <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannel(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.property.arn"></a>

- *Type:* `string`

---

##### `cdiInputSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.property.cdiInputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelCdiInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelCdiInputSpecification)

---

##### `channelClass`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.property.channelClass"></a>

- *Type:* `string`

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveOutputDestination)[]

---

##### `egressEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.property.egressEndpoints"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint`](#aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint)[]

---

##### `encoderSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.property.encoderSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.property.id"></a>

- *Type:* `string`

---

##### `inputAttachments`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.property.inputAttachments"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputAttachment`](#aws-cdk-sdk.medialive.MediaLiveInputAttachment)[]

---

##### `inputSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.property.inputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelInputSpecification)

---

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.property.logLevel"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.property.name"></a>

- *Type:* `string`

---

##### `pipelineDetails`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePipelineDetail`](#aws-cdk-sdk.medialive.MediaLivePipelineDetail)[]

---

##### `pipelinesRunningCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.property.roleArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannel.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaLiveResponsesDeleteChannelCdiInputSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelCdiInputSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelCdiInputSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelCdiInputSpecification(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelCdiInputSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelCdiInputSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelCdiInputSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelCdiInputSpecification.property.resolution"></a>

- *Type:* `string`

---


### MediaLiveResponsesDeleteChannelEncoderSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelEncoderSettings(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `audioDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings.property.audioDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioDescription`](#aws-cdk-sdk.medialive.MediaLiveAudioDescription)[]

---

##### `availBlanking`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings.property.availBlanking"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlanking`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlanking)

---

##### `availConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings.property.availConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfiguration)

---

##### `blackoutSlate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings.property.blackoutSlate"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlate`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlate)

---

##### `captionDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings.property.captionDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCaptionDescription`](#aws-cdk-sdk.medialive.MediaLiveCaptionDescription)[]

---

##### `featureActivations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings.property.featureActivations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsFeatureActivations`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsFeatureActivations)

---

##### `globalConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings.property.globalConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfiguration)

---

##### `nielsenConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings.property.nielsenConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsNielsenConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsNielsenConfiguration)

---

##### `outputGroups`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings.property.outputGroups"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputGroup`](#aws-cdk-sdk.medialive.MediaLiveOutputGroup)[]

---

##### `timecodeConfig`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings.property.timecodeConfig"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsTimecodeConfig`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsTimecodeConfig)

---

##### `videoDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettings.property.videoDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveVideoDescription`](#aws-cdk-sdk.medialive.MediaLiveVideoDescription)[]

---


### MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlanking <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlanking"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlanking.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlanking(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlanking.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlanking.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlanking.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `availBlankingImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlanking.property.availBlankingImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlankingAvailBlankingImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlankingAvailBlankingImage)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlanking.property.state"></a>

- *Type:* `string`

---


### MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlankingAvailBlankingImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlankingAvailBlankingImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlankingAvailBlankingImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlankingAvailBlankingImage(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `availSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfiguration.property.availSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettings)

---


### MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettings(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `scte35SpliceInsert`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettings.property.scte35SpliceInsert"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert)

---

##### `scte35TimeSignalApos`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettings.property.scte35TimeSignalApos"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos)

---


### MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `adAvailOffset`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.adAvailOffset"></a>

- *Type:* `number`

---

##### `noRegionalBlackoutFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.noRegionalBlackoutFlag"></a>

- *Type:* `string`

---

##### `webDeliveryAllowedFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.webDeliveryAllowedFlag"></a>

- *Type:* `string`

---


### MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `adAvailOffset`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.adAvailOffset"></a>

- *Type:* `number`

---

##### `noRegionalBlackoutFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.noRegionalBlackoutFlag"></a>

- *Type:* `string`

---

##### `webDeliveryAllowedFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.webDeliveryAllowedFlag"></a>

- *Type:* `string`

---


### MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlate <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlate"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlate.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlate(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `blackoutSlateImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlate.property.blackoutSlateImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateBlackoutSlateImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateBlackoutSlateImage)

---

##### `networkEndBlackout`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlate.property.networkEndBlackout"></a>

- *Type:* `string`

---

##### `networkEndBlackoutImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlate.property.networkEndBlackoutImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage)

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlate.property.networkId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlate.property.state"></a>

- *Type:* `string`

---


### MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateBlackoutSlateImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateBlackoutSlateImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateBlackoutSlateImage(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesDeleteChannelEncoderSettingsFeatureActivations <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsFeatureActivations"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsFeatureActivations.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelEncoderSettingsFeatureActivations(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsFeatureActivations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsFeatureActivations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsFeatureActivations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `inputPrepareScheduleActions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsFeatureActivations.property.inputPrepareScheduleActions"></a>

- *Type:* `string`

---


### MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `initialAudioGain`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfiguration.property.initialAudioGain"></a>

- *Type:* `number`

---

##### `inputEndAction`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfiguration.property.inputEndAction"></a>

- *Type:* `string`

---

##### `inputLossBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfiguration.property.inputLossBehavior"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehavior`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehavior)

---

##### `outputLockingMode`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfiguration.property.outputLockingMode"></a>

- *Type:* `string`

---

##### `outputTimingSource`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfiguration.property.outputTimingSource"></a>

- *Type:* `string`

---

##### `supportLowFramerateInputs`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfiguration.property.supportLowFramerateInputs"></a>

- *Type:* `string`

---


### MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehavior <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehavior"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehavior.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehavior(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `blackFrameMsec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.blackFrameMsec"></a>

- *Type:* `number`

---

##### `inputLossImageColor`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageColor"></a>

- *Type:* `string`

---

##### `inputLossImageSlate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageSlate"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate)

---

##### `inputLossImageType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageType"></a>

- *Type:* `string`

---

##### `repeatFrameMsec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.repeatFrameMsec"></a>

- *Type:* `number`

---


### MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesDeleteChannelEncoderSettingsNielsenConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsNielsenConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsNielsenConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelEncoderSettingsNielsenConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsNielsenConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsNielsenConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsNielsenConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `distributorId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsNielsenConfiguration.property.distributorId"></a>

- *Type:* `string`

---

##### `nielsenPcmToId3Tagging`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsNielsenConfiguration.property.nielsenPcmToId3Tagging"></a>

- *Type:* `string`

---


### MediaLiveResponsesDeleteChannelEncoderSettingsTimecodeConfig <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsTimecodeConfig"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsTimecodeConfig.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelEncoderSettingsTimecodeConfig(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsTimecodeConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsTimecodeConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsTimecodeConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsTimecodeConfig.property.source"></a>

- *Type:* `string`

---

##### `syncThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelEncoderSettingsTimecodeConfig.property.syncThreshold"></a>

- *Type:* `number`

---


### MediaLiveResponsesDeleteChannelInputSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelInputSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelInputSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteChannelInputSpecification(__scope: Construct, __resources: string[], __input: MediaLiveDeleteChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelInputSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelInputSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelInputSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelInputSpecification.property.codec"></a>

- *Type:* `string`

---

##### `maximumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelInputSpecification.property.maximumBitrate"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteChannelInputSpecification.property.resolution"></a>

- *Type:* `string`

---


### MediaLiveResponsesDeleteMultiplex <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplex"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplex.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteMultiplex(__scope: Construct, __resources: string[], __input: MediaLiveDeleteMultiplexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplex.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplex.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplex.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplex.property.arn"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplex.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplex.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplex.property.id"></a>

- *Type:* `string`

---

##### `multiplexSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplex.property.multiplexSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexMultiplexSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexMultiplexSettings)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplex.property.name"></a>

- *Type:* `string`

---

##### `pipelinesRunningCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplex.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `programCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplex.property.programCount"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplex.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplex.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaLiveResponsesDeleteMultiplexMultiplexSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexMultiplexSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexMultiplexSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteMultiplexMultiplexSettings(__scope: Construct, __resources: string[], __input: MediaLiveDeleteMultiplexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexMultiplexSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexMultiplexSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexMultiplexSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexRequest)

---



#### Properties <a name="Properties"></a>

##### `maximumVideoBufferDelayMilliseconds`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexMultiplexSettings.property.maximumVideoBufferDelayMilliseconds"></a>

- *Type:* `number`

---

##### `transportStreamBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexMultiplexSettings.property.transportStreamBitrate"></a>

- *Type:* `number`

---

##### `transportStreamId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexMultiplexSettings.property.transportStreamId"></a>

- *Type:* `number`

---

##### `transportStreamReservedBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexMultiplexSettings.property.transportStreamReservedBitrate"></a>

- *Type:* `number`

---


### MediaLiveResponsesDeleteMultiplexProgram <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgram"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgram.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteMultiplexProgram(__scope: Construct, __resources: string[], __input: MediaLiveDeleteMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgram.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgram.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgram.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgram.property.channelId"></a>

- *Type:* `string`

---

##### `multiplexProgramSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgram.property.multiplexProgramSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettings)

---

##### `packetIdentifiersMap`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgram.property.packetIdentifiersMap"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap)

---

##### `pipelineDetails`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgram.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPipelineDetail`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPipelineDetail)[]

---

##### `programName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgram.property.programName"></a>

- *Type:* `string`

---


### MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettings(__scope: Construct, __resources: string[], __input: MediaLiveDeleteMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `preferredChannelPipeline`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettings.property.preferredChannelPipeline"></a>

- *Type:* `string`

---

##### `programNumber`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettings.property.programNumber"></a>

- *Type:* `number`

---

##### `serviceDescriptor`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettings.property.serviceDescriptor"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsServiceDescriptor`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsServiceDescriptor)

---

##### `videoSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettings.property.videoSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettings)

---


### MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsServiceDescriptor <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsServiceDescriptor"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsServiceDescriptor.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsServiceDescriptor(__scope: Construct, __resources: string[], __input: MediaLiveDeleteMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsServiceDescriptor.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsServiceDescriptor.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsServiceDescriptor.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.providerName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.serviceName"></a>

- *Type:* `string`

---


### MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettings(__scope: Construct, __resources: string[], __input: MediaLiveDeleteMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `constantBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettings.property.constantBitrate"></a>

- *Type:* `number`

---

##### `statmuxSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettings.property.statmuxSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings)

---


### MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings(__scope: Construct, __resources: string[], __input: MediaLiveDeleteMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `maximumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate"></a>

- *Type:* `number`

---

##### `minimumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate"></a>

- *Type:* `number`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority"></a>

- *Type:* `number`

---


### MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap(__scope: Construct, __resources: string[], __input: MediaLiveDeleteMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `audioPids`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap.property.audioPids"></a>

- *Type:* `number`[]

---

##### `dvbSubPids`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap.property.dvbSubPids"></a>

- *Type:* `number`[]

---

##### `dvbTeletextPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap.property.dvbTeletextPid"></a>

- *Type:* `number`

---

##### `etvPlatformPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap.property.etvPlatformPid"></a>

- *Type:* `number`

---

##### `etvSignalPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap.property.etvSignalPid"></a>

- *Type:* `number`

---

##### `klvDataPids`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap.property.klvDataPids"></a>

- *Type:* `number`[]

---

##### `pcrPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap.property.pcrPid"></a>

- *Type:* `number`

---

##### `pmtPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap.property.pmtPid"></a>

- *Type:* `number`

---

##### `privateMetadataPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap.property.privateMetadataPid"></a>

- *Type:* `number`

---

##### `scte27Pids`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap.property.scte27Pids"></a>

- *Type:* `number`[]

---

##### `scte35Pid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap.property.scte35Pid"></a>

- *Type:* `number`

---

##### `timedMetadataPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap.property.timedMetadataPid"></a>

- *Type:* `number`

---

##### `videoPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteMultiplexProgramPacketIdentifiersMap.property.videoPid"></a>

- *Type:* `number`

---


### MediaLiveResponsesDeleteReservation <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteReservation(__scope: Construct, __resources: string[], __input: MediaLiveDeleteReservationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteReservationRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteReservationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.arn"></a>

- *Type:* `string`

---

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.count"></a>

- *Type:* `number`

---

##### `currencyCode`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.duration"></a>

- *Type:* `number`

---

##### `durationUnits`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.durationUnits"></a>

- *Type:* `string`

---

##### `end`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.end"></a>

- *Type:* `string`

---

##### `fixedPrice`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.fixedPrice"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.name"></a>

- *Type:* `string`

---

##### `offeringDescription`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.offeringDescription"></a>

- *Type:* `string`

---

##### `offeringId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.offeringId"></a>

- *Type:* `string`

---

##### `offeringType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.offeringType"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.region"></a>

- *Type:* `string`

---

##### `reservationId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.reservationId"></a>

- *Type:* `string`

---

##### `resourceSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.resourceSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservationResourceSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservationResourceSpecification)

---

##### `start`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.start"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `usagePrice`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservation.property.usagePrice"></a>

- *Type:* `number`

---


### MediaLiveResponsesDeleteReservationResourceSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservationResourceSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservationResourceSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDeleteReservationResourceSpecification(__scope: Construct, __resources: string[], __input: MediaLiveDeleteReservationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservationResourceSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservationResourceSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservationResourceSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDeleteReservationRequest`](#aws-cdk-sdk.medialive.MediaLiveDeleteReservationRequest)

---



#### Properties <a name="Properties"></a>

##### `channelClass`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservationResourceSpecification.property.channelClass"></a>

- *Type:* `string`

---

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservationResourceSpecification.property.codec"></a>

- *Type:* `string`

---

##### `maximumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservationResourceSpecification.property.maximumBitrate"></a>

- *Type:* `string`

---

##### `maximumFramerate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservationResourceSpecification.property.maximumFramerate"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservationResourceSpecification.property.resolution"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservationResourceSpecification.property.resourceType"></a>

- *Type:* `string`

---

##### `specialFeature`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservationResourceSpecification.property.specialFeature"></a>

- *Type:* `string`

---

##### `videoQuality`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDeleteReservationResourceSpecification.property.videoQuality"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeChannel <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannel(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.property.arn"></a>

- *Type:* `string`

---

##### `cdiInputSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.property.cdiInputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelCdiInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelCdiInputSpecification)

---

##### `channelClass`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.property.channelClass"></a>

- *Type:* `string`

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveOutputDestination)[]

---

##### `egressEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.property.egressEndpoints"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint`](#aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint)[]

---

##### `encoderSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.property.encoderSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.property.id"></a>

- *Type:* `string`

---

##### `inputAttachments`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.property.inputAttachments"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputAttachment`](#aws-cdk-sdk.medialive.MediaLiveInputAttachment)[]

---

##### `inputSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.property.inputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelInputSpecification)

---

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.property.logLevel"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.property.name"></a>

- *Type:* `string`

---

##### `pipelineDetails`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePipelineDetail`](#aws-cdk-sdk.medialive.MediaLivePipelineDetail)[]

---

##### `pipelinesRunningCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.property.roleArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannel.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaLiveResponsesDescribeChannelCdiInputSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelCdiInputSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelCdiInputSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelCdiInputSpecification(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelCdiInputSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelCdiInputSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelCdiInputSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelCdiInputSpecification.property.resolution"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeChannelEncoderSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelEncoderSettings(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `audioDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings.property.audioDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioDescription`](#aws-cdk-sdk.medialive.MediaLiveAudioDescription)[]

---

##### `availBlanking`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings.property.availBlanking"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlanking`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlanking)

---

##### `availConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings.property.availConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfiguration)

---

##### `blackoutSlate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings.property.blackoutSlate"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlate`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlate)

---

##### `captionDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings.property.captionDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCaptionDescription`](#aws-cdk-sdk.medialive.MediaLiveCaptionDescription)[]

---

##### `featureActivations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings.property.featureActivations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsFeatureActivations`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsFeatureActivations)

---

##### `globalConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings.property.globalConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfiguration)

---

##### `nielsenConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings.property.nielsenConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsNielsenConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsNielsenConfiguration)

---

##### `outputGroups`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings.property.outputGroups"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputGroup`](#aws-cdk-sdk.medialive.MediaLiveOutputGroup)[]

---

##### `timecodeConfig`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings.property.timecodeConfig"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsTimecodeConfig`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsTimecodeConfig)

---

##### `videoDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettings.property.videoDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveVideoDescription`](#aws-cdk-sdk.medialive.MediaLiveVideoDescription)[]

---


### MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlanking <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlanking"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlanking.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlanking(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlanking.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlanking.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlanking.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `availBlankingImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlanking.property.availBlankingImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlankingAvailBlankingImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlankingAvailBlankingImage)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlanking.property.state"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlankingAvailBlankingImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlankingAvailBlankingImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlankingAvailBlankingImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlankingAvailBlankingImage(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `availSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfiguration.property.availSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettings)

---


### MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettings(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `scte35SpliceInsert`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettings.property.scte35SpliceInsert"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert)

---

##### `scte35TimeSignalApos`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettings.property.scte35TimeSignalApos"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos)

---


### MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `adAvailOffset`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.adAvailOffset"></a>

- *Type:* `number`

---

##### `noRegionalBlackoutFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.noRegionalBlackoutFlag"></a>

- *Type:* `string`

---

##### `webDeliveryAllowedFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.webDeliveryAllowedFlag"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `adAvailOffset`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.adAvailOffset"></a>

- *Type:* `number`

---

##### `noRegionalBlackoutFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.noRegionalBlackoutFlag"></a>

- *Type:* `string`

---

##### `webDeliveryAllowedFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.webDeliveryAllowedFlag"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlate <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlate"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlate.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlate(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `blackoutSlateImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlate.property.blackoutSlateImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateBlackoutSlateImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateBlackoutSlateImage)

---

##### `networkEndBlackout`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlate.property.networkEndBlackout"></a>

- *Type:* `string`

---

##### `networkEndBlackoutImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlate.property.networkEndBlackoutImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage)

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlate.property.networkId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlate.property.state"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateBlackoutSlateImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateBlackoutSlateImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateBlackoutSlateImage(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeChannelEncoderSettingsFeatureActivations <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsFeatureActivations"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsFeatureActivations.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelEncoderSettingsFeatureActivations(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsFeatureActivations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsFeatureActivations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsFeatureActivations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `inputPrepareScheduleActions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsFeatureActivations.property.inputPrepareScheduleActions"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `initialAudioGain`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfiguration.property.initialAudioGain"></a>

- *Type:* `number`

---

##### `inputEndAction`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfiguration.property.inputEndAction"></a>

- *Type:* `string`

---

##### `inputLossBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfiguration.property.inputLossBehavior"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehavior`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehavior)

---

##### `outputLockingMode`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfiguration.property.outputLockingMode"></a>

- *Type:* `string`

---

##### `outputTimingSource`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfiguration.property.outputTimingSource"></a>

- *Type:* `string`

---

##### `supportLowFramerateInputs`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfiguration.property.supportLowFramerateInputs"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehavior <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehavior"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehavior.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehavior(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `blackFrameMsec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.blackFrameMsec"></a>

- *Type:* `number`

---

##### `inputLossImageColor`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageColor"></a>

- *Type:* `string`

---

##### `inputLossImageSlate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageSlate"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate)

---

##### `inputLossImageType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageType"></a>

- *Type:* `string`

---

##### `repeatFrameMsec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.repeatFrameMsec"></a>

- *Type:* `number`

---


### MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeChannelEncoderSettingsNielsenConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsNielsenConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsNielsenConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelEncoderSettingsNielsenConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsNielsenConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsNielsenConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsNielsenConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `distributorId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsNielsenConfiguration.property.distributorId"></a>

- *Type:* `string`

---

##### `nielsenPcmToId3Tagging`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsNielsenConfiguration.property.nielsenPcmToId3Tagging"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeChannelEncoderSettingsTimecodeConfig <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsTimecodeConfig"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsTimecodeConfig.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelEncoderSettingsTimecodeConfig(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsTimecodeConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsTimecodeConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsTimecodeConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsTimecodeConfig.property.source"></a>

- *Type:* `string`

---

##### `syncThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelEncoderSettingsTimecodeConfig.property.syncThreshold"></a>

- *Type:* `number`

---


### MediaLiveResponsesDescribeChannelInputSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelInputSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelInputSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeChannelInputSpecification(__scope: Construct, __resources: string[], __input: MediaLiveDescribeChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelInputSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelInputSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelInputSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelInputSpecification.property.codec"></a>

- *Type:* `string`

---

##### `maximumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelInputSpecification.property.maximumBitrate"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeChannelInputSpecification.property.resolution"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeInput <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeInput(__scope: Construct, __resources: string[], __input: MediaLiveDescribeInputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeInputRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeInputRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.property.arn"></a>

- *Type:* `string`

---

##### `attachedChannels`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.property.attachedChannels"></a>

- *Type:* `string`[]

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDestination`](#aws-cdk-sdk.medialive.MediaLiveInputDestination)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.property.id"></a>

- *Type:* `string`

---

##### `inputClass`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.property.inputClass"></a>

- *Type:* `string`

---

##### `inputDevices`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.property.inputDevices"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDeviceSettings`](#aws-cdk-sdk.medialive.MediaLiveInputDeviceSettings)[]

---

##### `inputSourceType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.property.inputSourceType"></a>

- *Type:* `string`

---

##### `mediaConnectFlows`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.property.mediaConnectFlows"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMediaConnectFlow`](#aws-cdk-sdk.medialive.MediaLiveMediaConnectFlow)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.property.roleArn"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.property.sources"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSource`](#aws-cdk-sdk.medialive.MediaLiveInputSource)[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInput.property.type"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeInputDevice <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDevice"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDevice.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeInputDevice(__scope: Construct, __resources: string[], __input: MediaLiveDescribeInputDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDevice.property.arn"></a>

- *Type:* `string`

---

##### `connectionState`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDevice.property.connectionState"></a>

- *Type:* `string`

---

##### `deviceSettingsSyncState`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDevice.property.deviceSettingsSyncState"></a>

- *Type:* `string`

---

##### `deviceUpdateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDevice.property.deviceUpdateStatus"></a>

- *Type:* `string`

---

##### `hdDeviceSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDevice.property.hdDeviceSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceHdDeviceSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceHdDeviceSettings)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDevice.property.id"></a>

- *Type:* `string`

---

##### `macAddress`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDevice.property.macAddress"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDevice.property.name"></a>

- *Type:* `string`

---

##### `networkSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDevice.property.networkSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceNetworkSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceNetworkSettings)

---

##### `serialNumber`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDevice.property.serialNumber"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDevice.property.type"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeInputDeviceHdDeviceSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceHdDeviceSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceHdDeviceSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeInputDeviceHdDeviceSettings(__scope: Construct, __resources: string[], __input: MediaLiveDescribeInputDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceHdDeviceSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceHdDeviceSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceHdDeviceSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `activeInput`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceHdDeviceSettings.property.activeInput"></a>

- *Type:* `string`

---

##### `configuredInput`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceHdDeviceSettings.property.configuredInput"></a>

- *Type:* `string`

---

##### `deviceState`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceHdDeviceSettings.property.deviceState"></a>

- *Type:* `string`

---

##### `framerate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceHdDeviceSettings.property.framerate"></a>

- *Type:* `number`

---

##### `height`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceHdDeviceSettings.property.height"></a>

- *Type:* `number`

---

##### `maxBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceHdDeviceSettings.property.maxBitrate"></a>

- *Type:* `number`

---

##### `scanType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceHdDeviceSettings.property.scanType"></a>

- *Type:* `string`

---

##### `width`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceHdDeviceSettings.property.width"></a>

- *Type:* `number`

---


### MediaLiveResponsesDescribeInputDeviceNetworkSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceNetworkSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceNetworkSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeInputDeviceNetworkSettings(__scope: Construct, __resources: string[], __input: MediaLiveDescribeInputDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceNetworkSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceNetworkSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceNetworkSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `dnsAddresses`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceNetworkSettings.property.dnsAddresses"></a>

- *Type:* `string`[]

---

##### `gateway`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceNetworkSettings.property.gateway"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceNetworkSettings.property.ipAddress"></a>

- *Type:* `string`

---

##### `ipScheme`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceNetworkSettings.property.ipScheme"></a>

- *Type:* `string`

---

##### `subnetMask`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceNetworkSettings.property.subnetMask"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeInputDeviceThumbnail <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceThumbnail"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceThumbnail.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeInputDeviceThumbnail(__scope: Construct, __resources: string[], __input: MediaLiveDescribeInputDeviceThumbnailRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceThumbnail.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceThumbnail.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceThumbnail.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceThumbnailRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeInputDeviceThumbnailRequest)

---



#### Properties <a name="Properties"></a>

##### `body`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceThumbnail.property.body"></a>

- *Type:* `any`

---

##### `contentLength`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceThumbnail.property.contentLength"></a>

- *Type:* `number`

---

##### `contentType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceThumbnail.property.contentType"></a>

- *Type:* `string`

---

##### `eTag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceThumbnail.property.eTag"></a>

- *Type:* `string`

---

##### `lastModified`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputDeviceThumbnail.property.lastModified"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeInputSecurityGroup <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputSecurityGroup"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputSecurityGroup.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeInputSecurityGroup(__scope: Construct, __resources: string[], __input: MediaLiveDescribeInputSecurityGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputSecurityGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputSecurityGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputSecurityGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeInputSecurityGroupRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeInputSecurityGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputSecurityGroup.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputSecurityGroup.property.id"></a>

- *Type:* `string`

---

##### `inputs`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputSecurityGroup.property.inputs"></a>

- *Type:* `string`[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputSecurityGroup.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputSecurityGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `whitelistRules`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeInputSecurityGroup.property.whitelistRules"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputWhitelistRule`](#aws-cdk-sdk.medialive.MediaLiveInputWhitelistRule)[]

---


### MediaLiveResponsesDescribeMultiplex <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplex"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplex.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeMultiplex(__scope: Construct, __resources: string[], __input: MediaLiveDescribeMultiplexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplex.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplex.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplex.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplex.property.arn"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplex.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplex.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplex.property.id"></a>

- *Type:* `string`

---

##### `multiplexSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplex.property.multiplexSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexMultiplexSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexMultiplexSettings)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplex.property.name"></a>

- *Type:* `string`

---

##### `pipelinesRunningCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplex.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `programCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplex.property.programCount"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplex.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplex.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaLiveResponsesDescribeMultiplexMultiplexSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexMultiplexSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexMultiplexSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeMultiplexMultiplexSettings(__scope: Construct, __resources: string[], __input: MediaLiveDescribeMultiplexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexMultiplexSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexMultiplexSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexMultiplexSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexRequest)

---



#### Properties <a name="Properties"></a>

##### `maximumVideoBufferDelayMilliseconds`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexMultiplexSettings.property.maximumVideoBufferDelayMilliseconds"></a>

- *Type:* `number`

---

##### `transportStreamBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexMultiplexSettings.property.transportStreamBitrate"></a>

- *Type:* `number`

---

##### `transportStreamId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexMultiplexSettings.property.transportStreamId"></a>

- *Type:* `number`

---

##### `transportStreamReservedBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexMultiplexSettings.property.transportStreamReservedBitrate"></a>

- *Type:* `number`

---


### MediaLiveResponsesDescribeMultiplexProgram <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgram"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgram.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeMultiplexProgram(__scope: Construct, __resources: string[], __input: MediaLiveDescribeMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgram.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgram.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgram.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgram.property.channelId"></a>

- *Type:* `string`

---

##### `multiplexProgramSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgram.property.multiplexProgramSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettings)

---

##### `packetIdentifiersMap`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgram.property.packetIdentifiersMap"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap)

---

##### `pipelineDetails`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgram.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPipelineDetail`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPipelineDetail)[]

---

##### `programName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgram.property.programName"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettings(__scope: Construct, __resources: string[], __input: MediaLiveDescribeMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `preferredChannelPipeline`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettings.property.preferredChannelPipeline"></a>

- *Type:* `string`

---

##### `programNumber`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettings.property.programNumber"></a>

- *Type:* `number`

---

##### `serviceDescriptor`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettings.property.serviceDescriptor"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsServiceDescriptor`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsServiceDescriptor)

---

##### `videoSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettings.property.videoSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettings)

---


### MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsServiceDescriptor <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsServiceDescriptor"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsServiceDescriptor.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsServiceDescriptor(__scope: Construct, __resources: string[], __input: MediaLiveDescribeMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsServiceDescriptor.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsServiceDescriptor.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsServiceDescriptor.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.providerName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.serviceName"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettings(__scope: Construct, __resources: string[], __input: MediaLiveDescribeMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `constantBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettings.property.constantBitrate"></a>

- *Type:* `number`

---

##### `statmuxSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettings.property.statmuxSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings)

---


### MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings(__scope: Construct, __resources: string[], __input: MediaLiveDescribeMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `maximumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate"></a>

- *Type:* `number`

---

##### `minimumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate"></a>

- *Type:* `number`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority"></a>

- *Type:* `number`

---


### MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap(__scope: Construct, __resources: string[], __input: MediaLiveDescribeMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `audioPids`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap.property.audioPids"></a>

- *Type:* `number`[]

---

##### `dvbSubPids`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap.property.dvbSubPids"></a>

- *Type:* `number`[]

---

##### `dvbTeletextPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap.property.dvbTeletextPid"></a>

- *Type:* `number`

---

##### `etvPlatformPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap.property.etvPlatformPid"></a>

- *Type:* `number`

---

##### `etvSignalPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap.property.etvSignalPid"></a>

- *Type:* `number`

---

##### `klvDataPids`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap.property.klvDataPids"></a>

- *Type:* `number`[]

---

##### `pcrPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap.property.pcrPid"></a>

- *Type:* `number`

---

##### `pmtPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap.property.pmtPid"></a>

- *Type:* `number`

---

##### `privateMetadataPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap.property.privateMetadataPid"></a>

- *Type:* `number`

---

##### `scte27Pids`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap.property.scte27Pids"></a>

- *Type:* `number`[]

---

##### `scte35Pid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap.property.scte35Pid"></a>

- *Type:* `number`

---

##### `timedMetadataPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap.property.timedMetadataPid"></a>

- *Type:* `number`

---

##### `videoPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeMultiplexProgramPacketIdentifiersMap.property.videoPid"></a>

- *Type:* `number`

---


### MediaLiveResponsesDescribeOffering <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOffering"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOffering.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeOffering(__scope: Construct, __resources: string[], __input: MediaLiveDescribeOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOffering.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOffering.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOffering.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeOfferingRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOffering.property.arn"></a>

- *Type:* `string`

---

##### `currencyCode`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOffering.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOffering.property.duration"></a>

- *Type:* `number`

---

##### `durationUnits`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOffering.property.durationUnits"></a>

- *Type:* `string`

---

##### `fixedPrice`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOffering.property.fixedPrice"></a>

- *Type:* `number`

---

##### `offeringDescription`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOffering.property.offeringDescription"></a>

- *Type:* `string`

---

##### `offeringId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOffering.property.offeringId"></a>

- *Type:* `string`

---

##### `offeringType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOffering.property.offeringType"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOffering.property.region"></a>

- *Type:* `string`

---

##### `resourceSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOffering.property.resourceSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOfferingResourceSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOfferingResourceSpecification)

---

##### `usagePrice`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOffering.property.usagePrice"></a>

- *Type:* `number`

---


### MediaLiveResponsesDescribeOfferingResourceSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOfferingResourceSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOfferingResourceSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeOfferingResourceSpecification(__scope: Construct, __resources: string[], __input: MediaLiveDescribeOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOfferingResourceSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOfferingResourceSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOfferingResourceSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeOfferingRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `channelClass`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOfferingResourceSpecification.property.channelClass"></a>

- *Type:* `string`

---

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOfferingResourceSpecification.property.codec"></a>

- *Type:* `string`

---

##### `maximumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOfferingResourceSpecification.property.maximumBitrate"></a>

- *Type:* `string`

---

##### `maximumFramerate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOfferingResourceSpecification.property.maximumFramerate"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOfferingResourceSpecification.property.resolution"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOfferingResourceSpecification.property.resourceType"></a>

- *Type:* `string`

---

##### `specialFeature`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOfferingResourceSpecification.property.specialFeature"></a>

- *Type:* `string`

---

##### `videoQuality`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeOfferingResourceSpecification.property.videoQuality"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeReservation <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeReservation(__scope: Construct, __resources: string[], __input: MediaLiveDescribeReservationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeReservationRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeReservationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.arn"></a>

- *Type:* `string`

---

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.count"></a>

- *Type:* `number`

---

##### `currencyCode`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.duration"></a>

- *Type:* `number`

---

##### `durationUnits`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.durationUnits"></a>

- *Type:* `string`

---

##### `end`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.end"></a>

- *Type:* `string`

---

##### `fixedPrice`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.fixedPrice"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.name"></a>

- *Type:* `string`

---

##### `offeringDescription`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.offeringDescription"></a>

- *Type:* `string`

---

##### `offeringId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.offeringId"></a>

- *Type:* `string`

---

##### `offeringType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.offeringType"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.region"></a>

- *Type:* `string`

---

##### `reservationId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.reservationId"></a>

- *Type:* `string`

---

##### `resourceSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.resourceSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservationResourceSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservationResourceSpecification)

---

##### `start`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.start"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `usagePrice`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservation.property.usagePrice"></a>

- *Type:* `number`

---


### MediaLiveResponsesDescribeReservationResourceSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservationResourceSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservationResourceSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeReservationResourceSpecification(__scope: Construct, __resources: string[], __input: MediaLiveDescribeReservationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservationResourceSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservationResourceSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservationResourceSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeReservationRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeReservationRequest)

---



#### Properties <a name="Properties"></a>

##### `channelClass`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservationResourceSpecification.property.channelClass"></a>

- *Type:* `string`

---

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservationResourceSpecification.property.codec"></a>

- *Type:* `string`

---

##### `maximumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservationResourceSpecification.property.maximumBitrate"></a>

- *Type:* `string`

---

##### `maximumFramerate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservationResourceSpecification.property.maximumFramerate"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservationResourceSpecification.property.resolution"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservationResourceSpecification.property.resourceType"></a>

- *Type:* `string`

---

##### `specialFeature`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservationResourceSpecification.property.specialFeature"></a>

- *Type:* `string`

---

##### `videoQuality`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeReservationResourceSpecification.property.videoQuality"></a>

- *Type:* `string`

---


### MediaLiveResponsesDescribeSchedule <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeSchedule.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesDescribeSchedule(__scope: Construct, __resources: string[], __input: MediaLiveDescribeScheduleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveDescribeScheduleRequest`](#aws-cdk-sdk.medialive.MediaLiveDescribeScheduleRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeSchedule.property.nextToken"></a>

- *Type:* `string`

---

##### `scheduleActions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesDescribeSchedule.property.scheduleActions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveScheduleAction`](#aws-cdk-sdk.medialive.MediaLiveScheduleAction)[]

---


### MediaLiveResponsesListChannels <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListChannels"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListChannels.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesListChannels(__scope: Construct, __resources: string[], __input: MediaLiveListChannelsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListChannels.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListChannels.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListChannels.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListChannelsRequest`](#aws-cdk-sdk.medialive.MediaLiveListChannelsRequest)

---



#### Properties <a name="Properties"></a>

##### `channels`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListChannels.property.channels"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannelSummary`](#aws-cdk-sdk.medialive.MediaLiveChannelSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListChannels.property.nextToken"></a>

- *Type:* `string`

---


### MediaLiveResponsesListInputDevices <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputDevices"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputDevices.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesListInputDevices(__scope: Construct, __resources: string[], __input: MediaLiveListInputDevicesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputDevices.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputDevices.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputDevices.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListInputDevicesRequest`](#aws-cdk-sdk.medialive.MediaLiveListInputDevicesRequest)

---



#### Properties <a name="Properties"></a>

##### `inputDevices`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputDevices.property.inputDevices"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDeviceSummary`](#aws-cdk-sdk.medialive.MediaLiveInputDeviceSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputDevices.property.nextToken"></a>

- *Type:* `string`

---


### MediaLiveResponsesListInputDeviceTransfers <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputDeviceTransfers"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputDeviceTransfers.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesListInputDeviceTransfers(__scope: Construct, __resources: string[], __input: MediaLiveListInputDeviceTransfersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputDeviceTransfers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputDeviceTransfers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputDeviceTransfers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListInputDeviceTransfersRequest`](#aws-cdk-sdk.medialive.MediaLiveListInputDeviceTransfersRequest)

---



#### Properties <a name="Properties"></a>

##### `inputDeviceTransfers`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputDeviceTransfers.property.inputDeviceTransfers"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveTransferringInputDeviceSummary`](#aws-cdk-sdk.medialive.MediaLiveTransferringInputDeviceSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputDeviceTransfers.property.nextToken"></a>

- *Type:* `string`

---


### MediaLiveResponsesListInputs <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputs"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputs.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesListInputs(__scope: Construct, __resources: string[], __input: MediaLiveListInputsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListInputsRequest`](#aws-cdk-sdk.medialive.MediaLiveListInputsRequest)

---



#### Properties <a name="Properties"></a>

##### `inputs`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputs.property.inputs"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInput`](#aws-cdk-sdk.medialive.MediaLiveInput)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputs.property.nextToken"></a>

- *Type:* `string`

---


### MediaLiveResponsesListInputSecurityGroups <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputSecurityGroups"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputSecurityGroups.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesListInputSecurityGroups(__scope: Construct, __resources: string[], __input: MediaLiveListInputSecurityGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputSecurityGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputSecurityGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputSecurityGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListInputSecurityGroupsRequest`](#aws-cdk-sdk.medialive.MediaLiveListInputSecurityGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `inputSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputSecurityGroups.property.inputSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSecurityGroup`](#aws-cdk-sdk.medialive.MediaLiveInputSecurityGroup)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListInputSecurityGroups.property.nextToken"></a>

- *Type:* `string`

---


### MediaLiveResponsesListMultiplexes <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListMultiplexes"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListMultiplexes.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesListMultiplexes(__scope: Construct, __resources: string[], __input: MediaLiveListMultiplexesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListMultiplexes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListMultiplexes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListMultiplexes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListMultiplexesRequest`](#aws-cdk-sdk.medialive.MediaLiveListMultiplexesRequest)

---



#### Properties <a name="Properties"></a>

##### `multiplexes`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListMultiplexes.property.multiplexes"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexSummary`](#aws-cdk-sdk.medialive.MediaLiveMultiplexSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListMultiplexes.property.nextToken"></a>

- *Type:* `string`

---


### MediaLiveResponsesListMultiplexPrograms <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListMultiplexPrograms"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListMultiplexPrograms.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesListMultiplexPrograms(__scope: Construct, __resources: string[], __input: MediaLiveListMultiplexProgramsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListMultiplexPrograms.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListMultiplexPrograms.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListMultiplexPrograms.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListMultiplexProgramsRequest`](#aws-cdk-sdk.medialive.MediaLiveListMultiplexProgramsRequest)

---



#### Properties <a name="Properties"></a>

##### `multiplexPrograms`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListMultiplexPrograms.property.multiplexPrograms"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSummary`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListMultiplexPrograms.property.nextToken"></a>

- *Type:* `string`

---


### MediaLiveResponsesListOfferings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListOfferings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListOfferings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesListOfferings(__scope: Construct, __resources: string[], __input: MediaLiveListOfferingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListOfferings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListOfferings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListOfferings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListOfferingsRequest`](#aws-cdk-sdk.medialive.MediaLiveListOfferingsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListOfferings.property.nextToken"></a>

- *Type:* `string`

---

##### `offerings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListOfferings.property.offerings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOffering`](#aws-cdk-sdk.medialive.MediaLiveOffering)[]

---


### MediaLiveResponsesListReservations <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListReservations"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListReservations.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesListReservations(__scope: Construct, __resources: string[], __input: MediaLiveListReservationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListReservations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListReservations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListReservations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListReservationsRequest`](#aws-cdk-sdk.medialive.MediaLiveListReservationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListReservations.property.nextToken"></a>

- *Type:* `string`

---

##### `reservations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListReservations.property.reservations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveReservation`](#aws-cdk-sdk.medialive.MediaLiveReservation)[]

---


### MediaLiveResponsesListTagsForResource <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListTagsForResource.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: MediaLiveListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveListTagsForResourceRequest`](#aws-cdk-sdk.medialive.MediaLiveListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaLiveResponsesPurchaseOffering <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOffering"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOffering.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesPurchaseOffering(__scope: Construct, __resources: string[], __input: MediaLivePurchaseOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOffering.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOffering.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOffering.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePurchaseOfferingRequest`](#aws-cdk-sdk.medialive.MediaLivePurchaseOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `reservation`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOffering.property.reservation"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation`](#aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation)

---


### MediaLiveResponsesPurchaseOfferingReservation <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesPurchaseOfferingReservation(__scope: Construct, __resources: string[], __input: MediaLivePurchaseOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePurchaseOfferingRequest`](#aws-cdk-sdk.medialive.MediaLivePurchaseOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.arn"></a>

- *Type:* `string`

---

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.count"></a>

- *Type:* `number`

---

##### `currencyCode`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.duration"></a>

- *Type:* `number`

---

##### `durationUnits`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.durationUnits"></a>

- *Type:* `string`

---

##### `end`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.end"></a>

- *Type:* `string`

---

##### `fixedPrice`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.fixedPrice"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.name"></a>

- *Type:* `string`

---

##### `offeringDescription`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.offeringDescription"></a>

- *Type:* `string`

---

##### `offeringId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.offeringId"></a>

- *Type:* `string`

---

##### `offeringType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.offeringType"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.region"></a>

- *Type:* `string`

---

##### `reservationId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.reservationId"></a>

- *Type:* `string`

---

##### `resourceSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.resourceSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservationResourceSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservationResourceSpecification)

---

##### `start`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.start"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `usagePrice`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservation.property.usagePrice"></a>

- *Type:* `number`

---


### MediaLiveResponsesPurchaseOfferingReservationResourceSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservationResourceSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservationResourceSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesPurchaseOfferingReservationResourceSpecification(__scope: Construct, __resources: string[], __input: MediaLivePurchaseOfferingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservationResourceSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservationResourceSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservationResourceSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePurchaseOfferingRequest`](#aws-cdk-sdk.medialive.MediaLivePurchaseOfferingRequest)

---



#### Properties <a name="Properties"></a>

##### `channelClass`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservationResourceSpecification.property.channelClass"></a>

- *Type:* `string`

---

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservationResourceSpecification.property.codec"></a>

- *Type:* `string`

---

##### `maximumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservationResourceSpecification.property.maximumBitrate"></a>

- *Type:* `string`

---

##### `maximumFramerate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservationResourceSpecification.property.maximumFramerate"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservationResourceSpecification.property.resolution"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservationResourceSpecification.property.resourceType"></a>

- *Type:* `string`

---

##### `specialFeature`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservationResourceSpecification.property.specialFeature"></a>

- *Type:* `string`

---

##### `videoQuality`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesPurchaseOfferingReservationResourceSpecification.property.videoQuality"></a>

- *Type:* `string`

---


### MediaLiveResponsesStartChannel <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannel(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.property.arn"></a>

- *Type:* `string`

---

##### `cdiInputSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.property.cdiInputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelCdiInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelCdiInputSpecification)

---

##### `channelClass`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.property.channelClass"></a>

- *Type:* `string`

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveOutputDestination)[]

---

##### `egressEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.property.egressEndpoints"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint`](#aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint)[]

---

##### `encoderSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.property.encoderSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.property.id"></a>

- *Type:* `string`

---

##### `inputAttachments`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.property.inputAttachments"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputAttachment`](#aws-cdk-sdk.medialive.MediaLiveInputAttachment)[]

---

##### `inputSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.property.inputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelInputSpecification)

---

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.property.logLevel"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.property.name"></a>

- *Type:* `string`

---

##### `pipelineDetails`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePipelineDetail`](#aws-cdk-sdk.medialive.MediaLivePipelineDetail)[]

---

##### `pipelinesRunningCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.property.roleArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannel.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaLiveResponsesStartChannelCdiInputSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelCdiInputSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelCdiInputSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelCdiInputSpecification(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelCdiInputSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelCdiInputSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelCdiInputSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelCdiInputSpecification.property.resolution"></a>

- *Type:* `string`

---


### MediaLiveResponsesStartChannelEncoderSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelEncoderSettings(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `audioDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings.property.audioDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioDescription`](#aws-cdk-sdk.medialive.MediaLiveAudioDescription)[]

---

##### `availBlanking`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings.property.availBlanking"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlanking`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlanking)

---

##### `availConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings.property.availConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfiguration)

---

##### `blackoutSlate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings.property.blackoutSlate"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlate`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlate)

---

##### `captionDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings.property.captionDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCaptionDescription`](#aws-cdk-sdk.medialive.MediaLiveCaptionDescription)[]

---

##### `featureActivations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings.property.featureActivations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsFeatureActivations`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsFeatureActivations)

---

##### `globalConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings.property.globalConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfiguration)

---

##### `nielsenConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings.property.nielsenConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsNielsenConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsNielsenConfiguration)

---

##### `outputGroups`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings.property.outputGroups"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputGroup`](#aws-cdk-sdk.medialive.MediaLiveOutputGroup)[]

---

##### `timecodeConfig`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings.property.timecodeConfig"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsTimecodeConfig`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsTimecodeConfig)

---

##### `videoDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettings.property.videoDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveVideoDescription`](#aws-cdk-sdk.medialive.MediaLiveVideoDescription)[]

---


### MediaLiveResponsesStartChannelEncoderSettingsAvailBlanking <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlanking"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlanking.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlanking(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlanking.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlanking.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlanking.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `availBlankingImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlanking.property.availBlankingImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlankingAvailBlankingImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlankingAvailBlankingImage)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlanking.property.state"></a>

- *Type:* `string`

---


### MediaLiveResponsesStartChannelEncoderSettingsAvailBlankingAvailBlankingImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlankingAvailBlankingImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlankingAvailBlankingImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlankingAvailBlankingImage(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesStartChannelEncoderSettingsAvailConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `availSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfiguration.property.availSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettings)

---


### MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettings(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `scte35SpliceInsert`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettings.property.scte35SpliceInsert"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert)

---

##### `scte35TimeSignalApos`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettings.property.scte35TimeSignalApos"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos)

---


### MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `adAvailOffset`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.adAvailOffset"></a>

- *Type:* `number`

---

##### `noRegionalBlackoutFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.noRegionalBlackoutFlag"></a>

- *Type:* `string`

---

##### `webDeliveryAllowedFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.webDeliveryAllowedFlag"></a>

- *Type:* `string`

---


### MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `adAvailOffset`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.adAvailOffset"></a>

- *Type:* `number`

---

##### `noRegionalBlackoutFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.noRegionalBlackoutFlag"></a>

- *Type:* `string`

---

##### `webDeliveryAllowedFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.webDeliveryAllowedFlag"></a>

- *Type:* `string`

---


### MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlate <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlate"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlate.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlate(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `blackoutSlateImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlate.property.blackoutSlateImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateBlackoutSlateImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateBlackoutSlateImage)

---

##### `networkEndBlackout`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlate.property.networkEndBlackout"></a>

- *Type:* `string`

---

##### `networkEndBlackoutImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlate.property.networkEndBlackoutImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage)

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlate.property.networkId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlate.property.state"></a>

- *Type:* `string`

---


### MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateBlackoutSlateImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateBlackoutSlateImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateBlackoutSlateImage(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesStartChannelEncoderSettingsFeatureActivations <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsFeatureActivations"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsFeatureActivations.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelEncoderSettingsFeatureActivations(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsFeatureActivations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsFeatureActivations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsFeatureActivations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `inputPrepareScheduleActions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsFeatureActivations.property.inputPrepareScheduleActions"></a>

- *Type:* `string`

---


### MediaLiveResponsesStartChannelEncoderSettingsGlobalConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `initialAudioGain`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfiguration.property.initialAudioGain"></a>

- *Type:* `number`

---

##### `inputEndAction`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfiguration.property.inputEndAction"></a>

- *Type:* `string`

---

##### `inputLossBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfiguration.property.inputLossBehavior"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehavior`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehavior)

---

##### `outputLockingMode`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfiguration.property.outputLockingMode"></a>

- *Type:* `string`

---

##### `outputTimingSource`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfiguration.property.outputTimingSource"></a>

- *Type:* `string`

---

##### `supportLowFramerateInputs`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfiguration.property.supportLowFramerateInputs"></a>

- *Type:* `string`

---


### MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehavior <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehavior"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehavior.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehavior(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `blackFrameMsec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.blackFrameMsec"></a>

- *Type:* `number`

---

##### `inputLossImageColor`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageColor"></a>

- *Type:* `string`

---

##### `inputLossImageSlate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageSlate"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate)

---

##### `inputLossImageType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageType"></a>

- *Type:* `string`

---

##### `repeatFrameMsec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.repeatFrameMsec"></a>

- *Type:* `number`

---


### MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesStartChannelEncoderSettingsNielsenConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsNielsenConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsNielsenConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelEncoderSettingsNielsenConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsNielsenConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsNielsenConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsNielsenConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `distributorId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsNielsenConfiguration.property.distributorId"></a>

- *Type:* `string`

---

##### `nielsenPcmToId3Tagging`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsNielsenConfiguration.property.nielsenPcmToId3Tagging"></a>

- *Type:* `string`

---


### MediaLiveResponsesStartChannelEncoderSettingsTimecodeConfig <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsTimecodeConfig"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsTimecodeConfig.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelEncoderSettingsTimecodeConfig(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsTimecodeConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsTimecodeConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsTimecodeConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsTimecodeConfig.property.source"></a>

- *Type:* `string`

---

##### `syncThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelEncoderSettingsTimecodeConfig.property.syncThreshold"></a>

- *Type:* `number`

---


### MediaLiveResponsesStartChannelInputSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelInputSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelInputSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartChannelInputSpecification(__scope: Construct, __resources: string[], __input: MediaLiveStartChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelInputSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelInputSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelInputSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStartChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelInputSpecification.property.codec"></a>

- *Type:* `string`

---

##### `maximumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelInputSpecification.property.maximumBitrate"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartChannelInputSpecification.property.resolution"></a>

- *Type:* `string`

---


### MediaLiveResponsesStartMultiplex <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplex"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplex.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartMultiplex(__scope: Construct, __resources: string[], __input: MediaLiveStartMultiplexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplex.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplex.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplex.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveStartMultiplexRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplex.property.arn"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplex.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplex.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplex.property.id"></a>

- *Type:* `string`

---

##### `multiplexSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplex.property.multiplexSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplexMultiplexSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplexMultiplexSettings)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplex.property.name"></a>

- *Type:* `string`

---

##### `pipelinesRunningCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplex.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `programCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplex.property.programCount"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplex.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplex.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaLiveResponsesStartMultiplexMultiplexSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplexMultiplexSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplexMultiplexSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStartMultiplexMultiplexSettings(__scope: Construct, __resources: string[], __input: MediaLiveStartMultiplexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplexMultiplexSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplexMultiplexSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplexMultiplexSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStartMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveStartMultiplexRequest)

---



#### Properties <a name="Properties"></a>

##### `maximumVideoBufferDelayMilliseconds`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplexMultiplexSettings.property.maximumVideoBufferDelayMilliseconds"></a>

- *Type:* `number`

---

##### `transportStreamBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplexMultiplexSettings.property.transportStreamBitrate"></a>

- *Type:* `number`

---

##### `transportStreamId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplexMultiplexSettings.property.transportStreamId"></a>

- *Type:* `number`

---

##### `transportStreamReservedBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStartMultiplexMultiplexSettings.property.transportStreamReservedBitrate"></a>

- *Type:* `number`

---


### MediaLiveResponsesStopChannel <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannel(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.property.arn"></a>

- *Type:* `string`

---

##### `cdiInputSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.property.cdiInputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelCdiInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelCdiInputSpecification)

---

##### `channelClass`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.property.channelClass"></a>

- *Type:* `string`

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveOutputDestination)[]

---

##### `egressEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.property.egressEndpoints"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint`](#aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint)[]

---

##### `encoderSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.property.encoderSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.property.id"></a>

- *Type:* `string`

---

##### `inputAttachments`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.property.inputAttachments"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputAttachment`](#aws-cdk-sdk.medialive.MediaLiveInputAttachment)[]

---

##### `inputSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.property.inputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelInputSpecification)

---

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.property.logLevel"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.property.name"></a>

- *Type:* `string`

---

##### `pipelineDetails`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePipelineDetail`](#aws-cdk-sdk.medialive.MediaLivePipelineDetail)[]

---

##### `pipelinesRunningCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.property.roleArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannel.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaLiveResponsesStopChannelCdiInputSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelCdiInputSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelCdiInputSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelCdiInputSpecification(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelCdiInputSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelCdiInputSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelCdiInputSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelCdiInputSpecification.property.resolution"></a>

- *Type:* `string`

---


### MediaLiveResponsesStopChannelEncoderSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelEncoderSettings(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `audioDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings.property.audioDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioDescription`](#aws-cdk-sdk.medialive.MediaLiveAudioDescription)[]

---

##### `availBlanking`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings.property.availBlanking"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlanking`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlanking)

---

##### `availConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings.property.availConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfiguration)

---

##### `blackoutSlate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings.property.blackoutSlate"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlate`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlate)

---

##### `captionDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings.property.captionDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCaptionDescription`](#aws-cdk-sdk.medialive.MediaLiveCaptionDescription)[]

---

##### `featureActivations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings.property.featureActivations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsFeatureActivations`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsFeatureActivations)

---

##### `globalConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings.property.globalConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfiguration)

---

##### `nielsenConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings.property.nielsenConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsNielsenConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsNielsenConfiguration)

---

##### `outputGroups`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings.property.outputGroups"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputGroup`](#aws-cdk-sdk.medialive.MediaLiveOutputGroup)[]

---

##### `timecodeConfig`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings.property.timecodeConfig"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsTimecodeConfig`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsTimecodeConfig)

---

##### `videoDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettings.property.videoDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveVideoDescription`](#aws-cdk-sdk.medialive.MediaLiveVideoDescription)[]

---


### MediaLiveResponsesStopChannelEncoderSettingsAvailBlanking <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlanking"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlanking.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlanking(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlanking.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlanking.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlanking.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `availBlankingImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlanking.property.availBlankingImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlankingAvailBlankingImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlankingAvailBlankingImage)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlanking.property.state"></a>

- *Type:* `string`

---


### MediaLiveResponsesStopChannelEncoderSettingsAvailBlankingAvailBlankingImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlankingAvailBlankingImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlankingAvailBlankingImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlankingAvailBlankingImage(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesStopChannelEncoderSettingsAvailConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `availSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfiguration.property.availSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettings)

---


### MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettings(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `scte35SpliceInsert`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettings.property.scte35SpliceInsert"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert)

---

##### `scte35TimeSignalApos`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettings.property.scte35TimeSignalApos"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos)

---


### MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `adAvailOffset`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.adAvailOffset"></a>

- *Type:* `number`

---

##### `noRegionalBlackoutFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.noRegionalBlackoutFlag"></a>

- *Type:* `string`

---

##### `webDeliveryAllowedFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.webDeliveryAllowedFlag"></a>

- *Type:* `string`

---


### MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `adAvailOffset`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.adAvailOffset"></a>

- *Type:* `number`

---

##### `noRegionalBlackoutFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.noRegionalBlackoutFlag"></a>

- *Type:* `string`

---

##### `webDeliveryAllowedFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.webDeliveryAllowedFlag"></a>

- *Type:* `string`

---


### MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlate <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlate"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlate.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlate(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `blackoutSlateImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlate.property.blackoutSlateImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateBlackoutSlateImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateBlackoutSlateImage)

---

##### `networkEndBlackout`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlate.property.networkEndBlackout"></a>

- *Type:* `string`

---

##### `networkEndBlackoutImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlate.property.networkEndBlackoutImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage)

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlate.property.networkId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlate.property.state"></a>

- *Type:* `string`

---


### MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateBlackoutSlateImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateBlackoutSlateImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateBlackoutSlateImage(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesStopChannelEncoderSettingsFeatureActivations <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsFeatureActivations"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsFeatureActivations.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelEncoderSettingsFeatureActivations(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsFeatureActivations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsFeatureActivations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsFeatureActivations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `inputPrepareScheduleActions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsFeatureActivations.property.inputPrepareScheduleActions"></a>

- *Type:* `string`

---


### MediaLiveResponsesStopChannelEncoderSettingsGlobalConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `initialAudioGain`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfiguration.property.initialAudioGain"></a>

- *Type:* `number`

---

##### `inputEndAction`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfiguration.property.inputEndAction"></a>

- *Type:* `string`

---

##### `inputLossBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfiguration.property.inputLossBehavior"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehavior`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehavior)

---

##### `outputLockingMode`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfiguration.property.outputLockingMode"></a>

- *Type:* `string`

---

##### `outputTimingSource`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfiguration.property.outputTimingSource"></a>

- *Type:* `string`

---

##### `supportLowFramerateInputs`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfiguration.property.supportLowFramerateInputs"></a>

- *Type:* `string`

---


### MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehavior <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehavior"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehavior.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehavior(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `blackFrameMsec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.blackFrameMsec"></a>

- *Type:* `number`

---

##### `inputLossImageColor`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageColor"></a>

- *Type:* `string`

---

##### `inputLossImageSlate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageSlate"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate)

---

##### `inputLossImageType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageType"></a>

- *Type:* `string`

---

##### `repeatFrameMsec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.repeatFrameMsec"></a>

- *Type:* `number`

---


### MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesStopChannelEncoderSettingsNielsenConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsNielsenConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsNielsenConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelEncoderSettingsNielsenConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsNielsenConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsNielsenConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsNielsenConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `distributorId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsNielsenConfiguration.property.distributorId"></a>

- *Type:* `string`

---

##### `nielsenPcmToId3Tagging`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsNielsenConfiguration.property.nielsenPcmToId3Tagging"></a>

- *Type:* `string`

---


### MediaLiveResponsesStopChannelEncoderSettingsTimecodeConfig <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsTimecodeConfig"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsTimecodeConfig.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelEncoderSettingsTimecodeConfig(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsTimecodeConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsTimecodeConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsTimecodeConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsTimecodeConfig.property.source"></a>

- *Type:* `string`

---

##### `syncThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelEncoderSettingsTimecodeConfig.property.syncThreshold"></a>

- *Type:* `number`

---


### MediaLiveResponsesStopChannelInputSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelInputSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelInputSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopChannelInputSpecification(__scope: Construct, __resources: string[], __input: MediaLiveStopChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelInputSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelInputSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelInputSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveStopChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelInputSpecification.property.codec"></a>

- *Type:* `string`

---

##### `maximumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelInputSpecification.property.maximumBitrate"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopChannelInputSpecification.property.resolution"></a>

- *Type:* `string`

---


### MediaLiveResponsesStopMultiplex <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplex"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplex.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopMultiplex(__scope: Construct, __resources: string[], __input: MediaLiveStopMultiplexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplex.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplex.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplex.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveStopMultiplexRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplex.property.arn"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplex.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplex.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplex.property.id"></a>

- *Type:* `string`

---

##### `multiplexSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplex.property.multiplexSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplexMultiplexSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplexMultiplexSettings)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplex.property.name"></a>

- *Type:* `string`

---

##### `pipelinesRunningCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplex.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `programCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplex.property.programCount"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplex.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplex.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaLiveResponsesStopMultiplexMultiplexSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplexMultiplexSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplexMultiplexSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesStopMultiplexMultiplexSettings(__scope: Construct, __resources: string[], __input: MediaLiveStopMultiplexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplexMultiplexSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplexMultiplexSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplexMultiplexSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveStopMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveStopMultiplexRequest)

---



#### Properties <a name="Properties"></a>

##### `maximumVideoBufferDelayMilliseconds`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplexMultiplexSettings.property.maximumVideoBufferDelayMilliseconds"></a>

- *Type:* `number`

---

##### `transportStreamBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplexMultiplexSettings.property.transportStreamBitrate"></a>

- *Type:* `number`

---

##### `transportStreamId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplexMultiplexSettings.property.transportStreamId"></a>

- *Type:* `number`

---

##### `transportStreamReservedBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesStopMultiplexMultiplexSettings.property.transportStreamReservedBitrate"></a>

- *Type:* `number`

---


### MediaLiveResponsesUpdateChannel <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannel"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannel.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannel(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `channel`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannel.property.channel"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel)

---


### MediaLiveResponsesUpdateChannelChannel <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannel(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.property.arn"></a>

- *Type:* `string`

---

##### `cdiInputSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.property.cdiInputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelCdiInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelCdiInputSpecification)

---

##### `channelClass`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.property.channelClass"></a>

- *Type:* `string`

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveOutputDestination)[]

---

##### `egressEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.property.egressEndpoints"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint`](#aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint)[]

---

##### `encoderSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.property.encoderSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.property.id"></a>

- *Type:* `string`

---

##### `inputAttachments`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.property.inputAttachments"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputAttachment`](#aws-cdk-sdk.medialive.MediaLiveInputAttachment)[]

---

##### `inputSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.property.inputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelInputSpecification)

---

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.property.logLevel"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.property.name"></a>

- *Type:* `string`

---

##### `pipelineDetails`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePipelineDetail`](#aws-cdk-sdk.medialive.MediaLivePipelineDetail)[]

---

##### `pipelinesRunningCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.property.roleArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannel.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaLiveResponsesUpdateChannelChannelCdiInputSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelCdiInputSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelCdiInputSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelCdiInputSpecification(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelCdiInputSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelCdiInputSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelCdiInputSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelCdiInputSpecification.property.resolution"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelChannelEncoderSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `audioDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings.property.audioDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioDescription`](#aws-cdk-sdk.medialive.MediaLiveAudioDescription)[]

---

##### `availBlanking`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings.property.availBlanking"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlanking`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlanking)

---

##### `availConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings.property.availConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfiguration)

---

##### `blackoutSlate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings.property.blackoutSlate"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlate`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlate)

---

##### `captionDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings.property.captionDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCaptionDescription`](#aws-cdk-sdk.medialive.MediaLiveCaptionDescription)[]

---

##### `featureActivations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings.property.featureActivations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsFeatureActivations`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsFeatureActivations)

---

##### `globalConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings.property.globalConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfiguration)

---

##### `nielsenConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings.property.nielsenConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsNielsenConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsNielsenConfiguration)

---

##### `outputGroups`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings.property.outputGroups"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputGroup`](#aws-cdk-sdk.medialive.MediaLiveOutputGroup)[]

---

##### `timecodeConfig`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings.property.timecodeConfig"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsTimecodeConfig`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsTimecodeConfig)

---

##### `videoDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettings.property.videoDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveVideoDescription`](#aws-cdk-sdk.medialive.MediaLiveVideoDescription)[]

---


### MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlanking <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlanking"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlanking.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlanking(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlanking.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlanking.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlanking.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `availBlankingImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlanking.property.availBlankingImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlanking.property.state"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `availSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfiguration.property.availSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettings)

---


### MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettings(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `scte35SpliceInsert`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettings.property.scte35SpliceInsert"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert)

---

##### `scte35TimeSignalApos`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettings.property.scte35TimeSignalApos"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos)

---


### MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `adAvailOffset`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.adAvailOffset"></a>

- *Type:* `number`

---

##### `noRegionalBlackoutFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.noRegionalBlackoutFlag"></a>

- *Type:* `string`

---

##### `webDeliveryAllowedFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.webDeliveryAllowedFlag"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `adAvailOffset`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.adAvailOffset"></a>

- *Type:* `number`

---

##### `noRegionalBlackoutFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.noRegionalBlackoutFlag"></a>

- *Type:* `string`

---

##### `webDeliveryAllowedFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.webDeliveryAllowedFlag"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlate <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlate"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlate.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlate(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `blackoutSlateImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlate.property.blackoutSlateImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage)

---

##### `networkEndBlackout`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlate.property.networkEndBlackout"></a>

- *Type:* `string`

---

##### `networkEndBlackoutImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlate.property.networkEndBlackoutImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage)

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlate.property.networkId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlate.property.state"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelChannelEncoderSettingsFeatureActivations <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsFeatureActivations"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsFeatureActivations.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsFeatureActivations(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsFeatureActivations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsFeatureActivations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsFeatureActivations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `inputPrepareScheduleActions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsFeatureActivations.property.inputPrepareScheduleActions"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `initialAudioGain`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfiguration.property.initialAudioGain"></a>

- *Type:* `number`

---

##### `inputEndAction`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfiguration.property.inputEndAction"></a>

- *Type:* `string`

---

##### `inputLossBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfiguration.property.inputLossBehavior"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior)

---

##### `outputLockingMode`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfiguration.property.outputLockingMode"></a>

- *Type:* `string`

---

##### `outputTimingSource`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfiguration.property.outputTimingSource"></a>

- *Type:* `string`

---

##### `supportLowFramerateInputs`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfiguration.property.supportLowFramerateInputs"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `blackFrameMsec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.blackFrameMsec"></a>

- *Type:* `number`

---

##### `inputLossImageColor`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageColor"></a>

- *Type:* `string`

---

##### `inputLossImageSlate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageSlate"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate)

---

##### `inputLossImageType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageType"></a>

- *Type:* `string`

---

##### `repeatFrameMsec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.repeatFrameMsec"></a>

- *Type:* `number`

---


### MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelChannelEncoderSettingsNielsenConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsNielsenConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsNielsenConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsNielsenConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsNielsenConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsNielsenConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsNielsenConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `distributorId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsNielsenConfiguration.property.distributorId"></a>

- *Type:* `string`

---

##### `nielsenPcmToId3Tagging`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsNielsenConfiguration.property.nielsenPcmToId3Tagging"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelChannelEncoderSettingsTimecodeConfig <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsTimecodeConfig"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsTimecodeConfig.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsTimecodeConfig(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsTimecodeConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsTimecodeConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsTimecodeConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsTimecodeConfig.property.source"></a>

- *Type:* `string`

---

##### `syncThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelEncoderSettingsTimecodeConfig.property.syncThreshold"></a>

- *Type:* `number`

---


### MediaLiveResponsesUpdateChannelChannelInputSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelInputSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelInputSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelChannelInputSpecification(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelInputSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelInputSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelInputSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelRequest)

---



#### Properties <a name="Properties"></a>

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelInputSpecification.property.codec"></a>

- *Type:* `string`

---

##### `maximumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelInputSpecification.property.maximumBitrate"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelChannelInputSpecification.property.resolution"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelClass <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClass"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClass.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClass(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClass.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClass.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClass.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `channel`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClass.property.channel"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel)

---


### MediaLiveResponsesUpdateChannelClassChannel <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannel(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.property.arn"></a>

- *Type:* `string`

---

##### `cdiInputSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.property.cdiInputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelCdiInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelCdiInputSpecification)

---

##### `channelClass`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.property.channelClass"></a>

- *Type:* `string`

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveOutputDestination)[]

---

##### `egressEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.property.egressEndpoints"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint`](#aws-cdk-sdk.medialive.MediaLiveChannelEgressEndpoint)[]

---

##### `encoderSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.property.encoderSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.property.id"></a>

- *Type:* `string`

---

##### `inputAttachments`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.property.inputAttachments"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputAttachment`](#aws-cdk-sdk.medialive.MediaLiveInputAttachment)[]

---

##### `inputSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.property.inputSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelInputSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelInputSpecification)

---

##### `logLevel`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.property.logLevel"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.property.name"></a>

- *Type:* `string`

---

##### `pipelineDetails`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLivePipelineDetail`](#aws-cdk-sdk.medialive.MediaLivePipelineDetail)[]

---

##### `pipelinesRunningCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.property.roleArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannel.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaLiveResponsesUpdateChannelClassChannelCdiInputSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelCdiInputSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelCdiInputSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelCdiInputSpecification(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelCdiInputSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelCdiInputSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelCdiInputSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelCdiInputSpecification.property.resolution"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelClassChannelEncoderSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `audioDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings.property.audioDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveAudioDescription`](#aws-cdk-sdk.medialive.MediaLiveAudioDescription)[]

---

##### `availBlanking`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings.property.availBlanking"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlanking`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlanking)

---

##### `availConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings.property.availConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfiguration)

---

##### `blackoutSlate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings.property.blackoutSlate"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlate`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlate)

---

##### `captionDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings.property.captionDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveCaptionDescription`](#aws-cdk-sdk.medialive.MediaLiveCaptionDescription)[]

---

##### `featureActivations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings.property.featureActivations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsFeatureActivations`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsFeatureActivations)

---

##### `globalConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings.property.globalConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfiguration)

---

##### `nielsenConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings.property.nielsenConfiguration"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsNielsenConfiguration`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsNielsenConfiguration)

---

##### `outputGroups`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings.property.outputGroups"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveOutputGroup`](#aws-cdk-sdk.medialive.MediaLiveOutputGroup)[]

---

##### `timecodeConfig`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings.property.timecodeConfig"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsTimecodeConfig`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsTimecodeConfig)

---

##### `videoDescriptions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettings.property.videoDescriptions"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveVideoDescription`](#aws-cdk-sdk.medialive.MediaLiveVideoDescription)[]

---


### MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlanking <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlanking"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlanking.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlanking(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlanking.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlanking.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlanking.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `availBlankingImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlanking.property.availBlankingImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlankingAvailBlankingImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlankingAvailBlankingImage)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlanking.property.state"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlankingAvailBlankingImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlankingAvailBlankingImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlankingAvailBlankingImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlankingAvailBlankingImage(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlankingAvailBlankingImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailBlankingAvailBlankingImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `availSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfiguration.property.availSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettings)

---


### MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettings(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `scte35SpliceInsert`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettings.property.scte35SpliceInsert"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert)

---

##### `scte35TimeSignalApos`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettings.property.scte35TimeSignalApos"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos)

---


### MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `adAvailOffset`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.adAvailOffset"></a>

- *Type:* `number`

---

##### `noRegionalBlackoutFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.noRegionalBlackoutFlag"></a>

- *Type:* `string`

---

##### `webDeliveryAllowedFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35SpliceInsert.property.webDeliveryAllowedFlag"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `adAvailOffset`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.adAvailOffset"></a>

- *Type:* `number`

---

##### `noRegionalBlackoutFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.noRegionalBlackoutFlag"></a>

- *Type:* `string`

---

##### `webDeliveryAllowedFlag`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsAvailConfigurationAvailSettingsScte35TimeSignalApos.property.webDeliveryAllowedFlag"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlate <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlate"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlate.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlate(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `blackoutSlateImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlate.property.blackoutSlateImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateBlackoutSlateImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateBlackoutSlateImage)

---

##### `networkEndBlackout`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlate.property.networkEndBlackout"></a>

- *Type:* `string`

---

##### `networkEndBlackoutImage`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlate.property.networkEndBlackoutImage"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage)

---

##### `networkId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlate.property.networkId"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlate.property.state"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateBlackoutSlateImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateBlackoutSlateImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateBlackoutSlateImage(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateBlackoutSlateImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsBlackoutSlateNetworkEndBlackoutImage.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsFeatureActivations <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsFeatureActivations"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsFeatureActivations.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsFeatureActivations(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsFeatureActivations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsFeatureActivations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsFeatureActivations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `inputPrepareScheduleActions`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsFeatureActivations.property.inputPrepareScheduleActions"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `initialAudioGain`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfiguration.property.initialAudioGain"></a>

- *Type:* `number`

---

##### `inputEndAction`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfiguration.property.inputEndAction"></a>

- *Type:* `string`

---

##### `inputLossBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfiguration.property.inputLossBehavior"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehavior`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehavior)

---

##### `outputLockingMode`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfiguration.property.outputLockingMode"></a>

- *Type:* `string`

---

##### `outputTimingSource`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfiguration.property.outputTimingSource"></a>

- *Type:* `string`

---

##### `supportLowFramerateInputs`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfiguration.property.supportLowFramerateInputs"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehavior <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehavior"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehavior.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehavior(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehavior.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `blackFrameMsec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.blackFrameMsec"></a>

- *Type:* `number`

---

##### `inputLossImageColor`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageColor"></a>

- *Type:* `string`

---

##### `inputLossImageSlate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageSlate"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate)

---

##### `inputLossImageType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.inputLossImageType"></a>

- *Type:* `string`

---

##### `repeatFrameMsec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehavior.property.repeatFrameMsec"></a>

- *Type:* `number`

---


### MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `passwordParam`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.passwordParam"></a>

- *Type:* `string`

---

##### `uri`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.uri"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate.property.username"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsNielsenConfiguration <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsNielsenConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsNielsenConfiguration.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsNielsenConfiguration(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsNielsenConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsNielsenConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsNielsenConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `distributorId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsNielsenConfiguration.property.distributorId"></a>

- *Type:* `string`

---

##### `nielsenPcmToId3Tagging`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsNielsenConfiguration.property.nielsenPcmToId3Tagging"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsTimecodeConfig <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsTimecodeConfig"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsTimecodeConfig.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsTimecodeConfig(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsTimecodeConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsTimecodeConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsTimecodeConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsTimecodeConfig.property.source"></a>

- *Type:* `string`

---

##### `syncThreshold`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelEncoderSettingsTimecodeConfig.property.syncThreshold"></a>

- *Type:* `number`

---


### MediaLiveResponsesUpdateChannelClassChannelInputSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelInputSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelInputSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateChannelClassChannelInputSpecification(__scope: Construct, __resources: string[], __input: MediaLiveUpdateChannelClassRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelInputSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelInputSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelInputSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateChannelClassRequest)

---



#### Properties <a name="Properties"></a>

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelInputSpecification.property.codec"></a>

- *Type:* `string`

---

##### `maximumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelInputSpecification.property.maximumBitrate"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateChannelClassChannelInputSpecification.property.resolution"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateInput <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInput"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInput.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateInput(__scope: Construct, __resources: string[], __input: MediaLiveUpdateInputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateInputRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateInputRequest)

---



#### Properties <a name="Properties"></a>

##### `input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInput.property.input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput)

---


### MediaLiveResponsesUpdateInputDevice <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDevice"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDevice.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateInputDevice(__scope: Construct, __resources: string[], __input: MediaLiveUpdateInputDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDevice.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDevice.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDevice.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDevice.property.arn"></a>

- *Type:* `string`

---

##### `connectionState`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDevice.property.connectionState"></a>

- *Type:* `string`

---

##### `deviceSettingsSyncState`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDevice.property.deviceSettingsSyncState"></a>

- *Type:* `string`

---

##### `deviceUpdateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDevice.property.deviceUpdateStatus"></a>

- *Type:* `string`

---

##### `hdDeviceSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDevice.property.hdDeviceSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceHdDeviceSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceHdDeviceSettings)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDevice.property.id"></a>

- *Type:* `string`

---

##### `macAddress`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDevice.property.macAddress"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDevice.property.name"></a>

- *Type:* `string`

---

##### `networkSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDevice.property.networkSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceNetworkSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceNetworkSettings)

---

##### `serialNumber`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDevice.property.serialNumber"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDevice.property.type"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateInputDeviceHdDeviceSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceHdDeviceSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceHdDeviceSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateInputDeviceHdDeviceSettings(__scope: Construct, __resources: string[], __input: MediaLiveUpdateInputDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceHdDeviceSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceHdDeviceSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceHdDeviceSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `activeInput`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceHdDeviceSettings.property.activeInput"></a>

- *Type:* `string`

---

##### `configuredInput`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceHdDeviceSettings.property.configuredInput"></a>

- *Type:* `string`

---

##### `deviceState`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceHdDeviceSettings.property.deviceState"></a>

- *Type:* `string`

---

##### `framerate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceHdDeviceSettings.property.framerate"></a>

- *Type:* `number`

---

##### `height`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceHdDeviceSettings.property.height"></a>

- *Type:* `number`

---

##### `maxBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceHdDeviceSettings.property.maxBitrate"></a>

- *Type:* `number`

---

##### `scanType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceHdDeviceSettings.property.scanType"></a>

- *Type:* `string`

---

##### `width`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceHdDeviceSettings.property.width"></a>

- *Type:* `number`

---


### MediaLiveResponsesUpdateInputDeviceNetworkSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceNetworkSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceNetworkSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateInputDeviceNetworkSettings(__scope: Construct, __resources: string[], __input: MediaLiveUpdateInputDeviceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceNetworkSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceNetworkSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceNetworkSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateInputDeviceRequest)

---



#### Properties <a name="Properties"></a>

##### `dnsAddresses`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceNetworkSettings.property.dnsAddresses"></a>

- *Type:* `string`[]

---

##### `gateway`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceNetworkSettings.property.gateway"></a>

- *Type:* `string`

---

##### `ipAddress`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceNetworkSettings.property.ipAddress"></a>

- *Type:* `string`

---

##### `ipScheme`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceNetworkSettings.property.ipScheme"></a>

- *Type:* `string`

---

##### `subnetMask`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputDeviceNetworkSettings.property.subnetMask"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateInputInput <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateInputInput(__scope: Construct, __resources: string[], __input: MediaLiveUpdateInputRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateInputRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateInputRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.property.arn"></a>

- *Type:* `string`

---

##### `attachedChannels`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.property.attachedChannels"></a>

- *Type:* `string`[]

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDestination`](#aws-cdk-sdk.medialive.MediaLiveInputDestination)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.property.id"></a>

- *Type:* `string`

---

##### `inputClass`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.property.inputClass"></a>

- *Type:* `string`

---

##### `inputDevices`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.property.inputDevices"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputDeviceSettings`](#aws-cdk-sdk.medialive.MediaLiveInputDeviceSettings)[]

---

##### `inputSourceType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.property.inputSourceType"></a>

- *Type:* `string`

---

##### `mediaConnectFlows`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.property.mediaConnectFlows"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMediaConnectFlow`](#aws-cdk-sdk.medialive.MediaLiveMediaConnectFlow)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.property.name"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.property.roleArn"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `sources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.property.sources"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputSource`](#aws-cdk-sdk.medialive.MediaLiveInputSource)[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputInput.property.type"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateInputSecurityGroup <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroup"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroup.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateInputSecurityGroup(__scope: Construct, __resources: string[], __input: MediaLiveUpdateInputSecurityGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateInputSecurityGroupRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateInputSecurityGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `securityGroup`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroup.property.securityGroup"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroupSecurityGroup`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroupSecurityGroup)

---


### MediaLiveResponsesUpdateInputSecurityGroupSecurityGroup <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroupSecurityGroup"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroupSecurityGroup.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateInputSecurityGroupSecurityGroup(__scope: Construct, __resources: string[], __input: MediaLiveUpdateInputSecurityGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroupSecurityGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroupSecurityGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroupSecurityGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateInputSecurityGroupRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateInputSecurityGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroupSecurityGroup.property.arn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroupSecurityGroup.property.id"></a>

- *Type:* `string`

---

##### `inputs`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroupSecurityGroup.property.inputs"></a>

- *Type:* `string`[]

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroupSecurityGroup.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroupSecurityGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `whitelistRules`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateInputSecurityGroupSecurityGroup.property.whitelistRules"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveInputWhitelistRule`](#aws-cdk-sdk.medialive.MediaLiveInputWhitelistRule)[]

---


### MediaLiveResponsesUpdateMultiplex <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplex"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplex.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateMultiplex(__scope: Construct, __resources: string[], __input: MediaLiveUpdateMultiplexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplex.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplex.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplex.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexRequest)

---



#### Properties <a name="Properties"></a>

##### `multiplex`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplex.property.multiplex"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplex`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplex)

---


### MediaLiveResponsesUpdateMultiplexMultiplex <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplex"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplex.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateMultiplexMultiplex(__scope: Construct, __resources: string[], __input: MediaLiveUpdateMultiplexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplex.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplex.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplex.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplex.property.arn"></a>

- *Type:* `string`

---

##### `availabilityZones`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplex.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `destinations`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplex.property.destinations"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination`](#aws-cdk-sdk.medialive.MediaLiveMultiplexOutputDestination)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplex.property.id"></a>

- *Type:* `string`

---

##### `multiplexSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplex.property.multiplexSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplexMultiplexSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplexMultiplexSettings)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplex.property.name"></a>

- *Type:* `string`

---

##### `pipelinesRunningCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplex.property.pipelinesRunningCount"></a>

- *Type:* `number`

---

##### `programCount`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplex.property.programCount"></a>

- *Type:* `number`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplex.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplex.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### MediaLiveResponsesUpdateMultiplexMultiplexMultiplexSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplexMultiplexSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplexMultiplexSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateMultiplexMultiplexMultiplexSettings(__scope: Construct, __resources: string[], __input: MediaLiveUpdateMultiplexRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplexMultiplexSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplexMultiplexSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplexMultiplexSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexRequest)

---



#### Properties <a name="Properties"></a>

##### `maximumVideoBufferDelayMilliseconds`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplexMultiplexSettings.property.maximumVideoBufferDelayMilliseconds"></a>

- *Type:* `number`

---

##### `transportStreamBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplexMultiplexSettings.property.transportStreamBitrate"></a>

- *Type:* `number`

---

##### `transportStreamId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplexMultiplexSettings.property.transportStreamId"></a>

- *Type:* `number`

---

##### `transportStreamReservedBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexMultiplexMultiplexSettings.property.transportStreamReservedBitrate"></a>

- *Type:* `number`

---


### MediaLiveResponsesUpdateMultiplexProgram <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgram"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgram.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateMultiplexProgram(__scope: Construct, __resources: string[], __input: MediaLiveUpdateMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgram.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgram.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgram.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `multiplexProgram`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgram.property.multiplexProgram"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgram`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgram)

---


### MediaLiveResponsesUpdateMultiplexProgramMultiplexProgram <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgram"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgram.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgram(__scope: Construct, __resources: string[], __input: MediaLiveUpdateMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgram.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgram.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgram.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `channelId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgram.property.channelId"></a>

- *Type:* `string`

---

##### `multiplexProgramSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgram.property.multiplexProgramSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettings)

---

##### `packetIdentifiersMap`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgram.property.packetIdentifiersMap"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap)

---

##### `pipelineDetails`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgram.property.pipelineDetails"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPipelineDetail`](#aws-cdk-sdk.medialive.MediaLiveMultiplexProgramPipelineDetail)[]

---

##### `programName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgram.property.programName"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettings(__scope: Construct, __resources: string[], __input: MediaLiveUpdateMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `preferredChannelPipeline`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettings.property.preferredChannelPipeline"></a>

- *Type:* `string`

---

##### `programNumber`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettings.property.programNumber"></a>

- *Type:* `number`

---

##### `serviceDescriptor`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettings.property.serviceDescriptor"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor)

---

##### `videoSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettings.property.videoSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings)

---


### MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor(__scope: Construct, __resources: string[], __input: MediaLiveUpdateMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `providerName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.providerName"></a>

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.serviceName"></a>

- *Type:* `string`

---


### MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings(__scope: Construct, __resources: string[], __input: MediaLiveUpdateMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `constantBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings.property.constantBitrate"></a>

- *Type:* `number`

---

##### `statmuxSettings`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettings.property.statmuxSettings"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings)

---


### MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings(__scope: Construct, __resources: string[], __input: MediaLiveUpdateMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `maximumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate"></a>

- *Type:* `number`

---

##### `minimumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate"></a>

- *Type:* `number`

---

##### `priority`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority"></a>

- *Type:* `number`

---


### MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap(__scope: Construct, __resources: string[], __input: MediaLiveUpdateMultiplexProgramRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateMultiplexProgramRequest)

---



#### Properties <a name="Properties"></a>

##### `audioPids`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.audioPids"></a>

- *Type:* `number`[]

---

##### `dvbSubPids`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.dvbSubPids"></a>

- *Type:* `number`[]

---

##### `dvbTeletextPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.dvbTeletextPid"></a>

- *Type:* `number`

---

##### `etvPlatformPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.etvPlatformPid"></a>

- *Type:* `number`

---

##### `etvSignalPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.etvSignalPid"></a>

- *Type:* `number`

---

##### `klvDataPids`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.klvDataPids"></a>

- *Type:* `number`[]

---

##### `pcrPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.pcrPid"></a>

- *Type:* `number`

---

##### `pmtPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.pmtPid"></a>

- *Type:* `number`

---

##### `privateMetadataPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.privateMetadataPid"></a>

- *Type:* `number`

---

##### `scte27Pids`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.scte27Pids"></a>

- *Type:* `number`[]

---

##### `scte35Pid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.scte35Pid"></a>

- *Type:* `number`

---

##### `timedMetadataPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.timedMetadataPid"></a>

- *Type:* `number`

---

##### `videoPid`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateMultiplexProgramMultiplexProgramPacketIdentifiersMap.property.videoPid"></a>

- *Type:* `number`

---


### MediaLiveResponsesUpdateReservation <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservation"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservation.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateReservation(__scope: Construct, __resources: string[], __input: MediaLiveUpdateReservationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateReservationRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateReservationRequest)

---



#### Properties <a name="Properties"></a>

##### `reservation`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservation.property.reservation"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation)

---


### MediaLiveResponsesUpdateReservationReservation <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateReservationReservation(__scope: Construct, __resources: string[], __input: MediaLiveUpdateReservationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateReservationRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateReservationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.arn"></a>

- *Type:* `string`

---

##### `count`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.count"></a>

- *Type:* `number`

---

##### `currencyCode`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.duration"></a>

- *Type:* `number`

---

##### `durationUnits`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.durationUnits"></a>

- *Type:* `string`

---

##### `end`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.end"></a>

- *Type:* `string`

---

##### `fixedPrice`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.fixedPrice"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.name"></a>

- *Type:* `string`

---

##### `offeringDescription`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.offeringDescription"></a>

- *Type:* `string`

---

##### `offeringId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.offeringId"></a>

- *Type:* `string`

---

##### `offeringType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.offeringType"></a>

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.region"></a>

- *Type:* `string`

---

##### `reservationId`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.reservationId"></a>

- *Type:* `string`

---

##### `resourceSpecification`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.resourceSpecification"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservationResourceSpecification`](#aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservationResourceSpecification)

---

##### `start`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.start"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.state"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `usagePrice`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservation.property.usagePrice"></a>

- *Type:* `number`

---


### MediaLiveResponsesUpdateReservationReservationResourceSpecification <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservationResourceSpecification"></a>

#### Initializer <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservationResourceSpecification.Initializer"></a>

```typescript
import { medialive } from 'aws-cdk-sdk'

new medialive.MediaLiveResponsesUpdateReservationReservationResourceSpecification(__scope: Construct, __resources: string[], __input: MediaLiveUpdateReservationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservationResourceSpecification.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservationResourceSpecification.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservationResourceSpecification.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.medialive.MediaLiveUpdateReservationRequest`](#aws-cdk-sdk.medialive.MediaLiveUpdateReservationRequest)

---



#### Properties <a name="Properties"></a>

##### `channelClass`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservationResourceSpecification.property.channelClass"></a>

- *Type:* `string`

---

##### `codec`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservationResourceSpecification.property.codec"></a>

- *Type:* `string`

---

##### `maximumBitrate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservationResourceSpecification.property.maximumBitrate"></a>

- *Type:* `string`

---

##### `maximumFramerate`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservationResourceSpecification.property.maximumFramerate"></a>

- *Type:* `string`

---

##### `resolution`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservationResourceSpecification.property.resolution"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservationResourceSpecification.property.resourceType"></a>

- *Type:* `string`

---

##### `specialFeature`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservationResourceSpecification.property.specialFeature"></a>

- *Type:* `string`

---

##### `videoQuality`<sup>Required</sup> <a name="aws-cdk-sdk.medialive.MediaLiveResponsesUpdateReservationReservationResourceSpecification.property.videoQuality"></a>

- *Type:* `string`

---



