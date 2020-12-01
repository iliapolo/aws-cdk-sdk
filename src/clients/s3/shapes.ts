/**
 * @schema AbortMultipartUploadRequest
 */
export interface AbortMultipartUploadRequest {
  /**
   * @schema AbortMultipartUploadRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema AbortMultipartUploadRequest#Key
   */
  readonly key: string;

  /**
   * @schema AbortMultipartUploadRequest#UploadId
   */
  readonly uploadId: string;

  /**
   * @schema AbortMultipartUploadRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema AbortMultipartUploadRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema AbortMultipartUploadOutput
 */
export interface AbortMultipartUploadOutput {
  /**
   * @schema AbortMultipartUploadOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema CompleteMultipartUploadRequest
 */
export interface CompleteMultipartUploadRequest {
  /**
   * @schema CompleteMultipartUploadRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema CompleteMultipartUploadRequest#Key
   */
  readonly key: string;

  /**
   * @schema CompleteMultipartUploadRequest#MultipartUpload
   */
  readonly multipartUpload?: CompletedMultipartUpload;

  /**
   * @schema CompleteMultipartUploadRequest#UploadId
   */
  readonly uploadId: string;

  /**
   * @schema CompleteMultipartUploadRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema CompleteMultipartUploadRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema CompleteMultipartUploadOutput
 */
export interface CompleteMultipartUploadOutput {
  /**
   * @schema CompleteMultipartUploadOutput#Location
   */
  readonly location?: string;

  /**
   * @schema CompleteMultipartUploadOutput#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema CompleteMultipartUploadOutput#Key
   */
  readonly key?: string;

  /**
   * @schema CompleteMultipartUploadOutput#Expiration
   */
  readonly expiration?: string;

  /**
   * @schema CompleteMultipartUploadOutput#ETag
   */
  readonly eTag?: string;

  /**
   * @schema CompleteMultipartUploadOutput#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema CompleteMultipartUploadOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema CompleteMultipartUploadOutput#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema CompleteMultipartUploadOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema CopyObjectRequest
 */
export interface CopyObjectRequest {
  /**
   * @schema CopyObjectRequest#ACL
   */
  readonly acl?: string;

  /**
   * @schema CopyObjectRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema CopyObjectRequest#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema CopyObjectRequest#ContentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema CopyObjectRequest#ContentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema CopyObjectRequest#ContentLanguage
   */
  readonly contentLanguage?: string;

  /**
   * @schema CopyObjectRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema CopyObjectRequest#CopySource
   */
  readonly copySource: string;

  /**
   * @schema CopyObjectRequest#CopySourceIfMatch
   */
  readonly copySourceIfMatch?: string;

  /**
   * @schema CopyObjectRequest#CopySourceIfModifiedSince
   */
  readonly copySourceIfModifiedSince?: string;

  /**
   * @schema CopyObjectRequest#CopySourceIfNoneMatch
   */
  readonly copySourceIfNoneMatch?: string;

  /**
   * @schema CopyObjectRequest#CopySourceIfUnmodifiedSince
   */
  readonly copySourceIfUnmodifiedSince?: string;

  /**
   * @schema CopyObjectRequest#Expires
   */
  readonly expires?: string;

  /**
   * @schema CopyObjectRequest#GrantFullControl
   */
  readonly grantFullControl?: string;

  /**
   * @schema CopyObjectRequest#GrantRead
   */
  readonly grantRead?: string;

  /**
   * @schema CopyObjectRequest#GrantReadACP
   */
  readonly grantReadAcp?: string;

  /**
   * @schema CopyObjectRequest#GrantWriteACP
   */
  readonly grantWriteAcp?: string;

  /**
   * @schema CopyObjectRequest#Key
   */
  readonly key: string;

  /**
   * @schema CopyObjectRequest#Metadata
   */
  readonly metadata?: { [key: string]: string };

  /**
   * @schema CopyObjectRequest#MetadataDirective
   */
  readonly metadataDirective?: string;

  /**
   * @schema CopyObjectRequest#TaggingDirective
   */
  readonly taggingDirective?: string;

  /**
   * @schema CopyObjectRequest#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema CopyObjectRequest#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema CopyObjectRequest#WebsiteRedirectLocation
   */
  readonly websiteRedirectLocation?: string;

  /**
   * @schema CopyObjectRequest#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema CopyObjectRequest#SSECustomerKey
   */
  readonly sseCustomerKey?: any;

  /**
   * @schema CopyObjectRequest#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema CopyObjectRequest#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema CopyObjectRequest#SSEKMSEncryptionContext
   */
  readonly ssekmsEncryptionContext?: string;

  /**
   * @schema CopyObjectRequest#CopySourceSSECustomerAlgorithm
   */
  readonly copySourceSseCustomerAlgorithm?: string;

  /**
   * @schema CopyObjectRequest#CopySourceSSECustomerKey
   */
  readonly copySourceSseCustomerKey?: any;

  /**
   * @schema CopyObjectRequest#CopySourceSSECustomerKeyMD5
   */
  readonly copySourceSseCustomerKeyMd5?: string;

  /**
   * @schema CopyObjectRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema CopyObjectRequest#Tagging
   */
  readonly tagging?: string;

  /**
   * @schema CopyObjectRequest#ObjectLockMode
   */
  readonly objectLockMode?: string;

  /**
   * @schema CopyObjectRequest#ObjectLockRetainUntilDate
   */
  readonly objectLockRetainUntilDate?: string;

  /**
   * @schema CopyObjectRequest#ObjectLockLegalHoldStatus
   */
  readonly objectLockLegalHoldStatus?: string;

  /**
   * @schema CopyObjectRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

  /**
   * @schema CopyObjectRequest#ExpectedSourceBucketOwner
   */
  readonly expectedSourceBucketOwner?: string;

}

/**
 * @schema CopyObjectOutput
 */
export interface CopyObjectOutput {
  /**
   * @schema CopyObjectOutput#CopyObjectResult
   */
  readonly copyObjectResult?: CopyObjectResult;

  /**
   * @schema CopyObjectOutput#Expiration
   */
  readonly expiration?: string;

  /**
   * @schema CopyObjectOutput#CopySourceVersionId
   */
  readonly copySourceVersionId?: string;

  /**
   * @schema CopyObjectOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema CopyObjectOutput#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema CopyObjectOutput#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema CopyObjectOutput#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema CopyObjectOutput#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema CopyObjectOutput#SSEKMSEncryptionContext
   */
  readonly ssekmsEncryptionContext?: string;

  /**
   * @schema CopyObjectOutput#RequestCharged
   */
  readonly requestCharged?: string;

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

}

/**
 * @schema CreateBucketOutput
 */
export interface CreateBucketOutput {
  /**
   * @schema CreateBucketOutput#Location
   */
  readonly location?: string;

}

/**
 * @schema CreateMultipartUploadRequest
 */
export interface CreateMultipartUploadRequest {
  /**
   * @schema CreateMultipartUploadRequest#ACL
   */
  readonly acl?: string;

  /**
   * @schema CreateMultipartUploadRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema CreateMultipartUploadRequest#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema CreateMultipartUploadRequest#ContentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema CreateMultipartUploadRequest#ContentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema CreateMultipartUploadRequest#ContentLanguage
   */
  readonly contentLanguage?: string;

  /**
   * @schema CreateMultipartUploadRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema CreateMultipartUploadRequest#Expires
   */
  readonly expires?: string;

  /**
   * @schema CreateMultipartUploadRequest#GrantFullControl
   */
  readonly grantFullControl?: string;

  /**
   * @schema CreateMultipartUploadRequest#GrantRead
   */
  readonly grantRead?: string;

  /**
   * @schema CreateMultipartUploadRequest#GrantReadACP
   */
  readonly grantReadAcp?: string;

  /**
   * @schema CreateMultipartUploadRequest#GrantWriteACP
   */
  readonly grantWriteAcp?: string;

  /**
   * @schema CreateMultipartUploadRequest#Key
   */
  readonly key: string;

  /**
   * @schema CreateMultipartUploadRequest#Metadata
   */
  readonly metadata?: { [key: string]: string };

  /**
   * @schema CreateMultipartUploadRequest#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema CreateMultipartUploadRequest#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema CreateMultipartUploadRequest#WebsiteRedirectLocation
   */
  readonly websiteRedirectLocation?: string;

  /**
   * @schema CreateMultipartUploadRequest#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema CreateMultipartUploadRequest#SSECustomerKey
   */
  readonly sseCustomerKey?: any;

  /**
   * @schema CreateMultipartUploadRequest#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema CreateMultipartUploadRequest#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema CreateMultipartUploadRequest#SSEKMSEncryptionContext
   */
  readonly ssekmsEncryptionContext?: string;

  /**
   * @schema CreateMultipartUploadRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema CreateMultipartUploadRequest#Tagging
   */
  readonly tagging?: string;

  /**
   * @schema CreateMultipartUploadRequest#ObjectLockMode
   */
  readonly objectLockMode?: string;

  /**
   * @schema CreateMultipartUploadRequest#ObjectLockRetainUntilDate
   */
  readonly objectLockRetainUntilDate?: string;

  /**
   * @schema CreateMultipartUploadRequest#ObjectLockLegalHoldStatus
   */
  readonly objectLockLegalHoldStatus?: string;

  /**
   * @schema CreateMultipartUploadRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema CreateMultipartUploadOutput
 */
export interface CreateMultipartUploadOutput {
  /**
   * @schema CreateMultipartUploadOutput#AbortDate
   */
  readonly abortDate?: string;

  /**
   * @schema CreateMultipartUploadOutput#AbortRuleId
   */
  readonly abortRuleId?: string;

  /**
   * @schema CreateMultipartUploadOutput#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema CreateMultipartUploadOutput#Key
   */
  readonly key?: string;

  /**
   * @schema CreateMultipartUploadOutput#UploadId
   */
  readonly uploadId?: string;

  /**
   * @schema CreateMultipartUploadOutput#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema CreateMultipartUploadOutput#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema CreateMultipartUploadOutput#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema CreateMultipartUploadOutput#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema CreateMultipartUploadOutput#SSEKMSEncryptionContext
   */
  readonly ssekmsEncryptionContext?: string;

  /**
   * @schema CreateMultipartUploadOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema DeleteBucketRequest
 */
export interface DeleteBucketRequest {
  /**
   * @schema DeleteBucketRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DeleteBucketRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema DeleteBucketAnalyticsConfigurationRequest
 */
export interface DeleteBucketAnalyticsConfigurationRequest {
  /**
   * @schema DeleteBucketAnalyticsConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DeleteBucketAnalyticsConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteBucketAnalyticsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema DeleteBucketCorsRequest
 */
export interface DeleteBucketCorsRequest {
  /**
   * @schema DeleteBucketCorsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DeleteBucketCorsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema DeleteBucketEncryptionRequest
 */
export interface DeleteBucketEncryptionRequest {
  /**
   * @schema DeleteBucketEncryptionRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DeleteBucketEncryptionRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema DeleteBucketIntelligentTieringConfigurationRequest
 */
export interface DeleteBucketIntelligentTieringConfigurationRequest {
  /**
   * @schema DeleteBucketIntelligentTieringConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DeleteBucketIntelligentTieringConfigurationRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DeleteBucketInventoryConfigurationRequest
 */
export interface DeleteBucketInventoryConfigurationRequest {
  /**
   * @schema DeleteBucketInventoryConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DeleteBucketInventoryConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteBucketInventoryConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema DeleteBucketLifecycleRequest
 */
export interface DeleteBucketLifecycleRequest {
  /**
   * @schema DeleteBucketLifecycleRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DeleteBucketLifecycleRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema DeleteBucketMetricsConfigurationRequest
 */
export interface DeleteBucketMetricsConfigurationRequest {
  /**
   * @schema DeleteBucketMetricsConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DeleteBucketMetricsConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteBucketMetricsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema DeleteBucketOwnershipControlsRequest
 */
export interface DeleteBucketOwnershipControlsRequest {
  /**
   * @schema DeleteBucketOwnershipControlsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DeleteBucketOwnershipControlsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema DeleteBucketPolicyRequest
 */
export interface DeleteBucketPolicyRequest {
  /**
   * @schema DeleteBucketPolicyRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DeleteBucketPolicyRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema DeleteBucketReplicationRequest
 */
export interface DeleteBucketReplicationRequest {
  /**
   * @schema DeleteBucketReplicationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DeleteBucketReplicationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema DeleteBucketTaggingRequest
 */
export interface DeleteBucketTaggingRequest {
  /**
   * @schema DeleteBucketTaggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DeleteBucketTaggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema DeleteBucketWebsiteRequest
 */
export interface DeleteBucketWebsiteRequest {
  /**
   * @schema DeleteBucketWebsiteRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DeleteBucketWebsiteRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema DeleteObjectRequest
 */
export interface DeleteObjectRequest {
  /**
   * @schema DeleteObjectRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DeleteObjectRequest#Key
   */
  readonly key: string;

  /**
   * @schema DeleteObjectRequest#MFA
   */
  readonly mfa?: string;

