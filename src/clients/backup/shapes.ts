/**
 * @schema CreateBackupPlanInput
 */
export interface CreateBackupPlanInput {
  /**
   * @schema CreateBackupPlanInput#BackupPlan
   */
  readonly backupPlan: BackupPlanInput;

  /**
   * @schema CreateBackupPlanInput#BackupPlanTags
   */
  readonly backupPlanTags?: { [key: string]: string };

  /**
   * @schema CreateBackupPlanInput#CreatorRequestId
   */
  readonly creatorRequestId?: string;

}

/**
 * @schema CreateBackupPlanOutput
 */
export interface CreateBackupPlanOutput {
  /**
   * @schema CreateBackupPlanOutput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema CreateBackupPlanOutput#BackupPlanArn
   */
  readonly backupPlanArn?: string;

  /**
   * @schema CreateBackupPlanOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema CreateBackupPlanOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema CreateBackupPlanOutput#AdvancedBackupSettings
   */
  readonly advancedBackupSettings?: AdvancedBackupSetting[];

}

/**
 * @schema CreateBackupSelectionInput
 */
export interface CreateBackupSelectionInput {
  /**
   * @schema CreateBackupSelectionInput#BackupPlanId
   */
  readonly backupPlanId: string;

  /**
   * @schema CreateBackupSelectionInput#BackupSelection
   */
  readonly backupSelection: BackupSelection;

  /**
   * @schema CreateBackupSelectionInput#CreatorRequestId
   */
  readonly creatorRequestId?: string;

}

/**
 * @schema CreateBackupSelectionOutput
 */
export interface CreateBackupSelectionOutput {
  /**
   * @schema CreateBackupSelectionOutput#SelectionId
   */
  readonly selectionId?: string;

  /**
   * @schema CreateBackupSelectionOutput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema CreateBackupSelectionOutput#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema CreateBackupVaultInput
 */
export interface CreateBackupVaultInput {
  /**
   * @schema CreateBackupVaultInput#BackupVaultName
   */
  readonly backupVaultName: string;

  /**
   * @schema CreateBackupVaultInput#BackupVaultTags
   */
  readonly backupVaultTags?: { [key: string]: string };

  /**
   * @schema CreateBackupVaultInput#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema CreateBackupVaultInput#CreatorRequestId
   */
  readonly creatorRequestId?: string;

}

/**
 * @schema CreateBackupVaultOutput
 */
export interface CreateBackupVaultOutput {
  /**
   * @schema CreateBackupVaultOutput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema CreateBackupVaultOutput#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema CreateBackupVaultOutput#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema DeleteBackupPlanInput
 */
export interface DeleteBackupPlanInput {
  /**
   * @schema DeleteBackupPlanInput#BackupPlanId
   */
  readonly backupPlanId: string;

}

/**
 * @schema DeleteBackupPlanOutput
 */
export interface DeleteBackupPlanOutput {
  /**
   * @schema DeleteBackupPlanOutput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema DeleteBackupPlanOutput#BackupPlanArn
   */
  readonly backupPlanArn?: string;

  /**
   * @schema DeleteBackupPlanOutput#DeletionDate
   */
  readonly deletionDate?: string;

  /**
   * @schema DeleteBackupPlanOutput#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema DeleteBackupSelectionInput
 */
export interface DeleteBackupSelectionInput {
  /**
   * @schema DeleteBackupSelectionInput#BackupPlanId
   */
  readonly backupPlanId: string;

  /**
   * @schema DeleteBackupSelectionInput#SelectionId
   */
  readonly selectionId: string;

}

/**
 * @schema DeleteBackupVaultInput
 */
export interface DeleteBackupVaultInput {
  /**
   * @schema DeleteBackupVaultInput#BackupVaultName
   */
  readonly backupVaultName: string;

}

/**
 * @schema DeleteBackupVaultAccessPolicyInput
 */
export interface DeleteBackupVaultAccessPolicyInput {
  /**
   * @schema DeleteBackupVaultAccessPolicyInput#BackupVaultName
   */
  readonly backupVaultName: string;

}

/**
 * @schema DeleteBackupVaultNotificationsInput
 */
export interface DeleteBackupVaultNotificationsInput {
  /**
   * @schema DeleteBackupVaultNotificationsInput#BackupVaultName
   */
  readonly backupVaultName: string;

}

/**
 * @schema DeleteRecoveryPointInput
 */
export interface DeleteRecoveryPointInput {
  /**
   * @schema DeleteRecoveryPointInput#BackupVaultName
   */
  readonly backupVaultName: string;

  /**
   * @schema DeleteRecoveryPointInput#RecoveryPointArn
   */
  readonly recoveryPointArn: string;

}

/**
 * @schema DescribeBackupJobInput
 */
export interface DescribeBackupJobInput {
  /**
   * @schema DescribeBackupJobInput#BackupJobId
   */
  readonly backupJobId: string;

}

/**
 * @schema DescribeBackupJobOutput
 */
export interface DescribeBackupJobOutput {
  /**
   * @schema DescribeBackupJobOutput#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema DescribeBackupJobOutput#BackupJobId
   */
  readonly backupJobId?: string;

  /**
   * @schema DescribeBackupJobOutput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema DescribeBackupJobOutput#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema DescribeBackupJobOutput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema DescribeBackupJobOutput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DescribeBackupJobOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema DescribeBackupJobOutput#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema DescribeBackupJobOutput#State
   */
  readonly state?: string;

  /**
   * @schema DescribeBackupJobOutput#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema DescribeBackupJobOutput#PercentDone
   */
  readonly percentDone?: string;

  /**
   * @schema DescribeBackupJobOutput#BackupSizeInBytes
   */
  readonly backupSizeInBytes?: number;

  /**
   * @schema DescribeBackupJobOutput#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema DescribeBackupJobOutput#CreatedBy
   */
  readonly createdBy?: RecoveryPointCreator;

