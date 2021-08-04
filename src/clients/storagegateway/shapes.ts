/**
 * @schema StorageGatewayActivateGatewayInput
 */
export interface StorageGatewayActivateGatewayInput {
  /**
   * @schema StorageGatewayActivateGatewayInput#ActivationKey
   */
  readonly activationKey: string;

  /**
   * @schema StorageGatewayActivateGatewayInput#GatewayName
   */
  readonly gatewayName: string;

  /**
   * @schema StorageGatewayActivateGatewayInput#GatewayTimezone
   */
  readonly gatewayTimezone: string;

  /**
   * @schema StorageGatewayActivateGatewayInput#GatewayRegion
   */
  readonly gatewayRegion: string;

  /**
   * @schema StorageGatewayActivateGatewayInput#GatewayType
   */
  readonly gatewayType?: string;

  /**
   * @schema StorageGatewayActivateGatewayInput#TapeDriveType
   */
  readonly tapeDriveType?: string;

  /**
   * @schema StorageGatewayActivateGatewayInput#MediumChangerType
   */
  readonly mediumChangerType?: string;

  /**
   * @schema StorageGatewayActivateGatewayInput#Tags
   */
  readonly tags?: StorageGatewayTag[];

}

/**
 * @schema StorageGatewayActivateGatewayOutput
 */
export interface StorageGatewayActivateGatewayOutput {
  /**
   * @schema StorageGatewayActivateGatewayOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayAddCacheInput
 */
export interface StorageGatewayAddCacheInput {
  /**
   * @schema StorageGatewayAddCacheInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayAddCacheInput#DiskIds
   */
  readonly diskIds: string[];

}

/**
 * @schema StorageGatewayAddCacheOutput
 */
export interface StorageGatewayAddCacheOutput {
  /**
   * @schema StorageGatewayAddCacheOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayAddTagsToResourceInput
 */
export interface StorageGatewayAddTagsToResourceInput {
  /**
   * @schema StorageGatewayAddTagsToResourceInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema StorageGatewayAddTagsToResourceInput#Tags
   */
  readonly tags: StorageGatewayTag[];

}

/**
 * @schema StorageGatewayAddTagsToResourceOutput
 */
export interface StorageGatewayAddTagsToResourceOutput {
  /**
   * @schema StorageGatewayAddTagsToResourceOutput#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * @schema StorageGatewayAddUploadBufferInput
 */
export interface StorageGatewayAddUploadBufferInput {
  /**
   * @schema StorageGatewayAddUploadBufferInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayAddUploadBufferInput#DiskIds
   */
  readonly diskIds: string[];

}

/**
 * @schema StorageGatewayAddUploadBufferOutput
 */
export interface StorageGatewayAddUploadBufferOutput {
  /**
   * @schema StorageGatewayAddUploadBufferOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayAddWorkingStorageInput
 */
export interface StorageGatewayAddWorkingStorageInput {
  /**
   * @schema StorageGatewayAddWorkingStorageInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayAddWorkingStorageInput#DiskIds
   */
  readonly diskIds: string[];

}

/**
 * @schema StorageGatewayAddWorkingStorageOutput
 */
export interface StorageGatewayAddWorkingStorageOutput {
  /**
   * @schema StorageGatewayAddWorkingStorageOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayAssignTapePoolInput
 */
export interface StorageGatewayAssignTapePoolInput {
  /**
   * @schema StorageGatewayAssignTapePoolInput#TapeARN
   */
  readonly tapeArn: string;

  /**
   * @schema StorageGatewayAssignTapePoolInput#PoolId
   */
  readonly poolId: string;

  /**
   * @schema StorageGatewayAssignTapePoolInput#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

}

/**
 * @schema StorageGatewayAssignTapePoolOutput
 */
export interface StorageGatewayAssignTapePoolOutput {
  /**
   * @schema StorageGatewayAssignTapePoolOutput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * @schema StorageGatewayAttachVolumeInput
 */
export interface StorageGatewayAttachVolumeInput {
  /**
   * @schema StorageGatewayAttachVolumeInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayAttachVolumeInput#TargetName
   */
  readonly targetName?: string;

  /**
   * @schema StorageGatewayAttachVolumeInput#VolumeARN
   */
  readonly volumeArn: string;

  /**
   * @schema StorageGatewayAttachVolumeInput#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema StorageGatewayAttachVolumeInput#DiskId
   */
  readonly diskId?: string;

}

/**
 * @schema StorageGatewayAttachVolumeOutput
 */
export interface StorageGatewayAttachVolumeOutput {
  /**
   * @schema StorageGatewayAttachVolumeOutput#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema StorageGatewayAttachVolumeOutput#TargetARN
   */
  readonly targetArn?: string;

}

/**
 * @schema StorageGatewayCancelArchivalInput
 */
export interface StorageGatewayCancelArchivalInput {
  /**
   * @schema StorageGatewayCancelArchivalInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayCancelArchivalInput#TapeARN
   */
  readonly tapeArn: string;

}

/**
 * @schema StorageGatewayCancelArchivalOutput
 */
export interface StorageGatewayCancelArchivalOutput {
  /**
   * @schema StorageGatewayCancelArchivalOutput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * @schema StorageGatewayCancelRetrievalInput
 */
export interface StorageGatewayCancelRetrievalInput {
  /**
   * @schema StorageGatewayCancelRetrievalInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayCancelRetrievalInput#TapeARN
   */
  readonly tapeArn: string;

}

/**
 * @schema StorageGatewayCancelRetrievalOutput
 */
export interface StorageGatewayCancelRetrievalOutput {
  /**
   * @schema StorageGatewayCancelRetrievalOutput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * @schema StorageGatewayCreateCachediScsiVolumeInput
 */
export interface StorageGatewayCreateCachediScsiVolumeInput {
  /**
   * @schema StorageGatewayCreateCachediScsiVolumeInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayCreateCachediScsiVolumeInput#VolumeSizeInBytes
   */
  readonly volumeSizeInBytes: number;

  /**
   * @schema StorageGatewayCreateCachediScsiVolumeInput#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema StorageGatewayCreateCachediScsiVolumeInput#TargetName
   */
  readonly targetName: string;

  /**
   * @schema StorageGatewayCreateCachediScsiVolumeInput#SourceVolumeARN
   */
  readonly sourceVolumeArn?: string;

  /**
   * @schema StorageGatewayCreateCachediScsiVolumeInput#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema StorageGatewayCreateCachediScsiVolumeInput#ClientToken
   */
  readonly clientToken: string;

  /**
   * @schema StorageGatewayCreateCachediScsiVolumeInput#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema StorageGatewayCreateCachediScsiVolumeInput#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StorageGatewayCreateCachediScsiVolumeInput#Tags
   */
  readonly tags?: StorageGatewayTag[];

}

/**
 * @schema StorageGatewayCreateCachediScsiVolumeOutput
 */
export interface StorageGatewayCreateCachediScsiVolumeOutput {
  /**
   * @schema StorageGatewayCreateCachediScsiVolumeOutput#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema StorageGatewayCreateCachediScsiVolumeOutput#TargetARN
   */
  readonly targetArn?: string;

}

/**
 * @schema StorageGatewayCreateNfsFileShareInput
 */
export interface StorageGatewayCreateNfsFileShareInput {
  /**
   * @schema StorageGatewayCreateNfsFileShareInput#ClientToken
   */
  readonly clientToken: string;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#NFSFileShareDefaults
   */
  readonly nfsFileShareDefaults?: StorageGatewayNfsFileShareDefaults;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#Role
   */
  readonly role: string;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#LocationARN
   */
  readonly locationArn: string;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#DefaultStorageClass
   */
  readonly defaultStorageClass?: string;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#ObjectACL
   */
  readonly objectAcl?: string;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#ClientList
   */
  readonly clientList?: string[];

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#Squash
   */
  readonly squash?: string;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#ReadOnly
   */
  readonly readOnly?: boolean;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#GuessMIMETypeEnabled
   */
  readonly guessMimeTypeEnabled?: boolean;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#RequesterPays
   */
  readonly requesterPays?: boolean;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#Tags
   */
  readonly tags?: StorageGatewayTag[];

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#FileShareName
   */
  readonly fileShareName?: string;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#CacheAttributes
   */
  readonly cacheAttributes?: StorageGatewayCacheAttributes;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#NotificationPolicy
   */
  readonly notificationPolicy?: string;

}

/**
 * @schema StorageGatewayCreateNfsFileShareOutput
 */
export interface StorageGatewayCreateNfsFileShareOutput {
  /**
   * @schema StorageGatewayCreateNfsFileShareOutput#FileShareARN
   */
  readonly fileShareArn?: string;

}

/**
 * @schema StorageGatewayCreateSmbFileShareInput
 */
export interface StorageGatewayCreateSmbFileShareInput {
  /**
   * @schema StorageGatewayCreateSmbFileShareInput#ClientToken
   */
  readonly clientToken: string;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#Role
   */
  readonly role: string;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#LocationARN
   */
  readonly locationArn: string;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#DefaultStorageClass
   */
  readonly defaultStorageClass?: string;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#ObjectACL
   */
  readonly objectAcl?: string;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#ReadOnly
   */
  readonly readOnly?: boolean;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#GuessMIMETypeEnabled
   */
  readonly guessMimeTypeEnabled?: boolean;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#RequesterPays
   */
  readonly requesterPays?: boolean;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#SMBACLEnabled
   */
  readonly smbaclEnabled?: boolean;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#AccessBasedEnumeration
   */
  readonly accessBasedEnumeration?: boolean;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#AdminUserList
   */
  readonly adminUserList?: string[];

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#ValidUserList
   */
  readonly validUserList?: string[];

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#InvalidUserList
   */
  readonly invalidUserList?: string[];

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#AuditDestinationARN
   */
  readonly auditDestinationArn?: string;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#Authentication
   */
  readonly authentication?: string;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#CaseSensitivity
   */
  readonly caseSensitivity?: string;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#Tags
   */
  readonly tags?: StorageGatewayTag[];

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#FileShareName
   */
  readonly fileShareName?: string;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#CacheAttributes
   */
  readonly cacheAttributes?: StorageGatewayCacheAttributes;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#NotificationPolicy
   */
  readonly notificationPolicy?: string;

}

/**
 * @schema StorageGatewayCreateSmbFileShareOutput
 */
export interface StorageGatewayCreateSmbFileShareOutput {
  /**
   * @schema StorageGatewayCreateSmbFileShareOutput#FileShareARN
   */
  readonly fileShareArn?: string;

}

/**
 * @schema StorageGatewayCreateSnapshotInput
 */
export interface StorageGatewayCreateSnapshotInput {
  /**
   * @schema StorageGatewayCreateSnapshotInput#VolumeARN
   */
  readonly volumeArn: string;

  /**
   * @schema StorageGatewayCreateSnapshotInput#SnapshotDescription
   */
  readonly snapshotDescription: string;

  /**
   * @schema StorageGatewayCreateSnapshotInput#Tags
   */
  readonly tags?: StorageGatewayTag[];

}

/**
 * @schema StorageGatewayCreateSnapshotOutput
 */
export interface StorageGatewayCreateSnapshotOutput {
  /**
   * @schema StorageGatewayCreateSnapshotOutput#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema StorageGatewayCreateSnapshotOutput#SnapshotId
   */
  readonly snapshotId?: string;

}

/**
 * @schema StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput
 */
export interface StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput {
  /**
   * @schema StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput#VolumeARN
   */
  readonly volumeArn: string;

