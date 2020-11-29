import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

/**
 * Response for AbortMultipartUpload.
 */
export class AbortMultipartUploadOutput {
  /**
   * Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'abortMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('AbortMultipartUpload.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'AbortMultipartUpload.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.AbortMultipartUploadRequest) {
  }
}

/**
 * Response for CompleteMultipartUpload.
 */
export class CompleteMultipartUploadOutput {
  /**
   * The URI that identifies the newly created object.
   */
  public get location(): shapes.Location {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CompleteMultipartUpload.Location'),
        outputPath: 'Location',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MultipartUpload: {
            Parts: this.input.multipartUpload?.parts,
          },
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CompleteMultipartUpload.Location', props);
    return request.getResponseField('Location') as unknown as shapes.Location;
  }
  /**
   * The name of the bucket that contains the newly created object. When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  public get bucket(): shapes.BucketName {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CompleteMultipartUpload.Bucket'),
        outputPath: 'Bucket',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MultipartUpload: {
            Parts: this.input.multipartUpload?.parts,
          },
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CompleteMultipartUpload.Bucket', props);
    return request.getResponseField('Bucket') as unknown as shapes.BucketName;
  }
  /**
   * The object key of the newly created object.
   */
  public get key(): shapes.ObjectKey {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CompleteMultipartUpload.Key'),
        outputPath: 'Key',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MultipartUpload: {
            Parts: this.input.multipartUpload?.parts,
          },
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CompleteMultipartUpload.Key', props);
    return request.getResponseField('Key') as unknown as shapes.ObjectKey;
  }
  /**
   * If the object expiration is configured, this will contain the expiration date (expiry-date) and rule ID (rule-id). The value of rule-id is URL encoded.
   */
  public get expiration(): shapes.Expiration {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CompleteMultipartUpload.Expiration'),
        outputPath: 'Expiration',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MultipartUpload: {
            Parts: this.input.multipartUpload?.parts,
          },
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CompleteMultipartUpload.Expiration', props);
    return request.getResponseField('Expiration') as unknown as shapes.Expiration;
  }
  /**
   * Entity tag that identifies the newly created object's data. Objects with different object data will have different entity tags. The entity tag is an opaque string. The entity tag may or may not be an MD5 digest of the object data. If the entity tag is not an MD5 digest of the object data, it will contain one or more nonhexadecimal characters and/or will consist of less than 32 or more than 32 hexadecimal digits.
   */
  public get eTag(): shapes.ETag {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CompleteMultipartUpload.ETag'),
        outputPath: 'ETag',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MultipartUpload: {
            Parts: this.input.multipartUpload?.parts,
          },
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CompleteMultipartUpload.ETag', props);
    return request.getResponseField('ETag') as unknown as shapes.ETag;
  }
  /**
   * If you specified server-side encryption either with an Amazon S3-managed encryption key or an AWS KMS customer master key (CMK) in your initiate multipart upload request, the response includes this header. It confirms the encryption algorithm that Amazon S3 used to encrypt the object.
   */
  public get serverSideEncryption(): shapes.ServerSideEncryption {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CompleteMultipartUpload.ServerSideEncryption'),
        outputPath: 'ServerSideEncryption',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MultipartUpload: {
            Parts: this.input.multipartUpload?.parts,
          },
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CompleteMultipartUpload.ServerSideEncryption', props);
    return request.getResponseField('ServerSideEncryption') as unknown as shapes.ServerSideEncryption;
  }
  /**
   * Version ID of the newly created object, in case the bucket has versioning turned on.
   */
  public get versionId(): shapes.ObjectVersionId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CompleteMultipartUpload.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MultipartUpload: {
            Parts: this.input.multipartUpload?.parts,
          },
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CompleteMultipartUpload.VersionId', props);
    return request.getResponseField('VersionId') as unknown as shapes.ObjectVersionId;
  }
  /**
   * If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key (CMK) that was used for the object.
   */
  public get ssekmsKeyId(): shapes.SSEKMSKeyId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CompleteMultipartUpload.SSEKMSKeyId'),
        outputPath: 'SSEKMSKeyId',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MultipartUpload: {
            Parts: this.input.multipartUpload?.parts,
          },
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CompleteMultipartUpload.SSEKMSKeyId', props);
    return request.getResponseField('SSEKMSKeyId') as unknown as shapes.SSEKMSKeyId;
  }
  /**
   * If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key (CMK) that was used for the object.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CompleteMultipartUpload.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MultipartUpload: {
            Parts: this.input.multipartUpload?.parts,
          },
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CompleteMultipartUpload.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.CompleteMultipartUploadRequest) {
  }
}

/**
 * Response for CopyObject.
 */
export class CopyObjectOutput {
  /**
   * Response for CopyObjectOutput.CopyObjectResult
   */
  static CopyObjectResultResponse = class {
    /**
     * Returns the ETag of the new object. The ETag reflects only changes to the contents of an object, not its metadata. The source and destination ETag is identical for a successfully copied object.
     */
    public get eTag(): shapes.ETag {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'copyObject',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('CopyObject.CopyObjectResult.ETag'),
          outputPath: 'CopyObjectResult.ETag',
          parameters: {
            ACL: this.input.acl,
            Bucket: this.input.bucket,
            CacheControl: this.input.cacheControl,
            ContentDisposition: this.input.contentDisposition,
            ContentEncoding: this.input.contentEncoding,
            ContentLanguage: this.input.contentLanguage,
            ContentType: this.input.contentType,
            CopySource: this.input.copySource,
            CopySourceIfMatch: this.input.copySourceIfMatch,
            CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
            CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
            CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
            Expires: this.input.expires,
            GrantFullControl: this.input.grantFullControl,
            GrantRead: this.input.grantRead,
            GrantReadACP: this.input.grantReadAcp,
            GrantWriteACP: this.input.grantWriteAcp,
            Key: this.input.key,
            Metadata: this.input.metadata,
            MetadataDirective: this.input.metadataDirective,
            TaggingDirective: this.input.taggingDirective,
            ServerSideEncryption: this.input.serverSideEncryption,
            StorageClass: this.input.storageClass,
            WebsiteRedirectLocation: this.input.websiteRedirectLocation,
            SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
            SSECustomerKey: this.input.sseCustomerKey,
            SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
            SSEKMSKeyId: this.input.ssekmsKeyId,
            SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
            CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
            CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
            CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
            RequestPayer: this.input.requestPayer,
            Tagging: this.input.tagging,
            ObjectLockMode: this.input.objectLockMode,
            ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
            ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
            ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CopyObject.CopyObjectResult.ETag', props);
      return request.getResponseField('CopyObjectResult.ETag') as unknown as shapes.ETag;
    }
    /**
     * Returns the date that the object was last modified.
     */
    public get lastModified(): shapes.LastModified {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'copyObject',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('CopyObject.CopyObjectResult.LastModified'),
          outputPath: 'CopyObjectResult.LastModified',
          parameters: {
            ACL: this.input.acl,
            Bucket: this.input.bucket,
            CacheControl: this.input.cacheControl,
            ContentDisposition: this.input.contentDisposition,
            ContentEncoding: this.input.contentEncoding,
            ContentLanguage: this.input.contentLanguage,
            ContentType: this.input.contentType,
            CopySource: this.input.copySource,
            CopySourceIfMatch: this.input.copySourceIfMatch,
            CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
            CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
            CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
            Expires: this.input.expires,
            GrantFullControl: this.input.grantFullControl,
            GrantRead: this.input.grantRead,
            GrantReadACP: this.input.grantReadAcp,
            GrantWriteACP: this.input.grantWriteAcp,
            Key: this.input.key,
            Metadata: this.input.metadata,
            MetadataDirective: this.input.metadataDirective,
            TaggingDirective: this.input.taggingDirective,
            ServerSideEncryption: this.input.serverSideEncryption,
            StorageClass: this.input.storageClass,
            WebsiteRedirectLocation: this.input.websiteRedirectLocation,
            SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
            SSECustomerKey: this.input.sseCustomerKey,
            SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
            SSEKMSKeyId: this.input.ssekmsKeyId,
            SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
            CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
            CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
            CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
            RequestPayer: this.input.requestPayer,
            Tagging: this.input.tagging,
            ObjectLockMode: this.input.objectLockMode,
            ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
            ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
            ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'CopyObject.CopyObjectResult.LastModified', props);
      return request.getResponseField('CopyObjectResult.LastModified') as unknown as shapes.LastModified;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.CopyObjectRequest) {
    }
  }
  public get copyObjectResult(): InstanceType<typeof CopyObjectOutput.CopyObjectResultResponse> {
    return new CopyObjectOutput.CopyObjectResultResponse(this.scope, this.resources, this.input);
  }

  /**
   * If the object expiration is configured, the response includes this header.
   */
  public get expiration(): shapes.Expiration {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CopyObject.Expiration'),
        outputPath: 'Expiration',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          CopySource: this.input.copySource,
          CopySourceIfMatch: this.input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          MetadataDirective: this.input.metadataDirective,
          TaggingDirective: this.input.taggingDirective,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CopyObject.Expiration', props);
    return request.getResponseField('Expiration') as unknown as shapes.Expiration;
  }
  /**
   * Version of the copied object in the destination bucket.
   */
  public get copySourceVersionId(): shapes.CopySourceVersionId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CopyObject.CopySourceVersionId'),
        outputPath: 'CopySourceVersionId',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          CopySource: this.input.copySource,
          CopySourceIfMatch: this.input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          MetadataDirective: this.input.metadataDirective,
          TaggingDirective: this.input.taggingDirective,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CopyObject.CopySourceVersionId', props);
    return request.getResponseField('CopySourceVersionId') as unknown as shapes.CopySourceVersionId;
  }
  /**
   * Version ID of the newly created copy.
   */
  public get versionId(): shapes.ObjectVersionId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CopyObject.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          CopySource: this.input.copySource,
          CopySourceIfMatch: this.input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          MetadataDirective: this.input.metadataDirective,
          TaggingDirective: this.input.taggingDirective,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CopyObject.VersionId', props);
    return request.getResponseField('VersionId') as unknown as shapes.ObjectVersionId;
  }
  /**
   * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
   */
  public get serverSideEncryption(): shapes.ServerSideEncryption {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CopyObject.ServerSideEncryption'),
        outputPath: 'ServerSideEncryption',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          CopySource: this.input.copySource,
          CopySourceIfMatch: this.input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          MetadataDirective: this.input.metadataDirective,
          TaggingDirective: this.input.taggingDirective,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CopyObject.ServerSideEncryption', props);
    return request.getResponseField('ServerSideEncryption') as unknown as shapes.ServerSideEncryption;
  }
  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
   */
  public get sseCustomerAlgorithm(): shapes.SSECustomerAlgorithm {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CopyObject.SSECustomerAlgorithm'),
        outputPath: 'SSECustomerAlgorithm',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          CopySource: this.input.copySource,
          CopySourceIfMatch: this.input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          MetadataDirective: this.input.metadataDirective,
          TaggingDirective: this.input.taggingDirective,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CopyObject.SSECustomerAlgorithm', props);
    return request.getResponseField('SSECustomerAlgorithm') as unknown as shapes.SSECustomerAlgorithm;
  }
  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round-trip message integrity verification of the customer-provided encryption key.
   */
  public get sseCustomerKeyMd5(): shapes.SSECustomerKeyMD5 {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CopyObject.SSECustomerKeyMD5'),
        outputPath: 'SSECustomerKeyMD5',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          CopySource: this.input.copySource,
          CopySourceIfMatch: this.input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          MetadataDirective: this.input.metadataDirective,
          TaggingDirective: this.input.taggingDirective,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CopyObject.SSECustomerKeyMD5', props);
    return request.getResponseField('SSECustomerKeyMD5') as unknown as shapes.SSECustomerKeyMD5;
  }
  /**
   * If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key (CMK) that was used for the object.
   */
  public get ssekmsKeyId(): shapes.SSEKMSKeyId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CopyObject.SSEKMSKeyId'),
        outputPath: 'SSEKMSKeyId',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          CopySource: this.input.copySource,
          CopySourceIfMatch: this.input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          MetadataDirective: this.input.metadataDirective,
          TaggingDirective: this.input.taggingDirective,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CopyObject.SSEKMSKeyId', props);
    return request.getResponseField('SSEKMSKeyId') as unknown as shapes.SSEKMSKeyId;
  }
  /**
   * If present, specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.
   */
  public get ssekmsEncryptionContext(): shapes.SSEKMSEncryptionContext {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CopyObject.SSEKMSEncryptionContext'),
        outputPath: 'SSEKMSEncryptionContext',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          CopySource: this.input.copySource,
          CopySourceIfMatch: this.input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          MetadataDirective: this.input.metadataDirective,
          TaggingDirective: this.input.taggingDirective,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CopyObject.SSEKMSEncryptionContext', props);
    return request.getResponseField('SSEKMSEncryptionContext') as unknown as shapes.SSEKMSEncryptionContext;
  }
  /**
   * If present, specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'copyObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CopyObject.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          CopySource: this.input.copySource,
          CopySourceIfMatch: this.input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          MetadataDirective: this.input.metadataDirective,
          TaggingDirective: this.input.taggingDirective,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CopyObject.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.CopyObjectRequest) {
  }
}

/**
 * Response for CreateBucket.
 */
export class CreateBucketOutput {
  /**
   * Specifies the Region where the bucket will be created. If you are creating a bucket on the US East (N. Virginia) Region (us-east-1), you do not need to specify the location.
   */
  public get location(): shapes.Location {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'createBucket',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CreateBucket.Location'),
        outputPath: 'Location',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CreateBucketConfiguration: {
            LocationConstraint: this.input.createBucketConfiguration?.locationConstraint,
          },
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWrite: this.input.grantWrite,
          GrantWriteACP: this.input.grantWriteAcp,
          ObjectLockEnabledForBucket: this.input.objectLockEnabledForBucket,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CreateBucket.Location', props);
    return request.getResponseField('Location') as unknown as shapes.Location;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.CreateBucketRequest) {
  }
}

/**
 * Response for CreateMultipartUpload.
 */
export class CreateMultipartUploadOutput {
  /**
   * If the bucket has a lifecycle rule configured with an action to abort incomplete multipart uploads and the prefix in the lifecycle rule matches the object name in the request, the response includes this header. The header indicates when the initiated multipart upload becomes eligible for an abort operation. For more information, see  Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy. The response also includes the x-amz-abort-rule-id header that provides the ID of the lifecycle configuration rule that defines this action.
   */
  public get abortDate(): shapes.AbortDate {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CreateMultipartUpload.AbortDate'),
        outputPath: 'AbortDate',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CreateMultipartUpload.AbortDate', props);
    return request.getResponseField('AbortDate') as unknown as shapes.AbortDate;
  }
  /**
   * This header is returned along with the x-amz-abort-date header. It identifies the applicable lifecycle configuration rule that defines the action to abort incomplete multipart uploads.
   */
  public get abortRuleId(): shapes.AbortRuleId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CreateMultipartUpload.AbortRuleId'),
        outputPath: 'AbortRuleId',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CreateMultipartUpload.AbortRuleId', props);
    return request.getResponseField('AbortRuleId') as unknown as shapes.AbortRuleId;
  }
  /**
   * The name of the bucket to which the multipart upload was initiated.  When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  public get bucket(): shapes.BucketName {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CreateMultipartUpload.Bucket'),
        outputPath: 'Bucket',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CreateMultipartUpload.Bucket', props);
    return request.getResponseField('Bucket') as unknown as shapes.BucketName;
  }
  /**
   * Object key for which the multipart upload was initiated.
   */
  public get key(): shapes.ObjectKey {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CreateMultipartUpload.Key'),
        outputPath: 'Key',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CreateMultipartUpload.Key', props);
    return request.getResponseField('Key') as unknown as shapes.ObjectKey;
  }
  /**
   * ID for the initiated multipart upload.
   */
  public get uploadId(): shapes.MultipartUploadId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CreateMultipartUpload.UploadId'),
        outputPath: 'UploadId',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CreateMultipartUpload.UploadId', props);
    return request.getResponseField('UploadId') as unknown as shapes.MultipartUploadId;
  }
  /**
   * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
   */
  public get serverSideEncryption(): shapes.ServerSideEncryption {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CreateMultipartUpload.ServerSideEncryption'),
        outputPath: 'ServerSideEncryption',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CreateMultipartUpload.ServerSideEncryption', props);
    return request.getResponseField('ServerSideEncryption') as unknown as shapes.ServerSideEncryption;
  }
  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
   */
  public get sseCustomerAlgorithm(): shapes.SSECustomerAlgorithm {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CreateMultipartUpload.SSECustomerAlgorithm'),
        outputPath: 'SSECustomerAlgorithm',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CreateMultipartUpload.SSECustomerAlgorithm', props);
    return request.getResponseField('SSECustomerAlgorithm') as unknown as shapes.SSECustomerAlgorithm;
  }
  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round-trip message integrity verification of the customer-provided encryption key.
   */
  public get sseCustomerKeyMd5(): shapes.SSECustomerKeyMD5 {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CreateMultipartUpload.SSECustomerKeyMD5'),
        outputPath: 'SSECustomerKeyMD5',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CreateMultipartUpload.SSECustomerKeyMD5', props);
    return request.getResponseField('SSECustomerKeyMD5') as unknown as shapes.SSECustomerKeyMD5;
  }
  /**
   * If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key (CMK) that was used for the object.
   */
  public get ssekmsKeyId(): shapes.SSEKMSKeyId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CreateMultipartUpload.SSEKMSKeyId'),
        outputPath: 'SSEKMSKeyId',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CreateMultipartUpload.SSEKMSKeyId', props);
    return request.getResponseField('SSEKMSKeyId') as unknown as shapes.SSEKMSKeyId;
  }
  /**
   * If present, specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.
   */
  public get ssekmsEncryptionContext(): shapes.SSEKMSEncryptionContext {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CreateMultipartUpload.SSEKMSEncryptionContext'),
        outputPath: 'SSEKMSEncryptionContext',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CreateMultipartUpload.SSEKMSEncryptionContext', props);
    return request.getResponseField('SSEKMSEncryptionContext') as unknown as shapes.SSEKMSEncryptionContext;
  }
  /**
   * If present, specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'createMultipartUpload',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('CreateMultipartUpload.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          ACL: this.input.acl,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'CreateMultipartUpload.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.CreateMultipartUploadRequest) {
  }
}

/**
 * Response for DeleteObject.
 */
export class DeleteObjectOutput {
  /**
   * Specifies whether the versioned object that was permanently deleted was (true) or was not (false) a delete marker.
   */
  public get deleteMarker(): shapes.DeleteMarker {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'deleteObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('DeleteObject.DeleteMarker'),
        outputPath: 'DeleteMarker',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MFA: this.input.mfa,
          VersionId: this.input.versionId,
          RequestPayer: this.input.requestPayer,
          BypassGovernanceRetention: this.input.bypassGovernanceRetention,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DeleteObject.DeleteMarker', props);
    return request.getResponseField('DeleteMarker') as unknown as shapes.DeleteMarker;
  }
  /**
   * Returns the version ID of the delete marker created as a result of the DELETE operation.
   */
  public get versionId(): shapes.ObjectVersionId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'deleteObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('DeleteObject.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MFA: this.input.mfa,
          VersionId: this.input.versionId,
          RequestPayer: this.input.requestPayer,
          BypassGovernanceRetention: this.input.bypassGovernanceRetention,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DeleteObject.VersionId', props);
    return request.getResponseField('VersionId') as unknown as shapes.ObjectVersionId;
  }
  /**
   * Returns the version ID of the delete marker created as a result of the DELETE operation.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'deleteObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('DeleteObject.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MFA: this.input.mfa,
          VersionId: this.input.versionId,
          RequestPayer: this.input.requestPayer,
          BypassGovernanceRetention: this.input.bypassGovernanceRetention,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DeleteObject.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.DeleteObjectRequest) {
  }
}

/**
 * Response for DeleteObjectTagging.
 */
export class DeleteObjectTaggingOutput {
  /**
   * The versionId of the object the tag-set was removed from.
   */
  public get versionId(): shapes.ObjectVersionId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'deleteObjectTagging',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('DeleteObjectTagging.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DeleteObjectTagging.VersionId', props);
    return request.getResponseField('VersionId') as unknown as shapes.ObjectVersionId;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.DeleteObjectTaggingRequest) {
  }
}

/**
 * Response for DeleteObjects.
 */
export class DeleteObjectsOutput {
  /**
   * Container element for a successful delete. It identifies the object that was successfully deleted.
   */
  public get deleted(): shapes.DeletedObjects {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'deleteObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('DeleteObjects.Deleted'),
        outputPath: 'Deleted',
        parameters: {
          Bucket: this.input.bucket,
          Delete: {
            Objects: this.input.delete.objects,
            Quiet: this.input.delete.quiet,
          },
          MFA: this.input.mfa,
          RequestPayer: this.input.requestPayer,
          BypassGovernanceRetention: this.input.bypassGovernanceRetention,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DeleteObjects.Deleted', props);
    return request.getResponseField('Deleted') as unknown as shapes.DeletedObjects;
  }
  /**
   * Container element for a successful delete. It identifies the object that was successfully deleted.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'deleteObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('DeleteObjects.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Bucket: this.input.bucket,
          Delete: {
            Objects: this.input.delete.objects,
            Quiet: this.input.delete.quiet,
          },
          MFA: this.input.mfa,
          RequestPayer: this.input.requestPayer,
          BypassGovernanceRetention: this.input.bypassGovernanceRetention,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DeleteObjects.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  /**
   * Container for a failed delete operation that describes the object that Amazon S3 attempted to delete and the error it encountered.
   */
  public get errors(): shapes.Errors {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'deleteObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('DeleteObjects.Errors'),
        outputPath: 'Errors',
        parameters: {
          Bucket: this.input.bucket,
          Delete: {
            Objects: this.input.delete.objects,
            Quiet: this.input.delete.quiet,
          },
          MFA: this.input.mfa,
          RequestPayer: this.input.requestPayer,
          BypassGovernanceRetention: this.input.bypassGovernanceRetention,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'DeleteObjects.Errors', props);
    return request.getResponseField('Errors') as unknown as shapes.Errors;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.DeleteObjectsRequest) {
  }
}

/**
 * Response for GetBucketAccelerateConfiguration.
 */
export class GetBucketAccelerateConfigurationOutput {
  /**
   * The accelerate configuration of the bucket.
   */
  public get status(): shapes.BucketAccelerateStatus {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getBucketAccelerateConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetBucketAccelerateConfiguration.Status'),
        outputPath: 'Status',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetBucketAccelerateConfiguration.Status', props);
    return request.getResponseField('Status') as unknown as shapes.BucketAccelerateStatus;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketAccelerateConfigurationRequest) {
  }
}

/**
 * Response for GetBucketAcl.
 */
export class GetBucketAclOutput {
  /**
   * Response for GetBucketAclOutput.Owner
   */
  static OwnerResponse = class {
    /**
     * Container for the display name of the owner.
     */
    public get displayName(): shapes.DisplayName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketAcl',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketAcl.Owner.DisplayName'),
          outputPath: 'Owner.DisplayName',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketAcl.Owner.DisplayName', props);
      return request.getResponseField('Owner.DisplayName') as unknown as shapes.DisplayName;
    }
    /**
     * Container for the ID of the owner.
     */
    public get id(): shapes.ID {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketAcl',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketAcl.Owner.ID'),
          outputPath: 'Owner.ID',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketAcl.Owner.ID', props);
      return request.getResponseField('Owner.ID') as unknown as shapes.ID;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketAclRequest) {
    }
  }
  public get owner(): InstanceType<typeof GetBucketAclOutput.OwnerResponse> {
    return new GetBucketAclOutput.OwnerResponse(this.scope, this.resources, this.input);
  }

  /**
   * A list of grants.
   */
  public get grants(): shapes.Grants {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getBucketAcl',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetBucketAcl.Grants'),
        outputPath: 'Grants',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetBucketAcl.Grants', props);
    return request.getResponseField('Grants') as unknown as shapes.Grants;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketAclRequest) {
  }
}