  /**
   * @schema DeleteObjectRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema DeleteObjectRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema DeleteObjectRequest#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

  /**
   * @schema DeleteObjectRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema DeleteObjectOutput
 */
export interface DeleteObjectOutput {
  /**
   * @schema DeleteObjectOutput#DeleteMarker
   */
  readonly deleteMarker?: boolean;

  /**
   * @schema DeleteObjectOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema DeleteObjectOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema DeleteObjectTaggingRequest
 */
export interface DeleteObjectTaggingRequest {
  /**
   * @schema DeleteObjectTaggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DeleteObjectTaggingRequest#Key
   */
  readonly key: string;

  /**
   * @schema DeleteObjectTaggingRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema DeleteObjectTaggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema DeleteObjectTaggingOutput
 */
export interface DeleteObjectTaggingOutput {
  /**
   * @schema DeleteObjectTaggingOutput#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema DeleteObjectsRequest
 */
export interface DeleteObjectsRequest {
  /**
   * @schema DeleteObjectsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DeleteObjectsRequest#Delete
   */
  readonly delete: Delete;

  /**
   * @schema DeleteObjectsRequest#MFA
   */
  readonly mfa?: string;

  /**
   * @schema DeleteObjectsRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema DeleteObjectsRequest#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

  /**
   * @schema DeleteObjectsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema DeleteObjectsOutput
 */
export interface DeleteObjectsOutput {
  /**
   * @schema DeleteObjectsOutput#Deleted
   */
  readonly deleted?: DeletedObject[];

  /**
   * @schema DeleteObjectsOutput#RequestCharged
   */
  readonly requestCharged?: string;

  /**
   * @schema DeleteObjectsOutput#Errors
   */
  readonly errors?: Error[];

}

/**
 * @schema DeletePublicAccessBlockRequest
 */
export interface DeletePublicAccessBlockRequest {
  /**
   * @schema DeletePublicAccessBlockRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DeletePublicAccessBlockRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketAccelerateConfigurationRequest
 */
export interface GetBucketAccelerateConfigurationRequest {
  /**
   * @schema GetBucketAccelerateConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketAccelerateConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketAccelerateConfigurationOutput
 */
export interface GetBucketAccelerateConfigurationOutput {
  /**
   * @schema GetBucketAccelerateConfigurationOutput#Status
   */
  readonly status?: string;

}

/**
 * @schema GetBucketAclRequest
 */
export interface GetBucketAclRequest {
  /**
   * @schema GetBucketAclRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketAclRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketAclOutput
 */
export interface GetBucketAclOutput {
  /**
   * @schema GetBucketAclOutput#Owner
   */
  readonly owner?: Owner;

  /**
   * @schema GetBucketAclOutput#Grants
   */
  readonly grants?: Grant[];

}

/**
 * @schema GetBucketAnalyticsConfigurationRequest
 */
export interface GetBucketAnalyticsConfigurationRequest {
  /**
   * @schema GetBucketAnalyticsConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketAnalyticsConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema GetBucketAnalyticsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketAnalyticsConfigurationOutput
 */
export interface GetBucketAnalyticsConfigurationOutput {
  /**
   * @schema GetBucketAnalyticsConfigurationOutput#AnalyticsConfiguration
   */
  readonly analyticsConfiguration?: AnalyticsConfiguration;

}

/**
 * @schema GetBucketCorsRequest
 */
export interface GetBucketCorsRequest {
  /**
   * @schema GetBucketCorsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketCorsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketCorsOutput
 */
export interface GetBucketCorsOutput {
  /**
   * @schema GetBucketCorsOutput#CORSRules
   */
  readonly corsRules?: CorsRule[];

}

/**
 * @schema GetBucketEncryptionRequest
 */
export interface GetBucketEncryptionRequest {
  /**
   * @schema GetBucketEncryptionRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketEncryptionRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketEncryptionOutput
 */
export interface GetBucketEncryptionOutput {
  /**
   * @schema GetBucketEncryptionOutput#ServerSideEncryptionConfiguration
   */
  readonly serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

}

/**
 * @schema GetBucketIntelligentTieringConfigurationRequest
 */
export interface GetBucketIntelligentTieringConfigurationRequest {
  /**
   * @schema GetBucketIntelligentTieringConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketIntelligentTieringConfigurationRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetBucketIntelligentTieringConfigurationOutput
 */
export interface GetBucketIntelligentTieringConfigurationOutput {
  /**
   * @schema GetBucketIntelligentTieringConfigurationOutput#IntelligentTieringConfiguration
   */
  readonly intelligentTieringConfiguration?: IntelligentTieringConfiguration;

}

/**
 * @schema GetBucketInventoryConfigurationRequest
 */
export interface GetBucketInventoryConfigurationRequest {
  /**
   * @schema GetBucketInventoryConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketInventoryConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema GetBucketInventoryConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketInventoryConfigurationOutput
 */
export interface GetBucketInventoryConfigurationOutput {
  /**
   * @schema GetBucketInventoryConfigurationOutput#InventoryConfiguration
   */
  readonly inventoryConfiguration?: InventoryConfiguration;

}

/**
 * @schema GetBucketLifecycleRequest
 */
export interface GetBucketLifecycleRequest {
  /**
   * @schema GetBucketLifecycleRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketLifecycleRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketLifecycleOutput
 */
export interface GetBucketLifecycleOutput {
  /**
   * @schema GetBucketLifecycleOutput#Rules
   */
  readonly rules?: Rule[];

}

/**
 * @schema GetBucketLifecycleConfigurationRequest
 */
export interface GetBucketLifecycleConfigurationRequest {
  /**
   * @schema GetBucketLifecycleConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketLifecycleConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketLifecycleConfigurationOutput
 */
export interface GetBucketLifecycleConfigurationOutput {
  /**
   * @schema GetBucketLifecycleConfigurationOutput#Rules
   */
  readonly rules?: LifecycleRule[];

}

/**
 * @schema GetBucketLocationRequest
 */
export interface GetBucketLocationRequest {
  /**
   * @schema GetBucketLocationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketLocationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketLocationOutput
 */
export interface GetBucketLocationOutput {
  /**
   * @schema GetBucketLocationOutput#LocationConstraint
   */
  readonly locationConstraint?: string;

}

/**
 * @schema GetBucketLoggingRequest
 */
export interface GetBucketLoggingRequest {
  /**
   * @schema GetBucketLoggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketLoggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketLoggingOutput
 */
export interface GetBucketLoggingOutput {
  /**
   * @schema GetBucketLoggingOutput#LoggingEnabled
   */
  readonly loggingEnabled?: LoggingEnabled;

}

/**
 * @schema GetBucketMetricsConfigurationRequest
 */
export interface GetBucketMetricsConfigurationRequest {
  /**
   * @schema GetBucketMetricsConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketMetricsConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema GetBucketMetricsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketMetricsConfigurationOutput
 */
export interface GetBucketMetricsConfigurationOutput {
  /**
   * @schema GetBucketMetricsConfigurationOutput#MetricsConfiguration
   */
  readonly metricsConfiguration?: MetricsConfiguration;

}

/**
 * @schema GetBucketNotificationConfigurationRequest
 */
export interface GetBucketNotificationConfigurationRequest {
  /**
   * @schema GetBucketNotificationConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketNotificationConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema NotificationConfigurationDeprecated
 */
export interface NotificationConfigurationDeprecated {
  /**
   * @schema NotificationConfigurationDeprecated#TopicConfiguration
   */
  readonly topicConfiguration?: TopicConfigurationDeprecated;

  /**
   * @schema NotificationConfigurationDeprecated#QueueConfiguration
   */
  readonly queueConfiguration?: QueueConfigurationDeprecated;

  /**
   * @schema NotificationConfigurationDeprecated#CloudFunctionConfiguration
   */
  readonly cloudFunctionConfiguration?: CloudFunctionConfiguration;

}

/**
 * @schema NotificationConfiguration
 */
export interface NotificationConfiguration {
  /**
   * @schema NotificationConfiguration#TopicConfigurations
   */
  readonly topicConfigurations?: TopicConfiguration[];

  /**
   * @schema NotificationConfiguration#QueueConfigurations
   */
  readonly queueConfigurations?: QueueConfiguration[];

  /**
   * @schema NotificationConfiguration#LambdaFunctionConfigurations
   */
  readonly lambdaFunctionConfigurations?: LambdaFunctionConfiguration[];

}

/**
 * @schema GetBucketOwnershipControlsRequest
 */
export interface GetBucketOwnershipControlsRequest {
  /**
   * @schema GetBucketOwnershipControlsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketOwnershipControlsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketOwnershipControlsOutput
 */
export interface GetBucketOwnershipControlsOutput {
  /**
   * @schema GetBucketOwnershipControlsOutput#OwnershipControls
   */
  readonly ownershipControls?: OwnershipControls;

}

/**
 * @schema GetBucketPolicyRequest
 */
export interface GetBucketPolicyRequest {
  /**
   * @schema GetBucketPolicyRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketPolicyRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketPolicyOutput
 */
export interface GetBucketPolicyOutput {
  /**
   * @schema GetBucketPolicyOutput#Policy
   */
  readonly policy?: string;

}

/**
 * @schema GetBucketPolicyStatusRequest
 */
export interface GetBucketPolicyStatusRequest {
  /**
   * @schema GetBucketPolicyStatusRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketPolicyStatusRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketPolicyStatusOutput
 */
export interface GetBucketPolicyStatusOutput {
  /**
   * @schema GetBucketPolicyStatusOutput#PolicyStatus
   */
  readonly policyStatus?: PolicyStatus;

}

/**
 * @schema GetBucketReplicationRequest
 */
export interface GetBucketReplicationRequest {
  /**
   * @schema GetBucketReplicationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketReplicationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketReplicationOutput
 */
export interface GetBucketReplicationOutput {
  /**
   * @schema GetBucketReplicationOutput#ReplicationConfiguration
   */
  readonly replicationConfiguration?: ReplicationConfiguration;

}

/**
 * @schema GetBucketRequestPaymentRequest
 */
export interface GetBucketRequestPaymentRequest {
  /**
   * @schema GetBucketRequestPaymentRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketRequestPaymentRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketRequestPaymentOutput
 */
export interface GetBucketRequestPaymentOutput {
  /**
   * @schema GetBucketRequestPaymentOutput#Payer
   */
  readonly payer?: string;

}

/**
 * @schema GetBucketTaggingRequest
 */
export interface GetBucketTaggingRequest {
  /**
   * @schema GetBucketTaggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketTaggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketTaggingOutput
 */
export interface GetBucketTaggingOutput {
  /**
   * @schema GetBucketTaggingOutput#TagSet
   */
  readonly tagSet: Tag[];

}

/**
 * @schema GetBucketVersioningRequest
 */
export interface GetBucketVersioningRequest {
  /**
   * @schema GetBucketVersioningRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketVersioningRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketVersioningOutput
 */
export interface GetBucketVersioningOutput {
  /**
   * @schema GetBucketVersioningOutput#Status
   */
  readonly status?: string;

  /**
   * @schema GetBucketVersioningOutput#MFADelete
   */
  readonly mfaDelete?: string;

}

/**
 * @schema GetBucketWebsiteRequest
 */
export interface GetBucketWebsiteRequest {
  /**
   * @schema GetBucketWebsiteRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetBucketWebsiteRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetBucketWebsiteOutput
 */
export interface GetBucketWebsiteOutput {
  /**
   * @schema GetBucketWebsiteOutput#RedirectAllRequestsTo
   */
  readonly redirectAllRequestsTo?: RedirectAllRequestsTo;

  /**
   * @schema GetBucketWebsiteOutput#IndexDocument
   */
  readonly indexDocument?: IndexDocument;

  /**
   * @schema GetBucketWebsiteOutput#ErrorDocument
   */
  readonly errorDocument?: ErrorDocument;

  /**
   * @schema GetBucketWebsiteOutput#RoutingRules
   */
  readonly routingRules?: RoutingRule[];

}

/**
 * @schema GetObjectRequest
 */
export interface GetObjectRequest {
  /**
   * @schema GetObjectRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetObjectRequest#IfMatch
   */
  readonly ifMatch?: string;

  /**
   * @schema GetObjectRequest#IfModifiedSince
   */
  readonly ifModifiedSince?: string;

  /**
   * @schema GetObjectRequest#IfNoneMatch
   */
  readonly ifNoneMatch?: string;

  /**
   * @schema GetObjectRequest#IfUnmodifiedSince
   */
  readonly ifUnmodifiedSince?: string;

  /**
   * @schema GetObjectRequest#Key
   */
  readonly key: string;

  /**
   * @schema GetObjectRequest#Range
   */
  readonly range?: string;

  /**
   * @schema GetObjectRequest#ResponseCacheControl
   */
  readonly responseCacheControl?: string;

  /**
   * @schema GetObjectRequest#ResponseContentDisposition
   */
  readonly responseContentDisposition?: string;

  /**
   * @schema GetObjectRequest#ResponseContentEncoding
   */
  readonly responseContentEncoding?: string;

