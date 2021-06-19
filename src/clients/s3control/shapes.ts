/**
 * @schema S3ControlCreateAccessPointRequest
 */
export interface S3ControlCreateAccessPointRequest {
  /**
   * @schema S3ControlCreateAccessPointRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlCreateAccessPointRequest#Name
   */
  readonly name: string;

  /**
   * @schema S3ControlCreateAccessPointRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3ControlCreateAccessPointRequest#VpcConfiguration
   */
  readonly vpcConfiguration?: S3ControlVpcConfiguration;

  /**
   * @schema S3ControlCreateAccessPointRequest#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration?: S3ControlPublicAccessBlockConfiguration;

}

/**
 * @schema S3ControlCreateAccessPointResult
 */
export interface S3ControlCreateAccessPointResult {
  /**
   * @schema S3ControlCreateAccessPointResult#AccessPointArn
   */
  readonly accessPointArn?: string;

}

/**
 * @schema S3ControlCreateBucketRequest
 */
export interface S3ControlCreateBucketRequest {
  /**
   * @schema S3ControlCreateBucketRequest#ACL
   */
  readonly acl?: string;

  /**
   * @schema S3ControlCreateBucketRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3ControlCreateBucketRequest#CreateBucketConfiguration
   */
  readonly createBucketConfiguration?: S3ControlCreateBucketConfiguration;

  /**
   * @schema S3ControlCreateBucketRequest#GrantFullControl
   */
  readonly grantFullControl?: string;

  /**
   * @schema S3ControlCreateBucketRequest#GrantRead
   */
  readonly grantRead?: string;

  /**
   * @schema S3ControlCreateBucketRequest#GrantReadACP
   */
  readonly grantReadAcp?: string;

  /**
   * @schema S3ControlCreateBucketRequest#GrantWrite
   */
  readonly grantWrite?: string;

  /**
   * @schema S3ControlCreateBucketRequest#GrantWriteACP
   */
  readonly grantWriteAcp?: string;

  /**
   * @schema S3ControlCreateBucketRequest#ObjectLockEnabledForBucket
   */
  readonly objectLockEnabledForBucket?: boolean;

  /**
   * @schema S3ControlCreateBucketRequest#OutpostId
   */
  readonly outpostId?: string;

}

/**
 * @schema S3ControlCreateBucketResult
 */
export interface S3ControlCreateBucketResult {
  /**
   * @schema S3ControlCreateBucketResult#Location
   */
  readonly location?: string;

  /**
   * @schema S3ControlCreateBucketResult#BucketArn
   */
  readonly bucketArn?: string;

}

/**
 * @schema S3ControlCreateJobRequest
 */
export interface S3ControlCreateJobRequest {
  /**
   * @schema S3ControlCreateJobRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlCreateJobRequest#ConfirmationRequired
   */
  readonly confirmationRequired?: boolean;

  /**
   * @schema S3ControlCreateJobRequest#Operation
   */
  readonly operation: S3ControlJobOperation;

  /**
   * @schema S3ControlCreateJobRequest#Report
   */
  readonly report: S3ControlJobReport;

  /**
   * @schema S3ControlCreateJobRequest#ClientRequestToken
   */
  readonly clientRequestToken: string;

  /**
   * @schema S3ControlCreateJobRequest#Manifest
   */
  readonly manifest: S3ControlJobManifest;

  /**
   * @schema S3ControlCreateJobRequest#Description
   */
  readonly description?: string;

  /**
   * @schema S3ControlCreateJobRequest#Priority
   */
  readonly priority: number;

  /**
   * @schema S3ControlCreateJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema S3ControlCreateJobRequest#Tags
   */
  readonly tags?: S3ControlS3Tag[];

}

/**
 * @schema S3ControlCreateJobResult
 */
export interface S3ControlCreateJobResult {
  /**
   * @schema S3ControlCreateJobResult#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema S3ControlDeleteAccessPointRequest
 */
export interface S3ControlDeleteAccessPointRequest {
  /**
   * @schema S3ControlDeleteAccessPointRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlDeleteAccessPointRequest#Name
   */
  readonly name: string;

}

/**
 * @schema S3ControlDeleteAccessPointPolicyRequest
 */
export interface S3ControlDeleteAccessPointPolicyRequest {
  /**
   * @schema S3ControlDeleteAccessPointPolicyRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlDeleteAccessPointPolicyRequest#Name
   */
  readonly name: string;

}

/**
 * @schema S3ControlDeleteBucketRequest
 */
export interface S3ControlDeleteBucketRequest {
  /**
   * @schema S3ControlDeleteBucketRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlDeleteBucketRequest#Bucket
   */
  readonly bucket: string;

}

/**
 * @schema S3ControlDeleteBucketLifecycleConfigurationRequest
 */
export interface S3ControlDeleteBucketLifecycleConfigurationRequest {
  /**
   * @schema S3ControlDeleteBucketLifecycleConfigurationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlDeleteBucketLifecycleConfigurationRequest#Bucket
   */
  readonly bucket: string;

}

/**
 * @schema S3ControlDeleteBucketPolicyRequest
 */
export interface S3ControlDeleteBucketPolicyRequest {
  /**
   * @schema S3ControlDeleteBucketPolicyRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlDeleteBucketPolicyRequest#Bucket
   */
  readonly bucket: string;

}

/**
 * @schema S3ControlDeleteBucketTaggingRequest
 */
export interface S3ControlDeleteBucketTaggingRequest {
  /**
   * @schema S3ControlDeleteBucketTaggingRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlDeleteBucketTaggingRequest#Bucket
   */
  readonly bucket: string;

}

/**
 * @schema S3ControlDeleteJobTaggingRequest
 */
export interface S3ControlDeleteJobTaggingRequest {
  /**
   * @schema S3ControlDeleteJobTaggingRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlDeleteJobTaggingRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema S3ControlDeleteJobTaggingResult
 */
export interface S3ControlDeleteJobTaggingResult {
}

/**
 * @schema S3ControlDeletePublicAccessBlockRequest
 */
export interface S3ControlDeletePublicAccessBlockRequest {
  /**
   * @schema S3ControlDeletePublicAccessBlockRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema S3ControlDeleteStorageLensConfigurationRequest
 */
export interface S3ControlDeleteStorageLensConfigurationRequest {
  /**
   * @schema S3ControlDeleteStorageLensConfigurationRequest#ConfigId
   */
  readonly configId: string;

