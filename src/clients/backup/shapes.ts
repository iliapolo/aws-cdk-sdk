/**
 * @schema BackupCreateBackupPlanInput
 */
export interface BackupCreateBackupPlanInput {
  /**
   * @schema BackupCreateBackupPlanInput#BackupPlan
   */
  readonly backupPlan: BackupBackupPlanInput;

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
 * @schema BackupCreateBackupSelectionInput
 */
export interface BackupCreateBackupSelectionInput {
  /**
   * @schema BackupCreateBackupSelectionInput#BackupPlanId
   */
  readonly backupPlanId: string;

  /**
   * @schema BackupCreateBackupSelectionInput#BackupSelection
   */
  readonly backupSelection: BackupBackupSelection;

  /**
   * @schema BackupCreateBackupSelectionInput#CreatorRequestId
   */
  readonly creatorRequestId?: string;

}

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
 * @schema BackupCreateBackupVaultInput
 */
export interface BackupCreateBackupVaultInput {
  /**
   * @schema BackupCreateBackupVaultInput#BackupVaultName
   */
  readonly backupVaultName: string;

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
 * @schema BackupDeleteBackupPlanInput
 */
export interface BackupDeleteBackupPlanInput {
  /**
   * @schema BackupDeleteBackupPlanInput#BackupPlanId
   */
  readonly backupPlanId: string;

}

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
 * @schema BackupDeleteBackupSelectionInput
 */
export interface BackupDeleteBackupSelectionInput {
  /**
   * @schema BackupDeleteBackupSelectionInput#BackupPlanId
   */
  readonly backupPlanId: string;

  /**
   * @schema BackupDeleteBackupSelectionInput#SelectionId
   */
  readonly selectionId: string;

}

/**
 * @schema BackupDeleteBackupVaultInput
 */
export interface BackupDeleteBackupVaultInput {
  /**
   * @schema BackupDeleteBackupVaultInput#BackupVaultName
   */
  readonly backupVaultName: string;

}

/**
 * @schema BackupDeleteBackupVaultAccessPolicyInput
 */
export interface BackupDeleteBackupVaultAccessPolicyInput {
  /**
   * @schema BackupDeleteBackupVaultAccessPolicyInput#BackupVaultName
   */
  readonly backupVaultName: string;

}

/**
 * @schema BackupDeleteBackupVaultNotificationsInput
 */
export interface BackupDeleteBackupVaultNotificationsInput {
  /**
   * @schema BackupDeleteBackupVaultNotificationsInput#BackupVaultName
   */
  readonly backupVaultName: string;

}

/**
 * @schema BackupDeleteRecoveryPointInput
 */
export interface BackupDeleteRecoveryPointInput {
  /**
   * @schema BackupDeleteRecoveryPointInput#BackupVaultName
   */
  readonly backupVaultName: string;

  /**
   * @schema BackupDeleteRecoveryPointInput#RecoveryPointArn
   */
  readonly recoveryPointArn: string;

}

/**
 * @schema BackupDescribeBackupJobInput
 */
export interface BackupDescribeBackupJobInput {
  /**
   * @schema BackupDescribeBackupJobInput#BackupJobId
   */
  readonly backupJobId: string;

}

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
 * @schema BackupDescribeBackupVaultInput
 */
export interface BackupDescribeBackupVaultInput {
  /**
   * @schema BackupDescribeBackupVaultInput#BackupVaultName
   */
  readonly backupVaultName: string;

}

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
 * @schema BackupDescribeCopyJobInput
 */
export interface BackupDescribeCopyJobInput {
  /**
   * @schema BackupDescribeCopyJobInput#CopyJobId
   */
  readonly copyJobId: string;

}

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
 * @schema BackupDescribeGlobalSettingsInput
 */
export interface BackupDescribeGlobalSettingsInput {
}

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
 * @schema BackupDescribeProtectedResourceInput
 */
export interface BackupDescribeProtectedResourceInput {
  /**
   * @schema BackupDescribeProtectedResourceInput#ResourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema BackupDescribeRecoveryPointInput
 */
export interface BackupDescribeRecoveryPointInput {
  /**
   * @schema BackupDescribeRecoveryPointInput#BackupVaultName
   */
  readonly backupVaultName: string;

