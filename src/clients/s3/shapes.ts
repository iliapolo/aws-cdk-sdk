/**
 * @schema S3AbortMultipartUploadRequest
 */
export interface S3AbortMultipartUploadRequest {
  /**
   * @schema S3AbortMultipartUploadRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3AbortMultipartUploadRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3AbortMultipartUploadRequest#UploadId
   */
  readonly uploadId: string;

  /**
   * @schema S3AbortMultipartUploadRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3AbortMultipartUploadRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3AbortMultipartUploadOutput
 */
export interface S3AbortMultipartUploadOutput {
  /**
   * @schema S3AbortMultipartUploadOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema S3CompleteMultipartUploadRequest
 */
export interface S3CompleteMultipartUploadRequest {
  /**
   * @schema S3CompleteMultipartUploadRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3CompleteMultipartUploadRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3CompleteMultipartUploadRequest#MultipartUpload
   */
  readonly multipartUpload?: S3CompletedMultipartUpload;

  /**
   * @schema S3CompleteMultipartUploadRequest#UploadId
   */
  readonly uploadId: string;

  /**
   * @schema S3CompleteMultipartUploadRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3CompleteMultipartUploadRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3CompleteMultipartUploadOutput
 */
export interface S3CompleteMultipartUploadOutput {
  /**
   * @schema S3CompleteMultipartUploadOutput#Location
   */
  readonly location?: string;

  /**
   * @schema S3CompleteMultipartUploadOutput#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3CompleteMultipartUploadOutput#Key
   */
  readonly key?: string;

  /**
   * @schema S3CompleteMultipartUploadOutput#Expiration
   */
  readonly expiration?: string;

  /**
   * @schema S3CompleteMultipartUploadOutput#ETag
   */
  readonly eTag?: string;

  /**
   * @schema S3CompleteMultipartUploadOutput#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema S3CompleteMultipartUploadOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3CompleteMultipartUploadOutput#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema S3CompleteMultipartUploadOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema S3CopyObjectRequest
 */
export interface S3CopyObjectRequest {
  /**
   * @schema S3CopyObjectRequest#ACL
   */
  readonly acl?: string;

  /**
   * @schema S3CopyObjectRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3CopyObjectRequest#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema S3CopyObjectRequest#ContentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema S3CopyObjectRequest#ContentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema S3CopyObjectRequest#ContentLanguage
   */
  readonly contentLanguage?: string;

  /**
   * @schema S3CopyObjectRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema S3CopyObjectRequest#CopySource
   */
  readonly copySource: string;

  /**
   * @schema S3CopyObjectRequest#CopySourceIfMatch
   */
  readonly copySourceIfMatch?: string;

  /**
   * @schema S3CopyObjectRequest#CopySourceIfModifiedSince
   */
  readonly copySourceIfModifiedSince?: string;

  /**
   * @schema S3CopyObjectRequest#CopySourceIfNoneMatch
   */
  readonly copySourceIfNoneMatch?: string;

  /**
   * @schema S3CopyObjectRequest#CopySourceIfUnmodifiedSince
   */
  readonly copySourceIfUnmodifiedSince?: string;

  /**
   * @schema S3CopyObjectRequest#Expires
   */
  readonly expires?: string;

  /**
   * @schema S3CopyObjectRequest#GrantFullControl
   */
  readonly grantFullControl?: string;

  /**
   * @schema S3CopyObjectRequest#GrantRead
   */
  readonly grantRead?: string;

  /**
   * @schema S3CopyObjectRequest#GrantReadACP
   */
  readonly grantReadAcp?: string;

  /**
   * @schema S3CopyObjectRequest#GrantWriteACP
   */
  readonly grantWriteAcp?: string;

  /**
   * @schema S3CopyObjectRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3CopyObjectRequest#Metadata
   */
  readonly metadata?: { [key: string]: string };

  /**
   * @schema S3CopyObjectRequest#MetadataDirective
   */
  readonly metadataDirective?: string;

  /**
   * @schema S3CopyObjectRequest#TaggingDirective
   */
  readonly taggingDirective?: string;

  /**
   * @schema S3CopyObjectRequest#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema S3CopyObjectRequest#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema S3CopyObjectRequest#WebsiteRedirectLocation
   */
  readonly websiteRedirectLocation?: string;

  /**
   * @schema S3CopyObjectRequest#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema S3CopyObjectRequest#SSECustomerKey
   */
  readonly sseCustomerKey?: any;

  /**
   * @schema S3CopyObjectRequest#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema S3CopyObjectRequest#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema S3CopyObjectRequest#SSEKMSEncryptionContext
   */
  readonly ssekmsEncryptionContext?: string;

  /**
   * @schema S3CopyObjectRequest#CopySourceSSECustomerAlgorithm
   */
  readonly copySourceSseCustomerAlgorithm?: string;

  /**
   * @schema S3CopyObjectRequest#CopySourceSSECustomerKey
   */
  readonly copySourceSseCustomerKey?: any;

  /**
   * @schema S3CopyObjectRequest#CopySourceSSECustomerKeyMD5
   */
  readonly copySourceSseCustomerKeyMd5?: string;

  /**
   * @schema S3CopyObjectRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3CopyObjectRequest#Tagging
   */
  readonly tagging?: string;

  /**
   * @schema S3CopyObjectRequest#ObjectLockMode
   */
  readonly objectLockMode?: string;

  /**
   * @schema S3CopyObjectRequest#ObjectLockRetainUntilDate
   */
  readonly objectLockRetainUntilDate?: string;

  /**
   * @schema S3CopyObjectRequest#ObjectLockLegalHoldStatus
   */
  readonly objectLockLegalHoldStatus?: string;

  /**
   * @schema S3CopyObjectRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

  /**
   * @schema S3CopyObjectRequest#ExpectedSourceBucketOwner
   */
  readonly expectedSourceBucketOwner?: string;

}

/**
 * @schema S3CopyObjectOutput
 */
export interface S3CopyObjectOutput {
  /**
   * @schema S3CopyObjectOutput#CopyObjectResult
   */
  readonly copyObjectResult?: S3CopyObjectResult;

  /**
   * @schema S3CopyObjectOutput#Expiration
   */
  readonly expiration?: string;

  /**
   * @schema S3CopyObjectOutput#CopySourceVersionId
   */
  readonly copySourceVersionId?: string;

  /**
   * @schema S3CopyObjectOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3CopyObjectOutput#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema S3CopyObjectOutput#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema S3CopyObjectOutput#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema S3CopyObjectOutput#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema S3CopyObjectOutput#SSEKMSEncryptionContext
   */
  readonly ssekmsEncryptionContext?: string;

  /**
   * @schema S3CopyObjectOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema S3CreateBucketRequest
 */
export interface S3CreateBucketRequest {
  /**
   * @schema S3CreateBucketRequest#ACL
   */
  readonly acl?: string;

  /**
   * @schema S3CreateBucketRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3CreateBucketRequest#CreateBucketConfiguration
   */
  readonly createBucketConfiguration?: S3CreateBucketConfiguration;

  /**
   * @schema S3CreateBucketRequest#GrantFullControl
   */
  readonly grantFullControl?: string;

  /**
   * @schema S3CreateBucketRequest#GrantRead
   */
  readonly grantRead?: string;

  /**
   * @schema S3CreateBucketRequest#GrantReadACP
   */
  readonly grantReadAcp?: string;

  /**
   * @schema S3CreateBucketRequest#GrantWrite
   */
  readonly grantWrite?: string;

  /**
   * @schema S3CreateBucketRequest#GrantWriteACP
   */
  readonly grantWriteAcp?: string;

  /**
   * @schema S3CreateBucketRequest#ObjectLockEnabledForBucket
   */
  readonly objectLockEnabledForBucket?: boolean;

}

/**
 * @schema S3CreateBucketOutput
 */
export interface S3CreateBucketOutput {
  /**
   * @schema S3CreateBucketOutput#Location
   */
  readonly location?: string;

}

/**
 * @schema S3CreateMultipartUploadRequest
 */
export interface S3CreateMultipartUploadRequest {
  /**
   * @schema S3CreateMultipartUploadRequest#ACL
   */
  readonly acl?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3CreateMultipartUploadRequest#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#ContentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#ContentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#ContentLanguage
   */
  readonly contentLanguage?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#Expires
   */
  readonly expires?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#GrantFullControl
   */
  readonly grantFullControl?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#GrantRead
   */
  readonly grantRead?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#GrantReadACP
   */
  readonly grantReadAcp?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#GrantWriteACP
   */
  readonly grantWriteAcp?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3CreateMultipartUploadRequest#Metadata
   */
  readonly metadata?: { [key: string]: string };

  /**
   * @schema S3CreateMultipartUploadRequest#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#WebsiteRedirectLocation
   */
  readonly websiteRedirectLocation?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#SSECustomerKey
   */
  readonly sseCustomerKey?: any;

  /**
   * @schema S3CreateMultipartUploadRequest#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#SSEKMSEncryptionContext
   */
  readonly ssekmsEncryptionContext?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#Tagging
   */
  readonly tagging?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#ObjectLockMode
   */
  readonly objectLockMode?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#ObjectLockRetainUntilDate
   */
  readonly objectLockRetainUntilDate?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#ObjectLockLegalHoldStatus
   */
  readonly objectLockLegalHoldStatus?: string;

  /**
   * @schema S3CreateMultipartUploadRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3CreateMultipartUploadOutput
 */
export interface S3CreateMultipartUploadOutput {
  /**
   * @schema S3CreateMultipartUploadOutput#AbortDate
   */
  readonly abortDate?: string;

  /**
   * @schema S3CreateMultipartUploadOutput#AbortRuleId
   */
  readonly abortRuleId?: string;

  /**
   * @schema S3CreateMultipartUploadOutput#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3CreateMultipartUploadOutput#Key
   */
  readonly key?: string;

  /**
   * @schema S3CreateMultipartUploadOutput#UploadId
   */
  readonly uploadId?: string;

  /**
   * @schema S3CreateMultipartUploadOutput#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema S3CreateMultipartUploadOutput#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema S3CreateMultipartUploadOutput#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema S3CreateMultipartUploadOutput#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema S3CreateMultipartUploadOutput#SSEKMSEncryptionContext
   */
  readonly ssekmsEncryptionContext?: string;

  /**
   * @schema S3CreateMultipartUploadOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema S3DeleteBucketRequest
 */
export interface S3DeleteBucketRequest {
  /**
   * @schema S3DeleteBucketRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DeleteBucketRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3DeleteBucketAnalyticsConfigurationRequest
 */
export interface S3DeleteBucketAnalyticsConfigurationRequest {
  /**
   * @schema S3DeleteBucketAnalyticsConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DeleteBucketAnalyticsConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema S3DeleteBucketAnalyticsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3DeleteBucketCorsRequest
 */
export interface S3DeleteBucketCorsRequest {
  /**
   * @schema S3DeleteBucketCorsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DeleteBucketCorsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3DeleteBucketEncryptionRequest
 */
export interface S3DeleteBucketEncryptionRequest {
  /**
   * @schema S3DeleteBucketEncryptionRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DeleteBucketEncryptionRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3DeleteBucketIntelligentTieringConfigurationRequest
 */
export interface S3DeleteBucketIntelligentTieringConfigurationRequest {
  /**
   * @schema S3DeleteBucketIntelligentTieringConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DeleteBucketIntelligentTieringConfigurationRequest#Id
   */
  readonly id: string;

}

/**
 * @schema S3DeleteBucketInventoryConfigurationRequest
 */
export interface S3DeleteBucketInventoryConfigurationRequest {
  /**
   * @schema S3DeleteBucketInventoryConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DeleteBucketInventoryConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema S3DeleteBucketInventoryConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3DeleteBucketLifecycleRequest
 */
export interface S3DeleteBucketLifecycleRequest {
  /**
   * @schema S3DeleteBucketLifecycleRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DeleteBucketLifecycleRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3DeleteBucketMetricsConfigurationRequest
 */
export interface S3DeleteBucketMetricsConfigurationRequest {
  /**
   * @schema S3DeleteBucketMetricsConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DeleteBucketMetricsConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema S3DeleteBucketMetricsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3DeleteBucketOwnershipControlsRequest
 */
export interface S3DeleteBucketOwnershipControlsRequest {
  /**
   * @schema S3DeleteBucketOwnershipControlsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DeleteBucketOwnershipControlsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3DeleteBucketPolicyRequest
 */
export interface S3DeleteBucketPolicyRequest {
  /**
   * @schema S3DeleteBucketPolicyRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DeleteBucketPolicyRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3DeleteBucketReplicationRequest
 */
export interface S3DeleteBucketReplicationRequest {
  /**
   * @schema S3DeleteBucketReplicationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DeleteBucketReplicationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3DeleteBucketTaggingRequest
 */
export interface S3DeleteBucketTaggingRequest {
  /**
   * @schema S3DeleteBucketTaggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DeleteBucketTaggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3DeleteBucketWebsiteRequest
 */
export interface S3DeleteBucketWebsiteRequest {
  /**
   * @schema S3DeleteBucketWebsiteRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DeleteBucketWebsiteRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3DeleteObjectRequest
 */
export interface S3DeleteObjectRequest {
  /**
   * @schema S3DeleteObjectRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DeleteObjectRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3DeleteObjectRequest#MFA
   */
  readonly mfa?: string;

  /**
   * @schema S3DeleteObjectRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3DeleteObjectRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3DeleteObjectRequest#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

  /**
   * @schema S3DeleteObjectRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3DeleteObjectOutput
 */
export interface S3DeleteObjectOutput {
  /**
   * @schema S3DeleteObjectOutput#DeleteMarker
   */
  readonly deleteMarker?: boolean;

  /**
   * @schema S3DeleteObjectOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3DeleteObjectOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema S3DeleteObjectTaggingRequest
 */
export interface S3DeleteObjectTaggingRequest {
  /**
   * @schema S3DeleteObjectTaggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DeleteObjectTaggingRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3DeleteObjectTaggingRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3DeleteObjectTaggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3DeleteObjectTaggingOutput
 */
export interface S3DeleteObjectTaggingOutput {
  /**
   * @schema S3DeleteObjectTaggingOutput#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema S3DeleteObjectsRequest
 */
export interface S3DeleteObjectsRequest {
  /**
   * @schema S3DeleteObjectsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DeleteObjectsRequest#Delete
   */
  readonly delete: S3Delete;

  /**
   * @schema S3DeleteObjectsRequest#MFA
   */
  readonly mfa?: string;