  /**
   * @schema S3ControlDeleteStorageLensConfigurationRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema S3ControlDeleteStorageLensConfigurationTaggingRequest
 */
export interface S3ControlDeleteStorageLensConfigurationTaggingRequest {
  /**
   * @schema S3ControlDeleteStorageLensConfigurationTaggingRequest#ConfigId
   */
  readonly configId: string;

  /**
   * @schema S3ControlDeleteStorageLensConfigurationTaggingRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema S3ControlDeleteStorageLensConfigurationTaggingResult
 */
export interface S3ControlDeleteStorageLensConfigurationTaggingResult {
}

/**
 * @schema S3ControlDescribeJobRequest
 */
export interface S3ControlDescribeJobRequest {
  /**
   * @schema S3ControlDescribeJobRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlDescribeJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema S3ControlDescribeJobResult
 */
export interface S3ControlDescribeJobResult {
  /**
   * @schema S3ControlDescribeJobResult#Job
   */
  readonly job?: S3ControlJobDescriptor;

}

/**
 * @schema S3ControlGetAccessPointRequest
 */
export interface S3ControlGetAccessPointRequest {
  /**
   * @schema S3ControlGetAccessPointRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlGetAccessPointRequest#Name
   */
  readonly name: string;

}

/**
 * @schema S3ControlGetAccessPointResult
 */
export interface S3ControlGetAccessPointResult {
  /**
   * @schema S3ControlGetAccessPointResult#Name
   */
  readonly name?: string;

  /**
   * @schema S3ControlGetAccessPointResult#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ControlGetAccessPointResult#NetworkOrigin
   */
  readonly networkOrigin?: string;

  /**
   * @schema S3ControlGetAccessPointResult#VpcConfiguration
   */
  readonly vpcConfiguration?: S3ControlVpcConfiguration;

  /**
   * @schema S3ControlGetAccessPointResult#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration?: S3ControlPublicAccessBlockConfiguration;

  /**
   * @schema S3ControlGetAccessPointResult#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema S3ControlGetAccessPointPolicyRequest
 */
export interface S3ControlGetAccessPointPolicyRequest {
  /**
   * @schema S3ControlGetAccessPointPolicyRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlGetAccessPointPolicyRequest#Name
   */
  readonly name: string;

}

/**
 * @schema S3ControlGetAccessPointPolicyResult
 */
export interface S3ControlGetAccessPointPolicyResult {
  /**
   * @schema S3ControlGetAccessPointPolicyResult#Policy
   */
  readonly policy?: string;

}

/**
 * @schema S3ControlGetAccessPointPolicyStatusRequest
 */
export interface S3ControlGetAccessPointPolicyStatusRequest {
  /**
   * @schema S3ControlGetAccessPointPolicyStatusRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlGetAccessPointPolicyStatusRequest#Name
   */
  readonly name: string;

}

/**
 * @schema S3ControlGetAccessPointPolicyStatusResult
 */
export interface S3ControlGetAccessPointPolicyStatusResult {
  /**
   * @schema S3ControlGetAccessPointPolicyStatusResult#PolicyStatus
   */
  readonly policyStatus?: S3ControlPolicyStatus;

}

/**
 * @schema S3ControlGetBucketRequest
 */
export interface S3ControlGetBucketRequest {
  /**
   * @schema S3ControlGetBucketRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlGetBucketRequest#Bucket
   */
  readonly bucket: string;

}

/**
 * @schema S3ControlGetBucketResult
 */
export interface S3ControlGetBucketResult {
  /**
   * @schema S3ControlGetBucketResult#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ControlGetBucketResult#PublicAccessBlockEnabled
   */
  readonly publicAccessBlockEnabled?: boolean;

  /**
   * @schema S3ControlGetBucketResult#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema S3ControlGetBucketLifecycleConfigurationRequest
 */
export interface S3ControlGetBucketLifecycleConfigurationRequest {
  /**
   * @schema S3ControlGetBucketLifecycleConfigurationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlGetBucketLifecycleConfigurationRequest#Bucket
   */
  readonly bucket: string;

}

/**
 * @schema S3ControlGetBucketLifecycleConfigurationResult
 */
export interface S3ControlGetBucketLifecycleConfigurationResult {
  /**
   * @schema S3ControlGetBucketLifecycleConfigurationResult#Rules
   */
  readonly rules?: S3ControlLifecycleRule[];

}

/**
 * @schema S3ControlGetBucketPolicyRequest
 */
export interface S3ControlGetBucketPolicyRequest {
  /**
   * @schema S3ControlGetBucketPolicyRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlGetBucketPolicyRequest#Bucket
   */
  readonly bucket: string;

}

/**
 * @schema S3ControlGetBucketPolicyResult
 */
export interface S3ControlGetBucketPolicyResult {
  /**
   * @schema S3ControlGetBucketPolicyResult#Policy
   */
  readonly policy?: string;

}

/**
 * @schema S3ControlGetBucketTaggingRequest
 */
export interface S3ControlGetBucketTaggingRequest {
  /**
   * @schema S3ControlGetBucketTaggingRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlGetBucketTaggingRequest#Bucket
   */
  readonly bucket: string;

}

/**
 * @schema S3ControlGetBucketTaggingResult
 */
export interface S3ControlGetBucketTaggingResult {
  /**
   * @schema S3ControlGetBucketTaggingResult#TagSet
   */
  readonly tagSet: S3ControlS3Tag[];

}

/**
 * @schema S3ControlGetJobTaggingRequest
 */
export interface S3ControlGetJobTaggingRequest {
  /**
   * @schema S3ControlGetJobTaggingRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlGetJobTaggingRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema S3ControlGetJobTaggingResult
 */
export interface S3ControlGetJobTaggingResult {
  /**
   * @schema S3ControlGetJobTaggingResult#Tags
   */
  readonly tags?: S3ControlS3Tag[];

}

/**
 * @schema S3ControlGetPublicAccessBlockRequest
 */
export interface S3ControlGetPublicAccessBlockRequest {
  /**
   * @schema S3ControlGetPublicAccessBlockRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema S3ControlGetPublicAccessBlockOutput
 */
export interface S3ControlGetPublicAccessBlockOutput {
  /**
   * @schema S3ControlGetPublicAccessBlockOutput#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration?: S3ControlPublicAccessBlockConfiguration;

}

/**
 * @schema S3ControlGetStorageLensConfigurationRequest
 */
export interface S3ControlGetStorageLensConfigurationRequest {
  /**
   * @schema S3ControlGetStorageLensConfigurationRequest#ConfigId
   */
  readonly configId: string;

