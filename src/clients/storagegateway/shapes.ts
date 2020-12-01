/**
 * @schema ActivateGatewayInput
 */
export interface ActivateGatewayInput {
  /**
   * @schema ActivateGatewayInput#ActivationKey
   */
  readonly activationKey: string;

  /**
   * @schema ActivateGatewayInput#GatewayName
   */
  readonly gatewayName: string;

  /**
   * @schema ActivateGatewayInput#GatewayTimezone
   */
  readonly gatewayTimezone: string;

  /**
   * @schema ActivateGatewayInput#GatewayRegion
   */
  readonly gatewayRegion: string;

  /**
   * @schema ActivateGatewayInput#GatewayType
   */
  readonly gatewayType?: string;

  /**
   * @schema ActivateGatewayInput#TapeDriveType
   */
  readonly tapeDriveType?: string;

  /**
   * @schema ActivateGatewayInput#MediumChangerType
   */
  readonly mediumChangerType?: string;

  /**
   * @schema ActivateGatewayInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ActivateGatewayOutput
 */
export interface ActivateGatewayOutput {
  /**
   * @schema ActivateGatewayOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema AddCacheInput
 */
export interface AddCacheInput {
  /**
   * @schema AddCacheInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema AddCacheInput#DiskIds
   */
  readonly diskIds: string[];

}

/**
 * @schema AddCacheOutput
 */
export interface AddCacheOutput {
  /**
   * @schema AddCacheOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema AddTagsToResourceInput
 */
export interface AddTagsToResourceInput {
  /**
   * @schema AddTagsToResourceInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema AddTagsToResourceInput#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema AddTagsToResourceOutput
 */
export interface AddTagsToResourceOutput {
  /**
   * @schema AddTagsToResourceOutput#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * @schema AddUploadBufferInput
 */
export interface AddUploadBufferInput {
  /**
   * @schema AddUploadBufferInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema AddUploadBufferInput#DiskIds
   */
  readonly diskIds: string[];

}

/**
 * @schema AddUploadBufferOutput
 */
export interface AddUploadBufferOutput {
  /**
   * @schema AddUploadBufferOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema AddWorkingStorageInput
 */
export interface AddWorkingStorageInput {
  /**
   * @schema AddWorkingStorageInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema AddWorkingStorageInput#DiskIds
   */
  readonly diskIds: string[];

}

/**
 * @schema AddWorkingStorageOutput
 */
export interface AddWorkingStorageOutput {
  /**
   * @schema AddWorkingStorageOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema AssignTapePoolInput
 */
export interface AssignTapePoolInput {
  /**
   * @schema AssignTapePoolInput#TapeARN
   */
  readonly tapeArn: string;

  /**
   * @schema AssignTapePoolInput#PoolId
   */
  readonly poolId: string;

  /**
   * @schema AssignTapePoolInput#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

}

/**
 * @schema AssignTapePoolOutput
 */
export interface AssignTapePoolOutput {
  /**
   * @schema AssignTapePoolOutput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * @schema AttachVolumeInput
 */
export interface AttachVolumeInput {
  /**
   * @schema AttachVolumeInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema AttachVolumeInput#TargetName
   */
  readonly targetName?: string;

  /**
   * @schema AttachVolumeInput#VolumeARN
   */
  readonly volumeArn: string;

  /**
   * @schema AttachVolumeInput#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema AttachVolumeInput#DiskId
   */
  readonly diskId?: string;

}

/**
 * @schema AttachVolumeOutput
 */
export interface AttachVolumeOutput {
  /**
   * @schema AttachVolumeOutput#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema AttachVolumeOutput#TargetARN
   */
  readonly targetArn?: string;

}

/**
 * @schema CancelArchivalInput
 */
export interface CancelArchivalInput {
  /**
   * @schema CancelArchivalInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema CancelArchivalInput#TapeARN
   */
  readonly tapeArn: string;

}

/**
 * @schema CancelArchivalOutput
 */
export interface CancelArchivalOutput {
  /**
   * @schema CancelArchivalOutput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * @schema CancelRetrievalInput
 */
export interface CancelRetrievalInput {
  /**
   * @schema CancelRetrievalInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema CancelRetrievalInput#TapeARN
   */
  readonly tapeArn: string;

}

/**
 * @schema CancelRetrievalOutput
 */
export interface CancelRetrievalOutput {
  /**
   * @schema CancelRetrievalOutput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * @schema CreateCachediScsiVolumeInput
 */
export interface CreateCachediScsiVolumeInput {
  /**
   * @schema CreateCachediScsiVolumeInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema CreateCachediScsiVolumeInput#VolumeSizeInBytes
   */
  readonly volumeSizeInBytes: number;

  /**
   * @schema CreateCachediScsiVolumeInput#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema CreateCachediScsiVolumeInput#TargetName
   */
  readonly targetName: string;

  /**
   * @schema CreateCachediScsiVolumeInput#SourceVolumeARN
   */
  readonly sourceVolumeArn?: string;

  /**
   * @schema CreateCachediScsiVolumeInput#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema CreateCachediScsiVolumeInput#ClientToken
   */
  readonly clientToken: string;

  /**
   * @schema CreateCachediScsiVolumeInput#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema CreateCachediScsiVolumeInput#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema CreateCachediScsiVolumeInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateCachediScsiVolumeOutput
 */
export interface CreateCachediScsiVolumeOutput {
  /**
   * @schema CreateCachediScsiVolumeOutput#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema CreateCachediScsiVolumeOutput#TargetARN
   */
  readonly targetArn?: string;

}

/**
 * @schema CreateNfsFileShareInput
 */
export interface CreateNfsFileShareInput {
  /**
   * @schema CreateNfsFileShareInput#ClientToken
   */
  readonly clientToken: string;

  /**
   * @schema CreateNfsFileShareInput#NFSFileShareDefaults
   */
  readonly nfsFileShareDefaults?: NfsFileShareDefaults;

  /**
   * @schema CreateNfsFileShareInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema CreateNfsFileShareInput#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema CreateNfsFileShareInput#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema CreateNfsFileShareInput#Role
   */
  readonly role: string;

  /**
   * @schema CreateNfsFileShareInput#LocationARN
   */
  readonly locationArn: string;

  /**
   * @schema CreateNfsFileShareInput#DefaultStorageClass
   */
  readonly defaultStorageClass?: string;

  /**
   * @schema CreateNfsFileShareInput#ObjectACL
   */
  readonly objectAcl?: string;

  /**
   * @schema CreateNfsFileShareInput#ClientList
   */
  readonly clientList?: string[];

  /**
   * @schema CreateNfsFileShareInput#Squash
   */
  readonly squash?: string;

  /**
   * @schema CreateNfsFileShareInput#ReadOnly
   */
  readonly readOnly?: boolean;

  /**
   * @schema CreateNfsFileShareInput#GuessMIMETypeEnabled
   */
  readonly guessMimeTypeEnabled?: boolean;

  /**
   * @schema CreateNfsFileShareInput#RequesterPays
   */
  readonly requesterPays?: boolean;

  /**
   * @schema CreateNfsFileShareInput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateNfsFileShareInput#FileShareName
   */
  readonly fileShareName?: string;

  /**
   * @schema CreateNfsFileShareInput#CacheAttributes
   */
  readonly cacheAttributes?: CacheAttributes;

  /**
   * @schema CreateNfsFileShareInput#NotificationPolicy
   */
  readonly notificationPolicy?: string;

}

/**
 * @schema CreateNfsFileShareOutput
 */
export interface CreateNfsFileShareOutput {
  /**
   * @schema CreateNfsFileShareOutput#FileShareARN
   */
  readonly fileShareArn?: string;

}

/**
 * @schema CreateSmbFileShareInput
 */
export interface CreateSmbFileShareInput {
  /**
   * @schema CreateSmbFileShareInput#ClientToken
   */
  readonly clientToken: string;

  /**
   * @schema CreateSmbFileShareInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema CreateSmbFileShareInput#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema CreateSmbFileShareInput#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema CreateSmbFileShareInput#Role
   */
  readonly role: string;

  /**
   * @schema CreateSmbFileShareInput#LocationARN
   */
  readonly locationArn: string;

  /**
   * @schema CreateSmbFileShareInput#DefaultStorageClass
   */
  readonly defaultStorageClass?: string;

  /**
   * @schema CreateSmbFileShareInput#ObjectACL
   */
  readonly objectAcl?: string;

  /**
   * @schema CreateSmbFileShareInput#ReadOnly
   */
  readonly readOnly?: boolean;

  /**
   * @schema CreateSmbFileShareInput#GuessMIMETypeEnabled
   */
  readonly guessMimeTypeEnabled?: boolean;

  /**
   * @schema CreateSmbFileShareInput#RequesterPays
   */
  readonly requesterPays?: boolean;

  /**
   * @schema CreateSmbFileShareInput#SMBACLEnabled
   */
  readonly smbaclEnabled?: boolean;

  /**
   * @schema CreateSmbFileShareInput#AccessBasedEnumeration
   */
  readonly accessBasedEnumeration?: boolean;

  /**
   * @schema CreateSmbFileShareInput#AdminUserList
   */
  readonly adminUserList?: string[];

  /**
   * @schema CreateSmbFileShareInput#ValidUserList
   */
  readonly validUserList?: string[];

  /**
   * @schema CreateSmbFileShareInput#InvalidUserList
   */
  readonly invalidUserList?: string[];

  /**
   * @schema CreateSmbFileShareInput#AuditDestinationARN
   */
  readonly auditDestinationArn?: string;

  /**
   * @schema CreateSmbFileShareInput#Authentication
   */
  readonly authentication?: string;

  /**
   * @schema CreateSmbFileShareInput#CaseSensitivity
   */
  readonly caseSensitivity?: string;