  /**
   * @schema StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput#SnapshotDescription
   */
  readonly snapshotDescription: string;

  /**
   * @schema StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput#Tags
   */
  readonly tags?: StorageGatewayTag[];

}

/**
 * @schema StorageGatewayCreateSnapshotFromVolumeRecoveryPointOutput
 */
export interface StorageGatewayCreateSnapshotFromVolumeRecoveryPointOutput {
  /**
   * @schema StorageGatewayCreateSnapshotFromVolumeRecoveryPointOutput#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema StorageGatewayCreateSnapshotFromVolumeRecoveryPointOutput#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema StorageGatewayCreateSnapshotFromVolumeRecoveryPointOutput#VolumeRecoveryPointTime
   */
  readonly volumeRecoveryPointTime?: string;

}

/**
 * @schema StorageGatewayCreateStorediScsiVolumeInput
 */
export interface StorageGatewayCreateStorediScsiVolumeInput {
  /**
   * @schema StorageGatewayCreateStorediScsiVolumeInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayCreateStorediScsiVolumeInput#DiskId
   */
  readonly diskId: string;

  /**
   * @schema StorageGatewayCreateStorediScsiVolumeInput#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema StorageGatewayCreateStorediScsiVolumeInput#PreserveExistingData
   */
  readonly preserveExistingData: boolean;

  /**
   * @schema StorageGatewayCreateStorediScsiVolumeInput#TargetName
   */
  readonly targetName: string;

  /**
   * @schema StorageGatewayCreateStorediScsiVolumeInput#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema StorageGatewayCreateStorediScsiVolumeInput#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema StorageGatewayCreateStorediScsiVolumeInput#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StorageGatewayCreateStorediScsiVolumeInput#Tags
   */
  readonly tags?: StorageGatewayTag[];

}

/**
 * @schema StorageGatewayCreateStorediScsiVolumeOutput
 */
export interface StorageGatewayCreateStorediScsiVolumeOutput {
  /**
   * @schema StorageGatewayCreateStorediScsiVolumeOutput#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema StorageGatewayCreateStorediScsiVolumeOutput#VolumeSizeInBytes
   */
  readonly volumeSizeInBytes?: number;

  /**
   * @schema StorageGatewayCreateStorediScsiVolumeOutput#TargetARN
   */
  readonly targetArn?: string;

}

/**
 * @schema StorageGatewayCreateTapePoolInput
 */
export interface StorageGatewayCreateTapePoolInput {
  /**
   * @schema StorageGatewayCreateTapePoolInput#PoolName
   */
  readonly poolName: string;

  /**
   * @schema StorageGatewayCreateTapePoolInput#StorageClass
   */
  readonly storageClass: string;

  /**
   * @schema StorageGatewayCreateTapePoolInput#RetentionLockType
   */
  readonly retentionLockType?: string;

  /**
   * @schema StorageGatewayCreateTapePoolInput#RetentionLockTimeInDays
   */
  readonly retentionLockTimeInDays?: number;

  /**
   * @schema StorageGatewayCreateTapePoolInput#Tags
   */
  readonly tags?: StorageGatewayTag[];

}

/**
 * @schema StorageGatewayCreateTapePoolOutput
 */
export interface StorageGatewayCreateTapePoolOutput {
  /**
   * @schema StorageGatewayCreateTapePoolOutput#PoolARN
   */
  readonly poolArn?: string;

}

/**
 * @schema StorageGatewayCreateTapeWithBarcodeInput
 */
export interface StorageGatewayCreateTapeWithBarcodeInput {
  /**
   * @schema StorageGatewayCreateTapeWithBarcodeInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayCreateTapeWithBarcodeInput#TapeSizeInBytes
   */
  readonly tapeSizeInBytes: number;

  /**
   * @schema StorageGatewayCreateTapeWithBarcodeInput#TapeBarcode
   */
  readonly tapeBarcode: string;

  /**
   * @schema StorageGatewayCreateTapeWithBarcodeInput#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema StorageGatewayCreateTapeWithBarcodeInput#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StorageGatewayCreateTapeWithBarcodeInput#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema StorageGatewayCreateTapeWithBarcodeInput#Worm
   */
  readonly worm?: boolean;

  /**
   * @schema StorageGatewayCreateTapeWithBarcodeInput#Tags
   */
  readonly tags?: StorageGatewayTag[];

}

/**
 * @schema StorageGatewayCreateTapeWithBarcodeOutput
 */
export interface StorageGatewayCreateTapeWithBarcodeOutput {
  /**
   * @schema StorageGatewayCreateTapeWithBarcodeOutput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * @schema StorageGatewayCreateTapesInput
 */
export interface StorageGatewayCreateTapesInput {
  /**
   * @schema StorageGatewayCreateTapesInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayCreateTapesInput#TapeSizeInBytes
   */
  readonly tapeSizeInBytes: number;

  /**
   * @schema StorageGatewayCreateTapesInput#ClientToken
   */
  readonly clientToken: string;

  /**
   * @schema StorageGatewayCreateTapesInput#NumTapesToCreate
   */
  readonly numTapesToCreate: number;

  /**
   * @schema StorageGatewayCreateTapesInput#TapeBarcodePrefix
   */
  readonly tapeBarcodePrefix: string;

  /**
   * @schema StorageGatewayCreateTapesInput#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema StorageGatewayCreateTapesInput#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StorageGatewayCreateTapesInput#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema StorageGatewayCreateTapesInput#Worm
   */
  readonly worm?: boolean;

  /**
   * @schema StorageGatewayCreateTapesInput#Tags
   */
  readonly tags?: StorageGatewayTag[];

}

/**
 * @schema StorageGatewayCreateTapesOutput
 */
export interface StorageGatewayCreateTapesOutput {
  /**
   * @schema StorageGatewayCreateTapesOutput#TapeARNs
   */
  readonly tapeArNs?: string[];

}

/**
 * @schema StorageGatewayDeleteAutomaticTapeCreationPolicyInput
 */
export interface StorageGatewayDeleteAutomaticTapeCreationPolicyInput {
  /**
   * @schema StorageGatewayDeleteAutomaticTapeCreationPolicyInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayDeleteAutomaticTapeCreationPolicyOutput
 */
export interface StorageGatewayDeleteAutomaticTapeCreationPolicyOutput {
  /**
   * @schema StorageGatewayDeleteAutomaticTapeCreationPolicyOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayDeleteBandwidthRateLimitInput
 */
export interface StorageGatewayDeleteBandwidthRateLimitInput {
  /**
   * @schema StorageGatewayDeleteBandwidthRateLimitInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayDeleteBandwidthRateLimitInput#BandwidthType
   */
  readonly bandwidthType: string;

}

/**
 * @schema StorageGatewayDeleteBandwidthRateLimitOutput
 */
export interface StorageGatewayDeleteBandwidthRateLimitOutput {
  /**
   * @schema StorageGatewayDeleteBandwidthRateLimitOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayDeleteChapCredentialsInput
 */
export interface StorageGatewayDeleteChapCredentialsInput {
  /**
   * @schema StorageGatewayDeleteChapCredentialsInput#TargetARN
   */
  readonly targetArn: string;

  /**
   * @schema StorageGatewayDeleteChapCredentialsInput#InitiatorName
   */
  readonly initiatorName: string;

}

/**
 * @schema StorageGatewayDeleteChapCredentialsOutput
 */
export interface StorageGatewayDeleteChapCredentialsOutput {
  /**
   * @schema StorageGatewayDeleteChapCredentialsOutput#TargetARN
   */
  readonly targetArn?: string;

  /**
   * @schema StorageGatewayDeleteChapCredentialsOutput#InitiatorName
   */
  readonly initiatorName?: string;

}

/**
 * @schema StorageGatewayDeleteFileShareInput
 */
export interface StorageGatewayDeleteFileShareInput {
  /**
   * @schema StorageGatewayDeleteFileShareInput#FileShareARN
   */
  readonly fileShareArn: string;

  /**
   * @schema StorageGatewayDeleteFileShareInput#ForceDelete
   */
  readonly forceDelete?: boolean;

}

/**
 * @schema StorageGatewayDeleteFileShareOutput
 */
export interface StorageGatewayDeleteFileShareOutput {
  /**
   * @schema StorageGatewayDeleteFileShareOutput#FileShareARN
   */
  readonly fileShareArn?: string;

}

/**
 * @schema StorageGatewayDeleteGatewayInput
 */
export interface StorageGatewayDeleteGatewayInput {
  /**
   * @schema StorageGatewayDeleteGatewayInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayDeleteGatewayOutput
 */
export interface StorageGatewayDeleteGatewayOutput {
  /**
   * @schema StorageGatewayDeleteGatewayOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayDeleteSnapshotScheduleInput
 */
export interface StorageGatewayDeleteSnapshotScheduleInput {
  /**
   * @schema StorageGatewayDeleteSnapshotScheduleInput#VolumeARN
   */
  readonly volumeArn: string;

}

/**
 * @schema StorageGatewayDeleteSnapshotScheduleOutput
 */
export interface StorageGatewayDeleteSnapshotScheduleOutput {
  /**
   * @schema StorageGatewayDeleteSnapshotScheduleOutput#VolumeARN
   */
  readonly volumeArn?: string;

}

/**
 * @schema StorageGatewayDeleteTapeInput
 */
export interface StorageGatewayDeleteTapeInput {
  /**
   * @schema StorageGatewayDeleteTapeInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayDeleteTapeInput#TapeARN
   */
  readonly tapeArn: string;

  /**
   * @schema StorageGatewayDeleteTapeInput#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

}

/**
 * @schema StorageGatewayDeleteTapeOutput
 */
export interface StorageGatewayDeleteTapeOutput {
  /**
   * @schema StorageGatewayDeleteTapeOutput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * @schema StorageGatewayDeleteTapeArchiveInput
 */
export interface StorageGatewayDeleteTapeArchiveInput {
  /**
   * @schema StorageGatewayDeleteTapeArchiveInput#TapeARN
   */
  readonly tapeArn: string;

  /**
   * @schema StorageGatewayDeleteTapeArchiveInput#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

}

/**
 * @schema StorageGatewayDeleteTapeArchiveOutput
 */
export interface StorageGatewayDeleteTapeArchiveOutput {
  /**
   * @schema StorageGatewayDeleteTapeArchiveOutput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * @schema StorageGatewayDeleteTapePoolInput
 */
export interface StorageGatewayDeleteTapePoolInput {
  /**
   * @schema StorageGatewayDeleteTapePoolInput#PoolARN
   */
  readonly poolArn: string;

}

/**
 * @schema StorageGatewayDeleteTapePoolOutput
 */
export interface StorageGatewayDeleteTapePoolOutput {
  /**
   * @schema StorageGatewayDeleteTapePoolOutput#PoolARN
   */
  readonly poolArn?: string;

}

/**
 * @schema StorageGatewayDeleteVolumeInput
 */
export interface StorageGatewayDeleteVolumeInput {
  /**
   * @schema StorageGatewayDeleteVolumeInput#VolumeARN
   */
  readonly volumeArn: string;

}

/**
 * @schema StorageGatewayDeleteVolumeOutput
 */
export interface StorageGatewayDeleteVolumeOutput {
  /**
   * @schema StorageGatewayDeleteVolumeOutput#VolumeARN
   */
  readonly volumeArn?: string;

}

/**
 * @schema StorageGatewayDescribeAvailabilityMonitorTestInput
 */
export interface StorageGatewayDescribeAvailabilityMonitorTestInput {
  /**
   * @schema StorageGatewayDescribeAvailabilityMonitorTestInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayDescribeAvailabilityMonitorTestOutput
 */
export interface StorageGatewayDescribeAvailabilityMonitorTestOutput {
  /**
   * @schema StorageGatewayDescribeAvailabilityMonitorTestOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayDescribeAvailabilityMonitorTestOutput#Status
   */
  readonly status?: string;