  /**
   * @schema S3ControlGetStorageLensConfigurationRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema S3ControlGetStorageLensConfigurationResult
 */
export interface S3ControlGetStorageLensConfigurationResult {
  /**
   * @schema S3ControlGetStorageLensConfigurationResult#StorageLensConfiguration
   */
  readonly storageLensConfiguration?: S3ControlStorageLensConfiguration;

}

/**
 * @schema S3ControlGetStorageLensConfigurationTaggingRequest
 */
export interface S3ControlGetStorageLensConfigurationTaggingRequest {
  /**
   * @schema S3ControlGetStorageLensConfigurationTaggingRequest#ConfigId
   */
  readonly configId: string;

  /**
   * @schema S3ControlGetStorageLensConfigurationTaggingRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema S3ControlGetStorageLensConfigurationTaggingResult
 */
export interface S3ControlGetStorageLensConfigurationTaggingResult {
  /**
   * @schema S3ControlGetStorageLensConfigurationTaggingResult#Tags
   */
  readonly tags?: S3ControlStorageLensTag[];

}

/**
 * @schema S3ControlListAccessPointsRequest
 */
export interface S3ControlListAccessPointsRequest {
  /**
   * @schema S3ControlListAccessPointsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlListAccessPointsRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ControlListAccessPointsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema S3ControlListAccessPointsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema S3ControlListAccessPointsResult
 */
export interface S3ControlListAccessPointsResult {
  /**
   * @schema S3ControlListAccessPointsResult#AccessPointList
   */
  readonly accessPointList?: S3ControlAccessPoint[];

  /**
   * @schema S3ControlListAccessPointsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema S3ControlListJobsRequest
 */
export interface S3ControlListJobsRequest {
  /**
   * @schema S3ControlListJobsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlListJobsRequest#JobStatuses
   */
  readonly jobStatuses?: string[];

  /**
   * @schema S3ControlListJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema S3ControlListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema S3ControlListJobsResult
 */
export interface S3ControlListJobsResult {
  /**
   * @schema S3ControlListJobsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema S3ControlListJobsResult#Jobs
   */
  readonly jobs?: S3ControlJobListDescriptor[];

}

/**
 * @schema S3ControlListRegionalBucketsRequest
 */
export interface S3ControlListRegionalBucketsRequest {
  /**
   * @schema S3ControlListRegionalBucketsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlListRegionalBucketsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema S3ControlListRegionalBucketsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema S3ControlListRegionalBucketsRequest#OutpostId
   */
  readonly outpostId?: string;

}

/**
 * @schema S3ControlListRegionalBucketsResult
 */
export interface S3ControlListRegionalBucketsResult {
  /**
   * @schema S3ControlListRegionalBucketsResult#RegionalBucketList
   */
  readonly regionalBucketList?: S3ControlRegionalBucket[];

  /**
   * @schema S3ControlListRegionalBucketsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema S3ControlListStorageLensConfigurationsRequest
 */
export interface S3ControlListStorageLensConfigurationsRequest {
  /**
   * @schema S3ControlListStorageLensConfigurationsRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlListStorageLensConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema S3ControlListStorageLensConfigurationsResult
 */
export interface S3ControlListStorageLensConfigurationsResult {
  /**
   * @schema S3ControlListStorageLensConfigurationsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema S3ControlListStorageLensConfigurationsResult#StorageLensConfigurationList
   */
  readonly storageLensConfigurationList?: S3ControlListStorageLensConfigurationEntry[];

}

/**
 * @schema S3ControlPutAccessPointPolicyRequest
 */
export interface S3ControlPutAccessPointPolicyRequest {
  /**
   * @schema S3ControlPutAccessPointPolicyRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlPutAccessPointPolicyRequest#Name
   */
  readonly name: string;

  /**
   * @schema S3ControlPutAccessPointPolicyRequest#Policy
   */
  readonly policy: string;

}

/**
 * @schema S3ControlPutBucketLifecycleConfigurationRequest
 */
export interface S3ControlPutBucketLifecycleConfigurationRequest {
  /**
   * @schema S3ControlPutBucketLifecycleConfigurationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlPutBucketLifecycleConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3ControlPutBucketLifecycleConfigurationRequest#LifecycleConfiguration
   */
  readonly lifecycleConfiguration?: S3ControlLifecycleConfiguration;

}

/**
 * @schema S3ControlPutBucketPolicyRequest
 */
export interface S3ControlPutBucketPolicyRequest {
  /**
   * @schema S3ControlPutBucketPolicyRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlPutBucketPolicyRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3ControlPutBucketPolicyRequest#ConfirmRemoveSelfBucketAccess
   */
  readonly confirmRemoveSelfBucketAccess?: boolean;

  /**
   * @schema S3ControlPutBucketPolicyRequest#Policy
   */
  readonly policy: string;

}

/**
 * @schema S3ControlPutBucketTaggingRequest
 */
export interface S3ControlPutBucketTaggingRequest {
  /**
   * @schema S3ControlPutBucketTaggingRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlPutBucketTaggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3ControlPutBucketTaggingRequest#Tagging
   */
  readonly tagging: S3ControlTagging;

}

/**
 * @schema S3ControlPutJobTaggingRequest
 */
export interface S3ControlPutJobTaggingRequest {
  /**
   * @schema S3ControlPutJobTaggingRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlPutJobTaggingRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema S3ControlPutJobTaggingRequest#Tags
   */
  readonly tags: S3ControlS3Tag[];

}

/**
 * @schema S3ControlPutJobTaggingResult
 */
export interface S3ControlPutJobTaggingResult {
}

/**
 * @schema S3ControlPutPublicAccessBlockRequest
 */
export interface S3ControlPutPublicAccessBlockRequest {
  /**
   * @schema S3ControlPutPublicAccessBlockRequest#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration: S3ControlPublicAccessBlockConfiguration;

  /**
   * @schema S3ControlPutPublicAccessBlockRequest#AccountId
   */
  readonly accountId: string;

}

/**
 * @schema S3ControlPutStorageLensConfigurationRequest
 */
export interface S3ControlPutStorageLensConfigurationRequest {
  /**
   * @schema S3ControlPutStorageLensConfigurationRequest#ConfigId
   */
  readonly configId: string;