  /**
   * @schema CreateSmbFileShareInput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateSmbFileShareInput#FileShareName
   */
  readonly fileShareName?: string;

  /**
   * @schema CreateSmbFileShareInput#CacheAttributes
   */
  readonly cacheAttributes?: CacheAttributes;

  /**
   * @schema CreateSmbFileShareInput#NotificationPolicy
   */
  readonly notificationPolicy?: string;

}

/**
 * @schema CreateSmbFileShareOutput
 */
export interface CreateSmbFileShareOutput {
  /**
   * @schema CreateSmbFileShareOutput#FileShareARN
   */
  readonly fileShareArn?: string;

}

/**
 * @schema CreateSnapshotInput
 */
export interface CreateSnapshotInput {
  /**
   * @schema CreateSnapshotInput#VolumeARN
   */
  readonly volumeArn: string;

  /**
   * @schema CreateSnapshotInput#SnapshotDescription
   */
  readonly snapshotDescription: string;

  /**
   * @schema CreateSnapshotInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateSnapshotOutput
 */
export interface CreateSnapshotOutput {
  /**
   * @schema CreateSnapshotOutput#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema CreateSnapshotOutput#SnapshotId
   */
  readonly snapshotId?: string;

}

/**
 * @schema CreateSnapshotFromVolumeRecoveryPointInput
 */
export interface CreateSnapshotFromVolumeRecoveryPointInput {
  /**
   * @schema CreateSnapshotFromVolumeRecoveryPointInput#VolumeARN
   */
  readonly volumeArn: string;

  /**
   * @schema CreateSnapshotFromVolumeRecoveryPointInput#SnapshotDescription
   */
  readonly snapshotDescription: string;

  /**
   * @schema CreateSnapshotFromVolumeRecoveryPointInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateSnapshotFromVolumeRecoveryPointOutput
 */
export interface CreateSnapshotFromVolumeRecoveryPointOutput {
  /**
   * @schema CreateSnapshotFromVolumeRecoveryPointOutput#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema CreateSnapshotFromVolumeRecoveryPointOutput#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema CreateSnapshotFromVolumeRecoveryPointOutput#VolumeRecoveryPointTime
   */
  readonly volumeRecoveryPointTime?: string;

}

/**
 * @schema CreateStorediScsiVolumeInput
 */
export interface CreateStorediScsiVolumeInput {
  /**
   * @schema CreateStorediScsiVolumeInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema CreateStorediScsiVolumeInput#DiskId
   */
  readonly diskId: string;

  /**
   * @schema CreateStorediScsiVolumeInput#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema CreateStorediScsiVolumeInput#PreserveExistingData
   */
  readonly preserveExistingData: boolean;

  /**
   * @schema CreateStorediScsiVolumeInput#TargetName
   */
  readonly targetName: string;

  /**
   * @schema CreateStorediScsiVolumeInput#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema CreateStorediScsiVolumeInput#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema CreateStorediScsiVolumeInput#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema CreateStorediScsiVolumeInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateStorediScsiVolumeOutput
 */
export interface CreateStorediScsiVolumeOutput {
  /**
   * @schema CreateStorediScsiVolumeOutput#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema CreateStorediScsiVolumeOutput#VolumeSizeInBytes
   */
  readonly volumeSizeInBytes?: number;

  /**
   * @schema CreateStorediScsiVolumeOutput#TargetARN
   */
  readonly targetArn?: string;

}

/**
 * @schema CreateTapePoolInput
 */
export interface CreateTapePoolInput {
  /**
   * @schema CreateTapePoolInput#PoolName
   */
  readonly poolName: string;

  /**
   * @schema CreateTapePoolInput#StorageClass
   */
  readonly storageClass: string;

  /**
   * @schema CreateTapePoolInput#RetentionLockType
   */
  readonly retentionLockType?: string;

  /**
   * @schema CreateTapePoolInput#RetentionLockTimeInDays
   */
  readonly retentionLockTimeInDays?: number;

  /**
   * @schema CreateTapePoolInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateTapePoolOutput
 */
export interface CreateTapePoolOutput {
  /**
   * @schema CreateTapePoolOutput#PoolARN
   */
  readonly poolArn?: string;

}

/**
 * @schema CreateTapeWithBarcodeInput
 */
export interface CreateTapeWithBarcodeInput {
  /**
   * @schema CreateTapeWithBarcodeInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema CreateTapeWithBarcodeInput#TapeSizeInBytes
   */
  readonly tapeSizeInBytes: number;

  /**
   * @schema CreateTapeWithBarcodeInput#TapeBarcode
   */
  readonly tapeBarcode: string;

  /**
   * @schema CreateTapeWithBarcodeInput#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema CreateTapeWithBarcodeInput#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema CreateTapeWithBarcodeInput#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema CreateTapeWithBarcodeInput#Worm
   */
  readonly worm?: boolean;

  /**
   * @schema CreateTapeWithBarcodeInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateTapeWithBarcodeOutput
 */
export interface CreateTapeWithBarcodeOutput {
  /**
   * @schema CreateTapeWithBarcodeOutput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * @schema CreateTapesInput
 */
export interface CreateTapesInput {
  /**
   * @schema CreateTapesInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema CreateTapesInput#TapeSizeInBytes
   */
  readonly tapeSizeInBytes: number;

  /**
   * @schema CreateTapesInput#ClientToken
   */
  readonly clientToken: string;

  /**
   * @schema CreateTapesInput#NumTapesToCreate
   */
  readonly numTapesToCreate: number;

  /**
   * @schema CreateTapesInput#TapeBarcodePrefix
   */
  readonly tapeBarcodePrefix: string;

  /**
   * @schema CreateTapesInput#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema CreateTapesInput#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema CreateTapesInput#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema CreateTapesInput#Worm
   */
  readonly worm?: boolean;

  /**
   * @schema CreateTapesInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateTapesOutput
 */
export interface CreateTapesOutput {
  /**
   * @schema CreateTapesOutput#TapeARNs
   */
  readonly tapeArNs?: string[];

}

/**
 * @schema DeleteAutomaticTapeCreationPolicyInput
 */
export interface DeleteAutomaticTapeCreationPolicyInput {
  /**
   * @schema DeleteAutomaticTapeCreationPolicyInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema DeleteAutomaticTapeCreationPolicyOutput
 */
export interface DeleteAutomaticTapeCreationPolicyOutput {
  /**
   * @schema DeleteAutomaticTapeCreationPolicyOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema DeleteBandwidthRateLimitInput
 */
export interface DeleteBandwidthRateLimitInput {
  /**
   * @schema DeleteBandwidthRateLimitInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema DeleteBandwidthRateLimitInput#BandwidthType
   */
  readonly bandwidthType: string;

}

/**
 * @schema DeleteBandwidthRateLimitOutput
 */
export interface DeleteBandwidthRateLimitOutput {
  /**
   * @schema DeleteBandwidthRateLimitOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema DeleteChapCredentialsInput
 */
export interface DeleteChapCredentialsInput {
  /**
   * @schema DeleteChapCredentialsInput#TargetARN
   */
  readonly targetArn: string;

  /**
   * @schema DeleteChapCredentialsInput#InitiatorName
   */
  readonly initiatorName: string;

}

/**
 * @schema DeleteChapCredentialsOutput
 */
export interface DeleteChapCredentialsOutput {
  /**
   * @schema DeleteChapCredentialsOutput#TargetARN
   */
  readonly targetArn?: string;

  /**
   * @schema DeleteChapCredentialsOutput#InitiatorName
   */
  readonly initiatorName?: string;

}

/**
 * @schema DeleteFileShareInput
 */
export interface DeleteFileShareInput {
  /**
   * @schema DeleteFileShareInput#FileShareARN
   */
  readonly fileShareArn: string;

  /**
   * @schema DeleteFileShareInput#ForceDelete
   */
  readonly forceDelete?: boolean;

}

/**
 * @schema DeleteFileShareOutput
 */
export interface DeleteFileShareOutput {
  /**
   * @schema DeleteFileShareOutput#FileShareARN
   */
  readonly fileShareArn?: string;

}

/**
 * @schema DeleteGatewayInput
 */
export interface DeleteGatewayInput {
  /**
   * @schema DeleteGatewayInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema DeleteGatewayOutput
 */
export interface DeleteGatewayOutput {
  /**
   * @schema DeleteGatewayOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema DeleteSnapshotScheduleInput
 */
export interface DeleteSnapshotScheduleInput {
  /**
   * @schema DeleteSnapshotScheduleInput#VolumeARN
   */
  readonly volumeArn: string;

}

/**
 * @schema DeleteSnapshotScheduleOutput
 */
export interface DeleteSnapshotScheduleOutput {
  /**
   * @schema DeleteSnapshotScheduleOutput#VolumeARN
   */
  readonly volumeArn?: string;

}

/**
 * @schema DeleteTapeInput
 */
export interface DeleteTapeInput {
  /**
   * @schema DeleteTapeInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema DeleteTapeInput#TapeARN
   */
  readonly tapeArn: string;

  /**
   * @schema DeleteTapeInput#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

}

/**
 * @schema DeleteTapeOutput
 */
export interface DeleteTapeOutput {
  /**
   * @schema DeleteTapeOutput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * @schema DeleteTapeArchiveInput
 */
export interface DeleteTapeArchiveInput {
  /**
   * @schema DeleteTapeArchiveInput#TapeARN
   */
  readonly tapeArn: string;

