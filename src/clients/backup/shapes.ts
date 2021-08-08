/**
 * @schema BackupCreateBackupPlanInput
 */
export interface BackupCreateBackupPlanInput {
  /**
   * @schema BackupCreateBackupPlanInput#BackupPlan
   */
  readonly backupPlan?: BackupBackupPlanInput;

  /**
   * @schema BackupCreateBackupPlanInput#BackupPlanTags
   */
  readonly backupPlanTags?: { [key: string]: string };

  /**
   * @schema BackupCreateBackupPlanInput#CreatorRequestId
   */
  readonly creatorRequestId?: string;

}

/**
 * Converts an object of type 'BackupCreateBackupPlanInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupCreateBackupPlanInput(obj: BackupCreateBackupPlanInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlan': toJson_BackupBackupPlanInput(obj.backupPlan),
    'BackupPlanTags': ((obj.backupPlanTags) === undefined) ? undefined : (Object.entries(obj.backupPlanTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'CreatorRequestId': obj.creatorRequestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupCreateBackupPlanOutput
 */
export interface BackupCreateBackupPlanOutput {
  /**
   * @schema BackupCreateBackupPlanOutput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupCreateBackupPlanOutput#BackupPlanArn
   */
  readonly backupPlanArn?: string;

  /**
   * @schema BackupCreateBackupPlanOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupCreateBackupPlanOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema BackupCreateBackupPlanOutput#AdvancedBackupSettings
   */
  readonly advancedBackupSettings?: BackupAdvancedBackupSetting[];

}

/**
 * Converts an object of type 'BackupCreateBackupPlanOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupCreateBackupPlanOutput(obj: BackupCreateBackupPlanOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanId': obj.backupPlanId,
    'BackupPlanArn': obj.backupPlanArn,
    'CreationDate': obj.creationDate,
    'VersionId': obj.versionId,
    'AdvancedBackupSettings': obj.advancedBackupSettings?.map(y => toJson_BackupAdvancedBackupSetting(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupCreateBackupSelectionInput
 */
export interface BackupCreateBackupSelectionInput {
  /**
   * @schema BackupCreateBackupSelectionInput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupCreateBackupSelectionInput#BackupSelection
   */
  readonly backupSelection?: BackupBackupSelection;

  /**
   * @schema BackupCreateBackupSelectionInput#CreatorRequestId
   */
  readonly creatorRequestId?: string;

}

/**
 * Converts an object of type 'BackupCreateBackupSelectionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupCreateBackupSelectionInput(obj: BackupCreateBackupSelectionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanId': obj.backupPlanId,
    'BackupSelection': toJson_BackupBackupSelection(obj.backupSelection),
    'CreatorRequestId': obj.creatorRequestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupCreateBackupSelectionOutput
 */
export interface BackupCreateBackupSelectionOutput {
  /**
   * @schema BackupCreateBackupSelectionOutput#SelectionId
   */
  readonly selectionId?: string;

  /**
   * @schema BackupCreateBackupSelectionOutput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupCreateBackupSelectionOutput#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * Converts an object of type 'BackupCreateBackupSelectionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupCreateBackupSelectionOutput(obj: BackupCreateBackupSelectionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SelectionId': obj.selectionId,
    'BackupPlanId': obj.backupPlanId,
    'CreationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupCreateBackupVaultInput
 */
export interface BackupCreateBackupVaultInput {
  /**
   * @schema BackupCreateBackupVaultInput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupCreateBackupVaultInput#BackupVaultTags
   */
  readonly backupVaultTags?: { [key: string]: string };

  /**
   * @schema BackupCreateBackupVaultInput#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema BackupCreateBackupVaultInput#CreatorRequestId
   */
  readonly creatorRequestId?: string;

}

/**
 * Converts an object of type 'BackupCreateBackupVaultInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupCreateBackupVaultInput(obj: BackupCreateBackupVaultInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
    'BackupVaultTags': ((obj.backupVaultTags) === undefined) ? undefined : (Object.entries(obj.backupVaultTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'EncryptionKeyArn': obj.encryptionKeyArn,
    'CreatorRequestId': obj.creatorRequestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupCreateBackupVaultOutput
 */
export interface BackupCreateBackupVaultOutput {
  /**
   * @schema BackupCreateBackupVaultOutput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupCreateBackupVaultOutput#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema BackupCreateBackupVaultOutput#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * Converts an object of type 'BackupCreateBackupVaultOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupCreateBackupVaultOutput(obj: BackupCreateBackupVaultOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
    'BackupVaultArn': obj.backupVaultArn,
    'CreationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDeleteBackupPlanInput
 */
export interface BackupDeleteBackupPlanInput {
  /**
   * @schema BackupDeleteBackupPlanInput#BackupPlanId
   */
  readonly backupPlanId?: string;

}

/**
 * Converts an object of type 'BackupDeleteBackupPlanInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDeleteBackupPlanInput(obj: BackupDeleteBackupPlanInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanId': obj.backupPlanId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDeleteBackupPlanOutput
 */
export interface BackupDeleteBackupPlanOutput {
  /**
   * @schema BackupDeleteBackupPlanOutput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupDeleteBackupPlanOutput#BackupPlanArn
   */
  readonly backupPlanArn?: string;

  /**
   * @schema BackupDeleteBackupPlanOutput#DeletionDate
   */
  readonly deletionDate?: string;

  /**
   * @schema BackupDeleteBackupPlanOutput#VersionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'BackupDeleteBackupPlanOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDeleteBackupPlanOutput(obj: BackupDeleteBackupPlanOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanId': obj.backupPlanId,
    'BackupPlanArn': obj.backupPlanArn,
    'DeletionDate': obj.deletionDate,
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDeleteBackupSelectionInput
 */
export interface BackupDeleteBackupSelectionInput {
  /**
   * @schema BackupDeleteBackupSelectionInput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupDeleteBackupSelectionInput#SelectionId
   */
  readonly selectionId?: string;

}

/**
 * Converts an object of type 'BackupDeleteBackupSelectionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDeleteBackupSelectionInput(obj: BackupDeleteBackupSelectionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanId': obj.backupPlanId,
    'SelectionId': obj.selectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDeleteBackupVaultInput
 */
export interface BackupDeleteBackupVaultInput {
  /**
   * @schema BackupDeleteBackupVaultInput#BackupVaultName
   */
  readonly backupVaultName?: string;

}

/**
 * Converts an object of type 'BackupDeleteBackupVaultInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDeleteBackupVaultInput(obj: BackupDeleteBackupVaultInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDeleteBackupVaultAccessPolicyInput
 */
export interface BackupDeleteBackupVaultAccessPolicyInput {
  /**
   * @schema BackupDeleteBackupVaultAccessPolicyInput#BackupVaultName
   */
  readonly backupVaultName?: string;

}

/**
 * Converts an object of type 'BackupDeleteBackupVaultAccessPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDeleteBackupVaultAccessPolicyInput(obj: BackupDeleteBackupVaultAccessPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDeleteBackupVaultNotificationsInput
 */
export interface BackupDeleteBackupVaultNotificationsInput {
  /**
   * @schema BackupDeleteBackupVaultNotificationsInput#BackupVaultName
   */
  readonly backupVaultName?: string;

}

/**
 * Converts an object of type 'BackupDeleteBackupVaultNotificationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDeleteBackupVaultNotificationsInput(obj: BackupDeleteBackupVaultNotificationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDeleteRecoveryPointInput
 */
export interface BackupDeleteRecoveryPointInput {
  /**
   * @schema BackupDeleteRecoveryPointInput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupDeleteRecoveryPointInput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

}

/**
 * Converts an object of type 'BackupDeleteRecoveryPointInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDeleteRecoveryPointInput(obj: BackupDeleteRecoveryPointInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
    'RecoveryPointArn': obj.recoveryPointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDescribeBackupJobInput
 */
export interface BackupDescribeBackupJobInput {
  /**
   * @schema BackupDescribeBackupJobInput#BackupJobId
   */
  readonly backupJobId?: string;

}

/**
 * Converts an object of type 'BackupDescribeBackupJobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDescribeBackupJobInput(obj: BackupDescribeBackupJobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupJobId': obj.backupJobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDescribeBackupJobOutput
 */
export interface BackupDescribeBackupJobOutput {
  /**
   * @schema BackupDescribeBackupJobOutput#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BackupDescribeBackupJobOutput#BackupJobId
   */
  readonly backupJobId?: string;

  /**
   * @schema BackupDescribeBackupJobOutput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupDescribeBackupJobOutput#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema BackupDescribeBackupJobOutput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema BackupDescribeBackupJobOutput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema BackupDescribeBackupJobOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupDescribeBackupJobOutput#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema BackupDescribeBackupJobOutput#State
   */
  readonly state?: string;

  /**
   * @schema BackupDescribeBackupJobOutput#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema BackupDescribeBackupJobOutput#PercentDone
   */
  readonly percentDone?: string;

  /**
   * @schema BackupDescribeBackupJobOutput#BackupSizeInBytes
   */
  readonly backupSizeInBytes?: number;

  /**
   * @schema BackupDescribeBackupJobOutput#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema BackupDescribeBackupJobOutput#CreatedBy
   */
  readonly createdBy?: BackupRecoveryPointCreator;

  /**
   * @schema BackupDescribeBackupJobOutput#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema BackupDescribeBackupJobOutput#BytesTransferred
   */
  readonly bytesTransferred?: number;

  /**
   * @schema BackupDescribeBackupJobOutput#ExpectedCompletionDate
   */
  readonly expectedCompletionDate?: string;

  /**
   * @schema BackupDescribeBackupJobOutput#StartBy
   */
  readonly startBy?: string;

  /**
   * @schema BackupDescribeBackupJobOutput#BackupOptions
   */
  readonly backupOptions?: { [key: string]: string };