  /**
   * @schema S3ControlPutStorageLensConfigurationRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlPutStorageLensConfigurationRequest#StorageLensConfiguration
   */
  readonly storageLensConfiguration: S3ControlStorageLensConfiguration;

  /**
   * @schema S3ControlPutStorageLensConfigurationRequest#Tags
   */
  readonly tags?: S3ControlStorageLensTag[];

}

/**
 * @schema S3ControlPutStorageLensConfigurationTaggingRequest
 */
export interface S3ControlPutStorageLensConfigurationTaggingRequest {
  /**
   * @schema S3ControlPutStorageLensConfigurationTaggingRequest#ConfigId
   */
  readonly configId: string;

  /**
   * @schema S3ControlPutStorageLensConfigurationTaggingRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlPutStorageLensConfigurationTaggingRequest#Tags
   */
  readonly tags: S3ControlStorageLensTag[];

}

/**
 * @schema S3ControlPutStorageLensConfigurationTaggingResult
 */
export interface S3ControlPutStorageLensConfigurationTaggingResult {
}

/**
 * @schema S3ControlUpdateJobPriorityRequest
 */
export interface S3ControlUpdateJobPriorityRequest {
  /**
   * @schema S3ControlUpdateJobPriorityRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlUpdateJobPriorityRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema S3ControlUpdateJobPriorityRequest#Priority
   */
  readonly priority: number;

}

/**
 * @schema S3ControlUpdateJobPriorityResult
 */
export interface S3ControlUpdateJobPriorityResult {
  /**
   * @schema S3ControlUpdateJobPriorityResult#JobId
   */
  readonly jobId: string;

  /**
   * @schema S3ControlUpdateJobPriorityResult#Priority
   */
  readonly priority: number;

}

/**
 * @schema S3ControlUpdateJobStatusRequest
 */
export interface S3ControlUpdateJobStatusRequest {
  /**
   * @schema S3ControlUpdateJobStatusRequest#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlUpdateJobStatusRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema S3ControlUpdateJobStatusRequest#RequestedJobStatus
   */
  readonly requestedJobStatus: string;

  /**
   * @schema S3ControlUpdateJobStatusRequest#StatusUpdateReason
   */
  readonly statusUpdateReason?: string;

}

/**
 * @schema S3ControlUpdateJobStatusResult
 */
export interface S3ControlUpdateJobStatusResult {
  /**
   * @schema S3ControlUpdateJobStatusResult#JobId
   */
  readonly jobId?: string;

  /**
   * @schema S3ControlUpdateJobStatusResult#Status
   */
  readonly status?: string;

  /**
   * @schema S3ControlUpdateJobStatusResult#StatusUpdateReason
   */
  readonly statusUpdateReason?: string;

}

/**
 * @schema S3ControlVpcConfiguration
 */
export interface S3ControlVpcConfiguration {
  /**
   * @schema S3ControlVpcConfiguration#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema S3ControlPublicAccessBlockConfiguration
 */
export interface S3ControlPublicAccessBlockConfiguration {
  /**
   * @schema S3ControlPublicAccessBlockConfiguration#BlockPublicAcls
   */
  readonly blockPublicAcls?: boolean;

  /**
   * @schema S3ControlPublicAccessBlockConfiguration#IgnorePublicAcls
   */
  readonly ignorePublicAcls?: boolean;

  /**
   * @schema S3ControlPublicAccessBlockConfiguration#BlockPublicPolicy
   */
  readonly blockPublicPolicy?: boolean;

  /**
   * @schema S3ControlPublicAccessBlockConfiguration#RestrictPublicBuckets
   */
  readonly restrictPublicBuckets?: boolean;

}

/**
 * @schema S3ControlCreateBucketConfiguration
 */
export interface S3ControlCreateBucketConfiguration {
  /**
   * @schema S3ControlCreateBucketConfiguration#LocationConstraint
   */
  readonly locationConstraint?: string;

}

/**
 * @schema S3ControlJobOperation
 */
export interface S3ControlJobOperation {
  /**
   * @schema S3ControlJobOperation#LambdaInvoke
   */
  readonly lambdaInvoke?: S3ControlLambdaInvokeOperation;

  /**
   * @schema S3ControlJobOperation#S3PutObjectCopy
   */
  readonly s3PutObjectCopy?: S3ControlS3CopyObjectOperation;

  /**
   * @schema S3ControlJobOperation#S3PutObjectAcl
   */
  readonly s3PutObjectAcl?: S3ControlS3SetObjectAclOperation;

  /**
   * @schema S3ControlJobOperation#S3PutObjectTagging
   */
  readonly s3PutObjectTagging?: S3ControlS3SetObjectTaggingOperation;

  /**
   * @schema S3ControlJobOperation#S3InitiateRestoreObject
   */
  readonly s3InitiateRestoreObject?: S3ControlS3InitiateRestoreObjectOperation;

  /**
   * @schema S3ControlJobOperation#S3PutObjectLegalHold
   */
  readonly s3PutObjectLegalHold?: S3ControlS3SetObjectLegalHoldOperation;

  /**
   * @schema S3ControlJobOperation#S3PutObjectRetention
   */
  readonly s3PutObjectRetention?: S3ControlS3SetObjectRetentionOperation;

}

/**
 * @schema S3ControlJobReport
 */
export interface S3ControlJobReport {
  /**
   * @schema S3ControlJobReport#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ControlJobReport#Format
   */
  readonly format?: string;