  /**
   * @schema DeleteTapeArchiveInput#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

}

/**
 * @schema DeleteTapeArchiveOutput
 */
export interface DeleteTapeArchiveOutput {
  /**
   * @schema DeleteTapeArchiveOutput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * @schema DeleteTapePoolInput
 */
export interface DeleteTapePoolInput {
  /**
   * @schema DeleteTapePoolInput#PoolARN
   */
  readonly poolArn: string;

}

/**
 * @schema DeleteTapePoolOutput
 */
export interface DeleteTapePoolOutput {
  /**
   * @schema DeleteTapePoolOutput#PoolARN
   */
  readonly poolArn?: string;

}

/**
 * @schema DeleteVolumeInput
 */
export interface DeleteVolumeInput {
  /**
   * @schema DeleteVolumeInput#VolumeARN
   */
  readonly volumeArn: string;

}

/**
 * @schema DeleteVolumeOutput
 */
export interface DeleteVolumeOutput {
  /**
   * @schema DeleteVolumeOutput#VolumeARN
   */
  readonly volumeArn?: string;

}

/**
 * @schema DescribeAvailabilityMonitorTestInput
 */
export interface DescribeAvailabilityMonitorTestInput {
  /**
   * @schema DescribeAvailabilityMonitorTestInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema DescribeAvailabilityMonitorTestOutput
 */
export interface DescribeAvailabilityMonitorTestOutput {
  /**
   * @schema DescribeAvailabilityMonitorTestOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema DescribeAvailabilityMonitorTestOutput#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeAvailabilityMonitorTestOutput#StartTime
   */
  readonly startTime?: string;

}

/**
 * @schema DescribeBandwidthRateLimitInput
 */
export interface DescribeBandwidthRateLimitInput {
  /**
   * @schema DescribeBandwidthRateLimitInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema DescribeBandwidthRateLimitOutput
 */
export interface DescribeBandwidthRateLimitOutput {
  /**
   * @schema DescribeBandwidthRateLimitOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema DescribeBandwidthRateLimitOutput#AverageUploadRateLimitInBitsPerSec
   */
  readonly averageUploadRateLimitInBitsPerSec?: number;

  /**
   * @schema DescribeBandwidthRateLimitOutput#AverageDownloadRateLimitInBitsPerSec
   */
  readonly averageDownloadRateLimitInBitsPerSec?: number;

}

/**
 * @schema DescribeBandwidthRateLimitScheduleInput
 */
export interface DescribeBandwidthRateLimitScheduleInput {
  /**
   * @schema DescribeBandwidthRateLimitScheduleInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema DescribeBandwidthRateLimitScheduleOutput
 */
export interface DescribeBandwidthRateLimitScheduleOutput {
  /**
   * @schema DescribeBandwidthRateLimitScheduleOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema DescribeBandwidthRateLimitScheduleOutput#BandwidthRateLimitIntervals
   */
  readonly bandwidthRateLimitIntervals?: BandwidthRateLimitInterval[];

}

/**
 * @schema DescribeCacheInput
 */
export interface DescribeCacheInput {
  /**
   * @schema DescribeCacheInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema DescribeCacheOutput
 */
export interface DescribeCacheOutput {
  /**
   * @schema DescribeCacheOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema DescribeCacheOutput#DiskIds
   */
  readonly diskIds?: string[];

  /**
   * @schema DescribeCacheOutput#CacheAllocatedInBytes
   */
  readonly cacheAllocatedInBytes?: number;

  /**
   * @schema DescribeCacheOutput#CacheUsedPercentage
   */
  readonly cacheUsedPercentage?: number;

  /**
   * @schema DescribeCacheOutput#CacheDirtyPercentage
   */
  readonly cacheDirtyPercentage?: number;

  /**
   * @schema DescribeCacheOutput#CacheHitPercentage
   */
  readonly cacheHitPercentage?: number;

  /**
   * @schema DescribeCacheOutput#CacheMissPercentage
   */
  readonly cacheMissPercentage?: number;

}

/**
 * @schema DescribeCachediScsiVolumesInput
 */
export interface DescribeCachediScsiVolumesInput {
  /**
   * @schema DescribeCachediScsiVolumesInput#VolumeARNs
   */
  readonly volumeArNs: string[];

}

/**
 * @schema DescribeCachediScsiVolumesOutput
 */
export interface DescribeCachediScsiVolumesOutput {
  /**
   * @schema DescribeCachediScsiVolumesOutput#CachediSCSIVolumes
   */
  readonly cachediScsiVolumes?: CachediScsiVolume[];

}

/**
 * @schema DescribeChapCredentialsInput
 */
export interface DescribeChapCredentialsInput {
  /**
   * @schema DescribeChapCredentialsInput#TargetARN
   */
  readonly targetArn: string;

}

/**
 * @schema DescribeChapCredentialsOutput
 */
export interface DescribeChapCredentialsOutput {
  /**
   * @schema DescribeChapCredentialsOutput#ChapCredentials
   */
  readonly chapCredentials?: ChapInfo[];

}

/**
 * @schema DescribeGatewayInformationInput
 */
export interface DescribeGatewayInformationInput {
  /**
   * @schema DescribeGatewayInformationInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema DescribeGatewayInformationOutput
 */
export interface DescribeGatewayInformationOutput {
  /**
   * @schema DescribeGatewayInformationOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema DescribeGatewayInformationOutput#GatewayId
   */
  readonly gatewayId?: string;

  /**
   * @schema DescribeGatewayInformationOutput#GatewayName
   */
  readonly gatewayName?: string;

  /**
   * @schema DescribeGatewayInformationOutput#GatewayTimezone
   */
  readonly gatewayTimezone?: string;

  /**
   * @schema DescribeGatewayInformationOutput#GatewayState
   */
  readonly gatewayState?: string;

  /**
   * @schema DescribeGatewayInformationOutput#GatewayNetworkInterfaces
   */
  readonly gatewayNetworkInterfaces?: NetworkInterface[];

  /**
   * @schema DescribeGatewayInformationOutput#GatewayType
   */
  readonly gatewayType?: string;

  /**
   * @schema DescribeGatewayInformationOutput#NextUpdateAvailabilityDate
   */
  readonly nextUpdateAvailabilityDate?: string;

  /**
   * @schema DescribeGatewayInformationOutput#LastSoftwareUpdate
   */
  readonly lastSoftwareUpdate?: string;

  /**
   * @schema DescribeGatewayInformationOutput#Ec2InstanceId
   */
  readonly ec2InstanceId?: string;

  /**
   * @schema DescribeGatewayInformationOutput#Ec2InstanceRegion
   */
  readonly ec2InstanceRegion?: string;

  /**
   * @schema DescribeGatewayInformationOutput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema DescribeGatewayInformationOutput#VPCEndpoint
   */
  readonly vpcEndpoint?: string;

  /**
   * @schema DescribeGatewayInformationOutput#CloudWatchLogGroupARN
   */
  readonly cloudWatchLogGroupArn?: string;

  /**
   * @schema DescribeGatewayInformationOutput#HostEnvironment
   */
  readonly hostEnvironment?: string;

  /**
   * @schema DescribeGatewayInformationOutput#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema DescribeGatewayInformationOutput#SoftwareUpdatesEndDate
   */
  readonly softwareUpdatesEndDate?: string;

  /**
   * @schema DescribeGatewayInformationOutput#DeprecationDate
   */
  readonly deprecationDate?: string;

}

/**
 * @schema DescribeMaintenanceStartTimeInput
 */
export interface DescribeMaintenanceStartTimeInput {
  /**
   * @schema DescribeMaintenanceStartTimeInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema DescribeMaintenanceStartTimeOutput
 */
export interface DescribeMaintenanceStartTimeOutput {
  /**
   * @schema DescribeMaintenanceStartTimeOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema DescribeMaintenanceStartTimeOutput#HourOfDay
   */
  readonly hourOfDay?: number;

  /**
   * @schema DescribeMaintenanceStartTimeOutput#MinuteOfHour
   */
  readonly minuteOfHour?: number;

  /**
   * @schema DescribeMaintenanceStartTimeOutput#DayOfWeek
   */
  readonly dayOfWeek?: number;

  /**
   * @schema DescribeMaintenanceStartTimeOutput#DayOfMonth
   */
  readonly dayOfMonth?: number;

  /**
   * @schema DescribeMaintenanceStartTimeOutput#Timezone
   */
  readonly timezone?: string;

}

/**
 * @schema DescribeNfsFileSharesInput
 */
export interface DescribeNfsFileSharesInput {
  /**
   * @schema DescribeNfsFileSharesInput#FileShareARNList
   */
  readonly fileShareArnList: string[];

}

/**
 * @schema DescribeNfsFileSharesOutput
 */
export interface DescribeNfsFileSharesOutput {
  /**
   * @schema DescribeNfsFileSharesOutput#NFSFileShareInfoList
   */
  readonly nfsFileShareInfoList?: NfsFileShareInfo[];

}

/**
 * @schema DescribeSmbFileSharesInput
 */
export interface DescribeSmbFileSharesInput {
  /**
   * @schema DescribeSmbFileSharesInput#FileShareARNList
   */
  readonly fileShareArnList: string[];

}

/**
 * @schema DescribeSmbFileSharesOutput
 */
export interface DescribeSmbFileSharesOutput {
  /**
   * @schema DescribeSmbFileSharesOutput#SMBFileShareInfoList
   */
  readonly smbFileShareInfoList?: SmbFileShareInfo[];

}

/**
 * @schema DescribeSmbSettingsInput
 */
export interface DescribeSmbSettingsInput {
  /**
   * @schema DescribeSmbSettingsInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema DescribeSmbSettingsOutput
 */
export interface DescribeSmbSettingsOutput {
  /**
   * @schema DescribeSmbSettingsOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema DescribeSmbSettingsOutput#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema DescribeSmbSettingsOutput#ActiveDirectoryStatus
   */
  readonly activeDirectoryStatus?: string;

  /**
   * @schema DescribeSmbSettingsOutput#SMBGuestPasswordSet
   */
  readonly smbGuestPasswordSet?: boolean;

