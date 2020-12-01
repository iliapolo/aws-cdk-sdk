/**
 * @schema CreateAccessPointRequest
 */
export interface CreateAccessPointRequest {
  /**
   * @schema CreateAccessPointRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema CreateAccessPointRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateAccessPointRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema CreateAccessPointRequest#VpcConfiguration
   */
  readonly vpcConfiguration?: VpcConfiguration;

  /**
   * @schema CreateAccessPointRequest#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration?: PublicAccessBlockConfiguration;

}

/**
 * @schema CreateAccessPointResult
 */
export interface CreateAccessPointResult {
  /**
   * @schema CreateAccessPointResult#AccessPointArn
   */
  readonly accessPointArn?: string;

}

/**
 * @schema CreateBucketRequest
 */
export interface CreateBucketRequest {
  /**
   * @schema CreateBucketRequest#ACL
   */
  readonly acl?: string;

  /**
   * @schema CreateBucketRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema CreateBucketRequest#CreateBucketConfiguration
   */
  readonly createBucketConfiguration?: CreateBucketConfiguration;

  /**
   * @schema CreateBucketRequest#GrantFullControl
   */
  readonly grantFullControl?: string;

  /**
   * @schema CreateBucketRequest#GrantRead
   */
  readonly grantRead?: string;

  /**
   * @schema CreateBucketRequest#GrantReadACP
   */
  readonly grantReadAcp?: string;

  /**
   * @schema CreateBucketRequest#GrantWrite
   */
  readonly grantWrite?: string;

  /**
   * @schema CreateBucketRequest#GrantWriteACP
   */
  readonly grantWriteAcp?: string;

  /**
   * @schema CreateBucketRequest#ObjectLockEnabledForBucket
   */
  readonly objectLockEnabledForBucket?: boolean;

  /**
   * @schema CreateBucketRequest#OutpostId
   */
  readonly outpostId?: string;

}

/**
 * @schema CreateBucketResult
 */
export interface CreateBucketResult {
  /**
   * @schema CreateBucketResult#Location
   */
  readonly location?: string;

  /**
   * @schema CreateBucketResult#BucketArn
   */
  readonly bucketArn?: string;

}

/**
 * @schema CreateJobRequest
 */
export interface CreateJobRequest {
  /**
   * @schema CreateJobRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema CreateJobRequest#ConfirmationRequired
   */
  readonly confirmationRequired?: boolean;

  /**
   * @schema CreateJobRequest#Operation
   */
  readonly operation: JobOperation;

  /**
   * @schema CreateJobRequest#Report
   */
  readonly report: JobReport;

  /**
   * @schema CreateJobRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema CreateJobRequest#Manifest
   */
  readonly manifest: JobManifest;

  /**
   * @schema CreateJobRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateJobRequest#Priority
   */
  readonly priority: number;

  /**
   * @schema CreateJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateJobRequest#Tags
   */
  readonly tags?: S3Tag[];

}

/**
 * @schema CreateJobResult
 */
export interface CreateJobResult {
  /**
   * @schema CreateJobResult#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema DeleteAccessPointRequest
 */
export interface DeleteAccessPointRequest {
  /**
   * @schema DeleteAccessPointRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteAccessPointRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteAccessPointPolicyRequest
 */
export interface DeleteAccessPointPolicyRequest {
  /**
   * @schema DeleteAccessPointPolicyRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteAccessPointPolicyRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteBucketRequest
 */
export interface DeleteBucketRequest {
  /**
   * @schema DeleteBucketRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteBucketRequest#Bucket
   */
  readonly bucket: string;

}

/**
 * @schema DeleteBucketLifecycleConfigurationRequest
 */
export interface DeleteBucketLifecycleConfigurationRequest {
  /**
   * @schema DeleteBucketLifecycleConfigurationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteBucketLifecycleConfigurationRequest#Bucket
   */
  readonly bucket: string;

}

/**
 * @schema DeleteBucketPolicyRequest
 */
export interface DeleteBucketPolicyRequest {
  /**
   * @schema DeleteBucketPolicyRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteBucketPolicyRequest#Bucket
   */
  readonly bucket: string;

}

/**
 * @schema DeleteBucketTaggingRequest
 */
export interface DeleteBucketTaggingRequest {
  /**
   * @schema DeleteBucketTaggingRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteBucketTaggingRequest#Bucket
   */
  readonly bucket: string;

}

/**
 * @schema DeleteJobTaggingRequest
 */
export interface DeleteJobTaggingRequest {
  /**
   * @schema DeleteJobTaggingRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DeleteJobTaggingRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DeleteJobTaggingResult
 */
export interface DeleteJobTaggingResult {
}

/**
 * @schema DeletePublicAccessBlockRequest
 */
export interface DeletePublicAccessBlockRequest {
  /**
   * @schema DeletePublicAccessBlockRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema DeleteStorageLensConfigurationRequest
 */
export interface DeleteStorageLensConfigurationRequest {
  /**
   * @schema DeleteStorageLensConfigurationRequest#ConfigId
   */
  readonly configId: string;

  /**
   * @schema DeleteStorageLensConfigurationRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema DeleteStorageLensConfigurationTaggingRequest
 */
export interface DeleteStorageLensConfigurationTaggingRequest {
  /**
   * @schema DeleteStorageLensConfigurationTaggingRequest#ConfigId
   */
  readonly configId: string;