  /**
   * @schema S3ControlJobReport#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema S3ControlJobReport#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ControlJobReport#ReportScope
   */
  readonly reportScope?: string;

}

/**
 * @schema S3ControlJobManifest
 */
export interface S3ControlJobManifest {
  /**
   * @schema S3ControlJobManifest#Spec
   */
  readonly spec: S3ControlJobManifestSpec;

  /**
   * @schema S3ControlJobManifest#Location
   */
  readonly location: S3ControlJobManifestLocation;

}

/**
 * @schema S3ControlS3Tag
 */
export interface S3ControlS3Tag {
  /**
   * @schema S3ControlS3Tag#Key
   */
  readonly key: string;

  /**
   * @schema S3ControlS3Tag#Value
   */
  readonly value: string;

}

/**
 * @schema S3ControlJobDescriptor
 */
export interface S3ControlJobDescriptor {
  /**
   * @schema S3ControlJobDescriptor#JobId
   */
  readonly jobId?: string;

  /**
   * @schema S3ControlJobDescriptor#ConfirmationRequired
   */
  readonly confirmationRequired?: boolean;

  /**
   * @schema S3ControlJobDescriptor#Description
   */
  readonly description?: string;

  /**
   * @schema S3ControlJobDescriptor#JobArn
   */
  readonly jobArn?: string;

  /**
   * @schema S3ControlJobDescriptor#Status
   */
  readonly status?: string;

  /**
   * @schema S3ControlJobDescriptor#Manifest
   */
  readonly manifest?: S3ControlJobManifest;

  /**
   * @schema S3ControlJobDescriptor#Operation
   */
  readonly operation?: S3ControlJobOperation;

  /**
   * @schema S3ControlJobDescriptor#Priority
   */
  readonly priority?: number;

  /**
   * @schema S3ControlJobDescriptor#ProgressSummary
   */
  readonly progressSummary?: S3ControlJobProgressSummary;

  /**
   * @schema S3ControlJobDescriptor#StatusUpdateReason
   */
  readonly statusUpdateReason?: string;

  /**
   * @schema S3ControlJobDescriptor#FailureReasons
   */
  readonly failureReasons?: S3ControlJobFailure[];

  /**
   * @schema S3ControlJobDescriptor#Report
   */
  readonly report?: S3ControlJobReport;

  /**
   * @schema S3ControlJobDescriptor#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema S3ControlJobDescriptor#TerminationDate
   */
  readonly terminationDate?: string;

  /**
   * @schema S3ControlJobDescriptor#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema S3ControlJobDescriptor#SuspendedDate
   */
  readonly suspendedDate?: string;

  /**
   * @schema S3ControlJobDescriptor#SuspendedCause
   */
  readonly suspendedCause?: string;

}

/**
 * @schema S3ControlPolicyStatus
 */
export interface S3ControlPolicyStatus {
  /**
   * @schema S3ControlPolicyStatus#IsPublic
   */
  readonly isPublic?: boolean;

}

/**
 * @schema S3ControlLifecycleRule
 */
export interface S3ControlLifecycleRule {
  /**
   * @schema S3ControlLifecycleRule#Expiration
   */
  readonly expiration?: S3ControlLifecycleExpiration;

  /**
   * @schema S3ControlLifecycleRule#ID
   */
  readonly id?: string;

  /**
   * @schema S3ControlLifecycleRule#Filter
   */
  readonly filter?: S3ControlLifecycleRuleFilter;

  /**
   * @schema S3ControlLifecycleRule#Status
   */
  readonly status: string;

  /**
   * @schema S3ControlLifecycleRule#Transitions
   */
  readonly transitions?: S3ControlTransition[];

  /**
   * @schema S3ControlLifecycleRule#NoncurrentVersionTransitions
   */
  readonly noncurrentVersionTransitions?: S3ControlNoncurrentVersionTransition[];

  /**
   * @schema S3ControlLifecycleRule#NoncurrentVersionExpiration
   */
  readonly noncurrentVersionExpiration?: S3ControlNoncurrentVersionExpiration;

  /**
   * @schema S3ControlLifecycleRule#AbortIncompleteMultipartUpload
   */
  readonly abortIncompleteMultipartUpload?: S3ControlAbortIncompleteMultipartUpload;

}

/**
 * @schema S3ControlStorageLensConfiguration
 */
export interface S3ControlStorageLensConfiguration {
  /**
   * @schema S3ControlStorageLensConfiguration#Id
   */
  readonly id: string;

  /**
   * @schema S3ControlStorageLensConfiguration#AccountLevel
   */
  readonly accountLevel: S3ControlAccountLevel;

  /**
   * @schema S3ControlStorageLensConfiguration#Include
   */
  readonly include?: S3ControlInclude;

  /**
   * @schema S3ControlStorageLensConfiguration#Exclude
   */
  readonly exclude?: S3ControlExclude;

  /**
   * @schema S3ControlStorageLensConfiguration#DataExport
   */
  readonly dataExport?: S3ControlStorageLensDataExport;

  /**
   * @schema S3ControlStorageLensConfiguration#IsEnabled
   */
  readonly isEnabled: boolean;

  /**
   * @schema S3ControlStorageLensConfiguration#AwsOrg
   */
  readonly awsOrg?: S3ControlStorageLensAwsOrg;

  /**
   * @schema S3ControlStorageLensConfiguration#StorageLensArn
   */
  readonly storageLensArn?: string;

}

/**
 * @schema S3ControlStorageLensTag
 */
export interface S3ControlStorageLensTag {
  /**
   * @schema S3ControlStorageLensTag#Key
   */
  readonly key: string;

  /**
   * @schema S3ControlStorageLensTag#Value
   */
  readonly value: string;

}

/**
 * @schema S3ControlAccessPoint
 */
export interface S3ControlAccessPoint {
  /**
   * @schema S3ControlAccessPoint#Name
   */
  readonly name: string;

  /**
   * @schema S3ControlAccessPoint#NetworkOrigin
   */
  readonly networkOrigin: string;

  /**
   * @schema S3ControlAccessPoint#VpcConfiguration
   */
  readonly vpcConfiguration?: S3ControlVpcConfiguration;