  /**
   * @schema BackupDescribeRecoveryPointInput#RecoveryPointArn
   */
  readonly recoveryPointArn: string;

}

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
 * @schema BackupDescribeRegionSettingsInput
 */
export interface BackupDescribeRegionSettingsInput {
}

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
 * @schema BackupDescribeRestoreJobInput
 */
export interface BackupDescribeRestoreJobInput {
  /**
   * @schema BackupDescribeRestoreJobInput#RestoreJobId
   */
  readonly restoreJobId: string;

}

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
 * @schema BackupExportBackupPlanTemplateInput
 */
export interface BackupExportBackupPlanTemplateInput {
  /**
   * @schema BackupExportBackupPlanTemplateInput#BackupPlanId
   */
  readonly backupPlanId: string;

}

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
 * @schema BackupGetBackupPlanInput
 */
export interface BackupGetBackupPlanInput {
  /**
   * @schema BackupGetBackupPlanInput#BackupPlanId
   */
  readonly backupPlanId: string;

  /**
   * @schema BackupGetBackupPlanInput#VersionId
   */
  readonly versionId?: string;

}

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
 * @schema BackupGetBackupPlanFromJsonInput
 */
export interface BackupGetBackupPlanFromJsonInput {
  /**
   * @schema BackupGetBackupPlanFromJsonInput#BackupPlanTemplateJson
   */
  readonly backupPlanTemplateJson: string;

}

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
 * @schema BackupGetBackupPlanFromTemplateInput
 */
export interface BackupGetBackupPlanFromTemplateInput {
  /**
   * @schema BackupGetBackupPlanFromTemplateInput#BackupPlanTemplateId
   */
  readonly backupPlanTemplateId: string;

}

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
 * @schema BackupGetBackupSelectionInput
 */
export interface BackupGetBackupSelectionInput {
  /**
   * @schema BackupGetBackupSelectionInput#BackupPlanId
   */
  readonly backupPlanId: string;

  /**
   * @schema BackupGetBackupSelectionInput#SelectionId
   */
  readonly selectionId: string;

}

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
 * @schema BackupGetBackupVaultAccessPolicyInput
 */
export interface BackupGetBackupVaultAccessPolicyInput {
  /**
   * @schema BackupGetBackupVaultAccessPolicyInput#BackupVaultName
   */
  readonly backupVaultName: string;

}

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
 * @schema BackupGetBackupVaultNotificationsInput
 */
export interface BackupGetBackupVaultNotificationsInput {
  /**
   * @schema BackupGetBackupVaultNotificationsInput#BackupVaultName
   */
  readonly backupVaultName: string;

}

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
 * @schema BackupGetRecoveryPointRestoreMetadataInput
 */
export interface BackupGetRecoveryPointRestoreMetadataInput {
  /**
   * @schema BackupGetRecoveryPointRestoreMetadataInput#BackupVaultName
   */
  readonly backupVaultName: string;