  /**
   * @schema DeleteStorageLensConfigurationTaggingRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema DeleteStorageLensConfigurationTaggingResult
 */
export interface DeleteStorageLensConfigurationTaggingResult {
}

/**
 * @schema DescribeJobRequest
 */
export interface DescribeJobRequest {
  /**
   * @schema DescribeJobRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema DescribeJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribeJobResult
 */
export interface DescribeJobResult {
  /**
   * @schema DescribeJobResult#Job
   */
  readonly job?: JobDescriptor;

}

/**
 * @schema GetAccessPointRequest
 */
export interface GetAccessPointRequest {
  /**
   * @schema GetAccessPointRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GetAccessPointRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetAccessPointResult
 */
export interface GetAccessPointResult {
  /**
   * @schema GetAccessPointResult#Name
   */
  readonly name?: string;

  /**
   * @schema GetAccessPointResult#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema GetAccessPointResult#NetworkOrigin
   */
  readonly networkOrigin?: string;

  /**
   * @schema GetAccessPointResult#VpcConfiguration
   */
  readonly vpcConfiguration?: VpcConfiguration;

  /**
   * @schema GetAccessPointResult#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration?: PublicAccessBlockConfiguration;

  /**
   * @schema GetAccessPointResult#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema GetAccessPointPolicyRequest
 */
export interface GetAccessPointPolicyRequest {
  /**
   * @schema GetAccessPointPolicyRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GetAccessPointPolicyRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetAccessPointPolicyResult
 */
export interface GetAccessPointPolicyResult {
  /**
   * @schema GetAccessPointPolicyResult#Policy
   */
  readonly policy?: string;

}

/**
 * @schema GetAccessPointPolicyStatusRequest
 */
export interface GetAccessPointPolicyStatusRequest {
  /**
   * @schema GetAccessPointPolicyStatusRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GetAccessPointPolicyStatusRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetAccessPointPolicyStatusResult
 */
export interface GetAccessPointPolicyStatusResult {
  /**
   * @schema GetAccessPointPolicyStatusResult#PolicyStatus
   */
  readonly policyStatus?: PolicyStatus;

}

/**
 * @schema GetBucketRequest
 */
export interface GetBucketRequest {
  /**
   * @schema GetBucketRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GetBucketRequest#Bucket
   */
  readonly bucket: string;

}

/**
 * @schema GetBucketResult
 */
export interface GetBucketResult {
  /**
   * @schema GetBucketResult#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema GetBucketResult#PublicAccessBlockEnabled
   */
  readonly publicAccessBlockEnabled?: boolean;

  /**
   * @schema GetBucketResult#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema GetBucketLifecycleConfigurationRequest
 */
export interface GetBucketLifecycleConfigurationRequest {
  /**
   * @schema GetBucketLifecycleConfigurationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GetBucketLifecycleConfigurationRequest#Bucket
   */
  readonly bucket: string;

}

/**
 * @schema GetBucketLifecycleConfigurationResult
 */
export interface GetBucketLifecycleConfigurationResult {
  /**
   * @schema GetBucketLifecycleConfigurationResult#Rules
   */
  readonly rules?: LifecycleRule[];

}

/**
 * @schema GetBucketPolicyRequest
 */
export interface GetBucketPolicyRequest {
  /**
   * @schema GetBucketPolicyRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GetBucketPolicyRequest#Bucket
   */
  readonly bucket: string;

}

/**
 * @schema GetBucketPolicyResult
 */
export interface GetBucketPolicyResult {
  /**
   * @schema GetBucketPolicyResult#Policy
   */
  readonly policy?: string;

}

/**
 * @schema GetBucketTaggingRequest
 */
export interface GetBucketTaggingRequest {
  /**
   * @schema GetBucketTaggingRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GetBucketTaggingRequest#Bucket
   */
  readonly bucket: string;

}

/**
 * @schema GetBucketTaggingResult
 */
export interface GetBucketTaggingResult {
  /**
   * @schema GetBucketTaggingResult#TagSet
   */
  readonly tagSet: S3Tag[];

}

/**
 * @schema GetJobTaggingRequest
 */
export interface GetJobTaggingRequest {
  /**
   * @schema GetJobTaggingRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema GetJobTaggingRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema GetJobTaggingResult
 */
export interface GetJobTaggingResult {
  /**
   * @schema GetJobTaggingResult#Tags
   */
  readonly tags?: S3Tag[];

}

/**
 * @schema GetPublicAccessBlockRequest
 */
export interface GetPublicAccessBlockRequest {
  /**
   * @schema GetPublicAccessBlockRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema GetPublicAccessBlockOutput
 */
export interface GetPublicAccessBlockOutput {
  /**
   * @schema GetPublicAccessBlockOutput#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration?: PublicAccessBlockConfiguration;

}

/**
 * @schema GetStorageLensConfigurationRequest
 */
export interface GetStorageLensConfigurationRequest {
  /**
   * @schema GetStorageLensConfigurationRequest#ConfigId
   */
  readonly configId: string;

