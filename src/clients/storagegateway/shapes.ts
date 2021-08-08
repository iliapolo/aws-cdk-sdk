/**
 * @schema StorageGatewayActivateGatewayInput
 */
export interface StorageGatewayActivateGatewayInput {
  /**
   * @schema StorageGatewayActivateGatewayInput#ActivationKey
   */
  readonly activationKey?: string;

  /**
   * @schema StorageGatewayActivateGatewayInput#GatewayName
   */
  readonly gatewayName?: string;

  /**
   * @schema StorageGatewayActivateGatewayInput#GatewayTimezone
   */
  readonly gatewayTimezone?: string;

  /**
   * @schema StorageGatewayActivateGatewayInput#GatewayRegion
   */
  readonly gatewayRegion?: string;

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
 * Converts an object of type 'StorageGatewayActivateGatewayInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayActivateGatewayInput(obj: StorageGatewayActivateGatewayInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActivationKey': obj.activationKey,
    'GatewayName': obj.gatewayName,
    'GatewayTimezone': obj.gatewayTimezone,
    'GatewayRegion': obj.gatewayRegion,
    'GatewayType': obj.gatewayType,
    'TapeDriveType': obj.tapeDriveType,
    'MediumChangerType': obj.mediumChangerType,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayActivateGatewayOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayActivateGatewayOutput(obj: StorageGatewayActivateGatewayOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayAddCacheInput
 */
export interface StorageGatewayAddCacheInput {
  /**
   * @schema StorageGatewayAddCacheInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayAddCacheInput#DiskIds
   */
  readonly diskIds?: string[];

}

/**
 * Converts an object of type 'StorageGatewayAddCacheInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayAddCacheInput(obj: StorageGatewayAddCacheInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'DiskIds': obj.diskIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayAddCacheOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayAddCacheOutput(obj: StorageGatewayAddCacheOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayAddTagsToResourceInput
 */
export interface StorageGatewayAddTagsToResourceInput {
  /**
   * @schema StorageGatewayAddTagsToResourceInput#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema StorageGatewayAddTagsToResourceInput#Tags
   */
  readonly tags?: StorageGatewayTag[];

}

/**
 * Converts an object of type 'StorageGatewayAddTagsToResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayAddTagsToResourceInput(obj: StorageGatewayAddTagsToResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayAddTagsToResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayAddTagsToResourceOutput(obj: StorageGatewayAddTagsToResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayAddUploadBufferInput
 */
export interface StorageGatewayAddUploadBufferInput {
  /**
   * @schema StorageGatewayAddUploadBufferInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayAddUploadBufferInput#DiskIds
   */
  readonly diskIds?: string[];

}

/**
 * Converts an object of type 'StorageGatewayAddUploadBufferInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayAddUploadBufferInput(obj: StorageGatewayAddUploadBufferInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'DiskIds': obj.diskIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayAddUploadBufferOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayAddUploadBufferOutput(obj: StorageGatewayAddUploadBufferOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayAddWorkingStorageInput
 */
export interface StorageGatewayAddWorkingStorageInput {
  /**
   * @schema StorageGatewayAddWorkingStorageInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayAddWorkingStorageInput#DiskIds
   */
  readonly diskIds?: string[];

}

/**
 * Converts an object of type 'StorageGatewayAddWorkingStorageInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayAddWorkingStorageInput(obj: StorageGatewayAddWorkingStorageInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'DiskIds': obj.diskIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayAddWorkingStorageOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayAddWorkingStorageOutput(obj: StorageGatewayAddWorkingStorageOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayAssignTapePoolInput
 */
export interface StorageGatewayAssignTapePoolInput {
  /**
   * @schema StorageGatewayAssignTapePoolInput#TapeARN
   */
  readonly tapeArn?: string;

  /**
   * @schema StorageGatewayAssignTapePoolInput#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema StorageGatewayAssignTapePoolInput#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

}

/**
 * Converts an object of type 'StorageGatewayAssignTapePoolInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayAssignTapePoolInput(obj: StorageGatewayAssignTapePoolInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARN': obj.tapeArn,
    'PoolId': obj.poolId,
    'BypassGovernanceRetention': obj.bypassGovernanceRetention,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayAssignTapePoolOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayAssignTapePoolOutput(obj: StorageGatewayAssignTapePoolOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARN': obj.tapeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayAssociateFileSystemInput
 */
export interface StorageGatewayAssociateFileSystemInput {
  /**
   * @schema StorageGatewayAssociateFileSystemInput#UserName
   */
  readonly userName?: string;

  /**
   * @schema StorageGatewayAssociateFileSystemInput#Password
   */
  readonly password?: string;

  /**
   * @schema StorageGatewayAssociateFileSystemInput#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema StorageGatewayAssociateFileSystemInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayAssociateFileSystemInput#LocationARN
   */
  readonly locationArn?: string;

  /**
   * @schema StorageGatewayAssociateFileSystemInput#Tags
   */
  readonly tags?: StorageGatewayTag[];

  /**
   * @schema StorageGatewayAssociateFileSystemInput#AuditDestinationARN
   */
  readonly auditDestinationArn?: string;

  /**
   * @schema StorageGatewayAssociateFileSystemInput#CacheAttributes
   */
  readonly cacheAttributes?: StorageGatewayCacheAttributes;

  /**
   * @schema StorageGatewayAssociateFileSystemInput#EndpointNetworkConfiguration
   */
  readonly endpointNetworkConfiguration?: StorageGatewayEndpointNetworkConfiguration;

}

/**
 * Converts an object of type 'StorageGatewayAssociateFileSystemInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayAssociateFileSystemInput(obj: StorageGatewayAssociateFileSystemInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'Password': obj.password,
    'ClientToken': obj.clientToken,
    'GatewayARN': obj.gatewayArn,
    'LocationARN': obj.locationArn,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
    'AuditDestinationARN': obj.auditDestinationArn,
    'CacheAttributes': toJson_StorageGatewayCacheAttributes(obj.cacheAttributes),
    'EndpointNetworkConfiguration': toJson_StorageGatewayEndpointNetworkConfiguration(obj.endpointNetworkConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayAssociateFileSystemOutput
 */
export interface StorageGatewayAssociateFileSystemOutput {
  /**
   * @schema StorageGatewayAssociateFileSystemOutput#FileSystemAssociationARN
   */
  readonly fileSystemAssociationArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayAssociateFileSystemOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayAssociateFileSystemOutput(obj: StorageGatewayAssociateFileSystemOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystemAssociationARN': obj.fileSystemAssociationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayAttachVolumeInput
 */
export interface StorageGatewayAttachVolumeInput {
  /**
   * @schema StorageGatewayAttachVolumeInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayAttachVolumeInput#TargetName
   */
  readonly targetName?: string;

  /**
   * @schema StorageGatewayAttachVolumeInput#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema StorageGatewayAttachVolumeInput#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema StorageGatewayAttachVolumeInput#DiskId
   */
  readonly diskId?: string;

}

/**
 * Converts an object of type 'StorageGatewayAttachVolumeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayAttachVolumeInput(obj: StorageGatewayAttachVolumeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'TargetName': obj.targetName,
    'VolumeARN': obj.volumeArn,
    'NetworkInterfaceId': obj.networkInterfaceId,
    'DiskId': obj.diskId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayAttachVolumeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayAttachVolumeOutput(obj: StorageGatewayAttachVolumeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
    'TargetARN': obj.targetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayCancelArchivalInput
 */
export interface StorageGatewayCancelArchivalInput {
  /**
   * @schema StorageGatewayCancelArchivalInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayCancelArchivalInput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayCancelArchivalInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCancelArchivalInput(obj: StorageGatewayCancelArchivalInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'TapeARN': obj.tapeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayCancelArchivalOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCancelArchivalOutput(obj: StorageGatewayCancelArchivalOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARN': obj.tapeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayCancelRetrievalInput
 */
export interface StorageGatewayCancelRetrievalInput {
  /**
   * @schema StorageGatewayCancelRetrievalInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayCancelRetrievalInput#TapeARN
   */
  readonly tapeArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayCancelRetrievalInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCancelRetrievalInput(obj: StorageGatewayCancelRetrievalInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'TapeARN': obj.tapeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayCancelRetrievalOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCancelRetrievalOutput(obj: StorageGatewayCancelRetrievalOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARN': obj.tapeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayCreateCachediScsiVolumeInput
 */
export interface StorageGatewayCreateCachediScsiVolumeInput {
  /**
   * @schema StorageGatewayCreateCachediScsiVolumeInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayCreateCachediScsiVolumeInput#VolumeSizeInBytes
   */
  readonly volumeSizeInBytes?: number;

  /**
   * @schema StorageGatewayCreateCachediScsiVolumeInput#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema StorageGatewayCreateCachediScsiVolumeInput#TargetName
   */
  readonly targetName?: string;

  /**
   * @schema StorageGatewayCreateCachediScsiVolumeInput#SourceVolumeARN
   */
  readonly sourceVolumeArn?: string;

  /**
   * @schema StorageGatewayCreateCachediScsiVolumeInput#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema StorageGatewayCreateCachediScsiVolumeInput#ClientToken
   */
  readonly clientToken?: string;

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
 * Converts an object of type 'StorageGatewayCreateCachediScsiVolumeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateCachediScsiVolumeInput(obj: StorageGatewayCreateCachediScsiVolumeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'VolumeSizeInBytes': obj.volumeSizeInBytes,
    'SnapshotId': obj.snapshotId,
    'TargetName': obj.targetName,
    'SourceVolumeARN': obj.sourceVolumeArn,
    'NetworkInterfaceId': obj.networkInterfaceId,
    'ClientToken': obj.clientToken,
    'KMSEncrypted': obj.kmsEncrypted,
    'KMSKey': obj.kmsKey,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayCreateCachediScsiVolumeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateCachediScsiVolumeOutput(obj: StorageGatewayCreateCachediScsiVolumeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
    'TargetARN': obj.targetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayCreateNfsFileShareInput
 */
export interface StorageGatewayCreateNfsFileShareInput {
  /**
   * @schema StorageGatewayCreateNfsFileShareInput#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#NFSFileShareDefaults
   */
  readonly nfsFileShareDefaults?: StorageGatewayNfsFileShareDefaults;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#GatewayARN
   */
  readonly gatewayArn?: string;

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
  readonly role?: string;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#LocationARN
   */
  readonly locationArn?: string;

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

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#VPCEndpointDNSName
   */
  readonly vpcEndpointDnsName?: string;

  /**
   * @schema StorageGatewayCreateNfsFileShareInput#BucketRegion
   */
  readonly bucketRegion?: string;

}

/**
 * Converts an object of type 'StorageGatewayCreateNfsFileShareInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateNfsFileShareInput(obj: StorageGatewayCreateNfsFileShareInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientToken': obj.clientToken,
    'NFSFileShareDefaults': toJson_StorageGatewayNfsFileShareDefaults(obj.nfsFileShareDefaults),
    'GatewayARN': obj.gatewayArn,
    'KMSEncrypted': obj.kmsEncrypted,
    'KMSKey': obj.kmsKey,
    'Role': obj.role,
    'LocationARN': obj.locationArn,
    'DefaultStorageClass': obj.defaultStorageClass,
    'ObjectACL': obj.objectAcl,
    'ClientList': obj.clientList?.map(y => y),
    'Squash': obj.squash,
    'ReadOnly': obj.readOnly,
    'GuessMIMETypeEnabled': obj.guessMimeTypeEnabled,
    'RequesterPays': obj.requesterPays,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
    'FileShareName': obj.fileShareName,
    'CacheAttributes': toJson_StorageGatewayCacheAttributes(obj.cacheAttributes),
    'NotificationPolicy': obj.notificationPolicy,
    'VPCEndpointDNSName': obj.vpcEndpointDnsName,
    'BucketRegion': obj.bucketRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayCreateNfsFileShareOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateNfsFileShareOutput(obj: StorageGatewayCreateNfsFileShareOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileShareARN': obj.fileShareArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayCreateSmbFileShareInput
 */
export interface StorageGatewayCreateSmbFileShareInput {
  /**
   * @schema StorageGatewayCreateSmbFileShareInput#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#GatewayARN
   */
  readonly gatewayArn?: string;

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
  readonly role?: string;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#LocationARN
   */
  readonly locationArn?: string;

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

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#VPCEndpointDNSName
   */
  readonly vpcEndpointDnsName?: string;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#BucketRegion
   */
  readonly bucketRegion?: string;

  /**
   * @schema StorageGatewayCreateSmbFileShareInput#OplocksEnabled
   */
  readonly oplocksEnabled?: boolean;

}

/**
 * Converts an object of type 'StorageGatewayCreateSmbFileShareInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateSmbFileShareInput(obj: StorageGatewayCreateSmbFileShareInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientToken': obj.clientToken,
    'GatewayARN': obj.gatewayArn,
    'KMSEncrypted': obj.kmsEncrypted,
    'KMSKey': obj.kmsKey,
    'Role': obj.role,
    'LocationARN': obj.locationArn,
    'DefaultStorageClass': obj.defaultStorageClass,
    'ObjectACL': obj.objectAcl,
    'ReadOnly': obj.readOnly,
    'GuessMIMETypeEnabled': obj.guessMimeTypeEnabled,
    'RequesterPays': obj.requesterPays,
    'SMBACLEnabled': obj.smbaclEnabled,
    'AccessBasedEnumeration': obj.accessBasedEnumeration,
    'AdminUserList': obj.adminUserList?.map(y => y),
    'ValidUserList': obj.validUserList?.map(y => y),
    'InvalidUserList': obj.invalidUserList?.map(y => y),
    'AuditDestinationARN': obj.auditDestinationArn,
    'Authentication': obj.authentication,
    'CaseSensitivity': obj.caseSensitivity,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
    'FileShareName': obj.fileShareName,
    'CacheAttributes': toJson_StorageGatewayCacheAttributes(obj.cacheAttributes),
    'NotificationPolicy': obj.notificationPolicy,
    'VPCEndpointDNSName': obj.vpcEndpointDnsName,
    'BucketRegion': obj.bucketRegion,
    'OplocksEnabled': obj.oplocksEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayCreateSmbFileShareOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateSmbFileShareOutput(obj: StorageGatewayCreateSmbFileShareOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileShareARN': obj.fileShareArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayCreateSnapshotInput
 */
export interface StorageGatewayCreateSnapshotInput {
  /**
   * @schema StorageGatewayCreateSnapshotInput#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema StorageGatewayCreateSnapshotInput#SnapshotDescription
   */
  readonly snapshotDescription?: string;

  /**
   * @schema StorageGatewayCreateSnapshotInput#Tags
   */
  readonly tags?: StorageGatewayTag[];

}

/**
 * Converts an object of type 'StorageGatewayCreateSnapshotInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateSnapshotInput(obj: StorageGatewayCreateSnapshotInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
    'SnapshotDescription': obj.snapshotDescription,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayCreateSnapshotOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateSnapshotOutput(obj: StorageGatewayCreateSnapshotOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
    'SnapshotId': obj.snapshotId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput
 */
export interface StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput {
  /**
   * @schema StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput#SnapshotDescription
   */
  readonly snapshotDescription?: string;

  /**
   * @schema StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput#Tags
   */
  readonly tags?: StorageGatewayTag[];

}

/**
 * Converts an object of type 'StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput(obj: StorageGatewayCreateSnapshotFromVolumeRecoveryPointInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
    'SnapshotDescription': obj.snapshotDescription,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayCreateSnapshotFromVolumeRecoveryPointOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateSnapshotFromVolumeRecoveryPointOutput(obj: StorageGatewayCreateSnapshotFromVolumeRecoveryPointOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotId': obj.snapshotId,
    'VolumeARN': obj.volumeArn,
    'VolumeRecoveryPointTime': obj.volumeRecoveryPointTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayCreateStorediScsiVolumeInput
 */
export interface StorageGatewayCreateStorediScsiVolumeInput {
  /**
   * @schema StorageGatewayCreateStorediScsiVolumeInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayCreateStorediScsiVolumeInput#DiskId
   */
  readonly diskId?: string;

  /**
   * @schema StorageGatewayCreateStorediScsiVolumeInput#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema StorageGatewayCreateStorediScsiVolumeInput#PreserveExistingData
   */
  readonly preserveExistingData?: boolean;

  /**
   * @schema StorageGatewayCreateStorediScsiVolumeInput#TargetName
   */
  readonly targetName?: string;

  /**
   * @schema StorageGatewayCreateStorediScsiVolumeInput#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

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
 * Converts an object of type 'StorageGatewayCreateStorediScsiVolumeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateStorediScsiVolumeInput(obj: StorageGatewayCreateStorediScsiVolumeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'DiskId': obj.diskId,
    'SnapshotId': obj.snapshotId,
    'PreserveExistingData': obj.preserveExistingData,
    'TargetName': obj.targetName,
    'NetworkInterfaceId': obj.networkInterfaceId,
    'KMSEncrypted': obj.kmsEncrypted,
    'KMSKey': obj.kmsKey,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayCreateStorediScsiVolumeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateStorediScsiVolumeOutput(obj: StorageGatewayCreateStorediScsiVolumeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
    'VolumeSizeInBytes': obj.volumeSizeInBytes,
    'TargetARN': obj.targetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayCreateTapePoolInput
 */
export interface StorageGatewayCreateTapePoolInput {
  /**
   * @schema StorageGatewayCreateTapePoolInput#PoolName
   */
  readonly poolName?: string;

  /**
   * @schema StorageGatewayCreateTapePoolInput#StorageClass
   */
  readonly storageClass?: string;

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
 * Converts an object of type 'StorageGatewayCreateTapePoolInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateTapePoolInput(obj: StorageGatewayCreateTapePoolInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PoolName': obj.poolName,
    'StorageClass': obj.storageClass,
    'RetentionLockType': obj.retentionLockType,
    'RetentionLockTimeInDays': obj.retentionLockTimeInDays,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayCreateTapePoolOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateTapePoolOutput(obj: StorageGatewayCreateTapePoolOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PoolARN': obj.poolArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayCreateTapeWithBarcodeInput
 */
export interface StorageGatewayCreateTapeWithBarcodeInput {
  /**
   * @schema StorageGatewayCreateTapeWithBarcodeInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayCreateTapeWithBarcodeInput#TapeSizeInBytes
   */
  readonly tapeSizeInBytes?: number;

  /**
   * @schema StorageGatewayCreateTapeWithBarcodeInput#TapeBarcode
   */
  readonly tapeBarcode?: string;

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
 * Converts an object of type 'StorageGatewayCreateTapeWithBarcodeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateTapeWithBarcodeInput(obj: StorageGatewayCreateTapeWithBarcodeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'TapeSizeInBytes': obj.tapeSizeInBytes,
    'TapeBarcode': obj.tapeBarcode,
    'KMSEncrypted': obj.kmsEncrypted,
    'KMSKey': obj.kmsKey,
    'PoolId': obj.poolId,
    'Worm': obj.worm,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayCreateTapeWithBarcodeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateTapeWithBarcodeOutput(obj: StorageGatewayCreateTapeWithBarcodeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARN': obj.tapeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayCreateTapesInput
 */
export interface StorageGatewayCreateTapesInput {
  /**
   * @schema StorageGatewayCreateTapesInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayCreateTapesInput#TapeSizeInBytes
   */
  readonly tapeSizeInBytes?: number;

  /**
   * @schema StorageGatewayCreateTapesInput#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema StorageGatewayCreateTapesInput#NumTapesToCreate
   */
  readonly numTapesToCreate?: number;

  /**
   * @schema StorageGatewayCreateTapesInput#TapeBarcodePrefix
   */
  readonly tapeBarcodePrefix?: string;

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
 * Converts an object of type 'StorageGatewayCreateTapesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateTapesInput(obj: StorageGatewayCreateTapesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'TapeSizeInBytes': obj.tapeSizeInBytes,
    'ClientToken': obj.clientToken,
    'NumTapesToCreate': obj.numTapesToCreate,
    'TapeBarcodePrefix': obj.tapeBarcodePrefix,
    'KMSEncrypted': obj.kmsEncrypted,
    'KMSKey': obj.kmsKey,
    'PoolId': obj.poolId,
    'Worm': obj.worm,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayCreateTapesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCreateTapesOutput(obj: StorageGatewayCreateTapesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARNs': obj.tapeArNs?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDeleteAutomaticTapeCreationPolicyInput
 */
export interface StorageGatewayDeleteAutomaticTapeCreationPolicyInput {
  /**
   * @schema StorageGatewayDeleteAutomaticTapeCreationPolicyInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDeleteAutomaticTapeCreationPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteAutomaticTapeCreationPolicyInput(obj: StorageGatewayDeleteAutomaticTapeCreationPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDeleteAutomaticTapeCreationPolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteAutomaticTapeCreationPolicyOutput(obj: StorageGatewayDeleteAutomaticTapeCreationPolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDeleteBandwidthRateLimitInput
 */
export interface StorageGatewayDeleteBandwidthRateLimitInput {
  /**
   * @schema StorageGatewayDeleteBandwidthRateLimitInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayDeleteBandwidthRateLimitInput#BandwidthType
   */
  readonly bandwidthType?: string;

}

/**
 * Converts an object of type 'StorageGatewayDeleteBandwidthRateLimitInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteBandwidthRateLimitInput(obj: StorageGatewayDeleteBandwidthRateLimitInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'BandwidthType': obj.bandwidthType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDeleteBandwidthRateLimitOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteBandwidthRateLimitOutput(obj: StorageGatewayDeleteBandwidthRateLimitOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDeleteChapCredentialsInput
 */
export interface StorageGatewayDeleteChapCredentialsInput {
  /**
   * @schema StorageGatewayDeleteChapCredentialsInput#TargetARN
   */
  readonly targetArn?: string;

  /**
   * @schema StorageGatewayDeleteChapCredentialsInput#InitiatorName
   */
  readonly initiatorName?: string;

}

/**
 * Converts an object of type 'StorageGatewayDeleteChapCredentialsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteChapCredentialsInput(obj: StorageGatewayDeleteChapCredentialsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetARN': obj.targetArn,
    'InitiatorName': obj.initiatorName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDeleteChapCredentialsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteChapCredentialsOutput(obj: StorageGatewayDeleteChapCredentialsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetARN': obj.targetArn,
    'InitiatorName': obj.initiatorName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDeleteFileShareInput
 */
export interface StorageGatewayDeleteFileShareInput {
  /**
   * @schema StorageGatewayDeleteFileShareInput#FileShareARN
   */
  readonly fileShareArn?: string;

  /**
   * @schema StorageGatewayDeleteFileShareInput#ForceDelete
   */
  readonly forceDelete?: boolean;

}

/**
 * Converts an object of type 'StorageGatewayDeleteFileShareInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteFileShareInput(obj: StorageGatewayDeleteFileShareInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileShareARN': obj.fileShareArn,
    'ForceDelete': obj.forceDelete,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDeleteFileShareOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteFileShareOutput(obj: StorageGatewayDeleteFileShareOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileShareARN': obj.fileShareArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDeleteGatewayInput
 */
export interface StorageGatewayDeleteGatewayInput {
  /**
   * @schema StorageGatewayDeleteGatewayInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDeleteGatewayInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteGatewayInput(obj: StorageGatewayDeleteGatewayInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDeleteGatewayOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteGatewayOutput(obj: StorageGatewayDeleteGatewayOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDeleteSnapshotScheduleInput
 */
export interface StorageGatewayDeleteSnapshotScheduleInput {
  /**
   * @schema StorageGatewayDeleteSnapshotScheduleInput#VolumeARN
   */
  readonly volumeArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDeleteSnapshotScheduleInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteSnapshotScheduleInput(obj: StorageGatewayDeleteSnapshotScheduleInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDeleteSnapshotScheduleOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteSnapshotScheduleOutput(obj: StorageGatewayDeleteSnapshotScheduleOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDeleteTapeInput
 */
export interface StorageGatewayDeleteTapeInput {
  /**
   * @schema StorageGatewayDeleteTapeInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayDeleteTapeInput#TapeARN
   */
  readonly tapeArn?: string;

  /**
   * @schema StorageGatewayDeleteTapeInput#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

}

/**
 * Converts an object of type 'StorageGatewayDeleteTapeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteTapeInput(obj: StorageGatewayDeleteTapeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'TapeARN': obj.tapeArn,
    'BypassGovernanceRetention': obj.bypassGovernanceRetention,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDeleteTapeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteTapeOutput(obj: StorageGatewayDeleteTapeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARN': obj.tapeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDeleteTapeArchiveInput
 */
export interface StorageGatewayDeleteTapeArchiveInput {
  /**
   * @schema StorageGatewayDeleteTapeArchiveInput#TapeARN
   */
  readonly tapeArn?: string;

  /**
   * @schema StorageGatewayDeleteTapeArchiveInput#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

}

/**
 * Converts an object of type 'StorageGatewayDeleteTapeArchiveInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteTapeArchiveInput(obj: StorageGatewayDeleteTapeArchiveInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARN': obj.tapeArn,
    'BypassGovernanceRetention': obj.bypassGovernanceRetention,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDeleteTapeArchiveOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteTapeArchiveOutput(obj: StorageGatewayDeleteTapeArchiveOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARN': obj.tapeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDeleteTapePoolInput
 */
export interface StorageGatewayDeleteTapePoolInput {
  /**
   * @schema StorageGatewayDeleteTapePoolInput#PoolARN
   */
  readonly poolArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDeleteTapePoolInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteTapePoolInput(obj: StorageGatewayDeleteTapePoolInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PoolARN': obj.poolArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDeleteTapePoolOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteTapePoolOutput(obj: StorageGatewayDeleteTapePoolOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PoolARN': obj.poolArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDeleteVolumeInput
 */
export interface StorageGatewayDeleteVolumeInput {
  /**
   * @schema StorageGatewayDeleteVolumeInput#VolumeARN
   */
  readonly volumeArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDeleteVolumeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteVolumeInput(obj: StorageGatewayDeleteVolumeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDeleteVolumeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeleteVolumeOutput(obj: StorageGatewayDeleteVolumeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeAvailabilityMonitorTestInput
 */
export interface StorageGatewayDescribeAvailabilityMonitorTestInput {
  /**
   * @schema StorageGatewayDescribeAvailabilityMonitorTestInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDescribeAvailabilityMonitorTestInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeAvailabilityMonitorTestInput(obj: StorageGatewayDescribeAvailabilityMonitorTestInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeAvailabilityMonitorTestOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeAvailabilityMonitorTestOutput(obj: StorageGatewayDescribeAvailabilityMonitorTestOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'Status': obj.status,
    'StartTime': obj.startTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeBandwidthRateLimitInput
 */
export interface StorageGatewayDescribeBandwidthRateLimitInput {
  /**
   * @schema StorageGatewayDescribeBandwidthRateLimitInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDescribeBandwidthRateLimitInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeBandwidthRateLimitInput(obj: StorageGatewayDescribeBandwidthRateLimitInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeBandwidthRateLimitOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeBandwidthRateLimitOutput(obj: StorageGatewayDescribeBandwidthRateLimitOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'AverageUploadRateLimitInBitsPerSec': obj.averageUploadRateLimitInBitsPerSec,
    'AverageDownloadRateLimitInBitsPerSec': obj.averageDownloadRateLimitInBitsPerSec,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeBandwidthRateLimitScheduleInput
 */
export interface StorageGatewayDescribeBandwidthRateLimitScheduleInput {
  /**
   * @schema StorageGatewayDescribeBandwidthRateLimitScheduleInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDescribeBandwidthRateLimitScheduleInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeBandwidthRateLimitScheduleInput(obj: StorageGatewayDescribeBandwidthRateLimitScheduleInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeBandwidthRateLimitScheduleOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeBandwidthRateLimitScheduleOutput(obj: StorageGatewayDescribeBandwidthRateLimitScheduleOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'BandwidthRateLimitIntervals': obj.bandwidthRateLimitIntervals?.map(y => toJson_StorageGatewayBandwidthRateLimitInterval(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeCacheInput
 */
export interface StorageGatewayDescribeCacheInput {
  /**
   * @schema StorageGatewayDescribeCacheInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDescribeCacheInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeCacheInput(obj: StorageGatewayDescribeCacheInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeCacheOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeCacheOutput(obj: StorageGatewayDescribeCacheOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'DiskIds': obj.diskIds?.map(y => y),
    'CacheAllocatedInBytes': obj.cacheAllocatedInBytes,
    'CacheUsedPercentage': obj.cacheUsedPercentage,
    'CacheDirtyPercentage': obj.cacheDirtyPercentage,
    'CacheHitPercentage': obj.cacheHitPercentage,
    'CacheMissPercentage': obj.cacheMissPercentage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeCachediScsiVolumesInput
 */
export interface StorageGatewayDescribeCachediScsiVolumesInput {
  /**
   * @schema StorageGatewayDescribeCachediScsiVolumesInput#VolumeARNs
   */
  readonly volumeArNs?: string[];

}

/**
 * Converts an object of type 'StorageGatewayDescribeCachediScsiVolumesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeCachediScsiVolumesInput(obj: StorageGatewayDescribeCachediScsiVolumesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARNs': obj.volumeArNs?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeCachediScsiVolumesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeCachediScsiVolumesOutput(obj: StorageGatewayDescribeCachediScsiVolumesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CachediSCSIVolumes': obj.cachediScsiVolumes?.map(y => toJson_StorageGatewayCachediScsiVolume(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeChapCredentialsInput
 */
export interface StorageGatewayDescribeChapCredentialsInput {
  /**
   * @schema StorageGatewayDescribeChapCredentialsInput#TargetARN
   */
  readonly targetArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDescribeChapCredentialsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeChapCredentialsInput(obj: StorageGatewayDescribeChapCredentialsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetARN': obj.targetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeChapCredentialsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeChapCredentialsOutput(obj: StorageGatewayDescribeChapCredentialsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChapCredentials': obj.chapCredentials?.map(y => toJson_StorageGatewayChapInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeFileSystemAssociationsInput
 */
export interface StorageGatewayDescribeFileSystemAssociationsInput {
  /**
   * @schema StorageGatewayDescribeFileSystemAssociationsInput#FileSystemAssociationARNList
   */
  readonly fileSystemAssociationArnList?: string[];

}

/**
 * Converts an object of type 'StorageGatewayDescribeFileSystemAssociationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeFileSystemAssociationsInput(obj: StorageGatewayDescribeFileSystemAssociationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystemAssociationARNList': obj.fileSystemAssociationArnList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeFileSystemAssociationsOutput
 */
export interface StorageGatewayDescribeFileSystemAssociationsOutput {
  /**
   * @schema StorageGatewayDescribeFileSystemAssociationsOutput#FileSystemAssociationInfoList
   */
  readonly fileSystemAssociationInfoList?: StorageGatewayFileSystemAssociationInfo[];

}

/**
 * Converts an object of type 'StorageGatewayDescribeFileSystemAssociationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeFileSystemAssociationsOutput(obj: StorageGatewayDescribeFileSystemAssociationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystemAssociationInfoList': obj.fileSystemAssociationInfoList?.map(y => toJson_StorageGatewayFileSystemAssociationInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeGatewayInformationInput
 */
export interface StorageGatewayDescribeGatewayInformationInput {
  /**
   * @schema StorageGatewayDescribeGatewayInformationInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDescribeGatewayInformationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeGatewayInformationInput(obj: StorageGatewayDescribeGatewayInformationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#GatewayCapacity
   */
  readonly gatewayCapacity?: string;

  /**
   * @schema StorageGatewayDescribeGatewayInformationOutput#SupportedGatewayCapacities
   */
  readonly supportedGatewayCapacities?: string[];

}

/**
 * Converts an object of type 'StorageGatewayDescribeGatewayInformationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeGatewayInformationOutput(obj: StorageGatewayDescribeGatewayInformationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'GatewayId': obj.gatewayId,
    'GatewayName': obj.gatewayName,
    'GatewayTimezone': obj.gatewayTimezone,
    'GatewayState': obj.gatewayState,
    'GatewayNetworkInterfaces': obj.gatewayNetworkInterfaces?.map(y => toJson_StorageGatewayNetworkInterface(y)),
    'GatewayType': obj.gatewayType,
    'NextUpdateAvailabilityDate': obj.nextUpdateAvailabilityDate,
    'LastSoftwareUpdate': obj.lastSoftwareUpdate,
    'Ec2InstanceId': obj.ec2InstanceId,
    'Ec2InstanceRegion': obj.ec2InstanceRegion,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
    'VPCEndpoint': obj.vpcEndpoint,
    'CloudWatchLogGroupARN': obj.cloudWatchLogGroupArn,
    'HostEnvironment': obj.hostEnvironment,
    'EndpointType': obj.endpointType,
    'SoftwareUpdatesEndDate': obj.softwareUpdatesEndDate,
    'DeprecationDate': obj.deprecationDate,
    'GatewayCapacity': obj.gatewayCapacity,
    'SupportedGatewayCapacities': obj.supportedGatewayCapacities?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeMaintenanceStartTimeInput
 */
export interface StorageGatewayDescribeMaintenanceStartTimeInput {
  /**
   * @schema StorageGatewayDescribeMaintenanceStartTimeInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDescribeMaintenanceStartTimeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeMaintenanceStartTimeInput(obj: StorageGatewayDescribeMaintenanceStartTimeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeMaintenanceStartTimeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeMaintenanceStartTimeOutput(obj: StorageGatewayDescribeMaintenanceStartTimeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'HourOfDay': obj.hourOfDay,
    'MinuteOfHour': obj.minuteOfHour,
    'DayOfWeek': obj.dayOfWeek,
    'DayOfMonth': obj.dayOfMonth,
    'Timezone': obj.timezone,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeNfsFileSharesInput
 */
export interface StorageGatewayDescribeNfsFileSharesInput {
  /**
   * @schema StorageGatewayDescribeNfsFileSharesInput#FileShareARNList
   */
  readonly fileShareArnList?: string[];

}

/**
 * Converts an object of type 'StorageGatewayDescribeNfsFileSharesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeNfsFileSharesInput(obj: StorageGatewayDescribeNfsFileSharesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileShareARNList': obj.fileShareArnList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeNfsFileSharesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeNfsFileSharesOutput(obj: StorageGatewayDescribeNfsFileSharesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NFSFileShareInfoList': obj.nfsFileShareInfoList?.map(y => toJson_StorageGatewayNfsFileShareInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeSmbFileSharesInput
 */
export interface StorageGatewayDescribeSmbFileSharesInput {
  /**
   * @schema StorageGatewayDescribeSmbFileSharesInput#FileShareARNList
   */
  readonly fileShareArnList?: string[];

}

/**
 * Converts an object of type 'StorageGatewayDescribeSmbFileSharesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeSmbFileSharesInput(obj: StorageGatewayDescribeSmbFileSharesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileShareARNList': obj.fileShareArnList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeSmbFileSharesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeSmbFileSharesOutput(obj: StorageGatewayDescribeSmbFileSharesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SMBFileShareInfoList': obj.smbFileShareInfoList?.map(y => toJson_StorageGatewaySmbFileShareInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeSmbSettingsInput
 */
export interface StorageGatewayDescribeSmbSettingsInput {
  /**
   * @schema StorageGatewayDescribeSmbSettingsInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDescribeSmbSettingsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeSmbSettingsInput(obj: StorageGatewayDescribeSmbSettingsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeSmbSettingsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeSmbSettingsOutput(obj: StorageGatewayDescribeSmbSettingsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'DomainName': obj.domainName,
    'ActiveDirectoryStatus': obj.activeDirectoryStatus,
    'SMBGuestPasswordSet': obj.smbGuestPasswordSet,
    'SMBSecurityStrategy': obj.smbSecurityStrategy,
    'FileSharesVisible': obj.fileSharesVisible,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeSnapshotScheduleInput
 */
export interface StorageGatewayDescribeSnapshotScheduleInput {
  /**
   * @schema StorageGatewayDescribeSnapshotScheduleInput#VolumeARN
   */
  readonly volumeArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDescribeSnapshotScheduleInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeSnapshotScheduleInput(obj: StorageGatewayDescribeSnapshotScheduleInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeSnapshotScheduleOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeSnapshotScheduleOutput(obj: StorageGatewayDescribeSnapshotScheduleOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
    'StartAt': obj.startAt,
    'RecurrenceInHours': obj.recurrenceInHours,
    'Description': obj.description,
    'Timezone': obj.timezone,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeStorediScsiVolumesInput
 */
export interface StorageGatewayDescribeStorediScsiVolumesInput {
  /**
   * @schema StorageGatewayDescribeStorediScsiVolumesInput#VolumeARNs
   */
  readonly volumeArNs?: string[];

}

/**
 * Converts an object of type 'StorageGatewayDescribeStorediScsiVolumesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeStorediScsiVolumesInput(obj: StorageGatewayDescribeStorediScsiVolumesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARNs': obj.volumeArNs?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeStorediScsiVolumesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeStorediScsiVolumesOutput(obj: StorageGatewayDescribeStorediScsiVolumesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StorediSCSIVolumes': obj.storediScsiVolumes?.map(y => toJson_StorageGatewayStorediScsiVolume(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeTapeArchivesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeTapeArchivesInput(obj: StorageGatewayDescribeTapeArchivesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARNs': obj.tapeArNs?.map(y => y),
    'Marker': obj.marker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeTapeArchivesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeTapeArchivesOutput(obj: StorageGatewayDescribeTapeArchivesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeArchives': obj.tapeArchives?.map(y => toJson_StorageGatewayTapeArchive(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeTapeRecoveryPointsInput
 */
export interface StorageGatewayDescribeTapeRecoveryPointsInput {
  /**
   * @schema StorageGatewayDescribeTapeRecoveryPointsInput#GatewayARN
   */
  readonly gatewayArn?: string;

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
 * Converts an object of type 'StorageGatewayDescribeTapeRecoveryPointsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeTapeRecoveryPointsInput(obj: StorageGatewayDescribeTapeRecoveryPointsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'Marker': obj.marker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeTapeRecoveryPointsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeTapeRecoveryPointsOutput(obj: StorageGatewayDescribeTapeRecoveryPointsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'TapeRecoveryPointInfos': obj.tapeRecoveryPointInfos?.map(y => toJson_StorageGatewayTapeRecoveryPointInfo(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeTapesInput
 */
export interface StorageGatewayDescribeTapesInput {
  /**
   * @schema StorageGatewayDescribeTapesInput#GatewayARN
   */
  readonly gatewayArn?: string;

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
 * Converts an object of type 'StorageGatewayDescribeTapesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeTapesInput(obj: StorageGatewayDescribeTapesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'TapeARNs': obj.tapeArNs?.map(y => y),
    'Marker': obj.marker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeTapesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeTapesOutput(obj: StorageGatewayDescribeTapesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tapes': obj.tapes?.map(y => toJson_StorageGatewayTape(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeUploadBufferInput
 */
export interface StorageGatewayDescribeUploadBufferInput {
  /**
   * @schema StorageGatewayDescribeUploadBufferInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDescribeUploadBufferInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeUploadBufferInput(obj: StorageGatewayDescribeUploadBufferInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeUploadBufferOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeUploadBufferOutput(obj: StorageGatewayDescribeUploadBufferOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'DiskIds': obj.diskIds?.map(y => y),
    'UploadBufferUsedInBytes': obj.uploadBufferUsedInBytes,
    'UploadBufferAllocatedInBytes': obj.uploadBufferAllocatedInBytes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeVtlDevicesInput
 */
export interface StorageGatewayDescribeVtlDevicesInput {
  /**
   * @schema StorageGatewayDescribeVtlDevicesInput#GatewayARN
   */
  readonly gatewayArn?: string;

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
 * Converts an object of type 'StorageGatewayDescribeVtlDevicesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeVtlDevicesInput(obj: StorageGatewayDescribeVtlDevicesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'VTLDeviceARNs': obj.vtlDeviceArNs?.map(y => y),
    'Marker': obj.marker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeVtlDevicesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeVtlDevicesOutput(obj: StorageGatewayDescribeVtlDevicesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'VTLDevices': obj.vtlDevices?.map(y => toJson_StorageGatewayVtlDevice(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDescribeWorkingStorageInput
 */
export interface StorageGatewayDescribeWorkingStorageInput {
  /**
   * @schema StorageGatewayDescribeWorkingStorageInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDescribeWorkingStorageInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeWorkingStorageInput(obj: StorageGatewayDescribeWorkingStorageInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDescribeWorkingStorageOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDescribeWorkingStorageOutput(obj: StorageGatewayDescribeWorkingStorageOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'DiskIds': obj.diskIds?.map(y => y),
    'WorkingStorageUsedInBytes': obj.workingStorageUsedInBytes,
    'WorkingStorageAllocatedInBytes': obj.workingStorageAllocatedInBytes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDetachVolumeInput
 */
export interface StorageGatewayDetachVolumeInput {
  /**
   * @schema StorageGatewayDetachVolumeInput#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema StorageGatewayDetachVolumeInput#ForceDetach
   */
  readonly forceDetach?: boolean;

}

/**
 * Converts an object of type 'StorageGatewayDetachVolumeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDetachVolumeInput(obj: StorageGatewayDetachVolumeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
    'ForceDetach': obj.forceDetach,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDetachVolumeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDetachVolumeOutput(obj: StorageGatewayDetachVolumeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDisableGatewayInput
 */
export interface StorageGatewayDisableGatewayInput {
  /**
   * @schema StorageGatewayDisableGatewayInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDisableGatewayInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDisableGatewayInput(obj: StorageGatewayDisableGatewayInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDisableGatewayOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDisableGatewayOutput(obj: StorageGatewayDisableGatewayOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDisassociateFileSystemInput
 */
export interface StorageGatewayDisassociateFileSystemInput {
  /**
   * @schema StorageGatewayDisassociateFileSystemInput#FileSystemAssociationARN
   */
  readonly fileSystemAssociationArn?: string;

  /**
   * @schema StorageGatewayDisassociateFileSystemInput#ForceDelete
   */
  readonly forceDelete?: boolean;

}

/**
 * Converts an object of type 'StorageGatewayDisassociateFileSystemInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDisassociateFileSystemInput(obj: StorageGatewayDisassociateFileSystemInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystemAssociationARN': obj.fileSystemAssociationArn,
    'ForceDelete': obj.forceDelete,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayDisassociateFileSystemOutput
 */
export interface StorageGatewayDisassociateFileSystemOutput {
  /**
   * @schema StorageGatewayDisassociateFileSystemOutput#FileSystemAssociationARN
   */
  readonly fileSystemAssociationArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayDisassociateFileSystemOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDisassociateFileSystemOutput(obj: StorageGatewayDisassociateFileSystemOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystemAssociationARN': obj.fileSystemAssociationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayJoinDomainInput
 */
export interface StorageGatewayJoinDomainInput {
  /**
   * @schema StorageGatewayJoinDomainInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayJoinDomainInput#DomainName
   */
  readonly domainName?: string;

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
  readonly userName?: string;

  /**
   * @schema StorageGatewayJoinDomainInput#Password
   */
  readonly password?: string;

}

/**
 * Converts an object of type 'StorageGatewayJoinDomainInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayJoinDomainInput(obj: StorageGatewayJoinDomainInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'DomainName': obj.domainName,
    'OrganizationalUnit': obj.organizationalUnit,
    'DomainControllers': obj.domainControllers?.map(y => y),
    'TimeoutInSeconds': obj.timeoutInSeconds,
    'UserName': obj.userName,
    'Password': obj.password,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayJoinDomainOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayJoinDomainOutput(obj: StorageGatewayJoinDomainOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'ActiveDirectoryStatus': obj.activeDirectoryStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayListAutomaticTapeCreationPoliciesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListAutomaticTapeCreationPoliciesInput(obj: StorageGatewayListAutomaticTapeCreationPoliciesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayListAutomaticTapeCreationPoliciesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListAutomaticTapeCreationPoliciesOutput(obj: StorageGatewayListAutomaticTapeCreationPoliciesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomaticTapeCreationPolicyInfos': obj.automaticTapeCreationPolicyInfos?.map(y => toJson_StorageGatewayAutomaticTapeCreationPolicyInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayListFileSharesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListFileSharesInput(obj: StorageGatewayListFileSharesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'Limit': obj.limit,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayListFileSharesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListFileSharesOutput(obj: StorageGatewayListFileSharesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'NextMarker': obj.nextMarker,
    'FileShareInfoList': obj.fileShareInfoList?.map(y => toJson_StorageGatewayFileShareInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayListFileSystemAssociationsInput
 */
export interface StorageGatewayListFileSystemAssociationsInput {
  /**
   * @schema StorageGatewayListFileSystemAssociationsInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayListFileSystemAssociationsInput#Limit
   */
  readonly limit?: number;

  /**
   * @schema StorageGatewayListFileSystemAssociationsInput#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'StorageGatewayListFileSystemAssociationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListFileSystemAssociationsInput(obj: StorageGatewayListFileSystemAssociationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'Limit': obj.limit,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayListFileSystemAssociationsOutput
 */
export interface StorageGatewayListFileSystemAssociationsOutput {
  /**
   * @schema StorageGatewayListFileSystemAssociationsOutput#Marker
   */
  readonly marker?: string;

  /**
   * @schema StorageGatewayListFileSystemAssociationsOutput#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema StorageGatewayListFileSystemAssociationsOutput#FileSystemAssociationSummaryList
   */
  readonly fileSystemAssociationSummaryList?: StorageGatewayFileSystemAssociationSummary[];

}

/**
 * Converts an object of type 'StorageGatewayListFileSystemAssociationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListFileSystemAssociationsOutput(obj: StorageGatewayListFileSystemAssociationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'NextMarker': obj.nextMarker,
    'FileSystemAssociationSummaryList': obj.fileSystemAssociationSummaryList?.map(y => toJson_StorageGatewayFileSystemAssociationSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayListGatewaysInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListGatewaysInput(obj: StorageGatewayListGatewaysInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayListGatewaysOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListGatewaysOutput(obj: StorageGatewayListGatewaysOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Gateways': obj.gateways?.map(y => toJson_StorageGatewayGatewayInfo(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayListLocalDisksInput
 */
export interface StorageGatewayListLocalDisksInput {
  /**
   * @schema StorageGatewayListLocalDisksInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayListLocalDisksInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListLocalDisksInput(obj: StorageGatewayListLocalDisksInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayListLocalDisksOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListLocalDisksOutput(obj: StorageGatewayListLocalDisksOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'Disks': obj.disks?.map(y => toJson_StorageGatewayDisk(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayListTagsForResourceInput
 */
export interface StorageGatewayListTagsForResourceInput {
  /**
   * @schema StorageGatewayListTagsForResourceInput#ResourceARN
   */
  readonly resourceArn?: string;

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
 * Converts an object of type 'StorageGatewayListTagsForResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListTagsForResourceInput(obj: StorageGatewayListTagsForResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Marker': obj.marker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayListTagsForResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListTagsForResourceOutput(obj: StorageGatewayListTagsForResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Marker': obj.marker,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayListTapePoolsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListTapePoolsInput(obj: StorageGatewayListTapePoolsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PoolARNs': obj.poolArNs?.map(y => y),
    'Marker': obj.marker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayListTapePoolsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListTapePoolsOutput(obj: StorageGatewayListTapePoolsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PoolInfos': obj.poolInfos?.map(y => toJson_StorageGatewayPoolInfo(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayListTapesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListTapesInput(obj: StorageGatewayListTapesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARNs': obj.tapeArNs?.map(y => y),
    'Marker': obj.marker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayListTapesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListTapesOutput(obj: StorageGatewayListTapesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeInfos': obj.tapeInfos?.map(y => toJson_StorageGatewayTapeInfo(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayListVolumeInitiatorsInput
 */
export interface StorageGatewayListVolumeInitiatorsInput {
  /**
   * @schema StorageGatewayListVolumeInitiatorsInput#VolumeARN
   */
  readonly volumeArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayListVolumeInitiatorsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListVolumeInitiatorsInput(obj: StorageGatewayListVolumeInitiatorsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayListVolumeInitiatorsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListVolumeInitiatorsOutput(obj: StorageGatewayListVolumeInitiatorsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Initiators': obj.initiators?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayListVolumeRecoveryPointsInput
 */
export interface StorageGatewayListVolumeRecoveryPointsInput {
  /**
   * @schema StorageGatewayListVolumeRecoveryPointsInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayListVolumeRecoveryPointsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListVolumeRecoveryPointsInput(obj: StorageGatewayListVolumeRecoveryPointsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayListVolumeRecoveryPointsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListVolumeRecoveryPointsOutput(obj: StorageGatewayListVolumeRecoveryPointsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'VolumeRecoveryPointInfos': obj.volumeRecoveryPointInfos?.map(y => toJson_StorageGatewayVolumeRecoveryPointInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayListVolumesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListVolumesInput(obj: StorageGatewayListVolumesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'Marker': obj.marker,
    'Limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayListVolumesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayListVolumesOutput(obj: StorageGatewayListVolumesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'Marker': obj.marker,
    'VolumeInfos': obj.volumeInfos?.map(y => toJson_StorageGatewayVolumeInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayNotifyWhenUploadedInput
 */
export interface StorageGatewayNotifyWhenUploadedInput {
  /**
   * @schema StorageGatewayNotifyWhenUploadedInput#FileShareARN
   */
  readonly fileShareArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayNotifyWhenUploadedInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayNotifyWhenUploadedInput(obj: StorageGatewayNotifyWhenUploadedInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileShareARN': obj.fileShareArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayNotifyWhenUploadedOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayNotifyWhenUploadedOutput(obj: StorageGatewayNotifyWhenUploadedOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileShareARN': obj.fileShareArn,
    'NotificationId': obj.notificationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayRefreshCacheInput
 */
export interface StorageGatewayRefreshCacheInput {
  /**
   * @schema StorageGatewayRefreshCacheInput#FileShareARN
   */
  readonly fileShareArn?: string;

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
 * Converts an object of type 'StorageGatewayRefreshCacheInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayRefreshCacheInput(obj: StorageGatewayRefreshCacheInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileShareARN': obj.fileShareArn,
    'FolderList': obj.folderList?.map(y => y),
    'Recursive': obj.recursive,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayRefreshCacheOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayRefreshCacheOutput(obj: StorageGatewayRefreshCacheOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileShareARN': obj.fileShareArn,
    'NotificationId': obj.notificationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayRemoveTagsFromResourceInput
 */
export interface StorageGatewayRemoveTagsFromResourceInput {
  /**
   * @schema StorageGatewayRemoveTagsFromResourceInput#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema StorageGatewayRemoveTagsFromResourceInput#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'StorageGatewayRemoveTagsFromResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayRemoveTagsFromResourceInput(obj: StorageGatewayRemoveTagsFromResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayRemoveTagsFromResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayRemoveTagsFromResourceOutput(obj: StorageGatewayRemoveTagsFromResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayResetCacheInput
 */
export interface StorageGatewayResetCacheInput {
  /**
   * @schema StorageGatewayResetCacheInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayResetCacheInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayResetCacheInput(obj: StorageGatewayResetCacheInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayResetCacheOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayResetCacheOutput(obj: StorageGatewayResetCacheOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayRetrieveTapeArchiveInput
 */
export interface StorageGatewayRetrieveTapeArchiveInput {
  /**
   * @schema StorageGatewayRetrieveTapeArchiveInput#TapeARN
   */
  readonly tapeArn?: string;

  /**
   * @schema StorageGatewayRetrieveTapeArchiveInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayRetrieveTapeArchiveInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayRetrieveTapeArchiveInput(obj: StorageGatewayRetrieveTapeArchiveInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARN': obj.tapeArn,
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayRetrieveTapeArchiveOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayRetrieveTapeArchiveOutput(obj: StorageGatewayRetrieveTapeArchiveOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARN': obj.tapeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayRetrieveTapeRecoveryPointInput
 */
export interface StorageGatewayRetrieveTapeRecoveryPointInput {
  /**
   * @schema StorageGatewayRetrieveTapeRecoveryPointInput#TapeARN
   */
  readonly tapeArn?: string;

  /**
   * @schema StorageGatewayRetrieveTapeRecoveryPointInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayRetrieveTapeRecoveryPointInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayRetrieveTapeRecoveryPointInput(obj: StorageGatewayRetrieveTapeRecoveryPointInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARN': obj.tapeArn,
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayRetrieveTapeRecoveryPointOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayRetrieveTapeRecoveryPointOutput(obj: StorageGatewayRetrieveTapeRecoveryPointOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARN': obj.tapeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewaySetLocalConsolePasswordInput
 */
export interface StorageGatewaySetLocalConsolePasswordInput {
  /**
   * @schema StorageGatewaySetLocalConsolePasswordInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewaySetLocalConsolePasswordInput#LocalConsolePassword
   */
  readonly localConsolePassword?: string;

}

/**
 * Converts an object of type 'StorageGatewaySetLocalConsolePasswordInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewaySetLocalConsolePasswordInput(obj: StorageGatewaySetLocalConsolePasswordInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'LocalConsolePassword': obj.localConsolePassword,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewaySetLocalConsolePasswordOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewaySetLocalConsolePasswordOutput(obj: StorageGatewaySetLocalConsolePasswordOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewaySetSmbGuestPasswordInput
 */
export interface StorageGatewaySetSmbGuestPasswordInput {
  /**
   * @schema StorageGatewaySetSmbGuestPasswordInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewaySetSmbGuestPasswordInput#Password
   */
  readonly password?: string;

}

/**
 * Converts an object of type 'StorageGatewaySetSmbGuestPasswordInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewaySetSmbGuestPasswordInput(obj: StorageGatewaySetSmbGuestPasswordInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'Password': obj.password,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewaySetSmbGuestPasswordOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewaySetSmbGuestPasswordOutput(obj: StorageGatewaySetSmbGuestPasswordOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayShutdownGatewayInput
 */
export interface StorageGatewayShutdownGatewayInput {
  /**
   * @schema StorageGatewayShutdownGatewayInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayShutdownGatewayInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayShutdownGatewayInput(obj: StorageGatewayShutdownGatewayInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayShutdownGatewayOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayShutdownGatewayOutput(obj: StorageGatewayShutdownGatewayOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayStartAvailabilityMonitorTestInput
 */
export interface StorageGatewayStartAvailabilityMonitorTestInput {
  /**
   * @schema StorageGatewayStartAvailabilityMonitorTestInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayStartAvailabilityMonitorTestInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayStartAvailabilityMonitorTestInput(obj: StorageGatewayStartAvailabilityMonitorTestInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayStartAvailabilityMonitorTestOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayStartAvailabilityMonitorTestOutput(obj: StorageGatewayStartAvailabilityMonitorTestOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayStartGatewayInput
 */
export interface StorageGatewayStartGatewayInput {
  /**
   * @schema StorageGatewayStartGatewayInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayStartGatewayInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayStartGatewayInput(obj: StorageGatewayStartGatewayInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayStartGatewayOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayStartGatewayOutput(obj: StorageGatewayStartGatewayOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayUpdateAutomaticTapeCreationPolicyInput
 */
export interface StorageGatewayUpdateAutomaticTapeCreationPolicyInput {
  /**
   * @schema StorageGatewayUpdateAutomaticTapeCreationPolicyInput#AutomaticTapeCreationRules
   */
  readonly automaticTapeCreationRules?: StorageGatewayAutomaticTapeCreationRule[];

  /**
   * @schema StorageGatewayUpdateAutomaticTapeCreationPolicyInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayUpdateAutomaticTapeCreationPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateAutomaticTapeCreationPolicyInput(obj: StorageGatewayUpdateAutomaticTapeCreationPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomaticTapeCreationRules': obj.automaticTapeCreationRules?.map(y => toJson_StorageGatewayAutomaticTapeCreationRule(y)),
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayUpdateAutomaticTapeCreationPolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateAutomaticTapeCreationPolicyOutput(obj: StorageGatewayUpdateAutomaticTapeCreationPolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayUpdateBandwidthRateLimitInput
 */
export interface StorageGatewayUpdateBandwidthRateLimitInput {
  /**
   * @schema StorageGatewayUpdateBandwidthRateLimitInput#GatewayARN
   */
  readonly gatewayArn?: string;

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
 * Converts an object of type 'StorageGatewayUpdateBandwidthRateLimitInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateBandwidthRateLimitInput(obj: StorageGatewayUpdateBandwidthRateLimitInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'AverageUploadRateLimitInBitsPerSec': obj.averageUploadRateLimitInBitsPerSec,
    'AverageDownloadRateLimitInBitsPerSec': obj.averageDownloadRateLimitInBitsPerSec,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayUpdateBandwidthRateLimitOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateBandwidthRateLimitOutput(obj: StorageGatewayUpdateBandwidthRateLimitOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayUpdateBandwidthRateLimitScheduleInput
 */
export interface StorageGatewayUpdateBandwidthRateLimitScheduleInput {
  /**
   * @schema StorageGatewayUpdateBandwidthRateLimitScheduleInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayUpdateBandwidthRateLimitScheduleInput#BandwidthRateLimitIntervals
   */
  readonly bandwidthRateLimitIntervals?: StorageGatewayBandwidthRateLimitInterval[];

}

/**
 * Converts an object of type 'StorageGatewayUpdateBandwidthRateLimitScheduleInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateBandwidthRateLimitScheduleInput(obj: StorageGatewayUpdateBandwidthRateLimitScheduleInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'BandwidthRateLimitIntervals': obj.bandwidthRateLimitIntervals?.map(y => toJson_StorageGatewayBandwidthRateLimitInterval(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayUpdateBandwidthRateLimitScheduleOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateBandwidthRateLimitScheduleOutput(obj: StorageGatewayUpdateBandwidthRateLimitScheduleOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayUpdateChapCredentialsInput
 */
export interface StorageGatewayUpdateChapCredentialsInput {
  /**
   * @schema StorageGatewayUpdateChapCredentialsInput#TargetARN
   */
  readonly targetArn?: string;

  /**
   * @schema StorageGatewayUpdateChapCredentialsInput#SecretToAuthenticateInitiator
   */
  readonly secretToAuthenticateInitiator?: string;

  /**
   * @schema StorageGatewayUpdateChapCredentialsInput#InitiatorName
   */
  readonly initiatorName?: string;

  /**
   * @schema StorageGatewayUpdateChapCredentialsInput#SecretToAuthenticateTarget
   */
  readonly secretToAuthenticateTarget?: string;

}

/**
 * Converts an object of type 'StorageGatewayUpdateChapCredentialsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateChapCredentialsInput(obj: StorageGatewayUpdateChapCredentialsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetARN': obj.targetArn,
    'SecretToAuthenticateInitiator': obj.secretToAuthenticateInitiator,
    'InitiatorName': obj.initiatorName,
    'SecretToAuthenticateTarget': obj.secretToAuthenticateTarget,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayUpdateChapCredentialsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateChapCredentialsOutput(obj: StorageGatewayUpdateChapCredentialsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetARN': obj.targetArn,
    'InitiatorName': obj.initiatorName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayUpdateFileSystemAssociationInput
 */
export interface StorageGatewayUpdateFileSystemAssociationInput {
  /**
   * @schema StorageGatewayUpdateFileSystemAssociationInput#FileSystemAssociationARN
   */
  readonly fileSystemAssociationArn?: string;

  /**
   * @schema StorageGatewayUpdateFileSystemAssociationInput#UserName
   */
  readonly userName?: string;

  /**
   * @schema StorageGatewayUpdateFileSystemAssociationInput#Password
   */
  readonly password?: string;

  /**
   * @schema StorageGatewayUpdateFileSystemAssociationInput#AuditDestinationARN
   */
  readonly auditDestinationArn?: string;

  /**
   * @schema StorageGatewayUpdateFileSystemAssociationInput#CacheAttributes
   */
  readonly cacheAttributes?: StorageGatewayCacheAttributes;

}

/**
 * Converts an object of type 'StorageGatewayUpdateFileSystemAssociationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateFileSystemAssociationInput(obj: StorageGatewayUpdateFileSystemAssociationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystemAssociationARN': obj.fileSystemAssociationArn,
    'UserName': obj.userName,
    'Password': obj.password,
    'AuditDestinationARN': obj.auditDestinationArn,
    'CacheAttributes': toJson_StorageGatewayCacheAttributes(obj.cacheAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayUpdateFileSystemAssociationOutput
 */
export interface StorageGatewayUpdateFileSystemAssociationOutput {
  /**
   * @schema StorageGatewayUpdateFileSystemAssociationOutput#FileSystemAssociationARN
   */
  readonly fileSystemAssociationArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayUpdateFileSystemAssociationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateFileSystemAssociationOutput(obj: StorageGatewayUpdateFileSystemAssociationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystemAssociationARN': obj.fileSystemAssociationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayUpdateGatewayInformationInput
 */
export interface StorageGatewayUpdateGatewayInformationInput {
  /**
   * @schema StorageGatewayUpdateGatewayInformationInput#GatewayARN
   */
  readonly gatewayArn?: string;

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

  /**
   * @schema StorageGatewayUpdateGatewayInformationInput#GatewayCapacity
   */
  readonly gatewayCapacity?: string;

}

/**
 * Converts an object of type 'StorageGatewayUpdateGatewayInformationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateGatewayInformationInput(obj: StorageGatewayUpdateGatewayInformationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'GatewayName': obj.gatewayName,
    'GatewayTimezone': obj.gatewayTimezone,
    'CloudWatchLogGroupARN': obj.cloudWatchLogGroupArn,
    'GatewayCapacity': obj.gatewayCapacity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayUpdateGatewayInformationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateGatewayInformationOutput(obj: StorageGatewayUpdateGatewayInformationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'GatewayName': obj.gatewayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayUpdateGatewaySoftwareNowInput
 */
export interface StorageGatewayUpdateGatewaySoftwareNowInput {
  /**
   * @schema StorageGatewayUpdateGatewaySoftwareNowInput#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayUpdateGatewaySoftwareNowInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateGatewaySoftwareNowInput(obj: StorageGatewayUpdateGatewaySoftwareNowInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayUpdateGatewaySoftwareNowOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateGatewaySoftwareNowOutput(obj: StorageGatewayUpdateGatewaySoftwareNowOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayUpdateMaintenanceStartTimeInput
 */
export interface StorageGatewayUpdateMaintenanceStartTimeInput {
  /**
   * @schema StorageGatewayUpdateMaintenanceStartTimeInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayUpdateMaintenanceStartTimeInput#HourOfDay
   */
  readonly hourOfDay?: number;

  /**
   * @schema StorageGatewayUpdateMaintenanceStartTimeInput#MinuteOfHour
   */
  readonly minuteOfHour?: number;

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
 * Converts an object of type 'StorageGatewayUpdateMaintenanceStartTimeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateMaintenanceStartTimeInput(obj: StorageGatewayUpdateMaintenanceStartTimeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'HourOfDay': obj.hourOfDay,
    'MinuteOfHour': obj.minuteOfHour,
    'DayOfWeek': obj.dayOfWeek,
    'DayOfMonth': obj.dayOfMonth,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayUpdateMaintenanceStartTimeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateMaintenanceStartTimeOutput(obj: StorageGatewayUpdateMaintenanceStartTimeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayUpdateNfsFileShareInput
 */
export interface StorageGatewayUpdateNfsFileShareInput {
  /**
   * @schema StorageGatewayUpdateNfsFileShareInput#FileShareARN
   */
  readonly fileShareArn?: string;

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
 * Converts an object of type 'StorageGatewayUpdateNfsFileShareInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateNfsFileShareInput(obj: StorageGatewayUpdateNfsFileShareInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileShareARN': obj.fileShareArn,
    'KMSEncrypted': obj.kmsEncrypted,
    'KMSKey': obj.kmsKey,
    'NFSFileShareDefaults': toJson_StorageGatewayNfsFileShareDefaults(obj.nfsFileShareDefaults),
    'DefaultStorageClass': obj.defaultStorageClass,
    'ObjectACL': obj.objectAcl,
    'ClientList': obj.clientList?.map(y => y),
    'Squash': obj.squash,
    'ReadOnly': obj.readOnly,
    'GuessMIMETypeEnabled': obj.guessMimeTypeEnabled,
    'RequesterPays': obj.requesterPays,
    'FileShareName': obj.fileShareName,
    'CacheAttributes': toJson_StorageGatewayCacheAttributes(obj.cacheAttributes),
    'NotificationPolicy': obj.notificationPolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayUpdateNfsFileShareOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateNfsFileShareOutput(obj: StorageGatewayUpdateNfsFileShareOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileShareARN': obj.fileShareArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayUpdateSmbFileShareInput
 */
export interface StorageGatewayUpdateSmbFileShareInput {
  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#FileShareARN
   */
  readonly fileShareArn?: string;

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

  /**
   * @schema StorageGatewayUpdateSmbFileShareInput#OplocksEnabled
   */
  readonly oplocksEnabled?: boolean;

}

/**
 * Converts an object of type 'StorageGatewayUpdateSmbFileShareInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateSmbFileShareInput(obj: StorageGatewayUpdateSmbFileShareInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileShareARN': obj.fileShareArn,
    'KMSEncrypted': obj.kmsEncrypted,
    'KMSKey': obj.kmsKey,
    'DefaultStorageClass': obj.defaultStorageClass,
    'ObjectACL': obj.objectAcl,
    'ReadOnly': obj.readOnly,
    'GuessMIMETypeEnabled': obj.guessMimeTypeEnabled,
    'RequesterPays': obj.requesterPays,
    'SMBACLEnabled': obj.smbaclEnabled,
    'AccessBasedEnumeration': obj.accessBasedEnumeration,
    'AdminUserList': obj.adminUserList?.map(y => y),
    'ValidUserList': obj.validUserList?.map(y => y),
    'InvalidUserList': obj.invalidUserList?.map(y => y),
    'AuditDestinationARN': obj.auditDestinationArn,
    'CaseSensitivity': obj.caseSensitivity,
    'FileShareName': obj.fileShareName,
    'CacheAttributes': toJson_StorageGatewayCacheAttributes(obj.cacheAttributes),
    'NotificationPolicy': obj.notificationPolicy,
    'OplocksEnabled': obj.oplocksEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayUpdateSmbFileShareOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateSmbFileShareOutput(obj: StorageGatewayUpdateSmbFileShareOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileShareARN': obj.fileShareArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayUpdateSmbFileShareVisibilityInput
 */
export interface StorageGatewayUpdateSmbFileShareVisibilityInput {
  /**
   * @schema StorageGatewayUpdateSmbFileShareVisibilityInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayUpdateSmbFileShareVisibilityInput#FileSharesVisible
   */
  readonly fileSharesVisible?: boolean;

}

/**
 * Converts an object of type 'StorageGatewayUpdateSmbFileShareVisibilityInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateSmbFileShareVisibilityInput(obj: StorageGatewayUpdateSmbFileShareVisibilityInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'FileSharesVisible': obj.fileSharesVisible,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayUpdateSmbFileShareVisibilityOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateSmbFileShareVisibilityOutput(obj: StorageGatewayUpdateSmbFileShareVisibilityOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayUpdateSmbSecurityStrategyInput
 */
export interface StorageGatewayUpdateSmbSecurityStrategyInput {
  /**
   * @schema StorageGatewayUpdateSmbSecurityStrategyInput#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayUpdateSmbSecurityStrategyInput#SMBSecurityStrategy
   */
  readonly smbSecurityStrategy?: string;

}

/**
 * Converts an object of type 'StorageGatewayUpdateSmbSecurityStrategyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateSmbSecurityStrategyInput(obj: StorageGatewayUpdateSmbSecurityStrategyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
    'SMBSecurityStrategy': obj.smbSecurityStrategy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayUpdateSmbSecurityStrategyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateSmbSecurityStrategyOutput(obj: StorageGatewayUpdateSmbSecurityStrategyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayUpdateSnapshotScheduleInput
 */
export interface StorageGatewayUpdateSnapshotScheduleInput {
  /**
   * @schema StorageGatewayUpdateSnapshotScheduleInput#VolumeARN
   */
  readonly volumeArn?: string;

  /**
   * @schema StorageGatewayUpdateSnapshotScheduleInput#StartAt
   */
  readonly startAt?: number;

  /**
   * @schema StorageGatewayUpdateSnapshotScheduleInput#RecurrenceInHours
   */
  readonly recurrenceInHours?: number;

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
 * Converts an object of type 'StorageGatewayUpdateSnapshotScheduleInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateSnapshotScheduleInput(obj: StorageGatewayUpdateSnapshotScheduleInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
    'StartAt': obj.startAt,
    'RecurrenceInHours': obj.recurrenceInHours,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayUpdateSnapshotScheduleOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateSnapshotScheduleOutput(obj: StorageGatewayUpdateSnapshotScheduleOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayUpdateVtlDeviceTypeInput
 */
export interface StorageGatewayUpdateVtlDeviceTypeInput {
  /**
   * @schema StorageGatewayUpdateVtlDeviceTypeInput#VTLDeviceARN
   */
  readonly vtlDeviceArn?: string;

  /**
   * @schema StorageGatewayUpdateVtlDeviceTypeInput#DeviceType
   */
  readonly deviceType?: string;

}

/**
 * Converts an object of type 'StorageGatewayUpdateVtlDeviceTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateVtlDeviceTypeInput(obj: StorageGatewayUpdateVtlDeviceTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VTLDeviceARN': obj.vtlDeviceArn,
    'DeviceType': obj.deviceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayUpdateVtlDeviceTypeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayUpdateVtlDeviceTypeOutput(obj: StorageGatewayUpdateVtlDeviceTypeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VTLDeviceARN': obj.vtlDeviceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayTag
 */
export interface StorageGatewayTag {
  /**
   * @schema StorageGatewayTag#Key
   */
  readonly key?: string;

  /**
   * @schema StorageGatewayTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'StorageGatewayTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayTag(obj: StorageGatewayTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayCacheAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCacheAttributes(obj: StorageGatewayCacheAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CacheStaleTimeoutInSeconds': obj.cacheStaleTimeoutInSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayEndpointNetworkConfiguration
 */
export interface StorageGatewayEndpointNetworkConfiguration {
  /**
   * @schema StorageGatewayEndpointNetworkConfiguration#IpAddresses
   */
  readonly ipAddresses?: string[];

}

/**
 * Converts an object of type 'StorageGatewayEndpointNetworkConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayEndpointNetworkConfiguration(obj: StorageGatewayEndpointNetworkConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IpAddresses': obj.ipAddresses?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayNfsFileShareDefaults' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayNfsFileShareDefaults(obj: StorageGatewayNfsFileShareDefaults | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileMode': obj.fileMode,
    'DirectoryMode': obj.directoryMode,
    'GroupId': obj.groupId,
    'OwnerId': obj.ownerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayBandwidthRateLimitInterval
 */
export interface StorageGatewayBandwidthRateLimitInterval {
  /**
   * @schema StorageGatewayBandwidthRateLimitInterval#StartHourOfDay
   */
  readonly startHourOfDay?: number;

  /**
   * @schema StorageGatewayBandwidthRateLimitInterval#StartMinuteOfHour
   */
  readonly startMinuteOfHour?: number;

  /**
   * @schema StorageGatewayBandwidthRateLimitInterval#EndHourOfDay
   */
  readonly endHourOfDay?: number;

  /**
   * @schema StorageGatewayBandwidthRateLimitInterval#EndMinuteOfHour
   */
  readonly endMinuteOfHour?: number;

  /**
   * @schema StorageGatewayBandwidthRateLimitInterval#DaysOfWeek
   */
  readonly daysOfWeek?: number[];

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
 * Converts an object of type 'StorageGatewayBandwidthRateLimitInterval' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayBandwidthRateLimitInterval(obj: StorageGatewayBandwidthRateLimitInterval | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartHourOfDay': obj.startHourOfDay,
    'StartMinuteOfHour': obj.startMinuteOfHour,
    'EndHourOfDay': obj.endHourOfDay,
    'EndMinuteOfHour': obj.endMinuteOfHour,
    'DaysOfWeek': obj.daysOfWeek?.map(y => y),
    'AverageUploadRateLimitInBitsPerSec': obj.averageUploadRateLimitInBitsPerSec,
    'AverageDownloadRateLimitInBitsPerSec': obj.averageDownloadRateLimitInBitsPerSec,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayCachediScsiVolume' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayCachediScsiVolume(obj: StorageGatewayCachediScsiVolume | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
    'VolumeId': obj.volumeId,
    'VolumeType': obj.volumeType,
    'VolumeStatus': obj.volumeStatus,
    'VolumeAttachmentStatus': obj.volumeAttachmentStatus,
    'VolumeSizeInBytes': obj.volumeSizeInBytes,
    'VolumeProgress': obj.volumeProgress,
    'SourceSnapshotId': obj.sourceSnapshotId,
    'VolumeiSCSIAttributes': toJson_StorageGatewayVolumeiScsiAttributes(obj.volumeiScsiAttributes),
    'CreatedDate': obj.createdDate,
    'VolumeUsedInBytes': obj.volumeUsedInBytes,
    'KMSKey': obj.kmsKey,
    'TargetName': obj.targetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayChapInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayChapInfo(obj: StorageGatewayChapInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetARN': obj.targetArn,
    'SecretToAuthenticateInitiator': obj.secretToAuthenticateInitiator,
    'InitiatorName': obj.initiatorName,
    'SecretToAuthenticateTarget': obj.secretToAuthenticateTarget,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayFileSystemAssociationInfo
 */
export interface StorageGatewayFileSystemAssociationInfo {
  /**
   * @schema StorageGatewayFileSystemAssociationInfo#FileSystemAssociationARN
   */
  readonly fileSystemAssociationArn?: string;

  /**
   * @schema StorageGatewayFileSystemAssociationInfo#LocationARN
   */
  readonly locationArn?: string;

  /**
   * @schema StorageGatewayFileSystemAssociationInfo#FileSystemAssociationStatus
   */
  readonly fileSystemAssociationStatus?: string;

  /**
   * @schema StorageGatewayFileSystemAssociationInfo#AuditDestinationARN
   */
  readonly auditDestinationArn?: string;

  /**
   * @schema StorageGatewayFileSystemAssociationInfo#GatewayARN
   */
  readonly gatewayArn?: string;

  /**
   * @schema StorageGatewayFileSystemAssociationInfo#Tags
   */
  readonly tags?: StorageGatewayTag[];

  /**
   * @schema StorageGatewayFileSystemAssociationInfo#CacheAttributes
   */
  readonly cacheAttributes?: StorageGatewayCacheAttributes;

  /**
   * @schema StorageGatewayFileSystemAssociationInfo#EndpointNetworkConfiguration
   */
  readonly endpointNetworkConfiguration?: StorageGatewayEndpointNetworkConfiguration;

}

/**
 * Converts an object of type 'StorageGatewayFileSystemAssociationInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayFileSystemAssociationInfo(obj: StorageGatewayFileSystemAssociationInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystemAssociationARN': obj.fileSystemAssociationArn,
    'LocationARN': obj.locationArn,
    'FileSystemAssociationStatus': obj.fileSystemAssociationStatus,
    'AuditDestinationARN': obj.auditDestinationArn,
    'GatewayARN': obj.gatewayArn,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
    'CacheAttributes': toJson_StorageGatewayCacheAttributes(obj.cacheAttributes),
    'EndpointNetworkConfiguration': toJson_StorageGatewayEndpointNetworkConfiguration(obj.endpointNetworkConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayNetworkInterface' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayNetworkInterface(obj: StorageGatewayNetworkInterface | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ipv4Address': obj.ipv4Address,
    'MacAddress': obj.macAddress,
    'Ipv6Address': obj.ipv6Address,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema StorageGatewayNfsFileShareInfo#VPCEndpointDNSName
   */
  readonly vpcEndpointDnsName?: string;

  /**
   * @schema StorageGatewayNfsFileShareInfo#BucketRegion
   */
  readonly bucketRegion?: string;

}

/**
 * Converts an object of type 'StorageGatewayNfsFileShareInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayNfsFileShareInfo(obj: StorageGatewayNfsFileShareInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NFSFileShareDefaults': toJson_StorageGatewayNfsFileShareDefaults(obj.nfsFileShareDefaults),
    'FileShareARN': obj.fileShareArn,
    'FileShareId': obj.fileShareId,
    'FileShareStatus': obj.fileShareStatus,
    'GatewayARN': obj.gatewayArn,
    'KMSEncrypted': obj.kmsEncrypted,
    'KMSKey': obj.kmsKey,
    'Path': obj.path,
    'Role': obj.role,
    'LocationARN': obj.locationArn,
    'DefaultStorageClass': obj.defaultStorageClass,
    'ObjectACL': obj.objectAcl,
    'ClientList': obj.clientList?.map(y => y),
    'Squash': obj.squash,
    'ReadOnly': obj.readOnly,
    'GuessMIMETypeEnabled': obj.guessMimeTypeEnabled,
    'RequesterPays': obj.requesterPays,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
    'FileShareName': obj.fileShareName,
    'CacheAttributes': toJson_StorageGatewayCacheAttributes(obj.cacheAttributes),
    'NotificationPolicy': obj.notificationPolicy,
    'VPCEndpointDNSName': obj.vpcEndpointDnsName,
    'BucketRegion': obj.bucketRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema StorageGatewaySmbFileShareInfo#VPCEndpointDNSName
   */
  readonly vpcEndpointDnsName?: string;

  /**
   * @schema StorageGatewaySmbFileShareInfo#BucketRegion
   */
  readonly bucketRegion?: string;

  /**
   * @schema StorageGatewaySmbFileShareInfo#OplocksEnabled
   */
  readonly oplocksEnabled?: boolean;

}

/**
 * Converts an object of type 'StorageGatewaySmbFileShareInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewaySmbFileShareInfo(obj: StorageGatewaySmbFileShareInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileShareARN': obj.fileShareArn,
    'FileShareId': obj.fileShareId,
    'FileShareStatus': obj.fileShareStatus,
    'GatewayARN': obj.gatewayArn,
    'KMSEncrypted': obj.kmsEncrypted,
    'KMSKey': obj.kmsKey,
    'Path': obj.path,
    'Role': obj.role,
    'LocationARN': obj.locationArn,
    'DefaultStorageClass': obj.defaultStorageClass,
    'ObjectACL': obj.objectAcl,
    'ReadOnly': obj.readOnly,
    'GuessMIMETypeEnabled': obj.guessMimeTypeEnabled,
    'RequesterPays': obj.requesterPays,
    'SMBACLEnabled': obj.smbaclEnabled,
    'AccessBasedEnumeration': obj.accessBasedEnumeration,
    'AdminUserList': obj.adminUserList?.map(y => y),
    'ValidUserList': obj.validUserList?.map(y => y),
    'InvalidUserList': obj.invalidUserList?.map(y => y),
    'AuditDestinationARN': obj.auditDestinationArn,
    'Authentication': obj.authentication,
    'CaseSensitivity': obj.caseSensitivity,
    'Tags': obj.tags?.map(y => toJson_StorageGatewayTag(y)),
    'FileShareName': obj.fileShareName,
    'CacheAttributes': toJson_StorageGatewayCacheAttributes(obj.cacheAttributes),
    'NotificationPolicy': obj.notificationPolicy,
    'VPCEndpointDNSName': obj.vpcEndpointDnsName,
    'BucketRegion': obj.bucketRegion,
    'OplocksEnabled': obj.oplocksEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayStorediScsiVolume' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayStorediScsiVolume(obj: StorageGatewayStorediScsiVolume | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
    'VolumeId': obj.volumeId,
    'VolumeType': obj.volumeType,
    'VolumeStatus': obj.volumeStatus,
    'VolumeAttachmentStatus': obj.volumeAttachmentStatus,
    'VolumeSizeInBytes': obj.volumeSizeInBytes,
    'VolumeProgress': obj.volumeProgress,
    'VolumeDiskId': obj.volumeDiskId,
    'SourceSnapshotId': obj.sourceSnapshotId,
    'PreservedExistingData': obj.preservedExistingData,
    'VolumeiSCSIAttributes': toJson_StorageGatewayVolumeiScsiAttributes(obj.volumeiScsiAttributes),
    'CreatedDate': obj.createdDate,
    'VolumeUsedInBytes': obj.volumeUsedInBytes,
    'KMSKey': obj.kmsKey,
    'TargetName': obj.targetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayTapeArchive' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayTapeArchive(obj: StorageGatewayTapeArchive | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARN': obj.tapeArn,
    'TapeBarcode': obj.tapeBarcode,
    'TapeCreatedDate': obj.tapeCreatedDate,
    'TapeSizeInBytes': obj.tapeSizeInBytes,
    'CompletionTime': obj.completionTime,
    'RetrievedTo': obj.retrievedTo,
    'TapeStatus': obj.tapeStatus,
    'TapeUsedInBytes': obj.tapeUsedInBytes,
    'KMSKey': obj.kmsKey,
    'PoolId': obj.poolId,
    'Worm': obj.worm,
    'RetentionStartDate': obj.retentionStartDate,
    'PoolEntryDate': obj.poolEntryDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayTapeRecoveryPointInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayTapeRecoveryPointInfo(obj: StorageGatewayTapeRecoveryPointInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARN': obj.tapeArn,
    'TapeRecoveryPointTime': obj.tapeRecoveryPointTime,
    'TapeSizeInBytes': obj.tapeSizeInBytes,
    'TapeStatus': obj.tapeStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayTape' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayTape(obj: StorageGatewayTape | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARN': obj.tapeArn,
    'TapeBarcode': obj.tapeBarcode,
    'TapeCreatedDate': obj.tapeCreatedDate,
    'TapeSizeInBytes': obj.tapeSizeInBytes,
    'TapeStatus': obj.tapeStatus,
    'VTLDevice': obj.vtlDevice,
    'Progress': obj.progress,
    'TapeUsedInBytes': obj.tapeUsedInBytes,
    'KMSKey': obj.kmsKey,
    'PoolId': obj.poolId,
    'Worm': obj.worm,
    'RetentionStartDate': obj.retentionStartDate,
    'PoolEntryDate': obj.poolEntryDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayVtlDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayVtlDevice(obj: StorageGatewayVtlDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VTLDeviceARN': obj.vtlDeviceArn,
    'VTLDeviceType': obj.vtlDeviceType,
    'VTLDeviceVendor': obj.vtlDeviceVendor,
    'VTLDeviceProductIdentifier': obj.vtlDeviceProductIdentifier,
    'DeviceiSCSIAttributes': toJson_StorageGatewayDeviceiScsiAttributes(obj.deviceiScsiAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayAutomaticTapeCreationPolicyInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayAutomaticTapeCreationPolicyInfo(obj: StorageGatewayAutomaticTapeCreationPolicyInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutomaticTapeCreationRules': obj.automaticTapeCreationRules?.map(y => toJson_StorageGatewayAutomaticTapeCreationRule(y)),
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayFileShareInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayFileShareInfo(obj: StorageGatewayFileShareInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileShareType': obj.fileShareType,
    'FileShareARN': obj.fileShareArn,
    'FileShareId': obj.fileShareId,
    'FileShareStatus': obj.fileShareStatus,
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayFileSystemAssociationSummary
 */
export interface StorageGatewayFileSystemAssociationSummary {
  /**
   * @schema StorageGatewayFileSystemAssociationSummary#FileSystemAssociationId
   */
  readonly fileSystemAssociationId?: string;

  /**
   * @schema StorageGatewayFileSystemAssociationSummary#FileSystemAssociationARN
   */
  readonly fileSystemAssociationArn?: string;

  /**
   * @schema StorageGatewayFileSystemAssociationSummary#FileSystemAssociationStatus
   */
  readonly fileSystemAssociationStatus?: string;

  /**
   * @schema StorageGatewayFileSystemAssociationSummary#GatewayARN
   */
  readonly gatewayArn?: string;

}

/**
 * Converts an object of type 'StorageGatewayFileSystemAssociationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayFileSystemAssociationSummary(obj: StorageGatewayFileSystemAssociationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileSystemAssociationId': obj.fileSystemAssociationId,
    'FileSystemAssociationARN': obj.fileSystemAssociationArn,
    'FileSystemAssociationStatus': obj.fileSystemAssociationStatus,
    'GatewayARN': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayGatewayInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayGatewayInfo(obj: StorageGatewayGatewayInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GatewayId': obj.gatewayId,
    'GatewayARN': obj.gatewayArn,
    'GatewayType': obj.gatewayType,
    'GatewayOperationalState': obj.gatewayOperationalState,
    'GatewayName': obj.gatewayName,
    'Ec2InstanceId': obj.ec2InstanceId,
    'Ec2InstanceRegion': obj.ec2InstanceRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayDisk' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDisk(obj: StorageGatewayDisk | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DiskId': obj.diskId,
    'DiskPath': obj.diskPath,
    'DiskNode': obj.diskNode,
    'DiskStatus': obj.diskStatus,
    'DiskSizeInBytes': obj.diskSizeInBytes,
    'DiskAllocationType': obj.diskAllocationType,
    'DiskAllocationResource': obj.diskAllocationResource,
    'DiskAttributeList': obj.diskAttributeList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayPoolInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayPoolInfo(obj: StorageGatewayPoolInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PoolARN': obj.poolArn,
    'PoolName': obj.poolName,
    'StorageClass': obj.storageClass,
    'RetentionLockType': obj.retentionLockType,
    'RetentionLockTimeInDays': obj.retentionLockTimeInDays,
    'PoolStatus': obj.poolStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayTapeInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayTapeInfo(obj: StorageGatewayTapeInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeARN': obj.tapeArn,
    'TapeBarcode': obj.tapeBarcode,
    'TapeSizeInBytes': obj.tapeSizeInBytes,
    'TapeStatus': obj.tapeStatus,
    'GatewayARN': obj.gatewayArn,
    'PoolId': obj.poolId,
    'RetentionStartDate': obj.retentionStartDate,
    'PoolEntryDate': obj.poolEntryDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayVolumeRecoveryPointInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayVolumeRecoveryPointInfo(obj: StorageGatewayVolumeRecoveryPointInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
    'VolumeSizeInBytes': obj.volumeSizeInBytes,
    'VolumeUsageInBytes': obj.volumeUsageInBytes,
    'VolumeRecoveryPointTime': obj.volumeRecoveryPointTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayVolumeInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayVolumeInfo(obj: StorageGatewayVolumeInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeARN': obj.volumeArn,
    'VolumeId': obj.volumeId,
    'GatewayARN': obj.gatewayArn,
    'GatewayId': obj.gatewayId,
    'VolumeType': obj.volumeType,
    'VolumeSizeInBytes': obj.volumeSizeInBytes,
    'VolumeAttachmentStatus': obj.volumeAttachmentStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema StorageGatewayAutomaticTapeCreationRule
 */
export interface StorageGatewayAutomaticTapeCreationRule {
  /**
   * @schema StorageGatewayAutomaticTapeCreationRule#TapeBarcodePrefix
   */
  readonly tapeBarcodePrefix?: string;

  /**
   * @schema StorageGatewayAutomaticTapeCreationRule#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema StorageGatewayAutomaticTapeCreationRule#TapeSizeInBytes
   */
  readonly tapeSizeInBytes?: number;

  /**
   * @schema StorageGatewayAutomaticTapeCreationRule#MinimumNumTapes
   */
  readonly minimumNumTapes?: number;

  /**
   * @schema StorageGatewayAutomaticTapeCreationRule#Worm
   */
  readonly worm?: boolean;

}

/**
 * Converts an object of type 'StorageGatewayAutomaticTapeCreationRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayAutomaticTapeCreationRule(obj: StorageGatewayAutomaticTapeCreationRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TapeBarcodePrefix': obj.tapeBarcodePrefix,
    'PoolId': obj.poolId,
    'TapeSizeInBytes': obj.tapeSizeInBytes,
    'MinimumNumTapes': obj.minimumNumTapes,
    'Worm': obj.worm,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'StorageGatewayVolumeiScsiAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayVolumeiScsiAttributes(obj: StorageGatewayVolumeiScsiAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetARN': obj.targetArn,
    'NetworkInterfaceId': obj.networkInterfaceId,
    'NetworkInterfacePort': obj.networkInterfacePort,
    'LunNumber': obj.lunNumber,
    'ChapEnabled': obj.chapEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'StorageGatewayDeviceiScsiAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_StorageGatewayDeviceiScsiAttributes(obj: StorageGatewayDeviceiScsiAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetARN': obj.targetArn,
    'NetworkInterfaceId': obj.networkInterfaceId,
    'NetworkInterfacePort': obj.networkInterfacePort,
    'ChapEnabled': obj.chapEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
