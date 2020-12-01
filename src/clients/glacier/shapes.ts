/**
 * @schema AbortMultipartUploadInput
 */
export interface AbortMultipartUploadInput {
  /**
   * @schema AbortMultipartUploadInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema AbortMultipartUploadInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema AbortMultipartUploadInput#uploadId
   */
  readonly uploadId: string;

}

/**
 * @schema AbortVaultLockInput
 */
export interface AbortVaultLockInput {
  /**
   * @schema AbortVaultLockInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema AbortVaultLockInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * @schema AddTagsToVaultInput
 */
export interface AddTagsToVaultInput {
  /**
   * @schema AddTagsToVaultInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema AddTagsToVaultInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema AddTagsToVaultInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CompleteMultipartUploadInput
 */
export interface CompleteMultipartUploadInput {
  /**
   * @schema CompleteMultipartUploadInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema CompleteMultipartUploadInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema CompleteMultipartUploadInput#uploadId
   */
  readonly uploadId: string;

  /**
   * @schema CompleteMultipartUploadInput#archiveSize
   */
  readonly archiveSize?: string;

  /**
   * @schema CompleteMultipartUploadInput#checksum
   */
  readonly checksum?: string;

}

/**
 * @schema ArchiveCreationOutput
 */
export interface ArchiveCreationOutput {
  /**
   * @schema ArchiveCreationOutput#location
   */
  readonly location?: string;

  /**
   * @schema ArchiveCreationOutput#checksum
   */
  readonly checksum?: string;

  /**
   * @schema ArchiveCreationOutput#archiveId
   */
  readonly archiveId?: string;

}

/**
 * @schema CompleteVaultLockInput
 */
export interface CompleteVaultLockInput {
  /**
   * @schema CompleteVaultLockInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema CompleteVaultLockInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema CompleteVaultLockInput#lockId
   */
  readonly lockId: string;

}

/**
 * @schema CreateVaultInput
 */
export interface CreateVaultInput {
  /**
   * @schema CreateVaultInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema CreateVaultInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * @schema CreateVaultOutput
 */
export interface CreateVaultOutput {
  /**
   * @schema CreateVaultOutput#location
   */
  readonly location?: string;

}

/**
 * @schema DeleteArchiveInput
 */
export interface DeleteArchiveInput {
  /**
   * @schema DeleteArchiveInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteArchiveInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema DeleteArchiveInput#archiveId
   */
  readonly archiveId: string;

}

/**
 * @schema DeleteVaultInput
 */
export interface DeleteVaultInput {
  /**
   * @schema DeleteVaultInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteVaultInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * @schema DeleteVaultAccessPolicyInput
 */
export interface DeleteVaultAccessPolicyInput {
  /**
   * @schema DeleteVaultAccessPolicyInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteVaultAccessPolicyInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * @schema DeleteVaultNotificationsInput
 */
export interface DeleteVaultNotificationsInput {
  /**
   * @schema DeleteVaultNotificationsInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteVaultNotificationsInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * @schema DescribeJobInput
 */
export interface DescribeJobInput {
  /**
   * @schema DescribeJobInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema DescribeJobInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema DescribeJobInput#jobId
   */
  readonly jobId: string;

}

/**
 * @schema GlacierJobDescription
 */
export interface GlacierJobDescription {
  /**
   * @schema GlacierJobDescription#JobId
   */
  readonly jobId?: string;

  /**
   * @schema GlacierJobDescription#JobDescription
   */
  readonly jobDescription?: string;

  /**
   * @schema GlacierJobDescription#Action
   */
  readonly action?: string;

  /**
   * @schema GlacierJobDescription#ArchiveId
   */
  readonly archiveId?: string;

  /**
   * @schema GlacierJobDescription#VaultARN
   */
  readonly vaultArn?: string;

  /**
   * @schema GlacierJobDescription#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema GlacierJobDescription#Completed
   */
  readonly completed?: boolean;

  /**
   * @schema GlacierJobDescription#StatusCode
   */
  readonly statusCode?: string;

  /**
   * @schema GlacierJobDescription#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema GlacierJobDescription#ArchiveSizeInBytes
   */
  readonly archiveSizeInBytes?: number;

  /**
   * @schema GlacierJobDescription#InventorySizeInBytes
   */
  readonly inventorySizeInBytes?: number;

