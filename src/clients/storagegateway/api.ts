import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class StorageGatewayClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public activateGateway(input: shapes.StorageGatewayActivateGatewayInput): StorageGatewayResponsesActivateGateway {
    return new StorageGatewayResponsesActivateGateway(this, this.__resources, input);
  }

  public addCache(input: shapes.StorageGatewayAddCacheInput): StorageGatewayResponsesAddCache {
    return new StorageGatewayResponsesAddCache(this, this.__resources, input);
  }

  public addTagsToResource(input: shapes.StorageGatewayAddTagsToResourceInput): StorageGatewayResponsesAddTagsToResource {
    return new StorageGatewayResponsesAddTagsToResource(this, this.__resources, input);
  }

  public addUploadBuffer(input: shapes.StorageGatewayAddUploadBufferInput): StorageGatewayResponsesAddUploadBuffer {
    return new StorageGatewayResponsesAddUploadBuffer(this, this.__resources, input);
  }

  public addWorkingStorage(input: shapes.StorageGatewayAddWorkingStorageInput): StorageGatewayResponsesAddWorkingStorage {
    return new StorageGatewayResponsesAddWorkingStorage(this, this.__resources, input);
  }

  public assignTapePool(input: shapes.StorageGatewayAssignTapePoolInput): StorageGatewayResponsesAssignTapePool {
    return new StorageGatewayResponsesAssignTapePool(this, this.__resources, input);
  }

  public associateFileSystem(input: shapes.StorageGatewayAssociateFileSystemInput): StorageGatewayResponsesAssociateFileSystem {
    return new StorageGatewayResponsesAssociateFileSystem(this, this.__resources, input);
  }

  public attachVolume(input: shapes.StorageGatewayAttachVolumeInput): StorageGatewayResponsesAttachVolume {
    return new StorageGatewayResponsesAttachVolume(this, this.__resources, input);
  }

  public cancelArchival(input: shapes.StorageGatewayCancelArchivalInput): StorageGatewayResponsesCancelArchival {
    return new StorageGatewayResponsesCancelArchival(this, this.__resources, input);
  }

  public cancelRetrieval(input: shapes.StorageGatewayCancelRetrievalInput): StorageGatewayResponsesCancelRetrieval {
    return new StorageGatewayResponsesCancelRetrieval(this, this.__resources, input);
  }

  public createCachediScsiVolume(input: shapes.StorageGatewayCreateCachediScsiVolumeInput): StorageGatewayResponsesCreateCachediScsiVolume {
    return new StorageGatewayResponsesCreateCachediScsiVolume(this, this.__resources, input);
  }

  public createNfsFileShare(input: shapes.StorageGatewayCreateNfsFileShareInput): StorageGatewayResponsesCreateNfsFileShare {
    return new StorageGatewayResponsesCreateNfsFileShare(this, this.__resources, input);
  }

  public createSmbFileShare(input: shapes.StorageGatewayCreateSmbFileShareInput): StorageGatewayResponsesCreateSmbFileShare {
    return new StorageGatewayResponsesCreateSmbFileShare(this, this.__resources, input);
  }

  public createSnapshot(input: shapes.StorageGatewayCreateSnapshotInput): StorageGatewayResponsesCreateSnapshot {
    return new StorageGatewayResponsesCreateSnapshot(this, this.__resources, input);
  }

  public createSnapshotFromVolumeRecoveryPoint(input: shapes.StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput): StorageGatewayResponsesCreateSnapshotFromVolumeRecoveryPoint {
    return new StorageGatewayResponsesCreateSnapshotFromVolumeRecoveryPoint(this, this.__resources, input);
  }

  public createStorediScsiVolume(input: shapes.StorageGatewayCreateStorediScsiVolumeInput): StorageGatewayResponsesCreateStorediScsiVolume {
    return new StorageGatewayResponsesCreateStorediScsiVolume(this, this.__resources, input);
  }

  public createTapePool(input: shapes.StorageGatewayCreateTapePoolInput): StorageGatewayResponsesCreateTapePool {
    return new StorageGatewayResponsesCreateTapePool(this, this.__resources, input);
  }

  public createTapeWithBarcode(input: shapes.StorageGatewayCreateTapeWithBarcodeInput): StorageGatewayResponsesCreateTapeWithBarcode {
    return new StorageGatewayResponsesCreateTapeWithBarcode(this, this.__resources, input);
  }

  public createTapes(input: shapes.StorageGatewayCreateTapesInput): StorageGatewayResponsesCreateTapes {
    return new StorageGatewayResponsesCreateTapes(this, this.__resources, input);
  }

  public deleteAutomaticTapeCreationPolicy(input: shapes.StorageGatewayDeleteAutomaticTapeCreationPolicyInput): StorageGatewayResponsesDeleteAutomaticTapeCreationPolicy {
    return new StorageGatewayResponsesDeleteAutomaticTapeCreationPolicy(this, this.__resources, input);
  }

  public deleteBandwidthRateLimit(input: shapes.StorageGatewayDeleteBandwidthRateLimitInput): StorageGatewayResponsesDeleteBandwidthRateLimit {
    return new StorageGatewayResponsesDeleteBandwidthRateLimit(this, this.__resources, input);
  }

  public deleteChapCredentials(input: shapes.StorageGatewayDeleteChapCredentialsInput): StorageGatewayResponsesDeleteChapCredentials {
    return new StorageGatewayResponsesDeleteChapCredentials(this, this.__resources, input);
  }

  public deleteFileShare(input: shapes.StorageGatewayDeleteFileShareInput): StorageGatewayResponsesDeleteFileShare {
    return new StorageGatewayResponsesDeleteFileShare(this, this.__resources, input);
  }

  public deleteGateway(input: shapes.StorageGatewayDeleteGatewayInput): StorageGatewayResponsesDeleteGateway {
    return new StorageGatewayResponsesDeleteGateway(this, this.__resources, input);
  }

  public deleteSnapshotSchedule(input: shapes.StorageGatewayDeleteSnapshotScheduleInput): StorageGatewayResponsesDeleteSnapshotSchedule {
    return new StorageGatewayResponsesDeleteSnapshotSchedule(this, this.__resources, input);
  }

  public deleteTape(input: shapes.StorageGatewayDeleteTapeInput): StorageGatewayResponsesDeleteTape {
    return new StorageGatewayResponsesDeleteTape(this, this.__resources, input);
  }

  public deleteTapeArchive(input: shapes.StorageGatewayDeleteTapeArchiveInput): StorageGatewayResponsesDeleteTapeArchive {
    return new StorageGatewayResponsesDeleteTapeArchive(this, this.__resources, input);
  }

  public deleteTapePool(input: shapes.StorageGatewayDeleteTapePoolInput): StorageGatewayResponsesDeleteTapePool {
    return new StorageGatewayResponsesDeleteTapePool(this, this.__resources, input);
  }

  public deleteVolume(input: shapes.StorageGatewayDeleteVolumeInput): StorageGatewayResponsesDeleteVolume {
    return new StorageGatewayResponsesDeleteVolume(this, this.__resources, input);
  }

  public describeAvailabilityMonitorTest(input: shapes.StorageGatewayDescribeAvailabilityMonitorTestInput): StorageGatewayResponsesDescribeAvailabilityMonitorTest {
    return new StorageGatewayResponsesDescribeAvailabilityMonitorTest(this, this.__resources, input);
  }

  public describeBandwidthRateLimit(input: shapes.StorageGatewayDescribeBandwidthRateLimitInput): StorageGatewayResponsesDescribeBandwidthRateLimit {
    return new StorageGatewayResponsesDescribeBandwidthRateLimit(this, this.__resources, input);
  }

  public describeBandwidthRateLimitSchedule(input: shapes.StorageGatewayDescribeBandwidthRateLimitScheduleInput): StorageGatewayResponsesDescribeBandwidthRateLimitSchedule {
    return new StorageGatewayResponsesDescribeBandwidthRateLimitSchedule(this, this.__resources, input);
  }

  public describeCache(input: shapes.StorageGatewayDescribeCacheInput): StorageGatewayResponsesDescribeCache {
    return new StorageGatewayResponsesDescribeCache(this, this.__resources, input);
  }

  public describeCachediScsiVolumes(input: shapes.StorageGatewayDescribeCachediScsiVolumesInput): StorageGatewayResponsesDescribeCachediScsiVolumes {
    return new StorageGatewayResponsesDescribeCachediScsiVolumes(this, this.__resources, input);
  }

  public describeChapCredentials(input: shapes.StorageGatewayDescribeChapCredentialsInput): StorageGatewayResponsesDescribeChapCredentials {
    return new StorageGatewayResponsesDescribeChapCredentials(this, this.__resources, input);
  }

  public describeFileSystemAssociations(input: shapes.StorageGatewayDescribeFileSystemAssociationsInput): StorageGatewayResponsesDescribeFileSystemAssociations {
    return new StorageGatewayResponsesDescribeFileSystemAssociations(this, this.__resources, input);
  }

  public describeGatewayInformation(input: shapes.StorageGatewayDescribeGatewayInformationInput): StorageGatewayResponsesDescribeGatewayInformation {
    return new StorageGatewayResponsesDescribeGatewayInformation(this, this.__resources, input);
  }

  public describeMaintenanceStartTime(input: shapes.StorageGatewayDescribeMaintenanceStartTimeInput): StorageGatewayResponsesDescribeMaintenanceStartTime {
    return new StorageGatewayResponsesDescribeMaintenanceStartTime(this, this.__resources, input);
  }

  public describeNfsFileShares(input: shapes.StorageGatewayDescribeNfsFileSharesInput): StorageGatewayResponsesDescribeNfsFileShares {
    return new StorageGatewayResponsesDescribeNfsFileShares(this, this.__resources, input);
  }

  public describeSmbFileShares(input: shapes.StorageGatewayDescribeSmbFileSharesInput): StorageGatewayResponsesDescribeSmbFileShares {
    return new StorageGatewayResponsesDescribeSmbFileShares(this, this.__resources, input);
  }

  public describeSmbSettings(input: shapes.StorageGatewayDescribeSmbSettingsInput): StorageGatewayResponsesDescribeSmbSettings {
    return new StorageGatewayResponsesDescribeSmbSettings(this, this.__resources, input);
  }

  public describeSnapshotSchedule(input: shapes.StorageGatewayDescribeSnapshotScheduleInput): StorageGatewayResponsesDescribeSnapshotSchedule {
    return new StorageGatewayResponsesDescribeSnapshotSchedule(this, this.__resources, input);
  }

  public describeStorediScsiVolumes(input: shapes.StorageGatewayDescribeStorediScsiVolumesInput): StorageGatewayResponsesDescribeStorediScsiVolumes {
    return new StorageGatewayResponsesDescribeStorediScsiVolumes(this, this.__resources, input);
  }

  public describeTapeArchives(input: shapes.StorageGatewayDescribeTapeArchivesInput): StorageGatewayResponsesDescribeTapeArchives {
    return new StorageGatewayResponsesDescribeTapeArchives(this, this.__resources, input);
  }

  public describeTapeRecoveryPoints(input: shapes.StorageGatewayDescribeTapeRecoveryPointsInput): StorageGatewayResponsesDescribeTapeRecoveryPoints {
    return new StorageGatewayResponsesDescribeTapeRecoveryPoints(this, this.__resources, input);
  }

  public describeTapes(input: shapes.StorageGatewayDescribeTapesInput): StorageGatewayResponsesDescribeTapes {
    return new StorageGatewayResponsesDescribeTapes(this, this.__resources, input);
  }

  public describeUploadBuffer(input: shapes.StorageGatewayDescribeUploadBufferInput): StorageGatewayResponsesDescribeUploadBuffer {
    return new StorageGatewayResponsesDescribeUploadBuffer(this, this.__resources, input);
  }

  public describeVtlDevices(input: shapes.StorageGatewayDescribeVtlDevicesInput): StorageGatewayResponsesDescribeVtlDevices {
    return new StorageGatewayResponsesDescribeVtlDevices(this, this.__resources, input);
  }

  public describeWorkingStorage(input: shapes.StorageGatewayDescribeWorkingStorageInput): StorageGatewayResponsesDescribeWorkingStorage {
    return new StorageGatewayResponsesDescribeWorkingStorage(this, this.__resources, input);
  }

  public detachVolume(input: shapes.StorageGatewayDetachVolumeInput): StorageGatewayResponsesDetachVolume {
    return new StorageGatewayResponsesDetachVolume(this, this.__resources, input);
  }

  public disableGateway(input: shapes.StorageGatewayDisableGatewayInput): StorageGatewayResponsesDisableGateway {
    return new StorageGatewayResponsesDisableGateway(this, this.__resources, input);
  }

  public disassociateFileSystem(input: shapes.StorageGatewayDisassociateFileSystemInput): StorageGatewayResponsesDisassociateFileSystem {
    return new StorageGatewayResponsesDisassociateFileSystem(this, this.__resources, input);
  }

  public joinDomain(input: shapes.StorageGatewayJoinDomainInput): StorageGatewayResponsesJoinDomain {
    return new StorageGatewayResponsesJoinDomain(this, this.__resources, input);
  }

  public listAutomaticTapeCreationPolicies(input: shapes.StorageGatewayListAutomaticTapeCreationPoliciesInput): StorageGatewayResponsesListAutomaticTapeCreationPolicies {
    return new StorageGatewayResponsesListAutomaticTapeCreationPolicies(this, this.__resources, input);
  }

  public listFileShares(input: shapes.StorageGatewayListFileSharesInput): StorageGatewayResponsesListFileShares {
    return new StorageGatewayResponsesListFileShares(this, this.__resources, input);
  }

  public listFileSystemAssociations(input: shapes.StorageGatewayListFileSystemAssociationsInput): StorageGatewayResponsesListFileSystemAssociations {
    return new StorageGatewayResponsesListFileSystemAssociations(this, this.__resources, input);
  }

  public listGateways(input: shapes.StorageGatewayListGatewaysInput): StorageGatewayResponsesListGateways {
    return new StorageGatewayResponsesListGateways(this, this.__resources, input);
  }

  public listLocalDisks(input: shapes.StorageGatewayListLocalDisksInput): StorageGatewayResponsesListLocalDisks {
    return new StorageGatewayResponsesListLocalDisks(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.StorageGatewayListTagsForResourceInput): StorageGatewayResponsesListTagsForResource {
    return new StorageGatewayResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTapePools(input: shapes.StorageGatewayListTapePoolsInput): StorageGatewayResponsesListTapePools {
    return new StorageGatewayResponsesListTapePools(this, this.__resources, input);
  }

  public listTapes(input: shapes.StorageGatewayListTapesInput): StorageGatewayResponsesListTapes {
    return new StorageGatewayResponsesListTapes(this, this.__resources, input);
  }

  public listVolumeInitiators(input: shapes.StorageGatewayListVolumeInitiatorsInput): StorageGatewayResponsesListVolumeInitiators {
    return new StorageGatewayResponsesListVolumeInitiators(this, this.__resources, input);
  }

  public listVolumeRecoveryPoints(input: shapes.StorageGatewayListVolumeRecoveryPointsInput): StorageGatewayResponsesListVolumeRecoveryPoints {
    return new StorageGatewayResponsesListVolumeRecoveryPoints(this, this.__resources, input);
  }

  public listVolumes(input: shapes.StorageGatewayListVolumesInput): StorageGatewayResponsesListVolumes {
    return new StorageGatewayResponsesListVolumes(this, this.__resources, input);
  }

  public notifyWhenUploaded(input: shapes.StorageGatewayNotifyWhenUploadedInput): StorageGatewayResponsesNotifyWhenUploaded {
    return new StorageGatewayResponsesNotifyWhenUploaded(this, this.__resources, input);
  }

  public refreshCache(input: shapes.StorageGatewayRefreshCacheInput): StorageGatewayResponsesRefreshCache {
    return new StorageGatewayResponsesRefreshCache(this, this.__resources, input);
  }

  public removeTagsFromResource(input: shapes.StorageGatewayRemoveTagsFromResourceInput): StorageGatewayResponsesRemoveTagsFromResource {
    return new StorageGatewayResponsesRemoveTagsFromResource(this, this.__resources, input);
  }

  public resetCache(input: shapes.StorageGatewayResetCacheInput): StorageGatewayResponsesResetCache {
    return new StorageGatewayResponsesResetCache(this, this.__resources, input);
  }

  public retrieveTapeArchive(input: shapes.StorageGatewayRetrieveTapeArchiveInput): StorageGatewayResponsesRetrieveTapeArchive {
    return new StorageGatewayResponsesRetrieveTapeArchive(this, this.__resources, input);
  }

  public retrieveTapeRecoveryPoint(input: shapes.StorageGatewayRetrieveTapeRecoveryPointInput): StorageGatewayResponsesRetrieveTapeRecoveryPoint {
    return new StorageGatewayResponsesRetrieveTapeRecoveryPoint(this, this.__resources, input);
  }

  public putLocalConsolePassword(input: shapes.StorageGatewaySetLocalConsolePasswordInput): StorageGatewayResponsesPutLocalConsolePassword {
    return new StorageGatewayResponsesPutLocalConsolePassword(this, this.__resources, input);
  }

  public putSmbGuestPassword(input: shapes.StorageGatewaySetSmbGuestPasswordInput): StorageGatewayResponsesPutSmbGuestPassword {
    return new StorageGatewayResponsesPutSmbGuestPassword(this, this.__resources, input);
  }

  public shutdownGateway(input: shapes.StorageGatewayShutdownGatewayInput): StorageGatewayResponsesShutdownGateway {
    return new StorageGatewayResponsesShutdownGateway(this, this.__resources, input);
  }

  public startAvailabilityMonitorTest(input: shapes.StorageGatewayStartAvailabilityMonitorTestInput): StorageGatewayResponsesStartAvailabilityMonitorTest {
    return new StorageGatewayResponsesStartAvailabilityMonitorTest(this, this.__resources, input);
  }

  public startGateway(input: shapes.StorageGatewayStartGatewayInput): StorageGatewayResponsesStartGateway {
    return new StorageGatewayResponsesStartGateway(this, this.__resources, input);
  }

  public updateAutomaticTapeCreationPolicy(input: shapes.StorageGatewayUpdateAutomaticTapeCreationPolicyInput): StorageGatewayResponsesUpdateAutomaticTapeCreationPolicy {
    return new StorageGatewayResponsesUpdateAutomaticTapeCreationPolicy(this, this.__resources, input);
  }

  public updateBandwidthRateLimit(input: shapes.StorageGatewayUpdateBandwidthRateLimitInput): StorageGatewayResponsesUpdateBandwidthRateLimit {
    return new StorageGatewayResponsesUpdateBandwidthRateLimit(this, this.__resources, input);
  }

  public updateBandwidthRateLimitSchedule(input: shapes.StorageGatewayUpdateBandwidthRateLimitScheduleInput): StorageGatewayResponsesUpdateBandwidthRateLimitSchedule {
    return new StorageGatewayResponsesUpdateBandwidthRateLimitSchedule(this, this.__resources, input);
  }

  public updateChapCredentials(input: shapes.StorageGatewayUpdateChapCredentialsInput): StorageGatewayResponsesUpdateChapCredentials {
    return new StorageGatewayResponsesUpdateChapCredentials(this, this.__resources, input);
  }

  public updateFileSystemAssociation(input: shapes.StorageGatewayUpdateFileSystemAssociationInput): StorageGatewayResponsesUpdateFileSystemAssociation {
    return new StorageGatewayResponsesUpdateFileSystemAssociation(this, this.__resources, input);
  }

  public updateGatewayInformation(input: shapes.StorageGatewayUpdateGatewayInformationInput): StorageGatewayResponsesUpdateGatewayInformation {
    return new StorageGatewayResponsesUpdateGatewayInformation(this, this.__resources, input);
  }

  public updateGatewaySoftwareNow(input: shapes.StorageGatewayUpdateGatewaySoftwareNowInput): StorageGatewayResponsesUpdateGatewaySoftwareNow {
    return new StorageGatewayResponsesUpdateGatewaySoftwareNow(this, this.__resources, input);
  }

  public updateMaintenanceStartTime(input: shapes.StorageGatewayUpdateMaintenanceStartTimeInput): StorageGatewayResponsesUpdateMaintenanceStartTime {
    return new StorageGatewayResponsesUpdateMaintenanceStartTime(this, this.__resources, input);
  }

  public updateNfsFileShare(input: shapes.StorageGatewayUpdateNfsFileShareInput): StorageGatewayResponsesUpdateNfsFileShare {
    return new StorageGatewayResponsesUpdateNfsFileShare(this, this.__resources, input);
  }

  public updateSmbFileShare(input: shapes.StorageGatewayUpdateSmbFileShareInput): StorageGatewayResponsesUpdateSmbFileShare {
    return new StorageGatewayResponsesUpdateSmbFileShare(this, this.__resources, input);
  }

  public updateSmbFileShareVisibility(input: shapes.StorageGatewayUpdateSmbFileShareVisibilityInput): StorageGatewayResponsesUpdateSmbFileShareVisibility {
    return new StorageGatewayResponsesUpdateSmbFileShareVisibility(this, this.__resources, input);
  }

  public updateSmbSecurityStrategy(input: shapes.StorageGatewayUpdateSmbSecurityStrategyInput): StorageGatewayResponsesUpdateSmbSecurityStrategy {
    return new StorageGatewayResponsesUpdateSmbSecurityStrategy(this, this.__resources, input);
  }

  public updateSnapshotSchedule(input: shapes.StorageGatewayUpdateSnapshotScheduleInput): StorageGatewayResponsesUpdateSnapshotSchedule {
    return new StorageGatewayResponsesUpdateSnapshotSchedule(this, this.__resources, input);
  }

  public updateVtlDeviceType(input: shapes.StorageGatewayUpdateVtlDeviceTypeInput): StorageGatewayResponsesUpdateVtlDeviceType {
    return new StorageGatewayResponsesUpdateVtlDeviceType(this, this.__resources, input);
  }

}

export class StorageGatewayResponsesActivateGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayActivateGatewayInput) {
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
          ActivationKey: this.__input.activationKey,
          GatewayName: this.__input.gatewayName,
          GatewayTimezone: this.__input.gatewayTimezone,
          GatewayRegion: this.__input.gatewayRegion,
          GatewayType: this.__input.gatewayType,
          TapeDriveType: this.__input.tapeDriveType,
          MediumChangerType: this.__input.mediumChangerType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ActivateGateway.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesAddCache {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayAddCacheInput) {
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
          GatewayARN: this.__input.gatewayArn,
          DiskIds: this.__input.diskIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddCache.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesAddTagsToResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayAddTagsToResourceInput) {
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
          ResourceARN: this.__input.resourceArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddTagsToResource.ResourceARN', props);
    return resource.getResponseField('ResourceARN') as unknown as string;
  }

}