  /**
   * @schema DescribeSmbSettingsOutput#SMBSecurityStrategy
   */
  readonly smbSecurityStrategy?: string;

  /**
   * @schema DescribeSmbSettingsOutput#FileSharesVisible
   */
  readonly fileSharesVisible?: boolean;

}

/**
 * @schema DescribeSnapshotScheduleInput
 */
export interface DescribeSnapshotScheduleInput {
  /**
   * @schema DescribeSnapshotScheduleInput#VolumeARN
   */
  readonly volumeArn: string;

}

/**
 * @schema DescribeSnapshotScheduleOutput
 */
export interface DescribeSnapshotScheduleOutput {
  /**
   * @schema DescribeSnapshotScheduleOutput#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema DescribeSnapshotScheduleOutput#StartAt
   */
  readonly startAt?: number;

  /**
   * @schema DescribeSnapshotScheduleOutput#RecurrenceInHours
   */
  readonly recurrenceInHours?: number;

  /**
   * @schema DescribeSnapshotScheduleOutput#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeSnapshotScheduleOutput#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema DescribeSnapshotScheduleOutput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema DescribeStorediScsiVolumesInput
 */
export interface DescribeStorediScsiVolumesInput {
  /**
   * @schema DescribeStorediScsiVolumesInput#VolumeARNs
   */
  readonly volumeArNs: string[];

}

/**
 * @schema DescribeStorediScsiVolumesOutput
 */
export interface DescribeStorediScsiVolumesOutput {
  /**
   * @schema DescribeStorediScsiVolumesOutput#StorediSCSIVolumes
   */
  readonly storediScsiVolumes?: StorediScsiVolume[];

}

/**
 * @schema DescribeTapeArchivesInput
 */
export interface DescribeTapeArchivesInput {
  /**
   * @schema DescribeTapeArchivesInput#TapeARNs
   */
  readonly tapeArNs?: string[];

  /**
   * @schema DescribeTapeArchivesInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeTapeArchivesInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema DescribeTapeArchivesOutput
 */
export interface DescribeTapeArchivesOutput {
  /**
   * @schema DescribeTapeArchivesOutput#TapeArchives
   */
  readonly tapeArchives?: TapeArchive[];

  /**
   * @schema DescribeTapeArchivesOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeTapeRecoveryPointsInput
 */
export interface DescribeTapeRecoveryPointsInput {
  /**
   * @schema DescribeTapeRecoveryPointsInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema DescribeTapeRecoveryPointsInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeTapeRecoveryPointsInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema DescribeTapeRecoveryPointsOutput
 */
export interface DescribeTapeRecoveryPointsOutput {
  /**
   * @schema DescribeTapeRecoveryPointsOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema DescribeTapeRecoveryPointsOutput#TapeRecoveryPointInfos
   */
  readonly tapeRecoveryPointInfos?: TapeRecoveryPointInfo[];

  /**
   * @schema DescribeTapeRecoveryPointsOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeTapesInput
 */
export interface DescribeTapesInput {
  /**
   * @schema DescribeTapesInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema DescribeTapesInput#TapeARNs
   */
  readonly tapeArNs?: string[];

  /**
   * @schema DescribeTapesInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeTapesInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema DescribeTapesOutput
 */
export interface DescribeTapesOutput {
  /**
   * @schema DescribeTapesOutput#Tapes
   */
  readonly tapes?: Tape[];

  /**
   * @schema DescribeTapesOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeUploadBufferInput
 */
export interface DescribeUploadBufferInput {
  /**
   * @schema DescribeUploadBufferInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema DescribeUploadBufferOutput
 */
export interface DescribeUploadBufferOutput {
  /**
   * @schema DescribeUploadBufferOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema DescribeUploadBufferOutput#DiskIds
   */
  readonly diskIds?: string[];

  /**
   * @schema DescribeUploadBufferOutput#UploadBufferUsedInBytes
   */
  readonly uploadBufferUsedInBytes?: number;

  /**
   * @schema DescribeUploadBufferOutput#UploadBufferAllocatedInBytes
   */
  readonly uploadBufferAllocatedInBytes?: number;

}

/**
 * @schema DescribeVtlDevicesInput
 */
export interface DescribeVtlDevicesInput {
  /**
   * @schema DescribeVtlDevicesInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema DescribeVtlDevicesInput#VTLDeviceARNs
   */
  readonly vtlDeviceArNs?: string[];

  /**
   * @schema DescribeVtlDevicesInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema DescribeVtlDevicesInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema DescribeVtlDevicesOutput
 */
export interface DescribeVtlDevicesOutput {
  /**
   * @schema DescribeVtlDevicesOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema DescribeVtlDevicesOutput#VTLDevices
   */
  readonly vtlDevices?: VtlDevice[];

  /**
   * @schema DescribeVtlDevicesOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema DescribeWorkingStorageInput
 */
export interface DescribeWorkingStorageInput {
  /**
   * @schema DescribeWorkingStorageInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema DescribeWorkingStorageOutput
 */
export interface DescribeWorkingStorageOutput {
  /**
   * @schema DescribeWorkingStorageOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema DescribeWorkingStorageOutput#DiskIds
   */
  readonly diskIds?: string[];

  /**
   * @schema DescribeWorkingStorageOutput#WorkingStorageUsedInBytes
   */
  readonly workingStorageUsedInBytes?: number;

  /**
   * @schema DescribeWorkingStorageOutput#WorkingStorageAllocatedInBytes
   */
  readonly workingStorageAllocatedInBytes?: number;

}

/**
 * @schema DetachVolumeInput
 */
export interface DetachVolumeInput {
  /**
   * @schema DetachVolumeInput#VolumeARN
   */
  readonly volumeArn: string;

  /**
   * @schema DetachVolumeInput#ForceDetach
   */
  readonly forceDetach?: boolean;

}

/**
 * @schema DetachVolumeOutput
 */
export interface DetachVolumeOutput {
  /**
   * @schema DetachVolumeOutput#VolumeARN
   */
  readonly volumeArn?: string;

}

/**
 * @schema DisableGatewayInput
 */
export interface DisableGatewayInput {
  /**
   * @schema DisableGatewayInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema DisableGatewayOutput
 */
export interface DisableGatewayOutput {
  /**
   * @schema DisableGatewayOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema JoinDomainInput
 */
export interface JoinDomainInput {
  /**
   * @schema JoinDomainInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema JoinDomainInput#DomainName
   */
  readonly domainName: string;

  /**
   * @schema JoinDomainInput#OrganizationalUnit
   */
  readonly organizationalUnit?: string;

  /**
   * @schema JoinDomainInput#DomainControllers
   */
  readonly domainControllers?: string[];

  /**
   * @schema JoinDomainInput#TimeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema JoinDomainInput#UserName
   */
  readonly userName: string;

  /**
   * @schema JoinDomainInput#Password
   */
  readonly password: string;

}

/**
 * @schema JoinDomainOutput
 */
export interface JoinDomainOutput {
  /**
   * @schema JoinDomainOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema JoinDomainOutput#ActiveDirectoryStatus
   */
  readonly activeDirectoryStatus?: string;

}

/**
 * @schema ListAutomaticTapeCreationPoliciesInput
 */
export interface ListAutomaticTapeCreationPoliciesInput {
  /**
   * @schema ListAutomaticTapeCreationPoliciesInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema ListAutomaticTapeCreationPoliciesOutput
 */
export interface ListAutomaticTapeCreationPoliciesOutput {
  /**
   * @schema ListAutomaticTapeCreationPoliciesOutput#AutomaticTapeCreationPolicyInfos
   */
  readonly automaticTapeCreationPolicyInfos?: AutomaticTapeCreationPolicyInfo[];

}

/**
 * @schema ListFileSharesInput
 */
export interface ListFileSharesInput {
  /**
   * @schema ListFileSharesInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema ListFileSharesInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListFileSharesInput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListFileSharesOutput
 */
export interface ListFileSharesOutput {
  /**
   * @schema ListFileSharesOutput#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListFileSharesOutput#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListFileSharesOutput#FileShareInfoList
   */
  readonly fileShareInfoList?: FileShareInfo[];

}

/**
 * @schema ListGatewaysInput
 */
export interface ListGatewaysInput {
  /**
   * @schema ListGatewaysInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListGatewaysInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListGatewaysOutput
 */
export interface ListGatewaysOutput {
  /**
   * @schema ListGatewaysOutput#Gateways
   */
  readonly gateways?: GatewayInfo[];

  /**
   * @schema ListGatewaysOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListLocalDisksInput
 */
export interface ListLocalDisksInput {
  /**
   * @schema ListLocalDisksInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema ListLocalDisksOutput
 */
export interface ListLocalDisksOutput {
  /**
   * @schema ListLocalDisksOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema ListLocalDisksOutput#Disks
   */
  readonly disks?: Disk[];

}

/**
 * @schema ListTagsForResourceInput
 */
export interface ListTagsForResourceInput {
  /**
   * @schema ListTagsForResourceInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema ListTagsForResourceInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListTagsForResourceInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListTagsForResourceOutput
 */
export interface ListTagsForResourceOutput {
  /**
   * @schema ListTagsForResourceOutput#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema ListTagsForResourceOutput#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListTagsForResourceOutput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ListTapePoolsInput
 */
export interface ListTapePoolsInput {
  /**
   * @schema ListTapePoolsInput#PoolARNs
   */
  readonly poolArNs?: string[];

  /**
   * @schema ListTapePoolsInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListTapePoolsInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListTapePoolsOutput
 */
export interface ListTapePoolsOutput {
  /**
   * @schema ListTapePoolsOutput#PoolInfos
   */
  readonly poolInfos?: PoolInfo[];