  /**
   * @schema GlacierJobDescription#SNSTopic
   */
  readonly snsTopic?: string;

  /**
   * @schema GlacierJobDescription#CompletionDate
   */
  readonly completionDate?: string;

  /**
   * @schema GlacierJobDescription#SHA256TreeHash
   */
  readonly sha256TreeHash?: string;

  /**
   * @schema GlacierJobDescription#ArchiveSHA256TreeHash
   */
  readonly archiveSha256TreeHash?: string;

  /**
   * @schema GlacierJobDescription#RetrievalByteRange
   */
  readonly retrievalByteRange?: string;

  /**
   * @schema GlacierJobDescription#Tier
   */
  readonly tier?: string;

  /**
   * @schema GlacierJobDescription#InventoryRetrievalParameters
   */
  readonly inventoryRetrievalParameters?: InventoryRetrievalJobDescription;

  /**
   * @schema GlacierJobDescription#JobOutputPath
   */
  readonly jobOutputPath?: string;

  /**
   * @schema GlacierJobDescription#SelectParameters
   */
  readonly selectParameters?: SelectParameters;

  /**
   * @schema GlacierJobDescription#OutputLocation
   */
  readonly outputLocation?: OutputLocation;

}

/**
 * @schema DescribeVaultInput
 */
export interface DescribeVaultInput {
  /**
   * @schema DescribeVaultInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema DescribeVaultInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * @schema DescribeVaultOutput
 */
export interface DescribeVaultOutput {
  /**
   * @schema DescribeVaultOutput#VaultARN
   */
  readonly vaultArn?: string;

  /**
   * @schema DescribeVaultOutput#VaultName
   */
  readonly vaultName?: string;

  /**
   * @schema DescribeVaultOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema DescribeVaultOutput#LastInventoryDate
   */
  readonly lastInventoryDate?: string;

  /**
   * @schema DescribeVaultOutput#NumberOfArchives
   */
  readonly numberOfArchives?: number;

  /**
   * @schema DescribeVaultOutput#SizeInBytes
   */
  readonly sizeInBytes?: number;

}

/**
 * @schema GetDataRetrievalPolicyInput
 */
export interface GetDataRetrievalPolicyInput {
  /**
   * @schema GetDataRetrievalPolicyInput#accountId
   */
  readonly accountId: string;

}

/**
 * @schema GetDataRetrievalPolicyOutput
 */
export interface GetDataRetrievalPolicyOutput {
  /**
   * @schema GetDataRetrievalPolicyOutput#Policy
   */
  readonly policy?: DataRetrievalPolicy;

}

/**
 * @schema GetJobOutputInput
 */
export interface GetJobOutputInput {
  /**
   * @schema GetJobOutputInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GetJobOutputInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema GetJobOutputInput#jobId
   */
  readonly jobId: string;

  /**
   * @schema GetJobOutputInput#range
   */
  readonly range?: string;

}

/**
 * @schema GetJobOutputOutput
 */
export interface GetJobOutputOutput {
  /**
   * @schema GetJobOutputOutput#body
   */
  readonly body?: any;

  /**
   * @schema GetJobOutputOutput#checksum
   */
  readonly checksum?: string;

  /**
   * @schema GetJobOutputOutput#status
   */
  readonly status?: number;

  /**
   * @schema GetJobOutputOutput#contentRange
   */
  readonly contentRange?: string;

  /**
   * @schema GetJobOutputOutput#acceptRanges
   */
  readonly acceptRanges?: string;

  /**
   * @schema GetJobOutputOutput#contentType
   */
  readonly contentType?: string;

  /**
   * @schema GetJobOutputOutput#archiveDescription
   */
  readonly archiveDescription?: string;

}

/**
 * @schema GetVaultAccessPolicyInput
 */
export interface GetVaultAccessPolicyInput {
  /**
   * @schema GetVaultAccessPolicyInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GetVaultAccessPolicyInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * @schema GetVaultAccessPolicyOutput
 */
export interface GetVaultAccessPolicyOutput {
  /**
   * @schema GetVaultAccessPolicyOutput#policy
   */
  readonly policy?: VaultAccessPolicy;

}

/**
 * @schema GetVaultLockInput
 */
export interface GetVaultLockInput {
  /**
   * @schema GetVaultLockInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GetVaultLockInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * @schema GetVaultLockOutput
 */
export interface GetVaultLockOutput {
  /**
   * @schema GetVaultLockOutput#Policy
   */
  readonly policy?: string;