  /**
   * @schema S3DeleteObjectsRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3DeleteObjectsRequest#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

  /**
   * @schema S3DeleteObjectsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3DeleteObjectsOutput
 */
export interface S3DeleteObjectsOutput {
  /**
   * @schema S3DeleteObjectsOutput#Deleted
   */
  readonly deleted?: S3DeletedObject[];

  /**
   * @schema S3DeleteObjectsOutput#RequestCharged
   */
  readonly requestCharged?: string;

  /**
   * @schema S3DeleteObjectsOutput#Errors
   */
  readonly errors?: S3Error[];

}

/**
 * @schema S3DeletePublicAccessBlockRequest
 */
export interface S3DeletePublicAccessBlockRequest {
  /**
   * @schema S3DeletePublicAccessBlockRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3DeletePublicAccessBlockRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketAccelerateConfigurationRequest
 */
export interface S3GetBucketAccelerateConfigurationRequest {
  /**
   * @schema S3GetBucketAccelerateConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketAccelerateConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketAccelerateConfigurationOutput
 */
export interface S3GetBucketAccelerateConfigurationOutput {
  /**
   * @schema S3GetBucketAccelerateConfigurationOutput#Status
   */
  readonly status?: string;

}

/**
 * @schema S3GetBucketAclRequest
 */
export interface S3GetBucketAclRequest {
  /**
   * @schema S3GetBucketAclRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketAclRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketAclOutput
 */
export interface S3GetBucketAclOutput {
  /**
   * @schema S3GetBucketAclOutput#Owner
   */
  readonly owner?: S3Owner;

  /**
   * @schema S3GetBucketAclOutput#Grants
   */
  readonly grants?: S3Grant[];

}

/**
 * @schema S3GetBucketAnalyticsConfigurationRequest
 */
export interface S3GetBucketAnalyticsConfigurationRequest {
  /**
   * @schema S3GetBucketAnalyticsConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketAnalyticsConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema S3GetBucketAnalyticsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketAnalyticsConfigurationOutput
 */
export interface S3GetBucketAnalyticsConfigurationOutput {
  /**
   * @schema S3GetBucketAnalyticsConfigurationOutput#AnalyticsConfiguration
   */
  readonly analyticsConfiguration?: S3AnalyticsConfiguration;

}

/**
 * @schema S3GetBucketCorsRequest
 */
export interface S3GetBucketCorsRequest {
  /**
   * @schema S3GetBucketCorsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketCorsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketCorsOutput
 */
export interface S3GetBucketCorsOutput {
  /**
   * @schema S3GetBucketCorsOutput#CORSRules
   */
  readonly corsRules?: S3CorsRule[];

}

/**
 * @schema S3GetBucketEncryptionRequest
 */
export interface S3GetBucketEncryptionRequest {
  /**
   * @schema S3GetBucketEncryptionRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketEncryptionRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketEncryptionOutput
 */
export interface S3GetBucketEncryptionOutput {
  /**
   * @schema S3GetBucketEncryptionOutput#ServerSideEncryptionConfiguration
   */
  readonly serverSideEncryptionConfiguration?: S3ServerSideEncryptionConfiguration;

}

/**
 * @schema S3GetBucketIntelligentTieringConfigurationRequest
 */
export interface S3GetBucketIntelligentTieringConfigurationRequest {
  /**
   * @schema S3GetBucketIntelligentTieringConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketIntelligentTieringConfigurationRequest#Id
   */
  readonly id: string;

}

/**
 * @schema S3GetBucketIntelligentTieringConfigurationOutput
 */
export interface S3GetBucketIntelligentTieringConfigurationOutput {
  /**
   * @schema S3GetBucketIntelligentTieringConfigurationOutput#IntelligentTieringConfiguration
   */
  readonly intelligentTieringConfiguration?: S3IntelligentTieringConfiguration;

}

/**
 * @schema S3GetBucketInventoryConfigurationRequest
 */
export interface S3GetBucketInventoryConfigurationRequest {
  /**
   * @schema S3GetBucketInventoryConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketInventoryConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema S3GetBucketInventoryConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketInventoryConfigurationOutput
 */
export interface S3GetBucketInventoryConfigurationOutput {
  /**
   * @schema S3GetBucketInventoryConfigurationOutput#InventoryConfiguration
   */
  readonly inventoryConfiguration?: S3InventoryConfiguration;

}

/**
 * @schema S3GetBucketLifecycleRequest
 */
export interface S3GetBucketLifecycleRequest {
  /**
   * @schema S3GetBucketLifecycleRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketLifecycleRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketLifecycleOutput
 */
export interface S3GetBucketLifecycleOutput {
  /**
   * @schema S3GetBucketLifecycleOutput#Rules
   */
  readonly rules?: S3Rule[];

}

/**
 * @schema S3GetBucketLifecycleConfigurationRequest
 */
export interface S3GetBucketLifecycleConfigurationRequest {
  /**
   * @schema S3GetBucketLifecycleConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketLifecycleConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketLifecycleConfigurationOutput
 */
export interface S3GetBucketLifecycleConfigurationOutput {
  /**
   * @schema S3GetBucketLifecycleConfigurationOutput#Rules
   */
  readonly rules?: S3LifecycleRule[];

}

/**
 * @schema S3GetBucketLocationRequest
 */
export interface S3GetBucketLocationRequest {
  /**
   * @schema S3GetBucketLocationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketLocationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketLocationOutput
 */
export interface S3GetBucketLocationOutput {
  /**
   * @schema S3GetBucketLocationOutput#LocationConstraint
   */
  readonly locationConstraint?: string;

}

/**
 * @schema S3GetBucketLoggingRequest
 */
export interface S3GetBucketLoggingRequest {
  /**
   * @schema S3GetBucketLoggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketLoggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketLoggingOutput
 */
export interface S3GetBucketLoggingOutput {
  /**
   * @schema S3GetBucketLoggingOutput#LoggingEnabled
   */
  readonly loggingEnabled?: S3LoggingEnabled;

}

/**
 * @schema S3GetBucketMetricsConfigurationRequest
 */
export interface S3GetBucketMetricsConfigurationRequest {
  /**
   * @schema S3GetBucketMetricsConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketMetricsConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema S3GetBucketMetricsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketMetricsConfigurationOutput
 */
export interface S3GetBucketMetricsConfigurationOutput {
  /**
   * @schema S3GetBucketMetricsConfigurationOutput#MetricsConfiguration
   */
  readonly metricsConfiguration?: S3MetricsConfiguration;

}

/**
 * @schema S3GetBucketNotificationConfigurationRequest
 */
export interface S3GetBucketNotificationConfigurationRequest {
  /**
   * @schema S3GetBucketNotificationConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketNotificationConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3NotificationConfigurationDeprecated
 */
export interface S3NotificationConfigurationDeprecated {
  /**
   * @schema S3NotificationConfigurationDeprecated#TopicConfiguration
   */
  readonly topicConfiguration?: S3TopicConfigurationDeprecated;

  /**
   * @schema S3NotificationConfigurationDeprecated#QueueConfiguration
   */
  readonly queueConfiguration?: S3QueueConfigurationDeprecated;

  /**
   * @schema S3NotificationConfigurationDeprecated#CloudFunctionConfiguration
   */
  readonly cloudFunctionConfiguration?: S3CloudFunctionConfiguration;

}

/**
 * @schema S3NotificationConfiguration
 */
export interface S3NotificationConfiguration {
  /**
   * @schema S3NotificationConfiguration#TopicConfigurations
   */
  readonly topicConfigurations?: S3TopicConfiguration[];

  /**
   * @schema S3NotificationConfiguration#QueueConfigurations
   */
  readonly queueConfigurations?: S3QueueConfiguration[];

  /**
   * @schema S3NotificationConfiguration#LambdaFunctionConfigurations
   */
  readonly lambdaFunctionConfigurations?: S3LambdaFunctionConfiguration[];

}

/**
 * @schema S3GetBucketOwnershipControlsRequest
 */
export interface S3GetBucketOwnershipControlsRequest {
  /**
   * @schema S3GetBucketOwnershipControlsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketOwnershipControlsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketOwnershipControlsOutput
 */
export interface S3GetBucketOwnershipControlsOutput {
  /**
   * @schema S3GetBucketOwnershipControlsOutput#OwnershipControls
   */
  readonly ownershipControls?: S3OwnershipControls;

}

/**
 * @schema S3GetBucketPolicyRequest
 */
export interface S3GetBucketPolicyRequest {
  /**
   * @schema S3GetBucketPolicyRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketPolicyRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketPolicyOutput
 */
export interface S3GetBucketPolicyOutput {
  /**
   * @schema S3GetBucketPolicyOutput#Policy
   */
  readonly policy?: string;

}

/**
 * @schema S3GetBucketPolicyStatusRequest
 */
export interface S3GetBucketPolicyStatusRequest {
  /**
   * @schema S3GetBucketPolicyStatusRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketPolicyStatusRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketPolicyStatusOutput
 */
export interface S3GetBucketPolicyStatusOutput {
  /**
   * @schema S3GetBucketPolicyStatusOutput#PolicyStatus
   */
  readonly policyStatus?: S3PolicyStatus;

}

/**
 * @schema S3GetBucketReplicationRequest
 */
export interface S3GetBucketReplicationRequest {
  /**
   * @schema S3GetBucketReplicationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketReplicationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketReplicationOutput
 */
export interface S3GetBucketReplicationOutput {
  /**
   * @schema S3GetBucketReplicationOutput#ReplicationConfiguration
   */
  readonly replicationConfiguration?: S3ReplicationConfiguration;

}

/**
 * @schema S3GetBucketRequestPaymentRequest
 */
export interface S3GetBucketRequestPaymentRequest {
  /**
   * @schema S3GetBucketRequestPaymentRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketRequestPaymentRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketRequestPaymentOutput
 */
export interface S3GetBucketRequestPaymentOutput {
  /**
   * @schema S3GetBucketRequestPaymentOutput#Payer
   */
  readonly payer?: string;

}

/**
 * @schema S3GetBucketTaggingRequest
 */
export interface S3GetBucketTaggingRequest {
  /**
   * @schema S3GetBucketTaggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketTaggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketTaggingOutput
 */
export interface S3GetBucketTaggingOutput {
  /**
   * @schema S3GetBucketTaggingOutput#TagSet
   */
  readonly tagSet: S3Tag[];

}

/**
 * @schema S3GetBucketVersioningRequest
 */
export interface S3GetBucketVersioningRequest {
  /**
   * @schema S3GetBucketVersioningRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketVersioningRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketVersioningOutput
 */
export interface S3GetBucketVersioningOutput {
  /**
   * @schema S3GetBucketVersioningOutput#Status
   */
  readonly status?: string;

  /**
   * @schema S3GetBucketVersioningOutput#MFADelete
   */
  readonly mfaDelete?: string;

}

/**
 * @schema S3GetBucketWebsiteRequest
 */
export interface S3GetBucketWebsiteRequest {
  /**
   * @schema S3GetBucketWebsiteRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetBucketWebsiteRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetBucketWebsiteOutput
 */
export interface S3GetBucketWebsiteOutput {
  /**
   * @schema S3GetBucketWebsiteOutput#RedirectAllRequestsTo
   */
  readonly redirectAllRequestsTo?: S3RedirectAllRequestsTo;

  /**
   * @schema S3GetBucketWebsiteOutput#IndexDocument
   */
  readonly indexDocument?: S3IndexDocument;

  /**
   * @schema S3GetBucketWebsiteOutput#ErrorDocument
   */
  readonly errorDocument?: S3ErrorDocument;

  /**
   * @schema S3GetBucketWebsiteOutput#RoutingRules
   */
  readonly routingRules?: S3RoutingRule[];

}

/**
 * @schema S3GetObjectRequest
 */
export interface S3GetObjectRequest {
  /**
   * @schema S3GetObjectRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetObjectRequest#IfMatch
   */
  readonly ifMatch?: string;

  /**
   * @schema S3GetObjectRequest#IfModifiedSince
   */
  readonly ifModifiedSince?: string;

  /**
   * @schema S3GetObjectRequest#IfNoneMatch
   */
  readonly ifNoneMatch?: string;

  /**
   * @schema S3GetObjectRequest#IfUnmodifiedSince
   */
  readonly ifUnmodifiedSince?: string;

  /**
   * @schema S3GetObjectRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3GetObjectRequest#Range
   */
  readonly range?: string;

  /**
   * @schema S3GetObjectRequest#ResponseCacheControl
   */
  readonly responseCacheControl?: string;

  /**
   * @schema S3GetObjectRequest#ResponseContentDisposition
   */
  readonly responseContentDisposition?: string;

  /**
   * @schema S3GetObjectRequest#ResponseContentEncoding
   */
  readonly responseContentEncoding?: string;

  /**
   * @schema S3GetObjectRequest#ResponseContentLanguage
   */
  readonly responseContentLanguage?: string;

  /**
   * @schema S3GetObjectRequest#ResponseContentType
   */
  readonly responseContentType?: string;

  /**
   * @schema S3GetObjectRequest#ResponseExpires
   */
  readonly responseExpires?: string;

  /**
   * @schema S3GetObjectRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3GetObjectRequest#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema S3GetObjectRequest#SSECustomerKey
   */
  readonly sseCustomerKey?: any;

  /**
   * @schema S3GetObjectRequest#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema S3GetObjectRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3GetObjectRequest#PartNumber
   */
  readonly partNumber?: number;

  /**
   * @schema S3GetObjectRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetObjectOutput
 */
export interface S3GetObjectOutput {
  /**
   * @schema S3GetObjectOutput#Body
   */
  readonly body?: any;

  /**
   * @schema S3GetObjectOutput#DeleteMarker
   */
  readonly deleteMarker?: boolean;

  /**
   * @schema S3GetObjectOutput#AcceptRanges
   */
  readonly acceptRanges?: string;

  /**
   * @schema S3GetObjectOutput#Expiration
   */
  readonly expiration?: string;

  /**
   * @schema S3GetObjectOutput#Restore
   */
  readonly restore?: string;

  /**
   * @schema S3GetObjectOutput#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema S3GetObjectOutput#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema S3GetObjectOutput#ETag
   */
  readonly eTag?: string;

  /**
   * @schema S3GetObjectOutput#MissingMeta
   */
  readonly missingMeta?: number;

  /**
   * @schema S3GetObjectOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3GetObjectOutput#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema S3GetObjectOutput#ContentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema S3GetObjectOutput#ContentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema S3GetObjectOutput#ContentLanguage
   */
  readonly contentLanguage?: string;

  /**
   * @schema S3GetObjectOutput#ContentRange
   */
  readonly contentRange?: string;