  /**
   * @schema DescribeBackupJobOutput#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema DescribeBackupJobOutput#BytesTransferred
   */
  readonly bytesTransferred?: number;

  /**
   * @schema DescribeBackupJobOutput#ExpectedCompletionDate
   */
  readonly expectedCompletionDate?: string;

  /**
   * @schema DescribeBackupJobOutput#StartBy
   */
  readonly startBy?: string;

  /**
   * @schema DescribeBackupJobOutput#BackupOptions
   */
  readonly backupOptions?: { [key: string]: string };

  /**
   * @schema DescribeBackupJobOutput#BackupType
   */
  readonly backupType?: string;

}

/**
 * @schema DescribeBackupVaultInput
 */
export interface DescribeBackupVaultInput {
  /**
   * @schema DescribeBackupVaultInput#BackupVaultName
   */
  readonly backupVaultName: string;

}

/**
 * @schema DescribeBackupVaultOutput
 */
export interface DescribeBackupVaultOutput {
  /**
   * @schema DescribeBackupVaultOutput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema DescribeBackupVaultOutput#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema DescribeBackupVaultOutput#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema DescribeBackupVaultOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema DescribeBackupVaultOutput#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema DescribeBackupVaultOutput#NumberOfRecoveryPoints
   */
  readonly numberOfRecoveryPoints?: number;

}

/**
 * @schema DescribeCopyJobInput
 */
export interface DescribeCopyJobInput {
  /**
   * @schema DescribeCopyJobInput#CopyJobId
   */
  readonly copyJobId: string;

}

/**
 * @schema DescribeCopyJobOutput
 */
export interface DescribeCopyJobOutput {
  /**
   * @schema DescribeCopyJobOutput#CopyJob
   */
  readonly copyJob?: CopyJob;

}

/**
 * @schema DescribeGlobalSettingsInput
 */
export interface DescribeGlobalSettingsInput {
}

/**
 * @schema DescribeGlobalSettingsOutput
 */
export interface DescribeGlobalSettingsOutput {
  /**
   * @schema DescribeGlobalSettingsOutput#GlobalSettings
   */
  readonly globalSettings?: { [key: string]: string };

  /**
   * @schema DescribeGlobalSettingsOutput#LastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * @schema DescribeProtectedResourceInput
 */
export interface DescribeProtectedResourceInput {
  /**
   * @schema DescribeProtectedResourceInput#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema DescribeProtectedResourceOutput
 */
export interface DescribeProtectedResourceOutput {
  /**
   * @schema DescribeProtectedResourceOutput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DescribeProtectedResourceOutput#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema DescribeProtectedResourceOutput#LastBackupTime
   */
  readonly lastBackupTime?: string;

}

/**
 * @schema DescribeRecoveryPointInput
 */
export interface DescribeRecoveryPointInput {
  /**
   * @schema DescribeRecoveryPointInput#BackupVaultName
   */
  readonly backupVaultName: string;

  /**
   * @schema DescribeRecoveryPointInput#RecoveryPointArn
   */
  readonly recoveryPointArn: string;

}

/**
 * @schema DescribeRecoveryPointOutput
 */
export interface DescribeRecoveryPointOutput {
  /**
   * @schema DescribeRecoveryPointOutput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema DescribeRecoveryPointOutput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema DescribeRecoveryPointOutput#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema DescribeRecoveryPointOutput#SourceBackupVaultArn
   */
  readonly sourceBackupVaultArn?: string;

  /**
   * @schema DescribeRecoveryPointOutput#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DescribeRecoveryPointOutput#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema DescribeRecoveryPointOutput#CreatedBy
   */
  readonly createdBy?: RecoveryPointCreator;

  /**
   * @schema DescribeRecoveryPointOutput#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema DescribeRecoveryPointOutput#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeRecoveryPointOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema DescribeRecoveryPointOutput#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema DescribeRecoveryPointOutput#BackupSizeInBytes
   */
  readonly backupSizeInBytes?: number;

  /**
   * @schema DescribeRecoveryPointOutput#CalculatedLifecycle
   */
  readonly calculatedLifecycle?: CalculatedLifecycle;

  /**
   * @schema DescribeRecoveryPointOutput#Lifecycle
   */
  readonly lifecycle?: Lifecycle;

  /**
   * @schema DescribeRecoveryPointOutput#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema DescribeRecoveryPointOutput#IsEncrypted
   */
  readonly isEncrypted?: boolean;

  /**
   * @schema DescribeRecoveryPointOutput#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema DescribeRecoveryPointOutput#LastRestoreTime
   */
  readonly lastRestoreTime?: string;

}

/**
 * @schema DescribeRegionSettingsInput
 */
export interface DescribeRegionSettingsInput {
}

/**
 * @schema DescribeRegionSettingsOutput
 */
export interface DescribeRegionSettingsOutput {
  /**
   * @schema DescribeRegionSettingsOutput#ResourceTypeOptInPreference
   */
  readonly resourceTypeOptInPreference?: { [key: string]: boolean };

}

/**
 * @schema DescribeRestoreJobInput
 */
export interface DescribeRestoreJobInput {
  /**
   * @schema DescribeRestoreJobInput#RestoreJobId
   */
  readonly restoreJobId: string;

}

/**
 * @schema DescribeRestoreJobOutput
 */
export interface DescribeRestoreJobOutput {
  /**
   * @schema DescribeRestoreJobOutput#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema DescribeRestoreJobOutput#RestoreJobId
   */
  readonly restoreJobId?: string;

  /**
   * @schema DescribeRestoreJobOutput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema DescribeRestoreJobOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema DescribeRestoreJobOutput#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema DescribeRestoreJobOutput#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeRestoreJobOutput#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema DescribeRestoreJobOutput#PercentDone
   */
  readonly percentDone?: string;

  /**
   * @schema DescribeRestoreJobOutput#BackupSizeInBytes
   */
  readonly backupSizeInBytes?: number;