  /**
   * @schema StorageGatewayDescribeAvailabilityMonitorTestOutput#StartTime
   */
  readonly startTime?: string;

}

/**
 * @schema StorageGatewayDescribeBandwidthRateLimitInput
 */
export interface StorageGatewayDescribeBandwidthRateLimitInput {
  /**
   * @schema StorageGatewayDescribeBandwidthRateLimitInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayDescribeBandwidthRateLimitOutput
 */
export interface StorageGatewayDescribeBandwidthRateLimitOutput {
  /**
   * @schema StorageGatewayDescribeBandwidthRateLimitOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayDescribeBandwidthRateLimitOutput#AverageUploadRateLimitInBitsPerSec
   */
  readonly averageUploadRateLimitInBitsPerSec?: number;

  /**
   * @schema StorageGatewayDescribeBandwidthRateLimitOutput#AverageDownloadRateLimitInBitsPerSec
   */
  readonly averageDownloadRateLimitInBitsPerSec?: number;

}

/**
 * @schema StorageGatewayDescribeBandwidthRateLimitScheduleInput
 */
export interface StorageGatewayDescribeBandwidthRateLimitScheduleInput {
  /**
   * @schema StorageGatewayDescribeBandwidthRateLimitScheduleInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayDescribeBandwidthRateLimitScheduleOutput
 */
export interface StorageGatewayDescribeBandwidthRateLimitScheduleOutput {
  /**
   * @schema StorageGatewayDescribeBandwidthRateLimitScheduleOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayDescribeBandwidthRateLimitScheduleOutput#BandwidthRateLimitIntervals
   */
  readonly bandwidthRateLimitIntervals?: StorageGatewayBandwidthRateLimitInterval[];

}

/**
 * @schema StorageGatewayDescribeCacheInput
 */
export interface StorageGatewayDescribeCacheInput {
  /**
   * @schema StorageGatewayDescribeCacheInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayDescribeCacheOutput
 */
export interface StorageGatewayDescribeCacheOutput {
  /**
   * @schema StorageGatewayDescribeCacheOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayDescribeCacheOutput#DiskIds
   */
  readonly diskIds?: string[];

  /**
   * @schema StorageGatewayDescribeCacheOutput#CacheAllocatedInBytes
   */
  readonly cacheAllocatedInBytes?: number;

  /**
   * @schema StorageGatewayDescribeCacheOutput#CacheUsedPercentage
   */
  readonly cacheUsedPercentage?: number;

  /**
   * @schema StorageGatewayDescribeCacheOutput#CacheDirtyPercentage
   */
  readonly cacheDirtyPercentage?: number;

  /**
   * @schema StorageGatewayDescribeCacheOutput#CacheHitPercentage
   */
  readonly cacheHitPercentage?: number;

  /**
   * @schema StorageGatewayDescribeCacheOutput#CacheMissPercentage
   */
  readonly cacheMissPercentage?: number;

}

/**
 * @schema StorageGatewayDescribeCachediScsiVolumesInput
 */
export interface StorageGatewayDescribeCachediScsiVolumesInput {
  /**
   * @schema StorageGatewayDescribeCachediScsiVolumesInput#VolumeARNs
   */
  readonly volumeArNs: string[];

}

/**
 * @schema StorageGatewayDescribeCachediScsiVolumesOutput
 */
export interface StorageGatewayDescribeCachediScsiVolumesOutput {
  /**
   * @schema StorageGatewayDescribeCachediScsiVolumesOutput#CachediSCSIVolumes
   */
  readonly cachediScsiVolumes?: StorageGatewayCachediScsiVolume[];

}

/**
 * @schema StorageGatewayDescribeChapCredentialsInput
 */
export interface StorageGatewayDescribeChapCredentialsInput {
  /**
   * @schema StorageGatewayDescribeChapCredentialsInput#TargetARN
   */
  readonly targetArn: string;

}

/**
 * @schema StorageGatewayDescribeChapCredentialsOutput
 */
export interface StorageGatewayDescribeChapCredentialsOutput {
  /**
   * @schema StorageGatewayDescribeChapCredentialsOutput#ChapCredentials
   */
  readonly chapCredentials?: StorageGatewayChapInfo[];

}

/**
 * @schema StorageGatewayDescribeGatewayInformationInput
 */
export interface StorageGatewayDescribeGatewayInformationInput {
  /**
   * @schema StorageGatewayDescribeGatewayInformationInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayDescribeGatewayInformationOutput
 */
export interface StorageGatewayDescribeGatewayInformationOutput {
  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#GatewayId
   */
  readonly gatewayId?: string;

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#GatewayName
   */
  readonly gatewayName?: string;

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#GatewayTimezone
   */
  readonly gatewayTimezone?: string;

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#GatewayState
   */
  readonly gatewayState?: string;

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#GatewayNetworkInterfaces
   */
  readonly gatewayNetworkInterfaces?: StorageGatewayNetworkInterface[];

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#GatewayType
   */
  readonly gatewayType?: string;

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#NextUpdateAvailabilityDate
   */
  readonly nextUpdateAvailabilityDate?: string;

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#LastSoftwareUpdate
   */
  readonly lastSoftwareUpdate?: string;

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#Ec2InstanceId
   */
  readonly ec2InstanceId?: string;

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#Ec2InstanceRegion
   */
  readonly ec2InstanceRegion?: string;

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#Tags
   */
  readonly tags?: StorageGatewayTag[];

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#VPCEndpoint
   */
  readonly vpcEndpoint?: string;

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#CloudWatchLogGroupARN
   */
  readonly cloudWatchLogGroupArn?: string;

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#HostEnvironment
   */
  readonly hostEnvironment?: string;

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#EndpointType
   */
  readonly endpointType?: string;

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#SoftwareUpdatesEndDate
   */
  readonly softwareUpdatesEndDate?: string;

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#DeprecationDate
   */
  readonly deprecationDate?: string;

}

/**
 * @schema StorageGatewayDescribeMaintenanceStartTimeInput
 */
export interface StorageGatewayDescribeMaintenanceStartTimeInput {
  /**
   * @schema StorageGatewayDescribeMaintenanceStartTimeInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayDescribeMaintenanceStartTimeOutput
 */
export interface StorageGatewayDescribeMaintenanceStartTimeOutput {
  /**
   * @schema StorageGatewayDescribeMaintenanceStartTimeOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayDescribeMaintenanceStartTimeOutput#HourOfDay
   */
  readonly hourOfDay?: number;

  /**
   * @schema StorageGatewayDescribeMaintenanceStartTimeOutput#MinuteOfHour
   */
  readonly minuteOfHour?: number;

  /**
   * @schema StorageGatewayDescribeMaintenanceStartTimeOutput#DayOfWeek
   */
  readonly dayOfWeek?: number;

  /**
   * @schema StorageGatewayDescribeMaintenanceStartTimeOutput#DayOfMonth
   */
  readonly dayOfMonth?: number;

  /**
   * @schema StorageGatewayDescribeMaintenanceStartTimeOutput#Timezone
   */
  readonly timezone?: string;

}

/**
 * @schema StorageGatewayDescribeNfsFileSharesInput
 */
export interface StorageGatewayDescribeNfsFileSharesInput {
  /**
   * @schema StorageGatewayDescribeNfsFileSharesInput#FileShareARNList
   */
  readonly fileShareArnList: string[];

}

/**
 * @schema StorageGatewayDescribeNfsFileSharesOutput
 */
export interface StorageGatewayDescribeNfsFileSharesOutput {
  /**
   * @schema StorageGatewayDescribeNfsFileSharesOutput#NFSFileShareInfoList
   */
  readonly nfsFileShareInfoList?: StorageGatewayNfsFileShareInfo[];

}

/**
 * @schema StorageGatewayDescribeSmbFileSharesInput
 */
export interface StorageGatewayDescribeSmbFileSharesInput {
  /**
   * @schema StorageGatewayDescribeSmbFileSharesInput#FileShareARNList
   */
  readonly fileShareArnList: string[];

}

/**
 * @schema StorageGatewayDescribeSmbFileSharesOutput
 */
export interface StorageGatewayDescribeSmbFileSharesOutput {
  /**
   * @schema StorageGatewayDescribeSmbFileSharesOutput#SMBFileShareInfoList
   */
  readonly smbFileShareInfoList?: StorageGatewaySmbFileShareInfo[];

}

/**
 * @schema StorageGatewayDescribeSmbSettingsInput
 */
export interface StorageGatewayDescribeSmbSettingsInput {
  /**
   * @schema StorageGatewayDescribeSmbSettingsInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayDescribeSmbSettingsOutput
 */
export interface StorageGatewayDescribeSmbSettingsOutput {
  /**
   * @schema StorageGatewayDescribeSmbSettingsOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayDescribeSmbSettingsOutput#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema StorageGatewayDescribeSmbSettingsOutput#ActiveDirectoryStatus
   */
  readonly activeDirectoryStatus?: string;

  /**
   * @schema StorageGatewayDescribeSmbSettingsOutput#SMBGuestPasswordSet
   */
  readonly smbGuestPasswordSet?: boolean;

  /**
   * @schema StorageGatewayDescribeSmbSettingsOutput#SMBSecurityStrategy
   */
  readonly smbSecurityStrategy?: string;

  /**
   * @schema StorageGatewayDescribeSmbSettingsOutput#FileSharesVisible
   */
  readonly fileSharesVisible?: boolean;

}

/**
 * @schema StorageGatewayDescribeSnapshotScheduleInput
 */
export interface StorageGatewayDescribeSnapshotScheduleInput {
  /**
   * @schema StorageGatewayDescribeSnapshotScheduleInput#VolumeARN
   */
  readonly volumeArn: string;

}

/**
 * @schema StorageGatewayDescribeSnapshotScheduleOutput
 */
export interface StorageGatewayDescribeSnapshotScheduleOutput {
  /**
   * @schema StorageGatewayDescribeSnapshotScheduleOutput#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema StorageGatewayDescribeSnapshotScheduleOutput#StartAt
   */
  readonly startAt?: number;

  /**
   * @schema StorageGatewayDescribeSnapshotScheduleOutput#RecurrenceInHours
   */
  readonly recurrenceInHours?: number;

  /**
   * @schema StorageGatewayDescribeSnapshotScheduleOutput#Description
   */
  readonly description?: string;

  /**
   * @schema StorageGatewayDescribeSnapshotScheduleOutput#Timezone
   */
  readonly timezone?: string;

  /**
   * @schema StorageGatewayDescribeSnapshotScheduleOutput#Tags
   */
  readonly tags?: StorageGatewayTag[];

}

/**
 * @schema StorageGatewayDescribeStorediScsiVolumesInput
 */
export interface StorageGatewayDescribeStorediScsiVolumesInput {
  /**
   * @schema StorageGatewayDescribeStorediScsiVolumesInput#VolumeARNs
   */
  readonly volumeArNs: string[];

}

/**
 * @schema StorageGatewayDescribeStorediScsiVolumesOutput
 */
export interface StorageGatewayDescribeStorediScsiVolumesOutput {
  /**
   * @schema StorageGatewayDescribeStorediScsiVolumesOutput#StorediSCSIVolumes
   */
  readonly storediScsiVolumes?: StorageGatewayStorediScsiVolume[];

}

/**
 * @schema StorageGatewayDescribeTapeArchivesInput
 */
export interface StorageGatewayDescribeTapeArchivesInput {
  /**
   * @schema StorageGatewayDescribeTapeArchivesInput#TapeARNs
   */
  readonly tapeArNs?: string[];