  /**
   * @schema S3ControlAccessPoint#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3ControlAccessPoint#AccessPointArn
   */
  readonly accessPointArn?: string;

}

/**
 * @schema S3ControlJobListDescriptor
 */
export interface S3ControlJobListDescriptor {
  /**
   * @schema S3ControlJobListDescriptor#JobId
   */
  readonly jobId?: string;

  /**
   * @schema S3ControlJobListDescriptor#Description
   */
  readonly description?: string;

  /**
   * @schema S3ControlJobListDescriptor#Operation
   */
  readonly operation?: string;

  /**
   * @schema S3ControlJobListDescriptor#Priority
   */
  readonly priority?: number;

  /**
   * @schema S3ControlJobListDescriptor#Status
   */
  readonly status?: string;

  /**
   * @schema S3ControlJobListDescriptor#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema S3ControlJobListDescriptor#TerminationDate
   */
  readonly terminationDate?: string;

  /**
   * @schema S3ControlJobListDescriptor#ProgressSummary
   */
  readonly progressSummary?: S3ControlJobProgressSummary;

}

/**
 * @schema S3ControlRegionalBucket
 */
export interface S3ControlRegionalBucket {
  /**
   * @schema S3ControlRegionalBucket#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3ControlRegionalBucket#BucketArn
   */
  readonly bucketArn?: string;

  /**
   * @schema S3ControlRegionalBucket#PublicAccessBlockEnabled
   */
  readonly publicAccessBlockEnabled: boolean;

  /**
   * @schema S3ControlRegionalBucket#CreationDate
   */
  readonly creationDate: string;

  /**
   * @schema S3ControlRegionalBucket#OutpostId
   */
  readonly outpostId?: string;

}

/**
 * @schema S3ControlListStorageLensConfigurationEntry
 */
export interface S3ControlListStorageLensConfigurationEntry {
  /**
   * @schema S3ControlListStorageLensConfigurationEntry#Id
   */
  readonly id: string;

  /**
   * @schema S3ControlListStorageLensConfigurationEntry#StorageLensArn
   */
  readonly storageLensArn: string;

  /**
   * @schema S3ControlListStorageLensConfigurationEntry#HomeRegion
   */
  readonly homeRegion: string;

  /**
   * @schema S3ControlListStorageLensConfigurationEntry#IsEnabled
   */
  readonly isEnabled?: boolean;

}

/**
 * @schema S3ControlLifecycleConfiguration
 */
export interface S3ControlLifecycleConfiguration {
  /**
   * @schema S3ControlLifecycleConfiguration#Rules
   */
  readonly rules?: S3ControlLifecycleRule[];

}

/**
 * @schema S3ControlTagging
 */
export interface S3ControlTagging {
  /**
   * @schema S3ControlTagging#TagSet
   */
  readonly tagSet: S3ControlS3Tag[];

}

/**
 * @schema S3ControlLambdaInvokeOperation
 */
export interface S3ControlLambdaInvokeOperation {
  /**
   * @schema S3ControlLambdaInvokeOperation#FunctionArn
   */
  readonly functionArn?: string;

}

/**
 * @schema S3ControlS3CopyObjectOperation
 */
export interface S3ControlS3CopyObjectOperation {
  /**
   * @schema S3ControlS3CopyObjectOperation#TargetResource
   */
  readonly targetResource?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#CannedAccessControlList
   */
  readonly cannedAccessControlList?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#AccessControlGrants
   */
  readonly accessControlGrants?: S3ControlS3Grant[];

  /**
   * @schema S3ControlS3CopyObjectOperation#MetadataDirective
   */
  readonly metadataDirective?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#ModifiedSinceConstraint
   */
  readonly modifiedSinceConstraint?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#NewObjectMetadata
   */
  readonly newObjectMetadata?: S3ControlS3ObjectMetadata;

  /**
   * @schema S3ControlS3CopyObjectOperation#NewObjectTagging
   */
  readonly newObjectTagging?: S3ControlS3Tag[];

  /**
   * @schema S3ControlS3CopyObjectOperation#RedirectLocation
   */
  readonly redirectLocation?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#RequesterPays
   */
  readonly requesterPays?: boolean;

  /**
   * @schema S3ControlS3CopyObjectOperation#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#UnModifiedSinceConstraint
   */
  readonly unModifiedSinceConstraint?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#SSEAwsKmsKeyId
   */
  readonly sseAwsKmsKeyId?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#TargetKeyPrefix
   */
  readonly targetKeyPrefix?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#ObjectLockLegalHoldStatus
   */
  readonly objectLockLegalHoldStatus?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#ObjectLockMode
   */
  readonly objectLockMode?: string;

  /**
   * @schema S3ControlS3CopyObjectOperation#ObjectLockRetainUntilDate
   */
  readonly objectLockRetainUntilDate?: string;

}

/**
 * @schema S3ControlS3SetObjectAclOperation
 */
export interface S3ControlS3SetObjectAclOperation {
  /**
   * @schema S3ControlS3SetObjectAclOperation#AccessControlPolicy
   */
  readonly accessControlPolicy?: S3ControlS3AccessControlPolicy;

}

/**
 * @schema S3ControlS3SetObjectTaggingOperation
 */
export interface S3ControlS3SetObjectTaggingOperation {
  /**
   * @schema S3ControlS3SetObjectTaggingOperation#TagSet
   */
  readonly tagSet?: S3ControlS3Tag[];

}

/**
 * @schema S3ControlS3InitiateRestoreObjectOperation
 */
export interface S3ControlS3InitiateRestoreObjectOperation {
  /**
   * @schema S3ControlS3InitiateRestoreObjectOperation#ExpirationInDays
   */
  readonly expirationInDays?: number;

  /**
   * @schema S3ControlS3InitiateRestoreObjectOperation#GlacierJobTier
   */
  readonly glacierJobTier?: string;

}

/**
 * @schema S3ControlS3SetObjectLegalHoldOperation
 */
export interface S3ControlS3SetObjectLegalHoldOperation {
  /**
   * @schema S3ControlS3SetObjectLegalHoldOperation#LegalHold
   */
  readonly legalHold: S3ControlS3ObjectLockLegalHold;

}

/**
 * @schema S3ControlS3SetObjectRetentionOperation
 */
export interface S3ControlS3SetObjectRetentionOperation {
  /**
   * @schema S3ControlS3SetObjectRetentionOperation#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

  /**
   * @schema S3ControlS3SetObjectRetentionOperation#Retention
   */
  readonly retention: S3ControlS3Retention;

}

/**
 * @schema S3ControlJobManifestSpec
 */
export interface S3ControlJobManifestSpec {
  /**
   * @schema S3ControlJobManifestSpec#Format
   */
  readonly format: string;