  /**
   * @schema ListTapePoolsOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListTapesInput
 */
export interface ListTapesInput {
  /**
   * @schema ListTapesInput#TapeARNs
   */
  readonly tapeArNs?: string[];

  /**
   * @schema ListTapesInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListTapesInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListTapesOutput
 */
export interface ListTapesOutput {
  /**
   * @schema ListTapesOutput#TapeInfos
   */
  readonly tapeInfos?: TapeInfo[];

  /**
   * @schema ListTapesOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListVolumeInitiatorsInput
 */
export interface ListVolumeInitiatorsInput {
  /**
   * @schema ListVolumeInitiatorsInput#VolumeARN
   */
  readonly volumeArn: string;

}

/**
 * @schema ListVolumeInitiatorsOutput
 */
export interface ListVolumeInitiatorsOutput {
  /**
   * @schema ListVolumeInitiatorsOutput#Initiators
   */
  readonly initiators?: string[];

}

/**
 * @schema ListVolumeRecoveryPointsInput
 */
export interface ListVolumeRecoveryPointsInput {
  /**
   * @schema ListVolumeRecoveryPointsInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema ListVolumeRecoveryPointsOutput
 */
export interface ListVolumeRecoveryPointsOutput {
  /**
   * @schema ListVolumeRecoveryPointsOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema ListVolumeRecoveryPointsOutput#VolumeRecoveryPointInfos
   */
  readonly volumeRecoveryPointInfos?: VolumeRecoveryPointInfo[];

}

/**
 * @schema ListVolumesInput
 */
export interface ListVolumesInput {
  /**
   * @schema ListVolumesInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema ListVolumesInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListVolumesInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema ListVolumesOutput
 */
export interface ListVolumesOutput {
  /**
   * @schema ListVolumesOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema ListVolumesOutput#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListVolumesOutput#VolumeInfos
   */
  readonly volumeInfos?: VolumeInfo[];

}

/**
 * @schema NotifyWhenUploadedInput
 */
export interface NotifyWhenUploadedInput {
  /**
   * @schema NotifyWhenUploadedInput#FileShareARN
   */
  readonly fileShareArn: string;

}

/**
 * @schema NotifyWhenUploadedOutput
 */
export interface NotifyWhenUploadedOutput {
  /**
   * @schema NotifyWhenUploadedOutput#FileShareARN
   */
  readonly fileShareArn?: string;

  /**
   * @schema NotifyWhenUploadedOutput#NotificationId
   */
  readonly notificationId?: string;

}

/**
 * @schema RefreshCacheInput
 */
export interface RefreshCacheInput {
  /**
   * @schema RefreshCacheInput#FileShareARN
   */
  readonly fileShareArn: string;

  /**
   * @schema RefreshCacheInput#FolderList
   */
  readonly folderList?: string[];

  /**
   * @schema RefreshCacheInput#Recursive
   */
  readonly recursive?: boolean;

}

/**
 * @schema RefreshCacheOutput
 */
export interface RefreshCacheOutput {
  /**
   * @schema RefreshCacheOutput#FileShareARN
   */
  readonly fileShareArn?: string;

  /**
   * @schema RefreshCacheOutput#NotificationId
   */
  readonly notificationId?: string;

}

/**
 * @schema RemoveTagsFromResourceInput
 */
export interface RemoveTagsFromResourceInput {
  /**
   * @schema RemoveTagsFromResourceInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema RemoveTagsFromResourceInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema RemoveTagsFromResourceOutput
 */
export interface RemoveTagsFromResourceOutput {
  /**
   * @schema RemoveTagsFromResourceOutput#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * @schema ResetCacheInput
 */
export interface ResetCacheInput {
  /**
   * @schema ResetCacheInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema ResetCacheOutput
 */
export interface ResetCacheOutput {
  /**
   * @schema ResetCacheOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema RetrieveTapeArchiveInput
 */
export interface RetrieveTapeArchiveInput {
  /**
   * @schema RetrieveTapeArchiveInput#TapeARN
   */
  readonly tapeArn: string;

  /**
   * @schema RetrieveTapeArchiveInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema RetrieveTapeArchiveOutput
 */
export interface RetrieveTapeArchiveOutput {
  /**
   * @schema RetrieveTapeArchiveOutput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * @schema RetrieveTapeRecoveryPointInput
 */
export interface RetrieveTapeRecoveryPointInput {
  /**
   * @schema RetrieveTapeRecoveryPointInput#TapeARN
   */
  readonly tapeArn: string;

  /**
   * @schema RetrieveTapeRecoveryPointInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema RetrieveTapeRecoveryPointOutput
 */
export interface RetrieveTapeRecoveryPointOutput {
  /**
   * @schema RetrieveTapeRecoveryPointOutput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * @schema SetLocalConsolePasswordInput
 */
export interface SetLocalConsolePasswordInput {
  /**
   * @schema SetLocalConsolePasswordInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema SetLocalConsolePasswordInput#LocalConsolePassword
   */
  readonly localConsolePassword: string;

}

/**
 * @schema SetLocalConsolePasswordOutput
 */
export interface SetLocalConsolePasswordOutput {
  /**
   * @schema SetLocalConsolePasswordOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema SetSmbGuestPasswordInput
 */
export interface SetSmbGuestPasswordInput {
  /**
   * @schema SetSmbGuestPasswordInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema SetSmbGuestPasswordInput#Password
   */
  readonly password: string;

}

/**
 * @schema SetSmbGuestPasswordOutput
 */
export interface SetSmbGuestPasswordOutput {
  /**
   * @schema SetSmbGuestPasswordOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema ShutdownGatewayInput
 */
export interface ShutdownGatewayInput {
  /**
   * @schema ShutdownGatewayInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema ShutdownGatewayOutput
 */
export interface ShutdownGatewayOutput {
  /**
   * @schema ShutdownGatewayOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StartAvailabilityMonitorTestInput
 */
export interface StartAvailabilityMonitorTestInput {
  /**
   * @schema StartAvailabilityMonitorTestInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StartAvailabilityMonitorTestOutput
 */
export interface StartAvailabilityMonitorTestOutput {
  /**
   * @schema StartAvailabilityMonitorTestOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StartGatewayInput
 */
export interface StartGatewayInput {
  /**
   * @schema StartGatewayInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StartGatewayOutput
 */
export interface StartGatewayOutput {
  /**
   * @schema StartGatewayOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema UpdateAutomaticTapeCreationPolicyInput
 */
export interface UpdateAutomaticTapeCreationPolicyInput {
  /**
   * @schema UpdateAutomaticTapeCreationPolicyInput#AutomaticTapeCreationRules
   */
  readonly automaticTapeCreationRules: AutomaticTapeCreationRule[];

  /**
   * @schema UpdateAutomaticTapeCreationPolicyInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema UpdateAutomaticTapeCreationPolicyOutput
 */
export interface UpdateAutomaticTapeCreationPolicyOutput {
  /**
   * @schema UpdateAutomaticTapeCreationPolicyOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema UpdateBandwidthRateLimitInput
 */
export interface UpdateBandwidthRateLimitInput {
  /**
   * @schema UpdateBandwidthRateLimitInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema UpdateBandwidthRateLimitInput#AverageUploadRateLimitInBitsPerSec
   */
  readonly averageUploadRateLimitInBitsPerSec?: number;

  /**
   * @schema UpdateBandwidthRateLimitInput#AverageDownloadRateLimitInBitsPerSec
   */
  readonly averageDownloadRateLimitInBitsPerSec?: number;

}

/**
 * @schema UpdateBandwidthRateLimitOutput
 */
export interface UpdateBandwidthRateLimitOutput {
  /**
   * @schema UpdateBandwidthRateLimitOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema UpdateBandwidthRateLimitScheduleInput
 */
export interface UpdateBandwidthRateLimitScheduleInput {
  /**
   * @schema UpdateBandwidthRateLimitScheduleInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema UpdateBandwidthRateLimitScheduleInput#BandwidthRateLimitIntervals
   */
  readonly bandwidthRateLimitIntervals: BandwidthRateLimitInterval[];

}

/**
 * @schema UpdateBandwidthRateLimitScheduleOutput
 */
export interface UpdateBandwidthRateLimitScheduleOutput {
  /**
   * @schema UpdateBandwidthRateLimitScheduleOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema UpdateChapCredentialsInput
 */
export interface UpdateChapCredentialsInput {
  /**
   * @schema UpdateChapCredentialsInput#TargetARN
   */
  readonly targetArn: string;

  /**
   * @schema UpdateChapCredentialsInput#SecretToAuthenticateInitiator
   */
  readonly secretToAuthenticateInitiator: string;

  /**
   * @schema UpdateChapCredentialsInput#InitiatorName
   */
  readonly initiatorName: string;

  /**
   * @schema UpdateChapCredentialsInput#SecretToAuthenticateTarget
   */
  readonly secretToAuthenticateTarget?: string;

}

/**
 * @schema UpdateChapCredentialsOutput
 */
export interface UpdateChapCredentialsOutput {
  /**
   * @schema UpdateChapCredentialsOutput#TargetARN
   */
  readonly targetArn?: string;

  /**
   * @schema UpdateChapCredentialsOutput#InitiatorName
   */
  readonly initiatorName?: string;

}

/**
 * @schema UpdateGatewayInformationInput
 */
export interface UpdateGatewayInformationInput {
  /**
   * @schema UpdateGatewayInformationInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema UpdateGatewayInformationInput#GatewayName
   */
  readonly gatewayName?: string;

  /**
   * @schema UpdateGatewayInformationInput#GatewayTimezone
   */
  readonly gatewayTimezone?: string;