  /**
   * @schema GetVaultLockOutput#State
   */
  readonly state?: string;

  /**
   * @schema GetVaultLockOutput#ExpirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema GetVaultLockOutput#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema GetVaultNotificationsInput
 */
export interface GetVaultNotificationsInput {
  /**
   * @schema GetVaultNotificationsInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema GetVaultNotificationsInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * @schema GetVaultNotificationsOutput
 */
export interface GetVaultNotificationsOutput {
  /**
   * @schema GetVaultNotificationsOutput#vaultNotificationConfig
   */
  readonly vaultNotificationConfig?: VaultNotificationConfig;

}

/**
 * @schema InitiateJobInput
 */
export interface InitiateJobInput {
  /**
   * @schema InitiateJobInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema InitiateJobInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema InitiateJobInput#jobParameters
   */
  readonly jobParameters?: JobParameters;

}

/**
 * @schema InitiateJobOutput
 */
export interface InitiateJobOutput {
  /**
   * @schema InitiateJobOutput#location
   */
  readonly location?: string;

  /**
   * @schema InitiateJobOutput#jobId
   */
  readonly jobId?: string;

  /**
   * @schema InitiateJobOutput#jobOutputPath
   */
  readonly jobOutputPath?: string;

}

/**
 * @schema InitiateMultipartUploadInput
 */
export interface InitiateMultipartUploadInput {
  /**
   * @schema InitiateMultipartUploadInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema InitiateMultipartUploadInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema InitiateMultipartUploadInput#archiveDescription
   */
  readonly archiveDescription?: string;

  /**
   * @schema InitiateMultipartUploadInput#partSize
   */
  readonly partSize?: string;

}

/**
 * @schema InitiateMultipartUploadOutput
 */
export interface InitiateMultipartUploadOutput {
  /**
   * @schema InitiateMultipartUploadOutput#location
   */
  readonly location?: string;

  /**
   * @schema InitiateMultipartUploadOutput#uploadId
   */
  readonly uploadId?: string;

}

/**
 * @schema InitiateVaultLockInput
 */
export interface InitiateVaultLockInput {
  /**
   * @schema InitiateVaultLockInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema InitiateVaultLockInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema InitiateVaultLockInput#policy
   */
  readonly policy?: VaultLockPolicy;

}

/**
 * @schema InitiateVaultLockOutput
 */
export interface InitiateVaultLockOutput {
  /**
   * @schema InitiateVaultLockOutput#lockId
   */
  readonly lockId?: string;

}

/**
 * @schema ListJobsInput
 */
export interface ListJobsInput {
  /**
   * @schema ListJobsInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema ListJobsInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema ListJobsInput#limit
   */
  readonly limit?: string;

  /**
   * @schema ListJobsInput#marker
   */
  readonly marker?: string;

  /**
   * @schema ListJobsInput#statuscode
   */
  readonly statuscode?: string;

  /**
   * @schema ListJobsInput#completed
   */
  readonly completed?: string;

}

/**
 * @schema ListJobsOutput
 */
export interface ListJobsOutput {
  /**
   * @schema ListJobsOutput#JobList
   */
  readonly jobList?: GlacierJobDescription[];

  /**
   * @schema ListJobsOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListMultipartUploadsInput
 */
export interface ListMultipartUploadsInput {
  /**
   * @schema ListMultipartUploadsInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema ListMultipartUploadsInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema ListMultipartUploadsInput#marker
   */
  readonly marker?: string;

  /**
   * @schema ListMultipartUploadsInput#limit
   */
  readonly limit?: string;

}

/**
 * @schema ListMultipartUploadsOutput
 */
export interface ListMultipartUploadsOutput {
  /**
   * @schema ListMultipartUploadsOutput#UploadsList
   */
  readonly uploadsList?: UploadListElement[];

  /**
   * @schema ListMultipartUploadsOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListPartsInput
 */
export interface ListPartsInput {
  /**
   * @schema ListPartsInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema ListPartsInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema ListPartsInput#uploadId
   */
  readonly uploadId: string;

  /**
   * @schema ListPartsInput#marker
   */
  readonly marker?: string;

  /**
   * @schema ListPartsInput#limit
   */
  readonly limit?: string;

}

/**
 * @schema ListPartsOutput
 */
export interface ListPartsOutput {
  /**
   * @schema ListPartsOutput#MultipartUploadId
   */
  readonly multipartUploadId?: string;

