import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class StorageGatewayClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public activateGateway(input: shapes.StorageGatewayActivateGatewayInput): StorageGatewayActivateGateway {
    return new StorageGatewayActivateGateway(this, 'ActivateGateway', this.__resources, input);
  }

  public addCache(input: shapes.StorageGatewayAddCacheInput): StorageGatewayAddCache {
    return new StorageGatewayAddCache(this, 'AddCache', this.__resources, input);
  }

  public addTagsToResource(input: shapes.StorageGatewayAddTagsToResourceInput): StorageGatewayAddTagsToResource {
    return new StorageGatewayAddTagsToResource(this, 'AddTagsToResource', this.__resources, input);
  }

  public addUploadBuffer(input: shapes.StorageGatewayAddUploadBufferInput): StorageGatewayAddUploadBuffer {
    return new StorageGatewayAddUploadBuffer(this, 'AddUploadBuffer', this.__resources, input);
  }

  public addWorkingStorage(input: shapes.StorageGatewayAddWorkingStorageInput): StorageGatewayAddWorkingStorage {
    return new StorageGatewayAddWorkingStorage(this, 'AddWorkingStorage', this.__resources, input);
  }

  public assignTapePool(input: shapes.StorageGatewayAssignTapePoolInput): StorageGatewayAssignTapePool {
    return new StorageGatewayAssignTapePool(this, 'AssignTapePool', this.__resources, input);
  }

  public attachVolume(input: shapes.StorageGatewayAttachVolumeInput): StorageGatewayAttachVolume {
    return new StorageGatewayAttachVolume(this, 'AttachVolume', this.__resources, input);
  }

  public cancelArchival(input: shapes.StorageGatewayCancelArchivalInput): StorageGatewayCancelArchival {
    return new StorageGatewayCancelArchival(this, 'CancelArchival', this.__resources, input);
  }

  public cancelRetrieval(input: shapes.StorageGatewayCancelRetrievalInput): StorageGatewayCancelRetrieval {
    return new StorageGatewayCancelRetrieval(this, 'CancelRetrieval', this.__resources, input);
  }

  public createCachediScsiVolume(input: shapes.StorageGatewayCreateCachediScsiVolumeInput): StorageGatewayCreateCachediScsiVolume {
    return new StorageGatewayCreateCachediScsiVolume(this, 'CreateCachediScsiVolume', this.__resources, input);
  }

  public createNfsFileShare(input: shapes.StorageGatewayCreateNfsFileShareInput): StorageGatewayCreateNfsFileShare {
    return new StorageGatewayCreateNfsFileShare(this, 'CreateNfsFileShare', this.__resources, input);
  }

  public createSmbFileShare(input: shapes.StorageGatewayCreateSmbFileShareInput): StorageGatewayCreateSmbFileShare {
    return new StorageGatewayCreateSmbFileShare(this, 'CreateSmbFileShare', this.__resources, input);
  }

  public createSnapshot(input: shapes.StorageGatewayCreateSnapshotInput): StorageGatewayCreateSnapshot {
    return new StorageGatewayCreateSnapshot(this, 'CreateSnapshot', this.__resources, input);
  }

  public createSnapshotFromVolumeRecoveryPoint(input: shapes.StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput): StorageGatewayCreateSnapshotFromVolumeRecoveryPoint {
    return new StorageGatewayCreateSnapshotFromVolumeRecoveryPoint(this, 'CreateSnapshotFromVolumeRecoveryPoint', this.__resources, input);
  }

  public createStorediScsiVolume(input: shapes.StorageGatewayCreateStorediScsiVolumeInput): StorageGatewayCreateStorediScsiVolume {
    return new StorageGatewayCreateStorediScsiVolume(this, 'CreateStorediScsiVolume', this.__resources, input);
  }

  public createTapePool(input: shapes.StorageGatewayCreateTapePoolInput): StorageGatewayCreateTapePool {
    return new StorageGatewayCreateTapePool(this, 'CreateTapePool', this.__resources, input);
  }

  public createTapeWithBarcode(input: shapes.StorageGatewayCreateTapeWithBarcodeInput): StorageGatewayCreateTapeWithBarcode {
    return new StorageGatewayCreateTapeWithBarcode(this, 'CreateTapeWithBarcode', this.__resources, input);
  }

  public createTapes(input: shapes.StorageGatewayCreateTapesInput): StorageGatewayCreateTapes {
    return new StorageGatewayCreateTapes(this, 'CreateTapes', this.__resources, input);
  }

  public deleteAutomaticTapeCreationPolicy(input: shapes.StorageGatewayDeleteAutomaticTapeCreationPolicyInput): StorageGatewayDeleteAutomaticTapeCreationPolicy {
    return new StorageGatewayDeleteAutomaticTapeCreationPolicy(this, 'DeleteAutomaticTapeCreationPolicy', this.__resources, input);
  }

  public deleteBandwidthRateLimit(input: shapes.StorageGatewayDeleteBandwidthRateLimitInput): StorageGatewayDeleteBandwidthRateLimit {
    return new StorageGatewayDeleteBandwidthRateLimit(this, 'DeleteBandwidthRateLimit', this.__resources, input);
  }

  public deleteChapCredentials(input: shapes.StorageGatewayDeleteChapCredentialsInput): StorageGatewayDeleteChapCredentials {
    return new StorageGatewayDeleteChapCredentials(this, 'DeleteChapCredentials', this.__resources, input);
  }

  public deleteFileShare(input: shapes.StorageGatewayDeleteFileShareInput): StorageGatewayDeleteFileShare {
    return new StorageGatewayDeleteFileShare(this, 'DeleteFileShare', this.__resources, input);
  }

  public deleteGateway(input: shapes.StorageGatewayDeleteGatewayInput): StorageGatewayDeleteGateway {
    return new StorageGatewayDeleteGateway(this, 'DeleteGateway', this.__resources, input);
  }

  public deleteSnapshotSchedule(input: shapes.StorageGatewayDeleteSnapshotScheduleInput): StorageGatewayDeleteSnapshotSchedule {
    return new StorageGatewayDeleteSnapshotSchedule(this, 'DeleteSnapshotSchedule', this.__resources, input);
  }

  public deleteTape(input: shapes.StorageGatewayDeleteTapeInput): StorageGatewayDeleteTape {
    return new StorageGatewayDeleteTape(this, 'DeleteTape', this.__resources, input);
  }

  public deleteTapeArchive(input: shapes.StorageGatewayDeleteTapeArchiveInput): StorageGatewayDeleteTapeArchive {
    return new StorageGatewayDeleteTapeArchive(this, 'DeleteTapeArchive', this.__resources, input);
  }

  public deleteTapePool(input: shapes.StorageGatewayDeleteTapePoolInput): StorageGatewayDeleteTapePool {
    return new StorageGatewayDeleteTapePool(this, 'DeleteTapePool', this.__resources, input);
  }

  public deleteVolume(input: shapes.StorageGatewayDeleteVolumeInput): StorageGatewayDeleteVolume {
    return new StorageGatewayDeleteVolume(this, 'DeleteVolume', this.__resources, input);
  }

  public describeAvailabilityMonitorTest(input: shapes.StorageGatewayDescribeAvailabilityMonitorTestInput): StorageGatewayDescribeAvailabilityMonitorTest {
    return new StorageGatewayDescribeAvailabilityMonitorTest(this, 'DescribeAvailabilityMonitorTest', this.__resources, input);
  }

  public describeBandwidthRateLimit(input: shapes.StorageGatewayDescribeBandwidthRateLimitInput): StorageGatewayDescribeBandwidthRateLimit {
    return new StorageGatewayDescribeBandwidthRateLimit(this, 'DescribeBandwidthRateLimit', this.__resources, input);
  }

  public describeBandwidthRateLimitSchedule(input: shapes.StorageGatewayDescribeBandwidthRateLimitScheduleInput): StorageGatewayDescribeBandwidthRateLimitSchedule {
    return new StorageGatewayDescribeBandwidthRateLimitSchedule(this, 'DescribeBandwidthRateLimitSchedule', this.__resources, input);
  }

  public describeCache(input: shapes.StorageGatewayDescribeCacheInput): StorageGatewayDescribeCache {
    return new StorageGatewayDescribeCache(this, 'DescribeCache', this.__resources, input);
  }

  public describeCachediScsiVolumes(input: shapes.StorageGatewayDescribeCachediScsiVolumesInput): StorageGatewayDescribeCachediScsiVolumes {
    return new StorageGatewayDescribeCachediScsiVolumes(this, 'DescribeCachediScsiVolumes', this.__resources, input);
  }

  public describeChapCredentials(input: shapes.StorageGatewayDescribeChapCredentialsInput): StorageGatewayDescribeChapCredentials {
    return new StorageGatewayDescribeChapCredentials(this, 'DescribeChapCredentials', this.__resources, input);
  }

  public describeGatewayInformation(input: shapes.StorageGatewayDescribeGatewayInformationInput): StorageGatewayDescribeGatewayInformation {
    return new StorageGatewayDescribeGatewayInformation(this, 'DescribeGatewayInformation', this.__resources, input);
  }

  public describeMaintenanceStartTime(input: shapes.StorageGatewayDescribeMaintenanceStartTimeInput): StorageGatewayDescribeMaintenanceStartTime {
    return new StorageGatewayDescribeMaintenanceStartTime(this, 'DescribeMaintenanceStartTime', this.__resources, input);
  }

  public describeNfsFileShares(input: shapes.StorageGatewayDescribeNfsFileSharesInput): StorageGatewayDescribeNfsFileShares {
    return new StorageGatewayDescribeNfsFileShares(this, 'DescribeNfsFileShares', this.__resources, input);
  }

  public describeSmbFileShares(input: shapes.StorageGatewayDescribeSmbFileSharesInput): StorageGatewayDescribeSmbFileShares {
    return new StorageGatewayDescribeSmbFileShares(this, 'DescribeSmbFileShares', this.__resources, input);
  }

  public describeSmbSettings(input: shapes.StorageGatewayDescribeSmbSettingsInput): StorageGatewayDescribeSmbSettings {
    return new StorageGatewayDescribeSmbSettings(this, 'DescribeSmbSettings', this.__resources, input);
  }

  public describeSnapshotSchedule(input: shapes.StorageGatewayDescribeSnapshotScheduleInput): StorageGatewayDescribeSnapshotSchedule {
    return new StorageGatewayDescribeSnapshotSchedule(this, 'DescribeSnapshotSchedule', this.__resources, input);
  }

  public describeStorediScsiVolumes(input: shapes.StorageGatewayDescribeStorediScsiVolumesInput): StorageGatewayDescribeStorediScsiVolumes {
    return new StorageGatewayDescribeStorediScsiVolumes(this, 'DescribeStorediScsiVolumes', this.__resources, input);
  }

  public describeTapeArchives(input: shapes.StorageGatewayDescribeTapeArchivesInput): StorageGatewayDescribeTapeArchives {
    return new StorageGatewayDescribeTapeArchives(this, 'DescribeTapeArchives', this.__resources, input);
  }

  public describeTapeRecoveryPoints(input: shapes.StorageGatewayDescribeTapeRecoveryPointsInput): StorageGatewayDescribeTapeRecoveryPoints {
    return new StorageGatewayDescribeTapeRecoveryPoints(this, 'DescribeTapeRecoveryPoints', this.__resources, input);
  }

  public describeTapes(input: shapes.StorageGatewayDescribeTapesInput): StorageGatewayDescribeTapes {
    return new StorageGatewayDescribeTapes(this, 'DescribeTapes', this.__resources, input);
  }

  public describeUploadBuffer(input: shapes.StorageGatewayDescribeUploadBufferInput): StorageGatewayDescribeUploadBuffer {
    return new StorageGatewayDescribeUploadBuffer(this, 'DescribeUploadBuffer', this.__resources, input);
  }

  public describeVtlDevices(input: shapes.StorageGatewayDescribeVtlDevicesInput): StorageGatewayDescribeVtlDevices {
    return new StorageGatewayDescribeVtlDevices(this, 'DescribeVtlDevices', this.__resources, input);
  }

  public describeWorkingStorage(input: shapes.StorageGatewayDescribeWorkingStorageInput): StorageGatewayDescribeWorkingStorage {
    return new StorageGatewayDescribeWorkingStorage(this, 'DescribeWorkingStorage', this.__resources, input);
  }

  public detachVolume(input: shapes.StorageGatewayDetachVolumeInput): StorageGatewayDetachVolume {
    return new StorageGatewayDetachVolume(this, 'DetachVolume', this.__resources, input);
  }

  public disableGateway(input: shapes.StorageGatewayDisableGatewayInput): StorageGatewayDisableGateway {
    return new StorageGatewayDisableGateway(this, 'DisableGateway', this.__resources, input);
  }

  public joinDomain(input: shapes.StorageGatewayJoinDomainInput): StorageGatewayJoinDomain {
    return new StorageGatewayJoinDomain(this, 'JoinDomain', this.__resources, input);
  }

  public listAutomaticTapeCreationPolicies(input: shapes.StorageGatewayListAutomaticTapeCreationPoliciesInput): StorageGatewayListAutomaticTapeCreationPolicies {
    return new StorageGatewayListAutomaticTapeCreationPolicies(this, 'ListAutomaticTapeCreationPolicies', this.__resources, input);
  }

  public listFileShares(input: shapes.StorageGatewayListFileSharesInput): StorageGatewayListFileShares {
    return new StorageGatewayListFileShares(this, 'ListFileShares', this.__resources, input);
  }

  public listGateways(input: shapes.StorageGatewayListGatewaysInput): StorageGatewayListGateways {
    return new StorageGatewayListGateways(this, 'ListGateways', this.__resources, input);
  }

  public listLocalDisks(input: shapes.StorageGatewayListLocalDisksInput): StorageGatewayListLocalDisks {
    return new StorageGatewayListLocalDisks(this, 'ListLocalDisks', this.__resources, input);
  }

  public listTagsForResource(input: shapes.StorageGatewayListTagsForResourceInput): StorageGatewayListTagsForResource {
    return new StorageGatewayListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listTapePools(input: shapes.StorageGatewayListTapePoolsInput): StorageGatewayListTapePools {
    return new StorageGatewayListTapePools(this, 'ListTapePools', this.__resources, input);
  }

  public listTapes(input: shapes.StorageGatewayListTapesInput): StorageGatewayListTapes {
    return new StorageGatewayListTapes(this, 'ListTapes', this.__resources, input);
  }

  public listVolumeInitiators(input: shapes.StorageGatewayListVolumeInitiatorsInput): StorageGatewayListVolumeInitiators {
    return new StorageGatewayListVolumeInitiators(this, 'ListVolumeInitiators', this.__resources, input);
  }

  public listVolumeRecoveryPoints(input: shapes.StorageGatewayListVolumeRecoveryPointsInput): StorageGatewayListVolumeRecoveryPoints {
    return new StorageGatewayListVolumeRecoveryPoints(this, 'ListVolumeRecoveryPoints', this.__resources, input);
  }

  public listVolumes(input: shapes.StorageGatewayListVolumesInput): StorageGatewayListVolumes {
    return new StorageGatewayListVolumes(this, 'ListVolumes', this.__resources, input);
  }

  public notifyWhenUploaded(input: shapes.StorageGatewayNotifyWhenUploadedInput): StorageGatewayNotifyWhenUploaded {
    return new StorageGatewayNotifyWhenUploaded(this, 'NotifyWhenUploaded', this.__resources, input);
  }

  public refreshCache(input: shapes.StorageGatewayRefreshCacheInput): StorageGatewayRefreshCache {
    return new StorageGatewayRefreshCache(this, 'RefreshCache', this.__resources, input);
  }

  public removeTagsFromResource(input: shapes.StorageGatewayRemoveTagsFromResourceInput): StorageGatewayRemoveTagsFromResource {
    return new StorageGatewayRemoveTagsFromResource(this, 'RemoveTagsFromResource', this.__resources, input);
  }

  public resetCache(input: shapes.StorageGatewayResetCacheInput): StorageGatewayResetCache {
    return new StorageGatewayResetCache(this, 'ResetCache', this.__resources, input);
  }

  public retrieveTapeArchive(input: shapes.StorageGatewayRetrieveTapeArchiveInput): StorageGatewayRetrieveTapeArchive {
    return new StorageGatewayRetrieveTapeArchive(this, 'RetrieveTapeArchive', this.__resources, input);
  }

  public retrieveTapeRecoveryPoint(input: shapes.StorageGatewayRetrieveTapeRecoveryPointInput): StorageGatewayRetrieveTapeRecoveryPoint {
    return new StorageGatewayRetrieveTapeRecoveryPoint(this, 'RetrieveTapeRecoveryPoint', this.__resources, input);
  }

  public setLocalConsolePassword(input: shapes.StorageGatewaySetLocalConsolePasswordInput): StorageGatewaySetLocalConsolePassword {
    return new StorageGatewaySetLocalConsolePassword(this, 'SetLocalConsolePassword', this.__resources, input);
  }

  public setSmbGuestPassword(input: shapes.StorageGatewaySetSmbGuestPasswordInput): StorageGatewaySetSmbGuestPassword {
    return new StorageGatewaySetSmbGuestPassword(this, 'SetSmbGuestPassword', this.__resources, input);
  }

  public shutdownGateway(input: shapes.StorageGatewayShutdownGatewayInput): StorageGatewayShutdownGateway {
    return new StorageGatewayShutdownGateway(this, 'ShutdownGateway', this.__resources, input);
  }

  public startAvailabilityMonitorTest(input: shapes.StorageGatewayStartAvailabilityMonitorTestInput): StorageGatewayStartAvailabilityMonitorTest {
    return new StorageGatewayStartAvailabilityMonitorTest(this, 'StartAvailabilityMonitorTest', this.__resources, input);
  }

  public startGateway(input: shapes.StorageGatewayStartGatewayInput): StorageGatewayStartGateway {
    return new StorageGatewayStartGateway(this, 'StartGateway', this.__resources, input);
  }

  public updateAutomaticTapeCreationPolicy(input: shapes.StorageGatewayUpdateAutomaticTapeCreationPolicyInput): StorageGatewayUpdateAutomaticTapeCreationPolicy {
    return new StorageGatewayUpdateAutomaticTapeCreationPolicy(this, 'UpdateAutomaticTapeCreationPolicy', this.__resources, input);
  }

  public updateBandwidthRateLimit(input: shapes.StorageGatewayUpdateBandwidthRateLimitInput): StorageGatewayUpdateBandwidthRateLimit {
    return new StorageGatewayUpdateBandwidthRateLimit(this, 'UpdateBandwidthRateLimit', this.__resources, input);
  }

  public updateBandwidthRateLimitSchedule(input: shapes.StorageGatewayUpdateBandwidthRateLimitScheduleInput): StorageGatewayUpdateBandwidthRateLimitSchedule {
    return new StorageGatewayUpdateBandwidthRateLimitSchedule(this, 'UpdateBandwidthRateLimitSchedule', this.__resources, input);
  }

  public updateChapCredentials(input: shapes.StorageGatewayUpdateChapCredentialsInput): StorageGatewayUpdateChapCredentials {
    return new StorageGatewayUpdateChapCredentials(this, 'UpdateChapCredentials', this.__resources, input);
  }

  public updateGatewayInformation(input: shapes.StorageGatewayUpdateGatewayInformationInput): StorageGatewayUpdateGatewayInformation {
    return new StorageGatewayUpdateGatewayInformation(this, 'UpdateGatewayInformation', this.__resources, input);
  }

  public updateGatewaySoftwareNow(input: shapes.StorageGatewayUpdateGatewaySoftwareNowInput): StorageGatewayUpdateGatewaySoftwareNow {
    return new StorageGatewayUpdateGatewaySoftwareNow(this, 'UpdateGatewaySoftwareNow', this.__resources, input);
  }

  public updateMaintenanceStartTime(input: shapes.StorageGatewayUpdateMaintenanceStartTimeInput): StorageGatewayUpdateMaintenanceStartTime {
    return new StorageGatewayUpdateMaintenanceStartTime(this, 'UpdateMaintenanceStartTime', this.__resources, input);
  }

  public updateNfsFileShare(input: shapes.StorageGatewayUpdateNfsFileShareInput): StorageGatewayUpdateNfsFileShare {
    return new StorageGatewayUpdateNfsFileShare(this, 'UpdateNfsFileShare', this.__resources, input);
  }

  public updateSmbFileShare(input: shapes.StorageGatewayUpdateSmbFileShareInput): StorageGatewayUpdateSmbFileShare {
    return new StorageGatewayUpdateSmbFileShare(this, 'UpdateSmbFileShare', this.__resources, input);
  }

  public updateSmbFileShareVisibility(input: shapes.StorageGatewayUpdateSmbFileShareVisibilityInput): StorageGatewayUpdateSmbFileShareVisibility {
    return new StorageGatewayUpdateSmbFileShareVisibility(this, 'UpdateSmbFileShareVisibility', this.__resources, input);
  }

  public updateSmbSecurityStrategy(input: shapes.StorageGatewayUpdateSmbSecurityStrategyInput): StorageGatewayUpdateSmbSecurityStrategy {
    return new StorageGatewayUpdateSmbSecurityStrategy(this, 'UpdateSmbSecurityStrategy', this.__resources, input);
  }

  public updateSnapshotSchedule(input: shapes.StorageGatewayUpdateSnapshotScheduleInput): StorageGatewayUpdateSnapshotSchedule {
    return new StorageGatewayUpdateSnapshotSchedule(this, 'UpdateSnapshotSchedule', this.__resources, input);
  }

  public updateVtlDeviceType(input: shapes.StorageGatewayUpdateVtlDeviceTypeInput): StorageGatewayUpdateVtlDeviceType {
    return new StorageGatewayUpdateVtlDeviceType(this, 'UpdateVtlDeviceType', this.__resources, input);
  }

}