export class StorageGatewayResponsesAddUploadBuffer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayAddUploadBufferInput) {
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
          GatewayARN: this.__input.gatewayArn,
          DiskIds: this.__input.diskIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddUploadBuffer.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesAddWorkingStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayAddWorkingStorageInput) {
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
          GatewayARN: this.__input.gatewayArn,
          DiskIds: this.__input.diskIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddWorkingStorage.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesAssignTapePool {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayAssignTapePoolInput) {
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
          TapeARN: this.__input.tapeArn,
          PoolId: this.__input.poolId,
          BypassGovernanceRetention: this.__input.bypassGovernanceRetention,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssignTapePool.TapeARN', props);
    return resource.getResponseField('TapeARN') as unknown as string;
  }

}

export class StorageGatewayResponsesAssociateFileSystem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayAssociateFileSystemInput) {
  }

  public get fileSystemAssociationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFileSystem',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.AssociateFileSystem.FileSystemAssociationARN'),
        outputPath: 'FileSystemAssociationARN',
        parameters: {
          UserName: this.__input.userName,
          Password: this.__input.password,
          ClientToken: this.__input.clientToken,
          GatewayARN: this.__input.gatewayArn,
          LocationARN: this.__input.locationArn,
          Tags: this.__input.tags,
          AuditDestinationARN: this.__input.auditDestinationArn,
          CacheAttributes: {
            CacheStaleTimeoutInSeconds: this.__input.cacheAttributes?.cacheStaleTimeoutInSeconds,
          },
          EndpointNetworkConfiguration: {
            IpAddresses: this.__input.endpointNetworkConfiguration?.ipAddresses,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateFileSystem.FileSystemAssociationARN', props);
    return resource.getResponseField('FileSystemAssociationARN') as unknown as string;
  }

}