  /**
   * @schema ListPartsOutput#VaultARN
   */
  readonly vaultArn?: string;

  /**
   * @schema ListPartsOutput#ArchiveDescription
   */
  readonly archiveDescription?: string;

  /**
   * @schema ListPartsOutput#PartSizeInBytes
   */
  readonly partSizeInBytes?: number;

  /**
   * @schema ListPartsOutput#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema ListPartsOutput#Parts
   */
  readonly parts?: PartListElement[];

  /**
   * @schema ListPartsOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema ListProvisionedCapacityInput
 */
export interface ListProvisionedCapacityInput {
  /**
   * @schema ListProvisionedCapacityInput#accountId
   */
  readonly accountId: string;

}

/**
 * @schema ListProvisionedCapacityOutput
 */
export interface ListProvisionedCapacityOutput {
  /**
   * @schema ListProvisionedCapacityOutput#ProvisionedCapacityList
   */
  readonly provisionedCapacityList?: ProvisionedCapacityDescription[];

}

/**
 * @schema ListTagsForVaultInput
 */
export interface ListTagsForVaultInput {
  /**
   * @schema ListTagsForVaultInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema ListTagsForVaultInput#vaultName
   */
  readonly vaultName: string;

}

/**
 * @schema ListTagsForVaultOutput
 */
export interface ListTagsForVaultOutput {
  /**
   * @schema ListTagsForVaultOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListVaultsInput
 */
export interface ListVaultsInput {
  /**
   * @schema ListVaultsInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema ListVaultsInput#marker
   */
  readonly marker?: string;

  /**
   * @schema ListVaultsInput#limit
   */
  readonly limit?: string;

}

/**
 * @schema ListVaultsOutput
 */
export interface ListVaultsOutput {
  /**
   * @schema ListVaultsOutput#VaultList
   */
  readonly vaultList?: DescribeVaultOutput[];

  /**
   * @schema ListVaultsOutput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema PurchaseProvisionedCapacityInput
 */
export interface PurchaseProvisionedCapacityInput {
  /**
   * @schema PurchaseProvisionedCapacityInput#accountId
   */
  readonly accountId: string;

}

/**
 * @schema PurchaseProvisionedCapacityOutput
 */
export interface PurchaseProvisionedCapacityOutput {
  /**
   * @schema PurchaseProvisionedCapacityOutput#capacityId
   */
  readonly capacityId?: string;

}

/**
 * @schema RemoveTagsFromVaultInput
 */
export interface RemoveTagsFromVaultInput {
  /**
   * @schema RemoveTagsFromVaultInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema RemoveTagsFromVaultInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema RemoveTagsFromVaultInput#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * @schema SetDataRetrievalPolicyInput
 */
export interface SetDataRetrievalPolicyInput {
  /**
   * @schema SetDataRetrievalPolicyInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema SetDataRetrievalPolicyInput#Policy
   */
  readonly policy?: DataRetrievalPolicy;

}

/**
 * @schema SetVaultAccessPolicyInput
 */
export interface SetVaultAccessPolicyInput {
  /**
   * @schema SetVaultAccessPolicyInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema SetVaultAccessPolicyInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema SetVaultAccessPolicyInput#policy
   */
  readonly policy?: VaultAccessPolicy;

}

/**
 * @schema SetVaultNotificationsInput
 */
export interface SetVaultNotificationsInput {
  /**
   * @schema SetVaultNotificationsInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema SetVaultNotificationsInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema SetVaultNotificationsInput#vaultNotificationConfig
   */
  readonly vaultNotificationConfig?: VaultNotificationConfig;

}

/**
 * @schema UploadArchiveInput
 */
export interface UploadArchiveInput {
  /**
   * @schema UploadArchiveInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema UploadArchiveInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema UploadArchiveInput#archiveDescription
   */
  readonly archiveDescription?: string;

  /**
   * @schema UploadArchiveInput#checksum
   */
  readonly checksum?: string;

  /**
   * @schema UploadArchiveInput#body
   */
  readonly body?: any;

}

/**
 * @schema UploadMultipartPartInput
 */
export interface UploadMultipartPartInput {
  /**
   * @schema UploadMultipartPartInput#accountId
   */
  readonly accountId: string;

  /**
   * @schema UploadMultipartPartInput#vaultName
   */
  readonly vaultName: string;

  /**
   * @schema UploadMultipartPartInput#uploadId
   */
  readonly uploadId: string;