/**
 * Response for GetBucketAnalyticsConfiguration.
 */
export class GetBucketAnalyticsConfigurationOutput {
  /**
   * Response for GetBucketAnalyticsConfigurationOutput.AnalyticsConfiguration
   */
  static AnalyticsConfigurationResponse = class {
    /**
     * The ID that identifies the analytics configuration.
     */
    public get id(): shapes.AnalyticsId {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketAnalyticsConfiguration',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Id'),
          outputPath: 'AnalyticsConfiguration.Id',
          parameters: {
            Bucket: this.input.bucket,
            Id: this.input.id,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Id', props);
      return request.getResponseField('AnalyticsConfiguration.Id') as unknown as shapes.AnalyticsId;
    }
    /**
     * Response for GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.Filter
     */
    static FilterResponse = class {
      /**
       * The prefix to use when evaluating an analytics filter.
       */
      public get prefix(): shapes.Prefix {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'getBucketAnalyticsConfiguration',
            service: 'S3',
            physicalResourceId: cr.PhysicalResourceId.of('GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.Prefix'),
            outputPath: 'AnalyticsConfiguration.Filter.Prefix',
            parameters: {
              Bucket: this.input.bucket,
              Id: this.input.id,
              ExpectedBucketOwner: this.input.expectedBucketOwner,
            },
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.Prefix', props);
        return request.getResponseField('AnalyticsConfiguration.Filter.Prefix') as unknown as shapes.Prefix;
      }
      /**
       * Response for GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.FilterResponse.Tag
       */
      static TagResponse = class {
        /**
         * Name of the object key.
         */
        public get key(): shapes.ObjectKey {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getBucketAnalyticsConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.Tag.Key'),
              outputPath: 'AnalyticsConfiguration.Filter.Tag.Key',
              parameters: {
                Bucket: this.input.bucket,
                Id: this.input.id,
                ExpectedBucketOwner: this.input.expectedBucketOwner,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.Tag.Key', props);
          return request.getResponseField('AnalyticsConfiguration.Filter.Tag.Key') as unknown as shapes.ObjectKey;
        }
        /**
         * Value of the tag.
         */
        public get value(): shapes.Value {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getBucketAnalyticsConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.Tag.Value'),
              outputPath: 'AnalyticsConfiguration.Filter.Tag.Value',
              parameters: {
                Bucket: this.input.bucket,
                Id: this.input.id,
                ExpectedBucketOwner: this.input.expectedBucketOwner,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.Tag.Value', props);
          return request.getResponseField('AnalyticsConfiguration.Filter.Tag.Value') as unknown as shapes.Value;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketAnalyticsConfigurationRequest) {
        }
      }
      public get tag(): InstanceType<typeof GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.FilterResponse.TagResponse> {
        return new GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.FilterResponse.TagResponse(this.scope, this.resources, this.input);
      }

      /**
       * Response for GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.FilterResponse.And
       */
      static AndResponse = class {
        /**
         * The prefix to use when evaluating an AND predicate: The prefix that an object must have to be included in the metrics results.
         */
        public get prefix(): shapes.Prefix {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getBucketAnalyticsConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.And.Prefix'),
              outputPath: 'AnalyticsConfiguration.Filter.And.Prefix',
              parameters: {
                Bucket: this.input.bucket,
                Id: this.input.id,
                ExpectedBucketOwner: this.input.expectedBucketOwner,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.And.Prefix', props);
          return request.getResponseField('AnalyticsConfiguration.Filter.And.Prefix') as unknown as shapes.Prefix;
        }
        /**
         * The list of tags to use when evaluating an AND predicate.
         */
        public get tags(): shapes.TagSet {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getBucketAnalyticsConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.And.Tags'),
              outputPath: 'AnalyticsConfiguration.Filter.And.Tags',
              parameters: {
                Bucket: this.input.bucket,
                Id: this.input.id,
                ExpectedBucketOwner: this.input.expectedBucketOwner,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.Filter.And.Tags', props);
          return request.getResponseField('AnalyticsConfiguration.Filter.And.Tags') as unknown as shapes.TagSet;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketAnalyticsConfigurationRequest) {
        }
      }
      public get and(): InstanceType<typeof GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.FilterResponse.AndResponse> {
        return new GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.FilterResponse.AndResponse(this.scope, this.resources, this.input);
      }

      constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketAnalyticsConfigurationRequest) {
      }
    }
    public get filter(): InstanceType<typeof GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.FilterResponse> {
      return new GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.FilterResponse(this.scope, this.resources, this.input);
    }

    /**
     * Response for GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.StorageClassAnalysis
     */
    static StorageClassAnalysisResponse = class {
      /**
       * Response for GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.StorageClassAnalysisResponse.DataExport
       */
      static DataExportResponse = class {
        /**
         * The version of the output schema to use when exporting data. Must be V_1.
         */
        public get outputSchemaVersion(): shapes.StorageClassAnalysisSchemaVersion {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getBucketAnalyticsConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.OutputSchemaVersion'),
              outputPath: 'AnalyticsConfiguration.StorageClassAnalysis.DataExport.OutputSchemaVersion',
              parameters: {
                Bucket: this.input.bucket,
                Id: this.input.id,
                ExpectedBucketOwner: this.input.expectedBucketOwner,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.OutputSchemaVersion', props);
          return request.getResponseField('AnalyticsConfiguration.StorageClassAnalysis.DataExport.OutputSchemaVersion') as unknown as shapes.StorageClassAnalysisSchemaVersion;
        }
        /**
         * Response for GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.StorageClassAnalysisResponse.DataExportResponse.Destination
         */
        static DestinationResponse = class {
          /**
           * Response for GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.StorageClassAnalysisResponse.DataExportResponse.DestinationResponse.S3BucketDestination
           */
          static S3BucketDestinationResponse = class {
            /**
             * Specifies the file format used when exporting data to Amazon S3.
             */
            public get format(): shapes.AnalyticsS3ExportFileFormat {
              const props: cr.AwsCustomResourceProps = {
                onUpdate: {
                  action: 'getBucketAnalyticsConfiguration',
                  service: 'S3',
                  physicalResourceId: cr.PhysicalResourceId.of('GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Format'),
                  outputPath: 'AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Format',
                  parameters: {
                    Bucket: this.input.bucket,
                    Id: this.input.id,
                    ExpectedBucketOwner: this.input.expectedBucketOwner,
                  },
                },
                policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
              };
              const request = new cr.AwsCustomResource(this.scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Format', props);
              return request.getResponseField('AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Format') as unknown as shapes.AnalyticsS3ExportFileFormat;
            }
            /**
             * The account ID that owns the destination S3 bucket. If no account ID is provided, the owner is not validated before exporting data.   Although this value is optional, we strongly recommend that you set it to help prevent problems if the destination bucket ownership changes.
             */
            public get bucketAccountId(): shapes.AccountId {
              const props: cr.AwsCustomResourceProps = {
                onUpdate: {
                  action: 'getBucketAnalyticsConfiguration',
                  service: 'S3',
                  physicalResourceId: cr.PhysicalResourceId.of('GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.BucketAccountId'),
                  outputPath: 'AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.BucketAccountId',
                  parameters: {
                    Bucket: this.input.bucket,
                    Id: this.input.id,
                    ExpectedBucketOwner: this.input.expectedBucketOwner,
                  },
                },
                policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
              };
              const request = new cr.AwsCustomResource(this.scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.BucketAccountId', props);
              return request.getResponseField('AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.BucketAccountId') as unknown as shapes.AccountId;
            }
            /**
             * The Amazon Resource Name (ARN) of the bucket to which data is exported.
             */
            public get bucket(): shapes.BucketName {
              const props: cr.AwsCustomResourceProps = {
                onUpdate: {
                  action: 'getBucketAnalyticsConfiguration',
                  service: 'S3',
                  physicalResourceId: cr.PhysicalResourceId.of('GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Bucket'),
                  outputPath: 'AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Bucket',
                  parameters: {
                    Bucket: this.input.bucket,
                    Id: this.input.id,
                    ExpectedBucketOwner: this.input.expectedBucketOwner,
                  },
                },
                policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
              };
              const request = new cr.AwsCustomResource(this.scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Bucket', props);
              return request.getResponseField('AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Bucket') as unknown as shapes.BucketName;
            }
            /**
             * The prefix to use when exporting data. The prefix is prepended to all results.
             */
            public get prefix(): shapes.Prefix {
              const props: cr.AwsCustomResourceProps = {
                onUpdate: {
                  action: 'getBucketAnalyticsConfiguration',
                  service: 'S3',
                  physicalResourceId: cr.PhysicalResourceId.of('GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Prefix'),
                  outputPath: 'AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Prefix',
                  parameters: {
                    Bucket: this.input.bucket,
                    Id: this.input.id,
                    ExpectedBucketOwner: this.input.expectedBucketOwner,
                  },
                },
                policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
              };
              const request = new cr.AwsCustomResource(this.scope, 'GetBucketAnalyticsConfiguration.AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Prefix', props);
              return request.getResponseField('AnalyticsConfiguration.StorageClassAnalysis.DataExport.Destination.S3BucketDestination.Prefix') as unknown as shapes.Prefix;
            }
            constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketAnalyticsConfigurationRequest) {
            }
          }
          public get s3BucketDestination(): InstanceType<typeof GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.StorageClassAnalysisResponse.DataExportResponse.DestinationResponse.S3BucketDestinationResponse> {
            return new GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.StorageClassAnalysisResponse.DataExportResponse.DestinationResponse.S3BucketDestinationResponse(this.scope, this.resources, this.input);
          }

          constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketAnalyticsConfigurationRequest) {
          }
        }
        public get destination(): InstanceType<typeof GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.StorageClassAnalysisResponse.DataExportResponse.DestinationResponse> {
          return new GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.StorageClassAnalysisResponse.DataExportResponse.DestinationResponse(this.scope, this.resources, this.input);
        }

        constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketAnalyticsConfigurationRequest) {
        }
      }
      public get dataExport(): InstanceType<typeof GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.StorageClassAnalysisResponse.DataExportResponse> {
        return new GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.StorageClassAnalysisResponse.DataExportResponse(this.scope, this.resources, this.input);
      }

      constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketAnalyticsConfigurationRequest) {
      }
    }
    public get storageClassAnalysis(): InstanceType<typeof GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.StorageClassAnalysisResponse> {
      return new GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse.StorageClassAnalysisResponse(this.scope, this.resources, this.input);
    }

    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketAnalyticsConfigurationRequest) {
    }
  }
  public get analyticsConfiguration(): InstanceType<typeof GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse> {
    return new GetBucketAnalyticsConfigurationOutput.AnalyticsConfigurationResponse(this.scope, this.resources, this.input);
  }

  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketAnalyticsConfigurationRequest) {
  }
}

/**
 * Response for GetBucketCors.
 */
export class GetBucketCorsOutput {
  /**
   * A set of origins and methods (cross-origin access that you want to allow). You can add up to 100 rules to the configuration.
   */
  public get corsRules(): shapes.CORSRules {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getBucketCors',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetBucketCors.CORSRules'),
        outputPath: 'CORSRules',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetBucketCors.CORSRules', props);
    return request.getResponseField('CORSRules') as unknown as shapes.CORSRules;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketCorsRequest) {
  }
}

/**
 * Response for GetBucketEncryption.
 */
export class GetBucketEncryptionOutput {
  /**
   * Response for GetBucketEncryptionOutput.ServerSideEncryptionConfiguration
   */
  static ServerSideEncryptionConfigurationResponse = class {
    /**
     * Container for information about a particular server-side encryption configuration rule.
     */
    public get rules(): shapes.ServerSideEncryptionRules {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketEncryption',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketEncryption.ServerSideEncryptionConfiguration.Rules'),
          outputPath: 'ServerSideEncryptionConfiguration.Rules',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketEncryption.ServerSideEncryptionConfiguration.Rules', props);
      return request.getResponseField('ServerSideEncryptionConfiguration.Rules') as unknown as shapes.ServerSideEncryptionRules;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketEncryptionRequest) {
    }
  }
  public get serverSideEncryptionConfiguration(): InstanceType<typeof GetBucketEncryptionOutput.ServerSideEncryptionConfigurationResponse> {
    return new GetBucketEncryptionOutput.ServerSideEncryptionConfigurationResponse(this.scope, this.resources, this.input);
  }

  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketEncryptionRequest) {
  }
}

/**
 * Response for GetBucketIntelligentTieringConfiguration.
 */
export class GetBucketIntelligentTieringConfigurationOutput {
  /**
   * Response for GetBucketIntelligentTieringConfigurationOutput.IntelligentTieringConfiguration
   */
  static IntelligentTieringConfigurationResponse = class {
    /**
     * The ID used to identify the S3 Intelligent-Tiering configuration.
     */
    public get id(): shapes.IntelligentTieringId {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketIntelligentTieringConfiguration',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Id'),
          outputPath: 'IntelligentTieringConfiguration.Id',
          parameters: {
            Bucket: this.input.bucket,
            Id: this.input.id,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Id', props);
      return request.getResponseField('IntelligentTieringConfiguration.Id') as unknown as shapes.IntelligentTieringId;
    }
    /**
     * Response for GetBucketIntelligentTieringConfigurationOutput.IntelligentTieringConfigurationResponse.Filter
     */
    static FilterResponse = class {
      /**
       * An object key name prefix that identifies the subset of objects to which the rule applies.
       */
      public get prefix(): shapes.Prefix {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'getBucketIntelligentTieringConfiguration',
            service: 'S3',
            physicalResourceId: cr.PhysicalResourceId.of('GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.Prefix'),
            outputPath: 'IntelligentTieringConfiguration.Filter.Prefix',
            parameters: {
              Bucket: this.input.bucket,
              Id: this.input.id,
            },
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.Prefix', props);
        return request.getResponseField('IntelligentTieringConfiguration.Filter.Prefix') as unknown as shapes.Prefix;
      }
      /**
       * Response for GetBucketIntelligentTieringConfigurationOutput.IntelligentTieringConfigurationResponse.FilterResponse.Tag
       */
      static TagResponse = class {
        /**
         * Name of the object key.
         */
        public get key(): shapes.ObjectKey {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getBucketIntelligentTieringConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.Tag.Key'),
              outputPath: 'IntelligentTieringConfiguration.Filter.Tag.Key',
              parameters: {
                Bucket: this.input.bucket,
                Id: this.input.id,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.Tag.Key', props);
          return request.getResponseField('IntelligentTieringConfiguration.Filter.Tag.Key') as unknown as shapes.ObjectKey;
        }
        /**
         * Value of the tag.
         */
        public get value(): shapes.Value {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getBucketIntelligentTieringConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.Tag.Value'),
              outputPath: 'IntelligentTieringConfiguration.Filter.Tag.Value',
              parameters: {
                Bucket: this.input.bucket,
                Id: this.input.id,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.Tag.Value', props);
          return request.getResponseField('IntelligentTieringConfiguration.Filter.Tag.Value') as unknown as shapes.Value;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketIntelligentTieringConfigurationRequest) {
        }
      }
      public get tag(): InstanceType<typeof GetBucketIntelligentTieringConfigurationOutput.IntelligentTieringConfigurationResponse.FilterResponse.TagResponse> {
        return new GetBucketIntelligentTieringConfigurationOutput.IntelligentTieringConfigurationResponse.FilterResponse.TagResponse(this.scope, this.resources, this.input);
      }

      /**
       * Response for GetBucketIntelligentTieringConfigurationOutput.IntelligentTieringConfigurationResponse.FilterResponse.And
       */
      static AndResponse = class {
        /**
         * An object key name prefix that identifies the subset of objects to which the configuration applies.
         */
        public get prefix(): shapes.Prefix {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getBucketIntelligentTieringConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.And.Prefix'),
              outputPath: 'IntelligentTieringConfiguration.Filter.And.Prefix',
              parameters: {
                Bucket: this.input.bucket,
                Id: this.input.id,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.And.Prefix', props);
          return request.getResponseField('IntelligentTieringConfiguration.Filter.And.Prefix') as unknown as shapes.Prefix;
        }
        /**
         * All of these tags must exist in the object's tag set in order for the configuration to apply.
         */
        public get tags(): shapes.TagSet {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getBucketIntelligentTieringConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.And.Tags'),
              outputPath: 'IntelligentTieringConfiguration.Filter.And.Tags',
              parameters: {
                Bucket: this.input.bucket,
                Id: this.input.id,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Filter.And.Tags', props);
          return request.getResponseField('IntelligentTieringConfiguration.Filter.And.Tags') as unknown as shapes.TagSet;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketIntelligentTieringConfigurationRequest) {
        }
      }
      public get and(): InstanceType<typeof GetBucketIntelligentTieringConfigurationOutput.IntelligentTieringConfigurationResponse.FilterResponse.AndResponse> {
        return new GetBucketIntelligentTieringConfigurationOutput.IntelligentTieringConfigurationResponse.FilterResponse.AndResponse(this.scope, this.resources, this.input);
      }

      constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketIntelligentTieringConfigurationRequest) {
      }
    }
    public get filter(): InstanceType<typeof GetBucketIntelligentTieringConfigurationOutput.IntelligentTieringConfigurationResponse.FilterResponse> {
      return new GetBucketIntelligentTieringConfigurationOutput.IntelligentTieringConfigurationResponse.FilterResponse(this.scope, this.resources, this.input);
    }

    /**
     * Specifies the status of the configuration.
     */
    public get status(): shapes.IntelligentTieringStatus {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketIntelligentTieringConfiguration',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Status'),
          outputPath: 'IntelligentTieringConfiguration.Status',
          parameters: {
            Bucket: this.input.bucket,
            Id: this.input.id,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Status', props);
      return request.getResponseField('IntelligentTieringConfiguration.Status') as unknown as shapes.IntelligentTieringStatus;
    }
    /**
     * Specifies the S3 Intelligent-Tiering storage class tier of the configuration.
     */
    public get tierings(): shapes.TieringList {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketIntelligentTieringConfiguration',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Tierings'),
          outputPath: 'IntelligentTieringConfiguration.Tierings',
          parameters: {
            Bucket: this.input.bucket,
            Id: this.input.id,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketIntelligentTieringConfiguration.IntelligentTieringConfiguration.Tierings', props);
      return request.getResponseField('IntelligentTieringConfiguration.Tierings') as unknown as shapes.TieringList;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketIntelligentTieringConfigurationRequest) {
    }
  }
  public get intelligentTieringConfiguration(): InstanceType<typeof GetBucketIntelligentTieringConfigurationOutput.IntelligentTieringConfigurationResponse> {
    return new GetBucketIntelligentTieringConfigurationOutput.IntelligentTieringConfigurationResponse(this.scope, this.resources, this.input);
  }

  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketIntelligentTieringConfigurationRequest) {
  }
}

/**
 * Response for GetBucketInventoryConfiguration.
 */
export class GetBucketInventoryConfigurationOutput {
  /**
   * Response for GetBucketInventoryConfigurationOutput.InventoryConfiguration
   */
  static InventoryConfigurationResponse = class {
    /**
     * Response for GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.Destination
     */
    static DestinationResponse = class {
      /**
       * Response for GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.DestinationResponse.S3BucketDestination
       */
      static S3BucketDestinationResponse = class {
        /**
         * The account ID that owns the destination S3 bucket. If no account ID is provided, the owner is not validated before exporting data.    Although this value is optional, we strongly recommend that you set it to help prevent problems if the destination bucket ownership changes.
         */
        public get accountId(): shapes.AccountId {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getBucketInventoryConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.AccountId'),
              outputPath: 'InventoryConfiguration.Destination.S3BucketDestination.AccountId',
              parameters: {
                Bucket: this.input.bucket,
                Id: this.input.id,
                ExpectedBucketOwner: this.input.expectedBucketOwner,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.AccountId', props);
          return request.getResponseField('InventoryConfiguration.Destination.S3BucketDestination.AccountId') as unknown as shapes.AccountId;
        }
        /**
         * The Amazon Resource Name (ARN) of the bucket where inventory results will be published.
         */
        public get bucket(): shapes.BucketName {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getBucketInventoryConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Bucket'),
              outputPath: 'InventoryConfiguration.Destination.S3BucketDestination.Bucket',
              parameters: {
                Bucket: this.input.bucket,
                Id: this.input.id,
                ExpectedBucketOwner: this.input.expectedBucketOwner,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Bucket', props);
          return request.getResponseField('InventoryConfiguration.Destination.S3BucketDestination.Bucket') as unknown as shapes.BucketName;
        }
        /**
         * Specifies the output format of the inventory results.
         */
        public get format(): shapes.InventoryFormat {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getBucketInventoryConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Format'),
              outputPath: 'InventoryConfiguration.Destination.S3BucketDestination.Format',
              parameters: {
                Bucket: this.input.bucket,
                Id: this.input.id,
                ExpectedBucketOwner: this.input.expectedBucketOwner,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Format', props);
          return request.getResponseField('InventoryConfiguration.Destination.S3BucketDestination.Format') as unknown as shapes.InventoryFormat;
        }
        /**
         * The prefix that is prepended to all inventory results.
         */
        public get prefix(): shapes.Prefix {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getBucketInventoryConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Prefix'),
              outputPath: 'InventoryConfiguration.Destination.S3BucketDestination.Prefix',
              parameters: {
                Bucket: this.input.bucket,
                Id: this.input.id,
                ExpectedBucketOwner: this.input.expectedBucketOwner,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Prefix', props);
          return request.getResponseField('InventoryConfiguration.Destination.S3BucketDestination.Prefix') as unknown as shapes.Prefix;
        }
        /**
         * Response for GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.DestinationResponse.S3BucketDestinationResponse.Encryption
         */
        static EncryptionResponse = class {
          /**
           * Response for GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.DestinationResponse.S3BucketDestinationResponse.EncryptionResponse.SSES3
           */
          static SSES3Response = class {
            constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketInventoryConfigurationRequest) {
            }
          }
          public get sses3(): InstanceType<typeof GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.DestinationResponse.S3BucketDestinationResponse.EncryptionResponse.SSES3Response> {
            return new GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.DestinationResponse.S3BucketDestinationResponse.EncryptionResponse.SSES3Response(this.scope, this.resources, this.input);
          }

          /**
           * Response for GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.DestinationResponse.S3BucketDestinationResponse.EncryptionResponse.SSEKMS
           */
          static SSEKMSResponse = class {
            /**
             * Specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key (CMK) to use for encrypting inventory reports.
             */
            public get keyId(): shapes.SSEKMSKeyId {
              const props: cr.AwsCustomResourceProps = {
                onUpdate: {
                  action: 'getBucketInventoryConfiguration',
                  service: 'S3',
                  physicalResourceId: cr.PhysicalResourceId.of('GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Encryption.SSEKMS.KeyId'),
                  outputPath: 'InventoryConfiguration.Destination.S3BucketDestination.Encryption.SSEKMS.KeyId',
                  parameters: {
                    Bucket: this.input.bucket,
                    Id: this.input.id,
                    ExpectedBucketOwner: this.input.expectedBucketOwner,
                  },
                },
                policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
              };
              const request = new cr.AwsCustomResource(this.scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.Destination.S3BucketDestination.Encryption.SSEKMS.KeyId', props);
              return request.getResponseField('InventoryConfiguration.Destination.S3BucketDestination.Encryption.SSEKMS.KeyId') as unknown as shapes.SSEKMSKeyId;
            }
            constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketInventoryConfigurationRequest) {
            }
          }
          public get ssekms(): InstanceType<typeof GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.DestinationResponse.S3BucketDestinationResponse.EncryptionResponse.SSEKMSResponse> {
            return new GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.DestinationResponse.S3BucketDestinationResponse.EncryptionResponse.SSEKMSResponse(this.scope, this.resources, this.input);
          }

          constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketInventoryConfigurationRequest) {
          }
        }
        public get encryption(): InstanceType<typeof GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.DestinationResponse.S3BucketDestinationResponse.EncryptionResponse> {
          return new GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.DestinationResponse.S3BucketDestinationResponse.EncryptionResponse(this.scope, this.resources, this.input);
        }

        constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketInventoryConfigurationRequest) {
        }
      }
      public get s3BucketDestination(): InstanceType<typeof GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.DestinationResponse.S3BucketDestinationResponse> {
        return new GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.DestinationResponse.S3BucketDestinationResponse(this.scope, this.resources, this.input);
      }

      constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketInventoryConfigurationRequest) {
      }
    }
    public get destination(): InstanceType<typeof GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.DestinationResponse> {
      return new GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.DestinationResponse(this.scope, this.resources, this.input);
    }

    /**
     * Specifies whether the inventory is enabled or disabled. If set to True, an inventory list is generated. If set to False, no inventory list is generated.
     */
    public get isEnabled(): shapes.IsEnabled {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketInventoryConfiguration',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketInventoryConfiguration.InventoryConfiguration.IsEnabled'),
          outputPath: 'InventoryConfiguration.IsEnabled',
          parameters: {
            Bucket: this.input.bucket,
            Id: this.input.id,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.IsEnabled', props);
      return request.getResponseField('InventoryConfiguration.IsEnabled') as unknown as shapes.IsEnabled;
    }
    /**
     * Response for GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.Filter
     */
    static FilterResponse = class {
      /**
       * The prefix that an object must have to be included in the inventory results.
       */
      public get prefix(): shapes.Prefix {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'getBucketInventoryConfiguration',
            service: 'S3',
            physicalResourceId: cr.PhysicalResourceId.of('GetBucketInventoryConfiguration.InventoryConfiguration.Filter.Prefix'),
            outputPath: 'InventoryConfiguration.Filter.Prefix',
            parameters: {
              Bucket: this.input.bucket,
              Id: this.input.id,
              ExpectedBucketOwner: this.input.expectedBucketOwner,
            },
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.Filter.Prefix', props);
        return request.getResponseField('InventoryConfiguration.Filter.Prefix') as unknown as shapes.Prefix;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketInventoryConfigurationRequest) {
      }
    }
    public get filter(): InstanceType<typeof GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.FilterResponse> {
      return new GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.FilterResponse(this.scope, this.resources, this.input);
    }

    /**
     * The ID used to identify the inventory configuration.
     */
    public get id(): shapes.InventoryId {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketInventoryConfiguration',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketInventoryConfiguration.InventoryConfiguration.Id'),
          outputPath: 'InventoryConfiguration.Id',
          parameters: {
            Bucket: this.input.bucket,
            Id: this.input.id,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.Id', props);
      return request.getResponseField('InventoryConfiguration.Id') as unknown as shapes.InventoryId;
    }
    /**
     * Object versions to include in the inventory list. If set to All, the list includes all the object versions, which adds the version-related fields VersionId, IsLatest, and DeleteMarker to the list. If set to Current, the list does not contain these version-related fields.
     */
    public get includedObjectVersions(): shapes.InventoryIncludedObjectVersions {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketInventoryConfiguration',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketInventoryConfiguration.InventoryConfiguration.IncludedObjectVersions'),
          outputPath: 'InventoryConfiguration.IncludedObjectVersions',
          parameters: {
            Bucket: this.input.bucket,
            Id: this.input.id,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.IncludedObjectVersions', props);
      return request.getResponseField('InventoryConfiguration.IncludedObjectVersions') as unknown as shapes.InventoryIncludedObjectVersions;
    }
    /**
     * Contains the optional fields that are included in the inventory results.
     */
    public get optionalFields(): shapes.InventoryOptionalFields {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketInventoryConfiguration',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketInventoryConfiguration.InventoryConfiguration.OptionalFields'),
          outputPath: 'InventoryConfiguration.OptionalFields',
          parameters: {
            Bucket: this.input.bucket,
            Id: this.input.id,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.OptionalFields', props);
      return request.getResponseField('InventoryConfiguration.OptionalFields') as unknown as shapes.InventoryOptionalFields;
    }
    /**
     * Response for GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.Schedule
     */
    static ScheduleResponse = class {
      /**
       * Specifies how frequently inventory results are produced.
       */
      public get frequency(): shapes.InventoryFrequency {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'getBucketInventoryConfiguration',
            service: 'S3',
            physicalResourceId: cr.PhysicalResourceId.of('GetBucketInventoryConfiguration.InventoryConfiguration.Schedule.Frequency'),
            outputPath: 'InventoryConfiguration.Schedule.Frequency',
            parameters: {
              Bucket: this.input.bucket,
              Id: this.input.id,
              ExpectedBucketOwner: this.input.expectedBucketOwner,
            },
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'GetBucketInventoryConfiguration.InventoryConfiguration.Schedule.Frequency', props);
        return request.getResponseField('InventoryConfiguration.Schedule.Frequency') as unknown as shapes.InventoryFrequency;
      }
      constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketInventoryConfigurationRequest) {
      }
    }
    public get schedule(): InstanceType<typeof GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.ScheduleResponse> {
      return new GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse.ScheduleResponse(this.scope, this.resources, this.input);
    }

    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketInventoryConfigurationRequest) {
    }
  }
  public get inventoryConfiguration(): InstanceType<typeof GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse> {
    return new GetBucketInventoryConfigurationOutput.InventoryConfigurationResponse(this.scope, this.resources, this.input);
  }

  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketInventoryConfigurationRequest) {
  }
}