  /**
   * @schema S3GetObjectOutput#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema S3GetObjectOutput#Expires
   */
  readonly expires?: string;

  /**
   * @schema S3GetObjectOutput#WebsiteRedirectLocation
   */
  readonly websiteRedirectLocation?: string;

  /**
   * @schema S3GetObjectOutput#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema S3GetObjectOutput#Metadata
   */
  readonly metadata?: { [key: string]: string };

  /**
   * @schema S3GetObjectOutput#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema S3GetObjectOutput#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema S3GetObjectOutput#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema S3GetObjectOutput#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema S3GetObjectOutput#RequestCharged
   */
  readonly requestCharged?: string;

  /**
   * @schema S3GetObjectOutput#ReplicationStatus
   */
  readonly replicationStatus?: string;

  /**
   * @schema S3GetObjectOutput#PartsCount
   */
  readonly partsCount?: number;

  /**
   * @schema S3GetObjectOutput#TagCount
   */
  readonly tagCount?: number;

  /**
   * @schema S3GetObjectOutput#ObjectLockMode
   */
  readonly objectLockMode?: string;

  /**
   * @schema S3GetObjectOutput#ObjectLockRetainUntilDate
   */
  readonly objectLockRetainUntilDate?: string;

  /**
   * @schema S3GetObjectOutput#ObjectLockLegalHoldStatus
   */
  readonly objectLockLegalHoldStatus?: string;

}

/**
 * @schema S3GetObjectAclRequest
 */
export interface S3GetObjectAclRequest {
  /**
   * @schema S3GetObjectAclRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetObjectAclRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3GetObjectAclRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3GetObjectAclRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3GetObjectAclRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetObjectAclOutput
 */
export interface S3GetObjectAclOutput {
  /**
   * @schema S3GetObjectAclOutput#Owner
   */
  readonly owner?: S3Owner;

  /**
   * @schema S3GetObjectAclOutput#Grants
   */
  readonly grants?: S3Grant[];

  /**
   * @schema S3GetObjectAclOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema S3GetObjectLegalHoldRequest
 */
export interface S3GetObjectLegalHoldRequest {
  /**
   * @schema S3GetObjectLegalHoldRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetObjectLegalHoldRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3GetObjectLegalHoldRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3GetObjectLegalHoldRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3GetObjectLegalHoldRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetObjectLegalHoldOutput
 */
export interface S3GetObjectLegalHoldOutput {
  /**
   * @schema S3GetObjectLegalHoldOutput#LegalHold
   */
  readonly legalHold?: S3ObjectLockLegalHold;

}

/**
 * @schema S3GetObjectLockConfigurationRequest
 */
export interface S3GetObjectLockConfigurationRequest {
  /**
   * @schema S3GetObjectLockConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetObjectLockConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetObjectLockConfigurationOutput
 */
export interface S3GetObjectLockConfigurationOutput {
  /**
   * @schema S3GetObjectLockConfigurationOutput#ObjectLockConfiguration
   */
  readonly objectLockConfiguration?: S3ObjectLockConfiguration;

}

/**
 * @schema S3GetObjectRetentionRequest
 */
export interface S3GetObjectRetentionRequest {
  /**
   * @schema S3GetObjectRetentionRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetObjectRetentionRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3GetObjectRetentionRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3GetObjectRetentionRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3GetObjectRetentionRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetObjectRetentionOutput
 */
export interface S3GetObjectRetentionOutput {
  /**
   * @schema S3GetObjectRetentionOutput#Retention
   */
  readonly retention?: S3ObjectLockRetention;

}

/**
 * @schema S3GetObjectTaggingRequest
 */
export interface S3GetObjectTaggingRequest {
  /**
   * @schema S3GetObjectTaggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetObjectTaggingRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3GetObjectTaggingRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3GetObjectTaggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetObjectTaggingOutput
 */
export interface S3GetObjectTaggingOutput {
  /**
   * @schema S3GetObjectTaggingOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3GetObjectTaggingOutput#TagSet
   */
  readonly tagSet: S3Tag[];

}

/**
 * @schema S3GetObjectTorrentRequest
 */
export interface S3GetObjectTorrentRequest {
  /**
   * @schema S3GetObjectTorrentRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetObjectTorrentRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3GetObjectTorrentRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3GetObjectTorrentRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetObjectTorrentOutput
 */
export interface S3GetObjectTorrentOutput {
  /**
   * @schema S3GetObjectTorrentOutput#Body
   */
  readonly body?: any;

  /**
   * @schema S3GetObjectTorrentOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema S3GetPublicAccessBlockRequest
 */
export interface S3GetPublicAccessBlockRequest {
  /**
   * @schema S3GetPublicAccessBlockRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3GetPublicAccessBlockRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3GetPublicAccessBlockOutput
 */
export interface S3GetPublicAccessBlockOutput {
  /**
   * @schema S3GetPublicAccessBlockOutput#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration?: S3PublicAccessBlockConfiguration;

}

/**
 * @schema S3HeadBucketRequest
 */
export interface S3HeadBucketRequest {
  /**
   * @schema S3HeadBucketRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3HeadBucketRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3HeadObjectRequest
 */
export interface S3HeadObjectRequest {
  /**
   * @schema S3HeadObjectRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3HeadObjectRequest#IfMatch
   */
  readonly ifMatch?: string;

  /**
   * @schema S3HeadObjectRequest#IfModifiedSince
   */
  readonly ifModifiedSince?: string;

  /**
   * @schema S3HeadObjectRequest#IfNoneMatch
   */
  readonly ifNoneMatch?: string;

  /**
   * @schema S3HeadObjectRequest#IfUnmodifiedSince
   */
  readonly ifUnmodifiedSince?: string;

  /**
   * @schema S3HeadObjectRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3HeadObjectRequest#Range
   */
  readonly range?: string;

  /**
   * @schema S3HeadObjectRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3HeadObjectRequest#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema S3HeadObjectRequest#SSECustomerKey
   */
  readonly sseCustomerKey?: any;

  /**
   * @schema S3HeadObjectRequest#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema S3HeadObjectRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3HeadObjectRequest#PartNumber
   */
  readonly partNumber?: number;

  /**
   * @schema S3HeadObjectRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3HeadObjectOutput
 */
export interface S3HeadObjectOutput {
  /**
   * @schema S3HeadObjectOutput#DeleteMarker
   */
  readonly deleteMarker?: boolean;

  /**
   * @schema S3HeadObjectOutput#AcceptRanges
   */
  readonly acceptRanges?: string;

  /**
   * @schema S3HeadObjectOutput#Expiration
   */
  readonly expiration?: string;

  /**
   * @schema S3HeadObjectOutput#Restore
   */
  readonly restore?: string;

  /**
   * @schema S3HeadObjectOutput#ArchiveStatus
   */
  readonly archiveStatus?: string;

  /**
   * @schema S3HeadObjectOutput#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema S3HeadObjectOutput#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema S3HeadObjectOutput#ETag
   */
  readonly eTag?: string;

  /**
   * @schema S3HeadObjectOutput#MissingMeta
   */
  readonly missingMeta?: number;

  /**
   * @schema S3HeadObjectOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3HeadObjectOutput#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema S3HeadObjectOutput#ContentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema S3HeadObjectOutput#ContentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema S3HeadObjectOutput#ContentLanguage
   */
  readonly contentLanguage?: string;

  /**
   * @schema S3HeadObjectOutput#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema S3HeadObjectOutput#Expires
   */
  readonly expires?: string;

  /**
   * @schema S3HeadObjectOutput#WebsiteRedirectLocation
   */
  readonly websiteRedirectLocation?: string;

  /**
   * @schema S3HeadObjectOutput#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema S3HeadObjectOutput#Metadata
   */
  readonly metadata?: { [key: string]: string };

  /**
   * @schema S3HeadObjectOutput#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema S3HeadObjectOutput#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema S3HeadObjectOutput#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema S3HeadObjectOutput#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema S3HeadObjectOutput#RequestCharged
   */
  readonly requestCharged?: string;

  /**
   * @schema S3HeadObjectOutput#ReplicationStatus
   */
  readonly replicationStatus?: string;

  /**
   * @schema S3HeadObjectOutput#PartsCount
   */
  readonly partsCount?: number;

  /**
   * @schema S3HeadObjectOutput#ObjectLockMode
   */
  readonly objectLockMode?: string;

  /**
   * @schema S3HeadObjectOutput#ObjectLockRetainUntilDate
   */
  readonly objectLockRetainUntilDate?: string;

  /**
   * @schema S3HeadObjectOutput#ObjectLockLegalHoldStatus
   */
  readonly objectLockLegalHoldStatus?: string;

}

/**
 * @schema S3ListBucketAnalyticsConfigurationsRequest
 */
export interface S3ListBucketAnalyticsConfigurationsRequest {
  /**
   * @schema S3ListBucketAnalyticsConfigurationsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3ListBucketAnalyticsConfigurationsRequest#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema S3ListBucketAnalyticsConfigurationsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3ListBucketAnalyticsConfigurationsOutput
 */
export interface S3ListBucketAnalyticsConfigurationsOutput {
  /**
   * @schema S3ListBucketAnalyticsConfigurationsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema S3ListBucketAnalyticsConfigurationsOutput#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema S3ListBucketAnalyticsConfigurationsOutput#NextContinuationToken
   */
  readonly nextContinuationToken?: string;

  /**
   * @schema S3ListBucketAnalyticsConfigurationsOutput#AnalyticsConfigurationList
   */
  readonly analyticsConfigurationList?: S3AnalyticsConfiguration[];

}

/**
 * @schema S3ListBucketIntelligentTieringConfigurationsRequest
 */
export interface S3ListBucketIntelligentTieringConfigurationsRequest {
  /**
   * @schema S3ListBucketIntelligentTieringConfigurationsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3ListBucketIntelligentTieringConfigurationsRequest#ContinuationToken
   */
  readonly continuationToken?: string;

}

/**
 * @schema S3ListBucketIntelligentTieringConfigurationsOutput
 */
export interface S3ListBucketIntelligentTieringConfigurationsOutput {
  /**
   * @schema S3ListBucketIntelligentTieringConfigurationsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema S3ListBucketIntelligentTieringConfigurationsOutput#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema S3ListBucketIntelligentTieringConfigurationsOutput#NextContinuationToken
   */
  readonly nextContinuationToken?: string;

  /**
   * @schema S3ListBucketIntelligentTieringConfigurationsOutput#IntelligentTieringConfigurationList
   */
  readonly intelligentTieringConfigurationList?: S3IntelligentTieringConfiguration[];

}

/**
 * @schema S3ListBucketInventoryConfigurationsRequest
 */
export interface S3ListBucketInventoryConfigurationsRequest {
  /**
   * @schema S3ListBucketInventoryConfigurationsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3ListBucketInventoryConfigurationsRequest#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema S3ListBucketInventoryConfigurationsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3ListBucketInventoryConfigurationsOutput
 */
export interface S3ListBucketInventoryConfigurationsOutput {
  /**
   * @schema S3ListBucketInventoryConfigurationsOutput#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema S3ListBucketInventoryConfigurationsOutput#InventoryConfigurationList
   */
  readonly inventoryConfigurationList?: S3InventoryConfiguration[];

  /**
   * @schema S3ListBucketInventoryConfigurationsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema S3ListBucketInventoryConfigurationsOutput#NextContinuationToken
   */
  readonly nextContinuationToken?: string;

}

/**
 * @schema S3ListBucketMetricsConfigurationsRequest
 */
export interface S3ListBucketMetricsConfigurationsRequest {
  /**
   * @schema S3ListBucketMetricsConfigurationsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3ListBucketMetricsConfigurationsRequest#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema S3ListBucketMetricsConfigurationsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3ListBucketMetricsConfigurationsOutput
 */
export interface S3ListBucketMetricsConfigurationsOutput {
  /**
   * @schema S3ListBucketMetricsConfigurationsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema S3ListBucketMetricsConfigurationsOutput#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema S3ListBucketMetricsConfigurationsOutput#NextContinuationToken
   */
  readonly nextContinuationToken?: string;

  /**
   * @schema S3ListBucketMetricsConfigurationsOutput#MetricsConfigurationList
   */
  readonly metricsConfigurationList?: S3MetricsConfiguration[];

}

/**
 * @schema S3ListBucketsOutput
 */
export interface S3ListBucketsOutput {
  /**
   * @schema S3ListBucketsOutput#Buckets
   */
  readonly buckets?: S3Bucket[];

  /**
   * @schema S3ListBucketsOutput#Owner
   */
  readonly owner?: S3Owner;

}

/**
 * @schema S3ListMultipartUploadsRequest
 */
export interface S3ListMultipartUploadsRequest {
  /**
   * @schema S3ListMultipartUploadsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3ListMultipartUploadsRequest#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema S3ListMultipartUploadsRequest#EncodingType
   */
  readonly encodingType?: string;

  /**
   * @schema S3ListMultipartUploadsRequest#KeyMarker
   */
  readonly keyMarker?: string;

  /**
   * @schema S3ListMultipartUploadsRequest#MaxUploads
   */
  readonly maxUploads?: number;

  /**
   * @schema S3ListMultipartUploadsRequest#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ListMultipartUploadsRequest#UploadIdMarker
   */
  readonly uploadIdMarker?: string;

  /**
   * @schema S3ListMultipartUploadsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3ListMultipartUploadsOutput
 */
export interface S3ListMultipartUploadsOutput {
  /**
   * @schema S3ListMultipartUploadsOutput#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ListMultipartUploadsOutput#KeyMarker
   */
  readonly keyMarker?: string;

  /**
   * @schema S3ListMultipartUploadsOutput#UploadIdMarker
   */
  readonly uploadIdMarker?: string;

  /**
   * @schema S3ListMultipartUploadsOutput#NextKeyMarker
   */
  readonly nextKeyMarker?: string;

  /**
   * @schema S3ListMultipartUploadsOutput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ListMultipartUploadsOutput#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema S3ListMultipartUploadsOutput#NextUploadIdMarker
   */
  readonly nextUploadIdMarker?: string;

  /**
   * @schema S3ListMultipartUploadsOutput#MaxUploads
   */
  readonly maxUploads?: number;

  /**
   * @schema S3ListMultipartUploadsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema S3ListMultipartUploadsOutput#Uploads
   */
  readonly uploads?: S3MultipartUpload[];

  /**
   * @schema S3ListMultipartUploadsOutput#CommonPrefixes
   */
  readonly commonPrefixes?: S3CommonPrefix[];