  /**
   * @schema BackupDescribeBackupJobOutput#BackupType
   */
  readonly backupType?: string;

}

/**
 * Converts an object of type 'BackupDescribeBackupJobOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDescribeBackupJobOutput(obj: BackupDescribeBackupJobOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BackupJobId': obj.backupJobId,
    'BackupVaultName': obj.backupVaultName,
    'BackupVaultArn': obj.backupVaultArn,
    'RecoveryPointArn': obj.recoveryPointArn,
    'ResourceArn': obj.resourceArn,
    'CreationDate': obj.creationDate,
    'CompletionDate': obj.completionDate,
    'State': obj.state,
    'StatusMessage': obj.statusMessage,
    'PercentDone': obj.percentDone,
    'BackupSizeInBytes': obj.backupSizeInBytes,
    'IamRoleArn': obj.iamRoleArn,
    'CreatedBy': toJson_BackupRecoveryPointCreator(obj.createdBy),
    'ResourceType': obj.resourceType,
    'BytesTransferred': obj.bytesTransferred,
    'ExpectedCompletionDate': obj.expectedCompletionDate,
    'StartBy': obj.startBy,
    'BackupOptions': ((obj.backupOptions) === undefined) ? undefined : (Object.entries(obj.backupOptions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'BackupType': obj.backupType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDescribeBackupVaultInput
 */
export interface BackupDescribeBackupVaultInput {
  /**
   * @schema BackupDescribeBackupVaultInput#BackupVaultName
   */
  readonly backupVaultName?: string;

}

/**
 * Converts an object of type 'BackupDescribeBackupVaultInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDescribeBackupVaultInput(obj: BackupDescribeBackupVaultInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDescribeBackupVaultOutput
 */
export interface BackupDescribeBackupVaultOutput {
  /**
   * @schema BackupDescribeBackupVaultOutput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupDescribeBackupVaultOutput#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema BackupDescribeBackupVaultOutput#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema BackupDescribeBackupVaultOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupDescribeBackupVaultOutput#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema BackupDescribeBackupVaultOutput#NumberOfRecoveryPoints
   */
  readonly numberOfRecoveryPoints?: number;

}

/**
 * Converts an object of type 'BackupDescribeBackupVaultOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDescribeBackupVaultOutput(obj: BackupDescribeBackupVaultOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
    'BackupVaultArn': obj.backupVaultArn,
    'EncryptionKeyArn': obj.encryptionKeyArn,
    'CreationDate': obj.creationDate,
    'CreatorRequestId': obj.creatorRequestId,
    'NumberOfRecoveryPoints': obj.numberOfRecoveryPoints,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDescribeCopyJobInput
 */
export interface BackupDescribeCopyJobInput {
  /**
   * @schema BackupDescribeCopyJobInput#CopyJobId
   */
  readonly copyJobId?: string;

}

/**
 * Converts an object of type 'BackupDescribeCopyJobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDescribeCopyJobInput(obj: BackupDescribeCopyJobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CopyJobId': obj.copyJobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDescribeCopyJobOutput
 */
export interface BackupDescribeCopyJobOutput {
  /**
   * @schema BackupDescribeCopyJobOutput#CopyJob
   */
  readonly copyJob?: BackupCopyJob;

}

/**
 * Converts an object of type 'BackupDescribeCopyJobOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDescribeCopyJobOutput(obj: BackupDescribeCopyJobOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CopyJob': toJson_BackupCopyJob(obj.copyJob),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDescribeGlobalSettingsInput
 */
export interface BackupDescribeGlobalSettingsInput {
}

/**
 * Converts an object of type 'BackupDescribeGlobalSettingsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDescribeGlobalSettingsInput(obj: BackupDescribeGlobalSettingsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDescribeGlobalSettingsOutput
 */
export interface BackupDescribeGlobalSettingsOutput {
  /**
   * @schema BackupDescribeGlobalSettingsOutput#GlobalSettings
   */
  readonly globalSettings?: { [key: string]: string };

  /**
   * @schema BackupDescribeGlobalSettingsOutput#LastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * Converts an object of type 'BackupDescribeGlobalSettingsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDescribeGlobalSettingsOutput(obj: BackupDescribeGlobalSettingsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalSettings': ((obj.globalSettings) === undefined) ? undefined : (Object.entries(obj.globalSettings).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'LastUpdateTime': obj.lastUpdateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDescribeProtectedResourceInput
 */
export interface BackupDescribeProtectedResourceInput {
  /**
   * @schema BackupDescribeProtectedResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'BackupDescribeProtectedResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDescribeProtectedResourceInput(obj: BackupDescribeProtectedResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDescribeProtectedResourceOutput
 */
export interface BackupDescribeProtectedResourceOutput {
  /**
   * @schema BackupDescribeProtectedResourceOutput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema BackupDescribeProtectedResourceOutput#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema BackupDescribeProtectedResourceOutput#LastBackupTime
   */
  readonly lastBackupTime?: string;

}

/**
 * Converts an object of type 'BackupDescribeProtectedResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDescribeProtectedResourceOutput(obj: BackupDescribeProtectedResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'ResourceType': obj.resourceType,
    'LastBackupTime': obj.lastBackupTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDescribeRecoveryPointInput
 */
export interface BackupDescribeRecoveryPointInput {
  /**
   * @schema BackupDescribeRecoveryPointInput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupDescribeRecoveryPointInput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

}

/**
 * Converts an object of type 'BackupDescribeRecoveryPointInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDescribeRecoveryPointInput(obj: BackupDescribeRecoveryPointInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
    'RecoveryPointArn': obj.recoveryPointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDescribeRecoveryPointOutput
 */
export interface BackupDescribeRecoveryPointOutput {
  /**
   * @schema BackupDescribeRecoveryPointOutput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema BackupDescribeRecoveryPointOutput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupDescribeRecoveryPointOutput#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema BackupDescribeRecoveryPointOutput#SourceBackupVaultArn
   */
  readonly sourceBackupVaultArn?: string;

  /**
   * @schema BackupDescribeRecoveryPointOutput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema BackupDescribeRecoveryPointOutput#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema BackupDescribeRecoveryPointOutput#CreatedBy
   */
  readonly createdBy?: BackupRecoveryPointCreator;

  /**
   * @schema BackupDescribeRecoveryPointOutput#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema BackupDescribeRecoveryPointOutput#Status
   */
  readonly status?: string;

  /**
   * @schema BackupDescribeRecoveryPointOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupDescribeRecoveryPointOutput#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema BackupDescribeRecoveryPointOutput#BackupSizeInBytes
   */
  readonly backupSizeInBytes?: number;

  /**
   * @schema BackupDescribeRecoveryPointOutput#CalculatedLifecycle
   */
  readonly calculatedLifecycle?: BackupCalculatedLifecycle;

  /**
   * @schema BackupDescribeRecoveryPointOutput#Lifecycle
   */
  readonly lifecycle?: BackupLifecycle;

  /**
   * @schema BackupDescribeRecoveryPointOutput#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema BackupDescribeRecoveryPointOutput#IsEncrypted
   */
  readonly isEncrypted?: boolean;

  /**
   * @schema BackupDescribeRecoveryPointOutput#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema BackupDescribeRecoveryPointOutput#LastRestoreTime
   */
  readonly lastRestoreTime?: string;

}

/**
 * Converts an object of type 'BackupDescribeRecoveryPointOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDescribeRecoveryPointOutput(obj: BackupDescribeRecoveryPointOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecoveryPointArn': obj.recoveryPointArn,
    'BackupVaultName': obj.backupVaultName,
    'BackupVaultArn': obj.backupVaultArn,
    'SourceBackupVaultArn': obj.sourceBackupVaultArn,
    'ResourceArn': obj.resourceArn,
    'ResourceType': obj.resourceType,
    'CreatedBy': toJson_BackupRecoveryPointCreator(obj.createdBy),
    'IamRoleArn': obj.iamRoleArn,
    'Status': obj.status,
    'CreationDate': obj.creationDate,
    'CompletionDate': obj.completionDate,
    'BackupSizeInBytes': obj.backupSizeInBytes,
    'CalculatedLifecycle': toJson_BackupCalculatedLifecycle(obj.calculatedLifecycle),
    'Lifecycle': toJson_BackupLifecycle(obj.lifecycle),
    'EncryptionKeyArn': obj.encryptionKeyArn,
    'IsEncrypted': obj.isEncrypted,
    'StorageClass': obj.storageClass,
    'LastRestoreTime': obj.lastRestoreTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDescribeRegionSettingsInput
 */
export interface BackupDescribeRegionSettingsInput {
}

/**
 * Converts an object of type 'BackupDescribeRegionSettingsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDescribeRegionSettingsInput(obj: BackupDescribeRegionSettingsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDescribeRegionSettingsOutput
 */
export interface BackupDescribeRegionSettingsOutput {
  /**
   * @schema BackupDescribeRegionSettingsOutput#ResourceTypeOptInPreference
   */
  readonly resourceTypeOptInPreference?: { [key: string]: boolean };

}

/**
 * Converts an object of type 'BackupDescribeRegionSettingsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDescribeRegionSettingsOutput(obj: BackupDescribeRegionSettingsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceTypeOptInPreference': ((obj.resourceTypeOptInPreference) === undefined) ? undefined : (Object.entries(obj.resourceTypeOptInPreference).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDescribeRestoreJobInput
 */
export interface BackupDescribeRestoreJobInput {
  /**
   * @schema BackupDescribeRestoreJobInput#RestoreJobId
   */
  readonly restoreJobId?: string;

}

/**
 * Converts an object of type 'BackupDescribeRestoreJobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDescribeRestoreJobInput(obj: BackupDescribeRestoreJobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RestoreJobId': obj.restoreJobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDescribeRestoreJobOutput
 */
export interface BackupDescribeRestoreJobOutput {
  /**
   * @schema BackupDescribeRestoreJobOutput#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BackupDescribeRestoreJobOutput#RestoreJobId
   */
  readonly restoreJobId?: string;

  /**
   * @schema BackupDescribeRestoreJobOutput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema BackupDescribeRestoreJobOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupDescribeRestoreJobOutput#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema BackupDescribeRestoreJobOutput#Status
   */
  readonly status?: string;

  /**
   * @schema BackupDescribeRestoreJobOutput#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema BackupDescribeRestoreJobOutput#PercentDone
   */
  readonly percentDone?: string;

  /**
   * @schema BackupDescribeRestoreJobOutput#BackupSizeInBytes
   */
  readonly backupSizeInBytes?: number;

  /**
   * @schema BackupDescribeRestoreJobOutput#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema BackupDescribeRestoreJobOutput#ExpectedCompletionTimeMinutes
   */
  readonly expectedCompletionTimeMinutes?: number;