export class StorageGatewayResponsesAttachVolume {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayAttachVolumeInput) {
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
          GatewayARN: this.__input.gatewayArn,
          TargetName: this.__input.targetName,
          VolumeARN: this.__input.volumeArn,
          NetworkInterfaceId: this.__input.networkInterfaceId,
          DiskId: this.__input.diskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachVolume.VolumeARN', props);
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
          GatewayARN: this.__input.gatewayArn,
          TargetName: this.__input.targetName,
          VolumeARN: this.__input.volumeArn,
          NetworkInterfaceId: this.__input.networkInterfaceId,
          DiskId: this.__input.diskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AttachVolume.TargetARN', props);
    return resource.getResponseField('TargetARN') as unknown as string;
  }

}

export class StorageGatewayResponsesCancelArchival {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayCancelArchivalInput) {
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
          GatewayARN: this.__input.gatewayArn,
          TapeARN: this.__input.tapeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelArchival.TapeARN', props);
    return resource.getResponseField('TapeARN') as unknown as string;
  }

}

export class StorageGatewayResponsesCancelRetrieval {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayCancelRetrievalInput) {
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
          GatewayARN: this.__input.gatewayArn,
          TapeARN: this.__input.tapeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelRetrieval.TapeARN', props);
    return resource.getResponseField('TapeARN') as unknown as string;
  }

}