  /**
   * @schema UploadMultipartPartInput#checksum
   */
  readonly checksum?: string;

  /**
   * @schema UploadMultipartPartInput#range
   */
  readonly range?: string;

  /**
   * @schema UploadMultipartPartInput#body
   */
  readonly body?: any;

}

/**
 * @schema UploadMultipartPartOutput
 */
export interface UploadMultipartPartOutput {
  /**
   * @schema UploadMultipartPartOutput#checksum
   */
  readonly checksum?: string;

}

/**
 * @schema InventoryRetrievalJobDescription
 */
export interface InventoryRetrievalJobDescription {
  /**
   * @schema InventoryRetrievalJobDescription#Format
   */
  readonly format?: string;

  /**
   * @schema InventoryRetrievalJobDescription#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema InventoryRetrievalJobDescription#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema InventoryRetrievalJobDescription#Limit
   */
  readonly limit?: string;

  /**
   * @schema InventoryRetrievalJobDescription#Marker
   */
  readonly marker?: string;

}

/**
 * @schema SelectParameters
 */
export interface SelectParameters {
  /**
   * @schema SelectParameters#InputSerialization
   */
  readonly inputSerialization?: InputSerialization;

  /**
   * @schema SelectParameters#ExpressionType
   */
  readonly expressionType?: string;

  /**
   * @schema SelectParameters#Expression
   */
  readonly expression?: string;

  /**
   * @schema SelectParameters#OutputSerialization
   */
  readonly outputSerialization?: OutputSerialization;

}

/**
 * @schema OutputLocation
 */
export interface OutputLocation {
  /**
   * @schema OutputLocation#S3
   */
  readonly s3?: S3Location;

}

/**
 * @schema DataRetrievalPolicy
 */
export interface DataRetrievalPolicy {
  /**
   * @schema DataRetrievalPolicy#Rules
   */
  readonly rules?: DataRetrievalRule[];

}

/**
 * @schema VaultAccessPolicy
 */
export interface VaultAccessPolicy {
  /**
   * @schema VaultAccessPolicy#Policy
   */
  readonly policy?: string;

}

/**
 * @schema VaultNotificationConfig
 */
export interface VaultNotificationConfig {
  /**
   * @schema VaultNotificationConfig#SNSTopic
   */
  readonly snsTopic?: string;

  /**
   * @schema VaultNotificationConfig#Events
   */
  readonly events?: string[];

}

/**
 * @schema JobParameters
 */
export interface JobParameters {
  /**
   * @schema JobParameters#Format
   */
  readonly format?: string;

  /**
   * @schema JobParameters#Type
   */
  readonly type?: string;

  /**
   * @schema JobParameters#ArchiveId
   */
  readonly archiveId?: string;

  /**
   * @schema JobParameters#Description
   */
  readonly description?: string;

  /**
   * @schema JobParameters#SNSTopic
   */
  readonly snsTopic?: string;

  /**
   * @schema JobParameters#RetrievalByteRange
   */
  readonly retrievalByteRange?: string;

  /**
   * @schema JobParameters#Tier
   */
  readonly tier?: string;

  /**
   * @schema JobParameters#InventoryRetrievalParameters
   */
  readonly inventoryRetrievalParameters?: InventoryRetrievalJobInput;

  /**
   * @schema JobParameters#SelectParameters
   */
  readonly selectParameters?: SelectParameters;

  /**
   * @schema JobParameters#OutputLocation
   */
  readonly outputLocation?: OutputLocation;

}

/**
 * @schema VaultLockPolicy
 */
export interface VaultLockPolicy {
  /**
   * @schema VaultLockPolicy#Policy
   */
  readonly policy?: string;

}

/**
 * @schema UploadListElement
 */
export interface UploadListElement {
  /**
   * @schema UploadListElement#MultipartUploadId
   */
  readonly multipartUploadId?: string;

  /**
   * @schema UploadListElement#VaultARN
   */
  readonly vaultArn?: string;

  /**
   * @schema UploadListElement#ArchiveDescription
   */
  readonly archiveDescription?: string;

  /**
   * @schema UploadListElement#PartSizeInBytes
   */
  readonly partSizeInBytes?: number;

  /**
   * @schema UploadListElement#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema PartListElement
 */
export interface PartListElement {
  /**
   * @schema PartListElement#RangeInBytes
   */
  readonly rangeInBytes?: string;