  /**
   * @schema BackupDescribeRestoreJobOutput#CreatedResourceArn
   */
  readonly createdResourceArn?: string;

  /**
   * @schema BackupDescribeRestoreJobOutput#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'BackupDescribeRestoreJobOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDescribeRestoreJobOutput(obj: BackupDescribeRestoreJobOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'RestoreJobId': obj.restoreJobId,
    'RecoveryPointArn': obj.recoveryPointArn,
    'CreationDate': obj.creationDate,
    'CompletionDate': obj.completionDate,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'PercentDone': obj.percentDone,
    'BackupSizeInBytes': obj.backupSizeInBytes,
    'IamRoleArn': obj.iamRoleArn,
    'ExpectedCompletionTimeMinutes': obj.expectedCompletionTimeMinutes,
    'CreatedResourceArn': obj.createdResourceArn,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupDisassociateRecoveryPointInput
 */
export interface BackupDisassociateRecoveryPointInput {
  /**
   * @schema BackupDisassociateRecoveryPointInput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupDisassociateRecoveryPointInput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

}

/**
 * Converts an object of type 'BackupDisassociateRecoveryPointInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupDisassociateRecoveryPointInput(obj: BackupDisassociateRecoveryPointInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
    'RecoveryPointArn': obj.recoveryPointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupExportBackupPlanTemplateInput
 */
export interface BackupExportBackupPlanTemplateInput {
  /**
   * @schema BackupExportBackupPlanTemplateInput#BackupPlanId
   */
  readonly backupPlanId?: string;

}

/**
 * Converts an object of type 'BackupExportBackupPlanTemplateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupExportBackupPlanTemplateInput(obj: BackupExportBackupPlanTemplateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanId': obj.backupPlanId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupExportBackupPlanTemplateOutput
 */
export interface BackupExportBackupPlanTemplateOutput {
  /**
   * @schema BackupExportBackupPlanTemplateOutput#BackupPlanTemplateJson
   */
  readonly backupPlanTemplateJson?: string;

}

/**
 * Converts an object of type 'BackupExportBackupPlanTemplateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupExportBackupPlanTemplateOutput(obj: BackupExportBackupPlanTemplateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanTemplateJson': obj.backupPlanTemplateJson,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupGetBackupPlanInput
 */
export interface BackupGetBackupPlanInput {
  /**
   * @schema BackupGetBackupPlanInput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupGetBackupPlanInput#VersionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'BackupGetBackupPlanInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupGetBackupPlanInput(obj: BackupGetBackupPlanInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanId': obj.backupPlanId,
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupGetBackupPlanOutput
 */
export interface BackupGetBackupPlanOutput {
  /**
   * @schema BackupGetBackupPlanOutput#BackupPlan
   */
  readonly backupPlan?: BackupBackupPlan;

  /**
   * @schema BackupGetBackupPlanOutput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupGetBackupPlanOutput#BackupPlanArn
   */
  readonly backupPlanArn?: string;

  /**
   * @schema BackupGetBackupPlanOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema BackupGetBackupPlanOutput#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema BackupGetBackupPlanOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupGetBackupPlanOutput#DeletionDate
   */
  readonly deletionDate?: string;

  /**
   * @schema BackupGetBackupPlanOutput#LastExecutionDate
   */
  readonly lastExecutionDate?: string;

  /**
   * @schema BackupGetBackupPlanOutput#AdvancedBackupSettings
   */
  readonly advancedBackupSettings?: BackupAdvancedBackupSetting[];

}

/**
 * Converts an object of type 'BackupGetBackupPlanOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupGetBackupPlanOutput(obj: BackupGetBackupPlanOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlan': toJson_BackupBackupPlan(obj.backupPlan),
    'BackupPlanId': obj.backupPlanId,
    'BackupPlanArn': obj.backupPlanArn,
    'VersionId': obj.versionId,
    'CreatorRequestId': obj.creatorRequestId,
    'CreationDate': obj.creationDate,
    'DeletionDate': obj.deletionDate,
    'LastExecutionDate': obj.lastExecutionDate,
    'AdvancedBackupSettings': obj.advancedBackupSettings?.map(y => toJson_BackupAdvancedBackupSetting(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupGetBackupPlanFromJsonInput
 */
export interface BackupGetBackupPlanFromJsonInput {
  /**
   * @schema BackupGetBackupPlanFromJsonInput#BackupPlanTemplateJson
   */
  readonly backupPlanTemplateJson?: string;

}

/**
 * Converts an object of type 'BackupGetBackupPlanFromJsonInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupGetBackupPlanFromJsonInput(obj: BackupGetBackupPlanFromJsonInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanTemplateJson': obj.backupPlanTemplateJson,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupGetBackupPlanFromJsonOutput
 */
export interface BackupGetBackupPlanFromJsonOutput {
  /**
   * @schema BackupGetBackupPlanFromJsonOutput#BackupPlan
   */
  readonly backupPlan?: BackupBackupPlan;

}

/**
 * Converts an object of type 'BackupGetBackupPlanFromJsonOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupGetBackupPlanFromJsonOutput(obj: BackupGetBackupPlanFromJsonOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlan': toJson_BackupBackupPlan(obj.backupPlan),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupGetBackupPlanFromTemplateInput
 */
export interface BackupGetBackupPlanFromTemplateInput {
  /**
   * @schema BackupGetBackupPlanFromTemplateInput#BackupPlanTemplateId
   */
  readonly backupPlanTemplateId?: string;

}

/**
 * Converts an object of type 'BackupGetBackupPlanFromTemplateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupGetBackupPlanFromTemplateInput(obj: BackupGetBackupPlanFromTemplateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanTemplateId': obj.backupPlanTemplateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupGetBackupPlanFromTemplateOutput
 */
export interface BackupGetBackupPlanFromTemplateOutput {
  /**
   * @schema BackupGetBackupPlanFromTemplateOutput#BackupPlanDocument
   */
  readonly backupPlanDocument?: BackupBackupPlan;

}

/**
 * Converts an object of type 'BackupGetBackupPlanFromTemplateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupGetBackupPlanFromTemplateOutput(obj: BackupGetBackupPlanFromTemplateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanDocument': toJson_BackupBackupPlan(obj.backupPlanDocument),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupGetBackupSelectionInput
 */
export interface BackupGetBackupSelectionInput {
  /**
   * @schema BackupGetBackupSelectionInput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupGetBackupSelectionInput#SelectionId
   */
  readonly selectionId?: string;

}

/**
 * Converts an object of type 'BackupGetBackupSelectionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupGetBackupSelectionInput(obj: BackupGetBackupSelectionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanId': obj.backupPlanId,
    'SelectionId': obj.selectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupGetBackupSelectionOutput
 */
export interface BackupGetBackupSelectionOutput {
  /**
   * @schema BackupGetBackupSelectionOutput#BackupSelection
   */
  readonly backupSelection?: BackupBackupSelection;

  /**
   * @schema BackupGetBackupSelectionOutput#SelectionId
   */
  readonly selectionId?: string;

  /**
   * @schema BackupGetBackupSelectionOutput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupGetBackupSelectionOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupGetBackupSelectionOutput#CreatorRequestId
   */
  readonly creatorRequestId?: string;

}

/**
 * Converts an object of type 'BackupGetBackupSelectionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupGetBackupSelectionOutput(obj: BackupGetBackupSelectionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupSelection': toJson_BackupBackupSelection(obj.backupSelection),
    'SelectionId': obj.selectionId,
    'BackupPlanId': obj.backupPlanId,
    'CreationDate': obj.creationDate,
    'CreatorRequestId': obj.creatorRequestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupGetBackupVaultAccessPolicyInput
 */
export interface BackupGetBackupVaultAccessPolicyInput {
  /**
   * @schema BackupGetBackupVaultAccessPolicyInput#BackupVaultName
   */
  readonly backupVaultName?: string;

}

/**
 * Converts an object of type 'BackupGetBackupVaultAccessPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupGetBackupVaultAccessPolicyInput(obj: BackupGetBackupVaultAccessPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupGetBackupVaultAccessPolicyOutput
 */
export interface BackupGetBackupVaultAccessPolicyOutput {
  /**
   * @schema BackupGetBackupVaultAccessPolicyOutput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupGetBackupVaultAccessPolicyOutput#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema BackupGetBackupVaultAccessPolicyOutput#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'BackupGetBackupVaultAccessPolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupGetBackupVaultAccessPolicyOutput(obj: BackupGetBackupVaultAccessPolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
    'BackupVaultArn': obj.backupVaultArn,
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupGetBackupVaultNotificationsInput
 */
export interface BackupGetBackupVaultNotificationsInput {
  /**
   * @schema BackupGetBackupVaultNotificationsInput#BackupVaultName
   */
  readonly backupVaultName?: string;

}

/**
 * Converts an object of type 'BackupGetBackupVaultNotificationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupGetBackupVaultNotificationsInput(obj: BackupGetBackupVaultNotificationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupGetBackupVaultNotificationsOutput
 */
export interface BackupGetBackupVaultNotificationsOutput {
  /**
   * @schema BackupGetBackupVaultNotificationsOutput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupGetBackupVaultNotificationsOutput#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema BackupGetBackupVaultNotificationsOutput#SNSTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema BackupGetBackupVaultNotificationsOutput#BackupVaultEvents
   */
  readonly backupVaultEvents?: string[];

}

/**
 * Converts an object of type 'BackupGetBackupVaultNotificationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupGetBackupVaultNotificationsOutput(obj: BackupGetBackupVaultNotificationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
    'BackupVaultArn': obj.backupVaultArn,
    'SNSTopicArn': obj.snsTopicArn,
    'BackupVaultEvents': obj.backupVaultEvents?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupGetRecoveryPointRestoreMetadataInput
 */
export interface BackupGetRecoveryPointRestoreMetadataInput {
  /**
   * @schema BackupGetRecoveryPointRestoreMetadataInput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupGetRecoveryPointRestoreMetadataInput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

}

/**
 * Converts an object of type 'BackupGetRecoveryPointRestoreMetadataInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupGetRecoveryPointRestoreMetadataInput(obj: BackupGetRecoveryPointRestoreMetadataInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
    'RecoveryPointArn': obj.recoveryPointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupGetRecoveryPointRestoreMetadataOutput
 */
export interface BackupGetRecoveryPointRestoreMetadataOutput {
  /**
   * @schema BackupGetRecoveryPointRestoreMetadataOutput#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema BackupGetRecoveryPointRestoreMetadataOutput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema BackupGetRecoveryPointRestoreMetadataOutput#RestoreMetadata
   */
  readonly restoreMetadata?: { [key: string]: string };

}

/**
 * Converts an object of type 'BackupGetRecoveryPointRestoreMetadataOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupGetRecoveryPointRestoreMetadataOutput(obj: BackupGetRecoveryPointRestoreMetadataOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultArn': obj.backupVaultArn,
    'RecoveryPointArn': obj.recoveryPointArn,
    'RestoreMetadata': ((obj.restoreMetadata) === undefined) ? undefined : (Object.entries(obj.restoreMetadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupGetSupportedResourceTypesOutput
 */
export interface BackupGetSupportedResourceTypesOutput {
  /**
   * @schema BackupGetSupportedResourceTypesOutput#ResourceTypes
   */
  readonly resourceTypes?: string[];

}

/**
 * Converts an object of type 'BackupGetSupportedResourceTypesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupGetSupportedResourceTypesOutput(obj: BackupGetSupportedResourceTypesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceTypes': obj.resourceTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListBackupJobsInput
 */
export interface BackupListBackupJobsInput {
  /**
   * @schema BackupListBackupJobsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListBackupJobsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BackupListBackupJobsInput#ByResourceArn
   */
  readonly byResourceArn?: string;