  /**
   * @schema S3ControlJobManifestSpec#Fields
   */
  readonly fields?: string[];

}

/**
 * @schema S3ControlJobManifestLocation
 */
export interface S3ControlJobManifestLocation {
  /**
   * @schema S3ControlJobManifestLocation#ObjectArn
   */
  readonly objectArn: string;

  /**
   * @schema S3ControlJobManifestLocation#ObjectVersionId
   */
  readonly objectVersionId?: string;

  /**
   * @schema S3ControlJobManifestLocation#ETag
   */
  readonly eTag: string;

}

/**
 * @schema S3ControlJobProgressSummary
 */
export interface S3ControlJobProgressSummary {
  /**
   * @schema S3ControlJobProgressSummary#TotalNumberOfTasks
   */
  readonly totalNumberOfTasks?: number;

  /**
   * @schema S3ControlJobProgressSummary#NumberOfTasksSucceeded
   */
  readonly numberOfTasksSucceeded?: number;

  /**
   * @schema S3ControlJobProgressSummary#NumberOfTasksFailed
   */
  readonly numberOfTasksFailed?: number;

}

/**
 * @schema S3ControlJobFailure
 */
export interface S3ControlJobFailure {
  /**
   * @schema S3ControlJobFailure#FailureCode
   */
  readonly failureCode?: string;

  /**
   * @schema S3ControlJobFailure#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema S3ControlLifecycleExpiration
 */
export interface S3ControlLifecycleExpiration {
  /**
   * @schema S3ControlLifecycleExpiration#Date
   */
  readonly date?: string;

  /**
   * @schema S3ControlLifecycleExpiration#Days
   */
  readonly days?: number;

  /**
   * @schema S3ControlLifecycleExpiration#ExpiredObjectDeleteMarker
   */
  readonly expiredObjectDeleteMarker?: boolean;

}

/**
 * @schema S3ControlLifecycleRuleFilter
 */
export interface S3ControlLifecycleRuleFilter {
  /**
   * @schema S3ControlLifecycleRuleFilter#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ControlLifecycleRuleFilter#Tag
   */
  readonly tag?: S3ControlS3Tag;

  /**
   * @schema S3ControlLifecycleRuleFilter#And
   */
  readonly and?: S3ControlLifecycleRuleAndOperator;

}

/**
 * @schema S3ControlTransition
 */
export interface S3ControlTransition {
  /**
   * @schema S3ControlTransition#Date
   */
  readonly date?: string;

  /**
   * @schema S3ControlTransition#Days
   */
  readonly days?: number;

  /**
   * @schema S3ControlTransition#StorageClass
   */
  readonly storageClass?: string;

}

/**
 * @schema S3ControlNoncurrentVersionTransition
 */
export interface S3ControlNoncurrentVersionTransition {
  /**
   * @schema S3ControlNoncurrentVersionTransition#NoncurrentDays
   */
  readonly noncurrentDays?: number;

  /**
   * @schema S3ControlNoncurrentVersionTransition#StorageClass
   */
  readonly storageClass?: string;

}

/**
 * @schema S3ControlNoncurrentVersionExpiration
 */
export interface S3ControlNoncurrentVersionExpiration {
  /**
   * @schema S3ControlNoncurrentVersionExpiration#NoncurrentDays
   */
  readonly noncurrentDays?: number;

}

/**
 * @schema S3ControlAbortIncompleteMultipartUpload
 */
export interface S3ControlAbortIncompleteMultipartUpload {
  /**
   * @schema S3ControlAbortIncompleteMultipartUpload#DaysAfterInitiation
   */
  readonly daysAfterInitiation?: number;

}

/**
 * @schema S3ControlAccountLevel
 */
export interface S3ControlAccountLevel {
  /**
   * @schema S3ControlAccountLevel#ActivityMetrics
   */
  readonly activityMetrics?: S3ControlActivityMetrics;

  /**
   * @schema S3ControlAccountLevel#BucketLevel
   */
  readonly bucketLevel: S3ControlBucketLevel;

}

/**
 * @schema S3ControlInclude
 */
export interface S3ControlInclude {
  /**
   * @schema S3ControlInclude#Buckets
   */
  readonly buckets?: string[];

  /**
   * @schema S3ControlInclude#Regions
   */
  readonly regions?: string[];

}

/**
 * @schema S3ControlExclude
 */
export interface S3ControlExclude {
  /**
   * @schema S3ControlExclude#Buckets
   */
  readonly buckets?: string[];

  /**
   * @schema S3ControlExclude#Regions
   */
  readonly regions?: string[];

}

/**
 * @schema S3ControlStorageLensDataExport
 */
export interface S3ControlStorageLensDataExport {
  /**
   * @schema S3ControlStorageLensDataExport#S3BucketDestination
   */
  readonly s3BucketDestination: S3ControlS3BucketDestination;

}

/**
 * @schema S3ControlStorageLensAwsOrg
 */
export interface S3ControlStorageLensAwsOrg {
  /**
   * @schema S3ControlStorageLensAwsOrg#Arn
   */
  readonly arn: string;

}

/**
 * @schema S3ControlS3Grant
 */
export interface S3ControlS3Grant {
  /**
   * @schema S3ControlS3Grant#Grantee
   */
  readonly grantee?: S3ControlS3Grantee;

  /**
   * @schema S3ControlS3Grant#Permission
   */
  readonly permission?: string;

}

/**
 * @schema S3ControlS3ObjectMetadata
 */
export interface S3ControlS3ObjectMetadata {
  /**
   * @schema S3ControlS3ObjectMetadata#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema S3ControlS3ObjectMetadata#ContentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema S3ControlS3ObjectMetadata#ContentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema S3ControlS3ObjectMetadata#ContentLanguage
   */
  readonly contentLanguage?: string;