  /**
   * @schema GetObjectRequest#ResponseContentLanguage
   */
  readonly responseContentLanguage?: string;

  /**
   * @schema GetObjectRequest#ResponseContentType
   */
  readonly responseContentType?: string;

  /**
   * @schema GetObjectRequest#ResponseExpires
   */
  readonly responseExpires?: string;

  /**
   * @schema GetObjectRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema GetObjectRequest#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema GetObjectRequest#SSECustomerKey
   */
  readonly sseCustomerKey?: any;

  /**
   * @schema GetObjectRequest#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema GetObjectRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema GetObjectRequest#PartNumber
   */
  readonly partNumber?: number;

  /**
   * @schema GetObjectRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetObjectOutput
 */
export interface GetObjectOutput {
  /**
   * @schema GetObjectOutput#Body
   */
  readonly body?: any;

  /**
   * @schema GetObjectOutput#DeleteMarker
   */
  readonly deleteMarker?: boolean;

  /**
   * @schema GetObjectOutput#AcceptRanges
   */
  readonly acceptRanges?: string;

  /**
   * @schema GetObjectOutput#Expiration
   */
  readonly expiration?: string;

  /**
   * @schema GetObjectOutput#Restore
   */
  readonly restore?: string;

  /**
   * @schema GetObjectOutput#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema GetObjectOutput#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema GetObjectOutput#ETag
   */
  readonly eTag?: string;

  /**
   * @schema GetObjectOutput#MissingMeta
   */
  readonly missingMeta?: number;

  /**
   * @schema GetObjectOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema GetObjectOutput#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema GetObjectOutput#ContentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema GetObjectOutput#ContentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema GetObjectOutput#ContentLanguage
   */
  readonly contentLanguage?: string;

  /**
   * @schema GetObjectOutput#ContentRange
   */
  readonly contentRange?: string;

  /**
   * @schema GetObjectOutput#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema GetObjectOutput#Expires
   */
  readonly expires?: string;

  /**
   * @schema GetObjectOutput#WebsiteRedirectLocation
   */
  readonly websiteRedirectLocation?: string;

  /**
   * @schema GetObjectOutput#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema GetObjectOutput#Metadata
   */
  readonly metadata?: { [key: string]: string };

  /**
   * @schema GetObjectOutput#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema GetObjectOutput#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema GetObjectOutput#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema GetObjectOutput#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema GetObjectOutput#RequestCharged
   */
  readonly requestCharged?: string;

  /**
   * @schema GetObjectOutput#ReplicationStatus
   */
  readonly replicationStatus?: string;

  /**
   * @schema GetObjectOutput#PartsCount
   */
  readonly partsCount?: number;

  /**
   * @schema GetObjectOutput#TagCount
   */
  readonly tagCount?: number;

  /**
   * @schema GetObjectOutput#ObjectLockMode
   */
  readonly objectLockMode?: string;

  /**
   * @schema GetObjectOutput#ObjectLockRetainUntilDate
   */
  readonly objectLockRetainUntilDate?: string;

  /**
   * @schema GetObjectOutput#ObjectLockLegalHoldStatus
   */
  readonly objectLockLegalHoldStatus?: string;

}

/**
 * @schema GetObjectAclRequest
 */
export interface GetObjectAclRequest {
  /**
   * @schema GetObjectAclRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetObjectAclRequest#Key
   */
  readonly key: string;

  /**
   * @schema GetObjectAclRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema GetObjectAclRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema GetObjectAclRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetObjectAclOutput
 */
export interface GetObjectAclOutput {
  /**
   * @schema GetObjectAclOutput#Owner
   */
  readonly owner?: Owner;

  /**
   * @schema GetObjectAclOutput#Grants
   */
  readonly grants?: Grant[];

  /**
   * @schema GetObjectAclOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema GetObjectLegalHoldRequest
 */
export interface GetObjectLegalHoldRequest {
  /**
   * @schema GetObjectLegalHoldRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetObjectLegalHoldRequest#Key
   */
  readonly key: string;

  /**
   * @schema GetObjectLegalHoldRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema GetObjectLegalHoldRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema GetObjectLegalHoldRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetObjectLegalHoldOutput
 */
export interface GetObjectLegalHoldOutput {
  /**
   * @schema GetObjectLegalHoldOutput#LegalHold
   */
  readonly legalHold?: ObjectLockLegalHold;

}

/**
 * @schema GetObjectLockConfigurationRequest
 */
export interface GetObjectLockConfigurationRequest {
  /**
   * @schema GetObjectLockConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetObjectLockConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetObjectLockConfigurationOutput
 */
export interface GetObjectLockConfigurationOutput {
  /**
   * @schema GetObjectLockConfigurationOutput#ObjectLockConfiguration
   */
  readonly objectLockConfiguration?: ObjectLockConfiguration;

}

/**
 * @schema GetObjectRetentionRequest
 */
export interface GetObjectRetentionRequest {
  /**
   * @schema GetObjectRetentionRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetObjectRetentionRequest#Key
   */
  readonly key: string;

  /**
   * @schema GetObjectRetentionRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema GetObjectRetentionRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema GetObjectRetentionRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetObjectRetentionOutput
 */
export interface GetObjectRetentionOutput {
  /**
   * @schema GetObjectRetentionOutput#Retention
   */
  readonly retention?: ObjectLockRetention;

}

/**
 * @schema GetObjectTaggingRequest
 */
export interface GetObjectTaggingRequest {
  /**
   * @schema GetObjectTaggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetObjectTaggingRequest#Key
   */
  readonly key: string;

  /**
   * @schema GetObjectTaggingRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema GetObjectTaggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetObjectTaggingOutput
 */
export interface GetObjectTaggingOutput {
  /**
   * @schema GetObjectTaggingOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema GetObjectTaggingOutput#TagSet
   */
  readonly tagSet: Tag[];

}

/**
 * @schema GetObjectTorrentRequest
 */
export interface GetObjectTorrentRequest {
  /**
   * @schema GetObjectTorrentRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetObjectTorrentRequest#Key
   */
  readonly key: string;

  /**
   * @schema GetObjectTorrentRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema GetObjectTorrentRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema GetObjectTorrentOutput
 */
export interface GetObjectTorrentOutput {
  /**
   * @schema GetObjectTorrentOutput#Body
   */
  readonly body?: any;

  /**
   * @schema GetObjectTorrentOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema GetPublicAccessBlockRequest
 */
export interface GetPublicAccessBlockRequest {
  /**
   * @schema GetPublicAccessBlockRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema GetPublicAccessBlockRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

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
 * @schema HeadBucketRequest
 */
export interface HeadBucketRequest {
  /**
   * @schema HeadBucketRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema HeadBucketRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema HeadObjectRequest
 */
export interface HeadObjectRequest {
  /**
   * @schema HeadObjectRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema HeadObjectRequest#IfMatch
   */
  readonly ifMatch?: string;

  /**
   * @schema HeadObjectRequest#IfModifiedSince
   */
  readonly ifModifiedSince?: string;

  /**
   * @schema HeadObjectRequest#IfNoneMatch
   */
  readonly ifNoneMatch?: string;

  /**
   * @schema HeadObjectRequest#IfUnmodifiedSince
   */
  readonly ifUnmodifiedSince?: string;

  /**
   * @schema HeadObjectRequest#Key
   */
  readonly key: string;

  /**
   * @schema HeadObjectRequest#Range
   */
  readonly range?: string;

  /**
   * @schema HeadObjectRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema HeadObjectRequest#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema HeadObjectRequest#SSECustomerKey
   */
  readonly sseCustomerKey?: any;

  /**
   * @schema HeadObjectRequest#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema HeadObjectRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema HeadObjectRequest#PartNumber
   */
  readonly partNumber?: number;

  /**
   * @schema HeadObjectRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema HeadObjectOutput
 */
export interface HeadObjectOutput {
  /**
   * @schema HeadObjectOutput#DeleteMarker
   */
  readonly deleteMarker?: boolean;

  /**
   * @schema HeadObjectOutput#AcceptRanges
   */
  readonly acceptRanges?: string;

  /**
   * @schema HeadObjectOutput#Expiration
   */
  readonly expiration?: string;

  /**
   * @schema HeadObjectOutput#Restore
   */
  readonly restore?: string;

  /**
   * @schema HeadObjectOutput#ArchiveStatus
   */
  readonly archiveStatus?: string;

  /**
   * @schema HeadObjectOutput#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema HeadObjectOutput#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema HeadObjectOutput#ETag
   */
  readonly eTag?: string;

  /**
   * @schema HeadObjectOutput#MissingMeta
   */
  readonly missingMeta?: number;

  /**
   * @schema HeadObjectOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema HeadObjectOutput#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema HeadObjectOutput#ContentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema HeadObjectOutput#ContentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema HeadObjectOutput#ContentLanguage
   */
  readonly contentLanguage?: string;

  /**
   * @schema HeadObjectOutput#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema HeadObjectOutput#Expires
   */
  readonly expires?: string;

  /**
   * @schema HeadObjectOutput#WebsiteRedirectLocation
   */
  readonly websiteRedirectLocation?: string;

  /**
   * @schema HeadObjectOutput#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema HeadObjectOutput#Metadata
   */
  readonly metadata?: { [key: string]: string };

  /**
   * @schema HeadObjectOutput#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema HeadObjectOutput#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema HeadObjectOutput#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema HeadObjectOutput#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema HeadObjectOutput#RequestCharged
   */
  readonly requestCharged?: string;

  /**
   * @schema HeadObjectOutput#ReplicationStatus
   */
  readonly replicationStatus?: string;

  /**
   * @schema HeadObjectOutput#PartsCount
   */
  readonly partsCount?: number;

  /**
   * @schema HeadObjectOutput#ObjectLockMode
   */
  readonly objectLockMode?: string;

  /**
   * @schema HeadObjectOutput#ObjectLockRetainUntilDate
   */
  readonly objectLockRetainUntilDate?: string;

  /**
   * @schema HeadObjectOutput#ObjectLockLegalHoldStatus
   */
  readonly objectLockLegalHoldStatus?: string;

}

/**
 * @schema ListBucketAnalyticsConfigurationsRequest
 */
export interface ListBucketAnalyticsConfigurationsRequest {
  /**
   * @schema ListBucketAnalyticsConfigurationsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema ListBucketAnalyticsConfigurationsRequest#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema ListBucketAnalyticsConfigurationsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema ListBucketAnalyticsConfigurationsOutput
 */
export interface ListBucketAnalyticsConfigurationsOutput {
  /**
   * @schema ListBucketAnalyticsConfigurationsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListBucketAnalyticsConfigurationsOutput#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema ListBucketAnalyticsConfigurationsOutput#NextContinuationToken
   */
  readonly nextContinuationToken?: string;

  /**
   * @schema ListBucketAnalyticsConfigurationsOutput#AnalyticsConfigurationList
   */
  readonly analyticsConfigurationList?: AnalyticsConfiguration[];

}

/**
 * @schema ListBucketIntelligentTieringConfigurationsRequest
 */
export interface ListBucketIntelligentTieringConfigurationsRequest {
  /**
   * @schema ListBucketIntelligentTieringConfigurationsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema ListBucketIntelligentTieringConfigurationsRequest#ContinuationToken
   */
  readonly continuationToken?: string;

}

/**
 * @schema ListBucketIntelligentTieringConfigurationsOutput
 */
export interface ListBucketIntelligentTieringConfigurationsOutput {
  /**
   * @schema ListBucketIntelligentTieringConfigurationsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListBucketIntelligentTieringConfigurationsOutput#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema ListBucketIntelligentTieringConfigurationsOutput#NextContinuationToken
   */
  readonly nextContinuationToken?: string;

  /**
   * @schema ListBucketIntelligentTieringConfigurationsOutput#IntelligentTieringConfigurationList
   */
  readonly intelligentTieringConfigurationList?: IntelligentTieringConfiguration[];

}

/**
 * @schema ListBucketInventoryConfigurationsRequest
 */
export interface ListBucketInventoryConfigurationsRequest {
  /**
   * @schema ListBucketInventoryConfigurationsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema ListBucketInventoryConfigurationsRequest#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema ListBucketInventoryConfigurationsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema ListBucketInventoryConfigurationsOutput
 */
export interface ListBucketInventoryConfigurationsOutput {
  /**
   * @schema ListBucketInventoryConfigurationsOutput#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema ListBucketInventoryConfigurationsOutput#InventoryConfigurationList
   */
  readonly inventoryConfigurationList?: InventoryConfiguration[];

  /**
   * @schema ListBucketInventoryConfigurationsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListBucketInventoryConfigurationsOutput#NextContinuationToken
   */
  readonly nextContinuationToken?: string;

}

/**
 * @schema ListBucketMetricsConfigurationsRequest
 */
export interface ListBucketMetricsConfigurationsRequest {
  /**
   * @schema ListBucketMetricsConfigurationsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema ListBucketMetricsConfigurationsRequest#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema ListBucketMetricsConfigurationsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema ListBucketMetricsConfigurationsOutput
 */
export interface ListBucketMetricsConfigurationsOutput {
  /**
   * @schema ListBucketMetricsConfigurationsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListBucketMetricsConfigurationsOutput#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema ListBucketMetricsConfigurationsOutput#NextContinuationToken
   */
  readonly nextContinuationToken?: string;