  /**
   * @schema BackupListBackupJobsInput#ByState
   */
  readonly byState?: string;

  /**
   * @schema BackupListBackupJobsInput#ByBackupVaultName
   */
  readonly byBackupVaultName?: string;

  /**
   * @schema BackupListBackupJobsInput#ByCreatedBefore
   */
  readonly byCreatedBefore?: string;

  /**
   * @schema BackupListBackupJobsInput#ByCreatedAfter
   */
  readonly byCreatedAfter?: string;

  /**
   * @schema BackupListBackupJobsInput#ByResourceType
   */
  readonly byResourceType?: string;

  /**
   * @schema BackupListBackupJobsInput#ByAccountId
   */
  readonly byAccountId?: string;

}

/**
 * Converts an object of type 'BackupListBackupJobsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListBackupJobsInput(obj: BackupListBackupJobsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ByResourceArn': obj.byResourceArn,
    'ByState': obj.byState,
    'ByBackupVaultName': obj.byBackupVaultName,
    'ByCreatedBefore': obj.byCreatedBefore,
    'ByCreatedAfter': obj.byCreatedAfter,
    'ByResourceType': obj.byResourceType,
    'ByAccountId': obj.byAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListBackupJobsOutput
 */
export interface BackupListBackupJobsOutput {
  /**
   * @schema BackupListBackupJobsOutput#BackupJobs
   */
  readonly backupJobs?: BackupBackupJob[];

  /**
   * @schema BackupListBackupJobsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BackupListBackupJobsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListBackupJobsOutput(obj: BackupListBackupJobsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupJobs': obj.backupJobs?.map(y => toJson_BackupBackupJob(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListBackupPlanTemplatesInput
 */
export interface BackupListBackupPlanTemplatesInput {
  /**
   * @schema BackupListBackupPlanTemplatesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListBackupPlanTemplatesInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'BackupListBackupPlanTemplatesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListBackupPlanTemplatesInput(obj: BackupListBackupPlanTemplatesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListBackupPlanTemplatesOutput
 */
export interface BackupListBackupPlanTemplatesOutput {
  /**
   * @schema BackupListBackupPlanTemplatesOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListBackupPlanTemplatesOutput#BackupPlanTemplatesList
   */
  readonly backupPlanTemplatesList?: BackupBackupPlanTemplatesListMember[];

}

/**
 * Converts an object of type 'BackupListBackupPlanTemplatesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListBackupPlanTemplatesOutput(obj: BackupListBackupPlanTemplatesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'BackupPlanTemplatesList': obj.backupPlanTemplatesList?.map(y => toJson_BackupBackupPlanTemplatesListMember(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListBackupPlanVersionsInput
 */
export interface BackupListBackupPlanVersionsInput {
  /**
   * @schema BackupListBackupPlanVersionsInput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupListBackupPlanVersionsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListBackupPlanVersionsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'BackupListBackupPlanVersionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListBackupPlanVersionsInput(obj: BackupListBackupPlanVersionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanId': obj.backupPlanId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListBackupPlanVersionsOutput
 */
export interface BackupListBackupPlanVersionsOutput {
  /**
   * @schema BackupListBackupPlanVersionsOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListBackupPlanVersionsOutput#BackupPlanVersionsList
   */
  readonly backupPlanVersionsList?: BackupBackupPlansListMember[];

}

/**
 * Converts an object of type 'BackupListBackupPlanVersionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListBackupPlanVersionsOutput(obj: BackupListBackupPlanVersionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'BackupPlanVersionsList': obj.backupPlanVersionsList?.map(y => toJson_BackupBackupPlansListMember(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListBackupPlansInput
 */
export interface BackupListBackupPlansInput {
  /**
   * @schema BackupListBackupPlansInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListBackupPlansInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BackupListBackupPlansInput#IncludeDeleted
   */
  readonly includeDeleted?: boolean;

}

/**
 * Converts an object of type 'BackupListBackupPlansInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListBackupPlansInput(obj: BackupListBackupPlansInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'IncludeDeleted': obj.includeDeleted,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListBackupPlansOutput
 */
export interface BackupListBackupPlansOutput {
  /**
   * @schema BackupListBackupPlansOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListBackupPlansOutput#BackupPlansList
   */
  readonly backupPlansList?: BackupBackupPlansListMember[];

}

/**
 * Converts an object of type 'BackupListBackupPlansOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListBackupPlansOutput(obj: BackupListBackupPlansOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'BackupPlansList': obj.backupPlansList?.map(y => toJson_BackupBackupPlansListMember(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListBackupSelectionsInput
 */
export interface BackupListBackupSelectionsInput {
  /**
   * @schema BackupListBackupSelectionsInput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupListBackupSelectionsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListBackupSelectionsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'BackupListBackupSelectionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListBackupSelectionsInput(obj: BackupListBackupSelectionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanId': obj.backupPlanId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListBackupSelectionsOutput
 */
export interface BackupListBackupSelectionsOutput {
  /**
   * @schema BackupListBackupSelectionsOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListBackupSelectionsOutput#BackupSelectionsList
   */
  readonly backupSelectionsList?: BackupBackupSelectionsListMember[];

}

/**
 * Converts an object of type 'BackupListBackupSelectionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListBackupSelectionsOutput(obj: BackupListBackupSelectionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'BackupSelectionsList': obj.backupSelectionsList?.map(y => toJson_BackupBackupSelectionsListMember(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListBackupVaultsInput
 */
export interface BackupListBackupVaultsInput {
  /**
   * @schema BackupListBackupVaultsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListBackupVaultsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'BackupListBackupVaultsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListBackupVaultsInput(obj: BackupListBackupVaultsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListBackupVaultsOutput
 */
export interface BackupListBackupVaultsOutput {
  /**
   * @schema BackupListBackupVaultsOutput#BackupVaultList
   */
  readonly backupVaultList?: BackupBackupVaultListMember[];

  /**
   * @schema BackupListBackupVaultsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BackupListBackupVaultsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListBackupVaultsOutput(obj: BackupListBackupVaultsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultList': obj.backupVaultList?.map(y => toJson_BackupBackupVaultListMember(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListCopyJobsInput
 */
export interface BackupListCopyJobsInput {
  /**
   * @schema BackupListCopyJobsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListCopyJobsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BackupListCopyJobsInput#ByResourceArn
   */
  readonly byResourceArn?: string;

  /**
   * @schema BackupListCopyJobsInput#ByState
   */
  readonly byState?: string;

  /**
   * @schema BackupListCopyJobsInput#ByCreatedBefore
   */
  readonly byCreatedBefore?: string;

  /**
   * @schema BackupListCopyJobsInput#ByCreatedAfter
   */
  readonly byCreatedAfter?: string;

  /**
   * @schema BackupListCopyJobsInput#ByResourceType
   */
  readonly byResourceType?: string;

  /**
   * @schema BackupListCopyJobsInput#ByDestinationVaultArn
   */
  readonly byDestinationVaultArn?: string;

  /**
   * @schema BackupListCopyJobsInput#ByAccountId
   */
  readonly byAccountId?: string;

}

/**
 * Converts an object of type 'BackupListCopyJobsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListCopyJobsInput(obj: BackupListCopyJobsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ByResourceArn': obj.byResourceArn,
    'ByState': obj.byState,
    'ByCreatedBefore': obj.byCreatedBefore,
    'ByCreatedAfter': obj.byCreatedAfter,
    'ByResourceType': obj.byResourceType,
    'ByDestinationVaultArn': obj.byDestinationVaultArn,
    'ByAccountId': obj.byAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListCopyJobsOutput
 */
export interface BackupListCopyJobsOutput {
  /**
   * @schema BackupListCopyJobsOutput#CopyJobs
   */
  readonly copyJobs?: BackupCopyJob[];

  /**
   * @schema BackupListCopyJobsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BackupListCopyJobsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListCopyJobsOutput(obj: BackupListCopyJobsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CopyJobs': obj.copyJobs?.map(y => toJson_BackupCopyJob(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListProtectedResourcesInput
 */
export interface BackupListProtectedResourcesInput {
  /**
   * @schema BackupListProtectedResourcesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListProtectedResourcesInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'BackupListProtectedResourcesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListProtectedResourcesInput(obj: BackupListProtectedResourcesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListProtectedResourcesOutput
 */
export interface BackupListProtectedResourcesOutput {
  /**
   * @schema BackupListProtectedResourcesOutput#Results
   */
  readonly results?: BackupProtectedResource[];