  /**
   * @schema StorageGatewayDescribeTapeArchivesInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema StorageGatewayDescribeTapeArchivesInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema StorageGatewayDescribeTapeArchivesOutput
 */
export interface StorageGatewayDescribeTapeArchivesOutput {
  /**
   * @schema StorageGatewayDescribeTapeArchivesOutput#TapeArchives
   */
  readonly tapeArchives?: StorageGatewayTapeArchive[];

  /**
   * @schema StorageGatewayDescribeTapeArchivesOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema StorageGatewayDescribeTapeRecoveryPointsInput
 */
export interface StorageGatewayDescribeTapeRecoveryPointsInput {
  /**
   * @schema StorageGatewayDescribeTapeRecoveryPointsInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayDescribeTapeRecoveryPointsInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema StorageGatewayDescribeTapeRecoveryPointsInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema StorageGatewayDescribeTapeRecoveryPointsOutput
 */
export interface StorageGatewayDescribeTapeRecoveryPointsOutput {
  /**
   * @schema StorageGatewayDescribeTapeRecoveryPointsOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayDescribeTapeRecoveryPointsOutput#TapeRecoveryPointInfos
   */
  readonly tapeRecoveryPointInfos?: StorageGatewayTapeRecoveryPointInfo[];

  /**
   * @schema StorageGatewayDescribeTapeRecoveryPointsOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema StorageGatewayDescribeTapesInput
 */
export interface StorageGatewayDescribeTapesInput {
  /**
   * @schema StorageGatewayDescribeTapesInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayDescribeTapesInput#TapeARNs
   */
  readonly tapeArNs?: string[];

  /**
   * @schema StorageGatewayDescribeTapesInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema StorageGatewayDescribeTapesInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema StorageGatewayDescribeTapesOutput
 */
export interface StorageGatewayDescribeTapesOutput {
  /**
   * @schema StorageGatewayDescribeTapesOutput#Tapes
   */
  readonly tapes?: StorageGatewayTape[];

  /**
   * @schema StorageGatewayDescribeTapesOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema StorageGatewayDescribeUploadBufferInput
 */
export interface StorageGatewayDescribeUploadBufferInput {
  /**
   * @schema StorageGatewayDescribeUploadBufferInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayDescribeUploadBufferOutput
 */
export interface StorageGatewayDescribeUploadBufferOutput {
  /**
   * @schema StorageGatewayDescribeUploadBufferOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayDescribeUploadBufferOutput#DiskIds
   */
  readonly diskIds?: string[];

  /**
   * @schema StorageGatewayDescribeUploadBufferOutput#UploadBufferUsedInBytes
   */
  readonly uploadBufferUsedInBytes?: number;

  /**
   * @schema StorageGatewayDescribeUploadBufferOutput#UploadBufferAllocatedInBytes
   */
  readonly uploadBufferAllocatedInBytes?: number;

}

/**
 * @schema StorageGatewayDescribeVtlDevicesInput
 */
export interface StorageGatewayDescribeVtlDevicesInput {
  /**
   * @schema StorageGatewayDescribeVtlDevicesInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayDescribeVtlDevicesInput#VTLDeviceARNs
   */
  readonly vtlDeviceArNs?: string[];

  /**
   * @schema StorageGatewayDescribeVtlDevicesInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema StorageGatewayDescribeVtlDevicesInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema StorageGatewayDescribeVtlDevicesOutput
 */
export interface StorageGatewayDescribeVtlDevicesOutput {
  /**
   * @schema StorageGatewayDescribeVtlDevicesOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayDescribeVtlDevicesOutput#VTLDevices
   */
  readonly vtlDevices?: StorageGatewayVtlDevice[];

  /**
   * @schema StorageGatewayDescribeVtlDevicesOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema StorageGatewayDescribeWorkingStorageInput
 */
export interface StorageGatewayDescribeWorkingStorageInput {
  /**
   * @schema StorageGatewayDescribeWorkingStorageInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayDescribeWorkingStorageOutput
 */
export interface StorageGatewayDescribeWorkingStorageOutput {
  /**
   * @schema StorageGatewayDescribeWorkingStorageOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayDescribeWorkingStorageOutput#DiskIds
   */
  readonly diskIds?: string[];

  /**
   * @schema StorageGatewayDescribeWorkingStorageOutput#WorkingStorageUsedInBytes
   */
  readonly workingStorageUsedInBytes?: number;

  /**
   * @schema StorageGatewayDescribeWorkingStorageOutput#WorkingStorageAllocatedInBytes
   */
  readonly workingStorageAllocatedInBytes?: number;

}

/**
 * @schema StorageGatewayDetachVolumeInput
 */
export interface StorageGatewayDetachVolumeInput {
  /**
   * @schema StorageGatewayDetachVolumeInput#VolumeARN
   */
  readonly volumeArn: string;

  /**
   * @schema StorageGatewayDetachVolumeInput#ForceDetach
   */
  readonly forceDetach?: boolean;

}

/**
 * @schema StorageGatewayDetachVolumeOutput
 */
export interface StorageGatewayDetachVolumeOutput {
  /**
   * @schema StorageGatewayDetachVolumeOutput#VolumeARN
   */
  readonly volumeArn?: string;

}

/**
 * @schema StorageGatewayDisableGatewayInput
 */
export interface StorageGatewayDisableGatewayInput {
  /**
   * @schema StorageGatewayDisableGatewayInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayDisableGatewayOutput
 */
export interface StorageGatewayDisableGatewayOutput {
  /**
   * @schema StorageGatewayDisableGatewayOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayJoinDomainInput
 */
export interface StorageGatewayJoinDomainInput {
  /**
   * @schema StorageGatewayJoinDomainInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayJoinDomainInput#DomainName
   */
  readonly domainName: string;

  /**
   * @schema StorageGatewayJoinDomainInput#OrganizationalUnit
   */
  readonly organizationalUnit?: string;

  /**
   * @schema StorageGatewayJoinDomainInput#DomainControllers
   */
  readonly domainControllers?: string[];

  /**
   * @schema StorageGatewayJoinDomainInput#TimeoutInSeconds
   */
  readonly timeoutInSeconds?: number;

  /**
   * @schema StorageGatewayJoinDomainInput#UserName
   */
  readonly userName: string;

  /**
   * @schema StorageGatewayJoinDomainInput#Password
   */
  readonly password: string;

}

/**
 * @schema StorageGatewayJoinDomainOutput
 */
export interface StorageGatewayJoinDomainOutput {
  /**
   * @schema StorageGatewayJoinDomainOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayJoinDomainOutput#ActiveDirectoryStatus
   */
  readonly activeDirectoryStatus?: string;

}

/**
 * @schema StorageGatewayListAutomaticTapeCreationPoliciesInput
 */
export interface StorageGatewayListAutomaticTapeCreationPoliciesInput {
  /**
   * @schema StorageGatewayListAutomaticTapeCreationPoliciesInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayListAutomaticTapeCreationPoliciesOutput
 */
export interface StorageGatewayListAutomaticTapeCreationPoliciesOutput {
  /**
   * @schema StorageGatewayListAutomaticTapeCreationPoliciesOutput#AutomaticTapeCreationPolicyInfos
   */
  readonly automaticTapeCreationPolicyInfos?: StorageGatewayAutomaticTapeCreationPolicyInfo[];

}

/**
 * @schema StorageGatewayListFileSharesInput
 */
export interface StorageGatewayListFileSharesInput {
  /**
   * @schema StorageGatewayListFileSharesInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayListFileSharesInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema StorageGatewayListFileSharesInput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema StorageGatewayListFileSharesOutput
 */
export interface StorageGatewayListFileSharesOutput {
  /**
   * @schema StorageGatewayListFileSharesOutput#Marker
   */
  readonly marker?: string;

  /**
   * @schema StorageGatewayListFileSharesOutput#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema StorageGatewayListFileSharesOutput#FileShareInfoList
   */
  readonly fileShareInfoList?: StorageGatewayFileShareInfo[];

}

/**
 * @schema StorageGatewayListGatewaysInput
 */
export interface StorageGatewayListGatewaysInput {
  /**
   * @schema StorageGatewayListGatewaysInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema StorageGatewayListGatewaysInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema StorageGatewayListGatewaysOutput
 */
export interface StorageGatewayListGatewaysOutput {
  /**
   * @schema StorageGatewayListGatewaysOutput#Gateways
   */
  readonly gateways?: StorageGatewayGatewayInfo[];

  /**
   * @schema StorageGatewayListGatewaysOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema StorageGatewayListLocalDisksInput
 */
export interface StorageGatewayListLocalDisksInput {
  /**
   * @schema StorageGatewayListLocalDisksInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayListLocalDisksOutput
 */
export interface StorageGatewayListLocalDisksOutput {
  /**
   * @schema StorageGatewayListLocalDisksOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayListLocalDisksOutput#Disks
   */
  readonly disks?: StorageGatewayDisk[];

}

/**
 * @schema StorageGatewayListTagsForResourceInput
 */
export interface StorageGatewayListTagsForResourceInput {
  /**
   * @schema StorageGatewayListTagsForResourceInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema StorageGatewayListTagsForResourceInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema StorageGatewayListTagsForResourceInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema StorageGatewayListTagsForResourceOutput
 */
export interface StorageGatewayListTagsForResourceOutput {
  /**
   * @schema StorageGatewayListTagsForResourceOutput#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema StorageGatewayListTagsForResourceOutput#Marker
   */
  readonly marker?: string;

  /**
   * @schema StorageGatewayListTagsForResourceOutput#Tags
   */
  readonly tags?: StorageGatewayTag[];

}

/**
 * @schema StorageGatewayListTapePoolsInput
 */
export interface StorageGatewayListTapePoolsInput {
  /**
   * @schema StorageGatewayListTapePoolsInput#PoolARNs
   */
  readonly poolArNs?: string[];

  /**
   * @schema StorageGatewayListTapePoolsInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema StorageGatewayListTapePoolsInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema StorageGatewayListTapePoolsOutput
 */
export interface StorageGatewayListTapePoolsOutput {
  /**
   * @schema StorageGatewayListTapePoolsOutput#PoolInfos
   */
  readonly poolInfos?: StorageGatewayPoolInfo[];

  /**
   * @schema StorageGatewayListTapePoolsOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema StorageGatewayListTapesInput
 */
export interface StorageGatewayListTapesInput {
  /**
   * @schema StorageGatewayListTapesInput#TapeARNs
   */
  readonly tapeArNs?: string[];

  /**
   * @schema StorageGatewayListTapesInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema StorageGatewayListTapesInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema StorageGatewayListTapesOutput
 */
export interface StorageGatewayListTapesOutput {
  /**
   * @schema StorageGatewayListTapesOutput#TapeInfos
   */
  readonly tapeInfos?: StorageGatewayTapeInfo[];