  /**
   * @schema UpdateGatewayInformationInput#CloudWatchLogGroupARN
   */
  readonly cloudWatchLogGroupArn?: string;

}

/**
 * @schema UpdateGatewayInformationOutput
 */
export interface UpdateGatewayInformationOutput {
  /**
   * @schema UpdateGatewayInformationOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema UpdateGatewayInformationOutput#GatewayName
   */
  readonly gatewayName?: string;

}

/**
 * @schema UpdateGatewaySoftwareNowInput
 */
export interface UpdateGatewaySoftwareNowInput {
  /**
   * @schema UpdateGatewaySoftwareNowInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema UpdateGatewaySoftwareNowOutput
 */
export interface UpdateGatewaySoftwareNowOutput {
  /**
   * @schema UpdateGatewaySoftwareNowOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema UpdateMaintenanceStartTimeInput
 */
export interface UpdateMaintenanceStartTimeInput {
  /**
   * @schema UpdateMaintenanceStartTimeInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema UpdateMaintenanceStartTimeInput#HourOfDay
   */
  readonly hourOfDay: number;

  /**
   * @schema UpdateMaintenanceStartTimeInput#MinuteOfHour
   */
  readonly minuteOfHour: number;

  /**
   * @schema UpdateMaintenanceStartTimeInput#DayOfWeek
   */
  readonly dayOfWeek?: number;

  /**
   * @schema UpdateMaintenanceStartTimeInput#DayOfMonth
   */
  readonly dayOfMonth?: number;

}

/**
 * @schema UpdateMaintenanceStartTimeOutput
 */
export interface UpdateMaintenanceStartTimeOutput {
  /**
   * @schema UpdateMaintenanceStartTimeOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema UpdateNfsFileShareInput
 */
export interface UpdateNfsFileShareInput {
  /**
   * @schema UpdateNfsFileShareInput#FileShareARN
   */
  readonly fileShareArn: string;

  /**
   * @schema UpdateNfsFileShareInput#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema UpdateNfsFileShareInput#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema UpdateNfsFileShareInput#NFSFileShareDefaults
   */
  readonly nfsFileShareDefaults?: NfsFileShareDefaults;

  /**
   * @schema UpdateNfsFileShareInput#DefaultStorageClass
   */
  readonly defaultStorageClass?: string;

  /**
   * @schema UpdateNfsFileShareInput#ObjectACL
   */
  readonly objectAcl?: string;

  /**
   * @schema UpdateNfsFileShareInput#ClientList
   */
  readonly clientList?: string[];

  /**
   * @schema UpdateNfsFileShareInput#Squash
   */
  readonly squash?: string;

  /**
   * @schema UpdateNfsFileShareInput#ReadOnly
   */
  readonly readOnly?: boolean;

  /**
   * @schema UpdateNfsFileShareInput#GuessMIMETypeEnabled
   */
  readonly guessMimeTypeEnabled?: boolean;

  /**
   * @schema UpdateNfsFileShareInput#RequesterPays
   */
  readonly requesterPays?: boolean;

  /**
   * @schema UpdateNfsFileShareInput#FileShareName
   */
  readonly fileShareName?: string;

  /**
   * @schema UpdateNfsFileShareInput#CacheAttributes
   */
  readonly cacheAttributes?: CacheAttributes;

  /**
   * @schema UpdateNfsFileShareInput#NotificationPolicy
   */
  readonly notificationPolicy?: string;

}

/**
 * @schema UpdateNfsFileShareOutput
 */
export interface UpdateNfsFileShareOutput {
  /**
   * @schema UpdateNfsFileShareOutput#FileShareARN
   */
  readonly fileShareArn?: string;

}

/**
 * @schema UpdateSmbFileShareInput
 */
export interface UpdateSmbFileShareInput {
  /**
   * @schema UpdateSmbFileShareInput#FileShareARN
   */
  readonly fileShareArn: string;

  /**
   * @schema UpdateSmbFileShareInput#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema UpdateSmbFileShareInput#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema UpdateSmbFileShareInput#DefaultStorageClass
   */
  readonly defaultStorageClass?: string;

  /**
   * @schema UpdateSmbFileShareInput#ObjectACL
   */
  readonly objectAcl?: string;

  /**
   * @schema UpdateSmbFileShareInput#ReadOnly
   */
  readonly readOnly?: boolean;

  /**
   * @schema UpdateSmbFileShareInput#GuessMIMETypeEnabled
   */
  readonly guessMimeTypeEnabled?: boolean;

  /**
   * @schema UpdateSmbFileShareInput#RequesterPays
   */
  readonly requesterPays?: boolean;

  /**
   * @schema UpdateSmbFileShareInput#SMBACLEnabled
   */
  readonly smbaclEnabled?: boolean;

  /**
   * @schema UpdateSmbFileShareInput#AccessBasedEnumeration
   */
  readonly accessBasedEnumeration?: boolean;

  /**
   * @schema UpdateSmbFileShareInput#AdminUserList
   */
  readonly adminUserList?: string[];

  /**
   * @schema UpdateSmbFileShareInput#ValidUserList
   */
  readonly validUserList?: string[];

  /**
   * @schema UpdateSmbFileShareInput#InvalidUserList
   */
  readonly invalidUserList?: string[];

  /**
   * @schema UpdateSmbFileShareInput#AuditDestinationARN
   */
  readonly auditDestinationArn?: string;

  /**
   * @schema UpdateSmbFileShareInput#CaseSensitivity
   */
  readonly caseSensitivity?: string;

  /**
   * @schema UpdateSmbFileShareInput#FileShareName
   */
  readonly fileShareName?: string;

  /**
   * @schema UpdateSmbFileShareInput#CacheAttributes
   */
  readonly cacheAttributes?: CacheAttributes;

  /**
   * @schema UpdateSmbFileShareInput#NotificationPolicy
   */
  readonly notificationPolicy?: string;

}

/**
 * @schema UpdateSmbFileShareOutput
 */
export interface UpdateSmbFileShareOutput {
  /**
   * @schema UpdateSmbFileShareOutput#FileShareARN
   */
  readonly fileShareArn?: string;

}

/**
 * @schema UpdateSmbFileShareVisibilityInput
 */
export interface UpdateSmbFileShareVisibilityInput {
  /**
   * @schema UpdateSmbFileShareVisibilityInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema UpdateSmbFileShareVisibilityInput#FileSharesVisible
   */
  readonly fileSharesVisible: boolean;

}

/**
 * @schema UpdateSmbFileShareVisibilityOutput
 */
export interface UpdateSmbFileShareVisibilityOutput {
  /**
   * @schema UpdateSmbFileShareVisibilityOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema UpdateSmbSecurityStrategyInput
 */
export interface UpdateSmbSecurityStrategyInput {
  /**
   * @schema UpdateSmbSecurityStrategyInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema UpdateSmbSecurityStrategyInput#SMBSecurityStrategy
   */
  readonly smbSecurityStrategy: string;

}

/**
 * @schema UpdateSmbSecurityStrategyOutput
 */
export interface UpdateSmbSecurityStrategyOutput {
  /**
   * @schema UpdateSmbSecurityStrategyOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema UpdateSnapshotScheduleInput
 */
export interface UpdateSnapshotScheduleInput {
  /**
   * @schema UpdateSnapshotScheduleInput#VolumeARN
   */
  readonly volumeArn: string;

  /**
   * @schema UpdateSnapshotScheduleInput#StartAt
   */
  readonly startAt: number;

  /**
   * @schema UpdateSnapshotScheduleInput#RecurrenceInHours
   */
  readonly recurrenceInHours: number;

  /**
   * @schema UpdateSnapshotScheduleInput#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateSnapshotScheduleInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema UpdateSnapshotScheduleOutput
 */
export interface UpdateSnapshotScheduleOutput {
  /**
   * @schema UpdateSnapshotScheduleOutput#VolumeARN
   */
  readonly volumeArn?: string;

}

/**
 * @schema UpdateVtlDeviceTypeInput
 */
export interface UpdateVtlDeviceTypeInput {
  /**
   * @schema UpdateVtlDeviceTypeInput#VTLDeviceARN
   */
  readonly vtlDeviceArn: string;

  /**
   * @schema UpdateVtlDeviceTypeInput#DeviceType
   */
  readonly deviceType: string;

}

/**
 * @schema UpdateVtlDeviceTypeOutput
 */
export interface UpdateVtlDeviceTypeOutput {
  /**
   * @schema UpdateVtlDeviceTypeOutput#VTLDeviceARN
   */
  readonly vtlDeviceArn?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema NfsFileShareDefaults
 */
export interface NfsFileShareDefaults {
  /**
   * @schema NfsFileShareDefaults#FileMode
   */
  readonly fileMode?: string;

  /**
   * @schema NfsFileShareDefaults#DirectoryMode
   */
  readonly directoryMode?: string;

  /**
   * @schema NfsFileShareDefaults#GroupId
   */
  readonly groupId?: number;

  /**
   * @schema NfsFileShareDefaults#OwnerId
   */
  readonly ownerId?: number;

}

/**
 * @schema CacheAttributes
 */
export interface CacheAttributes {
  /**
   * @schema CacheAttributes#CacheStaleTimeoutInSeconds
   */
  readonly cacheStaleTimeoutInSeconds?: number;

}

/**
 * @schema BandwidthRateLimitInterval
 */
export interface BandwidthRateLimitInterval {
  /**
   * @schema BandwidthRateLimitInterval#StartHourOfDay
   */
  readonly startHourOfDay: number;

  /**
   * @schema BandwidthRateLimitInterval#StartMinuteOfHour
   */
  readonly startMinuteOfHour: number;

  /**
   * @schema BandwidthRateLimitInterval#EndHourOfDay
   */
  readonly endHourOfDay: number;

  /**
   * @schema BandwidthRateLimitInterval#EndMinuteOfHour
   */
  readonly endMinuteOfHour: number;