  /**
   * @schema BackupListProtectedResourcesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BackupListProtectedResourcesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListProtectedResourcesOutput(obj: BackupListProtectedResourcesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Results': obj.results?.map(y => toJson_BackupProtectedResource(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListRecoveryPointsByBackupVaultInput
 */
export interface BackupListRecoveryPointsByBackupVaultInput {
  /**
   * @schema BackupListRecoveryPointsByBackupVaultInput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupListRecoveryPointsByBackupVaultInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListRecoveryPointsByBackupVaultInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BackupListRecoveryPointsByBackupVaultInput#ByResourceArn
   */
  readonly byResourceArn?: string;

  /**
   * @schema BackupListRecoveryPointsByBackupVaultInput#ByResourceType
   */
  readonly byResourceType?: string;

  /**
   * @schema BackupListRecoveryPointsByBackupVaultInput#ByBackupPlanId
   */
  readonly byBackupPlanId?: string;

  /**
   * @schema BackupListRecoveryPointsByBackupVaultInput#ByCreatedBefore
   */
  readonly byCreatedBefore?: string;

  /**
   * @schema BackupListRecoveryPointsByBackupVaultInput#ByCreatedAfter
   */
  readonly byCreatedAfter?: string;

}

/**
 * Converts an object of type 'BackupListRecoveryPointsByBackupVaultInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListRecoveryPointsByBackupVaultInput(obj: BackupListRecoveryPointsByBackupVaultInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ByResourceArn': obj.byResourceArn,
    'ByResourceType': obj.byResourceType,
    'ByBackupPlanId': obj.byBackupPlanId,
    'ByCreatedBefore': obj.byCreatedBefore,
    'ByCreatedAfter': obj.byCreatedAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListRecoveryPointsByBackupVaultOutput
 */
export interface BackupListRecoveryPointsByBackupVaultOutput {
  /**
   * @schema BackupListRecoveryPointsByBackupVaultOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListRecoveryPointsByBackupVaultOutput#RecoveryPoints
   */
  readonly recoveryPoints?: BackupRecoveryPointByBackupVault[];

}

/**
 * Converts an object of type 'BackupListRecoveryPointsByBackupVaultOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListRecoveryPointsByBackupVaultOutput(obj: BackupListRecoveryPointsByBackupVaultOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'RecoveryPoints': obj.recoveryPoints?.map(y => toJson_BackupRecoveryPointByBackupVault(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListRecoveryPointsByResourceInput
 */
export interface BackupListRecoveryPointsByResourceInput {
  /**
   * @schema BackupListRecoveryPointsByResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema BackupListRecoveryPointsByResourceInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListRecoveryPointsByResourceInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'BackupListRecoveryPointsByResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListRecoveryPointsByResourceInput(obj: BackupListRecoveryPointsByResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListRecoveryPointsByResourceOutput
 */
export interface BackupListRecoveryPointsByResourceOutput {
  /**
   * @schema BackupListRecoveryPointsByResourceOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListRecoveryPointsByResourceOutput#RecoveryPoints
   */
  readonly recoveryPoints?: BackupRecoveryPointByResource[];

}

/**
 * Converts an object of type 'BackupListRecoveryPointsByResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListRecoveryPointsByResourceOutput(obj: BackupListRecoveryPointsByResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'RecoveryPoints': obj.recoveryPoints?.map(y => toJson_BackupRecoveryPointByResource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListRestoreJobsInput
 */
export interface BackupListRestoreJobsInput {
  /**
   * @schema BackupListRestoreJobsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListRestoreJobsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BackupListRestoreJobsInput#ByAccountId
   */
  readonly byAccountId?: string;

  /**
   * @schema BackupListRestoreJobsInput#ByCreatedBefore
   */
  readonly byCreatedBefore?: string;

  /**
   * @schema BackupListRestoreJobsInput#ByCreatedAfter
   */
  readonly byCreatedAfter?: string;

  /**
   * @schema BackupListRestoreJobsInput#ByStatus
   */
  readonly byStatus?: string;

}

/**
 * Converts an object of type 'BackupListRestoreJobsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListRestoreJobsInput(obj: BackupListRestoreJobsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ByAccountId': obj.byAccountId,
    'ByCreatedBefore': obj.byCreatedBefore,
    'ByCreatedAfter': obj.byCreatedAfter,
    'ByStatus': obj.byStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListRestoreJobsOutput
 */
export interface BackupListRestoreJobsOutput {
  /**
   * @schema BackupListRestoreJobsOutput#RestoreJobs
   */
  readonly restoreJobs?: BackupRestoreJobsListMember[];

  /**
   * @schema BackupListRestoreJobsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'BackupListRestoreJobsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListRestoreJobsOutput(obj: BackupListRestoreJobsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RestoreJobs': obj.restoreJobs?.map(y => toJson_BackupRestoreJobsListMember(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListTagsInput
 */
export interface BackupListTagsInput {
  /**
   * @schema BackupListTagsInput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema BackupListTagsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListTagsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'BackupListTagsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListTagsInput(obj: BackupListTagsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupListTagsOutput
 */
export interface BackupListTagsOutput {
  /**
   * @schema BackupListTagsOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BackupListTagsOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'BackupListTagsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupListTagsOutput(obj: BackupListTagsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupPutBackupVaultAccessPolicyInput
 */
export interface BackupPutBackupVaultAccessPolicyInput {
  /**
   * @schema BackupPutBackupVaultAccessPolicyInput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupPutBackupVaultAccessPolicyInput#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'BackupPutBackupVaultAccessPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupPutBackupVaultAccessPolicyInput(obj: BackupPutBackupVaultAccessPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupPutBackupVaultNotificationsInput
 */
export interface BackupPutBackupVaultNotificationsInput {
  /**
   * @schema BackupPutBackupVaultNotificationsInput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupPutBackupVaultNotificationsInput#SNSTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema BackupPutBackupVaultNotificationsInput#BackupVaultEvents
   */
  readonly backupVaultEvents?: string[];

}

/**
 * Converts an object of type 'BackupPutBackupVaultNotificationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupPutBackupVaultNotificationsInput(obj: BackupPutBackupVaultNotificationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
    'SNSTopicArn': obj.snsTopicArn,
    'BackupVaultEvents': obj.backupVaultEvents?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupStartBackupJobInput
 */
export interface BackupStartBackupJobInput {
  /**
   * @schema BackupStartBackupJobInput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupStartBackupJobInput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema BackupStartBackupJobInput#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema BackupStartBackupJobInput#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema BackupStartBackupJobInput#StartWindowMinutes
   */
  readonly startWindowMinutes?: number;

  /**
   * @schema BackupStartBackupJobInput#CompleteWindowMinutes
   */
  readonly completeWindowMinutes?: number;

  /**
   * @schema BackupStartBackupJobInput#Lifecycle
   */
  readonly lifecycle?: BackupLifecycle;

  /**
   * @schema BackupStartBackupJobInput#RecoveryPointTags
   */
  readonly recoveryPointTags?: { [key: string]: string };

  /**
   * @schema BackupStartBackupJobInput#BackupOptions
   */
  readonly backupOptions?: { [key: string]: string };

}

/**
 * Converts an object of type 'BackupStartBackupJobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupStartBackupJobInput(obj: BackupStartBackupJobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
    'ResourceArn': obj.resourceArn,
    'IamRoleArn': obj.iamRoleArn,
    'IdempotencyToken': obj.idempotencyToken,
    'StartWindowMinutes': obj.startWindowMinutes,
    'CompleteWindowMinutes': obj.completeWindowMinutes,
    'Lifecycle': toJson_BackupLifecycle(obj.lifecycle),
    'RecoveryPointTags': ((obj.recoveryPointTags) === undefined) ? undefined : (Object.entries(obj.recoveryPointTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'BackupOptions': ((obj.backupOptions) === undefined) ? undefined : (Object.entries(obj.backupOptions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupStartBackupJobOutput
 */
export interface BackupStartBackupJobOutput {
  /**
   * @schema BackupStartBackupJobOutput#BackupJobId
   */
  readonly backupJobId?: string;

  /**
   * @schema BackupStartBackupJobOutput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema BackupStartBackupJobOutput#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * Converts an object of type 'BackupStartBackupJobOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupStartBackupJobOutput(obj: BackupStartBackupJobOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupJobId': obj.backupJobId,
    'RecoveryPointArn': obj.recoveryPointArn,
    'CreationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupStartCopyJobInput
 */
export interface BackupStartCopyJobInput {
  /**
   * @schema BackupStartCopyJobInput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema BackupStartCopyJobInput#SourceBackupVaultName
   */
  readonly sourceBackupVaultName?: string;

  /**
   * @schema BackupStartCopyJobInput#DestinationBackupVaultArn
   */
  readonly destinationBackupVaultArn?: string;

  /**
   * @schema BackupStartCopyJobInput#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema BackupStartCopyJobInput#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema BackupStartCopyJobInput#Lifecycle
   */
  readonly lifecycle?: BackupLifecycle;

}

/**
 * Converts an object of type 'BackupStartCopyJobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupStartCopyJobInput(obj: BackupStartCopyJobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecoveryPointArn': obj.recoveryPointArn,
    'SourceBackupVaultName': obj.sourceBackupVaultName,
    'DestinationBackupVaultArn': obj.destinationBackupVaultArn,
    'IamRoleArn': obj.iamRoleArn,
    'IdempotencyToken': obj.idempotencyToken,
    'Lifecycle': toJson_BackupLifecycle(obj.lifecycle),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupStartCopyJobOutput
 */
export interface BackupStartCopyJobOutput {
  /**
   * @schema BackupStartCopyJobOutput#CopyJobId
   */
  readonly copyJobId?: string;

  /**
   * @schema BackupStartCopyJobOutput#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * Converts an object of type 'BackupStartCopyJobOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupStartCopyJobOutput(obj: BackupStartCopyJobOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CopyJobId': obj.copyJobId,
    'CreationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupStartRestoreJobInput
 */
export interface BackupStartRestoreJobInput {
  /**
   * @schema BackupStartRestoreJobInput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema BackupStartRestoreJobInput#Metadata
   */
  readonly metadata?: { [key: string]: string };