export class StorageGatewayResponsesCreateCachediScsiVolume {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayCreateCachediScsiVolumeInput) {
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
          GatewayARN: this.__input.gatewayArn,
          VolumeSizeInBytes: this.__input.volumeSizeInBytes,
          SnapshotId: this.__input.snapshotId,
          TargetName: this.__input.targetName,
          SourceVolumeARN: this.__input.sourceVolumeArn,
          NetworkInterfaceId: this.__input.networkInterfaceId,
          ClientToken: this.__input.clientToken,
          KMSEncrypted: this.__input.kmsEncrypted,
          KMSKey: this.__input.kmsKey,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCachediSCSIVolume.VolumeARN', props);
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
          GatewayARN: this.__input.gatewayArn,
          VolumeSizeInBytes: this.__input.volumeSizeInBytes,
          SnapshotId: this.__input.snapshotId,
          TargetName: this.__input.targetName,
          SourceVolumeARN: this.__input.sourceVolumeArn,
          NetworkInterfaceId: this.__input.networkInterfaceId,
          ClientToken: this.__input.clientToken,
          KMSEncrypted: this.__input.kmsEncrypted,
          KMSKey: this.__input.kmsKey,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCachediSCSIVolume.TargetARN', props);
    return resource.getResponseField('TargetARN') as unknown as string;
  }

}

export class StorageGatewayResponsesCreateNfsFileShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayCreateNfsFileShareInput) {
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
          ClientToken: this.__input.clientToken,
          NFSFileShareDefaults: {
            FileMode: this.__input.nfsFileShareDefaults?.fileMode,
            DirectoryMode: this.__input.nfsFileShareDefaults?.directoryMode,
            GroupId: this.__input.nfsFileShareDefaults?.groupId,
            OwnerId: this.__input.nfsFileShareDefaults?.ownerId,
          },
          GatewayARN: this.__input.gatewayArn,
          KMSEncrypted: this.__input.kmsEncrypted,
          KMSKey: this.__input.kmsKey,
          Role: this.__input.role,
          LocationARN: this.__input.locationArn,
          DefaultStorageClass: this.__input.defaultStorageClass,
          ObjectACL: this.__input.objectAcl,
          ClientList: this.__input.clientList,
          Squash: this.__input.squash,
          ReadOnly: this.__input.readOnly,
          GuessMIMETypeEnabled: this.__input.guessMimeTypeEnabled,
          RequesterPays: this.__input.requesterPays,
          Tags: this.__input.tags,
          FileShareName: this.__input.fileShareName,
          CacheAttributes: {
            CacheStaleTimeoutInSeconds: this.__input.cacheAttributes?.cacheStaleTimeoutInSeconds,
          },
          NotificationPolicy: this.__input.notificationPolicy,
          VPCEndpointDNSName: this.__input.vpcEndpointDnsName,
          BucketRegion: this.__input.bucketRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNFSFileShare.FileShareARN', props);
    return resource.getResponseField('FileShareARN') as unknown as string;
  }

}

export class StorageGatewayResponsesCreateSmbFileShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayCreateSmbFileShareInput) {
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
          ClientToken: this.__input.clientToken,
          GatewayARN: this.__input.gatewayArn,
          KMSEncrypted: this.__input.kmsEncrypted,
          KMSKey: this.__input.kmsKey,
          Role: this.__input.role,
          LocationARN: this.__input.locationArn,
          DefaultStorageClass: this.__input.defaultStorageClass,
          ObjectACL: this.__input.objectAcl,
          ReadOnly: this.__input.readOnly,
          GuessMIMETypeEnabled: this.__input.guessMimeTypeEnabled,
          RequesterPays: this.__input.requesterPays,
          SMBACLEnabled: this.__input.smbaclEnabled,
          AccessBasedEnumeration: this.__input.accessBasedEnumeration,
          AdminUserList: this.__input.adminUserList,
          ValidUserList: this.__input.validUserList,
          InvalidUserList: this.__input.invalidUserList,
          AuditDestinationARN: this.__input.auditDestinationArn,
          Authentication: this.__input.authentication,
          CaseSensitivity: this.__input.caseSensitivity,
          Tags: this.__input.tags,
          FileShareName: this.__input.fileShareName,
          CacheAttributes: {
            CacheStaleTimeoutInSeconds: this.__input.cacheAttributes?.cacheStaleTimeoutInSeconds,
          },
          NotificationPolicy: this.__input.notificationPolicy,
          VPCEndpointDNSName: this.__input.vpcEndpointDnsName,
          BucketRegion: this.__input.bucketRegion,
          OplocksEnabled: this.__input.oplocksEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSMBFileShare.FileShareARN', props);
    return resource.getResponseField('FileShareARN') as unknown as string;
  }

}

export class StorageGatewayResponsesCreateSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayCreateSnapshotInput) {
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
          VolumeARN: this.__input.volumeArn,
          SnapshotDescription: this.__input.snapshotDescription,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.VolumeARN', props);
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
          VolumeARN: this.__input.volumeArn,
          SnapshotDescription: this.__input.snapshotDescription,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.SnapshotId', props);
    return resource.getResponseField('SnapshotId') as unknown as string;
  }

}

export class StorageGatewayResponsesCreateSnapshotFromVolumeRecoveryPoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput) {
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
          VolumeARN: this.__input.volumeArn,
          SnapshotDescription: this.__input.snapshotDescription,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshotFromVolumeRecoveryPoint.SnapshotId', props);
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
          VolumeARN: this.__input.volumeArn,
          SnapshotDescription: this.__input.snapshotDescription,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshotFromVolumeRecoveryPoint.VolumeARN', props);
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
          VolumeARN: this.__input.volumeArn,
          SnapshotDescription: this.__input.snapshotDescription,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshotFromVolumeRecoveryPoint.VolumeRecoveryPointTime', props);
    return resource.getResponseField('VolumeRecoveryPointTime') as unknown as string;
  }

}