  /**
   * @schema DescribeRestoreJobOutput#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema DescribeRestoreJobOutput#ExpectedCompletionTimeMinutes
   */
  readonly expectedCompletionTimeMinutes?: number;

  /**
   * @schema DescribeRestoreJobOutput#CreatedResourceArn
   */
  readonly createdResourceArn?: string;

  /**
   * @schema DescribeRestoreJobOutput#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema ExportBackupPlanTemplateInput
 */
export interface ExportBackupPlanTemplateInput {
  /**
   * @schema ExportBackupPlanTemplateInput#BackupPlanId
   */
  readonly backupPlanId: string;

}

/**
 * @schema ExportBackupPlanTemplateOutput
 */
export interface ExportBackupPlanTemplateOutput {
  /**
   * @schema ExportBackupPlanTemplateOutput#BackupPlanTemplateJson
   */
  readonly backupPlanTemplateJson?: string;

}

/**
 * @schema GetBackupPlanInput
 */
export interface GetBackupPlanInput {
  /**
   * @schema GetBackupPlanInput#BackupPlanId
   */
  readonly backupPlanId: string;

  /**
   * @schema GetBackupPlanInput#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema GetBackupPlanOutput
 */
export interface GetBackupPlanOutput {
  /**
   * @schema GetBackupPlanOutput#BackupPlan
   */
  readonly backupPlan?: BackupPlan;

  /**
   * @schema GetBackupPlanOutput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema GetBackupPlanOutput#BackupPlanArn
   */
  readonly backupPlanArn?: string;

  /**
   * @schema GetBackupPlanOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema GetBackupPlanOutput#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema GetBackupPlanOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema GetBackupPlanOutput#DeletionDate
   */
  readonly deletionDate?: string;

  /**
   * @schema GetBackupPlanOutput#LastExecutionDate
   */
  readonly lastExecutionDate?: string;

  /**
   * @schema GetBackupPlanOutput#AdvancedBackupSettings
   */
  readonly advancedBackupSettings?: AdvancedBackupSetting[];

}

/**
 * @schema GetBackupPlanFromJsonInput
 */
export interface GetBackupPlanFromJsonInput {
  /**
   * @schema GetBackupPlanFromJsonInput#BackupPlanTemplateJson
   */
  readonly backupPlanTemplateJson: string;

}

/**
 * @schema GetBackupPlanFromJsonOutput
 */
export interface GetBackupPlanFromJsonOutput {
  /**
   * @schema GetBackupPlanFromJsonOutput#BackupPlan
   */
  readonly backupPlan?: BackupPlan;

}

/**
 * @schema GetBackupPlanFromTemplateInput
 */
export interface GetBackupPlanFromTemplateInput {
  /**
   * @schema GetBackupPlanFromTemplateInput#BackupPlanTemplateId
   */
  readonly backupPlanTemplateId: string;

}

/**
 * @schema GetBackupPlanFromTemplateOutput
 */
export interface GetBackupPlanFromTemplateOutput {
  /**
   * @schema GetBackupPlanFromTemplateOutput#BackupPlanDocument
   */
  readonly backupPlanDocument?: BackupPlan;

}

/**
 * @schema GetBackupSelectionInput
 */
export interface GetBackupSelectionInput {
  /**
   * @schema GetBackupSelectionInput#BackupPlanId
   */
  readonly backupPlanId: string;

  /**
   * @schema GetBackupSelectionInput#SelectionId
   */
  readonly selectionId: string;

}

/**
 * @schema GetBackupSelectionOutput
 */
export interface GetBackupSelectionOutput {
  /**
   * @schema GetBackupSelectionOutput#BackupSelection
   */
  readonly backupSelection?: BackupSelection;

  /**
   * @schema GetBackupSelectionOutput#SelectionId
   */
  readonly selectionId?: string;

  /**
   * @schema GetBackupSelectionOutput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema GetBackupSelectionOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema GetBackupSelectionOutput#CreatorRequestId
   */
  readonly creatorRequestId?: string;

}

/**
 * @schema GetBackupVaultAccessPolicyInput
 */
export interface GetBackupVaultAccessPolicyInput {
  /**
   * @schema GetBackupVaultAccessPolicyInput#BackupVaultName
   */
  readonly backupVaultName: string;

}

/**
 * @schema GetBackupVaultAccessPolicyOutput
 */
export interface GetBackupVaultAccessPolicyOutput {
  /**
   * @schema GetBackupVaultAccessPolicyOutput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema GetBackupVaultAccessPolicyOutput#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema GetBackupVaultAccessPolicyOutput#Policy
   */
  readonly policy?: string;

}

/**
 * @schema GetBackupVaultNotificationsInput
 */
export interface GetBackupVaultNotificationsInput {
  /**
   * @schema GetBackupVaultNotificationsInput#BackupVaultName
   */
  readonly backupVaultName: string;

}

/**
 * @schema GetBackupVaultNotificationsOutput
 */
export interface GetBackupVaultNotificationsOutput {
  /**
   * @schema GetBackupVaultNotificationsOutput#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema GetBackupVaultNotificationsOutput#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema GetBackupVaultNotificationsOutput#SNSTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema GetBackupVaultNotificationsOutput#BackupVaultEvents
   */
  readonly backupVaultEvents?: string[];

}

/**
 * @schema GetRecoveryPointRestoreMetadataInput
 */
export interface GetRecoveryPointRestoreMetadataInput {
  /**
   * @schema GetRecoveryPointRestoreMetadataInput#BackupVaultName
   */
  readonly backupVaultName: string;