  /**
   * @schema BackupStartRestoreJobInput#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema BackupStartRestoreJobInput#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema BackupStartRestoreJobInput#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'BackupStartRestoreJobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupStartRestoreJobInput(obj: BackupStartRestoreJobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecoveryPointArn': obj.recoveryPointArn,
    'Metadata': ((obj.metadata) === undefined) ? undefined : (Object.entries(obj.metadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'IamRoleArn': obj.iamRoleArn,
    'IdempotencyToken': obj.idempotencyToken,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupStartRestoreJobOutput
 */
export interface BackupStartRestoreJobOutput {
  /**
   * @schema BackupStartRestoreJobOutput#RestoreJobId
   */
  readonly restoreJobId?: string;

}

/**
 * Converts an object of type 'BackupStartRestoreJobOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupStartRestoreJobOutput(obj: BackupStartRestoreJobOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RestoreJobId': obj.restoreJobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupStopBackupJobInput
 */
export interface BackupStopBackupJobInput {
  /**
   * @schema BackupStopBackupJobInput#BackupJobId
   */
  readonly backupJobId?: string;

}

/**
 * Converts an object of type 'BackupStopBackupJobInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupStopBackupJobInput(obj: BackupStopBackupJobInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupJobId': obj.backupJobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupTagResourceInput
 */
export interface BackupTagResourceInput {
  /**
   * @schema BackupTagResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema BackupTagResourceInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'BackupTagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupTagResourceInput(obj: BackupTagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupUntagResourceInput
 */
export interface BackupUntagResourceInput {
  /**
   * @schema BackupUntagResourceInput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema BackupUntagResourceInput#TagKeyList
   */
  readonly tagKeyList?: string[];

}

/**
 * Converts an object of type 'BackupUntagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupUntagResourceInput(obj: BackupUntagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeyList': obj.tagKeyList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupUpdateBackupPlanInput
 */
export interface BackupUpdateBackupPlanInput {
  /**
   * @schema BackupUpdateBackupPlanInput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupUpdateBackupPlanInput#BackupPlan
   */
  readonly backupPlan?: BackupBackupPlanInput;

}

/**
 * Converts an object of type 'BackupUpdateBackupPlanInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupUpdateBackupPlanInput(obj: BackupUpdateBackupPlanInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanId': obj.backupPlanId,
    'BackupPlan': toJson_BackupBackupPlanInput(obj.backupPlan),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupUpdateBackupPlanOutput
 */
export interface BackupUpdateBackupPlanOutput {
  /**
   * @schema BackupUpdateBackupPlanOutput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupUpdateBackupPlanOutput#BackupPlanArn
   */
  readonly backupPlanArn?: string;

  /**
   * @schema BackupUpdateBackupPlanOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupUpdateBackupPlanOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema BackupUpdateBackupPlanOutput#AdvancedBackupSettings
   */
  readonly advancedBackupSettings?: BackupAdvancedBackupSetting[];

}

/**
 * Converts an object of type 'BackupUpdateBackupPlanOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupUpdateBackupPlanOutput(obj: BackupUpdateBackupPlanOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanId': obj.backupPlanId,
    'BackupPlanArn': obj.backupPlanArn,
    'CreationDate': obj.creationDate,
    'VersionId': obj.versionId,
    'AdvancedBackupSettings': obj.advancedBackupSettings?.map(y => toJson_BackupAdvancedBackupSetting(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupUpdateGlobalSettingsInput
 */
export interface BackupUpdateGlobalSettingsInput {
  /**
   * @schema BackupUpdateGlobalSettingsInput#GlobalSettings
   */
  readonly globalSettings?: { [key: string]: string };

}

/**
 * Converts an object of type 'BackupUpdateGlobalSettingsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupUpdateGlobalSettingsInput(obj: BackupUpdateGlobalSettingsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GlobalSettings': ((obj.globalSettings) === undefined) ? undefined : (Object.entries(obj.globalSettings).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupUpdateRecoveryPointLifecycleInput
 */
export interface BackupUpdateRecoveryPointLifecycleInput {
  /**
   * @schema BackupUpdateRecoveryPointLifecycleInput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupUpdateRecoveryPointLifecycleInput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema BackupUpdateRecoveryPointLifecycleInput#Lifecycle
   */
  readonly lifecycle?: BackupLifecycle;

}

/**
 * Converts an object of type 'BackupUpdateRecoveryPointLifecycleInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupUpdateRecoveryPointLifecycleInput(obj: BackupUpdateRecoveryPointLifecycleInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
    'RecoveryPointArn': obj.recoveryPointArn,
    'Lifecycle': toJson_BackupLifecycle(obj.lifecycle),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupUpdateRecoveryPointLifecycleOutput
 */
export interface BackupUpdateRecoveryPointLifecycleOutput {
  /**
   * @schema BackupUpdateRecoveryPointLifecycleOutput#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema BackupUpdateRecoveryPointLifecycleOutput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema BackupUpdateRecoveryPointLifecycleOutput#Lifecycle
   */
  readonly lifecycle?: BackupLifecycle;

  /**
   * @schema BackupUpdateRecoveryPointLifecycleOutput#CalculatedLifecycle
   */
  readonly calculatedLifecycle?: BackupCalculatedLifecycle;

}

/**
 * Converts an object of type 'BackupUpdateRecoveryPointLifecycleOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupUpdateRecoveryPointLifecycleOutput(obj: BackupUpdateRecoveryPointLifecycleOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultArn': obj.backupVaultArn,
    'RecoveryPointArn': obj.recoveryPointArn,
    'Lifecycle': toJson_BackupLifecycle(obj.lifecycle),
    'CalculatedLifecycle': toJson_BackupCalculatedLifecycle(obj.calculatedLifecycle),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupUpdateRegionSettingsInput
 */
export interface BackupUpdateRegionSettingsInput {
  /**
   * @schema BackupUpdateRegionSettingsInput#ResourceTypeOptInPreference
   */
  readonly resourceTypeOptInPreference?: { [key: string]: boolean };

}

/**
 * Converts an object of type 'BackupUpdateRegionSettingsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupUpdateRegionSettingsInput(obj: BackupUpdateRegionSettingsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceTypeOptInPreference': ((obj.resourceTypeOptInPreference) === undefined) ? undefined : (Object.entries(obj.resourceTypeOptInPreference).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupBackupPlanInput
 */
export interface BackupBackupPlanInput {
  /**
   * @schema BackupBackupPlanInput#BackupPlanName
   */
  readonly backupPlanName?: string;

  /**
   * @schema BackupBackupPlanInput#Rules
   */
  readonly rules?: BackupBackupRuleInput[];

  /**
   * @schema BackupBackupPlanInput#AdvancedBackupSettings
   */
  readonly advancedBackupSettings?: BackupAdvancedBackupSetting[];

}

/**
 * Converts an object of type 'BackupBackupPlanInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupBackupPlanInput(obj: BackupBackupPlanInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanName': obj.backupPlanName,
    'Rules': obj.rules?.map(y => toJson_BackupBackupRuleInput(y)),
    'AdvancedBackupSettings': obj.advancedBackupSettings?.map(y => toJson_BackupAdvancedBackupSetting(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupAdvancedBackupSetting
 */
export interface BackupAdvancedBackupSetting {
  /**
   * @schema BackupAdvancedBackupSetting#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema BackupAdvancedBackupSetting#BackupOptions
   */
  readonly backupOptions?: { [key: string]: string };

}

/**
 * Converts an object of type 'BackupAdvancedBackupSetting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupAdvancedBackupSetting(obj: BackupAdvancedBackupSetting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceType': obj.resourceType,
    'BackupOptions': ((obj.backupOptions) === undefined) ? undefined : (Object.entries(obj.backupOptions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupBackupSelection
 */
export interface BackupBackupSelection {
  /**
   * @schema BackupBackupSelection#SelectionName
   */
  readonly selectionName?: string;

  /**
   * @schema BackupBackupSelection#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema BackupBackupSelection#Resources
   */
  readonly resources?: string[];

  /**
   * @schema BackupBackupSelection#ListOfTags
   */
  readonly listOfTags?: BackupCondition[];

}

/**
 * Converts an object of type 'BackupBackupSelection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupBackupSelection(obj: BackupBackupSelection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SelectionName': obj.selectionName,
    'IamRoleArn': obj.iamRoleArn,
    'Resources': obj.resources?.map(y => y),
    'ListOfTags': obj.listOfTags?.map(y => toJson_BackupCondition(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupRecoveryPointCreator
 */
export interface BackupRecoveryPointCreator {
  /**
   * @schema BackupRecoveryPointCreator#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupRecoveryPointCreator#BackupPlanArn
   */
  readonly backupPlanArn?: string;

  /**
   * @schema BackupRecoveryPointCreator#BackupPlanVersion
   */
  readonly backupPlanVersion?: string;

  /**
   * @schema BackupRecoveryPointCreator#BackupRuleId
   */
  readonly backupRuleId?: string;

}

/**
 * Converts an object of type 'BackupRecoveryPointCreator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupRecoveryPointCreator(obj: BackupRecoveryPointCreator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanId': obj.backupPlanId,
    'BackupPlanArn': obj.backupPlanArn,
    'BackupPlanVersion': obj.backupPlanVersion,
    'BackupRuleId': obj.backupRuleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupCopyJob
 */
export interface BackupCopyJob {
  /**
   * @schema BackupCopyJob#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BackupCopyJob#CopyJobId
   */
  readonly copyJobId?: string;

  /**
   * @schema BackupCopyJob#SourceBackupVaultArn
   */
  readonly sourceBackupVaultArn?: string;

  /**
   * @schema BackupCopyJob#SourceRecoveryPointArn
   */
  readonly sourceRecoveryPointArn?: string;

  /**
   * @schema BackupCopyJob#DestinationBackupVaultArn
   */
  readonly destinationBackupVaultArn?: string;

  /**
   * @schema BackupCopyJob#DestinationRecoveryPointArn
   */
  readonly destinationRecoveryPointArn?: string;

  /**
   * @schema BackupCopyJob#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema BackupCopyJob#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupCopyJob#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema BackupCopyJob#State
   */
  readonly state?: string;

  /**
   * @schema BackupCopyJob#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema BackupCopyJob#BackupSizeInBytes
   */
  readonly backupSizeInBytes?: number;