/**
 * Response for GetBucketLifecycle.
 */
export class GetBucketLifecycleOutput {
  /**
   * Container for a lifecycle rule.
   */
  public get rules(): shapes.Rules {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getBucketLifecycle',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetBucketLifecycle.Rules'),
        outputPath: 'Rules',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetBucketLifecycle.Rules', props);
    return request.getResponseField('Rules') as unknown as shapes.Rules;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketLifecycleRequest) {
  }
}

/**
 * Response for GetBucketLifecycleConfiguration.
 */
export class GetBucketLifecycleConfigurationOutput {
  /**
   * Container for a lifecycle rule.
   */
  public get rules(): shapes.LifecycleRules {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getBucketLifecycleConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetBucketLifecycleConfiguration.Rules'),
        outputPath: 'Rules',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetBucketLifecycleConfiguration.Rules', props);
    return request.getResponseField('Rules') as unknown as shapes.LifecycleRules;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketLifecycleConfigurationRequest) {
  }
}

/**
 * Response for GetBucketLocation.
 */
export class GetBucketLocationOutput {
  /**
   * Specifies the Region where the bucket resides. For a list of all the Amazon S3 supported location constraints by Region, see Regions and Endpoints. Buckets in Region us-east-1 have a LocationConstraint of null.
   */
  public get locationConstraint(): shapes.BucketLocationConstraint {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getBucketLocation',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetBucketLocation.LocationConstraint'),
        outputPath: 'LocationConstraint',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetBucketLocation.LocationConstraint', props);
    return request.getResponseField('LocationConstraint') as unknown as shapes.BucketLocationConstraint;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketLocationRequest) {
  }
}

/**
 * Response for GetBucketLogging.
 */
export class GetBucketLoggingOutput {
  /**
   * Response for GetBucketLoggingOutput.LoggingEnabled
   */
  static LoggingEnabledResponse = class {
    /**
     * Specifies the bucket where you want Amazon S3 to store server access logs. You can have your logs delivered to any bucket that you own, including the same bucket that is being logged. You can also configure multiple buckets to deliver their logs to the same target bucket. In this case, you should choose a different TargetPrefix for each source bucket so that the delivered log files can be distinguished by key.
     */
    public get targetBucket(): shapes.TargetBucket {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketLogging',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketLogging.LoggingEnabled.TargetBucket'),
          outputPath: 'LoggingEnabled.TargetBucket',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketLogging.LoggingEnabled.TargetBucket', props);
      return request.getResponseField('LoggingEnabled.TargetBucket') as unknown as shapes.TargetBucket;
    }
    /**
     * Container for granting information.
     */
    public get targetGrants(): shapes.TargetGrants {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketLogging',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketLogging.LoggingEnabled.TargetGrants'),
          outputPath: 'LoggingEnabled.TargetGrants',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketLogging.LoggingEnabled.TargetGrants', props);
      return request.getResponseField('LoggingEnabled.TargetGrants') as unknown as shapes.TargetGrants;
    }
    /**
     * A prefix for all log object keys. If you store log files from multiple Amazon S3 buckets in a single bucket, you can use a prefix to distinguish which log files came from which bucket.
     */
    public get targetPrefix(): shapes.TargetPrefix {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketLogging',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketLogging.LoggingEnabled.TargetPrefix'),
          outputPath: 'LoggingEnabled.TargetPrefix',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketLogging.LoggingEnabled.TargetPrefix', props);
      return request.getResponseField('LoggingEnabled.TargetPrefix') as unknown as shapes.TargetPrefix;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketLoggingRequest) {
    }
  }
  public get loggingEnabled(): InstanceType<typeof GetBucketLoggingOutput.LoggingEnabledResponse> {
    return new GetBucketLoggingOutput.LoggingEnabledResponse(this.scope, this.resources, this.input);
  }

  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketLoggingRequest) {
  }
}

/**
 * Response for GetBucketMetricsConfiguration.
 */
export class GetBucketMetricsConfigurationOutput {
  /**
   * Response for GetBucketMetricsConfigurationOutput.MetricsConfiguration
   */
  static MetricsConfigurationResponse = class {
    /**
     * The ID used to identify the metrics configuration.
     */
    public get id(): shapes.MetricsId {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketMetricsConfiguration',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketMetricsConfiguration.MetricsConfiguration.Id'),
          outputPath: 'MetricsConfiguration.Id',
          parameters: {
            Bucket: this.input.bucket,
            Id: this.input.id,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketMetricsConfiguration.MetricsConfiguration.Id', props);
      return request.getResponseField('MetricsConfiguration.Id') as unknown as shapes.MetricsId;
    }
    /**
     * Response for GetBucketMetricsConfigurationOutput.MetricsConfigurationResponse.Filter
     */
    static FilterResponse = class {
      /**
       * The prefix used when evaluating a metrics filter.
       */
      public get prefix(): shapes.Prefix {
        const props: cr.AwsCustomResourceProps = {
          onUpdate: {
            action: 'getBucketMetricsConfiguration',
            service: 'S3',
            physicalResourceId: cr.PhysicalResourceId.of('GetBucketMetricsConfiguration.MetricsConfiguration.Filter.Prefix'),
            outputPath: 'MetricsConfiguration.Filter.Prefix',
            parameters: {
              Bucket: this.input.bucket,
              Id: this.input.id,
              ExpectedBucketOwner: this.input.expectedBucketOwner,
            },
          },
          policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
        };
        const request = new cr.AwsCustomResource(this.scope, 'GetBucketMetricsConfiguration.MetricsConfiguration.Filter.Prefix', props);
        return request.getResponseField('MetricsConfiguration.Filter.Prefix') as unknown as shapes.Prefix;
      }
      /**
       * Response for GetBucketMetricsConfigurationOutput.MetricsConfigurationResponse.FilterResponse.Tag
       */
      static TagResponse = class {
        /**
         * Name of the object key.
         */
        public get key(): shapes.ObjectKey {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getBucketMetricsConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetBucketMetricsConfiguration.MetricsConfiguration.Filter.Tag.Key'),
              outputPath: 'MetricsConfiguration.Filter.Tag.Key',
              parameters: {
                Bucket: this.input.bucket,
                Id: this.input.id,
                ExpectedBucketOwner: this.input.expectedBucketOwner,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetBucketMetricsConfiguration.MetricsConfiguration.Filter.Tag.Key', props);
          return request.getResponseField('MetricsConfiguration.Filter.Tag.Key') as unknown as shapes.ObjectKey;
        }
        /**
         * Value of the tag.
         */
        public get value(): shapes.Value {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getBucketMetricsConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetBucketMetricsConfiguration.MetricsConfiguration.Filter.Tag.Value'),
              outputPath: 'MetricsConfiguration.Filter.Tag.Value',
              parameters: {
                Bucket: this.input.bucket,
                Id: this.input.id,
                ExpectedBucketOwner: this.input.expectedBucketOwner,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetBucketMetricsConfiguration.MetricsConfiguration.Filter.Tag.Value', props);
          return request.getResponseField('MetricsConfiguration.Filter.Tag.Value') as unknown as shapes.Value;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketMetricsConfigurationRequest) {
        }
      }
      public get tag(): InstanceType<typeof GetBucketMetricsConfigurationOutput.MetricsConfigurationResponse.FilterResponse.TagResponse> {
        return new GetBucketMetricsConfigurationOutput.MetricsConfigurationResponse.FilterResponse.TagResponse(this.scope, this.resources, this.input);
      }

      /**
       * Response for GetBucketMetricsConfigurationOutput.MetricsConfigurationResponse.FilterResponse.And
       */
      static AndResponse = class {
        /**
         * The prefix used when evaluating an AND predicate.
         */
        public get prefix(): shapes.Prefix {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getBucketMetricsConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetBucketMetricsConfiguration.MetricsConfiguration.Filter.And.Prefix'),
              outputPath: 'MetricsConfiguration.Filter.And.Prefix',
              parameters: {
                Bucket: this.input.bucket,
                Id: this.input.id,
                ExpectedBucketOwner: this.input.expectedBucketOwner,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetBucketMetricsConfiguration.MetricsConfiguration.Filter.And.Prefix', props);
          return request.getResponseField('MetricsConfiguration.Filter.And.Prefix') as unknown as shapes.Prefix;
        }
        /**
         * The list of tags used when evaluating an AND predicate.
         */
        public get tags(): shapes.TagSet {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getBucketMetricsConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetBucketMetricsConfiguration.MetricsConfiguration.Filter.And.Tags'),
              outputPath: 'MetricsConfiguration.Filter.And.Tags',
              parameters: {
                Bucket: this.input.bucket,
                Id: this.input.id,
                ExpectedBucketOwner: this.input.expectedBucketOwner,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetBucketMetricsConfiguration.MetricsConfiguration.Filter.And.Tags', props);
          return request.getResponseField('MetricsConfiguration.Filter.And.Tags') as unknown as shapes.TagSet;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketMetricsConfigurationRequest) {
        }
      }
      public get and(): InstanceType<typeof GetBucketMetricsConfigurationOutput.MetricsConfigurationResponse.FilterResponse.AndResponse> {
        return new GetBucketMetricsConfigurationOutput.MetricsConfigurationResponse.FilterResponse.AndResponse(this.scope, this.resources, this.input);
      }

      constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketMetricsConfigurationRequest) {
      }
    }
    public get filter(): InstanceType<typeof GetBucketMetricsConfigurationOutput.MetricsConfigurationResponse.FilterResponse> {
      return new GetBucketMetricsConfigurationOutput.MetricsConfigurationResponse.FilterResponse(this.scope, this.resources, this.input);
    }

    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketMetricsConfigurationRequest) {
    }
  }
  public get metricsConfiguration(): InstanceType<typeof GetBucketMetricsConfigurationOutput.MetricsConfigurationResponse> {
    return new GetBucketMetricsConfigurationOutput.MetricsConfigurationResponse(this.scope, this.resources, this.input);
  }

  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketMetricsConfigurationRequest) {
  }
}

/**
 * Response for GetBucketNotification.
 */
export class NotificationConfigurationDeprecated {
  /**
   * Response for NotificationConfigurationDeprecated.TopicConfiguration
   */
  static TopicConfigurationResponse = class {
    /**
     * The Amazon S3 bucket event about which to send notifications. For more information, see Supported Event Types in the Amazon Simple Storage Service Developer Guide.
     */
    public get id(): shapes.NotificationId {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketNotification',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketNotification.TopicConfiguration.Id'),
          outputPath: 'TopicConfiguration.Id',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketNotification.TopicConfiguration.Id', props);
      return request.getResponseField('TopicConfiguration.Id') as unknown as shapes.NotificationId;
    }
    /**
     * A collection of events related to objects
     */
    public get events(): shapes.EventList {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketNotification',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketNotification.TopicConfiguration.Events'),
          outputPath: 'TopicConfiguration.Events',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketNotification.TopicConfiguration.Events', props);
      return request.getResponseField('TopicConfiguration.Events') as unknown as shapes.EventList;
    }
    /**
     * Bucket event for which to send notifications.
     */
    public get event(): shapes.Event {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketNotification',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketNotification.TopicConfiguration.Event'),
          outputPath: 'TopicConfiguration.Event',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketNotification.TopicConfiguration.Event', props);
      return request.getResponseField('TopicConfiguration.Event') as unknown as shapes.Event;
    }
    /**
     * Amazon SNS topic to which Amazon S3 will publish a message to report the specified events for the bucket.
     */
    public get topic(): shapes.TopicArn {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketNotification',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketNotification.TopicConfiguration.Topic'),
          outputPath: 'TopicConfiguration.Topic',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketNotification.TopicConfiguration.Topic', props);
      return request.getResponseField('TopicConfiguration.Topic') as unknown as shapes.TopicArn;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketNotificationConfigurationRequest) {
    }
  }
  public get topicConfiguration(): InstanceType<typeof NotificationConfigurationDeprecated.TopicConfigurationResponse> {
    return new NotificationConfigurationDeprecated.TopicConfigurationResponse(this.scope, this.resources, this.input);
  }

  /**
   * Response for NotificationConfigurationDeprecated.QueueConfiguration
   */
  static QueueConfigurationResponse = class {
    /**
     * A collection of bucket events for which to send notifications
     */
    public get id(): shapes.NotificationId {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketNotification',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketNotification.QueueConfiguration.Id'),
          outputPath: 'QueueConfiguration.Id',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketNotification.QueueConfiguration.Id', props);
      return request.getResponseField('QueueConfiguration.Id') as unknown as shapes.NotificationId;
    }
    /**
     * A collection of bucket events for which to send notifications
     */
    public get event(): shapes.Event {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketNotification',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketNotification.QueueConfiguration.Event'),
          outputPath: 'QueueConfiguration.Event',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketNotification.QueueConfiguration.Event', props);
      return request.getResponseField('QueueConfiguration.Event') as unknown as shapes.Event;
    }
    /**
     * A collection of bucket events for which to send notifications
     */
    public get events(): shapes.EventList {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketNotification',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketNotification.QueueConfiguration.Events'),
          outputPath: 'QueueConfiguration.Events',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketNotification.QueueConfiguration.Events', props);
      return request.getResponseField('QueueConfiguration.Events') as unknown as shapes.EventList;
    }
    /**
     * The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message when it detects events of the specified type.
     */
    public get queue(): shapes.QueueArn {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketNotification',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketNotification.QueueConfiguration.Queue'),
          outputPath: 'QueueConfiguration.Queue',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketNotification.QueueConfiguration.Queue', props);
      return request.getResponseField('QueueConfiguration.Queue') as unknown as shapes.QueueArn;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketNotificationConfigurationRequest) {
    }
  }
  public get queueConfiguration(): InstanceType<typeof NotificationConfigurationDeprecated.QueueConfigurationResponse> {
    return new NotificationConfigurationDeprecated.QueueConfigurationResponse(this.scope, this.resources, this.input);
  }

  /**
   * Response for NotificationConfigurationDeprecated.CloudFunctionConfiguration
   */
  static CloudFunctionConfigurationResponse = class {
    /**
     * A single character used for escaping when the field delimiter is part of the value. For example, if the value is a, b, Amazon S3 wraps this field value in quotation marks, as follows: " a , b ".
     */
    public get id(): shapes.NotificationId {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketNotification',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketNotification.CloudFunctionConfiguration.Id'),
          outputPath: 'CloudFunctionConfiguration.Id',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketNotification.CloudFunctionConfiguration.Id', props);
      return request.getResponseField('CloudFunctionConfiguration.Id') as unknown as shapes.NotificationId;
    }
    /**
     * A single character used for escaping when the field delimiter is part of the value. For example, if the value is a, b, Amazon S3 wraps this field value in quotation marks, as follows: " a , b ".
     */
    public get event(): shapes.Event {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketNotification',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketNotification.CloudFunctionConfiguration.Event'),
          outputPath: 'CloudFunctionConfiguration.Event',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketNotification.CloudFunctionConfiguration.Event', props);
      return request.getResponseField('CloudFunctionConfiguration.Event') as unknown as shapes.Event;
    }
    /**
     * Bucket events for which to send notifications.
     */
    public get events(): shapes.EventList {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketNotification',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketNotification.CloudFunctionConfiguration.Events'),
          outputPath: 'CloudFunctionConfiguration.Events',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketNotification.CloudFunctionConfiguration.Events', props);
      return request.getResponseField('CloudFunctionConfiguration.Events') as unknown as shapes.EventList;
    }
    /**
     * Lambda cloud function ARN that Amazon S3 can invoke when it detects events of the specified type.
     */
    public get cloudFunction(): shapes.CloudFunction {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketNotification',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketNotification.CloudFunctionConfiguration.CloudFunction'),
          outputPath: 'CloudFunctionConfiguration.CloudFunction',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketNotification.CloudFunctionConfiguration.CloudFunction', props);
      return request.getResponseField('CloudFunctionConfiguration.CloudFunction') as unknown as shapes.CloudFunction;
    }
    /**
     * The role supporting the invocation of the Lambda function
     */
    public get invocationRole(): shapes.CloudFunctionInvocationRole {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketNotification',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketNotification.CloudFunctionConfiguration.InvocationRole'),
          outputPath: 'CloudFunctionConfiguration.InvocationRole',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketNotification.CloudFunctionConfiguration.InvocationRole', props);
      return request.getResponseField('CloudFunctionConfiguration.InvocationRole') as unknown as shapes.CloudFunctionInvocationRole;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketNotificationConfigurationRequest) {
    }
  }
  public get cloudFunctionConfiguration(): InstanceType<typeof NotificationConfigurationDeprecated.CloudFunctionConfigurationResponse> {
    return new NotificationConfigurationDeprecated.CloudFunctionConfigurationResponse(this.scope, this.resources, this.input);
  }

  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketNotificationConfigurationRequest) {
  }
}