export class StorageGatewayActivateGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayActivateGatewayInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'activateGateway',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ActivateGateway.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          ActivationKey: this.input.activationKey,
          GatewayName: this.input.gatewayName,
          GatewayTimezone: this.input.gatewayTimezone,
          GatewayRegion: this.input.gatewayRegion,
          GatewayType: this.input.gatewayType,
          TapeDriveType: this.input.tapeDriveType,
          MediumChangerType: this.input.mediumChangerType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ActivateGateway.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayAddCache extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayAddCacheInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addCache',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.AddCache.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          DiskIds: this.input.diskIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddCache.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayAddTagsToResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayAddTagsToResourceInput) {
    super(scope, id);
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addTagsToResource',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.AddTagsToResource.ResourceARN'),
        outputPath: 'ResourceARN',
        parameters: {
          ResourceARN: this.input.resourceArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddTagsToResource.ResourceARN', props);
    return resource.getResponseField('ResourceARN') as unknown as string;
  }

}

export class StorageGatewayAddUploadBuffer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayAddUploadBufferInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addUploadBuffer',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.AddUploadBuffer.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          DiskIds: this.input.diskIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddUploadBuffer.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayAddWorkingStorage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayAddWorkingStorageInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addWorkingStorage',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.AddWorkingStorage.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          DiskIds: this.input.diskIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddWorkingStorage.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayAssignTapePool extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayAssignTapePoolInput) {
    super(scope, id);
  }

  public get tapeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assignTapePool',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.AssignTapePool.TapeARN'),
        outputPath: 'TapeARN',
        parameters: {
          TapeARN: this.input.tapeArn,
          PoolId: this.input.poolId,
          BypassGovernanceRetention: this.input.bypassGovernanceRetention,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssignTapePool.TapeARN', props);
    return resource.getResponseField('TapeARN') as unknown as string;
  }

}