  /**
   * @schema BackupCopyJob#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema BackupCopyJob#CreatedBy
   */
  readonly createdBy?: BackupRecoveryPointCreator;

  /**
   * @schema BackupCopyJob#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'BackupCopyJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupCopyJob(obj: BackupCopyJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'CopyJobId': obj.copyJobId,
    'SourceBackupVaultArn': obj.sourceBackupVaultArn,
    'SourceRecoveryPointArn': obj.sourceRecoveryPointArn,
    'DestinationBackupVaultArn': obj.destinationBackupVaultArn,
    'DestinationRecoveryPointArn': obj.destinationRecoveryPointArn,
    'ResourceArn': obj.resourceArn,
    'CreationDate': obj.creationDate,
    'CompletionDate': obj.completionDate,
    'State': obj.state,
    'StatusMessage': obj.statusMessage,
    'BackupSizeInBytes': obj.backupSizeInBytes,
    'IamRoleArn': obj.iamRoleArn,
    'CreatedBy': toJson_BackupRecoveryPointCreator(obj.createdBy),
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupCalculatedLifecycle
 */
export interface BackupCalculatedLifecycle {
  /**
   * @schema BackupCalculatedLifecycle#MoveToColdStorageAt
   */
  readonly moveToColdStorageAt?: string;

  /**
   * @schema BackupCalculatedLifecycle#DeleteAt
   */
  readonly deleteAt?: string;

}

/**
 * Converts an object of type 'BackupCalculatedLifecycle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupCalculatedLifecycle(obj: BackupCalculatedLifecycle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MoveToColdStorageAt': obj.moveToColdStorageAt,
    'DeleteAt': obj.deleteAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupLifecycle
 */
export interface BackupLifecycle {
  /**
   * @schema BackupLifecycle#MoveToColdStorageAfterDays
   */
  readonly moveToColdStorageAfterDays?: number;

  /**
   * @schema BackupLifecycle#DeleteAfterDays
   */
  readonly deleteAfterDays?: number;

}

/**
 * Converts an object of type 'BackupLifecycle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupLifecycle(obj: BackupLifecycle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MoveToColdStorageAfterDays': obj.moveToColdStorageAfterDays,
    'DeleteAfterDays': obj.deleteAfterDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupBackupPlan
 */
export interface BackupBackupPlan {
  /**
   * @schema BackupBackupPlan#BackupPlanName
   */
  readonly backupPlanName?: string;

  /**
   * @schema BackupBackupPlan#Rules
   */
  readonly rules?: BackupBackupRule[];

  /**
   * @schema BackupBackupPlan#AdvancedBackupSettings
   */
  readonly advancedBackupSettings?: BackupAdvancedBackupSetting[];

}

/**
 * Converts an object of type 'BackupBackupPlan' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupBackupPlan(obj: BackupBackupPlan | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanName': obj.backupPlanName,
    'Rules': obj.rules?.map(y => toJson_BackupBackupRule(y)),
    'AdvancedBackupSettings': obj.advancedBackupSettings?.map(y => toJson_BackupAdvancedBackupSetting(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupBackupJob
 */
export interface BackupBackupJob {
  /**
   * @schema BackupBackupJob#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BackupBackupJob#BackupJobId
   */
  readonly backupJobId?: string;

  /**
   * @schema BackupBackupJob#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupBackupJob#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema BackupBackupJob#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema BackupBackupJob#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema BackupBackupJob#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupBackupJob#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema BackupBackupJob#State
   */
  readonly state?: string;

  /**
   * @schema BackupBackupJob#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema BackupBackupJob#PercentDone
   */
  readonly percentDone?: string;

  /**
   * @schema BackupBackupJob#BackupSizeInBytes
   */
  readonly backupSizeInBytes?: number;

  /**
   * @schema BackupBackupJob#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema BackupBackupJob#CreatedBy
   */
  readonly createdBy?: BackupRecoveryPointCreator;

  /**
   * @schema BackupBackupJob#ExpectedCompletionDate
   */
  readonly expectedCompletionDate?: string;

  /**
   * @schema BackupBackupJob#StartBy
   */
  readonly startBy?: string;

  /**
   * @schema BackupBackupJob#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema BackupBackupJob#BytesTransferred
   */
  readonly bytesTransferred?: number;

  /**
   * @schema BackupBackupJob#BackupOptions
   */
  readonly backupOptions?: { [key: string]: string };

  /**
   * @schema BackupBackupJob#BackupType
   */
  readonly backupType?: string;

}

/**
 * Converts an object of type 'BackupBackupJob' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupBackupJob(obj: BackupBackupJob | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'BackupJobId': obj.backupJobId,
    'BackupVaultName': obj.backupVaultName,
    'BackupVaultArn': obj.backupVaultArn,
    'RecoveryPointArn': obj.recoveryPointArn,
    'ResourceArn': obj.resourceArn,
    'CreationDate': obj.creationDate,
    'CompletionDate': obj.completionDate,
    'State': obj.state,
    'StatusMessage': obj.statusMessage,
    'PercentDone': obj.percentDone,
    'BackupSizeInBytes': obj.backupSizeInBytes,
    'IamRoleArn': obj.iamRoleArn,
    'CreatedBy': toJson_BackupRecoveryPointCreator(obj.createdBy),
    'ExpectedCompletionDate': obj.expectedCompletionDate,
    'StartBy': obj.startBy,
    'ResourceType': obj.resourceType,
    'BytesTransferred': obj.bytesTransferred,
    'BackupOptions': ((obj.backupOptions) === undefined) ? undefined : (Object.entries(obj.backupOptions).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'BackupType': obj.backupType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupBackupPlanTemplatesListMember
 */
export interface BackupBackupPlanTemplatesListMember {
  /**
   * @schema BackupBackupPlanTemplatesListMember#BackupPlanTemplateId
   */
  readonly backupPlanTemplateId?: string;

  /**
   * @schema BackupBackupPlanTemplatesListMember#BackupPlanTemplateName
   */
  readonly backupPlanTemplateName?: string;

}

/**
 * Converts an object of type 'BackupBackupPlanTemplatesListMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupBackupPlanTemplatesListMember(obj: BackupBackupPlanTemplatesListMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanTemplateId': obj.backupPlanTemplateId,
    'BackupPlanTemplateName': obj.backupPlanTemplateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupBackupPlansListMember
 */
export interface BackupBackupPlansListMember {
  /**
   * @schema BackupBackupPlansListMember#BackupPlanArn
   */
  readonly backupPlanArn?: string;

  /**
   * @schema BackupBackupPlansListMember#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupBackupPlansListMember#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupBackupPlansListMember#DeletionDate
   */
  readonly deletionDate?: string;

  /**
   * @schema BackupBackupPlansListMember#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema BackupBackupPlansListMember#BackupPlanName
   */
  readonly backupPlanName?: string;

  /**
   * @schema BackupBackupPlansListMember#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema BackupBackupPlansListMember#LastExecutionDate
   */
  readonly lastExecutionDate?: string;

  /**
   * @schema BackupBackupPlansListMember#AdvancedBackupSettings
   */
  readonly advancedBackupSettings?: BackupAdvancedBackupSetting[];

}

/**
 * Converts an object of type 'BackupBackupPlansListMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupBackupPlansListMember(obj: BackupBackupPlansListMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupPlanArn': obj.backupPlanArn,
    'BackupPlanId': obj.backupPlanId,
    'CreationDate': obj.creationDate,
    'DeletionDate': obj.deletionDate,
    'VersionId': obj.versionId,
    'BackupPlanName': obj.backupPlanName,
    'CreatorRequestId': obj.creatorRequestId,
    'LastExecutionDate': obj.lastExecutionDate,
    'AdvancedBackupSettings': obj.advancedBackupSettings?.map(y => toJson_BackupAdvancedBackupSetting(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupBackupSelectionsListMember
 */
export interface BackupBackupSelectionsListMember {
  /**
   * @schema BackupBackupSelectionsListMember#SelectionId
   */
  readonly selectionId?: string;

  /**
   * @schema BackupBackupSelectionsListMember#SelectionName
   */
  readonly selectionName?: string;

  /**
   * @schema BackupBackupSelectionsListMember#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupBackupSelectionsListMember#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupBackupSelectionsListMember#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema BackupBackupSelectionsListMember#IamRoleArn
   */
  readonly iamRoleArn?: string;

}

/**
 * Converts an object of type 'BackupBackupSelectionsListMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupBackupSelectionsListMember(obj: BackupBackupSelectionsListMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SelectionId': obj.selectionId,
    'SelectionName': obj.selectionName,
    'BackupPlanId': obj.backupPlanId,
    'CreationDate': obj.creationDate,
    'CreatorRequestId': obj.creatorRequestId,
    'IamRoleArn': obj.iamRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupBackupVaultListMember
 */
export interface BackupBackupVaultListMember {
  /**
   * @schema BackupBackupVaultListMember#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupBackupVaultListMember#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema BackupBackupVaultListMember#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupBackupVaultListMember#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema BackupBackupVaultListMember#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema BackupBackupVaultListMember#NumberOfRecoveryPoints
   */
  readonly numberOfRecoveryPoints?: number;

}

/**
 * Converts an object of type 'BackupBackupVaultListMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupBackupVaultListMember(obj: BackupBackupVaultListMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BackupVaultName': obj.backupVaultName,
    'BackupVaultArn': obj.backupVaultArn,
    'CreationDate': obj.creationDate,
    'EncryptionKeyArn': obj.encryptionKeyArn,
    'CreatorRequestId': obj.creatorRequestId,
    'NumberOfRecoveryPoints': obj.numberOfRecoveryPoints,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupProtectedResource
 */
export interface BackupProtectedResource {
  /**
   * @schema BackupProtectedResource#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema BackupProtectedResource#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema BackupProtectedResource#LastBackupTime
   */
  readonly lastBackupTime?: string;

}

/**
 * Converts an object of type 'BackupProtectedResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupProtectedResource(obj: BackupProtectedResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'ResourceType': obj.resourceType,
    'LastBackupTime': obj.lastBackupTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupRecoveryPointByBackupVault
 */
export interface BackupRecoveryPointByBackupVault {
  /**
   * @schema BackupRecoveryPointByBackupVault#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema BackupRecoveryPointByBackupVault#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupRecoveryPointByBackupVault#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema BackupRecoveryPointByBackupVault#SourceBackupVaultArn
   */
  readonly sourceBackupVaultArn?: string;