/**
 * Response for GetBucketNotificationConfiguration.
 */
export class NotificationConfiguration {
  /**
   * The topic to which notifications are sent and the events for which notifications are generated.
   */
  public get topicConfigurations(): shapes.TopicConfigurationList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getBucketNotificationConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetBucketNotificationConfiguration.TopicConfigurations'),
        outputPath: 'TopicConfigurations',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetBucketNotificationConfiguration.TopicConfigurations', props);
    return request.getResponseField('TopicConfigurations') as unknown as shapes.TopicConfigurationList;
  }
  /**
   * The Amazon Simple Queue Service queues to publish messages to and the events for which to publish messages.
   */
  public get queueConfigurations(): shapes.QueueConfigurationList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getBucketNotificationConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetBucketNotificationConfiguration.QueueConfigurations'),
        outputPath: 'QueueConfigurations',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetBucketNotificationConfiguration.QueueConfigurations', props);
    return request.getResponseField('QueueConfigurations') as unknown as shapes.QueueConfigurationList;
  }
  /**
   * Describes the AWS Lambda functions to invoke and the events for which to invoke them.
   */
  public get lambdaFunctionConfigurations(): shapes.LambdaFunctionConfigurationList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getBucketNotificationConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetBucketNotificationConfiguration.LambdaFunctionConfigurations'),
        outputPath: 'LambdaFunctionConfigurations',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetBucketNotificationConfiguration.LambdaFunctionConfigurations', props);
    return request.getResponseField('LambdaFunctionConfigurations') as unknown as shapes.LambdaFunctionConfigurationList;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketNotificationConfigurationRequest) {
  }
}

/**
 * Response for GetBucketOwnershipControls.
 */
export class GetBucketOwnershipControlsOutput {
  /**
   * Response for GetBucketOwnershipControlsOutput.OwnershipControls
   */
  static OwnershipControlsResponse = class {
    /**
     * The container element for an ownership control rule.
     */
    public get rules(): shapes.OwnershipControlsRules {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketOwnershipControls',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketOwnershipControls.OwnershipControls.Rules'),
          outputPath: 'OwnershipControls.Rules',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketOwnershipControls.OwnershipControls.Rules', props);
      return request.getResponseField('OwnershipControls.Rules') as unknown as shapes.OwnershipControlsRules;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketOwnershipControlsRequest) {
    }
  }
  public get ownershipControls(): InstanceType<typeof GetBucketOwnershipControlsOutput.OwnershipControlsResponse> {
    return new GetBucketOwnershipControlsOutput.OwnershipControlsResponse(this.scope, this.resources, this.input);
  }

  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketOwnershipControlsRequest) {
  }
}

/**
 * Response for GetBucketPolicy.
 */
export class GetBucketPolicyOutput {
  /**
   * The bucket policy as a JSON document.
   */
  public get policy(): shapes.Policy {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getBucketPolicy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetBucketPolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetBucketPolicy.Policy', props);
    return request.getResponseField('Policy') as unknown as shapes.Policy;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketPolicyRequest) {
  }
}

/**
 * Response for GetBucketPolicyStatus.
 */
export class GetBucketPolicyStatusOutput {
  /**
   * Response for GetBucketPolicyStatusOutput.PolicyStatus
   */
  static PolicyStatusResponse = class {
    /**
     * The policy status for this bucket. TRUE indicates that this bucket is public. FALSE indicates that the bucket is not public.
     */
    public get isPublic(): shapes.IsPublic {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketPolicyStatus',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketPolicyStatus.PolicyStatus.IsPublic'),
          outputPath: 'PolicyStatus.IsPublic',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketPolicyStatus.PolicyStatus.IsPublic', props);
      return request.getResponseField('PolicyStatus.IsPublic') as unknown as shapes.IsPublic;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketPolicyStatusRequest) {
    }
  }
  public get policyStatus(): InstanceType<typeof GetBucketPolicyStatusOutput.PolicyStatusResponse> {
    return new GetBucketPolicyStatusOutput.PolicyStatusResponse(this.scope, this.resources, this.input);
  }

  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketPolicyStatusRequest) {
  }
}

/**
 * Response for GetBucketReplication.
 */
export class GetBucketReplicationOutput {
  /**
   * Response for GetBucketReplicationOutput.ReplicationConfiguration
   */
  static ReplicationConfigurationResponse = class {
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that Amazon S3 assumes when replicating objects. For more information, see How to Set Up Replication in the Amazon Simple Storage Service Developer Guide.
     */
    public get role(): shapes.Role {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketReplication',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketReplication.ReplicationConfiguration.Role'),
          outputPath: 'ReplicationConfiguration.Role',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketReplication.ReplicationConfiguration.Role', props);
      return request.getResponseField('ReplicationConfiguration.Role') as unknown as shapes.Role;
    }
    /**
     * A container for one or more replication rules. A replication configuration must have at least one rule and can contain a maximum of 1,000 rules.
     */
    public get rules(): shapes.ReplicationRules {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketReplication',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketReplication.ReplicationConfiguration.Rules'),
          outputPath: 'ReplicationConfiguration.Rules',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketReplication.ReplicationConfiguration.Rules', props);
      return request.getResponseField('ReplicationConfiguration.Rules') as unknown as shapes.ReplicationRules;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketReplicationRequest) {
    }
  }
  public get replicationConfiguration(): InstanceType<typeof GetBucketReplicationOutput.ReplicationConfigurationResponse> {
    return new GetBucketReplicationOutput.ReplicationConfigurationResponse(this.scope, this.resources, this.input);
  }

  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketReplicationRequest) {
  }
}

/**
 * Response for GetBucketRequestPayment.
 */
export class GetBucketRequestPaymentOutput {
  /**
   * Specifies who pays for the download and request fees.
   */
  public get payer(): shapes.Payer {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getBucketRequestPayment',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetBucketRequestPayment.Payer'),
        outputPath: 'Payer',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetBucketRequestPayment.Payer', props);
    return request.getResponseField('Payer') as unknown as shapes.Payer;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketRequestPaymentRequest) {
  }
}

/**
 * Response for GetBucketTagging.
 */
export class GetBucketTaggingOutput {
  /**
   * Contains the tag set.
   */
  public get tagSet(): shapes.TagSet {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getBucketTagging',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetBucketTagging.TagSet'),
        outputPath: 'TagSet',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetBucketTagging.TagSet', props);
    return request.getResponseField('TagSet') as unknown as shapes.TagSet;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketTaggingRequest) {
  }
}

/**
 * Response for GetBucketVersioning.
 */
export class GetBucketVersioningOutput {
  /**
   * The versioning state of the bucket.
   */
  public get status(): shapes.BucketVersioningStatus {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getBucketVersioning',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetBucketVersioning.Status'),
        outputPath: 'Status',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetBucketVersioning.Status', props);
    return request.getResponseField('Status') as unknown as shapes.BucketVersioningStatus;
  }
  /**
   * Specifies whether MFA delete is enabled in the bucket versioning configuration. This element is only returned if the bucket has been configured with MFA delete. If the bucket has never been so configured, this element is not returned.
   */
  public get mfaDelete(): shapes.MFADeleteStatus {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getBucketVersioning',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetBucketVersioning.MFADelete'),
        outputPath: 'MFADelete',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetBucketVersioning.MFADelete', props);
    return request.getResponseField('MFADelete') as unknown as shapes.MFADeleteStatus;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketVersioningRequest) {
  }
}

/**
 * Response for GetBucketWebsite.
 */
export class GetBucketWebsiteOutput {
  /**
   * Response for GetBucketWebsiteOutput.RedirectAllRequestsTo
   */
  static RedirectAllRequestsToResponse = class {
    /**
     * Name of the host where requests are redirected.
     */
    public get hostName(): shapes.HostName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketWebsite',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketWebsite.RedirectAllRequestsTo.HostName'),
          outputPath: 'RedirectAllRequestsTo.HostName',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketWebsite.RedirectAllRequestsTo.HostName', props);
      return request.getResponseField('RedirectAllRequestsTo.HostName') as unknown as shapes.HostName;
    }
    /**
     * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
     */
    public get protocol(): shapes.Protocol {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketWebsite',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketWebsite.RedirectAllRequestsTo.Protocol'),
          outputPath: 'RedirectAllRequestsTo.Protocol',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketWebsite.RedirectAllRequestsTo.Protocol', props);
      return request.getResponseField('RedirectAllRequestsTo.Protocol') as unknown as shapes.Protocol;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketWebsiteRequest) {
    }
  }
  public get redirectAllRequestsTo(): InstanceType<typeof GetBucketWebsiteOutput.RedirectAllRequestsToResponse> {
    return new GetBucketWebsiteOutput.RedirectAllRequestsToResponse(this.scope, this.resources, this.input);
  }

  /**
   * Response for GetBucketWebsiteOutput.IndexDocument
   */
  static IndexDocumentResponse = class {
    /**
     * A suffix that is appended to a request that is for a directory on the website endpoint (for example,if the suffix is index.html and you make a request to samplebucket/images/ the data that is returned will be for the object with the key name images/index.html) The suffix must not be empty and must not include a slash character.
     */
    public get suffix(): shapes.Suffix {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketWebsite',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketWebsite.IndexDocument.Suffix'),
          outputPath: 'IndexDocument.Suffix',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketWebsite.IndexDocument.Suffix', props);
      return request.getResponseField('IndexDocument.Suffix') as unknown as shapes.Suffix;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketWebsiteRequest) {
    }
  }
  public get indexDocument(): InstanceType<typeof GetBucketWebsiteOutput.IndexDocumentResponse> {
    return new GetBucketWebsiteOutput.IndexDocumentResponse(this.scope, this.resources, this.input);
  }

  /**
   * Response for GetBucketWebsiteOutput.ErrorDocument
   */
  static ErrorDocumentResponse = class {
    /**
     * The object key name to use when a 4XX class error occurs.
     */
    public get key(): shapes.ObjectKey {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getBucketWebsite',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetBucketWebsite.ErrorDocument.Key'),
          outputPath: 'ErrorDocument.Key',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetBucketWebsite.ErrorDocument.Key', props);
      return request.getResponseField('ErrorDocument.Key') as unknown as shapes.ObjectKey;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketWebsiteRequest) {
    }
  }
  public get errorDocument(): InstanceType<typeof GetBucketWebsiteOutput.ErrorDocumentResponse> {
    return new GetBucketWebsiteOutput.ErrorDocumentResponse(this.scope, this.resources, this.input);
  }

  /**
   * Rules that define when a redirect is applied and the redirect behavior.
   */
  public get routingRules(): shapes.RoutingRules {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getBucketWebsite',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetBucketWebsite.RoutingRules'),
        outputPath: 'RoutingRules',
        parameters: {
          Bucket: this.input.bucket,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetBucketWebsite.RoutingRules', props);
    return request.getResponseField('RoutingRules') as unknown as shapes.RoutingRules;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetBucketWebsiteRequest) {
  }
}

/**
 * Response for GetObject.
 */
export class GetObjectOutput {
  /**
   * Object data.
   */
  public get body(): shapes.Body {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.Body'),
        outputPath: 'Body',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.Body', props);
    return request.getResponseField('Body') as unknown as shapes.Body;
  }
  /**
   * Specifies whether the object retrieved was (true) or was not (false) a Delete Marker. If false, this response header does not appear in the response.
   */
  public get deleteMarker(): shapes.DeleteMarker {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.DeleteMarker'),
        outputPath: 'DeleteMarker',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.DeleteMarker', props);
    return request.getResponseField('DeleteMarker') as unknown as shapes.DeleteMarker;
  }
  /**
   * Indicates that a range of bytes was specified.
   */
  public get acceptRanges(): shapes.AcceptRanges {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.AcceptRanges'),
        outputPath: 'AcceptRanges',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.AcceptRanges', props);
    return request.getResponseField('AcceptRanges') as unknown as shapes.AcceptRanges;
  }
  /**
   * If the object expiration is configured (see PUT Bucket lifecycle), the response includes this header. It includes the expiry-date and rule-id key-value pairs providing object expiration information. The value of the rule-id is URL encoded.
   */
  public get expiration(): shapes.Expiration {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.Expiration'),
        outputPath: 'Expiration',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.Expiration', props);
    return request.getResponseField('Expiration') as unknown as shapes.Expiration;
  }
  /**
   * Provides information about object restoration operation and expiration time of the restored object copy.
   */
  public get restore(): shapes.Restore {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.Restore'),
        outputPath: 'Restore',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.Restore', props);
    return request.getResponseField('Restore') as unknown as shapes.Restore;
  }
  /**
   * Last modified date of the object
   */
  public get lastModified(): shapes.LastModified {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.LastModified', props);
    return request.getResponseField('LastModified') as unknown as shapes.LastModified;
  }
  /**
   * Size of the body in bytes.
   */
  public get contentLength(): shapes.ContentLength {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.ContentLength'),
        outputPath: 'ContentLength',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.ContentLength', props);
    return request.getResponseField('ContentLength') as unknown as shapes.ContentLength;
  }
  /**
   * An ETag is an opaque identifier assigned by a web server to a specific version of a resource found at a URL.
   */
  public get eTag(): shapes.ETag {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.ETag'),
        outputPath: 'ETag',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.ETag', props);
    return request.getResponseField('ETag') as unknown as shapes.ETag;
  }
  /**
   * This is set to the number of metadata entries not returned in x-amz-meta headers. This can happen if you create metadata using an API like SOAP that supports more flexible metadata than the REST API. For example, using SOAP, you can create metadata whose values are not legal HTTP headers.
   */
  public get missingMeta(): shapes.MissingMeta {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.MissingMeta'),
        outputPath: 'MissingMeta',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.MissingMeta', props);
    return request.getResponseField('MissingMeta') as unknown as shapes.MissingMeta;
  }
  /**
   * Version of the object.
   */
  public get versionId(): shapes.ObjectVersionId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.VersionId', props);
    return request.getResponseField('VersionId') as unknown as shapes.ObjectVersionId;
  }
  /**
   * Specifies caching behavior along the request/reply chain.
   */
  public get cacheControl(): shapes.CacheControl {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.CacheControl'),
        outputPath: 'CacheControl',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.CacheControl', props);
    return request.getResponseField('CacheControl') as unknown as shapes.CacheControl;
  }
  /**
   * Specifies presentational information for the object.
   */
  public get contentDisposition(): shapes.ContentDisposition {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.ContentDisposition'),
        outputPath: 'ContentDisposition',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.ContentDisposition', props);
    return request.getResponseField('ContentDisposition') as unknown as shapes.ContentDisposition;
  }
  /**
   * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.
   */
  public get contentEncoding(): shapes.ContentEncoding {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.ContentEncoding'),
        outputPath: 'ContentEncoding',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.ContentEncoding', props);
    return request.getResponseField('ContentEncoding') as unknown as shapes.ContentEncoding;
  }
  /**
   * The language the content is in.
   */
  public get contentLanguage(): shapes.ContentLanguage {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.ContentLanguage'),
        outputPath: 'ContentLanguage',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.ContentLanguage', props);
    return request.getResponseField('ContentLanguage') as unknown as shapes.ContentLanguage;
  }
  /**
   * The portion of the object returned in the response.
   */
  public get contentRange(): shapes.ContentRange {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.ContentRange'),
        outputPath: 'ContentRange',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.ContentRange', props);
    return request.getResponseField('ContentRange') as unknown as shapes.ContentRange;
  }
  /**
   * A standard MIME type describing the format of the object data.
   */
  public get contentType(): shapes.ContentType {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.ContentType', props);
    return request.getResponseField('ContentType') as unknown as shapes.ContentType;
  }
  /**
   * The date and time at which the object is no longer cacheable.
   */
  public get expires(): shapes.Expires {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.Expires'),
        outputPath: 'Expires',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.Expires', props);
    return request.getResponseField('Expires') as unknown as shapes.Expires;
  }
  /**
   * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.
   */
  public get websiteRedirectLocation(): shapes.WebsiteRedirectLocation {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.WebsiteRedirectLocation'),
        outputPath: 'WebsiteRedirectLocation',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.WebsiteRedirectLocation', props);
    return request.getResponseField('WebsiteRedirectLocation') as unknown as shapes.WebsiteRedirectLocation;
  }
  /**
   * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
   */
  public get serverSideEncryption(): shapes.ServerSideEncryption {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.ServerSideEncryption'),
        outputPath: 'ServerSideEncryption',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.ServerSideEncryption', props);
    return request.getResponseField('ServerSideEncryption') as unknown as shapes.ServerSideEncryption;
  }
  /**
   * A map of metadata to store with the object in S3.
   */
  public get metadata(): shapes.Metadata {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.Metadata'),
        outputPath: 'Metadata',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.Metadata', props);
    return request.getResponseField('Metadata') as unknown as shapes.Metadata;
  }
  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
   */
  public get sseCustomerAlgorithm(): shapes.SSECustomerAlgorithm {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.SSECustomerAlgorithm'),
        outputPath: 'SSECustomerAlgorithm',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.SSECustomerAlgorithm', props);
    return request.getResponseField('SSECustomerAlgorithm') as unknown as shapes.SSECustomerAlgorithm;
  }
  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round-trip message integrity verification of the customer-provided encryption key.
   */
  public get sseCustomerKeyMd5(): shapes.SSECustomerKeyMD5 {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.SSECustomerKeyMD5'),
        outputPath: 'SSECustomerKeyMD5',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.SSECustomerKeyMD5', props);
    return request.getResponseField('SSECustomerKeyMD5') as unknown as shapes.SSECustomerKeyMD5;
  }
  /**
   * If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key (CMK) that was used for the object.
   */
  public get ssekmsKeyId(): shapes.SSEKMSKeyId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.SSEKMSKeyId'),
        outputPath: 'SSEKMSKeyId',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.SSEKMSKeyId', props);
    return request.getResponseField('SSEKMSKeyId') as unknown as shapes.SSEKMSKeyId;
  }
  /**
   * Provides storage class information of the object. Amazon S3 returns this header for all objects except for S3 Standard storage class objects.
   */
  public get storageClass(): shapes.StorageClass {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.StorageClass'),
        outputPath: 'StorageClass',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.StorageClass', props);
    return request.getResponseField('StorageClass') as unknown as shapes.StorageClass;
  }
  /**
   * Provides storage class information of the object. Amazon S3 returns this header for all objects except for S3 Standard storage class objects.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  /**
   * Amazon S3 can return this if your request involves a bucket that is either a source or destination in a replication rule.
   */
  public get replicationStatus(): shapes.ReplicationStatus {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.ReplicationStatus'),
        outputPath: 'ReplicationStatus',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.ReplicationStatus', props);
    return request.getResponseField('ReplicationStatus') as unknown as shapes.ReplicationStatus;
  }
  /**
   * The count of parts this object has.
   */
  public get partsCount(): shapes.PartsCount {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.PartsCount'),
        outputPath: 'PartsCount',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.PartsCount', props);
    return request.getResponseField('PartsCount') as unknown as shapes.PartsCount;
  }
  /**
   * The number of tags, if any, on the object.
   */
  public get tagCount(): shapes.TagCount {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.TagCount'),
        outputPath: 'TagCount',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.TagCount', props);
    return request.getResponseField('TagCount') as unknown as shapes.TagCount;
  }
  /**
   * The Object Lock mode currently in place for this object.
   */
  public get objectLockMode(): shapes.ObjectLockMode {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.ObjectLockMode'),
        outputPath: 'ObjectLockMode',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.ObjectLockMode', props);
    return request.getResponseField('ObjectLockMode') as unknown as shapes.ObjectLockMode;
  }
  /**
   * The date and time when this object's Object Lock will expire.
   */
  public get objectLockRetainUntilDate(): shapes.ObjectLockRetainUntilDate {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.ObjectLockRetainUntilDate'),
        outputPath: 'ObjectLockRetainUntilDate',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.ObjectLockRetainUntilDate', props);
    return request.getResponseField('ObjectLockRetainUntilDate') as unknown as shapes.ObjectLockRetainUntilDate;
  }
  /**
   * Indicates whether this object has an active legal hold. This field is only returned if you have permission to view an object's legal hold status.
   */
  public get objectLockLegalHoldStatus(): shapes.ObjectLockLegalHoldStatus {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObject.ObjectLockLegalHoldStatus'),
        outputPath: 'ObjectLockLegalHoldStatus',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          ResponseCacheControl: this.input.responseCacheControl,
          ResponseContentDisposition: this.input.responseContentDisposition,
          ResponseContentEncoding: this.input.responseContentEncoding,
          ResponseContentLanguage: this.input.responseContentLanguage,
          ResponseContentType: this.input.responseContentType,
          ResponseExpires: this.input.responseExpires,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObject.ObjectLockLegalHoldStatus', props);
    return request.getResponseField('ObjectLockLegalHoldStatus') as unknown as shapes.ObjectLockLegalHoldStatus;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetObjectRequest) {
  }
}

/**
 * Response for GetObjectAcl.
 */
export class GetObjectAclOutput {
  /**
   * Response for GetObjectAclOutput.Owner
   */
  static OwnerResponse = class {
    /**
     * Container for the display name of the owner.
     */
    public get displayName(): shapes.DisplayName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getObjectAcl',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetObjectAcl.Owner.DisplayName'),
          outputPath: 'Owner.DisplayName',
          parameters: {
            Bucket: this.input.bucket,
            Key: this.input.key,
            VersionId: this.input.versionId,
            RequestPayer: this.input.requestPayer,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetObjectAcl.Owner.DisplayName', props);
      return request.getResponseField('Owner.DisplayName') as unknown as shapes.DisplayName;
    }
    /**
     * Container for the ID of the owner.
     */
    public get id(): shapes.ID {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getObjectAcl',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetObjectAcl.Owner.ID'),
          outputPath: 'Owner.ID',
          parameters: {
            Bucket: this.input.bucket,
            Key: this.input.key,
            VersionId: this.input.versionId,
            RequestPayer: this.input.requestPayer,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetObjectAcl.Owner.ID', props);
      return request.getResponseField('Owner.ID') as unknown as shapes.ID;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetObjectAclRequest) {
    }
  }
  public get owner(): InstanceType<typeof GetObjectAclOutput.OwnerResponse> {
    return new GetObjectAclOutput.OwnerResponse(this.scope, this.resources, this.input);
  }

  /**
   * A list of grants.
   */
  public get grants(): shapes.Grants {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObjectAcl',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObjectAcl.Grants'),
        outputPath: 'Grants',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObjectAcl.Grants', props);
    return request.getResponseField('Grants') as unknown as shapes.Grants;
  }
  /**
   * A list of grants.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObjectAcl',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObjectAcl.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObjectAcl.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetObjectAclRequest) {
  }
}

/**
 * Response for GetObjectLegalHold.
 */
export class GetObjectLegalHoldOutput {
  /**
   * Response for GetObjectLegalHoldOutput.LegalHold
   */
  static LegalHoldResponse = class {
    /**
     * Indicates whether the specified object has a Legal Hold in place.
     */
    public get status(): shapes.ObjectLockLegalHoldStatus {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getObjectLegalHold',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetObjectLegalHold.LegalHold.Status'),
          outputPath: 'LegalHold.Status',
          parameters: {
            Bucket: this.input.bucket,
            Key: this.input.key,
            VersionId: this.input.versionId,
            RequestPayer: this.input.requestPayer,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetObjectLegalHold.LegalHold.Status', props);
      return request.getResponseField('LegalHold.Status') as unknown as shapes.ObjectLockLegalHoldStatus;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetObjectLegalHoldRequest) {
    }
  }
  public get legalHold(): InstanceType<typeof GetObjectLegalHoldOutput.LegalHoldResponse> {
    return new GetObjectLegalHoldOutput.LegalHoldResponse(this.scope, this.resources, this.input);
  }

  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetObjectLegalHoldRequest) {
  }
}