  /**
   * @schema BackupGetRecoveryPointRestoreMetadataInput#RecoveryPointArn
   */
  readonly recoveryPointArn: string;

}

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
 * @schema BackupGetSupportedResourceTypesOutput
 */
export interface BackupGetSupportedResourceTypesOutput {
  /**
   * @schema BackupGetSupportedResourceTypesOutput#ResourceTypes
   */
  readonly resourceTypes?: string[];

}

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
 * @schema BackupListBackupPlanVersionsInput
 */
export interface BackupListBackupPlanVersionsInput {
  /**
   * @schema BackupListBackupPlanVersionsInput#BackupPlanId
   */
  readonly backupPlanId: string;

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
 * @schema BackupListBackupSelectionsInput
 */
export interface BackupListBackupSelectionsInput {
  /**
   * @schema BackupListBackupSelectionsInput#BackupPlanId
   */
  readonly backupPlanId: string;

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
 * @schema BackupListRecoveryPointsByBackupVaultInput
 */
export interface BackupListRecoveryPointsByBackupVaultInput {
  /**
   * @schema BackupListRecoveryPointsByBackupVaultInput#BackupVaultName
   */
  readonly backupVaultName: string;

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
 * @schema BackupListRecoveryPointsByResourceInput
 */
export interface BackupListRecoveryPointsByResourceInput {
  /**
   * @schema BackupListRecoveryPointsByResourceInput#ResourceArn
   */
  readonly resourceArn: string;

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
 * @schema BackupListTagsInput
 */
export interface BackupListTagsInput {
  /**
   * @schema BackupListTagsInput#ResourceArn
   */
  readonly resourceArn: string;

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
 * @schema BackupPutBackupVaultAccessPolicyInput
 */
export interface BackupPutBackupVaultAccessPolicyInput {
  /**
   * @schema BackupPutBackupVaultAccessPolicyInput#BackupVaultName
   */
  readonly backupVaultName: string;

  /**
   * @schema BackupPutBackupVaultAccessPolicyInput#Policy
   */
  readonly policy?: string;

}

/**
 * @schema BackupPutBackupVaultNotificationsInput
 */
export interface BackupPutBackupVaultNotificationsInput {
  /**
   * @schema BackupPutBackupVaultNotificationsInput#BackupVaultName
   */
  readonly backupVaultName: string;

  /**
   * @schema BackupPutBackupVaultNotificationsInput#SNSTopicArn
   */
  readonly snsTopicArn: string;

  /**
   * @schema BackupPutBackupVaultNotificationsInput#BackupVaultEvents
   */
  readonly backupVaultEvents: string[];

}

/**
 * @schema BackupStartBackupJobInput
 */
export interface BackupStartBackupJobInput {
  /**
   * @schema BackupStartBackupJobInput#BackupVaultName
   */
  readonly backupVaultName: string;

  /**
   * @schema BackupStartBackupJobInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema BackupStartBackupJobInput#IamRoleArn
   */
  readonly iamRoleArn: string;

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
 * @schema BackupStartCopyJobInput
 */
export interface BackupStartCopyJobInput {
  /**
   * @schema BackupStartCopyJobInput#RecoveryPointArn
   */
  readonly recoveryPointArn: string;

  /**
   * @schema BackupStartCopyJobInput#SourceBackupVaultName
   */
  readonly sourceBackupVaultName: string;

  /**
   * @schema BackupStartCopyJobInput#DestinationBackupVaultArn
   */
  readonly destinationBackupVaultArn: string;

  /**
   * @schema BackupStartCopyJobInput#IamRoleArn
   */
  readonly iamRoleArn: string;

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
 * @schema BackupStartRestoreJobInput
 */
export interface BackupStartRestoreJobInput {
  /**
   * @schema BackupStartRestoreJobInput#RecoveryPointArn
   */
  readonly recoveryPointArn: string;

  /**
   * @schema BackupStartRestoreJobInput#Metadata
   */
  readonly metadata: { [key: string]: string };

  /**
   * @schema BackupStartRestoreJobInput#IamRoleArn
   */
  readonly iamRoleArn: string;

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
 * @schema BackupStartRestoreJobOutput
 */
export interface BackupStartRestoreJobOutput {
  /**
   * @schema BackupStartRestoreJobOutput#RestoreJobId
   */
  readonly restoreJobId?: string;

}

/**
 * @schema BackupStopBackupJobInput
 */
export interface BackupStopBackupJobInput {
  /**
   * @schema BackupStopBackupJobInput#BackupJobId
   */
  readonly backupJobId: string;

}

/**
 * @schema BackupTagResourceInput
 */
export interface BackupTagResourceInput {
  /**
   * @schema BackupTagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema BackupTagResourceInput#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema BackupUntagResourceInput
 */
export interface BackupUntagResourceInput {
  /**
   * @schema BackupUntagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema BackupUntagResourceInput#TagKeyList
   */
  readonly tagKeyList: string[];

}

/**
 * @schema BackupUpdateBackupPlanInput
 */
export interface BackupUpdateBackupPlanInput {
  /**
   * @schema BackupUpdateBackupPlanInput#BackupPlanId
   */
  readonly backupPlanId: string;