  /**
   * @schema GetStorageLensConfigurationRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema GetStorageLensConfigurationResult
 */
export interface GetStorageLensConfigurationResult {
  /**
   * @schema GetStorageLensConfigurationResult#StorageLensConfiguration
   */
  readonly storageLensConfiguration?: StorageLensConfiguration;

}

/**
 * @schema GetStorageLensConfigurationTaggingRequest
 */
export interface GetStorageLensConfigurationTaggingRequest {
  /**
   * @schema GetStorageLensConfigurationTaggingRequest#ConfigId
   */
  readonly configId: string;

  /**
   * @schema GetStorageLensConfigurationTaggingRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema GetStorageLensConfigurationTaggingResult
 */
export interface GetStorageLensConfigurationTaggingResult {
  /**
   * @schema GetStorageLensConfigurationTaggingResult#Tags
   */
  readonly tags?: StorageLensTag[];

}

/**
 * @schema ListAccessPointsRequest
 */
export interface ListAccessPointsRequest {
  /**
   * @schema ListAccessPointsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ListAccessPointsRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema ListAccessPointsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAccessPointsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAccessPointsResult
 */
export interface ListAccessPointsResult {
  /**
   * @schema ListAccessPointsResult#AccessPointList
   */
  readonly accessPointList?: AccessPoint[];

  /**
   * @schema ListAccessPointsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobsRequest
 */
export interface ListJobsRequest {
  /**
   * @schema ListJobsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ListJobsRequest#JobStatuses
   */
  readonly jobStatuses?: string[];

  /**
   * @schema ListJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListJobsResult
 */
export interface ListJobsResult {
  /**
   * @schema ListJobsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListJobsResult#Jobs
   */
  readonly jobs?: JobListDescriptor[];

}

/**
 * @schema ListRegionalBucketsRequest
 */
export interface ListRegionalBucketsRequest {
  /**
   * @schema ListRegionalBucketsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ListRegionalBucketsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRegionalBucketsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListRegionalBucketsRequest#OutpostId
   */
  readonly outpostId?: string;

}

/**
 * @schema ListRegionalBucketsResult
 */
export interface ListRegionalBucketsResult {
  /**
   * @schema ListRegionalBucketsResult#RegionalBucketList
   */
  readonly regionalBucketList?: RegionalBucket[];

  /**
   * @schema ListRegionalBucketsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListStorageLensConfigurationsRequest
 */
export interface ListStorageLensConfigurationsRequest {
  /**
   * @schema ListStorageLensConfigurationsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema ListStorageLensConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListStorageLensConfigurationsResult
 */
export interface ListStorageLensConfigurationsResult {
  /**
   * @schema ListStorageLensConfigurationsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListStorageLensConfigurationsResult#StorageLensConfigurationList
   */
  readonly storageLensConfigurationList?: ListStorageLensConfigurationEntry[];

}

/**
 * @schema PutAccessPointPolicyRequest
 */
export interface PutAccessPointPolicyRequest {
  /**
   * @schema PutAccessPointPolicyRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema PutAccessPointPolicyRequest#Name
   */
  readonly name: string;

  /**
   * @schema PutAccessPointPolicyRequest#Policy
   */
  readonly policy: string;

}

/**
 * @schema PutBucketLifecycleConfigurationRequest
 */
export interface PutBucketLifecycleConfigurationRequest {
  /**
   * @schema PutBucketLifecycleConfigurationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema PutBucketLifecycleConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketLifecycleConfigurationRequest#LifecycleConfiguration
   */
  readonly lifecycleConfiguration?: LifecycleConfiguration;

}

/**
 * @schema PutBucketPolicyRequest
 */
export interface PutBucketPolicyRequest {
  /**
   * @schema PutBucketPolicyRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema PutBucketPolicyRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketPolicyRequest#ConfirmRemoveSelfBucketAccess
   */
  readonly confirmRemoveSelfBucketAccess?: boolean;

  /**
   * @schema PutBucketPolicyRequest#Policy
   */
  readonly policy: string;

}

/**
 * @schema PutBucketTaggingRequest
 */
export interface PutBucketTaggingRequest {
  /**
   * @schema PutBucketTaggingRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema PutBucketTaggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketTaggingRequest#Tagging
   */
  readonly tagging: Tagging;

}

/**
 * @schema PutJobTaggingRequest
 */
export interface PutJobTaggingRequest {
  /**
   * @schema PutJobTaggingRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema PutJobTaggingRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema PutJobTaggingRequest#Tags
   */
  readonly tags: S3Tag[];

}

/**
 * @schema PutJobTaggingResult
 */
export interface PutJobTaggingResult {
}

/**
 * @schema PutPublicAccessBlockRequest
 */
export interface PutPublicAccessBlockRequest {
  /**
   * @schema PutPublicAccessBlockRequest#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration: PublicAccessBlockConfiguration;

  /**
   * @schema PutPublicAccessBlockRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema PutStorageLensConfigurationRequest
 */
export interface PutStorageLensConfigurationRequest {
  /**
   * @schema PutStorageLensConfigurationRequest#ConfigId
   */
  readonly configId: string;

  /**
   * @schema PutStorageLensConfigurationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema PutStorageLensConfigurationRequest#StorageLensConfiguration
   */
  readonly storageLensConfiguration: StorageLensConfiguration;