  /**
   * @schema S3ListMultipartUploadsOutput#EncodingType
   */
  readonly encodingType?: string;

}

/**
 * @schema S3ListObjectVersionsRequest
 */
export interface S3ListObjectVersionsRequest {
  /**
   * @schema S3ListObjectVersionsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3ListObjectVersionsRequest#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema S3ListObjectVersionsRequest#EncodingType
   */
  readonly encodingType?: string;

  /**
   * @schema S3ListObjectVersionsRequest#KeyMarker
   */
  readonly keyMarker?: string;

  /**
   * @schema S3ListObjectVersionsRequest#MaxKeys
   */
  readonly maxKeys?: number;

  /**
   * @schema S3ListObjectVersionsRequest#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ListObjectVersionsRequest#VersionIdMarker
   */
  readonly versionIdMarker?: string;

  /**
   * @schema S3ListObjectVersionsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3ListObjectVersionsOutput
 */
export interface S3ListObjectVersionsOutput {
  /**
   * @schema S3ListObjectVersionsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema S3ListObjectVersionsOutput#KeyMarker
   */
  readonly keyMarker?: string;

  /**
   * @schema S3ListObjectVersionsOutput#VersionIdMarker
   */
  readonly versionIdMarker?: string;

  /**
   * @schema S3ListObjectVersionsOutput#NextKeyMarker
   */
  readonly nextKeyMarker?: string;

  /**
   * @schema S3ListObjectVersionsOutput#NextVersionIdMarker
   */
  readonly nextVersionIdMarker?: string;

  /**
   * @schema S3ListObjectVersionsOutput#Versions
   */
  readonly versions?: S3ObjectVersion[];

  /**
   * @schema S3ListObjectVersionsOutput#DeleteMarkers
   */
  readonly deleteMarkers?: S3DeleteMarkerEntry[];

  /**
   * @schema S3ListObjectVersionsOutput#Name
   */
  readonly name?: string;

  /**
   * @schema S3ListObjectVersionsOutput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ListObjectVersionsOutput#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema S3ListObjectVersionsOutput#MaxKeys
   */
  readonly maxKeys?: number;

  /**
   * @schema S3ListObjectVersionsOutput#CommonPrefixes
   */
  readonly commonPrefixes?: S3CommonPrefix[];

  /**
   * @schema S3ListObjectVersionsOutput#EncodingType
   */
  readonly encodingType?: string;

}

/**
 * @schema S3ListObjectsRequest
 */
export interface S3ListObjectsRequest {
  /**
   * @schema S3ListObjectsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3ListObjectsRequest#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema S3ListObjectsRequest#EncodingType
   */
  readonly encodingType?: string;

  /**
   * @schema S3ListObjectsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema S3ListObjectsRequest#MaxKeys
   */
  readonly maxKeys?: number;

  /**
   * @schema S3ListObjectsRequest#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ListObjectsRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3ListObjectsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3ListObjectsOutput
 */
export interface S3ListObjectsOutput {
  /**
   * @schema S3ListObjectsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema S3ListObjectsOutput#Marker
   */
  readonly marker?: string;

  /**
   * @schema S3ListObjectsOutput#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema S3ListObjectsOutput#Contents
   */
  readonly contents?: S3Object[];

  /**
   * @schema S3ListObjectsOutput#Name
   */
  readonly name?: string;

  /**
   * @schema S3ListObjectsOutput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ListObjectsOutput#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema S3ListObjectsOutput#MaxKeys
   */
  readonly maxKeys?: number;

  /**
   * @schema S3ListObjectsOutput#CommonPrefixes
   */
  readonly commonPrefixes?: S3CommonPrefix[];

  /**
   * @schema S3ListObjectsOutput#EncodingType
   */
  readonly encodingType?: string;

}

/**
 * @schema S3ListObjectsV2Request
 */
export interface S3ListObjectsV2Request {
  /**
   * @schema S3ListObjectsV2Request#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3ListObjectsV2Request#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema S3ListObjectsV2Request#EncodingType
   */
  readonly encodingType?: string;

  /**
   * @schema S3ListObjectsV2Request#MaxKeys
   */
  readonly maxKeys?: number;

  /**
   * @schema S3ListObjectsV2Request#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ListObjectsV2Request#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema S3ListObjectsV2Request#FetchOwner
   */
  readonly fetchOwner?: boolean;

  /**
   * @schema S3ListObjectsV2Request#StartAfter
   */
  readonly startAfter?: string;

  /**
   * @schema S3ListObjectsV2Request#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3ListObjectsV2Request#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3ListObjectsV2Output
 */
export interface S3ListObjectsV2Output {
  /**
   * @schema S3ListObjectsV2Output#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema S3ListObjectsV2Output#Contents
   */
  readonly contents?: S3Object[];

  /**
   * @schema S3ListObjectsV2Output#Name
   */
  readonly name?: string;

  /**
   * @schema S3ListObjectsV2Output#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ListObjectsV2Output#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema S3ListObjectsV2Output#MaxKeys
   */
  readonly maxKeys?: number;

  /**
   * @schema S3ListObjectsV2Output#CommonPrefixes
   */
  readonly commonPrefixes?: S3CommonPrefix[];

  /**
   * @schema S3ListObjectsV2Output#EncodingType
   */
  readonly encodingType?: string;

  /**
   * @schema S3ListObjectsV2Output#KeyCount
   */
  readonly keyCount?: number;

  /**
   * @schema S3ListObjectsV2Output#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema S3ListObjectsV2Output#NextContinuationToken
   */
  readonly nextContinuationToken?: string;

  /**
   * @schema S3ListObjectsV2Output#StartAfter
   */
  readonly startAfter?: string;

}

/**
 * @schema S3ListPartsRequest
 */
export interface S3ListPartsRequest {
  /**
   * @schema S3ListPartsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3ListPartsRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3ListPartsRequest#MaxParts
   */
  readonly maxParts?: number;

  /**
   * @schema S3ListPartsRequest#PartNumberMarker
   */
  readonly partNumberMarker?: number;

  /**
   * @schema S3ListPartsRequest#UploadId
   */
  readonly uploadId: string;

  /**
   * @schema S3ListPartsRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3ListPartsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3ListPartsOutput
 */
export interface S3ListPartsOutput {
  /**
   * @schema S3ListPartsOutput#AbortDate
   */
  readonly abortDate?: string;

  /**
   * @schema S3ListPartsOutput#AbortRuleId
   */
  readonly abortRuleId?: string;

  /**
   * @schema S3ListPartsOutput#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ListPartsOutput#Key
   */
  readonly key?: string;

  /**
   * @schema S3ListPartsOutput#UploadId
   */
  readonly uploadId?: string;

  /**
   * @schema S3ListPartsOutput#PartNumberMarker
   */
  readonly partNumberMarker?: number;

  /**
   * @schema S3ListPartsOutput#NextPartNumberMarker
   */
  readonly nextPartNumberMarker?: number;

  /**
   * @schema S3ListPartsOutput#MaxParts
   */
  readonly maxParts?: number;

  /**
   * @schema S3ListPartsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema S3ListPartsOutput#Parts
   */
  readonly parts?: S3Part[];

  /**
   * @schema S3ListPartsOutput#Initiator
   */
  readonly initiator?: S3Initiator;

  /**
   * @schema S3ListPartsOutput#Owner
   */
  readonly owner?: S3Owner;

  /**
   * @schema S3ListPartsOutput#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema S3ListPartsOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema S3PutBucketAccelerateConfigurationRequest
 */
export interface S3PutBucketAccelerateConfigurationRequest {
  /**
   * @schema S3PutBucketAccelerateConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketAccelerateConfigurationRequest#AccelerateConfiguration
   */
  readonly accelerateConfiguration: S3AccelerateConfiguration;

  /**
   * @schema S3PutBucketAccelerateConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutBucketAclRequest
 */
export interface S3PutBucketAclRequest {
  /**
   * @schema S3PutBucketAclRequest#ACL
   */
  readonly acl?: string;

  /**
   * @schema S3PutBucketAclRequest#AccessControlPolicy
   */
  readonly accessControlPolicy?: S3AccessControlPolicy;

  /**
   * @schema S3PutBucketAclRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketAclRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketAclRequest#GrantFullControl
   */
  readonly grantFullControl?: string;

  /**
   * @schema S3PutBucketAclRequest#GrantRead
   */
  readonly grantRead?: string;

  /**
   * @schema S3PutBucketAclRequest#GrantReadACP
   */
  readonly grantReadAcp?: string;

  /**
   * @schema S3PutBucketAclRequest#GrantWrite
   */
  readonly grantWrite?: string;

  /**
   * @schema S3PutBucketAclRequest#GrantWriteACP
   */
  readonly grantWriteAcp?: string;

  /**
   * @schema S3PutBucketAclRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutBucketAnalyticsConfigurationRequest
 */
export interface S3PutBucketAnalyticsConfigurationRequest {
  /**
   * @schema S3PutBucketAnalyticsConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketAnalyticsConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema S3PutBucketAnalyticsConfigurationRequest#AnalyticsConfiguration
   */
  readonly analyticsConfiguration: S3AnalyticsConfiguration;

  /**
   * @schema S3PutBucketAnalyticsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutBucketCorsRequest
 */
export interface S3PutBucketCorsRequest {
  /**
   * @schema S3PutBucketCorsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketCorsRequest#CORSConfiguration
   */
  readonly corsConfiguration: S3CorsConfiguration;

  /**
   * @schema S3PutBucketCorsRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketCorsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutBucketEncryptionRequest
 */
export interface S3PutBucketEncryptionRequest {
  /**
   * @schema S3PutBucketEncryptionRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketEncryptionRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketEncryptionRequest#ServerSideEncryptionConfiguration
   */
  readonly serverSideEncryptionConfiguration: S3ServerSideEncryptionConfiguration;

  /**
   * @schema S3PutBucketEncryptionRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutBucketIntelligentTieringConfigurationRequest
 */
export interface S3PutBucketIntelligentTieringConfigurationRequest {
  /**
   * @schema S3PutBucketIntelligentTieringConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketIntelligentTieringConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema S3PutBucketIntelligentTieringConfigurationRequest#IntelligentTieringConfiguration
   */
  readonly intelligentTieringConfiguration: S3IntelligentTieringConfiguration;

}

/**
 * @schema S3PutBucketInventoryConfigurationRequest
 */
export interface S3PutBucketInventoryConfigurationRequest {
  /**
   * @schema S3PutBucketInventoryConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketInventoryConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema S3PutBucketInventoryConfigurationRequest#InventoryConfiguration
   */
  readonly inventoryConfiguration: S3InventoryConfiguration;

  /**
   * @schema S3PutBucketInventoryConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutBucketLifecycleRequest
 */
export interface S3PutBucketLifecycleRequest {
  /**
   * @schema S3PutBucketLifecycleRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketLifecycleRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketLifecycleRequest#LifecycleConfiguration
   */
  readonly lifecycleConfiguration?: S3LifecycleConfiguration;

  /**
   * @schema S3PutBucketLifecycleRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutBucketLifecycleConfigurationRequest
 */
export interface S3PutBucketLifecycleConfigurationRequest {
  /**
   * @schema S3PutBucketLifecycleConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketLifecycleConfigurationRequest#LifecycleConfiguration
   */
  readonly lifecycleConfiguration?: S3BucketLifecycleConfiguration;

  /**
   * @schema S3PutBucketLifecycleConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutBucketLoggingRequest
 */
export interface S3PutBucketLoggingRequest {
  /**
   * @schema S3PutBucketLoggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketLoggingRequest#BucketLoggingStatus
   */
  readonly bucketLoggingStatus: S3BucketLoggingStatus;

  /**
   * @schema S3PutBucketLoggingRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketLoggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutBucketMetricsConfigurationRequest
 */
export interface S3PutBucketMetricsConfigurationRequest {
  /**
   * @schema S3PutBucketMetricsConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketMetricsConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema S3PutBucketMetricsConfigurationRequest#MetricsConfiguration
   */
  readonly metricsConfiguration: S3MetricsConfiguration;

  /**
   * @schema S3PutBucketMetricsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutBucketNotificationRequest
 */
export interface S3PutBucketNotificationRequest {
  /**
   * @schema S3PutBucketNotificationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketNotificationRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketNotificationRequest#NotificationConfiguration
   */
  readonly notificationConfiguration: S3NotificationConfigurationDeprecated;

  /**
   * @schema S3PutBucketNotificationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutBucketNotificationConfigurationRequest
 */
export interface S3PutBucketNotificationConfigurationRequest {
  /**
   * @schema S3PutBucketNotificationConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketNotificationConfigurationRequest#NotificationConfiguration
   */
  readonly notificationConfiguration: S3NotificationConfiguration;

  /**
   * @schema S3PutBucketNotificationConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutBucketOwnershipControlsRequest
 */
export interface S3PutBucketOwnershipControlsRequest {
  /**
   * @schema S3PutBucketOwnershipControlsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketOwnershipControlsRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketOwnershipControlsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

  /**
   * @schema S3PutBucketOwnershipControlsRequest#OwnershipControls
   */
  readonly ownershipControls: S3OwnershipControls;

}

/**
 * @schema S3PutBucketPolicyRequest
 */
export interface S3PutBucketPolicyRequest {
  /**
   * @schema S3PutBucketPolicyRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketPolicyRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketPolicyRequest#ConfirmRemoveSelfBucketAccess
   */
  readonly confirmRemoveSelfBucketAccess?: boolean;

  /**
   * @schema S3PutBucketPolicyRequest#Policy
   */
  readonly policy: string;

  /**
   * @schema S3PutBucketPolicyRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutBucketReplicationRequest
 */
export interface S3PutBucketReplicationRequest {
  /**
   * @schema S3PutBucketReplicationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketReplicationRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketReplicationRequest#ReplicationConfiguration
   */
  readonly replicationConfiguration: S3ReplicationConfiguration;

  /**
   * @schema S3PutBucketReplicationRequest#Token
   */
  readonly token?: string;

  /**
   * @schema S3PutBucketReplicationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutBucketRequestPaymentRequest
 */
export interface S3PutBucketRequestPaymentRequest {
  /**
   * @schema S3PutBucketRequestPaymentRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketRequestPaymentRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketRequestPaymentRequest#RequestPaymentConfiguration
   */
  readonly requestPaymentConfiguration: S3RequestPaymentConfiguration;

  /**
   * @schema S3PutBucketRequestPaymentRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutBucketTaggingRequest
 */
export interface S3PutBucketTaggingRequest {
  /**
   * @schema S3PutBucketTaggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketTaggingRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketTaggingRequest#Tagging
   */
  readonly tagging: S3Tagging;