  /**
   * @schema GetRecoveryPointRestoreMetadataInput#RecoveryPointArn
   */
  readonly recoveryPointArn: string;

}

/**
 * @schema GetRecoveryPointRestoreMetadataOutput
 */
export interface GetRecoveryPointRestoreMetadataOutput {
  /**
   * @schema GetRecoveryPointRestoreMetadataOutput#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema GetRecoveryPointRestoreMetadataOutput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema GetRecoveryPointRestoreMetadataOutput#RestoreMetadata
   */
  readonly restoreMetadata?: { [key: string]: string };

}

/**
 * @schema GetSupportedResourceTypesOutput
 */
export interface GetSupportedResourceTypesOutput {
  /**
   * @schema GetSupportedResourceTypesOutput#ResourceTypes
   */
  readonly resourceTypes?: string[];

}

/**
 * @schema ListBackupJobsInput
 */
export interface ListBackupJobsInput {
  /**
   * @schema ListBackupJobsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListBackupJobsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListBackupJobsInput#ByResourceArn
   */
  readonly byResourceArn?: string;

  /**
   * @schema ListBackupJobsInput#ByState
   */
  readonly byState?: string;

  /**
   * @schema ListBackupJobsInput#ByBackupVaultName
   */
  readonly byBackupVaultName?: string;

  /**
   * @schema ListBackupJobsInput#ByCreatedBefore
   */
  readonly byCreatedBefore?: string;

  /**
   * @schema ListBackupJobsInput#ByCreatedAfter
   */
  readonly byCreatedAfter?: string;

  /**
   * @schema ListBackupJobsInput#ByResourceType
   */
  readonly byResourceType?: string;

  /**
   * @schema ListBackupJobsInput#ByAccountId
   */
  readonly byAccountId?: string;

}

/**
 * @schema ListBackupJobsOutput
 */
export interface ListBackupJobsOutput {
  /**
   * @schema ListBackupJobsOutput#BackupJobs
   */
  readonly backupJobs?: BackupJob[];

  /**
   * @schema ListBackupJobsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListBackupPlanTemplatesInput
 */
export interface ListBackupPlanTemplatesInput {
  /**
   * @schema ListBackupPlanTemplatesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListBackupPlanTemplatesInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListBackupPlanTemplatesOutput
 */
export interface ListBackupPlanTemplatesOutput {
  /**
   * @schema ListBackupPlanTemplatesOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListBackupPlanTemplatesOutput#BackupPlanTemplatesList
   */
  readonly backupPlanTemplatesList?: BackupPlanTemplatesListMember[];

}

/**
 * @schema ListBackupPlanVersionsInput
 */
export interface ListBackupPlanVersionsInput {
  /**
   * @schema ListBackupPlanVersionsInput#BackupPlanId
   */
  readonly backupPlanId: string;

  /**
   * @schema ListBackupPlanVersionsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListBackupPlanVersionsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListBackupPlanVersionsOutput
 */
export interface ListBackupPlanVersionsOutput {
  /**
   * @schema ListBackupPlanVersionsOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListBackupPlanVersionsOutput#BackupPlanVersionsList
   */
  readonly backupPlanVersionsList?: BackupPlansListMember[];

}

/**
 * @schema ListBackupPlansInput
 */
export interface ListBackupPlansInput {
  /**
   * @schema ListBackupPlansInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListBackupPlansInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListBackupPlansInput#IncludeDeleted
   */
  readonly includeDeleted?: boolean;

}

/**
 * @schema ListBackupPlansOutput
 */
export interface ListBackupPlansOutput {
  /**
   * @schema ListBackupPlansOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListBackupPlansOutput#BackupPlansList
   */
  readonly backupPlansList?: BackupPlansListMember[];

}

/**
 * @schema ListBackupSelectionsInput
 */
export interface ListBackupSelectionsInput {
  /**
   * @schema ListBackupSelectionsInput#BackupPlanId
   */
  readonly backupPlanId: string;

  /**
   * @schema ListBackupSelectionsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListBackupSelectionsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListBackupSelectionsOutput
 */
export interface ListBackupSelectionsOutput {
  /**
   * @schema ListBackupSelectionsOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListBackupSelectionsOutput#BackupSelectionsList
   */
  readonly backupSelectionsList?: BackupSelectionsListMember[];

}

/**
 * @schema ListBackupVaultsInput
 */
export interface ListBackupVaultsInput {
  /**
   * @schema ListBackupVaultsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListBackupVaultsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListBackupVaultsOutput
 */
export interface ListBackupVaultsOutput {
  /**
   * @schema ListBackupVaultsOutput#BackupVaultList
   */
  readonly backupVaultList?: BackupVaultListMember[];

  /**
   * @schema ListBackupVaultsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCopyJobsInput
 */
export interface ListCopyJobsInput {
  /**
   * @schema ListCopyJobsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListCopyJobsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListCopyJobsInput#ByResourceArn
   */
  readonly byResourceArn?: string;

  /**
   * @schema ListCopyJobsInput#ByState
   */
  readonly byState?: string;

  /**
   * @schema ListCopyJobsInput#ByCreatedBefore
   */
  readonly byCreatedBefore?: string;

  /**
   * @schema ListCopyJobsInput#ByCreatedAfter
   */
  readonly byCreatedAfter?: string;

  /**
   * @schema ListCopyJobsInput#ByResourceType
   */
  readonly byResourceType?: string;

  /**
   * @schema ListCopyJobsInput#ByDestinationVaultArn
   */
  readonly byDestinationVaultArn?: string;

  /**
   * @schema ListCopyJobsInput#ByAccountId
   */
  readonly byAccountId?: string;

}

/**
 * @schema ListCopyJobsOutput
 */
export interface ListCopyJobsOutput {
  /**
   * @schema ListCopyJobsOutput#CopyJobs
   */
  readonly copyJobs?: CopyJob[];

  /**
   * @schema ListCopyJobsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProtectedResourcesInput
 */
export interface ListProtectedResourcesInput {
  /**
   * @schema ListProtectedResourcesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListProtectedResourcesInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListProtectedResourcesOutput
 */
export interface ListProtectedResourcesOutput {
  /**
   * @schema ListProtectedResourcesOutput#Results
   */
  readonly results?: ProtectedResource[];