  /**
   * @schema PutStorageLensConfigurationRequest#Tags
   */
  readonly tags?: StorageLensTag[];

}

/**
 * @schema PutStorageLensConfigurationTaggingRequest
 */
export interface PutStorageLensConfigurationTaggingRequest {
  /**
   * @schema PutStorageLensConfigurationTaggingRequest#ConfigId
   */
  readonly configId: string;

  /**
   * @schema PutStorageLensConfigurationTaggingRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema PutStorageLensConfigurationTaggingRequest#Tags
   */
  readonly tags: StorageLensTag[];

}

/**
 * @schema PutStorageLensConfigurationTaggingResult
 */
export interface PutStorageLensConfigurationTaggingResult {
}

/**
 * @schema UpdateJobPriorityRequest
 */
export interface UpdateJobPriorityRequest {
  /**
   * @schema UpdateJobPriorityRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema UpdateJobPriorityRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema UpdateJobPriorityRequest#Priority
   */
  readonly priority: number;

}

/**
 * @schema UpdateJobPriorityResult
 */
export interface UpdateJobPriorityResult {
  /**
   * @schema UpdateJobPriorityResult#JobId
   */
  readonly jobId: string;

  /**
   * @schema UpdateJobPriorityResult#Priority
   */
  readonly priority: number;

}

/**
 * @schema UpdateJobStatusRequest
 */
export interface UpdateJobStatusRequest {
  /**
   * @schema UpdateJobStatusRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema UpdateJobStatusRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema UpdateJobStatusRequest#RequestedJobStatus
   */
  readonly requestedJobStatus: string;

  /**
   * @schema UpdateJobStatusRequest#StatusUpdateReason
   */
  readonly statusUpdateReason?: string;

}

/**
 * @schema UpdateJobStatusResult
 */
export interface UpdateJobStatusResult {
  /**
   * @schema UpdateJobStatusResult#JobId
   */
  readonly jobId?: string;

  /**
   * @schema UpdateJobStatusResult#Status
   */
  readonly status?: string;

  /**
   * @schema UpdateJobStatusResult#StatusUpdateReason
   */
  readonly statusUpdateReason?: string;

}

/**
 * @schema VpcConfiguration
 */
export interface VpcConfiguration {
  /**
   * @schema VpcConfiguration#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema PublicAccessBlockConfiguration
 */
export interface PublicAccessBlockConfiguration {
  /**
   * @schema PublicAccessBlockConfiguration#BlockPublicAcls
   */
  readonly blockPublicAcls?: boolean;

  /**
   * @schema PublicAccessBlockConfiguration#IgnorePublicAcls
   */
  readonly ignorePublicAcls?: boolean;

  /**
   * @schema PublicAccessBlockConfiguration#BlockPublicPolicy
   */
  readonly blockPublicPolicy?: boolean;

  /**
   * @schema PublicAccessBlockConfiguration#RestrictPublicBuckets
   */
  readonly restrictPublicBuckets?: boolean;

}

/**
 * @schema CreateBucketConfiguration
 */
export interface CreateBucketConfiguration {
  /**
   * @schema CreateBucketConfiguration#LocationConstraint
   */
  readonly locationConstraint?: string;

}

/**
 * @schema JobOperation
 */
export interface JobOperation {
  /**
   * @schema JobOperation#LambdaInvoke
   */
  readonly lambdaInvoke?: LambdaInvokeOperation;

  /**
   * @schema JobOperation#S3PutObjectCopy
   */
  readonly s3PutObjectCopy?: S3CopyObjectOperation;

  /**
   * @schema JobOperation#S3PutObjectAcl
   */
  readonly s3PutObjectAcl?: S3SetObjectAclOperation;

  /**
   * @schema JobOperation#S3PutObjectTagging
   */
  readonly s3PutObjectTagging?: S3SetObjectTaggingOperation;

  /**
   * @schema JobOperation#S3InitiateRestoreObject
   */
  readonly s3InitiateRestoreObject?: S3InitiateRestoreObjectOperation;

  /**
   * @schema JobOperation#S3PutObjectLegalHold
   */
  readonly s3PutObjectLegalHold?: S3SetObjectLegalHoldOperation;

  /**
   * @schema JobOperation#S3PutObjectRetention
   */
  readonly s3PutObjectRetention?: S3SetObjectRetentionOperation;

}

/**
 * @schema JobReport
 */
export interface JobReport {
  /**
   * @schema JobReport#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema JobReport#Format
   */
  readonly format?: string;

  /**
   * @schema JobReport#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema JobReport#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema JobReport#ReportScope
   */
  readonly reportScope?: string;

}

/**
 * @schema JobManifest
 */
export interface JobManifest {
  /**
   * @schema JobManifest#Spec
   */
  readonly spec: JobManifestSpec;

  /**
   * @schema JobManifest#Location
   */
  readonly location: JobManifestLocation;

}

/**
 * @schema S3Tag
 */
export interface S3Tag {
  /**
   * @schema S3Tag#Key
   */
  readonly key: string;

  /**
   * @schema S3Tag#Value
   */
  readonly value: string;

}

/**
 * @schema JobDescriptor
 */
export interface JobDescriptor {
  /**
   * @schema JobDescriptor#JobId
   */
  readonly jobId?: string;