/**
 * Response for GetObjectLockConfiguration.
 */
export class GetObjectLockConfigurationOutput {
  /**
   * Response for GetObjectLockConfigurationOutput.ObjectLockConfiguration
   */
  static ObjectLockConfigurationResponse = class {
    /**
     * Indicates whether this bucket has an Object Lock configuration enabled.
     */
    public get objectLockEnabled(): shapes.ObjectLockEnabled {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getObjectLockConfiguration',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetObjectLockConfiguration.ObjectLockConfiguration.ObjectLockEnabled'),
          outputPath: 'ObjectLockConfiguration.ObjectLockEnabled',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetObjectLockConfiguration.ObjectLockConfiguration.ObjectLockEnabled', props);
      return request.getResponseField('ObjectLockConfiguration.ObjectLockEnabled') as unknown as shapes.ObjectLockEnabled;
    }
    /**
     * Response for GetObjectLockConfigurationOutput.ObjectLockConfigurationResponse.Rule
     */
    static RuleResponse = class {
      /**
       * Response for GetObjectLockConfigurationOutput.ObjectLockConfigurationResponse.RuleResponse.DefaultRetention
       */
      static DefaultRetentionResponse = class {
        /**
         * The default Object Lock retention mode you want to apply to new objects placed in the specified bucket.
         */
        public get mode(): shapes.ObjectLockRetentionMode {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getObjectLockConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetObjectLockConfiguration.ObjectLockConfiguration.Rule.DefaultRetention.Mode'),
              outputPath: 'ObjectLockConfiguration.Rule.DefaultRetention.Mode',
              parameters: {
                Bucket: this.input.bucket,
                ExpectedBucketOwner: this.input.expectedBucketOwner,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetObjectLockConfiguration.ObjectLockConfiguration.Rule.DefaultRetention.Mode', props);
          return request.getResponseField('ObjectLockConfiguration.Rule.DefaultRetention.Mode') as unknown as shapes.ObjectLockRetentionMode;
        }
        /**
         * The number of days that you want to specify for the default retention period.
         */
        public get days(): shapes.Days {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getObjectLockConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetObjectLockConfiguration.ObjectLockConfiguration.Rule.DefaultRetention.Days'),
              outputPath: 'ObjectLockConfiguration.Rule.DefaultRetention.Days',
              parameters: {
                Bucket: this.input.bucket,
                ExpectedBucketOwner: this.input.expectedBucketOwner,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetObjectLockConfiguration.ObjectLockConfiguration.Rule.DefaultRetention.Days', props);
          return request.getResponseField('ObjectLockConfiguration.Rule.DefaultRetention.Days') as unknown as shapes.Days;
        }
        /**
         * The number of years that you want to specify for the default retention period.
         */
        public get years(): shapes.Years {
          const props: cr.AwsCustomResourceProps = {
            onUpdate: {
              action: 'getObjectLockConfiguration',
              service: 'S3',
              physicalResourceId: cr.PhysicalResourceId.of('GetObjectLockConfiguration.ObjectLockConfiguration.Rule.DefaultRetention.Years'),
              outputPath: 'ObjectLockConfiguration.Rule.DefaultRetention.Years',
              parameters: {
                Bucket: this.input.bucket,
                ExpectedBucketOwner: this.input.expectedBucketOwner,
              },
            },
            policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
          };
          const request = new cr.AwsCustomResource(this.scope, 'GetObjectLockConfiguration.ObjectLockConfiguration.Rule.DefaultRetention.Years', props);
          return request.getResponseField('ObjectLockConfiguration.Rule.DefaultRetention.Years') as unknown as shapes.Years;
        }
        constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetObjectLockConfigurationRequest) {
        }
      }
      public get defaultRetention(): InstanceType<typeof GetObjectLockConfigurationOutput.ObjectLockConfigurationResponse.RuleResponse.DefaultRetentionResponse> {
        return new GetObjectLockConfigurationOutput.ObjectLockConfigurationResponse.RuleResponse.DefaultRetentionResponse(this.scope, this.resources, this.input);
      }

      constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetObjectLockConfigurationRequest) {
      }
    }
    public get rule(): InstanceType<typeof GetObjectLockConfigurationOutput.ObjectLockConfigurationResponse.RuleResponse> {
      return new GetObjectLockConfigurationOutput.ObjectLockConfigurationResponse.RuleResponse(this.scope, this.resources, this.input);
    }

    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetObjectLockConfigurationRequest) {
    }
  }
  public get objectLockConfiguration(): InstanceType<typeof GetObjectLockConfigurationOutput.ObjectLockConfigurationResponse> {
    return new GetObjectLockConfigurationOutput.ObjectLockConfigurationResponse(this.scope, this.resources, this.input);
  }

  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetObjectLockConfigurationRequest) {
  }
}

/**
 * Response for GetObjectRetention.
 */
export class GetObjectRetentionOutput {
  /**
   * Response for GetObjectRetentionOutput.Retention
   */
  static RetentionResponse = class {
    /**
     * Indicates the Retention mode for the specified object.
     */
    public get mode(): shapes.ObjectLockRetentionMode {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getObjectRetention',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetObjectRetention.Retention.Mode'),
          outputPath: 'Retention.Mode',
          parameters: {
            Bucket: this.input.bucket,
            Key: this.input.key,
            VersionId: this.input.versionId,
            RequestPayer: this.input.requestPayer,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetObjectRetention.Retention.Mode', props);
      return request.getResponseField('Retention.Mode') as unknown as shapes.ObjectLockRetentionMode;
    }
    /**
     * The date on which this Object Lock Retention will expire.
     */
    public get retainUntilDate(): shapes._Date {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getObjectRetention',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetObjectRetention.Retention.RetainUntilDate'),
          outputPath: 'Retention.RetainUntilDate',
          parameters: {
            Bucket: this.input.bucket,
            Key: this.input.key,
            VersionId: this.input.versionId,
            RequestPayer: this.input.requestPayer,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetObjectRetention.Retention.RetainUntilDate', props);
      return request.getResponseField('Retention.RetainUntilDate') as unknown as shapes._Date;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetObjectRetentionRequest) {
    }
  }
  public get retention(): InstanceType<typeof GetObjectRetentionOutput.RetentionResponse> {
    return new GetObjectRetentionOutput.RetentionResponse(this.scope, this.resources, this.input);
  }

  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetObjectRetentionRequest) {
  }
}

/**
 * Response for GetObjectTagging.
 */
export class GetObjectTaggingOutput {
  /**
   * The versionId of the object for which you got the tagging information.
   */
  public get versionId(): shapes.ObjectVersionId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObjectTagging',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObjectTagging.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObjectTagging.VersionId', props);
    return request.getResponseField('VersionId') as unknown as shapes.ObjectVersionId;
  }
  /**
   * Contains the tag set.
   */
  public get tagSet(): shapes.TagSet {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObjectTagging',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObjectTagging.TagSet'),
        outputPath: 'TagSet',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObjectTagging.TagSet', props);
    return request.getResponseField('TagSet') as unknown as shapes.TagSet;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetObjectTaggingRequest) {
  }
}

/**
 * Response for GetObjectTorrent.
 */
export class GetObjectTorrentOutput {
  /**
   * A Bencoded dictionary as defined by the BitTorrent specification
   */
  public get body(): shapes.Body {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObjectTorrent',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObjectTorrent.Body'),
        outputPath: 'Body',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObjectTorrent.Body', props);
    return request.getResponseField('Body') as unknown as shapes.Body;
  }
  /**
   * A Bencoded dictionary as defined by the BitTorrent specification
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'getObjectTorrent',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('GetObjectTorrent.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'GetObjectTorrent.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetObjectTorrentRequest) {
  }
}

/**
 * Response for GetPublicAccessBlock.
 */
export class GetPublicAccessBlockOutput {
  /**
   * Response for GetPublicAccessBlockOutput.PublicAccessBlockConfiguration
   */
  static PublicAccessBlockConfigurationResponse = class {
    /**
     * Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket. Setting this element to TRUE causes the following behavior:   PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.   PUT Object calls fail if the request includes a public ACL.   PUT Bucket calls fail if the request includes a public ACL.   Enabling this setting doesn't affect existing policies or ACLs.
     */
    public get blockPublicAcls(): shapes.Setting {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getPublicAccessBlock',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetPublicAccessBlock.PublicAccessBlockConfiguration.BlockPublicAcls'),
          outputPath: 'PublicAccessBlockConfiguration.BlockPublicAcls',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetPublicAccessBlock.PublicAccessBlockConfiguration.BlockPublicAcls', props);
      return request.getResponseField('PublicAccessBlockConfiguration.BlockPublicAcls') as unknown as shapes.Setting;
    }
    /**
     * Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
     */
    public get ignorePublicAcls(): shapes.Setting {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getPublicAccessBlock',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetPublicAccessBlock.PublicAccessBlockConfiguration.IgnorePublicAcls'),
          outputPath: 'PublicAccessBlockConfiguration.IgnorePublicAcls',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetPublicAccessBlock.PublicAccessBlockConfiguration.IgnorePublicAcls', props);
      return request.getResponseField('PublicAccessBlockConfiguration.IgnorePublicAcls') as unknown as shapes.Setting;
    }
    /**
     * Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.  Enabling this setting doesn't affect existing bucket policies.
     */
    public get blockPublicPolicy(): shapes.Setting {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getPublicAccessBlock',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetPublicAccessBlock.PublicAccessBlockConfiguration.BlockPublicPolicy'),
          outputPath: 'PublicAccessBlockConfiguration.BlockPublicPolicy',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetPublicAccessBlock.PublicAccessBlockConfiguration.BlockPublicPolicy', props);
      return request.getResponseField('PublicAccessBlockConfiguration.BlockPublicPolicy') as unknown as shapes.Setting;
    }
    /**
     * Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS service principals and authorized users within this account if the bucket has a public policy. Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
     */
    public get restrictPublicBuckets(): shapes.Setting {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'getPublicAccessBlock',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('GetPublicAccessBlock.PublicAccessBlockConfiguration.RestrictPublicBuckets'),
          outputPath: 'PublicAccessBlockConfiguration.RestrictPublicBuckets',
          parameters: {
            Bucket: this.input.bucket,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'GetPublicAccessBlock.PublicAccessBlockConfiguration.RestrictPublicBuckets', props);
      return request.getResponseField('PublicAccessBlockConfiguration.RestrictPublicBuckets') as unknown as shapes.Setting;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetPublicAccessBlockRequest) {
    }
  }
  public get publicAccessBlockConfiguration(): InstanceType<typeof GetPublicAccessBlockOutput.PublicAccessBlockConfigurationResponse> {
    return new GetPublicAccessBlockOutput.PublicAccessBlockConfigurationResponse(this.scope, this.resources, this.input);
  }

  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.GetPublicAccessBlockRequest) {
  }
}

/**
 * Response for HeadObject.
 */
export class HeadObjectOutput {
  /**
   * Specifies whether the object retrieved was (true) or was not (false) a Delete Marker. If false, this response header does not appear in the response.
   */
  public get deleteMarker(): shapes.DeleteMarker {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.DeleteMarker'),
        outputPath: 'DeleteMarker',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.DeleteMarker', props);
    return request.getResponseField('DeleteMarker') as unknown as shapes.DeleteMarker;
  }
  /**
   * Indicates that a range of bytes was specified.
   */
  public get acceptRanges(): shapes.AcceptRanges {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.AcceptRanges'),
        outputPath: 'AcceptRanges',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.AcceptRanges', props);
    return request.getResponseField('AcceptRanges') as unknown as shapes.AcceptRanges;
  }
  /**
   * If the object expiration is configured (see PUT Bucket lifecycle), the response includes this header. It includes the expiry-date and rule-id key-value pairs providing object expiration information. The value of the rule-id is URL encoded.
   */
  public get expiration(): shapes.Expiration {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.Expiration'),
        outputPath: 'Expiration',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.Expiration', props);
    return request.getResponseField('Expiration') as unknown as shapes.Expiration;
  }
  /**
   * If the object is an archived object (an object whose storage class is GLACIER), the response includes this header if either the archive restoration is in progress (see RestoreObject or an archive copy is already restored.  If an archive copy is already restored, the header value indicates when Amazon S3 is scheduled to delete the object copy. For example:  x-amz-restore: ongoing-request="false", expiry-date="Fri, 23 Dec 2012 00:00:00 GMT"  If the object restoration is in progress, the header returns the value ongoing-request="true". For more information about archiving objects, see Transitioning Objects: General Considerations.
   */
  public get restore(): shapes.Restore {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.Restore'),
        outputPath: 'Restore',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.Restore', props);
    return request.getResponseField('Restore') as unknown as shapes.Restore;
  }
  /**
   * The archive state of the head object.
   */
  public get archiveStatus(): shapes.ArchiveStatus {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.ArchiveStatus'),
        outputPath: 'ArchiveStatus',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.ArchiveStatus', props);
    return request.getResponseField('ArchiveStatus') as unknown as shapes.ArchiveStatus;
  }
  /**
   * Last modified date of the object
   */
  public get lastModified(): shapes.LastModified {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.LastModified', props);
    return request.getResponseField('LastModified') as unknown as shapes.LastModified;
  }
  /**
   * Size of the body in bytes.
   */
  public get contentLength(): shapes.ContentLength {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.ContentLength'),
        outputPath: 'ContentLength',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.ContentLength', props);
    return request.getResponseField('ContentLength') as unknown as shapes.ContentLength;
  }
  /**
   * An ETag is an opaque identifier assigned by a web server to a specific version of a resource found at a URL.
   */
  public get eTag(): shapes.ETag {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.ETag'),
        outputPath: 'ETag',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.ETag', props);
    return request.getResponseField('ETag') as unknown as shapes.ETag;
  }
  /**
   * This is set to the number of metadata entries not returned in x-amz-meta headers. This can happen if you create metadata using an API like SOAP that supports more flexible metadata than the REST API. For example, using SOAP, you can create metadata whose values are not legal HTTP headers.
   */
  public get missingMeta(): shapes.MissingMeta {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.MissingMeta'),
        outputPath: 'MissingMeta',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.MissingMeta', props);
    return request.getResponseField('MissingMeta') as unknown as shapes.MissingMeta;
  }
  /**
   * Version of the object.
   */
  public get versionId(): shapes.ObjectVersionId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.VersionId', props);
    return request.getResponseField('VersionId') as unknown as shapes.ObjectVersionId;
  }
  /**
   * Specifies caching behavior along the request/reply chain.
   */
  public get cacheControl(): shapes.CacheControl {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.CacheControl'),
        outputPath: 'CacheControl',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.CacheControl', props);
    return request.getResponseField('CacheControl') as unknown as shapes.CacheControl;
  }
  /**
   * Specifies presentational information for the object.
   */
  public get contentDisposition(): shapes.ContentDisposition {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.ContentDisposition'),
        outputPath: 'ContentDisposition',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.ContentDisposition', props);
    return request.getResponseField('ContentDisposition') as unknown as shapes.ContentDisposition;
  }
  /**
   * Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.
   */
  public get contentEncoding(): shapes.ContentEncoding {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.ContentEncoding'),
        outputPath: 'ContentEncoding',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.ContentEncoding', props);
    return request.getResponseField('ContentEncoding') as unknown as shapes.ContentEncoding;
  }
  /**
   * The language the content is in.
   */
  public get contentLanguage(): shapes.ContentLanguage {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.ContentLanguage'),
        outputPath: 'ContentLanguage',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.ContentLanguage', props);
    return request.getResponseField('ContentLanguage') as unknown as shapes.ContentLanguage;
  }
  /**
   * A standard MIME type describing the format of the object data.
   */
  public get contentType(): shapes.ContentType {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.ContentType', props);
    return request.getResponseField('ContentType') as unknown as shapes.ContentType;
  }
  /**
   * The date and time at which the object is no longer cacheable.
   */
  public get expires(): shapes.Expires {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.Expires'),
        outputPath: 'Expires',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.Expires', props);
    return request.getResponseField('Expires') as unknown as shapes.Expires;
  }
  /**
   * If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.
   */
  public get websiteRedirectLocation(): shapes.WebsiteRedirectLocation {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.WebsiteRedirectLocation'),
        outputPath: 'WebsiteRedirectLocation',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.WebsiteRedirectLocation', props);
    return request.getResponseField('WebsiteRedirectLocation') as unknown as shapes.WebsiteRedirectLocation;
  }
  /**
   * If the object is stored using server-side encryption either with an AWS KMS customer master key (CMK) or an Amazon S3-managed encryption key, the response includes this header with the value of the server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
   */
  public get serverSideEncryption(): shapes.ServerSideEncryption {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.ServerSideEncryption'),
        outputPath: 'ServerSideEncryption',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.ServerSideEncryption', props);
    return request.getResponseField('ServerSideEncryption') as unknown as shapes.ServerSideEncryption;
  }
  /**
   * A map of metadata to store with the object in S3.
   */
  public get metadata(): shapes.Metadata {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.Metadata'),
        outputPath: 'Metadata',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.Metadata', props);
    return request.getResponseField('Metadata') as unknown as shapes.Metadata;
  }
  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
   */
  public get sseCustomerAlgorithm(): shapes.SSECustomerAlgorithm {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.SSECustomerAlgorithm'),
        outputPath: 'SSECustomerAlgorithm',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.SSECustomerAlgorithm', props);
    return request.getResponseField('SSECustomerAlgorithm') as unknown as shapes.SSECustomerAlgorithm;
  }
  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round-trip message integrity verification of the customer-provided encryption key.
   */
  public get sseCustomerKeyMd5(): shapes.SSECustomerKeyMD5 {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.SSECustomerKeyMD5'),
        outputPath: 'SSECustomerKeyMD5',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.SSECustomerKeyMD5', props);
    return request.getResponseField('SSECustomerKeyMD5') as unknown as shapes.SSECustomerKeyMD5;
  }
  /**
   * If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key (CMK) that was used for the object.
   */
  public get ssekmsKeyId(): shapes.SSEKMSKeyId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.SSEKMSKeyId'),
        outputPath: 'SSEKMSKeyId',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.SSEKMSKeyId', props);
    return request.getResponseField('SSEKMSKeyId') as unknown as shapes.SSEKMSKeyId;
  }
  /**
   * Provides storage class information of the object. Amazon S3 returns this header for all objects except for S3 Standard storage class objects. For more information, see Storage Classes.
   */
  public get storageClass(): shapes.StorageClass {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.StorageClass'),
        outputPath: 'StorageClass',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.StorageClass', props);
    return request.getResponseField('StorageClass') as unknown as shapes.StorageClass;
  }
  /**
   * Provides storage class information of the object. Amazon S3 returns this header for all objects except for S3 Standard storage class objects. For more information, see Storage Classes.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  /**
   * Amazon S3 can return this header if your request involves a bucket that is either a source or destination in a replication rule. In replication, you have a source bucket on which you configure replication and destination bucket where Amazon S3 stores object replicas. When you request an object (GetObject) or object metadata (HeadObject) from these buckets, Amazon S3 will return the x-amz-replication-status header in the response as follows:   If requesting an object from the source bucket — Amazon S3 will return the x-amz-replication-status header if the object in your request is eligible for replication.  For example, suppose that in your replication configuration, you specify object prefix TaxDocs requesting Amazon S3 to replicate objects with key prefix TaxDocs. Any objects you upload with this key name prefix, for example TaxDocs/document1.pdf, are eligible for replication. For any object request with this key name prefix, Amazon S3 will return the x-amz-replication-status header with value PENDING, COMPLETED or FAILED indicating object replication status.   If requesting an object from the destination bucket — Amazon S3 will return the x-amz-replication-status header with value REPLICA if the object in your request is a replica that Amazon S3 created.   For more information, see Replication.
   */
  public get replicationStatus(): shapes.ReplicationStatus {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.ReplicationStatus'),
        outputPath: 'ReplicationStatus',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.ReplicationStatus', props);
    return request.getResponseField('ReplicationStatus') as unknown as shapes.ReplicationStatus;
  }
  /**
   * The count of parts this object has.
   */
  public get partsCount(): shapes.PartsCount {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.PartsCount'),
        outputPath: 'PartsCount',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.PartsCount', props);
    return request.getResponseField('PartsCount') as unknown as shapes.PartsCount;
  }
  /**
   * The Object Lock mode, if any, that's in effect for this object. This header is only returned if the requester has the s3:GetObjectRetention permission. For more information about S3 Object Lock, see Object Lock.
   */
  public get objectLockMode(): shapes.ObjectLockMode {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.ObjectLockMode'),
        outputPath: 'ObjectLockMode',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.ObjectLockMode', props);
    return request.getResponseField('ObjectLockMode') as unknown as shapes.ObjectLockMode;
  }
  /**
   * The date and time when the Object Lock retention period expires. This header is only returned if the requester has the s3:GetObjectRetention permission.
   */
  public get objectLockRetainUntilDate(): shapes.ObjectLockRetainUntilDate {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.ObjectLockRetainUntilDate'),
        outputPath: 'ObjectLockRetainUntilDate',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.ObjectLockRetainUntilDate', props);
    return request.getResponseField('ObjectLockRetainUntilDate') as unknown as shapes.ObjectLockRetainUntilDate;
  }
  /**
   * Specifies whether a legal hold is in effect for this object. This header is only returned if the requester has the s3:GetObjectLegalHold permission. This header is not returned if the specified version of this object has never had a legal hold applied. For more information about S3 Object Lock, see Object Lock.
   */
  public get objectLockLegalHoldStatus(): shapes.ObjectLockLegalHoldStatus {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'headObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('HeadObject.ObjectLockLegalHoldStatus'),
        outputPath: 'ObjectLockLegalHoldStatus',
        parameters: {
          Bucket: this.input.bucket,
          IfMatch: this.input.ifMatch,
          IfModifiedSince: this.input.ifModifiedSince,
          IfNoneMatch: this.input.ifNoneMatch,
          IfUnmodifiedSince: this.input.ifUnmodifiedSince,
          Key: this.input.key,
          Range: this.input.range,
          VersionId: this.input.versionId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          PartNumber: this.input.partNumber,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'HeadObject.ObjectLockLegalHoldStatus', props);
    return request.getResponseField('ObjectLockLegalHoldStatus') as unknown as shapes.ObjectLockLegalHoldStatus;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.HeadObjectRequest) {
  }
}

/**
 * Response for ListBucketAnalyticsConfigurations.
 */
