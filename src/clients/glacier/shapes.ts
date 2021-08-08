/**
 * @schema GlacierAbortMultipartUploadInput
 */
export interface GlacierAbortMultipartUploadInput {
  /**
   * @schema GlacierAbortMultipartUploadInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierAbortMultipartUploadInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierAbortMultipartUploadInput#uploadId
   */
  readonly uploadId: string;

}

/**
 * Converts an object of type 'GlacierAbortMultipartUploadInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierAbortMultipartUploadInput(obj: GlacierAbortMultipartUploadInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
    'uploadId': obj.uploadId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierAbortVaultLockInput
 */
export interface GlacierAbortVaultLockInput {
  /**
   * @schema GlacierAbortVaultLockInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierAbortVaultLockInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * Converts an object of type 'GlacierAbortVaultLockInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierAbortVaultLockInput(obj: GlacierAbortVaultLockInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierAddTagsToVaultInput
 */
export interface GlacierAddTagsToVaultInput {
  /**
   * @schema GlacierAddTagsToVaultInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierAddTagsToVaultInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierAddTagsToVaultInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlacierAddTagsToVaultInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierAddTagsToVaultInput(obj: GlacierAddTagsToVaultInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierCompleteMultipartUploadInput
 */
export interface GlacierCompleteMultipartUploadInput {
  /**
   * @schema GlacierCompleteMultipartUploadInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierCompleteMultipartUploadInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierCompleteMultipartUploadInput#uploadId
   */
  readonly uploadId: string;

  /**
   * @schema GlacierCompleteMultipartUploadInput#archiveSize
   */
  readonly archiveSize?: string;

  /**
   * @schema GlacierCompleteMultipartUploadInput#checksum
   */
  readonly checksum?: string;

}

/**
 * Converts an object of type 'GlacierCompleteMultipartUploadInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierCompleteMultipartUploadInput(obj: GlacierCompleteMultipartUploadInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
    'uploadId': obj.uploadId,
    'archiveSize': obj.archiveSize,
    'checksum': obj.checksum,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierArchiveCreationOutput
 */
export interface GlacierArchiveCreationOutput {
  /**
   * @schema GlacierArchiveCreationOutput#location
   */
  readonly location?: string;

  /**
   * @schema GlacierArchiveCreationOutput#checksum
   */
  readonly checksum?: string;

  /**
   * @schema GlacierArchiveCreationOutput#archiveId
   */
  readonly archiveId?: string;

}

/**
 * Converts an object of type 'GlacierArchiveCreationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierArchiveCreationOutput(obj: GlacierArchiveCreationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'location': obj.location,
    'checksum': obj.checksum,
    'archiveId': obj.archiveId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierCompleteVaultLockInput
 */
export interface GlacierCompleteVaultLockInput {
  /**
   * @schema GlacierCompleteVaultLockInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierCompleteVaultLockInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierCompleteVaultLockInput#lockId
   */
  readonly lockId: string;

}

/**
 * Converts an object of type 'GlacierCompleteVaultLockInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierCompleteVaultLockInput(obj: GlacierCompleteVaultLockInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
    'lockId': obj.lockId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierCreateVaultInput
 */
export interface GlacierCreateVaultInput {
  /**
   * @schema GlacierCreateVaultInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierCreateVaultInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * Converts an object of type 'GlacierCreateVaultInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierCreateVaultInput(obj: GlacierCreateVaultInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierCreateVaultOutput
 */
export interface GlacierCreateVaultOutput {
  /**
   * @schema GlacierCreateVaultOutput#location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'GlacierCreateVaultOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierCreateVaultOutput(obj: GlacierCreateVaultOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierDeleteArchiveInput
 */
export interface GlacierDeleteArchiveInput {
  /**
   * @schema GlacierDeleteArchiveInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierDeleteArchiveInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierDeleteArchiveInput#archiveId
   */
  readonly archiveId: string;

}

/**
 * Converts an object of type 'GlacierDeleteArchiveInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierDeleteArchiveInput(obj: GlacierDeleteArchiveInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
    'archiveId': obj.archiveId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierDeleteVaultInput
 */
export interface GlacierDeleteVaultInput {
  /**
   * @schema GlacierDeleteVaultInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierDeleteVaultInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * Converts an object of type 'GlacierDeleteVaultInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierDeleteVaultInput(obj: GlacierDeleteVaultInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierDeleteVaultAccessPolicyInput
 */
export interface GlacierDeleteVaultAccessPolicyInput {
  /**
   * @schema GlacierDeleteVaultAccessPolicyInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierDeleteVaultAccessPolicyInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * Converts an object of type 'GlacierDeleteVaultAccessPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierDeleteVaultAccessPolicyInput(obj: GlacierDeleteVaultAccessPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierDeleteVaultNotificationsInput
 */
export interface GlacierDeleteVaultNotificationsInput {
  /**
   * @schema GlacierDeleteVaultNotificationsInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierDeleteVaultNotificationsInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * Converts an object of type 'GlacierDeleteVaultNotificationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierDeleteVaultNotificationsInput(obj: GlacierDeleteVaultNotificationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierDescribeJobInput
 */
export interface GlacierDescribeJobInput {
  /**
   * @schema GlacierDescribeJobInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierDescribeJobInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierDescribeJobInput#jobId
   */
  readonly jobId: string;

}

/**
 * Converts an object of type 'GlacierDescribeJobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierDescribeJobInput(obj: GlacierDescribeJobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
    'jobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierGlacierJobDescription
 */
export interface GlacierGlacierJobDescription {
  /**
   * @schema GlacierGlacierJobDescription#JobId
   */
  readonly jobId?: string;