  /**
   * @schema ListBucketMetricsConfigurationsOutput#MetricsConfigurationList
   */
  readonly metricsConfigurationList?: MetricsConfiguration[];

}

/**
 * @schema ListBucketsOutput
 */
export interface ListBucketsOutput {
  /**
   * @schema ListBucketsOutput#Buckets
   */
  readonly buckets?: Bucket[];

  /**
   * @schema ListBucketsOutput#Owner
   */
  readonly owner?: Owner;

}

/**
 * @schema ListMultipartUploadsRequest
 */
export interface ListMultipartUploadsRequest {
  /**
   * @schema ListMultipartUploadsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema ListMultipartUploadsRequest#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema ListMultipartUploadsRequest#EncodingType
   */
  readonly encodingType?: string;

  /**
   * @schema ListMultipartUploadsRequest#KeyMarker
   */
  readonly keyMarker?: string;

  /**
   * @schema ListMultipartUploadsRequest#MaxUploads
   */
  readonly maxUploads?: number;

  /**
   * @schema ListMultipartUploadsRequest#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema ListMultipartUploadsRequest#UploadIdMarker
   */
  readonly uploadIdMarker?: string;

  /**
   * @schema ListMultipartUploadsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema ListMultipartUploadsOutput
 */
export interface ListMultipartUploadsOutput {
  /**
   * @schema ListMultipartUploadsOutput#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema ListMultipartUploadsOutput#KeyMarker
   */
  readonly keyMarker?: string;

  /**
   * @schema ListMultipartUploadsOutput#UploadIdMarker
   */
  readonly uploadIdMarker?: string;

  /**
   * @schema ListMultipartUploadsOutput#NextKeyMarker
   */
  readonly nextKeyMarker?: string;

  /**
   * @schema ListMultipartUploadsOutput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema ListMultipartUploadsOutput#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema ListMultipartUploadsOutput#NextUploadIdMarker
   */
  readonly nextUploadIdMarker?: string;

  /**
   * @schema ListMultipartUploadsOutput#MaxUploads
   */
  readonly maxUploads?: number;

  /**
   * @schema ListMultipartUploadsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListMultipartUploadsOutput#Uploads
   */
  readonly uploads?: MultipartUpload[];

  /**
   * @schema ListMultipartUploadsOutput#CommonPrefixes
   */
  readonly commonPrefixes?: CommonPrefix[];

  /**
   * @schema ListMultipartUploadsOutput#EncodingType
   */
  readonly encodingType?: string;

}

/**
 * @schema ListObjectVersionsRequest
 */
export interface ListObjectVersionsRequest {
  /**
   * @schema ListObjectVersionsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema ListObjectVersionsRequest#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema ListObjectVersionsRequest#EncodingType
   */
  readonly encodingType?: string;

  /**
   * @schema ListObjectVersionsRequest#KeyMarker
   */
  readonly keyMarker?: string;

  /**
   * @schema ListObjectVersionsRequest#MaxKeys
   */
  readonly maxKeys?: number;

  /**
   * @schema ListObjectVersionsRequest#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema ListObjectVersionsRequest#VersionIdMarker
   */
  readonly versionIdMarker?: string;

  /**
   * @schema ListObjectVersionsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema ListObjectVersionsOutput
 */
export interface ListObjectVersionsOutput {
  /**
   * @schema ListObjectVersionsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListObjectVersionsOutput#KeyMarker
   */
  readonly keyMarker?: string;

  /**
   * @schema ListObjectVersionsOutput#VersionIdMarker
   */
  readonly versionIdMarker?: string;

  /**
   * @schema ListObjectVersionsOutput#NextKeyMarker
   */
  readonly nextKeyMarker?: string;

  /**
   * @schema ListObjectVersionsOutput#NextVersionIdMarker
   */
  readonly nextVersionIdMarker?: string;

  /**
   * @schema ListObjectVersionsOutput#Versions
   */
  readonly versions?: ObjectVersion[];

  /**
   * @schema ListObjectVersionsOutput#DeleteMarkers
   */
  readonly deleteMarkers?: DeleteMarkerEntry[];

  /**
   * @schema ListObjectVersionsOutput#Name
   */
  readonly name?: string;

  /**
   * @schema ListObjectVersionsOutput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema ListObjectVersionsOutput#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema ListObjectVersionsOutput#MaxKeys
   */
  readonly maxKeys?: number;

  /**
   * @schema ListObjectVersionsOutput#CommonPrefixes
   */
  readonly commonPrefixes?: CommonPrefix[];

  /**
   * @schema ListObjectVersionsOutput#EncodingType
   */
  readonly encodingType?: string;

}

/**
 * @schema ListObjectsRequest
 */
export interface ListObjectsRequest {
  /**
   * @schema ListObjectsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema ListObjectsRequest#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema ListObjectsRequest#EncodingType
   */
  readonly encodingType?: string;

  /**
   * @schema ListObjectsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListObjectsRequest#MaxKeys
   */
  readonly maxKeys?: number;

  /**
   * @schema ListObjectsRequest#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema ListObjectsRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema ListObjectsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema ListObjectsOutput
 */
export interface ListObjectsOutput {
  /**
   * @schema ListObjectsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListObjectsOutput#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListObjectsOutput#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListObjectsOutput#Contents
   */
  readonly contents?: Object[];

  /**
   * @schema ListObjectsOutput#Name
   */
  readonly name?: string;

  /**
   * @schema ListObjectsOutput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema ListObjectsOutput#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema ListObjectsOutput#MaxKeys
   */
  readonly maxKeys?: number;

  /**
   * @schema ListObjectsOutput#CommonPrefixes
   */
  readonly commonPrefixes?: CommonPrefix[];

  /**
   * @schema ListObjectsOutput#EncodingType
   */
  readonly encodingType?: string;

}

/**
 * @schema ListObjectsV2Request
 */
export interface ListObjectsV2Request {
  /**
   * @schema ListObjectsV2Request#Bucket
   */
  readonly bucket: string;

  /**
   * @schema ListObjectsV2Request#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema ListObjectsV2Request#EncodingType
   */
  readonly encodingType?: string;

  /**
   * @schema ListObjectsV2Request#MaxKeys
   */
  readonly maxKeys?: number;

  /**
   * @schema ListObjectsV2Request#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema ListObjectsV2Request#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema ListObjectsV2Request#FetchOwner
   */
  readonly fetchOwner?: boolean;

  /**
   * @schema ListObjectsV2Request#StartAfter
   */
  readonly startAfter?: string;

  /**
   * @schema ListObjectsV2Request#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema ListObjectsV2Request#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema ListObjectsV2Output
 */
export interface ListObjectsV2Output {
  /**
   * @schema ListObjectsV2Output#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListObjectsV2Output#Contents
   */
  readonly contents?: Object[];

  /**
   * @schema ListObjectsV2Output#Name
   */
  readonly name?: string;

  /**
   * @schema ListObjectsV2Output#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema ListObjectsV2Output#Delimiter
   */
  readonly delimiter?: string;

  /**
   * @schema ListObjectsV2Output#MaxKeys
   */
  readonly maxKeys?: number;

  /**
   * @schema ListObjectsV2Output#CommonPrefixes
   */
  readonly commonPrefixes?: CommonPrefix[];

  /**
   * @schema ListObjectsV2Output#EncodingType
   */
  readonly encodingType?: string;

  /**
   * @schema ListObjectsV2Output#KeyCount
   */
  readonly keyCount?: number;

  /**
   * @schema ListObjectsV2Output#ContinuationToken
   */
  readonly continuationToken?: string;

  /**
   * @schema ListObjectsV2Output#NextContinuationToken
   */
  readonly nextContinuationToken?: string;

  /**
   * @schema ListObjectsV2Output#StartAfter
   */
  readonly startAfter?: string;

}

/**
 * @schema ListPartsRequest
 */
export interface ListPartsRequest {
  /**
   * @schema ListPartsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema ListPartsRequest#Key
   */
  readonly key: string;

  /**
   * @schema ListPartsRequest#MaxParts
   */
  readonly maxParts?: number;

  /**
   * @schema ListPartsRequest#PartNumberMarker
   */
  readonly partNumberMarker?: number;

  /**
   * @schema ListPartsRequest#UploadId
   */
  readonly uploadId: string;

  /**
   * @schema ListPartsRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema ListPartsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema ListPartsOutput
 */
export interface ListPartsOutput {
  /**
   * @schema ListPartsOutput#AbortDate
   */
  readonly abortDate?: string;

  /**
   * @schema ListPartsOutput#AbortRuleId
   */
  readonly abortRuleId?: string;

  /**
   * @schema ListPartsOutput#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema ListPartsOutput#Key
   */
  readonly key?: string;

  /**
   * @schema ListPartsOutput#UploadId
   */
  readonly uploadId?: string;

  /**
   * @schema ListPartsOutput#PartNumberMarker
   */
  readonly partNumberMarker?: number;

  /**
   * @schema ListPartsOutput#NextPartNumberMarker
   */
  readonly nextPartNumberMarker?: number;

  /**
   * @schema ListPartsOutput#MaxParts
   */
  readonly maxParts?: number;

  /**
   * @schema ListPartsOutput#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema ListPartsOutput#Parts
   */
  readonly parts?: Part[];

  /**
   * @schema ListPartsOutput#Initiator
   */
  readonly initiator?: Initiator;

  /**
   * @schema ListPartsOutput#Owner
   */
  readonly owner?: Owner;

  /**
   * @schema ListPartsOutput#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema ListPartsOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema PutBucketAccelerateConfigurationRequest
 */
export interface PutBucketAccelerateConfigurationRequest {
  /**
   * @schema PutBucketAccelerateConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketAccelerateConfigurationRequest#AccelerateConfiguration
   */
  readonly accelerateConfiguration: AccelerateConfiguration;

  /**
   * @schema PutBucketAccelerateConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutBucketAclRequest
 */
export interface PutBucketAclRequest {
  /**
   * @schema PutBucketAclRequest#ACL
   */
  readonly acl?: string;

  /**
   * @schema PutBucketAclRequest#AccessControlPolicy
   */
  readonly accessControlPolicy?: AccessControlPolicy;

  /**
   * @schema PutBucketAclRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketAclRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutBucketAclRequest#GrantFullControl
   */
  readonly grantFullControl?: string;

  /**
   * @schema PutBucketAclRequest#GrantRead
   */
  readonly grantRead?: string;

  /**
   * @schema PutBucketAclRequest#GrantReadACP
   */
  readonly grantReadAcp?: string;

  /**
   * @schema PutBucketAclRequest#GrantWrite
   */
  readonly grantWrite?: string;

  /**
   * @schema PutBucketAclRequest#GrantWriteACP
   */
  readonly grantWriteAcp?: string;

  /**
   * @schema PutBucketAclRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutBucketAnalyticsConfigurationRequest
 */
export interface PutBucketAnalyticsConfigurationRequest {
  /**
   * @schema PutBucketAnalyticsConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketAnalyticsConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema PutBucketAnalyticsConfigurationRequest#AnalyticsConfiguration
   */
  readonly analyticsConfiguration: AnalyticsConfiguration;

  /**
   * @schema PutBucketAnalyticsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutBucketCorsRequest
 */
export interface PutBucketCorsRequest {
  /**
   * @schema PutBucketCorsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketCorsRequest#CORSConfiguration
   */
  readonly corsConfiguration: CorsConfiguration;

  /**
   * @schema PutBucketCorsRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutBucketCorsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutBucketEncryptionRequest
 */
export interface PutBucketEncryptionRequest {
  /**
   * @schema PutBucketEncryptionRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketEncryptionRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutBucketEncryptionRequest#ServerSideEncryptionConfiguration
   */
  readonly serverSideEncryptionConfiguration: ServerSideEncryptionConfiguration;

  /**
   * @schema PutBucketEncryptionRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutBucketIntelligentTieringConfigurationRequest
 */
export interface PutBucketIntelligentTieringConfigurationRequest {
  /**
   * @schema PutBucketIntelligentTieringConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketIntelligentTieringConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema PutBucketIntelligentTieringConfigurationRequest#IntelligentTieringConfiguration
   */
  readonly intelligentTieringConfiguration: IntelligentTieringConfiguration;

}

/**
 * @schema PutBucketInventoryConfigurationRequest
 */
export interface PutBucketInventoryConfigurationRequest {
  /**
   * @schema PutBucketInventoryConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketInventoryConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema PutBucketInventoryConfigurationRequest#InventoryConfiguration
   */
  readonly inventoryConfiguration: InventoryConfiguration;

  /**
   * @schema PutBucketInventoryConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutBucketLifecycleRequest
 */
export interface PutBucketLifecycleRequest {
  /**
   * @schema PutBucketLifecycleRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketLifecycleRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutBucketLifecycleRequest#LifecycleConfiguration
   */
  readonly lifecycleConfiguration?: LifecycleConfiguration;