export class StorageGatewayAttachVolume extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayAttachVolumeInput) {
    super(scope, id);
  }

  public get volumeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachVolume',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.AttachVolume.VolumeARN'),
        outputPath: 'VolumeARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          TargetName: this.input.targetName,
          VolumeARN: this.input.volumeArn,
          NetworkInterfaceId: this.input.networkInterfaceId,
          DiskId: this.input.diskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachVolume.VolumeARN', props);
    return resource.getResponseField('VolumeARN') as unknown as string;
  }

  public get targetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachVolume',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.AttachVolume.TargetARN'),
        outputPath: 'TargetARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          TargetName: this.input.targetName,
          VolumeARN: this.input.volumeArn,
          NetworkInterfaceId: this.input.networkInterfaceId,
          DiskId: this.input.diskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AttachVolume.TargetARN', props);
    return resource.getResponseField('TargetARN') as unknown as string;
  }

}

export class StorageGatewayCancelArchival extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayCancelArchivalInput) {
    super(scope, id);
  }

  public get tapeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelArchival',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.CancelArchival.TapeARN'),
        outputPath: 'TapeARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          TapeARN: this.input.tapeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelArchival.TapeARN', props);
    return resource.getResponseField('TapeARN') as unknown as string;
  }

}

export class StorageGatewayCancelRetrieval extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayCancelRetrievalInput) {
    super(scope, id);
  }

  public get tapeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelRetrieval',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.CancelRetrieval.TapeARN'),
        outputPath: 'TapeARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          TapeARN: this.input.tapeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelRetrieval.TapeARN', props);
    return resource.getResponseField('TapeARN') as unknown as string;
  }

}

export class StorageGatewayCreateCachediScsiVolume extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayCreateCachediScsiVolumeInput) {
    super(scope, id);
  }

  public get volumeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCachediScsiVolume',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.CreateCachediSCSIVolume.VolumeARN'),
        outputPath: 'VolumeARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          VolumeSizeInBytes: this.input.volumeSizeInBytes,
          SnapshotId: this.input.snapshotId,
          TargetName: this.input.targetName,
          SourceVolumeARN: this.input.sourceVolumeArn,
          NetworkInterfaceId: this.input.networkInterfaceId,
          ClientToken: this.input.clientToken,
          KMSEncrypted: this.input.kmsEncrypted,
          KMSKey: this.input.kmsKey,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachediSCSIVolume.VolumeARN', props);
    return resource.getResponseField('VolumeARN') as unknown as string;
  }

  public get targetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCachediScsiVolume',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.CreateCachediSCSIVolume.TargetARN'),
        outputPath: 'TargetARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          VolumeSizeInBytes: this.input.volumeSizeInBytes,
          SnapshotId: this.input.snapshotId,
          TargetName: this.input.targetName,
          SourceVolumeARN: this.input.sourceVolumeArn,
          NetworkInterfaceId: this.input.networkInterfaceId,
          ClientToken: this.input.clientToken,
          KMSEncrypted: this.input.kmsEncrypted,
          KMSKey: this.input.kmsKey,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCachediSCSIVolume.TargetARN', props);
    return resource.getResponseField('TargetARN') as unknown as string;
  }

}

export class StorageGatewayCreateNfsFileShare extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayCreateNfsFileShareInput) {
    super(scope, id);
  }

  public get fileShareArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNfsFileShare',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.CreateNFSFileShare.FileShareARN'),
        outputPath: 'FileShareARN',
        parameters: {
          ClientToken: this.input.clientToken,
          NFSFileShareDefaults: {
            FileMode: this.input.nfsFileShareDefaults?.fileMode,
            DirectoryMode: this.input.nfsFileShareDefaults?.directoryMode,
            GroupId: this.input.nfsFileShareDefaults?.groupId,
            OwnerId: this.input.nfsFileShareDefaults?.ownerId,
          },
          GatewayARN: this.input.gatewayArn,
          KMSEncrypted: this.input.kmsEncrypted,
          KMSKey: this.input.kmsKey,
          Role: this.input.role,
          LocationARN: this.input.locationArn,
          DefaultStorageClass: this.input.defaultStorageClass,
          ObjectACL: this.input.objectAcl,
          ClientList: this.input.clientList,
          Squash: this.input.squash,
          ReadOnly: this.input.readOnly,
          GuessMIMETypeEnabled: this.input.guessMimeTypeEnabled,
          RequesterPays: this.input.requesterPays,
          Tags: this.input.tags,
          FileShareName: this.input.fileShareName,
          CacheAttributes: {
            CacheStaleTimeoutInSeconds: this.input.cacheAttributes?.cacheStaleTimeoutInSeconds,
          },
          NotificationPolicy: this.input.notificationPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNFSFileShare.FileShareARN', props);
    return resource.getResponseField('FileShareARN') as unknown as string;
  }

}

export class StorageGatewayCreateSmbFileShare extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayCreateSmbFileShareInput) {
    super(scope, id);
  }

  public get fileShareArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSmbFileShare',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.CreateSMBFileShare.FileShareARN'),
        outputPath: 'FileShareARN',
        parameters: {
          ClientToken: this.input.clientToken,
          GatewayARN: this.input.gatewayArn,
          KMSEncrypted: this.input.kmsEncrypted,
          KMSKey: this.input.kmsKey,
          Role: this.input.role,
          LocationARN: this.input.locationArn,
          DefaultStorageClass: this.input.defaultStorageClass,
          ObjectACL: this.input.objectAcl,
          ReadOnly: this.input.readOnly,
          GuessMIMETypeEnabled: this.input.guessMimeTypeEnabled,
          RequesterPays: this.input.requesterPays,
          SMBACLEnabled: this.input.smbaclEnabled,
          AccessBasedEnumeration: this.input.accessBasedEnumeration,
          AdminUserList: this.input.adminUserList,
          ValidUserList: this.input.validUserList,
          InvalidUserList: this.input.invalidUserList,
          AuditDestinationARN: this.input.auditDestinationArn,
          Authentication: this.input.authentication,
          CaseSensitivity: this.input.caseSensitivity,
          Tags: this.input.tags,
          FileShareName: this.input.fileShareName,
          CacheAttributes: {
            CacheStaleTimeoutInSeconds: this.input.cacheAttributes?.cacheStaleTimeoutInSeconds,
          },
          NotificationPolicy: this.input.notificationPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSMBFileShare.FileShareARN', props);
    return resource.getResponseField('FileShareARN') as unknown as string;
  }

}