  /**
   * @schema GlacierGlacierJobDescription#JobDescription
   */
  readonly jobDescription?: string;

  /**
   * @schema GlacierGlacierJobDescription#Action
   */
  readonly action?: string;

  /**
   * @schema GlacierGlacierJobDescription#ArchiveId
   */
  readonly archiveId?: string;

  /**
   * @schema GlacierGlacierJobDescription#VaultARN
   */
  readonly vaultArn?: string;

  /**
   * @schema GlacierGlacierJobDescription#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema GlacierGlacierJobDescription#Completed
   */
  readonly completed?: boolean;

  /**
   * @schema GlacierGlacierJobDescription#StatusCode
   */
  readonly statusCode?: string;

  /**
   * @schema GlacierGlacierJobDescription#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema GlacierGlacierJobDescription#ArchiveSizeInBytes
   */
  readonly archiveSizeInBytes?: number;

  /**
   * @schema GlacierGlacierJobDescription#InventorySizeInBytes
   */
  readonly inventorySizeInBytes?: number;

  /**
   * @schema GlacierGlacierJobDescription#SNSTopic
   */
  readonly snsTopic?: string;

  /**
   * @schema GlacierGlacierJobDescription#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema GlacierGlacierJobDescription#SHA256TreeHash
   */
  readonly sha256TreeHash?: string;

  /**
   * @schema GlacierGlacierJobDescription#ArchiveSHA256TreeHash
   */
  readonly archiveSha256TreeHash?: string;

  /**
   * @schema GlacierGlacierJobDescription#RetrievalByteRange
   */
  readonly retrievalByteRange?: string;

  /**
   * @schema GlacierGlacierJobDescription#Tier
   */
  readonly tier?: string;

  /**
   * @schema GlacierGlacierJobDescription#InventoryRetrievalParameters
   */
  readonly inventoryRetrievalParameters?: GlacierInventoryRetrievalJobDescription;

  /**
   * @schema GlacierGlacierJobDescription#JobOutputPath
   */
  readonly jobOutputPath?: string;

  /**
   * @schema GlacierGlacierJobDescription#SelectParameters
   */
  readonly selectParameters?: GlacierSelectParameters;

  /**
   * @schema GlacierGlacierJobDescription#OutputLocation
   */
  readonly outputLocation?: GlacierOutputLocation;

}

/**
 * Converts an object of type 'GlacierGlacierJobDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierGlacierJobDescription(obj: GlacierGlacierJobDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobDescription': obj.jobDescription,
    'Action': obj.action,
    'ArchiveId': obj.archiveId,
    'VaultARN': obj.vaultArn,
    'CreationDate': obj.creationDate,
    'Completed': obj.completed,
    'StatusCode': obj.statusCode,
    'StatusMessage': obj.statusMessage,
    'ArchiveSizeInBytes': obj.archiveSizeInBytes,
    'InventorySizeInBytes': obj.inventorySizeInBytes,
    'SNSTopic': obj.snsTopic,
    'CompletionDate': obj.completionDate,
    'SHA256TreeHash': obj.sha256TreeHash,
    'ArchiveSHA256TreeHash': obj.archiveSha256TreeHash,
    'RetrievalByteRange': obj.retrievalByteRange,
    'Tier': obj.tier,
    'InventoryRetrievalParameters': toJson_GlacierInventoryRetrievalJobDescription(obj.inventoryRetrievalParameters),
    'JobOutputPath': obj.jobOutputPath,
    'SelectParameters': toJson_GlacierSelectParameters(obj.selectParameters),
    'OutputLocation': toJson_GlacierOutputLocation(obj.outputLocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierDescribeVaultInput
 */
export interface GlacierDescribeVaultInput {
  /**
   * @schema GlacierDescribeVaultInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierDescribeVaultInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * Converts an object of type 'GlacierDescribeVaultInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierDescribeVaultInput(obj: GlacierDescribeVaultInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierDescribeVaultOutput
 */
export interface GlacierDescribeVaultOutput {
  /**
   * @schema GlacierDescribeVaultOutput#VaultARN
   */
  readonly vaultArn?: string;

  /**
   * @schema GlacierDescribeVaultOutput#VaultName
   */
  readonly vaultName?: string;

  /**
   * @schema GlacierDescribeVaultOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema GlacierDescribeVaultOutput#LastInventoryDate
   */
  readonly lastInventoryDate?: string;

  /**
   * @schema GlacierDescribeVaultOutput#NumberOfArchives
   */
  readonly numberOfArchives?: number;

  /**
   * @schema GlacierDescribeVaultOutput#SizeInBytes
   */
  readonly sizeInBytes?: number;

}

/**
 * Converts an object of type 'GlacierDescribeVaultOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierDescribeVaultOutput(obj: GlacierDescribeVaultOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VaultARN': obj.vaultArn,
    'VaultName': obj.vaultName,
    'CreationDate': obj.creationDate,
    'LastInventoryDate': obj.lastInventoryDate,
    'NumberOfArchives': obj.numberOfArchives,
    'SizeInBytes': obj.sizeInBytes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierGetDataRetrievalPolicyInput
 */
export interface GlacierGetDataRetrievalPolicyInput {
  /**
   * @schema GlacierGetDataRetrievalPolicyInput#accountId
   */
  readonly accountId: string;

}

/**
 * Converts an object of type 'GlacierGetDataRetrievalPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierGetDataRetrievalPolicyInput(obj: GlacierGetDataRetrievalPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierGetDataRetrievalPolicyOutput
 */
export interface GlacierGetDataRetrievalPolicyOutput {
  /**
   * @schema GlacierGetDataRetrievalPolicyOutput#Policy
   */
  readonly policy?: GlacierDataRetrievalPolicy;

}

/**
 * Converts an object of type 'GlacierGetDataRetrievalPolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierGetDataRetrievalPolicyOutput(obj: GlacierGetDataRetrievalPolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': toJson_GlacierDataRetrievalPolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierGetJobOutputInput
 */
export interface GlacierGetJobOutputInput {
  /**
   * @schema GlacierGetJobOutputInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierGetJobOutputInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierGetJobOutputInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema GlacierGetJobOutputInput#range
   */
  readonly range?: string;

}

/**
 * Converts an object of type 'GlacierGetJobOutputInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierGetJobOutputInput(obj: GlacierGetJobOutputInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
    'jobId': obj.jobId,
    'range': obj.range,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierGetJobOutputOutput
 */
export interface GlacierGetJobOutputOutput {
  /**
   * @schema GlacierGetJobOutputOutput#body
   */
  readonly body?: any;