  /**
   * @schema BandwidthRateLimitInterval#DaysOfWeek
   */
  readonly daysOfWeek: number[];

  /**
   * @schema BandwidthRateLimitInterval#AverageUploadRateLimitInBitsPerSec
   */
  readonly averageUploadRateLimitInBitsPerSec?: number;

  /**
   * @schema BandwidthRateLimitInterval#AverageDownloadRateLimitInBitsPerSec
   */
  readonly averageDownloadRateLimitInBitsPerSec?: number;

}

/**
 * @schema CachediScsiVolume
 */
export interface CachediScsiVolume {
  /**
   * @schema CachediScsiVolume#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema CachediScsiVolume#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema CachediScsiVolume#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema CachediScsiVolume#VolumeStatus
   */
  readonly volumeStatus?: string;

  /**
   * @schema CachediScsiVolume#VolumeAttachmentStatus
   */
  readonly volumeAttachmentStatus?: string;

  /**
   * @schema CachediScsiVolume#VolumeSizeInBytes
   */
  readonly volumeSizeInBytes?: number;

  /**
   * @schema CachediScsiVolume#VolumeProgress
   */
  readonly volumeProgress?: number;

  /**
   * @schema CachediScsiVolume#SourceSnapshotId
   */
  readonly sourceSnapshotId?: string;

  /**
   * @schema CachediScsiVolume#VolumeiSCSIAttributes
   */
  readonly volumeiScsiAttributes?: VolumeiScsiAttributes;

  /**
   * @schema CachediScsiVolume#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema CachediScsiVolume#VolumeUsedInBytes
   */
  readonly volumeUsedInBytes?: number;

  /**
   * @schema CachediScsiVolume#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema CachediScsiVolume#TargetName
   */
  readonly targetName?: string;

}

/**
 * @schema ChapInfo
 */
export interface ChapInfo {
  /**
   * @schema ChapInfo#TargetARN
   */
  readonly targetArn?: string;

  /**
   * @schema ChapInfo#SecretToAuthenticateInitiator
   */
  readonly secretToAuthenticateInitiator?: string;

  /**
   * @schema ChapInfo#InitiatorName
   */
  readonly initiatorName?: string;

  /**
   * @schema ChapInfo#SecretToAuthenticateTarget
   */
  readonly secretToAuthenticateTarget?: string;

}

/**
 * @schema NetworkInterface
 */
export interface NetworkInterface {
  /**
   * @schema NetworkInterface#Ipv4Address
   */
  readonly ipv4Address?: string;

  /**
   * @schema NetworkInterface#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema NetworkInterface#Ipv6Address
   */
  readonly ipv6Address?: string;

}

/**
 * @schema NfsFileShareInfo
 */
export interface NfsFileShareInfo {
  /**
   * @schema NfsFileShareInfo#NFSFileShareDefaults
   */
  readonly nfsFileShareDefaults?: NfsFileShareDefaults;

  /**
   * @schema NfsFileShareInfo#FileShareARN
   */
  readonly fileShareArn?: string;

  /**
   * @schema NfsFileShareInfo#FileShareId
   */
  readonly fileShareId?: string;

  /**
   * @schema NfsFileShareInfo#FileShareStatus
   */
  readonly fileShareStatus?: string;

  /**
   * @schema NfsFileShareInfo#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema NfsFileShareInfo#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema NfsFileShareInfo#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema NfsFileShareInfo#Path
   */
  readonly path?: string;

  /**
   * @schema NfsFileShareInfo#Role
   */
  readonly role?: string;

  /**
   * @schema NfsFileShareInfo#LocationARN
   */
  readonly locationArn?: string;

  /**
   * @schema NfsFileShareInfo#DefaultStorageClass
   */
  readonly defaultStorageClass?: string;

  /**
   * @schema NfsFileShareInfo#ObjectACL
   */
  readonly objectAcl?: string;

  /**
   * @schema NfsFileShareInfo#ClientList
   */
  readonly clientList?: string[];

  /**
   * @schema NfsFileShareInfo#Squash
   */
  readonly squash?: string;

  /**
   * @schema NfsFileShareInfo#ReadOnly
   */
  readonly readOnly?: boolean;

  /**
   * @schema NfsFileShareInfo#GuessMIMETypeEnabled
   */
  readonly guessMimeTypeEnabled?: boolean;

  /**
   * @schema NfsFileShareInfo#RequesterPays
   */
  readonly requesterPays?: boolean;

  /**
   * @schema NfsFileShareInfo#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema NfsFileShareInfo#FileShareName
   */
  readonly fileShareName?: string;

  /**
   * @schema NfsFileShareInfo#CacheAttributes
   */
  readonly cacheAttributes?: CacheAttributes;

  /**
   * @schema NfsFileShareInfo#NotificationPolicy
   */
  readonly notificationPolicy?: string;

}

/**
 * @schema SmbFileShareInfo
 */
export interface SmbFileShareInfo {
  /**
   * @schema SmbFileShareInfo#FileShareARN
   */
  readonly fileShareArn?: string;

  /**
   * @schema SmbFileShareInfo#FileShareId
   */
  readonly fileShareId?: string;

  /**
   * @schema SmbFileShareInfo#FileShareStatus
   */
  readonly fileShareStatus?: string;

  /**
   * @schema SmbFileShareInfo#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema SmbFileShareInfo#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema SmbFileShareInfo#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema SmbFileShareInfo#Path
   */
  readonly path?: string;

  /**
   * @schema SmbFileShareInfo#Role
   */
  readonly role?: string;

  /**
   * @schema SmbFileShareInfo#LocationARN
   */
  readonly locationArn?: string;

  /**
   * @schema SmbFileShareInfo#DefaultStorageClass
   */
  readonly defaultStorageClass?: string;

  /**
   * @schema SmbFileShareInfo#ObjectACL
   */
  readonly objectAcl?: string;

  /**
   * @schema SmbFileShareInfo#ReadOnly
   */
  readonly readOnly?: boolean;

  /**
   * @schema SmbFileShareInfo#GuessMIMETypeEnabled
   */
  readonly guessMimeTypeEnabled?: boolean;

  /**
   * @schema SmbFileShareInfo#RequesterPays
   */
  readonly requesterPays?: boolean;

  /**
   * @schema SmbFileShareInfo#SMBACLEnabled
   */
  readonly smbaclEnabled?: boolean;

  /**
   * @schema SmbFileShareInfo#AccessBasedEnumeration
   */
  readonly accessBasedEnumeration?: boolean;

  /**
   * @schema SmbFileShareInfo#AdminUserList
   */
  readonly adminUserList?: string[];

  /**
   * @schema SmbFileShareInfo#ValidUserList
   */
  readonly validUserList?: string[];

  /**
   * @schema SmbFileShareInfo#InvalidUserList
   */
  readonly invalidUserList?: string[];

  /**
   * @schema SmbFileShareInfo#AuditDestinationARN
   */
  readonly auditDestinationArn?: string;

  /**
   * @schema SmbFileShareInfo#Authentication
   */
  readonly authentication?: string;

  /**
   * @schema SmbFileShareInfo#CaseSensitivity
   */
  readonly caseSensitivity?: string;

  /**
   * @schema SmbFileShareInfo#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema SmbFileShareInfo#FileShareName
   */
  readonly fileShareName?: string;

  /**
   * @schema SmbFileShareInfo#CacheAttributes
   */
  readonly cacheAttributes?: CacheAttributes;

  /**
   * @schema SmbFileShareInfo#NotificationPolicy
   */
  readonly notificationPolicy?: string;

}

/**
 * @schema StorediScsiVolume
 */
export interface StorediScsiVolume {
  /**
   * @schema StorediScsiVolume#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema StorediScsiVolume#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema StorediScsiVolume#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema StorediScsiVolume#VolumeStatus
   */
  readonly volumeStatus?: string;

  /**
   * @schema StorediScsiVolume#VolumeAttachmentStatus
   */
  readonly volumeAttachmentStatus?: string;

  /**
   * @schema StorediScsiVolume#VolumeSizeInBytes
   */
  readonly volumeSizeInBytes?: number;

  /**
   * @schema StorediScsiVolume#VolumeProgress
   */
  readonly volumeProgress?: number;

  /**
   * @schema StorediScsiVolume#VolumeDiskId
   */
  readonly volumeDiskId?: string;

  /**
   * @schema StorediScsiVolume#SourceSnapshotId
   */
  readonly sourceSnapshotId?: string;

  /**
   * @schema StorediScsiVolume#PreservedExistingData
   */
  readonly preservedExistingData?: boolean;

  /**
   * @schema StorediScsiVolume#VolumeiSCSIAttributes
   */
  readonly volumeiScsiAttributes?: VolumeiScsiAttributes;

  /**
   * @schema StorediScsiVolume#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema StorediScsiVolume#VolumeUsedInBytes
   */
  readonly volumeUsedInBytes?: number;

  /**
   * @schema StorediScsiVolume#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StorediScsiVolume#TargetName
   */
  readonly targetName?: string;

}

/**
 * @schema TapeArchive
 */
export interface TapeArchive {
  /**
   * @schema TapeArchive#TapeARN
   */
  readonly tapeArn?: string;

  /**
   * @schema TapeArchive#TapeBarcode
   */
  readonly tapeBarcode?: string;

  /**
   * @schema TapeArchive#TapeCreatedDate
   */
  readonly tapeCreatedDate?: string;

  /**
   * @schema TapeArchive#TapeSizeInBytes
   */
  readonly tapeSizeInBytes?: number;

  /**
   * @schema TapeArchive#CompletionTime
   */
  readonly completionTime?: string;

  /**
   * @schema TapeArchive#RetrievedTo
   */
  readonly retrievedTo?: string;

  /**
   * @schema TapeArchive#TapeStatus
   */
  readonly tapeStatus?: string;