export class StorageGatewayCreateSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayCreateSnapshotInput) {
    super(scope, id);
  }

  public get volumeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.CreateSnapshot.VolumeARN'),
        outputPath: 'VolumeARN',
        parameters: {
          VolumeARN: this.input.volumeArn,
          SnapshotDescription: this.input.snapshotDescription,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.VolumeARN', props);
    return resource.getResponseField('VolumeARN') as unknown as string;
  }

  public get snapshotId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.CreateSnapshot.SnapshotId'),
        outputPath: 'SnapshotId',
        parameters: {
          VolumeARN: this.input.volumeArn,
          SnapshotDescription: this.input.snapshotDescription,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.SnapshotId', props);
    return resource.getResponseField('SnapshotId') as unknown as string;
  }

}

export class StorageGatewayCreateSnapshotFromVolumeRecoveryPoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput) {
    super(scope, id);
  }

  public get snapshotId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshotFromVolumeRecoveryPoint',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.CreateSnapshotFromVolumeRecoveryPoint.SnapshotId'),
        outputPath: 'SnapshotId',
        parameters: {
          VolumeARN: this.input.volumeArn,
          SnapshotDescription: this.input.snapshotDescription,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshotFromVolumeRecoveryPoint.SnapshotId', props);
    return resource.getResponseField('SnapshotId') as unknown as string;
  }

  public get volumeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshotFromVolumeRecoveryPoint',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.CreateSnapshotFromVolumeRecoveryPoint.VolumeARN'),
        outputPath: 'VolumeARN',
        parameters: {
          VolumeARN: this.input.volumeArn,
          SnapshotDescription: this.input.snapshotDescription,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshotFromVolumeRecoveryPoint.VolumeARN', props);
    return resource.getResponseField('VolumeARN') as unknown as string;
  }

  public get volumeRecoveryPointTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshotFromVolumeRecoveryPoint',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.CreateSnapshotFromVolumeRecoveryPoint.VolumeRecoveryPointTime'),
        outputPath: 'VolumeRecoveryPointTime',
        parameters: {
          VolumeARN: this.input.volumeArn,
          SnapshotDescription: this.input.snapshotDescription,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshotFromVolumeRecoveryPoint.VolumeRecoveryPointTime', props);
    return resource.getResponseField('VolumeRecoveryPointTime') as unknown as string;
  }

}

export class StorageGatewayCreateStorediScsiVolume extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayCreateStorediScsiVolumeInput) {
    super(scope, id);
  }

  public get volumeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStorediScsiVolume',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.CreateStorediSCSIVolume.VolumeARN'),
        outputPath: 'VolumeARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          DiskId: this.input.diskId,
          SnapshotId: this.input.snapshotId,
          PreserveExistingData: this.input.preserveExistingData,
          TargetName: this.input.targetName,
          NetworkInterfaceId: this.input.networkInterfaceId,
          KMSEncrypted: this.input.kmsEncrypted,
          KMSKey: this.input.kmsKey,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStorediSCSIVolume.VolumeARN', props);
    return resource.getResponseField('VolumeARN') as unknown as string;
  }

  public get volumeSizeInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStorediScsiVolume',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.CreateStorediSCSIVolume.VolumeSizeInBytes'),
        outputPath: 'VolumeSizeInBytes',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          DiskId: this.input.diskId,
          SnapshotId: this.input.snapshotId,
          PreserveExistingData: this.input.preserveExistingData,
          TargetName: this.input.targetName,
          NetworkInterfaceId: this.input.networkInterfaceId,
          KMSEncrypted: this.input.kmsEncrypted,
          KMSKey: this.input.kmsKey,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStorediSCSIVolume.VolumeSizeInBytes', props);
    return resource.getResponseField('VolumeSizeInBytes') as unknown as number;
  }

  public get targetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStorediScsiVolume',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.CreateStorediSCSIVolume.TargetARN'),
        outputPath: 'TargetARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          DiskId: this.input.diskId,
          SnapshotId: this.input.snapshotId,
          PreserveExistingData: this.input.preserveExistingData,
          TargetName: this.input.targetName,
          NetworkInterfaceId: this.input.networkInterfaceId,
          KMSEncrypted: this.input.kmsEncrypted,
          KMSKey: this.input.kmsKey,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStorediSCSIVolume.TargetARN', props);
    return resource.getResponseField('TargetARN') as unknown as string;
  }

}

export class StorageGatewayCreateTapePool extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayCreateTapePoolInput) {
    super(scope, id);
  }

  public get poolArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTapePool',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.CreateTapePool.PoolARN'),
        outputPath: 'PoolARN',
        parameters: {
          PoolName: this.input.poolName,
          StorageClass: this.input.storageClass,
          RetentionLockType: this.input.retentionLockType,
          RetentionLockTimeInDays: this.input.retentionLockTimeInDays,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTapePool.PoolARN', props);
    return resource.getResponseField('PoolARN') as unknown as string;
  }

}

export class StorageGatewayCreateTapeWithBarcode extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayCreateTapeWithBarcodeInput) {
    super(scope, id);
  }

  public get tapeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTapeWithBarcode',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.CreateTapeWithBarcode.TapeARN'),
        outputPath: 'TapeARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          TapeSizeInBytes: this.input.tapeSizeInBytes,
          TapeBarcode: this.input.tapeBarcode,
          KMSEncrypted: this.input.kmsEncrypted,
          KMSKey: this.input.kmsKey,
          PoolId: this.input.poolId,
          Worm: this.input.worm,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTapeWithBarcode.TapeARN', props);
    return resource.getResponseField('TapeARN') as unknown as string;
  }

}

export class StorageGatewayCreateTapes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayCreateTapesInput) {
    super(scope, id);
  }

  public get tapeArNs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTapes',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.CreateTapes.TapeARNs'),
        outputPath: 'TapeARNs',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          TapeSizeInBytes: this.input.tapeSizeInBytes,
          ClientToken: this.input.clientToken,
          NumTapesToCreate: this.input.numTapesToCreate,
          TapeBarcodePrefix: this.input.tapeBarcodePrefix,
          KMSEncrypted: this.input.kmsEncrypted,
          KMSKey: this.input.kmsKey,
          PoolId: this.input.poolId,
          Worm: this.input.worm,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTapes.TapeARNs', props);
    return resource.getResponseField('TapeARNs') as unknown as string[];
  }

}

export class StorageGatewayDeleteAutomaticTapeCreationPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDeleteAutomaticTapeCreationPolicyInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAutomaticTapeCreationPolicy',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DeleteAutomaticTapeCreationPolicy.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAutomaticTapeCreationPolicy.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayDeleteBandwidthRateLimit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDeleteBandwidthRateLimitInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBandwidthRateLimit',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DeleteBandwidthRateLimit.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          BandwidthType: this.input.bandwidthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBandwidthRateLimit.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayDeleteChapCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDeleteChapCredentialsInput) {
    super(scope, id);
  }

  public get targetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteChapCredentials',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DeleteChapCredentials.TargetARN'),
        outputPath: 'TargetARN',
        parameters: {
          TargetARN: this.input.targetArn,
          InitiatorName: this.input.initiatorName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteChapCredentials.TargetARN', props);
    return resource.getResponseField('TargetARN') as unknown as string;
  }

  public get initiatorName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteChapCredentials',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DeleteChapCredentials.InitiatorName'),
        outputPath: 'InitiatorName',
        parameters: {
          TargetARN: this.input.targetArn,
          InitiatorName: this.input.initiatorName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteChapCredentials.InitiatorName', props);
    return resource.getResponseField('InitiatorName') as unknown as string;
  }

}

export class StorageGatewayDeleteFileShare extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDeleteFileShareInput) {
    super(scope, id);
  }

  public get fileShareArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFileShare',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DeleteFileShare.FileShareARN'),
        outputPath: 'FileShareARN',
        parameters: {
          FileShareARN: this.input.fileShareArn,
          ForceDelete: this.input.forceDelete,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFileShare.FileShareARN', props);
    return resource.getResponseField('FileShareARN') as unknown as string;
  }

}

export class StorageGatewayDeleteGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDeleteGatewayInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGateway',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DeleteGateway.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGateway.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayDeleteSnapshotSchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDeleteSnapshotScheduleInput) {
    super(scope, id);
  }

  public get volumeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshotSchedule',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DeleteSnapshotSchedule.VolumeARN'),
        outputPath: 'VolumeARN',
        parameters: {
          VolumeARN: this.input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshotSchedule.VolumeARN', props);
    return resource.getResponseField('VolumeARN') as unknown as string;
  }

}

export class StorageGatewayDeleteTape extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDeleteTapeInput) {
    super(scope, id);
  }

  public get tapeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTape',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DeleteTape.TapeARN'),
        outputPath: 'TapeARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          TapeARN: this.input.tapeArn,
          BypassGovernanceRetention: this.input.bypassGovernanceRetention,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTape.TapeARN', props);
    return resource.getResponseField('TapeARN') as unknown as string;
  }

}

export class StorageGatewayDeleteTapeArchive extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDeleteTapeArchiveInput) {
    super(scope, id);
  }

  public get tapeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTapeArchive',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DeleteTapeArchive.TapeARN'),
        outputPath: 'TapeARN',
        parameters: {
          TapeARN: this.input.tapeArn,
          BypassGovernanceRetention: this.input.bypassGovernanceRetention,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTapeArchive.TapeARN', props);
    return resource.getResponseField('TapeARN') as unknown as string;
  }

}

export class StorageGatewayDeleteTapePool extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDeleteTapePoolInput) {
    super(scope, id);
  }

  public get poolArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTapePool',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DeleteTapePool.PoolARN'),
        outputPath: 'PoolARN',
        parameters: {
          PoolARN: this.input.poolArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTapePool.PoolARN', props);
    return resource.getResponseField('PoolARN') as unknown as string;
  }

}

export class StorageGatewayDeleteVolume extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDeleteVolumeInput) {
    super(scope, id);
  }

  public get volumeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVolume',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DeleteVolume.VolumeARN'),
        outputPath: 'VolumeARN',
        parameters: {
          VolumeARN: this.input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteVolume.VolumeARN', props);
    return resource.getResponseField('VolumeARN') as unknown as string;
  }

}