  /**
   * @schema GlacierGetJobOutputOutput#checksum
   */
  readonly checksum?: string;

  /**
   * @schema GlacierGetJobOutputOutput#status
   */
  readonly status?: number;

  /**
   * @schema GlacierGetJobOutputOutput#contentRange
   */
  readonly contentRange?: string;

  /**
   * @schema GlacierGetJobOutputOutput#acceptRanges
   */
  readonly acceptRanges?: string;

  /**
   * @schema GlacierGetJobOutputOutput#contentType
   */
  readonly contentType?: string;

  /**
   * @schema GlacierGetJobOutputOutput#archiveDescription
   */
  readonly archiveDescription?: string;

}

/**
 * Converts an object of type 'GlacierGetJobOutputOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierGetJobOutputOutput(obj: GlacierGetJobOutputOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'body': obj.body,
    'checksum': obj.checksum,
    'status': obj.status,
    'contentRange': obj.contentRange,
    'acceptRanges': obj.acceptRanges,
    'contentType': obj.contentType,
    'archiveDescription': obj.archiveDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierGetVaultAccessPolicyInput
 */
export interface GlacierGetVaultAccessPolicyInput {
  /**
   * @schema GlacierGetVaultAccessPolicyInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierGetVaultAccessPolicyInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * Converts an object of type 'GlacierGetVaultAccessPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierGetVaultAccessPolicyInput(obj: GlacierGetVaultAccessPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierGetVaultAccessPolicyOutput
 */
export interface GlacierGetVaultAccessPolicyOutput {
  /**
   * @schema GlacierGetVaultAccessPolicyOutput#policy
   */
  readonly policy?: GlacierVaultAccessPolicy;

}

/**
 * Converts an object of type 'GlacierGetVaultAccessPolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierGetVaultAccessPolicyOutput(obj: GlacierGetVaultAccessPolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'policy': toJson_GlacierVaultAccessPolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierGetVaultLockInput
 */
export interface GlacierGetVaultLockInput {
  /**
   * @schema GlacierGetVaultLockInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierGetVaultLockInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * Converts an object of type 'GlacierGetVaultLockInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierGetVaultLockInput(obj: GlacierGetVaultLockInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierGetVaultLockOutput
 */
export interface GlacierGetVaultLockOutput {
  /**
   * @schema GlacierGetVaultLockOutput#Policy
   */
  readonly policy?: string;

  /**
   * @schema GlacierGetVaultLockOutput#State
   */
  readonly state?: string;

  /**
   * @schema GlacierGetVaultLockOutput#ExpirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema GlacierGetVaultLockOutput#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * Converts an object of type 'GlacierGetVaultLockOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierGetVaultLockOutput(obj: GlacierGetVaultLockOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
    'State': obj.state,
    'ExpirationDate': obj.expirationDate,
    'CreationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierGetVaultNotificationsInput
 */
export interface GlacierGetVaultNotificationsInput {
  /**
   * @schema GlacierGetVaultNotificationsInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierGetVaultNotificationsInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * Converts an object of type 'GlacierGetVaultNotificationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierGetVaultNotificationsInput(obj: GlacierGetVaultNotificationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierGetVaultNotificationsOutput
 */
export interface GlacierGetVaultNotificationsOutput {
  /**
   * @schema GlacierGetVaultNotificationsOutput#vaultNotificationConfig
   */
  readonly vaultNotificationConfig?: GlacierVaultNotificationConfig;

}

/**
 * Converts an object of type 'GlacierGetVaultNotificationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierGetVaultNotificationsOutput(obj: GlacierGetVaultNotificationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'vaultNotificationConfig': toJson_GlacierVaultNotificationConfig(obj.vaultNotificationConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierInitiateJobInput
 */
export interface GlacierInitiateJobInput {
  /**
   * @schema GlacierInitiateJobInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierInitiateJobInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierInitiateJobInput#jobParameters
   */
  readonly jobParameters?: GlacierJobParameters;

}

/**
 * Converts an object of type 'GlacierInitiateJobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierInitiateJobInput(obj: GlacierInitiateJobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
    'jobParameters': toJson_GlacierJobParameters(obj.jobParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierInitiateJobOutput
 */
export interface GlacierInitiateJobOutput {
  /**
   * @schema GlacierInitiateJobOutput#location
   */
  readonly location?: string;

  /**
   * @schema GlacierInitiateJobOutput#jobId
   */
  readonly jobId?: string;