  /**
   * @schema PartListElement#SHA256TreeHash
   */
  readonly sha256TreeHash?: string;

}

/**
 * @schema ProvisionedCapacityDescription
 */
export interface ProvisionedCapacityDescription {
  /**
   * @schema ProvisionedCapacityDescription#CapacityId
   */
  readonly capacityId?: string;

  /**
   * @schema ProvisionedCapacityDescription#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema ProvisionedCapacityDescription#ExpirationDate
   */
  readonly expirationDate?: string;

}

/**
 * @schema InputSerialization
 */
export interface InputSerialization {
  /**
   * @schema InputSerialization#csv
   */
  readonly csv?: CsvInput;

}

/**
 * @schema OutputSerialization
 */
export interface OutputSerialization {
  /**
   * @schema OutputSerialization#csv
   */
  readonly csv?: CsvOutput;

}

/**
 * @schema S3Location
 */
export interface S3Location {
  /**
   * @schema S3Location#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema S3Location#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3Location#Encryption
   */
  readonly encryption?: Encryption;

  /**
   * @schema S3Location#CannedACL
   */
  readonly cannedAcl?: string;

  /**
   * @schema S3Location#AccessControlList
   */
  readonly accessControlList?: Grant[];

  /**
   * @schema S3Location#Tagging
   */
  readonly tagging?: { [key: string]: string };

  /**
   * @schema S3Location#UserMetadata
   */
  readonly userMetadata?: { [key: string]: string };

  /**
   * @schema S3Location#StorageClass
   */
  readonly storageClass?: string;

}

/**
 * @schema DataRetrievalRule
 */
export interface DataRetrievalRule {
  /**
   * @schema DataRetrievalRule#Strategy
   */
  readonly strategy?: string;

  /**
   * @schema DataRetrievalRule#BytesPerHour
   */
  readonly bytesPerHour?: number;

}

/**
 * @schema InventoryRetrievalJobInput
 */
export interface InventoryRetrievalJobInput {
  /**
   * @schema InventoryRetrievalJobInput#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema InventoryRetrievalJobInput#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema InventoryRetrievalJobInput#Limit
   */
  readonly limit?: string;

  /**
   * @schema InventoryRetrievalJobInput#Marker
   */
  readonly marker?: string;

}

/**
 * @schema CsvInput
 */
export interface CsvInput {
  /**
   * @schema CsvInput#FileHeaderInfo
   */
  readonly fileHeaderInfo?: string;

  /**
   * @schema CsvInput#Comments
   */
  readonly comments?: string;

  /**
   * @schema CsvInput#QuoteEscapeCharacter
   */
  readonly quoteEscapeCharacter?: string;

  /**
   * @schema CsvInput#RecordDelimiter
   */
  readonly recordDelimiter?: string;

  /**
   * @schema CsvInput#FieldDelimiter
   */
  readonly fieldDelimiter?: string;

  /**
   * @schema CsvInput#QuoteCharacter
   */
  readonly quoteCharacter?: string;

}

/**
 * @schema CsvOutput
 */
export interface CsvOutput {
  /**
   * @schema CsvOutput#QuoteFields
   */
  readonly quoteFields?: string;

  /**
   * @schema CsvOutput#QuoteEscapeCharacter
   */
  readonly quoteEscapeCharacter?: string;

  /**
   * @schema CsvOutput#RecordDelimiter
   */
  readonly recordDelimiter?: string;

  /**
   * @schema CsvOutput#FieldDelimiter
   */
  readonly fieldDelimiter?: string;

  /**
   * @schema CsvOutput#QuoteCharacter
   */
  readonly quoteCharacter?: string;

}

/**
 * @schema Encryption
 */
export interface Encryption {
  /**
   * @schema Encryption#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema Encryption#KMSKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Encryption#KMSContext
   */
  readonly kmsContext?: string;

}

/**
 * @schema Grant
 */
export interface Grant {
  /**
   * @schema Grant#Grantee
   */
  readonly grantee?: Grantee;

  /**
   * @schema Grant#Permission
   */
  readonly permission?: string;

}

/**
 * @schema Grantee
 */
export interface Grantee {
  /**
   * @schema Grantee#Type
   */
  readonly type: string;

  /**
   * @schema Grantee#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema Grantee#URI
   */
  readonly uri?: string;

  /**
   * @schema Grantee#ID
   */
  readonly id?: string;

  /**
   * @schema Grantee#EmailAddress
   */
  readonly emailAddress?: string;

}