export class StorageGatewayResponsesCreateStorediScsiVolume {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayCreateStorediScsiVolumeInput) {
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
          GatewayARN: this.__input.gatewayArn,
          DiskId: this.__input.diskId,
          SnapshotId: this.__input.snapshotId,
          PreserveExistingData: this.__input.preserveExistingData,
          TargetName: this.__input.targetName,
          NetworkInterfaceId: this.__input.networkInterfaceId,
          KMSEncrypted: this.__input.kmsEncrypted,
          KMSKey: this.__input.kmsKey,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStorediSCSIVolume.VolumeARN', props);
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
          GatewayARN: this.__input.gatewayArn,
          DiskId: this.__input.diskId,
          SnapshotId: this.__input.snapshotId,
          PreserveExistingData: this.__input.preserveExistingData,
          TargetName: this.__input.targetName,
          NetworkInterfaceId: this.__input.networkInterfaceId,
          KMSEncrypted: this.__input.kmsEncrypted,
          KMSKey: this.__input.kmsKey,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStorediSCSIVolume.VolumeSizeInBytes', props);
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
          GatewayARN: this.__input.gatewayArn,
          DiskId: this.__input.diskId,
          SnapshotId: this.__input.snapshotId,
          PreserveExistingData: this.__input.preserveExistingData,
          TargetName: this.__input.targetName,
          NetworkInterfaceId: this.__input.networkInterfaceId,
          KMSEncrypted: this.__input.kmsEncrypted,
          KMSKey: this.__input.kmsKey,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStorediSCSIVolume.TargetARN', props);
    return resource.getResponseField('TargetARN') as unknown as string;
  }

}

export class StorageGatewayResponsesCreateTapePool {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayCreateTapePoolInput) {
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
          PoolName: this.__input.poolName,
          StorageClass: this.__input.storageClass,
          RetentionLockType: this.__input.retentionLockType,
          RetentionLockTimeInDays: this.__input.retentionLockTimeInDays,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTapePool.PoolARN', props);
    return resource.getResponseField('PoolARN') as unknown as string;
  }

}

export class StorageGatewayResponsesCreateTapeWithBarcode {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayCreateTapeWithBarcodeInput) {
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
          GatewayARN: this.__input.gatewayArn,
          TapeSizeInBytes: this.__input.tapeSizeInBytes,
          TapeBarcode: this.__input.tapeBarcode,
          KMSEncrypted: this.__input.kmsEncrypted,
          KMSKey: this.__input.kmsKey,
          PoolId: this.__input.poolId,
          Worm: this.__input.worm,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTapeWithBarcode.TapeARN', props);
    return resource.getResponseField('TapeARN') as unknown as string;
  }

}

export class StorageGatewayResponsesCreateTapes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayCreateTapesInput) {
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
          GatewayARN: this.__input.gatewayArn,
          TapeSizeInBytes: this.__input.tapeSizeInBytes,
          ClientToken: this.__input.clientToken,
          NumTapesToCreate: this.__input.numTapesToCreate,
          TapeBarcodePrefix: this.__input.tapeBarcodePrefix,
          KMSEncrypted: this.__input.kmsEncrypted,
          KMSKey: this.__input.kmsKey,
          PoolId: this.__input.poolId,
          Worm: this.__input.worm,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTapes.TapeARNs', props);
    return resource.getResponseField('TapeARNs') as unknown as string[];
  }

}

export class StorageGatewayResponsesDeleteAutomaticTapeCreationPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDeleteAutomaticTapeCreationPolicyInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAutomaticTapeCreationPolicy.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesDeleteBandwidthRateLimit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDeleteBandwidthRateLimitInput) {
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
          GatewayARN: this.__input.gatewayArn,
          BandwidthType: this.__input.bandwidthType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBandwidthRateLimit.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesDeleteChapCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDeleteChapCredentialsInput) {
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
          TargetARN: this.__input.targetArn,
          InitiatorName: this.__input.initiatorName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteChapCredentials.TargetARN', props);
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
          TargetARN: this.__input.targetArn,
          InitiatorName: this.__input.initiatorName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteChapCredentials.InitiatorName', props);
    return resource.getResponseField('InitiatorName') as unknown as string;
  }

}

export class StorageGatewayResponsesDeleteFileShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDeleteFileShareInput) {
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
          FileShareARN: this.__input.fileShareArn,
          ForceDelete: this.__input.forceDelete,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFileShare.FileShareARN', props);
    return resource.getResponseField('FileShareARN') as unknown as string;
  }

}

export class StorageGatewayResponsesDeleteGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDeleteGatewayInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGateway.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesDeleteSnapshotSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDeleteSnapshotScheduleInput) {
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
          VolumeARN: this.__input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshotSchedule.VolumeARN', props);
    return resource.getResponseField('VolumeARN') as unknown as string;
  }

}

export class StorageGatewayResponsesDeleteTape {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDeleteTapeInput) {
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
          GatewayARN: this.__input.gatewayArn,
          TapeARN: this.__input.tapeArn,
          BypassGovernanceRetention: this.__input.bypassGovernanceRetention,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTape.TapeARN', props);
    return resource.getResponseField('TapeARN') as unknown as string;
  }

}

export class StorageGatewayResponsesDeleteTapeArchive {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDeleteTapeArchiveInput) {
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
          TapeARN: this.__input.tapeArn,
          BypassGovernanceRetention: this.__input.bypassGovernanceRetention,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTapeArchive.TapeARN', props);
    return resource.getResponseField('TapeARN') as unknown as string;
  }

}

export class StorageGatewayResponsesDeleteTapePool {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDeleteTapePoolInput) {
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
          PoolARN: this.__input.poolArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTapePool.PoolARN', props);
    return resource.getResponseField('PoolARN') as unknown as string;
  }

}

export class StorageGatewayResponsesDeleteVolume {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDeleteVolumeInput) {
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
          VolumeARN: this.__input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteVolume.VolumeARN', props);
    return resource.getResponseField('VolumeARN') as unknown as string;
  }

}

export class StorageGatewayResponsesDescribeAvailabilityMonitorTest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeAvailabilityMonitorTestInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAvailabilityMonitorTest.GatewayARN', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAvailabilityMonitorTest.Status', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAvailabilityMonitorTest.StartTime', props);
    return resource.getResponseField('StartTime') as unknown as string;
  }

}

export class StorageGatewayResponsesDescribeBandwidthRateLimit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeBandwidthRateLimitInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBandwidthRateLimit.GatewayARN', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBandwidthRateLimit.AverageUploadRateLimitInBitsPerSec', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBandwidthRateLimit.AverageDownloadRateLimitInBitsPerSec', props);
    return resource.getResponseField('AverageDownloadRateLimitInBitsPerSec') as unknown as number;
  }

}

export class StorageGatewayResponsesDescribeBandwidthRateLimitSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeBandwidthRateLimitScheduleInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBandwidthRateLimitSchedule.GatewayARN', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBandwidthRateLimitSchedule.BandwidthRateLimitIntervals', props);
    return resource.getResponseField('BandwidthRateLimitIntervals') as unknown as shapes.StorageGatewayBandwidthRateLimitInterval[];
  }

}

export class StorageGatewayResponsesDescribeCache {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeCacheInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCache.GatewayARN', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCache.DiskIds', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCache.CacheAllocatedInBytes', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCache.CacheUsedPercentage', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCache.CacheDirtyPercentage', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCache.CacheHitPercentage', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCache.CacheMissPercentage', props);
    return resource.getResponseField('CacheMissPercentage') as unknown as number;
  }

}

export class StorageGatewayResponsesDescribeCachediScsiVolumes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeCachediScsiVolumesInput) {
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
          VolumeARNs: this.__input.volumeArNs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCachediSCSIVolumes.CachediSCSIVolumes', props);
    return resource.getResponseField('CachediSCSIVolumes') as unknown as shapes.StorageGatewayCachediScsiVolume[];
  }

}

export class StorageGatewayResponsesDescribeChapCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeChapCredentialsInput) {
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
          TargetARN: this.__input.targetArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChapCredentials.ChapCredentials', props);
    return resource.getResponseField('ChapCredentials') as unknown as shapes.StorageGatewayChapInfo[];
  }

}