  /**
   * @schema GlacierInitiateJobOutput#jobOutputPath
   */
  readonly jobOutputPath?: string;

}

/**
 * Converts an object of type 'GlacierInitiateJobOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierInitiateJobOutput(obj: GlacierInitiateJobOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'location': obj.location,
    'jobId': obj.jobId,
    'jobOutputPath': obj.jobOutputPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierInitiateMultipartUploadInput
 */
export interface GlacierInitiateMultipartUploadInput {
  /**
   * @schema GlacierInitiateMultipartUploadInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierInitiateMultipartUploadInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierInitiateMultipartUploadInput#archiveDescription
   */
  readonly archiveDescription?: string;

  /**
   * @schema GlacierInitiateMultipartUploadInput#partSize
   */
  readonly partSize?: string;

}

/**
 * Converts an object of type 'GlacierInitiateMultipartUploadInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierInitiateMultipartUploadInput(obj: GlacierInitiateMultipartUploadInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
    'archiveDescription': obj.archiveDescription,
    'partSize': obj.partSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierInitiateMultipartUploadOutput
 */
export interface GlacierInitiateMultipartUploadOutput {
  /**
   * @schema GlacierInitiateMultipartUploadOutput#location
   */
  readonly location?: string;

  /**
   * @schema GlacierInitiateMultipartUploadOutput#uploadId
   */
  readonly uploadId?: string;

}

/**
 * Converts an object of type 'GlacierInitiateMultipartUploadOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierInitiateMultipartUploadOutput(obj: GlacierInitiateMultipartUploadOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'location': obj.location,
    'uploadId': obj.uploadId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierInitiateVaultLockInput
 */
export interface GlacierInitiateVaultLockInput {
  /**
   * @schema GlacierInitiateVaultLockInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierInitiateVaultLockInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierInitiateVaultLockInput#policy
   */
  readonly policy?: GlacierVaultLockPolicy;

}

/**
 * Converts an object of type 'GlacierInitiateVaultLockInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierInitiateVaultLockInput(obj: GlacierInitiateVaultLockInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
    'policy': toJson_GlacierVaultLockPolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierInitiateVaultLockOutput
 */
export interface GlacierInitiateVaultLockOutput {
  /**
   * @schema GlacierInitiateVaultLockOutput#lockId
   */
  readonly lockId?: string;

}

/**
 * Converts an object of type 'GlacierInitiateVaultLockOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierInitiateVaultLockOutput(obj: GlacierInitiateVaultLockOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'lockId': obj.lockId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierListJobsInput
 */
export interface GlacierListJobsInput {
  /**
   * @schema GlacierListJobsInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierListJobsInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierListJobsInput#limit
   */
  readonly limit?: string;

  /**
   * @schema GlacierListJobsInput#marker
   */
  readonly marker?: string;

  /**
   * @schema GlacierListJobsInput#statuscode
   */
  readonly statuscode?: string;

  /**
   * @schema GlacierListJobsInput#completed
   */
  readonly completed?: string;

}

/**
 * Converts an object of type 'GlacierListJobsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierListJobsInput(obj: GlacierListJobsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
    'limit': obj.limit,
    'marker': obj.marker,
    'statuscode': obj.statuscode,
    'completed': obj.completed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierListJobsOutput
 */
export interface GlacierListJobsOutput {
  /**
   * @schema GlacierListJobsOutput#JobList
   */
  readonly jobList?: GlacierGlacierJobDescription[];

  /**
   * @schema GlacierListJobsOutput#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'GlacierListJobsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierListJobsOutput(obj: GlacierListJobsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobList': obj.jobList?.map(y => toJson_GlacierGlacierJobDescription(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierListMultipartUploadsInput
 */
export interface GlacierListMultipartUploadsInput {
  /**
   * @schema GlacierListMultipartUploadsInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierListMultipartUploadsInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierListMultipartUploadsInput#marker
   */
  readonly marker?: string;

  /**
   * @schema GlacierListMultipartUploadsInput#limit
   */
  readonly limit?: string;

}

/**
 * Converts an object of type 'GlacierListMultipartUploadsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierListMultipartUploadsInput(obj: GlacierListMultipartUploadsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
    'marker': obj.marker,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierListMultipartUploadsOutput
 */
export interface GlacierListMultipartUploadsOutput {
  /**
   * @schema GlacierListMultipartUploadsOutput#UploadsList
   */
  readonly uploadsList?: GlacierUploadListElement[];

  /**
   * @schema GlacierListMultipartUploadsOutput#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'GlacierListMultipartUploadsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierListMultipartUploadsOutput(obj: GlacierListMultipartUploadsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UploadsList': obj.uploadsList?.map(y => toJson_GlacierUploadListElement(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierListPartsInput
 */
export interface GlacierListPartsInput {
  /**
   * @schema GlacierListPartsInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierListPartsInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierListPartsInput#uploadId
   */
  readonly uploadId: string;

  /**
   * @schema GlacierListPartsInput#marker
   */
  readonly marker?: string;

  /**
   * @schema GlacierListPartsInput#limit
   */
  readonly limit?: string;

}

/**
 * Converts an object of type 'GlacierListPartsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierListPartsInput(obj: GlacierListPartsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
    'uploadId': obj.uploadId,
    'marker': obj.marker,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierListPartsOutput
 */
export interface GlacierListPartsOutput {
  /**
   * @schema GlacierListPartsOutput#MultipartUploadId
   */
  readonly multipartUploadId?: string;

  /**
   * @schema GlacierListPartsOutput#VaultARN
   */
  readonly vaultArn?: string;

  /**
   * @schema GlacierListPartsOutput#ArchiveDescription
   */
  readonly archiveDescription?: string;

  /**
   * @schema GlacierListPartsOutput#PartSizeInBytes
   */
  readonly partSizeInBytes?: number;

  /**
   * @schema GlacierListPartsOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema GlacierListPartsOutput#Parts
   */
  readonly parts?: GlacierPartListElement[];