  /**
   * @schema StorageGatewayListTapesOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema StorageGatewayListVolumeInitiatorsInput
 */
export interface StorageGatewayListVolumeInitiatorsInput {
  /**
   * @schema StorageGatewayListVolumeInitiatorsInput#VolumeARN
   */
  readonly volumeArn: string;

}

/**
 * @schema StorageGatewayListVolumeInitiatorsOutput
 */
export interface StorageGatewayListVolumeInitiatorsOutput {
  /**
   * @schema StorageGatewayListVolumeInitiatorsOutput#Initiators
   */
  readonly initiators?: string[];

}

/**
 * @schema StorageGatewayListVolumeRecoveryPointsInput
 */
export interface StorageGatewayListVolumeRecoveryPointsInput {
  /**
   * @schema StorageGatewayListVolumeRecoveryPointsInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayListVolumeRecoveryPointsOutput
 */
export interface StorageGatewayListVolumeRecoveryPointsOutput {
  /**
   * @schema StorageGatewayListVolumeRecoveryPointsOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayListVolumeRecoveryPointsOutput#VolumeRecoveryPointInfos
   */
  readonly volumeRecoveryPointInfos?: StorageGatewayVolumeRecoveryPointInfo[];

}

/**
 * @schema StorageGatewayListVolumesInput
 */
export interface StorageGatewayListVolumesInput {
  /**
   * @schema StorageGatewayListVolumesInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayListVolumesInput#Marker
   */
  readonly marker?: string;

  /**
   * @schema StorageGatewayListVolumesInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema StorageGatewayListVolumesOutput
 */
export interface StorageGatewayListVolumesOutput {
  /**
   * @schema StorageGatewayListVolumesOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayListVolumesOutput#Marker
   */
  readonly marker?: string;

  /**
   * @schema StorageGatewayListVolumesOutput#VolumeInfos
   */
  readonly volumeInfos?: StorageGatewayVolumeInfo[];

}

/**
 * @schema StorageGatewayNotifyWhenUploadedInput
 */
export interface StorageGatewayNotifyWhenUploadedInput {
  /**
   * @schema StorageGatewayNotifyWhenUploadedInput#FileShareARN
   */
  readonly fileShareArn: string;

}

/**
 * @schema StorageGatewayNotifyWhenUploadedOutput
 */
export interface StorageGatewayNotifyWhenUploadedOutput {
  /**
   * @schema StorageGatewayNotifyWhenUploadedOutput#FileShareARN
   */
  readonly fileShareArn?: string;

  /**
   * @schema StorageGatewayNotifyWhenUploadedOutput#NotificationId
   */
  readonly notificationId?: string;

}

/**
 * @schema StorageGatewayRefreshCacheInput
 */
export interface StorageGatewayRefreshCacheInput {
  /**
   * @schema StorageGatewayRefreshCacheInput#FileShareARN
   */
  readonly fileShareArn: string;

  /**
   * @schema StorageGatewayRefreshCacheInput#FolderList
   */
  readonly folderList?: string[];

  /**
   * @schema StorageGatewayRefreshCacheInput#Recursive
   */
  readonly recursive?: boolean;

}

/**
 * @schema StorageGatewayRefreshCacheOutput
 */
export interface StorageGatewayRefreshCacheOutput {
  /**
   * @schema StorageGatewayRefreshCacheOutput#FileShareARN
   */
  readonly fileShareArn?: string;

  /**
   * @schema StorageGatewayRefreshCacheOutput#NotificationId
   */
  readonly notificationId?: string;

}

/**
 * @schema StorageGatewayRemoveTagsFromResourceInput
 */
export interface StorageGatewayRemoveTagsFromResourceInput {
  /**
   * @schema StorageGatewayRemoveTagsFromResourceInput#ResourceARN
   */
  readonly resourceArn: string;

  /**
   * @schema StorageGatewayRemoveTagsFromResourceInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema StorageGatewayRemoveTagsFromResourceOutput
 */
export interface StorageGatewayRemoveTagsFromResourceOutput {
  /**
   * @schema StorageGatewayRemoveTagsFromResourceOutput#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * @schema StorageGatewayResetCacheInput
 */
export interface StorageGatewayResetCacheInput {
  /**
   * @schema StorageGatewayResetCacheInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayResetCacheOutput
 */
export interface StorageGatewayResetCacheOutput {
  /**
   * @schema StorageGatewayResetCacheOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayRetrieveTapeArchiveInput
 */
export interface StorageGatewayRetrieveTapeArchiveInput {
  /**
   * @schema StorageGatewayRetrieveTapeArchiveInput#TapeARN
   */
  readonly tapeArn: string;

  /**
   * @schema StorageGatewayRetrieveTapeArchiveInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayRetrieveTapeArchiveOutput
 */
export interface StorageGatewayRetrieveTapeArchiveOutput {
  /**
   * @schema StorageGatewayRetrieveTapeArchiveOutput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * @schema StorageGatewayRetrieveTapeRecoveryPointInput
 */
export interface StorageGatewayRetrieveTapeRecoveryPointInput {
  /**
   * @schema StorageGatewayRetrieveTapeRecoveryPointInput#TapeARN
   */
  readonly tapeArn: string;

  /**
   * @schema StorageGatewayRetrieveTapeRecoveryPointInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayRetrieveTapeRecoveryPointOutput
 */
export interface StorageGatewayRetrieveTapeRecoveryPointOutput {
  /**
   * @schema StorageGatewayRetrieveTapeRecoveryPointOutput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * @schema StorageGatewaySetLocalConsolePasswordInput
 */
export interface StorageGatewaySetLocalConsolePasswordInput {
  /**
   * @schema StorageGatewaySetLocalConsolePasswordInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewaySetLocalConsolePasswordInput#LocalConsolePassword
   */
  readonly localConsolePassword: string;

}

/**
 * @schema StorageGatewaySetLocalConsolePasswordOutput
 */
export interface StorageGatewaySetLocalConsolePasswordOutput {
  /**
   * @schema StorageGatewaySetLocalConsolePasswordOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewaySetSmbGuestPasswordInput
 */
export interface StorageGatewaySetSmbGuestPasswordInput {
  /**
   * @schema StorageGatewaySetSmbGuestPasswordInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewaySetSmbGuestPasswordInput#Password
   */
  readonly password: string;

}

/**
 * @schema StorageGatewaySetSmbGuestPasswordOutput
 */
export interface StorageGatewaySetSmbGuestPasswordOutput {
  /**
   * @schema StorageGatewaySetSmbGuestPasswordOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayShutdownGatewayInput
 */
export interface StorageGatewayShutdownGatewayInput {
  /**
   * @schema StorageGatewayShutdownGatewayInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayShutdownGatewayOutput
 */
export interface StorageGatewayShutdownGatewayOutput {
  /**
   * @schema StorageGatewayShutdownGatewayOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayStartAvailabilityMonitorTestInput
 */
export interface StorageGatewayStartAvailabilityMonitorTestInput {
  /**
   * @schema StorageGatewayStartAvailabilityMonitorTestInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayStartAvailabilityMonitorTestOutput
 */
export interface StorageGatewayStartAvailabilityMonitorTestOutput {
  /**
   * @schema StorageGatewayStartAvailabilityMonitorTestOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayStartGatewayInput
 */
export interface StorageGatewayStartGatewayInput {
  /**
   * @schema StorageGatewayStartGatewayInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayStartGatewayOutput
 */
export interface StorageGatewayStartGatewayOutput {
  /**
   * @schema StorageGatewayStartGatewayOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayUpdateAutomaticTapeCreationPolicyInput
 */
export interface StorageGatewayUpdateAutomaticTapeCreationPolicyInput {
  /**
   * @schema StorageGatewayUpdateAutomaticTapeCreationPolicyInput#AutomaticTapeCreationRules
   */
  readonly automaticTapeCreationRules: StorageGatewayAutomaticTapeCreationRule[];

  /**
   * @schema StorageGatewayUpdateAutomaticTapeCreationPolicyInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayUpdateAutomaticTapeCreationPolicyOutput
 */
export interface StorageGatewayUpdateAutomaticTapeCreationPolicyOutput {
  /**
   * @schema StorageGatewayUpdateAutomaticTapeCreationPolicyOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayUpdateBandwidthRateLimitInput
 */
export interface StorageGatewayUpdateBandwidthRateLimitInput {
  /**
   * @schema StorageGatewayUpdateBandwidthRateLimitInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayUpdateBandwidthRateLimitInput#AverageUploadRateLimitInBitsPerSec
   */
  readonly averageUploadRateLimitInBitsPerSec?: number;

  /**
   * @schema StorageGatewayUpdateBandwidthRateLimitInput#AverageDownloadRateLimitInBitsPerSec
   */
  readonly averageDownloadRateLimitInBitsPerSec?: number;

}

/**
 * @schema StorageGatewayUpdateBandwidthRateLimitOutput
 */
export interface StorageGatewayUpdateBandwidthRateLimitOutput {
  /**
   * @schema StorageGatewayUpdateBandwidthRateLimitOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayUpdateBandwidthRateLimitScheduleInput
 */
export interface StorageGatewayUpdateBandwidthRateLimitScheduleInput {
  /**
   * @schema StorageGatewayUpdateBandwidthRateLimitScheduleInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayUpdateBandwidthRateLimitScheduleInput#BandwidthRateLimitIntervals
   */
  readonly bandwidthRateLimitIntervals: StorageGatewayBandwidthRateLimitInterval[];

}

/**
 * @schema StorageGatewayUpdateBandwidthRateLimitScheduleOutput
 */
export interface StorageGatewayUpdateBandwidthRateLimitScheduleOutput {
  /**
   * @schema StorageGatewayUpdateBandwidthRateLimitScheduleOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayUpdateChapCredentialsInput
 */
export interface StorageGatewayUpdateChapCredentialsInput {
  /**
   * @schema StorageGatewayUpdateChapCredentialsInput#TargetARN
   */
  readonly targetArn: string;

  /**
   * @schema StorageGatewayUpdateChapCredentialsInput#SecretToAuthenticateInitiator
   */
  readonly secretToAuthenticateInitiator: string;

  /**
   * @schema StorageGatewayUpdateChapCredentialsInput#InitiatorName
   */
  readonly initiatorName: string;

  /**
   * @schema StorageGatewayUpdateChapCredentialsInput#SecretToAuthenticateTarget
   */
  readonly secretToAuthenticateTarget?: string;

}

/**
 * @schema StorageGatewayUpdateChapCredentialsOutput
 */
export interface StorageGatewayUpdateChapCredentialsOutput {
  /**
   * @schema StorageGatewayUpdateChapCredentialsOutput#TargetARN
   */
  readonly targetArn?: string;

  /**
   * @schema StorageGatewayUpdateChapCredentialsOutput#InitiatorName
   */
  readonly initiatorName?: string;

}

/**
 * @schema StorageGatewayUpdateGatewayInformationInput
 */
export interface StorageGatewayUpdateGatewayInformationInput {
  /**
   * @schema StorageGatewayUpdateGatewayInformationInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayUpdateGatewayInformationInput#GatewayName
   */
  readonly gatewayName?: string;

  /**
   * @schema StorageGatewayUpdateGatewayInformationInput#GatewayTimezone
   */
  readonly gatewayTimezone?: string;