export class StorageGatewayDescribeAvailabilityMonitorTest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeAvailabilityMonitorTestInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAvailabilityMonitorTest',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeAvailabilityMonitorTest.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAvailabilityMonitorTest.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAvailabilityMonitorTest',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeAvailabilityMonitorTest.Status'),
        outputPath: 'Status',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAvailabilityMonitorTest.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAvailabilityMonitorTest',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeAvailabilityMonitorTest.StartTime'),
        outputPath: 'StartTime',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAvailabilityMonitorTest.StartTime', props);
    return resource.getResponseField('StartTime') as unknown as string;
  }

}

export class StorageGatewayDescribeBandwidthRateLimit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeBandwidthRateLimitInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBandwidthRateLimit',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeBandwidthRateLimit.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBandwidthRateLimit.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

  public get averageUploadRateLimitInBitsPerSec(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBandwidthRateLimit',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeBandwidthRateLimit.AverageUploadRateLimitInBitsPerSec'),
        outputPath: 'AverageUploadRateLimitInBitsPerSec',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBandwidthRateLimit.AverageUploadRateLimitInBitsPerSec', props);
    return resource.getResponseField('AverageUploadRateLimitInBitsPerSec') as unknown as number;
  }

  public get averageDownloadRateLimitInBitsPerSec(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBandwidthRateLimit',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeBandwidthRateLimit.AverageDownloadRateLimitInBitsPerSec'),
        outputPath: 'AverageDownloadRateLimitInBitsPerSec',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBandwidthRateLimit.AverageDownloadRateLimitInBitsPerSec', props);
    return resource.getResponseField('AverageDownloadRateLimitInBitsPerSec') as unknown as number;
  }

}

export class StorageGatewayDescribeBandwidthRateLimitSchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeBandwidthRateLimitScheduleInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBandwidthRateLimitSchedule',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeBandwidthRateLimitSchedule.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBandwidthRateLimitSchedule.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

  public get bandwidthRateLimitIntervals(): shapes.StorageGatewayBandwidthRateLimitInterval[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBandwidthRateLimitSchedule',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeBandwidthRateLimitSchedule.BandwidthRateLimitIntervals'),
        outputPath: 'BandwidthRateLimitIntervals',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBandwidthRateLimitSchedule.BandwidthRateLimitIntervals', props);
    return resource.getResponseField('BandwidthRateLimitIntervals') as unknown as shapes.StorageGatewayBandwidthRateLimitInterval[];
  }

}

export class StorageGatewayDescribeCache extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeCacheInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCache',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeCache.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCache.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

  public get diskIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCache',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeCache.DiskIds'),
        outputPath: 'DiskIds',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCache.DiskIds', props);
    return resource.getResponseField('DiskIds') as unknown as string[];
  }

  public get cacheAllocatedInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCache',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeCache.CacheAllocatedInBytes'),
        outputPath: 'CacheAllocatedInBytes',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCache.CacheAllocatedInBytes', props);
    return resource.getResponseField('CacheAllocatedInBytes') as unknown as number;
  }

  public get cacheUsedPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCache',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeCache.CacheUsedPercentage'),
        outputPath: 'CacheUsedPercentage',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCache.CacheUsedPercentage', props);
    return resource.getResponseField('CacheUsedPercentage') as unknown as number;
  }

  public get cacheDirtyPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCache',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeCache.CacheDirtyPercentage'),
        outputPath: 'CacheDirtyPercentage',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCache.CacheDirtyPercentage', props);
    return resource.getResponseField('CacheDirtyPercentage') as unknown as number;
  }

  public get cacheHitPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCache',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeCache.CacheHitPercentage'),
        outputPath: 'CacheHitPercentage',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCache.CacheHitPercentage', props);
    return resource.getResponseField('CacheHitPercentage') as unknown as number;
  }

  public get cacheMissPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCache',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeCache.CacheMissPercentage'),
        outputPath: 'CacheMissPercentage',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCache.CacheMissPercentage', props);
    return resource.getResponseField('CacheMissPercentage') as unknown as number;
  }

}

export class StorageGatewayDescribeCachediScsiVolumes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeCachediScsiVolumesInput) {
    super(scope, id);
  }

  public get cachediScsiVolumes(): shapes.StorageGatewayCachediScsiVolume[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCachediScsiVolumes',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeCachediSCSIVolumes.CachediSCSIVolumes'),
        outputPath: 'CachediSCSIVolumes',
        parameters: {
          VolumeARNs: this.input.volumeArNs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCachediSCSIVolumes.CachediSCSIVolumes', props);
    return resource.getResponseField('CachediSCSIVolumes') as unknown as shapes.StorageGatewayCachediScsiVolume[];
  }

}

export class StorageGatewayDescribeChapCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeChapCredentialsInput) {
    super(scope, id);
  }

  public get chapCredentials(): shapes.StorageGatewayChapInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChapCredentials',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeChapCredentials.ChapCredentials'),
        outputPath: 'ChapCredentials',
        parameters: {
          TargetARN: this.input.targetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChapCredentials.ChapCredentials', props);
    return resource.getResponseField('ChapCredentials') as unknown as shapes.StorageGatewayChapInfo[];
  }

}

export class StorageGatewayDescribeGatewayInformation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeGatewayInformationInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

  public get gatewayId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.GatewayId'),
        outputPath: 'GatewayId',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.GatewayId', props);
    return resource.getResponseField('GatewayId') as unknown as string;
  }

  public get gatewayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.GatewayName'),
        outputPath: 'GatewayName',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.GatewayName', props);
    return resource.getResponseField('GatewayName') as unknown as string;
  }

  public get gatewayTimezone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.GatewayTimezone'),
        outputPath: 'GatewayTimezone',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.GatewayTimezone', props);
    return resource.getResponseField('GatewayTimezone') as unknown as string;
  }

  public get gatewayState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.GatewayState'),
        outputPath: 'GatewayState',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.GatewayState', props);
    return resource.getResponseField('GatewayState') as unknown as string;
  }

  public get gatewayNetworkInterfaces(): shapes.StorageGatewayNetworkInterface[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.GatewayNetworkInterfaces'),
        outputPath: 'GatewayNetworkInterfaces',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.GatewayNetworkInterfaces', props);
    return resource.getResponseField('GatewayNetworkInterfaces') as unknown as shapes.StorageGatewayNetworkInterface[];
  }

  public get gatewayType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.GatewayType'),
        outputPath: 'GatewayType',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.GatewayType', props);
    return resource.getResponseField('GatewayType') as unknown as string;
  }

  public get nextUpdateAvailabilityDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.NextUpdateAvailabilityDate'),
        outputPath: 'NextUpdateAvailabilityDate',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.NextUpdateAvailabilityDate', props);
    return resource.getResponseField('NextUpdateAvailabilityDate') as unknown as string;
  }

  public get lastSoftwareUpdate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.LastSoftwareUpdate'),
        outputPath: 'LastSoftwareUpdate',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.LastSoftwareUpdate', props);
    return resource.getResponseField('LastSoftwareUpdate') as unknown as string;
  }

  public get ec2InstanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.Ec2InstanceId'),
        outputPath: 'Ec2InstanceId',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.Ec2InstanceId', props);
    return resource.getResponseField('Ec2InstanceId') as unknown as string;
  }

  public get ec2InstanceRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.Ec2InstanceRegion'),
        outputPath: 'Ec2InstanceRegion',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.Ec2InstanceRegion', props);
    return resource.getResponseField('Ec2InstanceRegion') as unknown as string;
  }

  public get tags(): shapes.StorageGatewayTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.Tags'),
        outputPath: 'Tags',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.StorageGatewayTag[];
  }

  public get vpcEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.VPCEndpoint'),
        outputPath: 'VPCEndpoint',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.VPCEndpoint', props);
    return resource.getResponseField('VPCEndpoint') as unknown as string;
  }

  public get cloudWatchLogGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.CloudWatchLogGroupARN'),
        outputPath: 'CloudWatchLogGroupARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.CloudWatchLogGroupARN', props);
    return resource.getResponseField('CloudWatchLogGroupARN') as unknown as string;
  }

  public get hostEnvironment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.HostEnvironment'),
        outputPath: 'HostEnvironment',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.HostEnvironment', props);
    return resource.getResponseField('HostEnvironment') as unknown as string;
  }

  public get endpointType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.EndpointType'),
        outputPath: 'EndpointType',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.EndpointType', props);
    return resource.getResponseField('EndpointType') as unknown as string;
  }

  public get softwareUpdatesEndDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.SoftwareUpdatesEndDate'),
        outputPath: 'SoftwareUpdatesEndDate',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.SoftwareUpdatesEndDate', props);
    return resource.getResponseField('SoftwareUpdatesEndDate') as unknown as string;
  }

  public get deprecationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.DeprecationDate'),
        outputPath: 'DeprecationDate',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGatewayInformation.DeprecationDate', props);
    return resource.getResponseField('DeprecationDate') as unknown as string;
  }

}

export class StorageGatewayDescribeMaintenanceStartTime extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeMaintenanceStartTimeInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceStartTime',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeMaintenanceStartTime.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceStartTime.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

  public get hourOfDay(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceStartTime',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeMaintenanceStartTime.HourOfDay'),
        outputPath: 'HourOfDay',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceStartTime.HourOfDay', props);
    return resource.getResponseField('HourOfDay') as unknown as number;
  }

  public get minuteOfHour(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceStartTime',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeMaintenanceStartTime.MinuteOfHour'),
        outputPath: 'MinuteOfHour',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceStartTime.MinuteOfHour', props);
    return resource.getResponseField('MinuteOfHour') as unknown as number;
  }

  public get dayOfWeek(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceStartTime',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeMaintenanceStartTime.DayOfWeek'),
        outputPath: 'DayOfWeek',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceStartTime.DayOfWeek', props);
    return resource.getResponseField('DayOfWeek') as unknown as number;
  }

  public get dayOfMonth(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceStartTime',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeMaintenanceStartTime.DayOfMonth'),
        outputPath: 'DayOfMonth',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceStartTime.DayOfMonth', props);
    return resource.getResponseField('DayOfMonth') as unknown as number;
  }

  public get timezone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceStartTime',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeMaintenanceStartTime.Timezone'),
        outputPath: 'Timezone',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceStartTime.Timezone', props);
    return resource.getResponseField('Timezone') as unknown as string;
  }

}