  /**
   * @schema GlacierListPartsOutput#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'GlacierListPartsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierListPartsOutput(obj: GlacierListPartsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MultipartUploadId': obj.multipartUploadId,
    'VaultARN': obj.vaultArn,
    'ArchiveDescription': obj.archiveDescription,
    'PartSizeInBytes': obj.partSizeInBytes,
    'CreationDate': obj.creationDate,
    'Parts': obj.parts?.map(y => toJson_GlacierPartListElement(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierListProvisionedCapacityInput
 */
export interface GlacierListProvisionedCapacityInput {
  /**
   * @schema GlacierListProvisionedCapacityInput#accountId
   */
  readonly accountId: string;

}

/**
 * Converts an object of type 'GlacierListProvisionedCapacityInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierListProvisionedCapacityInput(obj: GlacierListProvisionedCapacityInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierListProvisionedCapacityOutput
 */
export interface GlacierListProvisionedCapacityOutput {
  /**
   * @schema GlacierListProvisionedCapacityOutput#ProvisionedCapacityList
   */
  readonly provisionedCapacityList?: GlacierProvisionedCapacityDescription[];

}

/**
 * Converts an object of type 'GlacierListProvisionedCapacityOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierListProvisionedCapacityOutput(obj: GlacierListProvisionedCapacityOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProvisionedCapacityList': obj.provisionedCapacityList?.map(y => toJson_GlacierProvisionedCapacityDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierListTagsForVaultInput
 */
export interface GlacierListTagsForVaultInput {
  /**
   * @schema GlacierListTagsForVaultInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierListTagsForVaultInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * Converts an object of type 'GlacierListTagsForVaultInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierListTagsForVaultInput(obj: GlacierListTagsForVaultInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierListTagsForVaultOutput
 */
export interface GlacierListTagsForVaultOutput {
  /**
   * @schema GlacierListTagsForVaultOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'GlacierListTagsForVaultOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierListTagsForVaultOutput(obj: GlacierListTagsForVaultOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierListVaultsInput
 */
export interface GlacierListVaultsInput {
  /**
   * @schema GlacierListVaultsInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierListVaultsInput#marker
   */
  readonly marker?: string;

  /**
   * @schema GlacierListVaultsInput#limit
   */
  readonly limit?: string;

}

/**
 * Converts an object of type 'GlacierListVaultsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierListVaultsInput(obj: GlacierListVaultsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'marker': obj.marker,
    'limit': obj.limit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierListVaultsOutput
 */
export interface GlacierListVaultsOutput {
  /**
   * @schema GlacierListVaultsOutput#VaultList
   */
  readonly vaultList?: GlacierDescribeVaultOutput[];

  /**
   * @schema GlacierListVaultsOutput#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'GlacierListVaultsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierListVaultsOutput(obj: GlacierListVaultsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VaultList': obj.vaultList?.map(y => toJson_GlacierDescribeVaultOutput(y)),
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierPurchaseProvisionedCapacityInput
 */
export interface GlacierPurchaseProvisionedCapacityInput {
  /**
   * @schema GlacierPurchaseProvisionedCapacityInput#accountId
   */
  readonly accountId: string;

}

/**
 * Converts an object of type 'GlacierPurchaseProvisionedCapacityInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierPurchaseProvisionedCapacityInput(obj: GlacierPurchaseProvisionedCapacityInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierPurchaseProvisionedCapacityOutput
 */
export interface GlacierPurchaseProvisionedCapacityOutput {
  /**
   * @schema GlacierPurchaseProvisionedCapacityOutput#capacityId
   */
  readonly capacityId?: string;

}

/**
 * Converts an object of type 'GlacierPurchaseProvisionedCapacityOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierPurchaseProvisionedCapacityOutput(obj: GlacierPurchaseProvisionedCapacityOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'capacityId': obj.capacityId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierRemoveTagsFromVaultInput
 */
export interface GlacierRemoveTagsFromVaultInput {
  /**
   * @schema GlacierRemoveTagsFromVaultInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierRemoveTagsFromVaultInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierRemoveTagsFromVaultInput#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'GlacierRemoveTagsFromVaultInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierRemoveTagsFromVaultInput(obj: GlacierRemoveTagsFromVaultInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierSetDataRetrievalPolicyInput
 */
export interface GlacierSetDataRetrievalPolicyInput {
  /**
   * @schema GlacierSetDataRetrievalPolicyInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierSetDataRetrievalPolicyInput#Policy
   */
  readonly policy?: GlacierDataRetrievalPolicy;

}

/**
 * Converts an object of type 'GlacierSetDataRetrievalPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierSetDataRetrievalPolicyInput(obj: GlacierSetDataRetrievalPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'Policy': toJson_GlacierDataRetrievalPolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierSetVaultAccessPolicyInput
 */
export interface GlacierSetVaultAccessPolicyInput {
  /**
   * @schema GlacierSetVaultAccessPolicyInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierSetVaultAccessPolicyInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierSetVaultAccessPolicyInput#policy
   */
  readonly policy?: GlacierVaultAccessPolicy;

}

/**
 * Converts an object of type 'GlacierSetVaultAccessPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierSetVaultAccessPolicyInput(obj: GlacierSetVaultAccessPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
    'policy': toJson_GlacierVaultAccessPolicy(obj.policy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierSetVaultNotificationsInput
 */
export interface GlacierSetVaultNotificationsInput {
  /**
   * @schema GlacierSetVaultNotificationsInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierSetVaultNotificationsInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierSetVaultNotificationsInput#vaultNotificationConfig
   */
  readonly vaultNotificationConfig?: GlacierVaultNotificationConfig;

}

/**
 * Converts an object of type 'GlacierSetVaultNotificationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierSetVaultNotificationsInput(obj: GlacierSetVaultNotificationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
    'vaultNotificationConfig': toJson_GlacierVaultNotificationConfig(obj.vaultNotificationConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierUploadArchiveInput
 */
export interface GlacierUploadArchiveInput {
  /**
   * @schema GlacierUploadArchiveInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierUploadArchiveInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierUploadArchiveInput#archiveDescription
   */
  readonly archiveDescription?: string;