  /**
   * @schema S3PutBucketTaggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutBucketVersioningRequest
 */
export interface S3PutBucketVersioningRequest {
  /**
   * @schema S3PutBucketVersioningRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketVersioningRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketVersioningRequest#MFA
   */
  readonly mfa?: string;

  /**
   * @schema S3PutBucketVersioningRequest#VersioningConfiguration
   */
  readonly versioningConfiguration: S3VersioningConfiguration;

  /**
   * @schema S3PutBucketVersioningRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutBucketWebsiteRequest
 */
export interface S3PutBucketWebsiteRequest {
  /**
   * @schema S3PutBucketWebsiteRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutBucketWebsiteRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketWebsiteRequest#WebsiteConfiguration
   */
  readonly websiteConfiguration: S3WebsiteConfiguration;

  /**
   * @schema S3PutBucketWebsiteRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutObjectRequest
 */
export interface S3PutObjectRequest {
  /**
   * @schema S3PutObjectRequest#ACL
   */
  readonly acl?: string;

  /**
   * @schema S3PutObjectRequest#Body
   */
  readonly body?: any;

  /**
   * @schema S3PutObjectRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutObjectRequest#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema S3PutObjectRequest#ContentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema S3PutObjectRequest#ContentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema S3PutObjectRequest#ContentLanguage
   */
  readonly contentLanguage?: string;

  /**
   * @schema S3PutObjectRequest#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema S3PutObjectRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutObjectRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema S3PutObjectRequest#Expires
   */
  readonly expires?: string;

  /**
   * @schema S3PutObjectRequest#GrantFullControl
   */
  readonly grantFullControl?: string;

  /**
   * @schema S3PutObjectRequest#GrantRead
   */
  readonly grantRead?: string;

  /**
   * @schema S3PutObjectRequest#GrantReadACP
   */
  readonly grantReadAcp?: string;

  /**
   * @schema S3PutObjectRequest#GrantWriteACP
   */
  readonly grantWriteAcp?: string;

  /**
   * @schema S3PutObjectRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3PutObjectRequest#Metadata
   */
  readonly metadata?: { [key: string]: string };

  /**
   * @schema S3PutObjectRequest#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema S3PutObjectRequest#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema S3PutObjectRequest#WebsiteRedirectLocation
   */
  readonly websiteRedirectLocation?: string;

  /**
   * @schema S3PutObjectRequest#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema S3PutObjectRequest#SSECustomerKey
   */
  readonly sseCustomerKey?: any;

  /**
   * @schema S3PutObjectRequest#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema S3PutObjectRequest#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema S3PutObjectRequest#SSEKMSEncryptionContext
   */
  readonly ssekmsEncryptionContext?: string;

  /**
   * @schema S3PutObjectRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3PutObjectRequest#Tagging
   */
  readonly tagging?: string;

  /**
   * @schema S3PutObjectRequest#ObjectLockMode
   */
  readonly objectLockMode?: string;

  /**
   * @schema S3PutObjectRequest#ObjectLockRetainUntilDate
   */
  readonly objectLockRetainUntilDate?: string;

  /**
   * @schema S3PutObjectRequest#ObjectLockLegalHoldStatus
   */
  readonly objectLockLegalHoldStatus?: string;

  /**
   * @schema S3PutObjectRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutObjectOutput
 */
export interface S3PutObjectOutput {
  /**
   * @schema S3PutObjectOutput#Expiration
   */
  readonly expiration?: string;

  /**
   * @schema S3PutObjectOutput#ETag
   */
  readonly eTag?: string;

  /**
   * @schema S3PutObjectOutput#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema S3PutObjectOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3PutObjectOutput#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema S3PutObjectOutput#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema S3PutObjectOutput#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema S3PutObjectOutput#SSEKMSEncryptionContext
   */
  readonly ssekmsEncryptionContext?: string;

  /**
   * @schema S3PutObjectOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema S3PutObjectAclRequest
 */
export interface S3PutObjectAclRequest {
  /**
   * @schema S3PutObjectAclRequest#ACL
   */
  readonly acl?: string;

  /**
   * @schema S3PutObjectAclRequest#AccessControlPolicy
   */
  readonly accessControlPolicy?: S3AccessControlPolicy;

  /**
   * @schema S3PutObjectAclRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutObjectAclRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutObjectAclRequest#GrantFullControl
   */
  readonly grantFullControl?: string;

  /**
   * @schema S3PutObjectAclRequest#GrantRead
   */
  readonly grantRead?: string;

  /**
   * @schema S3PutObjectAclRequest#GrantReadACP
   */
  readonly grantReadAcp?: string;

  /**
   * @schema S3PutObjectAclRequest#GrantWrite
   */
  readonly grantWrite?: string;

  /**
   * @schema S3PutObjectAclRequest#GrantWriteACP
   */
  readonly grantWriteAcp?: string;

  /**
   * @schema S3PutObjectAclRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3PutObjectAclRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3PutObjectAclRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3PutObjectAclRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutObjectAclOutput
 */
export interface S3PutObjectAclOutput {
  /**
   * @schema S3PutObjectAclOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema S3PutObjectLegalHoldRequest
 */
export interface S3PutObjectLegalHoldRequest {
  /**
   * @schema S3PutObjectLegalHoldRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutObjectLegalHoldRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3PutObjectLegalHoldRequest#LegalHold
   */
  readonly legalHold?: S3ObjectLockLegalHold;

  /**
   * @schema S3PutObjectLegalHoldRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3PutObjectLegalHoldRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3PutObjectLegalHoldRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutObjectLegalHoldRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutObjectLegalHoldOutput
 */
export interface S3PutObjectLegalHoldOutput {
  /**
   * @schema S3PutObjectLegalHoldOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema S3PutObjectLockConfigurationRequest
 */
export interface S3PutObjectLockConfigurationRequest {
  /**
   * @schema S3PutObjectLockConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutObjectLockConfigurationRequest#ObjectLockConfiguration
   */
  readonly objectLockConfiguration?: S3ObjectLockConfiguration;

  /**
   * @schema S3PutObjectLockConfigurationRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3PutObjectLockConfigurationRequest#Token
   */
  readonly token?: string;

  /**
   * @schema S3PutObjectLockConfigurationRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutObjectLockConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutObjectLockConfigurationOutput
 */
export interface S3PutObjectLockConfigurationOutput {
  /**
   * @schema S3PutObjectLockConfigurationOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema S3PutObjectRetentionRequest
 */
export interface S3PutObjectRetentionRequest {
  /**
   * @schema S3PutObjectRetentionRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutObjectRetentionRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3PutObjectRetentionRequest#Retention
   */
  readonly retention?: S3ObjectLockRetention;

  /**
   * @schema S3PutObjectRetentionRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3PutObjectRetentionRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3PutObjectRetentionRequest#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

  /**
   * @schema S3PutObjectRetentionRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutObjectRetentionRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutObjectRetentionOutput
 */
export interface S3PutObjectRetentionOutput {
  /**
   * @schema S3PutObjectRetentionOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema S3PutObjectTaggingRequest
 */
export interface S3PutObjectTaggingRequest {
  /**
   * @schema S3PutObjectTaggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutObjectTaggingRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3PutObjectTaggingRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3PutObjectTaggingRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutObjectTaggingRequest#Tagging
   */
  readonly tagging: S3Tagging;

  /**
   * @schema S3PutObjectTaggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3PutObjectTaggingOutput
 */
export interface S3PutObjectTaggingOutput {
  /**
   * @schema S3PutObjectTaggingOutput#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema S3PutPublicAccessBlockRequest
 */
export interface S3PutPublicAccessBlockRequest {
  /**
   * @schema S3PutPublicAccessBlockRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3PutPublicAccessBlockRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutPublicAccessBlockRequest#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration: S3PublicAccessBlockConfiguration;

  /**
   * @schema S3PutPublicAccessBlockRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3RestoreObjectRequest
 */
export interface S3RestoreObjectRequest {
  /**
   * @schema S3RestoreObjectRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3RestoreObjectRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3RestoreObjectRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3RestoreObjectRequest#RestoreRequest
   */
  readonly restoreRequest?: S3RestoreRequest;

  /**
   * @schema S3RestoreObjectRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3RestoreObjectRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3RestoreObjectOutput
 */
export interface S3RestoreObjectOutput {
  /**
   * @schema S3RestoreObjectOutput#RequestCharged
   */
  readonly requestCharged?: string;

  /**
   * @schema S3RestoreObjectOutput#RestoreOutputPath
   */
  readonly restoreOutputPath?: string;

}

/**
 * @schema S3SelectObjectContentRequest
 */
export interface S3SelectObjectContentRequest {
  /**
   * @schema S3SelectObjectContentRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3SelectObjectContentRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3SelectObjectContentRequest#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema S3SelectObjectContentRequest#SSECustomerKey
   */
  readonly sseCustomerKey?: any;

  /**
   * @schema S3SelectObjectContentRequest#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema S3SelectObjectContentRequest#Expression
   */
  readonly expression: string;

  /**
   * @schema S3SelectObjectContentRequest#ExpressionType
   */
  readonly expressionType: string;

  /**
   * @schema S3SelectObjectContentRequest#RequestProgress
   */
  readonly requestProgress?: S3RequestProgress;

  /**
   * @schema S3SelectObjectContentRequest#InputSerialization
   */
  readonly inputSerialization: S3InputSerialization;

  /**
   * @schema S3SelectObjectContentRequest#OutputSerialization
   */
  readonly outputSerialization: S3OutputSerialization;

  /**
   * @schema S3SelectObjectContentRequest#ScanRange
   */
  readonly scanRange?: S3ScanRange;

  /**
   * @schema S3SelectObjectContentRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3SelectObjectContentOutput
 */
export interface S3SelectObjectContentOutput {
  /**
   * @schema S3SelectObjectContentOutput#Payload
   */
  readonly payload?: S3SelectObjectContentEventStream;

}

/**
 * @schema S3UploadPartRequest
 */
export interface S3UploadPartRequest {
  /**
   * @schema S3UploadPartRequest#Body
   */
  readonly body?: any;

  /**
   * @schema S3UploadPartRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3UploadPartRequest#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema S3UploadPartRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3UploadPartRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3UploadPartRequest#PartNumber
   */
  readonly partNumber: number;

  /**
   * @schema S3UploadPartRequest#UploadId
   */
  readonly uploadId: string;

  /**
   * @schema S3UploadPartRequest#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema S3UploadPartRequest#SSECustomerKey
   */
  readonly sseCustomerKey?: any;

  /**
   * @schema S3UploadPartRequest#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema S3UploadPartRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3UploadPartRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema S3UploadPartOutput
 */
export interface S3UploadPartOutput {
  /**
   * @schema S3UploadPartOutput#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema S3UploadPartOutput#ETag
   */
  readonly eTag?: string;

  /**
   * @schema S3UploadPartOutput#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema S3UploadPartOutput#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema S3UploadPartOutput#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema S3UploadPartOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema S3UploadPartCopyRequest
 */
export interface S3UploadPartCopyRequest {
  /**
   * @schema S3UploadPartCopyRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3UploadPartCopyRequest#CopySource
   */
  readonly copySource: string;

  /**
   * @schema S3UploadPartCopyRequest#CopySourceIfMatch
   */
  readonly copySourceIfMatch?: string;

  /**
   * @schema S3UploadPartCopyRequest#CopySourceIfModifiedSince
   */
  readonly copySourceIfModifiedSince?: string;

  /**
   * @schema S3UploadPartCopyRequest#CopySourceIfNoneMatch
   */
  readonly copySourceIfNoneMatch?: string;

  /**
   * @schema S3UploadPartCopyRequest#CopySourceIfUnmodifiedSince
   */
  readonly copySourceIfUnmodifiedSince?: string;

  /**
   * @schema S3UploadPartCopyRequest#CopySourceRange
   */
  readonly copySourceRange?: string;

  /**
   * @schema S3UploadPartCopyRequest#Key
   */
  readonly key: string;

  /**
   * @schema S3UploadPartCopyRequest#PartNumber
   */
  readonly partNumber: number;

  /**
   * @schema S3UploadPartCopyRequest#UploadId
   */
  readonly uploadId: string;

  /**
   * @schema S3UploadPartCopyRequest#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema S3UploadPartCopyRequest#SSECustomerKey
   */
  readonly sseCustomerKey?: any;

  /**
   * @schema S3UploadPartCopyRequest#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema S3UploadPartCopyRequest#CopySourceSSECustomerAlgorithm
   */
  readonly copySourceSseCustomerAlgorithm?: string;

  /**
   * @schema S3UploadPartCopyRequest#CopySourceSSECustomerKey
   */
  readonly copySourceSseCustomerKey?: any;

  /**
   * @schema S3UploadPartCopyRequest#CopySourceSSECustomerKeyMD5
   */
  readonly copySourceSseCustomerKeyMd5?: string;

  /**
   * @schema S3UploadPartCopyRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema S3UploadPartCopyRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

  /**
   * @schema S3UploadPartCopyRequest#ExpectedSourceBucketOwner
   */
  readonly expectedSourceBucketOwner?: string;

}

/**
 * @schema S3UploadPartCopyOutput
 */
export interface S3UploadPartCopyOutput {
  /**
   * @schema S3UploadPartCopyOutput#CopySourceVersionId
   */
  readonly copySourceVersionId?: string;

  /**
   * @schema S3UploadPartCopyOutput#CopyPartResult
   */
  readonly copyPartResult?: S3CopyPartResult;

  /**
   * @schema S3UploadPartCopyOutput#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema S3UploadPartCopyOutput#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema S3UploadPartCopyOutput#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema S3UploadPartCopyOutput#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema S3UploadPartCopyOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema S3CompletedMultipartUpload
 */
export interface S3CompletedMultipartUpload {
  /**
   * @schema S3CompletedMultipartUpload#Parts
   */
  readonly parts?: S3CompletedPart[];

}

/**
 * @schema S3CopyObjectResult
 */
export interface S3CopyObjectResult {
  /**
   * @schema S3CopyObjectResult#ETag
   */
  readonly eTag?: string;

  /**
   * @schema S3CopyObjectResult#LastModified
   */
  readonly lastModified?: string;

}

/**
 * @schema S3CreateBucketConfiguration
 */
export interface S3CreateBucketConfiguration {
  /**
   * @schema S3CreateBucketConfiguration#LocationConstraint
   */
  readonly locationConstraint?: string;

}

/**
 * @schema S3Delete
 */
export interface S3Delete {
  /**
   * @schema S3Delete#Objects
   */
  readonly objects: S3ObjectIdentifier[];