  /**
   * @schema PutBucketLifecycleRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutBucketLifecycleConfigurationRequest
 */
export interface PutBucketLifecycleConfigurationRequest {
  /**
   * @schema PutBucketLifecycleConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketLifecycleConfigurationRequest#LifecycleConfiguration
   */
  readonly lifecycleConfiguration?: BucketLifecycleConfiguration;

  /**
   * @schema PutBucketLifecycleConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutBucketLoggingRequest
 */
export interface PutBucketLoggingRequest {
  /**
   * @schema PutBucketLoggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketLoggingRequest#BucketLoggingStatus
   */
  readonly bucketLoggingStatus: BucketLoggingStatus;

  /**
   * @schema PutBucketLoggingRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutBucketLoggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutBucketMetricsConfigurationRequest
 */
export interface PutBucketMetricsConfigurationRequest {
  /**
   * @schema PutBucketMetricsConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketMetricsConfigurationRequest#Id
   */
  readonly id: string;

  /**
   * @schema PutBucketMetricsConfigurationRequest#MetricsConfiguration
   */
  readonly metricsConfiguration: MetricsConfiguration;

  /**
   * @schema PutBucketMetricsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutBucketNotificationRequest
 */
export interface PutBucketNotificationRequest {
  /**
   * @schema PutBucketNotificationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketNotificationRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutBucketNotificationRequest#NotificationConfiguration
   */
  readonly notificationConfiguration: NotificationConfigurationDeprecated;

  /**
   * @schema PutBucketNotificationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutBucketNotificationConfigurationRequest
 */
export interface PutBucketNotificationConfigurationRequest {
  /**
   * @schema PutBucketNotificationConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketNotificationConfigurationRequest#NotificationConfiguration
   */
  readonly notificationConfiguration: NotificationConfiguration;

  /**
   * @schema PutBucketNotificationConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutBucketOwnershipControlsRequest
 */
export interface PutBucketOwnershipControlsRequest {
  /**
   * @schema PutBucketOwnershipControlsRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketOwnershipControlsRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutBucketOwnershipControlsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

  /**
   * @schema PutBucketOwnershipControlsRequest#OwnershipControls
   */
  readonly ownershipControls: OwnershipControls;

}

/**
 * @schema PutBucketPolicyRequest
 */
export interface PutBucketPolicyRequest {
  /**
   * @schema PutBucketPolicyRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketPolicyRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutBucketPolicyRequest#ConfirmRemoveSelfBucketAccess
   */
  readonly confirmRemoveSelfBucketAccess?: boolean;

  /**
   * @schema PutBucketPolicyRequest#Policy
   */
  readonly policy: string;

  /**
   * @schema PutBucketPolicyRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutBucketReplicationRequest
 */
export interface PutBucketReplicationRequest {
  /**
   * @schema PutBucketReplicationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketReplicationRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutBucketReplicationRequest#ReplicationConfiguration
   */
  readonly replicationConfiguration: ReplicationConfiguration;

  /**
   * @schema PutBucketReplicationRequest#Token
   */
  readonly token?: string;

  /**
   * @schema PutBucketReplicationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutBucketRequestPaymentRequest
 */
export interface PutBucketRequestPaymentRequest {
  /**
   * @schema PutBucketRequestPaymentRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketRequestPaymentRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutBucketRequestPaymentRequest#RequestPaymentConfiguration
   */
  readonly requestPaymentConfiguration: RequestPaymentConfiguration;

  /**
   * @schema PutBucketRequestPaymentRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutBucketTaggingRequest
 */
export interface PutBucketTaggingRequest {
  /**
   * @schema PutBucketTaggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketTaggingRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutBucketTaggingRequest#Tagging
   */
  readonly tagging: Tagging;

  /**
   * @schema PutBucketTaggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutBucketVersioningRequest
 */
export interface PutBucketVersioningRequest {
  /**
   * @schema PutBucketVersioningRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketVersioningRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutBucketVersioningRequest#MFA
   */
  readonly mfa?: string;

  /**
   * @schema PutBucketVersioningRequest#VersioningConfiguration
   */
  readonly versioningConfiguration: VersioningConfiguration;

  /**
   * @schema PutBucketVersioningRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutBucketWebsiteRequest
 */
export interface PutBucketWebsiteRequest {
  /**
   * @schema PutBucketWebsiteRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutBucketWebsiteRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutBucketWebsiteRequest#WebsiteConfiguration
   */
  readonly websiteConfiguration: WebsiteConfiguration;

  /**
   * @schema PutBucketWebsiteRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutObjectRequest
 */
export interface PutObjectRequest {
  /**
   * @schema PutObjectRequest#ACL
   */
  readonly acl?: string;

  /**
   * @schema PutObjectRequest#Body
   */
  readonly body?: any;

  /**
   * @schema PutObjectRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutObjectRequest#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema PutObjectRequest#ContentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema PutObjectRequest#ContentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema PutObjectRequest#ContentLanguage
   */
  readonly contentLanguage?: string;

  /**
   * @schema PutObjectRequest#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema PutObjectRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutObjectRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema PutObjectRequest#Expires
   */
  readonly expires?: string;

  /**
   * @schema PutObjectRequest#GrantFullControl
   */
  readonly grantFullControl?: string;

  /**
   * @schema PutObjectRequest#GrantRead
   */
  readonly grantRead?: string;

  /**
   * @schema PutObjectRequest#GrantReadACP
   */
  readonly grantReadAcp?: string;

  /**
   * @schema PutObjectRequest#GrantWriteACP
   */
  readonly grantWriteAcp?: string;

  /**
   * @schema PutObjectRequest#Key
   */
  readonly key: string;

  /**
   * @schema PutObjectRequest#Metadata
   */
  readonly metadata?: { [key: string]: string };

  /**
   * @schema PutObjectRequest#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema PutObjectRequest#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema PutObjectRequest#WebsiteRedirectLocation
   */
  readonly websiteRedirectLocation?: string;

  /**
   * @schema PutObjectRequest#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema PutObjectRequest#SSECustomerKey
   */
  readonly sseCustomerKey?: any;

  /**
   * @schema PutObjectRequest#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema PutObjectRequest#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema PutObjectRequest#SSEKMSEncryptionContext
   */
  readonly ssekmsEncryptionContext?: string;

  /**
   * @schema PutObjectRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema PutObjectRequest#Tagging
   */
  readonly tagging?: string;

  /**
   * @schema PutObjectRequest#ObjectLockMode
   */
  readonly objectLockMode?: string;

  /**
   * @schema PutObjectRequest#ObjectLockRetainUntilDate
   */
  readonly objectLockRetainUntilDate?: string;

  /**
   * @schema PutObjectRequest#ObjectLockLegalHoldStatus
   */
  readonly objectLockLegalHoldStatus?: string;

  /**
   * @schema PutObjectRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutObjectOutput
 */
export interface PutObjectOutput {
  /**
   * @schema PutObjectOutput#Expiration
   */
  readonly expiration?: string;

  /**
   * @schema PutObjectOutput#ETag
   */
  readonly eTag?: string;

  /**
   * @schema PutObjectOutput#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema PutObjectOutput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema PutObjectOutput#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema PutObjectOutput#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema PutObjectOutput#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema PutObjectOutput#SSEKMSEncryptionContext
   */
  readonly ssekmsEncryptionContext?: string;

  /**
   * @schema PutObjectOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema PutObjectAclRequest
 */
export interface PutObjectAclRequest {
  /**
   * @schema PutObjectAclRequest#ACL
   */
  readonly acl?: string;

  /**
   * @schema PutObjectAclRequest#AccessControlPolicy
   */
  readonly accessControlPolicy?: AccessControlPolicy;

  /**
   * @schema PutObjectAclRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutObjectAclRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutObjectAclRequest#GrantFullControl
   */
  readonly grantFullControl?: string;

  /**
   * @schema PutObjectAclRequest#GrantRead
   */
  readonly grantRead?: string;

  /**
   * @schema PutObjectAclRequest#GrantReadACP
   */
  readonly grantReadAcp?: string;

  /**
   * @schema PutObjectAclRequest#GrantWrite
   */
  readonly grantWrite?: string;

  /**
   * @schema PutObjectAclRequest#GrantWriteACP
   */
  readonly grantWriteAcp?: string;

  /**
   * @schema PutObjectAclRequest#Key
   */
  readonly key: string;

  /**
   * @schema PutObjectAclRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema PutObjectAclRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema PutObjectAclRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutObjectAclOutput
 */
export interface PutObjectAclOutput {
  /**
   * @schema PutObjectAclOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema PutObjectLegalHoldRequest
 */
export interface PutObjectLegalHoldRequest {
  /**
   * @schema PutObjectLegalHoldRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutObjectLegalHoldRequest#Key
   */
  readonly key: string;

  /**
   * @schema PutObjectLegalHoldRequest#LegalHold
   */
  readonly legalHold?: ObjectLockLegalHold;

  /**
   * @schema PutObjectLegalHoldRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema PutObjectLegalHoldRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema PutObjectLegalHoldRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutObjectLegalHoldRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutObjectLegalHoldOutput
 */
export interface PutObjectLegalHoldOutput {
  /**
   * @schema PutObjectLegalHoldOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema PutObjectLockConfigurationRequest
 */
export interface PutObjectLockConfigurationRequest {
  /**
   * @schema PutObjectLockConfigurationRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutObjectLockConfigurationRequest#ObjectLockConfiguration
   */
  readonly objectLockConfiguration?: ObjectLockConfiguration;

  /**
   * @schema PutObjectLockConfigurationRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema PutObjectLockConfigurationRequest#Token
   */
  readonly token?: string;

  /**
   * @schema PutObjectLockConfigurationRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutObjectLockConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutObjectLockConfigurationOutput
 */
export interface PutObjectLockConfigurationOutput {
  /**
   * @schema PutObjectLockConfigurationOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema PutObjectRetentionRequest
 */
export interface PutObjectRetentionRequest {
  /**
   * @schema PutObjectRetentionRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutObjectRetentionRequest#Key
   */
  readonly key: string;

  /**
   * @schema PutObjectRetentionRequest#Retention
   */
  readonly retention?: ObjectLockRetention;

  /**
   * @schema PutObjectRetentionRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema PutObjectRetentionRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema PutObjectRetentionRequest#BypassGovernanceRetention
   */
  readonly bypassGovernanceRetention?: boolean;

  /**
   * @schema PutObjectRetentionRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutObjectRetentionRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutObjectRetentionOutput
 */
export interface PutObjectRetentionOutput {
  /**
   * @schema PutObjectRetentionOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema PutObjectTaggingRequest
 */
export interface PutObjectTaggingRequest {
  /**
   * @schema PutObjectTaggingRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutObjectTaggingRequest#Key
   */
  readonly key: string;

  /**
   * @schema PutObjectTaggingRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema PutObjectTaggingRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutObjectTaggingRequest#Tagging
   */
  readonly tagging: Tagging;

  /**
   * @schema PutObjectTaggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema PutObjectTaggingOutput
 */
export interface PutObjectTaggingOutput {
  /**
   * @schema PutObjectTaggingOutput#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema PutPublicAccessBlockRequest
 */
export interface PutPublicAccessBlockRequest {
  /**
   * @schema PutPublicAccessBlockRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema PutPublicAccessBlockRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema PutPublicAccessBlockRequest#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration: PublicAccessBlockConfiguration;

  /**
   * @schema PutPublicAccessBlockRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema RestoreObjectRequest
 */
export interface RestoreObjectRequest {
  /**
   * @schema RestoreObjectRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema RestoreObjectRequest#Key
   */
  readonly key: string;

  /**
   * @schema RestoreObjectRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema RestoreObjectRequest#RestoreRequest
   */
  readonly restoreRequest?: RestoreRequest;

  /**
   * @schema RestoreObjectRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema RestoreObjectRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema RestoreObjectOutput
 */
export interface RestoreObjectOutput {
  /**
   * @schema RestoreObjectOutput#RequestCharged
   */
  readonly requestCharged?: string;

  /**
   * @schema RestoreObjectOutput#RestoreOutputPath
   */
  readonly restoreOutputPath?: string;

}

/**
 * @schema SelectObjectContentRequest
 */
export interface SelectObjectContentRequest {
  /**
   * @schema SelectObjectContentRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema SelectObjectContentRequest#Key
   */
  readonly key: string;

  /**
   * @schema SelectObjectContentRequest#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema SelectObjectContentRequest#SSECustomerKey
   */
  readonly sseCustomerKey?: any;

  /**
   * @schema SelectObjectContentRequest#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema SelectObjectContentRequest#Expression
   */
  readonly expression: string;

  /**
   * @schema SelectObjectContentRequest#ExpressionType
   */
  readonly expressionType: string;

  /**
   * @schema SelectObjectContentRequest#RequestProgress
   */
  readonly requestProgress?: RequestProgress;

  /**
   * @schema SelectObjectContentRequest#InputSerialization
   */
  readonly inputSerialization: InputSerialization;

  /**
   * @schema SelectObjectContentRequest#OutputSerialization
   */
  readonly outputSerialization: OutputSerialization;