  /**
   * @schema JobDescriptor#ConfirmationRequired
   */
  readonly confirmationRequired?: boolean;

  /**
   * @schema JobDescriptor#Description
   */
  readonly description?: string;

  /**
   * @schema JobDescriptor#JobArn
   */
  readonly jobArn?: string;

  /**
   * @schema JobDescriptor#Status
   */
  readonly status?: string;

  /**
   * @schema JobDescriptor#Manifest
   */
  readonly manifest?: JobManifest;

  /**
   * @schema JobDescriptor#Operation
   */
  readonly operation?: JobOperation;

  /**
   * @schema JobDescriptor#Priority
   */
  readonly priority?: number;

  /**
   * @schema JobDescriptor#ProgressSummary
   */
  readonly progressSummary?: JobProgressSummary;

  /**
   * @schema JobDescriptor#StatusUpdateReason
   */
  readonly statusUpdateReason?: string;

  /**
   * @schema JobDescriptor#FailureReasons
   */
  readonly failureReasons?: JobFailure[];

  /**
   * @schema JobDescriptor#Report
   */
  readonly report?: JobReport;

  /**
   * @schema JobDescriptor#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema JobDescriptor#TerminationDate
   */
  readonly terminationDate?: string;

  /**
   * @schema JobDescriptor#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema JobDescriptor#SuspendedDate
   */
  readonly suspendedDate?: string;

  /**
   * @schema JobDescriptor#SuspendedCause
   */
  readonly suspendedCause?: string;

}

/**
 * @schema PolicyStatus
 */
export interface PolicyStatus {
  /**
   * @schema PolicyStatus#IsPublic
   */
  readonly isPublic?: boolean;

}

/**
 * @schema LifecycleRule
 */
export interface LifecycleRule {
  /**
   * @schema LifecycleRule#Expiration
   */
  readonly expiration?: LifecycleExpiration;

  /**
   * @schema LifecycleRule#ID
   */
  readonly id?: string;

  /**
   * @schema LifecycleRule#Filter
   */
  readonly filter?: LifecycleRuleFilter;

  /**
   * @schema LifecycleRule#Status
   */
  readonly status: string;

  /**
   * @schema LifecycleRule#Transitions
   */
  readonly transitions?: Transition[];

  /**
   * @schema LifecycleRule#NoncurrentVersionTransitions
   */
  readonly noncurrentVersionTransitions?: NoncurrentVersionTransition[];

  /**
   * @schema LifecycleRule#NoncurrentVersionExpiration
   */
  readonly noncurrentVersionExpiration?: NoncurrentVersionExpiration;

  /**
   * @schema LifecycleRule#AbortIncompleteMultipartUpload
   */
  readonly abortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;

}

/**
 * @schema StorageLensConfiguration
 */
export interface StorageLensConfiguration {
  /**
   * @schema StorageLensConfiguration#Id
   */
  readonly id: string;

  /**
   * @schema StorageLensConfiguration#AccountLevel
   */
  readonly accountLevel: AccountLevel;

  /**
   * @schema StorageLensConfiguration#Include
   */
  readonly include?: Include;

  /**
   * @schema StorageLensConfiguration#Exclude
   */
  readonly exclude?: Exclude;

  /**
   * @schema StorageLensConfiguration#DataExport
   */
  readonly dataExport?: StorageLensDataExport;

  /**
   * @schema StorageLensConfiguration#IsEnabled
   */
  readonly isEnabled: boolean;

  /**
   * @schema StorageLensConfiguration#AwsOrg
   */
  readonly awsOrg?: StorageLensAwsOrg;

  /**
   * @schema StorageLensConfiguration#StorageLensArn
   */
  readonly storageLensArn?: string;

}

/**
 * @schema StorageLensTag
 */
export interface StorageLensTag {
  /**
   * @schema StorageLensTag#Key
   */
  readonly key: string;

  /**
   * @schema StorageLensTag#Value
   */
  readonly value: string;

}

/**
 * @schema AccessPoint
 */
export interface AccessPoint {
  /**
   * @schema AccessPoint#Name
   */
  readonly name: string;

  /**
   * @schema AccessPoint#NetworkOrigin
   */
  readonly networkOrigin: string;

  /**
   * @schema AccessPoint#VpcConfiguration
   */
  readonly vpcConfiguration?: VpcConfiguration;

  /**
   * @schema AccessPoint#Bucket
   */
  readonly bucket: string;

  /**
   * @schema AccessPoint#AccessPointArn
   */
  readonly accessPointArn?: string;

}

/**
 * @schema JobListDescriptor
 */
export interface JobListDescriptor {
  /**
   * @schema JobListDescriptor#JobId
   */
  readonly jobId?: string;

  /**
   * @schema JobListDescriptor#Description
   */
  readonly description?: string;

  /**
   * @schema JobListDescriptor#Operation
   */
  readonly operation?: string;

  /**
   * @schema JobListDescriptor#Priority
   */
  readonly priority?: number;

  /**
   * @schema JobListDescriptor#Status
   */
  readonly status?: string;

  /**
   * @schema JobListDescriptor#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema JobListDescriptor#TerminationDate
   */
  readonly terminationDate?: string;