  /**
   * @schema S3Delete#Quiet
   */
  readonly quiet?: boolean;

}

/**
 * @schema S3DeletedObject
 */
export interface S3DeletedObject {
  /**
   * @schema S3DeletedObject#Key
   */
  readonly key?: string;

  /**
   * @schema S3DeletedObject#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3DeletedObject#DeleteMarker
   */
  readonly deleteMarker?: boolean;

  /**
   * @schema S3DeletedObject#DeleteMarkerVersionId
   */
  readonly deleteMarkerVersionId?: string;

}

/**
 * @schema S3Error
 */
export interface S3Error {
  /**
   * @schema S3Error#Key
   */
  readonly key?: string;

  /**
   * @schema S3Error#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3Error#Code
   */
  readonly code?: string;

  /**
   * @schema S3Error#Message
   */
  readonly message?: string;

}

/**
 * @schema S3Owner
 */
export interface S3Owner {
  /**
   * @schema S3Owner#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema S3Owner#ID
   */
  readonly id?: string;

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
 * @schema S3AnalyticsConfiguration
 */
export interface S3AnalyticsConfiguration {
  /**
   * @schema S3AnalyticsConfiguration#Id
   */
  readonly id: string;

  /**
   * @schema S3AnalyticsConfiguration#Filter
   */
  readonly filter?: S3AnalyticsFilter;

  /**
   * @schema S3AnalyticsConfiguration#StorageClassAnalysis
   */
  readonly storageClassAnalysis: S3StorageClassAnalysis;

}

/**
 * @schema S3CorsRule
 */
export interface S3CorsRule {
  /**
   * @schema S3CorsRule#AllowedHeaders
   */
  readonly allowedHeaders?: string[];

  /**
   * @schema S3CorsRule#AllowedMethods
   */
  readonly allowedMethods: string[];

  /**
   * @schema S3CorsRule#AllowedOrigins
   */
  readonly allowedOrigins: string[];

  /**
   * @schema S3CorsRule#ExposeHeaders
   */
  readonly exposeHeaders?: string[];

  /**
   * @schema S3CorsRule#MaxAgeSeconds
   */
  readonly maxAgeSeconds?: number;

}

/**
 * @schema S3ServerSideEncryptionConfiguration
 */
export interface S3ServerSideEncryptionConfiguration {
  /**
   * @schema S3ServerSideEncryptionConfiguration#Rules
   */
  readonly rules: S3ServerSideEncryptionRule[];

}

/**
 * @schema S3IntelligentTieringConfiguration
 */
export interface S3IntelligentTieringConfiguration {
  /**
   * @schema S3IntelligentTieringConfiguration#Id
   */
  readonly id: string;

  /**
   * @schema S3IntelligentTieringConfiguration#Filter
   */
  readonly filter?: S3IntelligentTieringFilter;

  /**
   * @schema S3IntelligentTieringConfiguration#Status
   */
  readonly status: string;

  /**
   * @schema S3IntelligentTieringConfiguration#Tierings
   */
  readonly tierings: S3Tiering[];

}

/**
 * @schema S3InventoryConfiguration
 */
export interface S3InventoryConfiguration {
  /**
   * @schema S3InventoryConfiguration#Destination
   */
  readonly destination: S3InventoryDestination;

  /**
   * @schema S3InventoryConfiguration#IsEnabled
   */
  readonly isEnabled: boolean;

  /**
   * @schema S3InventoryConfiguration#Filter
   */
  readonly filter?: S3InventoryFilter;

  /**
   * @schema S3InventoryConfiguration#Id
   */
  readonly id: string;

  /**
   * @schema S3InventoryConfiguration#IncludedObjectVersions
   */
  readonly includedObjectVersions: string;

  /**
   * @schema S3InventoryConfiguration#OptionalFields
   */
  readonly optionalFields?: string[];

  /**
   * @schema S3InventoryConfiguration#Schedule
   */
  readonly schedule: S3InventorySchedule;

}

/**
 * @schema S3Rule
 */
export interface S3Rule {
  /**
   * @schema S3Rule#Expiration
   */
  readonly expiration?: S3LifecycleExpiration;

  /**
   * @schema S3Rule#ID
   */
  readonly id?: string;

  /**
   * @schema S3Rule#Prefix
   */
  readonly prefix: string;

  /**
   * @schema S3Rule#Status
   */
  readonly status: string;

  /**
   * @schema S3Rule#Transition
   */
  readonly transition?: S3Transition;

  /**
   * @schema S3Rule#NoncurrentVersionTransition
   */
  readonly noncurrentVersionTransition?: S3NoncurrentVersionTransition;

  /**
   * @schema S3Rule#NoncurrentVersionExpiration
   */
  readonly noncurrentVersionExpiration?: S3NoncurrentVersionExpiration;

  /**
   * @schema S3Rule#AbortIncompleteMultipartUpload
   */
  readonly abortIncompleteMultipartUpload?: S3AbortIncompleteMultipartUpload;

}

/**
 * @schema S3LifecycleRule
 */
export interface S3LifecycleRule {
  /**
   * @schema S3LifecycleRule#Expiration
   */
  readonly expiration?: S3LifecycleExpiration;

  /**
   * @schema S3LifecycleRule#ID
   */
  readonly id?: string;

  /**
   * @schema S3LifecycleRule#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3LifecycleRule#Filter
   */
  readonly filter?: S3LifecycleRuleFilter;

  /**
   * @schema S3LifecycleRule#Status
   */
  readonly status: string;

  /**
   * @schema S3LifecycleRule#Transitions
   */
  readonly transitions?: S3Transition[];

  /**
   * @schema S3LifecycleRule#NoncurrentVersionTransitions
   */
  readonly noncurrentVersionTransitions?: S3NoncurrentVersionTransition[];

  /**
   * @schema S3LifecycleRule#NoncurrentVersionExpiration
   */
  readonly noncurrentVersionExpiration?: S3NoncurrentVersionExpiration;

  /**
   * @schema S3LifecycleRule#AbortIncompleteMultipartUpload
   */
  readonly abortIncompleteMultipartUpload?: S3AbortIncompleteMultipartUpload;

}

/**
 * @schema S3LoggingEnabled
 */
export interface S3LoggingEnabled {
  /**
   * @schema S3LoggingEnabled#TargetBucket
   */
  readonly targetBucket: string;

  /**
   * @schema S3LoggingEnabled#TargetGrants
   */
  readonly targetGrants?: S3TargetGrant[];

  /**
   * @schema S3LoggingEnabled#TargetPrefix
   */
  readonly targetPrefix: string;

}

/**
 * @schema S3MetricsConfiguration
 */
export interface S3MetricsConfiguration {
  /**
   * @schema S3MetricsConfiguration#Id
   */
  readonly id: string;

  /**
   * @schema S3MetricsConfiguration#Filter
   */
  readonly filter?: S3MetricsFilter;

}

/**
 * @schema S3TopicConfigurationDeprecated
 */
export interface S3TopicConfigurationDeprecated {
  /**
   * @schema S3TopicConfigurationDeprecated#Id
   */
  readonly id?: string;

  /**
   * @schema S3TopicConfigurationDeprecated#Events
   */
  readonly events?: string[];

  /**
   * @schema S3TopicConfigurationDeprecated#Event
   */
  readonly event?: string;

  /**
   * @schema S3TopicConfigurationDeprecated#Topic
   */
  readonly topic?: string;

}

/**
 * @schema S3QueueConfigurationDeprecated
 */
export interface S3QueueConfigurationDeprecated {
  /**
   * @schema S3QueueConfigurationDeprecated#Id
   */
  readonly id?: string;

  /**
   * @schema S3QueueConfigurationDeprecated#Event
   */
  readonly event?: string;

  /**
   * @schema S3QueueConfigurationDeprecated#Events
   */
  readonly events?: string[];

  /**
   * @schema S3QueueConfigurationDeprecated#Queue
   */
  readonly queue?: string;

}

/**
 * @schema S3CloudFunctionConfiguration
 */
export interface S3CloudFunctionConfiguration {
  /**
   * @schema S3CloudFunctionConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema S3CloudFunctionConfiguration#Event
   */
  readonly event?: string;

  /**
   * @schema S3CloudFunctionConfiguration#Events
   */
  readonly events?: string[];

  /**
   * @schema S3CloudFunctionConfiguration#CloudFunction
   */
  readonly cloudFunction?: string;

  /**
   * @schema S3CloudFunctionConfiguration#InvocationRole
   */
  readonly invocationRole?: string;

}

/**
 * @schema S3TopicConfiguration
 */
export interface S3TopicConfiguration {
  /**
   * @schema S3TopicConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema S3TopicConfiguration#TopicArn
   */
  readonly topicArn: string;

  /**
   * @schema S3TopicConfiguration#Events
   */
  readonly events: string[];

  /**
   * @schema S3TopicConfiguration#Filter
   */
  readonly filter?: S3NotificationConfigurationFilter;

}

/**
 * @schema S3QueueConfiguration
 */
export interface S3QueueConfiguration {
  /**
   * @schema S3QueueConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema S3QueueConfiguration#QueueArn
   */
  readonly queueArn: string;

  /**
   * @schema S3QueueConfiguration#Events
   */
  readonly events: string[];

  /**
   * @schema S3QueueConfiguration#Filter
   */
  readonly filter?: S3NotificationConfigurationFilter;

}

/**
 * @schema S3LambdaFunctionConfiguration
 */
export interface S3LambdaFunctionConfiguration {
  /**
   * @schema S3LambdaFunctionConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema S3LambdaFunctionConfiguration#LambdaFunctionArn
   */
  readonly lambdaFunctionArn: string;

  /**
   * @schema S3LambdaFunctionConfiguration#Events
   */
  readonly events: string[];

  /**
   * @schema S3LambdaFunctionConfiguration#Filter
   */
  readonly filter?: S3NotificationConfigurationFilter;

}

/**
 * @schema S3OwnershipControls
 */
export interface S3OwnershipControls {
  /**
   * @schema S3OwnershipControls#Rules
   */
  readonly rules: S3OwnershipControlsRule[];

}

/**
 * @schema S3PolicyStatus
 */
export interface S3PolicyStatus {
  /**
   * @schema S3PolicyStatus#IsPublic
   */
  readonly isPublic?: boolean;

}

/**
 * @schema S3ReplicationConfiguration
 */
export interface S3ReplicationConfiguration {
  /**
   * @schema S3ReplicationConfiguration#Role
   */
  readonly role: string;

  /**
   * @schema S3ReplicationConfiguration#Rules
   */
  readonly rules: S3ReplicationRule[];

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
 * @schema S3RedirectAllRequestsTo
 */
export interface S3RedirectAllRequestsTo {
  /**
   * @schema S3RedirectAllRequestsTo#HostName
   */
  readonly hostName: string;

  /**
   * @schema S3RedirectAllRequestsTo#Protocol
   */
  readonly protocol?: string;

}

/**
 * @schema S3IndexDocument
 */
export interface S3IndexDocument {
  /**
   * @schema S3IndexDocument#Suffix
   */
  readonly suffix: string;

}

/**
 * @schema S3ErrorDocument
 */
export interface S3ErrorDocument {
  /**
   * @schema S3ErrorDocument#Key
   */
  readonly key: string;

}

/**
 * @schema S3RoutingRule
 */
export interface S3RoutingRule {
  /**
   * @schema S3RoutingRule#Condition
   */
  readonly condition?: S3Condition;

  /**
   * @schema S3RoutingRule#Redirect
   */
  readonly redirect: S3Redirect;

}

/**
 * @schema S3ObjectLockLegalHold
 */
export interface S3ObjectLockLegalHold {
  /**
   * @schema S3ObjectLockLegalHold#Status
   */
  readonly status?: string;

}

/**
 * @schema S3ObjectLockConfiguration
 */
export interface S3ObjectLockConfiguration {
  /**
   * @schema S3ObjectLockConfiguration#ObjectLockEnabled
   */
  readonly objectLockEnabled?: string;

  /**
   * @schema S3ObjectLockConfiguration#Rule
   */
  readonly rule?: S3ObjectLockRule;

}

/**
 * @schema S3ObjectLockRetention
 */
export interface S3ObjectLockRetention {
  /**
   * @schema S3ObjectLockRetention#Mode
   */
  readonly mode?: string;

  /**
   * @schema S3ObjectLockRetention#RetainUntilDate
   */
  readonly retainUntilDate?: string;

}

/**
 * @schema S3PublicAccessBlockConfiguration
 */
export interface S3PublicAccessBlockConfiguration {
  /**
   * @schema S3PublicAccessBlockConfiguration#BlockPublicAcls
   */
  readonly blockPublicAcls?: boolean;

  /**
   * @schema S3PublicAccessBlockConfiguration#IgnorePublicAcls
   */
  readonly ignorePublicAcls?: boolean;

  /**
   * @schema S3PublicAccessBlockConfiguration#BlockPublicPolicy
   */
  readonly blockPublicPolicy?: boolean;

  /**
   * @schema S3PublicAccessBlockConfiguration#RestrictPublicBuckets
   */
  readonly restrictPublicBuckets?: boolean;

}

/**
 * @schema S3Bucket
 */
export interface S3Bucket {
  /**
   * @schema S3Bucket#Name
   */
  readonly name?: string;

  /**
   * @schema S3Bucket#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema S3MultipartUpload
 */
export interface S3MultipartUpload {
  /**
   * @schema S3MultipartUpload#UploadId
   */
  readonly uploadId?: string;

  /**
   * @schema S3MultipartUpload#Key
   */
  readonly key?: string;

  /**
   * @schema S3MultipartUpload#Initiated
   */
  readonly initiated?: string;

  /**
   * @schema S3MultipartUpload#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema S3MultipartUpload#Owner
   */
  readonly owner?: S3Owner;

  /**
   * @schema S3MultipartUpload#Initiator
   */
  readonly initiator?: S3Initiator;

}

/**
 * @schema S3CommonPrefix
 */
export interface S3CommonPrefix {
  /**
   * @schema S3CommonPrefix#Prefix
   */
  readonly prefix?: string;

}

/**
 * @schema S3ObjectVersion
 */
export interface S3ObjectVersion {
  /**
   * @schema S3ObjectVersion#ETag
   */
  readonly eTag?: string;

  /**
   * @schema S3ObjectVersion#Size
   */
  readonly size?: number;

  /**
   * @schema S3ObjectVersion#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema S3ObjectVersion#Key
   */
  readonly key?: string;

  /**
   * @schema S3ObjectVersion#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3ObjectVersion#IsLatest
   */
  readonly isLatest?: boolean;