  /**
   * @schema SelectObjectContentRequest#ScanRange
   */
  readonly scanRange?: ScanRange;

  /**
   * @schema SelectObjectContentRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema SelectObjectContentOutput
 */
export interface SelectObjectContentOutput {
  /**
   * @schema SelectObjectContentOutput#Payload
   */
  readonly payload?: SelectObjectContentEventStream;

}

/**
 * @schema UploadPartRequest
 */
export interface UploadPartRequest {
  /**
   * @schema UploadPartRequest#Body
   */
  readonly body?: any;

  /**
   * @schema UploadPartRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema UploadPartRequest#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema UploadPartRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema UploadPartRequest#Key
   */
  readonly key: string;

  /**
   * @schema UploadPartRequest#PartNumber
   */
  readonly partNumber: number;

  /**
   * @schema UploadPartRequest#UploadId
   */
  readonly uploadId: string;

  /**
   * @schema UploadPartRequest#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema UploadPartRequest#SSECustomerKey
   */
  readonly sseCustomerKey?: any;

  /**
   * @schema UploadPartRequest#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema UploadPartRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema UploadPartRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * @schema UploadPartOutput
 */
export interface UploadPartOutput {
  /**
   * @schema UploadPartOutput#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema UploadPartOutput#ETag
   */
  readonly eTag?: string;

  /**
   * @schema UploadPartOutput#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema UploadPartOutput#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema UploadPartOutput#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema UploadPartOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema UploadPartCopyRequest
 */
export interface UploadPartCopyRequest {
  /**
   * @schema UploadPartCopyRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema UploadPartCopyRequest#CopySource
   */
  readonly copySource: string;

  /**
   * @schema UploadPartCopyRequest#CopySourceIfMatch
   */
  readonly copySourceIfMatch?: string;

  /**
   * @schema UploadPartCopyRequest#CopySourceIfModifiedSince
   */
  readonly copySourceIfModifiedSince?: string;

  /**
   * @schema UploadPartCopyRequest#CopySourceIfNoneMatch
   */
  readonly copySourceIfNoneMatch?: string;

  /**
   * @schema UploadPartCopyRequest#CopySourceIfUnmodifiedSince
   */
  readonly copySourceIfUnmodifiedSince?: string;

  /**
   * @schema UploadPartCopyRequest#CopySourceRange
   */
  readonly copySourceRange?: string;

  /**
   * @schema UploadPartCopyRequest#Key
   */
  readonly key: string;

  /**
   * @schema UploadPartCopyRequest#PartNumber
   */
  readonly partNumber: number;

  /**
   * @schema UploadPartCopyRequest#UploadId
   */
  readonly uploadId: string;

  /**
   * @schema UploadPartCopyRequest#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema UploadPartCopyRequest#SSECustomerKey
   */
  readonly sseCustomerKey?: any;

  /**
   * @schema UploadPartCopyRequest#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema UploadPartCopyRequest#CopySourceSSECustomerAlgorithm
   */
  readonly copySourceSseCustomerAlgorithm?: string;

  /**
   * @schema UploadPartCopyRequest#CopySourceSSECustomerKey
   */
  readonly copySourceSseCustomerKey?: any;

  /**
   * @schema UploadPartCopyRequest#CopySourceSSECustomerKeyMD5
   */
  readonly copySourceSseCustomerKeyMd5?: string;

  /**
   * @schema UploadPartCopyRequest#RequestPayer
   */
  readonly requestPayer?: string;

  /**
   * @schema UploadPartCopyRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

  /**
   * @schema UploadPartCopyRequest#ExpectedSourceBucketOwner
   */
  readonly expectedSourceBucketOwner?: string;

}

/**
 * @schema UploadPartCopyOutput
 */
export interface UploadPartCopyOutput {
  /**
   * @schema UploadPartCopyOutput#CopySourceVersionId
   */
  readonly copySourceVersionId?: string;

  /**
   * @schema UploadPartCopyOutput#CopyPartResult
   */
  readonly copyPartResult?: CopyPartResult;

  /**
   * @schema UploadPartCopyOutput#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema UploadPartCopyOutput#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema UploadPartCopyOutput#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema UploadPartCopyOutput#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema UploadPartCopyOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * @schema CompletedMultipartUpload
 */
export interface CompletedMultipartUpload {
  /**
   * @schema CompletedMultipartUpload#Parts
   */
  readonly parts?: CompletedPart[];

}

/**
 * @schema CopyObjectResult
 */
export interface CopyObjectResult {
  /**
   * @schema CopyObjectResult#ETag
   */
  readonly eTag?: string;

  /**
   * @schema CopyObjectResult#LastModified
   */
  readonly lastModified?: string;

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
 * @schema Delete
 */
export interface Delete {
  /**
   * @schema Delete#Objects
   */
  readonly objects: ObjectIdentifier[];

  /**
   * @schema Delete#Quiet
   */
  readonly quiet?: boolean;

}

/**
 * @schema DeletedObject
 */
export interface DeletedObject {
  /**
   * @schema DeletedObject#Key
   */
  readonly key?: string;

  /**
   * @schema DeletedObject#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema DeletedObject#DeleteMarker
   */
  readonly deleteMarker?: boolean;

  /**
   * @schema DeletedObject#DeleteMarkerVersionId
   */
  readonly deleteMarkerVersionId?: string;

}

/**
 * @schema Error
 */
export interface Error {
  /**
   * @schema Error#Key
   */
  readonly key?: string;

  /**
   * @schema Error#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema Error#Code
   */
  readonly code?: string;

  /**
   * @schema Error#Message
   */
  readonly message?: string;

}

/**
 * @schema Owner
 */
export interface Owner {
  /**
   * @schema Owner#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema Owner#ID
   */
  readonly id?: string;

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
 * @schema AnalyticsConfiguration
 */
export interface AnalyticsConfiguration {
  /**
   * @schema AnalyticsConfiguration#Id
   */
  readonly id: string;

  /**
   * @schema AnalyticsConfiguration#Filter
   */
  readonly filter?: AnalyticsFilter;

  /**
   * @schema AnalyticsConfiguration#StorageClassAnalysis
   */
  readonly storageClassAnalysis: StorageClassAnalysis;

}

/**
 * @schema CorsRule
 */
export interface CorsRule {
  /**
   * @schema CorsRule#AllowedHeaders
   */
  readonly allowedHeaders?: string[];

  /**
   * @schema CorsRule#AllowedMethods
   */
  readonly allowedMethods: string[];

  /**
   * @schema CorsRule#AllowedOrigins
   */
  readonly allowedOrigins: string[];

  /**
   * @schema CorsRule#ExposeHeaders
   */
  readonly exposeHeaders?: string[];

  /**
   * @schema CorsRule#MaxAgeSeconds
   */
  readonly maxAgeSeconds?: number;

}

/**
 * @schema ServerSideEncryptionConfiguration
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * @schema ServerSideEncryptionConfiguration#Rules
   */
  readonly rules: ServerSideEncryptionRule[];

}

/**
 * @schema IntelligentTieringConfiguration
 */
export interface IntelligentTieringConfiguration {
  /**
   * @schema IntelligentTieringConfiguration#Id
   */
  readonly id: string;

  /**
   * @schema IntelligentTieringConfiguration#Filter
   */
  readonly filter?: IntelligentTieringFilter;

  /**
   * @schema IntelligentTieringConfiguration#Status
   */
  readonly status: string;

  /**
   * @schema IntelligentTieringConfiguration#Tierings
   */
  readonly tierings: Tiering[];

}

/**
 * @schema InventoryConfiguration
 */
export interface InventoryConfiguration {
  /**
   * @schema InventoryConfiguration#Destination
   */
  readonly destination: InventoryDestination;

  /**
   * @schema InventoryConfiguration#IsEnabled
   */
  readonly isEnabled: boolean;

  /**
   * @schema InventoryConfiguration#Filter
   */
  readonly filter?: InventoryFilter;

  /**
   * @schema InventoryConfiguration#Id
   */
  readonly id: string;

  /**
   * @schema InventoryConfiguration#IncludedObjectVersions
   */
  readonly includedObjectVersions: string;

  /**
   * @schema InventoryConfiguration#OptionalFields
   */
  readonly optionalFields?: string[];

  /**
   * @schema InventoryConfiguration#Schedule
   */
  readonly schedule: InventorySchedule;

}

/**
 * @schema Rule
 */
export interface Rule {
  /**
   * @schema Rule#Expiration
   */
  readonly expiration?: LifecycleExpiration;

  /**
   * @schema Rule#ID
   */
  readonly id?: string;

  /**
   * @schema Rule#Prefix
   */
  readonly prefix: string;

  /**
   * @schema Rule#Status
   */
  readonly status: string;

  /**
   * @schema Rule#Transition
   */
  readonly transition?: Transition;

  /**
   * @schema Rule#NoncurrentVersionTransition
   */
  readonly noncurrentVersionTransition?: NoncurrentVersionTransition;

  /**
   * @schema Rule#NoncurrentVersionExpiration
   */
  readonly noncurrentVersionExpiration?: NoncurrentVersionExpiration;

  /**
   * @schema Rule#AbortIncompleteMultipartUpload
   */
  readonly abortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;

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
   * @schema LifecycleRule#Prefix
   */
  readonly prefix?: string;

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
 * @schema LoggingEnabled
 */
export interface LoggingEnabled {
  /**
   * @schema LoggingEnabled#TargetBucket
   */
  readonly targetBucket: string;

  /**
   * @schema LoggingEnabled#TargetGrants
   */
  readonly targetGrants?: TargetGrant[];

  /**
   * @schema LoggingEnabled#TargetPrefix
   */
  readonly targetPrefix: string;

}

/**
 * @schema MetricsConfiguration
 */
export interface MetricsConfiguration {
  /**
   * @schema MetricsConfiguration#Id
   */
  readonly id: string;

  /**
   * @schema MetricsConfiguration#Filter
   */
  readonly filter?: MetricsFilter;

}

/**
 * @schema TopicConfigurationDeprecated
 */
export interface TopicConfigurationDeprecated {
  /**
   * @schema TopicConfigurationDeprecated#Id
   */
  readonly id?: string;

  /**
   * @schema TopicConfigurationDeprecated#Events
   */
  readonly events?: string[];

  /**
   * @schema TopicConfigurationDeprecated#Event
   */
  readonly event?: string;

  /**
   * @schema TopicConfigurationDeprecated#Topic
   */
  readonly topic?: string;

}

/**
 * @schema QueueConfigurationDeprecated
 */
export interface QueueConfigurationDeprecated {
  /**
   * @schema QueueConfigurationDeprecated#Id
   */
  readonly id?: string;

  /**
   * @schema QueueConfigurationDeprecated#Event
   */
  readonly event?: string;

  /**
   * @schema QueueConfigurationDeprecated#Events
   */
  readonly events?: string[];

  /**
   * @schema QueueConfigurationDeprecated#Queue
   */
  readonly queue?: string;

}

/**
 * @schema CloudFunctionConfiguration
 */
export interface CloudFunctionConfiguration {
  /**
   * @schema CloudFunctionConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFunctionConfiguration#Event
   */
  readonly event?: string;

  /**
   * @schema CloudFunctionConfiguration#Events
   */
  readonly events?: string[];

  /**
   * @schema CloudFunctionConfiguration#CloudFunction
   */
  readonly cloudFunction?: string;

  /**
   * @schema CloudFunctionConfiguration#InvocationRole
   */
  readonly invocationRole?: string;

}

/**
 * @schema TopicConfiguration
 */
export interface TopicConfiguration {
  /**
   * @schema TopicConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema TopicConfiguration#TopicArn
   */
  readonly topicArn: string;

  /**
   * @schema TopicConfiguration#Events
   */
  readonly events: string[];

  /**
   * @schema TopicConfiguration#Filter
   */
  readonly filter?: NotificationConfigurationFilter;

}

/**
 * @schema QueueConfiguration
 */
export interface QueueConfiguration {
  /**
   * @schema QueueConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema QueueConfiguration#QueueArn
   */
  readonly queueArn: string;

  /**
   * @schema QueueConfiguration#Events
   */
  readonly events: string[];

  /**
   * @schema QueueConfiguration#Filter
   */
  readonly filter?: NotificationConfigurationFilter;

}

/**
 * @schema LambdaFunctionConfiguration
 */
export interface LambdaFunctionConfiguration {
  /**
   * @schema LambdaFunctionConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema LambdaFunctionConfiguration#LambdaFunctionArn
   */
  readonly lambdaFunctionArn: string;

  /**
   * @schema LambdaFunctionConfiguration#Events
   */
  readonly events: string[];

  /**
   * @schema LambdaFunctionConfiguration#Filter
   */
  readonly filter?: NotificationConfigurationFilter;

}

/**
 * @schema OwnershipControls
 */
export interface OwnershipControls {
  /**
   * @schema OwnershipControls#Rules
   */
  readonly rules: OwnershipControlsRule[];

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
 * @schema ReplicationConfiguration
 */
export interface ReplicationConfiguration {
  /**
   * @schema ReplicationConfiguration#Role
   */
  readonly role: string;