export class ListBucketAnalyticsConfigurationsOutput {
  /**
   * Indicates whether the returned list of analytics configurations is complete. A value of true indicates that the list is not complete and the NextContinuationToken will be provided for a subsequent request.
   */
  public get isTruncated(): shapes.IsTruncated {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listBucketAnalyticsConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListBucketAnalyticsConfigurations.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListBucketAnalyticsConfigurations.IsTruncated', props);
    return request.getResponseField('IsTruncated') as unknown as shapes.IsTruncated;
  }
  /**
   * The marker that is used as a starting point for this analytics configuration list response. This value is present if it was sent in the request.
   */
  public get continuationToken(): shapes.Token {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listBucketAnalyticsConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListBucketAnalyticsConfigurations.ContinuationToken'),
        outputPath: 'ContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListBucketAnalyticsConfigurations.ContinuationToken', props);
    return request.getResponseField('ContinuationToken') as unknown as shapes.Token;
  }
  /**
   * NextContinuationToken is sent when isTruncated is true, which indicates that there are more analytics configurations to list. The next request must include this NextContinuationToken. The token is obfuscated and is not a usable value.
   */
  public get nextContinuationToken(): shapes.NextToken {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listBucketAnalyticsConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListBucketAnalyticsConfigurations.NextContinuationToken'),
        outputPath: 'NextContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListBucketAnalyticsConfigurations.NextContinuationToken', props);
    return request.getResponseField('NextContinuationToken') as unknown as shapes.NextToken;
  }
  /**
   * The list of analytics configurations for a bucket.
   */
  public get analyticsConfigurationList(): shapes.AnalyticsConfigurationList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listBucketAnalyticsConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListBucketAnalyticsConfigurations.AnalyticsConfigurationList'),
        outputPath: 'AnalyticsConfigurationList',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListBucketAnalyticsConfigurations.AnalyticsConfigurationList', props);
    return request.getResponseField('AnalyticsConfigurationList') as unknown as shapes.AnalyticsConfigurationList;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.ListBucketAnalyticsConfigurationsRequest) {
  }
}

/**
 * Response for ListBucketIntelligentTieringConfigurations.
 */
export class ListBucketIntelligentTieringConfigurationsOutput {
  /**
   * Indicates whether the returned list of analytics configurations is complete. A value of true indicates that the list is not complete and the NextContinuationToken will be provided for a subsequent request.
   */
  public get isTruncated(): shapes.IsTruncated {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listBucketIntelligentTieringConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListBucketIntelligentTieringConfigurations.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListBucketIntelligentTieringConfigurations.IsTruncated', props);
    return request.getResponseField('IsTruncated') as unknown as shapes.IsTruncated;
  }
  /**
   * The ContinuationToken that represents a placeholder from where this request should begin.
   */
  public get continuationToken(): shapes.Token {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listBucketIntelligentTieringConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListBucketIntelligentTieringConfigurations.ContinuationToken'),
        outputPath: 'ContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListBucketIntelligentTieringConfigurations.ContinuationToken', props);
    return request.getResponseField('ContinuationToken') as unknown as shapes.Token;
  }
  /**
   * The marker used to continue this inventory configuration listing. Use the NextContinuationToken from this response to continue the listing in a subsequent request. The continuation token is an opaque value that Amazon S3 understands.
   */
  public get nextContinuationToken(): shapes.NextToken {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listBucketIntelligentTieringConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListBucketIntelligentTieringConfigurations.NextContinuationToken'),
        outputPath: 'NextContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListBucketIntelligentTieringConfigurations.NextContinuationToken', props);
    return request.getResponseField('NextContinuationToken') as unknown as shapes.NextToken;
  }
  /**
   * The list of S3 Intelligent-Tiering configurations for a bucket.
   */
  public get intelligentTieringConfigurationList(): shapes.IntelligentTieringConfigurationList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listBucketIntelligentTieringConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListBucketIntelligentTieringConfigurations.IntelligentTieringConfigurationList'),
        outputPath: 'IntelligentTieringConfigurationList',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListBucketIntelligentTieringConfigurations.IntelligentTieringConfigurationList', props);
    return request.getResponseField('IntelligentTieringConfigurationList') as unknown as shapes.IntelligentTieringConfigurationList;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.ListBucketIntelligentTieringConfigurationsRequest) {
  }
}

/**
 * Response for ListBucketInventoryConfigurations.
 */
export class ListBucketInventoryConfigurationsOutput {
  /**
   * If sent in the request, the marker that is used as a starting point for this inventory configuration list response.
   */
  public get continuationToken(): shapes.Token {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listBucketInventoryConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListBucketInventoryConfigurations.ContinuationToken'),
        outputPath: 'ContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListBucketInventoryConfigurations.ContinuationToken', props);
    return request.getResponseField('ContinuationToken') as unknown as shapes.Token;
  }
  /**
   * The list of inventory configurations for a bucket.
   */
  public get inventoryConfigurationList(): shapes.InventoryConfigurationList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listBucketInventoryConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListBucketInventoryConfigurations.InventoryConfigurationList'),
        outputPath: 'InventoryConfigurationList',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListBucketInventoryConfigurations.InventoryConfigurationList', props);
    return request.getResponseField('InventoryConfigurationList') as unknown as shapes.InventoryConfigurationList;
  }
  /**
   * Tells whether the returned list of inventory configurations is complete. A value of true indicates that the list is not complete and the NextContinuationToken is provided for a subsequent request.
   */
  public get isTruncated(): shapes.IsTruncated {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listBucketInventoryConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListBucketInventoryConfigurations.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListBucketInventoryConfigurations.IsTruncated', props);
    return request.getResponseField('IsTruncated') as unknown as shapes.IsTruncated;
  }
  /**
   * The marker used to continue this inventory configuration listing. Use the NextContinuationToken from this response to continue the listing in a subsequent request. The continuation token is an opaque value that Amazon S3 understands.
   */
  public get nextContinuationToken(): shapes.NextToken {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listBucketInventoryConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListBucketInventoryConfigurations.NextContinuationToken'),
        outputPath: 'NextContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListBucketInventoryConfigurations.NextContinuationToken', props);
    return request.getResponseField('NextContinuationToken') as unknown as shapes.NextToken;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.ListBucketInventoryConfigurationsRequest) {
  }
}

/**
 * Response for ListBucketMetricsConfigurations.
 */
export class ListBucketMetricsConfigurationsOutput {
  /**
   * Indicates whether the returned list of metrics configurations is complete. A value of true indicates that the list is not complete and the NextContinuationToken will be provided for a subsequent request.
   */
  public get isTruncated(): shapes.IsTruncated {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listBucketMetricsConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListBucketMetricsConfigurations.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListBucketMetricsConfigurations.IsTruncated', props);
    return request.getResponseField('IsTruncated') as unknown as shapes.IsTruncated;
  }
  /**
   * The marker that is used as a starting point for this metrics configuration list response. This value is present if it was sent in the request.
   */
  public get continuationToken(): shapes.Token {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listBucketMetricsConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListBucketMetricsConfigurations.ContinuationToken'),
        outputPath: 'ContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListBucketMetricsConfigurations.ContinuationToken', props);
    return request.getResponseField('ContinuationToken') as unknown as shapes.Token;
  }
  /**
   * The marker used to continue a metrics configuration listing that has been truncated. Use the NextContinuationToken from a previously truncated list response to continue the listing. The continuation token is an opaque value that Amazon S3 understands.
   */
  public get nextContinuationToken(): shapes.NextToken {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listBucketMetricsConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListBucketMetricsConfigurations.NextContinuationToken'),
        outputPath: 'NextContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListBucketMetricsConfigurations.NextContinuationToken', props);
    return request.getResponseField('NextContinuationToken') as unknown as shapes.NextToken;
  }
  /**
   * The list of metrics configurations for a bucket.
   */
  public get metricsConfigurationList(): shapes.MetricsConfigurationList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listBucketMetricsConfigurations',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListBucketMetricsConfigurations.MetricsConfigurationList'),
        outputPath: 'MetricsConfigurationList',
        parameters: {
          Bucket: this.input.bucket,
          ContinuationToken: this.input.continuationToken,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListBucketMetricsConfigurations.MetricsConfigurationList', props);
    return request.getResponseField('MetricsConfigurationList') as unknown as shapes.MetricsConfigurationList;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.ListBucketMetricsConfigurationsRequest) {
  }
}

/**
 * Response for ListBuckets.
 */
export class ListBucketsOutput {
  /**
   * The list of buckets owned by the requestor.
   */
  public get buckets(): shapes.Buckets {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listBuckets',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListBuckets.Buckets'),
        outputPath: 'Buckets',
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListBuckets.Buckets', props);
    return request.getResponseField('Buckets') as unknown as shapes.Buckets;
  }
  /**
   * Response for ListBucketsOutput.Owner
   */
  static OwnerResponse = class {
    /**
     * Container for the display name of the owner.
     */
    public get displayName(): shapes.DisplayName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'listBuckets',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('ListBuckets.Owner.DisplayName'),
          outputPath: 'Owner.DisplayName',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'ListBuckets.Owner.DisplayName', props);
      return request.getResponseField('Owner.DisplayName') as unknown as shapes.DisplayName;
    }
    /**
     * Container for the ID of the owner.
     */
    public get id(): shapes.ID {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'listBuckets',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('ListBuckets.Owner.ID'),
          outputPath: 'Owner.ID',
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'ListBuckets.Owner.ID', props);
      return request.getResponseField('Owner.ID') as unknown as shapes.ID;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[]) {
    }
  }
  public get owner(): InstanceType<typeof ListBucketsOutput.OwnerResponse> {
    return new ListBucketsOutput.OwnerResponse(this.scope, this.resources, this.input);
  }

  constructor(public scope: cdk.Construct, public readonly resources: string[]) {
  }
}

/**
 * Response for ListMultipartUploads.
 */
export class ListMultipartUploadsOutput {
  /**
   * The name of the bucket to which the multipart upload was initiated.
   */
  public get bucket(): shapes.BucketName {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListMultipartUploads.Bucket'),
        outputPath: 'Bucket',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxUploads: this.input.maxUploads,
          Prefix: this.input.prefix,
          UploadIdMarker: this.input.uploadIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListMultipartUploads.Bucket', props);
    return request.getResponseField('Bucket') as unknown as shapes.BucketName;
  }
  /**
   * The key at or after which the listing began.
   */
  public get keyMarker(): shapes.KeyMarker {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListMultipartUploads.KeyMarker'),
        outputPath: 'KeyMarker',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxUploads: this.input.maxUploads,
          Prefix: this.input.prefix,
          UploadIdMarker: this.input.uploadIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListMultipartUploads.KeyMarker', props);
    return request.getResponseField('KeyMarker') as unknown as shapes.KeyMarker;
  }
  /**
   * Upload ID after which listing began.
   */
  public get uploadIdMarker(): shapes.UploadIdMarker {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListMultipartUploads.UploadIdMarker'),
        outputPath: 'UploadIdMarker',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxUploads: this.input.maxUploads,
          Prefix: this.input.prefix,
          UploadIdMarker: this.input.uploadIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListMultipartUploads.UploadIdMarker', props);
    return request.getResponseField('UploadIdMarker') as unknown as shapes.UploadIdMarker;
  }
  /**
   * When a list is truncated, this element specifies the value that should be used for the key-marker request parameter in a subsequent request.
   */
  public get nextKeyMarker(): shapes.NextKeyMarker {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListMultipartUploads.NextKeyMarker'),
        outputPath: 'NextKeyMarker',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxUploads: this.input.maxUploads,
          Prefix: this.input.prefix,
          UploadIdMarker: this.input.uploadIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListMultipartUploads.NextKeyMarker', props);
    return request.getResponseField('NextKeyMarker') as unknown as shapes.NextKeyMarker;
  }
  /**
   * When a prefix is provided in the request, this field contains the specified prefix. The result contains only keys starting with the specified prefix.
   */
  public get prefix(): shapes.Prefix {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListMultipartUploads.Prefix'),
        outputPath: 'Prefix',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxUploads: this.input.maxUploads,
          Prefix: this.input.prefix,
          UploadIdMarker: this.input.uploadIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListMultipartUploads.Prefix', props);
    return request.getResponseField('Prefix') as unknown as shapes.Prefix;
  }
  /**
   * Contains the delimiter you specified in the request. If you don't specify a delimiter in your request, this element is absent from the response.
   */
  public get delimiter(): shapes.Delimiter {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListMultipartUploads.Delimiter'),
        outputPath: 'Delimiter',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxUploads: this.input.maxUploads,
          Prefix: this.input.prefix,
          UploadIdMarker: this.input.uploadIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListMultipartUploads.Delimiter', props);
    return request.getResponseField('Delimiter') as unknown as shapes.Delimiter;
  }
  /**
   * When a list is truncated, this element specifies the value that should be used for the upload-id-marker request parameter in a subsequent request.
   */
  public get nextUploadIdMarker(): shapes.NextUploadIdMarker {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListMultipartUploads.NextUploadIdMarker'),
        outputPath: 'NextUploadIdMarker',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxUploads: this.input.maxUploads,
          Prefix: this.input.prefix,
          UploadIdMarker: this.input.uploadIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListMultipartUploads.NextUploadIdMarker', props);
    return request.getResponseField('NextUploadIdMarker') as unknown as shapes.NextUploadIdMarker;
  }
  /**
   * Maximum number of multipart uploads that could have been included in the response.
   */
  public get maxUploads(): shapes.MaxUploads {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListMultipartUploads.MaxUploads'),
        outputPath: 'MaxUploads',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxUploads: this.input.maxUploads,
          Prefix: this.input.prefix,
          UploadIdMarker: this.input.uploadIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListMultipartUploads.MaxUploads', props);
    return request.getResponseField('MaxUploads') as unknown as shapes.MaxUploads;
  }
  /**
   * Indicates whether the returned list of multipart uploads is truncated. A value of true indicates that the list was truncated. The list can be truncated if the number of multipart uploads exceeds the limit allowed or specified by max uploads.
   */
  public get isTruncated(): shapes.IsTruncated {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListMultipartUploads.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxUploads: this.input.maxUploads,
          Prefix: this.input.prefix,
          UploadIdMarker: this.input.uploadIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListMultipartUploads.IsTruncated', props);
    return request.getResponseField('IsTruncated') as unknown as shapes.IsTruncated;
  }
  /**
   * Container for elements related to a particular multipart upload. A response can contain zero or more Upload elements.
   */
  public get uploads(): shapes.MultipartUploadList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListMultipartUploads.Uploads'),
        outputPath: 'Uploads',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxUploads: this.input.maxUploads,
          Prefix: this.input.prefix,
          UploadIdMarker: this.input.uploadIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListMultipartUploads.Uploads', props);
    return request.getResponseField('Uploads') as unknown as shapes.MultipartUploadList;
  }
  /**
   * If you specify a delimiter in the request, then the result returns each distinct key prefix containing the delimiter in a CommonPrefixes element. The distinct key prefixes are returned in the Prefix child element.
   */
  public get commonPrefixes(): shapes.CommonPrefixList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListMultipartUploads.CommonPrefixes'),
        outputPath: 'CommonPrefixes',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxUploads: this.input.maxUploads,
          Prefix: this.input.prefix,
          UploadIdMarker: this.input.uploadIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListMultipartUploads.CommonPrefixes', props);
    return request.getResponseField('CommonPrefixes') as unknown as shapes.CommonPrefixList;
  }
  /**
   * Encoding type used by Amazon S3 to encode object keys in the response. If you specify encoding-type request parameter, Amazon S3 includes this element in the response, and returns encoded key name values in the following response elements:  Delimiter, KeyMarker, Prefix, NextKeyMarker, Key.
   */
  public get encodingType(): shapes.EncodingType {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListMultipartUploads.EncodingType'),
        outputPath: 'EncodingType',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxUploads: this.input.maxUploads,
          Prefix: this.input.prefix,
          UploadIdMarker: this.input.uploadIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListMultipartUploads.EncodingType', props);
    return request.getResponseField('EncodingType') as unknown as shapes.EncodingType;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.ListMultipartUploadsRequest) {
  }
}

/**
 * Response for ListObjectVersions.
 */
export class ListObjectVersionsOutput {
  /**
   * A flag that indicates whether Amazon S3 returned all of the results that satisfied the search criteria. If your results were truncated, you can make a follow-up paginated request using the NextKeyMarker and NextVersionIdMarker response parameters as a starting place in another request to return the rest of the results.
   */
  public get isTruncated(): shapes.IsTruncated {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectVersions.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          VersionIdMarker: this.input.versionIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectVersions.IsTruncated', props);
    return request.getResponseField('IsTruncated') as unknown as shapes.IsTruncated;
  }
  /**
   * Marks the last key returned in a truncated response.
   */
  public get keyMarker(): shapes.KeyMarker {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectVersions.KeyMarker'),
        outputPath: 'KeyMarker',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          VersionIdMarker: this.input.versionIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectVersions.KeyMarker', props);
    return request.getResponseField('KeyMarker') as unknown as shapes.KeyMarker;
  }
  /**
   * Marks the last version of the key returned in a truncated response.
   */
  public get versionIdMarker(): shapes.VersionIdMarker {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectVersions.VersionIdMarker'),
        outputPath: 'VersionIdMarker',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          VersionIdMarker: this.input.versionIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectVersions.VersionIdMarker', props);
    return request.getResponseField('VersionIdMarker') as unknown as shapes.VersionIdMarker;
  }
  /**
   * When the number of responses exceeds the value of MaxKeys, NextKeyMarker specifies the first key not returned that satisfies the search criteria. Use this value for the key-marker request parameter in a subsequent request.
   */
  public get nextKeyMarker(): shapes.NextKeyMarker {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectVersions.NextKeyMarker'),
        outputPath: 'NextKeyMarker',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          VersionIdMarker: this.input.versionIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectVersions.NextKeyMarker', props);
    return request.getResponseField('NextKeyMarker') as unknown as shapes.NextKeyMarker;
  }
  /**
   * When the number of responses exceeds the value of MaxKeys, NextVersionIdMarker specifies the first object version not returned that satisfies the search criteria. Use this value for the version-id-marker request parameter in a subsequent request.
   */
  public get nextVersionIdMarker(): shapes.NextVersionIdMarker {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectVersions.NextVersionIdMarker'),
        outputPath: 'NextVersionIdMarker',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          VersionIdMarker: this.input.versionIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectVersions.NextVersionIdMarker', props);
    return request.getResponseField('NextVersionIdMarker') as unknown as shapes.NextVersionIdMarker;
  }
  /**
   * Container for version information.
   */
  public get versions(): shapes.ObjectVersionList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectVersions.Versions'),
        outputPath: 'Versions',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          VersionIdMarker: this.input.versionIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectVersions.Versions', props);
    return request.getResponseField('Versions') as unknown as shapes.ObjectVersionList;
  }
  /**
   * Container for an object that is a delete marker.
   */
  public get deleteMarkers(): shapes.DeleteMarkers {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectVersions.DeleteMarkers'),
        outputPath: 'DeleteMarkers',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          VersionIdMarker: this.input.versionIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectVersions.DeleteMarkers', props);
    return request.getResponseField('DeleteMarkers') as unknown as shapes.DeleteMarkers;
  }
  /**
   * The bucket name.
   */
  public get name(): shapes.BucketName {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectVersions.Name'),
        outputPath: 'Name',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          VersionIdMarker: this.input.versionIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectVersions.Name', props);
    return request.getResponseField('Name') as unknown as shapes.BucketName;
  }
  /**
   * Selects objects that start with the value supplied by this parameter.
   */
  public get prefix(): shapes.Prefix {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectVersions.Prefix'),
        outputPath: 'Prefix',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          VersionIdMarker: this.input.versionIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectVersions.Prefix', props);
    return request.getResponseField('Prefix') as unknown as shapes.Prefix;
  }
  /**
   * The delimiter grouping the included keys. A delimiter is a character that you specify to group keys. All keys that contain the same string between the prefix and the first occurrence of the delimiter are grouped under a single result element in CommonPrefixes. These groups are counted as one result against the max-keys limitation. These keys are not returned elsewhere in the response.
   */
  public get delimiter(): shapes.Delimiter {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectVersions.Delimiter'),
        outputPath: 'Delimiter',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          VersionIdMarker: this.input.versionIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectVersions.Delimiter', props);
    return request.getResponseField('Delimiter') as unknown as shapes.Delimiter;
  }
  /**
   * Specifies the maximum number of objects to return.
   */
  public get maxKeys(): shapes.MaxKeys {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectVersions.MaxKeys'),
        outputPath: 'MaxKeys',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          VersionIdMarker: this.input.versionIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectVersions.MaxKeys', props);
    return request.getResponseField('MaxKeys') as unknown as shapes.MaxKeys;
  }
  /**
   * All of the keys rolled up into a common prefix count as a single return when calculating the number of returns.
   */
  public get commonPrefixes(): shapes.CommonPrefixList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectVersions.CommonPrefixes'),
        outputPath: 'CommonPrefixes',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          VersionIdMarker: this.input.versionIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectVersions.CommonPrefixes', props);
    return request.getResponseField('CommonPrefixes') as unknown as shapes.CommonPrefixList;
  }
  /**
   * Encoding type used by Amazon S3 to encode object key names in the XML response. If you specify encoding-type request parameter, Amazon S3 includes this element in the response, and returns encoded key name values in the following response elements:  KeyMarker, NextKeyMarker, Prefix, Key, and Delimiter.
   */
  public get encodingType(): shapes.EncodingType {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectVersions',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectVersions.EncodingType'),
        outputPath: 'EncodingType',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          KeyMarker: this.input.keyMarker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          VersionIdMarker: this.input.versionIdMarker,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectVersions.EncodingType', props);
    return request.getResponseField('EncodingType') as unknown as shapes.EncodingType;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.ListObjectVersionsRequest) {
  }
}

/**
 * Response for ListObjects.
 */