  /**
   * @schema S3ObjectVersion#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema S3ObjectVersion#Owner
   */
  readonly owner?: S3Owner;

}

/**
 * @schema S3DeleteMarkerEntry
 */
export interface S3DeleteMarkerEntry {
  /**
   * @schema S3DeleteMarkerEntry#Owner
   */
  readonly owner?: S3Owner;

  /**
   * @schema S3DeleteMarkerEntry#Key
   */
  readonly key?: string;

  /**
   * @schema S3DeleteMarkerEntry#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3DeleteMarkerEntry#IsLatest
   */
  readonly isLatest?: boolean;

  /**
   * @schema S3DeleteMarkerEntry#LastModified
   */
  readonly lastModified?: string;

}

/**
 * @schema S3Object
 */
export interface S3Object {
  /**
   * @schema S3Object#Key
   */
  readonly key?: string;

  /**
   * @schema S3Object#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema S3Object#ETag
   */
  readonly eTag?: string;

  /**
   * @schema S3Object#Size
   */
  readonly size?: number;

  /**
   * @schema S3Object#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema S3Object#Owner
   */
  readonly owner?: S3Owner;

}

/**
 * @schema S3Part
 */
export interface S3Part {
  /**
   * @schema S3Part#PartNumber
   */
  readonly partNumber?: number;

  /**
   * @schema S3Part#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema S3Part#ETag
   */
  readonly eTag?: string;

  /**
   * @schema S3Part#Size
   */
  readonly size?: number;

}

/**
 * @schema S3Initiator
 */
export interface S3Initiator {
  /**
   * @schema S3Initiator#ID
   */
  readonly id?: string;

  /**
   * @schema S3Initiator#DisplayName
   */
  readonly displayName?: string;

}

/**
 * @schema S3AccelerateConfiguration
 */
export interface S3AccelerateConfiguration {
  /**
   * @schema S3AccelerateConfiguration#Status
   */
  readonly status?: string;

}

/**
 * @schema S3AccessControlPolicy
 */
export interface S3AccessControlPolicy {
  /**
   * @schema S3AccessControlPolicy#Grants
   */
  readonly grants?: S3Grant[];

  /**
   * @schema S3AccessControlPolicy#Owner
   */
  readonly owner?: S3Owner;

}

/**
 * @schema S3CorsConfiguration
 */
export interface S3CorsConfiguration {
  /**
   * @schema S3CorsConfiguration#CORSRules
   */
  readonly corsRules: S3CorsRule[];

}

/**
 * @schema S3LifecycleConfiguration
 */
export interface S3LifecycleConfiguration {
  /**
   * @schema S3LifecycleConfiguration#Rules
   */
  readonly rules: S3Rule[];

}

/**
 * @schema S3BucketLifecycleConfiguration
 */
export interface S3BucketLifecycleConfiguration {
  /**
   * @schema S3BucketLifecycleConfiguration#Rules
   */
  readonly rules: S3LifecycleRule[];

}

/**
 * @schema S3BucketLoggingStatus
 */
export interface S3BucketLoggingStatus {
  /**
   * @schema S3BucketLoggingStatus#LoggingEnabled
   */
  readonly loggingEnabled?: S3LoggingEnabled;

}

/**
 * @schema S3RequestPaymentConfiguration
 */
export interface S3RequestPaymentConfiguration {
  /**
   * @schema S3RequestPaymentConfiguration#Payer
   */
  readonly payer: string;

}

/**
 * @schema S3Tagging
 */
export interface S3Tagging {
  /**
   * @schema S3Tagging#TagSet
   */
  readonly tagSet: S3Tag[];

}

/**
 * @schema S3VersioningConfiguration
 */
export interface S3VersioningConfiguration {
  /**
   * @schema S3VersioningConfiguration#MFADelete
   */
  readonly mfaDelete?: string;

  /**
   * @schema S3VersioningConfiguration#Status
   */
  readonly status?: string;

}

/**
 * @schema S3WebsiteConfiguration
 */
export interface S3WebsiteConfiguration {
  /**
   * @schema S3WebsiteConfiguration#ErrorDocument
   */
  readonly errorDocument?: S3ErrorDocument;

  /**
   * @schema S3WebsiteConfiguration#IndexDocument
   */
  readonly indexDocument?: S3IndexDocument;

  /**
   * @schema S3WebsiteConfiguration#RedirectAllRequestsTo
   */
  readonly redirectAllRequestsTo?: S3RedirectAllRequestsTo;

  /**
   * @schema S3WebsiteConfiguration#RoutingRules
   */
  readonly routingRules?: S3RoutingRule[];

}

/**
 * @schema S3RestoreRequest
 */
export interface S3RestoreRequest {
  /**
   * @schema S3RestoreRequest#Days
   */
  readonly days?: number;

  /**
   * @schema S3RestoreRequest#GlacierJobParameters
   */
  readonly glacierJobParameters?: S3GlacierJobParameters;

  /**
   * @schema S3RestoreRequest#Type
   */
  readonly type?: string;

  /**
   * @schema S3RestoreRequest#Tier
   */
  readonly tier?: string;

  /**
   * @schema S3RestoreRequest#Description
   */
  readonly description?: string;

  /**
   * @schema S3RestoreRequest#SelectParameters
   */
  readonly selectParameters?: S3SelectParameters;

  /**
   * @schema S3RestoreRequest#OutputLocation
   */
  readonly outputLocation?: S3OutputLocation;

}

/**
 * @schema S3RequestProgress
 */
export interface S3RequestProgress {
  /**
   * @schema S3RequestProgress#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema S3InputSerialization
 */
export interface S3InputSerialization {
  /**
   * @schema S3InputSerialization#CSV
   */
  readonly csv?: S3CsvInput;

  /**
   * @schema S3InputSerialization#CompressionType
   */
  readonly compressionType?: string;

  /**
   * @schema S3InputSerialization#JSON
   */
  readonly json?: S3JsonInput;

  /**
   * @schema S3InputSerialization#Parquet
   */
  readonly parquet?: S3ParquetInput;

}

/**
 * @schema S3OutputSerialization
 */
export interface S3OutputSerialization {
  /**
   * @schema S3OutputSerialization#CSV
   */
  readonly csv?: S3CsvOutput;

  /**
   * @schema S3OutputSerialization#JSON
   */
  readonly json?: S3JsonOutput;

}

/**
 * @schema S3ScanRange
 */
export interface S3ScanRange {
  /**
   * @schema S3ScanRange#Start
   */
  readonly start?: number;

  /**
   * @schema S3ScanRange#End
   */
  readonly end?: number;

}

/**
 * @schema S3SelectObjectContentEventStream
 */
export interface S3SelectObjectContentEventStream {
  /**
   * @schema S3SelectObjectContentEventStream#Records
   */
  readonly records?: S3RecordsEvent;

  /**
   * @schema S3SelectObjectContentEventStream#Stats
   */
  readonly stats?: S3StatsEvent;

  /**
   * @schema S3SelectObjectContentEventStream#Progress
   */
  readonly progress?: S3ProgressEvent;

  /**
   * @schema S3SelectObjectContentEventStream#Cont
   */
  readonly cont?: S3ContinuationEvent;

  /**
   * @schema S3SelectObjectContentEventStream#End
   */
  readonly end?: S3EndEvent;

}

/**
 * @schema S3CopyPartResult
 */
export interface S3CopyPartResult {
  /**
   * @schema S3CopyPartResult#ETag
   */
  readonly eTag?: string;

  /**
   * @schema S3CopyPartResult#LastModified
   */
  readonly lastModified?: string;

}

/**
 * @schema S3CompletedPart
 */
export interface S3CompletedPart {
  /**
   * @schema S3CompletedPart#ETag
   */
  readonly eTag?: string;

  /**
   * @schema S3CompletedPart#PartNumber
   */
  readonly partNumber?: number;

}

/**
 * @schema S3ObjectIdentifier
 */
export interface S3ObjectIdentifier {
  /**
   * @schema S3ObjectIdentifier#Key
   */
  readonly key: string;

  /**
   * @schema S3ObjectIdentifier#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema S3Grantee
 */
export interface S3Grantee {
  /**
   * @schema S3Grantee#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema S3Grantee#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema S3Grantee#ID
   */
  readonly id?: string;

  /**
   * @schema S3Grantee#Type
   */
  readonly type: string;

  /**
   * @schema S3Grantee#URI
   */
  readonly uri?: string;

}

/**
 * @schema S3AnalyticsFilter
 */
export interface S3AnalyticsFilter {
  /**
   * @schema S3AnalyticsFilter#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3AnalyticsFilter#Tag
   */
  readonly tag?: S3Tag;

  /**
   * @schema S3AnalyticsFilter#And
   */
  readonly and?: S3AnalyticsAndOperator;

}

/**
 * @schema S3StorageClassAnalysis
 */
export interface S3StorageClassAnalysis {
  /**
   * @schema S3StorageClassAnalysis#DataExport
   */
  readonly dataExport?: S3StorageClassAnalysisDataExport;

}

/**
 * @schema S3ServerSideEncryptionRule
 */
export interface S3ServerSideEncryptionRule {
  /**
   * @schema S3ServerSideEncryptionRule#ApplyServerSideEncryptionByDefault
   */
  readonly applyServerSideEncryptionByDefault?: S3ServerSideEncryptionByDefault;

}

/**
 * @schema S3IntelligentTieringFilter
 */
export interface S3IntelligentTieringFilter {
  /**
   * @schema S3IntelligentTieringFilter#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3IntelligentTieringFilter#Tag
   */
  readonly tag?: S3Tag;

  /**
   * @schema S3IntelligentTieringFilter#And
   */
  readonly and?: S3IntelligentTieringAndOperator;

}

/**
 * @schema S3Tiering
 */
export interface S3Tiering {
  /**
   * @schema S3Tiering#Days
   */
  readonly days: number;

  /**
   * @schema S3Tiering#AccessTier
   */
  readonly accessTier: string;

}

/**
 * @schema S3InventoryDestination
 */
export interface S3InventoryDestination {
  /**
   * @schema S3InventoryDestination#S3BucketDestination
   */
  readonly s3BucketDestination: S3InventoryS3BucketDestination;

}

/**
 * @schema S3InventoryFilter
 */
export interface S3InventoryFilter {
  /**
   * @schema S3InventoryFilter#Prefix
   */
  readonly prefix: string;

}

/**
 * @schema S3InventorySchedule
 */
export interface S3InventorySchedule {
  /**
   * @schema S3InventorySchedule#Frequency
   */
  readonly frequency: string;

}

/**
 * @schema S3LifecycleExpiration
 */
export interface S3LifecycleExpiration {
  /**
   * @schema S3LifecycleExpiration#Date
   */
  readonly date?: string;

  /**
   * @schema S3LifecycleExpiration#Days
   */
  readonly days?: number;

  /**
   * @schema S3LifecycleExpiration#ExpiredObjectDeleteMarker
   */
  readonly expiredObjectDeleteMarker?: boolean;

}

/**
 * @schema S3Transition
 */
export interface S3Transition {
  /**
   * @schema S3Transition#Date
   */
  readonly date?: string;

  /**
   * @schema S3Transition#Days
   */
  readonly days?: number;

  /**
   * @schema S3Transition#StorageClass
   */
  readonly storageClass?: string;

}

/**
 * @schema S3NoncurrentVersionTransition
 */
export interface S3NoncurrentVersionTransition {
  /**
   * @schema S3NoncurrentVersionTransition#NoncurrentDays
   */
  readonly noncurrentDays?: number;

  /**
   * @schema S3NoncurrentVersionTransition#StorageClass
   */
  readonly storageClass?: string;

}

/**
 * @schema S3NoncurrentVersionExpiration
 */
export interface S3NoncurrentVersionExpiration {
  /**
   * @schema S3NoncurrentVersionExpiration#NoncurrentDays
   */
  readonly noncurrentDays?: number;

}

/**
 * @schema S3AbortIncompleteMultipartUpload
 */
export interface S3AbortIncompleteMultipartUpload {
  /**
   * @schema S3AbortIncompleteMultipartUpload#DaysAfterInitiation
   */
  readonly daysAfterInitiation?: number;

}

/**
 * @schema S3LifecycleRuleFilter
 */
export interface S3LifecycleRuleFilter {
  /**
   * @schema S3LifecycleRuleFilter#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3LifecycleRuleFilter#Tag
   */
  readonly tag?: S3Tag;

  /**
   * @schema S3LifecycleRuleFilter#And
   */
  readonly and?: S3LifecycleRuleAndOperator;

}

/**
 * @schema S3TargetGrant
 */
export interface S3TargetGrant {
  /**
   * @schema S3TargetGrant#Grantee
   */
  readonly grantee?: S3Grantee;

  /**
   * @schema S3TargetGrant#Permission
   */
  readonly permission?: string;

}

/**
 * @schema S3MetricsFilter
 */
export interface S3MetricsFilter {
  /**
   * @schema S3MetricsFilter#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3MetricsFilter#Tag
   */
  readonly tag?: S3Tag;

  /**
   * @schema S3MetricsFilter#And
   */
  readonly and?: S3MetricsAndOperator;

}

/**
 * @schema S3NotificationConfigurationFilter
 */
export interface S3NotificationConfigurationFilter {
  /**
   * @schema S3NotificationConfigurationFilter#Key
   */
  readonly key?: S3S3KeyFilter;

}

/**
 * @schema S3OwnershipControlsRule
 */
export interface S3OwnershipControlsRule {
  /**
   * @schema S3OwnershipControlsRule#ObjectOwnership
   */
  readonly objectOwnership: string;

}

/**
 * @schema S3ReplicationRule
 */
export interface S3ReplicationRule {
  /**
   * @schema S3ReplicationRule#ID
   */
  readonly id?: string;

  /**
   * @schema S3ReplicationRule#Priority
   */
  readonly priority?: number;

  /**
   * @schema S3ReplicationRule#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ReplicationRule#Filter
   */
  readonly filter?: S3ReplicationRuleFilter;

  /**
   * @schema S3ReplicationRule#Status
   */
  readonly status: string;

  /**
   * @schema S3ReplicationRule#SourceSelectionCriteria
   */
  readonly sourceSelectionCriteria?: S3SourceSelectionCriteria;

  /**
   * @schema S3ReplicationRule#ExistingObjectReplication
   */
  readonly existingObjectReplication?: S3ExistingObjectReplication;

  /**
   * @schema S3ReplicationRule#Destination
   */
  readonly destination: S3Destination;

  /**
   * @schema S3ReplicationRule#DeleteMarkerReplication
   */
  readonly deleteMarkerReplication?: S3DeleteMarkerReplication;

}

/**
 * @schema S3Condition
 */
export interface S3Condition {
  /**
   * @schema S3Condition#HttpErrorCodeReturnedEquals
   */
  readonly httpErrorCodeReturnedEquals?: string;