  /**
   * @schema GlacierUploadArchiveInput#checksum
   */
  readonly checksum?: string;

  /**
   * @schema GlacierUploadArchiveInput#body
   */
  readonly body?: any;

}

/**
 * Converts an object of type 'GlacierUploadArchiveInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierUploadArchiveInput(obj: GlacierUploadArchiveInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'vaultName': obj.vaultName,
    'accountId': obj.accountId,
    'archiveDescription': obj.archiveDescription,
    'checksum': obj.checksum,
    'body': obj.body,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierUploadMultipartPartInput
 */
export interface GlacierUploadMultipartPartInput {
  /**
   * @schema GlacierUploadMultipartPartInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GlacierUploadMultipartPartInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GlacierUploadMultipartPartInput#uploadId
   */
  readonly uploadId: string;

  /**
   * @schema GlacierUploadMultipartPartInput#checksum
   */
  readonly checksum?: string;

  /**
   * @schema GlacierUploadMultipartPartInput#range
   */
  readonly range?: string;

  /**
   * @schema GlacierUploadMultipartPartInput#body
   */
  readonly body?: any;

}

/**
 * Converts an object of type 'GlacierUploadMultipartPartInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierUploadMultipartPartInput(obj: GlacierUploadMultipartPartInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accountId': obj.accountId,
    'vaultName': obj.vaultName,
    'uploadId': obj.uploadId,
    'checksum': obj.checksum,
    'range': obj.range,
    'body': obj.body,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierUploadMultipartPartOutput
 */
export interface GlacierUploadMultipartPartOutput {
  /**
   * @schema GlacierUploadMultipartPartOutput#checksum
   */
  readonly checksum?: string;

}

/**
 * Converts an object of type 'GlacierUploadMultipartPartOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierUploadMultipartPartOutput(obj: GlacierUploadMultipartPartOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'checksum': obj.checksum,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierInventoryRetrievalJobDescription
 */
export interface GlacierInventoryRetrievalJobDescription {
  /**
   * @schema GlacierInventoryRetrievalJobDescription#Format
   */
  readonly format?: string;

  /**
   * @schema GlacierInventoryRetrievalJobDescription#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema GlacierInventoryRetrievalJobDescription#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema GlacierInventoryRetrievalJobDescription#Limit
   */
  readonly limit?: string;

  /**
   * @schema GlacierInventoryRetrievalJobDescription#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'GlacierInventoryRetrievalJobDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierInventoryRetrievalJobDescription(obj: GlacierInventoryRetrievalJobDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Format': obj.format,
    'StartDate': obj.startDate,
    'EndDate': obj.endDate,
    'Limit': obj.limit,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierSelectParameters
 */
export interface GlacierSelectParameters {
  /**
   * @schema GlacierSelectParameters#InputSerialization
   */
  readonly inputSerialization?: GlacierInputSerialization;

  /**
   * @schema GlacierSelectParameters#ExpressionType
   */
  readonly expressionType?: string;

  /**
   * @schema GlacierSelectParameters#Expression
   */
  readonly expression?: string;

  /**
   * @schema GlacierSelectParameters#OutputSerialization
   */
  readonly outputSerialization?: GlacierOutputSerialization;

}

/**
 * Converts an object of type 'GlacierSelectParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierSelectParameters(obj: GlacierSelectParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputSerialization': toJson_GlacierInputSerialization(obj.inputSerialization),
    'ExpressionType': obj.expressionType,
    'Expression': obj.expression,
    'OutputSerialization': toJson_GlacierOutputSerialization(obj.outputSerialization),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierOutputLocation
 */
export interface GlacierOutputLocation {
  /**
   * @schema GlacierOutputLocation#S3
   */
  readonly s3?: GlacierS3Location;

}

/**
 * Converts an object of type 'GlacierOutputLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierOutputLocation(obj: GlacierOutputLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3': toJson_GlacierS3Location(obj.s3),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierDataRetrievalPolicy
 */
export interface GlacierDataRetrievalPolicy {
  /**
   * @schema GlacierDataRetrievalPolicy#Rules
   */
  readonly rules?: GlacierDataRetrievalRule[];

}

/**
 * Converts an object of type 'GlacierDataRetrievalPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierDataRetrievalPolicy(obj: GlacierDataRetrievalPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rules': obj.rules?.map(y => toJson_GlacierDataRetrievalRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierVaultAccessPolicy
 */
export interface GlacierVaultAccessPolicy {
  /**
   * @schema GlacierVaultAccessPolicy#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'GlacierVaultAccessPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierVaultAccessPolicy(obj: GlacierVaultAccessPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierVaultNotificationConfig
 */
export interface GlacierVaultNotificationConfig {
  /**
   * @schema GlacierVaultNotificationConfig#SNSTopic
   */
  readonly snsTopic?: string;

  /**
   * @schema GlacierVaultNotificationConfig#Events
   */
  readonly events?: string[];

}

/**
 * Converts an object of type 'GlacierVaultNotificationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierVaultNotificationConfig(obj: GlacierVaultNotificationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SNSTopic': obj.snsTopic,
    'Events': obj.events?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierJobParameters
 */
export interface GlacierJobParameters {
  /**
   * @schema GlacierJobParameters#Format
   */
  readonly format?: string;