  /**
   * @schema ReplicationConfiguration#Rules
   */
  readonly rules: ReplicationRule[];

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema RedirectAllRequestsTo
 */
export interface RedirectAllRequestsTo {
  /**
   * @schema RedirectAllRequestsTo#HostName
   */
  readonly hostName: string;

  /**
   * @schema RedirectAllRequestsTo#Protocol
   */
  readonly protocol?: string;

}

/**
 * @schema IndexDocument
 */
export interface IndexDocument {
  /**
   * @schema IndexDocument#Suffix
   */
  readonly suffix: string;

}

/**
 * @schema ErrorDocument
 */
export interface ErrorDocument {
  /**
   * @schema ErrorDocument#Key
   */
  readonly key: string;

}

/**
 * @schema RoutingRule
 */
export interface RoutingRule {
  /**
   * @schema RoutingRule#Condition
   */
  readonly condition?: Condition;

  /**
   * @schema RoutingRule#Redirect
   */
  readonly redirect: Redirect;

}

/**
 * @schema ObjectLockLegalHold
 */
export interface ObjectLockLegalHold {
  /**
   * @schema ObjectLockLegalHold#Status
   */
  readonly status?: string;

}

/**
 * @schema ObjectLockConfiguration
 */
export interface ObjectLockConfiguration {
  /**
   * @schema ObjectLockConfiguration#ObjectLockEnabled
   */
  readonly objectLockEnabled?: string;

  /**
   * @schema ObjectLockConfiguration#Rule
   */
  readonly rule?: ObjectLockRule;

}

/**
 * @schema ObjectLockRetention
 */
export interface ObjectLockRetention {
  /**
   * @schema ObjectLockRetention#Mode
   */
  readonly mode?: string;

  /**
   * @schema ObjectLockRetention#RetainUntilDate
   */
  readonly retainUntilDate?: string;

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
 * @schema Bucket
 */
export interface Bucket {
  /**
   * @schema Bucket#Name
   */
  readonly name?: string;

  /**
   * @schema Bucket#CreationDate
   */
  readonly creationDate?: string;

}

/**
 * @schema MultipartUpload
 */
export interface MultipartUpload {
  /**
   * @schema MultipartUpload#UploadId
   */
  readonly uploadId?: string;

  /**
   * @schema MultipartUpload#Key
   */
  readonly key?: string;

  /**
   * @schema MultipartUpload#Initiated
   */
  readonly initiated?: string;

  /**
   * @schema MultipartUpload#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema MultipartUpload#Owner
   */
  readonly owner?: Owner;

  /**
   * @schema MultipartUpload#Initiator
   */
  readonly initiator?: Initiator;

}

/**
 * @schema CommonPrefix
 */
export interface CommonPrefix {
  /**
   * @schema CommonPrefix#Prefix
   */
  readonly prefix?: string;

}

/**
 * @schema ObjectVersion
 */
export interface ObjectVersion {
  /**
   * @schema ObjectVersion#ETag
   */
  readonly eTag?: string;

  /**
   * @schema ObjectVersion#Size
   */
  readonly size?: number;

  /**
   * @schema ObjectVersion#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema ObjectVersion#Key
   */
  readonly key?: string;

  /**
   * @schema ObjectVersion#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema ObjectVersion#IsLatest
   */
  readonly isLatest?: boolean;

  /**
   * @schema ObjectVersion#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema ObjectVersion#Owner
   */
  readonly owner?: Owner;

}

/**
 * @schema DeleteMarkerEntry
 */
export interface DeleteMarkerEntry {
  /**
   * @schema DeleteMarkerEntry#Owner
   */
  readonly owner?: Owner;

  /**
   * @schema DeleteMarkerEntry#Key
   */
  readonly key?: string;

  /**
   * @schema DeleteMarkerEntry#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema DeleteMarkerEntry#IsLatest
   */
  readonly isLatest?: boolean;

  /**
   * @schema DeleteMarkerEntry#LastModified
   */
  readonly lastModified?: string;

}

/**
 * @schema Object
 */
export interface Object {
  /**
   * @schema Object#Key
   */
  readonly key?: string;

  /**
   * @schema Object#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema Object#ETag
   */
  readonly eTag?: string;

  /**
   * @schema Object#Size
   */
  readonly size?: number;

  /**
   * @schema Object#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema Object#Owner
   */
  readonly owner?: Owner;

}

/**
 * @schema Part
 */
export interface Part {
  /**
   * @schema Part#PartNumber
   */
  readonly partNumber?: number;

  /**
   * @schema Part#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema Part#ETag
   */
  readonly eTag?: string;

  /**
   * @schema Part#Size
   */
  readonly size?: number;

}

/**
 * @schema Initiator
 */
export interface Initiator {
  /**
   * @schema Initiator#ID
   */
  readonly id?: string;

  /**
   * @schema Initiator#DisplayName
   */
  readonly displayName?: string;

}

/**
 * @schema AccelerateConfiguration
 */
export interface AccelerateConfiguration {
  /**
   * @schema AccelerateConfiguration#Status
   */
  readonly status?: string;

}

/**
 * @schema AccessControlPolicy
 */
export interface AccessControlPolicy {
  /**
   * @schema AccessControlPolicy#Grants
   */
  readonly grants?: Grant[];

  /**
   * @schema AccessControlPolicy#Owner
   */
  readonly owner?: Owner;

}

/**
 * @schema CorsConfiguration
 */
export interface CorsConfiguration {
  /**
   * @schema CorsConfiguration#CORSRules
   */
  readonly corsRules: CorsRule[];

}

/**
 * @schema LifecycleConfiguration
 */
export interface LifecycleConfiguration {
  /**
   * @schema LifecycleConfiguration#Rules
   */
  readonly rules: Rule[];

}

/**
 * @schema BucketLifecycleConfiguration
 */
export interface BucketLifecycleConfiguration {
  /**
   * @schema BucketLifecycleConfiguration#Rules
   */
  readonly rules: LifecycleRule[];

}

/**
 * @schema BucketLoggingStatus
 */
export interface BucketLoggingStatus {
  /**
   * @schema BucketLoggingStatus#LoggingEnabled
   */
  readonly loggingEnabled?: LoggingEnabled;

}

/**
 * @schema RequestPaymentConfiguration
 */
export interface RequestPaymentConfiguration {
  /**
   * @schema RequestPaymentConfiguration#Payer
   */
  readonly payer: string;

}

/**
 * @schema Tagging
 */
export interface Tagging {
  /**
   * @schema Tagging#TagSet
   */
  readonly tagSet: Tag[];

}

/**
 * @schema VersioningConfiguration
 */
export interface VersioningConfiguration {
  /**
   * @schema VersioningConfiguration#MFADelete
   */
  readonly mfaDelete?: string;

  /**
   * @schema VersioningConfiguration#Status
   */
  readonly status?: string;

}

/**
 * @schema WebsiteConfiguration
 */
export interface WebsiteConfiguration {
  /**
   * @schema WebsiteConfiguration#ErrorDocument
   */
  readonly errorDocument?: ErrorDocument;

  /**
   * @schema WebsiteConfiguration#IndexDocument
   */
  readonly indexDocument?: IndexDocument;

  /**
   * @schema WebsiteConfiguration#RedirectAllRequestsTo
   */
  readonly redirectAllRequestsTo?: RedirectAllRequestsTo;

  /**
   * @schema WebsiteConfiguration#RoutingRules
   */
  readonly routingRules?: RoutingRule[];

}

/**
 * @schema RestoreRequest
 */
export interface RestoreRequest {
  /**
   * @schema RestoreRequest#Days
   */
  readonly days?: number;

  /**
   * @schema RestoreRequest#GlacierJobParameters
   */
  readonly glacierJobParameters?: GlacierJobParameters;

  /**
   * @schema RestoreRequest#Type
   */
  readonly type?: string;

  /**
   * @schema RestoreRequest#Tier
   */
  readonly tier?: string;

  /**
   * @schema RestoreRequest#Description
   */
  readonly description?: string;

  /**
   * @schema RestoreRequest#SelectParameters
   */
  readonly selectParameters?: SelectParameters;

  /**
   * @schema RestoreRequest#OutputLocation
   */
  readonly outputLocation?: OutputLocation;

}

/**
 * @schema RequestProgress
 */
export interface RequestProgress {
  /**
   * @schema RequestProgress#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema InputSerialization
 */
export interface InputSerialization {
  /**
   * @schema InputSerialization#CSV
   */
  readonly csv?: CsvInput;

  /**
   * @schema InputSerialization#CompressionType
   */
  readonly compressionType?: string;

  /**
   * @schema InputSerialization#JSON
   */
  readonly json?: JsonInput;

  /**
   * @schema InputSerialization#Parquet
   */
  readonly parquet?: ParquetInput;

}

/**
 * @schema OutputSerialization
 */
export interface OutputSerialization {
  /**
   * @schema OutputSerialization#CSV
   */
  readonly csv?: CsvOutput;

  /**
   * @schema OutputSerialization#JSON
   */
  readonly json?: JsonOutput;

}

/**
 * @schema ScanRange
 */
export interface ScanRange {
  /**
   * @schema ScanRange#Start
   */
  readonly start?: number;

  /**
   * @schema ScanRange#End
   */
  readonly end?: number;

}

/**
 * @schema SelectObjectContentEventStream
 */
export interface SelectObjectContentEventStream {
  /**
   * @schema SelectObjectContentEventStream#Records
   */
  readonly records?: RecordsEvent;

  /**
   * @schema SelectObjectContentEventStream#Stats
   */
  readonly stats?: StatsEvent;

  /**
   * @schema SelectObjectContentEventStream#Progress
   */
  readonly progress?: ProgressEvent;

  /**
   * @schema SelectObjectContentEventStream#Cont
   */
  readonly cont?: ContinuationEvent;

  /**
   * @schema SelectObjectContentEventStream#End
   */
  readonly end?: EndEvent;

}

/**
 * @schema CopyPartResult
 */
export interface CopyPartResult {
  /**
   * @schema CopyPartResult#ETag
   */
  readonly eTag?: string;

  /**
   * @schema CopyPartResult#LastModified
   */
  readonly lastModified?: string;

}

/**
 * @schema CompletedPart
 */
export interface CompletedPart {
  /**
   * @schema CompletedPart#ETag
   */
  readonly eTag?: string;

  /**
   * @schema CompletedPart#PartNumber
   */
  readonly partNumber?: number;

}

/**
 * @schema ObjectIdentifier
 */
export interface ObjectIdentifier {
  /**
   * @schema ObjectIdentifier#Key
   */
  readonly key: string;

  /**
   * @schema ObjectIdentifier#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema Grantee
 */
export interface Grantee {
  /**
   * @schema Grantee#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema Grantee#EmailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema Grantee#ID
   */
  readonly id?: string;

  /**
   * @schema Grantee#Type
   */
  readonly type: string;

  /**
   * @schema Grantee#URI
   */
  readonly uri?: string;

}

/**
 * @schema AnalyticsFilter
 */
export interface AnalyticsFilter {
  /**
   * @schema AnalyticsFilter#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema AnalyticsFilter#Tag
   */
  readonly tag?: Tag;

  /**
   * @schema AnalyticsFilter#And
   */
  readonly and?: AnalyticsAndOperator;

}

/**
 * @schema StorageClassAnalysis
 */
export interface StorageClassAnalysis {
  /**
   * @schema StorageClassAnalysis#DataExport
   */
  readonly dataExport?: StorageClassAnalysisDataExport;

}

/**
 * @schema ServerSideEncryptionRule
 */
export interface ServerSideEncryptionRule {
  /**
   * @schema ServerSideEncryptionRule#ApplyServerSideEncryptionByDefault
   */
  readonly applyServerSideEncryptionByDefault?: ServerSideEncryptionByDefault;

}

/**
 * @schema IntelligentTieringFilter
 */
export interface IntelligentTieringFilter {
  /**
   * @schema IntelligentTieringFilter#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema IntelligentTieringFilter#Tag
   */
  readonly tag?: Tag;

  /**
   * @schema IntelligentTieringFilter#And
   */
  readonly and?: IntelligentTieringAndOperator;

}

/**
 * @schema Tiering
 */
export interface Tiering {
  /**
   * @schema Tiering#Days
   */
  readonly days: number;

  /**
   * @schema Tiering#AccessTier
   */
  readonly accessTier: string;

}

/**
 * @schema InventoryDestination
 */
export interface InventoryDestination {
  /**
   * @schema InventoryDestination#S3BucketDestination
   */
  readonly s3BucketDestination: InventoryS3BucketDestination;

}

/**
 * @schema InventoryFilter
 */
export interface InventoryFilter {
  /**
   * @schema InventoryFilter#Prefix
   */
  readonly prefix: string;

}

/**
 * @schema InventorySchedule
 */
export interface InventorySchedule {
  /**
   * @schema InventorySchedule#Frequency
   */
  readonly frequency: string;

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
  readonly tag?: Tag;

  /**
   * @schema LifecycleRuleFilter#And
   */
  readonly and?: LifecycleRuleAndOperator;

}

/**
 * @schema TargetGrant
 */
export interface TargetGrant {
  /**
   * @schema TargetGrant#Grantee
   */
  readonly grantee?: Grantee;