  /**
   * @schema JobListDescriptor#ProgressSummary
   */
  readonly progressSummary?: JobProgressSummary;

}

/**
 * @schema RegionalBucket
 */
export interface RegionalBucket {
  /**
   * @schema RegionalBucket#Bucket
   */
  readonly bucket: string;

  /**
   * @schema RegionalBucket#BucketArn
   */
  readonly bucketArn?: string;

  /**
   * @schema RegionalBucket#PublicAccessBlockEnabled
   */
  readonly publicAccessBlockEnabled: boolean;

  /**
   * @schema RegionalBucket#CreationDate
   */
  readonly creationDate: string;

  /**
   * @schema RegionalBucket#OutpostId
   */
  readonly outpostId?: string;

}

/**
 * @schema ListStorageLensConfigurationEntry
 */
export interface ListStorageLensConfigurationEntry {
  /**
   * @schema ListStorageLensConfigurationEntry#Id
   */
  readonly id: string;

  /**
   * @schema ListStorageLensConfigurationEntry#StorageLensArn
   */
  readonly storageLensArn: string;

  /**
   * @schema ListStorageLensConfigurationEntry#HomeRegion
   */
  readonly homeRegion: string;

  /**
   * @schema ListStorageLensConfigurationEntry#IsEnabled
   */
  readonly isEnabled?: boolean;

}

/**
 * @schema LifecycleConfiguration
 */
export interface LifecycleConfiguration {
  /**
   * @schema LifecycleConfiguration#Rules
   */
  readonly rules?: LifecycleRule[];

}

/**
 * @schema Tagging
 */
export interface Tagging {
  /**
   * @schema Tagging#TagSet
   */
  readonly tagSet: S3Tag[];

}

/**
 * @schema LambdaInvokeOperation
 */
export interface LambdaInvokeOperation {
  /**
   * @schema LambdaInvokeOperation#FunctionArn
   */
  readonly functionArn?: string;

}

/**
 * @schema S3CopyObjectOperation
 */
export interface S3CopyObjectOperation {
  /**
   * @schema S3CopyObjectOperation#TargetResource
   */
  readonly targetResource?: string;

  /**
   * @schema S3CopyObjectOperation#CannedAccessControlList
   */
  readonly cannedAccessControlList?: string;

  /**
   * @schema S3CopyObjectOperation#AccessControlGrants
   */
  readonly accessControlGrants?: S3Grant[];

  /**
   * @schema S3CopyObjectOperation#MetadataDirective
   */
  readonly metadataDirective?: string;

  /**
   * @schema S3CopyObjectOperation#ModifiedSinceConstraint
   */
  readonly modifiedSinceConstraint?: string;

  /**
   * @schema S3CopyObjectOperation#NewObjectMetadata
   */
  readonly newObjectMetadata?: S3ObjectMetadata;

  /**
   * @schema S3CopyObjectOperation#NewObjectTagging
   */
  readonly newObjectTagging?: S3Tag[];

  /**
   * @schema S3CopyObjectOperation#RedirectLocation
   */
  readonly redirectLocation?: string;

  /**
   * @schema S3CopyObjectOperation#RequesterPays
   */
  readonly requesterPays?: boolean;

  /**
   * @schema S3CopyObjectOperation#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema S3CopyObjectOperation#UnModifiedSinceConstraint
   */
  readonly unModifiedSinceConstraint?: string;

  /**
   * @schema S3CopyObjectOperation#SSEAwsKmsKeyId
   */
  readonly sseAwsKmsKeyId?: string;

  /**
   * @schema S3CopyObjectOperation#TargetKeyPrefix
   */
  readonly targetKeyPrefix?: string;

  /**
   * @schema S3CopyObjectOperation#ObjectLockLegalHoldStatus
   */
  readonly objectLockLegalHoldStatus?: string;

  /**
   * @schema S3CopyObjectOperation#ObjectLockMode
   */
  readonly objectLockMode?: string;

  /**
   * @schema S3CopyObjectOperation#ObjectLockRetainUntilDate
   */
  readonly objectLockRetainUntilDate?: string;

}

/**
 * @schema S3SetObjectAclOperation
 */
export interface S3SetObjectAclOperation {
  /**
   * @schema S3SetObjectAclOperation#AccessControlPolicy
   */
  readonly accessControlPolicy?: S3AccessControlPolicy;

}

/**
 * @schema S3SetObjectTaggingOperation
 */
export interface S3SetObjectTaggingOperation {
  /**
   * @schema S3SetObjectTaggingOperation#TagSet
   */
  readonly tagSet?: S3Tag[];

}

/**
 * @schema S3InitiateRestoreObjectOperation
 */
export interface S3InitiateRestoreObjectOperation {
  /**
   * @schema S3InitiateRestoreObjectOperation#ExpirationInDays
   */
  readonly expirationInDays?: number;

  /**
   * @schema S3InitiateRestoreObjectOperation#GlacierJobTier
   */
  readonly glacierJobTier?: string;

}

/**
 * @schema S3SetObjectLegalHoldOperation
 */
export interface S3SetObjectLegalHoldOperation {
  /**
   * @schema S3SetObjectLegalHoldOperation#LegalHold
   */
  readonly legalHold: S3ObjectLockLegalHold;

}

/**
 * @schema S3SetObjectRetentionOperation
 */
export interface S3SetObjectRetentionOperation {
  /**
   * @schema S3SetObjectRetentionOperation#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

  /**
   * @schema S3SetObjectRetentionOperation#Retention
   */
  readonly retention: S3Retention;

}

/**
 * @schema JobManifestSpec
 */
export interface JobManifestSpec {
  /**
   * @schema JobManifestSpec#Format
   */
  readonly format: string;