export class ListObjectsOutput {
  /**
   * A flag that indicates whether Amazon S3 returned all of the results that satisfied the search criteria.
   */
  public get isTruncated(): shapes.IsTruncated {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjects.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          Marker: this.input.marker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjects.IsTruncated', props);
    return request.getResponseField('IsTruncated') as unknown as shapes.IsTruncated;
  }
  /**
   * Indicates where in the bucket listing begins. Marker is included in the response if it was sent with the request.
   */
  public get marker(): shapes.Marker {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjects.Marker'),
        outputPath: 'Marker',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          Marker: this.input.marker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjects.Marker', props);
    return request.getResponseField('Marker') as unknown as shapes.Marker;
  }
  /**
   * When response is truncated (the IsTruncated element value in the response is true), you can use the key name in this field as marker in the subsequent request to get next set of objects. Amazon S3 lists objects in alphabetical order Note: This element is returned only if you have delimiter request parameter specified. If response does not include the NextMarker and it is truncated, you can use the value of the last Key in the response as the marker in the subsequent request to get the next set of object keys.
   */
  public get nextMarker(): shapes.NextMarker {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjects.NextMarker'),
        outputPath: 'NextMarker',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          Marker: this.input.marker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjects.NextMarker', props);
    return request.getResponseField('NextMarker') as unknown as shapes.NextMarker;
  }
  /**
   * Metadata about each object returned.
   */
  public get contents(): shapes.ObjectList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjects.Contents'),
        outputPath: 'Contents',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          Marker: this.input.marker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjects.Contents', props);
    return request.getResponseField('Contents') as unknown as shapes.ObjectList;
  }
  /**
   * The bucket name.
   */
  public get name(): shapes.BucketName {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjects.Name'),
        outputPath: 'Name',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          Marker: this.input.marker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjects.Name', props);
    return request.getResponseField('Name') as unknown as shapes.BucketName;
  }
  /**
   * Keys that begin with the indicated prefix.
   */
  public get prefix(): shapes.Prefix {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjects.Prefix'),
        outputPath: 'Prefix',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          Marker: this.input.marker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjects.Prefix', props);
    return request.getResponseField('Prefix') as unknown as shapes.Prefix;
  }
  /**
   * Causes keys that contain the same string between the prefix and the first occurrence of the delimiter to be rolled up into a single result element in the CommonPrefixes collection. These rolled-up keys are not returned elsewhere in the response. Each rolled-up result counts as only one return against the MaxKeys value.
   */
  public get delimiter(): shapes.Delimiter {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjects.Delimiter'),
        outputPath: 'Delimiter',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          Marker: this.input.marker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjects.Delimiter', props);
    return request.getResponseField('Delimiter') as unknown as shapes.Delimiter;
  }
  /**
   * The maximum number of keys returned in the response body.
   */
  public get maxKeys(): shapes.MaxKeys {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjects.MaxKeys'),
        outputPath: 'MaxKeys',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          Marker: this.input.marker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjects.MaxKeys', props);
    return request.getResponseField('MaxKeys') as unknown as shapes.MaxKeys;
  }
  /**
   * All of the keys rolled up in a common prefix count as a single return when calculating the number of returns.  A response can contain CommonPrefixes only if you specify a delimiter. CommonPrefixes contains all (if there are any) keys between Prefix and the next occurrence of the string specified by the delimiter.  CommonPrefixes lists keys that act like subdirectories in the directory specified by Prefix. For example, if the prefix is notes/ and the delimiter is a slash (/) as in notes/summer/july, the common prefix is notes/summer/. All of the keys that roll up into a common prefix count as a single return when calculating the number of returns.
   */
  public get commonPrefixes(): shapes.CommonPrefixList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjects.CommonPrefixes'),
        outputPath: 'CommonPrefixes',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          Marker: this.input.marker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjects.CommonPrefixes', props);
    return request.getResponseField('CommonPrefixes') as unknown as shapes.CommonPrefixList;
  }
  /**
   * Encoding type used by Amazon S3 to encode object keys in the response.
   */
  public get encodingType(): shapes.EncodingType {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjects',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjects.EncodingType'),
        outputPath: 'EncodingType',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          Marker: this.input.marker,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjects.EncodingType', props);
    return request.getResponseField('EncodingType') as unknown as shapes.EncodingType;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.ListObjectsRequest) {
  }
}

/**
 * Response for ListObjectsV2.
 */
export class ListObjectsV2Output {
  /**
   * Set to false if all of the results were returned. Set to true if more keys are available to return. If the number of results exceeds that specified by MaxKeys, all of the results might not be returned.
   */
  public get isTruncated(): shapes.IsTruncated {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectsV2.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          ContinuationToken: this.input.continuationToken,
          FetchOwner: this.input.fetchOwner,
          StartAfter: this.input.startAfter,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectsV2.IsTruncated', props);
    return request.getResponseField('IsTruncated') as unknown as shapes.IsTruncated;
  }
  /**
   * Metadata about each object returned.
   */
  public get contents(): shapes.ObjectList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectsV2.Contents'),
        outputPath: 'Contents',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          ContinuationToken: this.input.continuationToken,
          FetchOwner: this.input.fetchOwner,
          StartAfter: this.input.startAfter,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectsV2.Contents', props);
    return request.getResponseField('Contents') as unknown as shapes.ObjectList;
  }
  /**
   * The bucket name. When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using Access Points in the Amazon Simple Storage Service Developer Guide. When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see Using S3 on Outposts in the Amazon Simple Storage Service Developer Guide.
   */
  public get name(): shapes.BucketName {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectsV2.Name'),
        outputPath: 'Name',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          ContinuationToken: this.input.continuationToken,
          FetchOwner: this.input.fetchOwner,
          StartAfter: this.input.startAfter,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectsV2.Name', props);
    return request.getResponseField('Name') as unknown as shapes.BucketName;
  }
  /**
   * Keys that begin with the indicated prefix.
   */
  public get prefix(): shapes.Prefix {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectsV2.Prefix'),
        outputPath: 'Prefix',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          ContinuationToken: this.input.continuationToken,
          FetchOwner: this.input.fetchOwner,
          StartAfter: this.input.startAfter,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectsV2.Prefix', props);
    return request.getResponseField('Prefix') as unknown as shapes.Prefix;
  }
  /**
   * Causes keys that contain the same string between the prefix and the first occurrence of the delimiter to be rolled up into a single result element in the CommonPrefixes collection. These rolled-up keys are not returned elsewhere in the response. Each rolled-up result counts as only one return against the MaxKeys value.
   */
  public get delimiter(): shapes.Delimiter {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectsV2.Delimiter'),
        outputPath: 'Delimiter',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          ContinuationToken: this.input.continuationToken,
          FetchOwner: this.input.fetchOwner,
          StartAfter: this.input.startAfter,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectsV2.Delimiter', props);
    return request.getResponseField('Delimiter') as unknown as shapes.Delimiter;
  }
  /**
   * Sets the maximum number of keys returned in the response. By default the API returns up to 1,000 key names. The response might contain fewer keys but will never contain more.
   */
  public get maxKeys(): shapes.MaxKeys {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectsV2.MaxKeys'),
        outputPath: 'MaxKeys',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          ContinuationToken: this.input.continuationToken,
          FetchOwner: this.input.fetchOwner,
          StartAfter: this.input.startAfter,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectsV2.MaxKeys', props);
    return request.getResponseField('MaxKeys') as unknown as shapes.MaxKeys;
  }
  /**
   * All of the keys rolled up into a common prefix count as a single return when calculating the number of returns. A response can contain CommonPrefixes only if you specify a delimiter.  CommonPrefixes contains all (if there are any) keys between Prefix and the next occurrence of the string specified by a delimiter.  CommonPrefixes lists keys that act like subdirectories in the directory specified by Prefix. For example, if the prefix is notes/ and the delimiter is a slash (/) as in notes/summer/july, the common prefix is notes/summer/. All of the keys that roll up into a common prefix count as a single return when calculating the number of returns.
   */
  public get commonPrefixes(): shapes.CommonPrefixList {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectsV2.CommonPrefixes'),
        outputPath: 'CommonPrefixes',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          ContinuationToken: this.input.continuationToken,
          FetchOwner: this.input.fetchOwner,
          StartAfter: this.input.startAfter,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectsV2.CommonPrefixes', props);
    return request.getResponseField('CommonPrefixes') as unknown as shapes.CommonPrefixList;
  }
  /**
   * Encoding type used by Amazon S3 to encode object key names in the XML response. If you specify the encoding-type request parameter, Amazon S3 includes this element in the response, and returns encoded key name values in the following response elements:  Delimiter, Prefix, Key, and StartAfter.
   */
  public get encodingType(): shapes.EncodingType {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectsV2.EncodingType'),
        outputPath: 'EncodingType',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          ContinuationToken: this.input.continuationToken,
          FetchOwner: this.input.fetchOwner,
          StartAfter: this.input.startAfter,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectsV2.EncodingType', props);
    return request.getResponseField('EncodingType') as unknown as shapes.EncodingType;
  }
  /**
   * KeyCount is the number of keys returned with this request. KeyCount will always be less than equals to MaxKeys field. Say you ask for 50 keys, your result will include less than equals 50 keys
   */
  public get keyCount(): shapes.KeyCount {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectsV2.KeyCount'),
        outputPath: 'KeyCount',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          ContinuationToken: this.input.continuationToken,
          FetchOwner: this.input.fetchOwner,
          StartAfter: this.input.startAfter,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectsV2.KeyCount', props);
    return request.getResponseField('KeyCount') as unknown as shapes.KeyCount;
  }
  /**
   * If ContinuationToken was sent with the request, it is included in the response.
   */
  public get continuationToken(): shapes.Token {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectsV2.ContinuationToken'),
        outputPath: 'ContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          ContinuationToken: this.input.continuationToken,
          FetchOwner: this.input.fetchOwner,
          StartAfter: this.input.startAfter,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectsV2.ContinuationToken', props);
    return request.getResponseField('ContinuationToken') as unknown as shapes.Token;
  }
  /**
   * NextContinuationToken is sent when isTruncated is true, which means there are more keys in the bucket that can be listed. The next list requests to Amazon S3 can be continued with this NextContinuationToken. NextContinuationToken is obfuscated and is not a real key
   */
  public get nextContinuationToken(): shapes.NextToken {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectsV2.NextContinuationToken'),
        outputPath: 'NextContinuationToken',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          ContinuationToken: this.input.continuationToken,
          FetchOwner: this.input.fetchOwner,
          StartAfter: this.input.startAfter,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectsV2.NextContinuationToken', props);
    return request.getResponseField('NextContinuationToken') as unknown as shapes.NextToken;
  }
  /**
   * If StartAfter was sent with the request, it is included in the response.
   */
  public get startAfter(): shapes.StartAfter {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listObjectsV2',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListObjectsV2.StartAfter'),
        outputPath: 'StartAfter',
        parameters: {
          Bucket: this.input.bucket,
          Delimiter: this.input.delimiter,
          EncodingType: this.input.encodingType,
          MaxKeys: this.input.maxKeys,
          Prefix: this.input.prefix,
          ContinuationToken: this.input.continuationToken,
          FetchOwner: this.input.fetchOwner,
          StartAfter: this.input.startAfter,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListObjectsV2.StartAfter', props);
    return request.getResponseField('StartAfter') as unknown as shapes.StartAfter;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.ListObjectsV2Request) {
  }
}

/**
 * Response for ListParts.
 */
export class ListPartsOutput {
  /**
   * If the bucket has a lifecycle rule configured with an action to abort incomplete multipart uploads and the prefix in the lifecycle rule matches the object name in the request, then the response includes this header indicating when the initiated multipart upload will become eligible for abort operation. For more information, see Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy. The response will also include the x-amz-abort-rule-id header that will provide the ID of the lifecycle configuration rule that defines this action.
   */
  public get abortDate(): shapes.AbortDate {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListParts.AbortDate'),
        outputPath: 'AbortDate',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MaxParts: this.input.maxParts,
          PartNumberMarker: this.input.partNumberMarker,
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListParts.AbortDate', props);
    return request.getResponseField('AbortDate') as unknown as shapes.AbortDate;
  }
  /**
   * This header is returned along with the x-amz-abort-date header. It identifies applicable lifecycle configuration rule that defines the action to abort incomplete multipart uploads.
   */
  public get abortRuleId(): shapes.AbortRuleId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListParts.AbortRuleId'),
        outputPath: 'AbortRuleId',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MaxParts: this.input.maxParts,
          PartNumberMarker: this.input.partNumberMarker,
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListParts.AbortRuleId', props);
    return request.getResponseField('AbortRuleId') as unknown as shapes.AbortRuleId;
  }
  /**
   * The name of the bucket to which the multipart upload was initiated.
   */
  public get bucket(): shapes.BucketName {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListParts.Bucket'),
        outputPath: 'Bucket',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MaxParts: this.input.maxParts,
          PartNumberMarker: this.input.partNumberMarker,
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListParts.Bucket', props);
    return request.getResponseField('Bucket') as unknown as shapes.BucketName;
  }
  /**
   * Object key for which the multipart upload was initiated.
   */
  public get key(): shapes.ObjectKey {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListParts.Key'),
        outputPath: 'Key',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MaxParts: this.input.maxParts,
          PartNumberMarker: this.input.partNumberMarker,
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListParts.Key', props);
    return request.getResponseField('Key') as unknown as shapes.ObjectKey;
  }
  /**
   * Upload ID identifying the multipart upload whose parts are being listed.
   */
  public get uploadId(): shapes.MultipartUploadId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListParts.UploadId'),
        outputPath: 'UploadId',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MaxParts: this.input.maxParts,
          PartNumberMarker: this.input.partNumberMarker,
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListParts.UploadId', props);
    return request.getResponseField('UploadId') as unknown as shapes.MultipartUploadId;
  }
  /**
   * When a list is truncated, this element specifies the last part in the list, as well as the value to use for the part-number-marker request parameter in a subsequent request.
   */
  public get partNumberMarker(): shapes.PartNumberMarker {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListParts.PartNumberMarker'),
        outputPath: 'PartNumberMarker',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MaxParts: this.input.maxParts,
          PartNumberMarker: this.input.partNumberMarker,
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListParts.PartNumberMarker', props);
    return request.getResponseField('PartNumberMarker') as unknown as shapes.PartNumberMarker;
  }
  /**
   * When a list is truncated, this element specifies the last part in the list, as well as the value to use for the part-number-marker request parameter in a subsequent request.
   */
  public get nextPartNumberMarker(): shapes.NextPartNumberMarker {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListParts.NextPartNumberMarker'),
        outputPath: 'NextPartNumberMarker',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MaxParts: this.input.maxParts,
          PartNumberMarker: this.input.partNumberMarker,
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListParts.NextPartNumberMarker', props);
    return request.getResponseField('NextPartNumberMarker') as unknown as shapes.NextPartNumberMarker;
  }
  /**
   * Maximum number of parts that were allowed in the response.
   */
  public get maxParts(): shapes.MaxParts {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListParts.MaxParts'),
        outputPath: 'MaxParts',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MaxParts: this.input.maxParts,
          PartNumberMarker: this.input.partNumberMarker,
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListParts.MaxParts', props);
    return request.getResponseField('MaxParts') as unknown as shapes.MaxParts;
  }
  /**
   * Indicates whether the returned list of parts is truncated. A true value indicates that the list was truncated. A list can be truncated if the number of parts exceeds the limit returned in the MaxParts element.
   */
  public get isTruncated(): shapes.IsTruncated {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListParts.IsTruncated'),
        outputPath: 'IsTruncated',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MaxParts: this.input.maxParts,
          PartNumberMarker: this.input.partNumberMarker,
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListParts.IsTruncated', props);
    return request.getResponseField('IsTruncated') as unknown as shapes.IsTruncated;
  }
  /**
   * Container for elements related to a particular part. A response can contain zero or more Part elements.
   */
  public get parts(): shapes.Parts {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListParts.Parts'),
        outputPath: 'Parts',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MaxParts: this.input.maxParts,
          PartNumberMarker: this.input.partNumberMarker,
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListParts.Parts', props);
    return request.getResponseField('Parts') as unknown as shapes.Parts;
  }
  /**
   * Response for ListPartsOutput.Initiator
   */
  static InitiatorResponse = class {
    /**
     * If the principal is an AWS account, it provides the Canonical User ID. If the principal is an IAM User, it provides a user ARN value.
     */
    public get id(): shapes.ID {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'listParts',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('ListParts.Initiator.ID'),
          outputPath: 'Initiator.ID',
          parameters: {
            Bucket: this.input.bucket,
            Key: this.input.key,
            MaxParts: this.input.maxParts,
            PartNumberMarker: this.input.partNumberMarker,
            UploadId: this.input.uploadId,
            RequestPayer: this.input.requestPayer,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'ListParts.Initiator.ID', props);
      return request.getResponseField('Initiator.ID') as unknown as shapes.ID;
    }
    /**
     * Name of the Principal.
     */
    public get displayName(): shapes.DisplayName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'listParts',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('ListParts.Initiator.DisplayName'),
          outputPath: 'Initiator.DisplayName',
          parameters: {
            Bucket: this.input.bucket,
            Key: this.input.key,
            MaxParts: this.input.maxParts,
            PartNumberMarker: this.input.partNumberMarker,
            UploadId: this.input.uploadId,
            RequestPayer: this.input.requestPayer,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'ListParts.Initiator.DisplayName', props);
      return request.getResponseField('Initiator.DisplayName') as unknown as shapes.DisplayName;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.ListPartsRequest) {
    }
  }
  public get initiator(): InstanceType<typeof ListPartsOutput.InitiatorResponse> {
    return new ListPartsOutput.InitiatorResponse(this.scope, this.resources, this.input);
  }

  /**
   * Response for ListPartsOutput.Owner
   */
  static OwnerResponse = class {
    /**
     * Container for the display name of the owner.
     */
    public get displayName(): shapes.DisplayName {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'listParts',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('ListParts.Owner.DisplayName'),
          outputPath: 'Owner.DisplayName',
          parameters: {
            Bucket: this.input.bucket,
            Key: this.input.key,
            MaxParts: this.input.maxParts,
            PartNumberMarker: this.input.partNumberMarker,
            UploadId: this.input.uploadId,
            RequestPayer: this.input.requestPayer,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'ListParts.Owner.DisplayName', props);
      return request.getResponseField('Owner.DisplayName') as unknown as shapes.DisplayName;
    }
    /**
     * Container for the ID of the owner.
     */
    public get id(): shapes.ID {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'listParts',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('ListParts.Owner.ID'),
          outputPath: 'Owner.ID',
          parameters: {
            Bucket: this.input.bucket,
            Key: this.input.key,
            MaxParts: this.input.maxParts,
            PartNumberMarker: this.input.partNumberMarker,
            UploadId: this.input.uploadId,
            RequestPayer: this.input.requestPayer,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'ListParts.Owner.ID', props);
      return request.getResponseField('Owner.ID') as unknown as shapes.ID;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.ListPartsRequest) {
    }
  }
  public get owner(): InstanceType<typeof ListPartsOutput.OwnerResponse> {
    return new ListPartsOutput.OwnerResponse(this.scope, this.resources, this.input);
  }

  /**
   * Class of storage (STANDARD or REDUCED_REDUNDANCY) used to store the uploaded object.
   */
  public get storageClass(): shapes.StorageClass {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListParts.StorageClass'),
        outputPath: 'StorageClass',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MaxParts: this.input.maxParts,
          PartNumberMarker: this.input.partNumberMarker,
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListParts.StorageClass', props);
    return request.getResponseField('StorageClass') as unknown as shapes.StorageClass;
  }
  /**
   * Class of storage (STANDARD or REDUCED_REDUNDANCY) used to store the uploaded object.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'listParts',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('ListParts.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          MaxParts: this.input.maxParts,
          PartNumberMarker: this.input.partNumberMarker,
          UploadId: this.input.uploadId,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'ListParts.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.ListPartsRequest) {
  }
}

/**
 * Response for PutObject.
 */
export class PutObjectOutput {
  /**
   * If the expiration is configured for the object (see PutBucketLifecycleConfiguration), the response includes this header. It includes the expiry-date and rule-id key-value pairs that provide information about object expiration. The value of the rule-id is URL encoded.
   */
  public get expiration(): shapes.Expiration {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('PutObject.Expiration'),
        outputPath: 'Expiration',
        parameters: {
          ACL: this.input.acl,
          Body: this.input.body,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'PutObject.Expiration', props);
    return request.getResponseField('Expiration') as unknown as shapes.Expiration;
  }
  /**
   * Entity tag for the uploaded object.
   */
  public get eTag(): shapes.ETag {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('PutObject.ETag'),
        outputPath: 'ETag',
        parameters: {
          ACL: this.input.acl,
          Body: this.input.body,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'PutObject.ETag', props);
    return request.getResponseField('ETag') as unknown as shapes.ETag;
  }
  /**
   * If you specified server-side encryption either with an AWS KMS customer master key (CMK) or Amazon S3-managed encryption key in your PUT request, the response includes this header. It confirms the encryption algorithm that Amazon S3 used to encrypt the object.
   */
  public get serverSideEncryption(): shapes.ServerSideEncryption {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('PutObject.ServerSideEncryption'),
        outputPath: 'ServerSideEncryption',
        parameters: {
          ACL: this.input.acl,
          Body: this.input.body,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'PutObject.ServerSideEncryption', props);
    return request.getResponseField('ServerSideEncryption') as unknown as shapes.ServerSideEncryption;
  }
  /**
   * Version of the object.
   */
  public get versionId(): shapes.ObjectVersionId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('PutObject.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          ACL: this.input.acl,
          Body: this.input.body,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'PutObject.VersionId', props);
    return request.getResponseField('VersionId') as unknown as shapes.ObjectVersionId;
  }
  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
   */
  public get sseCustomerAlgorithm(): shapes.SSECustomerAlgorithm {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('PutObject.SSECustomerAlgorithm'),
        outputPath: 'SSECustomerAlgorithm',
        parameters: {
          ACL: this.input.acl,
          Body: this.input.body,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'PutObject.SSECustomerAlgorithm', props);
    return request.getResponseField('SSECustomerAlgorithm') as unknown as shapes.SSECustomerAlgorithm;
  }
  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round-trip message integrity verification of the customer-provided encryption key.
   */
  public get sseCustomerKeyMd5(): shapes.SSECustomerKeyMD5 {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('PutObject.SSECustomerKeyMD5'),
        outputPath: 'SSECustomerKeyMD5',
        parameters: {
          ACL: this.input.acl,
          Body: this.input.body,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'PutObject.SSECustomerKeyMD5', props);
    return request.getResponseField('SSECustomerKeyMD5') as unknown as shapes.SSECustomerKeyMD5;
  }
  /**
   * If x-amz-server-side-encryption is present and has the value of aws:kms, this header specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key (CMK) that was used for the object.
   */
  public get ssekmsKeyId(): shapes.SSEKMSKeyId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('PutObject.SSEKMSKeyId'),
        outputPath: 'SSEKMSKeyId',
        parameters: {
          ACL: this.input.acl,
          Body: this.input.body,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'PutObject.SSEKMSKeyId', props);
    return request.getResponseField('SSEKMSKeyId') as unknown as shapes.SSEKMSKeyId;
  }
  /**
   * If present, specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.
   */
  public get ssekmsEncryptionContext(): shapes.SSEKMSEncryptionContext {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('PutObject.SSEKMSEncryptionContext'),
        outputPath: 'SSEKMSEncryptionContext',
        parameters: {
          ACL: this.input.acl,
          Body: this.input.body,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'PutObject.SSEKMSEncryptionContext', props);
    return request.getResponseField('SSEKMSEncryptionContext') as unknown as shapes.SSEKMSEncryptionContext;
  }
  /**
   * If present, specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'putObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('PutObject.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          ACL: this.input.acl,
          Body: this.input.body,
          Bucket: this.input.bucket,
          CacheControl: this.input.cacheControl,
          ContentDisposition: this.input.contentDisposition,
          ContentEncoding: this.input.contentEncoding,
          ContentLanguage: this.input.contentLanguage,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          ContentType: this.input.contentType,
          Expires: this.input.expires,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          Metadata: this.input.metadata,
          ServerSideEncryption: this.input.serverSideEncryption,
          StorageClass: this.input.storageClass,
          WebsiteRedirectLocation: this.input.websiteRedirectLocation,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          SSEKMSKeyId: this.input.ssekmsKeyId,
          SSEKMSEncryptionContext: this.input.ssekmsEncryptionContext,
          RequestPayer: this.input.requestPayer,
          Tagging: this.input.tagging,
          ObjectLockMode: this.input.objectLockMode,
          ObjectLockRetainUntilDate: this.input.objectLockRetainUntilDate,
          ObjectLockLegalHoldStatus: this.input.objectLockLegalHoldStatus,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'PutObject.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.PutObjectRequest) {
  }
}

/**
 * Response for PutObjectAcl.
 */