export class StorageGatewayResponsesDescribeFileSystemAssociations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeFileSystemAssociationsInput) {
  }

  public get fileSystemAssociationInfoList(): shapes.StorageGatewayFileSystemAssociationInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFileSystemAssociations',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeFileSystemAssociations.FileSystemAssociationInfoList'),
        outputPath: 'FileSystemAssociationInfoList',
        parameters: {
          FileSystemAssociationARNList: this.__input.fileSystemAssociationArnList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFileSystemAssociations.FileSystemAssociationInfoList', props);
    return resource.getResponseField('FileSystemAssociationInfoList') as unknown as shapes.StorageGatewayFileSystemAssociationInfo[];
  }

}

export class StorageGatewayResponsesDescribeGatewayInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeGatewayInformationInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.GatewayARN', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.GatewayId', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.GatewayName', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.GatewayTimezone', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.GatewayState', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.GatewayNetworkInterfaces', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.GatewayType', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.NextUpdateAvailabilityDate', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.LastSoftwareUpdate', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.Ec2InstanceId', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.Ec2InstanceRegion', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.Tags', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.VPCEndpoint', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.CloudWatchLogGroupARN', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.HostEnvironment', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.EndpointType', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.SoftwareUpdatesEndDate', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.DeprecationDate', props);
    return resource.getResponseField('DeprecationDate') as unknown as string;
  }

  public get gatewayCapacity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.GatewayCapacity'),
        outputPath: 'GatewayCapacity',
        parameters: {
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.GatewayCapacity', props);
    return resource.getResponseField('GatewayCapacity') as unknown as string;
  }

  public get supportedGatewayCapacities(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGatewayInformation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DescribeGatewayInformation.SupportedGatewayCapacities'),
        outputPath: 'SupportedGatewayCapacities',
        parameters: {
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGatewayInformation.SupportedGatewayCapacities', props);
    return resource.getResponseField('SupportedGatewayCapacities') as unknown as string[];
  }

}

export class StorageGatewayResponsesDescribeMaintenanceStartTime {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeMaintenanceStartTimeInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceStartTime.GatewayARN', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceStartTime.HourOfDay', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceStartTime.MinuteOfHour', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceStartTime.DayOfWeek', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceStartTime.DayOfMonth', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceStartTime.Timezone', props);
    return resource.getResponseField('Timezone') as unknown as string;
  }

}

export class StorageGatewayResponsesDescribeNfsFileShares {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeNfsFileSharesInput) {
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
          FileShareARNList: this.__input.fileShareArnList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNFSFileShares.NFSFileShareInfoList', props);
    return resource.getResponseField('NFSFileShareInfoList') as unknown as shapes.StorageGatewayNfsFileShareInfo[];
  }

}

export class StorageGatewayResponsesDescribeSmbFileShares {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeSmbFileSharesInput) {
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
          FileShareARNList: this.__input.fileShareArnList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSMBFileShares.SMBFileShareInfoList', props);
    return resource.getResponseField('SMBFileShareInfoList') as unknown as shapes.StorageGatewaySmbFileShareInfo[];
  }

}

export class StorageGatewayResponsesDescribeSmbSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeSmbSettingsInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSMBSettings.GatewayARN', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSMBSettings.DomainName', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSMBSettings.ActiveDirectoryStatus', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSMBSettings.SMBGuestPasswordSet', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSMBSettings.SMBSecurityStrategy', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSMBSettings.FileSharesVisible', props);
    return resource.getResponseField('FileSharesVisible') as unknown as boolean;
  }

}

export class StorageGatewayResponsesDescribeSnapshotSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeSnapshotScheduleInput) {
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
          VolumeARN: this.__input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSnapshotSchedule.VolumeARN', props);
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
          VolumeARN: this.__input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSnapshotSchedule.StartAt', props);
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
          VolumeARN: this.__input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSnapshotSchedule.RecurrenceInHours', props);
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
          VolumeARN: this.__input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSnapshotSchedule.Description', props);
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
          VolumeARN: this.__input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSnapshotSchedule.Timezone', props);
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
          VolumeARN: this.__input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSnapshotSchedule.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.StorageGatewayTag[];
  }

}

export class StorageGatewayResponsesDescribeStorediScsiVolumes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeStorediScsiVolumesInput) {
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
          VolumeARNs: this.__input.volumeArNs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStorediSCSIVolumes.StorediSCSIVolumes', props);
    return resource.getResponseField('StorediSCSIVolumes') as unknown as shapes.StorageGatewayStorediScsiVolume[];
  }

}

export class StorageGatewayResponsesDescribeTapeArchives {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeTapeArchivesInput) {
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
          TapeARNs: this.__input.tapeArNs,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTapeArchives.TapeArchives', props);
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
          TapeARNs: this.__input.tapeArNs,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTapeArchives.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class StorageGatewayResponsesDescribeTapeRecoveryPoints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeTapeRecoveryPointsInput) {
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
          GatewayARN: this.__input.gatewayArn,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTapeRecoveryPoints.GatewayARN', props);
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
          GatewayARN: this.__input.gatewayArn,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTapeRecoveryPoints.TapeRecoveryPointInfos', props);
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
          GatewayARN: this.__input.gatewayArn,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTapeRecoveryPoints.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class StorageGatewayResponsesDescribeTapes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeTapesInput) {
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
          GatewayARN: this.__input.gatewayArn,
          TapeARNs: this.__input.tapeArNs,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTapes.Tapes', props);
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
          GatewayARN: this.__input.gatewayArn,
          TapeARNs: this.__input.tapeArNs,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTapes.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class StorageGatewayResponsesDescribeUploadBuffer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeUploadBufferInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUploadBuffer.GatewayARN', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUploadBuffer.DiskIds', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUploadBuffer.UploadBufferUsedInBytes', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUploadBuffer.UploadBufferAllocatedInBytes', props);
    return resource.getResponseField('UploadBufferAllocatedInBytes') as unknown as number;
  }

}

export class StorageGatewayResponsesDescribeVtlDevices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeVtlDevicesInput) {
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
          GatewayARN: this.__input.gatewayArn,
          VTLDeviceARNs: this.__input.vtlDeviceArNs,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVTLDevices.GatewayARN', props);
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
          GatewayARN: this.__input.gatewayArn,
          VTLDeviceARNs: this.__input.vtlDeviceArNs,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVTLDevices.VTLDevices', props);
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
          GatewayARN: this.__input.gatewayArn,
          VTLDeviceARNs: this.__input.vtlDeviceArNs,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVTLDevices.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class StorageGatewayResponsesDescribeWorkingStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDescribeWorkingStorageInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkingStorage.GatewayARN', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkingStorage.DiskIds', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkingStorage.WorkingStorageUsedInBytes', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkingStorage.WorkingStorageAllocatedInBytes', props);
    return resource.getResponseField('WorkingStorageAllocatedInBytes') as unknown as number;
  }

}

export class StorageGatewayResponsesDetachVolume {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDetachVolumeInput) {
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
          VolumeARN: this.__input.volumeArn,
          ForceDetach: this.__input.forceDetach,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetachVolume.VolumeARN', props);
    return resource.getResponseField('VolumeARN') as unknown as string;
  }

}

export class StorageGatewayResponsesDisableGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDisableGatewayInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisableGateway.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesDisassociateFileSystem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayDisassociateFileSystemInput) {
  }

  public get fileSystemAssociationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFileSystem',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.DisassociateFileSystem.FileSystemAssociationARN'),
        outputPath: 'FileSystemAssociationARN',
        parameters: {
          FileSystemAssociationARN: this.__input.fileSystemAssociationArn,
          ForceDelete: this.__input.forceDelete,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateFileSystem.FileSystemAssociationARN', props);
    return resource.getResponseField('FileSystemAssociationARN') as unknown as string;
  }

}