export class StorageGatewayDescribeNfsFileShares extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeNfsFileSharesInput) {
    super(scope, id);
  }

  public get nfsFileShareInfoList(): shapes.StorageGatewayNfsFileShareInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNfsFileShares',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeNFSFileShares.NFSFileShareInfoList'),
        outputPath: 'NFSFileShareInfoList',
        parameters: {
          FileShareARNList: this.input.fileShareArnList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNFSFileShares.NFSFileShareInfoList', props);
    return resource.getResponseField('NFSFileShareInfoList') as unknown as shapes.StorageGatewayNfsFileShareInfo[];
  }

}

export class StorageGatewayDescribeSmbFileShares extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeSmbFileSharesInput) {
    super(scope, id);
  }

  public get smbFileShareInfoList(): shapes.StorageGatewaySmbFileShareInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSmbFileShares',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeSMBFileShares.SMBFileShareInfoList'),
        outputPath: 'SMBFileShareInfoList',
        parameters: {
          FileShareARNList: this.input.fileShareArnList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSMBFileShares.SMBFileShareInfoList', props);
    return resource.getResponseField('SMBFileShareInfoList') as unknown as shapes.StorageGatewaySmbFileShareInfo[];
  }

}

export class StorageGatewayDescribeSmbSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeSmbSettingsInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSmbSettings',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeSMBSettings.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSMBSettings.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

  public get domainName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSmbSettings',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeSMBSettings.DomainName'),
        outputPath: 'DomainName',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSMBSettings.DomainName', props);
    return resource.getResponseField('DomainName') as unknown as string;
  }

  public get activeDirectoryStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSmbSettings',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeSMBSettings.ActiveDirectoryStatus'),
        outputPath: 'ActiveDirectoryStatus',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSMBSettings.ActiveDirectoryStatus', props);
    return resource.getResponseField('ActiveDirectoryStatus') as unknown as string;
  }

  public get smbGuestPasswordSet(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSmbSettings',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeSMBSettings.SMBGuestPasswordSet'),
        outputPath: 'SMBGuestPasswordSet',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSMBSettings.SMBGuestPasswordSet', props);
    return resource.getResponseField('SMBGuestPasswordSet') as unknown as boolean;
  }

  public get smbSecurityStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSmbSettings',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeSMBSettings.SMBSecurityStrategy'),
        outputPath: 'SMBSecurityStrategy',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSMBSettings.SMBSecurityStrategy', props);
    return resource.getResponseField('SMBSecurityStrategy') as unknown as string;
  }

  public get fileSharesVisible(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSmbSettings',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeSMBSettings.FileSharesVisible'),
        outputPath: 'FileSharesVisible',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSMBSettings.FileSharesVisible', props);
    return resource.getResponseField('FileSharesVisible') as unknown as boolean;
  }

}

export class StorageGatewayDescribeSnapshotSchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeSnapshotScheduleInput) {
    super(scope, id);
  }

  public get volumeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSnapshotSchedule',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeSnapshotSchedule.VolumeARN'),
        outputPath: 'VolumeARN',
        parameters: {
          VolumeARN: this.input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSnapshotSchedule.VolumeARN', props);
    return resource.getResponseField('VolumeARN') as unknown as string;
  }

  public get startAt(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSnapshotSchedule',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeSnapshotSchedule.StartAt'),
        outputPath: 'StartAt',
        parameters: {
          VolumeARN: this.input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSnapshotSchedule.StartAt', props);
    return resource.getResponseField('StartAt') as unknown as number;
  }

  public get recurrenceInHours(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSnapshotSchedule',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeSnapshotSchedule.RecurrenceInHours'),
        outputPath: 'RecurrenceInHours',
        parameters: {
          VolumeARN: this.input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSnapshotSchedule.RecurrenceInHours', props);
    return resource.getResponseField('RecurrenceInHours') as unknown as number;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSnapshotSchedule',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeSnapshotSchedule.Description'),
        outputPath: 'Description',
        parameters: {
          VolumeARN: this.input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSnapshotSchedule.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get timezone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSnapshotSchedule',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeSnapshotSchedule.Timezone'),
        outputPath: 'Timezone',
        parameters: {
          VolumeARN: this.input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSnapshotSchedule.Timezone', props);
    return resource.getResponseField('Timezone') as unknown as string;
  }

  public get tags(): shapes.StorageGatewayTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSnapshotSchedule',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeSnapshotSchedule.Tags'),
        outputPath: 'Tags',
        parameters: {
          VolumeARN: this.input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSnapshotSchedule.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.StorageGatewayTag[];
  }

}

export class StorageGatewayDescribeStorediScsiVolumes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeStorediScsiVolumesInput) {
    super(scope, id);
  }

  public get storediScsiVolumes(): shapes.StorageGatewayStorediScsiVolume[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStorediScsiVolumes',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeStorediSCSIVolumes.StorediSCSIVolumes'),
        outputPath: 'StorediSCSIVolumes',
        parameters: {
          VolumeARNs: this.input.volumeArNs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStorediSCSIVolumes.StorediSCSIVolumes', props);
    return resource.getResponseField('StorediSCSIVolumes') as unknown as shapes.StorageGatewayStorediScsiVolume[];
  }

}

export class StorageGatewayDescribeTapeArchives extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeTapeArchivesInput) {
    super(scope, id);
  }

  public get tapeArchives(): shapes.StorageGatewayTapeArchive[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTapeArchives',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeTapeArchives.TapeArchives'),
        outputPath: 'TapeArchives',
        parameters: {
          TapeARNs: this.input.tapeArNs,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTapeArchives.TapeArchives', props);
    return resource.getResponseField('TapeArchives') as unknown as shapes.StorageGatewayTapeArchive[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTapeArchives',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeTapeArchives.Marker'),
        outputPath: 'Marker',
        parameters: {
          TapeARNs: this.input.tapeArNs,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTapeArchives.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class StorageGatewayDescribeTapeRecoveryPoints extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeTapeRecoveryPointsInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTapeRecoveryPoints',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeTapeRecoveryPoints.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTapeRecoveryPoints.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

  public get tapeRecoveryPointInfos(): shapes.StorageGatewayTapeRecoveryPointInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTapeRecoveryPoints',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeTapeRecoveryPoints.TapeRecoveryPointInfos'),
        outputPath: 'TapeRecoveryPointInfos',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTapeRecoveryPoints.TapeRecoveryPointInfos', props);
    return resource.getResponseField('TapeRecoveryPointInfos') as unknown as shapes.StorageGatewayTapeRecoveryPointInfo[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTapeRecoveryPoints',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeTapeRecoveryPoints.Marker'),
        outputPath: 'Marker',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTapeRecoveryPoints.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class StorageGatewayDescribeTapes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeTapesInput) {
    super(scope, id);
  }

  public get tapes(): shapes.StorageGatewayTape[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTapes',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeTapes.Tapes'),
        outputPath: 'Tapes',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          TapeARNs: this.input.tapeArNs,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTapes.Tapes', props);
    return resource.getResponseField('Tapes') as unknown as shapes.StorageGatewayTape[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTapes',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeTapes.Marker'),
        outputPath: 'Marker',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          TapeARNs: this.input.tapeArNs,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTapes.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class StorageGatewayDescribeUploadBuffer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeUploadBufferInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUploadBuffer',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeUploadBuffer.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUploadBuffer.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

  public get diskIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUploadBuffer',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeUploadBuffer.DiskIds'),
        outputPath: 'DiskIds',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUploadBuffer.DiskIds', props);
    return resource.getResponseField('DiskIds') as unknown as string[];
  }

  public get uploadBufferUsedInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUploadBuffer',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeUploadBuffer.UploadBufferUsedInBytes'),
        outputPath: 'UploadBufferUsedInBytes',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUploadBuffer.UploadBufferUsedInBytes', props);
    return resource.getResponseField('UploadBufferUsedInBytes') as unknown as number;
  }

  public get uploadBufferAllocatedInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUploadBuffer',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeUploadBuffer.UploadBufferAllocatedInBytes'),
        outputPath: 'UploadBufferAllocatedInBytes',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUploadBuffer.UploadBufferAllocatedInBytes', props);
    return resource.getResponseField('UploadBufferAllocatedInBytes') as unknown as number;
  }

}

export class StorageGatewayDescribeVtlDevices extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeVtlDevicesInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVtlDevices',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeVTLDevices.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          VTLDeviceARNs: this.input.vtlDeviceArNs,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeVTLDevices.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

  public get vtlDevices(): shapes.StorageGatewayVtlDevice[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVtlDevices',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeVTLDevices.VTLDevices'),
        outputPath: 'VTLDevices',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          VTLDeviceARNs: this.input.vtlDeviceArNs,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeVTLDevices.VTLDevices', props);
    return resource.getResponseField('VTLDevices') as unknown as shapes.StorageGatewayVtlDevice[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVtlDevices',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeVTLDevices.Marker'),
        outputPath: 'Marker',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          VTLDeviceARNs: this.input.vtlDeviceArNs,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeVTLDevices.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class StorageGatewayDescribeWorkingStorage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDescribeWorkingStorageInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkingStorage',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeWorkingStorage.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkingStorage.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

  public get diskIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkingStorage',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeWorkingStorage.DiskIds'),
        outputPath: 'DiskIds',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkingStorage.DiskIds', props);
    return resource.getResponseField('DiskIds') as unknown as string[];
  }

  public get workingStorageUsedInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkingStorage',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeWorkingStorage.WorkingStorageUsedInBytes'),
        outputPath: 'WorkingStorageUsedInBytes',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkingStorage.WorkingStorageUsedInBytes', props);
    return resource.getResponseField('WorkingStorageUsedInBytes') as unknown as number;
  }

  public get workingStorageAllocatedInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkingStorage',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeWorkingStorage.WorkingStorageAllocatedInBytes'),
        outputPath: 'WorkingStorageAllocatedInBytes',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkingStorage.WorkingStorageAllocatedInBytes', props);
    return resource.getResponseField('WorkingStorageAllocatedInBytes') as unknown as number;
  }

}