  /**
   * @schema S3Condition#KeyPrefixEquals
   */
  readonly keyPrefixEquals?: string;

}

/**
 * @schema S3Redirect
 */
export interface S3Redirect {
  /**
   * @schema S3Redirect#HostName
   */
  readonly hostName?: string;

  /**
   * @schema S3Redirect#HttpRedirectCode
   */
  readonly httpRedirectCode?: string;

  /**
   * @schema S3Redirect#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema S3Redirect#ReplaceKeyPrefixWith
   */
  readonly replaceKeyPrefixWith?: string;

  /**
   * @schema S3Redirect#ReplaceKeyWith
   */
  readonly replaceKeyWith?: string;

}

/**
 * @schema S3ObjectLockRule
 */
export interface S3ObjectLockRule {
  /**
   * @schema S3ObjectLockRule#DefaultRetention
   */
  readonly defaultRetention?: S3DefaultRetention;

}

/**
 * @schema S3GlacierJobParameters
 */
export interface S3GlacierJobParameters {
  /**
   * @schema S3GlacierJobParameters#Tier
   */
  readonly tier: string;

}

/**
 * @schema S3SelectParameters
 */
export interface S3SelectParameters {
  /**
   * @schema S3SelectParameters#InputSerialization
   */
  readonly inputSerialization: S3InputSerialization;

  /**
   * @schema S3SelectParameters#ExpressionType
   */
  readonly expressionType: string;

  /**
   * @schema S3SelectParameters#Expression
   */
  readonly expression: string;

  /**
   * @schema S3SelectParameters#OutputSerialization
   */
  readonly outputSerialization: S3OutputSerialization;

}

/**
 * @schema S3OutputLocation
 */
export interface S3OutputLocation {
  /**
   * @schema S3OutputLocation#S3
   */
  readonly s3?: S3S3Location;

}

/**
 * @schema S3CsvInput
 */
export interface S3CsvInput {
  /**
   * @schema S3CsvInput#FileHeaderInfo
   */
  readonly fileHeaderInfo?: string;

  /**
   * @schema S3CsvInput#Comments
   */
  readonly comments?: string;

  /**
   * @schema S3CsvInput#QuoteEscapeCharacter
   */
  readonly quoteEscapeCharacter?: string;

  /**
   * @schema S3CsvInput#RecordDelimiter
   */
  readonly recordDelimiter?: string;

  /**
   * @schema S3CsvInput#FieldDelimiter
   */
  readonly fieldDelimiter?: string;

  /**
   * @schema S3CsvInput#QuoteCharacter
   */
  readonly quoteCharacter?: string;

  /**
   * @schema S3CsvInput#AllowQuotedRecordDelimiter
   */
  readonly allowQuotedRecordDelimiter?: boolean;

}

/**
 * @schema S3JsonInput
 */
export interface S3JsonInput {
  /**
   * @schema S3JsonInput#Type
   */
  readonly type?: string;

}

/**
 * @schema S3ParquetInput
 */
export interface S3ParquetInput {
}

/**
 * @schema S3CsvOutput
 */
export interface S3CsvOutput {
  /**
   * @schema S3CsvOutput#QuoteFields
   */
  readonly quoteFields?: string;

  /**
   * @schema S3CsvOutput#QuoteEscapeCharacter
   */
  readonly quoteEscapeCharacter?: string;

  /**
   * @schema S3CsvOutput#RecordDelimiter
   */
  readonly recordDelimiter?: string;

  /**
   * @schema S3CsvOutput#FieldDelimiter
   */
  readonly fieldDelimiter?: string;

  /**
   * @schema S3CsvOutput#QuoteCharacter
   */
  readonly quoteCharacter?: string;

}

/**
 * @schema S3JsonOutput
 */
export interface S3JsonOutput {
  /**
   * @schema S3JsonOutput#RecordDelimiter
   */
  readonly recordDelimiter?: string;

}

/**
 * @schema S3RecordsEvent
 */
export interface S3RecordsEvent {
  /**
   * @schema S3RecordsEvent#Payload
   */
  readonly payload?: any;

}

/**
 * @schema S3StatsEvent
 */
export interface S3StatsEvent {
  /**
   * @schema S3StatsEvent#Details
   */
  readonly details?: S3Stats;

}

/**
 * @schema S3ProgressEvent
 */
export interface S3ProgressEvent {
  /**
   * @schema S3ProgressEvent#Details
   */
  readonly details?: S3Progress;

}

/**
 * @schema S3ContinuationEvent
 */
export interface S3ContinuationEvent {
}

/**
 * @schema S3EndEvent
 */
export interface S3EndEvent {
}

/**
 * @schema S3AnalyticsAndOperator
 */
export interface S3AnalyticsAndOperator {
  /**
   * @schema S3AnalyticsAndOperator#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3AnalyticsAndOperator#Tags
   */
  readonly tags?: S3Tag[];

}

/**
 * @schema S3StorageClassAnalysisDataExport
 */
export interface S3StorageClassAnalysisDataExport {
  /**
   * @schema S3StorageClassAnalysisDataExport#OutputSchemaVersion
   */
  readonly outputSchemaVersion: string;

  /**
   * @schema S3StorageClassAnalysisDataExport#Destination
   */
  readonly destination: S3AnalyticsExportDestination;

}

/**
 * @schema S3ServerSideEncryptionByDefault
 */
export interface S3ServerSideEncryptionByDefault {
  /**
   * @schema S3ServerSideEncryptionByDefault#SSEAlgorithm
   */
  readonly sseAlgorithm: string;

  /**
   * @schema S3ServerSideEncryptionByDefault#KMSMasterKeyID
   */
  readonly kmsMasterKeyId?: string;

}

/**
 * @schema S3IntelligentTieringAndOperator
 */
export interface S3IntelligentTieringAndOperator {
  /**
   * @schema S3IntelligentTieringAndOperator#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3IntelligentTieringAndOperator#Tags
   */
  readonly tags?: S3Tag[];

}

/**
 * @schema S3InventoryS3BucketDestination
 */
export interface S3InventoryS3BucketDestination {
  /**
   * @schema S3InventoryS3BucketDestination#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema S3InventoryS3BucketDestination#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3InventoryS3BucketDestination#Format
   */
  readonly format: string;

  /**
   * @schema S3InventoryS3BucketDestination#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3InventoryS3BucketDestination#Encryption
   */
  readonly encryption?: S3InventoryEncryption;

}

/**
 * @schema S3LifecycleRuleAndOperator
 */
export interface S3LifecycleRuleAndOperator {
  /**
   * @schema S3LifecycleRuleAndOperator#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3LifecycleRuleAndOperator#Tags
   */
  readonly tags?: S3Tag[];

}

/**
 * @schema S3MetricsAndOperator
 */
export interface S3MetricsAndOperator {
  /**
   * @schema S3MetricsAndOperator#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3MetricsAndOperator#Tags
   */
  readonly tags?: S3Tag[];

}

/**
 * @schema S3S3KeyFilter
 */
export interface S3S3KeyFilter {
  /**
   * @schema S3S3KeyFilter#FilterRules
   */
  readonly filterRules?: S3FilterRule[];

}

/**
 * @schema S3ReplicationRuleFilter
 */
export interface S3ReplicationRuleFilter {
  /**
   * @schema S3ReplicationRuleFilter#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ReplicationRuleFilter#Tag
   */
  readonly tag?: S3Tag;

  /**
   * @schema S3ReplicationRuleFilter#And
   */
  readonly and?: S3ReplicationRuleAndOperator;

}

/**
 * @schema S3SourceSelectionCriteria
 */
export interface S3SourceSelectionCriteria {
  /**
   * @schema S3SourceSelectionCriteria#SseKmsEncryptedObjects
   */
  readonly sseKmsEncryptedObjects?: S3SseKmsEncryptedObjects;

}

/**
 * @schema S3ExistingObjectReplication
 */
export interface S3ExistingObjectReplication {
  /**
   * @schema S3ExistingObjectReplication#Status
   */
  readonly status: string;

}

/**
 * @schema S3Destination
 */
export interface S3Destination {
  /**
   * @schema S3Destination#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3Destination#Account
   */
  readonly account?: string;

  /**
   * @schema S3Destination#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema S3Destination#AccessControlTranslation
   */
  readonly accessControlTranslation?: S3AccessControlTranslation;

  /**
   * @schema S3Destination#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: S3EncryptionConfiguration;

  /**
   * @schema S3Destination#ReplicationTime
   */
  readonly replicationTime?: S3ReplicationTime;

  /**
   * @schema S3Destination#Metrics
   */
  readonly metrics?: S3Metrics;

}

/**
 * @schema S3DeleteMarkerReplication
 */
export interface S3DeleteMarkerReplication {
  /**
   * @schema S3DeleteMarkerReplication#Status
   */
  readonly status?: string;

}

/**
 * @schema S3DefaultRetention
 */
export interface S3DefaultRetention {
  /**
   * @schema S3DefaultRetention#Mode
   */
  readonly mode?: string;

  /**
   * @schema S3DefaultRetention#Days
   */
  readonly days?: number;

  /**
   * @schema S3DefaultRetention#Years
   */
  readonly years?: number;

}

/**
 * @schema S3S3Location
 */
export interface S3S3Location {
  /**
   * @schema S3S3Location#BucketName
   */
  readonly bucketName: string;

  /**
   * @schema S3S3Location#Prefix
   */
  readonly prefix: string;

  /**
   * @schema S3S3Location#Encryption
   */
  readonly encryption?: S3Encryption;

  /**
   * @schema S3S3Location#CannedACL
   */
  readonly cannedAcl?: string;

  /**
   * @schema S3S3Location#AccessControlList
   */
  readonly accessControlList?: S3Grant[];

  /**
   * @schema S3S3Location#Tagging
   */
  readonly tagging?: S3Tagging;

  /**
   * @schema S3S3Location#UserMetadata
   */
  readonly userMetadata?: S3MetadataEntry[];

  /**
   * @schema S3S3Location#StorageClass
   */
  readonly storageClass?: string;

}

/**
 * @schema S3Stats
 */
export interface S3Stats {
  /**
   * @schema S3Stats#BytesScanned
   */
  readonly bytesScanned?: number;

  /**
   * @schema S3Stats#BytesProcessed
   */
  readonly bytesProcessed?: number;

  /**
   * @schema S3Stats#BytesReturned
   */
  readonly bytesReturned?: number;

}

/**
 * @schema S3Progress
 */
export interface S3Progress {
  /**
   * @schema S3Progress#BytesScanned
   */
  readonly bytesScanned?: number;

  /**
   * @schema S3Progress#BytesProcessed
   */
  readonly bytesProcessed?: number;

  /**
   * @schema S3Progress#BytesReturned
   */
  readonly bytesReturned?: number;

}

/**
 * @schema S3AnalyticsExportDestination
 */
export interface S3AnalyticsExportDestination {
  /**
   * @schema S3AnalyticsExportDestination#S3BucketDestination
   */
  readonly s3BucketDestination: S3AnalyticsS3BucketDestination;

}

/**
 * @schema S3InventoryEncryption
 */
export interface S3InventoryEncryption {
  /**
   * @schema S3InventoryEncryption#SSES3
   */
  readonly sses3?: S3Sses3;

  /**
   * @schema S3InventoryEncryption#SSEKMS
   */
  readonly ssekms?: S3Ssekms;

}

/**
 * @schema S3FilterRule
 */
export interface S3FilterRule {
  /**
   * @schema S3FilterRule#Name
   */
  readonly name?: string;

  /**
   * @schema S3FilterRule#Value
   */
  readonly value?: string;

}

/**
 * @schema S3ReplicationRuleAndOperator
 */
export interface S3ReplicationRuleAndOperator {
  /**
   * @schema S3ReplicationRuleAndOperator#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3ReplicationRuleAndOperator#Tags
   */
  readonly tags?: S3Tag[];

}

/**
 * @schema S3SseKmsEncryptedObjects
 */
export interface S3SseKmsEncryptedObjects {
  /**
   * @schema S3SseKmsEncryptedObjects#Status
   */
  readonly status: string;

}

/**
 * @schema S3AccessControlTranslation
 */
export interface S3AccessControlTranslation {
  /**
   * @schema S3AccessControlTranslation#Owner
   */
  readonly owner: string;

}

/**
 * @schema S3EncryptionConfiguration
 */
export interface S3EncryptionConfiguration {
  /**
   * @schema S3EncryptionConfiguration#ReplicaKmsKeyID
   */
  readonly replicaKmsKeyId?: string;

}

/**
 * @schema S3ReplicationTime
 */
export interface S3ReplicationTime {
  /**
   * @schema S3ReplicationTime#Status
   */
  readonly status: string;

  /**
   * @schema S3ReplicationTime#Time
   */
  readonly time: S3ReplicationTimeValue;

}

/**
 * @schema S3Metrics
 */
export interface S3Metrics {
  /**
   * @schema S3Metrics#Status
   */
  readonly status: string;

  /**
   * @schema S3Metrics#EventThreshold
   */
  readonly eventThreshold?: S3ReplicationTimeValue;

}

/**
 * @schema S3Encryption
 */
export interface S3Encryption {
  /**
   * @schema S3Encryption#EncryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema S3Encryption#KMSKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema S3Encryption#KMSContext
   */
  readonly kmsContext?: string;

}

/**
 * @schema S3MetadataEntry
 */
export interface S3MetadataEntry {
  /**
   * @schema S3MetadataEntry#Name
   */
  readonly name?: string;

  /**
   * @schema S3MetadataEntry#Value
   */
  readonly value?: string;

}

/**
 * @schema S3AnalyticsS3BucketDestination
 */
export interface S3AnalyticsS3BucketDestination {
  /**
   * @schema S3AnalyticsS3BucketDestination#Format
   */
  readonly format: string;

  /**
   * @schema S3AnalyticsS3BucketDestination#BucketAccountId
   */
  readonly bucketAccountId?: string;

  /**
   * @schema S3AnalyticsS3BucketDestination#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3AnalyticsS3BucketDestination#Prefix
   */
  readonly prefix?: string;

}

/**
 * @schema S3Sses3
 */
export interface S3Sses3 {
}

/**
 * @schema S3Ssekms
 */
export interface S3Ssekms {
  /**
   * @schema S3Ssekms#KeyId
   */
  readonly keyId: string;

}

/**
 * @schema S3ReplicationTimeValue
 */
export interface S3ReplicationTimeValue {
  /**
   * @schema S3ReplicationTimeValue#Minutes
   */
  readonly minutes?: number;

}