  /**
   * @schema JobManifestSpec#Fields
   */
  readonly fields?: string[];

}

/**
 * @schema JobManifestLocation
 */
export interface JobManifestLocation {
  /**
   * @schema JobManifestLocation#ObjectArn
   */
  readonly objectArn: string;

  /**
   * @schema JobManifestLocation#ObjectVersionId
   */
  readonly objectVersionId?: string;

  /**
   * @schema JobManifestLocation#ETag
   */
  readonly eTag: string;

}

/**
 * @schema JobProgressSummary
 */
export interface JobProgressSummary {
  /**
   * @schema JobProgressSummary#TotalNumberOfTasks
   */
  readonly totalNumberOfTasks?: number;

  /**
   * @schema JobProgressSummary#NumberOfTasksSucceeded
   */
  readonly numberOfTasksSucceeded?: number;

  /**
   * @schema JobProgressSummary#NumberOfTasksFailed
   */
  readonly numberOfTasksFailed?: number;

}

/**
 * @schema JobFailure
 */
export interface JobFailure {
  /**
   * @schema JobFailure#FailureCode
   */
  readonly failureCode?: string;

  /**
   * @schema JobFailure#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema LifecycleExpiration
 */
export interface LifecycleExpiration {
  /**
   * @schema LifecycleExpiration#Date
   */
  readonly date?: string;

  /**
   * @schema LifecycleExpiration#Days
   */
  readonly days?: number;

  /**
   * @schema LifecycleExpiration#ExpiredObjectDeleteMarker
   */
  readonly expiredObjectDeleteMarker?: boolean;

}

/**
 * @schema LifecycleRuleFilter
 */
export interface LifecycleRuleFilter {
  /**
   * @schema LifecycleRuleFilter#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema LifecycleRuleFilter#Tag
   */
  readonly tag?: S3Tag;

  /**
   * @schema LifecycleRuleFilter#And
   */
  readonly and?: LifecycleRuleAndOperator;

}

/**
 * @schema Transition
 */
export interface Transition {
  /**
   * @schema Transition#Date
   */
  readonly date?: string;

  /**
   * @schema Transition#Days
   */
  readonly days?: number;

  /**
   * @schema Transition#StorageClass
   */
  readonly storageClass?: string;

}

/**
 * @schema NoncurrentVersionTransition
 */
export interface NoncurrentVersionTransition {
  /**
   * @schema NoncurrentVersionTransition#NoncurrentDays
   */
  readonly noncurrentDays?: number;

  /**
   * @schema NoncurrentVersionTransition#StorageClass
   */
  readonly storageClass?: string;

}

/**
 * @schema NoncurrentVersionExpiration
 */
export interface NoncurrentVersionExpiration {
  /**
   * @schema NoncurrentVersionExpiration#NoncurrentDays
   */
  readonly noncurrentDays?: number;

}

/**
 * @schema AbortIncompleteMultipartUpload
 */
export interface AbortIncompleteMultipartUpload {
  /**
   * @schema AbortIncompleteMultipartUpload#DaysAfterInitiation
   */
  readonly daysAfterInitiation?: number;

}

/**
 * @schema AccountLevel
 */
export interface AccountLevel {
  /**
   * @schema AccountLevel#ActivityMetrics
   */
  readonly activityMetrics?: ActivityMetrics;

  /**
   * @schema AccountLevel#BucketLevel
   */
  readonly bucketLevel: BucketLevel;

}

/**
 * @schema Include
 */
export interface Include {
  /**
   * @schema Include#Buckets
   */
  readonly buckets?: string[];

  /**
   * @schema Include#Regions
   */
  readonly regions?: string[];

}

/**
 * @schema Exclude
 */
export interface Exclude {
  /**
   * @schema Exclude#Buckets
   */
  readonly buckets?: string[];

  /**
   * @schema Exclude#Regions
   */
  readonly regions?: string[];

}

/**
 * @schema StorageLensDataExport
 */
export interface StorageLensDataExport {
  /**
   * @schema StorageLensDataExport#S3BucketDestination
   */
  readonly s3BucketDestination: S3BucketDestination;

}

/**
 * @schema StorageLensAwsOrg
 */
export interface StorageLensAwsOrg {
  /**
   * @schema StorageLensAwsOrg#Arn
   */
  readonly arn: string;

}

/**
 * @schema S3Grant
 */
export interface S3Grant {
  /**
   * @schema S3Grant#Grantee
   */
  readonly grantee?: S3Grantee;

  /**
   * @schema S3Grant#Permission
   */
  readonly permission?: string;

}

/**
 * @schema S3ObjectMetadata
 */
export interface S3ObjectMetadata {
  /**
   * @schema S3ObjectMetadata#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema S3ObjectMetadata#ContentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema S3ObjectMetadata#ContentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema S3ObjectMetadata#ContentLanguage
   */
  readonly contentLanguage?: string;