  /**
   * @schema ListProtectedResourcesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRecoveryPointsByBackupVaultInput
 */
export interface ListRecoveryPointsByBackupVaultInput {
  /**
   * @schema ListRecoveryPointsByBackupVaultInput#BackupVaultName
   */
  readonly backupVaultName: string;

  /**
   * @schema ListRecoveryPointsByBackupVaultInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRecoveryPointsByBackupVaultInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListRecoveryPointsByBackupVaultInput#ByResourceArn
   */
  readonly byResourceArn?: string;

  /**
   * @schema ListRecoveryPointsByBackupVaultInput#ByResourceType
   */
  readonly byResourceType?: string;

  /**
   * @schema ListRecoveryPointsByBackupVaultInput#ByBackupPlanId
   */
  readonly byBackupPlanId?: string;

  /**
   * @schema ListRecoveryPointsByBackupVaultInput#ByCreatedBefore
   */
  readonly byCreatedBefore?: string;

  /**
   * @schema ListRecoveryPointsByBackupVaultInput#ByCreatedAfter
   */
  readonly byCreatedAfter?: string;

}

/**
 * @schema ListRecoveryPointsByBackupVaultOutput
 */
export interface ListRecoveryPointsByBackupVaultOutput {
  /**
   * @schema ListRecoveryPointsByBackupVaultOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRecoveryPointsByBackupVaultOutput#RecoveryPoints
   */
  readonly recoveryPoints?: RecoveryPointByBackupVault[];

}

/**
 * @schema ListRecoveryPointsByResourceInput
 */
export interface ListRecoveryPointsByResourceInput {
  /**
   * @schema ListRecoveryPointsByResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ListRecoveryPointsByResourceInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRecoveryPointsByResourceInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListRecoveryPointsByResourceOutput
 */
export interface ListRecoveryPointsByResourceOutput {
  /**
   * @schema ListRecoveryPointsByResourceOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRecoveryPointsByResourceOutput#RecoveryPoints
   */
  readonly recoveryPoints?: RecoveryPointByResource[];

}

/**
 * @schema ListRestoreJobsInput
 */
export interface ListRestoreJobsInput {
  /**
   * @schema ListRestoreJobsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRestoreJobsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListRestoreJobsInput#ByAccountId
   */
  readonly byAccountId?: string;

  /**
   * @schema ListRestoreJobsInput#ByCreatedBefore
   */
  readonly byCreatedBefore?: string;

  /**
   * @schema ListRestoreJobsInput#ByCreatedAfter
   */
  readonly byCreatedAfter?: string;

  /**
   * @schema ListRestoreJobsInput#ByStatus
   */
  readonly byStatus?: string;

}

/**
 * @schema ListRestoreJobsOutput
 */
export interface ListRestoreJobsOutput {
  /**
   * @schema ListRestoreJobsOutput#RestoreJobs
   */
  readonly restoreJobs?: RestoreJobsListMember[];

  /**
   * @schema ListRestoreJobsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsInput
 */
export interface ListTagsInput {
  /**
   * @schema ListTagsInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ListTagsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTagsOutput
 */
export interface ListTagsOutput {
  /**
   * @schema ListTagsOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PutBackupVaultAccessPolicyInput
 */
export interface PutBackupVaultAccessPolicyInput {
  /**
   * @schema PutBackupVaultAccessPolicyInput#BackupVaultName
   */
  readonly backupVaultName: string;

  /**
   * @schema PutBackupVaultAccessPolicyInput#Policy
   */
  readonly policy?: string;

}

/**
 * @schema PutBackupVaultNotificationsInput
 */
export interface PutBackupVaultNotificationsInput {
  /**
   * @schema PutBackupVaultNotificationsInput#BackupVaultName
   */
  readonly backupVaultName: string;

  /**
   * @schema PutBackupVaultNotificationsInput#SNSTopicArn
   */
  readonly snsTopicArn: string;

  /**
   * @schema PutBackupVaultNotificationsInput#BackupVaultEvents
   */
  readonly backupVaultEvents: string[];

}

/**
 * @schema StartBackupJobInput
 */
export interface StartBackupJobInput {
  /**
   * @schema StartBackupJobInput#BackupVaultName
   */
  readonly backupVaultName: string;

  /**
   * @schema StartBackupJobInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema StartBackupJobInput#IamRoleArn
   */
  readonly iamRoleArn: string;

  /**
   * @schema StartBackupJobInput#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema StartBackupJobInput#StartWindowMinutes
   */
  readonly startWindowMinutes?: number;

  /**
   * @schema StartBackupJobInput#CompleteWindowMinutes
   */
  readonly completeWindowMinutes?: number;

  /**
   * @schema StartBackupJobInput#Lifecycle
   */
  readonly lifecycle?: Lifecycle;

  /**
   * @schema StartBackupJobInput#RecoveryPointTags
   */
  readonly recoveryPointTags?: { [key: string]: string };

  /**
   * @schema StartBackupJobInput#BackupOptions
   */
  readonly backupOptions?: { [key: string]: string };

}

/**
 * @schema StartBackupJobOutput
 */
export interface StartBackupJobOutput {
  /**
   * @schema StartBackupJobOutput#BackupJobId
   */
  readonly backupJobId?: string;

  /**
   * @schema StartBackupJobOutput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema StartBackupJobOutput#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema StartCopyJobInput
 */
export interface StartCopyJobInput {
  /**
   * @schema StartCopyJobInput#RecoveryPointArn
   */
  readonly recoveryPointArn: string;

  /**
   * @schema StartCopyJobInput#SourceBackupVaultName
   */
  readonly sourceBackupVaultName: string;

  /**
   * @schema StartCopyJobInput#DestinationBackupVaultArn
   */
  readonly destinationBackupVaultArn: string;

  /**
   * @schema StartCopyJobInput#IamRoleArn
   */
  readonly iamRoleArn: string;