  /**
   * @schema StorageGatewayUpdateGatewayInformationInput#CloudWatchLogGroupARN
   */
  readonly cloudWatchLogGroupArn?: string;

}

/**
 * @schema StorageGatewayUpdateGatewayInformationOutput
 */
export interface StorageGatewayUpdateGatewayInformationOutput {
  /**
   * @schema StorageGatewayUpdateGatewayInformationOutput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayUpdateGatewayInformationOutput#GatewayName
   */
  readonly gatewayName?: string;

}

/**
 * @schema StorageGatewayUpdateGatewaySoftwareNowInput
 */
export interface StorageGatewayUpdateGatewaySoftwareNowInput {
  /**
   * @schema StorageGatewayUpdateGatewaySoftwareNowInput#GatewayARN
   */
  readonly gatewayArn: string;

}

/**
 * @schema StorageGatewayUpdateGatewaySoftwareNowOutput
 */
export interface StorageGatewayUpdateGatewaySoftwareNowOutput {
  /**
   * @schema StorageGatewayUpdateGatewaySoftwareNowOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayUpdateMaintenanceStartTimeInput
 */
export interface StorageGatewayUpdateMaintenanceStartTimeInput {
  /**
   * @schema StorageGatewayUpdateMaintenanceStartTimeInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayUpdateMaintenanceStartTimeInput#HourOfDay
   */
  readonly hourOfDay: number;

  /**
   * @schema StorageGatewayUpdateMaintenanceStartTimeInput#MinuteOfHour
   */
  readonly minuteOfHour: number;

  /**
   * @schema StorageGatewayUpdateMaintenanceStartTimeInput#DayOfWeek
   */
  readonly dayOfWeek?: number;

  /**
   * @schema StorageGatewayUpdateMaintenanceStartTimeInput#DayOfMonth
   */
  readonly dayOfMonth?: number;

}

/**
 * @schema StorageGatewayUpdateMaintenanceStartTimeOutput
 */
export interface StorageGatewayUpdateMaintenanceStartTimeOutput {
  /**
   * @schema StorageGatewayUpdateMaintenanceStartTimeOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayUpdateNfsFileShareInput
 */
export interface StorageGatewayUpdateNfsFileShareInput {
  /**
   * @schema StorageGatewayUpdateNfsFileShareInput#FileShareARN
   */
  readonly fileShareArn: string;

  /**
   * @schema StorageGatewayUpdateNfsFileShareInput#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema StorageGatewayUpdateNfsFileShareInput#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StorageGatewayUpdateNfsFileShareInput#NFSFileShareDefaults
   */
  readonly nfsFileShareDefaults?: StorageGatewayNfsFileShareDefaults;

  /**
   * @schema StorageGatewayUpdateNfsFileShareInput#DefaultStorageClass
   */
  readonly defaultStorageClass?: string;

  /**
   * @schema StorageGatewayUpdateNfsFileShareInput#ObjectACL
   */
  readonly objectAcl?: string;

  /**
   * @schema StorageGatewayUpdateNfsFileShareInput#ClientList
   */
  readonly clientList?: string[];

  /**
   * @schema StorageGatewayUpdateNfsFileShareInput#Squash
   */
  readonly squash?: string;

  /**
   * @schema StorageGatewayUpdateNfsFileShareInput#ReadOnly
   */
  readonly readOnly?: boolean;

  /**
   * @schema StorageGatewayUpdateNfsFileShareInput#GuessMIMETypeEnabled
   */
  readonly guessMimeTypeEnabled?: boolean;

  /**
   * @schema StorageGatewayUpdateNfsFileShareInput#RequesterPays
   */
  readonly requesterPays?: boolean;

  /**
   * @schema StorageGatewayUpdateNfsFileShareInput#FileShareName
   */
  readonly fileShareName?: string;

  /**
   * @schema StorageGatewayUpdateNfsFileShareInput#CacheAttributes
   */
  readonly cacheAttributes?: StorageGatewayCacheAttributes;

  /**
   * @schema StorageGatewayUpdateNfsFileShareInput#NotificationPolicy
   */
  readonly notificationPolicy?: string;

}

/**
 * @schema StorageGatewayUpdateNfsFileShareOutput
 */
export interface StorageGatewayUpdateNfsFileShareOutput {
  /**
   * @schema StorageGatewayUpdateNfsFileShareOutput#FileShareARN
   */
  readonly fileShareArn?: string;

}

/**
 * @schema StorageGatewayUpdateSmbFileShareInput
 */
export interface StorageGatewayUpdateSmbFileShareInput {
  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#FileShareARN
   */
  readonly fileShareArn: string;

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#DefaultStorageClass
   */
  readonly defaultStorageClass?: string;

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#ObjectACL
   */
  readonly objectAcl?: string;

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#ReadOnly
   */
  readonly readOnly?: boolean;

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#GuessMIMETypeEnabled
   */
  readonly guessMimeTypeEnabled?: boolean;

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#RequesterPays
   */
  readonly requesterPays?: boolean;

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#SMBACLEnabled
   */
  readonly smbaclEnabled?: boolean;

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#AccessBasedEnumeration
   */
  readonly accessBasedEnumeration?: boolean;

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#AdminUserList
   */
  readonly adminUserList?: string[];

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#ValidUserList
   */
  readonly validUserList?: string[];

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#InvalidUserList
   */
  readonly invalidUserList?: string[];

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#AuditDestinationARN
   */
  readonly auditDestinationArn?: string;

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#CaseSensitivity
   */
  readonly caseSensitivity?: string;

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#FileShareName
   */
  readonly fileShareName?: string;

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#CacheAttributes
   */
  readonly cacheAttributes?: StorageGatewayCacheAttributes;

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#NotificationPolicy
   */
  readonly notificationPolicy?: string;

}

/**
 * @schema StorageGatewayUpdateSmbFileShareOutput
 */
export interface StorageGatewayUpdateSmbFileShareOutput {
  /**
   * @schema StorageGatewayUpdateSmbFileShareOutput#FileShareARN
   */
  readonly fileShareArn?: string;

}

/**
 * @schema StorageGatewayUpdateSmbFileShareVisibilityInput
 */
export interface StorageGatewayUpdateSmbFileShareVisibilityInput {
  /**
   * @schema StorageGatewayUpdateSmbFileShareVisibilityInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayUpdateSmbFileShareVisibilityInput#FileSharesVisible
   */
  readonly fileSharesVisible: boolean;

}

/**
 * @schema StorageGatewayUpdateSmbFileShareVisibilityOutput
 */
export interface StorageGatewayUpdateSmbFileShareVisibilityOutput {
  /**
   * @schema StorageGatewayUpdateSmbFileShareVisibilityOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayUpdateSmbSecurityStrategyInput
 */
export interface StorageGatewayUpdateSmbSecurityStrategyInput {
  /**
   * @schema StorageGatewayUpdateSmbSecurityStrategyInput#GatewayARN
   */
  readonly gatewayArn: string;

  /**
   * @schema StorageGatewayUpdateSmbSecurityStrategyInput#SMBSecurityStrategy
   */
  readonly smbSecurityStrategy: string;

}

/**
 * @schema StorageGatewayUpdateSmbSecurityStrategyOutput
 */
export interface StorageGatewayUpdateSmbSecurityStrategyOutput {
  /**
   * @schema StorageGatewayUpdateSmbSecurityStrategyOutput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayUpdateSnapshotScheduleInput
 */
export interface StorageGatewayUpdateSnapshotScheduleInput {
  /**
   * @schema StorageGatewayUpdateSnapshotScheduleInput#VolumeARN
   */
  readonly volumeArn: string;

  /**
   * @schema StorageGatewayUpdateSnapshotScheduleInput#StartAt
   */
  readonly startAt: number;

  /**
   * @schema StorageGatewayUpdateSnapshotScheduleInput#RecurrenceInHours
   */
  readonly recurrenceInHours: number;

  /**
   * @schema StorageGatewayUpdateSnapshotScheduleInput#Description
   */
  readonly description?: string;

  /**
   * @schema StorageGatewayUpdateSnapshotScheduleInput#Tags
   */
  readonly tags?: StorageGatewayTag[];

}

/**
 * @schema StorageGatewayUpdateSnapshotScheduleOutput
 */
export interface StorageGatewayUpdateSnapshotScheduleOutput {
  /**
   * @schema StorageGatewayUpdateSnapshotScheduleOutput#VolumeARN
   */
  readonly volumeArn?: string;

}

/**
 * @schema StorageGatewayUpdateVtlDeviceTypeInput
 */
export interface StorageGatewayUpdateVtlDeviceTypeInput {
  /**
   * @schema StorageGatewayUpdateVtlDeviceTypeInput#VTLDeviceARN
   */
  readonly vtlDeviceArn: string;

  /**
   * @schema StorageGatewayUpdateVtlDeviceTypeInput#DeviceType
   */
  readonly deviceType: string;

}

/**
 * @schema StorageGatewayUpdateVtlDeviceTypeOutput
 */
export interface StorageGatewayUpdateVtlDeviceTypeOutput {
  /**
   * @schema StorageGatewayUpdateVtlDeviceTypeOutput#VTLDeviceARN
   */
  readonly vtlDeviceArn?: string;

}

/**
 * @schema StorageGatewayTag
 */
export interface StorageGatewayTag {
  /**
   * @schema StorageGatewayTag#Key
   */
  readonly key: string;

  /**
   * @schema StorageGatewayTag#Value
   */
  readonly value: string;

}

/**
 * @schema StorageGatewayNfsFileShareDefaults
 */
export interface StorageGatewayNfsFileShareDefaults {
  /**
   * @schema StorageGatewayNfsFileShareDefaults#FileMode
   */
  readonly fileMode?: string;

  /**
   * @schema StorageGatewayNfsFileShareDefaults#DirectoryMode
   */
  readonly directoryMode?: string;

  /**
   * @schema StorageGatewayNfsFileShareDefaults#GroupId
   */
  readonly groupId?: number;

  /**
   * @schema StorageGatewayNfsFileShareDefaults#OwnerId
   */
  readonly ownerId?: number;

}

/**
 * @schema StorageGatewayCacheAttributes
 */
export interface StorageGatewayCacheAttributes {
  /**
   * @schema StorageGatewayCacheAttributes#CacheStaleTimeoutInSeconds
   */
  readonly cacheStaleTimeoutInSeconds?: number;

}

/**
 * @schema StorageGatewayBandwidthRateLimitInterval
 */
export interface StorageGatewayBandwidthRateLimitInterval {
  /**
   * @schema StorageGatewayBandwidthRateLimitInterval#StartHourOfDay
   */
  readonly startHourOfDay: number;

  /**
   * @schema StorageGatewayBandwidthRateLimitInterval#StartMinuteOfHour
   */
  readonly startMinuteOfHour: number;

  /**
   * @schema StorageGatewayBandwidthRateLimitInterval#EndHourOfDay
   */
  readonly endHourOfDay: number;

  /**
   * @schema StorageGatewayBandwidthRateLimitInterval#EndMinuteOfHour
   */
  readonly endMinuteOfHour: number;

  /**
   * @schema StorageGatewayBandwidthRateLimitInterval#DaysOfWeek
   */
  readonly daysOfWeek: number[];

  /**
   * @schema StorageGatewayBandwidthRateLimitInterval#AverageUploadRateLimitInBitsPerSec
   */
  readonly averageUploadRateLimitInBitsPerSec?: number;

  /**
   * @schema StorageGatewayBandwidthRateLimitInterval#AverageDownloadRateLimitInBitsPerSec
   */
  readonly averageDownloadRateLimitInBitsPerSec?: number;

}

/**
 * @schema StorageGatewayCachediScsiVolume
 */
export interface StorageGatewayCachediScsiVolume {
  /**
   * @schema StorageGatewayCachediScsiVolume#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema StorageGatewayCachediScsiVolume#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema StorageGatewayCachediScsiVolume#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema StorageGatewayCachediScsiVolume#VolumeStatus
   */
  readonly volumeStatus?: string;