  /**
   * @schema BackupRecoveryPointByBackupVault#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema BackupRecoveryPointByBackupVault#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema BackupRecoveryPointByBackupVault#CreatedBy
   */
  readonly createdBy?: BackupRecoveryPointCreator;

  /**
   * @schema BackupRecoveryPointByBackupVault#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema BackupRecoveryPointByBackupVault#Status
   */
  readonly status?: string;

  /**
   * @schema BackupRecoveryPointByBackupVault#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupRecoveryPointByBackupVault#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema BackupRecoveryPointByBackupVault#BackupSizeInBytes
   */
  readonly backupSizeInBytes?: number;

  /**
   * @schema BackupRecoveryPointByBackupVault#CalculatedLifecycle
   */
  readonly calculatedLifecycle?: BackupCalculatedLifecycle;

  /**
   * @schema BackupRecoveryPointByBackupVault#Lifecycle
   */
  readonly lifecycle?: BackupLifecycle;

  /**
   * @schema BackupRecoveryPointByBackupVault#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema BackupRecoveryPointByBackupVault#IsEncrypted
   */
  readonly isEncrypted?: boolean;

  /**
   * @schema BackupRecoveryPointByBackupVault#LastRestoreTime
   */
  readonly lastRestoreTime?: string;

}

/**
 * Converts an object of type 'BackupRecoveryPointByBackupVault' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupRecoveryPointByBackupVault(obj: BackupRecoveryPointByBackupVault | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecoveryPointArn': obj.recoveryPointArn,
    'BackupVaultName': obj.backupVaultName,
    'BackupVaultArn': obj.backupVaultArn,
    'SourceBackupVaultArn': obj.sourceBackupVaultArn,
    'ResourceArn': obj.resourceArn,
    'ResourceType': obj.resourceType,
    'CreatedBy': toJson_BackupRecoveryPointCreator(obj.createdBy),
    'IamRoleArn': obj.iamRoleArn,
    'Status': obj.status,
    'CreationDate': obj.creationDate,
    'CompletionDate': obj.completionDate,
    'BackupSizeInBytes': obj.backupSizeInBytes,
    'CalculatedLifecycle': toJson_BackupCalculatedLifecycle(obj.calculatedLifecycle),
    'Lifecycle': toJson_BackupLifecycle(obj.lifecycle),
    'EncryptionKeyArn': obj.encryptionKeyArn,
    'IsEncrypted': obj.isEncrypted,
    'LastRestoreTime': obj.lastRestoreTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupRecoveryPointByResource
 */
export interface BackupRecoveryPointByResource {
  /**
   * @schema BackupRecoveryPointByResource#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema BackupRecoveryPointByResource#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupRecoveryPointByResource#Status
   */
  readonly status?: string;

  /**
   * @schema BackupRecoveryPointByResource#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema BackupRecoveryPointByResource#BackupSizeBytes
   */
  readonly backupSizeBytes?: number;

  /**
   * @schema BackupRecoveryPointByResource#BackupVaultName
   */
  readonly backupVaultName?: string;

}

/**
 * Converts an object of type 'BackupRecoveryPointByResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupRecoveryPointByResource(obj: BackupRecoveryPointByResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecoveryPointArn': obj.recoveryPointArn,
    'CreationDate': obj.creationDate,
    'Status': obj.status,
    'EncryptionKeyArn': obj.encryptionKeyArn,
    'BackupSizeBytes': obj.backupSizeBytes,
    'BackupVaultName': obj.backupVaultName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupRestoreJobsListMember
 */
export interface BackupRestoreJobsListMember {
  /**
   * @schema BackupRestoreJobsListMember#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BackupRestoreJobsListMember#RestoreJobId
   */
  readonly restoreJobId?: string;

  /**
   * @schema BackupRestoreJobsListMember#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema BackupRestoreJobsListMember#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupRestoreJobsListMember#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema BackupRestoreJobsListMember#Status
   */
  readonly status?: string;

  /**
   * @schema BackupRestoreJobsListMember#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema BackupRestoreJobsListMember#PercentDone
   */
  readonly percentDone?: string;

  /**
   * @schema BackupRestoreJobsListMember#BackupSizeInBytes
   */
  readonly backupSizeInBytes?: number;

  /**
   * @schema BackupRestoreJobsListMember#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema BackupRestoreJobsListMember#ExpectedCompletionTimeMinutes
   */
  readonly expectedCompletionTimeMinutes?: number;

  /**
   * @schema BackupRestoreJobsListMember#CreatedResourceArn
   */
  readonly createdResourceArn?: string;

  /**
   * @schema BackupRestoreJobsListMember#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'BackupRestoreJobsListMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupRestoreJobsListMember(obj: BackupRestoreJobsListMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'RestoreJobId': obj.restoreJobId,
    'RecoveryPointArn': obj.recoveryPointArn,
    'CreationDate': obj.creationDate,
    'CompletionDate': obj.completionDate,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'PercentDone': obj.percentDone,
    'BackupSizeInBytes': obj.backupSizeInBytes,
    'IamRoleArn': obj.iamRoleArn,
    'ExpectedCompletionTimeMinutes': obj.expectedCompletionTimeMinutes,
    'CreatedResourceArn': obj.createdResourceArn,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupBackupRuleInput
 */
export interface BackupBackupRuleInput {
  /**
   * @schema BackupBackupRuleInput#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema BackupBackupRuleInput#TargetBackupVaultName
   */
  readonly targetBackupVaultName?: string;

  /**
   * @schema BackupBackupRuleInput#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema BackupBackupRuleInput#StartWindowMinutes
   */
  readonly startWindowMinutes?: number;

  /**
   * @schema BackupBackupRuleInput#CompletionWindowMinutes
   */
  readonly completionWindowMinutes?: number;

  /**
   * @schema BackupBackupRuleInput#Lifecycle
   */
  readonly lifecycle?: BackupLifecycle;

  /**
   * @schema BackupBackupRuleInput#RecoveryPointTags
   */
  readonly recoveryPointTags?: { [key: string]: string };

  /**
   * @schema BackupBackupRuleInput#CopyActions
   */
  readonly copyActions?: BackupCopyAction[];

  /**
   * @schema BackupBackupRuleInput#EnableContinuousBackup
   */
  readonly enableContinuousBackup?: boolean;

}

/**
 * Converts an object of type 'BackupBackupRuleInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupBackupRuleInput(obj: BackupBackupRuleInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleName': obj.ruleName,
    'TargetBackupVaultName': obj.targetBackupVaultName,
    'ScheduleExpression': obj.scheduleExpression,
    'StartWindowMinutes': obj.startWindowMinutes,
    'CompletionWindowMinutes': obj.completionWindowMinutes,
    'Lifecycle': toJson_BackupLifecycle(obj.lifecycle),
    'RecoveryPointTags': ((obj.recoveryPointTags) === undefined) ? undefined : (Object.entries(obj.recoveryPointTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'CopyActions': obj.copyActions?.map(y => toJson_BackupCopyAction(y)),
    'EnableContinuousBackup': obj.enableContinuousBackup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupCondition
 */
export interface BackupCondition {
  /**
   * @schema BackupCondition#ConditionType
   */
  readonly conditionType?: string;

  /**
   * @schema BackupCondition#ConditionKey
   */
  readonly conditionKey?: string;

  /**
   * @schema BackupCondition#ConditionValue
   */
  readonly conditionValue?: string;

}

/**
 * Converts an object of type 'BackupCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupCondition(obj: BackupCondition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConditionType': obj.conditionType,
    'ConditionKey': obj.conditionKey,
    'ConditionValue': obj.conditionValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupBackupRule
 */
export interface BackupBackupRule {
  /**
   * @schema BackupBackupRule#RuleName
   */
  readonly ruleName?: string;

  /**
   * @schema BackupBackupRule#TargetBackupVaultName
   */
  readonly targetBackupVaultName?: string;

  /**
   * @schema BackupBackupRule#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema BackupBackupRule#StartWindowMinutes
   */
  readonly startWindowMinutes?: number;

  /**
   * @schema BackupBackupRule#CompletionWindowMinutes
   */
  readonly completionWindowMinutes?: number;

  /**
   * @schema BackupBackupRule#Lifecycle
   */
  readonly lifecycle?: BackupLifecycle;

  /**
   * @schema BackupBackupRule#RecoveryPointTags
   */
  readonly recoveryPointTags?: { [key: string]: string };

  /**
   * @schema BackupBackupRule#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema BackupBackupRule#CopyActions
   */
  readonly copyActions?: BackupCopyAction[];

  /**
   * @schema BackupBackupRule#EnableContinuousBackup
   */
  readonly enableContinuousBackup?: boolean;

}

/**
 * Converts an object of type 'BackupBackupRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupBackupRule(obj: BackupBackupRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RuleName': obj.ruleName,
    'TargetBackupVaultName': obj.targetBackupVaultName,
    'ScheduleExpression': obj.scheduleExpression,
    'StartWindowMinutes': obj.startWindowMinutes,
    'CompletionWindowMinutes': obj.completionWindowMinutes,
    'Lifecycle': toJson_BackupLifecycle(obj.lifecycle),
    'RecoveryPointTags': ((obj.recoveryPointTags) === undefined) ? undefined : (Object.entries(obj.recoveryPointTags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'RuleId': obj.ruleId,
    'CopyActions': obj.copyActions?.map(y => toJson_BackupCopyAction(y)),
    'EnableContinuousBackup': obj.enableContinuousBackup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BackupCopyAction
 */
export interface BackupCopyAction {
  /**
   * @schema BackupCopyAction#Lifecycle
   */
  readonly lifecycle?: BackupLifecycle;

  /**
   * @schema BackupCopyAction#DestinationBackupVaultArn
   */
  readonly destinationBackupVaultArn?: string;

}

/**
 * Converts an object of type 'BackupCopyAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BackupCopyAction(obj: BackupCopyAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Lifecycle': toJson_BackupLifecycle(obj.lifecycle),
    'DestinationBackupVaultArn': obj.destinationBackupVaultArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