  /**
   * @schema StartCopyJobInput#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema StartCopyJobInput#Lifecycle
   */
  readonly lifecycle?: Lifecycle;

}

/**
 * @schema StartCopyJobOutput
 */
export interface StartCopyJobOutput {
  /**
   * @schema StartCopyJobOutput#CopyJobId
   */
  readonly copyJobId?: string;

  /**
   * @schema StartCopyJobOutput#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema StartRestoreJobInput
 */
export interface StartRestoreJobInput {
  /**
   * @schema StartRestoreJobInput#RecoveryPointArn
   */
  readonly recoveryPointArn: string;

  /**
   * @schema StartRestoreJobInput#Metadata
   */
  readonly metadata: { [key: string]: string };

  /**
   * @schema StartRestoreJobInput#IamRoleArn
   */
  readonly iamRoleArn: string;

  /**
   * @schema StartRestoreJobInput#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema StartRestoreJobInput#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema StartRestoreJobOutput
 */
export interface StartRestoreJobOutput {
  /**
   * @schema StartRestoreJobOutput#RestoreJobId
   */
  readonly restoreJobId?: string;

}

/**
 * @schema StopBackupJobInput
 */
export interface StopBackupJobInput {
  /**
   * @schema StopBackupJobInput#BackupJobId
   */
  readonly backupJobId: string;

}

/**
 * @schema TagResourceInput
 */
export interface TagResourceInput {
  /**
   * @schema TagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceInput#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema UntagResourceInput
 */
export interface UntagResourceInput {
  /**
   * @schema UntagResourceInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceInput#TagKeyList
   */
  readonly tagKeyList: string[];

}

/**
 * @schema UpdateBackupPlanInput
 */
export interface UpdateBackupPlanInput {
  /**
   * @schema UpdateBackupPlanInput#BackupPlanId
   */
  readonly backupPlanId: string;

  /**
   * @schema UpdateBackupPlanInput#BackupPlan
   */
  readonly backupPlan: BackupPlanInput;

}

/**
 * @schema UpdateBackupPlanOutput
 */
export interface UpdateBackupPlanOutput {
  /**
   * @schema UpdateBackupPlanOutput#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema UpdateBackupPlanOutput#BackupPlanArn
   */
  readonly backupPlanArn?: string;

  /**
   * @schema UpdateBackupPlanOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema UpdateBackupPlanOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema UpdateBackupPlanOutput#AdvancedBackupSettings
   */
  readonly advancedBackupSettings?: AdvancedBackupSetting[];

}

/**
 * @schema UpdateGlobalSettingsInput
 */
export interface UpdateGlobalSettingsInput {
  /**
   * @schema UpdateGlobalSettingsInput#GlobalSettings
   */
  readonly globalSettings?: { [key: string]: string };

}

/**
 * @schema UpdateRecoveryPointLifecycleInput
 */
export interface UpdateRecoveryPointLifecycleInput {
  /**
   * @schema UpdateRecoveryPointLifecycleInput#BackupVaultName
   */
  readonly backupVaultName: string;

  /**
   * @schema UpdateRecoveryPointLifecycleInput#RecoveryPointArn
   */
  readonly recoveryPointArn: string;

  /**
   * @schema UpdateRecoveryPointLifecycleInput#Lifecycle
   */
  readonly lifecycle?: Lifecycle;

}

/**
 * @schema UpdateRecoveryPointLifecycleOutput
 */
export interface UpdateRecoveryPointLifecycleOutput {
  /**
   * @schema UpdateRecoveryPointLifecycleOutput#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema UpdateRecoveryPointLifecycleOutput#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema UpdateRecoveryPointLifecycleOutput#Lifecycle
   */
  readonly lifecycle?: Lifecycle;

  /**
   * @schema UpdateRecoveryPointLifecycleOutput#CalculatedLifecycle
   */
  readonly calculatedLifecycle?: CalculatedLifecycle;

}

/**
 * @schema UpdateRegionSettingsInput
 */
export interface UpdateRegionSettingsInput {
  /**
   * @schema UpdateRegionSettingsInput#ResourceTypeOptInPreference
   */
  readonly resourceTypeOptInPreference?: { [key: string]: boolean };

}

/**
 * @schema BackupPlanInput
 */
export interface BackupPlanInput {
  /**
   * @schema BackupPlanInput#BackupPlanName
   */
  readonly backupPlanName: string;

  /**
   * @schema BackupPlanInput#Rules
   */
  readonly rules: BackupRuleInput[];

  /**
   * @schema BackupPlanInput#AdvancedBackupSettings
   */
  readonly advancedBackupSettings?: AdvancedBackupSetting[];

}

/**
 * @schema AdvancedBackupSetting
 */
export interface AdvancedBackupSetting {
  /**
   * @schema AdvancedBackupSetting#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema AdvancedBackupSetting#BackupOptions
   */
  readonly backupOptions?: { [key: string]: string };

}

/**
 * @schema BackupSelection
 */
export interface BackupSelection {
  /**
   * @schema BackupSelection#SelectionName
   */
  readonly selectionName: string;

  /**
   * @schema BackupSelection#IamRoleArn
   */
  readonly iamRoleArn: string;

  /**
   * @schema BackupSelection#Resources
   */
  readonly resources?: string[];

  /**
   * @schema BackupSelection#ListOfTags
   */
  readonly listOfTags?: Condition[];

}

/**
 * @schema RecoveryPointCreator
 */
export interface RecoveryPointCreator {
  /**
   * @schema RecoveryPointCreator#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema RecoveryPointCreator#BackupPlanArn
   */
  readonly backupPlanArn?: string;

  /**
   * @schema RecoveryPointCreator#BackupPlanVersion
   */
  readonly backupPlanVersion?: string;

  /**
   * @schema RecoveryPointCreator#BackupRuleId
   */
  readonly backupRuleId?: string;

}

/**
 * @schema CopyJob
 */
export interface CopyJob {
  /**
   * @schema CopyJob#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema CopyJob#CopyJobId
   */
  readonly copyJobId?: string;