  /**
   * @schema S3ControlS3ObjectMetadata#UserMetadata
   */
  readonly userMetadata?: { [key: string]: string };

  /**
   * @schema S3ControlS3ObjectMetadata#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema S3ControlS3ObjectMetadata#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3ControlS3ObjectMetadata#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema S3ControlS3ObjectMetadata#HttpExpiresDate
   */
  readonly httpExpiresDate?: string;

  /**
   * @schema S3ControlS3ObjectMetadata#RequesterCharged
   */
  readonly requesterCharged?: boolean;

  /**
   * @schema S3ControlS3ObjectMetadata#SSEAlgorithm
   */
  readonly sseAlgorithm?: string;

}

/**
 * @schema S3ControlS3AccessControlPolicy
 */
export interface S3ControlS3AccessControlPolicy {
  /**
   * @schema S3ControlS3AccessControlPolicy#AccessControlList
   */
  readonly accessControlList?: S3ControlS3AccessControlList;

  /**
   * @schema S3ControlS3AccessControlPolicy#CannedAccessControlList
   */
  readonly cannedAccessControlList?: string;

}

/**
 * @schema S3ControlS3ObjectLockLegalHold
 */
export interface S3ControlS3ObjectLockLegalHold {
  /**
   * @schema S3ControlS3ObjectLockLegalHold#Status
   */
  readonly status: string;

}

/**
 * @schema S3ControlS3Retention
 */
export interface S3ControlS3Retention {
  /**
   * @schema S3ControlS3Retention#RetainUntilDate
   */
  readonly retainUntilDate?: string;

  /**
   * @schema S3ControlS3Retention#Mode
   */
  readonly mode?: string;

}

/**
 * @schema S3ControlLifecycleRuleAndOperator
 */
export interface S3ControlLifecycleRuleAndOperator {
  /**
   * @schema S3ControlLifecycleRuleAndOperator#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ControlLifecycleRuleAndOperator#Tags
   */
  readonly tags?: S3ControlS3Tag[];

}

/**
 * @schema S3ControlActivityMetrics
 */
export interface S3ControlActivityMetrics {
  /**
   * @schema S3ControlActivityMetrics#IsEnabled
   */
  readonly isEnabled?: boolean;

}

/**
 * @schema S3ControlBucketLevel
 */
export interface S3ControlBucketLevel {
  /**
   * @schema S3ControlBucketLevel#ActivityMetrics
   */
  readonly activityMetrics?: S3ControlActivityMetrics;

  /**
   * @schema S3ControlBucketLevel#PrefixLevel
   */
  readonly prefixLevel?: S3ControlPrefixLevel;

}

/**
 * @schema S3ControlS3BucketDestination
 */
export interface S3ControlS3BucketDestination {
  /**
   * @schema S3ControlS3BucketDestination#Format
   */
  readonly format: string;

  /**
   * @schema S3ControlS3BucketDestination#OutputSchemaVersion
   */
  readonly outputSchemaVersion: string;

  /**
   * @schema S3ControlS3BucketDestination#AccountId
   */
  readonly accountId: string;

  /**
   * @schema S3ControlS3BucketDestination#Arn
   */
  readonly arn: string;

  /**
   * @schema S3ControlS3BucketDestination#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ControlS3BucketDestination#Encryption
   */
  readonly encryption?: S3ControlStorageLensDataExportEncryption;

}

/**
 * @schema S3ControlS3Grantee
 */
export interface S3ControlS3Grantee {
  /**
   * @schema S3ControlS3Grantee#TypeIdentifier
   */
  readonly typeIdentifier?: string;

  /**
   * @schema S3ControlS3Grantee#Identifier
   */
  readonly identifier?: string;

  /**
   * @schema S3ControlS3Grantee#DisplayName
   */
  readonly displayName?: string;

}

/**
 * @schema S3ControlS3AccessControlList
 */
export interface S3ControlS3AccessControlList {
  /**
   * @schema S3ControlS3AccessControlList#Owner
   */
  readonly owner: S3ControlS3ObjectOwner;

  /**
   * @schema S3ControlS3AccessControlList#Grants
   */
  readonly grants?: S3ControlS3Grant[];

}

/**
 * @schema S3ControlPrefixLevel
 */
export interface S3ControlPrefixLevel {
  /**
   * @schema S3ControlPrefixLevel#StorageMetrics
   */
  readonly storageMetrics: S3ControlPrefixLevelStorageMetrics;

}

/**
 * @schema S3ControlStorageLensDataExportEncryption
 */
export interface S3ControlStorageLensDataExportEncryption {
  /**
   * @schema S3ControlStorageLensDataExportEncryption#SSES3
   */
  readonly sses3?: S3ControlSses3;

  /**
   * @schema S3ControlStorageLensDataExportEncryption#SSEKMS
   */
  readonly ssekms?: S3ControlSsekms;

}

/**
 * @schema S3ControlS3ObjectOwner
 */
export interface S3ControlS3ObjectOwner {
  /**
   * @schema S3ControlS3ObjectOwner#ID
   */
  readonly id?: string;

  /**
   * @schema S3ControlS3ObjectOwner#DisplayName
   */
  readonly displayName?: string;

}

/**
 * @schema S3ControlPrefixLevelStorageMetrics
 */
export interface S3ControlPrefixLevelStorageMetrics {
  /**
   * @schema S3ControlPrefixLevelStorageMetrics#IsEnabled
   */
  readonly isEnabled?: boolean;

  /**
   * @schema S3ControlPrefixLevelStorageMetrics#SelectionCriteria
   */
  readonly selectionCriteria?: S3ControlSelectionCriteria;

}

/**
 * @schema S3ControlSses3
 */
export interface S3ControlSses3 {
}

/**
 * @schema S3ControlSsekms
 */
export interface S3ControlSsekms {
  /**
   * @schema S3ControlSsekms#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema S3ControlSelectionCriteria
 */
export interface S3ControlSelectionCriteria {
  /**
   * @schema S3ControlSelectionCriteria#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema S3ControlSelectionCriteria#MaxDepth
   */
  readonly maxDepth?: number;

  /**
   * @schema S3ControlSelectionCriteria#MinStorageBytesPercentage
   */
  readonly minStorageBytesPercentage?: number;

}