  /**
   * @schema GlacierJobParameters#Type
   */
  readonly type?: string;

  /**
   * @schema GlacierJobParameters#ArchiveId
   */
  readonly archiveId?: string;

  /**
   * @schema GlacierJobParameters#Description
   */
  readonly description?: string;

  /**
   * @schema GlacierJobParameters#SNSTopic
   */
  readonly snsTopic?: string;

  /**
   * @schema GlacierJobParameters#RetrievalByteRange
   */
  readonly retrievalByteRange?: string;

  /**
   * @schema GlacierJobParameters#Tier
   */
  readonly tier?: string;

  /**
   * @schema GlacierJobParameters#InventoryRetrievalParameters
   */
  readonly inventoryRetrievalParameters?: GlacierInventoryRetrievalJobInput;

  /**
   * @schema GlacierJobParameters#SelectParameters
   */
  readonly selectParameters?: GlacierSelectParameters;

  /**
   * @schema GlacierJobParameters#OutputLocation
   */
  readonly outputLocation?: GlacierOutputLocation;

}

/**
 * Converts an object of type 'GlacierJobParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierJobParameters(obj: GlacierJobParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Format': obj.format,
    'Type': obj.type,
    'ArchiveId': obj.archiveId,
    'Description': obj.description,
    'SNSTopic': obj.snsTopic,
    'RetrievalByteRange': obj.retrievalByteRange,
    'Tier': obj.tier,
    'InventoryRetrievalParameters': toJson_GlacierInventoryRetrievalJobInput(obj.inventoryRetrievalParameters),
    'SelectParameters': toJson_GlacierSelectParameters(obj.selectParameters),
    'OutputLocation': toJson_GlacierOutputLocation(obj.outputLocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierVaultLockPolicy
 */
export interface GlacierVaultLockPolicy {
  /**
   * @schema GlacierVaultLockPolicy#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'GlacierVaultLockPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierVaultLockPolicy(obj: GlacierVaultLockPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierUploadListElement
 */
export interface GlacierUploadListElement {
  /**
   * @schema GlacierUploadListElement#MultipartUploadId
   */
  readonly multipartUploadId?: string;

  /**
   * @schema GlacierUploadListElement#VaultARN
   */
  readonly vaultArn?: string;

  /**
   * @schema GlacierUploadListElement#ArchiveDescription
   */
  readonly archiveDescription?: string;

  /**
   * @schema GlacierUploadListElement#PartSizeInBytes
   */
  readonly partSizeInBytes?: number;

  /**
   * @schema GlacierUploadListElement#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * Converts an object of type 'GlacierUploadListElement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierUploadListElement(obj: GlacierUploadListElement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MultipartUploadId': obj.multipartUploadId,
    'VaultARN': obj.vaultArn,
    'ArchiveDescription': obj.archiveDescription,
    'PartSizeInBytes': obj.partSizeInBytes,
    'CreationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierPartListElement
 */
export interface GlacierPartListElement {
  /**
   * @schema GlacierPartListElement#RangeInBytes
   */
  readonly rangeInBytes?: string;

  /**
   * @schema GlacierPartListElement#SHA256TreeHash
   */
  readonly sha256TreeHash?: string;

}

/**
 * Converts an object of type 'GlacierPartListElement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierPartListElement(obj: GlacierPartListElement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RangeInBytes': obj.rangeInBytes,
    'SHA256TreeHash': obj.sha256TreeHash,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierProvisionedCapacityDescription
 */
export interface GlacierProvisionedCapacityDescription {
  /**
   * @schema GlacierProvisionedCapacityDescription#CapacityId
   */
  readonly capacityId?: string;

  /**
   * @schema GlacierProvisionedCapacityDescription#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema GlacierProvisionedCapacityDescription#ExpirationDate
   */
  readonly expirationDate?: string;

}

/**
 * Converts an object of type 'GlacierProvisionedCapacityDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierProvisionedCapacityDescription(obj: GlacierProvisionedCapacityDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CapacityId': obj.capacityId,
    'StartDate': obj.startDate,
    'ExpirationDate': obj.expirationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierInputSerialization
 */
export interface GlacierInputSerialization {
  /**
   * @schema GlacierInputSerialization#csv
   */
  readonly csv?: GlacierCsvInput;

}

/**
 * Converts an object of type 'GlacierInputSerialization' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierInputSerialization(obj: GlacierInputSerialization | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'csv': toJson_GlacierCsvInput(obj.csv),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierOutputSerialization
 */
export interface GlacierOutputSerialization {
  /**
   * @schema GlacierOutputSerialization#csv
   */
  readonly csv?: GlacierCsvOutput;

}

/**
 * Converts an object of type 'GlacierOutputSerialization' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierOutputSerialization(obj: GlacierOutputSerialization | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'csv': toJson_GlacierCsvOutput(obj.csv),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierS3Location
 */
export interface GlacierS3Location {
  /**
   * @schema GlacierS3Location#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema GlacierS3Location#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema GlacierS3Location#Encryption
   */
  readonly encryption?: GlacierEncryption;

  /**
   * @schema GlacierS3Location#CannedACL
   */
  readonly cannedAcl?: string;

  /**
   * @schema GlacierS3Location#AccessControlList
   */
  readonly accessControlList?: GlacierGrant[];

  /**
   * @schema GlacierS3Location#Tagging
   */
  readonly tagging?: { [key: string]: string };

  /**
   * @schema GlacierS3Location#UserMetadata
   */
  readonly userMetadata?: { [key: string]: string };