  /**
   * @schema CopyJob#SourceBackupVaultArn
   */
  readonly sourceBackupVaultArn?: string;

  /**
   * @schema CopyJob#SourceRecoveryPointArn
   */
  readonly sourceRecoveryPointArn?: string;

  /**
   * @schema CopyJob#DestinationBackupVaultArn
   */
  readonly destinationBackupVaultArn?: string;

  /**
   * @schema CopyJob#DestinationRecoveryPointArn
   */
  readonly destinationRecoveryPointArn?: string;

  /**
   * @schema CopyJob#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema CopyJob#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema CopyJob#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema CopyJob#State
   */
  readonly state?: string;

  /**
   * @schema CopyJob#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema CopyJob#BackupSizeInBytes
   */
  readonly backupSizeInBytes?: number;

  /**
   * @schema CopyJob#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema CopyJob#CreatedBy
   */
  readonly createdBy?: RecoveryPointCreator;

  /**
   * @schema CopyJob#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema CalculatedLifecycle
 */
export interface CalculatedLifecycle {
  /**
   * @schema CalculatedLifecycle#MoveToColdStorageAt
   */
  readonly moveToColdStorageAt?: string;

  /**
   * @schema CalculatedLifecycle#DeleteAt
   */
  readonly deleteAt?: string;

}

/**
 * @schema Lifecycle
 */
export interface Lifecycle {
  /**
   * @schema Lifecycle#MoveToColdStorageAfterDays
   */
  readonly moveToColdStorageAfterDays?: number;

  /**
   * @schema Lifecycle#DeleteAfterDays
   */
  readonly deleteAfterDays?: number;

}

/**
 * @schema BackupPlan
 */
export interface BackupPlan {
  /**
   * @schema BackupPlan#BackupPlanName
   */
  readonly backupPlanName: string;

  /**
   * @schema BackupPlan#Rules
   */
  readonly rules: BackupRule[];

  /**
   * @schema BackupPlan#AdvancedBackupSettings
   */
  readonly advancedBackupSettings?: AdvancedBackupSetting[];

}

/**
 * @schema BackupJob
 */
export interface BackupJob {
  /**
   * @schema BackupJob#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema BackupJob#BackupJobId
   */
  readonly backupJobId?: string;

  /**
   * @schema BackupJob#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupJob#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema BackupJob#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema BackupJob#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema BackupJob#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupJob#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema BackupJob#State
   */
  readonly state?: string;

  /**
   * @schema BackupJob#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema BackupJob#PercentDone
   */
  readonly percentDone?: string;

  /**
   * @schema BackupJob#BackupSizeInBytes
   */
  readonly backupSizeInBytes?: number;

  /**
   * @schema BackupJob#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema BackupJob#CreatedBy
   */
  readonly createdBy?: RecoveryPointCreator;

  /**
   * @schema BackupJob#ExpectedCompletionDate
   */
  readonly expectedCompletionDate?: string;

  /**
   * @schema BackupJob#StartBy
   */
  readonly startBy?: string;

  /**
   * @schema BackupJob#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema BackupJob#BytesTransferred
   */
  readonly bytesTransferred?: number;

  /**
   * @schema BackupJob#BackupOptions
   */
  readonly backupOptions?: { [key: string]: string };

  /**
   * @schema BackupJob#BackupType
   */
  readonly backupType?: string;

}

/**
 * @schema BackupPlanTemplatesListMember
 */
export interface BackupPlanTemplatesListMember {
  /**
   * @schema BackupPlanTemplatesListMember#BackupPlanTemplateId
   */
  readonly backupPlanTemplateId?: string;

  /**
   * @schema BackupPlanTemplatesListMember#BackupPlanTemplateName
   */
  readonly backupPlanTemplateName?: string;

}

/**
 * @schema BackupPlansListMember
 */
export interface BackupPlansListMember {
  /**
   * @schema BackupPlansListMember#BackupPlanArn
   */
  readonly backupPlanArn?: string;

  /**
   * @schema BackupPlansListMember#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupPlansListMember#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupPlansListMember#DeletionDate
   */
  readonly deletionDate?: string;

  /**
   * @schema BackupPlansListMember#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema BackupPlansListMember#BackupPlanName
   */
  readonly backupPlanName?: string;

  /**
   * @schema BackupPlansListMember#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema BackupPlansListMember#LastExecutionDate
   */
  readonly lastExecutionDate?: string;

  /**
   * @schema BackupPlansListMember#AdvancedBackupSettings
   */
  readonly advancedBackupSettings?: AdvancedBackupSetting[];

}

/**
 * @schema BackupSelectionsListMember
 */
export interface BackupSelectionsListMember {
  /**
   * @schema BackupSelectionsListMember#SelectionId
   */
  readonly selectionId?: string;

  /**
   * @schema BackupSelectionsListMember#SelectionName
   */
  readonly selectionName?: string;

  /**
   * @schema BackupSelectionsListMember#BackupPlanId
   */
  readonly backupPlanId?: string;

  /**
   * @schema BackupSelectionsListMember#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupSelectionsListMember#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema BackupSelectionsListMember#IamRoleArn
   */
  readonly iamRoleArn?: string;

}

/**
 * @schema BackupVaultListMember
 */
export interface BackupVaultListMember {
  /**
   * @schema BackupVaultListMember#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema BackupVaultListMember#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema BackupVaultListMember#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema BackupVaultListMember#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema BackupVaultListMember#CreatorRequestId
   */
  readonly creatorRequestId?: string;

  /**
   * @schema BackupVaultListMember#NumberOfRecoveryPoints
   */
  readonly numberOfRecoveryPoints?: number;

}

/**
 * @schema ProtectedResource
 */
export interface ProtectedResource {
  /**
   * @schema ProtectedResource#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ProtectedResource#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ProtectedResource#LastBackupTime
   */
  readonly lastBackupTime?: string;

}

/**
 * @schema RecoveryPointByBackupVault
 */
export interface RecoveryPointByBackupVault {
  /**
   * @schema RecoveryPointByBackupVault#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema RecoveryPointByBackupVault#BackupVaultName
   */
  readonly backupVaultName?: string;