  /**
   * @schema StorageGatewayCachediScsiVolume#VolumeAttachmentStatus
   */
  readonly volumeAttachmentStatus?: string;

  /**
   * @schema StorageGatewayCachediScsiVolume#VolumeSizeInBytes
   */
  readonly volumeSizeInBytes?: number;

  /**
   * @schema StorageGatewayCachediScsiVolume#VolumeProgress
   */
  readonly volumeProgress?: number;

  /**
   * @schema StorageGatewayCachediScsiVolume#SourceSnapshotId
   */
  readonly sourceSnapshotId?: string;

  /**
   * @schema StorageGatewayCachediScsiVolume#VolumeiSCSIAttributes
   */
  readonly volumeiScsiAttributes?: StorageGatewayVolumeiScsiAttributes;

  /**
   * @schema StorageGatewayCachediScsiVolume#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema StorageGatewayCachediScsiVolume#VolumeUsedInBytes
   */
  readonly volumeUsedInBytes?: number;

  /**
   * @schema StorageGatewayCachediScsiVolume#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StorageGatewayCachediScsiVolume#TargetName
   */
  readonly targetName?: string;

}

/**
 * @schema StorageGatewayChapInfo
 */
export interface StorageGatewayChapInfo {
  /**
   * @schema StorageGatewayChapInfo#TargetARN
   */
  readonly targetArn?: string;

  /**
   * @schema StorageGatewayChapInfo#SecretToAuthenticateInitiator
   */
  readonly secretToAuthenticateInitiator?: string;

  /**
   * @schema StorageGatewayChapInfo#InitiatorName
   */
  readonly initiatorName?: string;

  /**
   * @schema StorageGatewayChapInfo#SecretToAuthenticateTarget
   */
  readonly secretToAuthenticateTarget?: string;

}

/**
 * @schema StorageGatewayNetworkInterface
 */
export interface StorageGatewayNetworkInterface {
  /**
   * @schema StorageGatewayNetworkInterface#Ipv4Address
   */
  readonly ipv4Address?: string;

  /**
   * @schema StorageGatewayNetworkInterface#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema StorageGatewayNetworkInterface#Ipv6Address
   */
  readonly ipv6Address?: string;

}

/**
 * @schema StorageGatewayNfsFileShareInfo
 */
export interface StorageGatewayNfsFileShareInfo {
  /**
   * @schema StorageGatewayNfsFileShareInfo#NFSFileShareDefaults
   */
  readonly nfsFileShareDefaults?: StorageGatewayNfsFileShareDefaults;

  /**
   * @schema StorageGatewayNfsFileShareInfo#FileShareARN
   */
  readonly fileShareArn?: string;

  /**
   * @schema StorageGatewayNfsFileShareInfo#FileShareId
   */
  readonly fileShareId?: string;

  /**
   * @schema StorageGatewayNfsFileShareInfo#FileShareStatus
   */
  readonly fileShareStatus?: string;

  /**
   * @schema StorageGatewayNfsFileShareInfo#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayNfsFileShareInfo#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema StorageGatewayNfsFileShareInfo#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StorageGatewayNfsFileShareInfo#Path
   */
  readonly path?: string;

  /**
   * @schema StorageGatewayNfsFileShareInfo#Role
   */
  readonly role?: string;

  /**
   * @schema StorageGatewayNfsFileShareInfo#LocationARN
   */
  readonly locationArn?: string;

  /**
   * @schema StorageGatewayNfsFileShareInfo#DefaultStorageClass
   */
  readonly defaultStorageClass?: string;

  /**
   * @schema StorageGatewayNfsFileShareInfo#ObjectACL
   */
  readonly objectAcl?: string;

  /**
   * @schema StorageGatewayNfsFileShareInfo#ClientList
   */
  readonly clientList?: string[];

  /**
   * @schema StorageGatewayNfsFileShareInfo#Squash
   */
  readonly squash?: string;

  /**
   * @schema StorageGatewayNfsFileShareInfo#ReadOnly
   */
  readonly readOnly?: boolean;

  /**
   * @schema StorageGatewayNfsFileShareInfo#GuessMIMETypeEnabled
   */
  readonly guessMimeTypeEnabled?: boolean;

  /**
   * @schema StorageGatewayNfsFileShareInfo#RequesterPays
   */
  readonly requesterPays?: boolean;

  /**
   * @schema StorageGatewayNfsFileShareInfo#Tags
   */
  readonly tags?: StorageGatewayTag[];

  /**
   * @schema StorageGatewayNfsFileShareInfo#FileShareName
   */
  readonly fileShareName?: string;

  /**
   * @schema StorageGatewayNfsFileShareInfo#CacheAttributes
   */
  readonly cacheAttributes?: StorageGatewayCacheAttributes;

  /**
   * @schema StorageGatewayNfsFileShareInfo#NotificationPolicy
   */
  readonly notificationPolicy?: string;

}

/**
 * @schema StorageGatewaySmbFileShareInfo
 */
export interface StorageGatewaySmbFileShareInfo {
  /**
   * @schema StorageGatewaySmbFileShareInfo#FileShareARN
   */
  readonly fileShareArn?: string;

  /**
   * @schema StorageGatewaySmbFileShareInfo#FileShareId
   */
  readonly fileShareId?: string;

  /**
   * @schema StorageGatewaySmbFileShareInfo#FileShareStatus
   */
  readonly fileShareStatus?: string;

  /**
   * @schema StorageGatewaySmbFileShareInfo#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewaySmbFileShareInfo#KMSEncrypted
   */
  readonly kmsEncrypted?: boolean;

  /**
   * @schema StorageGatewaySmbFileShareInfo#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StorageGatewaySmbFileShareInfo#Path
   */
  readonly path?: string;

  /**
   * @schema StorageGatewaySmbFileShareInfo#Role
   */
  readonly role?: string;

  /**
   * @schema StorageGatewaySmbFileShareInfo#LocationARN
   */
  readonly locationArn?: string;

  /**
   * @schema StorageGatewaySmbFileShareInfo#DefaultStorageClass
   */
  readonly defaultStorageClass?: string;

  /**
   * @schema StorageGatewaySmbFileShareInfo#ObjectACL
   */
  readonly objectAcl?: string;

  /**
   * @schema StorageGatewaySmbFileShareInfo#ReadOnly
   */
  readonly readOnly?: boolean;

  /**
   * @schema StorageGatewaySmbFileShareInfo#GuessMIMETypeEnabled
   */
  readonly guessMimeTypeEnabled?: boolean;

  /**
   * @schema StorageGatewaySmbFileShareInfo#RequesterPays
   */
  readonly requesterPays?: boolean;

  /**
   * @schema StorageGatewaySmbFileShareInfo#SMBACLEnabled
   */
  readonly smbaclEnabled?: boolean;

  /**
   * @schema StorageGatewaySmbFileShareInfo#AccessBasedEnumeration
   */
  readonly accessBasedEnumeration?: boolean;

  /**
   * @schema StorageGatewaySmbFileShareInfo#AdminUserList
   */
  readonly adminUserList?: string[];

  /**
   * @schema StorageGatewaySmbFileShareInfo#ValidUserList
   */
  readonly validUserList?: string[];

  /**
   * @schema StorageGatewaySmbFileShareInfo#InvalidUserList
   */
  readonly invalidUserList?: string[];

  /**
   * @schema StorageGatewaySmbFileShareInfo#AuditDestinationARN
   */
  readonly auditDestinationArn?: string;

  /**
   * @schema StorageGatewaySmbFileShareInfo#Authentication
   */
  readonly authentication?: string;

  /**
   * @schema StorageGatewaySmbFileShareInfo#CaseSensitivity
   */
  readonly caseSensitivity?: string;

  /**
   * @schema StorageGatewaySmbFileShareInfo#Tags
   */
  readonly tags?: StorageGatewayTag[];

  /**
   * @schema StorageGatewaySmbFileShareInfo#FileShareName
   */
  readonly fileShareName?: string;

  /**
   * @schema StorageGatewaySmbFileShareInfo#CacheAttributes
   */
  readonly cacheAttributes?: StorageGatewayCacheAttributes;

  /**
   * @schema StorageGatewaySmbFileShareInfo#NotificationPolicy
   */
  readonly notificationPolicy?: string;

}

/**
 * @schema StorageGatewayStorediScsiVolume
 */
export interface StorageGatewayStorediScsiVolume {
  /**
   * @schema StorageGatewayStorediScsiVolume#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema StorageGatewayStorediScsiVolume#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema StorageGatewayStorediScsiVolume#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema StorageGatewayStorediScsiVolume#VolumeStatus
   */
  readonly volumeStatus?: string;

  /**
   * @schema StorageGatewayStorediScsiVolume#VolumeAttachmentStatus
   */
  readonly volumeAttachmentStatus?: string;

  /**
   * @schema StorageGatewayStorediScsiVolume#VolumeSizeInBytes
   */
  readonly volumeSizeInBytes?: number;

  /**
   * @schema StorageGatewayStorediScsiVolume#VolumeProgress
   */
  readonly volumeProgress?: number;

  /**
   * @schema StorageGatewayStorediScsiVolume#VolumeDiskId
   */
  readonly volumeDiskId?: string;

  /**
   * @schema StorageGatewayStorediScsiVolume#SourceSnapshotId
   */
  readonly sourceSnapshotId?: string;

  /**
   * @schema StorageGatewayStorediScsiVolume#PreservedExistingData
   */
  readonly preservedExistingData?: boolean;

  /**
   * @schema StorageGatewayStorediScsiVolume#VolumeiSCSIAttributes
   */
  readonly volumeiScsiAttributes?: StorageGatewayVolumeiScsiAttributes;

  /**
   * @schema StorageGatewayStorediScsiVolume#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema StorageGatewayStorediScsiVolume#VolumeUsedInBytes
   */
  readonly volumeUsedInBytes?: number;

  /**
   * @schema StorageGatewayStorediScsiVolume#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StorageGatewayStorediScsiVolume#TargetName
   */
  readonly targetName?: string;

}

/**
 * @schema StorageGatewayTapeArchive
 */
export interface StorageGatewayTapeArchive {
  /**
   * @schema StorageGatewayTapeArchive#TapeARN
   */
  readonly tapeArn?: string;

  /**
   * @schema StorageGatewayTapeArchive#TapeBarcode
   */
  readonly tapeBarcode?: string;

  /**
   * @schema StorageGatewayTapeArchive#TapeCreatedDate
   */
  readonly tapeCreatedDate?: string;

  /**
   * @schema StorageGatewayTapeArchive#TapeSizeInBytes
   */
  readonly tapeSizeInBytes?: number;

  /**
   * @schema StorageGatewayTapeArchive#CompletionTime
   */
  readonly completionTime?: string;

  /**
   * @schema StorageGatewayTapeArchive#RetrievedTo
   */
  readonly retrievedTo?: string;

  /**
   * @schema StorageGatewayTapeArchive#TapeStatus
   */
  readonly tapeStatus?: string;

  /**
   * @schema StorageGatewayTapeArchive#TapeUsedInBytes
   */
  readonly tapeUsedInBytes?: number;

  /**
   * @schema StorageGatewayTapeArchive#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StorageGatewayTapeArchive#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema StorageGatewayTapeArchive#Worm
   */
  readonly worm?: boolean;