export class StorageGatewayDetachVolume extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDetachVolumeInput) {
    super(scope, id);
  }

  public get volumeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachVolume',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DetachVolume.VolumeARN'),
        outputPath: 'VolumeARN',
        parameters: {
          VolumeARN: this.input.volumeArn,
          ForceDetach: this.input.forceDetach,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetachVolume.VolumeARN', props);
    return resource.getResponseField('VolumeARN') as unknown as string;
  }

}

export class StorageGatewayDisableGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayDisableGatewayInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableGateway',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DisableGateway.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisableGateway.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayJoinDomain extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayJoinDomainInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'joinDomain',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.JoinDomain.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          DomainName: this.input.domainName,
          OrganizationalUnit: this.input.organizationalUnit,
          DomainControllers: this.input.domainControllers,
          TimeoutInSeconds: this.input.timeoutInSeconds,
          UserName: this.input.userName,
          Password: this.input.password,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'JoinDomain.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

  public get activeDirectoryStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'joinDomain',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.JoinDomain.ActiveDirectoryStatus'),
        outputPath: 'ActiveDirectoryStatus',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          DomainName: this.input.domainName,
          OrganizationalUnit: this.input.organizationalUnit,
          DomainControllers: this.input.domainControllers,
          TimeoutInSeconds: this.input.timeoutInSeconds,
          UserName: this.input.userName,
          Password: this.input.password,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'JoinDomain.ActiveDirectoryStatus', props);
    return resource.getResponseField('ActiveDirectoryStatus') as unknown as string;
  }

}

export class StorageGatewayListAutomaticTapeCreationPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayListAutomaticTapeCreationPoliciesInput) {
    super(scope, id);
  }

  public get automaticTapeCreationPolicyInfos(): shapes.StorageGatewayAutomaticTapeCreationPolicyInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAutomaticTapeCreationPolicies',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListAutomaticTapeCreationPolicies.AutomaticTapeCreationPolicyInfos'),
        outputPath: 'AutomaticTapeCreationPolicyInfos',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAutomaticTapeCreationPolicies.AutomaticTapeCreationPolicyInfos', props);
    return resource.getResponseField('AutomaticTapeCreationPolicyInfos') as unknown as shapes.StorageGatewayAutomaticTapeCreationPolicyInfo[];
  }

}

export class StorageGatewayListFileShares extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayListFileSharesInput) {
    super(scope, id);
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFileShares',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListFileShares.Marker'),
        outputPath: 'Marker',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFileShares.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFileShares',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListFileShares.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFileShares.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get fileShareInfoList(): shapes.StorageGatewayFileShareInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFileShares',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListFileShares.FileShareInfoList'),
        outputPath: 'FileShareInfoList',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          Limit: this.input.limit,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFileShares.FileShareInfoList', props);
    return resource.getResponseField('FileShareInfoList') as unknown as shapes.StorageGatewayFileShareInfo[];
  }

}

export class StorageGatewayListGateways extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayListGatewaysInput) {
    super(scope, id);
  }

  public get gateways(): shapes.StorageGatewayGatewayInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGateways',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListGateways.Gateways'),
        outputPath: 'Gateways',
        parameters: {
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGateways.Gateways', props);
    return resource.getResponseField('Gateways') as unknown as shapes.StorageGatewayGatewayInfo[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGateways',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListGateways.Marker'),
        outputPath: 'Marker',
        parameters: {
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGateways.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class StorageGatewayListLocalDisks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayListLocalDisksInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLocalDisks',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListLocalDisks.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLocalDisks.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

  public get disks(): shapes.StorageGatewayDisk[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLocalDisks',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListLocalDisks.Disks'),
        outputPath: 'Disks',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLocalDisks.Disks', props);
    return resource.getResponseField('Disks') as unknown as shapes.StorageGatewayDisk[];
  }

}

export class StorageGatewayListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayListTagsForResourceInput) {
    super(scope, id);
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListTagsForResource.ResourceARN'),
        outputPath: 'ResourceARN',
        parameters: {
          ResourceARN: this.input.resourceArn,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.ResourceARN', props);
    return resource.getResponseField('ResourceARN') as unknown as string;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListTagsForResource.Marker'),
        outputPath: 'Marker',
        parameters: {
          ResourceARN: this.input.resourceArn,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get tags(): shapes.StorageGatewayTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceARN: this.input.resourceArn,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.StorageGatewayTag[];
  }

}

export class StorageGatewayListTapePools extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayListTapePoolsInput) {
    super(scope, id);
  }

  public get poolInfos(): shapes.StorageGatewayPoolInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTapePools',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListTapePools.PoolInfos'),
        outputPath: 'PoolInfos',
        parameters: {
          PoolARNs: this.input.poolArNs,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTapePools.PoolInfos', props);
    return resource.getResponseField('PoolInfos') as unknown as shapes.StorageGatewayPoolInfo[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTapePools',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListTapePools.Marker'),
        outputPath: 'Marker',
        parameters: {
          PoolARNs: this.input.poolArNs,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTapePools.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class StorageGatewayListTapes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayListTapesInput) {
    super(scope, id);
  }

  public get tapeInfos(): shapes.StorageGatewayTapeInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTapes',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListTapes.TapeInfos'),
        outputPath: 'TapeInfos',
        parameters: {
          TapeARNs: this.input.tapeArNs,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTapes.TapeInfos', props);
    return resource.getResponseField('TapeInfos') as unknown as shapes.StorageGatewayTapeInfo[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTapes',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListTapes.Marker'),
        outputPath: 'Marker',
        parameters: {
          TapeARNs: this.input.tapeArNs,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTapes.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class StorageGatewayListVolumeInitiators extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayListVolumeInitiatorsInput) {
    super(scope, id);
  }

  public get initiators(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVolumeInitiators',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListVolumeInitiators.Initiators'),
        outputPath: 'Initiators',
        parameters: {
          VolumeARN: this.input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVolumeInitiators.Initiators', props);
    return resource.getResponseField('Initiators') as unknown as string[];
  }

}

export class StorageGatewayListVolumeRecoveryPoints extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayListVolumeRecoveryPointsInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVolumeRecoveryPoints',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListVolumeRecoveryPoints.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVolumeRecoveryPoints.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

  public get volumeRecoveryPointInfos(): shapes.StorageGatewayVolumeRecoveryPointInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVolumeRecoveryPoints',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListVolumeRecoveryPoints.VolumeRecoveryPointInfos'),
        outputPath: 'VolumeRecoveryPointInfos',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVolumeRecoveryPoints.VolumeRecoveryPointInfos', props);
    return resource.getResponseField('VolumeRecoveryPointInfos') as unknown as shapes.StorageGatewayVolumeRecoveryPointInfo[];
  }

}

export class StorageGatewayListVolumes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayListVolumesInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVolumes',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListVolumes.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVolumes.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVolumes',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListVolumes.Marker'),
        outputPath: 'Marker',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVolumes.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get volumeInfos(): shapes.StorageGatewayVolumeInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVolumes',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListVolumes.VolumeInfos'),
        outputPath: 'VolumeInfos',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          Marker: this.input.marker,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVolumes.VolumeInfos', props);
    return resource.getResponseField('VolumeInfos') as unknown as shapes.StorageGatewayVolumeInfo[];
  }

}

export class StorageGatewayNotifyWhenUploaded extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayNotifyWhenUploadedInput) {
    super(scope, id);
  }

  public get fileShareArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'notifyWhenUploaded',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.NotifyWhenUploaded.FileShareARN'),
        outputPath: 'FileShareARN',
        parameters: {
          FileShareARN: this.input.fileShareArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'NotifyWhenUploaded.FileShareARN', props);
    return resource.getResponseField('FileShareARN') as unknown as string;
  }

  public get notificationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'notifyWhenUploaded',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.NotifyWhenUploaded.NotificationId'),
        outputPath: 'NotificationId',
        parameters: {
          FileShareARN: this.input.fileShareArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'NotifyWhenUploaded.NotificationId', props);
    return resource.getResponseField('NotificationId') as unknown as string;
  }

}

export class StorageGatewayRefreshCache extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayRefreshCacheInput) {
    super(scope, id);
  }

  public get fileShareArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'refreshCache',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.RefreshCache.FileShareARN'),
        outputPath: 'FileShareARN',
        parameters: {
          FileShareARN: this.input.fileShareArn,
          FolderList: this.input.folderList,
          Recursive: this.input.recursive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RefreshCache.FileShareARN', props);
    return resource.getResponseField('FileShareARN') as unknown as string;
  }

  public get notificationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'refreshCache',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.RefreshCache.NotificationId'),
        outputPath: 'NotificationId',
        parameters: {
          FileShareARN: this.input.fileShareArn,
          FolderList: this.input.folderList,
          Recursive: this.input.recursive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RefreshCache.NotificationId', props);
    return resource.getResponseField('NotificationId') as unknown as string;
  }

}

export class StorageGatewayRemoveTagsFromResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayRemoveTagsFromResourceInput) {
    super(scope, id);
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeTagsFromResource',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.RemoveTagsFromResource.ResourceARN'),
        outputPath: 'ResourceARN',
        parameters: {
          ResourceARN: this.input.resourceArn,
          TagKeys: this.input.tagKeys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveTagsFromResource.ResourceARN', props);
    return resource.getResponseField('ResourceARN') as unknown as string;
  }

}

