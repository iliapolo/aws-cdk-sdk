/**
 * @schema S3AbortMultipartUploadRequest
 */
export interface S3AbortMultipartUploadRequest {
  /**
   * @schema S3AbortMultipartUploadRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3AbortMultipartUploadRequest#Key
   */
  readonly key?: string;

  /**
   * @schema S3AbortMultipartUploadRequest#UploadId
   */
  readonly uploadId?: string;

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
 * Converts an object of type 'S3AbortMultipartUploadRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3AbortMultipartUploadRequest(obj: S3AbortMultipartUploadRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
    'UploadId': obj.uploadId,
    'RequestPayer': obj.requestPayer,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3AbortMultipartUploadOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3AbortMultipartUploadOutput(obj: S3AbortMultipartUploadOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestCharged': obj.requestCharged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3CompleteMultipartUploadRequest
 */
export interface S3CompleteMultipartUploadRequest {
  /**
   * @schema S3CompleteMultipartUploadRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3CompleteMultipartUploadRequest#Key
   */
  readonly key?: string;

  /**
   * @schema S3CompleteMultipartUploadRequest#MultipartUpload
   */
  readonly multipartUpload?: S3CompletedMultipartUpload;

  /**
   * @schema S3CompleteMultipartUploadRequest#UploadId
   */
  readonly uploadId?: string;

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
 * Converts an object of type 'S3CompleteMultipartUploadRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CompleteMultipartUploadRequest(obj: S3CompleteMultipartUploadRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
    'MultipartUpload': toJson_S3CompletedMultipartUpload(obj.multipartUpload),
    'UploadId': obj.uploadId,
    'RequestPayer': obj.requestPayer,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema S3CompleteMultipartUploadOutput#BucketKeyEnabled
   */
  readonly bucketKeyEnabled?: boolean;

  /**
   * @schema S3CompleteMultipartUploadOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * Converts an object of type 'S3CompleteMultipartUploadOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CompleteMultipartUploadOutput(obj: S3CompleteMultipartUploadOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Location': obj.location,
    'Bucket': obj.bucket,
    'Key': obj.key,
    'Expiration': obj.expiration,
    'ETag': obj.eTag,
    'ServerSideEncryption': obj.serverSideEncryption,
    'VersionId': obj.versionId,
    'SSEKMSKeyId': obj.ssekmsKeyId,
    'BucketKeyEnabled': obj.bucketKeyEnabled,
    'RequestCharged': obj.requestCharged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly bucket?: string;

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
  readonly copySource?: string;

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
  readonly key?: string;

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
   * @schema S3CopyObjectRequest#BucketKeyEnabled
   */
  readonly bucketKeyEnabled?: boolean;

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
 * Converts an object of type 'S3CopyObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CopyObjectRequest(obj: S3CopyObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ACL': obj.acl,
    'Bucket': obj.bucket,
    'CacheControl': obj.cacheControl,
    'ContentDisposition': obj.contentDisposition,
    'ContentEncoding': obj.contentEncoding,
    'ContentLanguage': obj.contentLanguage,
    'ContentType': obj.contentType,
    'CopySource': obj.copySource,
    'CopySourceIfMatch': obj.copySourceIfMatch,
    'CopySourceIfModifiedSince': obj.copySourceIfModifiedSince,
    'CopySourceIfNoneMatch': obj.copySourceIfNoneMatch,
    'CopySourceIfUnmodifiedSince': obj.copySourceIfUnmodifiedSince,
    'Expires': obj.expires,
    'GrantFullControl': obj.grantFullControl,
    'GrantRead': obj.grantRead,
    'GrantReadACP': obj.grantReadAcp,
    'GrantWriteACP': obj.grantWriteAcp,
    'Key': obj.key,
    'Metadata': ((obj.metadata) === undefined) ? undefined : (Object.entries(obj.metadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'MetadataDirective': obj.metadataDirective,
    'TaggingDirective': obj.taggingDirective,
    'ServerSideEncryption': obj.serverSideEncryption,
    'StorageClass': obj.storageClass,
    'WebsiteRedirectLocation': obj.websiteRedirectLocation,
    'SSECustomerAlgorithm': obj.sseCustomerAlgorithm,
    'SSECustomerKey': obj.sseCustomerKey,
    'SSECustomerKeyMD5': obj.sseCustomerKeyMd5,
    'SSEKMSKeyId': obj.ssekmsKeyId,
    'SSEKMSEncryptionContext': obj.ssekmsEncryptionContext,
    'BucketKeyEnabled': obj.bucketKeyEnabled,
    'CopySourceSSECustomerAlgorithm': obj.copySourceSseCustomerAlgorithm,
    'CopySourceSSECustomerKey': obj.copySourceSseCustomerKey,
    'CopySourceSSECustomerKeyMD5': obj.copySourceSseCustomerKeyMd5,
    'RequestPayer': obj.requestPayer,
    'Tagging': obj.tagging,
    'ObjectLockMode': obj.objectLockMode,
    'ObjectLockRetainUntilDate': obj.objectLockRetainUntilDate,
    'ObjectLockLegalHoldStatus': obj.objectLockLegalHoldStatus,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
    'ExpectedSourceBucketOwner': obj.expectedSourceBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema S3CopyObjectOutput#BucketKeyEnabled
   */
  readonly bucketKeyEnabled?: boolean;

  /**
   * @schema S3CopyObjectOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * Converts an object of type 'S3CopyObjectOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CopyObjectOutput(obj: S3CopyObjectOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CopyObjectResult': toJson_S3CopyObjectResult(obj.copyObjectResult),
    'Expiration': obj.expiration,
    'CopySourceVersionId': obj.copySourceVersionId,
    'VersionId': obj.versionId,
    'ServerSideEncryption': obj.serverSideEncryption,
    'SSECustomerAlgorithm': obj.sseCustomerAlgorithm,
    'SSECustomerKeyMD5': obj.sseCustomerKeyMd5,
    'SSEKMSKeyId': obj.ssekmsKeyId,
    'SSEKMSEncryptionContext': obj.ssekmsEncryptionContext,
    'BucketKeyEnabled': obj.bucketKeyEnabled,
    'RequestCharged': obj.requestCharged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly bucket?: string;

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
 * Converts an object of type 'S3CreateBucketRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CreateBucketRequest(obj: S3CreateBucketRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ACL': obj.acl,
    'Bucket': obj.bucket,
    'CreateBucketConfiguration': toJson_S3CreateBucketConfiguration(obj.createBucketConfiguration),
    'GrantFullControl': obj.grantFullControl,
    'GrantRead': obj.grantRead,
    'GrantReadACP': obj.grantReadAcp,
    'GrantWrite': obj.grantWrite,
    'GrantWriteACP': obj.grantWriteAcp,
    'ObjectLockEnabledForBucket': obj.objectLockEnabledForBucket,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3CreateBucketOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CreateBucketOutput(obj: S3CreateBucketOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly bucket?: string;

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
  readonly key?: string;

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
   * @schema S3CreateMultipartUploadRequest#BucketKeyEnabled
   */
  readonly bucketKeyEnabled?: boolean;

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
 * Converts an object of type 'S3CreateMultipartUploadRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CreateMultipartUploadRequest(obj: S3CreateMultipartUploadRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ACL': obj.acl,
    'Bucket': obj.bucket,
    'CacheControl': obj.cacheControl,
    'ContentDisposition': obj.contentDisposition,
    'ContentEncoding': obj.contentEncoding,
    'ContentLanguage': obj.contentLanguage,
    'ContentType': obj.contentType,
    'Expires': obj.expires,
    'GrantFullControl': obj.grantFullControl,
    'GrantRead': obj.grantRead,
    'GrantReadACP': obj.grantReadAcp,
    'GrantWriteACP': obj.grantWriteAcp,
    'Key': obj.key,
    'Metadata': ((obj.metadata) === undefined) ? undefined : (Object.entries(obj.metadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ServerSideEncryption': obj.serverSideEncryption,
    'StorageClass': obj.storageClass,
    'WebsiteRedirectLocation': obj.websiteRedirectLocation,
    'SSECustomerAlgorithm': obj.sseCustomerAlgorithm,
    'SSECustomerKey': obj.sseCustomerKey,
    'SSECustomerKeyMD5': obj.sseCustomerKeyMd5,
    'SSEKMSKeyId': obj.ssekmsKeyId,
    'SSEKMSEncryptionContext': obj.ssekmsEncryptionContext,
    'BucketKeyEnabled': obj.bucketKeyEnabled,
    'RequestPayer': obj.requestPayer,
    'Tagging': obj.tagging,
    'ObjectLockMode': obj.objectLockMode,
    'ObjectLockRetainUntilDate': obj.objectLockRetainUntilDate,
    'ObjectLockLegalHoldStatus': obj.objectLockLegalHoldStatus,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema S3CreateMultipartUploadOutput#BucketKeyEnabled
   */
  readonly bucketKeyEnabled?: boolean;

  /**
   * @schema S3CreateMultipartUploadOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * Converts an object of type 'S3CreateMultipartUploadOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CreateMultipartUploadOutput(obj: S3CreateMultipartUploadOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AbortDate': obj.abortDate,
    'AbortRuleId': obj.abortRuleId,
    'Bucket': obj.bucket,
    'Key': obj.key,
    'UploadId': obj.uploadId,
    'ServerSideEncryption': obj.serverSideEncryption,
    'SSECustomerAlgorithm': obj.sseCustomerAlgorithm,
    'SSECustomerKeyMD5': obj.sseCustomerKeyMd5,
    'SSEKMSKeyId': obj.ssekmsKeyId,
    'SSEKMSEncryptionContext': obj.ssekmsEncryptionContext,
    'BucketKeyEnabled': obj.bucketKeyEnabled,
    'RequestCharged': obj.requestCharged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3DeleteBucketRequest
 */
export interface S3DeleteBucketRequest {
  /**
   * @schema S3DeleteBucketRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DeleteBucketRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3DeleteBucketRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteBucketRequest(obj: S3DeleteBucketRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3DeleteBucketAnalyticsConfigurationRequest
 */
export interface S3DeleteBucketAnalyticsConfigurationRequest {
  /**
   * @schema S3DeleteBucketAnalyticsConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DeleteBucketAnalyticsConfigurationRequest#Id
   */
  readonly id?: string;

  /**
   * @schema S3DeleteBucketAnalyticsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3DeleteBucketAnalyticsConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteBucketAnalyticsConfigurationRequest(obj: S3DeleteBucketAnalyticsConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Id': obj.id,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3DeleteBucketCorsRequest
 */
export interface S3DeleteBucketCorsRequest {
  /**
   * @schema S3DeleteBucketCorsRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DeleteBucketCorsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3DeleteBucketCorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteBucketCorsRequest(obj: S3DeleteBucketCorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3DeleteBucketEncryptionRequest
 */
export interface S3DeleteBucketEncryptionRequest {
  /**
   * @schema S3DeleteBucketEncryptionRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DeleteBucketEncryptionRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3DeleteBucketEncryptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteBucketEncryptionRequest(obj: S3DeleteBucketEncryptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3DeleteBucketIntelligentTieringConfigurationRequest
 */
export interface S3DeleteBucketIntelligentTieringConfigurationRequest {
  /**
   * @schema S3DeleteBucketIntelligentTieringConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DeleteBucketIntelligentTieringConfigurationRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'S3DeleteBucketIntelligentTieringConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteBucketIntelligentTieringConfigurationRequest(obj: S3DeleteBucketIntelligentTieringConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3DeleteBucketInventoryConfigurationRequest
 */
export interface S3DeleteBucketInventoryConfigurationRequest {
  /**
   * @schema S3DeleteBucketInventoryConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DeleteBucketInventoryConfigurationRequest#Id
   */
  readonly id?: string;

  /**
   * @schema S3DeleteBucketInventoryConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3DeleteBucketInventoryConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteBucketInventoryConfigurationRequest(obj: S3DeleteBucketInventoryConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Id': obj.id,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3DeleteBucketLifecycleRequest
 */
export interface S3DeleteBucketLifecycleRequest {
  /**
   * @schema S3DeleteBucketLifecycleRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DeleteBucketLifecycleRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3DeleteBucketLifecycleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteBucketLifecycleRequest(obj: S3DeleteBucketLifecycleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3DeleteBucketMetricsConfigurationRequest
 */
export interface S3DeleteBucketMetricsConfigurationRequest {
  /**
   * @schema S3DeleteBucketMetricsConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DeleteBucketMetricsConfigurationRequest#Id
   */
  readonly id?: string;

  /**
   * @schema S3DeleteBucketMetricsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3DeleteBucketMetricsConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteBucketMetricsConfigurationRequest(obj: S3DeleteBucketMetricsConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Id': obj.id,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3DeleteBucketOwnershipControlsRequest
 */
export interface S3DeleteBucketOwnershipControlsRequest {
  /**
   * @schema S3DeleteBucketOwnershipControlsRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DeleteBucketOwnershipControlsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3DeleteBucketOwnershipControlsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteBucketOwnershipControlsRequest(obj: S3DeleteBucketOwnershipControlsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3DeleteBucketPolicyRequest
 */
export interface S3DeleteBucketPolicyRequest {
  /**
   * @schema S3DeleteBucketPolicyRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DeleteBucketPolicyRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3DeleteBucketPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteBucketPolicyRequest(obj: S3DeleteBucketPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3DeleteBucketReplicationRequest
 */
export interface S3DeleteBucketReplicationRequest {
  /**
   * @schema S3DeleteBucketReplicationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DeleteBucketReplicationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3DeleteBucketReplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteBucketReplicationRequest(obj: S3DeleteBucketReplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3DeleteBucketTaggingRequest
 */
export interface S3DeleteBucketTaggingRequest {
  /**
   * @schema S3DeleteBucketTaggingRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DeleteBucketTaggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3DeleteBucketTaggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteBucketTaggingRequest(obj: S3DeleteBucketTaggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3DeleteBucketWebsiteRequest
 */
export interface S3DeleteBucketWebsiteRequest {
  /**
   * @schema S3DeleteBucketWebsiteRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DeleteBucketWebsiteRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3DeleteBucketWebsiteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteBucketWebsiteRequest(obj: S3DeleteBucketWebsiteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3DeleteObjectRequest
 */
export interface S3DeleteObjectRequest {
  /**
   * @schema S3DeleteObjectRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DeleteObjectRequest#Key
   */
  readonly key?: string;

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
 * Converts an object of type 'S3DeleteObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteObjectRequest(obj: S3DeleteObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
    'MFA': obj.mfa,
    'VersionId': obj.versionId,
    'RequestPayer': obj.requestPayer,
    'BypassGovernanceRetention': obj.bypassGovernanceRetention,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3DeleteObjectOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteObjectOutput(obj: S3DeleteObjectOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeleteMarker': obj.deleteMarker,
    'VersionId': obj.versionId,
    'RequestCharged': obj.requestCharged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3DeleteObjectTaggingRequest
 */
export interface S3DeleteObjectTaggingRequest {
  /**
   * @schema S3DeleteObjectTaggingRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DeleteObjectTaggingRequest#Key
   */
  readonly key?: string;

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
 * Converts an object of type 'S3DeleteObjectTaggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteObjectTaggingRequest(obj: S3DeleteObjectTaggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
    'VersionId': obj.versionId,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3DeleteObjectTaggingOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteObjectTaggingOutput(obj: S3DeleteObjectTaggingOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3DeleteObjectsRequest
 */
export interface S3DeleteObjectsRequest {
  /**
   * @schema S3DeleteObjectsRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DeleteObjectsRequest#Delete
   */
  readonly delete?: S3Delete;

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
 * Converts an object of type 'S3DeleteObjectsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteObjectsRequest(obj: S3DeleteObjectsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Delete': toJson_S3Delete(obj.delete),
    'MFA': obj.mfa,
    'RequestPayer': obj.requestPayer,
    'BypassGovernanceRetention': obj.bypassGovernanceRetention,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3DeleteObjectsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteObjectsOutput(obj: S3DeleteObjectsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Deleted': obj.deleted?.map(y => toJson_S3DeletedObject(y)),
    'RequestCharged': obj.requestCharged,
    'Errors': obj.errors?.map(y => toJson_S3Error(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3DeletePublicAccessBlockRequest
 */
export interface S3DeletePublicAccessBlockRequest {
  /**
   * @schema S3DeletePublicAccessBlockRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3DeletePublicAccessBlockRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3DeletePublicAccessBlockRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeletePublicAccessBlockRequest(obj: S3DeletePublicAccessBlockRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketAccelerateConfigurationRequest
 */
export interface S3GetBucketAccelerateConfigurationRequest {
  /**
   * @schema S3GetBucketAccelerateConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketAccelerateConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketAccelerateConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketAccelerateConfigurationRequest(obj: S3GetBucketAccelerateConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketAccelerateConfigurationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketAccelerateConfigurationOutput(obj: S3GetBucketAccelerateConfigurationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketAclRequest
 */
export interface S3GetBucketAclRequest {
  /**
   * @schema S3GetBucketAclRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketAclRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketAclRequest(obj: S3GetBucketAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketAclOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketAclOutput(obj: S3GetBucketAclOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Owner': toJson_S3Owner(obj.owner),
    'Grants': obj.grants?.map(y => toJson_S3Grant(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketAnalyticsConfigurationRequest
 */
export interface S3GetBucketAnalyticsConfigurationRequest {
  /**
   * @schema S3GetBucketAnalyticsConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketAnalyticsConfigurationRequest#Id
   */
  readonly id?: string;

  /**
   * @schema S3GetBucketAnalyticsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketAnalyticsConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketAnalyticsConfigurationRequest(obj: S3GetBucketAnalyticsConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Id': obj.id,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketAnalyticsConfigurationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketAnalyticsConfigurationOutput(obj: S3GetBucketAnalyticsConfigurationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnalyticsConfiguration': toJson_S3AnalyticsConfiguration(obj.analyticsConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketCorsRequest
 */
export interface S3GetBucketCorsRequest {
  /**
   * @schema S3GetBucketCorsRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketCorsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketCorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketCorsRequest(obj: S3GetBucketCorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketCorsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketCorsOutput(obj: S3GetBucketCorsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CORSRules': obj.corsRules?.map(y => toJson_S3CorsRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketEncryptionRequest
 */
export interface S3GetBucketEncryptionRequest {
  /**
   * @schema S3GetBucketEncryptionRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketEncryptionRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketEncryptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketEncryptionRequest(obj: S3GetBucketEncryptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketEncryptionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketEncryptionOutput(obj: S3GetBucketEncryptionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerSideEncryptionConfiguration': toJson_S3ServerSideEncryptionConfiguration(obj.serverSideEncryptionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketIntelligentTieringConfigurationRequest
 */
export interface S3GetBucketIntelligentTieringConfigurationRequest {
  /**
   * @schema S3GetBucketIntelligentTieringConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketIntelligentTieringConfigurationRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'S3GetBucketIntelligentTieringConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketIntelligentTieringConfigurationRequest(obj: S3GetBucketIntelligentTieringConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketIntelligentTieringConfigurationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketIntelligentTieringConfigurationOutput(obj: S3GetBucketIntelligentTieringConfigurationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IntelligentTieringConfiguration': toJson_S3IntelligentTieringConfiguration(obj.intelligentTieringConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketInventoryConfigurationRequest
 */
export interface S3GetBucketInventoryConfigurationRequest {
  /**
   * @schema S3GetBucketInventoryConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketInventoryConfigurationRequest#Id
   */
  readonly id?: string;

  /**
   * @schema S3GetBucketInventoryConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketInventoryConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketInventoryConfigurationRequest(obj: S3GetBucketInventoryConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Id': obj.id,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketInventoryConfigurationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketInventoryConfigurationOutput(obj: S3GetBucketInventoryConfigurationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InventoryConfiguration': toJson_S3InventoryConfiguration(obj.inventoryConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketLifecycleRequest
 */
export interface S3GetBucketLifecycleRequest {
  /**
   * @schema S3GetBucketLifecycleRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketLifecycleRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketLifecycleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketLifecycleRequest(obj: S3GetBucketLifecycleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketLifecycleOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketLifecycleOutput(obj: S3GetBucketLifecycleOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rules': obj.rules?.map(y => toJson_S3Rule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketLifecycleConfigurationRequest
 */
export interface S3GetBucketLifecycleConfigurationRequest {
  /**
   * @schema S3GetBucketLifecycleConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketLifecycleConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketLifecycleConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketLifecycleConfigurationRequest(obj: S3GetBucketLifecycleConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketLifecycleConfigurationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketLifecycleConfigurationOutput(obj: S3GetBucketLifecycleConfigurationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rules': obj.rules?.map(y => toJson_S3LifecycleRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketLocationRequest
 */
export interface S3GetBucketLocationRequest {
  /**
   * @schema S3GetBucketLocationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketLocationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketLocationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketLocationRequest(obj: S3GetBucketLocationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketLocationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketLocationOutput(obj: S3GetBucketLocationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationConstraint': obj.locationConstraint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketLoggingRequest
 */
export interface S3GetBucketLoggingRequest {
  /**
   * @schema S3GetBucketLoggingRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketLoggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketLoggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketLoggingRequest(obj: S3GetBucketLoggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketLoggingOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketLoggingOutput(obj: S3GetBucketLoggingOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggingEnabled': toJson_S3LoggingEnabled(obj.loggingEnabled),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketMetricsConfigurationRequest
 */
export interface S3GetBucketMetricsConfigurationRequest {
  /**
   * @schema S3GetBucketMetricsConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketMetricsConfigurationRequest#Id
   */
  readonly id?: string;

  /**
   * @schema S3GetBucketMetricsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketMetricsConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketMetricsConfigurationRequest(obj: S3GetBucketMetricsConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Id': obj.id,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketMetricsConfigurationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketMetricsConfigurationOutput(obj: S3GetBucketMetricsConfigurationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricsConfiguration': toJson_S3MetricsConfiguration(obj.metricsConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketNotificationConfigurationRequest
 */
export interface S3GetBucketNotificationConfigurationRequest {
  /**
   * @schema S3GetBucketNotificationConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketNotificationConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketNotificationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketNotificationConfigurationRequest(obj: S3GetBucketNotificationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3NotificationConfigurationDeprecated' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3NotificationConfigurationDeprecated(obj: S3NotificationConfigurationDeprecated | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicConfiguration': toJson_S3TopicConfigurationDeprecated(obj.topicConfiguration),
    'QueueConfiguration': toJson_S3QueueConfigurationDeprecated(obj.queueConfiguration),
    'CloudFunctionConfiguration': toJson_S3CloudFunctionConfiguration(obj.cloudFunctionConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3NotificationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3NotificationConfiguration(obj: S3NotificationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicConfigurations': obj.topicConfigurations?.map(y => toJson_S3TopicConfiguration(y)),
    'QueueConfigurations': obj.queueConfigurations?.map(y => toJson_S3QueueConfiguration(y)),
    'LambdaFunctionConfigurations': obj.lambdaFunctionConfigurations?.map(y => toJson_S3LambdaFunctionConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketOwnershipControlsRequest
 */
export interface S3GetBucketOwnershipControlsRequest {
  /**
   * @schema S3GetBucketOwnershipControlsRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketOwnershipControlsRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketOwnershipControlsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketOwnershipControlsRequest(obj: S3GetBucketOwnershipControlsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketOwnershipControlsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketOwnershipControlsOutput(obj: S3GetBucketOwnershipControlsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OwnershipControls': toJson_S3OwnershipControls(obj.ownershipControls),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketPolicyRequest
 */
export interface S3GetBucketPolicyRequest {
  /**
   * @schema S3GetBucketPolicyRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketPolicyRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketPolicyRequest(obj: S3GetBucketPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketPolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketPolicyOutput(obj: S3GetBucketPolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketPolicyStatusRequest
 */
export interface S3GetBucketPolicyStatusRequest {
  /**
   * @schema S3GetBucketPolicyStatusRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketPolicyStatusRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketPolicyStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketPolicyStatusRequest(obj: S3GetBucketPolicyStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketPolicyStatusOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketPolicyStatusOutput(obj: S3GetBucketPolicyStatusOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyStatus': toJson_S3PolicyStatus(obj.policyStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketReplicationRequest
 */
export interface S3GetBucketReplicationRequest {
  /**
   * @schema S3GetBucketReplicationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketReplicationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketReplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketReplicationRequest(obj: S3GetBucketReplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketReplicationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketReplicationOutput(obj: S3GetBucketReplicationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicationConfiguration': toJson_S3ReplicationConfiguration(obj.replicationConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketRequestPaymentRequest
 */
export interface S3GetBucketRequestPaymentRequest {
  /**
   * @schema S3GetBucketRequestPaymentRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketRequestPaymentRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketRequestPaymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketRequestPaymentRequest(obj: S3GetBucketRequestPaymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketRequestPaymentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketRequestPaymentOutput(obj: S3GetBucketRequestPaymentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Payer': obj.payer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketTaggingRequest
 */
export interface S3GetBucketTaggingRequest {
  /**
   * @schema S3GetBucketTaggingRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketTaggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketTaggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketTaggingRequest(obj: S3GetBucketTaggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketTaggingOutput
 */
export interface S3GetBucketTaggingOutput {
  /**
   * @schema S3GetBucketTaggingOutput#TagSet
   */
  readonly tagSet?: S3Tag[];

}

/**
 * Converts an object of type 'S3GetBucketTaggingOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketTaggingOutput(obj: S3GetBucketTaggingOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagSet': obj.tagSet?.map(y => toJson_S3Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketVersioningRequest
 */
export interface S3GetBucketVersioningRequest {
  /**
   * @schema S3GetBucketVersioningRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketVersioningRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketVersioningRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketVersioningRequest(obj: S3GetBucketVersioningRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketVersioningOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketVersioningOutput(obj: S3GetBucketVersioningOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'MFADelete': obj.mfaDelete,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetBucketWebsiteRequest
 */
export interface S3GetBucketWebsiteRequest {
  /**
   * @schema S3GetBucketWebsiteRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetBucketWebsiteRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetBucketWebsiteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketWebsiteRequest(obj: S3GetBucketWebsiteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetBucketWebsiteOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetBucketWebsiteOutput(obj: S3GetBucketWebsiteOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RedirectAllRequestsTo': toJson_S3RedirectAllRequestsTo(obj.redirectAllRequestsTo),
    'IndexDocument': toJson_S3IndexDocument(obj.indexDocument),
    'ErrorDocument': toJson_S3ErrorDocument(obj.errorDocument),
    'RoutingRules': obj.routingRules?.map(y => toJson_S3RoutingRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetObjectRequest
 */
export interface S3GetObjectRequest {
  /**
   * @schema S3GetObjectRequest#Bucket
   */
  readonly bucket?: string;

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
  readonly key?: string;

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
 * Converts an object of type 'S3GetObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetObjectRequest(obj: S3GetObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'IfMatch': obj.ifMatch,
    'IfModifiedSince': obj.ifModifiedSince,
    'IfNoneMatch': obj.ifNoneMatch,
    'IfUnmodifiedSince': obj.ifUnmodifiedSince,
    'Key': obj.key,
    'Range': obj.range,
    'ResponseCacheControl': obj.responseCacheControl,
    'ResponseContentDisposition': obj.responseContentDisposition,
    'ResponseContentEncoding': obj.responseContentEncoding,
    'ResponseContentLanguage': obj.responseContentLanguage,
    'ResponseContentType': obj.responseContentType,
    'ResponseExpires': obj.responseExpires,
    'VersionId': obj.versionId,
    'SSECustomerAlgorithm': obj.sseCustomerAlgorithm,
    'SSECustomerKey': obj.sseCustomerKey,
    'SSECustomerKeyMD5': obj.sseCustomerKeyMd5,
    'RequestPayer': obj.requestPayer,
    'PartNumber': obj.partNumber,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema S3GetObjectOutput#BucketKeyEnabled
   */
  readonly bucketKeyEnabled?: boolean;

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
 * Converts an object of type 'S3GetObjectOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetObjectOutput(obj: S3GetObjectOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Body': obj.body,
    'DeleteMarker': obj.deleteMarker,
    'AcceptRanges': obj.acceptRanges,
    'Expiration': obj.expiration,
    'Restore': obj.restore,
    'LastModified': obj.lastModified,
    'ContentLength': obj.contentLength,
    'ETag': obj.eTag,
    'MissingMeta': obj.missingMeta,
    'VersionId': obj.versionId,
    'CacheControl': obj.cacheControl,
    'ContentDisposition': obj.contentDisposition,
    'ContentEncoding': obj.contentEncoding,
    'ContentLanguage': obj.contentLanguage,
    'ContentRange': obj.contentRange,
    'ContentType': obj.contentType,
    'Expires': obj.expires,
    'WebsiteRedirectLocation': obj.websiteRedirectLocation,
    'ServerSideEncryption': obj.serverSideEncryption,
    'Metadata': ((obj.metadata) === undefined) ? undefined : (Object.entries(obj.metadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'SSECustomerAlgorithm': obj.sseCustomerAlgorithm,
    'SSECustomerKeyMD5': obj.sseCustomerKeyMd5,
    'SSEKMSKeyId': obj.ssekmsKeyId,
    'BucketKeyEnabled': obj.bucketKeyEnabled,
    'StorageClass': obj.storageClass,
    'RequestCharged': obj.requestCharged,
    'ReplicationStatus': obj.replicationStatus,
    'PartsCount': obj.partsCount,
    'TagCount': obj.tagCount,
    'ObjectLockMode': obj.objectLockMode,
    'ObjectLockRetainUntilDate': obj.objectLockRetainUntilDate,
    'ObjectLockLegalHoldStatus': obj.objectLockLegalHoldStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetObjectAclRequest
 */
export interface S3GetObjectAclRequest {
  /**
   * @schema S3GetObjectAclRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetObjectAclRequest#Key
   */
  readonly key?: string;

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
 * Converts an object of type 'S3GetObjectAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetObjectAclRequest(obj: S3GetObjectAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
    'VersionId': obj.versionId,
    'RequestPayer': obj.requestPayer,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetObjectAclOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetObjectAclOutput(obj: S3GetObjectAclOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Owner': toJson_S3Owner(obj.owner),
    'Grants': obj.grants?.map(y => toJson_S3Grant(y)),
    'RequestCharged': obj.requestCharged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetObjectLegalHoldRequest
 */
export interface S3GetObjectLegalHoldRequest {
  /**
   * @schema S3GetObjectLegalHoldRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetObjectLegalHoldRequest#Key
   */
  readonly key?: string;

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
 * Converts an object of type 'S3GetObjectLegalHoldRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetObjectLegalHoldRequest(obj: S3GetObjectLegalHoldRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
    'VersionId': obj.versionId,
    'RequestPayer': obj.requestPayer,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetObjectLegalHoldOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetObjectLegalHoldOutput(obj: S3GetObjectLegalHoldOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LegalHold': toJson_S3ObjectLockLegalHold(obj.legalHold),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetObjectLockConfigurationRequest
 */
export interface S3GetObjectLockConfigurationRequest {
  /**
   * @schema S3GetObjectLockConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetObjectLockConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetObjectLockConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetObjectLockConfigurationRequest(obj: S3GetObjectLockConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetObjectLockConfigurationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetObjectLockConfigurationOutput(obj: S3GetObjectLockConfigurationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectLockConfiguration': toJson_S3ObjectLockConfiguration(obj.objectLockConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetObjectRetentionRequest
 */
export interface S3GetObjectRetentionRequest {
  /**
   * @schema S3GetObjectRetentionRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetObjectRetentionRequest#Key
   */
  readonly key?: string;

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
 * Converts an object of type 'S3GetObjectRetentionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetObjectRetentionRequest(obj: S3GetObjectRetentionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
    'VersionId': obj.versionId,
    'RequestPayer': obj.requestPayer,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetObjectRetentionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetObjectRetentionOutput(obj: S3GetObjectRetentionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Retention': toJson_S3ObjectLockRetention(obj.retention),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetObjectTaggingRequest
 */
export interface S3GetObjectTaggingRequest {
  /**
   * @schema S3GetObjectTaggingRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetObjectTaggingRequest#Key
   */
  readonly key?: string;

  /**
   * @schema S3GetObjectTaggingRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3GetObjectTaggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

  /**
   * @schema S3GetObjectTaggingRequest#RequestPayer
   */
  readonly requestPayer?: string;

}

/**
 * Converts an object of type 'S3GetObjectTaggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetObjectTaggingRequest(obj: S3GetObjectTaggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
    'VersionId': obj.versionId,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
    'RequestPayer': obj.requestPayer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly tagSet?: S3Tag[];

}

/**
 * Converts an object of type 'S3GetObjectTaggingOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetObjectTaggingOutput(obj: S3GetObjectTaggingOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VersionId': obj.versionId,
    'TagSet': obj.tagSet?.map(y => toJson_S3Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetObjectTorrentRequest
 */
export interface S3GetObjectTorrentRequest {
  /**
   * @schema S3GetObjectTorrentRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetObjectTorrentRequest#Key
   */
  readonly key?: string;

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
 * Converts an object of type 'S3GetObjectTorrentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetObjectTorrentRequest(obj: S3GetObjectTorrentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
    'RequestPayer': obj.requestPayer,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetObjectTorrentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetObjectTorrentOutput(obj: S3GetObjectTorrentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Body': obj.body,
    'RequestCharged': obj.requestCharged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GetPublicAccessBlockRequest
 */
export interface S3GetPublicAccessBlockRequest {
  /**
   * @schema S3GetPublicAccessBlockRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3GetPublicAccessBlockRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3GetPublicAccessBlockRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetPublicAccessBlockRequest(obj: S3GetPublicAccessBlockRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3GetPublicAccessBlockOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GetPublicAccessBlockOutput(obj: S3GetPublicAccessBlockOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublicAccessBlockConfiguration': toJson_S3PublicAccessBlockConfiguration(obj.publicAccessBlockConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3HeadBucketRequest
 */
export interface S3HeadBucketRequest {
  /**
   * @schema S3HeadBucketRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3HeadBucketRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3HeadBucketRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3HeadBucketRequest(obj: S3HeadBucketRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3HeadObjectRequest
 */
export interface S3HeadObjectRequest {
  /**
   * @schema S3HeadObjectRequest#Bucket
   */
  readonly bucket?: string;

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
  readonly key?: string;

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
 * Converts an object of type 'S3HeadObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3HeadObjectRequest(obj: S3HeadObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'IfMatch': obj.ifMatch,
    'IfModifiedSince': obj.ifModifiedSince,
    'IfNoneMatch': obj.ifNoneMatch,
    'IfUnmodifiedSince': obj.ifUnmodifiedSince,
    'Key': obj.key,
    'Range': obj.range,
    'VersionId': obj.versionId,
    'SSECustomerAlgorithm': obj.sseCustomerAlgorithm,
    'SSECustomerKey': obj.sseCustomerKey,
    'SSECustomerKeyMD5': obj.sseCustomerKeyMd5,
    'RequestPayer': obj.requestPayer,
    'PartNumber': obj.partNumber,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema S3HeadObjectOutput#BucketKeyEnabled
   */
  readonly bucketKeyEnabled?: boolean;

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
 * Converts an object of type 'S3HeadObjectOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3HeadObjectOutput(obj: S3HeadObjectOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeleteMarker': obj.deleteMarker,
    'AcceptRanges': obj.acceptRanges,
    'Expiration': obj.expiration,
    'Restore': obj.restore,
    'ArchiveStatus': obj.archiveStatus,
    'LastModified': obj.lastModified,
    'ContentLength': obj.contentLength,
    'ETag': obj.eTag,
    'MissingMeta': obj.missingMeta,
    'VersionId': obj.versionId,
    'CacheControl': obj.cacheControl,
    'ContentDisposition': obj.contentDisposition,
    'ContentEncoding': obj.contentEncoding,
    'ContentLanguage': obj.contentLanguage,
    'ContentType': obj.contentType,
    'Expires': obj.expires,
    'WebsiteRedirectLocation': obj.websiteRedirectLocation,
    'ServerSideEncryption': obj.serverSideEncryption,
    'Metadata': ((obj.metadata) === undefined) ? undefined : (Object.entries(obj.metadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'SSECustomerAlgorithm': obj.sseCustomerAlgorithm,
    'SSECustomerKeyMD5': obj.sseCustomerKeyMd5,
    'SSEKMSKeyId': obj.ssekmsKeyId,
    'BucketKeyEnabled': obj.bucketKeyEnabled,
    'StorageClass': obj.storageClass,
    'RequestCharged': obj.requestCharged,
    'ReplicationStatus': obj.replicationStatus,
    'PartsCount': obj.partsCount,
    'ObjectLockMode': obj.objectLockMode,
    'ObjectLockRetainUntilDate': obj.objectLockRetainUntilDate,
    'ObjectLockLegalHoldStatus': obj.objectLockLegalHoldStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ListBucketAnalyticsConfigurationsRequest
 */
export interface S3ListBucketAnalyticsConfigurationsRequest {
  /**
   * @schema S3ListBucketAnalyticsConfigurationsRequest#Bucket
   */
  readonly bucket?: string;

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
 * Converts an object of type 'S3ListBucketAnalyticsConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListBucketAnalyticsConfigurationsRequest(obj: S3ListBucketAnalyticsConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ContinuationToken': obj.continuationToken,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ListBucketAnalyticsConfigurationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListBucketAnalyticsConfigurationsOutput(obj: S3ListBucketAnalyticsConfigurationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsTruncated': obj.isTruncated,
    'ContinuationToken': obj.continuationToken,
    'NextContinuationToken': obj.nextContinuationToken,
    'AnalyticsConfigurationList': obj.analyticsConfigurationList?.map(y => toJson_S3AnalyticsConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ListBucketIntelligentTieringConfigurationsRequest
 */
export interface S3ListBucketIntelligentTieringConfigurationsRequest {
  /**
   * @schema S3ListBucketIntelligentTieringConfigurationsRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ListBucketIntelligentTieringConfigurationsRequest#ContinuationToken
   */
  readonly continuationToken?: string;

}

/**
 * Converts an object of type 'S3ListBucketIntelligentTieringConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListBucketIntelligentTieringConfigurationsRequest(obj: S3ListBucketIntelligentTieringConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ContinuationToken': obj.continuationToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ListBucketIntelligentTieringConfigurationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListBucketIntelligentTieringConfigurationsOutput(obj: S3ListBucketIntelligentTieringConfigurationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsTruncated': obj.isTruncated,
    'ContinuationToken': obj.continuationToken,
    'NextContinuationToken': obj.nextContinuationToken,
    'IntelligentTieringConfigurationList': obj.intelligentTieringConfigurationList?.map(y => toJson_S3IntelligentTieringConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ListBucketInventoryConfigurationsRequest
 */
export interface S3ListBucketInventoryConfigurationsRequest {
  /**
   * @schema S3ListBucketInventoryConfigurationsRequest#Bucket
   */
  readonly bucket?: string;

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
 * Converts an object of type 'S3ListBucketInventoryConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListBucketInventoryConfigurationsRequest(obj: S3ListBucketInventoryConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ContinuationToken': obj.continuationToken,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ListBucketInventoryConfigurationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListBucketInventoryConfigurationsOutput(obj: S3ListBucketInventoryConfigurationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContinuationToken': obj.continuationToken,
    'InventoryConfigurationList': obj.inventoryConfigurationList?.map(y => toJson_S3InventoryConfiguration(y)),
    'IsTruncated': obj.isTruncated,
    'NextContinuationToken': obj.nextContinuationToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ListBucketMetricsConfigurationsRequest
 */
export interface S3ListBucketMetricsConfigurationsRequest {
  /**
   * @schema S3ListBucketMetricsConfigurationsRequest#Bucket
   */
  readonly bucket?: string;

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
 * Converts an object of type 'S3ListBucketMetricsConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListBucketMetricsConfigurationsRequest(obj: S3ListBucketMetricsConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ContinuationToken': obj.continuationToken,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ListBucketMetricsConfigurationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListBucketMetricsConfigurationsOutput(obj: S3ListBucketMetricsConfigurationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsTruncated': obj.isTruncated,
    'ContinuationToken': obj.continuationToken,
    'NextContinuationToken': obj.nextContinuationToken,
    'MetricsConfigurationList': obj.metricsConfigurationList?.map(y => toJson_S3MetricsConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ListBucketsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListBucketsOutput(obj: S3ListBucketsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Buckets': obj.buckets?.map(y => toJson_S3Bucket(y)),
    'Owner': toJson_S3Owner(obj.owner),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ListMultipartUploadsRequest
 */
export interface S3ListMultipartUploadsRequest {
  /**
   * @schema S3ListMultipartUploadsRequest#Bucket
   */
  readonly bucket?: string;

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
 * Converts an object of type 'S3ListMultipartUploadsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListMultipartUploadsRequest(obj: S3ListMultipartUploadsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Delimiter': obj.delimiter,
    'EncodingType': obj.encodingType,
    'KeyMarker': obj.keyMarker,
    'MaxUploads': obj.maxUploads,
    'Prefix': obj.prefix,
    'UploadIdMarker': obj.uploadIdMarker,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ListMultipartUploadsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListMultipartUploadsOutput(obj: S3ListMultipartUploadsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'KeyMarker': obj.keyMarker,
    'UploadIdMarker': obj.uploadIdMarker,
    'NextKeyMarker': obj.nextKeyMarker,
    'Prefix': obj.prefix,
    'Delimiter': obj.delimiter,
    'NextUploadIdMarker': obj.nextUploadIdMarker,
    'MaxUploads': obj.maxUploads,
    'IsTruncated': obj.isTruncated,
    'Uploads': obj.uploads?.map(y => toJson_S3MultipartUpload(y)),
    'CommonPrefixes': obj.commonPrefixes?.map(y => toJson_S3CommonPrefix(y)),
    'EncodingType': obj.encodingType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ListObjectVersionsRequest
 */
export interface S3ListObjectVersionsRequest {
  /**
   * @schema S3ListObjectVersionsRequest#Bucket
   */
  readonly bucket?: string;

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
 * Converts an object of type 'S3ListObjectVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListObjectVersionsRequest(obj: S3ListObjectVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Delimiter': obj.delimiter,
    'EncodingType': obj.encodingType,
    'KeyMarker': obj.keyMarker,
    'MaxKeys': obj.maxKeys,
    'Prefix': obj.prefix,
    'VersionIdMarker': obj.versionIdMarker,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ListObjectVersionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListObjectVersionsOutput(obj: S3ListObjectVersionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsTruncated': obj.isTruncated,
    'KeyMarker': obj.keyMarker,
    'VersionIdMarker': obj.versionIdMarker,
    'NextKeyMarker': obj.nextKeyMarker,
    'NextVersionIdMarker': obj.nextVersionIdMarker,
    'Versions': obj.versions?.map(y => toJson_S3ObjectVersion(y)),
    'DeleteMarkers': obj.deleteMarkers?.map(y => toJson_S3DeleteMarkerEntry(y)),
    'Name': obj.name,
    'Prefix': obj.prefix,
    'Delimiter': obj.delimiter,
    'MaxKeys': obj.maxKeys,
    'CommonPrefixes': obj.commonPrefixes?.map(y => toJson_S3CommonPrefix(y)),
    'EncodingType': obj.encodingType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ListObjectsRequest
 */
export interface S3ListObjectsRequest {
  /**
   * @schema S3ListObjectsRequest#Bucket
   */
  readonly bucket?: string;

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
 * Converts an object of type 'S3ListObjectsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListObjectsRequest(obj: S3ListObjectsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Delimiter': obj.delimiter,
    'EncodingType': obj.encodingType,
    'Marker': obj.marker,
    'MaxKeys': obj.maxKeys,
    'Prefix': obj.prefix,
    'RequestPayer': obj.requestPayer,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ListObjectsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListObjectsOutput(obj: S3ListObjectsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsTruncated': obj.isTruncated,
    'Marker': obj.marker,
    'NextMarker': obj.nextMarker,
    'Contents': obj.contents?.map(y => toJson_S3Object(y)),
    'Name': obj.name,
    'Prefix': obj.prefix,
    'Delimiter': obj.delimiter,
    'MaxKeys': obj.maxKeys,
    'CommonPrefixes': obj.commonPrefixes?.map(y => toJson_S3CommonPrefix(y)),
    'EncodingType': obj.encodingType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ListObjectsV2Request
 */
export interface S3ListObjectsV2Request {
  /**
   * @schema S3ListObjectsV2Request#Bucket
   */
  readonly bucket?: string;

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
 * Converts an object of type 'S3ListObjectsV2Request' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListObjectsV2Request(obj: S3ListObjectsV2Request | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Delimiter': obj.delimiter,
    'EncodingType': obj.encodingType,
    'MaxKeys': obj.maxKeys,
    'Prefix': obj.prefix,
    'ContinuationToken': obj.continuationToken,
    'FetchOwner': obj.fetchOwner,
    'StartAfter': obj.startAfter,
    'RequestPayer': obj.requestPayer,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ListObjectsV2Output' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListObjectsV2Output(obj: S3ListObjectsV2Output | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsTruncated': obj.isTruncated,
    'Contents': obj.contents?.map(y => toJson_S3Object(y)),
    'Name': obj.name,
    'Prefix': obj.prefix,
    'Delimiter': obj.delimiter,
    'MaxKeys': obj.maxKeys,
    'CommonPrefixes': obj.commonPrefixes?.map(y => toJson_S3CommonPrefix(y)),
    'EncodingType': obj.encodingType,
    'KeyCount': obj.keyCount,
    'ContinuationToken': obj.continuationToken,
    'NextContinuationToken': obj.nextContinuationToken,
    'StartAfter': obj.startAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ListPartsRequest
 */
export interface S3ListPartsRequest {
  /**
   * @schema S3ListPartsRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3ListPartsRequest#Key
   */
  readonly key?: string;

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
  readonly uploadId?: string;

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
 * Converts an object of type 'S3ListPartsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListPartsRequest(obj: S3ListPartsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
    'MaxParts': obj.maxParts,
    'PartNumberMarker': obj.partNumberMarker,
    'UploadId': obj.uploadId,
    'RequestPayer': obj.requestPayer,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ListPartsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ListPartsOutput(obj: S3ListPartsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AbortDate': obj.abortDate,
    'AbortRuleId': obj.abortRuleId,
    'Bucket': obj.bucket,
    'Key': obj.key,
    'UploadId': obj.uploadId,
    'PartNumberMarker': obj.partNumberMarker,
    'NextPartNumberMarker': obj.nextPartNumberMarker,
    'MaxParts': obj.maxParts,
    'IsTruncated': obj.isTruncated,
    'Parts': obj.parts?.map(y => toJson_S3Part(y)),
    'Initiator': toJson_S3Initiator(obj.initiator),
    'Owner': toJson_S3Owner(obj.owner),
    'StorageClass': obj.storageClass,
    'RequestCharged': obj.requestCharged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketAccelerateConfigurationRequest
 */
export interface S3PutBucketAccelerateConfigurationRequest {
  /**
   * @schema S3PutBucketAccelerateConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutBucketAccelerateConfigurationRequest#AccelerateConfiguration
   */
  readonly accelerateConfiguration?: S3AccelerateConfiguration;

  /**
   * @schema S3PutBucketAccelerateConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3PutBucketAccelerateConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketAccelerateConfigurationRequest(obj: S3PutBucketAccelerateConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'AccelerateConfiguration': toJson_S3AccelerateConfiguration(obj.accelerateConfiguration),
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly bucket?: string;

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
 * Converts an object of type 'S3PutBucketAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketAclRequest(obj: S3PutBucketAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ACL': obj.acl,
    'AccessControlPolicy': toJson_S3AccessControlPolicy(obj.accessControlPolicy),
    'Bucket': obj.bucket,
    'ContentMD5': obj.contentMd5,
    'GrantFullControl': obj.grantFullControl,
    'GrantRead': obj.grantRead,
    'GrantReadACP': obj.grantReadAcp,
    'GrantWrite': obj.grantWrite,
    'GrantWriteACP': obj.grantWriteAcp,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketAnalyticsConfigurationRequest
 */
export interface S3PutBucketAnalyticsConfigurationRequest {
  /**
   * @schema S3PutBucketAnalyticsConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutBucketAnalyticsConfigurationRequest#Id
   */
  readonly id?: string;

  /**
   * @schema S3PutBucketAnalyticsConfigurationRequest#AnalyticsConfiguration
   */
  readonly analyticsConfiguration?: S3AnalyticsConfiguration;

  /**
   * @schema S3PutBucketAnalyticsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3PutBucketAnalyticsConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketAnalyticsConfigurationRequest(obj: S3PutBucketAnalyticsConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Id': obj.id,
    'AnalyticsConfiguration': toJson_S3AnalyticsConfiguration(obj.analyticsConfiguration),
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketCorsRequest
 */
export interface S3PutBucketCorsRequest {
  /**
   * @schema S3PutBucketCorsRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutBucketCorsRequest#CORSConfiguration
   */
  readonly corsConfiguration?: S3CorsConfiguration;

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
 * Converts an object of type 'S3PutBucketCorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketCorsRequest(obj: S3PutBucketCorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'CORSConfiguration': toJson_S3CorsConfiguration(obj.corsConfiguration),
    'ContentMD5': obj.contentMd5,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketEncryptionRequest
 */
export interface S3PutBucketEncryptionRequest {
  /**
   * @schema S3PutBucketEncryptionRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutBucketEncryptionRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketEncryptionRequest#ServerSideEncryptionConfiguration
   */
  readonly serverSideEncryptionConfiguration?: S3ServerSideEncryptionConfiguration;

  /**
   * @schema S3PutBucketEncryptionRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3PutBucketEncryptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketEncryptionRequest(obj: S3PutBucketEncryptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ContentMD5': obj.contentMd5,
    'ServerSideEncryptionConfiguration': toJson_S3ServerSideEncryptionConfiguration(obj.serverSideEncryptionConfiguration),
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketIntelligentTieringConfigurationRequest
 */
export interface S3PutBucketIntelligentTieringConfigurationRequest {
  /**
   * @schema S3PutBucketIntelligentTieringConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutBucketIntelligentTieringConfigurationRequest#Id
   */
  readonly id?: string;

  /**
   * @schema S3PutBucketIntelligentTieringConfigurationRequest#IntelligentTieringConfiguration
   */
  readonly intelligentTieringConfiguration?: S3IntelligentTieringConfiguration;

}

/**
 * Converts an object of type 'S3PutBucketIntelligentTieringConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketIntelligentTieringConfigurationRequest(obj: S3PutBucketIntelligentTieringConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Id': obj.id,
    'IntelligentTieringConfiguration': toJson_S3IntelligentTieringConfiguration(obj.intelligentTieringConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketInventoryConfigurationRequest
 */
export interface S3PutBucketInventoryConfigurationRequest {
  /**
   * @schema S3PutBucketInventoryConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutBucketInventoryConfigurationRequest#Id
   */
  readonly id?: string;

  /**
   * @schema S3PutBucketInventoryConfigurationRequest#InventoryConfiguration
   */
  readonly inventoryConfiguration?: S3InventoryConfiguration;

  /**
   * @schema S3PutBucketInventoryConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3PutBucketInventoryConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketInventoryConfigurationRequest(obj: S3PutBucketInventoryConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Id': obj.id,
    'InventoryConfiguration': toJson_S3InventoryConfiguration(obj.inventoryConfiguration),
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketLifecycleRequest
 */
export interface S3PutBucketLifecycleRequest {
  /**
   * @schema S3PutBucketLifecycleRequest#Bucket
   */
  readonly bucket?: string;

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
 * Converts an object of type 'S3PutBucketLifecycleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketLifecycleRequest(obj: S3PutBucketLifecycleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ContentMD5': obj.contentMd5,
    'LifecycleConfiguration': toJson_S3LifecycleConfiguration(obj.lifecycleConfiguration),
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketLifecycleConfigurationRequest
 */
export interface S3PutBucketLifecycleConfigurationRequest {
  /**
   * @schema S3PutBucketLifecycleConfigurationRequest#Bucket
   */
  readonly bucket?: string;

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
 * Converts an object of type 'S3PutBucketLifecycleConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketLifecycleConfigurationRequest(obj: S3PutBucketLifecycleConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'LifecycleConfiguration': toJson_S3BucketLifecycleConfiguration(obj.lifecycleConfiguration),
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketLoggingRequest
 */
export interface S3PutBucketLoggingRequest {
  /**
   * @schema S3PutBucketLoggingRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutBucketLoggingRequest#BucketLoggingStatus
   */
  readonly bucketLoggingStatus?: S3BucketLoggingStatus;

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
 * Converts an object of type 'S3PutBucketLoggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketLoggingRequest(obj: S3PutBucketLoggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'BucketLoggingStatus': toJson_S3BucketLoggingStatus(obj.bucketLoggingStatus),
    'ContentMD5': obj.contentMd5,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketMetricsConfigurationRequest
 */
export interface S3PutBucketMetricsConfigurationRequest {
  /**
   * @schema S3PutBucketMetricsConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutBucketMetricsConfigurationRequest#Id
   */
  readonly id?: string;

  /**
   * @schema S3PutBucketMetricsConfigurationRequest#MetricsConfiguration
   */
  readonly metricsConfiguration?: S3MetricsConfiguration;

  /**
   * @schema S3PutBucketMetricsConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3PutBucketMetricsConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketMetricsConfigurationRequest(obj: S3PutBucketMetricsConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Id': obj.id,
    'MetricsConfiguration': toJson_S3MetricsConfiguration(obj.metricsConfiguration),
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketNotificationRequest
 */
export interface S3PutBucketNotificationRequest {
  /**
   * @schema S3PutBucketNotificationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutBucketNotificationRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketNotificationRequest#NotificationConfiguration
   */
  readonly notificationConfiguration?: S3NotificationConfigurationDeprecated;

  /**
   * @schema S3PutBucketNotificationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3PutBucketNotificationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketNotificationRequest(obj: S3PutBucketNotificationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ContentMD5': obj.contentMd5,
    'NotificationConfiguration': toJson_S3NotificationConfigurationDeprecated(obj.notificationConfiguration),
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketNotificationConfigurationRequest
 */
export interface S3PutBucketNotificationConfigurationRequest {
  /**
   * @schema S3PutBucketNotificationConfigurationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutBucketNotificationConfigurationRequest#NotificationConfiguration
   */
  readonly notificationConfiguration?: S3NotificationConfiguration;

  /**
   * @schema S3PutBucketNotificationConfigurationRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3PutBucketNotificationConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketNotificationConfigurationRequest(obj: S3PutBucketNotificationConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'NotificationConfiguration': toJson_S3NotificationConfiguration(obj.notificationConfiguration),
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketOwnershipControlsRequest
 */
export interface S3PutBucketOwnershipControlsRequest {
  /**
   * @schema S3PutBucketOwnershipControlsRequest#Bucket
   */
  readonly bucket?: string;

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
  readonly ownershipControls?: S3OwnershipControls;

}

/**
 * Converts an object of type 'S3PutBucketOwnershipControlsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketOwnershipControlsRequest(obj: S3PutBucketOwnershipControlsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ContentMD5': obj.contentMd5,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
    'OwnershipControls': toJson_S3OwnershipControls(obj.ownershipControls),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketPolicyRequest
 */
export interface S3PutBucketPolicyRequest {
  /**
   * @schema S3PutBucketPolicyRequest#Bucket
   */
  readonly bucket?: string;

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
  readonly policy?: string;

  /**
   * @schema S3PutBucketPolicyRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3PutBucketPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketPolicyRequest(obj: S3PutBucketPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ContentMD5': obj.contentMd5,
    'ConfirmRemoveSelfBucketAccess': obj.confirmRemoveSelfBucketAccess,
    'Policy': obj.policy,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketReplicationRequest
 */
export interface S3PutBucketReplicationRequest {
  /**
   * @schema S3PutBucketReplicationRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutBucketReplicationRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketReplicationRequest#ReplicationConfiguration
   */
  readonly replicationConfiguration?: S3ReplicationConfiguration;

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
 * Converts an object of type 'S3PutBucketReplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketReplicationRequest(obj: S3PutBucketReplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ContentMD5': obj.contentMd5,
    'ReplicationConfiguration': toJson_S3ReplicationConfiguration(obj.replicationConfiguration),
    'Token': obj.token,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketRequestPaymentRequest
 */
export interface S3PutBucketRequestPaymentRequest {
  /**
   * @schema S3PutBucketRequestPaymentRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutBucketRequestPaymentRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketRequestPaymentRequest#RequestPaymentConfiguration
   */
  readonly requestPaymentConfiguration?: S3RequestPaymentConfiguration;

  /**
   * @schema S3PutBucketRequestPaymentRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3PutBucketRequestPaymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketRequestPaymentRequest(obj: S3PutBucketRequestPaymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ContentMD5': obj.contentMd5,
    'RequestPaymentConfiguration': toJson_S3RequestPaymentConfiguration(obj.requestPaymentConfiguration),
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketTaggingRequest
 */
export interface S3PutBucketTaggingRequest {
  /**
   * @schema S3PutBucketTaggingRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutBucketTaggingRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketTaggingRequest#Tagging
   */
  readonly tagging?: S3Tagging;

  /**
   * @schema S3PutBucketTaggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3PutBucketTaggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketTaggingRequest(obj: S3PutBucketTaggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ContentMD5': obj.contentMd5,
    'Tagging': toJson_S3Tagging(obj.tagging),
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketVersioningRequest
 */
export interface S3PutBucketVersioningRequest {
  /**
   * @schema S3PutBucketVersioningRequest#Bucket
   */
  readonly bucket?: string;

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
  readonly versioningConfiguration?: S3VersioningConfiguration;

  /**
   * @schema S3PutBucketVersioningRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3PutBucketVersioningRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketVersioningRequest(obj: S3PutBucketVersioningRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ContentMD5': obj.contentMd5,
    'MFA': obj.mfa,
    'VersioningConfiguration': toJson_S3VersioningConfiguration(obj.versioningConfiguration),
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutBucketWebsiteRequest
 */
export interface S3PutBucketWebsiteRequest {
  /**
   * @schema S3PutBucketWebsiteRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutBucketWebsiteRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutBucketWebsiteRequest#WebsiteConfiguration
   */
  readonly websiteConfiguration?: S3WebsiteConfiguration;

  /**
   * @schema S3PutBucketWebsiteRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3PutBucketWebsiteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutBucketWebsiteRequest(obj: S3PutBucketWebsiteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ContentMD5': obj.contentMd5,
    'WebsiteConfiguration': toJson_S3WebsiteConfiguration(obj.websiteConfiguration),
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly bucket?: string;

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
  readonly key?: string;

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
   * @schema S3PutObjectRequest#BucketKeyEnabled
   */
  readonly bucketKeyEnabled?: boolean;

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
 * Converts an object of type 'S3PutObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutObjectRequest(obj: S3PutObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ACL': obj.acl,
    'Body': obj.body,
    'Bucket': obj.bucket,
    'CacheControl': obj.cacheControl,
    'ContentDisposition': obj.contentDisposition,
    'ContentEncoding': obj.contentEncoding,
    'ContentLanguage': obj.contentLanguage,
    'ContentLength': obj.contentLength,
    'ContentMD5': obj.contentMd5,
    'ContentType': obj.contentType,
    'Expires': obj.expires,
    'GrantFullControl': obj.grantFullControl,
    'GrantRead': obj.grantRead,
    'GrantReadACP': obj.grantReadAcp,
    'GrantWriteACP': obj.grantWriteAcp,
    'Key': obj.key,
    'Metadata': ((obj.metadata) === undefined) ? undefined : (Object.entries(obj.metadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ServerSideEncryption': obj.serverSideEncryption,
    'StorageClass': obj.storageClass,
    'WebsiteRedirectLocation': obj.websiteRedirectLocation,
    'SSECustomerAlgorithm': obj.sseCustomerAlgorithm,
    'SSECustomerKey': obj.sseCustomerKey,
    'SSECustomerKeyMD5': obj.sseCustomerKeyMd5,
    'SSEKMSKeyId': obj.ssekmsKeyId,
    'SSEKMSEncryptionContext': obj.ssekmsEncryptionContext,
    'BucketKeyEnabled': obj.bucketKeyEnabled,
    'RequestPayer': obj.requestPayer,
    'Tagging': obj.tagging,
    'ObjectLockMode': obj.objectLockMode,
    'ObjectLockRetainUntilDate': obj.objectLockRetainUntilDate,
    'ObjectLockLegalHoldStatus': obj.objectLockLegalHoldStatus,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema S3PutObjectOutput#BucketKeyEnabled
   */
  readonly bucketKeyEnabled?: boolean;

  /**
   * @schema S3PutObjectOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * Converts an object of type 'S3PutObjectOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutObjectOutput(obj: S3PutObjectOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Expiration': obj.expiration,
    'ETag': obj.eTag,
    'ServerSideEncryption': obj.serverSideEncryption,
    'VersionId': obj.versionId,
    'SSECustomerAlgorithm': obj.sseCustomerAlgorithm,
    'SSECustomerKeyMD5': obj.sseCustomerKeyMd5,
    'SSEKMSKeyId': obj.ssekmsKeyId,
    'SSEKMSEncryptionContext': obj.ssekmsEncryptionContext,
    'BucketKeyEnabled': obj.bucketKeyEnabled,
    'RequestCharged': obj.requestCharged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly bucket?: string;

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
  readonly key?: string;

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
 * Converts an object of type 'S3PutObjectAclRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutObjectAclRequest(obj: S3PutObjectAclRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ACL': obj.acl,
    'AccessControlPolicy': toJson_S3AccessControlPolicy(obj.accessControlPolicy),
    'Bucket': obj.bucket,
    'ContentMD5': obj.contentMd5,
    'GrantFullControl': obj.grantFullControl,
    'GrantRead': obj.grantRead,
    'GrantReadACP': obj.grantReadAcp,
    'GrantWrite': obj.grantWrite,
    'GrantWriteACP': obj.grantWriteAcp,
    'Key': obj.key,
    'RequestPayer': obj.requestPayer,
    'VersionId': obj.versionId,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3PutObjectAclOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutObjectAclOutput(obj: S3PutObjectAclOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestCharged': obj.requestCharged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutObjectLegalHoldRequest
 */
export interface S3PutObjectLegalHoldRequest {
  /**
   * @schema S3PutObjectLegalHoldRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutObjectLegalHoldRequest#Key
   */
  readonly key?: string;

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
 * Converts an object of type 'S3PutObjectLegalHoldRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutObjectLegalHoldRequest(obj: S3PutObjectLegalHoldRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
    'LegalHold': toJson_S3ObjectLockLegalHold(obj.legalHold),
    'RequestPayer': obj.requestPayer,
    'VersionId': obj.versionId,
    'ContentMD5': obj.contentMd5,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3PutObjectLegalHoldOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutObjectLegalHoldOutput(obj: S3PutObjectLegalHoldOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestCharged': obj.requestCharged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutObjectLockConfigurationRequest
 */
export interface S3PutObjectLockConfigurationRequest {
  /**
   * @schema S3PutObjectLockConfigurationRequest#Bucket
   */
  readonly bucket?: string;

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
 * Converts an object of type 'S3PutObjectLockConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutObjectLockConfigurationRequest(obj: S3PutObjectLockConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ObjectLockConfiguration': toJson_S3ObjectLockConfiguration(obj.objectLockConfiguration),
    'RequestPayer': obj.requestPayer,
    'Token': obj.token,
    'ContentMD5': obj.contentMd5,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3PutObjectLockConfigurationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutObjectLockConfigurationOutput(obj: S3PutObjectLockConfigurationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestCharged': obj.requestCharged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutObjectRetentionRequest
 */
export interface S3PutObjectRetentionRequest {
  /**
   * @schema S3PutObjectRetentionRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutObjectRetentionRequest#Key
   */
  readonly key?: string;

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
 * Converts an object of type 'S3PutObjectRetentionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutObjectRetentionRequest(obj: S3PutObjectRetentionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
    'Retention': toJson_S3ObjectLockRetention(obj.retention),
    'RequestPayer': obj.requestPayer,
    'VersionId': obj.versionId,
    'BypassGovernanceRetention': obj.bypassGovernanceRetention,
    'ContentMD5': obj.contentMd5,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3PutObjectRetentionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutObjectRetentionOutput(obj: S3PutObjectRetentionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestCharged': obj.requestCharged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutObjectTaggingRequest
 */
export interface S3PutObjectTaggingRequest {
  /**
   * @schema S3PutObjectTaggingRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutObjectTaggingRequest#Key
   */
  readonly key?: string;

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
  readonly tagging?: S3Tagging;

  /**
   * @schema S3PutObjectTaggingRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

  /**
   * @schema S3PutObjectTaggingRequest#RequestPayer
   */
  readonly requestPayer?: string;

}

/**
 * Converts an object of type 'S3PutObjectTaggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutObjectTaggingRequest(obj: S3PutObjectTaggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
    'VersionId': obj.versionId,
    'ContentMD5': obj.contentMd5,
    'Tagging': toJson_S3Tagging(obj.tagging),
    'ExpectedBucketOwner': obj.expectedBucketOwner,
    'RequestPayer': obj.requestPayer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3PutObjectTaggingOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutObjectTaggingOutput(obj: S3PutObjectTaggingOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3PutPublicAccessBlockRequest
 */
export interface S3PutPublicAccessBlockRequest {
  /**
   * @schema S3PutPublicAccessBlockRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3PutPublicAccessBlockRequest#ContentMD5
   */
  readonly contentMd5?: string;

  /**
   * @schema S3PutPublicAccessBlockRequest#PublicAccessBlockConfiguration
   */
  readonly publicAccessBlockConfiguration?: S3PublicAccessBlockConfiguration;

  /**
   * @schema S3PutPublicAccessBlockRequest#ExpectedBucketOwner
   */
  readonly expectedBucketOwner?: string;

}

/**
 * Converts an object of type 'S3PutPublicAccessBlockRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PutPublicAccessBlockRequest(obj: S3PutPublicAccessBlockRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'ContentMD5': obj.contentMd5,
    'PublicAccessBlockConfiguration': toJson_S3PublicAccessBlockConfiguration(obj.publicAccessBlockConfiguration),
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3RestoreObjectRequest
 */
export interface S3RestoreObjectRequest {
  /**
   * @schema S3RestoreObjectRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3RestoreObjectRequest#Key
   */
  readonly key?: string;

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
 * Converts an object of type 'S3RestoreObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3RestoreObjectRequest(obj: S3RestoreObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
    'VersionId': obj.versionId,
    'RestoreRequest': toJson_S3RestoreRequest(obj.restoreRequest),
    'RequestPayer': obj.requestPayer,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3RestoreObjectOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3RestoreObjectOutput(obj: S3RestoreObjectOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestCharged': obj.requestCharged,
    'RestoreOutputPath': obj.restoreOutputPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3SelectObjectContentRequest
 */
export interface S3SelectObjectContentRequest {
  /**
   * @schema S3SelectObjectContentRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3SelectObjectContentRequest#Key
   */
  readonly key?: string;

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
  readonly expression?: string;

  /**
   * @schema S3SelectObjectContentRequest#ExpressionType
   */
  readonly expressionType?: string;

  /**
   * @schema S3SelectObjectContentRequest#RequestProgress
   */
  readonly requestProgress?: S3RequestProgress;

  /**
   * @schema S3SelectObjectContentRequest#InputSerialization
   */
  readonly inputSerialization?: S3InputSerialization;

  /**
   * @schema S3SelectObjectContentRequest#OutputSerialization
   */
  readonly outputSerialization?: S3OutputSerialization;

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
 * Converts an object of type 'S3SelectObjectContentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3SelectObjectContentRequest(obj: S3SelectObjectContentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
    'SSECustomerAlgorithm': obj.sseCustomerAlgorithm,
    'SSECustomerKey': obj.sseCustomerKey,
    'SSECustomerKeyMD5': obj.sseCustomerKeyMd5,
    'Expression': obj.expression,
    'ExpressionType': obj.expressionType,
    'RequestProgress': toJson_S3RequestProgress(obj.requestProgress),
    'InputSerialization': toJson_S3InputSerialization(obj.inputSerialization),
    'OutputSerialization': toJson_S3OutputSerialization(obj.outputSerialization),
    'ScanRange': toJson_S3ScanRange(obj.scanRange),
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3SelectObjectContentOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3SelectObjectContentOutput(obj: S3SelectObjectContentOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Payload': toJson_S3SelectObjectContentEventStream(obj.payload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly bucket?: string;

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
  readonly key?: string;

  /**
   * @schema S3UploadPartRequest#PartNumber
   */
  readonly partNumber?: number;

  /**
   * @schema S3UploadPartRequest#UploadId
   */
  readonly uploadId?: string;

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
 * Converts an object of type 'S3UploadPartRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3UploadPartRequest(obj: S3UploadPartRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Body': obj.body,
    'Bucket': obj.bucket,
    'ContentLength': obj.contentLength,
    'ContentMD5': obj.contentMd5,
    'Key': obj.key,
    'PartNumber': obj.partNumber,
    'UploadId': obj.uploadId,
    'SSECustomerAlgorithm': obj.sseCustomerAlgorithm,
    'SSECustomerKey': obj.sseCustomerKey,
    'SSECustomerKeyMD5': obj.sseCustomerKeyMd5,
    'RequestPayer': obj.requestPayer,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema S3UploadPartOutput#BucketKeyEnabled
   */
  readonly bucketKeyEnabled?: boolean;

  /**
   * @schema S3UploadPartOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * Converts an object of type 'S3UploadPartOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3UploadPartOutput(obj: S3UploadPartOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServerSideEncryption': obj.serverSideEncryption,
    'ETag': obj.eTag,
    'SSECustomerAlgorithm': obj.sseCustomerAlgorithm,
    'SSECustomerKeyMD5': obj.sseCustomerKeyMd5,
    'SSEKMSKeyId': obj.ssekmsKeyId,
    'BucketKeyEnabled': obj.bucketKeyEnabled,
    'RequestCharged': obj.requestCharged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3UploadPartCopyRequest
 */
export interface S3UploadPartCopyRequest {
  /**
   * @schema S3UploadPartCopyRequest#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3UploadPartCopyRequest#CopySource
   */
  readonly copySource?: string;

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
  readonly key?: string;

  /**
   * @schema S3UploadPartCopyRequest#PartNumber
   */
  readonly partNumber?: number;

  /**
   * @schema S3UploadPartCopyRequest#UploadId
   */
  readonly uploadId?: string;

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
 * Converts an object of type 'S3UploadPartCopyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3UploadPartCopyRequest(obj: S3UploadPartCopyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'CopySource': obj.copySource,
    'CopySourceIfMatch': obj.copySourceIfMatch,
    'CopySourceIfModifiedSince': obj.copySourceIfModifiedSince,
    'CopySourceIfNoneMatch': obj.copySourceIfNoneMatch,
    'CopySourceIfUnmodifiedSince': obj.copySourceIfUnmodifiedSince,
    'CopySourceRange': obj.copySourceRange,
    'Key': obj.key,
    'PartNumber': obj.partNumber,
    'UploadId': obj.uploadId,
    'SSECustomerAlgorithm': obj.sseCustomerAlgorithm,
    'SSECustomerKey': obj.sseCustomerKey,
    'SSECustomerKeyMD5': obj.sseCustomerKeyMd5,
    'CopySourceSSECustomerAlgorithm': obj.copySourceSseCustomerAlgorithm,
    'CopySourceSSECustomerKey': obj.copySourceSseCustomerKey,
    'CopySourceSSECustomerKeyMD5': obj.copySourceSseCustomerKeyMd5,
    'RequestPayer': obj.requestPayer,
    'ExpectedBucketOwner': obj.expectedBucketOwner,
    'ExpectedSourceBucketOwner': obj.expectedSourceBucketOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema S3UploadPartCopyOutput#BucketKeyEnabled
   */
  readonly bucketKeyEnabled?: boolean;

  /**
   * @schema S3UploadPartCopyOutput#RequestCharged
   */
  readonly requestCharged?: string;

}

/**
 * Converts an object of type 'S3UploadPartCopyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3UploadPartCopyOutput(obj: S3UploadPartCopyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CopySourceVersionId': obj.copySourceVersionId,
    'CopyPartResult': toJson_S3CopyPartResult(obj.copyPartResult),
    'ServerSideEncryption': obj.serverSideEncryption,
    'SSECustomerAlgorithm': obj.sseCustomerAlgorithm,
    'SSECustomerKeyMD5': obj.sseCustomerKeyMd5,
    'SSEKMSKeyId': obj.ssekmsKeyId,
    'BucketKeyEnabled': obj.bucketKeyEnabled,
    'RequestCharged': obj.requestCharged,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3WriteGetObjectResponseRequest
 */
export interface S3WriteGetObjectResponseRequest {
  /**
   * @schema S3WriteGetObjectResponseRequest#RequestRoute
   */
  readonly requestRoute?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#RequestToken
   */
  readonly requestToken?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#Body
   */
  readonly body?: any;

  /**
   * @schema S3WriteGetObjectResponseRequest#StatusCode
   */
  readonly statusCode?: number;

  /**
   * @schema S3WriteGetObjectResponseRequest#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#AcceptRanges
   */
  readonly acceptRanges?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#CacheControl
   */
  readonly cacheControl?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#ContentDisposition
   */
  readonly contentDisposition?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#ContentEncoding
   */
  readonly contentEncoding?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#ContentLanguage
   */
  readonly contentLanguage?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#ContentLength
   */
  readonly contentLength?: number;

  /**
   * @schema S3WriteGetObjectResponseRequest#ContentRange
   */
  readonly contentRange?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#DeleteMarker
   */
  readonly deleteMarker?: boolean;

  /**
   * @schema S3WriteGetObjectResponseRequest#ETag
   */
  readonly eTag?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#Expires
   */
  readonly expires?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#Expiration
   */
  readonly expiration?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#MissingMeta
   */
  readonly missingMeta?: number;

  /**
   * @schema S3WriteGetObjectResponseRequest#Metadata
   */
  readonly metadata?: { [key: string]: string };

  /**
   * @schema S3WriteGetObjectResponseRequest#ObjectLockMode
   */
  readonly objectLockMode?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#ObjectLockLegalHoldStatus
   */
  readonly objectLockLegalHoldStatus?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#ObjectLockRetainUntilDate
   */
  readonly objectLockRetainUntilDate?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#PartsCount
   */
  readonly partsCount?: number;

  /**
   * @schema S3WriteGetObjectResponseRequest#ReplicationStatus
   */
  readonly replicationStatus?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#RequestCharged
   */
  readonly requestCharged?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#Restore
   */
  readonly restore?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#ServerSideEncryption
   */
  readonly serverSideEncryption?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#SSECustomerAlgorithm
   */
  readonly sseCustomerAlgorithm?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#SSEKMSKeyId
   */
  readonly ssekmsKeyId?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#SSECustomerKeyMD5
   */
  readonly sseCustomerKeyMd5?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#StorageClass
   */
  readonly storageClass?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#TagCount
   */
  readonly tagCount?: number;

  /**
   * @schema S3WriteGetObjectResponseRequest#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema S3WriteGetObjectResponseRequest#BucketKeyEnabled
   */
  readonly bucketKeyEnabled?: boolean;

}

/**
 * Converts an object of type 'S3WriteGetObjectResponseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3WriteGetObjectResponseRequest(obj: S3WriteGetObjectResponseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestRoute': obj.requestRoute,
    'RequestToken': obj.requestToken,
    'Body': obj.body,
    'StatusCode': obj.statusCode,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
    'AcceptRanges': obj.acceptRanges,
    'CacheControl': obj.cacheControl,
    'ContentDisposition': obj.contentDisposition,
    'ContentEncoding': obj.contentEncoding,
    'ContentLanguage': obj.contentLanguage,
    'ContentLength': obj.contentLength,
    'ContentRange': obj.contentRange,
    'ContentType': obj.contentType,
    'DeleteMarker': obj.deleteMarker,
    'ETag': obj.eTag,
    'Expires': obj.expires,
    'Expiration': obj.expiration,
    'LastModified': obj.lastModified,
    'MissingMeta': obj.missingMeta,
    'Metadata': ((obj.metadata) === undefined) ? undefined : (Object.entries(obj.metadata).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ObjectLockMode': obj.objectLockMode,
    'ObjectLockLegalHoldStatus': obj.objectLockLegalHoldStatus,
    'ObjectLockRetainUntilDate': obj.objectLockRetainUntilDate,
    'PartsCount': obj.partsCount,
    'ReplicationStatus': obj.replicationStatus,
    'RequestCharged': obj.requestCharged,
    'Restore': obj.restore,
    'ServerSideEncryption': obj.serverSideEncryption,
    'SSECustomerAlgorithm': obj.sseCustomerAlgorithm,
    'SSEKMSKeyId': obj.ssekmsKeyId,
    'SSECustomerKeyMD5': obj.sseCustomerKeyMd5,
    'StorageClass': obj.storageClass,
    'TagCount': obj.tagCount,
    'VersionId': obj.versionId,
    'BucketKeyEnabled': obj.bucketKeyEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3CompletedMultipartUpload' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CompletedMultipartUpload(obj: S3CompletedMultipartUpload | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parts': obj.parts?.map(y => toJson_S3CompletedPart(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3CopyObjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CopyObjectResult(obj: S3CopyObjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ETag': obj.eTag,
    'LastModified': obj.lastModified,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3CreateBucketConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CreateBucketConfiguration(obj: S3CreateBucketConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LocationConstraint': obj.locationConstraint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3Delete
 */
export interface S3Delete {
  /**
   * @schema S3Delete#Objects
   */
  readonly objects?: S3ObjectIdentifier[];

  /**
   * @schema S3Delete#Quiet
   */
  readonly quiet?: boolean;

}

/**
 * Converts an object of type 'S3Delete' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Delete(obj: S3Delete | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Objects': obj.objects?.map(y => toJson_S3ObjectIdentifier(y)),
    'Quiet': obj.quiet,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3DeletedObject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeletedObject(obj: S3DeletedObject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'VersionId': obj.versionId,
    'DeleteMarker': obj.deleteMarker,
    'DeleteMarkerVersionId': obj.deleteMarkerVersionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3Error' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Error(obj: S3Error | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'VersionId': obj.versionId,
    'Code': obj.code,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3Owner' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Owner(obj: S3Owner | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DisplayName': obj.displayName,
    'ID': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3Grant' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Grant(obj: S3Grant | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Grantee': toJson_S3Grantee(obj.grantee),
    'Permission': obj.permission,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3AnalyticsConfiguration
 */
export interface S3AnalyticsConfiguration {
  /**
   * @schema S3AnalyticsConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema S3AnalyticsConfiguration#Filter
   */
  readonly filter?: S3AnalyticsFilter;

  /**
   * @schema S3AnalyticsConfiguration#StorageClassAnalysis
   */
  readonly storageClassAnalysis?: S3StorageClassAnalysis;

}

/**
 * Converts an object of type 'S3AnalyticsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3AnalyticsConfiguration(obj: S3AnalyticsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Filter': toJson_S3AnalyticsFilter(obj.filter),
    'StorageClassAnalysis': toJson_S3StorageClassAnalysis(obj.storageClassAnalysis),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3CorsRule
 */
export interface S3CorsRule {
  /**
   * @schema S3CorsRule#ID
   */
  readonly id?: string;

  /**
   * @schema S3CorsRule#AllowedHeaders
   */
  readonly allowedHeaders?: string[];

  /**
   * @schema S3CorsRule#AllowedMethods
   */
  readonly allowedMethods?: string[];

  /**
   * @schema S3CorsRule#AllowedOrigins
   */
  readonly allowedOrigins?: string[];

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
 * Converts an object of type 'S3CorsRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CorsRule(obj: S3CorsRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ID': obj.id,
    'AllowedHeaders': obj.allowedHeaders?.map(y => y),
    'AllowedMethods': obj.allowedMethods?.map(y => y),
    'AllowedOrigins': obj.allowedOrigins?.map(y => y),
    'ExposeHeaders': obj.exposeHeaders?.map(y => y),
    'MaxAgeSeconds': obj.maxAgeSeconds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ServerSideEncryptionConfiguration
 */
export interface S3ServerSideEncryptionConfiguration {
  /**
   * @schema S3ServerSideEncryptionConfiguration#Rules
   */
  readonly rules?: S3ServerSideEncryptionRule[];

}

/**
 * Converts an object of type 'S3ServerSideEncryptionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ServerSideEncryptionConfiguration(obj: S3ServerSideEncryptionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rules': obj.rules?.map(y => toJson_S3ServerSideEncryptionRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3IntelligentTieringConfiguration
 */
export interface S3IntelligentTieringConfiguration {
  /**
   * @schema S3IntelligentTieringConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema S3IntelligentTieringConfiguration#Filter
   */
  readonly filter?: S3IntelligentTieringFilter;

  /**
   * @schema S3IntelligentTieringConfiguration#Status
   */
  readonly status?: string;

  /**
   * @schema S3IntelligentTieringConfiguration#Tierings
   */
  readonly tierings?: S3Tiering[];

}

/**
 * Converts an object of type 'S3IntelligentTieringConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3IntelligentTieringConfiguration(obj: S3IntelligentTieringConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Filter': toJson_S3IntelligentTieringFilter(obj.filter),
    'Status': obj.status,
    'Tierings': obj.tierings?.map(y => toJson_S3Tiering(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3InventoryConfiguration
 */
export interface S3InventoryConfiguration {
  /**
   * @schema S3InventoryConfiguration#Destination
   */
  readonly destination?: S3InventoryDestination;

  /**
   * @schema S3InventoryConfiguration#IsEnabled
   */
  readonly isEnabled?: boolean;

  /**
   * @schema S3InventoryConfiguration#Filter
   */
  readonly filter?: S3InventoryFilter;

  /**
   * @schema S3InventoryConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema S3InventoryConfiguration#IncludedObjectVersions
   */
  readonly includedObjectVersions?: string;

  /**
   * @schema S3InventoryConfiguration#OptionalFields
   */
  readonly optionalFields?: string[];

  /**
   * @schema S3InventoryConfiguration#Schedule
   */
  readonly schedule?: S3InventorySchedule;

}

/**
 * Converts an object of type 'S3InventoryConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3InventoryConfiguration(obj: S3InventoryConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Destination': toJson_S3InventoryDestination(obj.destination),
    'IsEnabled': obj.isEnabled,
    'Filter': toJson_S3InventoryFilter(obj.filter),
    'Id': obj.id,
    'IncludedObjectVersions': obj.includedObjectVersions,
    'OptionalFields': obj.optionalFields?.map(y => y),
    'Schedule': toJson_S3InventorySchedule(obj.schedule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly prefix?: string;

  /**
   * @schema S3Rule#Status
   */
  readonly status?: string;

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
 * Converts an object of type 'S3Rule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Rule(obj: S3Rule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Expiration': toJson_S3LifecycleExpiration(obj.expiration),
    'ID': obj.id,
    'Prefix': obj.prefix,
    'Status': obj.status,
    'Transition': toJson_S3Transition(obj.transition),
    'NoncurrentVersionTransition': toJson_S3NoncurrentVersionTransition(obj.noncurrentVersionTransition),
    'NoncurrentVersionExpiration': toJson_S3NoncurrentVersionExpiration(obj.noncurrentVersionExpiration),
    'AbortIncompleteMultipartUpload': toJson_S3AbortIncompleteMultipartUpload(obj.abortIncompleteMultipartUpload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly status?: string;

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
 * Converts an object of type 'S3LifecycleRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3LifecycleRule(obj: S3LifecycleRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Expiration': toJson_S3LifecycleExpiration(obj.expiration),
    'ID': obj.id,
    'Prefix': obj.prefix,
    'Filter': toJson_S3LifecycleRuleFilter(obj.filter),
    'Status': obj.status,
    'Transitions': obj.transitions?.map(y => toJson_S3Transition(y)),
    'NoncurrentVersionTransitions': obj.noncurrentVersionTransitions?.map(y => toJson_S3NoncurrentVersionTransition(y)),
    'NoncurrentVersionExpiration': toJson_S3NoncurrentVersionExpiration(obj.noncurrentVersionExpiration),
    'AbortIncompleteMultipartUpload': toJson_S3AbortIncompleteMultipartUpload(obj.abortIncompleteMultipartUpload),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3LoggingEnabled
 */
export interface S3LoggingEnabled {
  /**
   * @schema S3LoggingEnabled#TargetBucket
   */
  readonly targetBucket?: string;

  /**
   * @schema S3LoggingEnabled#TargetGrants
   */
  readonly targetGrants?: S3TargetGrant[];

  /**
   * @schema S3LoggingEnabled#TargetPrefix
   */
  readonly targetPrefix?: string;

}

/**
 * Converts an object of type 'S3LoggingEnabled' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3LoggingEnabled(obj: S3LoggingEnabled | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetBucket': obj.targetBucket,
    'TargetGrants': obj.targetGrants?.map(y => toJson_S3TargetGrant(y)),
    'TargetPrefix': obj.targetPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3MetricsConfiguration
 */
export interface S3MetricsConfiguration {
  /**
   * @schema S3MetricsConfiguration#Id
   */
  readonly id?: string;

  /**
   * @schema S3MetricsConfiguration#Filter
   */
  readonly filter?: S3MetricsFilter;

}

/**
 * Converts an object of type 'S3MetricsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3MetricsConfiguration(obj: S3MetricsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Filter': toJson_S3MetricsFilter(obj.filter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3TopicConfigurationDeprecated' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3TopicConfigurationDeprecated(obj: S3TopicConfigurationDeprecated | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Events': obj.events?.map(y => y),
    'Event': obj.event,
    'Topic': obj.topic,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3QueueConfigurationDeprecated' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3QueueConfigurationDeprecated(obj: S3QueueConfigurationDeprecated | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Event': obj.event,
    'Events': obj.events?.map(y => y),
    'Queue': obj.queue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3CloudFunctionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CloudFunctionConfiguration(obj: S3CloudFunctionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Event': obj.event,
    'Events': obj.events?.map(y => y),
    'CloudFunction': obj.cloudFunction,
    'InvocationRole': obj.invocationRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly topicArn?: string;

  /**
   * @schema S3TopicConfiguration#Events
   */
  readonly events?: string[];

  /**
   * @schema S3TopicConfiguration#Filter
   */
  readonly filter?: S3NotificationConfigurationFilter;

}

/**
 * Converts an object of type 'S3TopicConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3TopicConfiguration(obj: S3TopicConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'TopicArn': obj.topicArn,
    'Events': obj.events?.map(y => y),
    'Filter': toJson_S3NotificationConfigurationFilter(obj.filter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly queueArn?: string;

  /**
   * @schema S3QueueConfiguration#Events
   */
  readonly events?: string[];

  /**
   * @schema S3QueueConfiguration#Filter
   */
  readonly filter?: S3NotificationConfigurationFilter;

}

/**
 * Converts an object of type 'S3QueueConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3QueueConfiguration(obj: S3QueueConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'QueueArn': obj.queueArn,
    'Events': obj.events?.map(y => y),
    'Filter': toJson_S3NotificationConfigurationFilter(obj.filter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly lambdaFunctionArn?: string;

  /**
   * @schema S3LambdaFunctionConfiguration#Events
   */
  readonly events?: string[];

  /**
   * @schema S3LambdaFunctionConfiguration#Filter
   */
  readonly filter?: S3NotificationConfigurationFilter;

}

/**
 * Converts an object of type 'S3LambdaFunctionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3LambdaFunctionConfiguration(obj: S3LambdaFunctionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'LambdaFunctionArn': obj.lambdaFunctionArn,
    'Events': obj.events?.map(y => y),
    'Filter': toJson_S3NotificationConfigurationFilter(obj.filter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3OwnershipControls
 */
export interface S3OwnershipControls {
  /**
   * @schema S3OwnershipControls#Rules
   */
  readonly rules?: S3OwnershipControlsRule[];

}

/**
 * Converts an object of type 'S3OwnershipControls' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3OwnershipControls(obj: S3OwnershipControls | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rules': obj.rules?.map(y => toJson_S3OwnershipControlsRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3PolicyStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PolicyStatus(obj: S3PolicyStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsPublic': obj.isPublic,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ReplicationConfiguration
 */
export interface S3ReplicationConfiguration {
  /**
   * @schema S3ReplicationConfiguration#Role
   */
  readonly role?: string;

  /**
   * @schema S3ReplicationConfiguration#Rules
   */
  readonly rules?: S3ReplicationRule[];

}

/**
 * Converts an object of type 'S3ReplicationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ReplicationConfiguration(obj: S3ReplicationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Role': obj.role,
    'Rules': obj.rules?.map(y => toJson_S3ReplicationRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3Tag
 */
export interface S3Tag {
  /**
   * @schema S3Tag#Key
   */
  readonly key?: string;

  /**
   * @schema S3Tag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'S3Tag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Tag(obj: S3Tag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3RedirectAllRequestsTo
 */
export interface S3RedirectAllRequestsTo {
  /**
   * @schema S3RedirectAllRequestsTo#HostName
   */
  readonly hostName?: string;

  /**
   * @schema S3RedirectAllRequestsTo#Protocol
   */
  readonly protocol?: string;

}

/**
 * Converts an object of type 'S3RedirectAllRequestsTo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3RedirectAllRequestsTo(obj: S3RedirectAllRequestsTo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostName': obj.hostName,
    'Protocol': obj.protocol,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3IndexDocument
 */
export interface S3IndexDocument {
  /**
   * @schema S3IndexDocument#Suffix
   */
  readonly suffix?: string;

}

/**
 * Converts an object of type 'S3IndexDocument' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3IndexDocument(obj: S3IndexDocument | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Suffix': obj.suffix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ErrorDocument
 */
export interface S3ErrorDocument {
  /**
   * @schema S3ErrorDocument#Key
   */
  readonly key?: string;

}

/**
 * Converts an object of type 'S3ErrorDocument' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ErrorDocument(obj: S3ErrorDocument | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly redirect?: S3Redirect;

}

/**
 * Converts an object of type 'S3RoutingRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3RoutingRule(obj: S3RoutingRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Condition': toJson_S3Condition(obj.condition),
    'Redirect': toJson_S3Redirect(obj.redirect),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ObjectLockLegalHold' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ObjectLockLegalHold(obj: S3ObjectLockLegalHold | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ObjectLockConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ObjectLockConfiguration(obj: S3ObjectLockConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectLockEnabled': obj.objectLockEnabled,
    'Rule': toJson_S3ObjectLockRule(obj.rule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ObjectLockRetention' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ObjectLockRetention(obj: S3ObjectLockRetention | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Mode': obj.mode,
    'RetainUntilDate': obj.retainUntilDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3PublicAccessBlockConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3PublicAccessBlockConfiguration(obj: S3PublicAccessBlockConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BlockPublicAcls': obj.blockPublicAcls,
    'IgnorePublicAcls': obj.ignorePublicAcls,
    'BlockPublicPolicy': obj.blockPublicPolicy,
    'RestrictPublicBuckets': obj.restrictPublicBuckets,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3Bucket' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Bucket(obj: S3Bucket | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'CreationDate': obj.creationDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3MultipartUpload' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3MultipartUpload(obj: S3MultipartUpload | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UploadId': obj.uploadId,
    'Key': obj.key,
    'Initiated': obj.initiated,
    'StorageClass': obj.storageClass,
    'Owner': toJson_S3Owner(obj.owner),
    'Initiator': toJson_S3Initiator(obj.initiator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3CommonPrefix' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CommonPrefix(obj: S3CommonPrefix | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prefix': obj.prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ObjectVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ObjectVersion(obj: S3ObjectVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ETag': obj.eTag,
    'Size': obj.size,
    'StorageClass': obj.storageClass,
    'Key': obj.key,
    'VersionId': obj.versionId,
    'IsLatest': obj.isLatest,
    'LastModified': obj.lastModified,
    'Owner': toJson_S3Owner(obj.owner),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3DeleteMarkerEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteMarkerEntry(obj: S3DeleteMarkerEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Owner': toJson_S3Owner(obj.owner),
    'Key': obj.key,
    'VersionId': obj.versionId,
    'IsLatest': obj.isLatest,
    'LastModified': obj.lastModified,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3Object' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Object(obj: S3Object | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'LastModified': obj.lastModified,
    'ETag': obj.eTag,
    'Size': obj.size,
    'StorageClass': obj.storageClass,
    'Owner': toJson_S3Owner(obj.owner),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3Part' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Part(obj: S3Part | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PartNumber': obj.partNumber,
    'LastModified': obj.lastModified,
    'ETag': obj.eTag,
    'Size': obj.size,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3Initiator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Initiator(obj: S3Initiator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ID': obj.id,
    'DisplayName': obj.displayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3AccelerateConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3AccelerateConfiguration(obj: S3AccelerateConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3AccessControlPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3AccessControlPolicy(obj: S3AccessControlPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Grants': obj.grants?.map(y => toJson_S3Grant(y)),
    'Owner': toJson_S3Owner(obj.owner),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3CorsConfiguration
 */
export interface S3CorsConfiguration {
  /**
   * @schema S3CorsConfiguration#CORSRules
   */
  readonly corsRules?: S3CorsRule[];

}

/**
 * Converts an object of type 'S3CorsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CorsConfiguration(obj: S3CorsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CORSRules': obj.corsRules?.map(y => toJson_S3CorsRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3LifecycleConfiguration
 */
export interface S3LifecycleConfiguration {
  /**
   * @schema S3LifecycleConfiguration#Rules
   */
  readonly rules?: S3Rule[];

}

/**
 * Converts an object of type 'S3LifecycleConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3LifecycleConfiguration(obj: S3LifecycleConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rules': obj.rules?.map(y => toJson_S3Rule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3BucketLifecycleConfiguration
 */
export interface S3BucketLifecycleConfiguration {
  /**
   * @schema S3BucketLifecycleConfiguration#Rules
   */
  readonly rules?: S3LifecycleRule[];

}

/**
 * Converts an object of type 'S3BucketLifecycleConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3BucketLifecycleConfiguration(obj: S3BucketLifecycleConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Rules': obj.rules?.map(y => toJson_S3LifecycleRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3BucketLoggingStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3BucketLoggingStatus(obj: S3BucketLoggingStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoggingEnabled': toJson_S3LoggingEnabled(obj.loggingEnabled),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3RequestPaymentConfiguration
 */
export interface S3RequestPaymentConfiguration {
  /**
   * @schema S3RequestPaymentConfiguration#Payer
   */
  readonly payer?: string;

}

/**
 * Converts an object of type 'S3RequestPaymentConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3RequestPaymentConfiguration(obj: S3RequestPaymentConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Payer': obj.payer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3Tagging
 */
export interface S3Tagging {
  /**
   * @schema S3Tagging#TagSet
   */
  readonly tagSet?: S3Tag[];

}

/**
 * Converts an object of type 'S3Tagging' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Tagging(obj: S3Tagging | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagSet': obj.tagSet?.map(y => toJson_S3Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3VersioningConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3VersioningConfiguration(obj: S3VersioningConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MFADelete': obj.mfaDelete,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3WebsiteConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3WebsiteConfiguration(obj: S3WebsiteConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorDocument': toJson_S3ErrorDocument(obj.errorDocument),
    'IndexDocument': toJson_S3IndexDocument(obj.indexDocument),
    'RedirectAllRequestsTo': toJson_S3RedirectAllRequestsTo(obj.redirectAllRequestsTo),
    'RoutingRules': obj.routingRules?.map(y => toJson_S3RoutingRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3RestoreRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3RestoreRequest(obj: S3RestoreRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Days': obj.days,
    'GlacierJobParameters': toJson_S3GlacierJobParameters(obj.glacierJobParameters),
    'Type': obj.type,
    'Tier': obj.tier,
    'Description': obj.description,
    'SelectParameters': toJson_S3SelectParameters(obj.selectParameters),
    'OutputLocation': toJson_S3OutputLocation(obj.outputLocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3RequestProgress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3RequestProgress(obj: S3RequestProgress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3InputSerialization' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3InputSerialization(obj: S3InputSerialization | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CSV': toJson_S3CsvInput(obj.csv),
    'CompressionType': obj.compressionType,
    'JSON': toJson_S3JsonInput(obj.json),
    'Parquet': toJson_S3ParquetInput(obj.parquet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3OutputSerialization' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3OutputSerialization(obj: S3OutputSerialization | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CSV': toJson_S3CsvOutput(obj.csv),
    'JSON': toJson_S3JsonOutput(obj.json),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ScanRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ScanRange(obj: S3ScanRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Start': obj.start,
    'End': obj.end,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3SelectObjectContentEventStream' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3SelectObjectContentEventStream(obj: S3SelectObjectContentEventStream | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Records': toJson_S3RecordsEvent(obj.records),
    'Stats': toJson_S3StatsEvent(obj.stats),
    'Progress': toJson_S3ProgressEvent(obj.progress),
    'Cont': toJson_S3ContinuationEvent(obj.cont),
    'End': toJson_S3EndEvent(obj.end),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3CopyPartResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CopyPartResult(obj: S3CopyPartResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ETag': obj.eTag,
    'LastModified': obj.lastModified,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3CompletedPart' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CompletedPart(obj: S3CompletedPart | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ETag': obj.eTag,
    'PartNumber': obj.partNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ObjectIdentifier
 */
export interface S3ObjectIdentifier {
  /**
   * @schema S3ObjectIdentifier#Key
   */
  readonly key?: string;

  /**
   * @schema S3ObjectIdentifier#VersionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'S3ObjectIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ObjectIdentifier(obj: S3ObjectIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly type?: string;

  /**
   * @schema S3Grantee#URI
   */
  readonly uri?: string;

}

/**
 * Converts an object of type 'S3Grantee' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Grantee(obj: S3Grantee | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DisplayName': obj.displayName,
    'EmailAddress': obj.emailAddress,
    'ID': obj.id,
    'Type': obj.type,
    'URI': obj.uri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3AnalyticsFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3AnalyticsFilter(obj: S3AnalyticsFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prefix': obj.prefix,
    'Tag': toJson_S3Tag(obj.tag),
    'And': toJson_S3AnalyticsAndOperator(obj.and),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3StorageClassAnalysis' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3StorageClassAnalysis(obj: S3StorageClassAnalysis | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataExport': toJson_S3StorageClassAnalysisDataExport(obj.dataExport),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ServerSideEncryptionRule
 */
export interface S3ServerSideEncryptionRule {
  /**
   * @schema S3ServerSideEncryptionRule#ApplyServerSideEncryptionByDefault
   */
  readonly applyServerSideEncryptionByDefault?: S3ServerSideEncryptionByDefault;

  /**
   * @schema S3ServerSideEncryptionRule#BucketKeyEnabled
   */
  readonly bucketKeyEnabled?: boolean;

}

/**
 * Converts an object of type 'S3ServerSideEncryptionRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ServerSideEncryptionRule(obj: S3ServerSideEncryptionRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApplyServerSideEncryptionByDefault': toJson_S3ServerSideEncryptionByDefault(obj.applyServerSideEncryptionByDefault),
    'BucketKeyEnabled': obj.bucketKeyEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3IntelligentTieringFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3IntelligentTieringFilter(obj: S3IntelligentTieringFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prefix': obj.prefix,
    'Tag': toJson_S3Tag(obj.tag),
    'And': toJson_S3IntelligentTieringAndOperator(obj.and),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3Tiering
 */
export interface S3Tiering {
  /**
   * @schema S3Tiering#Days
   */
  readonly days?: number;

  /**
   * @schema S3Tiering#AccessTier
   */
  readonly accessTier?: string;

}

/**
 * Converts an object of type 'S3Tiering' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Tiering(obj: S3Tiering | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Days': obj.days,
    'AccessTier': obj.accessTier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3InventoryDestination
 */
export interface S3InventoryDestination {
  /**
   * @schema S3InventoryDestination#S3BucketDestination
   */
  readonly s3BucketDestination?: S3InventoryS3BucketDestination;

}

/**
 * Converts an object of type 'S3InventoryDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3InventoryDestination(obj: S3InventoryDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3BucketDestination': toJson_S3InventoryS3BucketDestination(obj.s3BucketDestination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3InventoryFilter
 */
export interface S3InventoryFilter {
  /**
   * @schema S3InventoryFilter#Prefix
   */
  readonly prefix?: string;

}

/**
 * Converts an object of type 'S3InventoryFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3InventoryFilter(obj: S3InventoryFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prefix': obj.prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3InventorySchedule
 */
export interface S3InventorySchedule {
  /**
   * @schema S3InventorySchedule#Frequency
   */
  readonly frequency?: string;

}

/**
 * Converts an object of type 'S3InventorySchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3InventorySchedule(obj: S3InventorySchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Frequency': obj.frequency,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3LifecycleExpiration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3LifecycleExpiration(obj: S3LifecycleExpiration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Date': obj.date,
    'Days': obj.days,
    'ExpiredObjectDeleteMarker': obj.expiredObjectDeleteMarker,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3Transition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Transition(obj: S3Transition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Date': obj.date,
    'Days': obj.days,
    'StorageClass': obj.storageClass,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3NoncurrentVersionTransition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3NoncurrentVersionTransition(obj: S3NoncurrentVersionTransition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NoncurrentDays': obj.noncurrentDays,
    'StorageClass': obj.storageClass,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3NoncurrentVersionExpiration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3NoncurrentVersionExpiration(obj: S3NoncurrentVersionExpiration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NoncurrentDays': obj.noncurrentDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3AbortIncompleteMultipartUpload' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3AbortIncompleteMultipartUpload(obj: S3AbortIncompleteMultipartUpload | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DaysAfterInitiation': obj.daysAfterInitiation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3LifecycleRuleFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3LifecycleRuleFilter(obj: S3LifecycleRuleFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prefix': obj.prefix,
    'Tag': toJson_S3Tag(obj.tag),
    'And': toJson_S3LifecycleRuleAndOperator(obj.and),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3TargetGrant' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3TargetGrant(obj: S3TargetGrant | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Grantee': toJson_S3Grantee(obj.grantee),
    'Permission': obj.permission,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3MetricsFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3MetricsFilter(obj: S3MetricsFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prefix': obj.prefix,
    'Tag': toJson_S3Tag(obj.tag),
    'And': toJson_S3MetricsAndOperator(obj.and),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3NotificationConfigurationFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3NotificationConfigurationFilter(obj: S3NotificationConfigurationFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': toJson_S3S3KeyFilter(obj.key),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3OwnershipControlsRule
 */
export interface S3OwnershipControlsRule {
  /**
   * @schema S3OwnershipControlsRule#ObjectOwnership
   */
  readonly objectOwnership?: string;

}

/**
 * Converts an object of type 'S3OwnershipControlsRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3OwnershipControlsRule(obj: S3OwnershipControlsRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectOwnership': obj.objectOwnership,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly status?: string;

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
  readonly destination?: S3Destination;

  /**
   * @schema S3ReplicationRule#DeleteMarkerReplication
   */
  readonly deleteMarkerReplication?: S3DeleteMarkerReplication;

}

/**
 * Converts an object of type 'S3ReplicationRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ReplicationRule(obj: S3ReplicationRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ID': obj.id,
    'Priority': obj.priority,
    'Prefix': obj.prefix,
    'Filter': toJson_S3ReplicationRuleFilter(obj.filter),
    'Status': obj.status,
    'SourceSelectionCriteria': toJson_S3SourceSelectionCriteria(obj.sourceSelectionCriteria),
    'ExistingObjectReplication': toJson_S3ExistingObjectReplication(obj.existingObjectReplication),
    'Destination': toJson_S3Destination(obj.destination),
    'DeleteMarkerReplication': toJson_S3DeleteMarkerReplication(obj.deleteMarkerReplication),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3Condition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Condition(obj: S3Condition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HttpErrorCodeReturnedEquals': obj.httpErrorCodeReturnedEquals,
    'KeyPrefixEquals': obj.keyPrefixEquals,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3Redirect' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Redirect(obj: S3Redirect | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostName': obj.hostName,
    'HttpRedirectCode': obj.httpRedirectCode,
    'Protocol': obj.protocol,
    'ReplaceKeyPrefixWith': obj.replaceKeyPrefixWith,
    'ReplaceKeyWith': obj.replaceKeyWith,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ObjectLockRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ObjectLockRule(obj: S3ObjectLockRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultRetention': toJson_S3DefaultRetention(obj.defaultRetention),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3GlacierJobParameters
 */
export interface S3GlacierJobParameters {
  /**
   * @schema S3GlacierJobParameters#Tier
   */
  readonly tier?: string;

}

/**
 * Converts an object of type 'S3GlacierJobParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3GlacierJobParameters(obj: S3GlacierJobParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tier': obj.tier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3SelectParameters
 */
export interface S3SelectParameters {
  /**
   * @schema S3SelectParameters#InputSerialization
   */
  readonly inputSerialization?: S3InputSerialization;

  /**
   * @schema S3SelectParameters#ExpressionType
   */
  readonly expressionType?: string;

  /**
   * @schema S3SelectParameters#Expression
   */
  readonly expression?: string;

  /**
   * @schema S3SelectParameters#OutputSerialization
   */
  readonly outputSerialization?: S3OutputSerialization;

}

/**
 * Converts an object of type 'S3SelectParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3SelectParameters(obj: S3SelectParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputSerialization': toJson_S3InputSerialization(obj.inputSerialization),
    'ExpressionType': obj.expressionType,
    'Expression': obj.expression,
    'OutputSerialization': toJson_S3OutputSerialization(obj.outputSerialization),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3OutputLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3OutputLocation(obj: S3OutputLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3': toJson_S3S3Location(obj.s3),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3CsvInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CsvInput(obj: S3CsvInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FileHeaderInfo': obj.fileHeaderInfo,
    'Comments': obj.comments,
    'QuoteEscapeCharacter': obj.quoteEscapeCharacter,
    'RecordDelimiter': obj.recordDelimiter,
    'FieldDelimiter': obj.fieldDelimiter,
    'QuoteCharacter': obj.quoteCharacter,
    'AllowQuotedRecordDelimiter': obj.allowQuotedRecordDelimiter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3JsonInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3JsonInput(obj: S3JsonInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ParquetInput
 */
export interface S3ParquetInput {
}

/**
 * Converts an object of type 'S3ParquetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ParquetInput(obj: S3ParquetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3CsvOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3CsvOutput(obj: S3CsvOutput | undefined): Record<string, any> | undefined {
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
 * @schema S3JsonOutput
 */
export interface S3JsonOutput {
  /**
   * @schema S3JsonOutput#RecordDelimiter
   */
  readonly recordDelimiter?: string;

}

/**
 * Converts an object of type 'S3JsonOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3JsonOutput(obj: S3JsonOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecordDelimiter': obj.recordDelimiter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3RecordsEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3RecordsEvent(obj: S3RecordsEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Payload': obj.payload,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3StatsEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3StatsEvent(obj: S3StatsEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Details': toJson_S3Stats(obj.details),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ProgressEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ProgressEvent(obj: S3ProgressEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Details': toJson_S3Progress(obj.details),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ContinuationEvent
 */
export interface S3ContinuationEvent {
}

/**
 * Converts an object of type 'S3ContinuationEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ContinuationEvent(obj: S3ContinuationEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3EndEvent
 */
export interface S3EndEvent {
}

/**
 * Converts an object of type 'S3EndEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3EndEvent(obj: S3EndEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3AnalyticsAndOperator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3AnalyticsAndOperator(obj: S3AnalyticsAndOperator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prefix': obj.prefix,
    'Tags': obj.tags?.map(y => toJson_S3Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3StorageClassAnalysisDataExport
 */
export interface S3StorageClassAnalysisDataExport {
  /**
   * @schema S3StorageClassAnalysisDataExport#OutputSchemaVersion
   */
  readonly outputSchemaVersion?: string;

  /**
   * @schema S3StorageClassAnalysisDataExport#Destination
   */
  readonly destination?: S3AnalyticsExportDestination;

}

/**
 * Converts an object of type 'S3StorageClassAnalysisDataExport' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3StorageClassAnalysisDataExport(obj: S3StorageClassAnalysisDataExport | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputSchemaVersion': obj.outputSchemaVersion,
    'Destination': toJson_S3AnalyticsExportDestination(obj.destination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ServerSideEncryptionByDefault
 */
export interface S3ServerSideEncryptionByDefault {
  /**
   * @schema S3ServerSideEncryptionByDefault#SSEAlgorithm
   */
  readonly sseAlgorithm?: string;

  /**
   * @schema S3ServerSideEncryptionByDefault#KMSMasterKeyID
   */
  readonly kmsMasterKeyId?: string;

}

/**
 * Converts an object of type 'S3ServerSideEncryptionByDefault' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ServerSideEncryptionByDefault(obj: S3ServerSideEncryptionByDefault | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SSEAlgorithm': obj.sseAlgorithm,
    'KMSMasterKeyID': obj.kmsMasterKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3IntelligentTieringAndOperator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3IntelligentTieringAndOperator(obj: S3IntelligentTieringAndOperator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prefix': obj.prefix,
    'Tags': obj.tags?.map(y => toJson_S3Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly bucket?: string;

  /**
   * @schema S3InventoryS3BucketDestination#Format
   */
  readonly format?: string;

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
 * Converts an object of type 'S3InventoryS3BucketDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3InventoryS3BucketDestination(obj: S3InventoryS3BucketDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountId': obj.accountId,
    'Bucket': obj.bucket,
    'Format': obj.format,
    'Prefix': obj.prefix,
    'Encryption': toJson_S3InventoryEncryption(obj.encryption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3LifecycleRuleAndOperator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3LifecycleRuleAndOperator(obj: S3LifecycleRuleAndOperator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prefix': obj.prefix,
    'Tags': obj.tags?.map(y => toJson_S3Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3MetricsAndOperator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3MetricsAndOperator(obj: S3MetricsAndOperator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prefix': obj.prefix,
    'Tags': obj.tags?.map(y => toJson_S3Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3S3KeyFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3S3KeyFilter(obj: S3S3KeyFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FilterRules': obj.filterRules?.map(y => toJson_S3FilterRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ReplicationRuleFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ReplicationRuleFilter(obj: S3ReplicationRuleFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prefix': obj.prefix,
    'Tag': toJson_S3Tag(obj.tag),
    'And': toJson_S3ReplicationRuleAndOperator(obj.and),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3SourceSelectionCriteria
 */
export interface S3SourceSelectionCriteria {
  /**
   * @schema S3SourceSelectionCriteria#SseKmsEncryptedObjects
   */
  readonly sseKmsEncryptedObjects?: S3SseKmsEncryptedObjects;

  /**
   * @schema S3SourceSelectionCriteria#ReplicaModifications
   */
  readonly replicaModifications?: S3ReplicaModifications;

}

/**
 * Converts an object of type 'S3SourceSelectionCriteria' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3SourceSelectionCriteria(obj: S3SourceSelectionCriteria | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SseKmsEncryptedObjects': toJson_S3SseKmsEncryptedObjects(obj.sseKmsEncryptedObjects),
    'ReplicaModifications': toJson_S3ReplicaModifications(obj.replicaModifications),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ExistingObjectReplication
 */
export interface S3ExistingObjectReplication {
  /**
   * @schema S3ExistingObjectReplication#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'S3ExistingObjectReplication' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ExistingObjectReplication(obj: S3ExistingObjectReplication | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3Destination
 */
export interface S3Destination {
  /**
   * @schema S3Destination#Bucket
   */
  readonly bucket?: string;

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
 * Converts an object of type 'S3Destination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Destination(obj: S3Destination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Account': obj.account,
    'StorageClass': obj.storageClass,
    'AccessControlTranslation': toJson_S3AccessControlTranslation(obj.accessControlTranslation),
    'EncryptionConfiguration': toJson_S3EncryptionConfiguration(obj.encryptionConfiguration),
    'ReplicationTime': toJson_S3ReplicationTime(obj.replicationTime),
    'Metrics': toJson_S3Metrics(obj.metrics),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3DeleteMarkerReplication' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DeleteMarkerReplication(obj: S3DeleteMarkerReplication | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3DefaultRetention' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3DefaultRetention(obj: S3DefaultRetention | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Mode': obj.mode,
    'Days': obj.days,
    'Years': obj.years,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3S3Location
 */
export interface S3S3Location {
  /**
   * @schema S3S3Location#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema S3S3Location#Prefix
   */
  readonly prefix?: string;

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
 * Converts an object of type 'S3S3Location' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3S3Location(obj: S3S3Location | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketName': obj.bucketName,
    'Prefix': obj.prefix,
    'Encryption': toJson_S3Encryption(obj.encryption),
    'CannedACL': obj.cannedAcl,
    'AccessControlList': obj.accessControlList?.map(y => toJson_S3Grant(y)),
    'Tagging': toJson_S3Tagging(obj.tagging),
    'UserMetadata': obj.userMetadata?.map(y => toJson_S3MetadataEntry(y)),
    'StorageClass': obj.storageClass,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3Stats' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Stats(obj: S3Stats | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BytesScanned': obj.bytesScanned,
    'BytesProcessed': obj.bytesProcessed,
    'BytesReturned': obj.bytesReturned,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3Progress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Progress(obj: S3Progress | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BytesScanned': obj.bytesScanned,
    'BytesProcessed': obj.bytesProcessed,
    'BytesReturned': obj.bytesReturned,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3AnalyticsExportDestination
 */
export interface S3AnalyticsExportDestination {
  /**
   * @schema S3AnalyticsExportDestination#S3BucketDestination
   */
  readonly s3BucketDestination?: S3AnalyticsS3BucketDestination;

}

/**
 * Converts an object of type 'S3AnalyticsExportDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3AnalyticsExportDestination(obj: S3AnalyticsExportDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3BucketDestination': toJson_S3AnalyticsS3BucketDestination(obj.s3BucketDestination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3InventoryEncryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3InventoryEncryption(obj: S3InventoryEncryption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SSES3': toJson_S3Sses3(obj.sses3),
    'SSEKMS': toJson_S3Ssekms(obj.ssekms),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3FilterRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3FilterRule(obj: S3FilterRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3ReplicationRuleAndOperator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ReplicationRuleAndOperator(obj: S3ReplicationRuleAndOperator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prefix': obj.prefix,
    'Tags': obj.tags?.map(y => toJson_S3Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3SseKmsEncryptedObjects
 */
export interface S3SseKmsEncryptedObjects {
  /**
   * @schema S3SseKmsEncryptedObjects#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'S3SseKmsEncryptedObjects' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3SseKmsEncryptedObjects(obj: S3SseKmsEncryptedObjects | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ReplicaModifications
 */
export interface S3ReplicaModifications {
  /**
   * @schema S3ReplicaModifications#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'S3ReplicaModifications' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ReplicaModifications(obj: S3ReplicaModifications | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3AccessControlTranslation
 */
export interface S3AccessControlTranslation {
  /**
   * @schema S3AccessControlTranslation#Owner
   */
  readonly owner?: string;

}

/**
 * Converts an object of type 'S3AccessControlTranslation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3AccessControlTranslation(obj: S3AccessControlTranslation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Owner': obj.owner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'S3EncryptionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3EncryptionConfiguration(obj: S3EncryptionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReplicaKmsKeyID': obj.replicaKmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ReplicationTime
 */
export interface S3ReplicationTime {
  /**
   * @schema S3ReplicationTime#Status
   */
  readonly status?: string;

  /**
   * @schema S3ReplicationTime#Time
   */
  readonly time?: S3ReplicationTimeValue;

}

/**
 * Converts an object of type 'S3ReplicationTime' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ReplicationTime(obj: S3ReplicationTime | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'Time': toJson_S3ReplicationTimeValue(obj.time),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3Metrics
 */
export interface S3Metrics {
  /**
   * @schema S3Metrics#Status
   */
  readonly status?: string;

  /**
   * @schema S3Metrics#EventThreshold
   */
  readonly eventThreshold?: S3ReplicationTimeValue;

}

/**
 * Converts an object of type 'S3Metrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Metrics(obj: S3Metrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'EventThreshold': toJson_S3ReplicationTimeValue(obj.eventThreshold),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3Encryption
 */
export interface S3Encryption {
  /**
   * @schema S3Encryption#EncryptionType
   */
  readonly encryptionType?: string;

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
 * Converts an object of type 'S3Encryption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Encryption(obj: S3Encryption | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'S3MetadataEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3MetadataEntry(obj: S3MetadataEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3AnalyticsS3BucketDestination
 */
export interface S3AnalyticsS3BucketDestination {
  /**
   * @schema S3AnalyticsS3BucketDestination#Format
   */
  readonly format?: string;

  /**
   * @schema S3AnalyticsS3BucketDestination#BucketAccountId
   */
  readonly bucketAccountId?: string;

  /**
   * @schema S3AnalyticsS3BucketDestination#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3AnalyticsS3BucketDestination#Prefix
   */
  readonly prefix?: string;

}

/**
 * Converts an object of type 'S3AnalyticsS3BucketDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3AnalyticsS3BucketDestination(obj: S3AnalyticsS3BucketDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Format': obj.format,
    'BucketAccountId': obj.bucketAccountId,
    'Bucket': obj.bucket,
    'Prefix': obj.prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3Sses3
 */
export interface S3Sses3 {
}

/**
 * Converts an object of type 'S3Sses3' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Sses3(obj: S3Sses3 | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3Ssekms
 */
export interface S3Ssekms {
  /**
   * @schema S3Ssekms#KeyId
   */
  readonly keyId?: string;

}

/**
 * Converts an object of type 'S3Ssekms' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3Ssekms(obj: S3Ssekms | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema S3ReplicationTimeValue
 */
export interface S3ReplicationTimeValue {
  /**
   * @schema S3ReplicationTimeValue#Minutes
   */
  readonly minutes?: number;

}

/**
 * Converts an object of type 'S3ReplicationTimeValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_S3ReplicationTimeValue(obj: S3ReplicationTimeValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Minutes': obj.minutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