  /**
   * @schema RecoveryPointByBackupVault#BackupVaultArn
   */
  readonly backupVaultArn?: string;

  /**
   * @schema RecoveryPointByBackupVault#SourceBackupVaultArn
   */
  readonly sourceBackupVaultArn?: string;

  /**
   * @schema RecoveryPointByBackupVault#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema RecoveryPointByBackupVault#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema RecoveryPointByBackupVault#CreatedBy
   */
  readonly createdBy?: RecoveryPointCreator;

  /**
   * @schema RecoveryPointByBackupVault#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema RecoveryPointByBackupVault#Status
   */
  readonly status?: string;

  /**
   * @schema RecoveryPointByBackupVault#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema RecoveryPointByBackupVault#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema RecoveryPointByBackupVault#BackupSizeInBytes
   */
  readonly backupSizeInBytes?: number;

  /**
   * @schema RecoveryPointByBackupVault#CalculatedLifecycle
   */
  readonly calculatedLifecycle?: CalculatedLifecycle;

  /**
   * @schema RecoveryPointByBackupVault#Lifecycle
   */
  readonly lifecycle?: Lifecycle;

  /**
   * @schema RecoveryPointByBackupVault#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema RecoveryPointByBackupVault#IsEncrypted
   */
  readonly isEncrypted?: boolean;

  /**
   * @schema RecoveryPointByBackupVault#LastRestoreTime
   */
  readonly lastRestoreTime?: string;

}

/**
 * @schema RecoveryPointByResource
 */
export interface RecoveryPointByResource {
  /**
   * @schema RecoveryPointByResource#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema RecoveryPointByResource#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema RecoveryPointByResource#Status
   */
  readonly status?: string;

  /**
   * @schema RecoveryPointByResource#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema RecoveryPointByResource#BackupSizeBytes
   */
  readonly backupSizeBytes?: number;

  /**
   * @schema RecoveryPointByResource#BackupVaultName
   */
  readonly backupVaultName?: string;

}

/**
 * @schema RestoreJobsListMember
 */
export interface RestoreJobsListMember {
  /**
   * @schema RestoreJobsListMember#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema RestoreJobsListMember#RestoreJobId
   */
  readonly restoreJobId?: string;

  /**
   * @schema RestoreJobsListMember#RecoveryPointArn
   */
  readonly recoveryPointArn?: string;

  /**
   * @schema RestoreJobsListMember#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema RestoreJobsListMember#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema RestoreJobsListMember#Status
   */
  readonly status?: string;

  /**
   * @schema RestoreJobsListMember#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RestoreJobsListMember#PercentDone
   */
  readonly percentDone?: string;

  /**
   * @schema RestoreJobsListMember#BackupSizeInBytes
   */
  readonly backupSizeInBytes?: number;

  /**
   * @schema RestoreJobsListMember#IamRoleArn
   */
  readonly iamRoleArn?: string;

  /**
   * @schema RestoreJobsListMember#ExpectedCompletionTimeMinutes
   */
  readonly expectedCompletionTimeMinutes?: number;

  /**
   * @schema RestoreJobsListMember#CreatedResourceArn
   */
  readonly createdResourceArn?: string;

  /**
   * @schema RestoreJobsListMember#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema BackupRuleInput
 */
export interface BackupRuleInput {
  /**
   * @schema BackupRuleInput#RuleName
   */
  readonly ruleName: string;

  /**
   * @schema BackupRuleInput#TargetBackupVaultName
   */
  readonly targetBackupVaultName: string;

  /**
   * @schema BackupRuleInput#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema BackupRuleInput#StartWindowMinutes
   */
  readonly startWindowMinutes?: number;

  /**
   * @schema BackupRuleInput#CompletionWindowMinutes
   */
  readonly completionWindowMinutes?: number;

  /**
   * @schema BackupRuleInput#Lifecycle
   */
  readonly lifecycle?: Lifecycle;

  /**
   * @schema BackupRuleInput#RecoveryPointTags
   */
  readonly recoveryPointTags?: { [key: string]: string };

  /**
   * @schema BackupRuleInput#CopyActions
   */
  readonly copyActions?: CopyAction[];

}

/**
 * @schema Condition
 */
export interface Condition {
  /**
   * @schema Condition#ConditionType
   */
  readonly conditionType: string;

  /**
   * @schema Condition#ConditionKey
   */
  readonly conditionKey: string;

  /**
   * @schema Condition#ConditionValue
   */
  readonly conditionValue: string;

}

/**
 * @schema BackupRule
 */
export interface BackupRule {
  /**
   * @schema BackupRule#RuleName
   */
  readonly ruleName: string;

  /**
   * @schema BackupRule#TargetBackupVaultName
   */
  readonly targetBackupVaultName: string;

  /**
   * @schema BackupRule#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema BackupRule#StartWindowMinutes
   */
  readonly startWindowMinutes?: number;

  /**
   * @schema BackupRule#CompletionWindowMinutes
   */
  readonly completionWindowMinutes?: number;

  /**
   * @schema BackupRule#Lifecycle
   */
  readonly lifecycle?: Lifecycle;

  /**
   * @schema BackupRule#RecoveryPointTags
   */
  readonly recoveryPointTags?: { [key: string]: string };

  /**
   * @schema BackupRule#RuleId
   */
  readonly ruleId?: string;

  /**
   * @schema BackupRule#CopyActions
   */
  readonly copyActions?: CopyAction[];

}

/**
 * @schema CopyAction
 */
export interface CopyAction {
  /**
   * @schema CopyAction#Lifecycle
   */
  readonly lifecycle?: Lifecycle;

  /**
   * @schema CopyAction#DestinationBackupVaultArn
   */
  readonly destinationBackupVaultArn: string;

}