  /**
   * @schema StorageGatewayTapeArchive#RetentionStartDate
   */
  readonly retentionStartDate?: string;

  /**
   * @schema StorageGatewayTapeArchive#PoolEntryDate
   */
  readonly poolEntryDate?: string;

}

/**
 * @schema StorageGatewayTapeRecoveryPointInfo
 */
export interface StorageGatewayTapeRecoveryPointInfo {
  /**
   * @schema StorageGatewayTapeRecoveryPointInfo#TapeARN
   */
  readonly tapeArn?: string;

  /**
   * @schema StorageGatewayTapeRecoveryPointInfo#TapeRecoveryPointTime
   */
  readonly tapeRecoveryPointTime?: string;

  /**
   * @schema StorageGatewayTapeRecoveryPointInfo#TapeSizeInBytes
   */
  readonly tapeSizeInBytes?: number;

  /**
   * @schema StorageGatewayTapeRecoveryPointInfo#TapeStatus
   */
  readonly tapeStatus?: string;

}

/**
 * @schema StorageGatewayTape
 */
export interface StorageGatewayTape {
  /**
   * @schema StorageGatewayTape#TapeARN
   */
  readonly tapeArn?: string;

  /**
   * @schema StorageGatewayTape#TapeBarcode
   */
  readonly tapeBarcode?: string;

  /**
   * @schema StorageGatewayTape#TapeCreatedDate
   */
  readonly tapeCreatedDate?: string;

  /**
   * @schema StorageGatewayTape#TapeSizeInBytes
   */
  readonly tapeSizeInBytes?: number;

  /**
   * @schema StorageGatewayTape#TapeStatus
   */
  readonly tapeStatus?: string;

  /**
   * @schema StorageGatewayTape#VTLDevice
   */
  readonly vtlDevice?: string;

  /**
   * @schema StorageGatewayTape#Progress
   */
  readonly progress?: number;

  /**
   * @schema StorageGatewayTape#TapeUsedInBytes
   */
  readonly tapeUsedInBytes?: number;

  /**
   * @schema StorageGatewayTape#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StorageGatewayTape#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema StorageGatewayTape#Worm
   */
  readonly worm?: boolean;

  /**
   * @schema StorageGatewayTape#RetentionStartDate
   */
  readonly retentionStartDate?: string;

  /**
   * @schema StorageGatewayTape#PoolEntryDate
   */
  readonly poolEntryDate?: string;

}

/**
 * @schema StorageGatewayVtlDevice
 */
export interface StorageGatewayVtlDevice {
  /**
   * @schema StorageGatewayVtlDevice#VTLDeviceARN
   */
  readonly vtlDeviceArn?: string;

  /**
   * @schema StorageGatewayVtlDevice#VTLDeviceType
   */
  readonly vtlDeviceType?: string;

  /**
   * @schema StorageGatewayVtlDevice#VTLDeviceVendor
   */
  readonly vtlDeviceVendor?: string;

  /**
   * @schema StorageGatewayVtlDevice#VTLDeviceProductIdentifier
   */
  readonly vtlDeviceProductIdentifier?: string;

  /**
   * @schema StorageGatewayVtlDevice#DeviceiSCSIAttributes
   */
  readonly deviceiScsiAttributes?: StorageGatewayDeviceiScsiAttributes;

}

/**
 * @schema StorageGatewayAutomaticTapeCreationPolicyInfo
 */
export interface StorageGatewayAutomaticTapeCreationPolicyInfo {
  /**
   * @schema StorageGatewayAutomaticTapeCreationPolicyInfo#AutomaticTapeCreationRules
   */
  readonly automaticTapeCreationRules?: StorageGatewayAutomaticTapeCreationRule[];

  /**
   * @schema StorageGatewayAutomaticTapeCreationPolicyInfo#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayFileShareInfo
 */
export interface StorageGatewayFileShareInfo {
  /**
   * @schema StorageGatewayFileShareInfo#FileShareType
   */
  readonly fileShareType?: string;

  /**
   * @schema StorageGatewayFileShareInfo#FileShareARN
   */
  readonly fileShareArn?: string;

  /**
   * @schema StorageGatewayFileShareInfo#FileShareId
   */
  readonly fileShareId?: string;

  /**
   * @schema StorageGatewayFileShareInfo#FileShareStatus
   */
  readonly fileShareStatus?: string;

  /**
   * @schema StorageGatewayFileShareInfo#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * @schema StorageGatewayGatewayInfo
 */
export interface StorageGatewayGatewayInfo {
  /**
   * @schema StorageGatewayGatewayInfo#GatewayId
   */
  readonly gatewayId?: string;

  /**
   * @schema StorageGatewayGatewayInfo#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayGatewayInfo#GatewayType
   */
  readonly gatewayType?: string;

  /**
   * @schema StorageGatewayGatewayInfo#GatewayOperationalState
   */
  readonly gatewayOperationalState?: string;

  /**
   * @schema StorageGatewayGatewayInfo#GatewayName
   */
  readonly gatewayName?: string;

  /**
   * @schema StorageGatewayGatewayInfo#Ec2InstanceId
   */
  readonly ec2InstanceId?: string;

  /**
   * @schema StorageGatewayGatewayInfo#Ec2InstanceRegion
   */
  readonly ec2InstanceRegion?: string;

}

/**
 * @schema StorageGatewayDisk
 */
export interface StorageGatewayDisk {
  /**
   * @schema StorageGatewayDisk#DiskId
   */
  readonly diskId?: string;

  /**
   * @schema StorageGatewayDisk#DiskPath
   */
  readonly diskPath?: string;

  /**
   * @schema StorageGatewayDisk#DiskNode
   */
  readonly diskNode?: string;

  /**
   * @schema StorageGatewayDisk#DiskStatus
   */
  readonly diskStatus?: string;

  /**
   * @schema StorageGatewayDisk#DiskSizeInBytes
   */
  readonly diskSizeInBytes?: number;

  /**
   * @schema StorageGatewayDisk#DiskAllocationType
   */
  readonly diskAllocationType?: string;

  /**
   * @schema StorageGatewayDisk#DiskAllocationResource
   */
  readonly diskAllocationResource?: string;

  /**
   * @schema StorageGatewayDisk#DiskAttributeList
   */
  readonly diskAttributeList?: string[];

}

/**
 * @schema StorageGatewayPoolInfo
 */
export interface StorageGatewayPoolInfo {
  /**
   * @schema StorageGatewayPoolInfo#PoolARN
   */
  readonly poolArn?: string;

  /**
   * @schema StorageGatewayPoolInfo#PoolName
   */
  readonly poolName?: string;

  /**
   * @schema StorageGatewayPoolInfo#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema StorageGatewayPoolInfo#RetentionLockType
   */
  readonly retentionLockType?: string;

  /**
   * @schema StorageGatewayPoolInfo#RetentionLockTimeInDays
   */
  readonly retentionLockTimeInDays?: number;

  /**
   * @schema StorageGatewayPoolInfo#PoolStatus
   */
  readonly poolStatus?: string;

}

/**
 * @schema StorageGatewayTapeInfo
 */
export interface StorageGatewayTapeInfo {
  /**
   * @schema StorageGatewayTapeInfo#TapeARN
   */
  readonly tapeArn?: string;

  /**
   * @schema StorageGatewayTapeInfo#TapeBarcode
   */
  readonly tapeBarcode?: string;

  /**
   * @schema StorageGatewayTapeInfo#TapeSizeInBytes
   */
  readonly tapeSizeInBytes?: number;

  /**
   * @schema StorageGatewayTapeInfo#TapeStatus
   */
  readonly tapeStatus?: string;

  /**
   * @schema StorageGatewayTapeInfo#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayTapeInfo#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema StorageGatewayTapeInfo#RetentionStartDate
   */
  readonly retentionStartDate?: string;

  /**
   * @schema StorageGatewayTapeInfo#PoolEntryDate
   */
  readonly poolEntryDate?: string;

}

/**
 * @schema StorageGatewayVolumeRecoveryPointInfo
 */
export interface StorageGatewayVolumeRecoveryPointInfo {
  /**
   * @schema StorageGatewayVolumeRecoveryPointInfo#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema StorageGatewayVolumeRecoveryPointInfo#VolumeSizeInBytes
   */
  readonly volumeSizeInBytes?: number;

  /**
   * @schema StorageGatewayVolumeRecoveryPointInfo#VolumeUsageInBytes
   */
  readonly volumeUsageInBytes?: number;

  /**
   * @schema StorageGatewayVolumeRecoveryPointInfo#VolumeRecoveryPointTime
   */
  readonly volumeRecoveryPointTime?: string;

}

/**
 * @schema StorageGatewayVolumeInfo
 */
export interface StorageGatewayVolumeInfo {
  /**
   * @schema StorageGatewayVolumeInfo#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema StorageGatewayVolumeInfo#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema StorageGatewayVolumeInfo#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayVolumeInfo#GatewayId
   */
  readonly gatewayId?: string;

  /**
   * @schema StorageGatewayVolumeInfo#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema StorageGatewayVolumeInfo#VolumeSizeInBytes
   */
  readonly volumeSizeInBytes?: number;

  /**
   * @schema StorageGatewayVolumeInfo#VolumeAttachmentStatus
   */
  readonly volumeAttachmentStatus?: string;

}

/**
 * @schema StorageGatewayAutomaticTapeCreationRule
 */
export interface StorageGatewayAutomaticTapeCreationRule {
  /**
   * @schema StorageGatewayAutomaticTapeCreationRule#TapeBarcodePrefix
   */
  readonly tapeBarcodePrefix: string;

  /**
   * @schema StorageGatewayAutomaticTapeCreationRule#PoolId
   */
  readonly poolId: string;

  /**
   * @schema StorageGatewayAutomaticTapeCreationRule#TapeSizeInBytes
   */
  readonly tapeSizeInBytes: number;

  /**
   * @schema StorageGatewayAutomaticTapeCreationRule#MinimumNumTapes
   */
  readonly minimumNumTapes: number;

  /**
   * @schema StorageGatewayAutomaticTapeCreationRule#Worm
   */
  readonly worm?: boolean;

}

/**
 * @schema StorageGatewayVolumeiScsiAttributes
 */
export interface StorageGatewayVolumeiScsiAttributes {
  /**
   * @schema StorageGatewayVolumeiScsiAttributes#TargetARN
   */
  readonly targetArn?: string;

  /**
   * @schema StorageGatewayVolumeiScsiAttributes#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema StorageGatewayVolumeiScsiAttributes#NetworkInterfacePort
   */
  readonly networkInterfacePort?: number;

  /**
   * @schema StorageGatewayVolumeiScsiAttributes#LunNumber
   */
  readonly lunNumber?: number;

  /**
   * @schema StorageGatewayVolumeiScsiAttributes#ChapEnabled
   */
  readonly chapEnabled?: boolean;

}

/**
 * @schema StorageGatewayDeviceiScsiAttributes
 */
export interface StorageGatewayDeviceiScsiAttributes {
  /**
   * @schema StorageGatewayDeviceiScsiAttributes#TargetARN
   */
  readonly targetArn?: string;

  /**
   * @schema StorageGatewayDeviceiScsiAttributes#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema StorageGatewayDeviceiScsiAttributes#NetworkInterfacePort
   */
  readonly networkInterfacePort?: number;

  /**
   * @schema StorageGatewayDeviceiScsiAttributes#ChapEnabled
   */
  readonly chapEnabled?: boolean;

}