export class StorageGatewayResponsesJoinDomain {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayJoinDomainInput) {
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
          GatewayARN: this.__input.gatewayArn,
          DomainName: this.__input.domainName,
          OrganizationalUnit: this.__input.organizationalUnit,
          DomainControllers: this.__input.domainControllers,
          TimeoutInSeconds: this.__input.timeoutInSeconds,
          UserName: this.__input.userName,
          Password: this.__input.password,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'JoinDomain.GatewayARN', props);
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
          GatewayARN: this.__input.gatewayArn,
          DomainName: this.__input.domainName,
          OrganizationalUnit: this.__input.organizationalUnit,
          DomainControllers: this.__input.domainControllers,
          TimeoutInSeconds: this.__input.timeoutInSeconds,
          UserName: this.__input.userName,
          Password: this.__input.password,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'JoinDomain.ActiveDirectoryStatus', props);
    return resource.getResponseField('ActiveDirectoryStatus') as unknown as string;
  }

}

export class StorageGatewayResponsesListAutomaticTapeCreationPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayListAutomaticTapeCreationPoliciesInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAutomaticTapeCreationPolicies.AutomaticTapeCreationPolicyInfos', props);
    return resource.getResponseField('AutomaticTapeCreationPolicyInfos') as unknown as shapes.StorageGatewayAutomaticTapeCreationPolicyInfo[];
  }

}

export class StorageGatewayResponsesListFileShares {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayListFileSharesInput) {
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
          GatewayARN: this.__input.gatewayArn,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFileShares.Marker', props);
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
          GatewayARN: this.__input.gatewayArn,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFileShares.NextMarker', props);
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
          GatewayARN: this.__input.gatewayArn,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFileShares.FileShareInfoList', props);
    return resource.getResponseField('FileShareInfoList') as unknown as shapes.StorageGatewayFileShareInfo[];
  }

}

export class StorageGatewayResponsesListFileSystemAssociations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayListFileSystemAssociationsInput) {
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFileSystemAssociations',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListFileSystemAssociations.Marker'),
        outputPath: 'Marker',
        parameters: {
          GatewayARN: this.__input.gatewayArn,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFileSystemAssociations.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get nextMarker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFileSystemAssociations',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListFileSystemAssociations.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          GatewayARN: this.__input.gatewayArn,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFileSystemAssociations.NextMarker', props);
    return resource.getResponseField('NextMarker') as unknown as string;
  }

  public get fileSystemAssociationSummaryList(): shapes.StorageGatewayFileSystemAssociationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFileSystemAssociations',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.ListFileSystemAssociations.FileSystemAssociationSummaryList'),
        outputPath: 'FileSystemAssociationSummaryList',
        parameters: {
          GatewayARN: this.__input.gatewayArn,
          Limit: this.__input.limit,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFileSystemAssociations.FileSystemAssociationSummaryList', props);
    return resource.getResponseField('FileSystemAssociationSummaryList') as unknown as shapes.StorageGatewayFileSystemAssociationSummary[];
  }

}

export class StorageGatewayResponsesListGateways {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayListGatewaysInput) {
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
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGateways.Gateways', props);
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
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGateways.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class StorageGatewayResponsesListLocalDisks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayListLocalDisksInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLocalDisks.GatewayARN', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLocalDisks.Disks', props);
    return resource.getResponseField('Disks') as unknown as shapes.StorageGatewayDisk[];
  }

}

export class StorageGatewayResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayListTagsForResourceInput) {
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
          ResourceARN: this.__input.resourceArn,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.ResourceARN', props);
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
          ResourceARN: this.__input.resourceArn,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Marker', props);
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
          ResourceARN: this.__input.resourceArn,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.StorageGatewayTag[];
  }

}

export class StorageGatewayResponsesListTapePools {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayListTapePoolsInput) {
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
          PoolARNs: this.__input.poolArNs,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTapePools.PoolInfos', props);
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
          PoolARNs: this.__input.poolArNs,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTapePools.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class StorageGatewayResponsesListTapes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayListTapesInput) {
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
          TapeARNs: this.__input.tapeArNs,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTapes.TapeInfos', props);
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
          TapeARNs: this.__input.tapeArNs,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTapes.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class StorageGatewayResponsesListVolumeInitiators {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayListVolumeInitiatorsInput) {
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
          VolumeARN: this.__input.volumeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVolumeInitiators.Initiators', props);
    return resource.getResponseField('Initiators') as unknown as string[];
  }

}

export class StorageGatewayResponsesListVolumeRecoveryPoints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayListVolumeRecoveryPointsInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVolumeRecoveryPoints.GatewayARN', props);
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVolumeRecoveryPoints.VolumeRecoveryPointInfos', props);
    return resource.getResponseField('VolumeRecoveryPointInfos') as unknown as shapes.StorageGatewayVolumeRecoveryPointInfo[];
  }

}

export class StorageGatewayResponsesListVolumes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayListVolumesInput) {
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
          GatewayARN: this.__input.gatewayArn,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVolumes.GatewayARN', props);
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
          GatewayARN: this.__input.gatewayArn,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVolumes.Marker', props);
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
          GatewayARN: this.__input.gatewayArn,
          Marker: this.__input.marker,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVolumes.VolumeInfos', props);
    return resource.getResponseField('VolumeInfos') as unknown as shapes.StorageGatewayVolumeInfo[];
  }

}

export class StorageGatewayResponsesNotifyWhenUploaded {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayNotifyWhenUploadedInput) {
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
          FileShareARN: this.__input.fileShareArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'NotifyWhenUploaded.FileShareARN', props);
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
          FileShareARN: this.__input.fileShareArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'NotifyWhenUploaded.NotificationId', props);
    return resource.getResponseField('NotificationId') as unknown as string;
  }

}

export class StorageGatewayResponsesRefreshCache {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayRefreshCacheInput) {
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
          FileShareARN: this.__input.fileShareArn,
          FolderList: this.__input.folderList,
          Recursive: this.__input.recursive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RefreshCache.FileShareARN', props);
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
          FileShareARN: this.__input.fileShareArn,
          FolderList: this.__input.folderList,
          Recursive: this.__input.recursive,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RefreshCache.NotificationId', props);
    return resource.getResponseField('NotificationId') as unknown as string;
  }

}

export class StorageGatewayResponsesRemoveTagsFromResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayRemoveTagsFromResourceInput) {
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
          ResourceARN: this.__input.resourceArn,
          TagKeys: this.__input.tagKeys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveTagsFromResource.ResourceARN', props);
    return resource.getResponseField('ResourceARN') as unknown as string;
  }

}

export class StorageGatewayResponsesResetCache {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayResetCacheInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetCache.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesRetrieveTapeArchive {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayRetrieveTapeArchiveInput) {
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
          TapeARN: this.__input.tapeArn,
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetrieveTapeArchive.TapeARN', props);
    return resource.getResponseField('TapeARN') as unknown as string;
  }

}

export class StorageGatewayResponsesRetrieveTapeRecoveryPoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayRetrieveTapeRecoveryPointInput) {
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
          TapeARN: this.__input.tapeArn,
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RetrieveTapeRecoveryPoint.TapeARN', props);
    return resource.getResponseField('TapeARN') as unknown as string;
  }

}