export class StorageGatewayResetCache extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayResetCacheInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetCache',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ResetCache.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetCache.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayRetrieveTapeArchive extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayRetrieveTapeArchiveInput) {
    super(scope, id);
  }

  public get tapeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retrieveTapeArchive',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.RetrieveTapeArchive.TapeARN'),
        outputPath: 'TapeARN',
        parameters: {
          TapeARN: this.input.tapeArn,
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RetrieveTapeArchive.TapeARN', props);
    return resource.getResponseField('TapeARN') as unknown as string;
  }

}

export class StorageGatewayRetrieveTapeRecoveryPoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayRetrieveTapeRecoveryPointInput) {
    super(scope, id);
  }

  public get tapeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'retrieveTapeRecoveryPoint',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.RetrieveTapeRecoveryPoint.TapeARN'),
        outputPath: 'TapeARN',
        parameters: {
          TapeARN: this.input.tapeArn,
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RetrieveTapeRecoveryPoint.TapeARN', props);
    return resource.getResponseField('TapeARN') as unknown as string;
  }

}

export class StorageGatewaySetLocalConsolePassword extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewaySetLocalConsolePasswordInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setLocalConsolePassword',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.SetLocalConsolePassword.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          LocalConsolePassword: this.input.localConsolePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SetLocalConsolePassword.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewaySetSmbGuestPassword extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewaySetSmbGuestPasswordInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setSmbGuestPassword',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.SetSMBGuestPassword.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          Password: this.input.password,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SetSMBGuestPassword.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayShutdownGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayShutdownGatewayInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'shutdownGateway',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ShutdownGateway.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ShutdownGateway.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayStartAvailabilityMonitorTest extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayStartAvailabilityMonitorTestInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startAvailabilityMonitorTest',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.StartAvailabilityMonitorTest.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartAvailabilityMonitorTest.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayStartGateway extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayStartGatewayInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startGateway',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.StartGateway.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartGateway.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayUpdateAutomaticTapeCreationPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayUpdateAutomaticTapeCreationPolicyInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAutomaticTapeCreationPolicy',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.UpdateAutomaticTapeCreationPolicy.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          AutomaticTapeCreationRules: this.input.automaticTapeCreationRules,
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAutomaticTapeCreationPolicy.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayUpdateBandwidthRateLimit extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayUpdateBandwidthRateLimitInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBandwidthRateLimit',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.UpdateBandwidthRateLimit.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          AverageUploadRateLimitInBitsPerSec: this.input.averageUploadRateLimitInBitsPerSec,
          AverageDownloadRateLimitInBitsPerSec: this.input.averageDownloadRateLimitInBitsPerSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBandwidthRateLimit.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayUpdateBandwidthRateLimitSchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayUpdateBandwidthRateLimitScheduleInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBandwidthRateLimitSchedule',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.UpdateBandwidthRateLimitSchedule.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          BandwidthRateLimitIntervals: this.input.bandwidthRateLimitIntervals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBandwidthRateLimitSchedule.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayUpdateChapCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayUpdateChapCredentialsInput) {
    super(scope, id);
  }

  public get targetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChapCredentials',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.UpdateChapCredentials.TargetARN'),
        outputPath: 'TargetARN',
        parameters: {
          TargetARN: this.input.targetArn,
          SecretToAuthenticateInitiator: this.input.secretToAuthenticateInitiator,
          InitiatorName: this.input.initiatorName,
          SecretToAuthenticateTarget: this.input.secretToAuthenticateTarget,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateChapCredentials.TargetARN', props);
    return resource.getResponseField('TargetARN') as unknown as string;
  }

  public get initiatorName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChapCredentials',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.UpdateChapCredentials.InitiatorName'),
        outputPath: 'InitiatorName',
        parameters: {
          TargetARN: this.input.targetArn,
          SecretToAuthenticateInitiator: this.input.secretToAuthenticateInitiator,
          InitiatorName: this.input.initiatorName,
          SecretToAuthenticateTarget: this.input.secretToAuthenticateTarget,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateChapCredentials.InitiatorName', props);
    return resource.getResponseField('InitiatorName') as unknown as string;
  }

}

export class StorageGatewayUpdateGatewayInformation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayUpdateGatewayInformationInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.UpdateGatewayInformation.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          GatewayName: this.input.gatewayName,
          GatewayTimezone: this.input.gatewayTimezone,
          CloudWatchLogGroupARN: this.input.cloudWatchLogGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGatewayInformation.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

  public get gatewayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.UpdateGatewayInformation.GatewayName'),
        outputPath: 'GatewayName',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          GatewayName: this.input.gatewayName,
          GatewayTimezone: this.input.gatewayTimezone,
          CloudWatchLogGroupARN: this.input.cloudWatchLogGroupArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGatewayInformation.GatewayName', props);
    return resource.getResponseField('GatewayName') as unknown as string;
  }

}

export class StorageGatewayUpdateGatewaySoftwareNow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayUpdateGatewaySoftwareNowInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGatewaySoftwareNow',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.UpdateGatewaySoftwareNow.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGatewaySoftwareNow.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayUpdateMaintenanceStartTime extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayUpdateMaintenanceStartTimeInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceStartTime',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.UpdateMaintenanceStartTime.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          HourOfDay: this.input.hourOfDay,
          MinuteOfHour: this.input.minuteOfHour,
          DayOfWeek: this.input.dayOfWeek,
          DayOfMonth: this.input.dayOfMonth,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceStartTime.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayUpdateNfsFileShare extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayUpdateNfsFileShareInput) {
    super(scope, id);
  }

  public get fileShareArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNfsFileShare',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.UpdateNFSFileShare.FileShareARN'),
        outputPath: 'FileShareARN',
        parameters: {
          FileShareARN: this.input.fileShareArn,
          KMSEncrypted: this.input.kmsEncrypted,
          KMSKey: this.input.kmsKey,
          NFSFileShareDefaults: {
            FileMode: this.input.nfsFileShareDefaults?.fileMode,
            DirectoryMode: this.input.nfsFileShareDefaults?.directoryMode,
            GroupId: this.input.nfsFileShareDefaults?.groupId,
            OwnerId: this.input.nfsFileShareDefaults?.ownerId,
          },
          DefaultStorageClass: this.input.defaultStorageClass,
          ObjectACL: this.input.objectAcl,
          ClientList: this.input.clientList,
          Squash: this.input.squash,
          ReadOnly: this.input.readOnly,
          GuessMIMETypeEnabled: this.input.guessMimeTypeEnabled,
          RequesterPays: this.input.requesterPays,
          FileShareName: this.input.fileShareName,
          CacheAttributes: {
            CacheStaleTimeoutInSeconds: this.input.cacheAttributes?.cacheStaleTimeoutInSeconds,
          },
          NotificationPolicy: this.input.notificationPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNFSFileShare.FileShareARN', props);
    return resource.getResponseField('FileShareARN') as unknown as string;
  }

}

export class StorageGatewayUpdateSmbFileShare extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayUpdateSmbFileShareInput) {
    super(scope, id);
  }

  public get fileShareArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSmbFileShare',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.UpdateSMBFileShare.FileShareARN'),
        outputPath: 'FileShareARN',
        parameters: {
          FileShareARN: this.input.fileShareArn,
          KMSEncrypted: this.input.kmsEncrypted,
          KMSKey: this.input.kmsKey,
          DefaultStorageClass: this.input.defaultStorageClass,
          ObjectACL: this.input.objectAcl,
          ReadOnly: this.input.readOnly,
          GuessMIMETypeEnabled: this.input.guessMimeTypeEnabled,
          RequesterPays: this.input.requesterPays,
          SMBACLEnabled: this.input.smbaclEnabled,
          AccessBasedEnumeration: this.input.accessBasedEnumeration,
          AdminUserList: this.input.adminUserList,
          ValidUserList: this.input.validUserList,
          InvalidUserList: this.input.invalidUserList,
          AuditDestinationARN: this.input.auditDestinationArn,
          CaseSensitivity: this.input.caseSensitivity,
          FileShareName: this.input.fileShareName,
          CacheAttributes: {
            CacheStaleTimeoutInSeconds: this.input.cacheAttributes?.cacheStaleTimeoutInSeconds,
          },
          NotificationPolicy: this.input.notificationPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSMBFileShare.FileShareARN', props);
    return resource.getResponseField('FileShareARN') as unknown as string;
  }

}

export class StorageGatewayUpdateSmbFileShareVisibility extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayUpdateSmbFileShareVisibilityInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSmbFileShareVisibility',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.UpdateSMBFileShareVisibility.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          FileSharesVisible: this.input.fileSharesVisible,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSMBFileShareVisibility.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayUpdateSmbSecurityStrategy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayUpdateSmbSecurityStrategyInput) {
    super(scope, id);
  }

  public get gatewayArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSmbSecurityStrategy',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.UpdateSMBSecurityStrategy.GatewayARN'),
        outputPath: 'GatewayARN',
        parameters: {
          GatewayARN: this.input.gatewayArn,
          SMBSecurityStrategy: this.input.smbSecurityStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSMBSecurityStrategy.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayUpdateSnapshotSchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayUpdateSnapshotScheduleInput) {
    super(scope, id);
  }

  public get volumeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSnapshotSchedule',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.UpdateSnapshotSchedule.VolumeARN'),
        outputPath: 'VolumeARN',
        parameters: {
          VolumeARN: this.input.volumeArn,
          StartAt: this.input.startAt,
          RecurrenceInHours: this.input.recurrenceInHours,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSnapshotSchedule.VolumeARN', props);
    return resource.getResponseField('VolumeARN') as unknown as string;
  }

}

export class StorageGatewayUpdateVtlDeviceType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.StorageGatewayUpdateVtlDeviceTypeInput) {
    super(scope, id);
  }

  public get vtlDeviceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVtlDeviceType',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.UpdateVTLDeviceType.VTLDeviceARN'),
        outputPath: 'VTLDeviceARN',
        parameters: {
          VTLDeviceARN: this.input.vtlDeviceArn,
          DeviceType: this.input.deviceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateVTLDeviceType.VTLDeviceARN', props);
    return resource.getResponseField('VTLDeviceARN') as unknown as string;
  }

}