export class PutObjectAclOutput {
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'putObjectAcl',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('PutObjectAcl.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          ACL: this.input.acl,
          AccessControlPolicy: {
            Grants: this.input.accessControlPolicy?.grants,
            Owner: {
              DisplayName: this.input.accessControlPolicy?.owner?.displayName,
              ID: this.input.accessControlPolicy?.owner?.id,
            },
          },
          Bucket: this.input.bucket,
          ContentMD5: this.input.contentMd5,
          GrantFullControl: this.input.grantFullControl,
          GrantRead: this.input.grantRead,
          GrantReadACP: this.input.grantReadAcp,
          GrantWrite: this.input.grantWrite,
          GrantWriteACP: this.input.grantWriteAcp,
          Key: this.input.key,
          RequestPayer: this.input.requestPayer,
          VersionId: this.input.versionId,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'PutObjectAcl.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.PutObjectAclRequest) {
  }
}

/**
 * Response for PutObjectLegalHold.
 */
export class PutObjectLegalHoldOutput {
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'putObjectLegalHold',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('PutObjectLegalHold.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          LegalHold: {
            Status: this.input.legalHold?.status,
          },
          RequestPayer: this.input.requestPayer,
          VersionId: this.input.versionId,
          ContentMD5: this.input.contentMd5,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'PutObjectLegalHold.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.PutObjectLegalHoldRequest) {
  }
}

/**
 * Response for PutObjectLockConfiguration.
 */
export class PutObjectLockConfigurationOutput {
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'putObjectLockConfiguration',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('PutObjectLockConfiguration.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Bucket: this.input.bucket,
          ObjectLockConfiguration: {
            ObjectLockEnabled: this.input.objectLockConfiguration?.objectLockEnabled,
            Rule: {
              DefaultRetention: {
                Mode: this.input.objectLockConfiguration?.rule?.defaultRetention?.mode,
                Days: this.input.objectLockConfiguration?.rule?.defaultRetention?.days,
                Years: this.input.objectLockConfiguration?.rule?.defaultRetention?.years,
              },
            },
          },
          RequestPayer: this.input.requestPayer,
          Token: this.input.token,
          ContentMD5: this.input.contentMd5,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'PutObjectLockConfiguration.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.PutObjectLockConfigurationRequest) {
  }
}

/**
 * Response for PutObjectRetention.
 */
export class PutObjectRetentionOutput {
  /**
   * The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'putObjectRetention',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('PutObjectRetention.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          Retention: {
            Mode: this.input.retention?.mode,
            RetainUntilDate: this.input.retention?.retainUntilDate,
          },
          RequestPayer: this.input.requestPayer,
          VersionId: this.input.versionId,
          BypassGovernanceRetention: this.input.bypassGovernanceRetention,
          ContentMD5: this.input.contentMd5,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'PutObjectRetention.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.PutObjectRetentionRequest) {
  }
}

/**
 * Response for PutObjectTagging.
 */
export class PutObjectTaggingOutput {
  /**
   * The versionId of the object the tag-set was added to.
   */
  public get versionId(): shapes.ObjectVersionId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'putObjectTagging',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('PutObjectTagging.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          ContentMD5: this.input.contentMd5,
          Tagging: {
            TagSet: this.input.tagging.tagSet,
          },
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'PutObjectTagging.VersionId', props);
    return request.getResponseField('VersionId') as unknown as shapes.ObjectVersionId;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.PutObjectTaggingRequest) {
  }
}

/**
 * Response for RestoreObject.
 */
export class RestoreObjectOutput {
  /**
   * Specifies whether periodic QueryProgress frames should be sent. Valid values: TRUE, FALSE. Default value: FALSE.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'restoreObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('RestoreObject.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          RestoreRequest: {
            Days: this.input.restoreRequest?.days,
            GlacierJobParameters: {
              Tier: this.input.restoreRequest?.glacierJobParameters?.tier,
            },
            Type: this.input.restoreRequest?.type,
            Tier: this.input.restoreRequest?.tier,
            Description: this.input.restoreRequest?.description,
            SelectParameters: {
              InputSerialization: {
                CSV: {
                  FileHeaderInfo: this.input.restoreRequest?.selectParameters?.inputSerialization.csv?.fileHeaderInfo,
                  Comments: this.input.restoreRequest?.selectParameters?.inputSerialization.csv?.comments,
                  QuoteEscapeCharacter: this.input.restoreRequest?.selectParameters?.inputSerialization.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.input.restoreRequest?.selectParameters?.inputSerialization.csv?.recordDelimiter,
                  FieldDelimiter: this.input.restoreRequest?.selectParameters?.inputSerialization.csv?.fieldDelimiter,
                  QuoteCharacter: this.input.restoreRequest?.selectParameters?.inputSerialization.csv?.quoteCharacter,
                  AllowQuotedRecordDelimiter: this.input.restoreRequest?.selectParameters?.inputSerialization.csv?.allowQuotedRecordDelimiter,
                },
                CompressionType: this.input.restoreRequest?.selectParameters?.inputSerialization.compressionType,
                JSON: {
                  Type: this.input.restoreRequest?.selectParameters?.inputSerialization.json?.type,
                },
                Parquet: {
                },
              },
              ExpressionType: this.input.restoreRequest?.selectParameters?.expressionType,
              Expression: this.input.restoreRequest?.selectParameters?.expression,
              OutputSerialization: {
                CSV: {
                  QuoteFields: this.input.restoreRequest?.selectParameters?.outputSerialization.csv?.quoteFields,
                  QuoteEscapeCharacter: this.input.restoreRequest?.selectParameters?.outputSerialization.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.input.restoreRequest?.selectParameters?.outputSerialization.csv?.recordDelimiter,
                  FieldDelimiter: this.input.restoreRequest?.selectParameters?.outputSerialization.csv?.fieldDelimiter,
                  QuoteCharacter: this.input.restoreRequest?.selectParameters?.outputSerialization.csv?.quoteCharacter,
                },
                JSON: {
                  RecordDelimiter: this.input.restoreRequest?.selectParameters?.outputSerialization.json?.recordDelimiter,
                },
              },
            },
            OutputLocation: {
              S3: {
                BucketName: this.input.restoreRequest?.outputLocation?.s3?.bucketName,
                Prefix: this.input.restoreRequest?.outputLocation?.s3?.prefix,
                Encryption: {
                  EncryptionType: this.input.restoreRequest?.outputLocation?.s3?.encryption?.encryptionType,
                  KMSKeyId: this.input.restoreRequest?.outputLocation?.s3?.encryption?.kmsKeyId,
                  KMSContext: this.input.restoreRequest?.outputLocation?.s3?.encryption?.kmsContext,
                },
                CannedACL: this.input.restoreRequest?.outputLocation?.s3?.cannedAcl,
                AccessControlList: this.input.restoreRequest?.outputLocation?.s3?.accessControlList,
                Tagging: {
                  TagSet: this.input.restoreRequest?.outputLocation?.s3?.tagging?.tagSet,
                },
                UserMetadata: this.input.restoreRequest?.outputLocation?.s3?.userMetadata,
                StorageClass: this.input.restoreRequest?.outputLocation?.s3?.storageClass,
              },
            },
          },
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'RestoreObject.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  /**
   * Indicates the path in the provided S3 output location where Select results will be restored to.
   */
  public get restoreOutputPath(): shapes.RestoreOutputPath {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'restoreObject',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('RestoreObject.RestoreOutputPath'),
        outputPath: 'RestoreOutputPath',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          VersionId: this.input.versionId,
          RestoreRequest: {
            Days: this.input.restoreRequest?.days,
            GlacierJobParameters: {
              Tier: this.input.restoreRequest?.glacierJobParameters?.tier,
            },
            Type: this.input.restoreRequest?.type,
            Tier: this.input.restoreRequest?.tier,
            Description: this.input.restoreRequest?.description,
            SelectParameters: {
              InputSerialization: {
                CSV: {
                  FileHeaderInfo: this.input.restoreRequest?.selectParameters?.inputSerialization.csv?.fileHeaderInfo,
                  Comments: this.input.restoreRequest?.selectParameters?.inputSerialization.csv?.comments,
                  QuoteEscapeCharacter: this.input.restoreRequest?.selectParameters?.inputSerialization.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.input.restoreRequest?.selectParameters?.inputSerialization.csv?.recordDelimiter,
                  FieldDelimiter: this.input.restoreRequest?.selectParameters?.inputSerialization.csv?.fieldDelimiter,
                  QuoteCharacter: this.input.restoreRequest?.selectParameters?.inputSerialization.csv?.quoteCharacter,
                  AllowQuotedRecordDelimiter: this.input.restoreRequest?.selectParameters?.inputSerialization.csv?.allowQuotedRecordDelimiter,
                },
                CompressionType: this.input.restoreRequest?.selectParameters?.inputSerialization.compressionType,
                JSON: {
                  Type: this.input.restoreRequest?.selectParameters?.inputSerialization.json?.type,
                },
                Parquet: {
                },
              },
              ExpressionType: this.input.restoreRequest?.selectParameters?.expressionType,
              Expression: this.input.restoreRequest?.selectParameters?.expression,
              OutputSerialization: {
                CSV: {
                  QuoteFields: this.input.restoreRequest?.selectParameters?.outputSerialization.csv?.quoteFields,
                  QuoteEscapeCharacter: this.input.restoreRequest?.selectParameters?.outputSerialization.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.input.restoreRequest?.selectParameters?.outputSerialization.csv?.recordDelimiter,
                  FieldDelimiter: this.input.restoreRequest?.selectParameters?.outputSerialization.csv?.fieldDelimiter,
                  QuoteCharacter: this.input.restoreRequest?.selectParameters?.outputSerialization.csv?.quoteCharacter,
                },
                JSON: {
                  RecordDelimiter: this.input.restoreRequest?.selectParameters?.outputSerialization.json?.recordDelimiter,
                },
              },
            },
            OutputLocation: {
              S3: {
                BucketName: this.input.restoreRequest?.outputLocation?.s3?.bucketName,
                Prefix: this.input.restoreRequest?.outputLocation?.s3?.prefix,
                Encryption: {
                  EncryptionType: this.input.restoreRequest?.outputLocation?.s3?.encryption?.encryptionType,
                  KMSKeyId: this.input.restoreRequest?.outputLocation?.s3?.encryption?.kmsKeyId,
                  KMSContext: this.input.restoreRequest?.outputLocation?.s3?.encryption?.kmsContext,
                },
                CannedACL: this.input.restoreRequest?.outputLocation?.s3?.cannedAcl,
                AccessControlList: this.input.restoreRequest?.outputLocation?.s3?.accessControlList,
                Tagging: {
                  TagSet: this.input.restoreRequest?.outputLocation?.s3?.tagging?.tagSet,
                },
                UserMetadata: this.input.restoreRequest?.outputLocation?.s3?.userMetadata,
                StorageClass: this.input.restoreRequest?.outputLocation?.s3?.storageClass,
              },
            },
          },
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'RestoreObject.RestoreOutputPath', props);
    return request.getResponseField('RestoreOutputPath') as unknown as shapes.RestoreOutputPath;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.RestoreObjectRequest) {
  }
}

/**
 * Response for SelectObjectContent.
 */
export class SelectObjectContentOutput {
  /**
   * The array of results.
   */
  public get payload(): shapes.SelectObjectContentEventStream {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'selectObjectContent',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('SelectObjectContent.Payload'),
        outputPath: 'Payload',
        parameters: {
          Bucket: this.input.bucket,
          Key: this.input.key,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          Expression: this.input.expression,
          ExpressionType: this.input.expressionType,
          RequestProgress: {
            Enabled: this.input.requestProgress?.enabled,
          },
          InputSerialization: {
            CSV: {
              FileHeaderInfo: this.input.inputSerialization.csv?.fileHeaderInfo,
              Comments: this.input.inputSerialization.csv?.comments,
              QuoteEscapeCharacter: this.input.inputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.input.inputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.input.inputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.input.inputSerialization.csv?.quoteCharacter,
              AllowQuotedRecordDelimiter: this.input.inputSerialization.csv?.allowQuotedRecordDelimiter,
            },
            CompressionType: this.input.inputSerialization.compressionType,
            JSON: {
              Type: this.input.inputSerialization.json?.type,
            },
            Parquet: {
            },
          },
          OutputSerialization: {
            CSV: {
              QuoteFields: this.input.outputSerialization.csv?.quoteFields,
              QuoteEscapeCharacter: this.input.outputSerialization.csv?.quoteEscapeCharacter,
              RecordDelimiter: this.input.outputSerialization.csv?.recordDelimiter,
              FieldDelimiter: this.input.outputSerialization.csv?.fieldDelimiter,
              QuoteCharacter: this.input.outputSerialization.csv?.quoteCharacter,
            },
            JSON: {
              RecordDelimiter: this.input.outputSerialization.json?.recordDelimiter,
            },
          },
          ScanRange: {
            Start: this.input.scanRange?.start,
            End: this.input.scanRange?.end,
          },
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'SelectObjectContent.Payload', props);
    return request.getResponseField('Payload') as unknown as shapes.SelectObjectContentEventStream;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.SelectObjectContentRequest) {
  }
}

/**
 * Response for UploadPart.
 */
export class UploadPartOutput {
  /**
   * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
   */
  public get serverSideEncryption(): shapes.ServerSideEncryption {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'uploadPart',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('UploadPart.ServerSideEncryption'),
        outputPath: 'ServerSideEncryption',
        parameters: {
          Body: this.input.body,
          Bucket: this.input.bucket,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'UploadPart.ServerSideEncryption', props);
    return request.getResponseField('ServerSideEncryption') as unknown as shapes.ServerSideEncryption;
  }
  /**
   * Entity tag for the uploaded object.
   */
  public get eTag(): shapes.ETag {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'uploadPart',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('UploadPart.ETag'),
        outputPath: 'ETag',
        parameters: {
          Body: this.input.body,
          Bucket: this.input.bucket,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'UploadPart.ETag', props);
    return request.getResponseField('ETag') as unknown as shapes.ETag;
  }
  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
   */
  public get sseCustomerAlgorithm(): shapes.SSECustomerAlgorithm {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'uploadPart',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('UploadPart.SSECustomerAlgorithm'),
        outputPath: 'SSECustomerAlgorithm',
        parameters: {
          Body: this.input.body,
          Bucket: this.input.bucket,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'UploadPart.SSECustomerAlgorithm', props);
    return request.getResponseField('SSECustomerAlgorithm') as unknown as shapes.SSECustomerAlgorithm;
  }
  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round-trip message integrity verification of the customer-provided encryption key.
   */
  public get sseCustomerKeyMd5(): shapes.SSECustomerKeyMD5 {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'uploadPart',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('UploadPart.SSECustomerKeyMD5'),
        outputPath: 'SSECustomerKeyMD5',
        parameters: {
          Body: this.input.body,
          Bucket: this.input.bucket,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'UploadPart.SSECustomerKeyMD5', props);
    return request.getResponseField('SSECustomerKeyMD5') as unknown as shapes.SSECustomerKeyMD5;
  }
  /**
   * If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key (CMK) was used for the object.
   */
  public get ssekmsKeyId(): shapes.SSEKMSKeyId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'uploadPart',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('UploadPart.SSEKMSKeyId'),
        outputPath: 'SSEKMSKeyId',
        parameters: {
          Body: this.input.body,
          Bucket: this.input.bucket,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'UploadPart.SSEKMSKeyId', props);
    return request.getResponseField('SSEKMSKeyId') as unknown as shapes.SSEKMSKeyId;
  }
  /**
   * If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key (CMK) was used for the object.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'uploadPart',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('UploadPart.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Body: this.input.body,
          Bucket: this.input.bucket,
          ContentLength: this.input.contentLength,
          ContentMD5: this.input.contentMd5,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'UploadPart.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.UploadPartRequest) {
  }
}

/**
 * Response for UploadPartCopy.
 */
export class UploadPartCopyOutput {
  /**
   * The version of the source object that was copied, if you have enabled versioning on the source bucket.
   */
  public get copySourceVersionId(): shapes.CopySourceVersionId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'uploadPartCopy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('UploadPartCopy.CopySourceVersionId'),
        outputPath: 'CopySourceVersionId',
        parameters: {
          Bucket: this.input.bucket,
          CopySource: this.input.copySource,
          CopySourceIfMatch: this.input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
          CopySourceRange: this.input.copySourceRange,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'UploadPartCopy.CopySourceVersionId', props);
    return request.getResponseField('CopySourceVersionId') as unknown as shapes.CopySourceVersionId;
  }
  /**
   * Response for UploadPartCopyOutput.CopyPartResult
   */
  static CopyPartResultResponse = class {
    /**
     * Entity tag of the object.
     */
    public get eTag(): shapes.ETag {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'uploadPartCopy',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('UploadPartCopy.CopyPartResult.ETag'),
          outputPath: 'CopyPartResult.ETag',
          parameters: {
            Bucket: this.input.bucket,
            CopySource: this.input.copySource,
            CopySourceIfMatch: this.input.copySourceIfMatch,
            CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
            CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
            CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
            CopySourceRange: this.input.copySourceRange,
            Key: this.input.key,
            PartNumber: this.input.partNumber,
            UploadId: this.input.uploadId,
            SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
            SSECustomerKey: this.input.sseCustomerKey,
            SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
            CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
            CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
            CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
            RequestPayer: this.input.requestPayer,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
            ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'UploadPartCopy.CopyPartResult.ETag', props);
      return request.getResponseField('CopyPartResult.ETag') as unknown as shapes.ETag;
    }
    /**
     * Date and time at which the object was uploaded.
     */
    public get lastModified(): shapes.LastModified {
      const props: cr.AwsCustomResourceProps = {
        onUpdate: {
          action: 'uploadPartCopy',
          service: 'S3',
          physicalResourceId: cr.PhysicalResourceId.of('UploadPartCopy.CopyPartResult.LastModified'),
          outputPath: 'CopyPartResult.LastModified',
          parameters: {
            Bucket: this.input.bucket,
            CopySource: this.input.copySource,
            CopySourceIfMatch: this.input.copySourceIfMatch,
            CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
            CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
            CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
            CopySourceRange: this.input.copySourceRange,
            Key: this.input.key,
            PartNumber: this.input.partNumber,
            UploadId: this.input.uploadId,
            SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
            SSECustomerKey: this.input.sseCustomerKey,
            SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
            CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
            CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
            CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
            RequestPayer: this.input.requestPayer,
            ExpectedBucketOwner: this.input.expectedBucketOwner,
            ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
          },
        },
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
      };
      const request = new cr.AwsCustomResource(this.scope, 'UploadPartCopy.CopyPartResult.LastModified', props);
      return request.getResponseField('CopyPartResult.LastModified') as unknown as shapes.LastModified;
    }
    constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.UploadPartCopyRequest) {
    }
  }
  public get copyPartResult(): InstanceType<typeof UploadPartCopyOutput.CopyPartResultResponse> {
    return new UploadPartCopyOutput.CopyPartResultResponse(this.scope, this.resources, this.input);
  }

  /**
   * The server-side encryption algorithm used when storing this object in Amazon S3 (for example, AES256, aws:kms).
   */
  public get serverSideEncryption(): shapes.ServerSideEncryption {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'uploadPartCopy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('UploadPartCopy.ServerSideEncryption'),
        outputPath: 'ServerSideEncryption',
        parameters: {
          Bucket: this.input.bucket,
          CopySource: this.input.copySource,
          CopySourceIfMatch: this.input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
          CopySourceRange: this.input.copySourceRange,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'UploadPartCopy.ServerSideEncryption', props);
    return request.getResponseField('ServerSideEncryption') as unknown as shapes.ServerSideEncryption;
  }
  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.
   */
  public get sseCustomerAlgorithm(): shapes.SSECustomerAlgorithm {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'uploadPartCopy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('UploadPartCopy.SSECustomerAlgorithm'),
        outputPath: 'SSECustomerAlgorithm',
        parameters: {
          Bucket: this.input.bucket,
          CopySource: this.input.copySource,
          CopySourceIfMatch: this.input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
          CopySourceRange: this.input.copySourceRange,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'UploadPartCopy.SSECustomerAlgorithm', props);
    return request.getResponseField('SSECustomerAlgorithm') as unknown as shapes.SSECustomerAlgorithm;
  }
  /**
   * If server-side encryption with a customer-provided encryption key was requested, the response will include this header to provide round-trip message integrity verification of the customer-provided encryption key.
   */
  public get sseCustomerKeyMd5(): shapes.SSECustomerKeyMD5 {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'uploadPartCopy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('UploadPartCopy.SSECustomerKeyMD5'),
        outputPath: 'SSECustomerKeyMD5',
        parameters: {
          Bucket: this.input.bucket,
          CopySource: this.input.copySource,
          CopySourceIfMatch: this.input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
          CopySourceRange: this.input.copySourceRange,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'UploadPartCopy.SSECustomerKeyMD5', props);
    return request.getResponseField('SSECustomerKeyMD5') as unknown as shapes.SSECustomerKeyMD5;
  }
  /**
   * If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key (CMK) that was used for the object.
   */
  public get ssekmsKeyId(): shapes.SSEKMSKeyId {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'uploadPartCopy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('UploadPartCopy.SSEKMSKeyId'),
        outputPath: 'SSEKMSKeyId',
        parameters: {
          Bucket: this.input.bucket,
          CopySource: this.input.copySource,
          CopySourceIfMatch: this.input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
          CopySourceRange: this.input.copySourceRange,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'UploadPartCopy.SSEKMSKeyId', props);
    return request.getResponseField('SSEKMSKeyId') as unknown as shapes.SSEKMSKeyId;
  }
  /**
   * If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key (CMK) that was used for the object.
   */
  public get requestCharged(): shapes.RequestCharged {
    const props: cr.AwsCustomResourceProps = {
      onUpdate: {
        action: 'uploadPartCopy',
        service: 'S3',
        physicalResourceId: cr.PhysicalResourceId.of('UploadPartCopy.RequestCharged'),
        outputPath: 'RequestCharged',
        parameters: {
          Bucket: this.input.bucket,
          CopySource: this.input.copySource,
          CopySourceIfMatch: this.input.copySourceIfMatch,
          CopySourceIfModifiedSince: this.input.copySourceIfModifiedSince,
          CopySourceIfNoneMatch: this.input.copySourceIfNoneMatch,
          CopySourceIfUnmodifiedSince: this.input.copySourceIfUnmodifiedSince,
          CopySourceRange: this.input.copySourceRange,
          Key: this.input.key,
          PartNumber: this.input.partNumber,
          UploadId: this.input.uploadId,
          SSECustomerAlgorithm: this.input.sseCustomerAlgorithm,
          SSECustomerKey: this.input.sseCustomerKey,
          SSECustomerKeyMD5: this.input.sseCustomerKeyMd5,
          CopySourceSSECustomerAlgorithm: this.input.copySourceSseCustomerAlgorithm,
          CopySourceSSECustomerKey: this.input.copySourceSseCustomerKey,
          CopySourceSSECustomerKeyMD5: this.input.copySourceSseCustomerKeyMd5,
          RequestPayer: this.input.requestPayer,
          ExpectedBucketOwner: this.input.expectedBucketOwner,
          ExpectedSourceBucketOwner: this.input.expectedSourceBucketOwner,
        },
      },
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.resources }),
    };
    const request = new cr.AwsCustomResource(this.scope, 'UploadPartCopy.RequestCharged', props);
    return request.getResponseField('RequestCharged') as unknown as shapes.RequestCharged;
  }
  constructor(public scope: cdk.Construct, public readonly resources: string[], public readonly input: shapes.UploadPartCopyRequest) {
  }
}