  /**
   * @schema TargetGrant#Permission
   */
  readonly permission?: string;

}

/**
 * @schema MetricsFilter
 */
export interface MetricsFilter {
  /**
   * @schema MetricsFilter#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema MetricsFilter#Tag
   */
  readonly tag?: Tag;

  /**
   * @schema MetricsFilter#And
   */
  readonly and?: MetricsAndOperator;

}

/**
 * @schema NotificationConfigurationFilter
 */
export interface NotificationConfigurationFilter {
  /**
   * @schema NotificationConfigurationFilter#Key
   */
  readonly key?: S3KeyFilter;

}

/**
 * @schema OwnershipControlsRule
 */
export interface OwnershipControlsRule {
  /**
   * @schema OwnershipControlsRule#ObjectOwnership
   */
  readonly objectOwnership: string;

}

/**
 * @schema ReplicationRule
 */
export interface ReplicationRule {
  /**
   * @schema ReplicationRule#ID
   */
  readonly id?: string;

  /**
   * @schema ReplicationRule#Priority
   */
  readonly priority?: number;

  /**
   * @schema ReplicationRule#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema ReplicationRule#Filter
   */
  readonly filter?: ReplicationRuleFilter;

  /**
   * @schema ReplicationRule#Status
   */
  readonly status: string;

  /**
   * @schema ReplicationRule#SourceSelectionCriteria
   */
  readonly sourceSelectionCriteria?: SourceSelectionCriteria;

  /**
   * @schema ReplicationRule#ExistingObjectReplication
   */
  readonly existingObjectReplication?: ExistingObjectReplication;

  /**
   * @schema ReplicationRule#Destination
   */
  readonly destination: Destination;

  /**
   * @schema ReplicationRule#DeleteMarkerReplication
   */
  readonly deleteMarkerReplication?: DeleteMarkerReplication;

}

/**
 * @schema Condition
 */
export interface Condition {
  /**
   * @schema Condition#HttpErrorCodeReturnedEquals
   */
  readonly httpErrorCodeReturnedEquals?: string;

  /**
   * @schema Condition#KeyPrefixEquals
   */
  readonly keyPrefixEquals?: string;

}

/**
 * @schema Redirect
 */
export interface Redirect {
  /**
   * @schema Redirect#HostName
   */
  readonly hostName?: string;

  /**
   * @schema Redirect#HttpRedirectCode
   */
  readonly httpRedirectCode?: string;

  /**
   * @schema Redirect#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema Redirect#ReplaceKeyPrefixWith
   */
  readonly replaceKeyPrefixWith?: string;

  /**
   * @schema Redirect#ReplaceKeyWith
   */
  readonly replaceKeyWith?: string;

}

/**
 * @schema ObjectLockRule
 */
export interface ObjectLockRule {
  /**
   * @schema ObjectLockRule#DefaultRetention
   */
  readonly defaultRetention?: DefaultRetention;

}

/**
 * @schema GlacierJobParameters
 */
export interface GlacierJobParameters {
  /**
   * @schema GlacierJobParameters#Tier
   */
  readonly tier: string;

}

/**
 * @schema SelectParameters
 */
export interface SelectParameters {
  /**
   * @schema SelectParameters#InputSerialization
   */
  readonly inputSerialization: InputSerialization;

  /**
   * @schema SelectParameters#ExpressionType
   */
  readonly expressionType: string;

  /**
   * @schema SelectParameters#Expression
   */
  readonly expression: string;

  /**
   * @schema SelectParameters#OutputSerialization
   */
  readonly outputSerialization: OutputSerialization;

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

  /**
   * @schema CsvInput#AllowQuotedRecordDelimiter
   */
  readonly allowQuotedRecordDelimiter?: boolean;

}

/**
 * @schema JsonInput
 */
export interface JsonInput {
  /**
   * @schema JsonInput#Type
   */
  readonly type?: string;

}

/**
 * @schema ParquetInput
 */
export interface ParquetInput {
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
 * @schema JsonOutput
 */
export interface JsonOutput {
  /**
   * @schema JsonOutput#RecordDelimiter
   */
  readonly recordDelimiter?: string;

}

/**
 * @schema RecordsEvent
 */
export interface RecordsEvent {
  /**
   * @schema RecordsEvent#Payload
   */
  readonly payload?: any;

}

/**
 * @schema StatsEvent
 */
export interface StatsEvent {
  /**
   * @schema StatsEvent#Details
   */
  readonly details?: Stats;

}

/**
 * @schema ProgressEvent
 */
export interface ProgressEvent {
  /**
   * @schema ProgressEvent#Details
   */
  readonly details?: Progress;

}

/**
 * @schema ContinuationEvent
 */
export interface ContinuationEvent {
}

/**
 * @schema EndEvent
 */
export interface EndEvent {
}

/**
 * @schema AnalyticsAndOperator
 */
export interface AnalyticsAndOperator {
  /**
   * @schema AnalyticsAndOperator#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema AnalyticsAndOperator#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema StorageClassAnalysisDataExport
 */
export interface StorageClassAnalysisDataExport {
  /**
   * @schema StorageClassAnalysisDataExport#OutputSchemaVersion
   */
  readonly outputSchemaVersion: string;

  /**
   * @schema StorageClassAnalysisDataExport#Destination
   */
  readonly destination: AnalyticsExportDestination;

}

/**
 * @schema ServerSideEncryptionByDefault
 */
export interface ServerSideEncryptionByDefault {
  /**
   * @schema ServerSideEncryptionByDefault#SSEAlgorithm
   */
  readonly sseAlgorithm: string;

  /**
   * @schema ServerSideEncryptionByDefault#KMSMasterKeyID
   */
  readonly kmsMasterKeyId?: string;

}

/**
 * @schema IntelligentTieringAndOperator
 */
export interface IntelligentTieringAndOperator {
  /**
   * @schema IntelligentTieringAndOperator#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema IntelligentTieringAndOperator#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema InventoryS3BucketDestination
 */
export interface InventoryS3BucketDestination {
  /**
   * @schema InventoryS3BucketDestination#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema InventoryS3BucketDestination#Bucket
   */
  readonly bucket: string;

  /**
   * @schema InventoryS3BucketDestination#Format
   */
  readonly format: string;

  /**
   * @schema InventoryS3BucketDestination#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema InventoryS3BucketDestination#Encryption
   */
  readonly encryption?: InventoryEncryption;

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
  readonly tags?: Tag[];

}

/**
 * @schema MetricsAndOperator
 */
export interface MetricsAndOperator {
  /**
   * @schema MetricsAndOperator#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema MetricsAndOperator#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema S3KeyFilter
 */
export interface S3KeyFilter {
  /**
   * @schema S3KeyFilter#FilterRules
   */
  readonly filterRules?: FilterRule[];

}

/**
 * @schema ReplicationRuleFilter
 */
export interface ReplicationRuleFilter {
  /**
   * @schema ReplicationRuleFilter#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema ReplicationRuleFilter#Tag
   */
  readonly tag?: Tag;

  /**
   * @schema ReplicationRuleFilter#And
   */
  readonly and?: ReplicationRuleAndOperator;

}

/**
 * @schema SourceSelectionCriteria
 */
export interface SourceSelectionCriteria {
  /**
   * @schema SourceSelectionCriteria#SseKmsEncryptedObjects
   */
  readonly sseKmsEncryptedObjects?: SseKmsEncryptedObjects;

}

/**
 * @schema ExistingObjectReplication
 */
export interface ExistingObjectReplication {
  /**
   * @schema ExistingObjectReplication#Status
   */
  readonly status: string;

}

/**
 * @schema Destination
 */
export interface Destination {
  /**
   * @schema Destination#Bucket
   */
  readonly bucket: string;

  /**
   * @schema Destination#Account
   */
  readonly account?: string;

  /**
   * @schema Destination#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema Destination#AccessControlTranslation
   */
  readonly accessControlTranslation?: AccessControlTranslation;

  /**
   * @schema Destination#EncryptionConfiguration
   */
  readonly encryptionConfiguration?: EncryptionConfiguration;

  /**
   * @schema Destination#ReplicationTime
   */
  readonly replicationTime?: ReplicationTime;

  /**
   * @schema Destination#Metrics
   */
  readonly metrics?: Metrics;

}

/**
 * @schema DeleteMarkerReplication
 */
export interface DeleteMarkerReplication {
  /**
   * @schema DeleteMarkerReplication#Status
   */
  readonly status?: string;

}

/**
 * @schema DefaultRetention
 */
export interface DefaultRetention {
  /**
   * @schema DefaultRetention#Mode
   */
  readonly mode?: string;

  /**
   * @schema DefaultRetention#Days
   */
  readonly days?: number;

  /**
   * @schema DefaultRetention#Years
   */
  readonly years?: number;

}

/**
 * @schema S3Location
 */
export interface S3Location {
  /**
   * @schema S3Location#BucketName
   */
  readonly bucketName: string;

  /**
   * @schema S3Location#Prefix
   */
  readonly prefix: string;

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
  readonly tagging?: Tagging;

  /**
   * @schema S3Location#UserMetadata
   */
  readonly userMetadata?: MetadataEntry[];

  /**
   * @schema S3Location#StorageClass
   */
  readonly storageClass?: string;

}

/**
 * @schema Stats
 */
export interface Stats {
  /**
   * @schema Stats#BytesScanned
   */
  readonly bytesScanned?: number;

  /**
   * @schema Stats#BytesProcessed
   */
  readonly bytesProcessed?: number;

  /**
   * @schema Stats#BytesReturned
   */
  readonly bytesReturned?: number;

}

/**
 * @schema Progress
 */
export interface Progress {
  /**
   * @schema Progress#BytesScanned
   */
  readonly bytesScanned?: number;

  /**
   * @schema Progress#BytesProcessed
   */
  readonly bytesProcessed?: number;

  /**
   * @schema Progress#BytesReturned
   */
  readonly bytesReturned?: number;

}

/**
 * @schema AnalyticsExportDestination
 */
export interface AnalyticsExportDestination {
  /**
   * @schema AnalyticsExportDestination#S3BucketDestination
   */
  readonly s3BucketDestination: AnalyticsS3BucketDestination;

}

/**
 * @schema InventoryEncryption
 */
export interface InventoryEncryption {
  /**
   * @schema InventoryEncryption#SSES3
   */
  readonly sses3?: Sses3;

  /**
   * @schema InventoryEncryption#SSEKMS
   */
  readonly ssekms?: Ssekms;

}

/**
 * @schema FilterRule
 */
export interface FilterRule {
  /**
   * @schema FilterRule#Name
   */
  readonly name?: string;

  /**
   * @schema FilterRule#Value
   */
  readonly value?: string;

}

/**
 * @schema ReplicationRuleAndOperator
 */
export interface ReplicationRuleAndOperator {
  /**
   * @schema ReplicationRuleAndOperator#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema ReplicationRuleAndOperator#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema SseKmsEncryptedObjects
 */
export interface SseKmsEncryptedObjects {
  /**
   * @schema SseKmsEncryptedObjects#Status
   */
  readonly status: string;

}

/**
 * @schema AccessControlTranslation
 */
export interface AccessControlTranslation {
  /**
   * @schema AccessControlTranslation#Owner
   */
  readonly owner: string;

}

/**
 * @schema EncryptionConfiguration
 */
export interface EncryptionConfiguration {
  /**
   * @schema EncryptionConfiguration#ReplicaKmsKeyID
   */
  readonly replicaKmsKeyId?: string;

}

/**
 * @schema ReplicationTime
 */
export interface ReplicationTime {
  /**
   * @schema ReplicationTime#Status
   */
  readonly status: string;

  /**
   * @schema ReplicationTime#Time
   */
  readonly time: ReplicationTimeValue;

}

/**
 * @schema Metrics
 */
export interface Metrics {
  /**
   * @schema Metrics#Status
   */
  readonly status: string;

  /**
   * @schema Metrics#EventThreshold
   */
  readonly eventThreshold?: ReplicationTimeValue;

}

/**
 * @schema Encryption
 */
export interface Encryption {
  /**
   * @schema Encryption#EncryptionType
   */
  readonly encryptionType: string;

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
 * @schema MetadataEntry
 */
export interface MetadataEntry {
  /**
   * @schema MetadataEntry#Name
   */
  readonly name?: string;

  /**
   * @schema MetadataEntry#Value
   */
  readonly value?: string;

}

/**
 * @schema AnalyticsS3BucketDestination
 */
export interface AnalyticsS3BucketDestination {
  /**
   * @schema AnalyticsS3BucketDestination#Format
   */
  readonly format: string;

  /**
   * @schema AnalyticsS3BucketDestination#BucketAccountId
   */
  readonly bucketAccountId?: string;

  /**
   * @schema AnalyticsS3BucketDestination#Bucket
   */
  readonly bucket: string;

  /**
   * @schema AnalyticsS3BucketDestination#Prefix
   */
  readonly prefix?: string;

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
 * @schema ReplicationTimeValue
 */
export interface ReplicationTimeValue {
  /**
   * @schema ReplicationTimeValue#Minutes
   */
  readonly minutes?: number;

}