export class StorageGatewayResponsesPutLocalConsolePassword {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewaySetLocalConsolePasswordInput) {
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
          GatewayARN: this.__input.gatewayArn,
          LocalConsolePassword: this.__input.localConsolePassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetLocalConsolePassword.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesPutSmbGuestPassword {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewaySetSmbGuestPasswordInput) {
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
          GatewayARN: this.__input.gatewayArn,
          Password: this.__input.password,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetSMBGuestPassword.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesShutdownGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayShutdownGatewayInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ShutdownGateway.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesStartAvailabilityMonitorTest {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayStartAvailabilityMonitorTestInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartAvailabilityMonitorTest.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesStartGateway {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayStartGatewayInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartGateway.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesUpdateAutomaticTapeCreationPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayUpdateAutomaticTapeCreationPolicyInput) {
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
          AutomaticTapeCreationRules: this.__input.automaticTapeCreationRules,
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAutomaticTapeCreationPolicy.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesUpdateBandwidthRateLimit {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayUpdateBandwidthRateLimitInput) {
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
          GatewayARN: this.__input.gatewayArn,
          AverageUploadRateLimitInBitsPerSec: this.__input.averageUploadRateLimitInBitsPerSec,
          AverageDownloadRateLimitInBitsPerSec: this.__input.averageDownloadRateLimitInBitsPerSec,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBandwidthRateLimit.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesUpdateBandwidthRateLimitSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayUpdateBandwidthRateLimitScheduleInput) {
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
          GatewayARN: this.__input.gatewayArn,
          BandwidthRateLimitIntervals: this.__input.bandwidthRateLimitIntervals,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBandwidthRateLimitSchedule.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesUpdateChapCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayUpdateChapCredentialsInput) {
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
          TargetARN: this.__input.targetArn,
          SecretToAuthenticateInitiator: this.__input.secretToAuthenticateInitiator,
          InitiatorName: this.__input.initiatorName,
          SecretToAuthenticateTarget: this.__input.secretToAuthenticateTarget,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChapCredentials.TargetARN', props);
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
          TargetARN: this.__input.targetArn,
          SecretToAuthenticateInitiator: this.__input.secretToAuthenticateInitiator,
          InitiatorName: this.__input.initiatorName,
          SecretToAuthenticateTarget: this.__input.secretToAuthenticateTarget,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateChapCredentials.InitiatorName', props);
    return resource.getResponseField('InitiatorName') as unknown as string;
  }

}

export class StorageGatewayResponsesUpdateFileSystemAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayUpdateFileSystemAssociationInput) {
  }

  public get fileSystemAssociationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFileSystemAssociation',
        service: 'StorageGateway',
        physicalResourceId: cr.PhysicalResourceId.of('StorageGateway.UpdateFileSystemAssociation.FileSystemAssociationARN'),
        outputPath: 'FileSystemAssociationARN',
        parameters: {
          FileSystemAssociationARN: this.__input.fileSystemAssociationArn,
          UserName: this.__input.userName,
          Password: this.__input.password,
          AuditDestinationARN: this.__input.auditDestinationArn,
          CacheAttributes: {
            CacheStaleTimeoutInSeconds: this.__input.cacheAttributes?.cacheStaleTimeoutInSeconds,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFileSystemAssociation.FileSystemAssociationARN', props);
    return resource.getResponseField('FileSystemAssociationARN') as unknown as string;
  }

}

export class StorageGatewayResponsesUpdateGatewayInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayUpdateGatewayInformationInput) {
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
          GatewayARN: this.__input.gatewayArn,
          GatewayName: this.__input.gatewayName,
          GatewayTimezone: this.__input.gatewayTimezone,
          CloudWatchLogGroupARN: this.__input.cloudWatchLogGroupArn,
          GatewayCapacity: this.__input.gatewayCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGatewayInformation.GatewayARN', props);
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
          GatewayARN: this.__input.gatewayArn,
          GatewayName: this.__input.gatewayName,
          GatewayTimezone: this.__input.gatewayTimezone,
          CloudWatchLogGroupARN: this.__input.cloudWatchLogGroupArn,
          GatewayCapacity: this.__input.gatewayCapacity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGatewayInformation.GatewayName', props);
    return resource.getResponseField('GatewayName') as unknown as string;
  }

}

export class StorageGatewayResponsesUpdateGatewaySoftwareNow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayUpdateGatewaySoftwareNowInput) {
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
          GatewayARN: this.__input.gatewayArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGatewaySoftwareNow.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesUpdateMaintenanceStartTime {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayUpdateMaintenanceStartTimeInput) {
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
          GatewayARN: this.__input.gatewayArn,
          HourOfDay: this.__input.hourOfDay,
          MinuteOfHour: this.__input.minuteOfHour,
          DayOfWeek: this.__input.dayOfWeek,
          DayOfMonth: this.__input.dayOfMonth,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceStartTime.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesUpdateNfsFileShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayUpdateNfsFileShareInput) {
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
          FileShareARN: this.__input.fileShareArn,
          KMSEncrypted: this.__input.kmsEncrypted,
          KMSKey: this.__input.kmsKey,
          NFSFileShareDefaults: {
            FileMode: this.__input.nfsFileShareDefaults?.fileMode,
            DirectoryMode: this.__input.nfsFileShareDefaults?.directoryMode,
            GroupId: this.__input.nfsFileShareDefaults?.groupId,
            OwnerId: this.__input.nfsFileShareDefaults?.ownerId,
          },
          DefaultStorageClass: this.__input.defaultStorageClass,
          ObjectACL: this.__input.objectAcl,
          ClientList: this.__input.clientList,
          Squash: this.__input.squash,
          ReadOnly: this.__input.readOnly,
          GuessMIMETypeEnabled: this.__input.guessMimeTypeEnabled,
          RequesterPays: this.__input.requesterPays,
          FileShareName: this.__input.fileShareName,
          CacheAttributes: {
            CacheStaleTimeoutInSeconds: this.__input.cacheAttributes?.cacheStaleTimeoutInSeconds,
          },
          NotificationPolicy: this.__input.notificationPolicy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNFSFileShare.FileShareARN', props);
    return resource.getResponseField('FileShareARN') as unknown as string;
  }

}

export class StorageGatewayResponsesUpdateSmbFileShare {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayUpdateSmbFileShareInput) {
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
          FileShareARN: this.__input.fileShareArn,
          KMSEncrypted: this.__input.kmsEncrypted,
          KMSKey: this.__input.kmsKey,
          DefaultStorageClass: this.__input.defaultStorageClass,
          ObjectACL: this.__input.objectAcl,
          ReadOnly: this.__input.readOnly,
          GuessMIMETypeEnabled: this.__input.guessMimeTypeEnabled,
          RequesterPays: this.__input.requesterPays,
          SMBACLEnabled: this.__input.smbaclEnabled,
          AccessBasedEnumeration: this.__input.accessBasedEnumeration,
          AdminUserList: this.__input.adminUserList,
          ValidUserList: this.__input.validUserList,
          InvalidUserList: this.__input.invalidUserList,
          AuditDestinationARN: this.__input.auditDestinationArn,
          CaseSensitivity: this.__input.caseSensitivity,
          FileShareName: this.__input.fileShareName,
          CacheAttributes: {
            CacheStaleTimeoutInSeconds: this.__input.cacheAttributes?.cacheStaleTimeoutInSeconds,
          },
          NotificationPolicy: this.__input.notificationPolicy,
          OplocksEnabled: this.__input.oplocksEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSMBFileShare.FileShareARN', props);
    return resource.getResponseField('FileShareARN') as unknown as string;
  }

}

export class StorageGatewayResponsesUpdateSmbFileShareVisibility {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayUpdateSmbFileShareVisibilityInput) {
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
          GatewayARN: this.__input.gatewayArn,
          FileSharesVisible: this.__input.fileSharesVisible,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSMBFileShareVisibility.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesUpdateSmbSecurityStrategy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayUpdateSmbSecurityStrategyInput) {
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
          GatewayARN: this.__input.gatewayArn,
          SMBSecurityStrategy: this.__input.smbSecurityStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSMBSecurityStrategy.GatewayARN', props);
    return resource.getResponseField('GatewayARN') as unknown as string;
  }

}

export class StorageGatewayResponsesUpdateSnapshotSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayUpdateSnapshotScheduleInput) {
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
          VolumeARN: this.__input.volumeArn,
          StartAt: this.__input.startAt,
          RecurrenceInHours: this.__input.recurrenceInHours,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSnapshotSchedule.VolumeARN', props);
    return resource.getResponseField('VolumeARN') as unknown as string;
  }

}

export class StorageGatewayResponsesUpdateVtlDeviceType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.StorageGatewayUpdateVtlDeviceTypeInput) {
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
          VTLDeviceARN: this.__input.vtlDeviceArn,
          DeviceType: this.__input.deviceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateVTLDeviceType.VTLDeviceARN', props);
    return resource.getResponseField('VTLDeviceARN') as unknown as string;
  }

}