  /**
   * @schema GlacierS3Location#StorageClass
   */
  readonly storageClass?: string;

}

/**
 * Converts an object of type 'GlacierS3Location' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierS3Location(obj: GlacierS3Location | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketName': obj.bucketName,
    'Prefix': obj.prefix,
    'Encryption': toJson_GlacierEncryption(obj.encryption),
    'CannedACL': obj.cannedAcl,
    'AccessControlList': obj.accessControlList?.map(y => toJson_GlacierGrant(y)),
    'Tagging': ((obj.tagging) === undefined) ? undefined : (Object.entries(obj.tagging).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'UserMetadata': ((obj.userMetadata) === undefined) ? undefined : (Object.entries(obj.userMetadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'StorageClass': obj.storageClass,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierDataRetrievalRule
 */
export interface GlacierDataRetrievalRule {
  /**
   * @schema GlacierDataRetrievalRule#Strategy
   */
  readonly strategy?: string;

  /**
   * @schema GlacierDataRetrievalRule#BytesPerHour
   */
  readonly bytesPerHour?: number;

}

/**
 * Converts an object of type 'GlacierDataRetrievalRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierDataRetrievalRule(obj: GlacierDataRetrievalRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Strategy': obj.strategy,
    'BytesPerHour': obj.bytesPerHour,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierInventoryRetrievalJobInput
 */
export interface GlacierInventoryRetrievalJobInput {
  /**
   * @schema GlacierInventoryRetrievalJobInput#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema GlacierInventoryRetrievalJobInput#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema GlacierInventoryRetrievalJobInput#Limit
   */
  readonly limit?: string;

  /**
   * @schema GlacierInventoryRetrievalJobInput#Marker
   */
  readonly marker?: string;

}

/**
 * Converts an object of type 'GlacierInventoryRetrievalJobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierInventoryRetrievalJobInput(obj: GlacierInventoryRetrievalJobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartDate': obj.startDate,
    'EndDate': obj.endDate,
    'Limit': obj.limit,
    'Marker': obj.marker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierCsvInput
 */
export interface GlacierCsvInput {
  /**
   * @schema GlacierCsvInput#FileHeaderInfo
   */
  readonly fileHeaderInfo?: string;

  /**
   * @schema GlacierCsvInput#Comments
   */
  readonly comments?: string;

  /**
   * @schema GlacierCsvInput#QuoteEscapeCharacter
   */
  readonly quoteEscapeCharacter?: string;

  /**
   * @schema GlacierCsvInput#RecordDelimiter
   */
  readonly recordDelimiter?: string;

  /**
   * @schema GlacierCsvInput#FieldDelimiter
   */
  readonly fieldDelimiter?: string;

  /**
   * @schema GlacierCsvInput#QuoteCharacter
   */
  readonly quoteCharacter?: string;

}

/**
 * Converts an object of type 'GlacierCsvInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierCsvInput(obj: GlacierCsvInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileHeaderInfo': obj.fileHeaderInfo,
    'Comments': obj.comments,
    'QuoteEscapeCharacter': obj.quoteEscapeCharacter,
    'RecordDelimiter': obj.recordDelimiter,
    'FieldDelimiter': obj.fieldDelimiter,
    'QuoteCharacter': obj.quoteCharacter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierCsvOutput
 */
export interface GlacierCsvOutput {
  /**
   * @schema GlacierCsvOutput#QuoteFields
   */
  readonly quoteFields?: string;

  /**
   * @schema GlacierCsvOutput#QuoteEscapeCharacter
   */
  readonly quoteEscapeCharacter?: string;

  /**
   * @schema GlacierCsvOutput#RecordDelimiter
   */
  readonly recordDelimiter?: string;

  /**
   * @schema GlacierCsvOutput#FieldDelimiter
   */
  readonly fieldDelimiter?: string;

  /**
   * @schema GlacierCsvOutput#QuoteCharacter
   */
  readonly quoteCharacter?: string;

}

/**
 * Converts an object of type 'GlacierCsvOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierCsvOutput(obj: GlacierCsvOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QuoteFields': obj.quoteFields,
    'QuoteEscapeCharacter': obj.quoteEscapeCharacter,
    'RecordDelimiter': obj.recordDelimiter,
    'FieldDelimiter': obj.fieldDelimiter,
    'QuoteCharacter': obj.quoteCharacter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierEncryption
 */
export interface GlacierEncryption {
  /**
   * @schema GlacierEncryption#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema GlacierEncryption#KMSKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema GlacierEncryption#KMSContext
   */
  readonly kmsContext?: string;

}

/**
 * Converts an object of type 'GlacierEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierEncryption(obj: GlacierEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncryptionType': obj.encryptionType,
    'KMSKeyId': obj.kmsKeyId,
    'KMSContext': obj.kmsContext,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierGrant
 */
export interface GlacierGrant {
  /**
   * @schema GlacierGrant#Grantee
   */
  readonly grantee?: GlacierGrantee;

  /**
   * @schema GlacierGrant#Permission
   */
  readonly permission?: string;

}

/**
 * Converts an object of type 'GlacierGrant' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierGrant(obj: GlacierGrant | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Grantee': toJson_GlacierGrantee(obj.grantee),
    'Permission': obj.permission,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema GlacierGrantee
 */
export interface GlacierGrantee {
  /**
   * @schema GlacierGrantee#Type
   */
  readonly type?: string;

  /**
   * @schema GlacierGrantee#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema GlacierGrantee#URI
   */
  readonly uri?: string;

  /**
   * @schema GlacierGrantee#ID
   */
  readonly id?: string;

  /**
   * @schema GlacierGrantee#EmailAddress
   */
  readonly emailAddress?: string;

}

/**
 * Converts an object of type 'GlacierGrantee' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_GlacierGrantee(obj: GlacierGrantee | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'DisplayName': obj.displayName,
    'URI': obj.uri,
    'ID': obj.id,
    'EmailAddress': obj.emailAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
