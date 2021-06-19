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
 * @schema GlacierCreateVaultOutput
 */
export interface GlacierCreateVaultOutput {
  /**
   * @schema GlacierCreateVaultOutput#location
   */
  readonly location?: string;

}

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
 * @schema GlacierGetDataRetrievalPolicyInput
 */
export interface GlacierGetDataRetrievalPolicyInput {
  /**
   * @schema GlacierGetDataRetrievalPolicyInput#accountId
   */
  readonly accountId: string;

}

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
 * @schema GlacierGetVaultAccessPolicyOutput
 */
export interface GlacierGetVaultAccessPolicyOutput {
  /**
   * @schema GlacierGetVaultAccessPolicyOutput#policy
   */
  readonly policy?: GlacierVaultAccessPolicy;

}

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
 * @schema GlacierGetVaultNotificationsOutput
 */
export interface GlacierGetVaultNotificationsOutput {
  /**
   * @schema GlacierGetVaultNotificationsOutput#vaultNotificationConfig
   */
  readonly vaultNotificationConfig?: GlacierVaultNotificationConfig;

}

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
 * @schema GlacierInitiateVaultLockOutput
 */
export interface GlacierInitiateVaultLockOutput {
  /**
   * @schema GlacierInitiateVaultLockOutput#lockId
   */
  readonly lockId?: string;

}

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
 * @schema GlacierListProvisionedCapacityInput
 */
export interface GlacierListProvisionedCapacityInput {
  /**
   * @schema GlacierListProvisionedCapacityInput#accountId
   */
  readonly accountId: string;

}

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
 * @schema GlacierListTagsForVaultOutput
 */
export interface GlacierListTagsForVaultOutput {
  /**
   * @schema GlacierListTagsForVaultOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

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
 * @schema GlacierPurchaseProvisionedCapacityInput
 */
export interface GlacierPurchaseProvisionedCapacityInput {
  /**
   * @schema GlacierPurchaseProvisionedCapacityInput#accountId
   */
  readonly accountId: string;

}

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
 * @schema GlacierUploadMultipartPartOutput
 */
export interface GlacierUploadMultipartPartOutput {
  /**
   * @schema GlacierUploadMultipartPartOutput#checksum
   */
  readonly checksum?: string;

}

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
 * @schema GlacierOutputLocation
 */
export interface GlacierOutputLocation {
  /**
   * @schema GlacierOutputLocation#S3
   */
  readonly s3?: GlacierS3Location;

}

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
 * @schema GlacierVaultAccessPolicy
 */
export interface GlacierVaultAccessPolicy {
  /**
   * @schema GlacierVaultAccessPolicy#Policy
   */
  readonly policy?: string;

}

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
 * @schema GlacierVaultLockPolicy
 */
export interface GlacierVaultLockPolicy {
  /**
   * @schema GlacierVaultLockPolicy#Policy
   */
  readonly policy?: string;

}

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
 * @schema GlacierInputSerialization
 */
export interface GlacierInputSerialization {
  /**
   * @schema GlacierInputSerialization#csv
   */
  readonly csv?: GlacierCsvInput;

}

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
 * @schema GlacierGrantee
 */
export interface GlacierGrantee {
  /**
   * @schema GlacierGrantee#Type
   */
  readonly type: string;

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