  /**
   * @schema TapeArchive#TapeUsedInBytes
   */
  readonly tapeUsedInBytes?: number;

  /**
   * @schema TapeArchive#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema TapeArchive#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema TapeArchive#Worm
   */
  readonly worm?: boolean;

  /**
   * @schema TapeArchive#RetentionStartDate
   */
  readonly retentionStartDate?: string;

  /**
   * @schema TapeArchive#PoolEntryDate
   */
  readonly poolEntryDate?: string;

}

/**
 * @schema TapeRecoveryPointInfo
 */
export interface TapeRecoveryPointInfo {
  /**
   * @schema TapeRecoveryPointInfo#TapeARN
   */
  readonly tapeArn?: string;

  /**
   * @schema TapeRecoveryPointInfo#TapeRecoveryPointTime
   */
  readonly tapeRecoveryPointTime?: string;

  /**
   * @schema TapeRecoveryPointInfo#TapeSizeInBytes
   */
  readonly tapeSizeInBytes?: number;

  /**
   * @schema TapeRecoveryPointInfo#TapeStatus
   */
  readonly tapeStatus?: string;

}

/**
 * @schema Tape
 */
export interface Tape {
  /**
   * @schema Tape#TapeARN
   */
  readonly tapeArn?: string;

  /**
   * @schema Tape#TapeBarcode
   */
  readonly tapeBarcode?: string;

  /**
   * @schema Tape#TapeCreatedDate
   */
  readonly tapeCreatedDate?: string;

  /**
   * @schema Tape#TapeSizeInBytes
   */
  readonly tapeSizeInBytes?: number;

  /**
   * @schema Tape#TapeStatus
   */
  readonly tapeStatus?: string;

  /**
   * @schema Tape#VTLDevice
   */
  readonly vtlDevice?: string;

  /**
   * @schema Tape#Progress
   */
  readonly progress?: number;

  /**
   * @schema Tape#TapeUsedInBytes
   */
  readonly tapeUsedInBytes?: number;

  /**
   * @schema Tape#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema Tape#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema Tape#Worm
   */
  readonly worm?: boolean;

  /**
   * @schema Tape#RetentionStartDate
   */
  readonly retentionStartDate?: string;

  /**
   * @schema Tape#PoolEntryDate
   */
  readonly poolEntryDate?: string;

}

/**
 * @schema VtlDevice
 */
export interface VtlDevice {
  /**
   * @schema VtlDevice#VTLDeviceARN
   */
  readonly vtlDeviceArn?: string;

  /**
   * @schema VtlDevice#VTLDeviceType
   */
  readonly vtlDeviceType?: string;

  /**
   * @schema VtlDevice#VTLDeviceVendor
   */
  readonly vtlDeviceVendor?: string;

  /**
   * @schema VtlDevice#VTLDeviceProductIdentifier
   */
  readonly vtlDeviceProductIdentifier?: string;

  /**
   * @schema VtlDevice#DeviceiSCSIAttributes
   */
  readonly deviceiScsiAttributes?: DeviceiScsiAttributes;

}

/**
 * @schema AutomaticTapeCreationPolicyInfo
 */
export interface AutomaticTapeCreationPolicyInfo {
  /**
   * @schema AutomaticTapeCreationPolicyInfo#AutomaticTapeCreationRules
   */
  readonly automaticTapeCreationRules?: AutomaticTapeCreationRule[];

  /**
   * @schema AutomaticTapeCreationPolicyInfo#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema FileShareInfo
 */
export interface FileShareInfo {
  /**
   * @schema FileShareInfo#FileShareType
   */
  readonly fileShareType?: string;

  /**
   * @schema FileShareInfo#FileShareARN
   */
  readonly fileShareArn?: string;

  /**
   * @schema FileShareInfo#FileShareId
   */
  readonly fileShareId?: string;

  /**
   * @schema FileShareInfo#FileShareStatus
   */
  readonly fileShareStatus?: string;

  /**
   * @schema FileShareInfo#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema GatewayInfo
 */
export interface GatewayInfo {
  /**
   * @schema GatewayInfo#GatewayId
   */
  readonly gatewayId?: string;

  /**
   * @schema GatewayInfo#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema GatewayInfo#GatewayType
   */
  readonly gatewayType?: string;

  /**
   * @schema GatewayInfo#GatewayOperationalState
   */
  readonly gatewayOperationalState?: string;

  /**
   * @schema GatewayInfo#GatewayName
   */
  readonly gatewayName?: string;

  /**
   * @schema GatewayInfo#Ec2InstanceId
   */
  readonly ec2InstanceId?: string;

  /**
   * @schema GatewayInfo#Ec2InstanceRegion
   */
  readonly ec2InstanceRegion?: string;

}

/**
 * @schema Disk
 */
export interface Disk {
  /**
   * @schema Disk#DiskId
   */
  readonly diskId?: string;

  /**
   * @schema Disk#DiskPath
   */
  readonly diskPath?: string;

  /**
   * @schema Disk#DiskNode
   */
  readonly diskNode?: string;

  /**
   * @schema Disk#DiskStatus
   */
  readonly diskStatus?: string;

  /**
   * @schema Disk#DiskSizeInBytes
   */
  readonly diskSizeInBytes?: number;

  /**
   * @schema Disk#DiskAllocationType
   */
  readonly diskAllocationType?: string;

  /**
   * @schema Disk#DiskAllocationResource
   */
  readonly diskAllocationResource?: string;

  /**
   * @schema Disk#DiskAttributeList
   */
  readonly diskAttributeList?: string[];

}

/**
 * @schema PoolInfo
 */
export interface PoolInfo {
  /**
   * @schema PoolInfo#PoolARN
   */
  readonly poolArn?: string;

  /**
   * @schema PoolInfo#PoolName
   */
  readonly poolName?: string;

  /**
   * @schema PoolInfo#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema PoolInfo#RetentionLockType
   */
  readonly retentionLockType?: string;

  /**
   * @schema PoolInfo#RetentionLockTimeInDays
   */
  readonly retentionLockTimeInDays?: number;

  /**
   * @schema PoolInfo#PoolStatus
   */
  readonly poolStatus?: string;

}

/**
 * @schema TapeInfo
 */
export interface TapeInfo {
  /**
   * @schema TapeInfo#TapeARN
   */
  readonly tapeArn?: string;

  /**
   * @schema TapeInfo#TapeBarcode
   */
  readonly tapeBarcode?: string;

  /**
   * @schema TapeInfo#TapeSizeInBytes
   */
  readonly tapeSizeInBytes?: number;

  /**
   * @schema TapeInfo#TapeStatus
   */
  readonly tapeStatus?: string;

  /**
   * @schema TapeInfo#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema TapeInfo#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema TapeInfo#RetentionStartDate
   */
  readonly retentionStartDate?: string;

  /**
   * @schema TapeInfo#PoolEntryDate
   */
  readonly poolEntryDate?: string;

}

/**
 * @schema VolumeRecoveryPointInfo
 */
export interface VolumeRecoveryPointInfo {
  /**
   * @schema VolumeRecoveryPointInfo#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema VolumeRecoveryPointInfo#VolumeSizeInBytes
   */
  readonly volumeSizeInBytes?: number;

  /**
   * @schema VolumeRecoveryPointInfo#VolumeUsageInBytes
   */
  readonly volumeUsageInBytes?: number;

  /**
   * @schema VolumeRecoveryPointInfo#VolumeRecoveryPointTime
   */
  readonly volumeRecoveryPointTime?: string;

}

/**
 * @schema VolumeInfo
 */
export interface VolumeInfo {
  /**
   * @schema VolumeInfo#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema VolumeInfo#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema VolumeInfo#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema VolumeInfo#GatewayId
   */
  readonly gatewayId?: string;

  /**
   * @schema VolumeInfo#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema VolumeInfo#VolumeSizeInBytes
   */
  readonly volumeSizeInBytes?: number;

  /**
   * @schema VolumeInfo#VolumeAttachmentStatus
   */
  readonly volumeAttachmentStatus?: string;

}

/**
 * @schema AutomaticTapeCreationRule
 */
export interface AutomaticTapeCreationRule {
  /**
   * @schema AutomaticTapeCreationRule#TapeBarcodePrefix
   */
  readonly tapeBarcodePrefix: string;

  /**
   * @schema AutomaticTapeCreationRule#PoolId
   */
  readonly poolId: string;

  /**
   * @schema AutomaticTapeCreationRule#TapeSizeInBytes
   */
  readonly tapeSizeInBytes: number;

  /**
   * @schema AutomaticTapeCreationRule#MinimumNumTapes
   */
  readonly minimumNumTapes: number;

  /**
   * @schema AutomaticTapeCreationRule#Worm
   */
  readonly worm?: boolean;

}

/**
 * @schema VolumeiScsiAttributes
 */
export interface VolumeiScsiAttributes {
  /**
   * @schema VolumeiScsiAttributes#TargetARN
   */
  readonly targetArn?: string;

  /**
   * @schema VolumeiScsiAttributes#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema VolumeiScsiAttributes#NetworkInterfacePort
   */
  readonly networkInterfacePort?: number;

  /**
   * @schema VolumeiScsiAttributes#LunNumber
   */
  readonly lunNumber?: number;

  /**
   * @schema VolumeiScsiAttributes#ChapEnabled
   */
  readonly chapEnabled?: boolean;

}

/**
 * @schema DeviceiScsiAttributes
 */
export interface DeviceiScsiAttributes {
  /**
   * @schema DeviceiScsiAttributes#TargetARN
   */
  readonly targetArn?: string;

  /**
   * @schema DeviceiScsiAttributes#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema DeviceiScsiAttributes#NetworkInterfacePort
   */
  readonly networkInterfacePort?: number;

  /**
   * @schema DeviceiScsiAttributes#ChapEnabled
   */
  readonly chapEnabled?: boolean;

}