  /**
   * @schema S3ObjectMetadata#UserMetadata
   */
  readonly userMetadata?: { [key: string]: string };

  /**
   * @schema S3ObjectMetadata#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema S3ObjectMetadata#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3ObjectMetadata#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema S3ObjectMetadata#HttpExpiresDate
   */
  readonly httpExpiresDate?: string;

  /**
   * @schema S3ObjectMetadata#RequesterCharged
   */
  readonly requesterCharged?: boolean;

  /**
   * @schema S3ObjectMetadata#SSEAlgorithm
   */
  readonly sseAlgorithm?: string;

}

/**
 * @schema S3AccessControlPolicy
 */
export interface S3AccessControlPolicy {
  /**
   * @schema S3AccessControlPolicy#AccessControlList
   */
  readonly accessControlList?: S3AccessControlList;

  /**
   * @schema S3AccessControlPolicy#CannedAccessControlList
   */
  readonly cannedAccessControlList?: string;

}

/**
 * @schema S3ObjectLockLegalHold
 */
export interface S3ObjectLockLegalHold {
  /**
   * @schema S3ObjectLockLegalHold#Status
   */
  readonly status: string;

}

/**
 * @schema S3Retention
 */
export interface S3Retention {
  /**
   * @schema S3Retention#RetainUntilDate
   */
  readonly retainUntilDate?: string;

  /**
   * @schema S3Retention#Mode
   */
  readonly mode?: string;

}

/**
 * @schema LifecycleRuleAndOperator
 */
export interface LifecycleRuleAndOperator {
  /**
   * @schema LifecycleRuleAndOperator#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema LifecycleRuleAndOperator#Tags
   */
  readonly tags?: S3Tag[];

}

/**
 * @schema ActivityMetrics
 */
export interface ActivityMetrics {
  /**
   * @schema ActivityMetrics#IsEnabled
   */
  readonly isEnabled?: boolean;

}

/**
 * @schema BucketLevel
 */
export interface BucketLevel {
  /**
   * @schema BucketLevel#ActivityMetrics
   */
  readonly activityMetrics?: ActivityMetrics;

  /**
   * @schema BucketLevel#PrefixLevel
   */
  readonly prefixLevel?: PrefixLevel;

}

/**
 * @schema S3BucketDestination
 */
export interface S3BucketDestination {
  /**
   * @schema S3BucketDestination#Format
   */
  readonly format: string;

  /**
   * @schema S3BucketDestination#OutputSchemaVersion
   */
  readonly outputSchemaVersion: string;

  /**
   * @schema S3BucketDestination#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3BucketDestination#Arn
   */
  readonly arn: string;

  /**
   * @schema S3BucketDestination#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3BucketDestination#Encryption
   */
  readonly encryption?: StorageLensDataExportEncryption;

}

/**
 * @schema S3Grantee
 */
export interface S3Grantee {
  /**
   * @schema S3Grantee#TypeIdentifier
   */
  readonly typeIdentifier?: string;

  /**
   * @schema S3Grantee#Identifier
   */
  readonly identifier?: string;

  /**
   * @schema S3Grantee#DisplayName
   */
  readonly displayName?: string;

}

/**
 * @schema S3AccessControlList
 */
export interface S3AccessControlList {
  /**
   * @schema S3AccessControlList#Owner
   */
  readonly owner: S3ObjectOwner;

  /**
   * @schema S3AccessControlList#Grants
   */
  readonly grants?: S3Grant[];

}

/**
 * @schema PrefixLevel
 */
export interface PrefixLevel {
  /**
   * @schema PrefixLevel#StorageMetrics
   */
  readonly storageMetrics: PrefixLevelStorageMetrics;

}

/**
 * @schema StorageLensDataExportEncryption
 */
export interface StorageLensDataExportEncryption {
  /**
   * @schema StorageLensDataExportEncryption#SSES3
   */
  readonly sses3?: Sses3;

  /**
   * @schema StorageLensDataExportEncryption#SSEKMS
   */
  readonly ssekms?: Ssekms;

}

/**
 * @schema S3ObjectOwner
 */
export interface S3ObjectOwner {
  /**
   * @schema S3ObjectOwner#ID
   */
  readonly id?: string;

  /**
   * @schema S3ObjectOwner#DisplayName
   */
  readonly displayName?: string;

}

/**
 * @schema PrefixLevelStorageMetrics
 */
export interface PrefixLevelStorageMetrics {
  /**
   * @schema PrefixLevelStorageMetrics#IsEnabled
   */
  readonly isEnabled?: boolean;

  /**
   * @schema PrefixLevelStorageMetrics#SelectionCriteria
   */
  readonly selectionCriteria?: SelectionCriteria;

}

/**
 * @schema Sses3
 */
export interface Sses3 {
}

/**
 * @schema Ssekms
 */
export interface Ssekms {
  /**
   * @schema Ssekms#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema SelectionCriteria
 */
export interface SelectionCriteria {
  /**
   * @schema SelectionCriteria#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema SelectionCriteria#MaxDepth
   */
  readonly maxDepth?: number;

  /**
   * @schema SelectionCriteria#MinStorageBytesPercentage
   */
  readonly minStorageBytesPercentage?: number;

}