  /**
   * @schema BackupUpdateBackupPlanInput#BackupPlan
   */
  readonly backupPlan: BackupBackupPlanInput;

}

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
 * @schema BackupUpdateGlobalSettingsInput
 */
export interface BackupUpdateGlobalSettingsInput {
  /**
   * @schema BackupUpdateGlobalSettingsInput#GlobalSettings
   */
  readonly globalSettings?: { [key: string]: string };

}

/**
 * @schema BackupUpdateRecoveryPointLifecycleInput
 */
export interface BackupUpdateRecoveryPointLifecycleInput {
  /**
   * @schema BackupUpdateRecoveryPointLifecycleInput#BackupVaultName
   */
  readonly backupVaultName: string;

  /**
   * @schema BackupUpdateRecoveryPointLifecycleInput#RecoveryPointArn
   */
  readonly recoveryPointArn: string;

  /**
   * @schema BackupUpdateRecoveryPointLifecycleInput#Lifecycle
   */
  readonly lifecycle?: BackupLifecycle;

}

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
 * @schema BackupUpdateRegionSettingsInput
 */
export interface BackupUpdateRegionSettingsInput {
  /**
   * @schema BackupUpdateRegionSettingsInput#ResourceTypeOptInPreference
   */
  readonly resourceTypeOptInPreference?: { [key: string]: boolean };

}

/**
 * @schema BackupBackupPlanInput
 */
export interface BackupBackupPlanInput {
  /**
   * @schema BackupBackupPlanInput#BackupPlanName
   */
  readonly backupPlanName: string;

  /**
   * @schema BackupBackupPlanInput#Rules
   */
  readonly rules: BackupBackupRuleInput[];

  /**
   * @schema BackupBackupPlanInput#AdvancedBackupSettings
   */
  readonly advancedBackupSettings?: BackupAdvancedBackupSetting[];

}

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
 * @schema BackupBackupSelection
 */
export interface BackupBackupSelection {
  /**
   * @schema BackupBackupSelection#SelectionName
   */
  readonly selectionName: string;

  /**
   * @schema BackupBackupSelection#IamRoleArn
   */
  readonly iamRoleArn: string;

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
 * @schema BackupBackupPlan
 */
export interface BackupBackupPlan {
  /**
   * @schema BackupBackupPlan#BackupPlanName
   */
  readonly backupPlanName: string;

  /**
   * @schema BackupBackupPlan#Rules
   */
  readonly rules: BackupBackupRule[];

  /**
   * @schema BackupBackupPlan#AdvancedBackupSettings
   */
  readonly advancedBackupSettings?: BackupAdvancedBackupSetting[];

}

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
 * @schema BackupBackupRuleInput
 */
export interface BackupBackupRuleInput {
  /**
   * @schema BackupBackupRuleInput#RuleName
   */
  readonly ruleName: string;

  /**
   * @schema BackupBackupRuleInput#TargetBackupVaultName
   */
  readonly targetBackupVaultName: string;

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

}

/**
 * @schema BackupCondition
 */
export interface BackupCondition {
  /**
   * @schema BackupCondition#ConditionType
   */
  readonly conditionType: string;

  /**
   * @schema BackupCondition#ConditionKey
   */
  readonly conditionKey: string;

  /**
   * @schema BackupCondition#ConditionValue
   */
  readonly conditionValue: string;

}

/**
 * @schema BackupBackupRule
 */
export interface BackupBackupRule {
  /**
   * @schema BackupBackupRule#RuleName
   */
  readonly ruleName: string;

  /**
   * @schema BackupBackupRule#TargetBackupVaultName
   */
  readonly targetBackupVaultName: string;

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

}

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
  readonly destinationBackupVaultArn: string;

}
